# A uniform quadratic coefficient for the actual Wilson prefix log-Hessian

Use the finite unit-SU(2) spatial lattice, ordinary plaquettes with four distinct links, at most four plaquette terms incident to any link, and an oriented distinct-edge path. The Hamiltonian is \(H(t)=-\Delta-t\sum_p w_p\) with \(w_p=\tfrac12\mathrm{Re}\,\mathrm{Tr}(U_p)\), and the normalized positive vacuum is \(\Omega(t)\). Write \(u(t)=\log\Omega(t)= t u_1+t^2u_2+O_\Lambda(t^3)\) in \(C^2\) on each fixed lattice, as follows from the isolated free vacuum, smooth bounded potential and Sobolev embedding at that fixed dimension. The normalization of the vacuum affects only the constants relevant below. This is an estimate for a Taylor coefficient, not a bound for the remainder and not a continuum statement.

## Connected two-plaquette source

The logarithmic ground equation is \(\Delta u+|\nabla u|^2=-t\sum_p w_p-E_0(t)\). The first coefficient is \(u_1=\sum_p w_p/12\), as each of four distinct links contributes free Casimir 3. The quadratic equation is
\[
 -\Delta u_2 = |\nabla u_1|^2-\int|\nabla u_1|^2\,d\mathrm{Haar}.
\]
For an orthonormal electric frame \(Y_e^a\) at each link, use the ordered expansion
\[
 |\nabla u_1|^2=\frac1{144}\sum_e \sum_{p,q\,\ni e}\sum_{a=1}^3
 B_{e,p,q,a},\qquad B_{e,p,q,a}=(Y_e^a w_p)(Y_e^a w_q).
\]
Each summand depends on at most seven distinct links (the union of the two plaquettes, both containing \(e\)). Its mean-zero Poisson inverse is supported on these same links: solve by the product heat integral, which preserves independence from uninvolved variables, and add the solutions with the appropriate factor. Thus no term from a pair of disjoint plaquettes is introduced by the quadratic logarithmic equation.

For at most seven independent oriented links, write \(P_s\) for the reference heat semigroup. The unit-S³ Fourier estimate \(\sup |p_s-1|\le 5e^{-3s}\) for \(s\ge1\), and telescoping products of probability kernels, give for every bounded mean-zero \(F\)
\[
 \left\|\int_0^\infty P_sF\,ds\right\|_\infty
 \le \left(1+\frac{35}{3}e^{-3}\right)\|F\|_\infty = K_7\|F\|_\infty .
\]
The first unit interval uses Markov contraction. On the tail the L¹ norm of the product kernel minus product Haar is at most the sum of factor L¹ differences. This estimate concerns mean-zero functions; we will apply it to a second derivative, whose Haar mean is zero without an extra factor of two.

## Raw-prefix Hessian with the product round metric

At any fixed raw slice (path product \(z\) and raw spectators fixed), choose an arbitrary product-geodesic tangent \(X=(X_j)\) in left velocities, so \(V_j(s)=\exp(sX_j)V_j\). Put \(X_0=X_b=0\). At the initial point the path links carry the flow
\[
 U_j(s)=\exp(-s\mathrm{Ad}_{V_{j-1}^{-1}} X_{j-1})\,U_j\,
        \exp(s\mathrm{Ad}_{V_j^{-1}}X_j).
\]
The ambient generator \({\cal D}_X\) with these initial-point coefficients held fixed generates left/right translations on separate link variables; both actions on each variable commute, and \({\cal D}_X\) commutes with the product heat semigroup. A reversed edge consists of the inverse of the displayed expression and preserves speed and term counts. Therefore the tested product-prefix Hessian is exactly the ambient \({\cal D}_X^2\) derivative of the retained function at the given original point. Restricted to the union of the incident links, \({\cal D}_X^2 B\) has mean zero (generators are Haar divergence-free), so it can be moved inside the Poisson inverse and estimated by \(K_7\).

In a quaternion word, applying \(Y_e^a\) inserts one fixed pure unit quaternion (sign and order can change with edge orientation). Upon ambient flow, the insertion is still fixed and every fine-link occurrence has up to two prefix exponentials, with generators of norm \(|X_j|\). A derivative of an exponential has norm at most \(|X_j|\), and its second derivative at most \(|X_j|^2\). The two normalized real-part factors in \(B\) are bounded by one. The product rule therefore bounds the magnitude of \({\cal D}_X^2B\) by \((\sum_{\mathrm{occ}}|X_j|)^2\); at most sixteen occurrences enter a pair of four-link words. Each prefix occurs at most eight times summed over all single plaquette words. When summing over ordered \((e,p,q)\), a given plaquette appears at most sixteen times in either role (four edges, each with at most four partner plaquettes), so a prefix occurs in at most 256 slots across the ordered pair-word sum, not counting the three electric directions. Cauchy–Schwarz on each word pair now gives
\[
 \sup_{\Lambda,b,z,W}
 \left\|\nabla_{\mathrm{prod}}^2(2u_2)\right\|_{\rm op}
 \le \frac{2}{144}K_7\,3\,16\,256
 = \frac{512}{3}\left(1+\frac{35}{3}e^{-3}\right)<270 .
\]
The operator bound follows from all real test tangents and Hessian symmetry. Conditional normalization subtracts a constant in the prefixes, so this bounds the quadratic coefficient of conditional \(\log q\) as well. Combined with the previously established linear coefficient bound \(32/3\), this identifies the first two coefficients uniformly even though the unexpanded density is not product Haar for fixed raw spectators.

**Unresolved.** The bound is neither convergence of a connected-cluster expansion nor \(O(t^3)\) uniformly in lattice or path. The exact logarithmic recursion helps organize supports: at every fixed order, the product of derivatives is zero unless the supports intersect on an edge, and the free Poisson inverse preserves support. An all-order weighted coefficient estimate, with controlled growth and a common analytic radius, would still be required for a uniform perturbative gap. Even a small-\(|t|\) result would not cover the large-\(t\) weak-bare trajectory.
