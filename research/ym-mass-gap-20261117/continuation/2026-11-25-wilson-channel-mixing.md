# Wilson channel mixing: a finite four-dimensional negative control

**2026-11-25 | Research-only continuation after Phase 14 | No Phase 15 activation.**

## Result and scope

The preceding local-source study bounded how many channels a single plaquette can excite, but did not show that the lowest representation evolves autonomously through successive shells. Here is an exact finite conditional-law obstruction to imposing such autonomy as a universal rule. For a realizable four-dimensional SU(2) Wilson boundary, normalization does not diagonalize the source-to-boundary map: a fundamental trace induces a spin-1 component, and a spin-1 character induces a fundamental component. The coefficients below are leading Taylor coefficients about strong coupling, with unnormalized character basis and normalized fundamental trace. This is not evidence of persistent excitation across annuli, or a counterexample to decay in the full equilibrium measure.

## Geometry and conditional channel

Keep the four oriented links U_1,…,U_4 of one elementary square variable and hold all other links fixed, on a box with no wrapping at this square. Each variable link has six incident plaquettes: the interior square and five exterior staples. Orient the staples compatibly with U_i. Prescribe each of its five exterior products equal to B_i. This is realizable: each exterior staple has a distinct opposite link with both endpoints outside the square, and its two connectors each touch the square. Set the connectors to identity and choose the opposite link or its inverse to give B_i. The twenty distinct opposite links cannot coincide with any connector. Exterior-only action terms cancel in conditional normalization.

Write χ_j for the SU(2) character of spin j, τ=χ_(1/2)/2, H=B_1B_2B_3B_4, and p_j(t)=I_(2j+1)(t)/I_1(t) for the normalized SU(2) convolution multiplier. Let K be the convolution associated with the product of the four independent exterior-tilted links, so Kχ_j=p_j(5β)^4 χ_j. In particular this follows by taking the Fourier matrix of each tilted link and multiplying the scalar multipliers along the product. The full conditional operator on a class source F(U_1U_2U_3U_4) is

    T_β F(H) = K[F exp(β τ)](H) / K[exp(β τ)](H).

With the interior action removed but exterior tilts retained, the operator is K and both mixed coefficients vanish exactly.

## Exact leading coefficients

1. **Fundamental to spin 1.** Temporarily separate the interior coupling s. Up to the scalar one-link normalization z(s), the denominator has character terms 1+Aχ_(1/2)+Bχ_1+…, where A=2p_(1/2)(5β)^4 p_(1/2)(s) and B=3p_1(5β)^4 p_1(s). The conditional trace is ∂_s log of the denominator, at s=β. The spin-1 coefficient at order β^9 is from B'−AA', since χ_(1/2)^2=1+χ_1. With p_(1/2)(t)=t/4+O(t³) and p_1(t)=t²/24+O(t⁴), the coefficient of χ_1 in T_β τ is

       5⁸ (1/(4·24⁴) − 1/4⁹) β⁹ + O(β¹¹)
       = −25390625/21233664 · β⁹ + O(β¹¹).

2. **Spin 1 back to fundamental.** Since χ_1χ_(1/2)=χ_(1/2)+χ_(3/2), the numerator of T_β χ_1 has a fundamental component (β/2)p_(1/2)(5β)^4 to leading order. Denominator mixing from its constant term in the numerator starts at O(β⁷) (the constant term is O(β²)); no lower-degree term competes. The coefficient of χ_(1/2) is

       625/512 · β⁵ + O(β⁷).

Parity of the character ring and Taylor powers gives the quoted next possible orders. These nonzero coefficients imply mixing for sufficiently small positive β in this conditional subsystem. The negative forward coefficient is not a probability, and contributes no sign theorem for the full equilibrium measure.

## Consequence and next check

Do not delete higher channels solely because the original source is fundamental, and do not use the sign of a single local coefficient to infer screening. This example fixes exterior links and does not implement two nested physical annuli. Next target: in the actual Wilson equilibrium law, decompose a two-shell conditional expectation by the fundamental projection and its complement in the *same weighted inner product*. Bound or exhibit the return term from the complement and track its coupling dependence; also verify that the chosen projections and inner product represent the intended physical boundary observable. Keep shared-link and normalization terms in every comparison.

SU(2) fusion and character convolutions are established techniques: [Drouffe and Zuber, Phys. Rep. 102 (1983)](https://www.lpthe.jussieu.fr/~zuber/MesPapiers/dz_PR83.pdf). The specific mixed-coefficient calculation is a derived research result, not an independently refereed theorem or certified novelty. Nothing here supplies a continuum-uniform decay rate or a mass gap.

## Reproduction

Run the following with Python 3; standard library only. The check expands the unnormalized interior exponential in the character ring, convolves exactly using Bessel power series, and divides in the character ring through order 11. The independent derivative identity is checked through order 10. Both mixing coefficients, absence of lower powers, parity, and a diagonal no-interior-action control passed. No desktop Codex session, deployment, or production changes.

```python
from fractions import Fraction as F
from math import factorial
N=11
Z=[F(0)]*(N+1)
def add(a,b):return [x+y for x,y in zip(a,b)]
def scale(a,x):return [x*v for v in a]
def mul(a,b):return [sum(a[k]*b[d-k] for k in range(d+1)) for d in range(N+1)]
def inv(a):
    assert a[0]
    b=Z.copy();b[0]=1/a[0]
    for d in range(1,N+1):b[d]=-sum(a[k]*b[d-k] for k in range(1,d+1))/a[0]
    return b
def deriv(a):return [(d+1)*a[d+1] for d in range(N)]+[F(0)]
def IoverB(n,c):
    a=Z.copy()
    for k in range(N+1):
        p=2*k+n-1
        if p>N:break
        a[p]=F(c,2)**(p+1)/factorial(k)/factorial(k+n)
    return a
def pow4(a):return mul(mul(a,a),mul(a,a))
def chmult(a,b):
    c={}
    for i,u in a.items():
        for j,v in b.items():
            for k in range(abs(i-j),i+j+1,2):
                c[k]=add(c.get(k,Z),mul(u,v))
    return c
def chsub(a,b):return {k:add(a.get(k,Z),scale(b.get(k,Z),-1)) for k in a.keys()|b.keys()}
def cp(n):return {n:[F(1)]+Z[1:]}
# exp(beta chi_1/2) where index 1 means spin 1/2 and /2 means trace normalization.
boltz={}; p=cp(0)
for d in range(N+1):
    for k,a in p.items():
        if a[0]:
            boltz.setdefault(k,Z.copy())[d]=a[0]/(2**d*factorial(d))
    p=chmult(p,cp(1))
weights={}
for k in range(N+1):
    weights[k]=pow4(mul(IoverB(k+1,5),inv(IoverB(1,5))))
def conv(q):return {k:mul(a,weights[k]) for k,a in q.items() if k in weights}
def ratio(num,den):
    out={k:Z.copy() for k in num.keys()|den.keys()}
    # Coefficient-by-coefficient character-ring division, since den_0=1.
    assert den[0][0]==1 and all(a[0]==0 for k,a in den.items() if k)
    for d in range(N+1):
        res=chsub(num,chmult(den,out))
        for k,ar in res.items():
            if ar[d]:out.setdefault(k,Z.copy())[d]=ar[d]
    return out
def coeff(q,k,d):return q.get(k,Z)[d]
def expected(q,k,d,c):
    assert all(not coeff(q,k,i) for i in range(d)),q[k][:d]
    assert coeff(q,k,d)==c,(k,d,coeff(q,k,d),c)
D=conv(boltz)
W=ratio({k:scale(a,F(1,2)) for k,a in conv(chmult(cp(1),boltz)).items()},D)
J=ratio(conv(chmult(cp(2),boltz)),D)
lower=5**8*(F(1,4*24**4)-F(1,4**9))
upper=F(5**4,2*4**4)
expected(W,2,9,lower)
expected(J,1,5,upper)
W0=conv({1:[F(1,2)]+Z[1:]})
J0=conv(cp(2))
assert all(not coeff(W0,2,i) and not coeff(J0,1,i) for i in range(N+1))
# Independent derivative of unnormalized partition divided by Z.
# Differentiate only the central coupling before tying both couplings to beta.
direct=ratio(conv({k:deriv(a) for k,a in boltz.items()}),D)
assert all(coeff(direct,k,i)==coeff(W,k,i) for k in direct.keys()|W.keys() for i in range(N))
assert coeff(W,2,10)==coeff(J,1,6)==0
print('spin 1/2 trace -> spin 1:',lower,'at beta^9; remainder O(beta^11)')
print('spin 1 character -> spin 1/2:',upper,'at beta^5; remainder O(beta^7)')
print('Exact checks passed: lower powers, parity, derivative identity and no-interior-action diagonal control.')
```
