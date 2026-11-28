"""Exact coordinate radius bound via the Laurent reference pencil."""
import argparse
import numpy as np
import sympy as S
from sympy.polys.matrices import DomainMatrix
from constrained_rank import eliminate
from reconstruct_null import kernel
from regular_sheet import build_reference

def solve_mod(A,B,p):
    A=np.hstack((A.copy(),B.copy()))
    n=A.shape[0]
    for j in range(n):
        h=np.flatnonzero(A[j:,j]);assert len(h)
        i=int(h[0])+j
        A[[i,j]]=A[[j,i]]
        A[j,:]=(A[j,:]*pow(int(A[j,j]),-1,p))%p
        c=A[:,j].copy(); c[j]=0
        A[:]=(A-c[:,None]*A[j,None,:])%p
    assert np.array_equal(A[:,:n],np.eye(n,dtype=np.int64))
    return A[:,n:]

def calc(axis=0,sign=1):
    terms,_=build_reference()
    u,v=S.symbols('u v')
    ij=tuple(k for k in range(3) if k!=axis)
    mats={a:S.zeros(42) for a in (-1,0,1)}
    for pos,ts in enumerate(terms):
        i,j=divmod(pos,42)
        for a,M in mats.items():
            M[i,j]=S.expand(sum(c*u**(z[ij[0]]+1)*v**(z[ij[1]]+1) for z,c in ts if z[axis]==a*sign))
    A,B,D=[DomainMatrix.from_Matrix(mats[k]) for k in (1,0,-1)]
    A,B,D=A.unify(B,D,fmt="dense")
    r=A.to_field().rank()
    X=A.nullspace().transpose()
    Y=A.transpose().nullspace()
    s=(Y*B*X).to_field().rank()
    print(axis,sign,"exact face/slab ranks",r,s,flush=True)
    assert (r,s)==(34,6)
    for p in (1009,1013):
        A,B,D=[np.zeros((42,42),dtype=np.int64) for _ in range(3)]
        for pos,ts in enumerate(terms):
            i,j=divmod(pos,42)
            for k,M in zip((1,0,-1),(A,B,D)):
                M[i,j]=sum(c*pow(3,z[ij[0]],p)*pow(7,z[ij[1]],p) for z,c in ts if z[axis]==k*sign)%p
        dx,X=kernel(A,p);_,Y=kernel(A.T,p)
        rr,ii=eliminate(A,p,rows=True)
        jj=[i for i in range(42) if i not in dx]
        K=(Y.T@B@X)%p
        s2=eliminate(K,p)
        _,U=kernel(K,p)
        _,V=kernel(K.T,p)
        W=solve_mod(A[np.ix_(ii,jj)],(B[ii,:]@X)%p,p)
        N=(Y.T@(D@X-B[:,jj]@W))%p
        t=eliminate((V.T@N@U)%p,p)
        print("specialization face/slab/tail index",axis,sign,p,rr,s2,t,flush=True)
        assert (rr,s2,t)==(34,6,2)
    return r,s

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("axis",type=int,default=0,nargs='?')
    p.add_argument("sign",type=int,default=1,nargs='?')
    a=p.parse_args()
    calc(a.axis,a.sign)
