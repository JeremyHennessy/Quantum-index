"""Exact factors for the regular-class common-segment inverse score."""
import sympy as s
b,k,r,L,u,v,C=s.symbols("b k r L u v C",positive=True)
A=3*k-r**2/b
D0=2*b+A-4*r
D2=2*b-4*r**2/A
eq=lambda x,y:s.factor(x-y)==0
assert eq(D0,(2+r/b)*(b-r)+3*(k-r))
assert eq(D2,6*(b*k-r**2)/A)
assert (A.subs({b:4,k:4,r:1}),D0.subs({b:4,k:4,r:1}),D2.subs({b:4,k:4,r:1}))==(s.Rational(47,4),s.Rational(63,4),s.Rational(360,47))
pref=r**2/(9*b*k**2)
assert pref.subs({b:4,k:4,r:1})==s.Rational(1,576)
coef=pref/(D0+D2*C)
assert eq(s.limit((L*coef).subs({b:L+u,k:L+v,r:L}),L,s.oo),1/(27*(u+v)*(1+C)))
assert eq(s.limit((L**4*coef).subs({b:L,k:L}),L,s.oo),r**2/(9*(5+2*C)))
print("matrix Schur factor, neighboring-square constants, and two large-length limits verified")
