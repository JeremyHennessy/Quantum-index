# What transfers from product-ground-state stability to the Wilson E15 band

Source/assumption audit after research tip 923b640d, fixed spatial spacing.
There is a rigorously applicable uniform finite-box E15 spectral island,
and a quasi-local unitary that transports it and the vacuum. This is
not a one-particle theorem, a proof at the g⁴ energy resolution, or a
continuum claim.

## Tensor-space mapping and exact open boundaries

Use ambient link Hilbert spaces L²(SU(2)), before Gauss-law projection.
At each vertex of a cubic cell lattice group its three positively outgoing
link factors, assigning every link exactly once. The cell vacuum is the
three-factor constant, unique. The onsite electric term is a sum of
2j(j+1), j=n/2; its least positive energy is 3/2. Normalize the overall
Hamiltonian by 2/3 for the gap-one theorems and undo it in energies below.
A plaquette with lower corner x uses cells at x and its two positive
coordinate neighbors. Group valid orientations by lower corner. Its
common support shape may be the four-site set
Λ₀={0,e₁,e₂,e₃}; unused factors act as identity. Since each normalized
trace has norm at most one, after rescaling the interaction norm per
anchor is at most 2|g| (before rescaling at most 3|g|).

To satisfy Yarotsky's full-support containment in equation (3), pad the
cell cube by one layer. Include all cell factors, including dummy links,
but include only the original valid open-box plaquette terms in the
anchored interactions. Every valid anchor's full common support shape
is now contained. Dummy link factors are exactly decoupled electric
terms; their vacuum subspace is invariant, so this embeds the original
open box rather than trimming any boundary plaquette. Boundary anchors
can vary or be zero; the theorem does not require translation invariance
for its finite-box estimates.

Each independent vertex gauge rotation acts as a tensor product of left
or right actions within the affected cells, fixes each edge constant,
and commutes with its edge electric Casimir. Plaquette terms are
individually gauge invariant. Hence ambient spectral projections
restrict to the Gauss-law sector. The ambient unique ground eigenline
is gauge invariant as a vector: the gauge group is a finite product of
SU(2), which has no nontrivial continuous one-dimensional unitary
characters. The dummy vacuum factors are ground factors by exact
decoupling. Thus the same vacuum energy is subtracted in the physical
sector and the ambient gap estimates pass to this reducing sector.

## Yarotsky: unconditional isolated island, nonunitary local frame

[Yarotsky, arXiv:math-ph/0411042](https://arxiv.org/pdf/math-ph/0411042),
Theorem 1 and equation (4), apply to the ambient cell problem.
After exact vacuum subtraction and return to original energy units,
the spectrum is within the union of intervals |z−a|≤ε a over free
total energies a, with ε≤2c₂|g|. The smallness threshold c₁ for
the interaction is also imposed. All a are nonnegative half-integers.
Choose the coupling so ε<1/124. Then:
- the a=15 interval is within [15−15/124,15+15/124], inside
  [14.75,15.25];
- for a≤14.5 the highest allowed energy is at most
  14.5(1+1/124)<14.625;
- for a≥15.5 the lowest allowed energy is at least
  15.5(1−1/124)=15.375, strictly larger with ε<1/124.
Thus the fixed contour |z−15|=1/4, in exact vacuum-relative units,
isolates the energy-15 island uniformly, with exterior interval margins
greater than 1/8. The vacuum is also uniformly isolated. In a fixed
finite box the island's rank is constant along this real coupling
interval by continuous Riesz projection (ground energy is smooth there);
it is the original free P15 rank, including after Gauss restriction.

The proof gives more structure, but not a unitary: the exact finite-box
ground vector with overlap normalized to one is T_g Ω₀, with T_g the
exponential of commuting excitation-creation operators (Lemma 1 and
equations (8)–(10)). Uniqueness of the cluster coordinates implies that
these coefficients, and T_g, are gauge covariant; all cell local vacuum
projectors and tensor decompositions commute with the gauge actions.
Conjugating by T_g sends the Hamiltonian into a free piece plus a
perturbation with exponentially weighted excitation-column estimate
(14), summed in the coefficient ℓ¹ norm, giving (15)'s relative
Neumann estimate. It amounts to ||J_g u||₁≤C|g| ||H₀u||₁ in those
coordinates, with additional output-to-input cluster localization.
For the radius-1/4 contour, q=62 C|g|<1 suffices and the projection
in these nonunitary coordinates differs from free P15 by at most
q/(1−q), by integrating the free norm bound 4 times the Neumann
tail. This is not a volume-uniform Hilbert-norm bound on T_g or
T_g⁻¹. One cannot transfer Hilbert adjoints, Poisson positivity,
or canonical graph coefficients by identifying the two norms.

Theorem 4's additional nondegenerate isolated onsite level, separated
from sums of two or more onsite excitations, is not available here.
The physical E15 states include multi-loop supports and far
continuum channels of the quadratic coefficient. Theorems 1–3,
not the one-particle theorem or its scattering section, are the
applicable results. The same author's
[math-ph/0412040](https://arxiv.org/abs/math-ph/0412040) supplies
ground-state bounds/analyticity for a related form-small class,
not a high-order E15 band expansion.

## DFP: exact local unitary mechanism, and its finite-range caveat

[Del Vecchio–Fröhlich–Pizzo, arXiv:2108.13907](https://arxiv.org/pdf/2108.13907),
§1.1, (1.3), (1.6)–(1.8), allow a common separable onsite Hilbert
space with unbounded positive free term, a unique product vacuum,
and finite-range locally form-bounded potentials. The Wilson cell
mapping meets these hypotheses. Theorem 3.3 constructs the
finite-volume ground adaptation through a product of local Lie–Schwinger
unitaries. In Definition 2.5 and Remark 2.6 each final processed
rectangle potential is diagonal relative to its local product
vacuum. Later larger steps leave that component in the interaction
decomposition rather than introducing a new smaller support.
Each local generator uses vacuum projections, local Hamiltonians,
reduced resolvents and commutators. A gauge action crossing a
rectangle boundary factors into its inside and outside tensor
actions; invariance of its local inputs therefore suffices for
invariance under the inside action. These constructions also
commute with every dummy-link vacuum projection by the same
functional calculus argument. These are true finite-volume
unitaries on the physical sector, unlike Yarotsky's similarity.

The printed quantitative induction in §2–3 is initialized only at
nearest-neighbor rectangles; §2 says finite range can be treated by
the same method. Our plaquette maps to a span-two cell rectangle,
not a nearest-neighbor rectangle. Consequently the exact exponent
t^((r−1)/3) in (3.85) and a numerical tail cutoff deduced from it for
nearest-neighbor initial data must not be quoted verbatim for this
cell representation. We did not reprove the finite-range induction
or its precise differentiable dependence. Theorem 3.3 states the
general hypotheses; this qualification concerns using the sharper
displayed norm bounds for the specific Wilson geometry. The
[bounded predecessor, arXiv:2007.07667](https://arxiv.org/pdf/2007.07667),
includes Rossi and assumes finite-dimensional onsite factors in
(1.1); it does not by itself justify removal of a spin cutoff.
The [analyticity paper, arXiv:1908.07486](https://arxiv.org/abs/1908.07486),
also with Rossi, is a chain theorem; it is not a citation for a
three-dimensional uniform complex-coupling coefficient expansion.

## Explicit Hilbert contour bound given a weighted adapted interaction

The following implication is independent of the finite-range caveat.
Suppose an exact vacuum-adapted unitary yields the vacuum-relative
operator K=H₀+J with an exact decoupled electric vacuum and
c=||H₀^(-1/2) J H₀^(-1/2)|| on the nonvacuum space. A sufficient
condition in a local vacuum-diagonal rectangle decomposition is
that C= sup_e Σ_(X contains e) α_X is small, where α_X is the weighted
norm ||(H_X+1)^(-1/2)J_X(H_X+1)^(-1/2)|| in gap-one units and
includes the coupling. After subtracting local vacuum expectations,
(H_X+1)Q_X≤2H_X and |⟨Ω_X,J_XΩ_X⟩|≤α_X show, as forms,

    |⟨ψ,(J_X−⟨Ω_X,J_XΩ_X⟩)ψ⟩| ≤ 3 α_X ⟨ψ,H_Xψ⟩.

Summing gives c≤3C, since H_X is a sum of cell charges. This is
an exact relative form implication, not an operator norm bound on J.

For |z−15|=1/4 in original units and on the nonvacuum sector,
D=I−zH₀^(-1) has ||D^(-1)||≤62, and
||H₀^(-1/2)D^(-1)||²≤248. In fact at a half-integer charge e the
two ratios are e/|e−z| and e/|e−z|². Their contour maxima on the
allowed charges are bounded by their values at e=15.5:
62 and 248. For e=15 the values are 60 and 240; for e≤14.5 the
bounds increase to the endpoint, and for e≥15.5 decrease away
from it, using |e−z|≥|e−15|−1/4 for e≠15. The vacuum inverse is
explicit and unchanged.

For 62c<1, Neumann inversion of D+H₀^(-1/2)J H₀^(-1/2) gives
the closed-form resolvent through the H₀^(1/2) form factorization;
the resolvent difference norm is at most 248 c/(1−62c).
Integrating the contour therefore gives the Hilbert norm bound

    ||P15(K)−P15(H₀)|| ≤ 62c/(1−62c),

uniform in volume. For c<1/124 this is less than one, so the canonical
Hilbert direct rotation between these projectors exists. This norm
comparison is in the specified vacuum-adapted frame, not a bound
on the difference between the original-volume two projector
vectors without transporting the vacuum.

## A genuinely quasi-local unitary for both islands, independent of DFP

The unconditional Yarotsky spectral islands allow an alternative
exact transport. [Nachtergaele–Sims–Young, arXiv:1810.02428](https://arxiv.org/pdf/1810.02428),
Assumption 6.2, Theorems 6.3 and 6.4 (=6.14), allow an unbounded
fixed onsite part and a differentiable bounded finite-range
interaction. The derivative of the Wilson interaction is finite
range and hence satisfies their interaction F-norm condition
including the support-cardinality factor. The cubic metric is
regular. In a finite box the interval endpoints are the smooth
exact ground energy plus the fixed constants for the vacuum
and E15 islands, and the gap verified above supplies one common
filter parameter γ=1/8. Equation (6.11)'s generator

    D_γ(g) = ∫ W_γ(t) τ_t^{H(g)}(−V) dt

depends only on the path and γ, not the choice of spectral patch.
The same finite-volume unitary U_g therefore transports *both*
P₀ and P15 exactly along the real interval. This works regardless
of either patch's multiplicity. The flow is genuinely quasi-local
on observables with a volume-independent interaction bound and
thermodynamic automorphism along ordinary increasing boxes,
not just a norm estimate on the total extensive generator.

Since H(g) and −V are gauge invariant and dummy-decoupled, the
generator and unitary preserve the physical and dummy-vacuum
subspaces. They commute with each exact spatial symmetry of the
volume and interaction. In particular, for the center sign C
with C H(g) C=H(−g), one has C D_γ(g) C=−D_γ(−g) and hence
C U_g C=U_(−g) by uniqueness of the differential equation. This
preserves the alternating center parity of any established Taylor
coefficients. It is not an assertion that center parity reduces
the model at fixed g≠0. By contrast a rectangle order in a DFP
construction can break geometric reflections even if center
covariance holds; the generator here uses the actual H and V
instead of an ordering of cells.

The real finite-volume isolated projector and its quasi-local
observable transport are therefore available. What remains is
a volume-uniform fourth-order expansion/remainder for the
transported vacuum-relative E15 energy in a Hilbert or suitable
weighted finite-region norm, with comparison to the canonical
slow gauge and source. The basic quasi-local automorphism
theorems alone do not give that expansion or an exact k=0
thermodynamic fibre at the shrinking g⁴ resolution. In
particular the first-slope inverse is currently a fixed-momentum
coefficient-level result, not a volume-uniform slow projection
for this interacting transport. There is no one-particle,
finite-coupling scattering or continuum conclusion here.
