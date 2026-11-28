"""Exact Schur and overlap scalings for the true radial loss."""
import sympy as s
b,k,r,u,w=s.symbols("b k r u w",positive=True)
lam=3*(b+k)
D=(lam+2*r)*(lam-6*r)
K=s.Matrix([[lam,6*r],[2*r,lam-4*r]])
assert s.factor(K.det()-D)==0
assert all(s.factor(x)==0 for x in K*s.Matrix([-6*r/D,lam/D])-s.Matrix([0,1]))
assert all(s.factor(x)==0 for x in K*s.Matrix([1,-1])-(lam-6*r)*s.Matrix([1,-1]))
CT=r**2*lam/(3*k*k*D)
assert CT.subs({b:4,k:4,r:1})==s.Rational(1,936)
limit_T=s.limit(CT.subs({b:r+u,k:r+w}),r,s.oo)
limit_J=s.Rational(5,54)/(u+w)
assert s.factor(limit_T-1/(12*(u+w)))==0
assert s.factor(limit_J/limit_T-s.Rational(10,9))==0
pref=4*r/(3*k*D)
fluct=pref**2/b*(3*r*r*(lam-6*b)**2+(6*r*r-lam*b)**2)/16
assert fluct.subs({b:4,k:4,r:1})==s.Rational(25,389376)
print("two-mode inverse, adjacent-square exponents, 10/9 ratio and positive fluctuation checked")
