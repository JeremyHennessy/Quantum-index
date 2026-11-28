# Finite order-zero energy elimination with nonflat marginals

The following is an exact statement about a smooth positive density on a finite-dimensional compact configuration manifold, including an actual finite-volume Wilson vacuum when the coarse variables meet the stated closure conditions. It is not a volume- or spacing-uniform estimate.

## Setting and hypotheses

Let \(\mathcal X\) be a finite product of compact connected Lie groups with fixed bi-invariant product metric, normalized Haar \(\sigma\), and Laplacian \(\Delta\le0\). Write \(\Gamma(f,g)=\nabla f\cdot\nabla g\). Take a coarse map \(\pi\) (or a map followed by a class projection), its Haar marginal \(\nu_0=\pi_\#\sigma\), and a pullback \(JF=F\circ\pi\). Denote the range of the pullback by “retained,” with Haar conditional projection \(P\). Assume:

1. The retained smooth pullbacks form a core for their retained \(H^1\) space. The projection \(P\) is bounded on fine \(H^1\).
2. For smooth retained \(JF,JG\), the two ambient functions \(\Delta JF\) and \(\Gamma(JF,JG)\) are retained. We include in this smooth class the pullback \(m^\uparrow\) of the density described below, and its smooth scalar compositions such as \(\log m^\uparrow\).
3. The fine probability density \(\rho>0\) is smooth on \(\mathcal X\). Its Haar conditional expectation \(m^\uparrow=P\rho\) is a smooth retained function. Write \(\nu=m\nu_0\) for the actual coarse marginal.

For example, for disjoint paths each edge is used once, and pullback of the ambient Laplacian is \(\sum_i b_i\Delta_i\) on the product of coarse groups, where \(b_i\) is the length of path \(i\). The analogous gradient pairing is \(\sum_i b_i\Gamma_i\) and is retained; the horizontal normalization of each path gives this same coarse metric. Product Haar pushes to product Haar. Smooth conditional averaging is seen by solving one fine edge on each path for the path product and integrating the remaining Haar variables. In the single closed-loop example, take the same product map, then restrict to central functions by conjugation averaging. The Laplacian and gradient pairing preserve central functions, and solving an edge followed by the compact average proves smoothness of \(m^\uparrow\), including at singular conjugacy angles as a function on the full group. No regular angle-fiber estimate is needed. In both examples \(P\) is \(H^1\)-bounded: smooth conditional averaging preserves smoothness, and closure of the retained Laplacian makes the retained and complementary gradients orthogonal by Haar integration by parts. Density extends the resulting contraction to \(H^1\). Overlapping paths need not satisfy the closure of the gradient pairing; this theorem does not presume that case.

## Separate the retained density from the conditional factor

Set
\[
 d\mu_*=m^\uparrow d\sigma,\qquad d\mu=\rho d\sigma=q\,d\mu_*,
 \qquad q=\rho/m^\uparrow.
\]
The conditional law of \(\mu_*\) given the coarse variable is the Haar conditional law, because its density is retained; the conditional mean of \(q\) is one. Thus \(P\) is also the orthogonal retained projection in \(L^2(\mu_*)\), and \(J:L^2(\nu)\to L^2(\mu_*)\) is an isometry. Denote the fixed fine discarded form space by
\[
 \mathcal V=H^1(\mathcal X)\cap\ker P,\qquad
 \|k\|_{\mathcal V}=\|\nabla k\|_{L^2(\mu_*)}.
\]
Every \(k\) has \(\mu_*\)-mean zero. Let \(\gamma_*>0\), \(\gamma_\mu>0\) be global mean-zero Poincaré constants of \(\mu_*,\mu\), respectively (energy divided by variance), without any electric prefactor. They can be taken explicitly from the Haar Poincaré bound, without assuming any interacting physical gap. If \(\gamma_{\rm H}\) is the ambient Haar constant and \(\omega d\sigma\) is a smooth positive probability, then
\[
 \operatorname{Var}_{\omega d\sigma}(f)
   =\inf_a\int |f-a|^2\omega\,d\sigma
   \le (\sup\omega)\operatorname{Var}_{\sigma}(f)
   \le\frac{\sup\omega}{\gamma_{\rm H}\inf\omega}
          \int|\nabla f|^2\omega\,d\sigma .
\]
Apply this with \(\omega=m^\uparrow,\rho\). This finite density comparison can be very poor. In particular \(\mathcal V\) is complete in its indicated norm. The weights are bounded above and below, so all fine \(H^1\) spaces have the same functions and comparable norms. In particular the assumed Haar projection bound gives the required \(H^1(\mu_*)\) projection bound; on the example smooth cores one can also apply the same gradient orthogonality with \(\Delta_*\) instead of \(\Delta\) by closure.

Every admissible extension of a retained \(F\) is parametrized by
\[
 f=JF+q^{-1}k,\qquad k\in\mathcal V,
\]
since \(\mathbb E_\mu[q^{-1}k\mid\pi]=P k\). Multiplication by \(q^{\pm1}\) is bounded in fine \(H^1\). Conversely the coarse mean \(\mathbb E_\mu[f\mid\pi]=P(qf)\) of every finite-energy fine function belongs to the retained \(H^1\) domain by its projection bound. Thus this represents the complete finite-energy constrained problem.

Define the fine discarded form map \(A_q:\mathcal V\to\mathcal V^*\) by
\[
 A_q[k,l]=\int q\,\Gamma(q^{-1}k,q^{-1}l)\,d\mu_* .
\]
It is bounded and coercive without a smallness assumption. To see coercivity, write \(h=q^{-1}k\) and \(q_\pm=\max/\min_{\mathcal X}q\) (so \(q_+=\max q,\ q_-=\min q\)). Then \(h\) has \(\mu\)-mean zero, and
\[
 \|\nabla k\|_{L^2(\mu_*)}
 \le q_-^{-1/2}\bigl(q_++\|\nabla q\|_\infty\gamma_\mu^{-1/2}\bigr)
                          A_q[k,k]^{1/2}.
\]
This uses \(\nabla k=q\nabla h+h\nabla q\), norm comparison with \(\mu\) and its Poincaré inequality. Boundedness follows similarly from the product rule for \(q^{-1}k\) and the reference Poincaré inequality. Hence \(A_q^{-1}\) is bounded from the energy dual to the energy space.

## The residual is order zero after the full fine inverse

The bare retained energy is exactly \(c\int\Gamma(JF,JG)d\mu_*\), because the gradient pairing is retained and the conditional mean of \(q\) is one. Here \(c>0\) is the electric coefficient. For smooth \(F\), integration by parts in \(\mu\), followed by substituting \(h=q^{-1}k\), gives as the cross pairing without \(c\)
\[
 \int \Gamma(JF,q^{-1}k)\,d\mu
    = \langle -\Delta_* JF-\Gamma(\log q,JF),k\rangle_{\mu_*},
 \qquad \Delta_*=\Delta+\Gamma(\log m^\uparrow,\cdot).
\]
The first term is retained by both closure hypotheses and therefore pairs to zero. Thus define the residual, as a map into the energy dual, by
\[
 RF(k)=\langle -\Gamma(\log q,JF),k\rangle_{\mu_*}.
\]
It is essential to use the reference weighted divergence, not the unweighted one when \(m\) is nonflat. Integration by parts with \(\mu_*\) transfers the coarse derivative:
\[
 RF(k)=\left\langle JF,\ \Gamma(\log q,k)+(\Delta_*\log q)k\right\rangle_{\mu_*}.
\]
With \(D_1=\|\nabla\log q\|_\infty\) and \(D_2=\|\Delta_*\log q\|_\infty\), this yields
\[
 |RF(k)|\le (D_1+\gamma_*^{-1/2}D_2)\,
                   \|F\|_{L^2(\nu)}\|k\|_{\mathcal V}.
\]
The bound extends by density to all retained \(L^2(\nu)\). The cross-form identity extends on its retained form domain by the assumed core and bounded form approximations.

Minimize the quadratic in \(k\) and polarize. The exact constrained fine energy form is
\[
 \mathfrak e_{\rm elim}(F,G)
 =c\int\Gamma(JF,JG)\,d\mu_*
    -c\langle RF,A_q^{-1}RG\rangle .
\]
In the pairing the first argument is in the energy dual and the second in the energy space. The optimizing discarded variable is \(k=-A_q^{-1}RF\). Consequently the subtraction is a **bounded positive semidefinite operator** on retained \(L^2(\nu)\), not a correction to its principal gradient form. Its operator norm is at most
\[
 c\,q_-^{-1}\bigl(q_++\|\nabla q\|_\infty\gamma_\mu^{-1/2}\bigr)^2
               \bigl(D_1+\gamma_*^{-1/2}D_2\bigr)^2 .
\]
The form, being a bounded correction to the closed retained energy, has the same form domain. Whenever that bare form has compact resolvent, as for the coarse product and single class examples above, the exact eliminated form does too. Every coarse eigenvalue can only decrease and its decrease is bounded by the same norm, by min–max; constants still give zero energy. This is a statement about the retained eigenvalue problem with retained variance denominator, not an equality with the fine spectrum. If \(q=1\) the correction vanishes exactly; near a product lift with \(\log q=O(\epsilon)\) in fine \(C^2\) and bounded other constants it is \(O(c\epsilon^2)\).

No smallness, weak-bare comparison, or vacuum-to-classical Gibbs substitution was used in this finite proof. The explicit constants involve extrema of a conditional density, its full ambient derivatives, and weighted fine Poincaré constants; they can deteriorate with volume, coupling, path geometry, or lattice spacing. Closure itself is a separate hypothesis. Thus the statement neither provides the uniform bounds needed on a continuum trajectory nor establishes a mass gap. They would require new estimates on the actual vacuum law.
