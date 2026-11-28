"""Exact pairwise crossings within the negative reference plane."""
from itertools import combinations
from pathlib import Path
import json
import hashlib
import argparse

import sympy as S

s,u=S.symbols("s u")
PIN="7758f8a0ff27ebb1cd26ec22f392a4b29ea66cca30d1e6e8aabf8074b9975be9"
names=("A+","A-","B+","B-")
ZERO=S.Poly(0,s,domain=S.QQ);ONE=S.Poly(1,s,domain=S.QQ)
def sp(x):return S.Poly(x,s,domain=S.QQ)
def up(x):return S.Poly(x,u)
def source(path):
    r=Path(path).read_bytes()
    assert hashlib.sha256(r).hexdigest()==PIN
    rows=json.loads(r)["thresholds"]
    return {n:sum(S.Rational(a)*s**i*u**j for i,j,a in rows[k//2]["factors"][k%2]["terms"]) for k,n in enumerate(names)}

def trim(p):
    while p and p[-1].is_zero:p.pop()
    return p

def gcd_u(A,B,F):
    def coeffs(P):
        p=up(P)
        return trim([sp(p.nth(i)).rem(F) for i in range(p.degree()+1)])
    def pair_gcd(a,b):
        a=a[:];b=b[:]
        while b:
            k=S.invert(b[-1],F)
            while a and len(a)>=len(b):
                d=len(a)-len(b)
                c=(a[-1]*k).rem(F)
                for j,t in enumerate(b):a[d+j]=(a[d+j]-c*t).rem(F)
                trim(a)
            a,b=b,a
        return a
    r=pair_gcd(coeffs(A),coeffs(B))
    k=S.invert(r[-1],F)
    return [(c*k).rem(F) for c in r]

def bounds(P,I):
    a,b=I
    lo=hi=S.S.Zero
    for k in P.all_coeffs():
        t=(a*lo,a*hi,b*lo,b*hi)
        lo,hi=min(t)+k,max(t)+k
    return lo,hi

def zero_slices(P,F,V):
    out=[]
    for name,A in P.items():
        q=up(A)
        vals=ZERO
        for k in reversed(range(q.degree()+1)):
            vals=(vals*V+sp(q.nth(k))).rem(F)
        if vals.is_zero:out.append(name)
    return out

def isolate_s(F):
    if F.degree()==1:
        s0=-F.nth(0)/F.nth(1)
        return [(s0,s0)] if -4<=s0<=4 else []
    return [I for I,m in F.intervals(inf=-4,sup=4,eps=S.Rational(1,10**9))]

def linear_u(F,I,g,bank):
    Q=-g[0]
    checks=[(Q-2*sp(s)+4).rem(F),(Q+2*sp(s)+4).rem(F),(sp(s*s/4)-Q).rem(F)]
    for k in (10,16,24,36,50,75):
        if I[0]!=I[1]:I=F.refine_root(*I,eps=S.Rational(1,10**k))
        signs=[];undecided=False
        for C in checks:
            if C.is_zero:signs.append(0);continue
            l,r=bounds(C,I)
            if l>0:signs.append(1)
            elif r<0:signs.append(-1)
            else:undecided=True;break
        ur=bounds(Q,I)
        if not undecided and ur[1]-ur[0]<S.Rational(1,10**8):break
    else:raise ValueError("sign or u interval unresolved")
    names=zero_slices(bank,F,Q)
    return record(F,I,Q,ur,signs,names)

def record(F,I,q,UI,signs,nm,uF=None):
    return {"s_factor":[str(v) for v in F.all_coeffs()],
            "s_interval":[str(v) for v in I],
            "shared_u_polynomial_in_s":[str(v) for v in q.all_coeffs()] if q is not None else None,
            "u_factor":[str(v) for v in uF.all_coeffs()] if uF is not None else None,
            "u_interval":[str(v) for v in UI],
            "domain_signs":signs,"physical":min(signs)>=0,
            "boundary":min(signs)==0 if min(signs)>=0 else None,
            "all_vanishing_factors":nm,
            "flat_locus":F.eval(S.Rational(3,10))==0}

def quadratic_u(F,I,g,bank):
    assert F.degree()==1 and I==(-4,-4)
    P=S.Poly(sum(C.eval(-4)*u**i for i,C in enumerate(g)),u,domain=S.QQ)
    assert P.eval(4)!=0
    ret=[]
    for f,m in P.factor_list()[1]:
        for U,m0 in f.intervals(eps=S.Rational(1,10**8)):
            if not (U[1]<4 or U[0]>4):raise ValueError("u branch not separated from 4")
            # inequalities at S=-4 are u+12, u-4, and 4-u; they
            # cannot all hold unless u=4, already tested absent.
            signs=[]
            for th,ori in [(-12,1),(4,1),(4,-1)]:
                x,y=U
                if x==y==th:signs.append(0)
                elif x>th:signs.append(ori)
                elif y<th:signs.append(-ori)
                else:raise ValueError("unresolved boundary indicator")
            nm=[n for n,A in bank.items() if S.Poly(A.subs(s,-4),u,domain=S.QQ).rem(f).is_zero]
            ret.append(record(F,I,None,U,signs,nm,f))
    return ret

def wireFlat(bank):
    sf=S.Rational(3,10);U=(2*sf-4,sf**2/4)
    res=[]
    for n,A in bank.items():
        v=S.Poly(A.subs(s,sf),u,domain=S.QQ)
        line=[]
        for f,m in v.factor_list()[1]:
            for J,e in f.intervals(inf=U[0],sup=U[1],eps=S.Rational(1,10**10)):
                assert e==1
                line.append({"u_factor":[str(x) for x in f.all_coeffs()],"u_interval":[str(x) for x in J],"multiplicity":int(m),
                    "interior":bool(U[0]<J[0] and J[1]<U[1])})
        assert len(line)==v.count_roots(*U)
        res.append({"name":n,"roots":line,
                    "line_factors":[[int(m),[str(x) for x in f.all_coeffs()]] for f,m in v.factor_list()[1]]})
    return res

def main(args):
    P=source(args.plane);rec=[]
    for a,b in combinations(names,2):
        r=sp(S.resultant(P[a],P[b],u))
        facts=r.factor_list()[1]
        pairs=[]
        for f,m in facts:
            Si=isolate_s(f)
            assert len(Si)==f.count_roots(-4,4)
            if not Si:continue
            g=gcd_u(P[a],P[b],f)
            for x in Si:
                if len(g)==2:pairs.append(linear_u(f,x,g,P))
                elif len(g)==3:pairs+=quadratic_u(f,x,g,P)
                else:raise ValueError("Unexpected u gcd degree "+str(len(g)-1))
        good=[l for l in pairs if l["physical"]]
        det=S.diff(P[a],s)*S.diff(P[b],u)-S.diff(P[a],u)*S.diff(P[b],s)
        for l in good:
            f=sp(S.Poly.from_list([S.Rational(v) for v in l["s_factor"]],s).as_expr())
            q=sp(S.Poly.from_list([S.Rational(v) for v in l["shared_u_polynomial_in_s"]],s).as_expr())
            assert zero_slices({"J":det},f,q)==[]
            assert not r.diff().rem(f).is_zero
            l["full_pair_resultant_s_root_simple"]=True
            l["pair_S_u_jacobian_nonzero"]=True
        print(a,b,"resultant degree",r.degree(),"real candidates",len(pairs),"physical",len(good),flush=True)
        for l in pairs:
            ai,bi=map(S.Rational,l["s_interval"]);au,bu=map(S.Rational,l["u_interval"])
            print("  ",float((ai+bi)/2),float((au+bu)/2),l["domain_signs"],l["all_vanishing_factors"],flush=True)
        rec.append({"pair":[a,b],
                    "resultant_factors":[[int(m),[str(v) for v in f.all_coeffs()]] for f,m in facts],
                    "candidates":pairs})
    w=wireFlat(P)
    print("on flat S=3/10",[(t["name"],len(t["roots"])) for t in w],flush=True)
    obj={"schema":"negative-plane-intersections-v1","boundary_test_order":["u−2S+4","u+2S+4","S²/4−u"],"pairs":rec,
         "flat_S_3_10":w}
    raw=(json.dumps(obj,sort_keys=True,separators=(',',':'))+"\n").encode()
    with Path(args.output).open('xb') as f:f.write(raw)
    print("artifact",len(raw),hashlib.sha256(raw).hexdigest(),flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("plane");p.add_argument("output")
    main(p.parse_args())
