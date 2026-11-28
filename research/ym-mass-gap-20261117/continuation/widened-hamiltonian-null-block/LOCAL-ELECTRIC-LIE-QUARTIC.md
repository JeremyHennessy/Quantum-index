# Connected fourth order via the all-electric-charge Lie normal form

Fixed spacing, finite open Wilson boxes, H(g)=H₀−gV, and then the
coefficient-level thermodynamic zero-total-momentum fibre where stated.
Research only. This is not an interacting band projection, a
volume-uniform Schur-resolvent estimate, finite-coupling scattering,
or a continuum claim.

## Exact local electric homological inverse and domains

The repository normalization on each edge is 2j(j+1), j=n/2.
Thus its Casimir eigenvalues are n(n+2)/2 and the finite tensor sum H₀
has spectrum in (1/2)Z. The minimum positive local edge energy is 3/2.
Both statements are consistent with a fundamental four-edge loop at
energy 6. Take period L₀=4π. For a bounded edge-local operator A let
α_t(A)=e^(itH₀) A e^(−itH₀) and define (weak operator integrals)

    D(A)=L₀⁻¹∫₀^L₀ α_t(A)dt,
    Γ(A)=L₀⁻¹∫₀^L₀ i(t−L₀/2) α_t(A)dt.

Their operator norms are bounded by ||A|| and π||A||. In free-energy
matrix blocks, D keeps equal energies and Γ divides an unequal
energy entry by the row-minus-column energy difference (integration
by parts, using e^(iL₀ω)=1). Γ is zero on equal energies. Thus
[H₀,Γ(A)]=A−D(A), with the following domain meaning. For ψ in the
finite-electric-energy Peter–Weyl core, the energy coordinates of
H₀Γ(A)ψ are exactly those of the Hilbert vector
Γ(A)H₀ψ+(A−D(A))ψ. Their square summability proves Γ(A)ψ∈Dom H₀.
Approximation in graph norm by this spectral core and closedness
of H₀ extend both claims to the full domain. If A is Hermitian,
Γ(A) is skew-adjoint. D(A) commutes with the free evolution.

H₀ is a sum of independent edge Casimirs. Conjugation, averages,
and Γ therefore preserve strict edge support. The link Casimir
commutes with left and right vertex gauge action, so the maps
preserve gauge covariance and send invariant inputs to invariant
operators. They may be computed on the edge tensor Hilbert space
then restricted to the physical Gauss-law subspace. No product-band
hypothesis on the physical energy-15 eigenspace is used.

## Fourth order BCH and linked terms

Set W=−V. An interaction means a collection of bounded operators with
specified link support. W is a sum over single plaquette supports.
Define A₁=W, S_n=Γ(A_n), C_n=[S_n,H₀]=D(A_n)−A_n, D_n=D(A_n),
applying D and Γ to each support component. The degree 2–4 inputs
before adding the cancelling [S_n,H₀] term are

    A₂=[S₁,W]+½[S₁,C₁],
    A₃=[S₂,W]+½([S₁,C₂]+[S₂,C₁]+[S₁,[S₁,W]])
                  +⅙[S₁,[S₁,C₁]],

    A₄=[S₃,W]
       +½([S₁,C₃]+[S₂,C₂]+[S₃,C₁]+[S₁,[S₂,W]]+[S₂,[S₁,W]])
       +⅙([S₁,[S₁,C₂]]+[S₁,[S₂,C₁]]+[S₂,[S₁,C₁]]
           +[S₁,[S₁,[S₁,W]]])
       +1/24 [S₁,[S₁,[S₁,C₁]]].

Here C_n is a commutator with H₀, not the previously named folded
cubic coefficient. These identities follow by degree collection
in e^(ad S)H with S(g)=Σ_(n=1)^4 gⁿ S_n. Operators on disjoint sets
of links commute, even when the sets meet at a vertex; D and Γ
never enlarge support. Each order n therefore consists only of
connected clusters of at most n plaquette insertions, where adjacency
is sharing a link and repeated plaquettes are allowed. In particular
there is exact cancellation of every disconnected multiset at the
fourth order in this specified gauge. Counting bounded support
BCH terms per incident edge gives box-independent bounds on D_n,S_n.
For an independent check on actual Wilson local algebra, the
single-plaquette character basis χ_j has W entries −1/2 between
j and j±1/2, with free energies 2n(n+2). Only n≤2 can return to its
vacuum in four insertions. Exact replay gives vacuum second and
fourth coefficients −1/24 and 5/27648; two disjoint plaquettes
give twice each, with no mixed quartic or cubic coefficient.

## Uniform interaction remainder, and the compressed consequence

Use per-edge interaction norm
||Φ||_int=sup_e Σ_(X contains e)||Φ_X||. If Φ,Ψ have maximum support
sizes m,n, their commutator interaction, formed by intersecting
support pairs, obeys

    ||[Φ,Ψ]||_int ≤ 2(m+n)||Φ||_int||Ψ||_int.

Indeed root the output edge either in the Φ term or in the Ψ term
and sum the other interaction over intersection edges; this double
counting only enlarges the upper bound. With M=16 links as a common
support-size bound for S(g), C(g)=[S(g),H₀] and W, the iterates from
any one of these inputs obey
||ad_S^k A||_int ≤ (2M||S||_int)^k (k+1)! ||A||_int:
at step k the supported union has size at most (k+1)M and the
commutator estimate applies inductively.

The bounded-operator exponential of each S(g) in a finite box
preserves Dom H₀, because S preserves the domain with bounded
commutator and its exponential series converges in graph norm.
For real g it is unitary. Duhamel on the domain gives exactly the
two series
g Σ_(k≥0) ad_S^k W/k! and Σ_(k≥0) ad_S^k C(g)/(k+1)!
for the difference e^S H(g)e^(−S)−H₀. For complex g these
series are analytic as interactions and converge absolutely
and uniformly in volume on a common small disk: there
2M||S(g)||_int≤1/2 by the bounded finite-order coefficients.
Thus degree collection and a Cauchy tail bound give on a
smaller disk the actual identity

    e^S H(g)e^(−S)=H₀+Σ_(n=1)^4 gⁿD_n + R_g,
    ||R_g||_int ≤ C |g|⁵

with C and the disk independent of box. This is per-edge
interaction norm, not extensive operator norm or off-band norm.

A simple quadratic-form argument gives a useful compressed estimate
without counting or dropping any intertwiner. Write P=P₁₅, and for
each nonempty edge support X let J_X be the excitation projector
in P for at least one edge in X. Each local link vacuum is the
unique trivial Peter–Weyl representation; the local charge-zero
space on the tensor factors X is therefore one-dimensional,
with factorized constant vector. A local bounded Hermitian A_X
need not commute with local charge for this argument. Acting on
a P vector with no edge excited in X, the exterior energy is
already 15 and untouched by A_X. Final compression to P
forces the local output to charge zero, so it equals its local
vacuum expectation times the input. Hermiticity gives the same
support condition on the left. Thus

    P(A_X−⟨vac_X,A_X vac_X⟩)P
      =J_X P(A_X−⟨vac_X,A_X vac_X⟩)P J_X.

Let n_e mark a nontrivial spin on edge e. In P,
J_X≤Σ_(e∈X)n_e and Σ_e n_e≤10, since every excitation costs
at least 3/2. This does not assume one-dimensional invariant
spaces at occupied labels: the inequalities hold for tensor spin
projectors and all physical intertwiner multiplicities. Summing
quadratic forms gives for every Hermitian interaction A

    || P(A−⟨vac,A vac⟩)P || ≤20||A||_int.

In order n the D_n components commute with local electric charge
(the exterior commutes with all local operators), so their
vacuum action is scalar even before compression. The same
compressed estimate applies to the actual R_g above. It proves
a uniform O(g⁵) P→P remainder after subtraction of the rotated
electric-vacuum expectation. At finite volume the latter has
the same Taylor coefficients through order four as the true
vacuum eigenvalue, by the same perturbation argument below.
This does not identify those two scalars at nonzero g uniformly
in volume.

## Relation to canonical gauge, and slow folding

For fixed finite volume only, bounded perturbation near the isolated
free band gives a canonical direct-rotation graph. Because the local
normal form above has off-charge remainder O_Λ(g⁵) in ordinary
operator norm for this *fixed* box, its transformed band projector
differs from P by O_Λ(g⁵) by contour resolvent comparison. The same
holds for the energy-weighted projection by using z times the
contour integrand; this avoids taking an unbounded norm of H₀.
Consequently through quartic order the canonical transport is
the Lie transport e^(−S) restricted to P followed by the adjoint
polar unitary of F=P e^(−S)P in P coordinates. One can verify the
adjoint convention directly:
P_g P(PP_gP)^(-1/2)=e^(−S)P F* (FF*)^(-1/2)+O_Λ(g⁵).

Every P S_n P is zero. Thus F=I+g²F₂+g³F₃+… with F₂=PS₁²P/2
Hermitian and anti-Hermitian part of F₃ equal to J=−PS₁³P/6;
the S₁S₂ anticommutator at order three is Hermitian. The polar
unitary starts I+g³J. It follows that the canonical band
coefficients agree with P D_n P for n≤3, and at n=4 the only
difference is [J,P D₁ P]. In general this commutator is not linked:
the exact separate-product test in the checker has a full
canonical mixed quartic entry +1/4 in both off-diagonal positions.
That counterexample is a finite abstract product model, not a
noncancellation claim for an actual Wilson band. The compression
N=ker(P D₁P) kills the commutator exactly. The canonical quartic
*direct null compression* is therefore the compression of a
connected, vacuum-subtracted coefficient. Projection N itself
need not be a local operator.

For the separately folded physical **slow** coefficient, write
D_j below for full canonical band coefficients per fixed momentum
with the scalar vacuum coefficients subtracted, and use
M=P−N, R₁=(−M D₁ M)^(-1) on M, zero on N.
The additional canonical slow graph is taken after dividing the
vacuum-relative band by g. Its graph first term is R₁ D₂ N,
and second term is
R₁(D₃N+D₂R₁D₂N−R₁D₂N D₂ N).
After metric normalization, the order-g² coefficient in the
rescaled slow Hamiltonian is

    N(D₄ + D₃ R₁ D₂ + D₂ R₁ D₃ + D₂ R₁ D₂ R₁ D₂)N
      − ½ {N D₂ R₁² D₂ N, N D₂ N}.

This follows by collecting the raw graph through order g³
before the final divide by g and adding the metric commutator.
Only ND₄N enters here, so its gauge correction vanishes. Previous
fixed-momentum slope controls make R₁ bounded and preserve
finite relative support at k=0; the other coefficients are vacuum
linked and bounded. Thus this formula gives a bounded slow quartic
*coefficient* there, with no uniform-in-momentum or uniform-in-volume
interacting transport assumed.

## Why the off-band step remains open

Small interaction norm and finite excitation count do not
bound Q R_g P. For an abstract product of L two-level systems,
let P_n project to exactly n occupied sites, and let the remainder
be ε Σ_e X_e (local spin flip at each site). The local interaction
norm is |ε| and its vacuum expectation and P_n→P_n block are zero.
On any basis vector with n occupancies the L outputs are orthogonal
and all outside P_n, so the norm of the off-block applied to that
unit vector is |ε|√L. The same counterexample with ε=g⁵ defeats a
volume-uniform off-block inference even if the compressed Taylor
remainder is O(g⁵). It is not an assertion that this term occurs in
Wilson. To bridge the actual model one still needs a vacuum-adapted
estimate on excursions out of the slow space, or a direct finite
region projected-resolvent construction at the required resolution.

Replay: python verify_electric_normal_form.py
