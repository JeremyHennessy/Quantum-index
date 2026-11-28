"""Exact geometric overbound for the odd quadratic defect and the full source."""
from collections import Counter
from functools import cache
from itertools import product
from pathlib import Path
import hashlib
import json

from cubic_mixing import components
from folded_cubic import REF, reflection
from separated_channel import add, anchor, at_endpoint, build, loop_types, shift, span, sub, touching
import sympy as S

P=tuple(loop_types(4))
H=tuple(loop_types(6))
C=tuple(A for A in H if span(A)==(1,1,1))
R=tuple(A for A in H if A not in C)
GROUPS=(C,)+tuple((A,) for A in R)
GI={A:g for g,group in enumerate(GROUPS) for A in group}
O=(0,0,0)
DIGEST="91677331e506551f9d0cb636ba250b4ac97c8019606e17ca955cf1fe11f51bda"

def rad(r):return max(map(abs,r))

def vert(A):return {v for e in A for v in e}

@cache
def bundle(g):
    return frozenset().union(*GROUPS[g])

@cache
def detached(i,g,r):
    A=P[i];B=shift(bundle(g),r)
    return not(vert(A)&vert(B) or touching(A)&touching(B))

@cache
def eligible_local(A):
    valid=set(P if len(A)==4 else H)
    ans=set()
    for p in touching(A):
        for r in touching(p)-{p}:
            B=A^p^r
            if len(B)!=len(A):continue
            S,z=anchor(B)
            if S in valid:
                assert rad(z)<=1
                ans.add((S,z))
    return ans

def eligible_cross(i,g,r):
    A=P[i]
    for h in GROUPS[g]:
        B=shift(h,r)
        for p in touching(A):
            for q in touching(B):
                if p&q and len((p^q)&(A|B))==3:return True
    return False

def local_to_near(i,g,r):
    for S,z in eligible_local(P[i]):
        if not detached(P.index(S),g,sub(r,z)):return True
    for h in GROUPS[g]:
        for S,z in eligible_local(h):
            if not detached(i,GI[S],add(r,z)):return True
    return False

def reflected(i,g,r,s):
    a=span(P[i]); b=span(GROUPS[g][0])
    j=P.index(reflection(P[i],s)[0]); k=GI[reflection(GROUPS[g][0],s)[0]]
    t=tuple(x if sign==1 else -x+pa-hb for x,sign,pa,hb in zip(r,s,a,b))
    return j,k,t

def classify():
    assert (len(P),len(C),len(R))==(3,16,6)
    for A in P+H:eligible_local(A)
    universe=tuple((i,g,r) for i,g in product(range(3),range(7))
                   for r in product(range(-5,6),repeat=3))
    assert len(universe)==27951
    near=set();cross=set();returns=set()
    for i,g,r in universe:
        k=i,g,r
        if not detached(*k):
            near.add(k);continue
        if eligible_cross(*k):cross.add(k)
        if local_to_near(*k):returns.add(k)
    assert not cross
    def counts(xs):return Counter(g==0 for _,g,_ in xs)
    assert counts(near)=={True:108,False:552}
    assert counts(returns)=={True:150,False:876}
    assert max(rad(r) for _,_,r in near)==3 and max(rad(r) for _,_,r in returns)==4
    for grp in (near,returns):
        assert {reflected(*a,s) for a in grp for s in REF}==grp
    flags=near|returns
    orbits={min(reflected(*a,s) for s in REF) for a in flags}
    assert counts(orbits)=={True:57,False:270}
    assert sum(8 if g==0 else 1 for _,g,_ in flags)==3492
    assert sum(8 if g==0 else 1 for _,g,_ in orbits)==726
    h,T,_=build(6)
    ci=[h.index(q) for q in C]
    N=S.Matrix.hstack(*at_endpoint(T,22).extract(ci,ci).nullspace())
    Pc=N*(N.T*N).inv()*N.T
    traces={}
    for s in REF:
        perm=[C.index(reflection(A,s)[0]) for A in C]
        U=S.zeros(16)
        for j,i in enumerate(perm):U[i,j]=1
        assert Pc*U==U*Pc
        traces[s]=S.trace(U*Pc)
    assert tuple(traces[s] for s in REF)==(-4,0,0,4,0,4,4,8)
    dims=[]
    for F in (near,returns):
        dim=0
        for a in {min(reflected(*a,s) for s in REF) for a in F}:
            fix=[s for s in REF if reflected(*a,s)==a]
            dim+=S.Rational(sum(traces[s] for s in fix),len(fix)) if a[1]==0 else 1
        dims.append(dim)
    assert dims==[270,348]
    print("defect screen: 660 non-detached, 1026 return-to-near, 0 cross; 3492 slots / 618 exact invariant directions")
    return near,returns

def to_group(A):
    cs=components(A)
    if [len(v) for v in cs]!=[4,6]:return None
    p,z=anchor(cs[0])
    h,y=anchor(cs[1])
    return P.index(p),GI[h],sub(y,z)

def tup(a):return tuple(map(tup,a)) if isinstance(a,list) else a
def support_test(raw,near,returns):
    assert hashlib.sha256(raw).hexdigest()==DIGEST
    x=json.loads(raw)
    assert len(x)==562
    counts=Counter()
    shapes=set();refs=set(); groups=set()
    for ent in x:
        A=frozenset(tup(ent["links"]));shapes.add(A)
        assert int(ent["n"]) and int(ent["d"])>0
        k=to_group(A)
        if k is None or k in near:
            counts["near"]+=1
        else:
            assert detached(*k)
            counts["reference"]+=1;refs.add(A);groups.add(k)
            if k in returns:counts["flagged_reference"]+=1
            else:counts["unflagged_reference"]+=1
    print("folded source placement",counts,"reference shape/group representatives",len(refs),len(groups))
    assert len(shapes)==510 and len(refs)==208 and len(groups)==92
    assert counts=={"near":354,"reference":208,"flagged_reference":208}
    assert counts["unflagged_reference"]==0
    return counts

if __name__=="__main__":
    import argparse
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source",help="optional pinned exact vector JSON from full_folded_source.py")
    a=parser.parse_args()
    n,r=classify()
    if a.source:support_test(Path(a.source).read_bytes(),n,r)
