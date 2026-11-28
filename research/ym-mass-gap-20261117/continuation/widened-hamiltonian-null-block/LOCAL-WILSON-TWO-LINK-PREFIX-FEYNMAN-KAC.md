# Actual Wilson vacuum: a uniform one-prefix conditional comparison

Let \(G=SU(2)\) have its unit-quaternion round metric, \(-\Delta_G\) consequently having first positive eigenvalue 3. On a finite spatial lattice with free edge variables let
\[
H=c_{\rm el}(-\Delta + tV),\qquad
\Delta=\sum_e\Delta_e,\qquad V=-\sum_p \tfrac12\operatorname{Re}\operatorname{Tr} U_p .
\]
Counting each term in the magnetic action with its multiplicity, assume the ordinary nearest-plaquette geometry, so that an edge belongs to at most four plaquettes in three spatial dimensions. All results below use the dimensionless heat time of \(H/c_{\rm el}\). This is the exact Hamiltonian ground-state distribution, not a postulated three-dimensional Wilson Gibbs density.

## A finite-coordinate Feynman–Kac lemma

Write coordinates as \((x,y)\), with \(x\) consisting of \(k\) chosen edge variables and \(y\) all other variables. Compare starting configurations \((x,y)\) and \((x',y)\) with the same \(y\). Split \(tV=V_{\rm rest}(y)+V_{\rm inc}(x,y)\) by whether a plaquette includes any chosen link. With \(m\) incident terms, the global range of \(V_{\rm inc}\) is at most \(2m|t|\). More generally the following proof works with any bounded local potential of global range \(D\) and any bounded \(V_{\rm rest}\) depending only on \(y\).

Let \(\Omega>0\) be the normalized ground state of \(H/c_{\rm el}\) at eigenvalue \(E_0\). The compact connected configuration space, bounded smooth potential and strictly positive heat semigroup kernel give an everywhere positive smooth eigenfunction, unique up to normalization. Residual lattice gauge transformations act by left/right isometries on the links, preserve Wilson traces, and preserve the normalized positive eigenfunction by simplicity. Thus it also gives the physical gauge-invariant vacuum.

For each \(s>0\), Feynman–Kac writes \(e^{-sE_0}\Omega(x,y)\) as the expectation of \(\Omega(X_s,Y_s)\exp[-\int_0^s(V_{\rm rest}(Y_\tau)+V_{\rm inc}(X_\tau,Y_\tau))d\tau]\). Brownian motions on the \(x\) and \(y\) factors are independent, with generators \(\sum_{i=1}^k\Delta_i\) and the other coordinate Laplacians. With \(p_s\) the one-link heat kernel relative to normalized Haar and \(R_s=\sup_{u,u',v}p_s(u,v)/p_s(u',v)\), the expression without \(V_{\rm inc}\) is
\[
 {\cal I}_s(x,y)=
 \mathbb E_y\left[
 e^{-\int_0^s V_{\rm rest}(Y_\tau)d\tau}
 \int \prod_{i=1}^k p_s(x_i,a_i)\,
 \Omega(a,Y_s)\, da\right].
\]
Each integral and expectation is positive; the same weighted rest-path law is used at both \(x,x'\), however extensive \(V_{\rm rest}\) is. Bounding the omitted factor between constants and comparing the \(k\) endpoint heat kernels yields
\[
 \left|\log\Omega(x,y)-\log\Omega(x',y)\right|
 \le sD+k\log R_s.
 \tag{1}
\]
This does not assert that the original coupled path weights cancel. They are bounded, and only the identical rest term remains in the comparison. In particular there is no volume factor or conditioning on a single physical gauge representative hidden in (1).

## Explicit one-link heat bound

For \(p_s(\cdot,v)\), Li–Yau's heat Harnack inequality on a compact nonnegative-Ricci manifold ([Theorem 2.3, \(K=0,\ \alpha\downarrow1\)](https://doi.org/10.1007/BF02399203)) gives
\[
 \max_u p_{s/2}(u,v)
 \le 2^{3/2}\exp\{\pi^2/(2s)\}\,p_s(u',v).
\]
Here the generator is \(\Delta\) rather than \(\Delta/2\), and the round diameter is \(\pi\). By the Markov semigroup law \(\max_u p_s(u,v)\le\max_u p_{s/2}(u,v)\). In particular
\[
 \log R_s\le \tfrac32\log 2+\frac{\pi^2}{2s}.
 \tag{2}
\]
An optional large-time estimate removes the additive constant near \(t=0\). The normalized \(S^3\) heat kernel has the expansion
\(p_s(u,v)=\sum_{n\ge0}(n+1)e^{-n(n+2)s}\chi_n(u^{-1}v)\) with \(|\chi_n|\le n+1\). For \(s\ge1\), \(|p_s-1|\le 5e^{-3s}<1/4\): after pulling out \(e^{-3s}\), the \(n=1\) bound is 4 and successive bounds have ratio at most \((3/2)^2e^{-5}<1/5\), a strict geometric majorant. Hence
\[
 \log R_s\le \log\frac{1+5e^{-3s}}{1-5e^{-3s}}
 \le (40/3)e^{-3s},\qquad s\ge1.
 \tag{3}
\]

## Disintegration at one prefix

For a path with distinct fine links, let \(V_i=U_1\cdots U_i\), with endpoints \(V_0=1,\ V_b=z\). Fix \(z\), all other prefixes and nonpath links. Changing an interior prefix \(V_j\) changes exactly \(U_j=V_{j-1}^{-1}V_j\) and \(U_{j+1}=V_j^{-1}V_{j+1}\). Reversed geometrical edge orientations simply invert edge variables, an isometry preserving Haar. The triangular product change of variables shows that reference conditional Haar for \(V_j\) is Haar on \(G\). For the vacuum \(\Omega^2d{\rm Haar}\), the normalized conditional density is \(q_j(V_j)=\Omega^2/\int_G\Omega^2\,dV_j\) at these fixed values. The normalizing factor is the same for both points. The estimate, initially direct for all configurations by smooth positivity, therefore applies to the usual disintegration with no exceptional fixed environment needed for this chosen version.

Using \(k=2\), \(D\le2m|t|\), \(m\le8\), (1)–(2) give
\[
 \operatorname{osc}\log q_j
 \le 4m|t|s+6\log 2+\frac{2\pi^2}{s},\qquad
 \operatorname{osc}\log q_j
 \le 6\log 2+4\pi\sqrt{2m|t|}.
 \tag{4}
\]
The optimizer for \(m|t|>0\) is \(s=\pi/\sqrt{2m|t|}\). If \(m|t|=0\), letting \(s\to\infty\) in (1)–(3) shows zero oscillation. For \(0<|t|\le1\), (3) at \(s=1+\frac13\log(1/|t|)\) also yields
\[
 \operatorname{osc}\log q_j
 \le
 4m|t|\left(1+\tfrac13\log(1/|t|)\right)
 +\frac{160}{3}e^{-3}|t|.
 \tag{5}
\]
This implies a single \(C\sqrt{|t|}\) upper bound for all \(t\), with \(C\) independent of volume, \(b,j,z\) and the fixed environment. For large \(|t|\), (4) with \(m\le8\) gives the explicit \(6\log 2+16\pi\sqrt{|t|}\).

The induced metric on this one-coordinate submanifold is twice the round metric: the two varying links have equal tangent speed and all others have zero speed. With \(\nabla_{\rm slice}\) the intrinsic gradient for that metric, the usual comparison of variance by \(\sup q_j\) and gradient form by \(\inf q_j\) gives
\[
 \frac32 e^{-\operatorname{osc}\log q_j}
   \operatorname{Var}_{q_j}(f)
 \le \int |\nabla_{\rm slice}f|^2 q_j\,d{\rm Haar}.
 \tag{6}
\]
This uses the Haar gap \(3/2\) for a doubled round metric, not an identification of the one-site term in a decomposition of the multi-prefix intrinsic energy. The reference one-site measure and proof also apply on edge-disjoint systems of paths when all other prefixes are fixed.

**Scope.** Equations (4)–(6) control one prefix under arbitrarily fixed other prefixes for the actual finite-volume Wilson vacuum. They do not imply joint approximate tensorization, weakness of the inter-prefix influence, a block Poincaré inequality, or an interacting continuum gap. Chaining pointwise bounds would generally incur a path-length factor. Even for a single prefix, the lower bound (6) furnished by this comparison alone does not establish a positive physical floor on the logarithmic weak-bare trajectory; no matching vacuum oscillation or upper gap estimate is claimed.
