"""Exact interval and spin-label checks for the three-square mixed coefficient."""
from fractions import Fraction as Q
from math import factorial
from itertools import product

class I:
    def __init__(self,a,b=None):
        self.lo=Q(a);self.hi=Q(a if b is None else b)
    def __add__(a,b):
        b=cv(b);return I(a.lo+b.lo,a.hi+b.hi)
    __radd__=__add__
    def __neg__(a):return I(-a.hi,-a.lo)
    def __sub__(a,b):return a+-cv(b)
    def __rsub__(a,b):return cv(b)+-a
    def __mul__(a,b):
        b=cv(b);s=[u*v for u,v in product((a.lo,a.hi),(b.lo,b.hi))]
        return I(min(s),max(s))
    __rmul__=__mul__
    def __truediv__(a,b):
        b=cv(b);assert not (b.lo<=0<=b.hi)
        return a*I(1/b.hi,1/b.lo)
    def __pow__(a,n):
        assert n>=0
        y=I(1)
        for _ in range(n): y=y*a
        return y
def cv(x):return x if isinstance(x,I) else I(x)
def bs(n,b):
    t=lambda k:(b/2)**(n+2*k)/(factorial(k)*factorial(k+n))
    lo=sum(t(k) for k in range(11))
    return I(lo,lo+2*t(11))
a=bs(2,Q(1))/bs(1,Q(1))
c=bs(2,Q(".8"))/bs(1,Q(".8"))
L=a**3*c; M=a**2*c**2; P=a**5*c; E=a**6*c**2; D=a**8
g=lambda v,k:(v+k)/(2*(v-k))
h=lambda v,u,k:((v+u+2*k)/8+(u+k)*g(v,k)/2)/(v-u)
ground=(h(I(1),P,M)+h(I(1),P,L))/32
outer=(h(D,L,P)+h(D,L,E))/32
cross=(g(D,P)*g(I(1),M)+g(D,E)*g(I(1),L))/32
coef=ground+outer+cross
assert Q(".00000914")<coef.lo<=coef.hi<Q(".00000916")
# Retained center-compatible kinetic intermediates, with all fusion alternatives checked.
V=(0,0,0,0,0,0); Ls=(1,0,1,0,0,0); Ms=(0,0,1,1,1,1); Rs=(0,1,0,1,0,0)
P12=(1,0,0,1,1,1); P23=(0,1,1,0,1,1); Es=(1,1,1,1,0,0); Os=(1,1,0,0,1,1)
faces=[(0,2),(2,3,4,5),(1,3)]
def adm(t):
    l,r,j,k,a,b=t
    return all(abs(x-y)<=z<=x+y and (x+y+z)%2==0 for x,y,z in [(l,j,a),(l,j,b),(r,k,a),(r,k,b)])
def hit(i,s):
    use=faces[i-1]
    out=set()
    for shift in product((-1,1),repeat=len(use)):
        t=list(s)
        for idx,x in zip(use,shift):t[idx]+=x
        if min(t)>=0 and adm(t):out.add(tuple(t))
    return out
assert hit(1,V)=={Ls} and hit(2,V)=={Ms} and hit(3,V)=={Rs}
assert hit(1,Os)&hit(2,Rs)=={P23} and hit(1,Os)&hit(3,Ms)=={P23}
assert hit(2,Ls)&hit(3,Os)=={P12} and hit(3,Ls)&hit(2,Os)=={Es}
assert hit(1,Ms)&hit(3,Os)=={P12} and hit(1,Rs)&hit(2,Os)=={Es}
# On the diagonal b=(t,t,t), parity kills odd terms and the constant.
rho=Q(".01"); t=Q(".0000001")
tail_per_t2=4*t*t/(rho**4*(1-(t/rho)**2))
assert coef.lo-tail_per_t2>Q(".000005")
print('coefficient interval',float(coef.lo),float(coef.hi))
print('maximum higher-order remainder / t²',float(tail_per_t2))

reduced = a**8 * (1-c**2)**2 / (32*(a**3-c)*(a**5-c)*(a**3*c-1)*(a**5*c-1))
assert Q(".00000914")<reduced.lo<=reduced.hi<Q(".00000916")
assert max(reduced.lo,coef.lo)<=min(reduced.hi,coef.hi)
