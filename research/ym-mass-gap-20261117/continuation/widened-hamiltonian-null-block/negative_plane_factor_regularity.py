"""Exact tangential regularity of the four separate negative-face factors."""
from pathlib import Path
import hashlib
import json
import sys
import sympy as S

PIN = "7758f8a0ff27ebb1cd26ec22f392a4b29ea66cca30d1e6e8aabf8074b9975be9"
s, u = S.symbols("s u")
NAMES = ("A+", "A-", "B+", "B-")


def verify(path):
    raw = Path(path).read_bytes()
    assert hashlib.sha256(raw).hexdigest() == PIN
    data = json.loads(raw)
    fs = [sum(S.Integer(c)*s**i*u**j for i,j,c in f["terms"])
          for t in data["thresholds"] for f in t["factors"]]
    assert len(fs)==4
    boundaries = (("diag",s*s/4,-4,4),
                  ("edge+",2*s-4,0,4),("edge-",-2*s-4,-4,0))
    expected = {"A+":(2,1,1), "A-":(3,1,2), "B+":(1,0,1), "B-":(2,0,2)}
    for name,f in zip(NAMES,fs):
        fu = S.Poly(f,u)
        a = S.Poly(fu.LC(),s,domain=S.QQ)
        assert not a.count_roots(-4,4) and a.eval(-4) and a.eval(4)
        if fu.degree()==2:
            d = S.Poly(S.discriminant(f,u),s,domain=S.QQ)
            assert d.degree()=={"A-":10,"B-":4}[name]
            assert d.gcd(d.diff()).degree()==0
            print(name,"square-free discriminant degree",d.degree(),flush=True)
        else:
            assert fu.degree()==1
        counts=[]
        for label,b,lo,hi in boundaries:
            p = S.Poly(f.subs(u,b),s,domain=S.QQ)
            assert p.eval(lo) and p.eval(hi)
            g = p.gcd(p.diff())
            assert g.count_roots(lo,hi)==0
            counts.append(p.count_roots(lo,hi))
        assert tuple(counts)==expected[name]
        print(name,"simple physical diagonal/edge+/edge- roots",*counts,flush=True)


if __name__=="__main__":
    verify(sys.argv[1])
