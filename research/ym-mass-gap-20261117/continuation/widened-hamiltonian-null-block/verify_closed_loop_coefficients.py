"""Exact scalar and angular algebra checks for the closed-loop fixture."""
from fractions import Fraction as F
from itertools import product

basis=((1,0,0),(0,1,0),(0,0,1))
def cross(a,b): return (a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0])
def dot(a,b): return sum(x*y for x,y in zip(a,b))
for n,v in product(basis,repeat=2):
    assert sum(dot(cross(e,n),cross(v,e)) for e in basis)==-2*dot(n,v)
    assert sum(dot(tuple(x-dot(e,n)*y for x,y in zip(e,n)),cross(v,e)) for e in basis)==0
for cot in (F(0),F(1,2),F(2),F(-3,5)):
    ell00=8*(1+cot*cot)+F(31,4)
    ell11=F(47,4)
    ell01=2*cot
    assert ell00-ell01**2/ell11==F(63,4)+F(360,47)*cot*cot
assert 1/(F(576)*F(45,4))==F(1,6480)
assert 1/(F(576)*F(63,4))==F(1,9072)
print("cross-generator identities, class Schur entry, and both physical coefficients verified")
