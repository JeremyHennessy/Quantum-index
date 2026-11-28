# Intrinsic conditional inverse score in the free-link one-plaquette fixture

Fix a finite SU(2) configuration space with normalized product Haar and the bi-invariant metric induced by \(-\tfrac12\operatorname{tr}(XY)\). The Hamiltonian is \(H=-c\sum_e\Delta_e+V\), \(c>0\). Only a single plaquette is in the potential, \(V=-g w(W)\), \(w(W)=\tfrac12\operatorname{Re}\operatorname{tr}W\); a constant addition to \(V\) is immaterial. Its last oriented link in the plaquette product is \(U_2\), traversed positively, so \(W=G U_2\). The first path link \(U_1\) is outside the plaquette and free; the blocked link is \(Z=U_1U_2\). Other unused links, if present, are free. This is a finite interacting test, not a bound for a many-plaquette vacuum.

## Exact conditional measure and metric

The unique positive ground state is independent of the free links, by factorization and the constant free-link ground mode. In the plaquette variables, gauge invariance implies it is a central function \(\psi_g(W)\): a spanning tree gauge fixes three plaquette links, leaving the holonomy at the base vertex, transformed by conjugation. Product Haar pushes forward to Haar for \(W\), so \(\psi_g\) is normalized against single-group Haar. Equivalently, because each of the four plaquette links acts by a fixed left/right multiplication or inversion on \(W\) when the others are fixed, the reduced Schrödinger equation is
\[
 H_W\psi_g=E_g\psi_g,\qquad H_W=-4c\Delta_W-gw(W).
\]
Positive uniqueness also gives the same central ground state directly on the group.

Changing variables \((U_1,U_2)\mapsto (Z,U_2)\) preserves product Haar by right invariance in \(U_1\) at fixed \(U_2\). Thus \(Z\) is Haar and independent of all the remaining links in the vacuum law, and the conditional density at every \(z\) is \(\rho_z=\psi_g(W)^2\) relative to the unchanged independent link Haar factors in \((U_2,\mathrm{rest})\). That reference product density is also the intrinsic surface volume up to a constant: the fixed-product fiber embeds as
\[
 (U_2,\mathrm{rest})\longmapsto(zU_2^{-1},U_2,\mathrm{rest}).
\]
The map \(U_2\mapsto zU_2^{-1}\) is an isometry of the bi-invariant group metric. Therefore on that component the **induced metric doubles**, and its inverse in the Dirichlet form is exactly \(1/2\). There is no cross term with other links. With no electric coefficient included in the vertical generator, the actual conditional form is
\[
 \mathcal E_z(f)=\int\left(\tfrac12|\nabla_2 f|^2+
                   \sum_{e\ne1,2}|\nabla_e f|^2\right)\rho_z\,d\mathrm{Haar}.
\]
Its generator is \(L_z=\tfrac12\mathcal L_2+\sum_{e\ne1,2}\mathcal L_e\), with \(\mathcal L_e=-\Delta_e-\nabla_e\log\rho_z\cdot\nabla_e\). The full active unscaled generator on the same link variables is \(\mathcal L_{\rm act}=\sum_{e\ne1}\mathcal L_e\), including any spectator free links. Direct form comparison yields \(\tfrac12\mathcal L_{\rm act}\le L_z\le\mathcal L_{\rm act}\), hence inverse comparisons in the opposite order on centered functions. For the score below the factor is exact, not just between 1 and 2.

## Exact score subspace and inverse ratio

For a fixed coarse Lie direction \(X\), the unit horizontal lift is \((\ell_1^X+\ell_2^{\operatorname{Ad}_{U_1^{-1}}X})/\sqrt2\), using \(\operatorname{Ad}_g X=gXg^{-1}\). The first term annihilates the density. At \(Z=z\), the second becomes a right derivative in \(U_2\) with constant label \(Y=\operatorname{Ad}_{z^{-1}}X\); since \(U_2\) is last in \(W\), it is also the right derivative \(r_W^Y\). Thus the score in this fiber is
\[
 s_X(z;W)=2^{-1/2}r_W^Y\log\psi_g(W)^2.
\]
It is already centered: integrate \(r_W^Y\psi_g^2\) against Haar. This uses the actual conditional law, not a bare plaquette Gibbs density.

Let \(\mathcal L_W=-\Delta_W-\nabla_W\log\psi_g^2\cdot\nabla_W\). For every smooth function \(f(W)\), not only class functions, each plaquette link's unit \(\mathcal L_e\) action on its pullback is exactly \(\mathcal L_W f\): the map from that link to \(W\) at fixed other links is an isometry, and transports the density gradient as well. Free spectator terms vanish. Consequently on the pulled-back holonomy subspace \(L_z\) acts as \((7/2)\mathcal L_W\), whereas \(\mathcal L_{\rm act}\) acts as \(4\mathcal L_W\). The same holds for their inverses on the centered holonomy subspace, since solving the single-group Poisson equation gives a pulled-back solution of the full equation, unique modulo constants on the connected configuration space. Therefore the intrinsic inverse-score matrix obeys the exact identity
\[
 \left\langle s_X,L_z^{-1}s_{X'}\right\rangle
 =\frac87\left\langle s_X,\mathcal L_{\rm act}^{-1}s_{X'}\right\rangle .
\]
If comparing the vertical generator without \(c\) to the physical full active generator \(c\mathcal L_{\rm act}\), the ratio is \(8c/7\); if both include \(c\), it is again \(8/7\). Conjugation symmetry of \(\psi_g^2\), the group metric and \(\mathcal L_W\) makes the score matrix a scalar times \(\langle X,X'\rangle\). The label rotation by \(z\) preserves that pairing, so the scalar is independent of the coarse coordinate.

There is an exact conditional source form in this fixture only. The constant right-link Killing identity for the physical active generator gives \(c\mathcal L_{\rm act}s_X=-\sqrt2\,r_W^Y V\). Using the exact proportionality on this subspace yields
\[
 L_z s_X=-\frac{7\sqrt2}{8c}\, r_W^Y V
         =\frac{7\sqrt2 g}{8c}\,r_W^Y w .
\]
This is not obtained by conditioning a global PDE and discarding horizontal derivatives; it holds by the explicit conditional metric and holonomy reduction.

## Controlled leading small-coupling norm

At \(g=0\) the normalized ground state is 1, \(-\Delta_W w=3w\), and \(\int w\,d\mathrm{Haar}=0\). Differentiating the simple isolated ground eigenproblem yields
\[
 \psi_g=1+\frac{g}{12c}w+O(g^2).
\]
For a unit \(Y\), \(r_W^Y w\) is (up to sign) one imaginary coordinate of the unit quaternion \(W\), with Haar squared norm \(1/4\), and is likewise a Laplacian eigenfunction with eigenvalue 3. At \(g=0\) its conditional holonomy eigenvalue is \(21/2\); for the unscaled active generator it is 12. Hence for each unit \(X\)
\[
 \boxed{\langle s_X,L_z^{-1}s_X\rangle
 = \frac{g^2}{3024c^2}+O(g^4).}
\]
The factor is \(2/(12^2\cdot4\cdot(21/2))=1/3024\); the same full-active unscaled value is \(g^2/(3456c^2)+O(g^4)\), in the required ratio. In the physical conditional generator convention $cL_z$, the inverse norm is divided by $c$, giving $g^2/(3024c^3)+O(g^4)$ for fixed $c$. In the project convention \(c=1/2\), the leading coefficient for the unscaled vertical generator is \(1/756\).

For the remainder, one need not differentiate operators on moving weighted spaces. Multiplication by \(\psi_g\) takes \(\mathcal L_W\) to \((H_W-E_g)/(4c)\) on fixed Haar \(L^2\), and maps the score to \(\sqrt2\,r_W^Y\psi_g\) orthogonal to \(\psi_g\). The relevant reduced inverse is \((H_W-E_g+P_g)^{-1}-P_g\), where \(P_g\) is the rank-one ground projector. Near zero real \(g\) the normalized positive eigenfunction and projector are analytic, also in the fixed Laplacian graph norm for the eigenfunction: the uniformly isolated Riesz contour and bounded multiplication perturbation give a convergent Neumann scheme from \(L^2\) into that domain. The reduced inverse is analytic in operator norm by the same bounded perturbation inverse argument, and \(r_W^Y\) is bounded from this graph domain to \(L^2\). Thus the scalar inverse norm is analytic. The center map \(W\mapsto-W\) changes \(g\) to \(-g\) and commutes with the right derivative, so that scalar is even; its error after the quadratic coefficient is \(O(g^4)\) for fixed \(c>0\). The coefficient and remainder concern this one plaquette only.

The calculation provides a bona fide conditional norm for the exact vacuum in this fixture, including the induced metric. It invokes neither an assumed physical-sector global gap nor a replacement of the conditional generator by the global one. It gives no volume-uniform, weak-bare, or continuum bound for the Wilson vacuum.
