"""Radius-bounded compact (H-E) consistency with reflection-reduced clear rows."""
from collections import defaultdict
from fractions import Fraction as Q
from functools import cache
from itertools import product
from pathlib import Path
import argparse
import hashlib
import json

import sympy as S

from compact_range import basis_data,propagator
from constrained_rank import read_sparse
from defect_geometry import GI,GROUPS,H,REF,detached,reflected,rad
from defect_block import materialize
from folded_cubic import reflection
from separated_channel import at_endpoint,build
from verify_null_certificate import NEAR_SHA

@cache
def rep(a):
    return min(reflected(*a,s) for s in REF)

def extend(D,N,R):
    raw={a for i,g,v in product(range(3),range(7),product(range(-R,R+1),repeat=3))
         if detached(*(a:=(i,g,v)))}
    eligible={a for a in raw if all(reflected(*a,s) in raw for s in REF)}
    assert D<=eligible
    ext=eligible-D
    keys=sorted({rep(a) for a in ext})
    h,T,_=build(6)
    assert tuple(h)==H
    cube=[v for v in at_endpoint(T,22).nullspace()
          if all(not v[i] for i,a in enumerate(H) if GI[a]!=0)]
    assert len(cube)==8
    perms={s:[H.index(reflection(h,s)[0]) for h in H] for s in REF}
    @cache
    def fixbasis(fix):
        X=[]
        for v in cube:
            w=S.zeros(22,1)
            for s in fix:
                for i,j in enumerate(perms[s]):w[j]+=v[i]
            if S.Matrix.hstack(*X,w).rank()>len(X):X.append(w)
        return X
    out=[]
    for a in keys:
        fix=tuple(s for s in REF if reflected(*a,s)==a)
        X=(fixbasis(fix) if a[1]==0 else [S.eye(22)[:,H.index(GROUPS[a[1]][0])]])
        for v in X:
            w=defaultdict(Q)
            for s in REF:
                k=reflected(*a,s)
                for i,j in enumerate(perms[s]):
                    if v[i]:w[k,j]+=Q(v[i])
            out.append({k:c for k,c in w.items() if c})
    print("radius",R,"eligible detached groups",len(eligible),"additional raw group orbits",len(keys),
          "additional invariant directions",len(out),flush=True)
    return out

def assemble(args):
    raw=Path(args.near).read_bytes()
    assert hashlib.sha256(raw).hexdigest()==NEAR_SHA
    V=json.loads(raw)
    K,wJ,L,wD=[read_sparse(V[k]) for k in ("K_minus_E_form","w_J_form","L_form","w_D_form")]
    N,D,G,Ds,B6,B9=basis_data()
    cross_raw=Path(args.cross).read_bytes()
    assert hashlib.sha256(cross_raw).hexdigest()=="97bfb46357273f147b7849e804087848d80147cb6fc836258a3819bb52ff378f"
    assert tuple(Ds)==tuple({((i,g,tuple(r)),h):Q(int(a),int(b)) for i,g,r,h,a,b in vv}
                            for vv in json.loads(cross_raw)["detached_basis"])
    _,wd=materialize(Path(args.source).read_bytes(),N)
    assert all(a in D for a,h in wd)
    assert wD==S.Matrix([sum(v*wd.get(k,0) for k,v in a.items()) for a in Ds])
    radii=(max(rad(r) for _,_,r in N),max(rad(r) for _,_,r in D),max(rad(a[2]) for a,h in wd))
    assert radii==(3,4,3)
    print("radius pins: ghosts, near output candidate groups, actual w_D",*radii,flush=True)
    X=Ds+extend(D,N,args.radius)
    move=propagator(B6,B9)
    lookup=defaultdict(list)
    for i,v in enumerate(Ds):
        for k,c in v.items():lookup[k].append((i,c))
    exrows={}
    clearstart=len(Ds)+K.rows
    maxcoord=0
    cols=[]
    for j,x in enumerate(X):
        d=defaultdict(Q)
        for k,v in move(x).items():
            a,h=k
            if a in D:
                for i,c in lookup[k]: d[i]+=v*c
            elif a==rep(a):
                i=exrows.setdefault(k,clearstart+len(exrows))
                d[i]+=v
                maxcoord=max(maxcoord,*map(abs,a[2]))
        cols.append({i:c for i,c in d.items() if c})
        if j%1000==999:print("processed detached columns",j+1,len(X),flush=True)
    Ncols=len(X)+K.rows
    LM=L.todok();KM=K.todok()
    for (i,j),c in LM.items():cols[i][len(Ds)+j]=Q(c)
    for i in range(K.rows):
        nv={j:Q(c) for (j,ii),c in LM.items() if ii==i}
        nv.update({len(Ds)+j:Q(c) for (j,ii),c in KM.items() if ii==i})
        cols.append(nv)
    w={int(i):Q(c) for (i,j),c in wD.col_join(wJ).todok().items()}
    cols.append(w)
    assert len(cols)==Ncols+1
    nr=clearstart+len(exrows)
    nnz=sum(map(len,cols))
    print("full actual range",nr,Ncols,"clear rows",len(exrows),"max reach",maxcoord,"includes RHS nnz",nnz,flush=True)
    out=Path(args.output)
    for p in (1009,1013):
        with (out/f"R{args.radius}-{p}.txt").open("x") as f:
            print(nr,Ncols,nnz,p,file=f)
            iv={}
            for j,d in enumerate(cols):
                for i,c in d.items():
                    q=c.denominator
                    if q not in iv:iv[q]=pow(q,-1,p)
                    print(i,j,c.numerator*iv[q]%p,file=f)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("--near",default="near-result.json")
    p.add_argument("--cross",default="exact-cross-reviewed.json")
    p.add_argument("--source",default="full-vector.json")
    p.add_argument("--radius",type=int,default=5)
    p.add_argument("--output",default=".")
    assemble(p.parse_args())
