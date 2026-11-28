"""Independent exact face and support checks for the reconstructed six-loop polynomial."""
import argparse
import hashlib
import json
from pathlib import Path
import sympy as S

PIN="dd22b182d55a1a01c21dda984cedcd476363de0478413852ab97e89097aa73b7"
POS="611f6294f54cf2535fbddbbcc4eb5dea74736ab92ce3232c24c1a5fa9f71bafb"
NEG="7758f8a0ff27ebb1cd26ec22f392a4b29ea66cca30d1e6e8aabf8074b9975be9"


def read(p,pin):
    a=Path(p).read_bytes()
    assert hashlib.sha256(a).hexdigest()==pin
    return json.loads(a)


def run(glob,pos,neg):
    Q=read(glob,PIN)["q9"]
    P=read(pos,POS)
    N=read(neg,NEG)
    l,s,u,x,y,z=S.symbols("l s u x y z")
    def inv(p,v1,v2,v3):
        return sum(S.Rational(a)*v1**i*v2**j*v3**k for i,j,k,a in p)
    def face(t):
        return sum(l**(11-j)*inv(p,s+t,u+t*s,t*u) for j,p in enumerate(Q))
    def v(terms):
        return sum(S.Rational(a)*s**i*u**j for i,j,a in terms)
    pplus=sum(l**(9-k)*v(p) for k,p in enumerate(P["q9_plus"]))
    pminus=sum(l**(2-k)*v(p) for k,p in enumerate(P["q9_minus"]))
    assert S.expand(face(2)-pplus*pminus)==0
    for row in N["thresholds"]:
        level=S.sympify(row["energy"],locals={"s":s})
        assert S.expand(face(-2).subs(l,level)-v(row["parts"]))==0
    for j,p in enumerate(Q):
        coeff=S.Poly(inv(p,x+y+z,x*y+x*z+y*z,x*y*z),x,y,z)
        assert all(max(b)<=min(j,8) and sum(b)<=11 for b in coeff.monoms())
    print("Exact positive and negative face checks; all support bounds confirmed.")


if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("global_q");p.add_argument("positive");p.add_argument("negative")
    a=p.parse_args();run(a.global_q,a.positive,a.negative)
