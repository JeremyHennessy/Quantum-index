# Sharp face-count scaling for overlap with the open-square soft singlet

**November 27, 2026 UTC. Ordered two-dimensional model only:** first g/c → ∞ at fixed open L × L spatial graph. This follows the [tuned soft-singlet probe](2026-11-27-first-soft-singlet-probe.md). The result gives matching upper and lower powers for this probe family; it does not compare the nonlinear Hamiltonian to the oscillator uniformly in L.

Set n = L+1. Write u_j for the orthonormal sine-product modes indexed by j=(j₁,j₂) with 1≤j₁,j₂≤L, and h=(1,1) for the first mode. The open face-grid Laplacian K has eigenvalues λ_j=4[sin²(πj₁/(2n))+sin²(πj₂/(2n))]. Write v_j=√(λ_j/2) and a_j=⟨w,u_j⟩ for any real unit vector w on the faces. For the squared-vector probe F_w=|Σ_p w_p Y_p|² with exact vacuum subtraction, the limiting normalized fraction in the first singlet is P_h=q_h², with q_h=v_h a_h²/D and D=Σ_j v_j a_j². See the preceding note for convergence from the exact finite-volume model.

## Upper bound for any face support of size m

By Cauchy–Schwarz and ‖u_j‖∞≤2/n, every a_j²≤4m/n². Concavity of sine ensures v_j≥√2 |j|/n. For r>0, each positive integer coordinate of an index with v_j≤r is at most nr/√2. The number of such indices is at most n²r²/2, so Σ_{v_j≤r} a_j²≤2mr². Choose r=1/(2√m); at least half of the probability weights a_j² then have v_j>r. Thus D≥1/(4√m).

Since v_h=2sin(π/(2n))≤π/n, we obtain
```
q_h ≤ 16π m^(3/2)/n³,
P_h ≤ min(1, 256π² m³/n⁶).
```
In particular the bound for a fixed patch is O(n⁻⁶), rather than the O(n⁻⁴) estimate from using the minimum variance in the denominator. Both estimates remain applicable; the sharper upper bound for any given m and L is their minimum. This controls the first singlet specifically, not all low-energy weight or arbitrary local observables.

## A block example attains this power with genuine link locality

Take a central b × b square of faces, with both coordinates p_i/n in [1/4,3/4], and set w equal to that square's normalized positive first sine-product mode, extended by zero outside the square. Here m=b². The Rayleigh quotient wᵀKw equals the block Dirichlet eigenvalue by zero extension. Cauchy–Schwarz gives D≤√(wᵀKw/2)=2sin(π/[2(b+1)])≤π/(b+1).

On the square u_h(p)≥1/n, and the sum of w entries is [2/(b+1)]cot²(π/[2(b+1)])≥2(b+1)/π², by sin x≤x and cos x≥1/2 for the relevant angles. Since v_h≥2/n, we obtain
```
q_h ≥ (8/π⁵)(b+1)³/n³,
P_h ≥ (64/π¹⁰)(b+1)⁶/n⁶.
```
Thus order (b/n)⁶ for normalized first-singlet weight is attainable within this family.

For this construction the common root and every path used to transport the b² plaquettes to it can be chosen inside the block's vertex set, with paths along block links. The squared sum is gauge invariant and depends only on block links. Changing the paths or root does not change the harmonic linear variation of each plaquette, after a common conjugation to the global reference frame: the derivative of the conjugating transport cancels at the identity plaquette. The exact bound F_w≤2Σ_p(1−W_p) also survives, so the previous fixed-L convergence proof applies to this strictly block-supported probe. This locality statement is about the chosen lattice observable, not locality of a projected eigenstate.

These upper and lower bounds distinguish loss of spectral overlap from absence of a state. They do not give a joint coupling-versus-volume estimate, a claim of literature priority, or an inference about the [Jaffe–Witten four-dimensional continuum mass gap](https://www.claymath.org/wp-content/uploads/2022/06/yangmills.pdf).

Numerical cross-check: 45 central blocks fitting the stated coordinate window on L = 1, 2, 3, 5, 8, 12, 18, 30 reproduced unit sine weight and the block Rayleigh quotient (absolute error < 10⁻¹⁰) and satisfied both overlap inequalities. This checks the constants and normalization, not the joint nonlinear limit.
