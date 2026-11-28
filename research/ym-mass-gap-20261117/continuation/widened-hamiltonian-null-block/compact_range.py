"""Actual finite-support range of the physical odd quadratic operator."""
from collections import defaultdict
from fractions import Fraction as Q
from pathlib import Path
from itertools import product
import argparse
import hashlib
import json

import numpy as np
import sympy as S

from constrained_rank import eliminate,mod,read_sparse
from defect_block import reference_bases,materialize
from defect_geometry import classify,detached,GI,H,O,P
from physical_near_block import E
from reconstruct_null import kernel,rr
from separated_channel import add,at_endpoint,build,sub
from verify_null_certificate import NEAR_SHA

def commute(A):
    _,T,_=build(6)
    null=at_endpoint(T,len(H)).nullspace()
    U=S.Matrix.hstack(*null)
    J=U*(U.T*U).inv()*U.T
    assert J*J==J and J.T==J and len(null)==14
    assert all(not v or GI[H[j]]==GI[H[i]] for (j,i),v in J.todok().items())
    a=defaultdict(list)
    for (j,i,z),v in A.items():a[i].append((j,z,v))
    return a,J

def propagator(B6,B9):
    a=defaultdict(list)
    for (j,i,z),v in B6.items():a[i].append((j,z,v))
    b,J=commute(B9)
    proj=defaultdict(list)
    for (j,i),v in J.todok().items():proj[i].append((j,Q(v)))
    def move(U):
        out=defaultdict(Q)
        for ((i,g,r),h),c in U.items():
            assert detached(i,g,r)
            out[(i,g,r),h]-=c*Q(E)
            for j,z,v in a[i]:
                t=(j,g,sub(r,z))
                if detached(*t):out[t,h]+=c*v
            for j,z,v in b[h]:
                t=(i,GI[H[j]],add(r,z))
                if detached(*t):
                    for k,w in proj[j]:out[t,k]+=c*v*w
        return {k:v for k,v in out.items() if v}
    return move

def basis_data():
    N,D=classify()
    G,Ds,B6,B9=reference_bases(N,D)
    return N,D,G,Ds,B6,B9

def assemble(args):
    V=Path(args.near).read_bytes()
    assert hashlib.sha256(V).hexdigest()==NEAR_SHA
    K,wJ,L,wD=[read_sparse(json.loads(V)[k]) for k in ("K_minus_E_form","w_J_form","L_form","w_D_form")]
    N,D,G,Ds,B6,B9=basis_data()
    assert L.rows==len(Ds)==348 and K.rows==L.cols==129
    s=json.loads(Path(args.cross).read_bytes())
    assert hashlib.sha256(Path(args.cross).read_bytes()).hexdigest()=="97bfb46357273f147b7849e804087848d80147cb6fc836258a3819bb52ff378f"
    crossD=[{((i,g,tuple(r)),h):Q(int(a),int(b)) for i,g,r,h,a,b in vv} for vv in s["detached_basis"]]
    assert Ds==crossD
    raw_w=Path(args.source).read_bytes()
    _,wd=materialize(raw_w,N)
    assert all(k in D for k,h in wd) and wD==S.Matrix([sum(v*wd.get(k,0) for k,v in d.items()) for d in Ds])

    move=propagator(B6,B9)
    out=[move(d) for d in Ds]
    exterior=sorted({k for v in out for k in v if k[0] not in D})
    Z=S.SparseMatrix
    inside=Z(348,348,{(i,j):x for i,D_i in enumerate(Ds) for j,v in enumerate(out)
                      if (x:=sum(c*v.get(k,0) for k,c in D_i.items()))})
    assert inside==inside.T
    lookup={k:i for i,k in enumerate(exterior)}
    exterior_form=Z(len(exterior),len(Ds),{(lookup[k],j):x for j,v in enumerate(out)
                                          for k,x in v.items() if k in lookup})
    print("exterior raw rows",len(exterior),"groups",len({k for k,h in exterior}),
          "max relative abs coordinate",max(abs(z) for (_,_,r),_ in exterior for z in r),"nnz",len(exterior_form.todok()),flush=True)
    print("interior detached form",inside.shape,"nnz",len(inside.todok()),flush=True)
    W=inside.row_join(L).col_join(L.T.row_join(K)).col_join(exterior_form.row_join(Z.zeros(len(exterior),129)))
    U=wD.col_join(wJ).col_join(Z.zeros(len(exterior),1))
    print("actual range",W.shape,flush=True)
    return W,U,exterior

def main(args):
    W,U,e=assemble(args)
    for p in (1009,1013):
        M=mod(W,p);v=mod(U,p)
        a,b=eliminate(M,p),eliminate(np.concatenate((M,v),axis=1),p)
        print("modular ranks",p,a,b,flush=True)
        if (a,b)==(W.cols,W.cols+1):
            print("CERTIFIED: no D+J-supported compact solution",flush=True)
    if args.output:
        from physical_cross_block import rat
        def sparse(A):return {"shape":list(A.shape),"entries":[[int(i),int(j),*rat(v)] for (i,j),v in sorted(A.todok().items())]}
        with Path(args.output).open("xb") as f:
            f.write((json.dumps({"matrix":sparse(W),"rhs":sparse(U),"exterior":e},sort_keys=True,separators=(',',':'))+'\n').encode())

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("--near",default="near-result.json")
    p.add_argument("--cross",default="exact-cross-reviewed.json")
    p.add_argument("--source",default="full-vector.json")
    p.add_argument("--output")
    main(p.parse_args())
