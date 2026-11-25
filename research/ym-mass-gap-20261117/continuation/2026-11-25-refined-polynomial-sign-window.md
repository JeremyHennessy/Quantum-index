# Refined polynomial window: use vanishing of the whole complex numerator overlap

**2026-11-25 | Research-only addendum to the [polynomial window](2026-11-25-polynomial-noncancellation-window.md)**

For the original bulk signal at fixed spatial spacing the sufficient exponent improves from \(\theta<4/21\) to **\(\theta<1/5\)** for \(0<T\le \gamma^{-\theta}\) and all sufficiently small \(\gamma>0\). The earlier relative Taylor proof estimated a scaled holomorphic witness by a constant even though its complex amplitude is uniformly small on the shrinking disc. Retaining that gain gives this refinement without any additional spin-network assumptions.

Use the exact prior disc \(|z|\le d/(N\sqrt T)\), \(w=zN\), \(N\le C_2T^3\), \(t_s=\log(C_0N)+2<T\), and write \(D=e^{T(H(z)-\lambda_0(w))}1\). Recall that \(\|D-1\|_\infty\le C|w|(1+t_s)\): the ground part \(P_0(w)1-1\) already has that bound in the prior proof, and the bound on \(D-P_0(w)1\) retains an additional \(|w|\) from \((I-P_0(w))1\), of norm O(|w|), in the same smoothing argument. In particular \(\|1/D-1\|_\infty\le C|w|(1+t_s)\). For \(J_T=e^{T(H(z)-\lambda_0(w))}(F-a(z))\) use the already verified bound \(\|J_T\|_2\le C e^{-6T}\).

Now subtract and add Haar pairing without division:
\[
 h_{\Lambda,z}(T)=\langle R,J_T\rangle+\langle R,(D^{-1}-1)J_T\rangle .
\]
The latter term is bounded by \(C|w|(1+t_s)e^{-6T}\). For the first term, the band contribution also costs \(|w|\): \(R\) is orthogonal to the unperturbed plaquette band, so \(\|P_b(w)^*R\|_2=O(|w|)\), and \(P_b(w)\) projects its evolved band vector to itself. Here the adjoint is used only in the norm bound at each complex parameter, not as a holomorphic function. The high contribution is controlled on the source side, since \(P_h(0)F=P_h(0)1=0\) and \(P_h(w)(F-a(z))=O(|w|)\) in L²; its decay lies above 6 on the whole disc. There is no vacuum contribution. Thus
\[
 e^{6T}|h_{\Lambda,z}(T)|\le C |w|(1+t_s).
\]
At the Cauchy circle its upper bound is \(C T^{-1/2}(1+\log N)\). The oddness proven for the earlier window removes the quadratic coefficient. The third-order remainder after the linear coefficient, with the same half-radius condition, is bounded by
\[
 C|\gamma|^3 N^3T(1+\log N)e^{-6T}.
\]
As before take the comparison cube of radius proportional to \(T+\log(1/\gamma)\) and use the log-window theorem for earlier times. In the overlapping range the relative error after division by \(\gamma e^{-6T}\) is at most \(C\gamma^2 T^{10}(1+\log T)\); the comparison error is negligible on the same scale. This goes to zero uniformly up to \(T=\gamma^{-\theta}\) for \(\theta<1/5\), and the complex half-radius condition remains valid. The proof does not cover the endpoint exponent \(1/5\) without a logarithmic loss. For example it also covers \(T\le \gamma^{-1/5}(\log(1/\gamma))^{-a}\) for any fixed \(a>1/10\) by the same bound.

The gain requires both orthogonality statements, at opposite ends of the spectral decomposition. Merely noting that the finite-volume witness is zero at \(z=0\) with no uniform analytic control would not justify it. This is still far short of the interaction-resolving scale \(\gamma^{-2}\); locality of the effective *boundary* coefficients is the next target. No spatial continuum conclusion is made.
