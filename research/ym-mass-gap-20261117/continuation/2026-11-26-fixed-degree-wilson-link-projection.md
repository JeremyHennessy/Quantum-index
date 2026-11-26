# Fixed-degree Wilson link trials: uniform capture and a quantitative large-staple limit

**2026-11-26 UTC. Conditional SU(2) estimate, not a physical decay bound.**

The [linear trial](2026-11-26-uniform-one-link-projection.md) misses some nonlinear responses, and [one actual Wilson integration](2026-11-26-wilson-shell-multilinearity-obstruction.md) need not preserve multilinearity. Here the trial captures a positive fraction for *any fixed polynomial degree*, uniformly over all staple strengths. At large strength the fraction tends to one with squared loss \(O_d(t^{-2})\). This does not approximate the actual trace shell profile by polynomials.

Write \(\pi_t\) for the unit-S³ density proportional to \(e^{tx}\) against Haar and \(L_t\) for the reversible round generator. Let \(V_{d,t}\) be the restrictions of quaternion-coordinate polynomials of total degree at most d, centered under \(\pi_t\). The claim is that for each \(d\ge1\), the conditional L² projection \(\mathcal P_t\) onto \(L_t V_{d,t}\) satisfies
\[
 \|\mathcal P_t f\|_t^2\ge c_d\|f\|_t^2,\qquad
 \|(1-\mathcal P_t)f\|_t^2\le C_d t^{-2}\|f\|_t^2\quad (t\text{ sufficiently large})
\]
for \(f\in V_{d,t}\), with \(c_d>0\) independent of \(t\ge0\).

## A finite-staple lower bound

For \(0\le t\le T\) the density relative to Haar lies between \(e^{-2T}\) and \(e^{2T}\). Write \(f_0=f-E_0 f\) and \(\lambda_d=d(d+2)\), using the degree-k spherical harmonic eigenvalue \(k(k+2)\) of the negative round Laplacian on S³. Thus \(\|\Delta f\|_0^2\le\lambda_d^2\|f_0\|_0^2\), \(\|\nabla f\|_0^2\le\lambda_d\|f_0\|_0^2\), and \(\|\nabla f\|_0^2\ge3\|f_0\|_0^2\). Comparing the variances by minimizing over constants and bounding \(|\nabla x|\le1\) gives
\[
 E_t|\nabla f|^2\ge3e^{-4T}\|f\|_t^2,\qquad
 \|L_t f\|_t^2\le2e^{4T}(\lambda_d^2+T^2\lambda_d)\|f\|_t^2.
\]
Testing just the direction \(L_t f\) gives a captured fraction at least \(9e^{-12T}/[2(\lambda_d^2+T^2\lambda_d)]\). This is a crude compact-interval bound, not an efficient dependence on d or T.

## Quantitative convergence via lifting the Gaussian inverse

For transverse coordinates y set \(Y=\sqrt{t}\,y\) and \(z=t(1-x)\). For \(t>0\), use the basis \(H_\ell(Y)z^j\) with \(\ell+j\le d\), one basis of homogeneous harmonic polynomials \(H_\ell\) on \(\mathbb R^3\) for each \(\ell\). These span the restrictions: decompose each transverse polynomial into spherical harmonics times powers of \(|y|^2\), replace \(|y|^2\) by \(1-x^2\), and change axial coordinate from x to z. Independence follows by fixing \(x\in(-1,1)\), taking transverse angular harmonics, and then using independence of the powers of z. Conditional on z, Y has uniform direction and norm \((2z-z^2/t)^{1/2}\). The z density and uniform moments are those in the previous note. Dominated convergence of all moments gives a Gaussian \(Y_\infty\sim N(0,I_3)\) and \(z_\infty=|Y_\infty|^2/2\). The limiting basis \(H_\ell(Y)(|Y|^2/2)^j\) is independent by the harmonic decomposition in \(\mathbb R^3\). After removal of the constant basis vector and centering, the Gram matrices thus stay uniformly nondegenerate for t large.

For \(t^{-1}L_t\), the drift in Y and z respectively is \(-(x+3/t)Y\) and \(3x-(2z-z^2/t)\). The gradient pairings for the second-order operator in these coordinates are
\[
 \Gamma_{Y_iY_j}=\delta_{ij}-Y_iY_j/t,\quad
 \Gamma_{Y_i z}=xY_i,\quad
 \Gamma_{zz}=2z-z^2/t .
\]
They follow from the round-sphere coordinate gradients \(\nabla u_i\cdot\nabla u_j=\delta_{ij}-u_i u_j\). Substitution of \(x=1-z/t\) exhibits a leading operator plus exactly \(1/t\) times a fixed polynomial coefficient operator on formal (Y,z). The leading operator induces \(\mathcal A_G=\Delta_Y-Y\cdot\nabla_Y\) on the limiting basis by the chain rule with \(z=|Y|²/2\). More precisely, both before and after substitution its action on \(H_\ell(Y)z^j\) is \(-(\ell+2j)H_\ell(Y)z^j+j(2j+2\ell+1)H_\ell(Y)z^{j-1}\); the term with j=0 is read as zero. Therefore it preserves the limiting space and is invertible after centering. There is no ambiguity about which polynomial in formal (Y,z) is lifted back.

Let \(I_t\) replace each limiting basis vector by its corresponding finite-t centered vector. Given \(f=I_t P\), choose the Gaussian-centered \(R=\mathcal A_G^{-1}P\). Since generator outputs have zero \(\pi_t\) mean, the error \(t^{-1}L_t I_t R-I_t P\) is exactly \(1/t\) times the \(\pi_t\)-centered polynomial arising from the fixed correction operator applied to the formal representative of R. Uniform fixed-order moments bound this error by \(C'_d/t\) times the coefficient norm of R. That norm is bounded by a d-dependent multiple of the coefficient norm of P, and the latter by a d-dependent multiple of \(\|f\|_t\) by Gram nondegeneracy. The vector \(t^{-1}L_t I_t R\) belongs to the trial image. Squaring the residual proves the quantitative estimate. Combining the large-t estimate, once it exceeds half-variance capture, with the compact-interval bound proves the assertion for all t.

As in the [conditional product proof](2026-11-26-wilson-shell-multilinearity-obstruction.md), the same \(c_d\) applies to independent conditional link sets for responses of degree ≤d *per link*, by probing one designated factor in each centered tensor support. Neither this bound nor the Gaussian limit controls \(d\) increasing with the cutoff. In the actual matched trace problem the needed inputs remain a uniform weighted polynomial approximation (or a proof not requiring it), a whole-shell variance comparison, and a cutoff-uniform starting bound. There is no continuum trace decay or mass-gap claim. For the Wilson generator convention and the separate fixed-spacing strong-coupling setting, see [Shen–Zhu–Zhu](https://arxiv.org/abs/2204.12737).
