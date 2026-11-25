# The original bulk witness: all highest secular Taylor coefficients

**2026-11-25 | Open spatial lattice, continuous time | Research only.**

Let \(b_{2n+1}(T)=[\gamma^{2n+1}]h_{\infty,\gamma}(T)\) for the original Haar/free-boundary witness of the [sign-window note](2026-11-25-infinite-volume-logarithmic-sign-window.md). Define the infinite-space matrix \(J=(12I+B_\infty)/168-(7/120)I=(11I+5B_\infty)/840\) on the bulk plaquette graph. For every fixed integer \(n\ge0\),
\[
 \lim_{T\to\infty} T^{-n}e^{6T}b_{2n+1}(T)
 =-\frac{(d_p+d_q)^*J^n d_p}{896 n!}<0.
\]
In particular the first growing correction is
\[
 [\gamma^3]h_{\infty,\gamma}(T)=e^{-6T}\left[-T/47040+O(1)\right].
\]
These are statements about each exact Taylor coefficient separately. They are not an exchange of the large-time and Taylor-series limits.

## Derivation

At order k the Taylor coefficient is exactly equal to that of any box containing the k-step plaquette neighborhood of p: the connected-cumulant argument in the sign-window note applies at every T. Choose such a box once for k=2n+1. One can then use the fixed-box analytic splitting into the vacuum, the isolated energy-six band, and its complement. This is the familiar effective-transfer-matrix method, e.g. [Münster](https://www-library.desy.de/preparch/desy/postpr/1985/desy85-007.pdf); the observable here is specifically the quotient, not a ground-state correlation.

After shifting the vacuum and using the analytic band frame of the [all-time finite-box proof](2026-11-25-all-time-adjoint-sign.md), the band contribution to \(e^{6T}h\) is
\[
 \ell_\gamma^* \exp[T(\gamma^2 J_\Lambda+O(\gamma^3))]u_\gamma,\quad
 \ell_\gamma^*=-2\gamma(d_p+d_q)^*/896+O(\gamma^2),\quad u_0=d_p/2 .
\]
Use complex-linear continuations of these real scalar coordinate functions. The shift matrix is \(J_\Lambda=(D_\Lambda+B_\Lambda)/168-(7/120)I\), since the extensive scalar vacuum shift cancels. It is the unrecentered shift, not the matrix shifted by its top eigenvalue. The linear witness includes the reciprocal ground denominator: the two contributions \(+1/7\) and \(-1/6\) produce its negative sign. For fixed box and large T, the rest after multiplying by \(e^{6T}\) is analytic in a fixed small complex disc and bounded by \(C_\Lambda e^{-c_\Lambda T}\). To see the bound, transport the three analytic Riesz projections to the unperturbed blocks using \(S=\sum_jP_j(\gamma)P_j(0)\). The commutator \([L,P_j(\gamma)]=-[\gamma V,P_j(\gamma)]\) is bounded, so on the high block the transported generator differs from the free high block by \(O_\Lambda(|\gamma|)\) in operator norm. The unperturbed high block has decay ≥6.5. The vacuum-centered denominator differs from \(P_0(\gamma)1\) by decaying band and high terms; for fixed box pass from L² bounds to uniform bounds by splitting off a fixed smoothing time and using the Feynman–Kac domination of the complex propagator. Since \(P_0(\gamma)1\) is uniformly close to 1 on the fixed compact box for small complex γ, its reciprocal and the quotient are holomorphic there. Replacing the exact denominator by it in the already centered numerator costs a product of two decays. Shrink the disc to keep all these rates above 6 for the discarded terms. Cauchy's formula gives exponentially small errors at any fixed Taylor order.

An exponential term with T^j uses at least 2j powers of γ. The left source already costs one power. Consequently only j=n reaches \(T^n\) at order \(2n+1\), and it must use just the displayed coefficients. Matrix powers of order n only visit an n-step neighborhood; for the chosen box the finite degree and adjacency agree with bulk there (enlarge by one boundary collar if necessary). All entries of J are nonnegative and its diagonal is strictly positive. This makes every displayed moment positive regardless of spectral sign of the complete mixed measure. The first moment is \((11+5)/840=2/105\), giving \(1/47040\). The sum of these leading monomials alone is the entire function \(- (d_p+d_q)^*e^{sJ}d_p/896\), with \(s=\gamma^2 T\). Lower secular powers and the uniform remainder must still be controlled to infer any actual crossover limit.

## Checks

A direct integer walk count with weights 11 for holding and 5 for a shared-edge move gives \(1,16,581,24571,1213611\) for the first five unnormalized moments of a coplanar pair and \(1,16,631,26846,1324911\) for a perpendicular pair. In integer corner/normal coordinates the common source is 0,0,0,2, with comparison locations 1,0,0,2 and 0,0,-1,1. Higher moments depend on orientation and must not be inferred from adjacency alone. The exact first moment is orientation independent. The diagonal-only control misses \(5/840\) in that first moment. No mathematical novelty or continuum result is asserted.
