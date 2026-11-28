"""Exact scale bookkeeping and isotropic two-well level count."""
from fractions import Fraction as F
from collections import Counter
rho=F(1,8)
assert F(1,2)-2*rho>0        # rescaled exterior barrier
assert 2*rho==2*(F(1,4)-rho)==F(1,4)  # balanced Taylor/cutoff errors
assert F(1,3)*F(1,2)==F(1,6)   # B^(1/2) = r^(1/6)
assert -F(1,3)-F(1,6)==-F(1,2) # transferred, then divided, Schur error
c=Counter(4*n+3+4*k+3 for n in range(5) for k in range(5) for _ in range(2))
assert [c[4*j+6] for j in range(5)]==[2*(j+1) for j in range(5)]
print("balanced corner-box powers and duplicated isotropic level multiplicities checked")
