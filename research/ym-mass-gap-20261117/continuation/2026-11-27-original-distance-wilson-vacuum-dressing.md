# An original-distance dressed energy comparison for the strong-electric SU(2) torus

**2026-11-27 UTC. Continuous time at fixed spatial mesh.** Let A=(1/2)Σ_e(−Δ_e), H_s=A+sV, V=−Σ_p g_pW_p, and g*=sup_p|g_p|. On spatial tori with sides at least six, for sufficiently small g* there is a gauge-equivariant vacuum dressing U with a quasi-local action on observables in the **original periodic link distance**, and

    (1−ε)A ≤ U*(H_1−E_0)U ≤ (1+ε)A,    ε ≤ C g*,

as quadratic forms, with C independent of spatial volume. This is a fixed-regulator application of [spectral flow with unbounded on-site terms](https://arxiv.org/pdf/1810.02428) plus the product-vacuum argument below. The construction does not rely on locality of the [folded dressing](2026-11-27-folded-overlapping-wilson-form-comparison.md). The coefficient C is not evaluated; no priority claim.

## Transport and the unbounded operator domain

Use a common ambient gap along H_s. One can use the folded comparison, or the [bridge bound and time limit](2026-11-27-wilson-bridge-hamiltonian-limit.md): its ambient trace argument applies to all bounded continuous same-slice multipliers, whose vacuum-centered vectors are dense also in the ambient space. The norm-resolvent truncation proof runs there without the optional gauge projection. Thus for g*≤1/400 the ambient gap has the uniform bound 1/40 along the path.

Take a real even Schwartz w with integral one and Fourier transform supported strictly inside the common spectral gap, and W with distributional derivative W'=δ_0−w and W vanishing at infinity. Then W is integrable with rapid tails. Let τ be H_s Heisenberg evolution, D_s=∫W(u)τ_u(V)du, U'_s=iD_sU_s, and α_s(O)=U_s* O U_s. Strong integrals are sufficient. With Fourier convention exp(iωu), the off-diagonal filter coefficient for an excited-to-vacuum energy difference ω is i/ω, so iD_s gives the reduced-resolvent vacuum derivative. Equivalently use Theorem 6.3 in the cited source with this filter. H_s and V commute with local gauge transformations, so D_s and U_s do too.

Between vectors in D(A)=D(H_s), integrate by parts in the Heisenberg time, including the jump of W at zero:

    i[H_s,D_s] = −V + F_s,    F_s = ∫w(u)τ_u(V)du.

The bounded commutator form implies D_s maps D(A) into itself and [A,D_s] is bounded at fixed volume, since s[V,D_s] is bounded. In detail, apply the adjoint-domain characterization to the form identity, which holds against every vector in D(A). Both D_s and [A,D_s] are strongly continuous at fixed volume: bounded changes of V in H_s give strong continuity of the dynamics, and the integrated terms are dominated by the L¹ filters. Therefore D_s is also a strongly continuous bounded operator family for the graph norm of A. Solve the evolution in this graph norm, and also its inverse evolution, to get U_s D(A)=D(A). Differentiating matrix elements on D(A) now gives

    α_1(H_1) = A + B,    B = ∫_0^1 α_s(F_s) ds.

The bounded B here is at fixed finite volume; no volume-uniform operator norm is claimed. The identity extends to quadratic forms. If Ω is the constant product vacuum then BΩ=E_0Ω.

## Locality of the bounded remainder

Assign each plaquette one anchor link with uniformly bounded multiplicity. The original periodic link balls have size ≤C(1+r)^3, uniformly in the sides. The interaction picture removes the unbounded independent on-link evolution without enlarging supports. Lieb–Robinson comparison of the full evolution of a plaquette term to evolution cut off at radius r bounds the short-time truncation error by a polynomial in r times exp(−c r) when |u|≤c' r. The long-time norm error is ≤2||g_p W_p|| times the filter tail. This uses the bounds for bounded time-dependent interactions in the interaction picture, where no norm-continuity assumption on conjugation by an unbounded Casimir is needed. Both filters w and W have all polynomial moments. Differences of nested cutoffs give each filtered term a shell decomposition whose r-th norm is ≤C_M g*(1+r)^(-M) for any fixed M.

Consequently the interaction generating α_s has a uniform polynomial F-norm of arbitrarily high power: sum the anchor and shell incidences through a pair of links, taking the shell exponent beyond the polynomial counting cost. The same Lieb–Robinson estimate for α_s (now use a polynomial F with exponent arbitrarily large and convolution constant uniform on the tori) localizes the image of each filtered plaquette term. First discard its input shells beyond r/2; for the rest compare α_s to its evolution with all generator terms supported in the radius-r ball. The comparison integrates the interaction tail crossing this ball, with the input support size and boundary sum costing at most polynomial factors. Using larger powers before these losses gives arbitrarily rapid tails after composition. Thus

    B = Σ_(y,m) B_(y,m),  supp B_(y,m) ⊆ ball(y,m),
    ||B_(y,m)|| ≤ C_M g*(1+m)^(-M).

Terms may be taken self-adjoint by taking self-adjoint nested differences. All these uniform estimates concern the original link metric; they do not use the folded one. See Sections 3, 5 and 6 of [Nachtergaele–Sims–Young I](https://arxiv.org/pdf/1810.02428).

## Vacuum cancellation with only polynomial incidence loss

Center each B_X by its local vacuum expectation. The scalars sum to E_0. Write P_X=|Ω_X⟩⟨Ω_X|, Q_X=I−P_X and split the centered term into Q_X B_X Q_X and the creation operator |b_X⟩⟨Ω_X| plus its adjoint, with b_X=Q_X B_X Ω_X. Here and below self-adjoint terms refer to the centered version. The first part already kills its local vacuum.

Fix an order of links and decompose b_X orthogonally by its **first excited link** x: every earlier link is in its vacuum, x is orthogonal to its vacuum, and later links are unrestricted. Extend by product vacua outside X. There are at most |X| pieces, each norm ≤||b_X||. Replace the creation operator of each piece by its creation from the vacuum of the smallest ball about x containing X. The difference, with its adjoint, annihilates the vacuum of the larger ball: both original and replacement create the same vector from that vacuum, and both adjoints kill it. If X is a radius-m input ball, the replacement radius is at most 2m.

At fixed x let c_(x,r) be the sum of all lifted creation vectors assigned at radius r. The sum over r is zero in the full space, because it is the first-excited-at-x projection of (B−E_0)Ω. This statement only uses the product reference vacuum, not local topological order. Let C_(x,r)=Σ_(k≤r)c_(x,k)=−Σ_(k>r)c_(x,k), using product-vacuum extensions in these sums. With L_(x,r)(v)=|v⟩⟨Ω_ball| on the r-ball tensored with identities, summation by parts at fixed x gives the operator identity

    Σ_r L_(x,r)(c_(x,r))
      = Σ_r [L_(x,r)(C_(x,r))−L_(x,r+1)(C_(x,r))].

There is no boundary remainder once the balls saturate the torus. Each difference plus adjoint kills the vacuum of its larger ball and has norm at most 4||C_(x,r)||. Independent exact finite control: on cyclic two-state tensor products of lengths 3 through 8, use three nested creation radii with coefficients (2,3,−5), at every translated anchor, and verify 3,576 complete basis actions and all translated local vacuum identities. The operator identity above does not depend on this finite fixture.

For clarity the norm sum has two polynomial counts. For an input of radius m there are O((1+m)^3) pieces, all corrections supported within 3m of its anchor. Thus the incidence sum at a fixed link for the lifting corrections at this m is O((1+m)^6) times the shell bound. For the telescoping terms at a fixed x and r, the tail is bounded by C_M g* Σ_(m>r/2)(1+m)^(3−M), since input anchors must be within m of x. At a fixed observed link there are O((1+r)^3) centers x of a contributing (r+1)-ball. Summing in r and choosing M>9 makes this incidence bound O(g*). The original Q_X parts also sum with uniform bound. This avoids the support-cardinality exponential cost of decomposition into all excitation subsets. Related vacuum-centering and relative bounds based on locality appear in [Nachtergaele–Sims–Young II](https://arxiv.org/pdf/2010.15337); no novelty assertion for this specialization.

We have written B−E_0=Σ_Y K_Y with each K_Y self-adjoint, locally vacuum-annihilating, and sup_e Σ_(Y∋e)||K_Y||≤C g*. Since Q_Y≤(2/3)A_Y on the ambient tensor space, summing the local form bounds proves the asserted comparison. Individual terms need not commute with the gauge group; the exact conjugation and the total quadratic-form estimate do.

## Spectral consequence and limit

With ε<1/5, min–max on the gauge-invariant space leaves an isolated light band of the free multiplicity in [6(1−ε),6(1+ε)], with all higher energies ≥9(1−ε). The same 9(1−ε) comparison holds for the dressed discarded space U(S⊕B_free)^⊥, where S is the straight coarse-path pullback and B_free the entire free plaquette band. This comparison is also nonperturbative in volume. At first order at fixed volume the integral remainder reduces to ∫w(u)τ_u^A(V)du, which projects V onto equal-free-energy blocks when the filter width is below 1/2, since the free energies lie in half-integers. Its band block vanishes by the already established plaquette center selection rule. Improving the relative comparison to an O(g*²) control after explicitly subtracting that first-order operator is a separate possible next check; this note does not prove a quadratic error uniform in volume.

Neither this result nor the use of original spatial distances removes the spatial regulator or reaches the weak-coupling continuum trajectory. This is not a proof of the Clay mass gap. No external review or Lean replay.
