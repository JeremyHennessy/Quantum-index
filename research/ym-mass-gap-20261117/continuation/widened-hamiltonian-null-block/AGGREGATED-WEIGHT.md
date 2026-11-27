# A size-independent aggregate quadratic spectral weight for the cubic probe

2026-11-27 · Fixed spatial spacing, finite fully padded open cubic boxes as in [the cubic calculation](CUBIC-LOCALITY.md), commit `2068fb9ee44a53198771c61d05f6b00a31ca35ec`. No continuum claim.

Let u=q/√6 be the normalized cubic embedding of the six-loop direct probe vector, E=15, B the number of cubic plaquettes, P the free E-band projection, Q=1−P, R=Q(E−H₀)⁻¹Q the reduced resolvent extended by zero, K=PV R VP, and N the projection in P onto ker(PVP). The vacuum-subtracted quadratic operator on the zero-linear-slope block is A=N(K+B/24)N.

**In every such cubic box, the spectral measure of A in u assigns weight at least 7,921,875 / 477,781,066,784 (>1/61,000) to quadratic coefficients κ≤−13/672.** This is an aggregate lower bound on the *limiting quadratic block*, not a size-independent coupling range or individual-mode weight.

## Local action in the full free energy band

We extend the earlier cancellation for local matrix elements to a cancellation of the full vectors in the free band. For any two faces p,r with disjoint edge sets, one has

    P(Wₚ R Wᵣ + Wᵣ R Wₚ)P = 0.

To see this without assuming factorization of the input state, split the free link energy into three commuting sums on the edges of p, the edges of r, and the rest. Resolve input and output into joint eigenvalues; the edge energies on the rest do not change, and the two face multipliers commute. If the total returns to E, the two separate energy increments are δ and −δ. If δ≠0 the intermediate denominators have opposite signs and the two ordered component matrix elements cancel. If δ=0 both intermediate components are excluded by Q. These energy projections and face operations can be evaluated in the full product Haar space and then restricted to physical vectors, since each link Casimir and each face multiplier preserves gauge invariance.

For a fixed input f supported on an edge set I at energy E, if both faces are disjoint from I, the first insertion adds energy 6 on the exterior links and the final P forces return to the exterior vacuum. Distinct faces give zero, even when they overlap one another, because ⟨Wₚ,Wᵣ⟩=0 by a link-center flip. A repeated remote face contributes exactly −f/24; it cancels the matching part of Bf/24. Consequently (K+B/24)f depends only on:
- repeated faces meeting I, including the matching +f/24 for each;
- unordered **overlapping** pairs of distinct faces, at least one meeting I, with both orders included.

After applying P, these outputs still depend only on the union of their link supports: P is a free-electric spectral projection and cannot activate a link initially in spin zero. All possible faces in the list lie within two plaquette steps of the fixed patch. The verifier includes a detached-hopping negative control: choosing three edge-disjoint faces and an energy-12 two-loop state, the two orders are individually nonzero, +1/24 and −1/24, as checked with exact Haar kernels. Keeping just one order would give a nonlocal term.

## Explicit bound on the second moment

For each of the six unit-norm binary trace summands fᵢ of q, take I to be its ten occupied links. For each potentially surviving insertion p, compute its exact once-inserted spectral weights by the existing rational Haar contraction and set an upward rational bound rᵢₚ≥||R Wₚ fᵢ||, rounding to the nearest 1/1000 from above. If wₑ is the corresponding Gram weight for a **full** face trace at twice-energy e, then

    ||R Wₚ fᵢ||² = Σ_{e≠30} wₑ/(30−e)².

The factor from the face half trace cancels the square of the conversion from e to ordinary energy. A repeated face meeting I now contributes norm at most rᵢₚ+1/24. Each retained unordered pair [p,r] contributes at most rᵢₚ+rᵢᵣ by ||Wₚ||≤1 and contractivity of P.

Before adding pair bounds, discard pairs that cannot return to E=15 by the tensor-product spin rules. After the two insertions the odd link count fixes the minimum energy at 3/2 times that count. A link touched exactly twice in the complete product can instead add 4; a link touched exactly three times can add 6. If the remaining energy 15 minus that minimum cannot be formed from the available increments, the projection is zero. This is a necessary test only; no surviving candidate is asserted to give a nonzero form.

Terms with different output link-center parity are orthogonal. For each parity pattern, sum the upper bounds across all contributing ordered pairs and input summands by triangle inequality; then sum the squared pattern bounds and divide by 6, accounting for the six coefficients ±1/√6. For the six labels, the numbers of faces meeting their occupied links are (32,32,32,36,32,36); overlapping pairs before energy filtering are (299,299,299,339,299,339); and retained pairs are (10,10,10,4,10,4). The 42 resulting parity groups, including diagonal groups, give

    ||(K+B/24)u||² ≤ 304707313/13500000.

The entire possible local face list fits in an 8×6×4 box around the embedded 4×2 patch (offset two in each coordinate, with the patch at height two). Repeating with a 10×8×6 box returns exactly the same bound. Any fully padded smaller or off-center presentation can delete possible faces only; within the actual box the surviving parity patterns are unchanged under translation into the local comparison box, and all entries in these group *bounds* are nonnegative. Thus clipping cannot increase the bound. The calculation never computes the full cubic energy-15 spectrum. Applying N afterward could change the support, but N is contractive and Nu=u, so ||Au||² is at most the same number.

## From the exact mean to weight

The prior cubic result gives ⟨u,Au⟩=−a with a=13/336. For X distributed according to the normalized spectral measure of A in u, put S={X≤−a/2}. Then

    a = E[−X] ≤ a/2 + E[|X| 1_S]
      ≤ a/2 + (E[X²] · Pr(S))^(1/2).

Rearranging proves the stated size-independent weight bound. It concerns the sum over all curvatures in the set, with no lower bound on any one eigenspace or count. For each fixed box, the corresponding analytic branch group gives a nonzero limiting ground-to-group weight for the multiplier q; this follows because q applied to the free vacuum gives √6u. The small-coupling neighborhood of that statement may shrink with box size. In particular the result does not interchange coupling and volume limits or establish bounds on physical excitation energies when taking a spatial continuum limit.

## Reproduce

Run `python3 second_order.py` (Python 3.12, SymPy 1.14). It preserves the previous output and runs the detached-order control, both enumerated local shell checks, exact spin-energy tests, the rational upward rounding and final spectral weight arithmetic. No external solver is required.
