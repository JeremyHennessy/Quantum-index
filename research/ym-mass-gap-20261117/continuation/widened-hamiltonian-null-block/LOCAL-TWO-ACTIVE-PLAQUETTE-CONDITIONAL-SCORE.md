# Two active plaquettes: first mixed vacuum score under product blocking

Hold the electric normalization \(H=-c\Delta-g_1w_1-g_2w_2\) with \(c>0\) fixed, normalized SU(2) trace \(w_i=\tfrac12\operatorname{Re}\operatorname{tr}W_i\), and bi-invariant metric \(-\tfrac12\operatorname{tr}(XY)\). The two unit squares are side by side and share a middle perpendicular link. Their respective bottom links \(U_1,U_2\), both traversed positively around the outer perimeter, form the coarse path \(Z=U_1U_2\). The two square terms are the only magnetic terms. Define the physical conditional generator with coefficient \(c\); the score-corrected-gap convention drops that coefficient and multiplies the inverse-score form by \(c\) relative to the physical convention. All assertions concern this finite fixture, not a volume-uniform weak-bare limit.

## Fiber geometry, gauge, and linearized score

At fixed \(z\), write \(U_1=zU_2^{-1}\) and keep all other links as independent reference-Haar variables. As before the induced fiber metric is twice the product metric on the \(U_2\) component and unmodified on the remaining links, so the true physical conditional generator \(L_z\) has Dirichlet energy
\[
 c\int\left(\tfrac12|\nabla_2 f|^2+
  \sum_{e\ne1,2}|\nabla_e f|^2\right)\rho_z\,d\mathrm{Haar}.
\]
Here \(\rho_z\) is the conditional density of the actual vacuum \(\rho=\Omega^2\), not a Wilson Gibbs replacement. Unlike the free-prefix fixture, in these coordinates \(\Omega(zU_2^{-1},U_2,\ldots)^2\) generally depends on \(z\), already to first order when \(g_1\ne0\). Nevertheless the **marginal** of the single open product \(Z\) is Haar: the independent gauge rotation at the left endpoint acts transitively by left multiplication on \(Z\), preserving the vacuum law. Hence the conditional normalization relative to reference Haar is exactly one. Gauge rotations at the two endpoints also identify fibers isometrically and transport the score directions; at fixed \(z\), take endpoint rotations \(h_L\) and \(h_R=z^{-1}h_Lz\) to see that the conditional score Gram is scalar in the Lie basis. This equivariance does not make the scalar a free-prefix calculation.

Use the unit horizontal field
\[
 T_X=\tfrac1{\sqrt2}(\ell_1^X+\ell_2^{\operatorname{Ad}_{U_1^{-1}}X}).
\]
It is Haar-divergence-free and pushes forward to \(\sqrt2\) times the left generator on \(Z\). Conditional expectation of \(T_X\log\rho\) vanishes: test against a smooth function of \(Z\), integrate by parts in product Haar, and use the uniform \(Z\) marginal. Thus the score is exactly \(s_X=T_X\log\rho\) restricted to the fiber.

At zero coupling \(\Omega=1\); each four-link trace has \(-\Delta w_i=12w_i\) and Haar mean zero. First-order perturbation gives \(\Omega=1+(g_1w_1+g_2w_2)/(12c)+O((|g_1|+|g_2|)^2)\). Let \(B=\operatorname{Ad}_{z^{-1}}X\); along right variation \(U_2\mapsto U_2e^{tB}\) in the fiber, the induced \(U_1\) variation is \(U_1\mapsto e^{-tX}U_1\). Consequently the actual linearized conditional score is
\[
 s_X(z)=\frac{\sqrt2}{12c}\,r_2^B(g_2 w_2-g_1w_1)
              +O((|g_1|+|g_2|)^2),
\]
where the \(w_i\) on the right are restricted to the fiber before differentiation. Under reference Haar there, each \(w_i\) is a trace depending isometrically on \(U_2\) and its own three other links (including the shared edge). At zero coupling its conditional Laplacian eigenvalue before the factor \(c\) is \(3/2+3+3+3=21/2\). Its \(U_2\) derivative has the same eigenvalue, since \(r_2^B\) is Killing for the zero-coupling conditional product metric. The conditional Haar inner product of the corresponding derivative vectors for one square is \(\langle X,X'\rangle/4\): the square holonomy is Haar and the derivative is a unit imaginary quaternion coordinate, up to fixed isometric changes. The two-square derivative pairing is zero by integrating a nonpath link belonging only to square 1. The derivative trace is linear in that link (or its inverse), whose Haar matrix mean vanishes, whereas the derivative for square 2 does not use it. This holds at each fixed \(z\), without assuming the two derivative functions are conditionally independent at nonzero coupling.

It follows that the inverse-score Gram with the physical generator is
\[
 \boxed{\left\langle s_X,L_z^{-1}s_{X'}\right\rangle_{\rho_z}
 =\frac{g_1^2+g_2^2}{3024c^3}\langle X,X'\rangle
       +O((|g_1|+|g_2|)^4).}
\]
For the vertical generator without \(c\), multiply this expression by \(c\). To justify the fourth-order remainder, flip one nonpath edge unique to square 1 by the SU(2) center, or another unique to square 2. These commuting isometries separately change the sign of the corresponding coupling, preserve \(Z\), and commute with the horizontal fields. Positivity and uniqueness transport the normalized ground state and the conditional score matrix. Its entries are therefore even in \(g_1\) and \(g_2\) separately. They are analytic near zero: the compact elliptic ground projector is isolated, the potential is analytic in the couplings as a smooth multiplication operator, and the Riesz construction gives analyticity in sufficiently high Sobolev norms by elliptic regularity, so smooth fiber restriction and weighted conjugation are allowed. On a fixed conditional Haar space conjugate by \(\rho_z^{1/2}\); the resulting generator has fixed elliptic principal part and analytic smooth lower terms, and the reduced inverse is analytic after adding and subtracting the ground projector. In particular the first *allowed* mixed term in the Gram is \(g_1^2g_2^2\), not \(g_1g_2\) or cubic. This alone does not assert its coefficient is nonzero.

## Exact mixed second-order term in the vacuum and its score

There is nonetheless a genuine mixed term already in the score itself. Base both square holonomies at the middle bottom vertex; choose the shared perpendicular link \(S\) directed upward. Write
\[
 W_1=S P,\qquad W_2=Q S^{-1},
\]
where the three-link complement \(P\) ends with \(U_1\), and \(Q\) starts with \(U_2\). The outer perimeter holonomy is \(W_2 W_1=QP\), whose normalized trace is denoted \(w_{12}\). For the unit orthonormal imaginary quaternion basis \(E_a\), the product rule on the common link, varied by \(S\mapsto e^{tE_a}S\), gives the exact identity
\[
 \sum_a (\ell_S^{E_a} w_1)(\ell_S^{E_a} w_2)=w_{12}-w_1w_2 .
\]
Indeed writing quaternions as real plus imaginary parts, the two derivatives are minus and plus the respective imaginary coordinates, and \(\operatorname{Re}(W_2 W_1)=w_2w_1-\operatorname{Im}W_2\cdot\operatorname{Im}W_1\). No other link differentiates both square functions. The electric action is therefore
\[
 \Delta(w_1w_2)=-26w_1w_2+2w_{12},\qquad
 \Delta w_{12}=-18w_{12};
\]
the second identity counts six distinct perimeter links, each contributing fundamental Casimir 3. Both functions are Haar-centered by a unique-link integration. The mixed eigenenergy coefficient vanishes at this order by orthogonality of the two individual square traces. The normalized eigenfunction coefficient solves \(-c\Delta[g_1g_2]\Omega=(w_1w_2)/(6c)\); its additive constant is zero by the normalized ground-state expansion and \(\langle w_1,w_2\rangle_{\rm Haar}=0\). Inverting this exact two-dimensional electric block yields
\[
 [g_1g_2]\Omega=\frac1{c^2}\left(\frac{w_1w_2}{156}+\frac{w_{12}}{1404}\right),
 \qquad
 [g_1g_2]\log\Omega^2=\frac1{c^2}\left(\frac{w_{12}}{702}-\frac{w_1w_2}{936}\right).
\]
Here \([g_1g_2]\) denotes the coefficient of the mixed monomial, not a value of the observable. Applying \(T_X\) gives the exact mixed conditional score coefficient (the conditional normalization is one). In particular this coefficient is not identically zero: choose \(U_1=U_2=S=I\), \(P=i\) by one other link, \(Q=I\), and \(X=i\) in quaternions. Then \(T_X w_1=-1/\sqrt2\), \(T_X w_2=0\), and \(T_X w_{12}=-\sqrt2\) because both bottom links are traversed positively and adjacently in the cyclic perimeter trace. The coefficient is \(-5/(2808\sqrt2\,c^2)\).

The perimeter term depends on the two path links only through \(Z\), whereas the product term generally has unresolved \(U_2\)-dependence. Thus an actual shared-link interaction is present before any mixed norm coefficient can appear. Computing the quartic mixed Gram term would also require cubic score terms and the perturbations of the intrinsic inverse and of the weighted inner product. Squaring the displayed mixed score term in the zero-coupling form does not determine that full coefficient.

Run `python verify_two_active_score.py` for exact quaternion contraction and rational coefficient checks. No general lattice or continuum extrapolation is made.
