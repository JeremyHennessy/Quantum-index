# Volume-independent Wilson-band coefficient bounds on a total-coupling ball

**2026-11-27 UTC. Fixed anisotropic temporal coupling.** Uses the [dressed plaquette construction and connected supports](2026-11-27-wilson-fourth-order-connected-support.md) and the [isolated Wilson transfer band](2026-11-27-wilson-transfer-plaquette-gap-hessian.md). This is a bound on formal coefficient growth, not a proof of uniform convergence.

## A whole-band bound without a factor from the number of sources

Under product Haar, write f_p=Tr(U_p), F_a=Σ a_p f_p and S=Σ|a_p|². Link-center parity forces the surviving fourth-order terms to be pairs, since four distinct elementary faces each share at most one edge with any other face. E f_p⁴=2 by the singlet and adjoint characters in f_p². For distinct p,b, E(f_p² f_b²)=1. If they share an edge, condition on that edge and integrate their independent Haar return paths. Consequently for complex a,

    E |F_a|⁴ = 2 S² + |Σ a_p²|² − Σ |a_p|⁴ ≤ 3 S².

This holds for the entire unperturbed source map from the coefficient ℓ² space into L⁴, independently of the number of plaquettes. Independently checked the algebra by exact weighted enumeration with three different complex sets of coefficients and independent three-point controls with the same second and fourth moments. The gauge proof, not the control, establishes the Haar statement.

Let k_t be the one-link normalized central kernel, R=Σ|v_p|, and T(v)=e^{Σv_pW_p/2} K e^{Σv_pW_p/2}. Some convolution power m=m(t) of k_t has uniform pointwise distance to 1 at most 1/2. In fact with r=I₂(t)/I₁(t), write b=k_t−1. The centered convolution operator has L² norm r by the character expansion. For m≥2 a translated convolution pairing and Cauchy–Schwarz give ||k_t^{*m}−1||∞≤r^{m−2}||b||₂². The normalized kernel is e^{tW}/Z(t), with Z(t)=2 I₁(t)/t. So ||b||₂²=Z(2t)/Z(t)²−1=O(t^{3/2}) by the [fixed-order Bessel expansion](https://dlmf.nist.gov/10.40). As r=1−3/(2t)+O(t⁻²), one may choose m=O(t log(t+2)) as t grows.

For real input on one link with mean u and centered norm σ in L², the centered output h of this power has mean zero and ||h||∞≤σ/2. Expanding E(u+h)^4 and using 2|u|σ³≤u²σ²+σ⁴ shows it is at most u⁴+(7/4)u²σ²+(5/16)σ⁴≤(u²+σ²)². Positivity gives the contraction for complex inputs via the modulus. Minkowski's mixed-norm inequality tensorizes this L²→L⁴ contraction over all links (apply the one-coordinate bounds, interchanging the L² and L⁴ mixed norms in the contractive direction). It applies on the physical gauge-invariant subspace by restriction. The m-step path weight of T(v)^m differs from that of K^m by an absolute factor at most exp(mR)−1, since |W_p|≤1, with half weights at the two endpoints. Thus their L²→L⁴ operator difference is at most exp(mR)−1 even for complex v.

## Complex Riesz and Gram continuation, with a large-t constant

Work in the complexification of the real Hilbert space, using the continuous bilinear pairing (not a Hermitian pairing) for analytic normalizations, and ordinary Hilbert norms for estimates. The transpose of an operator is its adjoint conjugated by the real-structure conjugations, hence has the same operator norm. For real v the transpose is the usual adjoint on these real-defined maps.

Let γ be a common separation bound for 1 and q=r⁴ from the other unperturbed physical spectrum, decreased if needed to keep the two chosen contours disjoint. The prior band bound gives γ comparable to 1/t at large t. Since ||T(v)−K||₂→₂≤exp(R)−1, the fixed-contour resolvent identity gives vacuum and band Riesz projections within O(R/γ) of their unperturbed values for R a sufficiently small multiple of γ. The vacuum eigenvalue satisfies |λ₀−1|=O(R), by spectral inclusion using the normal unperturbed resolvent. Take Ω=P₀(v)1 normalized by the analytic square root of its bilinear squared norm, which is near 1. Then ||Ω−1||₂=O(R/γ), and Ω=λ₀^(−m)T(v)^m Ω yields

    ||Ω−1||₄ = O(R(m+γ⁻¹))       for R≤c/(m+γ⁻¹).

Indeed telescope against K^m 1=1, with the L²→L⁴ bound for K^m, the path-weight difference O(mR), and λ₀^(−m)−1=O(mR). For X(a)=Π(v)F_aΩ, Hölder and the exact fourth moment show that X is O(R(m+γ⁻¹)) close in operator norm to the reference isometry. In particular the analytic Gram G=XᵀX is within the same order of identity without an extra column count. Define J=X G^(−1/2) by its convergent binomial series; JᵀJ=I. All transpose operations here are complex linear in the matrix entries. The log of JᵀT J/λ₀ is analytic by the power series around qI on a smaller ball. For each t>0 this gives some radius δ(t)>0 and bound M(t) uniform in volume; for large t, q is bounded away from zero and one can use δ(t)≥c/[t log(t+2)] with M bounded by an absolute constant. No analytic dependence on conjugated couplings was used.

## What this gives for high connected orders

For an order-n monomial on m₀≤n insertion faces, use a Cauchy polydisk of per-face radius δ/(2m₀), setting other couplings to zero. The bound is M(2m₀/δ)^n. Only connected supports contribute, by the prior exact dressed-source factorization on real couplings, hence also for their Taylor coefficients in the complex extension. The number of anchored connected shapes and multiplicities is at most exponential in n. Each displacement is at most n+1 in lattice units on tori that do not wrap that order. Pairing inversion-related displacements via cosines contributes at most a quadratic momentum factor and a factor O((n+1)²). Absorb this polynomial and use n^n≤e^n n! to obtain for n≥1:

    ||H_n(k)−H_n(0)|| ≤ C(t)^n n! |k|²,
    ||H_n(k)|| ≤ C(t)^n n!.

The bounds hold volume-independently for each nonwrapping coefficient and its coefficientwise large-volume limit. The large-t argument gives C(t)=O(t log(t+2)). This is a Gevrey-1 estimate: dividing the formal coefficients by n! gives a locally convergent Borel transform, but ordinary convergence, analytic continuation of that Borel transform, and Borel summability are not established.

For uniform v the total-coupling ball controls volume times |v|, not |v| itself. The next estimate must cancel spectator factors *before* bounding a complex local-coupling neighborhood, or use another connected estimate eliminating the factorial loss. [Yarotsky's isolated quasiparticle theorem](https://arxiv.org/abs/math-ph/0411042) is a useful benchmark; its perturbation hypotheses have not been matched to this discrete-time gauge-constrained transfer. No weak-coupling continuum matching, novelty priority, new Lean replay, or mass-gap proof.
