"""Exact quaternion moment and first perimeter effective-potential checks."""
import sympy as s
t1,t2,y0,y1,y2,y3=s.symbols("t1 t2 y0 y1 y2 y3")
Y=(y0,y1,y2,y3)
# Re Z is z0, Re(Y Z^{-1}) = Y dot Z, with Haar second moments δij/4.
def haar_linear_pair(a,b):
    return s.expand(sum(x*y for x,y in zip(a,b))/4)
I=(1,0,0,0)
cross=haar_linear_pair(I,Y)
square=haar_linear_pair((t1+t2*y0,t2*y1,t2*y2,t2*y3),
                        (t1+t2*y0,t2*y1,t2*y2,t2*y3))
assert cross==y0/4
norm_sq=sum(z*z for z in Y)
effective=(t1*t1+t2*t2)/12+t1*t2*y0/6
assert s.expand(square/3-effective-t2*t2*(norm_sq-1)/12)==0
def cheb(n,x):
    return s.chebyshevu(n,x)
x=s.symbols("x")
for n in range(7):
    assert s.expand(cheb(n,-x)-(-1)**n*cheb(n,x))==0
print("Haar cross moment, fast Casimir denominator, and center parity checked")
