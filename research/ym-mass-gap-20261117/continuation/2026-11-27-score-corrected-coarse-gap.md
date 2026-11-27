# A score-corrected coarse energy without a small-response hypothesis

**2026-11-27 UTC. Finite-volume identity and conditional bound; no weak-coupling gap claim.** Continue [the two-scale SU(2) criterion](2026-11-27-holonomy-blocking-vacuum-score.md), using the actual vacuum-slice law μ=Ω²dHaar, coarse path products z=π(U), and its marginal ν. Put H=−c Σ_e Δ_e+V with c>0 in fine-Hamiltonian units. All paths have b slots and are pairwise edge-disjoint. Denote the horizontal orthonormal frame by T, and use L_z for the vertical conditional generator *without* c.

## Exact retained operator and coupling

Conjugate H−E₀ by multiplication by Ω and write the resulting operator as L. For a coarse test F, let JF=F∘π. Each slot on a path pushes the fine Laplacian to one coarse Laplacian by left/right isometry, and Dπ Dπ*=bI. Thus the compression is exactly

    J*LJ = −c b (Δ_c + ∇ log ρ_c · ∇),    ρ_c=dν/dHaar_c.

Equivalently this is the operator of the energy c b∫|∇F|²dν. Put a(z)=√b∇F(z), s=T log Ω²−E[T log Ω²|z], and Q=1−JJ*. The horizontal score identity of the previous note, or direct integration by parts against smooth coarse tests, gives

    QLJF = −c (s·a)∘(U↦(U,π(U))),

where s(U) and a(π(U)) are paired in the same coarse frame. In particular this uses Ω², not the bare plaquette Gibbs density. Haar disintegration plus smooth positivity of Ω gives smooth positive conditional densities. Fibers are products as manifolds (path products fixed, b−1 links per path free, off-skeleton links free); use their *induced* metric, not an arbitrary product metric in these coordinates. Gauge equivariance permits restriction to the physical space. See [Legoll and Lelièvre](https://arxiv.org/abs/0906.4865) for related conditional effective dynamics.

## Retain the horizontal energy when bounding the subtraction

For a fine f write f=JF+h with F=E[f|z] and E[h|z]=0. At each fiber write C_z h=E[s h|z]. The derivative identity applied to h gives E[T h|z]=−C_z h, exactly. Conditional Jensen therefore bounds the full energy from below by

    c ∫ (||a−C_z h||² + ||L_z^(1/2)h||²) dν.

This retains the mean horizontal energy of h. Discarding that energy before bounding the cross term can incorrectly suggest that the score norm must be smaller than one.

Let M(z)=C_z L_z⁻¹ C_z*; its entries are ⟨s_i,L_z⁻¹s_j⟩ using the fiber inner product. The inverse acts on mean-zero fiber functions. Fix 0≤η<1 and reserve η of the vertical energy. Set u=L_z^(1/2)h and R=C_z L_z⁻¹/², so RR*=M. Pointwise, minimizing ||a−Ru||²+(1−η)||u||² gives

    a* [I+M/(1−η)]⁻¹ a.

Indeed the minimizer is R*[(1−η)I+M]⁻¹a, and substitution, or completing the square, gives the stated value. This optimization only relaxes the original problem (we allow independent minimization in each fiber). It requires no smooth dependence of the minimizing choice. Hence

    ⟨f,Lf⟩ ≥ c ∫ a*[I+M/(1−η)]⁻¹a dν
              + c η ∫ ||∇_v h||² dμ.

For η=0 the zero-energy Schur subtraction is at most the coarse gradient form with matrix I−(I+M)⁻¹ = M(I+M)⁻¹, instead of M. This follows by minimizing full fine energy over h at fixed F, and is not an equality for general nonlinear data: Jensen and independent fiber minimization can lose horizontal fluctuations. For 0<η<1, let λ_c(η) be the lower Poincaré floor of the first weighted coarse form (including c and b), and γ_v a fiber Poincaré floor including c. The full physical gap is at least min{λ_c(η),ηγ_v}, by the exact orthogonal variance split. A sufficient scalar substitute is λ_c(η)≥λ_c/(1+ess sup ||M||/(1−η)); it needs a bound on ||M|| at the desired scale but not smallness. More sharply, one can bound the weighted coarse form directly even if the pointwise supremum is large. The tensor transforms under changes of orthonormal frame so the energy is invariant under those changes.

## Checks and next obstruction

For a correlated Gaussian with orthonormal coordinates (x,y), y|x has mean Dx and covariance S. The earlier note gives M=D*D. On the linear retained sector the exact elimination is achieved by a centered linear h, because ∇_x h at fixed y is constant in y and the vertical optimizer is linear. The effective matrix is exactly (I+D*D)⁻¹. For scalar D=−c_xy/d_yy, the discarded linear compression in L²(μ) has eigenvalue d_yy+c_xy²/d_yy (unit electric coefficient). The Schur subtraction is c_xy²/(d_yy²+c_xy²), still below one when the discarded-vertical-only coefficient c_xy²/d_yy² already exceeds one. Independently checked 1,476 signed scalar fixture cases against the completed square. In the [transverse Maxwell control](2026-11-27-transverse-maxwell-holonomy-aliased-control.md), M is bounded but the coarse Poincaré floor still vanishes at small lattice momentum; the improved metric does not invent a mass.

For interacting SU(2), the next analytic task is a physical lower bound for the *score-weighted* marginal gradient form of the actual vacuum, and enough vertical coercivity to leave a fixed fraction for η. Neither is established uniformly in volume and spacing along the matched weak-coupling trajectory. The operator formulas and inequality identify the needed estimate; they do not prove the continuum mass gap or assert literature priority.
