"""Exact character and cubic-to-gap coefficient checks."""
from fractions import Fraction as F
from itertools import permutations
import sympy as s
m=s.symbols("m",positive=True)
x=s.symbols("x")
chi=lambda j: s.chebyshevu(j,x) if j>=0 else s.S(0)
for j in (0,1):
    assert s.expand(x*chi(j)-(chi(j+1)+chi(j-1))/2)==0
e0=F(1,4)/(-3*m)
e1=F(1,4)*(1/(3*m)-1/(5*m))
gap=s.factor(e1-e0)
assert gap==7/(60*m)
tags=(1,1,2)
weight=sum(F(1,9*tags[a]*tags[c]) for a,b,c in permutations(range(3)))
assert weight==F(4,9) and weight*F(1,16)==F(1,36)
assert s.factor(2*gap/36)==7/(1080*m)
print("character gap 7/(60m); cubic multiplier -1/36; derivative slope 7/(1080m)")
