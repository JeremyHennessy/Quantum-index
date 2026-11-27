# The SU(2) Wilson bridge gap survives the continuous-time limit

**2026-11-27 UTC. Temporal continuum only, at fixed spatial mesh.** On spatial cubic tori with sides at least six, take temporal Wilson parameter t and spatial Wilson coefficients v_p=g_p/t with real g_p, sup |g_p| ≤ 1/400. With time spacing 1/t, the gauge-invariant Kogut–Susskind operator

    H = A − V,   A = (1/2) Σ_e (−Δ_e),   V = Σ_p g_p W_p,
    W_p = (1/2) Re Tr U_p

has a simple vacuum and a gap of at least 1/40, uniformly in spatial volume. The Laplacian here is on the unit-radius S³ and has eigenvalue j(j+2) on the spin j/2 sector. These are proof constants in this normalization, not optimal or physical continuum constants.

## Weighted bridge refinement

Use the [previous Wilson block comparison](https://github.com/JeremyHennessy/Quantum-index/commit/ee6cbe54f88853785396b5d3e29f7941742cfec2) with m=ceil(2t), n=8m, κ=γ/t and γ=1/40. Let a_j=I_(j+1)(t)/I_1(t), and r=a_1. The fixed-order Bessel asymptotic gives t(1−a_j)→j(j+2)/2 and a_j^m→exp(−j(j+2)). The Turán ratio bound a_j≤r^j and r^m→exp(−3) dominate the Peter–Weyl series by Σ (j+1)^2 exp(−2j) for sufficiently large t. Thus D_t=Σ_(j≥1)(j+1)^2 a_j^m tends to D=Σ_(j≥1)(j+1)^2 exp(−j(j+2))<21/100. For an elementary bound use exp(3)>20, exp(8)>2500, exp(15)>10^6, and after j=3 a term-ratio upper bound (5/4)^2 exp(−9)<1/2.

The same field-tilted checkpoints as before then have common mass α≥((1−D_t)/(1+D_t)) exp(−8m sup|g_p|/t)>5/8 eventually. Indeed its lower limiting bound is at least (79/121) exp(−1/25)≥(79/121)(24/25)>5/8. All thresholds on t here are independent of spatial volume.

Instead of weighting every influence by its maximum possible distance, keep the distance inside each row sum. For the two time endpoints use their path distance d, and disagreement ≤(3/8)^floor(d/m). For the spatial change at time j relative to a target site at time i in a block, a connecting path of length |i−j|+1 exists. There are at most twelve such spatial neighbors at each time, each changing the whole block in total variation by ≤sup|g_p|/t. Averaging over the n intervals containing the target gives weighted row bounds

    C_E(t) ≤ (2/n) Σ_(d=1)^n exp(κd)(3/8)^floor(d/m),
    C_S(t) ≤ (12 sup|g_p|/(tn)) Σ_(i,j=1)^n exp(κ(|i−j|+1)).

Here n/t→b=16. The Riemann sums imply

    limsup C_E ≤ (2/b) ∫_0^b exp(γx)(3/8)^floor(x/2) dx
               ≤ 2(exp(2γ)−1)/[bγ(1−(3/8)exp(2γ))],
    limsup C_S ≤ (24 sup|g_p|/(bγ²)) (exp(γb)−1−γb).

Using exp(1/20)<263/250 and exp(2/5)<373/250 gives a total <0.982, in particular strictly <0.99 (rational checks). The exponential bounds follow from the Taylor polynomial through degree five plus the first omitted term divided by 1−x/7 for these positive x. The tilted comparison and infinite-time spectral argument of the prior note therefore apply with this κ for all sufficiently large t. The prefactor in the covariance estimate may change: the new row margin is 1−q>0 and the extra source weight is at most exp(κn); neither changes the decay rate. The argument starts with the ambient trace, not a presumed equality to the physical projected finite-period trace.

## Norm-resolvent passage, with spatial volume fixed for the passage

Write T_t=exp(V/(2t)) K_t exp(V/(2t)) on the gauge-invariant subspace; K_t is the tensor product normalized link convolution. A_t=t(I−K_t), so A_t→A on every finite-label block by the displayed one-link asymptotic and the product formula. On the complement of the block with all link labels below M, at least one link has a label ≥M. The monotone link eigenvalues and all other eigenvalues ≤1 imply A_t≥t(1−a_M(t)) there, while A≥M(M+2)/2. The finite-label cutoff commutes with local gauge transformations. At any fixed real z<0, truncate first, take t→∞, then M→∞. This proves norm convergence of (A_t−z)⁻¹ to the compact (A−z)⁻¹.

The difference B_t=t(I−T_t)−A_t equals −(VK_t+K_tV)/2+O(t⁻¹) in operator norm at fixed volume. It is uniformly bounded there and converges strongly to −V because K_t→I strongly. Hence B_t(A_t−z)⁻¹→−V(A−z)⁻¹ in norm, using compactness of (A−z)⁻¹ and the uniform boundedness of B_t. Choose z below a common lower bound and sufficiently negative that the resolvent factor I+B_t(A_t−z)⁻¹ can be inverted by a Neumann series. This yields norm-resolvent convergence of t(I−T_t) to H. The top eigenvalues of these positive resolvents give convergence of the isolated low energies with multiplicities. In particular λ_0(t)→1 for the original transfer, and

    E_1(t)−E_0(t) = t(λ_0(t)−λ_1(t))
                  ≥ t λ_0(t)(1−exp(−γ/t)) → γ.

The finite-volume positive lower bound thus survives removal of the time mesh, independently of the volume chosen. This does not take the time limit in operator norm uniformly in volume, and no such stronger claim is needed to conclude the finite-volume gap bound with volume-independent constants.

## Independent second-order check at uniform g

At g=0 the physical plaquette level is 6. Work at fixed spatial volume. The normalized state is f_p=2W_p. In the second-order reduced-resolvent coefficient at energy 6, the same-plaquette channels have energies 0 and 16, each squared amplitude 1/4. Subtracting the vacuum shift gives the net self term 1/24−1/40+1/24=7/120. Disjoint pair products have energy 12 and cancel the vacuum/ground-normalization contribution. A shared-edge pair has energies 9 and 13 with squared amplitudes 1/16 and 3/16, respectively. Together with 1/24 normalization this gives −1/168, both for the diagonal contribution per neighbor and for the off-diagonal transition. Link-center parity restricts the nonzero terms to these cases. The g² coefficient on the gap band is (7/120−12/168)I−A_edge/168; since A_edge is 12-regular, its minimum is −71/840 at zero momentum. This agrees with the [Wilson log-band Hessian](https://github.com/JeremyHennessy/Quantum-index/commit/67d33f280d67f802dddc33c01be3aeba2539e651) after changing sign for energy, scaling v=g/t, and dividing the Hessian by two. This derivative check does not supply a uniform Taylor remainder or a proof of a gap by itself.

## Scope and next test

The temporal lattice-to-Hamiltonian connection is classical: [Kogut–Susskind](https://doi.org/10.1103/PhysRevD.11.395) and [Creutz](https://doi.org/10.1103/PhysRevD.15.1128); the asymptotic used here is [DLMF 10.40](https://dlmf.nist.gov/10.40). [Yarotsky](https://arxiv.org/abs/math-ph/0412040) supplies a general Hamiltonian gap-stability approach for appropriate small perturbations of a product vacuum. [Daugherty, Ward and Ryan](https://doi.org/10.5281/zenodo.23597996) report substantially stronger strong-coupling results for open boxes under their assumptions; no exact constant comparison across boundary conditions or proof methods is asserted here. The project-specific result is the explicit transfer of the direct Wilson bridge bound through time refinement on tori, not a priority claim for Hamiltonian gaps.

The spatial regulator and the required weak-coupling trajectory are untouched. The remaining bridge problem is to get contraction for coarse, gauge-invariant physical observables after spatial blocking rather than requiring a small absolute field on each microscopic spatial plaquette. Enlarging the proven strong-electric interval is not evidence of that step. No Lean replay, external review, or Clay-solution claim.
