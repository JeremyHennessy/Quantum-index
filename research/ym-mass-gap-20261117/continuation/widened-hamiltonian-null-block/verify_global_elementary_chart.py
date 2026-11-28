"""Independent exact specializations and known flat-factor check."""
from pathlib import Path
import argparse,hashlib,json
import sympy as S
from global_elementary_chart import e,l

G="6cd583183646e40360f530f48307ee26cb7661981e6f7708169b5393f2891711"
F="611f6294f54cf2535fbddbbcc4eb5dea74736ab92ce3232c24c1a5fa9f71bafb"
def load(path,sha):
    z=Path(path).read_bytes()
    assert hashlib.sha256(z).hexdigest()==sha
    return json.loads(z)
def sparse(values,inds):
    return S.Poly.from_dict({tuple(row[:-1]):S.Rational(row[-1]) for row in values},*inds,domain=S.QQ).as_expr()
def run(chart,face):
    A=load(chart,G);B=load(face,F)
    p=sparse(A["p6"],(*e,l))
    U=sparse(A["e3_elimination"],(*e[:2],l))
    assert S.diff(p,e[2])==S.Rational(1,1185408) and S.expand(p.subs(e[2],U))==0
    x,u=S.symbols("s u")
    P=S.Poly.from_list([sparse(r,(x,u)) for r in B["p6"]],l).as_expr()
    assert S.expand(p.subs({e[0]:x+2,e[1]:u+2*x,e[2]:2*u})-P)==0
    N=(l-S.Rational(3,280))*(l+(x+S.Rational(11,5))/168)**2
    assert S.expand(p.subs({e[0]:x-2,e[1]:u-2*x,e[2]:-2*u})-N)==0
    assert S.expand(-4741632000*p.subs(l,-S.Rational(5,336)))==4300*e[0]**2-8000*e[1]-4000*e[2]-1380*e[0]-19573
    print("exact global p6 agrees with both fixed faces and the prior elementary flat factor",flush=True)
if __name__=="__main__":
    q=argparse.ArgumentParser();q.add_argument("chart");q.add_argument("positive")
    d=q.parse_args();run(d.chart,d.positive)
