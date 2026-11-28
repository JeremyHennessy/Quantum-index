"""Independent exact rational paths to the first neighbor marginal coefficient."""
from fractions import Fraction as F
v2 = F(1,4)
vp2 = F(3,4)
# Projection of the established cubic density polynomial.
density = F(29,18432)-F(3361,1617408)*vp2
# Solve the projected eigen-equation before building the density.
mean_psi02 = -F(1,1152)
psi11_xv = F(1,156)+F(1,1404)
energy02 = -F(1,48)
psi10_x = F(1,12)
forcing = mean_psi02 + psi11_xv*v2 + energy02*psi10_x
psi12_bar_x = forcing/12
projected_density = 2*psi12_bar_x+2*psi10_x*mean_psi02+2*psi10_x*psi11_xv*v2
assert psi12_bar_x == -F(37,539136)
assert density == projected_density == F(1,67392)
assert density*v2 == F(1,269568)
print("marginal x coefficient:",density,"normalized first-moment coefficient:",density*v2)
