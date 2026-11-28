# Uniform finite-region reference resolvent bound at the target energy

Fixed spatial spacing, zero total momentum, center-odd quadratic effective
reference only, at E=−13/336. This proof completes its uniform finite
reference block condition (U). It does not, by itself, imply a bound for
the defect-dressed physical resolvent, a boundary-value limit, pointwise
density, finite-coupling scattering, or a continuum conclusion.

Prerequisites are verified in research commit
9a2decc8097bacbf7a35c120c5b5756740d6b1c0. The precise tail/reference symbol
is the Kronecker sum from [SEPARATED-CHANNEL.md](SEPARATED-CHANNEL.md),

    M(p) = B₆(p) ⊗ I₁₄ + I₃ ⊗ A₉(−p).

The fourteen companion internal channels are six rectangle and eight cube
null states. On the fixed Bloch basis any nontrivial Gram metric is a
constant positive matrix and is converted once to orthonormal operator
coordinates. Thus the matrices below are Hermitian for real p and
real analytic in local angular coordinates. This argument concerns
the full reference convolution (including reference-only ghost
coordinates), not the physical near defect that couples its components.

## Strict distinct off-flat points: reducing-projector argument

Fix a momentum p₀ with all three cosines Xᵢ in (−2,2), pairwise distinct,
and away from the flat threshold. The exact elementary characteristic
is affine in e₃ with constant nonzero derivative. The map from angles
to (e₁,e₂,e₃) is a local analytic chart by nonvanishing angular sines
and Vandermonde. If an elementary eigenvalue were multiple, the
Hermitian rank deficiency would make all first determinant derivatives
zero, contradicting its e₃ derivative. The three roots λᵢ and their
orthogonal projections Pᵢ are analytic locally, with explicit formula

    Pᵢ = product over j≠i of (B₆−λⱼ I)/(λᵢ−λⱼ).

Each Pᵢ⊗I reduces M exactly, not just on the surface E. A selected
branch meets E precisely when A₉ has eigenvalue μᵢ=E−λᵢ. Off the flat
threshold this is not the removed companion energy ℓ=−1/42. On the
i-th branch the [exact stationary exhaustion](STRICT-INTERIOR-STATIONARY-EXHAUSTION.md) proves that

    hᵢ(p)=Q₉(E−λᵢ(p);p)

has nonzero gradient wherever it vanishes: the global energy chart
(s,t,λᵢ), with e₃ eliminated using the elementary characteristic,
is locally analytic and invertible and identifies hᵢ with its
certified scalar G. Since μᵢ≠ℓ, any companion multiplicity ≥2 would
make all first derivatives of hᵢ vanish by the rank criterion for
the full determinant; the nonzero factor dividing out the persistent
flat copies cannot change this. Hence the selected companion eigenvalue
is simple. Its analytic continuation and projection are denoted
μᵢ(p) and Qᵢ(p), respectively. Implicit differentiation gives

    d(λᵢ+μᵢ−E) = −dhᵢ / (partial_μ Q₉)(μᵢ;p)

at the center. It is nonzero.

Shrink the neighborhood so all untargeted modes are separated from
E and each targeted summand has its own scalar submersion chart
(xᵢ,yᵢ) with xᵢ=λᵢ+μᵢ−E. The cutoff resolvent splits exactly as a bounded
gapped term and terms with projector Pᵢ⊗Qᵢ divided by xᵢ−iη. This split
is valid even if two selected summed energies coincide or their
gradients are antiparallel; different i are reducing summands and do
not need a common monotone direction.

For any smooth compact cutoff supported sufficiently near p₀ and
smooth Fourier test amplitudes, each term, in its own chart, has form

    ∫ dy ∫_{−a}^a b(x,y)/(x−iη) dx,

with a smooth compactly supported scalar b including both Fourier
vectors, the projector, the cutoff and the chart Jacobian. Choose
the support compactly inside a coordinate rectangle and extend b
by zero. Write b(x,y)=(b(x,y)−b(0,y))+b(0,y). The first integral is
bounded absolutely by 2a sup|∂ₓ b| for each y, uniformly in η>0.
For the second use the symmetric full interval integral
2i arctan(a/η), of modulus at most π. The y support is bounded
and the total estimate is independent of η. All estimates are
bilinear and controlled by C¹ norms of the smooth test amplitudes.
The gapped complement is uniformly bounded by the inverse local gap.
Thus every strict distinct off-flat point has a full angular
neighborhood with uniform cutoff matrix elements. An answer to the
ordinary cross-pair rank-defect projection is not needed here.

## Complete torus cover and finite-region norm

The other momentum points are exhausted as follows; each listed
published result is a full neighborhood statement in the angular
torus, not merely an estimate for the restriction to a stratum.

- At least one cosine is 2: [POSITIVE-FACES-LOCAL-BOUND.md](POSITIVE-FACES-LOCAL-BOUND.md) (all faces,
  including diagonal/edge/corner cases).
- At least one cosine is −2: [NEGATIVE-PLANE-INTERSECTIONS-AND-LOCAL-BOUND.md](NEGATIVE-PLANE-INTERSECTIONS-AND-LOCAL-BOUND.md)
  (all faces, with [FLAT-CRITICAL-INTERSECTIONS-AND-LOCAL-BOUND.md](FLAT-CRITICAL-INTERSECTIONS-AND-LOCAL-BOUND.md) and
  [RESIDUAL-SYMMETRY-LINES-AND-LOCAL-BOUND.md](RESIDUAL-SYMMETRY-LINES-AND-LOCAL-BOUND.md) for their special curves).
- Three strict nonendpoint cosines with exactly two equal:
  [STRICT-REPEATED-COSINE-LOCAL-BOUND.md](STRICT-REPEATED-COSINE-LOCAL-BOUND.md).
- Three strict nonendpoint cosines all equal: [ALL-EQUAL-LINE-LOCAL-BOUND.md](ALL-EQUAL-LINE-LOCAL-BOUND.md);
  it covers each threshold representative, and at any other point
  continuity supplies a local gap.
- Three strict nonendpoint cosines distinct on the flat threshold:
  [LOCAL-DISTINCT-INTERIOR-FLAT-GRAPH.md](LOCAL-DISTINCT-INTERIOR-FLAT-GRAPH.md).
- Three strict nonendpoint cosines distinct off the flat threshold:
  the analytic reducing-projector estimate just proved.

Take a finite subcover and smooth partition of unity on the compact
torus. For fixed finite reference coordinate regions S,T, Bloch
transforms of vectors supported in S,T are trigonometric polynomials
in the fixed 42-dimensional internal space. Their Cᵏ norms for every
fixed k are bounded by constants depending only on the regions times
the Hilbert norms of the vectors (finite sums and Cauchy–Schwarz).
Canonical reanchoring and constant Gram changes preserve this statement.
Each localized bound in the cover acts on these smooth amplitudes,
also after any smooth cutoff, projection or change of local frame.
Sum the finitely many estimates. With P_S,P_T denoting the projections
onto those fixed finite spaces, the result is

    sup_{η>0} ||P_S (A−E−iη)⁻¹ P_T|| < ∞,

where A is the reference convolution. If any local estimate was only
stated for small η, larger η are covered by the trivial self-adjoint
resolvent bound 1/η. Compression to the coordinate-sign-invariant
sector preserves the estimate, since the full convolution commutes
with those symmetries. The decoupled J scalar in the common-space
completion has norm |−E−iη|⁻¹≤|E|⁻¹. Taking S,T to include precisely
the finite forcing and compact-preimage spaces supplies (U).

## Physical quadratic-model consequence

The [conditional physical theorem](FINITE-BLOCK-CONDITIONAL-LIMINF.md)
now applies: its separate two-patch compact-preimage criterion and
no-compact-physical-solution certificate are already established.
Writing H for the actual physical quadratic effective operator in the
invariant fibre and w for the exact folded cubic source, the conclusion is

    liminf_(η↓0) η ||(H−E−iη)⁻¹ w||²
      = liminf_(η↓0) Im ⟨w,(H−E−iη)⁻¹w⟩ > 0.

This is a strictly positive lower liminf of the Poisson-smoothed
response at the fixed target energy E, not a physical boundary limit,
finite pointwise density, or a pole. The reference proof is not a
uniform norm bound for the physical resolvent itself. The quadratic
effective result does not transfer to nonzero coupling or the continuum.
