# A two-scale gap criterion for edge-disjoint SU(2) holonomy blocking

**2026-11-27 UTC. Conditional result, not a weak-coupling gap proof.** The [strong-electric refinement calculation](2026-11-27-momentum-sensitive-light-band-limit.md) cannot preserve both a finite gap and nontrivial dispersion. This note moves to a blocking criterion that makes no small-magnetic-coupling assumption. Its missing input is a conditional response bound for the actual interacting vacuum. This is a compact-group application of the [two-scale covariance method](https://www.numdam.org/item/AIHPB_2009__45_2_302_0.pdf), not a claim of priority for that method.

## Exact blocking metric and derivative

At finite volume let H=A+V, A=(1/2)Σ_e(−Δ_e) in the project normalization, with real smooth magnetic potential V. Write Ω>0 for the normalized ground state and dμ=Ω² dHaar. The connected compact configuration space and the elliptic heat kernel give uniqueness and strict positivity; gauge invariance of H then gives gauge invariance of Ω. The ground-state transform is

    ⟨Ω f,(H−E₀)Ω f⟩ = (1/2) ∫ |∇f|² dμ.

In particular the physical gap is the best energy-to-variance constant on gauge-invariant f. This measure μ is the exact vacuum slice law, not a stand-alone spatial Wilson Gibbs measure.

Choose pairwise edge-disjoint oriented paths γ of length b between coarse vertices (e.g. straight block edges on a compatible torus); unused fine links are unrestricted. Let Z_γ=U₁⋯U_b and ν be the joint pushforward of μ. Work with an orthonormal Lie-algebra basis X. For a given path define L_i^X by varying U_i on the left through Ad_{U₁⋯U_(i−1)} X. It induces Z_γ↦exp(tX)Z_γ and leaves every other coarse coordinate unchanged. Each L_i^X is divergence-free for product Haar (its rotation depends only on earlier links), and projects to a Haar-divergence-free coarse field X. Define L^X=b⁻¹Σ_i L_i^X. The fields T_{γ,X}=√b L^X are an orthonormal basis of the horizontal space (orthogonal complement of ker dZ): the product differential is the sum of b independent orthogonally rotated copies, so dZ dZ* = b I. Write ∇_v for the vertical gradient. This gives the exact splitting

    E_h = ∫ Σ_(γ,X)|T_(γ,X) f|² dμ,   E_v=∫ |∇_v f|² dμ,
    E_h+E_v=∫ |∇f|² dμ.

The pushforward of product Haar is product Haar and its conditional Haar can be parametrized by the first b−1 links on each path plus unused links. Put ρ=Ω². With P f=E_μ[f | Z], Haar integration by parts against arbitrary test functions of Z, first with ρ f and then ρ, gives for each component

    √b X_(γ)(Pf)(z) = E_μ[T_(γ,X) f | z] + Cov_μ(f, T_(γ,X) log ρ | z).

This identity includes the derivative of the conditional normalization. It does not replace the score by the derivative of the classical magnetic action. For complex f apply the inequalities below to real and imaginary parts. Gauge changes at endpoints act on Z as the coarse gauge transformations and the conditional law is equivariant, so Pf is coarse gauge invariant when f is fine gauge invariant.

## Quantitative sufficient condition

Use conventions without the factor 1/2 in the two Poincaré constants. Assume almost every fiber has conditional bound Var(f|z)≤λ_f⁻¹ E[|∇_v f|²|z] and the coarse marginal has Var_ν(F)≤λ_c⁻¹∫ b|∇F|²dν on coarse gauge-invariant F. Here λ_f,λ_c may depend on the fine spacing, blocking length and volume. A sufficient score input is

    ||Cov(f,T log ρ | z)|| ≤ κ (E[|∇_v f|² | z])^(1/2)

uniformly in z, with the norm over all path/basis components. One way to bound κ is from the top eigenvalue of the covariance of the scores divided by λ_f, but it may overcount hard modes. The best unrestricted fiber coefficient is the square root of sup_z ||B(z)||, with

    B_(i,j)(z)=⟨s_i, L_z⁻¹ s_j⟩_(μ_z),
    s_i=T_i log ρ−E[T_i log ρ | z].

Here L_z is the nonnegative conditional generator of the intrinsic fiber form E[|∇_v f|²|z], and its inverse is on mean-zero functions. To see this, test the covariance vector against any real unit vector u and apply Cauchy–Schwarz between L_z^(1/2)f and L_z^(-1/2)Σ u_i s_i. Conversely its supremum is attained in the form completion by the inverse-generator test for each u. Uniform essential supremum suffices. If a uniform conditional bound only applies on a restricted invariant fiber subspace, its range and the score projections need to be justified before using this expression.

The variance decomposition, triangle inequality in L²(ν), and conditional Jensen now give

    Var_μ(f) ≤ λ_f⁻¹ E_v + λ_c⁻¹(√E_h + κ√E_v)²
             ≤ ||M|| (E_h+E_v),
    M = [[1/λ_c, κ/λ_c], [κ/λ_c, 1/λ_f+κ²/λ_c]].

Thus the physical Hamiltonian gap is ≥1/(2||M||). If physical energies multiply H by a known positive factor s(a), the certified physical lower bound is s(a)/(2||M(a)||). One precise target is a spacing- and volume-uniform bound ||M(a)||≤C s(a); it suffices to bound λ_f⁻¹ and (1+κ²)λ_c⁻¹ separately by C s(a). For a finite transfer Hamiltonian or Euclidean construction the corresponding vacuum law, scale, and comparison with the physical transfer must be established, not presumed.

## Why the score cannot be omitted

Exact control: standard X and independent standard Z on R, let Y=cX+Z, and block onto X in Euclidean (X,Y) coordinates. Both the conditional and the marginal constants are 1. The centered horizontal score is c(Y−c X), and on each fiber L_z applied to Y−cz returns Y−cz. Hence κ=|c|. The joint covariance in the original coordinates is [[1,c],[c,1+c²]], so the gap of the joint gradient form without the 1/2 is exactly 1/||M|| (flip a coordinate for negative c), achieved by a linear function. It tends to zero as |c| grows even though both component gaps equal one. A numerical replay on 101 values of c checked the determinant/eigenvalue identity and the Rayleigh quotient of the extremizing vector. This example tests the logical implication, not Yang–Mills dynamics.

The initial weak-coupling obligation is therefore not simply to prove that the fine holonomy fibers and coarse marginals each have a gap. It is to bound the centered horizontal score in the fiber inverse-energy norm on the **actual** vacuum slice, with the physical normalization and a blocking scale where λ_c has the required size. A next test is a gauge-invariant Gaussian control with this same edge-path blocking: compute the conditional inverse-energy score matrix by Fourier/alias blocks, distinguishing physical transverse modes and torus zero modes before attempting a Wilson estimate. No weak-coupling score or mass-gap estimate is claimed here.

## Exact Gaussian calibration of the missing input

For a nonsingular Gaussian in orthonormal coordinates (x,y) on any finite real linear space, block onto x. Write C for its covariance, D=C_yx C_xx⁻¹ and S=C_yy−C_yx C_xx⁻¹ C_xy. Then the fiber y|x is Gaussian with mean Dx and covariance S. Its centered horizontal score is D* S⁻¹(y−Dx). The fiber generator applied to a linear test ℓ_a(y)=a·(y−Dx) gives ℓ_(S⁻¹a); consequently the **exact** inverse-energy matrix B is D*D. The optimal κ is ||D||, not ||S⁻¹D|| or a conditional variance alone. This applies on a transverse subspace only after its coordinates and the actual restriction of the blocking map are fixed; zero modes must be removed or treated separately before forming an inverse.

For a scalar coarse direction p of unit length in one Fourier alias group with positive diagonal covariance entries c_j, this reduces to

    κ² = [Σ_j |p_j|² c_j²]/[Σ_j |p_j|² c_j]² − 1.

If just c₀ diverges and |p₀| stays fixed and nonzero while the other c_j stay bounded, κ² tends to |p₀|⁻²−1, but the coarse precision (p*Cp)⁻¹ tends to zero. Thus a bounded score does not cure a vanishing coarse gap. The two failure modes are distinguishable in exact solvable controls. This formula is not an evaluation of the multicomponent Wilson score.
