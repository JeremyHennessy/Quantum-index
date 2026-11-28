# A uniform finite-box fourth-order Taylor bound in the transported E15 band

Fixed spacing; research continuation of LOCAL-VACUUM-FRAME-AND-E15-CONTOUR.
This uses exact ground and energy-15 spectral flow on finite Wilson boxes.
It does not yet construct the thermodynamic fixed-momentum slow fibre
or assert a response at nonzero coupling for the infinite system.

Let H(g)=H₀+gW with W=−V. Write D(g)=∫Wγ(t)τ_t^{H(g)}(W)dt and
F(g)=∫wγ(t)τ_t^{H(g)}(W)dt, where wγ is the even low-pass kernel and Wγ
is the odd NSY kernel. The [printed kernels](https://arxiv.org/pdf/1810.02428)
(6.32)–(6.41) have all polynomial moments and Wγ′=δ₀−wγ. Use the
orientation U′=+iD U already verified by the separated energy blocks.
Then U transports both free P₀ and P15 exactly.

## An exact bounded formula avoids differentiating the unbounded onsite part

For ψ,χ in Dom H₀, the derivatives in t of the matrix element of
τ_t(W) can be computed by differentiating the evolving vectors.
Integrating this bounded-test-form derivative against Wγ and using
the distributional derivative gives

    i[H(g),D(g)] = F(g)−W

as a bounded commutator. As usual, a bounded commutator on the H₀
domain extends graph invariance: for ψ∈Dom H₀ the functional
χ↦⟨H(g)χ,D(g)ψ⟩ is represented by a Hilbert vector, so
D(g)ψ∈Dom H(g)=Dom H₀. The right-hand side and D(g) vary strongly
continuously and are bounded on the fixed finite box. The parameter
unitary preserves Dom H₀ by solving its ODE on the graph norm and
uniqueness in Hilbert norm. Consequently K(g)=U(g)*H(g)U(g) has the
exact domain-integrated identity

    K(g)=H₀+∫₀^g α_s(F(s)) ds,       α_s(A)=U(s)* A U(s).

For fixed finite volume the last difference is bounded. There is no
uniform claim on its extensive Hilbert norm. The filtered derivatives
used below are operator-norm derivatives in g in every finite box;
they exist by bounded perturbation Duhamel and the kernel moments.
Differentiating after the first identity gives, for n=0,…,4,

    K^(n+1)(g) = α_g[(∂_g−i ad_D(g))^n F(g)].

This only requires derivative locality for the two filtered operators.
It does not require differentiating a thermodynamic spectral-flow
automorphism or estimating derivatives of its long-distance tails.

## Derivative locality for the filtered interactions

Write W as the sum of bounded plaquette terms W_x on fixed-size
anchored supports (or use one index per orientation). For a support X
and integer r let B_r(X) meet the given finite volume, retaining only
the terms lying in that set. This truncation applies *only* to
evolving the single bounded input, not to the given Hamiltonian's
actual open boundary prescription. Let f_r(g,t) be its finite-ball
Heisenberg evolution. Real-parameter Duhamel differentiation to
order j on a fixed ball gives

    ||∂_g^j f_r(g,t)|| ≤ C_j (1+r)^(3j) |t|^j ||W_x||.

It follows by the time-ordered integral of the bounded perturbation
insertion, using unitarity at real g, and the ball perturbation norm
O((1+r)^3). This requires no boundedness of H₀. The finite-range
Lieb–Robinson comparison, e.g. NSY §3.2–3.3, gives
||f_(r+1)−f_r||≤C(1+r)^a e^(−c r) for |t|≤c₀ r uniformly on a compact
real g interval contained in the small-coupling range. Constants
are independent of the box and of the anchor (including near its
boundary, by taking intersections with the finite volume).

For a Banach-valued C^(j+1) function f on that interval, finite
differences at j+1 equally spaced points give on a smaller interval

    ||f^(j)(g)|| ≤ C_j[h^(−j) sup||f|| + h sup||f^(j+1)||]

for h small enough to keep the nodes inside. This follows by
Taylor expansion at g, choosing the fixed difference coefficients
that cancel all powers below j; the integral Taylor remainder is
bounded in norm. Apply it to f_(r+1)−f_r for |t|≤c₀r with h an
exponentially decaying function of r whose rate is less than
c/(j+1). The Duhamel derivative bound at order j+1 is polynomial
in r on this time window, so the jth derivative of the difference
is exponentially small there, up to a polynomial. For |t|>c₀r,
use the two crude Duhamel bounds directly. Integrating each part
against either Wγ or wγ gives, for every fixed j and every m,
an O_j,m((1+r)^−m) norm for the jth derivative of the filtered
shell f_(r+1)−f_r. The long-time estimate follows from arbitrarily
high finite moments of the kernels, even after multiplying by
|t|^j and the radius polynomial.

For each anchor the sum of these shells is exactly its filtered
contribution in that finite volume. Each shell lives in its own
ball. The number of centers whose radius-r support contains any
given cell grows polynomially. Therefore the resulting
interaction decompositions for D,F and all fixed orders of their
g derivatives have uniform finite norms

    ||Φ||_m = sup_y Σ_(X contains y)
                   (1+|X|+diam X)^m ||Φ_X||

for any desired fixed m. Limits and derivatives of the shell
sums may be interchanged by the uniform summable majorants.
This proof is at real g, not a complex-coupling analyticity claim.

## Commutators and the final quasi-local automorphism

For intersecting supports the combined weight is bounded by
a constant times the product of the two individual weights.
Summing contributions rooted in the first or second factor, as in
the degree-four Lie estimate, bounds
||[Φ,Ψ]||_m≤C_m ||Φ||_(m+1)||Ψ||_(m+1).
Disjoint supports commute. Hence each finite differential polynomial
(∂_g−i ad_D)^n F retains all fixed support moments uniformly
in the volume.

One final application of α_g preserves these estimates with a
finite loss of moments. By NSY 6.4/6.14 the flow obeys uniform
quasi-local commutator bounds; its spatial decay is faster than
any inverse power for the chosen filter. For a local A_X,
conditional expectations onto X expanded by r cells give a
telescoping shell expansion of α_g(A_X) with norm errors at most
C_m |X| ||A_X|| (1+r)^−m (the usual conditional-expectation
localization bound for quasi-local commutators). Use the product
vacuum expectation for tracing the exterior; this exists also
on the separable local rotor factors, as in NSY's conditional
expectation construction, and is covariant under gauge actions.
To sum at a cell y whose shell support contains y, sum first
over cells x within r of y with x∈X. This costs at most
C(1+r)^3 and the input incident norm at x. The shell volume is
at most C |X|(1+r)^3 and its diameter increases by at most 2r.
Take m large enough in the decay bound to absorb these factors
and the desired finitely many moments. Thus all displayed
derivatives of K−H₀ have a bounded incident interaction norm,
uniform in g on the chosen smaller interval and in box. Real
Hermitian inputs have Hermitian interactions at every step
(the derivation −i ad_D and conditional expectations preserve
Hermiticity).

## Vacuum subtraction, compression and canonical coefficients

Let P=P15. For any local Hermitian term B_X subtract its local
electric-vacuum expectation. As in the previous excitation
bound, its P compression vanishes when either P input or output
has no occupied cell in X: the other factors already carry
electric energy 15 and the final P compression forces the
within-X output to be the unique charge-zero vacuum. On P there
are at most ten occupied cells, since each occupied edge costs
at least 3/2. Summing quadratic forms then gives

    ||P (B−⟨Ω₀,BΩ₀⟩) P|| ≤20 ||B||_0.

No bound on the uncompressed vacuum creators is inferred.
Here the exact K(g) reduces the fixed P by spectral transport,
and U_gΩ₀ is the true ground vector, so its vacuum scalar is
exactly the true ground energy E₀(g). The integral Taylor
formula through degree four for K(g)−H₀ and the uniform
fifth-derivative interaction bound therefore give

    P(K(g)−E₀(g)−15)P
      = Σ_(j=1)^4 g^j B_j^SF + O_uniform(|g|⁵)

in Hilbert operator norm on P. This is a transported exact band
Taylor statement in every finite box, not just a polynomial
normal form in a fixed finite volume.

For comparison with the previously computed canonical band gauge,
write F_P(g)=P U_g P (different from the low-pass F(g)).
The off-charge matrix element of iD(0) equals −W_ab/(E_a−E_b),
and equal-energy blocks vanish by oddness of Wγ. Also
P D′(0) P=0. To see the latter, use Duhamel for the coupling
derivative of τ_t(W) at zero. Between equal-free-energy endpoints,
each intermediate energy E+Δ combines the two commutator orderings
to a factor proportional to (cos(tΔ)−1)/Δ, with its zero limit
when Δ=0. The resulting function of t is even, so integration
against the odd Wγ vanishes. The bounded W and kernel first
moment justify this calculation on the finite-volume spectral
core.

Now F_P(g)=I+g²F₂+O(g³) with F₂=−P D(0)²P/2 Hermitian.
Its polar unitary starts at order g³. The canonical direct
rotation equals U_g times the adjoint of that polar unitary
on P, by the exact projector transport identity. Scalar E₀
subtraction commutes with it. Thus B_j^SF equals the canonical
coefficient for j≤3; the quartic discrepancy is a commutator
with B₁ and disappears in direct compression to ker B₁.
The previously derived two-stage folded quartic depends only
on that quartic null compression and the unchanged lower
coefficients. These are coefficient identities; a
volume-uniform Taylor estimate for the relative polar
transport itself is not needed for these identities.

The unresolved next step is construction of the exact
thermodynamic translation fibre of this transported band and
the corresponding uniform slow-sector reduction at k=0.
This note makes no assertion about that step or the
physical response at the shrinking imaginary resolution.
