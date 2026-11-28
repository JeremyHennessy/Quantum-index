"""Exact elimination of positive-face u via a local elementary-energy chart."""
from pathlib import Path
from math import prod
import argparse
import hashlib
import json

import sympy as S
s,u,l=S.symbols("s u l")
E=-S.Rational(13,336)
PIN="611f6294f54cf2535fbddbbcc4eb5dea74736ab92ce3232c24c1a5fa9f71bafb"

def digest(raw):
    return hashlib.sha256(raw).hexdigest()
def ppoly(data):
    return S.Poly.from_dict({(a,b):S.Rational(c) for a,b,c in data},s,u,domain=S.QQ).as_expr()
def dense(p):
    return [[int(i),int(j),str(a)] for (i,j),a in p.terms()]

def main(args):
    raw=Path(args.input).read_bytes()
    assert digest(raw)==PIN
    o=json.loads(raw)
    A,Q=[S.Poly.from_list([ppoly(k) for k in o[key]],l,domain=S.QQ[s,u]).as_expr()
         for key in ("p6","q9_plus")]
    du=S.diff(A,u)
    assert du==S.Rational(1,296352)
    U=S.expand(-A.subs(u,0)/du)
    assert S.expand(A.subs(u,U))==0
    G=S.Poly(Q.subs({l:E-l,u:U},simultaneous=True),s,l,domain=S.QQ)
    scale,fs=G.factor_list()
    assert G==scale*prod(p**k for p,k in fs)
    L=S.Poly(S.Poly(G.as_expr(),l).LC(),s,domain=S.QQ)
    print("U",U,flush=True)
    print("G degrees/terms",G.degree(s),G.degree(l),len(G.terms()),
          "factors",[(p.degree(s),p.degree(l),m) for p,m in fs],flush=True)
    print("G leading coefficient in lambda",S.factor(L.as_expr()),flush=True)
    print("scales",scale,flush=True)
    h={"schema":"positive-face-elementary-chart-v1","source_sha256":PIN,"U":dense(S.Poly(U,s,l,domain=S.QQ)),
       "G":dense(G),"scale":str(scale),"factors":[[int(m),dense(p)] for p,m in fs],
       "leading_lambda":[str(c) for c in L.all_coeffs()]}
    b=(json.dumps(h,sort_keys=True,separators=(',',':'))+"\n").encode()
    with Path(args.output).open('xb') as f:f.write(b)
    print("artifact",len(b),digest(b),flush=True)
if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("input");p.add_argument("output")
    a=p.parse_args();main(a)
