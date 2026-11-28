"""Exact endpoint weights and sufficient-power bookkeeping."""
from itertools import permutations
from fractions import Fraction as F
import sympy as s
p,q=s.symbols("p q",positive=True)
lam=(3*p,3*q,3*(p+q))
weights=s.simplify(sum(1/(lam[i]*lam[k]) for i,j,k in permutations(range(3))))
assert s.simplify(weights-4/(lam[0]*lam[1]))==0
assert s.simplify(weights/16-1/(36*p*q))==0
# Balanced couplings T~(p*q)^(1/3). q=o(p^5/4) makes T=o(p^3/4).
assert (1+F(5,4))/3==F(3,4)
# At fixed ratio, T~r^(2/3); all four error exponents are negative.
b=F(2,3)
assert (2*b-2,3*b-F(5,2),4*b-3)==(F(-2,3),F(-1,2),F(-1,3))
print("anisotropic six weights, 1/(36 p q) coefficient and sufficient ratio scale checked")
