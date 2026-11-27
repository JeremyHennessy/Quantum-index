# Local first-order dressing and a bounded spectral filter

2026-11-27 · Finite fully padded open cubic SU(2) boxes, fixed lattice spacing. Parent: [cubic quadratic calculation](CUBIC-LOCALITY.md) and [center symmetry](THIRD-ORDER-PARITY.md). This separates a verified fixed-box statement from a conditional size-uniform statement.

**A single local correction removes the direct probe's entire first-order off-band component in every fully padded cubic box.** The corrected spectral distribution has a bounded first moment with quadratic coefficient −13/336, and its corresponding bounded second moment starts at order g⁴ in each fixed box. Uniform control of those fourth-order remainders is not proved.

## The exact local correction

Let H(g)=H₀−gV, q be the six-loop real multiplication observable with ||q||²=6, and P_E denote the physical free projection of energy E. The lifted q has free energy 15 and P₁₅Vq=0. Define a new real multiplication function

    r = Σ_{E≠15} [(E−15)⁻¹−1/6] P_E Vq,
    q_g = q + g r.

Each P_E preserves functions of a given set of links: the omitted links stay in their free spin-zero state. In particular a face disjoint from the input circuit contributes only at E=21, for which the displayed bracket vanishes. The surviving terms are supported on the original patch plus its plaquette neighborhood. Those functions are the same in every fully padded cube after translation. They are bounded and smooth: the insertion products are finite sums of spin coefficients and the free projections just select finitely many directly available spins; the free spectral action does not introduce new variables. Each function is real because the free Casimir projection commutes with conjugation. This is a local observable construction, not just an existence statement about a nonlocal spectral projector at nonzero g.

The exact finite-energy data are:

| E | Squared weight of P_E Vq | Dressing coefficient |
| ---: | ---: | ---: |
| 12 | 3/4 | −1/2 |
| 18 | 43/4 | 1/6 |
| 21 | 1+(3/2)(B−34) | 0 |
| 22 | 129/4 | −1/42 |
| 23 | 3 | −1/24 |
| 24 | 9/4 | −1/18 |

Here B is the number of cubic plaquettes, q is not normalized, and all unlisted weights vanish. One way to see the exterior increments is to add the mean exterior occupation count 26 across the six unit-loop summands; each occupied exterior insertion adds singlet and triplet weights 1/16 and 3/16, while each unoccupied one adds 1/4 solely at E=21. The interior weights are those of the original 4×2 calculation; the parity argument excludes all exterior mixed terms. Independently, the verifier builds the full insertion products in each of two boxes, groups by link-center parity, and computes all exact Haar Gram weights, including off-diagonal terms within groups. Multiplying each weight by the square of its dressing coefficient gives

    ||r||² = 14579/28224.

## Why the first-order residual vanishes

For each fixed finite box the normalized vacuum Ω_g is analytic near zero with Ω_0=1 and Ω′_0=V1/6 in the positive-overlap convention. Let Ψ_g=q_gΩ_g. Since q_g and V are multiplication operators, writing E₀(g) for the vacuum energy gives

    (H(g)−E₀(g)−15) Ψ_g = [H₀,q_g] Ω_g −15 q_g Ω_g.

At zero this is zero. Its derivative is (H₀−15)r+(H₀−21)Vq/6, which is zero by the defining coefficient and P₁₅Vq=0. The projected weights also directly show the bare probe has nonzero residual derivative. Centering Ψ_g by subtracting ⟨Ω_g,Ψ_g⟩Ω_g does not affect the first derivative: its subtraction vanishes at g=0 and at first order because the vacuum derivative has energy 6, q has energy 15, and r has no vacuum component. Normalization does not introduce a linear scalar term because Ψ′_0 is orthogonal to q. Consequently the normalized centered vector ψ_g has residual O(g²) in Hilbert norm. These fixed-box derivatives can be taken in the free graph norm: bounded V preserves the analytic spectral graph domain of the vacuum, and multiplication by a smooth finite-spin function is bounded in the H₀ graph norm (the commutator has at most first-order link derivatives with smooth bounded coefficients on the compact finite product).

There is a stronger vector identity at first order. Write R=Q(15−H₀)⁻¹Q, Q=1−P₁₅. Before centering and normalization,

    Ψ′_0 = r + Vq/6 = −R Vq.

This is exactly the derivative of the canonical isometric identification of the free energy-15 subspace with the interacting band applied to q, as follows from the analytic graph equation. Thus the off-band component of ψ_g has norm O(g²), and its transported band coordinates equal q/√6+O(g²) with no linear term inside the band.

## What a bounded filter presently proves

Let ν_g be the spectral measure in ψ_g of the nonnegative shifted operator H(g)−E₀(g). Set φ(E)=(E−15) exp[−(E−15)²] and write m₁=∫φ(E)dν_g, m₂=∫φ(E)²dν_g. On the interacting band, the transported shifted Hamiltonian is

    15 I − g T + g²(K+B/24) + O(g³).

The filter has φ(15)=0 and φ′(15)=1; the normalized transported vector has zero linear derivative, and T q=0. The off-band expectation contributes only O(g⁴) since φ is bounded and the off-band vector is O(g²). The quadratic coefficient in m₁ is therefore the verified −13/336. For m₂, |φ(E)|≤|E−15| and the squared residual give O(g⁴).

The center flip relating H(g) and H(−g) takes the real q to q, V to −V and r to −r, so it sends q_g to q_{−g} and the centered normalized spectral moments are even. In a fixed finite box the moments are real analytic locally: φ and φ² are Fourier integrals against polynomial-times-Gaussian functions; the bounded perturbation Duhamel/Dyson expansion grows at most exponentially in |t| for g in a fixed complex neighborhood, which the Gaussian dominates. The ground vector, centering and normalization are locally real analytic there as well. Thus, setting a=13/336, the precise fixed-box conclusion is

    m₁(g)=−a g²+O(g⁴),    m₂(g)=O(g⁴),

with remainder constants and coupling neighborhood possibly depending on box size.

**Conditional quantitative implication only.** If one proves these fourth-order remainders uniformly (for example, uniform fourth derivatives of the two normalized Gaussian-time moments), choose a common small interval so that m₁≤−(a/2)g² and m₂≤Dg⁴ for D independent of box. On the complement of S={E≤15−(a/4)g²}, the sign and bound of φ imply −φ(E)≤(a/4)g². Cauchy–Schwarz then gives

    (a/2)g² ≤ (a/4)g² + √(m₂ · ν_g(S)),
    ν_g(S) ≥ a²/(16D),   with a/4=13/1344.

This step would give a fixed-spacing energy window at actual nonzero coupling without isolating every individual excited branch. The uniform fourth derivatives are a separate, open input; using the whole-box operator norm in the fixed-box analytic estimate does not supply them. No uniform nonzero-coupling interval or continuum statement is claimed.

## Reproduce

Run `python3 second_order.py` with Python 3.12 and SymPy 1.14. The existing verifier retains its previous checks and verifies the full free spectral Gram weights, exact norm, zero residual coefficients, and conditional-threshold arithmetic. The tested E=21 weights differ (232 versus 733), while its removed projection and the retained correction norm agree exactly. The script does not estimate the uniform fourth derivatives.
