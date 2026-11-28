"""Exact two-energy projection orientation and low-pass cancellation control."""
import sympy as S
I=S.I
H=S.diag(0,2); W=S.Matrix([[1,3],[3,5]]);P=S.diag(1,0)
# Outside the filter window, int e^(iΔt) W_gamma(t) dt = i/Δ.
D=S.Matrix(2,2,lambda a,b: I*W[a,b]/(H[a,a]-H[b,b]) if a!=b else 0)
Pprime=S.Matrix([[0,-S.Rational(3,2)],[-S.Rational(3,2),0]])
assert I*(D*P-P*D)==Pprime
assert W+I*(H*D-D*H)==S.diag(1,5)
u,t=S.symbols('u t',real=True)
phase=S.diag(1,S.exp(2*I*u)); Wtau=phase*W*phase.conjugate().T
comm=(W*Wtau-Wtau*W)[0,0]
d=(I*S.integrate(comm,(u,0,t))).simplify()
assert d==9*(S.cos(2*t)-1)
assert d.subs(t,-t)==d
print("exact spectral transport sign, low-pass cancellation and equal-charge derivative parity pass")
