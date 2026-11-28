# Flat surface in the pairwise-distinct cosine interior

This is a fixed-spacing result for the separated reference symbol at
`E=-13/336`, in the strict region `-2<X_i<2` with all cosines pairwise
distinct. It uses the exact elementary characteristic and the pinned
remainder from research tip
`21ee6ab4379eb07a3b114d694dff818f4e45d644`. This does not analyze off-flat
strict-interior points, the physical defect, or the continuum.

Write `(s,t,r)=(e1,e2,e3)`, `ell=-1/42`, and `lambda_f=E-ell=-5/336`.
Because the elementary characteristic is affine in `r` with nonzero constant
coefficient, the flat threshold graph is exactly

    r = 43*s^2/40 - 69*s/200 - 2*t - 19573/4000.

The angular-to-symmetric chart is locally invertible (sines and Vandermonde
nonzero), and the elementary energies are simple on this strict region.
On the graph its characteristic is `(lambda-lambda_f) P(lambda)` with

    2822400 P(lambda) = 2822400 lambda² + (33600s+68880)lambda
                         +100s²−20s−773.

The entire elementary discriminant has factors
`(10s−69)^2(10s+17)^2(40s+111)`, so `s=-1.7,-111/40,6.9`
are not in the strict region. The two other elementary branches are real,
simple and analytic there.

## Finite exceptional projections

Let `H` be the archived remainder of `Q_9(E-lambda)` modulo the elementary
characteristic. On the flat graph set `F0=H(lambda_f)`, take remainder
`A lambda+B` modulo `P`, and let `N=Res_lambda(P,A lambda+B)`.
Using rational primitive normalizations, the four polynomials have
`(deg_s,deg_t)` equal to (5,3), (10,3), (11,3), (22,6).
Up to nonzero rational constants, `N` is the product of the two other
thresholds. Their common zero is precisely `A=B=0`; a mixed zero has
`F0=N=0`.

Candidates via exact elimination in `t`:
- `Res_t(A,B)`: irreducible degree 43, three real roots in [-6,6].
- `Res_t(F0,N)`: factors of degrees 1 (mult 3), 1 (mult 3), 60
  (mult 1). Five degree-60 roots in [-6,6]. The only linear root
  there is s=-17/10, excluded by elementary simplicity.
- The two pair projections are coprime; no point carries all three
  distinct residual thresholds.

At every nonexcluded projection root, the specialized leading coefficients
and the first subresultant leading coefficient are nonzero. This gives a
unique real `t` from the degree-one subresultant by fixed-degree
specialization. A simple resultant root then forces a nonzero (s,t)
Jacobian: one t derivative is nonzero since the common gcd is linear,
and the other polynomial along its implicit graph equals the resultant
up to a local nonzero factor. To select physical lifts, the cosine cubic
`X³-sX²+tX-r` must have positive discriminant and all three roots strictly
between -2 and 2. For its three real roots the latter is equivalent to
strict positivity of all three elementary symmetric sums of each of
`X_i+2` and `2-X_i`: positive roots give these signs; conversely the
monic polynomial of the negated triple has all coefficients positive,
so no nonnegative root, which proves positivity. Rational interval
evaluation certifies every sign at the lifted algebraic point. All three
degree-43 lifts and four of the five degree-60 lifts have negative cosine
discriminant. The unique strict physical pair is a mixed pair, at

    -500905753/2500000000 ≤ s ≤ -2003623011/10000000000
    -12230250897/5000000000 ≤ t ≤ -24460501793/10000000000.

These are outward-rounded rational enclosures of a uniquely isolated
resultant root and its unique finite lift. All eight physical sign tests
are positive there. The sorted cosine triple is approximately
(-1.645677,-0.045303,1.490617), only for orientation.

## Individual regularity along the flat graph

The t-leading coefficients of `F0` and `N` have no zeros for s∈[-6,6].
`Res_t(F0,partial_t F0)` has degree 11 and no real root there, so the
flat-elementary branch is everywhere a smooth threshold on the strict
flat graph. `Res_t(N,partial_t N)` has factored degree/multiplicity
(1,3), (2,1), (2,2), (43,2), (64,1). The two quadratics have no real roots
there; the linear root -111/40 is excluded by elementary simplicity; the
degree-43 factor is exactly the both-other-branch projection. At a physical
lift of that factor, independence of the two individual threshold gradients
follows from the exact Jacobian of (A,B) and the invertible evaluation at
the two distinct roots of P. A different multiple t-root over the same s
would raise the discriminant order beyond its certified value two.

At a simple discriminant zero, an individual branch cannot have a spatial
singularity. To see this, translate the root t to zero and pass to its
local monic Weierstrass factor. A multiplicity of at least three forces the
Sylvester resultant to have order at least two, since the specialized
Sylvester matrix has nullity at least two. For a double t-root a zero
s-derivative makes its local constant coefficient vanish to order at
least two; its discriminant then also has order at least two. Separate
root clusters multiply these discriminants times nonzero pair resultants,
so additional clusters cannot cancel the argument. Local factorization
into the two analytic elementary threshold functions ensures the known
transverse pair exhausts the order-two
discriminant at each physical degree-43 lift: the mutual resultant
vanishes and its square contributes order at least two. This also excludes
a singular threshold at a different t-lift of the same s, including when
the known pair is outside the physical domain. Thus each individual
threshold has nonzero gradient on the strict flat graph.

## Local operator consequence

Where present, each residual threshold has a simple companion energy root:
nullity >=2 of the reduced characteristic at a nonflat energy would make
its first spatial derivatives vanish; for the removed flat eigenvalue,
an additional multiplicity >=2 beyond its three fixed copies also makes
the first derivatives of the reduced characteristic vanish. One way to
see the latter is to isolate the local analytic Hermitian cluster around
ell, divide its characteristic by the three fixed factors, and use
that a perturbation of a Hermitian matrix shifts each eigenvalue by at most
its norm: the product of at least two additional shifted eigenvalues is
quadratic in local variation. The nonzero tangential derivatives already
proved exclude both possibilities.

At a point on the strict flat graph there are therefore three persistent
flat target modes plus zero, one, or two simple residual modes. When the
flat-elementary threshold has a residual root, the additional companion
energy is ell. Its simple reduced root defines analytic delta; the full
four-dimensional analytic companion cluster, shifted by ell, vanishes
where delta=0 and therefore divides as delta times an analytic rank-one
projector. The regular tangential derivative furnishes an analytic defining
coordinate for delta. This recovers smooth split projectors even through
that rank jump. Other residuals are simple and occur in distinct
elementary tensor blocks.

The elementary lambda_f has nonzero normal derivative, since
partial_r p is a nonzero constant and partial_lambda p is nonzero.
With one residual its nonzero tangential derivative, and with two residuals
their independent tangential derivatives (nonzero pair Jacobians), make
all 1–3 summed-energy gradients independent in the full angular chart.
Choose a direction making them all positive; this produces a definite
compressed derivative for the isolated rank 3, 4 or 5 target cluster.
The existing local monotone Cauchy–Green argument thus bounds the reference
matrix elements with smooth cutoffs near every point of this strict flat
surface. Compactness of the full torus does not close the remaining
off-flat strict-interior cases: no global LAP, physical density or continuum
result is asserted.

## Replay

    PYTHONHASHSEED=229 python verify_distinct_flat.py \
      distinct-cross.json new-flat-graph.json

Generate the pinned input with `distinct_cross_reducer.py` as described in
`DISTINCT-INTERIOR-CROSS-REDUCTION.md`. Seeds 229, 233 and 461 reproduced
45,058 identical output bytes, SHA-256
`707efcf829645f777c8f13f2f18f84382ddcaf4deea9ec0bee6c9e95c8216e91`.

Input `distinct-cross.json` SHA-256
`b61b6277291c76af945865d3840271bf32725cbc68521839441ee25c563d8d23` is
reproducible from the previous distinct-cross reducer on the pinned
global Q9. The output is 45,058 bytes, SHA-256
`707efcf829645f777c8f13f2f18f84382ddcaf4deea9ec0bee6c9e95c8216e91`.
