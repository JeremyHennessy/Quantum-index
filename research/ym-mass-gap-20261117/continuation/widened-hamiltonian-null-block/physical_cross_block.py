"""Exact rational physical-near ↔ detached return block."""
from collections import defaultdict
from fractions import Fraction as Q
from pathlib import Path
import argparse
import hashlib
import json
import sympy as S
from sympy.polys.matrices import DomainMatrix

from defect_block import block_form, materialize, rank_mod, reference_bases
from defect_geometry import (DIGEST, H, P, anchor, classify, detached, span, to_group, tup)
from separated_channel import shift,loop
from full_folded_source import circuit,quotient_orbits
from folded_cubic import (adj_returns,gram,gsign,invariant_block,key,ordered,overlaps,
                          transform)
from second_order import spectral_gram

def source_orbits(D):
    lookup=defaultdict(lambda:defaultdict(Q))
    for j,v in enumerate(D):
        for ((i,g,r),h),c in v.items():
            A=anchor(P[i]|shift(H[h],r))[0]
            assert detached(i,g,r) and gsign(A)==-1
            lookup[key(A)][j]+=c
    return lookup

def physical_near(A):
    q=to_group(A)
    return q is None or not detached(*q)

def reduced_output(sources):
    possible={A:tuple(item for item in adj_returns(A) if physical_near(item[0]))
              for A in sources}
    hits={key(dst) for v in possible.values() for dst,_,_,_ in v}
    groups=quotient_orbits(hits)
    assert all(physical_near(A) for C in groups for A in C)
    print("physical candidate geometry: source reps",len(sources),
          "with candidate moves",sum(bool(x) for x in possible.values()),
          "adjacent returns",sum(map(len,possible.values())),
          "target reps",len(hits),"closures",len(groups),
          "closed shape reps",sum(map(len,groups)),flush=True)
    states=[]
    U=[]; metrics=[]
    for C in groups:
        _,od,_,Go,T=invariant_block(C)
        n=T.nullspace()
        if n:
            U.append(S.Matrix.hstack(*n));states.extend(od);metrics.append(Go)
    return possible,states,S.diag(*U),S.diag(*metrics)

def near_form(sources,possible,states,m):
    targets=overlaps(states)
    form=S.zeros(len(states),m)
    def one(n,p,v,r):
        gram=spectral_gram((v,loop(r)),(n,loop(p)))
        return sum((w*Q(1,2*(30-e)) for e,w in gram.items() if e!=30),Q(0))
    for A,amplitudes in sources.items():
        n=circuit(A)
        assert n
        for dst,z,p,r in possible[A]:
            for i,ms in targets[dst]:
                v=0
                for m0 in ms:
                    t=transform(m0,z=z)
                    v+=one(n,p,t,r)+one(n,r,t,p)
                if v:
                    for j,b in amplitudes.items():form[i,j]+=v*b
    return form

def rat(x):
    return [str(S.numer(x)),str(S.denom(x))]

def sparse(M):
    return {"shape":list(M.shape),"entries":[[i,j,*rat(v)] for (i,j),v in sorted(M.todok().items())]}

def emit(file,L,q,U,Go,states,D,wj):
    # The circuit basis vector on the near side is the eight-reflection
    # orbit sum of the enclosed representative. U expands null columns
    # in that basis, and Go is its (uncompressed) Gram.
    obj={"schema":"physical-cross-block-v1",
         "source_sha256":DIGEST,
         "L_form":sparse(L),"w_D_form":sparse(q),
         "active_near_source_coordinates":sparse(wj),
         "raw_near_gram":sparse(Go),"near_null_basis":sparse(U),
         "raw_near_circuits":[n for _,n,_ in states],
         "detached_basis":[[[i,g,r,h,*rat(v)] for ((i,g,r),h),v in sorted(a.items())]
                           for a in D]}
    raw=json.dumps(obj,separators=(",",":"),sort_keys=True).encode()+b"\n"
    assert hashlib.sha256(raw).hexdigest()=="97bfb46357273f147b7849e804087848d80147cb6fc836258a3819bb52ff378f"
    with Path(file).open("xb") as fp:fp.write(raw)
    print("cross block artifact",len(raw),hashlib.sha256(raw).hexdigest(),flush=True)

def run(raw,exact=False,output=None):
    G,F=classify();ghost,D,B6,B9=reference_bases(G,F)
    sources=source_orbits(D)
    possible,states,U,Go=reduced_output(sources)
    M=near_form(sources,possible,states,len(D))
    assert U.rows==M.rows
    L=(U.T*M).T
    assert L.shape==(348,129) and sum(bool(x) for x in L)==4909
    print("physical L",L.shape,"nnz",4909,flush=True)
    nsrc,w=materialize(raw,G)
    q=S.Matrix([sum((c*w.get(k,0) for k,c in V.items()),Q(0)) for V in D])
    for p in (1009,1013):
        r=rank_mod(L,p),rank_mod(L.row_join(q),p)
        assert r==(117,118)
        print("physical modular ranks",p,*r,flush=True)
    # Contract the assembled near block with the actual source, including
    # the nonorthonormal null Gram, and recover the independent Haar row.
    f=S.zeros(len(states),1)
    target=overlaps(states)
    for A,ns in nsrc.items():
        for i,vs in target[A]:
            f[i]+=sum((c*gram(n,v) for c,n in ns for v in vs),Q(0))
    wj=(U.T*Go*U).inv()*U.T*f
    specimen=[]
    for k,h in w:
        i,g,r=k
        if r==(0,-1,-3) and span(P[i])==(0,1,1) and span(H[h])==(0,1,2):
            specimen.append((k,h))
    assert len(specimen)==1
    row,=[j for j,V in enumerate(D) if specimen[0] in V]
    check=(L*wj)[row]/8
    assert check==Q(-416728166446999793140277173375349,66795522141927561840642247916425297920)
    print("assembled physical witness",check,flush=True)
    if exact:
        r=L.row_join(q)
        ranks=DomainMatrix.from_Matrix(L).rank(),DomainMatrix.from_Matrix(r).rank()
        assert ranks==(117,118)
        print("physical exact ranks",*ranks,flush=True)
        M=block_form(ghost,D,B6,B9)
        C=M[len(ghost):,:]
        CL=C.row_join(L)
        ranks=DomainMatrix.from_Matrix(CL).rank(),DomainMatrix.from_Matrix(CL.row_join(q)).rank()
        assert ranks==(201,201) and DomainMatrix.from_Matrix(C).rank()==180
        print("combined exact ranks",*ranks,flush=True)
        total=M.row_join(C.T.col_join(S.zeros(len(D))))
        for p in (1009,1013):
            assert rank_mod(M[:len(ghost),:],p)==270
            assert rank_mod(total,p)==450
        print("Schur image rank 180 exactly; source in unrestricted projected defect range",flush=True)
    if output:emit(output,L,q,U,Go,states,D,wj)
    return L,q

if __name__=="__main__":
    ap=argparse.ArgumentParser(description=__doc__)
    ap.add_argument("source")
    ap.add_argument("--exact-rank",action="store_true")
    ap.add_argument("--output",help="write the block, source and both basis conventions as new JSON")
    x=ap.parse_args()
    run(Path(x.source).read_bytes(),x.exact_rank,x.output)
