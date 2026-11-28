"""Inertia difference determines signed simple slopes in the residual crossing groups."""
from pathlib import Path
from collections import Counter
import argparse
import hashlib,json

import sympy as S

from residual_symmetry_lines import x,lam,E,L,lo,hi
from residual_line_multiplicities import from_coeffs,EXPECTED

def spectrum(C,at,k):
    A=S.Poly.from_list([c.eval(at) for c in C],lam,domain=S.QQ)
    intervals=A.intervals(eps=S.Rational(1,10**k))
    assert sum(d for _,d in intervals)==A.degree()
    return intervals

def below_count(P,Q,at):
    for k in (8,12,16,24,32,48,64):
        A=spectrum(P,at,k)
        B=spectrum(Q,at,k)
        N=0;uncertain=False
        for (a,b),d in A:
            for (s,t),e in B:
                if b+t<E:N+=d*e
                elif a+s>E:pass
                else:uncertain=True
        if not uncertain:return N
    raise ValueError("could not separate all exact pointwise eigenvalue sums")

def run(polys,roots,output):
    inp=Path(polys).read_bytes()
    assert hashlib.sha256(inp).hexdigest()==EXPECTED
    zs=json.loads(inp)
    raw_roots=Path(roots).read_bytes()
    assert hashlib.sha256(raw_roots).hexdigest()=="b04bea6dff6d02a13d15f503ee79cc3c0aff2112829182e7b33f64a1c7e5b598"
    order=json.loads(raw_roots)
    assert len(order)==len(zs)==6
    result=[]
    for p,r in zip(zs,order):
        assert p["name"]==r["name"]
        P,Q=[[from_coeffs(i) for i in p[k]] for k in ("p6","q9")]
        R=from_coeffs(p["residual"]); signs=Counter()
        F=S.Poly.from_list([c.as_expr() for c in P],lam).eval(E-L)
        F=S.Poly(F,x,domain=S.QQ)
        rec={"name":p["name"],"roots":[]}
        for f in r["factors"]:
            m=f["order"];mu=f["energy_multiplicity"]
            for a,b in f["intervals"]:
                a,b=map(S.Rational,(a,b))
                if a==b:
                    d=S.Rational(1,10**8)
                    a,b=a-d,b+d
                assert lo<a<b<hi and R.eval(a) and R.eval(b)
                assert R.count_roots(a,b)==1 and F.count_roots(a,b)==0
                s,t=below_count(P,Q,a),below_count(P,Q,b)
                df=s-t
                if m==mu:
                    assert abs(df)<=mu and (mu+df)%2==0
                    nplus=(mu+df)//2;nminus=(mu-df)//2
                    out=[nplus,nminus]
                    signs[tuple(out)]+=1
                else:out=None;signs[('higher',)]+=1
                rec["roots"].append({"factor":f["factor"],"interval":[str(a),str(b)],
                     "determinant_order":m,"energy_multiplicity":mu,"flat_factor_also_zero":f["flat_factor_also_zero"],
                     "below":[s,t],"line_slope_positive_negative":out})
        print(p["name"],"exact line slope signature counts",dict(signs),flush=True)
        result.append(rec)
    b=(json.dumps(result,sort_keys=True,separators=(',',':'))+"\n").encode()
    with Path(output).open('xb') as f:f.write(b)
    print("asset",len(b),hashlib.sha256(b).hexdigest(),flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("polys")
    p.add_argument("roots")
    p.add_argument("output")
    a=p.parse_args();run(a.polys,a.roots,a.output)
