# A boundary-correlation test that cannot mistake finite data for a gap

**2026-11-27 UTC. Exact spectral criterion and finite-data obstruction.** This extends the [one-delay Gram criterion](https://github.com/JeremyHennessy/Quantum-index/commit/26e2f295f1627ac45a58eb2a63d1f2c532b94282) and the [Wilson boundary reduction](2026-11-27-wilson-three-box-boundary-projection.md). The spectral argument uses an already reconstructed positive-energy sector; it is not a proof of Yang–Mills decay. Background: [Osterwalder–Seiler, lattice positivity](https://doi.org/10.1016/0003-4916(78)90039-8) and [Jaffe–Witten, the continuum target](https://www.claymath.org/wp-content/uploads/2022/06/yangmills.pdf#page=6).

## One packet, a positive delay, and a finite falsification witness

Let H≥0 be the continuum generator in the same selected phase and let ξ be a nonzero packet vector in the orthogonal complement of the entire zero-energy space. Set C(t)=⟨ξ,exp(−tH)ξ⟩. Fix a positive separation t₀ and step h, both in physical units, and write mⱼ=C(t₀+jh). With T=exp(−hH) and ψ=exp(−t₀H/2)ξ, mⱼ is the jth moment of the positive spectral measure ν of T on ψ. The positive damping exp(−t₀E) preserves finite-energy spectral support; the base delay also avoids taking an unseparated correlation. For q=exp(−hm), the packet has no spectral support at energies below m if and only if

    (q mᵢ₊ⱼ − mᵢ₊ⱼ₊₁)_{0≤i,j≤n} is positive semidefinite for every n.

Indeed the associated form is ∫(q−x)|p(x)|²dν(x) with deg p≤n. If mass lies above q, even monomials give a negative form for all sufficiently large degrees: choose z>q with ν([z,1])=a>0; then m₂ₙ₊₁−q m₂ₙ ≥ a(z−q)z²ⁿ−qν([0,q])q²ⁿ. At each n the largest generalized Rayleigh quotient of the pair (mᵢ₊ⱼ₊₁, mᵢ₊ⱼ) on the non-null Gram subspace is at most the top of ν's support. It increases to that top since the monotone ratios m₂ₙ₊₁/m₂ₙ converge to it (by concentration of x²ⁿν near the upper endpoint). No inverse of a singular Gram matrix is needed. Finite failures are witnesses, finite passes are not certificates. A channel gap is not the full gap; apply a common bound to a total family to obtain that implication.

Each mⱼ corresponds to a positive physical-time lag. Where the regulated representatives have separated link support the exact Wilson boundary reduction replaces the connected covariance by its boundary pairing separately at each lag. This does **not** assert positivity of the finite-period Wilson covariance sequence, or interchange the large n limit with mesh or period. First transport the fixed finite matrix to the same selected continuum phase, with the required centering, positive-energy representation and source normalization. Only then perform the order test, or prove bounds on the regulated matrices that pass to that fixed-size limit. The finite periodic wraparound moments are not raw transfer Laplace moments.

## Finite exact matching can hide a nearly massless state

Fix any K≥1, choose distinct 0<x₀<…<x_K≤q<z<1, and define
`lⱼ=∏_{i≠j}(z−xᵢ)/(xⱼ−xᵢ)` and `S=Σ|lⱼ|`.
There are two positive probability measures with **identical moments at all indices 0 through K**, although their lowest energies differ:
- Fast measure: weights wⱼ=|lⱼ|/S on the xⱼ.
- Slow measure: weights wⱼ−εlⱼ on the xⱼ and ε at z, where ε=1/(2S).

All old weights stay positive. Lagrange interpolation says Σlⱼxⱼᵏ=zᵏ for k≤K, including k=0, which proves exact matching and normalization. Both realize positive-semigroup covariances, without a zero-energy atom. They may be realized as t₀-damped spectra by multiplying the finitely many weights by exp(t₀E) before damping. The fast measure has energy ≥−log(q)/h, but the slow one can have energy as close to zero as desired. Thus even exact finite-lag boundary pairings, and every matrix assembled solely from those pairings, can agree while the low spectral supports differ. This strengthens the earlier single-lag control; it does not say actual Wilson correlations realize either spectrum.

## Integer/rational control and next obligation

For K=1,…,32 take xⱼ=(j+1)/(2(K+1)), q=1/2, z=99/100. Exact rational arithmetic verified 560 equal moments and 560 strictly positive modified old weights. The monomial criterion broke the spurious q bound in each slow test, at degree at most 33 in this suite. For K=8 the slow atom has positive weight 48828125000000/379027080708836289967, and the first monomial witness is degree 8; all moments through index 8 match exactly. The example is arithmetic, not numerical Yang–Mills evidence.

The next constructive target is a uniform one-delay operator inequality on the boundary observables needed to realize the polynomial time translates, or a physical-time decay estimate on the same packet with constants surviving the ordered limits. Counting more finite positive checks cannot replace that step. No gap, novelty claim, outside review, or new Lean replay.
