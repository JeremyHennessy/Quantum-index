"""Exact Haar quaternion moments and three-loop physical split."""
import sympy as s
z,y=s.symbols('z0:4'),s.symbols('y0:4')
from functools import lru_cache
from math import prod
@lru_cache(None)
def moment(m):
    if any(i%2 for i in m):return s.S(0)
    return s.Rational(prod(prod(range(k-1,0,-2)) for k in m),
                      prod(range(4,4+sum(m),2)))
def avg(p):
    return sum(c*moment(m[:4])*moment(m[4:]) for m,c in s.Poly(p,*z,*y).terms())
v=[z[0],y[0],sum(i*j for i,j in zip(z,y))]
phi=[2*a for a in v]
assert s.Matrix([[avg(a*b) for b in phi] for a in phi])==s.eye(3)
t=s.symbols('t',real=True)
A=s.Matrix([[s.S(-1)/4*t*t*int(i==j)
             -t*t/6*sum(avg(a*b*q) for q in v)
             for j,b in enumerate(phi)] for i,a in enumerate(phi)])
assert A== -t*t/s.Integer(4)*s.eye(3)-t*t/s.Integer(24)*(s.ones(3)-s.eye(3))
la=s.symbols('lambda')
assert s.factor(A.charpoly(la).as_expr()-(la+t*t/3)*(la+5*t*t/24)**2)==0
print("Haar first-level Gram, triple moment coupling, and split eigenvalues checked")
