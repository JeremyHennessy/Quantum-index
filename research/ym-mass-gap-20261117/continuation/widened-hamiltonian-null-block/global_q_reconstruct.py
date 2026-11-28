"""Bounded exact global six-loop characteristic reconstruction from rational Laurent values."""
import argparse
from fractions import Fraction
from itertools import combinations_with_replacement, product
import hashlib
import json
from pathlib import Path

import sympy as S
from sympy.polys.matrices import DomainMatrix
from sympy.polys.rings import ring

from crit_rank import setup, L

QQ=S.QQ
R,a,b,c=ring("x y z",QQ)
e1=a+b+c; e2=a*b+a*c+b*c; e3=a*b*c
l=S.Symbol("l")
FLAT=S.Poly((l-L)**3,l,domain=QQ)


def evaluate(D,z):
    M=[[QQ.zero]*14 for _ in range(14)]
    w0,w1,w2=z
    for (i,j,k),A in D.items():
        w=w0**i*w1**j*w2**k
        for (h,g),v in A:
            M[h][g]+=v*w
    p=S.Poly.from_list(DomainMatrix(M,(14,14),QQ).charpoly(),l,domain=QQ)
    q,rem=p.div(FLAT)
    assert rem.is_zero and q.degree()==11 and q.LC()==1
    return tuple(QQ.convert(v) for v in q.all_coeffs())


def tensor_coeff(values, xs, k):
    n=k+1
    V=DomainMatrix([[x**i for i in range(n)] for x in xs[:n]],(n,n),QQ)
    inv=V.inv().to_list()
    axis1={(a,j,h):sum(inv[a][i]*values[tuple(sorted((i,j,h)))][k] for i in range(n))
           for a,j,h in product(range(n),repeat=3)}
    axis2={(a,b,h):sum(inv[b][j]*axis1[a,j,h] for j in range(n))
           for a,b,h in product(range(n),repeat=3)}
    z={(a,b,c):sum(inv[c][h]*axis2[a,b,h] for h in range(n))
       for a,b,c in product(range(n),repeat=3)}
    assert all(q==z[b,a,c]==z[a,c,b] for (a,b,c),q in z.items())
    return R.from_dict({t:q for t,q in z.items() if q})


def invariant_form(p):
    f=p.copy(); ans={}
    while f:
        i,j,k=f.LM
        assert i>=j>=k
        v=f.LC
        ex=i-j,j-k,k
        assert ex not in ans
        ans[ex]=v
        f-=v*e1**ex[0]*e2**ex[1]*e3**ex[2]
    assert sum(q*e1**i*e2**j*e3**k for (i,j,k),q in ans.items())==p
    return ans


def run(output):
    _,D0=setup()
    D={z:[(ij,QQ.convert(w)) for ij,w in A.todok().items()] for z,A in D0.items()}
    zs=[QQ(i) for i in range(1,13)]
    xs=[q+1/q for q in zs]
    values={ijk:evaluate(D,tuple(zs[i] for i in ijk))
            for ijk in combinations_with_replacement(range(12),3)}
    assert len(values)==364
    polys=[]
    for k in range(12):
        p=tensor_coeff(values,xs,k)
        d=invariant_form(p)
        polys.append(d)
        print("coefficient",k,"X terms",len(p),"invariant terms",len(d),flush=True)

    more=((Fraction(2,3),Fraction(3,5),Fraction(5,7)), (Fraction(-2),Fraction(3),Fraction(5)),
          (Fraction(-1),Fraction(11,3),Fraction(37,13)), (Fraction(13),Fraction(2),Fraction(17)),
          (Fraction(-1),)*3, (Fraction(4,5),Fraction(31,13),Fraction(-31,13)),
          (Fraction(-5,13),Fraction(17,19),Fraction(5,7)))
    for row in more:
        z=tuple(QQ.convert(t) for t in row)
        xx,yy,zz=[v+1/v for v in z]
        a,b,c=xx+yy+zz,xx*yy+yy*zz+zz*xx,xx*yy*zz
        q=tuple(sum(q*a**i*b**j*c**k for (i,j,k),q in p.items()) for p in polys)
        assert q==evaluate(D,z)
    record={"schema":"global-null-six-loop-q-v1",
            "basis":"e1=sum Xi,e2=sum XiXj,e3=prod Xi; Xi=zi+zi^-1",
            "grid_sizes":[12,12,12],"unordered_exact_samples":len(values),
            "additional_exact_samples":len(more),"flat_energy":"-1/42",
            "q9":[[[i,j,k,str(v)] for (i,j,k),v in sorted(p.items(),reverse=True)] for p in polys]}
    out=(json.dumps(record,sort_keys=True,separators=(",",":"))+"\n").encode()
    with Path(output).open("xb") as f:
        f.write(out)
    print("artifact",len(out),hashlib.sha256(out).hexdigest(),flush=True)


if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("output")
    run(p.parse_args().output)
