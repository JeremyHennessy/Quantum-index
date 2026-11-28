"""Exact polynomial support of off-flat cross-elementary repeated-cosine candidates."""
from pathlib import Path
from math import prod
import argparse
import hashlib
import json
import sympy as S

PIN="42da7a91cb2421f081e93966fe275e12849aeccd920581c787fdb9f475469df9"
x,y,s,t,l=S.symbols("x y s t l")
C=705600*l*l+16800*l*x+4200*l*y+26880*l+100*x*x+220*x-45*y+31
LF=-(5*y+1)/840
f0=-S.Rational(5,336)
F=C.subs(l,f0)

def lookup(path):
    raw=Path(path).read_bytes()
    assert hashlib.sha256(raw).hexdigest()==PIN
    data=json.loads(raw)
    G=S.Poly.from_dict({(i,j,k):S.Rational(v) for i,j,k,v in data["G"]},s,t,l,domain=S.QQ).as_expr()
    return S.Poly(G.subs({s:2*x+y,t:x*x+2*x*y},simultaneous=True),l,domain=S.QQ[x,y])

def p(xv):
    return S.Poly(xv,x,y,domain=S.QQ)

def support(path):
    V=lookup(path)
    cv=S.Poly(C,l,domain=S.QQ[x,y]); M=cv.monic()
    D=V.rem(M)
    assert D.degree()==1
    A,B=[p(a) for a in D.all_coeffs()]
    assert S.expand((V-M*V.quo(M)-D).as_expr())==0
    L=p(V.eval(LF))
    CC=p((p(M.nth(0))*A*A-p(M.nth(1))*A*B+B*B).as_expr())
    assert not A.is_zero and not B.is_zero and not CC.is_zero and not L.is_zero
    return A,B,L,CC

def pack(P):
    return [[int(i),int(j),str(v)] for (i,j),v in P.terms()]

def main(args):
    A,B,L,CC=support(args.input)
    out={}
    for label,P0 in (("A",A),("B",B),("L",L),("Cnorm",CC)):
        P=P0
        c,fs=P.factor_list()
        assert c*prod(z**k for z,k in fs)==P
        print(label,"bidegree",P.degree_list(),"terms",len(P.terms()),"factors",
              [(f.degree_list(),k) for f,k in fs],flush=True)
        print("  ",[(str(f.as_expr()),k) for f,k in fs if len(f.terms())<=15],flush=True)
        out[label]={"full":pack(P),"factor_scale":str(c),
                    "factors":[[int(k),pack(z)] for z,k in fs]}
    print("A/B gcd",A.gcd(B).degree_list(),"L/Cnorm gcd",L.gcd(CC).degree_list(),flush=True)
    payload={"schema":"repeated-cross-elementary-support-v1","input_sha256":PIN,"polynomials":out}
    raw=(json.dumps(payload,sort_keys=True,separators=(',',':'))+"\n").encode()
    with Path(args.output).open('xb') as f:f.write(raw)
    print("artifact",len(raw),hashlib.sha256(raw).hexdigest(),flush=True)
if __name__=="__main__":
    q=argparse.ArgumentParser();q.add_argument("input");q.add_argument("output")
    main(q.parse_args())
