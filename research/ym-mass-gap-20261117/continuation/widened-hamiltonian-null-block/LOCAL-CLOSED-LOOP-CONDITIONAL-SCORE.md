# Closed plaquette holonomy: fixed-holonomy and class-fiber scores

Take two adjacent SU(2) plaquettes sharing a single link \(S\), traversed oppositely. Use the unit quaternion metric \(-\tfrac12\operatorname{tr}(XY)\), Hamiltonian \(H=-c\Delta-g_1w(Z)-g_2w(W)\) with fixed \(c>0\), and normalized trace \(w(U)=\operatorname{Re}U\). Write \(Z=SP\) for the coarse loop, shared link first, and \(W=QS^{-1}\) for the adjacent loop, shared link last/inverted. The three-link complements \(P,Q\) have no common edges. Distinguish conditioning on the **entire** holonomy in a chosen basepoint frame from conditioning on its conjugacy class, a genuinely gauge-invariant variable. The two fibers need not have the same intrinsic inverse.

## Fixed entire holonomy

At \(g_2=0\), the normalized vacuum is a class function of \(Z\) alone: on its pullback the electric Laplacian is \(4\Delta_Z\), so the positive lifted one-group ground solves the full eigen-equation. Therefore the centered score is exactly zero for every \(g_1\), not just zero to first order.

Let \(T_X\) be the normalized horizontal field for a left coarse direction \(X\). The four inverse-prefix lifts sum with factor \(1/2\). Only the \(S\) term acts on \(W\) and \(S\mapsto e^{tX}S\) gives \(W\mapsto W e^{-tX}\), so \(T_X f(W)=-(1/2)r_W^X f\). On functions of \(Z\), \(T_X\) is twice the left coarse vector field. The ambient Haar divergence of every such fixed-label horizontal field is zero, since each inverse-prefix coefficient omits its own link. If \(\rho_c(z)\) is the actual vacuum marginal density relative to coarse Haar, Haar disintegration and integration by parts give the exact normalization identity
\[
 s_X=T_X\log\rho-\mathbb E[T_X\log\rho\mid Z]
     =T_X\log\rho-2\ell_Z^X\log\rho_c(Z),\qquad \rho=\Omega^2.
\]
Unlike the open-path examples, \(\rho_c\) need not be Haar. At Haar the two holonomies \(Z,W\) are independent Haar by conditioning on \(S\) and using the independent exclusive links. First-order perturbation gives \(\log\rho=(g_1 w(Z)+g_2 w(W))/(6c)+O((|g_1|+|g_2|)^2)\), as each trace has ambient electric eigenvalue 12 before \(c\). Thus the \(g_1\) piece is exactly removed at this order by differentiation of the marginal; the \(g_2\) score has zero conditional Haar mean. The leading centered score is
\[
 s_X=-\frac{g_2}{12c}\,r_W^X w(W)+O((|g_1|+|g_2|)^2).
\]

The inverse angular metric correction is computed intrinsically. On functions of \(W\), the ambient electric Laplacian is \(4\Delta_W\). In a basis \(E_j\) of unit Lie directions, the horizontal gradient of \(f(W)\) is \(\sum_j[-r_W^j f/2]T_j\). Its ambient reference-Haar divergence equals \(\Delta_W f/4\), because the fields are divergence-free and \(T_j f(W)=-r_W^j f/2\). Subtracting therefore leaves \((15/4)\Delta_W\). This is the actual conditional Haar Laplacian on these pulled-back functions: ambient integration by parts against any smooth function times a test of \(Z\) and disintegration give the intrinsic integration by parts. Equivalently the induced conditional Haar volume coincides up to normalization with Haar disintegration since the coarse differential has constant normal Jacobian. The span of the score derivative functions thus retains the eigenvalue \(45c/4\) of the physical conditional operator, with Haar norms \(\langle r_W^Xw,r_W^{X'}w\rangle=\langle X,X'\rangle/4\). Hence
\[
 \boxed{ \langle s_X,L_z^{-1}s_{X'}\rangle
 =\frac{g_2^2}{6480c^3}\langle X,X'\rangle
    +O\bigl(g_2^2(|g_1|+g_2^2)\bigr). }
\]
Here and below \(L_z\) includes \(c\); the unscaled-vertical convention multiplies the Gram by \(c\). The error is for fixed \(c\) near zero. At a fixed fiber the ground-state and reduced inverse expansions are analytic by compact elliptic perturbation (after conjugation to reference Haar). A unique noncoarse link can be center-flipped to change \(g_2\) while fixing \(Z\), yielding evenness in \(g_2\); exact zero at \(g_2=0\) then gives the stated error. A center flip changing \(g_1\) changes \(Z\) to \(-Z\), so separate evenness in \(g_1\) at a fixed generic \(Z\) is not claimed.

Gauge transformations conjugate both \(Z\) and its coarse frame, so the full-group score matrix is covariant. A physical coarse observable \(F(Z)\) is a class function and its differential only uses the radial Lie direction for noncentral \(Z\). That does not make conditioning on the full group the same as conditioning on the class.

## Actually conditioning on the conjugacy angle

Write \(Z=\cos\theta+n\sin\theta\), \(|n|=1\), \(0<\theta<\pi\). The ambient gradient obeys \(|\nabla\theta|=2\); the unit radial lift is \(T_\theta=\nabla\theta/2=T_n\). The Haar radial marginal density is proportional to \(\sin^2\theta\). The reference divergence of \(T_\theta\) is \(4\cot\theta\), depending only on \(\theta\), so it cancels the derivative of that reference density in the conditional normalization identity. Explicitly, writing \(\rho_{\rm class}\) for the relative marginal density against Haar class law, integration by parts gives
\[
 \mathbb E[T_\theta\log\rho\mid\theta]=2\,\partial_\theta\log\rho_{\rm class}(\theta).
\]
Thus the first centered score is \(g_2 p/(12c)\), with \(p=n\cdot\operatorname{Im}W\) and \(r_W^n w=-p\). Pure \(g_1\) again contributes exactly zero.

The pair coordinates \((Z,W)\) reduce the ambient electric operator on pulled-back functions to
\[
 \Delta=4\Delta_Z+4\Delta_W-2\sum_j\ell_Z^j r_W^j .
\]
The common link gives \((\ell_Z-r_W)^2\); each exclusive link supplies one pure copy of its group's Laplacian. Let \(\Gamma\) be its gradient pairing and \(t=w(W)\). Then
\[
 \Delta\theta=8\cot\theta,\qquad \Gamma(\theta,\theta)=4,
 \qquad \Gamma(\theta,p)=-t,\quad\Gamma(\theta,t)=p.
\]
Projecting off the class gradient subtracts \(\tfrac14\operatorname{div}[\Gamma(\theta,F)\nabla\theta]\) from the ambient Laplacian on \(F\). This again gives the actual reference conditional operator by disintegrating integration by parts: its vector field is tangent to each level, and the regular angle differential has constant normal Jacobian. To evaluate explicitly, \(\ell_Z^j n=\cot\theta(e_j-n_jn)+e_j\times n\), and \(r_W^j\operatorname{Im}W=t e_j+\operatorname{Im}W\times e_j\). Thus \(\sum_j\ell_Z^j r_W^j p=2t\cot\theta-2p\), while \(\Delta_Zn=-2\csc^2\theta\,n\). At fixed Haar angle, \(p,t\) are orthogonal with squared norms \(1/4\). On their span the genuine unscaled class-fiber positive operator is
\[
 -\Delta_{v,\theta}=
 \begin{pmatrix}
 8\csc^2\theta+31/4 & 2\cot\theta\\
 2\cot\theta & 47/4
 \end{pmatrix}.
\]
The two functions are invariant under simultaneous conjugation of \(Z,W\), and hence are gauge-invariant. A regular class fiber is connected: solve for one coarse path link to parameterize it by the conjugacy sphere and the remaining group links. Since this span is operator invariant and centered, its single mean-zero Poisson solution is also the correct full conditional inverse on the first-order source. The class-fiber physical norm is consequently
\[
 \boxed{\langle s_\theta,L_\theta^{-1}s_\theta\rangle
 =\frac{g_2^2}{576c^3\bigl(63/4+(360/47)\cot^2\theta\bigr)}
       +O\bigl(g_2^2(|g_1|+g_2^2)\bigr).}
\]
In particular at \(\theta=\pi/2\) its leading coefficient is \(1/(9072c^3)\), not the fixed-entire-holonomy radial value \(1/(6480c^3)\). Errors and perturbation statements here are at a fixed regular angle. The endpoints are singular class levels and are not analyzed via this regular-fiber formula.

The exact checks in `verify_closed_loop_coefficients.py` cover the cross-product contraction and the rational class inverse. These are finite small-magnetic interacting-vacuum calculations; neither identifies a volume-uniform conditional or coarse gap, a weak-bare limit, nor a continuum result.
