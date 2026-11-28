"""Exact power and prefactor check for renormalized cubic scale."""
from fractions import Fraction as Q
from itertools import permutations
b=Q(2,3)
assert 2*b-1==Q(1,3)   # divergent scalar
assert 3*b-2==0        # finite cubic
assert 4*b-3==Q(-1,3)  # bounded resolvent remainder
assert 2*b-2==Q(-2,3)  # leading form replacement
assert 3*b-Q(5,2)==Q(-1,2) # cubic endpoint replacement
assert 2*b+Q(1,3)-2==Q(-1,3) # spectral parameter term
w=sum(Q(1,9*(1,1,2)[i]*(1,1,2)[k]) for i,j,k in permutations(range(3)))
assert w==Q(4,9) and w/16==Q(1,36)
print("centering, finite cubic, four remainder powers and the 1/36 factor verified")
