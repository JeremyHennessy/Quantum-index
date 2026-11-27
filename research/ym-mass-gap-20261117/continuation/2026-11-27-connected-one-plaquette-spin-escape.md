# Fixed spin cannot capture the connected weak-electric one-plaquette probe

**November 27, 2026 UTC. Exact open-square SU(2) Hamiltonian control. No spatial refinement, bulk channel theorem, or Clay claim.**

This tests the possible inference "exact vacuum subtraction restores a uniform lowest-spin channel" in the simplest genuine gauge-invariant Wilson Hamiltonian. It fails there, even for the normalized connected fundamental-plaquette probe. The basic single-plaquette Mathieu reduction and its harmonic regime are not new; see [Kogut–Susskind](https://doi.org/10.1103/PhysRevD.11.395) and the radial single-plaquette calculation of [D’Andrea et al.](https://doi.org/10.1103/PhysRevD.109.074501). The quantitative projection test below is the application here; no priority claim is made.

## Exact model

Take one open square, four links and the usual vertex gauge action. Gauge-fix a spanning tree: invariant functions are precisely class functions of the remaining holonomy. Product Haar pushes to Haar. Every oriented link contributes one copy of the bi-invariant Laplacian to a function of that holonomy, since holding the other links fixed relates its variable to the holonomy by translations and possibly inversion. Use the Laplacian normalization in which the character labelled by n=2j+1 has eigenvalue -(n²-1). Write the resulting Hamiltonian as H=-αΔ-gW, with α=4c>0 and W=Tr(U)/2, g>0. This model excludes external charges and added plaquettes.

In the class angle 0<θ<π, W=cos θ and normalized class Haar is (2/π)sin²θ dθ. Multiplication by sqrt(2/π) sin θ sends the character basis to e_n(θ)=sqrt(2/π) sin(nθ), and sends H+g+α to the Dirichlet operator

    A = -α d²/dθ² + g(1-cos θ).

These statements can equivalently be proved on the complete sine basis; there is no radial boundary approximation.

## Uniform finite-cutoff estimate

Put ε=(α/g)^(1/4). For an integer m≥1 with ℓ=(2α(mπ)²/g)^(1/4)≤π, take the first m Dirichlet modes on (0,ℓ) extended by zero. The maximum trial energy is at most α(mπ/ℓ)²+gℓ²/2=√(2αg)mπ. Thus every normalized vector u in the first m spectral states has ∫(1-cos θ)|u|²≤√2 mπ ε². The same argument works for any vector with this energy bound, not just an eigenvector. Weighted Cauchy–Schwarz and the Fejér identity give

    |<e_n,u>|² ≤ 2n ∫(1-cos θ)|u|²,
    ||P_N u||² ≤ √2 mπ N(N+1) ε²,

where P_N retains 1≤n≤N. Indeed the integral of (1-cos kθ)/(1-cos θ) over (0,π) is πk, by integration of the even Fejér kernel, and k=2n here. In particular every N=o(ε⁻¹) loses the entire normalized low-energy signal, even if u is exactly orthogonal to the actual vacuum. The estimate is not a uniform bound in m.

## The actual connected W source, not a chosen excited eigenvector

Scale x=θ/ε. Then A/√(αg) is B_ε=-d²/dx²+V_ε on (0,π/ε), with V_ε=(1-cos εx)/ε². The inequalities 2x²/π²≤V_ε≤x²/2 hold throughout the interval. On compact subsets V_ε→x²/2. The low eigenvalues and eigenvectors converge to the corresponding Dirichlet half-line oscillator ones: compactly supported approximations to oscillator eigenstates give the min–max upper bounds; the displayed coercivity gives H¹ bounds, tight L² mass, and compactness of the eigenfunctions extended by zero. Testing the limit equation on compact supports and using retained orthogonality gives the lower bounds and identifies the simple eigenstates in increasing order. In these units the first two limits are the full-line odd levels indexed by 1 and 3 with frequency ω=1/√2; their difference is 4ω=2√2.

Moreover the low normalized eigenvectors v_ε have uniformly bounded sixth moments. Multiply the exact Dirichlet equation by x^(2k) v_ε for k=0,1,2 and integrate by parts. The identity is

    ∫ x^(2k)(|v_ε'|²+V_ε|v_ε|²)
      = λ_ε ∫ x^(2k)|v_ε|² + k(2k-1)∫ x^(2k-2)|v_ε|²,

with the last term absent at k=0. The quadratic lower bound on V_ε gives the moments recursively, and Dirichlet boundary values remove the boundary terms. This justifies strong L² convergence of V_ε v_ε for the ground state: truncate in x, use local uniform potential convergence, then bound the squared tail by a constant times R⁻² times the sixth moment.

Write Ω for the normalized vacuum, W̄=<Ω,WΩ>, and F=(W-W̄)Ω/||(W-W̄)Ω||. In scaled Dirichlet coordinates, ε⁻²(W-W̄)Ω tends to -(x²-<x²>)φ₁/2, with φ₁ the normalized half-line restriction of the first odd oscillator state. The oscillator ladder relation gives (x²-<x²>)φ₁=√3 φ₃. Therefore, as g/α→∞,

    Var_Ω(W) / ε⁴ → 3/4,
    F in scaled coordinates → -φ₃ in L²,
    ||P_N F||² → 0 whenever Nε→0.

For the last conclusion, approximate F in norm by the normalized first excited state of A (with the appropriate sign), and apply the finite-cutoff estimate with m=2. Vacuum subtraction is exact for each coupling, not a limiting subtraction.

There is also a cutoff-scale distribution: if Nε→K∈[0,∞), then

    ||P_N F||² → ∫₀ᴷ |Sφ₃(s)|² ds,

where S is the unitary half-line sine transform, (Sf)(s)=sqrt(2/π)∫sin(sx) f(x) dx. To verify, first use a compactly supported smooth test f in scaled coordinates. Its coefficients are exactly √ε Sf(nε), and the sum is a Riemann sum. Then approximate φ₃ in L² by those tests and use contractivity of the discrete projection and of the band-limited sine transform. In particular a coupling-independent cutoff cannot have a positive uniform retention fraction. A cutoff with Nε→∞ captures all mass by comparing to arbitrary fixed K and using sine Plancherel.

## Vacuum-clean high-spin return

Let L=H-E₀ and Q=I-|Ω><Ω|. For each fixed scaled time s≥0 put u_s=exp(-s L/√(αg))F. At each coupling Q u_s=u_s. Contraction and the convergent energy of the first excited state imply that u_s tends in scaled coordinates to -exp(-2√2 s)φ₃. Consequently for Nε→0,

    <u_s, Q(I-P_N)Q u_s> → exp(-4√2 s),
    <u_s, Q P_N Q u_s> → 0.

These positive quantities sum to the connected two-sided return. This is survival in the high-character sector after exact vacuum projection, not merely a Clebsch–Gordan entry. Q(I-P_N)Q is a positive compression, not in general an orthogonal projection. The statement uses fixed scaled time; it gives no large-physical-time estimate on a renormalized four-dimensional trace field.

## Independent check and boundary of inference

Diagonalized the real character Jacobi matrix for A/α with diagonal n²+g/α, off diagonal -g/(2α). For g/α=10²,10⁴,10⁶,10⁸ and truncation max(256,floor(12(g/α)^(1/4))), (E₁−E₀)/√(αg) was 2.698449, 2.815881, 2.827177, 2.828302; (g/α)Var_Ω(W) was 0.716763, 0.746685, 0.749669, 0.749967; squared overlap of the connected source with the first excited state was 0.998126, 0.999984, 0.999999843, 0.999999998. The two lowest characters retained 0.287226, 0.025529, 0.000890, 0.000028 of its normalized square. These are non-rigorous cross-checks, not the derivation.

This rules out a coupling-independent electric character cutoff as a general regeneration principle for Wilson Hamiltonians simply from exact vacuum removal and gauge invariance. It does not establish failure or success of a *growing* cutoff in the multi-plaquette bulk, does not bound the dressed score tensor of a bulk blocked vacuum, and does not claim the Clay continuum mass gap. The next informative comparison is a genuinely coupled pair of plaquettes sharing one link, where the cross electric derivative survives and a gauge-invariant shape or discrete symmetry may separate low connected components from mere high-spin escape.
