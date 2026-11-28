# Finite compressed physical boundary value at the fixed target

This supplements LOCAL-REFERENCE-FINITE-BLOCK-BOUND.md. Scope: fixed
spatial spacing, zero total momentum, center-odd quadratic effective
model, coordinate-sign invariant sector, and E=−13/336 only. The result
is not a weighted operator limiting absorption theorem, an assertion
about density as a function of energy, finite-coupling scattering, or
the continuum problem.

## Reference boundary convergence

In a scalar submersion chart use the same amplitude subtraction as in the
finite block estimate:

    b(x,y)/(x−iη) = (b(x,y)−b(0,y))/(x−iη) + b(0,y)/(x−iη).

The centered quotient converges pointwise almost everywhere with a
uniform integrable majorant on the fixed support. Integrating the
second term on the symmetric normal interval gives 2i arctan(a/η),
which converges to iπ. Thus all scalar strict-distinct off-flat
cutoff matrix elements have finite boundary limits. Gapped parts
converge immediately by the resolvent identity and the local gap.

The remaining noncritical chart estimate is the analytic monotone
Cauchy–Green argument. In a definite cluster's real-analytic local
frame, orient its normal parameter so the derivative is positive
definite. Continue the cluster into x−iy for 0<y<y₀ to get
Im M(x−iy)≼−c y I and inverse bound (η+c y)⁻¹. For each smooth
compactly supported test amplitude, use a first-order almost analytic
extension and integrate by Cauchy–Green. The area integrand has a
uniform integrable majorant near y=0 since ∂bar amplitude is O(y),
and pointwise converges at every y>0 to the invertible complex
matrix expression. Boundary/cutoff terms a fixed positive distance
from the real axis converge as well. The same applies with the
smooth transverse compact support, and supplies limits for all the
definite cluster charts from the positive/negative face,
repeated-cosine, diagonal and flat-overlap proofs.

The conical angular charts on the flat elementary critical curves
are the one separate case. The previously published
FLAT-CRITICAL-INTERSECTIONS-AND-LOCAL-BOUND.md already establishes
local matrix-element convergence: its Cauchy angular integral
converges for each fixed radius ρ>0 with a uniform C/ρ majorant,
integrable against ρ dρ and the bounded remaining coordinates.
The additional exceptional companion cluster is covered by the
same analytic monotone argument.

A smooth finite partition over the complete torus strata therefore
gives convergence for each fixed pair of Fourier-polynomial finite
coordinate vectors. This gives norm convergence of every finite
compressed reference block, because the row and column spaces are
finite-dimensional. The decoupled reference J component converges
to −I_J/E and the coordinate-sign-invariant compression preserves
these conclusions.

## Finite defect inversion

Use the common-space identification from
FINITE-BLOCK-CONDITIONAL-LIMINF.md. The completed physical operator is
Hhat=B+V, B=A⊕0_J, with V=V* supported in the finite invariant space
S=G⊕D⊕J (reference-only ghost, detached return, physical near).
The invariant source w lies in S. Set

    Gη = P_S(B−E−iη)⁻¹|_S,      G+ = lim_(η↓0) Gη.

We prove I+VG+ invertible on S. If (I+VG+)q=0, then q=−VG+q and
⟨q,G+q⟩=−⟨VG+q,G+q⟩ is real by self-adjointness of V.
The positive-sign upper-half-plane resolvent identity gives

    lim_(η↓0) η ||(B−E−iη)⁻¹ q||²
        = lim_(η↓0) Im ⟨q,Gη q⟩ = 0.

The previously verified two-patch trace coercivity therefore gives
zero trace on each patch, i.e. q∈W. The two-patch Laurent criterion
produces the unique compact reference preimage y=Pq with (B−E)y=q.
It is invariant because B commutes with the coordinate-sign group,
q is invariant, and each group translate of y must be the same
unique compact preimage. Equivalently uniqueness follows from the
nonzero Laurent determinant almost everywhere and the invertible
J scalar.

The exact resolvent identity
(B−E−iη)⁻¹ q = y + iη(B−E−iη)⁻¹ y
shows that G+q=P_S y: the last expression after compression tends
to zero by the uniform finite-block bound, since y has finite
support. Consequently

    (Hhat−E)y = q+VP_S y = q+VG+q = 0.

Since the completed physical ghosts are genuinely decoupled scalar
zeros, E≠0 forces y_G=0. The remaining y is a compact invariant
physical homogeneous solution. The exact exterior-clear certificate
rules out every such nonzero solution: its radius-five support
bound applies also to the homogeneous invariant equation and the
coefficient matrix has full column rank 6549. (There is no
assumption that averaging an arbitrary homogeneous solution
would preserve a nonzero vector.) Therefore y=0 and q=0.
Finite dimensionality now gives invertibility of I+VG+.

For η>0 the finite identity is

    P_S(Hhat−E−iη)⁻¹|_S = Gη (I+V Gη)⁻¹.

It follows by solving the finite forcing equation q=w−V P_S v,
v=(B−E−iη)⁻¹q, and invertibility for η>0 also follows from the
self-adjoint resolvent (a nonzero kernel would produce an L²
eigenvector at a nonreal energy). By continuity of finite
matrix inversion the expression converges in norm to
G+(I+VG+)⁻¹. It agrees with the actual physical resolvent on
physical vectors, since the ghosts are decoupled.

The actual folded source has a strictly positive lower liminf by
the separate physical compact-range inhomogeneous certificate and
two-patch forcing argument after the finite reference bound.
Together with the finite compressed boundary limit this proves

    0 < lim_(η↓0) η ||(H−E−iη)⁻¹ w||²
      = Im ⟨w, G+ (I+V G+)⁻¹ w⟩ < ∞.

This is the finite positive Poisson boundary response at one energy
for exact w in the fixed-spacing quadratic physical model, not a
regularity claim in E, a spectral-density function, an interacting
scattering law, or a continuum result.
