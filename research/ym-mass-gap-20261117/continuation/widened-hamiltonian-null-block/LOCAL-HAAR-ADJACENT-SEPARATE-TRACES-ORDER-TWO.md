# Separate gauge-invariant traces also lose principal-order energy at Haar

Consider two adjacent SU(2) elementary plaquettes sharing one link \(S\), traversed in opposite directions. Base both at the same vertex and write \(Z=SP\), \(W=QS^{-1}\), with their other three-link paths \(P,Q\) edge-disjoint. Use the unit quaternion electric metric and product Haar on all fine links, so the fine density is exactly one. Retain **only**
\[
 x=\operatorname{Re}Z,\qquad v=\operatorname{Re}W .
\]
Both are individually gauge invariant. In this finite example the exact constrained fine-energy deficit is of order \(N^2\) along a smooth sequence of gauge-invariant retained tests at fixed variance.

## Conditional relative orientation generates the loss

The pair \((Z,W)\) has product Haar: given \(S\), the products \(P,Q\) are independent Haar and their left/right translates are Haar. Conditional on \((x,v)\) in the regular interior,
\[
 \operatorname{Im}Z=a n,\qquad \operatorname{Im}W=b m,\qquad
 a=\sqrt{1-x^2},\quad b=\sqrt{1-v^2},
\]
with \(n,m\) independent uniform directions on \(S^2\). Thus \(n\cdot m\) is uniform on \([-1,1]\) and has variance \(1/3\).

Let \(\Gamma\) be the product-metric fine gradient pairing. Each loop variation in one of its four links is isometric in the corresponding holonomy. The shared link gives opposite left/right increments, whose trace-gradient contraction is \(-\operatorname{Im}Z\cdot\operatorname{Im}W\). Explicitly, a left variation of \(S\) by \(E_j\) gives the normalized trace derivative \(-a n_j\) in \(Z\) and \(+b m_j\) in \(W\), for the orthonormal imaginary quaternion basis. Hence
\[
 \Gamma(x,x)=4a^2,\qquad \Gamma(v,v)=4b^2,\qquad
 \Gamma(x,v)=-ab\,n\cdot m.
\]
For the retained phase \(\phi=x+v\) this gives
\[
 \kappa=\Gamma(\phi,\phi)=4(a^2+b^2)-2ab\,n\cdot m,\qquad
 3(a^2+b^2)\le\kappa\le5(a^2+b^2),
\]
and conditional variance \(4a^2b^2/3\). The variance is positive whenever both angles are regular; this is failure of gradient closure in the separate traces. Their Laplacians satisfy \(\Delta x=-12x,\ \Delta v=-12v\), so \(\Delta(xv)=-24xv+2\Gamma(x,v)\) is not retained either.

This does not contradict the finite order-zero theorem for the **full pair** \((Z,W)\): its fine electric operator on the pair is \(3\Delta_Z+3\Delta_W+\sum_j(\ell_Z^j-r_W^j)^2\), depending only on that pair, with gradient closure by the same vector fields. Its simultaneously conjugation-invariant sector also retains this closure by equivariance. It is the further loss of relative orientation upon retaining the two traces separately that violates the hypotheses.

## Exact gauge-invariant constrained trial

Fix a real nonzero smooth cutoff \(\chi(x,v)\) supported in \(|x|,|v|<1/2\). On its support, \(\kappa\ge9/2\), \(\kappa\le10\), and \(\operatorname{Var}(\kappa\mid x,v)\ge3/4\). For a globally smooth construction, add \(r(x)+r(v)\) to \(\kappa\), where \(r\ge0\) is smooth, zero on a neighborhood of \([-1/2,1/2]\), and positive at both endpoints \(\pm1\). The result \(\widetilde\kappa\) is uniformly positive on the compact full space; the original \(\kappa\) can vanish only when \(a=b=0\). Define
\[
 A=\frac{\widetilde\kappa^{-1}}
            {\mathbb E[\widetilde\kappa^{-1}\mid x,v]} .
\]
The conditional mean in the denominator is smooth on the regular open square, by integrating the independent reference axes. It also extends smoothly to its endpoint closure: in the formula \(\widetilde\kappa=D-2ab\,n\cdot m\), \(D=4(a^2+b^2)+r(x)+r(v)\), and \(|2ab/D|\) is uniformly at most \(1/4\). The average inverse is a locally and uniformly convergent analytic function of \((2ab/D)^2\) times \(D^{-1}\), by averaging even powers of the uniform angle cosine. Since \((ab)^2=(1-x^2)(1-v^2)\) is smooth through the closed square and \(D>0\), the claimed smoothness follows. Equivalently, only the regular neighborhood of the trial support is needed, because it is multiplied by \(\chi\). The fine function \(A\) is gauge invariant: \(x,v\) and \(\Gamma(\phi,\phi)\) are invariant, including the relative dot product under simultaneous conjugation at the basepoint.

For \(F_N=\chi e^{iN\phi}\) use \(f_N=F_N A\) on the fine space. Its conditional expectation is **exactly** \(F_N\), and it is gauge invariant. On the support the coefficient of its squared phase derivative becomes the conditional harmonic mean \(H=(\mathbb E[\kappa^{-1}\mid x,v])^{-1}\), since \(\mathbb E[A^2\kappa\mid x,v]=H\). If \(M=\mathbb E[\kappa\mid x,v]\), then
\[
 M-H=\mathbb E[(\kappa-H)^2/\kappa\mid x,v]
 \ \ge\ \operatorname{Var}(\kappa\mid x,v)/10
 \ \ge\ 3/40 .
\]
For real amplitudes the cross term in each squared gradient against the imaginary phase derivative vanishes, so the energy remainders beyond the principal \(N^2\) terms are fixed constants. For electric coefficient \(c>0\) and exact eliminated fine energy \(\mathcal E_{\rm elim}\) at this conditional mean, the trial gives
\[
 \mathcal E(F_N)-\mathcal E_{\rm elim}(F_N)
     \ \ge\ (3c/40)N^2\|\chi\|_2^2-O(c).
\]
The bare energy provides a matching \(O(N^2)\) upper bound on the deficit by nonnegativity of the fine infimum. The norm here is coarse Haar product trace law. Centering the tests does not affect the deficit and their means tend to zero by nonstationary phase on the regular support, so their variances stay bounded away from zero. For real tests, the deficits of the real and imaginary parts add to the complex deficit because the real constraints and energies separate, so one of them supplies an order-\(N^2\) sequence. All constructions also work when the fine infimum is restricted to gauge-invariant extensions, since the trial already belongs to that sector.

Run the companion rational check for the uniform constants. This is a finite Haar, gauge-invariant counterexample for separate-trace closure, not a claim about an interacting continuum limit or a quantitative full-lattice mass gap.
