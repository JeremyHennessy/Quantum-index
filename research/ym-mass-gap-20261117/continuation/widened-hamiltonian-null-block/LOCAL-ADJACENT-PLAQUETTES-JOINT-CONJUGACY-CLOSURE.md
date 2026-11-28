# The missing relative orientation closes the adjacent-plaquette coarse algebra

Use the same finite neighboring SU(2) plaquette pair with shared link \(S\) traversed oppositely. At the common basepoint let \(Z=SP,\ W=QS^{-1}\), with disjoint exclusive three-link paths \(P,Q\), unit quaternion electric metric, and normalized fine Haar. Write
\[
 Z=(x,\mathbf a),\qquad W=(v,\mathbf b),\qquad
 d=\mathbf a\cdot\mathbf b,\qquad A=1-x^2,\quad B=1-v^2.
\]
The variables \(x,v\) are the separate normalized traces, while \(w_{12}=\operatorname{Re}(WZ)=xv-d\) is the surrounding six-link perimeter trace. Either \(d\) or \(w_{12}\) is one additional real coordinate that repairs the missing gradient closure.

## Joint conjugacy and the Haar law

Under gauge transformations at the common basepoint, \(\mathbf a,\mathbf b\) rotate simultaneously by the adjoint SO(3) action. The triple \((x,v,d)\) determines the full joint conjugacy orbit: it gives the two real parts and the Gram matrix of the imaginary vectors. Two such vector pairs with equal Gram matrix are related by an orthogonal map on their span, which extends to a rotation of \(\mathbb R^3\) by choosing its action on the orthogonal complement. The span has dimension at most two, so an orientation-preserving extension is always possible, also when vectors vanish or are parallel. Every rotation lifts to SU(2) conjugation. The range is exactly
\[
 \mathcal D=\{(x,v,d): -1\le x,v\le1,\quad
                     d^2\le(1-x^2)(1-v^2)\}.
\]
The inequality is Cauchy-Schwarz and every such Gram matrix is realized.

Under fine Haar, \(Z,W\) are independent Haar by conditioning on \(S\). The real part of each has density \((2/\pi)\sqrt{1-x^2}\) on \([-1,1]\). Conditional on regular \(x,v\) their imaginary directions are independent uniform unit vectors, so \(d\) is uniform on \([-\sqrt{AB},\sqrt{AB}]\). Their product density therefore cancels the square roots, giving the joint law
\[
 \boxed{\quad d\nu_0(x,v,d)=\frac2{\pi^2}\,\mathbf1_{\mathcal D}\,dx\,dv\,dd .\quad}
\]
The singular edge cases of the conditional law have no Haar mass; the total Lebesgue volume is \(2(\pi/2)^2=\pi^2/2\), so this is normalized.

## Exact electric gradient and Laplacian

Let \(\ell_Z^j\) mean left Lie increment on \(Z\) and \(r_W^j\) right Lie increment on \(W\), with the unit imaginary quaternion basis \(E_j\). The unscaled ambient electric operator on functions of the pair is
\[
 \Delta_E=3\Delta_Z+3\Delta_W+\sum_j(\ell_Z^j-r_W^j)^2 .
\]
Each exclusive link acts isometrically on its sole holonomy, and the shared left variation of \(S\) acts by the two opposite indicated increments. The carré du champ \(\Gamma(f,g)\) is the gradient pairing, with product rule \(\Delta_E(fg)=f\Delta_Eg+g\Delta_Ef+2\Gamma(f,g)\).

Index the gradient matrix by \((x,v,d)\). Its exact polynomial entries are
\[
 \mathsf G=
 \begin{pmatrix}
 4A &-d& vA-4xd\\
 -d&4B&xB-4vd\\
 vA-4xd&xB-4vd&
 3(A+B-2d^2)+x^2B+v^2A-2xvd
 \end{pmatrix}.
\]
To check this, \(\ell_Z^j x=-a_j\), \(r_W^j v=-b_j\). For \(d\), the three \(\ell_Z^j\) derivatives are the vector \(x\mathbf b+\mathbf a\times\mathbf b\), and the three \(r_W^j\) derivatives are \(v\mathbf a+\mathbf a\times\mathbf b\). The shared derivative is thus \(x\mathbf b-v\mathbf a\), with the cross products canceling. The sums of squares of the pure derivatives are respectively \(B-d^2\) and \(A-d^2\), since \(|\mathbf a\times\mathbf b|^2=AB-d^2\). Combining the pure and shared terms gives the displayed entries, including the off-diagonal signs.

Each single trace has Laplacian \(-12\) times itself. The product rule gives \(\Delta_E(xv)=-24xv-2d\), and the six-link trace \(xv-d\) has eigenvalue \(-18\). It follows that the drift vector is
\[
 (\Delta_E x,\Delta_E v,\Delta_E d)=(-12x,-12v,-6xv-20d).
\]
For a smooth function of these three coordinates, the induced operator is \(\sum_{ij}\mathsf G_{ij}\partial_i\partial_j+\sum_i(\Delta_E x_i)\partial_i\). In particular it preserves polynomial functions of the quotient coordinates, and \(\Gamma\) of any pair of such polynomials is again one of them. More generally, the full jointly central smooth subalgebra is preserved by both operations by simultaneous conjugation equivariance of the pair operator. Conditional projection to this subalgebra is smooth: first solve for two exclusive links to condition on the full pair, then average simultaneous conjugation.

Two further polynomial checks agree with the constant Haar density. The divergence of each column of \(\mathsf G\) is the corresponding drift. If \(D=AB-d^2\), then
\[
 \mathsf G\nabla D=D\,(-8x,-8v,-4(3d+xv))^{\mathsf T}.
\]
Thus at regular quotient boundary points the Gram-determinant normal is killed by the principal matrix. This is an algebraic tangency check, not an imposition of external boundary conditions on the singular quotient. The natural form is induced from the compact Haar pair. The companion exact polynomial replay checks these identities as well as the determinant and perimeter eigenvalue.

## Minimality and scope

Every gradient-closed retained algebra containing both \(x\) and \(v\) must also contain \(d=-\Gamma(x,v)\). Conversely the triple separates joint conjugacy orbits and its smooth jointly central class satisfies both operator closure conditions. This makes it the minimal repair in the sense of adjoining the missing Gram coordinate to the separate traces; no extra orientation axis is necessary. The same information is carried by \((x,v,w_{12})\). In particular the separate-trace principal-order loss does not apply once the required relative orientation is retained. These statements concern this finite pair and its coarse geometry, not volume-uniform Wilson-vacuum estimates or a continuum claim.
