# Fixed magnetic parameter limits of the shared-segment radial shifts

Consider the finite two-loop SU(2) fixture with coarse length \(b\), neighboring length \(k\), and opposite common segment of length \(r\), \(1\le r<\min(b,k)\). The exclusive paths are edge-disjoint. Put \(u=b-r\), \(w=k-r\), \(t=g_2/c\) with a fixed electric coefficient \(c>0\), and \(g_1=0\). Only \(W\), the neighboring loop, enters the potential. The true coarse class marginal of \(Z\) is exactly Haar, so \(d\sigma=(2/\pi)\sin^2\theta\,d\theta\). Write \(\lambda_T\) for the first positive **exact eliminated retained** radial eigenvalue, and \(\lambda_{J,\eta}\) for that of the score-weighted radial lower form with a fixed \(0\le\eta<1\). Neither is identified with the full fine spectrum.

There are constants \(a_\eta,C_\eta>0\) independent of the lengths such that, for real \(|t|\le a_\eta\sqrt k/2\),
\[
 \begin{split}
 \lambda_T(t)&=3bc-ct^2 C_T+O\!\left(c\,\frac{r^2|t|^4}{k^3}\right),\\
 \lambda_{J,\eta}(t)&=3bc-ct^2\frac{C_J}{1-\eta}
             +O_\eta\!\left(c\,\frac{r^2|t|^4}{k^3w}\right).
 \end{split}
\]
Here \(C_T,C_J\) are the exact finite Taylor coefficients from the shared-segment elimination calculation. Consequently, with \(u,w>0\) fixed and \(r\to\infty\) through feasible loops, for each fixed real \(t\),
\[
 \boxed{
 \lambda_T(t)-3bc\ \longrightarrow\ -\frac{ct^2}{12(u+w)},\qquad
 \lambda_{J,\eta}(t)-3bc\ \longrightarrow\
                       -\frac{5ct^2}{54(1-\eta)(u+w)} .}
\]
These are limits of actual shifted finite-fixture eigenvalues, not just of their coefficients. The absolute reference eigenvalues \(3bc\) diverge in this regime.

## One-group analyticity and the exact fine elimination

The full positive ground state is the lift of the one-group solution for \(W\), with dimensionless one-group Hamiltonian \(-\Delta_W-(t/k)\operatorname{Re}W\). The coarse and neighboring holonomies have independent Haar reference law from their exclusive links. In particular the density \(\rho_t\) depends only on \(W\), is normalized to have Haar mean one there, and leaves the coarse Haar marginal unchanged.

In a fixed complex disk of \(s=t/k\) about zero the normalized one-group branch \(\psi_s\) is analytic in any fixed finite \(C^j\) norm. Indeed the Riesz-resolvent expansion about the isolated constant eigenfunction is analytic in sufficiently high Sobolev spaces; multiplication by the smooth trace is bounded there, and elliptic regularity and Sobolev embedding give the claimed norm. Normalize analytically by \(\int\psi_s^2\,dW=1\), choosing the branch \(\psi_0=1\). Thus \(\rho_t=\psi_s^2\), its reciprocal, and its logarithm have branches near the value at zero with departures in fixed \(C^j(W)\) bounded by \(C_j|t|/k\). At real small \(s\) this is the ordinary positive ground state. Since exactly \(k\) fine links enter \(W\), its lifted gradient has pointwise norm bounded by \(\sqrt k\) times its one-group sup gradient. In particular the fine derivatives of \(\rho_t^{\pm1}\) and \(\log\rho_t\) are bounded by \(C|t|/\sqrt k\).

Use the fixed fine Haar discarded space \(\mathcal V=H^1_{\rm fine}\cap\ker P_0\) with \(P_0\) conditional expectation onto the coarse class, and norm \(\|\nabla k_0\|_2\). For a real admissible fine extension write \(f=JF+\rho_t^{-1}k_0\), \(k_0\in\mathcal V\). The identification is exact by the unchanged marginal. The fine Haar product Poincaré constant is 3 in unit quaternion metric, regardless of the number of fine links, so it controls \(\|k_0\|_2\) in this energy norm. Let \(A_t\) be the discarded form \( \int \rho_t\Gamma(\rho_t^{-1}k_0,\rho_t^{-1}l_0)\), without its electric prefactor. The product rule with the preceding sup bounds gives
\[
 \|A_t-A_0\|_{\mathcal V\to\mathcal V^*}
 \le C\bigl(|t|/k+|t|/\sqrt k+|t|^2/k\bigr).
\]
Use the bilinear analytic continuation of this expression for complex parameters. Hence on \(|t|\le a\sqrt k\) for small universal \(a\), the \(A_t^{-1}\) norm is bounded by a universal constant in energy-dual units.

The cross residual is \(R_tF=-Q_0\Gamma(\log\rho_t,JF)\), where \(Q_0=1-P_0\). This follows by integration by parts in the fine ground law: the pullback Laplacian of \(F\) is retained and pairs to zero with the fixed discarded space after \(\rho_t^{-1}\) multiplication. The pair mixed cometric in left-\(Z\)/right-\(W\) frames is \(-rI\), so \(\Gamma(\theta,h(W))=-r\,r_W^n h(W)\) for \(n=\operatorname{Im}Z/\sin\theta\). Thus
\[
 \|R_tF\|_{L^2(\mathrm{Haar})}\le C\,\frac{r|t|}{k}\,\|F'\|_{L^2(d\sigma)}
\]
uniformly in the lengths, using the one-group, not the full lifted, derivative norm. It extends by density for central \(H^1\) functions. The exact retained form, divided by \(cb\), is the Haar radial form minus \(b^{-1}\langle R_tF,A_t^{-1}R_tF\rangle\) (polarize for a pair of tests). Therefore its relative perturbation norm is at most
\[
 \epsilon_T(t)=C\frac{r^2|t|^2}{b k^2}.
\]
The formula is exact at real \(t\) by minimizing the fine quadratic, and gives the bounded analytic form continuation on the complex disk. This uses a global fine inverse with the retained constraint, not an independent vertical minimization.

## Weighted route without a length-dependent fiber Poincaré bound

Fix a regular class angle. In its reference conditional probability, the inverse-score quantity with the electric coefficient removed is \(M_\theta=\langle B,A_{\theta,t}^{-1}B\rangle\) where \(B=T_\theta\rho_t\) as a fixed-reference source and \(A_{\theta,t}=\int\rho_t\Gamma_v\) is the intrinsic vertical form in reference energy units. The class marginal is Haar exactly, so there is no varying coarse normalizer; the centering also follows from the following divergence calculation. The reference fiber is connected, and the mean-zero reference energy space is complete at each regular angle because it is a compact connected smooth fiber. No uniform Poincaré constant for this space is used below.

For each one of the \(w\) neighboring links exclusive of \(Z\), choose a unit electric field \(\mathcal X_e\) on that link whose induced increment on \(W\) is the right direction \(n\). This is a right field with label rotated by the suffix of \(W\) for a positively traversed link; for an inverse occurrence use the corresponding negative left field. The suffix does not include the link being varied, and \(n\) depends only on \(Z\), so the label is independent of that link. The field is tangent to the coarse class and divergence-free in its Haar conditional reference, either directly by Haar invariance on that exclusive link or by ambient Haar integration by parts and disintegration. The average \(\mathcal Y=w^{-1}\sum_e\mathcal X_e\) acts on functions of \(W\) as \(r_W^n\) and has pointwise norm \(w^{-1/2}\), since the distinct electric link directions are orthogonal. As \(T_\theta\rho_t=-(r/\sqrt b)\mathcal Y(\rho_t-1)\), integration by parts gives for every vertical test \(h\)
\[
 |\langle B,h\rangle_{\theta,\rm ref}|
 \le \frac{r}{\sqrt{bw}}\,\|\rho_t-1\|_\infty
                     \|\nabla_v h\|_{\theta,\rm ref}
 \le C\frac{r|t|}{k\sqrt{bw}}\|\nabla_v h\|_{\theta,\rm ref}.
\]
In particular the source kills constants. This is a length-uniform **energy-dual** estimate, rather than a bound obtained by passing through a conditional \(L^2\) gap.

The reference-energy relative norm of \(A_{\theta,t}-A_{\theta,0}\) is at most \(\|\rho_t-1\|_\infty\); hence its inverse from the energy dual has uniformly bounded norm on the same disk and uniformly in regular angle. The bilinear analytic continuation gives
\[
 |M_\theta(t)|\le C\,\frac{r^2|t|^2}{bk^2w}.
\]
Measurability follows from the smooth reference fiber parametrization and local regular-angle form dependence. Equivalently the reference Riesz Neumann expansions give uniform analytic series in \(L^\infty\) of the regular angle. Because \(r^2<bk\) and \(w\ge1\), reducing the universal \(a\) to \(a_\eta\) makes \(M_\theta/(1-\eta)\) uniformly small on \(|t|\le a_\eta\sqrt k\). The weighted form, divided by \(cb\), is the Haar radial gradient form with weight \((1+M_\theta/(1-\eta))^{-1}\). Its relative perturbation norm on that disk is at most
\[
 \epsilon_J(t)=C_\eta\frac{r^2|t|^2}{b k^2 w}.
\]
No endpoint fiber inverse has been assumed; the uniform energy-dual calculation legitimizes the integrated radial form up to sets of zero Haar class measure.

## Common-domain spectral control and Cauchy remainder

After division by \(cb\), both reference radial operators are the same central SU(2) Laplacian \(-\Delta_{\rm class}\) in fixed Haar class \(L^2\), with levels \(n(n+2)\), \(n=0,1,\dots\). The reference first nonzero level is the isolated simple 3. Both analytic forms have the common central \(H^1\) form domain; compactness of its embedding gives compact resolvents. For a quantitative contour proof, write the normalized form perturbation relative to the reference plus the identity. On a fixed small contour about 3, the reference form-resolvent inverse is uniformly bounded in these units, and a relative perturbation of norm \(\epsilon_T\) or \(\epsilon_J\) gives a resolvent difference of the same order by the Neumann series. Choose the disk constant \(a_\eta\) so that \(r^2/(bk)<1\) ensures a small perturbation at its boundary. Riesz integration preserves rank one; a ratio of contour matrix elements for the eigenvalue and its projection in the reference eigenvector gives a difference from 3 bounded by a constant times \(\epsilon_T\) or \(\epsilon_J\). At real \(t\) this branch remains first positive by the same small form comparison. The constant function remains the exact zero mode.

An exclusive neighboring center flip changes \(t\) to \(-t\), preserves the coarse variables and induces the same retained forms, so both analytic eigenvalues are even. On the circle \(|t|=a_\eta\sqrt k\) their normalized differences from 3 are \(O(r^2/(bk))\) and \(O_\eta(r^2/(bkw))\), respectively. Equivalently the unnormalized analytic shifts \(\lambda(t)-\lambda(0)\), with \(\lambda(0)=3bc\), are bounded there by \(O(c r^2/k)\) and \(O_\eta(c r^2/(kw))\). All quadratic expressions on the complex disk are the bilinear holomorphic continuations of the real forms and source pairings (with a fixed complex conjugate on the first *test* if using sesquilinear coordinates); no parameter \(t\) is conjugated. Cauchy's coefficient estimates and the evenness bound the remainder after the quadratic term by these bounds times \(O_\eta(|t|^4/k^2)\) on the half disk. Undoing the normalization \(cb\) gives the remainders claimed above. The quadratic coefficients are exactly the already calculated finite ones, since the small-\(t\) eigenvalue derivatives are taken in the same retained form domains.

For \(b=r+u,\ k=r+w\) with \(u,w\) fixed, \(r^2/k^3=O(1/r)\). The earlier exact coefficients satisfy \(C_T\to 1/[12(u+w)]\) and \(C_J\to5/[54(u+w)]\). Combining these with the uniform remainder proves the displayed limits of actual shifts at fixed \(t\). The results are tied to a single active plaquette-loop potential with exact one-group vacuum and a prescribed near-total overlap geometry, and are not estimates on a many-plaquette theory, any weak-bare trajectory, or a continuum limit.
