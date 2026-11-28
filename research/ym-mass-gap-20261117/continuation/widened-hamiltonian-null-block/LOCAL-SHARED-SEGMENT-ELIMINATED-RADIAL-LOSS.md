# True and Jensen first radial losses for a shared segment

Take the finite two-loop fixture of lengths \(b,k\) with a common \(r\)-link contiguous segment traversed oppositely and disjoint exclusive paths, \(1\le r<\min(b,k)\). Put \(Z=SP,\ W=QS^{-1}\), \(g_1=0\), \(t=g_2/c\), for \(c>0\) the electric coefficient in the unit quaternion metric. Only \(W\) appears in the magnetic potential. Its positive one-group ground state lifts to the full vacuum, and the true coarse class marginal is Haar \(d\sigma=(2/\pi)\sin^2\theta\,d\theta\), \(\theta=\arccos\operatorname{Re}Z\), at all \(t\). This note compares two retained forms, not either of them with the spectrum of the full fine operator.

## Exact eliminated shift

Let \(\lambda_{\rm elim}\) be the first positive eigenvalue of the constrained **full fine-energy infimum** over extensions with a given retained class conditional mean, with the retained Haar \(L^2\) denominator. The exact analytic small-\(t\) expansion at fixed \(b,k,r,c\) is
\[
 \lambda_{\rm elim}(t)=3bc-ct^2 C_T+O(ct^4),\qquad
 \boxed{\quad C_T=\frac{r^2\lambda}{3k^2(\lambda+2r)(\lambda-6r)},
             \quad \lambda=3(b+k).\quad}
\]

For the functional setup, the full pair electric operator is
\[
 \Delta_E=b\Delta_Z+k\Delta_W-2r\sum_j\ell_Z^j r_W^j.
\]
As in the fixed-length exact retained form proof, use the fixed Haar discarded space \(\mathcal V=H^1_{\rm fine}\cap\ker\mathbb E_{\rm Haar}[\cdot\mid\theta]\) and write the fine discarded extension as \(\rho_t^{-1}\) times an element of \(\mathcal V\). The class marginal is exactly Haar, so this identifies the moving constraint exactly. The new fine form is an analytic relative perturbation of the reference gradient form; Haar Poincaré controls its fine discarded inverse. For any smooth retained \(F\) the Laplacian of its pullback is \(b\Delta_{\rm class}F\); it drops out of the cross pairing. The remaining cross source is \(-\Gamma(\log\rho_t,F)\) projected onto the Haar discarded space, and its norm is \(O(|t|)\|F'\|_2\) because \(\|\nabla F\|_{\rm fine}=\sqrt b\|F'\|_2\). This extends by density and gives an analytic relative form correction of order \(t^2\), even in \(t\) by a center flip of an exclusive neighboring link. The form has the common central \(H^1\) domain and compact resolvent. Since the reference first radial eigenvalue \(3bc\) is simple and its normalized eigenfunction is \(f=2x\), \(x=\operatorname{Re}Z\), the quadratic eigenvalue correction equals the quadratic form correction at this fixed test. These arguments require only fixed finite lengths; no uniform perturbation radius is claimed.

Write \(v=\operatorname{Re}W\), \(P_0=xv\) (a scalar two-loop test), and \(d=\operatorname{Im}Z\cdot\operatorname{Im}W\). The first log density is \(2t v/(3k)\). Since \(\Gamma(x,v)=-r d\), the discarded source on \(f=2x\) is \(t(4r/(3k))d+O(t^2)\) without \(c\). Both \(P_0,d\) are gauge invariant and conditionally centered under Haar of the pair. The six-link perimeter of adjacent squares is replaced here by the unshared loop of length \(b+k-2r\), whose trace is \(P_0-d\). Hence for \(K=-\Delta_E\)
\[
 KP_0=\lambda P_0+2r d,\qquad
 Kd=6rP_0+(\lambda-4r)d,\qquad
 K^{-1}d=\frac{-6rP_0+\lambda d}{(\lambda+2r)(\lambda-6r)}.
\]
The same solution is valid on the discarded form space by its conditional centering. Haar independence gives \(\|P_0\|^2=1/16,\ \|d\|^2=3/16,\ \langle P_0,d\rangle=0\). Substitution of the source in the exact Schur correction yields \(C_T\). The leading fine optimizing corrector \(h\) is
\[
 h/t=\frac{4r}{3k(\lambda+2r)(\lambda-6r)}
                           (6rP_0-\lambda d)+O(t)
\]
in fine \(H^1\). In particular at \(b=k=4,r=1\) the coefficient \(C_T=1/936\).

## Score-weighted loss and strictness for every overlap

At zero coupling the true class inverse-score Taylor coefficient, with the electric prefactor removed from the inverse, is
\[
 [t^2]M_\theta=\frac{r^2}{9 b k^2 D_\theta},\qquad
 D_\theta=2b+A-4r+(2b-4r^2/A)\cot^2\theta,\quad A=3k-r^2/b.
\]
In the weighted Jensen criterion at \(\eta=0\), the first radial eigenvalue has loss coefficient
\[
 C_J=\frac{r^2}{9 k^2}\int |f'(\theta)|^2D_\theta^{-1}\,d\sigma(\theta),
 \qquad f=2\cos\theta .
\]
This again is the fixed-test diagonal perturbation of the simple reference radial eigenvalue; a fixed \(0<\eta<1\) multiplies it by \((1-\eta)^{-1}\). For legitimacy of the integrated expansion at each fixed length, parametrize the regular class by its axis and the remaining links after solving for one coarse link. The normalized Haar conditional reference is product sphere-axis measure times Haar links. Its induced metric is uniformly comparable in \(\theta\) to the link product metric plus \(\sin^2\theta\) times the sphere metric, by constants at most \(b+1\) in both directions: the product velocity squared is at most \(b\) times the sum of coarse link velocities squared, and the solved link velocity is at most the product velocity plus the sum of the other coarse link velocities. Product Poincaré therefore gives a fixed positive reference gap for each \(b\). Uniform-in-angle sup bounds on the analytic conditional factor and on the unit horizontal score then justify a fixed-energy Riesz Neumann expansion. Singular endpoint inverses are not used.

The inequality \(C_J>C_T\) is strict for every allowed \(b,k,r\). To see why, put \(y=\sin\theta\), \(p=(\operatorname{Im}Z/y)\cdot\operatorname{Im}W\), so \(d=yp\), and let \(T_\theta\) be the unit radial horizontal derivative. It acts by
\[
 T_\theta P_0=-\sqrt b\,yv+(r/\sqrt b)xp,\qquad
 T_\theta d=\sqrt b\,xp-(r/\sqrt b)yv .
\]
For the leading optimizing \(h/t\) above its radial derivative is the same prefactor times
\[
 b^{-1/2}\bigl[r(\lambda-6b)yv+(6r^2-\lambda b)xp\bigr].
\]
Both terms have zero reference conditional mean, are Haar-orthogonal, and have respective squared norms \(3/16\) and \(1/16\). The second coefficient cannot vanish: \(\lambda b>6r^2\) for \(b,k>r\). Thus the conditional horizontal fluctuation omitted by Jensen at the actual optimizer has a strictly positive \(ct^2\) coefficient. The relaxed independent-fiber minimization can only lower its value further. More explicitly, for every admissible discarded \(h\), the exact conditional-variance split of the radial horizontal square and the independent-fiber relaxation give
\[
 \mathcal E(f+h)\ \ge\
     cb\int W_0|f'|^2\,d\sigma
          +c\int\operatorname{Var}_{\mu_t}(T_\theta h\mid\theta)\,d\sigma,
 \qquad W_0=(1+M_\theta)^{-1}.
\]
Indeed \(\mathbb E_t[T_\theta h\mid\theta]=-\mathbb E_t[s_\theta h\mid\theta]\) by the conditional score identity. After keeping the displayed variance, relax the conditional mean horizontal square plus the intrinsic vertical square separately on each class fiber; this gives the first term by the score variational formula. At the exact optimizer the coarse pullback derivative is fixed on each class fiber, and the discarded \(H^1\) expansion and the bounded analytic density give that variance the positive leading term just computed. This proves strictness at the retained test \(f\), hence in the quadratic eigenvalue coefficients as well.

## Scaling and near-total-overlap ratio

Let \(m=b+k-2r\). The denominator in the score paper obeys \(2m\le D_\theta\le3m\csc^2\theta\) by its exact Schur factorization. Also \(3/4<\lambda/(\lambda+2r)<1\) and \(\lambda-6r=3m\). Since \(\int |f'|^2\,d\sigma=3\) and \(\int |f'|^2\sin^2\theta\,d\sigma=5/2\), both loss coefficients are of order \(r^2/(k^2m)\) and
\[
 \frac{r^2}{12k^2 m}<C_T<\frac{r^2}{9k^2m},\qquad
 \frac{5r^2}{54k^2m}\le C_J\le\frac{r^2}{6k^2m}.
\]
In particular \(1<C_J/C_T<2\) for \(\eta=0\). For comparable \(b,k\) of size \(L\), the eigenvalue loss coefficients are of order \(L^{-3}\) with fixed \(r\), or \(L^{-1}\) when \(r\) and \(m\) are proportional to \(L\). These powers concern the eigenvalue coefficients, including the coarse metric \(b\), not the inverse-score coefficient alone.

Finally let \(b=r+u,\ k=r+w\) with fixed positive \(u,w\) and \(r\to\infty\) along feasible loops. Then
\[
 C_T\longrightarrow \frac1{12(u+w)},\qquad
 D_\theta\longrightarrow 3(u+w)\csc^2\theta,\qquad
 C_J\longrightarrow\frac5{54(u+w)} .
\]
The integral limit follows by dominated convergence using the displayed lower bound on \(D_\theta\). Therefore the exact finite-coefficient ratio tends to \(10/9\) (or \(10/[9(1-\eta)]\) for fixed \(\eta\)). This does not interchange length and perturbation limits or control Taylor remainders uniformly. The exact symbolic replay tests the two-mode inverse, the base square coefficient, the horizontal fluctuation and the limiting ratio. No full fine gap or continuum claim is made.
