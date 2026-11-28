"""Exact six-loop characteristic polynomial on elementary flat critical curves."""
from itertools import permutations,product
from math import prod
from pathlib import Path
import argparse
import hashlib
import json
from concurrent.futures import ProcessPoolExecutor
import sympy as S
from sympy.polys.matrices import DomainMatrix

from separated_channel import anchor,at_endpoint,build,e,sub
E=-S.Rational(13,336)
L=-S.Rational(1,42)
O=(0,0,0)

def transport(A,s,p):
    return anchor(frozenset(e(tuple(s[j]*u[p[j]] for j in range(3)),
                              tuple(s[j]*v[p[j]] for j in range(3))) for u,v in A))

def verify_symmetries(shapes,*stencils):
    for p,s in product(permutations(range(3)),product((-1,1),repeat=3)):
        re=[transport(A,s,p) for A in shapes]
        rp=[shapes.index(A) for A,d in re]
        for M in stencils:
            for (j,i,z),v in M.items():
                zz=tuple(s[a]*z[p[a]]+re[j][1][a]-re[i][1][a] for a in range(3))
                assert M[(rp[j],rp[i],zz)]==v
    print("verified all 48 cubic signed and reanchored stencil symmetries",len(shapes),flush=True)

def setup():
    sh,T6,B6=build(4)
    H,T9,B9=build(6)
    verify_symmetries(sh,T6,B6)
    verify_symmetries(H,T9,B9)
    N=S.Matrix.hstack(*at_endpoint(T9,22).nullspace())
    G=N.T*N
    D={}
    for pos in {z for _,_,z in B9}:
        a=S.zeros(22)
        for (i,j,z),v in B9.items():
            if z==pos:a[i,j]=v
        D[pos]=G.inv()*N.T*a*N
    return B6,D

def powers(x):
    z=(x+S.sqrt(x*x-4))/2
    return [S.cancel(x-z),S.S.One,z]

def eval_char(x,B6,D):
    y=-x
    z0,z1=powers(x),powers(y)
    # Exact biquadratic field. z2=-1 and each inverse lies in the same field.
    K=S.QQ.algebraic_field(z0[2],z1[2])
    a=[tuple(K.from_sympy(S.sympify(t)) for t in v) for v in (z0,z1,(-1,S.S.One,-1))]
    w={p:a[0][p[0]+1]*a[1][p[1]+1]*a[2][p[2]+1] for p in product((-1,0,1),repeat=3)}
    def blocks(n,st):
        M=[[K.zero]*n for _ in range(n)]
        for p,B in st.items():
            b=w[p]
            for (i,j),v in B.todok().items():
                M[i][j]+=K.convert(v)*b
        res=[K.to_sympy(c) for c in DomainMatrix(M,(n,n),K).charpoly()]
        assert all(c.is_Rational for c in res)
        return res
    mats={}
    for i,j,p in B6:
        mats.setdefault(p,S.zeros(3))[i,j]=B6[i,j,p]
    return blocks(3,mats),blocks(14,D)

if __name__=="__main__":
    p=argparse.ArgumentParser()
    p.add_argument("--sample",type=int,nargs="*",default=[0,1,2,3,4])
    a=p.parse_args()
    B6,D=setup()
    l=S.Symbol("l")
    for j in a.sample:
        x=S.Integer(j)
        y,z=eval_char(x,B6,D)
        print(x,"B6",S.factor(S.Poly.from_list(y,l).as_expr()),
              "B9",S.factor(S.Poly.from_list(z,l).as_expr()),flush=True)
