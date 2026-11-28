# The first physical gap collapses in the equal-tag localization example

Use the equal-tag two-fast-path fixture and notation from the localization result, with nonzero \(\delta=\kappa_1\kappa_2/12\), \(B=r^{1/3}\), and scalar bottom center \(-B(\alpha+|\delta|)\) in dimensionless units. The actual low physical levels after this center differ by \(O(r^{-1/3})\) from the corresponding levels of
\[
 F_B=L_P+B U,\qquad U=|\delta|-\delta xy
\]
on the product Haar class spaces of the two exclusive loops. In particular the first two shifted levels both diverge as \(B^{1/2}\). Nevertheless the **actual first physical excitation gap** tends to zero; in fact
\[
 0\le E_1(r)-E_0(r)\le Cc\,r^{-1/3}.
\]
This is an upper bound in this finite-skeleton sequence, not a tunneling asymptotic or a continuum statement.

Reflect \(y\) if necessary to write \(U=|\delta|(1-xy)\), without changing the spectrum. Then the two wells are at \((x,y)=(1,1),(-1,-1)\), and \(F_B\) commutes with the simultaneous reflection \(R:(x,y)\mapsto(-x,-y)\). Let \(\psi_B\) be its unit normalized positive ground state and \(e_0(B)\) its ground eigenvalue. Positivity and simplicity can be seen on the full compact product group: the operator there is elliptic with a bounded smooth multiplication potential, and a unique positive ground state; conjugation invariance makes it a product-class function. The same uniqueness and positivity imply \(\psi_B\circ R=\psi_B\). The preceding localization bound gives \(e_0(B)=O(B^{1/2})\).

Pick a smooth bounded odd function \(h:\mathbb R\to[-1,1]\) with \(h(s)=\operatorname{sgn}s\) for \(|s|\ge1\), and \(\eta(x,y)=h(x+y)\). Then \(\eta\psi_B\) is odd and orthogonal to \(\psi_B\) in the product Haar law. Both \(1-\eta^2\) and the derivatives of \(\eta\) are supported in the central strip \(|x+y|\le1\), a fixed barrier away from both wells. The ground-state form identity for any real smooth multiplier \(g\) is
\[
 \langle g\psi_B,(F_B-e_0(B))g\psi_B\rangle
   =\int \psi_B^2\,\Gamma_{L_P}(g,g)\,d\sigma.
\]
It follows by subtracting the weak ground equation tested against \(g^2\psi_B\) from the fine gradient product rule; no boundary integration at individual singular angles is needed on the compact group cover.

For an initial barrier estimate one could directly use \(B\int U\psi_B^2\le e_0(B)\), giving barrier mass \(O(B^{-1/2})\). The same identity gives a stronger bound with one cutoff. Choose \(g=\chi(x+y)\) equal to 1 for \(|x+y|\le1\), supported inside \(|x+y|<3/2\). On its support, \(xy\le(x+y)^2/4\) gives \(U\ge7|\delta|/16>0\). Since \(L_P\ge0\), the left side in the identity is at least \((7B|\delta|/16-e_0(B))\|g\psi_B\|^2\). Its right side is at most a fixed constant, since \(g\) has bounded electric gradient. Thus
\[
 \int_{|x+y|\le1}\psi_B^2\,d\sigma=O(B^{-1}).
\]
In particular \(\|\eta\psi_B\|^2\ge1-O(B^{-1})\), and the identity with \(g=\eta\) gives a Rayleigh excess at most \(C/B\) after division by that norm. Min–max on the orthogonal complement of the ground state yields
\[
 0\le e_1(B)-e_0(B)\le C/B .
\]
If desired, finitely many nested cutoffs between widths 1 and \(3/2\) iterate the same estimate, because each right side is bounded by the mass in the next larger strip. Thus the slow two-well gap is \(O_N(B^{-N})\) for each fixed \(N\), with constants allowed to depend on \(N\). This is not needed for the transfer and gives no tunneling coefficient.

The earlier Schur comparison transfers both actual first physical levels to \(e_0(B),e_1(B)\) with error \(O(r^{-1/3})\) after their common scalar center. Consequently their physical gap is bounded above by \(c[O(B^{-1})+O(r^{-1/3})]=O(cr^{-1/3})\). Its nonnegativity follows simply because these are the actual ordered ground and first excited levels. The result needs symmetry only of the slow well operator; no exact rate for the full fast-dressed tunneling is asserted. It is compatible with diverging individually centered levels, and does not imply any claim about an extended lattice or continuum mass gap.
