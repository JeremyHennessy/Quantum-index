"""Exact constants for the separate-traces Haar counterexample."""
from fractions import Fraction as F
amin2 = F(3,4)
assert 3*(2*amin2)==F(9,2)
assert 5*2==10
assert F(4,3)*amin2**2==F(3,4)
assert F(4,3)*amin2**2/10==F(3,40)
# The regularizer denominator D dominates 4(a²+b²) and 8ab.
# Thus |2ab/D| <= 1/4, including in the normalized inverse expansion.
assert F(2,8)==F(1,4)
print("support κ lower 9/2, upper 10; variance ≥3/4; harmonic loss ≥3/40")
