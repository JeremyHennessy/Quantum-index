# A gauge-invariant probe isolates the first soft singlet

**November 27, 2026 UTC. Fixed open two-dimensional spatial lattice first; coupling ratio to infinity before lattice growth.** This extends the [positive summed-trace control](2026-11-27-open-square-positive-soft-spectral-edge.md). It concerns an exact probe of the nonlinear finite-volume Hamiltonian, but the spectral statements below are limits at fixed lattice size.

## Exact probe and controlled limit

Use the same based, counterclockwise plaquette holonomies (U_p), with all transports ending at the same root, and write (U_p=W_p I+iY_p·σ). Here (W_p^2+|Y_p|^2=1). For any real unit face vector (w), put
```
F_w = |Σ_p w_p Y_p|²,
S_w = (F_w - <Ω,F_w Ω>) Ω.
```
All (Y_p) rotate together under a gauge change at the root, so (F_w) is gauge invariant. By Cauchy–Schwarz, (0≤F_w≤Σ_p|Y_p|²≤2Σ_p(1-W_p)). Let ε=(c/g)^(1/4), let (v=ε^{-2}Σ_p(1-W_p)), and use scaled time (s=t√(cg)). At fixed L the previous third-moment estimate bounds the ground-state integral of (v^3) uniformly in ε. The squared insertion outside (v≤R) is bounded in integral by (4⟨ v^3⟩/R); there is analogous control for the first moment. With ground-state convergence on compact scaled coordinate balls, this proves strong rescaled (L^2) convergence of ε^{-2}S_w to the centered ( |Σ_p w_p x_p|²) multiplying the harmonic vacuum. The limiting norm is nonzero. Orthogonal residual-gauge averaging preserves the local convergence and the variational approximants, so low spectral projector convergence applies within the invariant sector.

## Gap and general spectral weight in the ordered control

Index the face modes by (j=(j_1,j_2)); write λ_j for the open-face Dirichlet eigenvalues, ω_j=√(2λ_j), and (a_j=⟨ w,u_j⟩) for normalized sine-mode overlaps. One color in harmonic mode (j) has variance (v_j=√(λ_j/2)). The first mode (h=(1,1)) is simple on the face grid. Every one-quantum state transforms as a color vector, so it is excluded by gauge invariance. A unique two-quantum singlet in mode h attains the lowest invariant excitation (2ω_h); all other excited singlets have strictly higher energy at fixed L. Thus the physical finite-volume gap divided by √(cg) converges to (2ω_h) as (g/c→∞) at fixed L, by the same compactness and min–max argument in the invariant sector. This is not a joint estimate.

For each color the covariance of (Σ_j a_j x_j) is (Σ_j a_j²v_j e^{-ω_j s}). Gaussian pairing across the three independent colors gives the normalized quadratic autocorrelation
```
C_w(s) = [Σ_j q_j exp(-ω_j s)]²,     q_j = a_j² v_j / Σ_k a_k² v_k.
```
For instance the connected covariance before dividing by its value at zero is six times the square of the one-color covariance. The spectral weights at ordered mode pairs are (q_j q_k) at ω_j+ω_k, summed at coincident energies. In particular the first singlet carries weight (q_h²). With (w=u_h), all weight lies at (2ω_h). For any fixed L and an arbitrarily small open interval about that energy excluding the vacuum, the corresponding normalized exact source spectral mass tends to one. The mode frequency gives (2ω_h∼ 4π/(L+1)), so this probe does not miss the soft edge due to weak overlap.

## What it costs to isolate the soft mode

For a weight vector supported on at most m faces, (v_j≥v_h) implies (q_h≤|a_h|²). Also μ=‖u_h‖_∞≤2/(L+1), so ( |a_h|²≤mμ² ) by Cauchy–Schwarz. Hence the exact *limiting* first-singlet weight is bounded by
```
q_h² ≤ min(1, 16 m²/(L+1)^4).
```
This applies to the squared-vector probe family only, not to every local gauge-invariant observable. Even a sparse weight vector may use long rooted transports; the bound is in face count, not link support. A fixed fraction of the lowest-mode weight requires order L² faces in this family. This explains why the tuned probe can be a calibration while not solving the problem of a volume-uniform estimate for local probes. In particular its large distance parallel transports are not to be assumed harmless outside the ordered limit.

The result uses the full existing finite-volume harmonic convergence, not merely a linearized replacement of the probe. Thresholds on (g/c) for high spectral mass can depend on L. No quantitative simultaneous limit, no inference about the interacting four-dimensional Wilson problem, and no literature priority claim. A useful next test is to bound the loss of the first-mode mass at finite (g/c) with explicit size dependence, before comparing any such bound to a running-coupling trajectory.

Numerical sanity checks: on L = 1, 2, 3, 5, 10, 25, five weight choices per lattice and three scaled times gave 90 agreements between the ordered-pair spectral sum and the squared covariance (absolute error below 10⁻¹¹); each weight choice also satisfied the face-count bound. These checks do not replace the fixed-L convergence argument.
