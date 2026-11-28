"""Exact read-only checks of the normalized negative-plane line artifact."""
from pathlib import Path
import argparse,hashlib,json
import sympy as S

SHA="13fb891262c6938a8161b071c906ad6ed7a0a20878db6216bac2d1b457371260"

def run(path):
    raw=Path(path).read_bytes()
    assert hashlib.sha256(raw).hexdigest()==SHA
    t=json.loads(raw)
    q,k=S.symbols("q k")
    def poly(xs):
        return S.Poly.from_list(list(map(S.Rational,xs)),q,domain=S.QQ)
    p=[poly(x) for x in t["q9_coefficients"]]
    Q=S.Poly.from_list([x.as_expr() for x in p],k)
    a,b=map(S.Rational,("-43/1680","-83/1680"))
    A,B=[S.Poly(Q.eval(ee),q,domain=S.QQ) for ee in (a,b)]
    assert A==poly(t["thresholds"][0]["poly"])
    assert B==poly(t["thresholds"][1]["poly"])
    x=S.Rational(9004321,5499025)
    lo,hi=S.Rational(99201,60583),S.Rational(70423,43008)
    assert 0<lo<x<hi<4
    assert A.count_roots(0,4)==1 and B.count_roots(0,4)==0
    assert A.count_roots(lo,hi)==1 and B.count_roots(lo,hi)==0
    assert all(P.eval(v) for P in (A,B) for v in (0,lo,hi,4))
    assert A.eval(x)==0 and A.diff().eval(x)!=0
    assert Q.diff().eval(a).subs(q,x)!=0 and B.eval(x)!=0
    assert A.gcd(B).degree()==0
    below=[]
    for u0 in (lo,hi):
        f=S.Poly.from_list([z.eval(u0) for z in p],k,domain=S.QQ)
        below.append(sum(m*(2*P.count_roots(-S.oo,a)+P.count_roots(-S.oo,b))
                         for P,m in f.sqf_list()[1]))
    assert below==[11,9]
    print("certified physical u root",x,"inertia 11→9; simple underlying Q and definite doublet")
if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("artifact")
    run(p.parse_args().artifact)
