"""Exact Haar cross moment, parity selection and endpoint denominators."""
from itertools import permutations, product
from math import prod
import sympy as s
S,T,A,B,C,D=[s.symbols(f'{a}0:4') for a in 'STABCD']
def mul(x,y):
    x0,*a=x;y0,*b=y
    va,vb=s.Matrix(a),s.Matrix(b)
    return (x0*y0-va.dot(vb),*(x0*vb+y0*va+va.cross(vb)))
def inv(x):return (x[0],*(-v for v in x[1:]))
def word(*ws):
    a=ws[0]
    for w in ws[1:]:a=mul(a,w)
    return s.expand(a[0])
def avg(poly,coords):
    total=0
    for m,c in s.Poly(poly,*coords).terms():
        if any(i%2 for i in m): continue
        total+=c*s.Rational(prod(prod(range(i-1,0,-2)) for i in m),
                            prod(range(4,4+sum(m),2)))
    return s.expand(total)
f,g,h=word(S,A),word(T,B),word(S,C,T,D)
got=avg(avg(f*g*h,S),T)
assert s.expand(got-word(inv(B),D,inv(A),C)/16)==0
tags=[{1},{2},{1,2}]
passes=[(i,j,k) for i,j,k in product(range(3),repeat=3) if not tags[i]^tags[j]^tags[k]]
assert set(passes)==set(permutations(range(3)))
weights=sum(s.Rational(1,9*len(tags[i])*len(tags[k])) for i,j,k in passes)
assert weights==s.Rational(4,9)
assert weights/16==s.Rational(1,36)
print("Haar fgh = Re(U2^-1 U4 U1^-1 U3)/16; six endpoint weights sum 4/9")
