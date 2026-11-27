"""Rational constants and finite-label cross-check for the two-square proof."""
from fractions import Fraction as Q
from math import factorial


def bessel(n):
    term = lambda k: Q(1, 2)**(2*k+n)/(factorial(k)*factorial(k+n))
    lo = sum(term(k) for k in range(11))
    return lo, lo + 2*term(11)


def majorant(n):
    return Q(1, 2)**n/factorial(n+1)


def tail(s):
    return Q(50,49)**s * (2*Q(1,256)**s +
        2*Q(1,24)**(4*s) + Q(1,4)**(6*s)*(1+Q(1,24)**s) +
        16*Q(1,4)**(9*s)/(1-Q(25,16)*Q(1,4)**(3*s)))


lo,hi=bessel(2)
lo1,hi1=bessel(1)
assert lo/hi1 > Q(23,100) and hi/lo1 < Q(1,4)
assert majorant(2)**4 < Q(23,100)**8
assert Q(1,4)**6/24 < Q(23,100)**6
assert Q(1,4)**9 < Q(23,100)**6
assert (Q(1,49)/(1-Q(1,256)))**2 * 2 < Q(3,100)**2
assert Q(1,2)-Q(1,99)-Q(3,100)-2*Q(3,100)**2 > Q(9,20)
c1=Q(23,100)**4*Q(9,20)**2*Q(49,50)
c2=c1*c1
R2,R4=tail(2),tail(4)
lower=2/(1+R4)-4*R4**2/c2
upper=2+4*R2**2/c2
assert lower > Q("1.99999") and upper < Q("2.02")
assert 16*(1-Q(6,100)) > 15
labels=[(n,m,k) for n in range(11) for m in range(11)
        for k in range(abs(n-m),n+m+1,2)]
assert {(n,m,k) for n,m,k in labels if n+m<=2} == {
    (0,0,0),(1,0,1),(0,1,1),(2,0,2),(0,2,2),(1,1,0),(1,1,2)}
for s in (1,2,3,4):
    total=sum((majorant(n)**3*majorant(m)**3*majorant(k))**s
              for n,m,k in labels if n+m)
    assert Q(50,49)**s*total <= tail(s)
print(f"{len(labels)} labels checked; a1 in ({float(lo/hi1):.12g}, {float(hi/lo1):.12g})")
print(f"R2 <= {float(R2):.12g}; R4 <= {float(R4):.12g}; c2 >= {float(c2):.12g}")
print(f"midpoint periodic/vacuum ratio in ({float(lower):.12g}, {float(upper):.12g})")
