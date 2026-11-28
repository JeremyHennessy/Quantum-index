# All fixed equal-tag low levels have a two-corner oscillator limit

Use the equal-tag two-fast-path localization fixture, with \(B=r^{1/3}\), \(\delta=\kappa_1\kappa_2/12\ne0\), and \(\alpha=(\kappa_1^2+\kappa_2^2)/24\). The fast paths have length \(r\); the exclusive length sums \(m_x,m_y>0\) remain fixed. Let \(E_j(r)\) be the ordered actual physical eigenvalues, \(j=0,1,\ldots\), and \(c>0\) the fixed electric coefficient. For each fixed \(j\),
\[
 \boxed{\quad
 \frac{E_j(r)+cB(\alpha+|\delta|)}{cB^{1/2}}\ \longrightarrow\ \mu_j .
 \quad}
\]
Here \(\{\mu_j\}\) is the sorted multiset formed by **two copies** of
\[
 (4n+3)\sqrt{m_x|\delta|/2}+(4k+3)\sqrt{m_y|\delta|/2},
          \qquad n,k=0,1,2,\ldots .
\]
Thus dividing only by \(r^{1/6}=B^{1/2}\) in physical energy units yields \(c\mu_j\). The two copies, including any additional commensurate-frequency multiplicities, are part of the spectral limit. This is a finite graph-skeleton localization result, not a continuum or tunneling theorem.

## Slow form in angular coordinates

The preceding physical Schur comparison places the max-centered dimensionless low eigenvalues within \(O_j(r^{-1/3})\) of the fixed-ranked eigenvalues of
\[
 F_B=L_P+B U,\qquad
 U=|\delta|-\delta xy,\qquad
 L_P=m_x(-\Delta_{{\rm class},X})+m_y(-\Delta_{{\rm class},Y}).
\]
Reflect the second trace if necessary, and write \(x=\cos\theta,y=\cos\varphi\) with \(U=d(1-\cos\theta\cos\varphi)\), \(d=|\delta|>0\). Multiplication by the normalized product of sines maps the product Haar class space to flat \(L^2((0,\pi)^2)\), with kinetic operator
\[
 -m_x\partial_\theta^2-m_y\partial_\varphi^2-(m_x+m_y)
\]
and the flat Dirichlet form domain. This domain is the actual angular transform of the class form: the normalized class characters map to the product sine eigenbasis. The fixed negative constant can be left out until the end since it is \(O(B^{-1/2})\) in the stated rescaled energies.

The only potential minima are the two opposite same-sign corners \((0,0)\) and \((\pi,\pi)\). Near either corner in inward coordinates the Taylor comparison on a box of side \(\ell\) is
\[
 U(\theta,\varphi)=\tfrac d2(\theta^2+\varphi^2)(1+O(\ell^2))
\]
with uniform multiplicative constants for that box, including up to its physical axes. Indeed the additive Taylor error is \(O((\theta^2+\varphi^2)^2)\). Away from fixed small neighborhoods of those corners \(U\) has a positive minimum. In combination these observations give a global lower bound by a positive constant times the squared distance to the nearer well.

## Dirichlet and Neumann bracketing

Choose \(0<\rho<1/4\), \(\ell=B^{-\rho}\), and cut out disjoint corner squares of side \(\ell\). For the upper bracketing form impose Dirichlet on the artificial cuts; for the lower form allow independent Neumann cuts by permitting jumps across them. The physical axes of each corner retain Dirichlet in both bracket forms. The true form domain is contained in the lower direct-sum domain, and contains the zero extensions from the upper direct-sum domain, so min–max brackets its eigenvalues in sorted order. Both outside components of this comparison (with either artificial boundary condition) have \(U\ge c_0\ell^2\). In rescaled energy their bottom tends to infinity, since \(B^{1/2}\ell^2=B^{1/2-2\rho}\to\infty\); the kinetic gradient is nonnegative. Thus all fixed low ranks of either bracketing sum eventually come from its two corner boxes. The same-sign corners are exactly related by simultaneous reflection and have identical local forms.

Dilate inward coordinates by \(h=B^{-1/4}\) and divide energy by \(B^{1/2}\). The box side becomes \(R=\ell/h=B^{1/4-\rho}\to\infty\). The rescaled kinetic is exactly \(-m_x\partial_s^2-m_y\partial_t^2\), and the rescaled potential is bounded between \((1-C\ell^2)(d/2)(s^2+t^2)\) and \((1+C\ell^2)(d/2)(s^2+t^2)\). The total positive corner forms are consequently bounded above and below by \(1\pm C\ell^2\) times the corresponding quadratic-potential box form; this comparison does not require any Taylor bound on derivatives of eigenfunctions. It remains to justify that both box boundary conditions converge to the same quadrant oscillator, including Neumann on the receding far sides.

## Receding mixed box boundary and the limit spectrum

Write \(O\) for the quadrant Dirichlet oscillator with quadratic form
\[
 q[u]=m_x\|\partial_su\|^2+m_y\|\partial_tu\|^2
           +\tfrac d2\int(s^2+t^2)|u|^2\,ds\,dt .
\]
Its domain is \(H^1_0((0,\infty)^2)\) with finite quadratic moment. It has compact resolvent, for example by the Rellich embedding on fixed squares plus the moment bound on the outside tails. Let \(O_R^D,O_R^N\) be its restriction to \((0,R)^2\), both Dirichlet at the two axes and respectively Dirichlet and Neumann on the far sides. These domains and energies are the flat corner form domains just described. Dirichlet extension by zero and domain inclusion give \(\lambda_j(O)\le\lambda_j(O_R^D)\) and \(\lambda_j(O_R^N)\le\lambda_j(O_R^D)\).

Use a smooth product cutoff \(\chi_R\) equal to one on \([0,R/2]^2\), zero near the far sides, with derivatives bounded by \(C/R\). On any bounded-energy finite-dimensional subspace of either a box or the quadrant, the mass outside \([0,R/2]^2\) is \(O(R^{-2})\) uniformly for unit-norm vectors, by the quadratic moment. Hence \(u\mapsto\chi_R u\) has squared norm at least \(1-C/R^2\), and is injective on that subspace for large \(R\). The energy increases by at most \(C/R^2\): the potential term decreases, the gradient cross term is bounded by the uniform gradient norm times \(\|u\nabla\chi_R\|\le C/R^2\), and the additional gradient square is smaller. Cutting the first \(j+1\) quadrant modes provides \(\lambda_j(O_R^D)\le\lambda_j(O)+O_j(R^{-2})\). This also bounds the first \(j+1\) Neumann box modes uniformly in energy. Cutting that box eigenspace and extending by zero to the quadrant preserves Dirichlet at the axes and gives \(\lambda_j(O)\le\lambda_j(O_R^N)+O_j(R^{-2})\). This proves convergence of both artificial boundary conditions, with the stated bounded-rank control.

The quadrant oscillator separates. In one dimension, the Dirichlet half-line oscillator with mass coefficient \(m\) and potential coefficient \(d/2\) is the odd sector of the full-line oscillator under reflection. The full-line energies are \((2q+1)\sqrt{md/2}\); retaining \(q=2n+1\) gives \((4n+3)\sqrt{md/2}\). The tensor product has the sum eigenvalues displayed at the start. The two identical corners give two copies. From the comparison above, both brackets converge at every fixed rank. For example choosing \(\rho=1/8\) bounds their rescaled coefficient errors by \(O_j(B^{-1/4})\) from the multiplicative Taylor error and the \(R^{-2}\) cutoff error, plus \(O(B^{-1/2})\) for the fixed kinetic constant. The outside bound goes to infinity regardless of these errors.

Finally the true physical Schur transfer error \(O_j(r^{-1/3})\) before dividing by \(B^{1/2}=r^{1/6}\) becomes \(O_j(r^{-1/2})\), so the same multiset limit holds for the actual physical eigenvalues. The result concerns fixed low ranks and does not resolve splitting between the two copies at smaller scales. It asserts no tunneling law, general lattice, or continuum limit.
