"""Exact power and tag-parity checks for the equal-tag obstruction."""
from fractions import Fraction as F
b=F(2,3)       # magnetic multiplier r^b
B=2*b-1       # depth of the induced potential
ell=-B/4      # angular localization length exponent
assert (B,ell,-2*ell,B+2*ell)==(F(1,3),F(-1,12),F(1,6),F(1,6))
assert (2*b-2,4*b-3,2*b+B-2)==(F(-2,3),F(-1,3),F(-1,3))
assert (2*b-2)-2*ell==F(-1,2)   # form error on O(r^(1/6)) modes
tag={1,2}
assert tag^tag^tag==tag
assert F(2,6*4)==F(1,12)       # cross covariance in quadratic potential
print("well depth r^(1/3), width r^(-1/12), excitation scale r^(1/6), and Schur errors checked")
