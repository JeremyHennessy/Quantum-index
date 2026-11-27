"""Exact quadratic locality controls for the padded direct-probe free vector."""
from collections import defaultdict
from fractions import Fraction as Q
from itertools import product

from first_order import E, mesh

def edge_bits(net):
    used={i for loop in net for i,_ in loop}
    assert len(used)==sum(map(len,net))
    return sum(1<<i for i in used)

def face_rank(masks):
    piv={}
    for m in masks:
        while m:
            k=m.bit_length()-1
            if k not in piv:
                piv[k]=m
                break
            m^=piv[k]
    return len(piv)

def verify_padded(spectral_gram,q,k,w,h,dy,dx):
    _,edges,faces=mesh(w,h)
    coords=list(product(range(h),range(w)))
    edge_index={e:i for i,e in enumerate(edges)}
    face_index={v:i for i,v in enumerate(coords)}
    assert dy>0 and dx>0 and dy+2<h and dx+4<w
    assert face_rank(faces)==len(faces)
    inside={face_index[(r+dy,c+dx)] for r,c in product(range(2),range(4))}
    outside=set(range(len(faces)))-inside

    def lift(i):
        a,b=E[i]
        return edge_index[((a[0]+dy,a[1]+dx),(b[0]+dy,b[1]+dx))]
    def face_net(r,c):
        path=((r,c),(r,c+1),(r+1,c+1),(r+1,c))
        return (tuple((edge_index[tuple(sorted((a,b)))], a<b)
                      for a,b in zip(path,path[1:]+path[:1])),)

    nets=[]
    for m,net,coef in q:
        lift_net=tuple(tuple((lift(i),d) for i,d in loop) for loop in net)
        actual=0
        for i in range(8):
            if m>>i&1:actual^=faces[face_index[(i//4+dy,i%4+dx)]]
        assert actual==edge_bits(lift_net) and actual.bit_count()==10
        assert spectral_gram((lift_net,),(lift_net,))=={30:Q(1)}
        assert coef in (-1,1)
        nets.append((m,lift_net,coef,actual))
    groups=defaultdict(list)
    for m,_,_,mask in nets:
        for j,face in enumerate(faces):
            groups[mask^face].append((m,j))
    # A term containing an exterior insertion across the inner product
    # can meet matching parity only if it is the same insertion and label.
    assert all(len(li)==1 for li in groups.values() if any(j in outside for _,j in li))

    vac=-Q(len(faces),24)
    total=defaultdict(Q)
    counts=[]
    for _,net,_,mask in nets:
        occupied=0
        for j in sorted(outside):
            f=face_net(*coords[j])
            assert edge_bits(f)==faces[j]
            shared=(mask&faces[j]).bit_count()
            assert shared in (0,1)
            expected={42:Q(1)} if shared==0 else {36:Q(1,4),44:Q(3,4)}
            weights=spectral_gram((net,f),(net,f))
            assert weights==expected
            for e,wt in weights.items():
                # Face half trace on each side; normalize q by sqrt(6).
                total[e]+=wt/24
            occupied+=shared
        counts.append(occupied)
    assert counts==[5,5,5,8,5,8]
    outside_coeff=sum((2*wt/(30-e) for e,wt in total.items()),Q(0))
    absolute=k+outside_coeff
    assert absolute-vac==Q(9,112)
    assert outside_coeff==-Q(len(outside),24)-Q(1,28)
    print(f"quadratic locality: padded {w}x{h} at ({dy},{dx}), "
          f"occupation={counts}, absolute={absolute}, vacuum-relative={absolute-vac}")
    return absolute

def verify_locality(spectral_gram,q,k):
    assert len(q)==6 and k==Q(-73,336)
    k1=verify_padded(spectral_gram,q,k,6,4,1,1)
    k2=verify_padded(spectral_gram,q,k,8,6,2,3)
    assert k1==Q(-103,112) and k2==Q(-215,112)
    assert k2-k1==-Q(48-24,24)
