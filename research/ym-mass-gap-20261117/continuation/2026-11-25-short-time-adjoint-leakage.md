# A volume-uniform short-time window at every positive anisotropic spatial interaction

**2026-11-25 | Research-only continuation | Phase 15 not activated.**

The [fixed-time estimate](2026-11-25-volume-uniform-adjoint-leakage.md) was uniform in the spatial box but required small scaled spatial interaction at a prescribed time. This note proves a complementary short-time bound: every fixed positive scaled spatial interaction, however large, has a short-time window uniform in spatial volume.

Use the same finite spatial boxes containing the adjacent plaquettes p and q, the shared edge e, the six-edge cycle C, temporal coupling b, spatial coupling s=γ/b, and d≥1 time steps per half-slab. Put θ=d/b. There are constants b₀, θ₀, ε, c>0, independent of the spatial box, such that for b≥b₀, 0<θ≤θ₀, and γ>0 with γθ≤ε, the true middle-marginal squared distance of the endpoint conditional mean A from the space with no spin 1 on e is at least cγ²θ⁴. The retained space can otherwise use arbitrary spins. The restriction γθ≤ε couples strength to time; it does not settle arbitrary strength at a given positive time.

## A short-time estimate on the centered normalized observable

Fix the middle spatial links X. At s=0 the temporal-gauge path law factors independently over spatial edges. Write X_i for the field after i steps and W_r=τ_r for the normalized plaquette trace. For one edge, with relative increment after i steps G_i∈SU(2), its fundamental representation has mean u^i I, where u=I₂(b)/I₁(b). In unit quaternion coordinates,
\[
\mathbb E|G_i-1|^2=2(1-u^i)\le 2i(1-u)=O(i/b).
\]
The bound holds uniformly through inversion and initial multiplication. Telescoping the product of four unit quaternions and using Minkowski gives
\[
\|W_r(X_i)-W_r(X)\|_2=O(\sqrt{i/b})
\]
uniformly over starting fields and plaquettes. Center the tilt by setting
\[
B_r=b^{-1}\sum_{i=1}^d[W_r(X_i)-W_r(X)],\qquad F_*=W_p(X_d)-W_p(X).
\]
The alteration of the tilt is deterministic given X, so it cancels from the normalized observable. We have |B_r|≤2θ, ∥B_r∥₂=O(θ^{3/2}), ∥F_*∥₂=O(√θ), and |E F_*|=|(u^{4d}−1)W_p(X)|=O(θ). The last estimate is a mean, not an absolute-moment estimate.

Set U_r=e^{γB_r}−1. Choose a universal small a>0 so that on the complex disc |γ|≤a/θ, |U_r|≤δ, for the same small δ used in the [partition-ratio induction](2026-11-25-volume-uniform-adjoint-leakage.md). Also
\[
\|U_r\|_2\le e^{2a}|\gamma|\|B_r\|_2=O(\sqrt{\theta}).
\]
Use the same vertex graph on plaquette path factors, augmented by a source vertex *. Its degree is at most Δ=13. Expand the numerator for the normalized centered mean by the unique overlap component P containing the source. With Λ the spatial plaquettes and Z the partition function with the centered factors, the exact expansion is
\[
 A-W_p(X)=\sum_{P\ni *}
 \mathbb E\!\left[F_*\prod_{r\in P\setminus\{*\}}U_r\right]
 \frac{Z(\Lambda\setminus N[P])}{Z(\Lambda)} .
\]
For size one the moment is O(θ). For size n≥2, apply Cauchy–Schwarz to F_* and any one of the U_r and sup bounds to the other n−2 factors; the moment is O(θδ^{n−2}). This is the improvement over bounding F_* alone. The partition ratio has modulus at most 2^{(Δ+1)n−1}; the number of connected n-sets containing * is at most Δ^{2(n−1)}. The same geometric series as before, with a fixed prefactor δ⁻², therefore gives a volume-uniform O(θ) bound for A−W_p(X) on |γ|≤a/θ. For |γ|θ≤a/2, Cauchy's coefficient estimate yields a uniform O(γ²θ³) remainder after the linear term, in sup norm over X and hence in any local Haar L².

## The finite-step coefficient and the Gibbs norm

Write v=I₃(b)/I₁(b), and R=τ_pτ_q−τ_C/4. For fixed exterior middle links, let Q_S be the local Haar projection on the seven relevant links, selecting spin 1 on e and spin 1/2 on C. The [exact first variation](2026-11-25-anisotropic-adjoint-response.md) and local parity selection give
\[
 Q_S A\big|_{\gamma=0}=0,\qquad
 Q_S\partial_\gamma A\big|_{\gamma=0}
 =\frac{u^{4d}}b R\sum_{r=1}^d[(u^2v)^r-u^{4r}].
\]
It is legitimate to use the local projection here: obtaining spin 1 on e requires both p and the inserted spatial plaquette to touch e, and then the six specified odd edges force that plaquette to be q. The normalized constant part W_p(X) is also killed by Q_S.

By the [fixed-order modified Bessel expansions](https://dlmf.nist.gov/10.40.E1), u⁴−u²v=b⁻¹(1+O(b⁻¹)), and u²v and u⁴ are 1−O(b⁻¹). Factor the difference of powers; each of the r terms in the factor sum has form 1+O(θ), uniformly for r≤d when θ is sufficiently small. Also u^{4d}=1+O(θ). Consequently the linear coefficient is
\[
 -\frac{d(d+1)}{2b^2}\big(1+O(\theta+b^{-1})\big)R
 =-\frac{\theta^2}{2}(1+1/d)\big(1+O(\theta+b^{-1})\big)R.
\]
The sign is therefore negative in the chosen sector; ∥R∥₂=√3/8. Its leading contribution to the norm is at least a universal positive multiple of γθ². The O(γ²θ³) remainder is smaller after reducing ε. Finally the real conditional Gibbs density on those seven links, given all others, is bounded below by exp(−2Jγ(2d+1)/b), J≤28, by the same path coupling as before, using the *original* potential for the Gibbs weight. Since d≥1 and γθ≤ε, this lower bound is uniform. Any retained function in the asserted space is killed by Q_S at fixed exterior links. Integrating the local norm comparison proves the stated cγ²θ⁴ lower bound.

As an independent diagnostic, 55-digit evaluation of the exact geometric sums at six b values from 5,000 to 200,000 and eight depths per b verified the negative sign in all 48 evaluations. With θ≤0.02, the largest relative error against −d(d+1)/(2b²), divided by (θ+1/b), was below 10.237. This is a numerical check, not the proof. The connected-component argument uses standard dependency and polymer ideas, related to [Kotecký–Preiss](https://doi.org/10.1007/BF01211762); literature priority of the specific short-time spin estimate remains unverified.

Nothing here treats isotropic b=s at large b, uniformly long times, the spatial continuum, or a positive Hamiltonian mass gap. The next useful test is whether higher-spin feedback at non-small γθ can cancel exactly, or whether a monotone or signed representation controls it. Merely extending an analytic small-disc bound does not rule out cancellations at later times.
