# Score-weighted Maxwell energy: exact linear recovery and nonlinear chaos

This is a finite Gaussian calculation and an infrared limit within the spatial transverse Maxwell control, not an interacting SU(2) vacuum calculation. Use one nonzero coarse Fourier block of the length-\(b\) path test, with horizontal coordinate \(x=A U\) where \(AA^*=I\), and fine covariance \(C=\bigoplus_\alpha c/\omega(q_\alpha)\), \(c=1\) in the retained convention (or \(1/2\) for the conventional oscillator). The electric coefficient multiplying the Dirichlet form is set to one throughout these Gaussian calculations; any other coefficient multiplies all energies. On real configurations use the conjugate pair of Fourier blocks, which has the same eigenvalues and estimates.

## Linear optimum and infrared normalization

Put \(S=ACA^*\), \(N=AC^2A^*\). In orthogonal horizontal/vertical fine coordinates, the regression derivative is \(D=(I-A^*A)CA^*S^{-1}\). The exact Gaussian inverse-energy score is \(M=D^*D=S^{-1}NS^{-1}-I\), hence
\[
 W_{\rm grad}=(I+M)^{-1}=S N^{-1}S .
\]
For linear \(F(x)=v^*x\), the score-weighted energy is \(v^*W_{\rm grad}v\), and \(\operatorname{Var}(F)=v^*Sv\). This energy is the exact fine minimum at fixed conditional expectation \(F\), attained by a linear fine test (also proved by the chaos calculation below). Its operator on retained normalized linear tests is
\[
 K_{\rm lin}=S^{-1/2}W_{\rm grad}S^{-1/2}=S^{1/2}N^{-1}S^{1/2}.
\]
In the length-\(b\) Maxwell estimate, for \(\rho=|k|>0\) and \(b\rho\le1\),
\[
 S=\frac{c}{b\rho}\bigl(I+O(b\rho+\rho^2)\bigr),\qquad
 N=\frac{c^2}{\rho^2}\bigl(I+O(\rho^2(1+\log b))\bigr).
\]
The soft terms follow from \(A_0A_0^*=b^{-2}(I+O(\rho^2))\) and \(\omega_0=(\rho/b)(1+O(\rho^2/b^2))\); the hard terms are the prior uniform \(O(c)\) and \(O(c^2(1+\log b))\) estimates. Positive matrix comparison (not simultaneous diagonalization) yields
\[
 K_{\rm lin}=\frac{|k|}{cb}\bigl(I+O(b|k|)\bigr)
 \qquad(b|k|\to0),
\]
uniformly in block length and direction. This recovers the soft **fine** precision \(\omega_0/c\sim |k|/(cb)\), not the raw retained precision \(S^{-1}\sim b|k|/c\). No \(k=0\) harmonic oscillator is used.

## Exact eliminated energy in every Gaussian chaos

Whiten the fine and retained Gaussian variables by \(C^{-1/2}\) and \(S^{-1/2}\), respectively. Let \(J_1=C^{1/2}A^*S^{-1/2}\) be the corresponding one-particle isometry from retained coefficient vectors to fine ones, and \(J_n=J_1^{\otimes_s n}\) its symmetric tensor on the \(n\)th Hermite chaos. Conditional expectation in chaos coordinates is \(J_n^*\): whitened Gaussian variables split orthogonally into the retained span and its independent perpendicular coordinates, and a Wick monomial with a perpendicular factor integrates to zero. The fine Gaussian form generator in this chaos is
\[
 L_n=\sum_{j=1}^n K_j,\qquad K=C^{-1},
\]
where \(K_j\) acts on tensor slot \(j\). This follows by diagonalizing \(K\), in whose coordinates the directional Ornstein--Uhlenbeck generators have the standard Hermite eigenvalues times their respective precisions. We omit constants (\(n=0\)). Orthogonality of the chaoses simultaneously for the energy and conditional map makes the minimization at fixed retained coefficient \(F_n\) separate by chaos. For one component the constraint is \(J_n^*f_n=F_n\). The minimizing vector is \(L_n^{-1}J_n(J_n^*L_n^{-1}J_n)^{-1}F_n\), so the exact retained Schur operator is
\[
 B_n=(J_n^*L_n^{-1}J_n)^{-1}.
\]
The fixed score-weighted differential form, in contrast, has chaos generator \(\sum_{j=1}^n(K_{\rm lin})_j\). By the score-corrected inequality at \(\eta=0\), it is always a lower bound for \(B_n\). When \(n=1\), \(J_1^* K^{-1}J_1=S^{-1/2}NS^{-1/2}\), proving equality. In particular the exact eliminated **Gaussian** Poincaré infimum for a centered finite block is attained on a linear test: the weighted lower bound on chaos \(n\) is at least \(n\lambda_{\min}(K_{\rm lin})\), and linear equality attains \(\lambda_{\min}(K_{\rm lin})\).

The inequality can be strict already in chaos 2. For the scalar retained example \(C=\operatorname{diag}(1,1/2)\), \(A=(1,1)/\sqrt2\), the whitened retained embedding has squared spectral weights \(2/3,1/3\) at one-particle precisions 1 and 2. Thus \(B_1=6/5\) while
\[
 B_2^{-1}=\frac{4/9}{2}+\frac{4/9}{3}+\frac{1/9}{4}
         =43/108.
\]
The exact quadratic-chaos energy \(108/43\) is larger than the score-weighted prediction \(12/5\). In nonlinear tests the horizontal fluctuations discarded by the conditional Jensen step can cost energy.

## Finite-chaos infrared recovery, but not uniformly in chaos degree

For the Maxwell block let \(P_0\) be the orthogonal soft-alias projection in fine whitened one-particle space. Then
\[
 J_1^*P_0J_1=S^{-1/2}S_0S^{-1/2}
              =I-S^{-1/2}(S-S_0)S^{-1/2}\ge (1-Cb\rho)I .
\]
Let \(\ell_0=\omega_0/c\), the least fine precision. Then \(L_n\ge n\ell_0 I\), and on the all-soft tensor subspace it equals \(n\ell_0 I\). Consequently \(J_n^*L_n^{-1}J_n\) lies between \((1-Cb\rho)^n/(n\ell_0)\) and \(1/(n\ell_0)\) times identity when \(Cb\rho<1\). Thus
\[
 n\ell_0 I\le B_n\le n\ell_0(1-Cb\rho)^{-n}I .
\]
For every fixed degree \(n\), even for growing \(n\) with \(nb\rho\to0\), the exact nonlinear eliminated energy therefore recovers the summed fine infrared precision \(n|k|/(cb)\) with vanishing relative error. This does not assert exact equality to the score-weighted form at finite momentum.

Nor is the asymptotic valid uniformly over all chaos degrees. At fixed \(b,k\ne0\), take a unit whitened retained vector \(v\), and the retained test \(v^{\otimes n}\) of unit norm in chaos \(n\). Let \(X_j\) be iid with the spectral distribution of \(K\) in the unit fine vector \(J_1v\). Then
\[
 \langle v^{\otimes n},B_n^{-1}v^{\otimes n}\rangle
   =\mathbb E[(X_1+\cdots+X_n)^{-1}].
\]
The expectation times \(n\) tends to \(1/\mathbb E X_1\) by the law of large numbers and dominated convergence, since all \(X_j\ge\ell_0>0\) at this fixed momentum. The reciprocal is a lower bound on the \(B_n\) Rayleigh quotient by Cauchy-Schwarz; the uneliminated lift \(J_n v^{\otimes n}\) gives the matching upper bound \(n\mathbb E X_1\). Thus the exact Rayleigh quotient divided by \(n\) tends to \(\mathbb E X_1=v^*S^{-1}v\), the **raw** normalized retained precision. In particular one cannot exchange the fixed-degree infrared limit with an unrestricted supremum over degrees.

## The distinct interacting estimate still needed

Let \(\mu_a=\Omega_a^2d\mathrm{Haar}\) be the actual interacting fine vacuum, \(\nu_a\) its holonomy marginal, \(M_a(z)\) its centered conditional inverse-energy score, \(s(a)\) the fine-to-physical energy factor, and \(c_{\rm el}>0\) the electric coefficient in fine energy units. A precise *infrared* prerequisite is to prove that for some \(m_*>0\), a fixed \(0<\eta<1\), and a declared matching trajectory \(b(a)\), the actual interacting measure has
\[
 s(a)c_{\rm el}\int b(a)\left\langle\nabla F,
     [I+M_a(z)/(1-\eta)]^{-1}\nabla F\right\rangle\,d\nu_a
 \ge m_*\operatorname{Var}_{\nu_a}(F)
\]
uniformly in compatible volumes and sufficiently small \(a\), at least for all coarse gauge-invariant tests in nonzero translation sectors with arbitrarily small physical momentum \(0<|k|/(a b(a))\le p_*\), for some fixed \(p_*>0\). This is a sector-restricted testable target for the weighted interacting marginal, not a gap theorem on its own: one must also control the other sectors and leave a uniform physical vertical gap. In the Maxwell analogue the corrected linear precision vanishes with physical infrared momentum after matching the acoustic energy normalization, so bounded raw score or replacing it by its Gaussian value cannot supply such a positive uniform floor. The linear transverse Maxwell sector is not an identification with a nonabelian gauge-invariant SU(2) sector. None of the open-cell Dirichlet calculations are estimates on \(\Omega_a^2\).
