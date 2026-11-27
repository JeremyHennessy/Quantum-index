# A connected cross-plaquette zero on the open two-square Wilson Hamiltonian

**November 27, 2026 UTC. Fixed finite graph, weak electric/magnetic ratio, scaled time. Not a spatial or four-dimensional continuum statement.** Follow [the connected one-square control](2026-11-27-connected-one-plaquette-spin-escape.md) by adding one genuinely shared link. The calculation identifies a cancellation in a gauge-invariant cross covariance, not cancellation of the positive diagonal spectral weight. The maximal-tree two-plaquette Hamiltonian and weak-coupling localization have precedents; see [D’Andrea, Bauer, Grabowska and Freytsis](https://doi.org/10.1103/PhysRevD.109.074501), secs. V–VI. Only the observable-specific formula and its derivation are recorded here, with no priority claim.

## Exact reduced operator

Use two open squares sharing one oriented edge, based at its starting vertex. Choose both oriented plaquette words to start with this edge; reversing a plaquette leaves its SU(2) trace unchanged. Write the words G_i=U A_i, where the two return paths have three private edges each. Invariant functions are simultaneous-conjugation-invariant functions of (G_1,G_2), by tree gauge on the six vertices. The Haar pushforward is product Haar: conditional on U, the two path products are independent Haar, each translated by U. In each private link variable, the corresponding plaquette word varies by an isometry with the other word fixed; each contributes a copy of the group Laplacian. A left variation U→exp(sX)U differentiates both words on the left. For fine electric constant c>0, common magnetic coefficient g>0, and W_i=Tr(G_i)/2, the exact Hamiltonian is therefore

    H = -c [3 Δ_1 + 3 Δ_2 + Σ_a (L_{1a}+L_{2a})²] - g(W_1+W_2),

with the same Lie algebra normalization as in the single square. This identity does not infer independence of the time evolution from the Haar product. The ground state Ω is unique and positive (ellipticity and positivity improvement on the connected compact product), hence invariant under simultaneous conjugation and the exchange of the two faces.

## Controlled harmonic scaling

Set ε=(c/g)^(1/4) and G_1=exp(i ε x·σ), G_2=exp(i ε y·σ). Work in units of √(cg) and shift H by 2g. The potential is v=(2-W_1-W_2)/ε². In the fixed rescaled charts, the smooth Haar density, after removing its constant and the factor ε^6, converges on compacts to Lebesgue density. Left invariant fields converge there after rescaling to coordinate derivatives, and the potential to (|x|²+|y|²)/2. With q=(x+y)/√2, r=(x-y)/√2, the limiting kinetic matrix [[4,1],[1,4]] becomes diag(5,3). The limit is

    B = -5 Δ_q -3 Δ_r + (|q|²+|r|²)/2.

For clarity this approximation applies to the actual low spectral states. Globally v≥(2/π²)ε⁻²(θ_1²+θ_2²). Low eigenvalue trial functions of compact rescaled support bound the scaled eigenvalues above by min–max. The positive kinetic form dominates three times the product gradient form, giving compact local H¹ control; the potential inequality bounds the mass outside a rescaled ball by O(R^-2). Extension by a cutoff chart, with the lost L² mass tending to zero, gives strong L² compactness. Testing the limit forms against compactly supported smooth functions identifies all subsequential eigenvectors. Orthogonality is preserved by compactness, so the min–max upper bounds and the ordered oscillator eigenvalues identify the low spectral subspaces, including isolated clusters of multiplicity. This argument works on the full product before the invariant restriction; restriction commutes with the limits since the rescaling intertwines conjugation with simultaneous rotations.

To pass from ground states to connected insertions, let E be the scaled kinetic form and Γ its pointwise bilinear metric. Globally Γ(v)≤C v: the scaled kinetic metric contributes ε², the derivative of v has factor ε^-2, and sin² θ_i≤2(1-cos θ_i), with the cross terms bounded by the same sum. For the normalized ground state and scaled eigenvalue λ, the product-rule identity gives

    E(vΩ,vΩ) + ∫ v³|Ω|² = λ ∫ v²|Ω|² + ∫ Γ(v)|Ω|².

Testing the ground equation with Ω bounds ∫v|Ω|² by λ. Since λ is bounded, absorb λv² into v³/2 plus a constant to obtain a uniform third moment of v. Thus the ε^-2 scaled plaquette insertions, each bounded in size by v before centering, converge in L² on the vacuum by compact convergence plus a tail bound. The resulting quadratic states lie in a finite set of oscillator levels. Their spectral projections converge by the compactness argument, so their fixed nonnegative scaled-time autocorrelations converge by the contraction bound for the residual norm. This does not exchange limits in time or graph size.

## Exchange sectors and exact covariance limit

Let L=H-E₀; define the unnormalized connected sources f_i=(W_i-<W_i>)Ω. Put S=f_1+f_2 and D=f_1-f_2. Exact exchange symmetry makes <S,exp(-tL)D>=0 at every finite coupling and time. After division by ε², the limiting sources are

    S → -[|q|²+|r|²-<|q|²+|r|²>]/2 times the oscillator vacuum,
    D → -q·r times the oscillator vacuum.

In its vacuum the three independent components of q have variance √(5/2), and those of r have variance √(3/2). The two centered quadratic summands of S are orthogonal, with squared norms 15/4 and 9/4; their scaled excitation energies are 2√10 and 2√6. D has squared norm 3√15/2 and energy √10+√6. These identities use the three-dimensional singlet contractions, not a Cartesian nonphysical state. An independent symbolic Gaussian moment check gives Var(S)=6, Var(D)=3√15/2 and Cov(S,D)=0.

Consequently for fixed s≥0,

    lim ε^-4 <f_1, exp[-s L/√(cg)] f_2>
       = (3/16) [√5 exp(-√10 s) - √3 exp(-√6 s)]².

Indeed the cross covariance is exactly one quarter of the difference of the two sector autocorrelations, and their limiting coefficients give the square. The right side has a zero at

    s_* = log(√(5/3))/(√10-√6) ≈ 0.3583293230,

while both sector autocorrelations there are positive. Thus no positive uniform lower comparison of this cross covariance to their sum follows even on the genuine two-plaquette Wilson graph at a fixed scaled time. Near this time the leading covariance cannot distinguish a weak connected transfer from two positive channels that cancel. The diagonal is the corresponding sum, not the square above; the positivity of each spectral measure does not give a comparable lower bound on an off-diagonal entry.

No finite-g zero or sign is asserted because the limit vanishes at leading order. This uses two open squares, does not identify a physical bulk time, and does not establish a gap or its absence for the Clay problem. Next falsification target: determine whether a gauge-invariant sum of diagonal vacuum-clean channels avoids analogous cancellation after genuine bulk blocking, or whether a softening mode prevents uniform control as the graph grows. Do not extrapolate the two normal-mode energies to that regime.
