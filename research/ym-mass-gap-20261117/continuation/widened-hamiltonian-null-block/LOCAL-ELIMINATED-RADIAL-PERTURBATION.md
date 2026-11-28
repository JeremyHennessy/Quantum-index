# Exact eliminated radial form and its first eigenvalue near the Haar point

Use the finite two-adjacent-plaquette SU(2) fixture with closed coarse loop \(Z\), neighboring plaquette \(W\), unit quaternion electric metric, \(g_1=0\), and \(t=g_2/c\) at a fixed \(c>0\). The vacuum density \(\rho_t\) depends only on \(W\), so the actual marginal of \(\theta=\arccos\operatorname{Re}Z\) is **exactly** normalized Haar class law \(d\sigma=(2/\pi)\sin^2\theta\,d\theta\). The form studied here is the true fine-energy infimum with a fixed retained conditional mean. It is neither the score-weighted lower bound nor an identification of the fine spectrum.

Let \(J F=F(\theta)\) denote the pullback and let \(\mathcal H^1_{\rm class}\) be central \(H^1\) on a unit SU(2) group, identified with the Haar radial class domain. Define
\[
 \mathfrak e_t(F,F)=\inf_{\mathbb E_t[f\mid\theta]=F}
                              c\int|\nabla f|^2\rho_t\,d\mathrm{Haar}.
\]
For small \(t\), this is a closed form on that same retained domain. Its first strictly positive eigenvalue relative to \(L^2(d\sigma)\) satisfies
\[
 \boxed{ \lambda_{\mathrm{elim,rad}}(t)
         =12c-\frac{ct^2}{936}+O(ct^4). }
\]

## Exact Schur form with a fixed fine-energy space

Let \(P_0\) be the orthogonal projection in ambient reference Haar onto retained class pullbacks, and write \(Q_0=1-P_0\), using the same symbol for the complementary range when specifying its domain. Give \(\mathcal V=H^1_{\rm fine}\cap\operatorname{Ran}Q_0\) the reference energy norm \(\|\nabla k\|_{L^2(\mathrm{Haar})}\). Every such \(k\) has zero global Haar mean, so Haar Poincaré controls \(\|k\|_2\), and \(\mathcal V\) is a complete closed subspace of \(H^1_{\rm fine}\). Since the coarse marginal is Haar exactly, all admissible fine extensions have the unique parameterization \(f=JF+\rho_t^{-1}k\), \(k\in\mathcal V\):
\[
 \mathbb E_t[\rho_t^{-1}k\mid\theta]=\mathbb E_{\rm Haar}[k\mid\theta].
\]
The multiplication and its inverse are bounded analytic on \(H^1\) near zero, since the isolated vacuum projection and elliptic regularity give an analytic family \(\rho_t\) in \(C^1\), positive and bounded away from zero. This argument avoids differentiating conditional projections in a moving Sobolev space. It also identifies the entire finite-energy retained domain: conditional expectation at \(t\) is \(P_0(\rho_t f)\) in pullback coordinates. The Haar projection \(P_0\) is \(H^1\)-bounded. On smooth inputs it is smooth, by solving one link for the full holonomy and then averaging conjugation; since the Laplacian preserves that smooth retained range, Haar integration by parts makes the gradient pairing of its retained and discarded parts zero. This gives the \(H^1\) contraction on a dense smooth set and hence on \(H^1\). Thus every finite-energy fine function has retained mean in central \(H^1\), and the converse is supplied by \(JF\).

Use real bilinear forms for the following formulas (or polarize to complex functions). On \(\mathcal V\) let \(A_t\) be the Riesz form map to the energy dual for
\[
 A_t[k,l]=\int \rho_t\,\nabla(\rho_t^{-1}k)\cdot
                        \nabla(\rho_t^{-1}l)\,d\mathrm{Haar}.
\]
At zero this is the reference energy inner product. Using the \(C^1\) bounds and Poincaré, \(A_t-A_0\) is analytic and \(O(|t|)\) in reference-relative form norm. Thus \(A_t^{-1}:\mathcal V^*\to\mathcal V\) is analytic near zero by a norm Neumann series.

For a smooth central test \(F\), the cross form between \(JF\) and \(\rho_t^{-1}k\), divided by \(c\), is the ambient Haar pairing of \(-\Delta JF-\Gamma(\log\rho_t,JF)\) with \(k\). The Haar Laplacian of \(JF\) is \(4J\Delta_{\rm class}F\), so its pairing vanishes. Define the residual
\[
 R_tF=-Q_0\Gamma(\log\rho_t,JF).
\]
This belongs to the ambient Haar \(L^2\) and pairs as a member of \(\mathcal V^*\). Importantly,
\[
 \|R_tF\|_{L^2(\mathrm{Haar})}
 \le \|\nabla\log\rho_t\|_\infty\|\nabla JF\|_2
 =2\|\nabla\log\rho_t\|_\infty\|F'\|_{L^2(d\sigma)}
 =O(|t|)\|F'\|_{L^2(d\sigma)} .
\]
The derivative is the weak radial derivative in the central form domain, with no separate endpoint condition. The exact middle identity uses the four-link submersion metric. The analytic expansion of \(\nabla\log\rho_t\) in sup norm makes \(R_t\) analytic in this retained gradient norm. Smooth central functions are dense in the domain (for example by smooth approximation and compact conjugation averaging). Therefore the cross form extends by density, including at near-endpoint angles, with no estimate on individual singular fibers.

Minimizing the fixed-space quadratic in \(k\) and polarizing gives the exact identity on the entire retained form domain:
\[
 \mathfrak e_t(F,G)=4c\int F'G'\,d\sigma
             -c\,\langle R_tF,A_t^{-1}R_tG\rangle.
\]
Here the pairing is of the fine energy dual and energy space. The first term is exact at all these \(t\) because the class marginal is Haar. The optimizer is \(k=-A_t^{-1}R_tF\), not a collection of independent vertical Poisson solutions. Restricting the fine infimum to gauge-invariant extensions does not change it for retained class tests: averaging an extension over the compact fine gauge group preserves the constraint and does not increase the Dirichlet energy.

## Uniform relative expansion and the first eigenvalue

The correction has norm at most \(C c t^2\|F'\|_2\|G'\|_2\), and its power series converges in that relative gradient norm. An exclusive noncoarse center flip intertwines \(t\) and \(-t\), keeps \(\theta\) fixed, and preserves the full electric form and reference Haar. Thus the eliminated form is exactly even as a bilinear operator on the retained space. Its expansion is
\[
 \mathfrak e_t(F,G)=4c\int F'G'\,d\sigma
     -ct^2\langle R_1 F,A_0^{-1}R_1G\rangle
     +O(ct^4)\,\|F'\|_2\|G'\|_2,
 \qquad R_1=-\tfrac16 Q_0\Gamma(v,J\cdot),\quad v=\operatorname{Re}W.
\]
This first source follows from \(\log\rho_t=t v/6+O(t^2)\) in \(C^1\). In regular radial coordinates it can also be written \(R_1 F=-p F'/6\), with \(p=(\operatorname{Im}Z/\sin\theta)\cdot\operatorname{Im}W\); this function has Haar conditional mean zero. The bounded full-space expression is the one used in the form proof.

For small \(t\), the form plus the \(L^2\) norm is equivalent to the central \(H^1\) norm. This gives closedness, the common domain, and compact resolvent by the compact embedding of central \(H^1\) into central \(L^2\) on SU(2). More concretely, adding a positive constant gives a common form-energy space; invert its analytic bounded Riesz map and compose with the compact embedding to get analytic compact resolvents. The exact constant mode is zero, and the reference first positive radial eigenvalue \(12c\) is simple and separated from the next one \(32c\), by the SU(2) class characters. It therefore remains the first positive eigenvalue near zero. The first perturbation in the even expansion is the form coefficient in the normalized reference eigenvector \(u=2\cos\theta\): this follows by differentiating the simple eigenproblem with respect to \(t^2\) on the common form space. No off-diagonal eigenvector correction contributes at this order.

For \(x=\operatorname{Re}Z\) and \(d=\operatorname{Im}Z\cdot\operatorname{Im}W\), the shared-edge pairing is \(\Gamma(v,x)=-d\), so \(R_1 u=d/3\). The exact reference fine two-mode solve gives
\[
 (-\Delta)^{-1}d=-xv/78+2d/39,\qquad
 \langle d,(-\Delta)^{-1}d\rangle=1/104.
\]
Both functions have zero reference conditional mean, so this is also the \(A_0^{-1}\) solution for the retained-class complement. One may replay the arithmetic with the fixed-test verifier: on \((xv,d)\) the columns of \(-\Delta\) are \((24,2),(6,20)\), the Haar functions are orthogonal and \(\|d\|^2=3/16\). Hence \(\langle R_1u,A_0^{-1}R_1u\rangle=1/936\), proving the eigenvalue expansion.

## The true deficit is order zero on retained class \(L^2\)

For \(k\in\mathcal V\), integrate the residual by parts in full Haar:
\[
 \langle R_tF,k\rangle
 =\left\langle JF,\Gamma(\log\rho_t,k)
                         +(\Delta\log\rho_t)k\right\rangle_{\mathrm{Haar}}.
\]
The \(Q_0\) projector may be omitted when pairing with \(k\).
Analyticity of the ground state holds also in \(C^2\), by raising
the Sobolev index. Thus the sup norms of the drift and its divergence
are \(O(|t|)\), and Haar Poincaré gives
\[
 |\langle R_tF,k\rangle|
       \le C|t|\,\|F\|_{L^2(d\sigma)}\,\|k\|_{\mathcal V}.
\]
Consequently \(R_t\) extends analytically from retained \(L^2\) to
\(\mathcal V^*\). The subtraction \(cR_t^*A_t^{-1}R_t\) is a bounded
positive operator of norm \(O(ct^2)\) for real small \(t\). It is even
in \(t\), and the expansion holds in ordinary bounded operator norm.
The min–max principle therefore bounds every retained radial level
between its bare Haar level minus \(Cct^2\) and its bare Haar level,
with one constant for all levels at \(g_1=0\).

By contrast, the score-weighted lower form subtracts part of the
principal radial gradient form. On any compact interior interval
\(I\subset(0,\pi)\) the established class score coefficient is
strictly positive and bounded below. For sufficiently small fixed
nonzero \(t\), \(1-W_\eta\ge c_I t^2\) there at fixed
\(0\le\eta<1\). Take a fixed nonzero cutoff supported in \(I\) times
a sine of increasing integer frequency and normalize in Haar class
\(L^2\). The score-weighted deficit relative to the bare form grows
at least as a positive multiple of \(ct^2\) times frequency squared:
the leading derivative term is obtained by averaging squared cosine
against the smooth measure on the support. Subtracting the mean
does not change the derivative and the norms stay bounded away from
zero. The exact deficit on the same tests stays \(O(ct^2)\).
Thus the true and relaxed eliminations differ in differential order
as well as in the first spectral correction in this fixture.


This result concerns the exact eliminated **retained** radial operator for one finite fixture. Its denominator is the retained Haar class variance, not the fine variance of an optimizing lift. It does not identify the full physical fine gap, a volume-uniform limit, or a continuum spectrum.
