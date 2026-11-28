"""Exact rank certification using finite-field minors and rational upper bounds."""
from pathlib import Path
import argparse
import json
import numpy as np
import sympy as S
from defect_block import block_form, reference_bases
from defect_geometry import classify
from physical_near_block import E,read_sparse

def mod(A,p):
    Y=np.zeros(A.shape,dtype=np.int64)
    for (i,j),x in A.todok().items():
        a,b=x.as_numer_denom()
        Y[i,j]=int(a)*pow(int(b),-1,p)%p
    return Y

def eliminate(A,p,rows=False):
    """Gaussian elimination on a small prime field, no floating arithmetic."""
    A=A.copy()
    src=np.arange(A.shape[0])
    k=0
    for j in range(A.shape[1]):
        hits=np.flatnonzero(A[k:,j])
        if not len(hits):continue
        i=k+int(hits[0])
        A[[k,i]]=A[[i,k]]
        src[[k,i]]=src[[i,k]]
        A[k,j:]=(A[k,j:]*pow(int(A[k,j]),-1,p))%p
        c=A[k+1:,j]
        work=np.flatnonzero(c)+k+1
        A[work,j:]=(A[work,j:]-A[work,j,None]*A[k,None,j:])%p
        k+=1
    return (k,src[:k].tolist()) if rows else k

def ref_forms():
    near,det=classify()
    G,D,B6,B9=reference_bases(near,det)
    V=block_form(G,D,B6,B9)
    n=len(G);m=len(D)
    GG=S.SparseMatrix(n,n,{(i,j):sum(v*G[j].get(k,0) for k,v in Gi.items())
                           for i,Gi in enumerate(G) for j in range(n)})
    F=-V[:n,:]-E*GG
    C=V[n:,:]
    return F,C

def test(path):
    F,C=ref_forms()
    obj=json.loads(Path(path).read_bytes())
    K,J,L,D=[read_sparse(obj[k]) for k in ("K_minus_E_form","w_J_form","L_form","w_D_form")]
    n,m,h=F.rows,L.rows,K.rows
    assert (n,m,h)==(270,348,129) and L.cols==h and C.shape==(m,n)
    Z=S.SparseMatrix.zeros
    stack=(-F).row_join(C.T).row_join(Z(n,h))
    stack=stack.col_join(C.row_join(Z(m,m)).row_join(L))
    stack=stack.col_join(Z(h,n).row_join(L.T).row_join(K))
    rhs=Z(n,1).col_join(D).col_join(J)
    for p in (1009,1013):
        cb=mod(C.row_join(L),p)
        rank,jj=eliminate(cb,p,rows=True)
        assert rank==201==eliminate(mod(C.row_join(L).row_join(D),p),p)
        select=list(range(n))+[n+j for j in jj]+list(range(n+m,n+m+h))
        H=mod(stack.extract(select,select),p)
        v=mod(rhs.extract(select,[0]),p)
        r=eliminate(H,p)
        r2=eliminate(np.concatenate((H,v),axis=1),p)
        rk=eliminate(mod(K,p),p)
        print(p,"K-E",rk,"quotient",len(select),r,r2,flush=True)
        if r==len(select):
            print("rank certificate: symmetric block is onto the full 600-dimensional constrained system quotient",flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser()
    p.add_argument("near_artifact")
    a=p.parse_args();test(a.near_artifact)
