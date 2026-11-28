# Wilson prefix drift, physical spectator form, and local vacuum derivative bounds

Use \(G=SU(2)\) with unit-quaternion round metric, and dimensionless Hamiltonian
\[
 {\cal H}=-\sum_e\Delta_e+tV,\qquad V=-\sum_p w_p,\quad
 w_p=\tfrac12\operatorname{Re}\operatorname{Tr}(U_p).
\]
Multiply gaps by \(c_{\rm el}\) for the physical units of this finite spatial lattice. The exact positive ground state \(\Omega\) of this finite operator is smooth, simple and invariant under all allowed lattice vertex gauges (positive heat kernel and gauge equivariance). Write \(\rho=\Omega^2\). Use a path of \(b\ge2\) distinct edges and distinct interior vertices, with every interior gauge allowed, as in the preceding gauge-flattening note. Endpoints may coincide for a simple closed path. The chosen product is \(z=V_b\); \(V_j=U_1\cdots U_j\) are its interior prefixes and \(W\) are the other fine links. Let \(D_b\) be the \((b-1)\times(b-1)\) matrix with diagonal 2 and nearest off-diagonal \(-1\), and \(G_b=D_b^{-1}\).

## Exact raw conditional operator and drift

Fix all \(W\) and \(z\); the raw slice intrinsic metric is \(D_b\) in the left-velocity frames of the prefixes (velocity \(\dot V_i V_i^{-1}\)). Denote by \(X_i^a\) the derivative of \(V_i\mapsto e^{sE_a}V_i\) for an orthonormal Lie basis \(E_a\). In these frames the raw sliced Dirichlet form, after conditioning \(\rho\) and dropping \(c_{\rm el}\), is
\[
 {\cal E}_{z,W}(f)
 =\int q \sum_{i,j,a}(G_b)_{ij}\overline{X_i^a f}X_j^a f\,dV,\qquad
 q=\frac{\rho(V,z,W)}{\int\rho(V,z,W)dV}.
\]
The metric determinant is constant relative to product Haar and each \(X_i^a\) is Haar divergence-free. Thus the positive operator on smooth functions is exactly
\[
 {\cal L}_{z,W}f=-\sum_{i,j,a}(G_b)_{ij}
   \left[X_i^a X_j^a f+(X_i^a\log q)X_j^a f\right].
 \tag{1}
\]
For a prefix gauge change take \(g_{v_i}=V_i\) at interiors, and identity elsewhere. It sends the path to \((1,\ldots,1,z)\) and sends spectators to \(\widetilde W_e=g_{s(e)}W_e g_{t(e)}^{-1}\). Put \(\rho_z(\widetilde W)=\rho(1,\ldots,1,z;\widetilde W)\). Let \(J_i^a\) act on \(\widetilde W\) by infinitesimal spectator gauge at the *flattened* \(v_i\): multiply links starting at \(v_i\) on the left by \(e^{sE_a}\) and links ending there on the right by \(e^{-sE_a}\), both when appropriate. Then the actual conditional potential and drift are
\[
 -\log q=-\log\rho_z(\widetilde W)+\text{constant},\qquad
 X_i^a\log q=(J_i^a\log\rho_z)(\widetilde W).
 \tag{2}
\]
This derivative is not generally zero: \(J_i^a\) acts only on spectators, whereas a full gauge change would also move the flattened path. At fixed \(W\), the spectator orbit map can move genuine physical data relative to the held path product.

## Exact physical form when spectators are unfrozen

Now fix only \(z\) in the reference group-valued coordinate, with spectators allowed to vary and no extra retained variables. Its intrinsic metric in raw coordinates is \(D_b\oplus I_W\) in the prefix and other-link orthonormal frames. Work with physical functions invariant under the subgroup of all interior path gauges (further residual gauge constraints can be imposed). They are exactly \(f(V,W)=F(\widetilde W)\) for that subgroup, by gauge flattening. Conditional law in the dressed coordinates is
\[
 dV\,d\nu_z(\widetilde W),\qquad
 d\nu_z=\rho_z\,d\widetilde W/\int\rho_z\,d\widetilde W,
\]
by the Haar Jacobian and invariance. For fixed \(V\), raw \(W\mapsto\widetilde W\) is an edgewise isometry, and for fixed raw \(W\), \(X_i^af=J_i^aF\). Therefore the true intrinsic physical conditional form is exactly
\[
 {\cal E}^{\rm phys}_z(F)=
 \int\left[|\nabla_{\widetilde W}F|^2+
       \sum_{i,j,a}(G_b)_{ij}\overline{J_i^aF}J_j^aF\right]\,d\nu_z,
 \qquad
 \operatorname{Var}_{\mu(\cdot\mid z)}(f)=\operatorname{Var}_{\nu_z}(F).
 \tag{3}
\]
The added term is nonnegative. A product-metric Poincaré estimate for \(\nu_z\) would transfer directly to this particular physical conditional form, with at least the same constant. This comparison does **not** assert that \(\nu_z\) is Haar or that it has a uniform gap.

In contrast, fixing \(\widetilde W\) as well as \(z\) and moving \(V\) is literally moving on a gauge orbit, since all such points flatten to precisely the same configuration. Physical functions are constant on this dressed-prefix slice. The exact Haar prefix law there therefore controls no nonconstant physical fluctuation, and its slice metric also includes spectator motion rather than holding the raw spectator links fixed. Haar law cannot substitute for the nontrivial \(\nu_z\) problem in (3). Equations (1) and (3) are different conditionings, not equivalent quotient definitions.

## Actual vacuum derivative bound: partial Bochner

Write \(u=\log\Omega\), so the ground-state equation gives
\[
 \Delta u+|\nabla u|^2=tV-E_0.
\]
For each fine edge \(e\) let \(h_e=|\nabla_e u|^2\), where the latter gradient is the component in the \(e\)-factor of the round product. On this Riemannian product the factor tangent projections are parallel. The partial Bochner equation is
\[
 \tfrac12(\Delta+2\nabla u\cdot\nabla)h_e
 =|\nabla(\nabla_e u)|^2+2h_e+
   t\,\langle\nabla_e u,\nabla_e V\rangle .
 \tag{4}
\]
Indeed the product Ricci endomorphism is \(2I\) in each factor, and symmetry of the Hessian gives
\(\langle\nabla_e u,\nabla_e|\nabla u|^2\rangle=\nabla u\cdot\nabla h_e\).
Apply the maximum principle on the compact full configuration product. If the maximum is nonzero, divide the inequality at the maximum by its square root to obtain
\[
 \|\nabla_e\log\rho\|_\infty
 =2\|\nabla_e u\|_\infty\le |t|\,\|\nabla_e V\|_\infty.
 \tag{5}
\]
The same holds trivially if the maximum is zero. For ordinary three-dimensional nearest plaquettes, each fine link belongs to at most four plaquette terms, and each normalized trace term is 1-Lipschitz in that link (left/right translations and inversion are isometric, and the real quaternion coordinate is 1-Lipschitz). Thus \(\|\nabla_e\log\rho\|_\infty\le4|t|\), uniformly in volume. One prefix moves precisely two adjacent fine links at equal unit speed when measured in its single round coordinate, so its \(\log q\) gradient is bounded by \(8|t|\) and its conditional log oscillation by
\[
 \operatorname{osc}_{V_i}\log q\le 8\pi |t|.
 \tag{6}
\]
Combined with the previously proved Feynman–Kac bound, one can use the minimum of \(8\pi|t|\) and \(6\log2+16\pi\sqrt{|t|}\). This improves the small-\(|t|\) local estimate to linear, without making any assertion about cross-prefix influence. It also holds if the Wilson operator is restricted to physical functions, since its vacuum is the full positive vacuum used to prove (4).

## A joint curvature criterion and its actual Wilson linearization

For the raw conditioning only, put the *product* round metric \(g_{\rm prod}\) on all prefix coordinates. If for some \(\kappa>0\)
\[
 \nabla_{\rm prod}^2\log q\le (2-\kappa)g_{\rm prod}
 \tag{7}
\]
pointwise as quadratic forms, the weighted product metric has Bakry–Émery curvature at least \(\kappa\) since its product Ricci tensor is \(2g_{\rm prod}\). The usual integrated Bochner identity for its positive weighted operator yields \(\lambda_1^2\ge\kappa\lambda_1\) on an eigenfunction with \(\lambda_1>0\); compactness and strict density positivity then give product-form gap at least \(\kappa\). Since \(G_b\ge I/4\) in the prefix frames, (1) gives intrinsic joint gap at least \(\kappa/4\). The pointwise condition (7) is a Hessian/form test, not a joint log-density oscillation test; for instance it allows additive one-coordinate tilts whose aggregate oscillation grows with the number of coordinates. Its hypothesis is not supplied by the one-coordinate derivative bound (5).

At each fixed finite lattice and at \(t=0\), normalized eigenfunction perturbation gives
\[
 \log\rho=\frac{t}{6}\sum_pw_p+O_\Lambda(t^2)
 \quad\hbox{in }C^2.
 \tag{8}
\]
In fact the magnetic term \(V=-\sum w_p\) is mean zero, and for an elementary plaquette with four distinct links each factor contributes fundamental Casimir 3. The first derivative of \(\Omega\) is therefore \(\sum w_p/12\), orthogonal to the free constant. A finite-graph analytic remainder in every fixed Sobolev norm follows by the isolated vacuum Riesz projection on a spectral contour for the free operator and boundedness of multiplication by the smooth potential on that Sobolev space. Sobolev embedding into \(C^2\), normalization near 1, and the positive logarithm give (8). Pullback to the finite raw path charts and compactness preserve the \(C^2\) remainder for all \(z,W\) on that finite graph.

Importantly, the *linearized* prefix Hessian in (8) has a uniform coefficient bound, despite the number of plaquettes. Substitute \(U_j=V_{j-1}^{-1}V_j\) in each plaquette word and vary prefixes along product geodesics with velocities \(X_j=\dot V_j V_j^{-1}\). A quaternion factor \(V_j\) or \(V_j^{-1}\) has speed at most \(|X_j|\) and second derivative norm at most \(|X_j|^2\); all other word factors have norm one. Product differentiation thus bounds the magnitude of the second derivative of one \(w_p\) by \((\sum_{\rm occ}|X_j|)^2\), where occurrences count multiplicity from the substitutions. A plaquette contributes at most eight occurrences; each \(V_j\) occurs at most eight times in the full sum, because its two adjacent fine links each occur in at most four plaquettes. Cauchy–Schwarz per word and then summation give
\[
 \left\|\nabla_{\rm prod}^2\!\left(\tfrac16\sum_p w_p\right)\right\|_{\rm op}
 \le 64/6=32/3 .
 \tag{9}
\]
Logarithmic conditional normalization adds no prefix derivative. In particular a bound of the explicit form
\[
 \sup_{\Lambda,b,z,W}\left\|
 \nabla_{\rm prod}^2\left(\log q-\tfrac t6\sum_pw_p\right)
 \right\|_{\rm op}\le C t^2
 \tag{10}
\]
on a common neighborhood of zero would give a true length- and volume-uniform joint intrinsic gap \((2-\frac{32}{3}|t|-Ct^2)/4\) as long as positive. The finite-volume remainder in (8) does not prove (10), and the single-coordinate gradient estimate (5) gives neither same-site Hessian nor summable mixed Hessians. The derived joint curvature criterion and exact linear coefficient isolate an additional estimate; they do not establish it or extend perturbative small \(|t|\) to the large-\(t\) weak-bare trajectory. No continuum or Phase 15 conclusion is claimed.


### Why the partial Bochner bound does not close the Hessian estimate

For ambient constant electric Killing fields \(Y,Z\) (one fixed Lie generator on one link for each), let \(L=\Delta+2\Gamma(u,\cdot)\), with \(\Gamma(f,h)=\langle\nabla f,\nabla h\rangle\) for real functions. These fields commute with the full Laplacian and differentiate \(\Gamma\) by the Leibniz rule because they generate isometries. Applying them successively to the logarithmic ground equation gives the exact scalar identities
\[
 L(Zu)=t\,ZV,\qquad
 L(YZu)=t\,YZV-2\Gamma(Yu,Zu),
 \tag{11}
\]
including when the fields are on the same link (no interchange of \(Y,Z\) is used). For different links \(YZu\) is exactly the mixed covariant Hessian entry. With an orthonormal global electric frame \(Y_k\), the second term is the unweighted sum
\(\Gamma(Yu,Zu)=\sum_k(Y_kYu)(Y_kZu)\).
Thus bounded plaquette row sums for \(YZV\) and bounded amplitudes \(Yu,Zu\) from (5) do not directly bound the needed differentiated terms. The positive \(|\nabla(\nabla_eu)|^2\) in (4) bounds that quantity at a maximum of \(h_e\), not at the maxima of \(|YZu|\) nor at every configuration. Also the scalar operator in (11) has no explicit positive zeroth-order damping. In particular the route (4), (9), (11) does not itself supply the operator-norm mixed estimate (10); an additional invariant-region, regularity or locality argument would be needed. This describes the unclosed term, not a counterexample to (10).
