# Wilson shell Poisson trials: an exact one-link expansion

**2026-11-26 UTC. Finite-regulator calculation; no continuum decay bound.**

Use the same matched trace difference D and squared conditional responses Q_A and Q_B as in the [local Wilson shell test](2026-11-26-local-wilson-shell-pair-test.md). Let L_I be the reversible Langevin generator on the links in I, with the exterior fixed and conditional Wilson density proportional to exp(S). In the convention L=Δ+∇S·∇, fiberwise integration by parts gives E[L_I g|outside I]=0. With \(h_A=E[D\mid\text{outside }A]\), the exact identity is
\[
 E[(D-L_Ag)^2]=Q_A+E[(D-h_A-L_Ag)^2].
\]
For nested boxes with the inner shell inside B, Cauchy–Schwarz applied to \(h_A-h_B\) gives \(Q_A-Q_B\ge |E[h_A L_Bg]|^2/E[(L_Bg)^2]\) when the denominator is positive. At fixed regulator these can be optimized exactly by solving the centered Poisson equation on the compact connected fibers (or by smooth approximation for L² data). The density is smooth and strictly positive; constants are its only generator null modes. For smooth approximants one may invert on the centered fiber with smooth dependence on the exterior by ellipticity at this fixed regulator. Gauge averaging commutes with L_I and cannot worsen the tests. No uniform inverse is inferred. See [Shen–Zhu–Zhu](https://arxiv.org/abs/2204.12737) for the Wilson generator and their strong-coupling results. Langevin time is not physical transfer time.

## Explicit conditional SU(2) trial

When the staple sum is nonzero, let x be half the real trace of the link times the normalized staple direction, with the orientation that places the product at a single basepoint. It is gauge invariant, and its exact conditional law is proportional to \(e^{t x}\sqrt{1-x^2}\,dx\), where t is the nonnegative strength of the combined staple field. In the round unit-S³ convention,
\[
 \mathcal L_t=(1-x^2)\partial_x^2+[t(1-x^2)-3x]\partial_x .
\]
Set z=t(1−x), with law \(\pi_t\). Then \(\mathcal L_t=t\mathcal A+\mathcal B\), with
\[
 \mathcal A=2z\partial_z^2+(3-2z)\partial_z,\qquad
 \mathcal B=-z^2\partial_z^2+(z^2-3z)\partial_z.
\]
The \(\pi_t\) density is proportional to \(e^{-z}\sqrt z\sqrt{2-z/t}\) on [0,2t]. Its fixed-order moments are bounded uniformly for t≥1 (upper bound the numerator by a Gamma integral times \(\sqrt2\), lower bound the normalization by \(\int_0^1 e^{-z}\sqrt z\,dz\)) and converge to \(\Gamma(3/2,1)\) moments. Write \(\bar P\) for Gamma centering. On degree ≤n polynomials modulo constants, \(\mathcal A\) is triangular with diagonal \(-2,-4,\ldots,-2n\) and maps onto Gamma-centered polynomials.

For \(d_t=x-E_{\pi_t}x\), take \(p_0=(z-3/2)/2\), and define \(p_j\) by \(\mathcal A p_j=-\overline{\mathcal Bp_{j-1}}\). Then, for any fixed nonnegative integer M,
\[
 g_{t,M}=t^{-2}\sum_{j=0}^{M}t^{-j}p_j,\qquad
 d_t-\mathcal L_tg_{t,M}
 =-t^{-M-2}(\mathcal Bp_M-E_{\pi_t}\mathcal Bp_M).
\]
Successive coefficients cancel modulo constants; the exact constant is fixed by the zero finite-t mean. This gives conditional L² error \(O(t^{-M-2})\) as t grows. For M=1 take \(p_1=(z^2-z)/8\), so \(\mathcal Bp_1=(2z^3-9z^2+3z)/8\). The exact limiting squared error after multiplying by \(t^6\) is \(12483/512\), from the Gamma moments \((3/2)_k\). Deterministic midpoint quadrature with 100,000 subintervals on [0,min(2t,72)] at t=8,32,128,512 gave 16.0481, 22.7963, 24.0027, 24.2873, consistent with the exact limit 24.380859375.

## Limits of this test

* For uncentered x the residual still contains its exact conditional mean. Even a perfect fiber trial does not, by itself, control variation of that mean across actual outer boundaries.
* The staple sum need not be uniformly large, and the normalized direction is singular at zero. One can smoothly switch off the large-t trial near zero, but this leaves a response-weighted small-staple estimate under the true Wilson law.
* At fixed order, inverse powers of t in a regime \(t\asymp\beta\) cannot absorb a positive inverse power of lattice spacing when β grows logarithmically. Increasing M requires new uniform control on the constants; summing local errors also requires correlations or another justified estimate, not independence.

The next distinct test is a block trial for the actual matched trace that controls the remaining shell response at fixed physical size. This note neither constructs such a trial nor proves a trace-sector or full mass gap.
