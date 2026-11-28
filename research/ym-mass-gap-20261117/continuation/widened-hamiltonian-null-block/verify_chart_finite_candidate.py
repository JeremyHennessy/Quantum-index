"""Exact finite-candidate check after the two derivative projections."""
from pathlib import Path
import argparse
import hashlib
import json
import sympy as S
from positive_branch_threshold import s,l

G_SHA="1a877cc211d85bb4fb30b0558d9e74f3eac28e7c2c88232cb4a7ff5a688252e9"
P_SHA="b7a00a645a547d1af95bea6f66240089f8eaef7f7258fdff0d7e7b0f3c8829b0"

def read(path,sha):
    b=Path(path).read_bytes()
    assert hashlib.sha256(b).hexdigest()==sha
    return json.loads(b)

def run(gfile,pfile):
    g=read(gfile,G_SHA)
    p=read(pfile,P_SHA)
    assert p["source_sha256"]==G_SHA
    assert p["common_gcd"]==[[2,["112","-3"]]]
    G=S.Poly.from_dict({(i,j):S.Rational(c) for i,j,c in g["G"]},s,l,domain=S.QQ)
    def make(k):
        ans=S.Poly(1,l,domain=S.QQ)
        for m,f in p[k]:
            ans*=S.Poly.from_list(list(map(S.Rational,f)),l,domain=S.QQ)**m
        return ans.monic()
    assert make("S_derivative").degree()==52 and make("lambda_derivative").degree()==58
    assert make("S_derivative").gcd(make("lambda_derivative"))==S.Poly((l-S.Rational(3,112))**2,l,domain=S.QQ)
    a,b,c=[S.Poly(f.as_expr().subs(l,S.Rational(3,112)),s,domain=S.QQ)
           for f in (G,G.diff(s),G.diff(l))]
    assert [x.degree() for x in (a,b,c)]==[2,1,3]
    assert a.monic()==S.Poly(157758300*s*s+5013355620*s+12825059767,s,domain=S.QQ).monic()
    assert b.monic()==S.Poly(751230*s+11936561,s,domain=S.QQ).monic()
    assert a.gcd(b).degree()==0
    print("projections only common λ=3/112; G and G_S coprime at that finite λ",flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("chart");p.add_argument("projections")
    a=p.parse_args();run(a.chart,a.projections)
