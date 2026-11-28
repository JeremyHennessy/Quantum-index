# The neighbor lowers the score-weighted radial marginal eigenvalue

Use the finite two-adjacent-plaquette SU(2) fixture, unit quaternion electric metric, coarse loop \(Z\), and regular class angle \(\theta\in(0,\pi)\). Write \(t_i=g_i/c\) at a fixed \(c>0\), and let \(m\) be the actual marginal density against \(d\sigma=(2/\pi)\sin^2\theta\,d\theta\). The conditional score uses the unit radial horizontal lift and is centered in the true regular class fiber. Write \(M_\theta=c\langle s,L_\theta^{-1}s\rangle\), where \(L_\theta\) is the physical intrinsic conditional generator, so \(M_\theta\) is the score with its electric coefficient removed from the inverse. For fixed \(0\le\eta<1\) define
\[
 W_\eta=(1+M_\theta/(1-\eta))^{-1}.
\]
Let \(\Lambda_\eta\) be the first positive eigenvalue of the actual weighted radial form \(4c\int W_\eta |F'|^2m\,d\sigma\) on \(L^2(m\,d\sigma)\). This is the weighted marginal piece of the conditional criterion only, not the full fine gap.

Its leading neighboring-plaquette shift near zero is
\[
\boxed{
 \Lambda_\eta(t_1,t_2)-\Lambda_\eta(t_1,0)
 =-\frac{c\,t_2^2}{18\pi(1-\eta)}
    \int_0^\pi\frac{\sin^4\theta}
             {63/4+(360/47)\cot^2\theta}\,d\theta
    +O\bigl(c\,t_2^2(t_1^2+t_2^2)\bigr).
}
\]
The integral is strictly positive and finite. Thus the weighted marginal eigenvalue decreases for sufficiently small nonzero \(t_2\) and small \(t_1\), despite the positive higher-order unweighted shift.

## Uniform form justification at near-singular angles

For each regular angle, use independent coordinates \(n\in S^2\) and the six remaining group links: set \(Z=\cos\theta+n\sin\theta\) and solve for one coarse path link. Relative to product Haar on the full configuration, the conditional class reference probability in these coordinates is exactly normalized sphere area times the six group Haar probabilities. Indeed replacing one link by \(Z\) at fixed others preserves its normalized Haar (left and right multiplication and, if needed, inversion), and conditional Haar on the \(Z\) class has uniform axis \(n\). The induced surface volume is proportional to this reference probability on each regular fiber: the normal Jacobian of \(\theta\) in the ambient product is \(2\), the length of its gradient.

Let \(g_{\rm prod}\) on this coordinate fiber be the sum of the six group metrics and \(\sin^2\theta\,g_{S^2}\). For a tangent vector write \(dZ\) for its coarse velocity and \(v_j\) for the link velocities. Then
\[
 |dZ|^2\le4\sum_{j\in\mathrm{coarse}}|v_j|^2
\]
by the isometries in differentiating the product. Conversely the velocity of the solved link is bounded by \(|dZ|+\sum_{j\in\mathrm{coarse, retained}}|v_j|\). Thus the induced metric lies between \(g_{\rm prod}/5\) and \(5g_{\rm prod}\), uniformly in angle. The inverse metric obeys the same comparison. By the tensor-product probability and the sphere and group gaps 2 and 3 in unit metrics, the reference induced Dirichlet form \(E_{\theta,0}\) controls the squared reference \(L^2\) norm of centered functions by at least \(2/5\) (the sphere part is amplified by \(\sin^{-2}\theta\ge1\)). Tensorization here follows, for example, by expanding in the product eigenfunctions of the round sphere and the independent groups.

The normalized relative density on the fiber is \(q=\rho/m\), \(\rho=\Omega^2\), evaluated on the corresponding configurations. Both \(\rho\) and the full-group marginal pullback \(m\) are smooth and analytic in \((t_1,t_2)\) in sufficiently high fixed compact-group Sobolev norms by the isolated vacuum projection and elliptic regularity. For small parameters \(m\) is bounded away from zero. Hence \(q-1\) has a uniform small \(L^\infty\) bound and norm-convergent power series, uniformly even as angles approach the endpoints. The centered fixed-Haar source is \(b=T_\theta q\): the reference radial divergence \(4\cot\theta\) cancels from the differentiation of the Haar class normalization. Though the axis of \(T_\theta\) is undefined at the endpoints, this field has length one at every regular angle. The ambient first-derivative bounds therefore give a uniformly convergent analytic series for \(b\) in reference \(L^2\) (in fact \(L^\infty\)); its mean in every regular fiber is zero.

Work on the completion of centered functions for the energy norm \(E_{\theta,0}^{1/2}\). The weighted reference form with density \(q\) differs from the reference Riesz operator by relative norm at most \(\|q-1\|_\infty\); its inverse has a convergent Neumann expansion with a common radius. The source is bounded in the dual energy norm uniformly by the \(2/5\) bound. Consequently \(M_\theta=\langle b,\mathcal A_q^{-1}b\rangle\), \(\mathcal A_q=-\operatorname{div}_v(q\nabla_v)\), has its analytic expansion uniformly in \(L^\infty(0,\pi)\). This argument does not define an inverse on the singular endpoint level. It justifies using the regular-fiber Taylor coefficient in the **global** radial form without an unproved endpoint-uniform elliptic-coordinate estimate.

## Weighted eigenvalue and the exact negative coefficient

At \(t_1=0\) the actual class marginal is exactly Haar for all \(t_2\) in the fixture. The established regular-fiber calculation gives
\[
 [t_2^2]M_\theta=
 \frac1{576\bigl(63/4+(360/47)\cot^2\theta\bigr)} .
\]
Since \(M_\theta\) vanishes when \(t_2=0\), the \(t_2^2\) coefficient of \(W_\eta\) is its negative divided by \(1-\eta\). The radial form throughout can be transported to fixed \(L^2(d\sigma)\) by multiplication by \(\sqrt m\); its fixed-domain expression on the central \(H^1\) subspace of the SU(2) sphere, for \(U=\sqrt m F\), is
\[
 4c\int W_\eta\left|U'-\tfrac12(\log m)'U\right|^2\,d\sigma .
\]
The uniform analytic variation of \(W_\eta\) in the relative gradient norm, and of \((\log m)'\) in sup norm, make this an analytic form family with compact resolvent on the common domain. Equivalently, add a strictly positive constant to the reference form and apply a bounded Riesz-operator Neumann expansion followed by the compact form embedding. An isolated simple eigenvalue at zero coupling therefore persists analytically. At zero the first positive level is \(12c\), simple in the radial class sector, with normalized eigenfunction \(u=2\cos\theta\), and the constant mode remains the exact zero level.

At \(t_1=0\), use \(\tau=t_2^2\) (evenness follows from the exclusive-neighbor center flip). Since \(m=1\), the first coefficient is exactly the form derivative in state \(u\):
\[
 [t_2^2]\Lambda_\eta(0,t_2)
  =-\frac{4c}{1-\eta}\int [t_2^2]M_\theta\,|u'|^2\,d\sigma
  =-\frac{c}{18\pi(1-\eta)}
                \int_0^\pi\frac{\sin^4\theta}{63/4+(360/47)\cot^2\theta}\,d\theta .
\]
The square \(|u'|^2=4\sin^2\theta\) and normalized Haar sine-squared factor give the displayed normalization. The integral has a nonnegative integrand, strictly positive in the open interval. For an optional closed form, set \(a=63/4\), \(b=360/47\), \(d=a-b>0\). The integral divided by \(\pi\) is
\[
 \frac{3}{8d}-\frac{b}{2d^2}+\frac{b^2}{d^3}
                 -\frac{b^3}{d^3\sqrt{ab}} .
\]
This follows by polynomial division of \(s^3/(b+ds)\), \(s=\sin^2\theta\), and the elementary integral \(\int_0^\pi(b+d\sin^2\theta)^{-1}d\theta=\pi/\sqrt{ab}\). The shift coefficient without \(-c/(1-\eta)\) is about \(0.00118717\); the positive integral is the exact characterization.

A center flip of an exclusive coarse link exchanges \(\theta\) and \(\pi-\theta\) while changing the sign of \(t_1\). It preserves the score norm (the radial direction may reverse, but the pairing is quadratic), the induced fiber form and Haar probability. Hence the weighted radial eigenvalue is even in \(t_1\) as well as \(t_2\). Subtracting the exact \(t_2=0\) curve gives the stated remainder at fixed \(c,\eta\). In physical couplings, the leading decrease is proportional to \(g_2^2/c\), while the positive bare marginal shift appears only at \(g_1^2g_2^2/c^3\). None of this gives a uniform result as \(\eta\to1\), a many-plaquette conditional estimate, a matched weak-bare limit, or a continuum gap.
