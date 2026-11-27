"""Finite certificate for a uniform bound on the q-Schur second moment."""
from collections import defaultdict
from fractions import Fraction as Q
from itertools import combinations
from math import isqrt

from first_order import E
from locality import edge_bits
from cubic_locality import cubic_mesh

def sqrt_up(x,scale=1000):
    """Upward rational square-root bound with checked minimal numerator."""
    n=isqrt(x.numerator*scale*scale//x.denominator)
    if Q(n,scale)**2<x:n+=1
    y=Q(n,scale)
    assert y*y>=x and (n==0 or Q(n-1,scale)**2<x)
    return y

def final_allowed(a,b,c):
    """Necessary spin-energy test on the product of three binary circuits."""
    odd=a^b^c
    triple=(a&b&c).bit_count()
    double=((a&b)|(b&c)|(a&c)).bit_count()-triple
    gap=30-3*odd.bit_count()
    return any(12*n+8*m==gap for n in range(triple+1) for m in range(double+1))

def verify_detached_negative_control(spectral_gram):
    # Three edge-disjoint plaquettes p,r,t; same-level detached hopping is
    # nonzero in EACH ordering, exactly zero after adding them.
    _,f=cubic_mesh(5,1,1)
    p,r,t=(f[((0,0,x),1,2)] for x in (0,2,4))
    src=r+t
    dst=p+t
    low=spectral_gram((dst,p),(src,r))
    high=spectral_gram((dst,r),(src,p))
    assert low=={12:Q(1)} and high=={36:Q(1)}
    term1=sum((Q(1,4)*v*Q(2,24-e) for e,v in low.items()),Q(0))
    term2=sum((Q(1,4)*v*Q(2,24-e) for e,v in high.items()),Q(0))
    assert (term1,term2)==(Q(1,24),Q(-1,24))

def bound_box(spectral_gram,q,dims,origin):
    idx,faces=cubic_mesh(*dims)
    bits={key:edge_bits(net) for key,net in faces.items()}
    z,dy,dx=origin
    def lid(i):
        a,b=E[i]
        return idx[((z,a[0]+dy,a[1]+dx),(z,b[0]+dy,b[1]+dx))]
    total=defaultdict(Q)
    counts=[]
    ordered_keys=sorted(bits)
    for _,old,sgn in q:
        assert sgn in (-1,1)
        n=tuple(tuple((lid(i),fwd) for i,fwd in loop) for loop in old)
        a=edge_bits(n)
        j={p for p,b in bits.items() if a&b}
        pairs={tuple(sorted((p,r))) for p in j for r in ordered_keys
               if p!=r and bits[p]&bits[r]}
        eligible=[(p,r) for p,r in sorted(pairs) if final_allowed(a,bits[p],bits[r])]
        keys=j|{p for pr in eligible for p in pr}
        bounds={}
        for p in keys:
            weights=spectral_gram((n,faces[p]),(n,faces[p]))
            assert all(v>=0 for v in weights.values())
            squared=sum((v*Q(1,(30-e)**2) for e,v in weights.items() if e!=30),Q(0))
            bounds[p]=sqrt_up(squared)
        # Diagonal p=p and its corresponding vacuum subtraction keep parity a.
        total[a]+=sum((bounds[p]+Q(1,24) for p in j), Q(0))
        for p,r in eligible:
            total[a^bits[p]^bits[r]]+=bounds[p]+bounds[r]
        counts.append((len(j),len(pairs),len(eligible)))
    # The six input circuit coefficients all have magnitude 1/sqrt(6).
    # Different output edge-center parity patterns are orthogonal.
    bound2=sum((v*v for v in total.values()), Q(0))/6
    return bound2,counts,len(total)

def verify_aggregated(spectral_gram,q):
    verify_detached_negative_control(spectral_gram)
    a=bound_box(spectral_gram,q,(8,6,4),(2,2,2))
    b=bound_box(spectral_gram,q,(10,8,6),(3,3,3))
    expected=(Q(304707313,13500000),
              [(32,299,10)]*3+[(36,339,4),(32,299,10),(36,339,4)],42)
    assert a==b==expected
    print("aggregate weight: q-Schur squared norm bound",a)
    delta=Q(13,672)
    lower=delta*delta/a[0]
    assert lower==Q(7921875,477781066784)>Q(1,61000)
    print("aggregate weight: exact lower bound",lower,"greater than 1/61000")
