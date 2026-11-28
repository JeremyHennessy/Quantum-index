"""Exact Dirichlet Green matrix and occupied-interval counting."""
from fractions import Fraction as F
from itertools import combinations
for b in range(2,20):
    indices=range(1,b)
    intervals=[(d,e) for d in range(b) for e in range(d+1,b)]
    G=lambda i,j: F(min(i,j)*(b-max(i,j)),b) if 0<i<b else F(0)
    for i in indices:
        for j in indices:
            assert 2*G(i,j)-G(i-1,j)-G(i+1,j)==int(i==j)
            assert G(i,j)==F(sum(d<i<=e and d<j<=e for d,e in intervals),b)
        assert G(i,i)>=F(b-1,b)>=F(1,2)
    for k in range(1,b) if b<=11 else (1,2):
        for occ in combinations(indices,k):
            ii=(0,*occ,b)
            gaps=[right-left for left,right in zip(ii,ii[1:])]
            weights=[a*c for a,c in zip(gaps,gaps[1:])]
            counts=[0]*k
            for d,e in intervals:
                inside=[i for i,v in enumerate(occ) if d<v<=e]
                if len(inside)==1: counts[inside[0]]+=1
            assert weights==counts and sum(weights)>=b-1
    assert 3*G(1,1)==F(3*(b-1),b)
assert 3*F(1,2)==F(3,2)
print("Green matrix, interval weights, occupied sums and exact single-prefix coefficient checked")
