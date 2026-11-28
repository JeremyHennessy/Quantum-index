"""Replay exact simple and triple patch anchors for the Laurent-pole argument."""
import argparse
import hashlib
import json
from pathlib import Path

import sympy as S

SHA="824fc786a8bf480b47b946f457869d2e332c1dd08f0a8c7726e4b3dead07cc0f"

def run(path):
    f=Path(path).read_bytes()
    assert hashlib.sha256(f).hexdigest()==SHA
    a,b=json.loads(f)[-2:]
    assert [(c["axis"],c["transverse"]) for c in (a,b)]==[(2,["8","12"]),(2,["1","2"])]
    t=S.Symbol("t")
    aF,aR,bF,bR=[S.Poly.from_list(list(map(int,p["coefficients"])),t,domain=S.ZZ)
               for c in (a,b) for p in c["factors"]]
    assert [(f["degree"],f["multiplicity"]) for c in (a,b) for f in c["factors"]]==[(4,3),(52,1)]*2
    r0,r1=S.Rational(64457770,10**7),S.Rational(64457771,10**7)
    f0,f1=S.Rational(499,3355),S.Rational(47,316)
    assert r0<r1 and f0<f1
    assert aF.count_roots(r0,r1)==0 and aR.count_roots(r0,r1)==1
    assert bF.count_roots(f0,f1)==1 and bR.count_roots(f0,f1)==0
    assert all(P.gcd(P.diff()).degree()==0 for P in (aF,aR,bF,bR))
    assert aF.gcd(aR).degree()==bF.gcd(bR).degree()==0
    assert aR.eval(r0)*aR.eval(r1)<0 and bF.eval(f0)*bF.eval(f1)<0
    assert aR.eval(r0) and aR.eval(r1) and bF.eval(f0) and bF.eval(f1)
    print("simple R patch anchor:",a["transverse"],r0,r1,flush=True)
    print("triple F patch anchor:",b["transverse"],f0,f1,flush=True)
    print("both patch roots transverse and do not meet the other factor",flush=True)
if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("six_axis_file")
    run(p.parse_args().six_axis_file)
