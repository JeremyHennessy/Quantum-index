"""Independent exact algebra controls for the finite-resolution Schur argument."""
import sympy as S

I=S.I
g,a=S.symbols('g a', real=True)
# Fixed finite-dimensional even space with a two-dimensional exact
# target eigenspace and an untargeted even companion. The self-energy
# block models a finite positive odd boundary value, not a Wilson input.
Q=S.Matrix([[I,1,S.Rational(1,2)],[1,0,1],[S.Rational(1,2),1,2*I]])
E=S.diag(0,0,3)
T=E-g*g*(2*I*S.eye(3)+Q)
upper=T[:2,:2]-T[:2,2:]*T[2:,2:].inv()*T[2:,:2]
limit=(upper/g**2).applyfunc(lambda u:S.limit(u,g,0))
assert limit==-2*I*S.eye(2)-Q[:2,:2]
assert limit.inv()[0,0]==2*I/7
# The odd PSD imaginary part is rank one on this E eigenspace, so the
# strictness check does not assume full-rank loss or a simple even level.
a=S.Integer(2);M=S.Integer(2);L=S.Integer(0);c=S.Integer(1)
Y=S.im(limit.inv()[0,0])
assert a/(a+M+L)**2 < Y < 1/a-c/(a**2*(1+S.sqrt(M/a))**2) < 1/a
# A Hermitian detuning inside the degenerate space enters the same
# formula without negating the strict upper comparison.
D=S.Matrix([[S.Rational(3,2),1],[1,-1]])
B=S.im(Q[0,0])
S0=D-2*I*S.eye(2)-Q[:2,:2]
assert (S0.inv()[0,0]).as_real_imag()[1]==S.Rational(4,15)
assert 0<S.Rational(4,15)<S.Rational(1,2) and B>0
print('exact control: degenerate Schur loss, nonfull-rank imaginary form, Hermitian detuning')
