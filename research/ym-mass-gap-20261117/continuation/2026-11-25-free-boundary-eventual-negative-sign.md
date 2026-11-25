# Eventual negative sign and the diffusive tail of the original free-boundary bulk signal

**2026-11-25 | Fixed spatial SU(2) Wilson lattice, continuous time | Research only**

This completes the fixed-spacing late-time calculation for the original Haar/free-terminal witness \(h_{\infty,\gamma}(T)\), with the actual local spin-1 probe R and fundamental plaquette source \(F=\tau_p\). For each **fixed**, sufficiently small positive real γ,
\[
 h_{\infty,\gamma}(T)\sim
 A_\gamma e^{-m_\gamma T}(4\pi D_\gamma T)^{-3/2},
 \quad
 \begin{split}
 A_\gamma&=-\gamma/1344+O(\gamma^{3/2})<0,\\
 m_\gamma&=6-71\gamma^2/840+O(\gamma^{5/2}),\\
 D_\gamma&=\gamma^2/126+O(\gamma^{5/2})>0 .
 \end{split}
\]
In particular the signal is negative at all sufficiently late times for that coupling. This says nothing about possible zeros between the earlier noncancellation window and this asymptotic regime. There is no spatial continuum or literature-priority claim.

## 1. Exponentially growing comparison boxes are still admissible

The [band-only reduction](2026-11-25-free-boundary-band-only-reduction.md) used boxes of radius O(T). Its proof also allows boxes of radius \(L=L(T)=\lfloor e^{\eta T}\rfloor\) for a sufficiently small fixed \(\eta>0\); the needed check is at the positive-wall smoothing step. If \(N=O(L^3)\), that smoothing length \(s=K\log(2+N)\), with K as in the proof, now obeys \(2s\le(6K\eta+o(1))T\). For any chosen \(0<\delta<1/4\), first choose \(\eta\) so small that \((25/4)(1-6K\eta)>6+\delta\) and \(2(5.94)(1-6K\eta)>6+\delta\). The same high-energy and scalar-normalization errors then remain \(O(e^{-(6+\delta)T})\). The nonlinear scalar reduction from [the local denominator theorem](2026-11-25-scalar-boundary-normalization.md) uses any \(c<6\) with \(2c>6+\delta\). The spatial comparison of the original quotient now has superexponentially small error since the probes are interior at distance of order L. Thus no uncontrolled error is introduced by the larger box. This argument does not require a volume-independent estimate for the bare boundary vectors.

Let \(G_L\) and \(W_L\) be the real exact Gram and centered energy moment:
\[
 (G_L)_{xy}=\langle Y_x,Y_y\rangle,\quad
 (W_L)_{xy}=\langle Y_x,(\lambda_0-H-6)Y_y\rangle,\quad
 Y_x=P_b\tau_x\Psi.
\]
The sign of W here is the positive energy convention. With the raw profiles \(l_L,r_L\) of the [summable-boundary proof](2026-11-25-summable-true-boundary-profiles.md), the comparison-box term is exactly
\[
 e^{-6T}\langle G_L^{-1/2}l_L,\ e^{-T B_L}G_L^{-1/2}r_L\rangle,\qquad
 B_L=G_L^{-1/2}W_LG_L^{-1/2}.
\]
The exact band isometry gives \(\|B_L\|\le0.06\), no internal band gap required. Extend \(G_L\) by I/4 on the outside and \(W_L,l_L,r_L\) by zero. Use the analogous infinite kernels from the [dressed Gram calculation](2026-11-25-dressed-bulk-spectral-edge.md); its **operator** is shared with the original observable, but its dressed boundary weights are not.

## 2. Quantitative bulk comparison at the actual evolution time

For any fixed integer M, the matrices \(G_L,W_L\), and their bulk versions, have uniformly summable spatial row and column tails \(O_M(d^{-M})\) beyond distance d. Also their entries whose two indices are in the central half cube agree with the bulk entries up to \(O_M(L^{-M})\). These statements follow from the same two-support truncation in the dressed Gram proof: for the first take disjoint retained neighborhoods at radius a fixed fraction of the separation and use exact decoupling of the filtered excitation; for the second compare to a common truncation at distance proportional to L from both indices. The filters in these two statements are fixed smooth functions of the excitation energy. Absorbing the polynomial count of entries proves the operator estimate on compressed interior submatrices. The already verified boundary-profile estimates give \(\|l_L-l_\infty\|_2+\|r_L-r_\infty\|_2=O_M(L^{-M})\), including the tails.

For clarity, any use of matrix functions can be reduced to short-range matrices and finite polynomials. With \(\|I-4G_L\|\) and \(\|I-4G_\infty\|\) bounded by a common \(q<1\), expand \(G^{-1/2}\) by its binomial series. Drop entries of \(I-4G\) past range \(L^{1/3}\), making norm error \(O_M(L^{-M})\) by row and column sums. The truncated matrix still has norm at most \(q'<1\). The first \(\lfloor L^{1/3}\rfloor\) powers from inputs supported within the central quarter cube probe only the central half. Compare the powers there by telescoping products using the compressed matrix difference \(O_M(L^{-M})\). The higher powers have norm bounded by a geometric tail in \(L^{1/3}\). This proves a bulk comparison \(O_M(L^{-M})\) on inputs in the central quarter for the inverse square roots. The same argument, using d in place of L and no comparison, proves inverse-power row and column tails for \(G^{-1/2}\): for individual entries the truncated powers vanish beyond distance d, and one requests sufficiently many inverse powers to sum over cubic shells. Composing with W gives the same tails for \(B_L,B_\infty\), and localized bulk comparison \(\|(B_L-B_\infty)\chi\|\le C_M L^{-M}\) for inputs \(\chi\) in the central eighth, by enlarging the support by a fixed fraction and absorbing discarded tails. All these norm controls are for real weak coupling. In particular the profiles in orthonormal coordinates agree in \(\ell^2\) up to \(O_M(L^{-M})\), since they are localized and their original profiles have that comparison accuracy.

For evolution, in both \(B_L\) and \(B_\infty\) drop entries past range \(L^{1/4}\). Duhamel and uniform operator bounds give error \(C_M T e^{C T}L^{-M}\). Take an input in the central sixteenth, discarding its small tail. The first \(\lfloor L^{1/4}\rfloor\) powers of either finite-range matrix stay inside the central eighth. Their difference follows by telescoping each product and using the localized operator difference (the truncations change this difference by only \(O_M(L^{-M})\)). Summing the exponential series gives again \(C_M T e^{C T}L^{-M}\). The remaining terms have norm at most \(\sum_{n>L^{1/4}}(C T)^n/n!\), which is smaller than any power of L because \(T=O(\log L)\). Thus the original band-only term may be replaced by the actual infinite-band pairing. After factoring out \(e^{-6T}\) its error is \(O_M((1+T)e^{C T}L^{-M})\), made arbitrarily exponentially small by choosing M after \(\eta\). This is the step that a fixed-time strong convergence statement would not supply. It does not assume convergence of a finite-box Perron eigenvector or exclude a finite-box surface state by fiat.

## 3. The exact bulk Fourier edge

The infinite operator is translation invariant with three plaquette orientations. By the [exact bulk dispersion calculation](2026-11-25-dressed-bulk-spectral-edge.md), at fixed small γ the lowest branch of \(6+B_\infty(k)\) has its unique minimum \(m_\gamma\) at zero, with scalar curvature \(2D_\gamma I\), and is simple near zero. The two other branches there and all momenta outside a small neighborhood have higher energy by a positive amount for that fixed γ. The real continuous mixed amplitude at zero is the **actual** profile contraction, not a vacuum-dressed coefficient. By the [summable true profiles](2026-11-25-summable-true-boundary-profiles.md) it is \(A_\gamma=-\gamma/1344+O(\gamma^{3/2})\); the expansions for m and D come from the same exact bulk matrix, with second-order signless-Laplacian symbol. Fourier inversion followed by the three-dimensional Gaussian Laplace estimate yields the stated equivalent: after \(k=u/\sqrt T\), the amplitude tends to \(A_\gamma\), the quadratic exponent tends to \(-D_\gamma|u|^2\), and the strictly positive Hessian gives integrable Gaussian domination. Contributions outside this neighborhood decay strictly faster for fixed γ. For γ sufficiently small \(m_\gamma<6+\delta\), so the high-band and spatial errors already controlled are negligible even relative to \(e^{-m_\gamma T}T^{-3/2}\).

## Scope and checks

The control with dressed probes has positive amplitude at the same edge; replacing the free-boundary weights by those dressed weights would give the wrong sign. The check \((2/3)(-1/448)(1/2)=-1/1344\) uses the exact reciprocal-vacuum correction on the left. The proof takes fixed γ and fixed spatial spacing before \(T\to\infty\); its error bounds are not uniform as γ tends to zero on the crossover scale. No information about arbitrary local physical operators, isotropic weak Wilson coupling, the spatial continuum limit, or the Clay mass gap follows. A further useful test would determine whether intermediate sign changes are possible and conduct a literature-priority and external-verification assessment before claiming novelty.
