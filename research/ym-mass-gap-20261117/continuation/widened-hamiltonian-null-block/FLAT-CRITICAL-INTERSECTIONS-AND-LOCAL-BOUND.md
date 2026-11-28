# Six-loop rank and non-flat residual on the elementary critical curves

2026-11-28 UTC. This is an exact fixed-spacing, zero-total-momentum reference calculation at E=−13/336. It classifies these curves, not the rest of either factor's singular set. The separate local boundary argument below applies only near these curves, not the full residual critical set.

Let X_j=z_j+z_j⁻¹. The elementary flat-factor critical curves are X_i=−2, X_j+X_k=3/10. For each fixed i, use u=X_j X_k. The physical range of X_j is [−17/10,2], so u ranges over [−17/5,9/400], with the upper endpoint attained exactly at X_j=X_k. The shifted three-channel elementary form has rank one along the curve, and the unshifted elementary eigenvalues are −5/336 twice and 3/280 once (the exact critical-locus result, also checked at all interpolation points here).

Let p₉(λ;u) be the characteristic polynomial of the six-loop first-order-null operator, and Q its exact monic quotient by (λ+1/42)³. Use the unscaled operator normalization (apply the constant Gram inverse first). Write `p₉(λ)=det(λI₁₄−B₉)`, `ℓ=−1/42`, and `F=det(B₆+(ℓ−E)I₃)`. For the elementary eigenvalues `a_j`, the Kronecker sum determinant is `D=∏_j p₉(E−a_j)`: each 14-dimensional determinant has even order, so no sign enters this identity. Substituting `p₉(λ)=(λ−ℓ)^3 Q(λ)` gives `D=−F³ ∏_j Q(E−a_j)`, since all nine linear flat factors individually reverse sign. Thus the operator-normalized residual `R=D/F³`, continued polynomially across `F=0`, satisfies
```
R|curve = −Q(−1/42;u)^2 Q(−83/1680;u).
```
The first energy is E+5/336 and the second is E−3/280. The relative minus-momentum convention does not alter the characteristic polynomial under the verified inversions. A Hermitian form normalization with six-loop null Gram G simply multiplies D by the nonzero constant det(G)^3; uniform symbol scaling (such as 6720) contributes its 42nd power. Neither affects orders, roots or nullity. The exact rational constants in the two Q evaluations below are for the monic quotient itself; no Laurent-variable denominator or normalization factor is hidden.

## Exact polynomial construction

The replay checks all 48 signed/permuted/reanchored stencil symmetries for the elementary and six-loop matrices, including the latter first-order pencil whose nullspace is compressed. At the Bloch level they intertwine the pencils by monomial reanchoring and a permutation, so the compressed characteristic coefficients are invariant under each independent coordinate inversion and under axis permutations. Each k-th characteristic coefficient has individual signed Laurent degree at most k (a sum of k×k minors), becomes polynomial of degree at most k in each X coordinate, and on the selected curve has ordinary X_j degree at most 2k. Symmetry X_j↔X_k sends X_j↦3/10−X_j, so it descends to degree at most k in u. Monic division by the constant-in-u flat factor preserves these bounds, by triangular coefficient recursion. In particular 15 distinct u values rigorously suffice. The replay evaluates the two z roots in exact algebraic fields with z_i=−1, verifies their characteristic coefficients are rational, and checks the interpolant at four independent additional u values, including physical endpoints.

The two threshold polynomials are:
```
Q(−1/42;u) =
 −(5u+23)(93735040000u²−11332706992105u−205293381947)
   / 6436133057150875051826872320000

Q(−83/1680;u) =
 −(23814u−1625927)(127776225920000u²−2301322616353565u+13571125165073381)
   / 252401539346914432990793233858560000000
```
Their rational polynomial gcd is 1. Sturm counts on the closed physical interval give exactly one simple zero for the first and none for the second, and both are nonzero at both endpoints. The physical zero u* is the unique root of the first quadratic in (−223/12312,−204/11263). The verifier also checks that ∂_λQ(−1/42;u) is coprime to this quadratic, and that the latter divides the first threshold polynomial simply.

## Meaning on the real torus

Away from u*, the six-loop flat eigenvalue −1/42 has multiplicity three and the full separated reference matrix has nullity six at E (two elementary directions times three flat directions). At u* the six-loop multiplicity rises from three to four and the full reference nullity is eight. There are no other residual intersections along the critical curves: the other threshold has no valid real zeros. The exact multiplicity-one additional root of Q in λ, combined with simple vanishing in u, gives a nonzero derivative of that additional six-loop eigenvalue with respect to u. At u*, both free X coordinates lie strictly in (−2,2), and X_j≠X_k, so u is a smooth local parameter along each real curve arc as well: its derivative with respect to p_j is (X_k−X_j)(−2 sin p_j)≠0.

Thus **two additional separated reference eigenvalues cross E when moving along the curve**, from the two constant degenerate elementary directions paired with that one additional crossing six-loop branch. It does not say that the crossing is transverse to either global sheet. The determinant R itself vanishes to order exactly two as a function of u on the curve and does not change sign there. There are 24 exceptional torus momenta: three possible choices of fixed axis, two orders of the distinct free X pair, and four independent signs of their nonendpoint momenta. Different fixed axes cannot overlap on these curves, since two coordinates −2 would force the third to be 23/10, outside the physical interval.

## Replay and evidence

```sh
PYTHONHASHSEED=23 python classify_curves.py --output new-critical-curve.json
python verify_exceptional_point.py new-critical-curve.json
```
The helpers are crit_rank.py (exact signed-coordinate stencil and algebraic field evaluations), classify_curves.py (interpolation, Sturm and energy-derivative orders) and verify_exceptional_point.py (pinned replay of the real exception). The 2,348-byte artifact has SHA-256 **b3654285e0d760723f92185e3dbddc5ef1db46dbc9a6d426d95b58c8f88f811d**. The algebraic replay by itself asserts no boundary estimate; the separate argument below applies only in neighborhoods of these curves.

## From the critical-curve classification to a local reference bound

In a compact chart around a flat critical curve use the real analytic coordinates \(s=X_j+X_k-3/10\), \(r=p_i-\pi\), and a curve parameter \(\tau\). The shifted elementary two-eigenvalue spectral cluster has a local analytic orthonormal frame: take its analytic Riesz projection and orthonormalize two projected fixed vectors on a small enough chart. Its Hermitian \(2\times2\) compression \(M_2(s,r,\tau)\) vanishes identically at \(s=r=0\). The third shifted elementary level stays nonzero.

### The exactly flat companion

If the companion projection onto the three flat eigenvectors is smooth, the flat channel is three copies of this elementary cluster. Set \(s=\rho\cos\theta,\ r=\rho\sin\theta\). The analytic matrix \(M_2/\rho\) extends smoothly in \((\rho,\theta,\tau)\) to the linear angular compression at \(\rho=0\). Its determinant there is a nonzero smooth factor times \(4300\cos^2\theta-b(0,0,\tau)\sin^2\theta\). All four angular roots are simple. At such a root exactly one eigenvalue of the compression vanishes; otherwise the determinant would have zero first angular derivative. Thus in small angular sectors a simple eigenvalue and its projection are smooth, and the normalized eigenvalue is a regular integration coordinate. Away from these sectors both eigenvalues divided by \(\rho\) stay separated from zero. For \(\rho>0\), after changing variables in each sector, the matrix-element angular integrals are bounded by \(C/\rho\) uniformly in \(\eta>0\). Indeed one integrates a uniformly smooth compactly supported weight against \((t-i\eta/\rho)^{-1}\); subtract its value at zero times an even compact bump and integrate the constant piece symmetrically. The \(C/\rho\) bound is integrable against \(\rho\,d\rho\). Smooth cutoffs and the Fourier weights of any finite-coordinate matrix element are admissible. The same argument bounds the terms from the other elementary level of the flat channel directly by its nonzero energy gap.

### The additional crossing channel

At a flagged crossing point the companion has an isolated four-level cluster consisting of the three identically flat levels and the simple additional root of the reduced characteristic. Let \(\delta(p)\) be the additional real analytic eigenvalue minus the flat energy. Its derivative along the critical curve is nonzero. The shifted analytic \(4\times4\) compression \(D(p)\) vanishes whenever \(\delta=0\), since all four eigenvalues are then zero. Analytic division in coordinates \((\delta,\ldots)\) gives \(D=\delta\,P\) with \(P\) analytic. Off \(\delta=0\), \(P\) is the orthogonal rank-one spectral projection; the projection identities extend by continuity. Thus the constant flat projection \(I-P\) on this cluster and the additional branch projection \(P\) are smooth even through the rank jump.

The remaining small shifted energies are governed by \(B=M_2+\delta I\) on the crossing companion branch. At the point, \(\partial_\tau M_2=0\) because the elementary cluster vanishes along the whole curve. Shrinking the chart, orient \(\tau\) so \(\partial_\tau B\succeq c I\) for some \(c>0\), uniformly in the other real coordinates. Analytic extension to \(\tau=x-iy\) then gives \(\Im B(x-iy)\preceq -cyI/2\) for small \(y>0\), and
\[
\|(B(x-iy)-i\eta I)^{-1}\|\le (\eta+cy/2)^{-1}.
\]
For a smooth compactly supported test weight in \(x\), use its first-order almost analytic extension \(g(x)-iy g'(x)\) with a cutoff in \(y\). It has \(\bar\partial\)-error \(O(y)\) near the real axis, and the contribution of the error times the resolvent is uniformly integrable. The outer strip contribution is bounded away from the real line and there are no side boundary terms. Cauchy–Green therefore uniformly bounds the \(\tau\)-integral, also uniformly in \(s,r\). Matrix-entry weights and a finite number of smooth local trivializations obey the same estimates. This avoids an unjustified differentiation of eigenvectors at a possible degeneracy within the elementary two-level cluster.

The critical-curve companion census excludes any other vanishing levels in each chart, so their local inverses are uniformly bounded. This proves a local reference resolvent bound near the flat critical curves only. It does not classify residual critical points elsewhere or prove the global finite-block estimate required by the positive-response argument.

The estimates also give convergence of each localized finite-coordinate matrix element to a finite boundary value: for the angular Cauchy integral take the ordinary one-variable boundary limit at each \(\rho>0\) and use the integrable \(C/\rho\) majorant with the radial Jacobian. For the additional branch use the Cauchy–Green representation and dominated convergence off \(y=0\), dominated near the edge by \(C y/(\eta+cy/2)\). This is a local matrix-element result, not a weighted operator limiting absorption estimate or the global block bound.
