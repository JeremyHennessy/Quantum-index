"""Reconstruct and verify exact null witnesses for the constrained 600×600 system."""
import argparse
from fractions import Fraction
import math
import numpy as np
import sympy as S
from constrained_rank import mod, eliminate, ref_forms, read_sparse
import json
from pathlib import Path

def kernel(A,p):
    A=A.copy();n,m=A.shape
    k=0; piv=[]
    for j in range(m):
        h=np.flatnonzero(A[k:,j])
        if not len(h):continue
        i=int(h[0])+k
        A[[k,i]]=A[[i,k]]
        A[k,j:]=(A[k,j:]*pow(int(A[k,j]),-1,p))%p
        work=np.flatnonzero(A[k+1:,j])+k+1
        A[work,j:]=(A[work,j:]-A[work,j,None]*A[k,None,j:])%p
        piv.append(j)
        k+=1
    non=[j for j in range(m) if j not in set(piv)]
    out=np.zeros((m,len(non)),dtype=np.int64)
    out[non,list(range(len(non)))]=1
    for i,j in reversed(list(enumerate(piv))):
        out[j,:]=(-A[i,j+1:]@out[j+1:,:])%p
    return non,out

def rr(x,m):
    """Classical symmetric-bound rational reconstruction of coprime numerator / denom."""
    big=math.isqrt(m//2)
    a,b=m,x; c,d=0,1
    while b>big:
        u=a//b
        a,b = b,a-u*b
        c,d = d,c-u*d
    if not d or abs(d)>big or math.gcd(b,d)!=1 or (b-d*x)%m:
        return None
    return Fraction(b,d)

def construct(file):
    F,C=ref_forms()
    a=json.loads(Path(file).read_bytes())
    K,J,L,D=[read_sparse(a[k]) for k in ("K_minus_E_form","w_J_form","L_form","w_D_form")]
    n,m,h=F.rows,L.rows,K.rows
    assert (n,m,h)==(270,348,129) and L.cols==h and C.shape==(m,n)
    Z=S.SparseMatrix.zeros
    left=C.row_join(L)
    rank,jj=eliminate(mod(left,1009),1009,rows=True)
    assert rank==201==eliminate(mod(left.row_join(D),1009),1009)
    C,L,D=[M.extract(jj,range(M.cols)) for M in (C,L,D)]
    m=len(jj)
    H=(-F).row_join(C.T).row_join(Z(n,h))
    H=H.col_join(C.row_join(Z(m,m)).row_join(L))
    H=H.col_join(Z(h,n).row_join(L.T).row_join(K))
    rhs=Z(n,1).col_join(D).col_join(J)
    assert H==H.T and H.shape==(600,600) and rhs.shape==(600,1)
    return S.SparseMatrix(H),S.SparseMatrix(rhs),jj

def verify(file,output=None):
    H,V,detached_rows=construct(file)
    seen=0
    r=None;M=1; controls=None
    for p0 in list(S.primerange(1009,2200)):
        p=int(p0)
        try: A=mod(H,p)
        except ValueError:continue
        free,W=kernel(A,p)
        if controls is None:
            assert p==1009 and len(free)==6
            assert not np.any((A@W)%p)
            controls=free
            r=W.astype(object);M=p;seen=1
            print("free columns",free,"first sparsity",np.count_nonzero(W,axis=0).tolist(),flush=True)
        else:
            if free!=controls:continue
            r=r+M*(((W-r)%p)*pow(M,-1,p)%p)
            M*=p;seen+=1
        if seen not in (1,2,4,8,16,24,32,48,64,80,96,128,160):continue
        vals=[rr(int(a),M) for a in r.flat]
        if any(x is None for x in vals):
            print("not reconstructed",seen,M.bit_length(),sum(x is None for x in vals),flush=True)
            continue
        Y=S.SparseMatrix(*r.shape,[S.Rational(q.numerator,q.denominator) for q in vals])
        exact=H*Y
        Yv=Y.T*V
        print("checkpoint",seen,M.bit_length(),"null residual nonzero",len(exact.todok()),
              "rhs residual nonzero",len(Yv.todok()),flush=True)
        if exact.is_zero_matrix is not True:continue
        assert Y.extract(controls,range(len(controls)))==S.eye(len(controls))
        assert H.rows-len(controls)==594
        print("CERTIFIED exact rank=594; augmented rank",594+(not Yv.is_zero_matrix),flush=True)
        if output:
            def sparse(A):
                return [[int(i),int(j),str(a.as_numer_denom()[0]),str(a.as_numer_denom()[1])] for (i,j),a in sorted(A.todok().items())]
            data={"schema":"near-constrained-null-v1","detached_row_indices":detached_rows,
                  "free_column_indices":controls,"null_vectors":sparse(Y),"rhs_pairing":sparse(Yv)}
            from hashlib import sha256
            raw=(json.dumps(data,separators=(',',':'),sort_keys=True)+"\n").encode()
            with Path(output).open('xb') as f:f.write(raw)
            print(len(raw),sha256(raw).hexdigest(),flush=True)
        return
    raise SystemExit("no certified rational nullspace witness within prime budget")

if __name__=="__main__":
    p=argparse.ArgumentParser()
    p.add_argument('near')
    p.add_argument('--output')
    a=p.parse_args()
    verify(a.near,a.output)
