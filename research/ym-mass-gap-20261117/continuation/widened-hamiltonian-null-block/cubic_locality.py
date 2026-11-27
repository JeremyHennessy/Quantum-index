"""Exact bounded cubic padding checks; no enumeration of the cubic spectrum."""
from collections import defaultdict
from fractions import Fraction as Q
from functools import reduce
from itertools import combinations, product
from operator import xor

from first_order import B, E, integrate
from locality import edge_bits, face_rank

def step(v,axis):
    return tuple(c+(i==axis) for i,c in enumerate(v))

def cubic_mesh(w,h,d):
    dim=d,h,w
    vertices=product(*(range(c+1) for c in dim))
    index={}
    cells={}
    for v in vertices:
        axes=[i for i in range(3) if v[i]<dim[i]]
        for i in axes:
            index[v,step(v,i)]=len(index)
        for a,b in combinations(axes,2):
            p=(v,step(v,a),step(step(v,a),b),step(v,b))
            cells[v,a,b]=tuple(zip(p,p[1:]+p[:1]))
    faces={p:(tuple((index[tuple(sorted((a,b)))],a<b) for a,b in path),)
           for p,path in cells.items()}
    return index,faces

def verify_box(spectral_gram,q,k,dims,offset):
    w,h,d=dims
    z,y,x=offset
    assert 0<z<d and 0<y<y+2<h and 0<x<x+4<w
    index,net=cubic_mesh(w,h,d)
    bits={p:edge_bits(net[p]) for p in net}
    assert len(bits)==w*h*(d+1)+w*d*(h+1)+h*d*(w+1)
    assert all((a&b).bit_count()<=1 for a,b in combinations(bits.values(),2))
    # Three-dimensional face-boundary labels are NOT globally injective.
    cap=[((0,0,0),a,b) for a,b in combinations(range(3),2)]
    cap+=[(step(v,3-a-b),a,b) for v,a,b in cap]
    assert len(set(cap))==6 and reduce(xor,(bits[p] for p in cap))==0
    assert face_rank(bits.values())<len(bits)

    inside={((z,y+r,x+c),1,2) for r,c in product(range(2),range(4))}
    patch=0
    for p in inside:patch|=bits[p]
    outside=set(net)-inside
    assert all((bits[p]&patch).bit_count()<=1 for p in outside)
    same_plane={p for p in outside if p[1:]==(1,2) and p[0][0]==z}
    perp={p for p in outside if p[1:]!=(1,2)}

    def lift(n):
        def eid(i):
            a,b=E[i]
            return index[((z,a[0]+y,a[1]+x),(z,b[0]+y,b[1]+x))]
        return tuple(tuple((eid(i),fw) for i,fw in loop) for loop in n)

    parity={m:edge_bits(lift(nets[0])) for m,nets in B.items()}
    assert len(parity)==56 and sum(map(len,B.values()))==64
    assert len(set(parity.values()))==56
    for m,mask in parity.items():
        assert mask.bit_count()==10 and mask&patch==mask
        assert all(edge_bits(lift(n))==mask for n in B[m])
        assert sum(bool(mask&bits[p]) for p in perp)==20

    # Verify via explicit parity groups for the six q labels; any group
    # containing an exterior face must be singleton even without face rank.
    groups=defaultdict(list)
    for m,_,_ in q:
        for p,f in bits.items():groups[parity[m]^f].append(p)
    assert all(len(li)==1 for li in groups.values() if any(p in outside for p in li))

    # Direct exact exterior contributions for q, including completely remote
    # faces as a negative control. The face trace normalization costs 1/4.
    occupations=[]
    e_weights=defaultdict(Q)
    for m,n,coef in q:
        assert coef in (-1,1)
        inward,p_dir=0,0
        a=lift(n)
        for p in outside:
            common=bool(parity[m]&bits[p])
            if common:
                inward+=p in same_plane
                p_dir+=p in perp
            got=spectral_gram((a,net[p]),(a,net[p]))
            expect={36:Q(1,4),44:Q(3,4)} if common else {42:Q(1)}
            assert got==expect
            for e,val in got.items():e_weights[e]+=val/24
        occupations.append((inward,p_dir))
    assert occupations==list(zip([5,5,5,8,5,8],[20]*6))
    ext=sum((2*wt/(30-e) for e,wt in e_weights.items()),Q(0))
    rel=k+ext+Q(len(net),24)
    assert rel==Q(-13,336)
    assert rel-Q(9,112)==-Q(5,42)

    # Polarization controls on all multiplicity-two labels with nonzero
    # off-diagonal Gram. Test every occupied perpendicular face of each.
    cross_count=0
    for m,pair in B.items():
        if len(pair)==1:continue
        assert len(pair)==2
        l,r=map(lift,pair)
        gram=integrate(*pair)
        assert gram
        for p in perp:
            if not parity[m]&bits[p]:continue
            assert spectral_gram((l,net[p]),(r,net[p]))=={36:gram/4,44:3*gram/4}
            cross_count+=1
    assert cross_count==8*20
    print(f"cubic locality: {w}x{h}x{d}, {len(net)} faces, "
          f"8 doubled-label off-diagonal Gram controls ({cross_count} comparisons), "
          f"center parity witnesses, absolute={k+ext}, vacuum-relative={rel}")
    return k+ext

def verify_cubic_locality(spectral_gram,q,k):
    a=verify_box(spectral_gram,q,k,(6,4,2),(1,1,1))
    b=verify_box(spectral_gram,q,k,(8,6,3),(2,2,3))
    assert (a,b)==(Q(-2645,336),Q(-7321,336))
    assert b-a==-Q(522-188,24)
