"""Certified fixed-point integer interval residual, no eigensolver in verifier."""
from functools import lru_cache
from fractions import Fraction
from math import factorial,isqrt
import json,sys
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parent.parent/'three-square-exact-actions'))
import actions as ac
from sympy import simplify

ROOT=Path(__file__).resolve().parent
sys.path.insert(0,str(ROOT.parent/"three-square-residual-budget"))
from budget import band

S=10**40
DROP=10**16  # <1e-24 per dropped component
def interval(q):
    q=Fraction(q)*S
    return q.__floor__(),q.__ceil__()
def ceildiv(i,j):return -((-i)//j)
def add(x,y):return x[0]+y[0],x[1]+y[1]
def neg(x):return -x[1],-x[0]
def mul(x,y):
    a=[i*j for i in x for j in y]
    return min(a)//S,ceildiv(max(a),S)
def div(x,n):return x[0]//n,ceildiv(x[1],n)
def mag(x):return max(abs(x[0]),abs(x[1]))
def ds(x):return Fraction(x,S)
def vee(p,q,sign=1):
    out=p.copy()
    for k,x in q.items():out[k]=add(out.get(k,(0,0)),x if sign==1 else neg(x))
    return out
def scale(p,x):return {k:mul(a,x) for k,a in p.items()}
def drop(p):
    # Upper bound on the total induced vector error in l2 via l1.
    good={};err=0
    for k,x in p.items():
        m=mag(x)
        if m>DROP:good[k]=x
        else:err+=m
    return good, ds(err)
@lru_cache(None)
def action(a,f,c):
    # Each exact entry is a signed square root of a nonnegative rational.
    v=ac.element(a,f,c)
    if not v:return (0,0)
    sq=simplify(v*v)
    assert sq.is_Rational and sq>0
    z=isqrt(int(sq.p)*S*S//int(sq.q))
    b=(z,z+1)
    return b if v>0 else neg(b)
def faces(p,fs):
    out={}
    for a,x in p.items():
        for f in fs:
            for c in ac.targets(a,f):
                v=action(min(a,c),f,max(a,c))
                if v!=(0,0):
                    out[c]=add(out.get(c,(0,0)),mul(x,v))
    return out
@lru_cache(None)
def kp(a):
    if ac.weight(a)>22:return (0,0)
    grid=10**20
    lo,_=band(a)
    return interval(Fraction((lo*grid).__floor__(),grid))
def moul(p):
    # M_p action with rigorous error accounting for explicitly pruned terms.
    term,total=p.copy(),p.copy()
    err=errsum=Fraction(0)
    for n in range(1,8):
        nxt={k:div(x,200*n) for k,x in faces(term,ac.FACE).items()}
        term,lost=drop(nxt)
        err=Fraction(3,200*n)*err+lost
        errsum+=err
        total=vee(total,term)
    return total,errsum
def dot(p,q):
    ans=(0,0)
    for k in p.keys()&q.keys():ans=add(ans,mul(p[k],q[k]))
    return ans
def norm_upper(p):
    # The l2 norm upper endpoint on the same integer scale.
    return ds(isqrt(sum(mag(x)**2 for x in p.values()))+1)
def exact(v):
    return {tuple(map(int,k.split(","))):interval(w) for k,w in v.items()}

def certify(path):
    rec=json.loads(Path(path).read_text())
    v=exact(rec["vacuum"]["vector"]); u=exact(rec["perimeter"]["vector"])
    states=[]
    for name,psi,sep in [("vacuum",v,Fraction(".9")),("perimeter",u,Fraction("2.5e-6"))]:
        e=Fraction(rec[name]["energy"])
        assert Fraction(".999")<e<Fraction("1.032") if name=="vacuum" else Fraction("1.0676e-5")<e<Fraction("1.1733e-5")
        a,da=moul(psi)
        mid,lost=drop({k:mul(x,kp(k)) for k,x in a.items() if ac.weight(k)<=22})
        b,db=moul(mid)
        l,h=dot(psi,psi); nerr=max(abs(ds(l)-1),abs(ds(h)-1))
        assert nerr<Fraction("1e-12")
        residue=norm_upper(vee(b,scale(psi,interval(e)),sign=-1))
        residue+=Fraction(200,197)*(da+lost)+db+Fraction("9.60e-19")*(1+nerr)
        assert residue<Fraction("1e-12" if name=="vacuum" else "1e-16"), (name,float(residue))
        state_error=nerr+2*residue/sep
        states.append((state_error,nerr))
        print(name,"full residual <=",float(residue),"state error <=",float(state_error),flush=True)
    l,h=dot(u,faces(v,[ac.FACE[0]]))
    ((dv,ev),(du,eu))=states
    error=du*(1+ev)+dv
    # Sign depends on the chosen real phases; magnitude is invariant.
    low,high=ds(l)-error,ds(h)+error
    assert 0<low and Fraction("8e-10")<low<high<Fraction("1e-9")
    print("enclosure",float(low),float(high),flush=True)

if __name__=="__main__":
    certify(sys.argv[1] if len(sys.argv)>1 else ROOT/"vectors.json")
