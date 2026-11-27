# Extensive perturbation norm and exact quadratic locality

2026-11-27 · Finite open SU(2) square meshes at fixed spatial spacing. Parent: [explicit direct-probe interval](DIRECT-PROBE-INTERVAL.md) at commit `7197a10b503b4a3432fc23482dfd4cd548259e78`.

**The full perturbation norm grows exactly with face count, but every disconnected exterior face cancels at second order after subtracting the vacuum.** For the known six-loop vector q embedded in the interior of a larger open rectangle, the normalized vacuum-subtracted quadratic **diagonal matrix element** is exactly 9/112, independent of extra padding. The original unpadded value was 13/112. This is not a larger-mesh eigenvalue or visibility certificate.

## Why the earlier norm proof cannot be uniform

Let B be the number of faces, Wₚ the half-trace of plaquette p, and H(g)=H₀−gV, V=ΣₚWₚ. The multiplication operator satisfies

    ||V|| = B.

The upper bound is immediate. At the flat configuration with every link equal to the identity, all Wₚ=1. By continuity the gauge-invariant set {V>B−ε} is nonempty and open and therefore of positive product Haar measure. Its normalized indicator is an allowed gauge-invariant test vector, proving ||V||≥B−ε for all ε>0. The exact direct-probe interval proof uses this global norm in resolvent gap estimates with fixed free gap input. Substituting B into its first Neumann test already requires B|g|+g²<1/4. This is a restriction of that proof, not a physical upper bound on mode visibility.

The vacuum also has genuine extensive effects before subtraction. Its normalized perturbative derivative is V1/6, orthogonal to the constant; the Wₚ1 are orthogonal on distinct plaquettes by a link-center flip, each has squared norm 1/4, and each has energy 6. Therefore

    ||(d/dg) ψ_vac(0)|| = √B/12,
    [g²] E_vac(g) = −B/24.

The derivative uses the real positive-overlap phase at zero. It rules out a volume-independent Lipschitz estimate around the *bare global vacuum* of the form ||ψ_vac(g)−1||≤C|g| with fixed C, even on arbitrarily short intervals through zero for each finite mesh. It does not rule out bounds using localized observables or transported vacua.

## Exact local form after subtracting the vacuum

Fix an E-eigenspace of the physical free electric sum, with projection P and complement Q. Write R_E=Q(E−H₀)⁻¹Q (zero on P), so the quadratic Schur form is K_E=PV R_E V P. Let f,h be free E eigenvectors depending only on link variables in a fixed edge set A, and let J consist of all faces sharing at least one edge with A.

If p is outside J, Wₚh has energy E+6 by support separation. Its diagonal term is

    ⟨Wₚ f,R_E Wₚ h⟩ = −⟨f,h⟩/24.

If p≠p′, some edge of p is not an edge of p′ (distinct elementary squares in an open rectangle). When p is outside J, this edge is also outside A. Flipping the sign of that link makes the p factor odd and leaves the other vector even. Both Q and R_E commute with the individual link-center flip. Thus this mixed term vanishes; the conjugate argument covers the other ordering. This proves the exact identity

    ⟨f,(K_E+B/24)h⟩
      = ⟨f,V_J R_E V_J h⟩ + |J|⟨f,h⟩/24,
    V_J = Σ_{p∈J} Wₚ.

For the compression to such supported vectors, the free half-integer level spacing gives the volume-independent bound 2|J|²+|J|/24. Moreover the right side depends only on A together with the edges of J: multiplying by V_J cannot create dependence outside this set, and the resolvent restricted to this cylindrical subspace has the same electric spectral action, since outside links remain in spin zero. This does not control the full E-band operator norm or its coupling to vectors with new support.

## Padded q calculation and local boundary term

Embed the parent open 4-by-2 block with at least one layer of cells on each side inside a larger open rectangle. The six normalized trace summands making up q have distinct link-center parity labels, free energy 15, norm one each, and coefficients ±1, so ||q||²=6. Parity labels are exactly boundary edge masks of face subsets: this map is injective on an open rectangle (any nonempty subset has an exposed edge). Any inner product term involving an exterior insertion can match parities only if the two insertions are the very same exterior face and both original masks are the same. In particular there are no mixed exterior terms in this matrix element.

A given exterior cell shares at most one of the summand's circuit edges. With no shared edge the only energy is 15+6, and the normalized weight after applying one Wₚ is 1/4. With one shared link there are twelve links at spin 1/2 and one doubly used link; the intermediate energies are 18 and 22 from spin 0 or 1 on that link. To compute the weights, condition on all original circuit variables except the shared link. Represent SU(2) on S³. The circuit is linear in the shared link coordinates x (the fundamental matrix entries are linear, including inverses). The other three exterior links are independent Haar and compose to a Haar variable a, independent of the circuit. Wₚ is their S³ scalar product with x after a possible orthogonal coordinate change. The spin-zero part in x comes from averaging x_ix_j=δ_ij/4, and its squared norm after averaging a is 1/16 times the original squared norm. The total squared norm is 1/4, so the spin-one weight is 3/16. No insertion of an exterior face reaches energy 15; thus the embedded vector does still satisfy P V P q=0, also using the old interior calculation. The interior projection and K terms are unchanged on vectors constant in the other links.

The one-shared-link contribution to the normalized diagonal curvature is

    (1/16)/(15−18) + (3/16)/(15−22) = −1/21,

so it differs from the disconnected vacuum value by −1/168. For the six masks in parent order 39, 78, 114, 119, 228, 238, the numbers of occupied boundary edges are 5, 5, 5, 8, 5, 8. With full padding each such edge borders exactly one exterior cell, and the mean is 6. The vacuum-subtracted diagonal is therefore 13/112−6/168=9/112. The absolute diagonals in 6-by-4 and 8-by-6 boxes are respectively −103/112 and −215/112, differing by precisely the difference of vacuum coefficients.

## Reproduce and scope

Run `python3 second_order.py` (Python 3.12, SymPy 1.14). The established entry point retains every previous check and adds the padded cases at distinct offsets. For all exterior insertions on every summand in the two test boxes, it verifies the entire finite energy-weight list using the existing exact Haar tensor contraction; it also checks face-boundary rank, every potential mixed exterior pairing, the occupation counts, and exact diagonals. The support algebra above gives the result for all fully padded open rectangles, not just the examples.

The next issue is spectral, not disconnected vacuum subtraction: check which other degenerate-band vectors couple to the embedded one after the connected boundary terms. Neither the positive diagonal value nor its independence from padding proves that the eigenline is retained, a volume-uniform range of g, or a continuum result.
