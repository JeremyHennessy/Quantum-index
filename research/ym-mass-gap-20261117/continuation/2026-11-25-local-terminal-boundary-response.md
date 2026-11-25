# A sign reversal for a locally tilted time boundary

**2026-11-25 | Fixed spatial lattice spacing | Research-only; Phase 15 not activated.**

This is a control on boundary dependence in the same weak-spatial-interaction SU(2) Hamiltonian used in the [dressed bulk correlation](2026-11-25-dressed-bulk-spectral-edge.md). It does **not** replace the original free terminal vector or the Haar observation by a mathematically equivalent object.

Let Ψ be the normalized finite-box vacuum of K, E its energy, μ=Ψ²dHaar, and P_T f=Ψ⁻¹e^(-T(K−E))(Ψ f). This is the standard [ground-state transform](https://arxiv.org/abs/1705.00551), here for the finite-box diffusion. F and B are τ_p and τ_q respectively, each centered in μ, with p,q sharing an edge. Let R_c be the centered adjoint component R of τ_pτ_q. Tilt the terminal vector to Ψ(1+εB) for |ε|<1/2. Its positive weight ensures the denominator stays positive. The resulting change of the *normalized* scalar signal, relative to ε=0 and tested with R_c in μ, has derivative
\[
 D_\gamma(T)=\mu\left[R_c\{P_T(BF)-(P_TB)(P_TF)\}\right].
\]
This identity follows by distinguishing the derivative of the numerator from that of the denominator. Centering F and using R_c are part of this experiment. At γ=0, P_TF and P_TB each have free decay rate 6 while the R component of BF has rate 13. Therefore
\[
 D_0(T)=(3/64)(e^{-13T}-e^{-12T})<0\qquad(T>0).
\]

## Fixed-T bulk limit of the derivative

The denominator term is a genuine three-insertion Euclidean correlation, not a nonlinear limit that must be assumed:
\[
 \mu[R_c(P_TB)(P_TF)]
 =\langle e^{-T(K-E)}B\Psi,\ R_c e^{-T(K-E)}F\Psi\rangle.
\]
There is no division by Ψ on the right. Both semigroups on the centered inputs may be represented by a Schwartz spectral function which equals e^(-Tω) on the positive physical spectrum and vanishes near zero; the vacuum parts of B and F are already zero. Integrating real-time Heisenberg evolution against its Schwartz Fourier kernel gives quasi-local approximants in operator norm for each fixed T>0 by the same locality bounds as in the dressed bulk proof. Products of finitely many such approximants converge in vacuum expectation by the ground-state comparison in that proof. First let the box grow, then remove the approximation. This yields the fixed-T open-box bulk limit of both terms of Dγ, without assuming a bulk limit of the full ratio at fixed ε. Estimates for T in a compact subinterval of (0,∞) can be taken uniform, since the chosen smooth spectral functions have uniformly bounded Schwartz seminorms there. This also gives continuity in T and in real γ near zero: compare the approximants on a fixed finite retained region and use the uniform truncation errors. In particular Dγ(1)<0 for all sufficiently small γ>0.

Let g>5.9 be a common lower bound on nonzero physical excitations in the weak-interaction range, by the uniform band result. The denominator term is O(e^(-2gT)) by the displayed Hilbert-space identity and boundedness of R_c, B and F. This faster cutoff is for the product term only, not for the first term.

## Exact band entry of the centered product

Use the band coordinates Yd_x=P_b τ_xΨ and Gram matrix G=Y*Y of the dressed proof. In the orthonormal band coordinates U=YG^(-1/2), the source BFΨ has zero projection at γ=0. At order γ the only possible entries are columns p and q. The four plaquette parities must cancel, and four distinct squares cannot have vanishing symmetric-difference boundary. There are three contributions in each column, written first with τ_p rather than the normalized free band vector 2τ_p:

* The derivative of Ψ is V/6, giving 1/(6·16)=1/96 because ||τ_pτ_q||²=1/16.
* The derivative of the band projection pairs the bent-loop and spin-1 components with energy differences 9−6=3 and 13−6=7. It contributes (1/64)/3+(3/64)/7=1/84.
* The derivative of μ(τ_q) or μ(τ_p) is 1/12. Subtracting the means therefore costs (1/12)(1/4)=1/48 in the relevant column. The other mean term is orthogonal there, and subtracting the final mean of BF would only remove a vacuum.

The total with τ_p is 1/672; in coordinates with 2τ_p it is 1/336. Do not carry over the +1/7 witness coefficient without the mean subtraction. In these orthonormal coordinates the R_c entries at p,q are 13γ/448+O(γ^3/2) from the dressed calculation and the factor 2 from G^(-1/2). The source entries at p,q are γ/336+O(γ^3/2); the other entries have zero linear term. All these errors are in the weighted summable norm used for the bulk symbols: the same two-support cutoff and Taylor argument applies with the fixed local product of p,q on one side. The scalar means also have their local expansions by truncation, and the band projection annihilates the vacuum exactly.

At k=0 the limiting lowest-mode projector has all entries 1/3. Projecting the two source and two witness entries gives late amplitude (4/3)(13γ/448)(γ/336)=13γ²/112896, with remainder O(γ^5/2). Use the same exact bulk band and minimum as in the dressed proof. The first term in Dγ, and thus Dγ itself, satisfies
\[
 D_\gamma(T)\sim
 \left(13\gamma^2/112896+O(\gamma^{5/2})\right)e^{-m_\gamma T}(4\pi \mathfrak D_\gamma T)^{-3/2},
\]
where \(\mathfrak D_\gamma\) here denotes only the spatial diffusion coefficient \(D_\gamma\) of the dressed proof, distinguished from the boundary derivative on the left. Non-band terms in the first term are O(e^(-25T/4)); together with the product estimate these cannot defeat the late sign at fixed γ. The two end signs and continuity give at least one positive zero of the bulk boundary derivative. In each fixed box the same conclusion follows with the Perron mode instead of the bulk Fourier edge: the leading late residue is (13γ/448)(γ/336)(a_p+a_q)²+O(γ^3)>0 for that box. At the two selected finite times of strict opposite sign, sufficiently small positive ε preserves the opposite signs for the finite-box *change* of the signal. No sign assertion for the unsubtracted signal is implied.

## Interpretation and falsification

Exact fraction checks confirm that removing the mean subtraction gives the wrong coefficient and that omitting the denominator derivative would give the wrong free sign (only the positive e^(-13T) term). This is a control inside the Wilson Hamiltonian, not an abstract positivity counterexample: a distinct, explicitly tilted terminal condition gives a different signed response. The fixed-ε bulk ratio remains unproved. In particular \(\Psi\) times a bounded local tilt is not the original constant terminal vector; nothing here justifies replacing the Haar/free-boundary witness with the dressed one or concludes anything about the continuum mass gap. Literature priority of this particular calculation remains unverified.
