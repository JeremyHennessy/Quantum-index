"""Exact quaternion product-rule and coupling constants."""
from fractions import Fraction as F
from itertools import product

def mul(x,y):
    a,b,c,d=x; e,f,g,h=y
    return (a*e-b*f-c*g-d*h,a*f+b*e+c*h-d*g,a*g-b*h+c*e+d*f,a*h+b*g-c*f+d*e)
basis=((0,1,0,0),(0,0,1,0),(0,0,0,1))
one=(1,0,0,0)
S=(one,*basis,(F(1,2),)*4,(F(3,5),F(4,5),0,0))
for A,B in product(S,repeat=2):
    mixed=-sum(mul(E,A)[0]*mul(B,E)[0] for E in basis)
    assert mixed==mul(B,A)[0]-A[0]*B[0]
A=F(1,156); B=F(1,1404)
assert 26*A==F(1,6) and 18*B-2*A==0
assert 2*(A-F(1,144))==-F(1,936) and 2*B==F(1,702)
# At W1=i, W2=I, sqrt(2)*T w1=-1, sqrt(2)*T w2=0,
# and sqrt(2)*T w12=-2.
X=basis[0]
assert mul(X,X)[0]==-1 and mul(X,one)[0]==0
assert -2*F(1,702)+F(1,936)==-F(5,2808)
assert F(2)/(12**2*4*F(21,2))==F(1,3024)
print("shared-edge contraction, mixed logarithmic coefficient, and conditional quadratic score coefficient verified")
