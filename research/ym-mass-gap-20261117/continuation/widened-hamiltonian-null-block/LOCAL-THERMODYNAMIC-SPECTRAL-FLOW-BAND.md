# Thermodynamic transported E15 band and uniform fibre Taylor bound

Fixed spatial spacing, physical SU(2) link Hilbert space. Research
continuation at 146fe689 of the finite-box spectral-flow Taylor result.
This proof constructs an exact thermodynamic isolated band and a
canonical continuous representative of its Bloch fibres. It does
not use a one-particle theorem, a continuum limit, or differentiate
the unbounded infinite-volume Hamiltonian.

## 1. Local interaction limits in the transported frame

Use the ambient edge tensor model, physical Gauss-law restriction
and padded open-box convention from the earlier notes. Let α^Λ_g be
the exact spectral-flow automorphisms with the verified orientation;
they simultaneously transport the two isolated vacuum/E15 projections
and converge on local observables in norm uniformly on a compact
smaller real coupling interval. The infinite NSY automorphism α_g
and its inverse are quasi-local, with the same uniform bounds.
Inversion also converges on local/quasi-local observables: use
isometry and convergence on the fixed input α_g^(-1)(A).

The finite-box proof expresses the derivatives of
K_Λ(g)=U_Λ(g)* H_Λ(g) U_Λ(g) through order five as
α^Λ_g of finite differential polynomials in the filtered interaction
D_Λ,F_Λ and their coupling derivatives. For each fixed anchored
support ball, the contribution of a plaquette and its derivative
shell is independent of the box as soon as the box contains that
ball and its original support. The earlier finite-ball interpolation
and filter moment estimates bound all these shells uniformly in
any fixed incident support moment. Commutators assign each term to
the union of its intersecting supports, so their interaction
coefficients on a fixed finite region are finite sums of stabilized
input shells. The same statement allows coincident supports to be
grouped, retaining a fixed indexing convention.

The last α^Λ_g application is localized by conditional expectations
onto successive enlargements of each input support. On an enlargement
of fixed finite radius, convergence follows from the NSY norm limit
and contractivity of the product-vacuum conditional expectations:
on embedded local operators these expectations agree with their
infinite counterparts once the box contains the supports. An
intermediate local approximation treats general quasi-local
α_g(A) in the same way. This is uniform in g for each fixed
local input family here, either using the uniform NSY estimates
or compactness of the continuous local family. A fixed resulting
support has only finitely many source supports and shell radii
in this bookkeeping (ball supports group by containment; radii
that already fill a finite box give zero successive increments).
Alternatively keep them as distinct labels and use the absolute
summable shell majorants before grouping.

Thus there are locally convergent interaction decompositions for
the derivatives, the Taylor coefficients at zero, and the
integral Taylor remainder. Every one has the same uniform
incident support-moment estimates as in finite volume.
The limiting constructions can use translation-covariant
anchor choices, balls and product conditional expectations.
For the difference K_Λ(g)−H₀ use the exact bounded integral of
its first derivative. For the Taylor remainder use its integral
of the fifth derivative; the limiting incident moment bound for
the latter remainder is O(|g|⁵), also after any fixed support
moment is inserted. These are real-coupling statements.

## 2. Vacuum-subtracted band operator as a strong local limit

Let P be the free energy-15 projection on the incomplete tensor
product with the electric reference vacuum. Its physical part is
spanned densely by finite-support gauge-invariant spin-network
vectors. Each distinct spin assignment is orthogonal, carries at
most ten occupied edges, and all its physical intertwiner
multiplicities are retained. Components of a fixed finite
configuration embed from any sufficiently large open box.

For a Hermitian local interaction term A_X let
d_X=⟨Ω_X,A_XΩ_X⟩. The operator
P(A_X−d_X)P has neither input nor output on configurations with
all cells of X in vacuum, by the inside-charge conservation
forced by the two P projectors and unchanged exterior. The
previous excitation-form bound gives for every finite sum, and
then for the bounded form limits,

    ||P Σ_X (A_X−d_X) P|| ≤ 20 ||A||_0.

Non-Hermitian expressions, if needed, are treated by real/imaginary
parts. In particular cutting terms of diameter greater than R
changes the band operator norm by at most
20(1+R)^(-m)||A||_m. On a finite-support P input, a truncated sum
only sees terms meeting its support; their output stays in the
R neighborhood of that support, and there are only finitely many
possible bounded-diameter labels there. Local coefficient
convergence gives norm convergence of the truncated output.
The uniform tail bound gives strong convergence on these
vectors, then on all of P by the uniform operator bound.
This argument also defines the infinite vacuum-subtracted sum;
no extensive vacuum scalar is summed separately in infinite
volume.

Apply it to K_Λ(g)−H₀ and its Taylor pieces. In finite volume
the exact rotated vacuum scalar is E₀,Λ(g), so the strong limit
of the excitation operator on P is a bounded self-adjoint B(g)
satisfying

    B(g)=g B₁+g² B₂+g³ B₃+g⁴ B₄+O_norm(|g|⁵),

with all coefficients and the remainder obtained by those
compressed local interactions. This is a Hilbert operator-norm
Taylor estimate on the infinite free-band space; the
thermodynamic limit of the finite operators is strong, not norm.
Gauge invariance passes from each finite decomposition and the
fixed physical compression. Spatial covariance of the full
operator will also follow directly from the GNS identity below,
regardless of the outgoing-cell bookkeeping.

## 3. Identification with the actual interacting GNS band

Let ω₀ and ω_g be the infinite free and exact interacting vacuum
states. From finite-box transport and the norm automorphism limit,
ω_g(A)=ω₀(α_g(A)). Thus the map on cyclic vectors

    𝒰_g π₀(A) Ω₀ = π_g(α_g^(-1)(A)) Ω_g

extends to a unitary between their GNS Hilbert spaces. This is an
isometry by the state identity and is onto because α_g is an
automorphism. It restricts to the GNS spaces over the gauge-invariant
local algebra, since the automorphism commutes with the gauge
action. On the free side, any finite-support invariant spin
vector is generated by a bounded invariant support-local
vacuum-to-vector rank-one operator, so this restriction contains
the full physical free P space being used. The map is translation
covariant, since the infinite interaction/dynamics, the
thermodynamic spectral flow and both states are translation
covariant. The same holds for exact cubic symmetries. Finite
centers need not be periodized here.

Use the [Yarotsky GNS theorem](https://arxiv.org/pdf/math-ph/0411042),
Theorem 3, which gives vacuum-relative resolvent convergence on
local excitation vectors and the same spectral inclusion in
infinite volume. It gives the corresponding matrix-element
convergence for every smooth compactly supported function of
energy: the algebra generated by resolvent functions is dense
in C₀, its finite products reduce to linear combinations and
uniform limits of resolvents, and all norms are controlled by
the sup norm. Norm approximation of quasi-local inputs extends
this statement to the transported excitation vectors. The
same conclusion follows by Fourier inversion of a smooth
cutoff and pointwise finite-volume correlations, but no
differentiation of time evolutions is needed.

Choose a common smooth cutoff f=1 on [14.75,15.25], supported
between the immediately forbidden energies on either side,
and set f₁(e)=(e−15)f(e). For all sufficiently small real g,
Yarotsky's strict spectral-island margins hold in every box
and in the GNS limit. Write H_g^GNS for its vacuum-relative
interacting generator. For any two fixed local free vectors,
conjugation by U_Λ transports f(H_Λ−E₀,Λ) exactly to P_Λ and
f₁(H_Λ−E₀,Λ) to the bounded finite-band block of
K_Λ−E₀,Λ−15. Pass to the limit using the cutoff convergence
and α^Λ_g^(-1)(A)→α_g^(-1)(A) on the two test operators.
Since the finite free P_Λ agrees with P on those fixed
embedded wavefunctions once the box is large, and the
compressed second operator has the strong limit above,
one obtains exact bounded identities on the free GNS space:

    𝒰_g* f(H_g^GNS) 𝒰_g = P,
    𝒰_g* f₁(H_g^GNS) 𝒰_g = B(g) ⊕ 0 on P ⊕ P^⊥.

Thus this is the actual isolated interacting energy band,
not just a limit of approximate truncated operators. The
only use of the unbounded infinite-volume generator here
is its bounded functional calculus. These identities do
not assert anything about its transported full domain.

## 4. Continuous fixed-momentum representative and uniform remainder

Use mutually orthogonal physical spin-configuration blocks;
translations act freely on each nonempty finite support.
Choose translation-covariant internal bases by a fixed convention
on each translation type, taking the coordinatewise minima
of occupied link origins as translation anchor. Then
P is identified with ℓ²(Z³;𝔥) for a common relative-coordinate
Hilbert space 𝔥 (including every intertwiner). Gauge
compression at fixed support does not affect the anchor.

For a term on X after vacuum subtraction, a nonzero P→P
matrix element leaves the exterior untouched and requires
both the old and new configurations to have at least one
occupied link in X. Each coordinatewise anchor minimum
can then move by at most diam X, even when a far spectator
is present. Indeed if the minimum changes, whichever
minimizer does not lie in X remains an unchanged exterior
candidate, and there is always an occupied inside edge
within diam X of the old or new inside minimizer.
Therefore the translation-covariant aggregate of terms
of diameters at most R has bounded propagation in the
translation anchor. Its Fourier fibres are a finite
operator-valued trigonometric polynomial
Σ_(|δ|≤R) e^(ik·δ) A_δ, where each A_δ is a bounded translation
block of the whole operator. This needs no finite-dimensional
assumption on 𝔥. The norm of the full operator is the
essential supremum of the fibre norm, which equals the
supremum for these norm-continuous finite-propagation fibres.
The tail bound in section 2 shows they converge uniformly in
k in operator norm as R grows. Thus the exact band and the
Taylor pieces have a canonical continuous representative
at every momentum, including k=0. The same argument for the
local integral remainder makes the norm Taylor estimate
O(|g|⁵) uniform in k, not just almost everywhere.

At k=0 center sign covariance can be kept: C H(g) C=H(−g)
induces α_(−g)=C α_g C, with the transport convention above.
The center sign assigned to links need not be translation
invariant on the ambient space; translating it changes it by
a flat sign field, a vertex gauge on physical finite
supports. Hence center grading is well-defined on the
physical k=0 fibre. Each exact coordinate reflection also
commutes with the transformed physical operator there.
These are properties of the exact band and its canonical
continuous representation, not a claim of k-uniform
first-slope separation.

The coefficients B₁,B₂,B₃ are the previously computed canonical
linked band coefficients: the finite-box exact spectral-flow
Taylor proof established equality in those orders, and linked
terms have the same local infinite-volume limits. For the
slow-sector response only a bounded, center-even B₄ is needed,
not an identification of every entry of the full canonical
quartic. If desired, the direct null quartic equality can be
passed to fixed k by comparing the two *local* transports
rather than passing finite-volume null projectors: for
R=e^S U_SF with the degree-four all-charge Lie rotation,
the Taylor coefficients of
R′R*=∫₀¹ e^(uS) S′ e^(−uS)du + e^S iD e^(−S)
are local through quadratic order, by the commutator
moment argument. R′(0)=0 and P R₂ P=0 by the
equal-charge spectral-flow check; both transports carry
the finite-box band through degree four. Thus the relative
rotation on P starts at g³ with a locally bounded Taylor
coefficient, up to a harmless vacuum scalar, giving a
quartic commutator with B₁ after the same fibre limit.
Its N compression, N=ker B₁(k), vanishes. No interchange
of finite-box PVP null projections with the infinite
momentum null projection is required.

The fixed-momentum slow reduction and any response statement
for a transported source are logically separate from this
band construction.
