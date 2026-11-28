"""Exact comparator for the physical near-stream at E*."""
from collections import Counter, defaultdict
from fractions import Fraction as Q
from functools import cache
from pathlib import Path
import argparse
import hashlib
import multiprocessing as mp
import json
import sympy as S
from defect_block import materialize
from defect_geometry import GROUPS, P, classify
from folded_cubic import covector_b2, adj_returns, gram, invariant_block, key, overlaps, transform
from full_folded_source import quotient_orbits
from physical_cross_block import physical_near
from second_order import spectral_gram
from separated_channel import add, anchor, e, loop, shift, touching

E = S.Rational(-13,336)
O=(0,0,0)
STEPS=tuple(tuple(s*(i==j) for j in range(3)) for i in range(3) for s in (-1,1))

def connected_supports():
    """Every connected even 10-edge support has a translated Euler tour through 0."""
    out=set()
    def visit(v, used, rem):
        if sum(map(abs,v))>rem: return
        if rem==0:
            out.add(anchor(frozenset(used))[0])
            return
        for d in STEPS:
            w=add(v,d)
            p=e(v,w)
            if p not in used:
                used.add(p)
                visit(w,used,rem-1)
                used.remove(p)
    visit(O,set(),10)
    return out

def inventory(G):
    conn=connected_supports()
    dis={P[i]|shift(H,r) for i,g,r in G for H in GROUPS[g]}
    dis={A for A in dis if len(A)==10}
    reps={key(A) for A in conn|{anchor(A)[0] for A in dis}}
    assert all(physical_near(A) for A in reps)
    C=quotient_orbits(reps)
    print("closure check", len(reps),sum(map(len,C)),Counter((len(A),physical_near(A)) for A in set().union(*C)-reps),flush=True)
    assert set().union(*C)==reps and sum(map(len,C))==len(reps)
    print("inventory",len(conn),len(dis),len(reps),len(C),flush=True)
    return C

def reduced_states(blocks):
    stats=Counter()
    states=[]; Gs=[]; Us=[]
    for C in blocks:
        _,odd,_,G,T=invariant_block(C)
        N=T.nullspace()
        stats["raw_all"]+=len(odd)
        stats["slope_components"]+=1
        if N:
            stats["retained_odd_raw"]+=len(odd)
            stats["near_null"]+=len(N)
            stats["retained_slope_components"]+=1
            states.extend(odd)
            Gs.append(S.SparseMatrix(G))
            Us.append(S.SparseMatrix(S.Matrix.hstack(*N)))
    print("near census",dict(stats),flush=True)
    return states,S.diag(*Gs,cls=S.SparseMatrix),S.diag(*Us,cls=S.SparseMatrix)

def kernel(n,p,m,r):
    z=spectral_gram((m,loop(r)),(n,loop(p)))
    return sum((v*Q(1,2*(30-a)) for a,v in z.items() if a!=30),Q(0))

states_global=None
look_global=None

def row(j):
    A,n,_=states_global[j]
    targets=look_global
    out=defaultdict(Q)
    J=touching(A)
    for i,ms in targets[A]:
        if i<j:continue
        out[i]+=8*sum((sum((kernel(n,p,m,p) for p in J),Q(0))+(Q(len(J),24)-Q(E))*gram(n,m) for m in ms),Q(0))
    for B,z,p,r in adj_returns(A):
        for i,ms in targets[B]:
            if i<j:continue
            for m0 in ms:
                m=transform(m0,z=z)
                out[i]+=8*(kernel(n,p,m,r)+kernel(n,r,m,p))
    return j,{i:v for i,v in out.items() if v}

def physical_form(states,workers):
    global states_global,look_global
    states_global=states; look_global=overlaps(states)
    out={}
    def take(rows):
        for count,(j,data) in enumerate(rows,1):
            for i,v in data.items():
                out[(i,j)]=out[(j,i)]=v
            if count%100==0:print("quadratic rows",count,len(states), "nnz",len(out), flush=True)
    if workers>1:
        with mp.get_context('fork').Pool(workers) as pool:
            take(pool.imap(row,range(len(states)),chunksize=5))
    else:
        take(map(row,range(len(states))))
    return S.SparseMatrix(len(states),len(states),out)

def source_form(nsrc,states,U):
    t=overlaps(states); f=defaultdict(Q)
    for A,ns in nsrc.items():
        for i,vs in t[A]:
            f[i]+=sum((c*gram(n,v) for c,n in ns for v in vs),Q(0))
    assert all(A in t for A in nsrc)
    return U.T*S.SparseMatrix(len(states),1,{(i,0):v for i,v in f.items() if v})

def read_sparse(x):
    return S.SparseMatrix(*x["shape"],{(i,j):S.Rational(int(n),int(d)) for i,j,n,d in x["entries"]})

def embed_cross(states,G,U,path):
    old_raw=Path(path).read_bytes()
    assert hashlib.sha256(old_raw).hexdigest()=="97bfb46357273f147b7849e804087848d80147cb6fc836258a3819bb52ff378f"
    old=json.loads(old_raw)
    small_L=read_sparse(old["L_form"])
    small_G=read_sparse(old["raw_near_gram"])
    small_U=read_sparse(old["near_null_basis"])
    small_w=read_sparse(old["active_near_source_coordinates"])
    circuits=[tupleize(c) for c in old["raw_near_circuits"]]
    idx={n:i for i,(_,n,_) in enumerate(states)}
    assert len(idx)==len(states) and len(set(circuits))==len(circuits)
    js=[idx[n] for n in circuits]
    assert len(js)==len(states)==435 and set(js)==set(range(len(states)))
    assert G.extract(js,js)==small_G
    Gs=small_U.T*small_G*small_U
    # Each small active null basis is complete within its first-order blocks.
    # Compute coordinate inclusion via its left inverse and raw Gram.
    raw_projection=U.extract(js,range(U.cols))
    A=Gs.inv()*small_U.T*small_G*raw_projection
    assert small_U*A==raw_projection
    assert A.shape==(129,129)
    L=small_L*A
    assert small_L.shape==(348,129)
    built=read_sparse(old["w_D_form"])
    return L,built,A.T*Gs*small_w,js

def tupleize(a):
    return tuple(map(tupleize,a)) if isinstance(a,list) else a

def write_block(path,K,wJ,L,wD,N,G):
    def sparse(M):
        return {"shape":list(map(int,M.shape)),"entries":[[int(i),int(j),str(S.numer(v)),str(S.denom(v))] for (i,j),v in sorted(M.todok().items())]}
    a={"schema":"physical-near-block-v1","K_minus_E_form":sparse(K),"w_J_form":sparse(wJ),
       "L_form":sparse(L),"w_D_form":sparse(wD),"null_basis":sparse(N),"odd_metric":sparse(G)}
    raw=json.dumps(a,sort_keys=True,separators=(',',':')).encode()+b'\n'
    with Path(path).open('xb') as f:f.write(raw)
    print("physical near artifact",len(raw),hashlib.sha256(raw).hexdigest(),flush=True)

def run(source,cross,output,workers):
    G,D=classify()
    blocks=inventory(G)
    states,Go,U=reduced_states(blocks)
    nsrc,w=materialize(Path(source).read_bytes(),G)
    wJ=source_form(nsrc,states,U)
    L,wD,active,js=embed_cross(states,Go,U,cross)
    assert wJ==active
    J={j for i,j in U.todok() if i in set(js)}
    assert len(J)==129
    print("executable assembly",L.shape,"source form nnz",len(wJ.todok()),"active directions",len(J),flush=True)
    raw=physical_form(states,workers)
    witnesses=(0,1,17,103,217,315,len(states)-1)
    for j in witnesses:
        A,n,_=states[j]
        assert raw[:,j]==covector_b2({A:[(Q(8),n)]},states)-E*Go[:,j]
    print("independent old-assembler full raw columns",len(witnesses),flush=True)
    K=U.T*raw*U
    assert K==K.T
    print("near complete",(K.rows,K.cols),"nnz",len(K.todok()),flush=True)
    write_block(output,K,wJ,L,wD,U,Go)

if __name__=="__main__":
    p=argparse.ArgumentParser()
    p.add_argument("--source",default="full-vector.json")
    p.add_argument("--cross",default="exact-cross-reviewed.json")
    p.add_argument("--work",type=int,default=4)
    p.add_argument("--output",default="near-result.json")
    a=p.parse_args()
    run(a.source,a.cross,a.output,a.work)
