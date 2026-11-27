# Positive plaquette energy still has a soft edge on growing open squares

**November 27, 2026 UTC. Ordered fixed-graph harmonic limit, then growing two-dimensional spatial graphs. No uniform running-coupling or continuum conclusion.** Continuation of [the shared-link two-square control](2026-11-27-shared-link-connected-plaquette-cancellation.md). Instead of an off-diagonal correlation with possible cancellation, use a single observable with a positive spectral measure. Its spectral edge still softens as the graph grows.

## Exact coordinates and quadratic kinetic symbol

Let there be L by L bounded faces, with open edges and all face boundaries oriented counterclockwise. The graph has (L+1)^2 vertices and 2L(L+1) edges. A maximal tree comprises every horizontal edge and the vertical edges at the left boundary. In tree gauge the horizontal links and left boundary vertical links are identities. In each row of faces the oriented plaquette variables are successive quotients of the vertical links, beginning at the fixed identity; thus plaquette variables are a smooth triangular invertible reparametrization of the remaining L² links. Both the tree change and this triangular change preserve the induced product Haar, by Haar translations. The physical functions are invariant under the remaining simultaneous conjugation. See [D’Andrea et al.](https://doi.org/10.1103/PhysRevD.109.074501) for maximal-tree gauge and [the dual U(1) open-lattice treatment](https://doi.org/10.1140/epjc/s10052-026-16582-3) for the related Abelian geometry. We make no priority claim for the harmonic approximation.

Let B_{pe} be the signed oriented face boundary matrix and K=BBᵀ. For the Hamiltonian with electric coefficient c and plaquette term -g Σ_p W_p, expand at the flat connection. In a based plaquette holonomy, the linear variation is Σ_e B_{pe}X_e. Derivatives of the conjugating tree transport cancel at a plaquette identity. The quadratic gradient metric is therefore K on face indices, times the three-color identity. K has diagonal 4 and -1 for edge-sharing faces, so it is the open face-grid Dirichlet Laplacian. Its sine-product eigenvalues are

    λ_{jk}=4-2cos(πj/(L+1))-2cos(πk/(L+1)),     1≤j,k≤L.

This sign is consistent with the two-square calculation, which reverses one face to use a common orientation on the shared link. That reversal changes a coordinate sign, not a trace nor the kinetic eigenvalues.

## Controlled fixed-L limit

Put ε=(c/g)^(1/4) and use time t=s/√(cg). The rescaled Lie algebra variables have potential (1/2) Σ_p |x_p|² and kinetic K, hence independent three-dimensional oscillators after the orthogonal sine transform. For each fixed L, this follows by the same compactness proof as on two squares: there is a unique flat minimum in the plaquette variables, the smooth kinetic form is uniformly elliptic on the compact product (the non-tree edge derivatives alone give a smooth positive metric after the triangular change), and the shifted scaled potential v=ε⁻²Σ_p(1-W_p) dominates the sum of squared scaled class angles times 2/π². Trial functions with compact scaled support, local H¹ compactness, tail tightness and the eigenfunction limit equation yield convergence of the low spectral subspaces. Constants in this argument may depend on L. The product-rule bound Γ(v)≤C_L v gives the uniform-in-ε third v moment for the ground state: with the scaled energy E and ground eigenvalue l, E(vΩ,vΩ)+∫v³Ω² = l∫v²Ω²+∫Γ(v)Ω²; absorb half the cubic term. This controls the squared insertion's tails and makes the normalized connected source converge in L². As in the preceding note, the oscillator source lies in finitely many levels for fixed L, so the autocorrelation converges for each fixed s. No joint-in-(L, ε) convergence follows from this proof.

## Diagonal spectral measure and its soft edge

Use S_L=(Σ_p(W_p-<W_p>))Ω, exactly vacuum-orthogonal. In harmonic coordinates the ε⁻²-scaled source is minus one-half the centered sum of the normal coordinates' squared lengths. A normal-mode coordinate with λ has one-coordinate vacuum variance √(λ/2). The centered squared length has variance 3λ and excites the rotational singlet at energy 2√(2λ) above the oscillator vacuum. Distinct normal-mode terms give orthogonal vectors even in a degenerate level. In particular all weights are positive; there is no cancellation between different plaquettes in the **diagonal autocorrelation of the summed observable**. Its normalized limiting function is

    C_L(s) = [1/(4L²)] Σ_{j,k} λ_{jk} exp[-2s√(2λ_{jk})].

Here Σ λ_{jk}=4L². The first spectral weight is λ_{11}/(4L²)>0 and its energy is asymptotic to 4π/(L+1). No positive common exponential upper decay rate with a finite prefactor can hold for all L and all s *in this ordered family*: take L sufficiently large, and its positive slow term eventually exceeds any proposed faster exponential. The small weight, asymptotic to π²/[2L²(L+1)²], does not fix an all-time bound.

Taking L→∞ at fixed s gives the Riemann integral on [0,π]² with normalized measure λ(k)dk/(4π²), pushed forward by E=2√(2λ(k)), λ(k)=4-2cos k₁-2cos k₂. At the unique soft corner λ(k)=|k|²+O(|k|⁴). In the first quadrant integration of the radial leading weight gives

    μ([0,E]) ~ E⁴/(2048π),
    C_∞(s) ~ 3/(256π s⁴).

For the second formula one can rescale the first-quadrant integral directly by u=sk near the corner and use λ comparable to |k|² to dominate by a quadratic weight times an exponential. Away from the corner the contribution is exponentially small. This is a soft edge in a positive diagonal probe, distinct from cancellation in a signed cross entry. Checked the signed edge matrix against the sine eigenvalues and trace at L=1,2,3,5,10. Independent Gauss–Legendre quadrature gives s⁴C∞(s)=0.0037486473, 0.0037313333, 0.0037302651 for s=8,32,128, approaching 3/(256π)≈0.0037301940. These checks do not substitute for the proof.

The order here is g/c→∞ at each fixed open **two-dimensional** graph, then L→∞, then large scaled time. The interacting four-dimensional Wilson continuum problem has a different trajectory, topology, scaling, and order of limits. Nothing here proves that its gap vanishes or exists, even for the trace sector. The next useful target is a uniform comparison (or an obstruction) for the first non-Gaussian corrections on the soft modes as volume and spacing vary, rather than an argument that positive channel weights by themselves enforce a uniform gap.
