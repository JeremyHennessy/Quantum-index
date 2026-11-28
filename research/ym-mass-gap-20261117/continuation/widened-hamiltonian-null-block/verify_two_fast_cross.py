"""Exact quaternion polynomial replay of the two-fast-segment Haar cross."""
from math import prod
import sympy as s
q=[s.symbols(f'{a}0:4') for a in ('S','T','A','B','C','D')]
S,T,A,B,C,D=q
def mul(x,y):
    x0,*a=x;y0,*b=y
    va,vb=s.Matrix(a),s.Matrix(b)
    return (x0*y0-va.dot(vb),*(x0*vb+y0*va+va.cross(vb)))
def word(*ws):
    acc=ws[0]
    for w in ws[1:]: acc=mul(acc,w)
    return s.expand(acc[0])
def average(poly, coords):
    tot=0
    for m,c in s.Poly(poly,*coords).terms():
        if any(j%2 for j in m):continue
        wt=s.Rational(prod(prod(range(j-1,0,-2)) for j in m),
                      prod(range(4,4+sum(m),2)))
        tot += wt*c
    return s.expand(tot)
f,g=word(S,A,T,B),word(S,C,T,D)
P=average(average(f*g,S),T)
assert s.expand(P-s.Matrix(A).dot(s.Matrix(C))*s.Matrix(B).dot(s.Matrix(D))/4)==0
assert s.Rational(2,24)/4==s.Rational(1,48)
print("two-fast cross moment and split prefactor checked")
