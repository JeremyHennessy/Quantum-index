"""Exact cubic and 9+2 reduced characteristic pencils on Xi=+2."""
from concurrent.futures import ProcessPoolExecutor
from collections import defaultdict
from itertools import product
from pathlib import Path
import argparse
import hashlib
import json

import sympy as S
from sympy.polys.matrices import DomainMatrix

from s0_stencils import transport,verify_symmetries,E,L
from separated_channel import build,at_endpoint

x,y,s,u,l=S.symbols("x y s u l")

def stencils(n):
    A,T,B=build(n)
    verify_symmetries(A,T,B)
    width=len(A)
    N=S.eye(width) if n==4 else S.Matrix.hstack(*at_endpoint(T,width).nullspace())
    G=N.T*N
    R=S.zeros(width)
    for j,aa in enumerate(A):
        q,delta=transport(aa,(1,1,-1),(0,1,2))
        R[A.index(q),j]=1 # Bloch phase (+1)^delta_i
    I=G.inv()*N.T*R*N
    assert N*I==R*N and I*I==S.eye(I.rows)
    pl=(I-S.eye(I.rows)).nullspace();mi=(I+S.eye(I.rows)).nullspace()
    m=len(pl);q=len(mi)
    assert (m,q)==((3,0) if n==4 else (12,2))
    J=S.Matrix.hstack(*(pl+mi));Jinv=J.inv()
    ff=defaultdict(lambda:S.zeros(width))
    for (i,j,z),v in B.items():ff[z[:2]][i,j]+=v
    blocks=[{},{}]
    for z,M in ff.items():
        H=G.inv()*N.T*M*N
        assert I*H==H*I
        M=Jinv*H*J
        assert M[:m,m:].is_zero_matrix and M[m:,:m].is_zero_matrix
        blocks[0][z]=M[:m,:m]
        if q:blocks[1][z]=M[m:,m:]
    if n==6:
        for D,f in zip(blocks,(3,0)):
            A=S.zeros(next(iter(D.values())).rows)
            for (i,j),M in D.items():A+=M*S.Integer(2)**i*S.Integer(3)**j
            p=A.charpoly(l).as_poly();q,r=p.div(S.Poly((l-L)**f,l,domain=S.QQ))
            assert r.is_zero and q.eval(L)!=0
    return blocks

def sample(a,b,bs):
    a,b=S.Rational(a),S.Rational(b)
    z=(a+S.sqrt(a*a-4))/2;w=(b+S.sqrt(b*b-4))/2
    K=S.QQ.algebraic_field(z,w)
    zn,wn=K.from_sympy(z),K.from_sympy(w)
    zp=(K.from_sympy(a)-zn,K.one,zn)
    wp=(K.from_sympy(b)-wn,K.one,wn)
    ret=[]
    for D,d,f in zip(bs,(3,12,2),(0,3,0)):
        M=[[K.zero]*d for _ in range(d)]
        for (i,j),A in D.items():
            c=zp[i+1]*wp[j+1]
            for (i,j),v in A.todok().items():
                M[i][j]+=K.from_sympy(v)*c
        c=[K.to_sympy(z) for z in DomainMatrix(M,(d,d),K).charpoly()]
        assert all(k.is_Rational for k in c)
        p=S.Poly.from_list(c,l,domain=S.QQ)
        p,r=p.div(S.Poly((l-L)**f,l,domain=S.QQ))
        assert r.is_zero
        ret.append(p.all_coeffs())
    return a,b,ret

def get_coeff(pc,j,tab):
    row=[]
    for n in range(j+1):
        p=S.Poly(S.interpolate([(i,tab[min(n,i),max(n,i)][pc][j]) for i in range(j+1)],x),x,domain=S.QQ)
        row.append([p.nth(k) for k in range(j+1)])
    p=S.Poly(S.expand(sum(x**k*S.interpolate([(i,row[i][k]) for i in range(j+1)],y) for k in range(j+1))),x,y,domain=S.QQ)
    assert p.degree(x)<=j and p.degree(y)<=j
    f,rem,ss=S.symmetrize(p.as_expr(),[x,y],formal=True)
    assert rem==0
    q=S.Poly(f.subs({t:(s,u)[n] for n,(t,_) in enumerate(ss)}),s,u,domain=S.QQ)
    assert S.expand(q.as_expr().subs({s:x+y,u:x*y})-p.as_expr())==0
    return p,q

def export(P):
    return [[int(a),int(b),str(k)] for (a,b),k in P.terms()]

def reconstruct(workers):
    H,K=stencils(4),stencils(6)
    A=(H[0],K[0],K[1])
    coords=[(i,j) for i in range(10) for j in range(i,10)]
    extra=[(-2,-2),(-2,2),(-S.Rational(1,3),S.Rational(7,5)),
          (S.Rational(1,7),S.Rational(1,7)),(-S.Rational(3,2),-S.Rational(5,4)),
          (S.Rational(-11,20),S.Rational(3,7)),(S.Rational(27,10),-S.Rational(2,3))]
    if workers>1:
        with ProcessPoolExecutor(workers) as pool:
            fs=[pool.submit(sample,i,j,A) for i,j in coords+extra]
            allv=[f.result() for f in fs]
    else:allv=[sample(i,j,A) for i,j in coords+extra]
    tab={(i,j):r for i,j,r in allv[:len(coords)]}
    P=[]
    for q,n in enumerate((3,9,2)):
        keep=[]
        for pc in range(n+1):
            d,v=get_coeff(q,pc,tab)
            assert all(d.eval({x:i,y:j})==r[q][pc] for i,j,r in allv)
            keep.append(v)
        P.append(S.Poly.from_list([d.as_expr() for d in keep],l))
    return P

def run(args):
    A,B,C=reconstruct(args.workers)
    r=S.Poly(S.resultant(A.as_expr(),C.as_expr().subs(l,E-l),l),s,u,domain=S.QQ)
    r1=r.factor_list()
    d=S.Poly(B.as_expr().subs(l,E-l),l,domain=S.QQ[s,u]).rem(S.Poly(A.as_expr(),l,domain=S.QQ[s,u]))
    print("p6",S.factor(A.as_expr()),flush=True)
    print("Qminus",S.factor(C.as_expr()),flush=True)
    print("3/9/2 characteristic coefficients term counts",[[len(S.Poly(c,s,u).terms()) for c in a.all_coeffs()] for a in (A,B,C)],flush=True)
    print("minus resultant",r.degree(s),r.degree(u),len(r.terms()),
          "factors",[(q.degree(s),q.degree(u),k) for q,k in r1[1]],flush=True)
    print("plus remainder degree",d.degree(),"coefficient terms",[len(S.Poly(a,s,u).terms()) for a in d.all_coeffs()],flush=True)
    b={"schema":"positive-face-pencils-v1","reflection_dimensions":[[3,0],[12,2]],"flat_orders":[3,0],
       "p6":[export(S.Poly(k,s,u,domain=S.QQ)) for k in A.all_coeffs()],
       "q9_plus":[export(S.Poly(k,s,u,domain=S.QQ)) for k in B.all_coeffs()],
       "q9_minus":[export(S.Poly(k,s,u,domain=S.QQ)) for k in C.all_coeffs()],
       "plus_remainder":[export(S.Poly(k,s,u,domain=S.QQ)) for k in d.all_coeffs()],
       "minus_resultant":export(r),"minus_scale":str(r1[0]),
       "minus_factors":[[int(k),export(q)] for q,k in r1[1]]}
    raw=(json.dumps(b,sort_keys=True,separators=(',',':'))+"\n").encode()
    with Path(args.output).open('xb') as f:f.write(raw)
    print("artifact",len(raw),hashlib.sha256(raw).hexdigest(),flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("--workers",type=int,default=6)
    p.add_argument("--output",required=True)
    run(p.parse_args())
