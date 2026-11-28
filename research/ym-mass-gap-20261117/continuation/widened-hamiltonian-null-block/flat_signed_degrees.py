"""Exact Laurent signed degrees for the shifted elementary-loop determinant."""
import numpy as np
import sympy as S
from sympy.polys.matrices import DomainMatrix
from flat_structured import E,L
from constrained_rank import eliminate
from reconstruct_null import kernel
from separated_channel import build

def calc(axis,sign):
    _,_,B=build(4)
    tt={k:S.Rational(v)*6720 for k,v in B.items()}
    for i in range(3):
        k=i,i,(0,0,0)
        tt[k]+=6720*(L-E)
    assert all(v.q==1 for v in tt.values())
    u,v=S.symbols("u v")
    j1,j2=(j for j in range(3) if j!=axis)
    A=S.zeros(3)
    for (i,j,z),c in tt.items():
        if z[axis]==sign:A[i,j]+=c*u**(z[j1]+1)*v**(z[j2]+1)
    r=DomainMatrix.from_Matrix(A).to_field().rank()
    assert r==2
    for p in (1009,1013):
        A0=np.zeros((3,3),dtype=np.int64); A1=A0.copy()
        for (i,j,z),c in tt.items():
            if z[axis]==sign:
                A1[i,j]=(A1[i,j]+int(c)*pow(3,z[j1],p)*pow(7,z[j2],p))%p
            if z[axis]==0:
                A0[i,j]=(A0[i,j]+int(c)*pow(3,z[j1],p)*pow(7,z[j2],p))%p
        _,X=kernel(A1,p);_,Y=kernel(A1.T,p)
        assert eliminate(A1,p)==2 and eliminate((Y.T@A0@X)%p,p)==1
    print(axis,sign,"flat determinant signed Laurent degree 2",flush=True)

if __name__=="__main__":
    for axis in range(3):
        for sign in (-1,1):calc(axis,sign)
