# A nonconstant quadratic term obstructs scalar-centered cubic scaling

Take the four-endpoint, two-fast-path graph with exclusive pairs \(U_1,U_3:b\to c_0\) and \(U_2,U_4:d\to a\), and fast paths \(S_1:a\to b,\ S_2:c_0\to d\) of length \(r\). All paths have disjoint interiors; the positive exclusive lengths remain fixed. The two active words are
\[
 f=\operatorname{Re}(S_1U_1S_2U_2),\qquad
 g=\operatorname{Re}(S_1U_3S_2U_4).
\]
They have the same fast tag, \(\{1,2\}\). In dimensionless energy, set \(V=-\kappa_1 f-\kappa_2 g\), take \(H_r=rK+L+r^{2/3}V\), and write
\[
 \alpha=(\kappa_1^2+\kappa_2^2)/24,\qquad
 \delta=\kappa_1\kappa_2/12 .
\]
Assume \(\delta\ne0\); if one coupling vanishes the nonconstant obstruction here is absent. Physical energies multiply the dimensionless ones by the fixed electric coefficient \(c>0\).

Let \(E_j(r)\) be a fixed-ranked physical eigenvalue, starting at \(j=0\) for the ground. The result is
\[
 \boxed{\qquad
 E_j(r)/c=-r^{1/3}(\alpha+|\delta|)+\Theta_j(r^{1/6}) .
 \qquad}
\]
Thus centering only by the mean scalar \(c r^{1/3}\alpha\) sends all these eigenvalues to \(-\infty\). Even centering by the maximum quadratic lowering \(c r^{1/3}(\alpha+|\delta|)\) leaves a positive diverging scale \(r^{1/6}\); there is no bounded order-one residual for these fixed ranks. This is an obstruction for this fixed graph skeleton, not a claim about a continuum trajectory.

## Shifted exact Schur comparison

After fixing internal path gauges, the physical fast Haar kernel is the product of the two exclusive class loops \(X=U_1^{-1}U_3\), \(Y=U_2^{-1}U_4\), with independent product Haar class law. Write \(x=\operatorname{Re}X,\ y=\operatorname{Re}Y\), and \(m_x=u_1+u_3,\ m_y=u_2+u_4\) for their kinetic weights. The bare slow operator is \(L_P=m_x(-\Delta_{{\rm class},X})+m_y(-\Delta_{{\rm class},Y})\). The two fast path products are independent Haar; \(K_Q\ge3\) on the complement of their averaged kernel, and \(K,L\) commute. These reductions respect the original independent endpoint gauges, so the physical spectrum is that of this gauge-fixed graph, not a nonphysical restriction.

Let \(\beta=r^{2/3}\), \(B_0=r^{1/3}\), and compare the physical dimensionless eigenvalues at \(z=-B_0(\alpha+|\delta|)+\zeta\), with \(|\zeta|=O(B_0)\). The fast block is \(D=A+C_z\), \(A=rK_Q+L_Q\), \(C_z=\beta QVQ-z\). Both inverses have norms \(O(r^{-1})\), since \(A\ge3r\) and \(\|C_z\|=O(\beta)\); \(D>0\) for real \(z\) at large \(r\). Expanding the bounded perturbation exactly,
\[
 D^{-1}=A^{-1}-A^{-1}C_zA^{-1}
                   +A^{-1}C_zD^{-1}C_zA^{-1}.
\]
After sandwiching with \(\beta PVQ\) and its counterpart, the last term is \(O(r^{-1/3})\) in norm. The part of the middle term containing \(z\) has norm at most \(C\beta^2|z|/r^2=O(r^{-1/3})\). The part cubic in \(V\) vanishes **exactly** even with \(A^{-1}\): either one of the two fast centers maps \(V\) to \(-V\), but commutes with \(A^{-1},P,Q\), so the three factors are odd. This is the same-tag parity obstruction, not an estimate of a cubic term.

For the leading correction compare \(A^{-1}\) to \((rK_Q)^{-1}\) as forms. Commuting spectral calculus gives \(0\le (rK_Q)^{-1}-A^{-1}\le L_Q/(9r^2)\); the fixed smooth multipliers obey \(\|L_Q^{1/2}VPF\|\le C\|(L_P+1)^{1/2}F\|\). Thus the comparison costs at most \(C r^{-2/3}(L_P+1)\) as a relative slow form. The equal-tag Haar covariance for the two words is \(xy/4\), each self-covariance is \(1/4\), and their common fast eigenvalue is 6. Therefore the exact leading fast replacement is
\[
 -\beta^2 PV(rK_Q)^{-1}VP
      =-B_0(\alpha+\delta xy).
\]
Combining it with the scalar center in \(z\), the Schur form becomes
\[
 S_r(z)=F_r-\zeta+\mathcal E_r,\quad
 F_r=L_P+B_0U,\quad U=|\delta|-\delta xy\ge0,\qquad
 |\mathcal E_r[\psi]|
 \le C r^{-2/3}\langle\psi,L_P\psi\rangle
           +C r^{-1/3}\|\psi\|^2 .
\]
This bound holds uniformly in the stated \(O(B_0)\) window. In particular \((1-Cr^{-2/3})F_r-\zeta-Cr^{-1/3}\le S_r(z)\le (1+Cr^{-2/3})F_r-\zeta+Cr^{-1/3}\) as forms, since \(U\ge0\).

## The physical slow endpoint wells have scale \(B_0^{1/2}\)

Write \(x=\cos\theta\), \(y=\cos\varphi\) on \(0\le\theta,\varphi\le\pi\). By reflecting \(\varphi\) if needed we may take \(\delta>0\) in this form. The physical slow marginal is product Haar class, and multiplication by a normalized \(\sin\theta\sin\varphi\) identifies its \(L^2\) with flat \(L^2((0,\pi)^2)\). The bare kinetic transforms to
\[
 -m_x\partial_\theta^2-m_y\partial_\varphi^2-(m_x+m_y)
\]
with the usual Dirichlet form domain. This is the induced class boundary behavior, not an external boundary assumption: the class characters become the sine eigenbasis under the transform, yielding precisely the flat Dirichlet \(H^1_0\) form domain. The potential has zeros only at \((0,0),(\pi,\pi)\) after reflection; these are Haar-null. On this square,
\[
 U\ge |\delta|(1-|\cos\theta||\cos\varphi|)
    \ge\frac{|\delta|}{\pi^2}
        \bigl(d(\theta,\{0,\pi\})^2+d(\varphi,\{0,\pi\})^2\bigr).
\]
For the second inequality, \(1-ab\ge[(1-a)+(1-b)]/2\) for \(0\le a,b\le1\), and \(1-\cos s\ge 2s^2/\pi^2\) for \(0\le s\le\pi/2\).

Set \(\ell=B_0^{-1/4}\). A flat Dirichlet function \(u\) on \((0,\pi)\) satisfies \(\int_0^\ell|u|^2\le(\ell^2/2)\int_0^\ell|u'|^2\) by its zero trace and Cauchy--Schwarz, and the same at the opposite endpoint. In the middle region \(d(\theta,\{0,\pi\})\ge\ell\), so its squared norm is at most \( (B_0\ell^2)^{-1}\int B_0 d(\theta,\{0,\pi\})^2|u|^2\). Thus the positive kinetic-plus-quadratic-well form is bounded below by a positive multiple of \(B_0^{1/2}\|u\|^2\). Apply this on one coordinate of the two-dimensional Dirichlet form using the potential lower bound; subtracting the fixed kinetic constant leaves \(F_r\ge a B_0^{1/2}-C\) for some \(a>0\). In particular every slow eigenvalue diverges positively after centering at the well bottoms.

For the matching upper bound at each fixed rank, take the needed finite number of disjoint smooth normalized Dirichlet bumps in a neighborhood of \((0,0)\) of size \(O_j(\ell)\), with supports strictly inside the open angular domain at that scale. They lie in the actual class form domain by the sine transform, or by dividing on their compactly supported interiors. Their kinetic energies are \(O_j(\ell^{-2})\), and the local quadratic upper bound \(U=O(\theta^2+\varphi^2)\) gives potential \(O_j(B_0\ell^2)\); disjoint supports keep the same bound for the entire trial span. Min–max then gives every fixed ranked eigenvalue of \(F_r\) at most \(C_j B_0^{1/2}\), completing the two-sided order estimate.

## Transfer and limits

For real shifted thresholds in this range, completing the positive \(Q\)-block square identifies the actual count of physical eigenvalues below \(z\) with the negative index of \(S_r(z)\). The form brackets above compare this count with that of \(F_r\), whose fixed ranks are \(O(B_0^{1/2})\). The error in the associated eigenvalues is at most \(O_j(r^{-2/3}B_0^{1/2}+r^{-1/3})=O_j(r^{-1/3})\); the shifted test thresholds are inside the proved \(O(B_0)\) window. A fixed threshold such as \(\zeta=0\) has positive Schur form for large \(r\), ruling out additional lower eigenvalues. This proves the displayed leading depth and positive diverging residual of the *actual* fixed low physical ranks.

A common energy shift cancels from excitation differences; no conclusion about differences between the localized low levels or tunneling splittings is claimed here. The explicit arithmetic replay checks the scale exponents and center parity. This example obstructs generalizing a scalar-centered cubic-scale limit to words with nonconstant equal-tag quadratic terms. It is not a many-plaquette or continuum result.
