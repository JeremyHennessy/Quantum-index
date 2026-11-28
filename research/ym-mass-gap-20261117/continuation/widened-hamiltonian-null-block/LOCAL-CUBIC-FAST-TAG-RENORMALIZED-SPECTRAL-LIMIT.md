# A finite nontrivial spectral limit at the cubic fast-tag scale

Use the four-endpoint, six-path graph with disjoint path interiors and oriented products
\[
 S_1:a\to b,\quad U_1:b\to a,\quad S_2:c_0\to d,\quad
 U_2:d\to c_0,\quad U_3:b\to c_0,\quad U_4:d\to a.
\]
The two fast paths have length \(r\), with fixed exclusive \(U_j\) lengths \(u_j>0\), unit quaternion electric metric, and normalized Haar. Fix real \(\kappa_i\), and use dimensionless couplings \(t_i=r^{2/3}\kappa_i\) with no external slow term. Define
\[
 \begin{split}
 f&=\operatorname{Re}(S_1U_1),\qquad
 g=\operatorname{Re}(S_2U_2),\qquad
 h=\operatorname{Re}(S_1U_3S_2U_4),\\
 V&=-\kappa_1 f-\kappa_2 g-\kappa_3 h,\qquad
 H_r=rK+L+r^{2/3}V,\qquad
 K=-\Delta_{S_1}-\Delta_{S_2},\quad L=\sum_j u_j(-\Delta_{U_j}).
 \end{split}
\]
Here \(H_r\) is divided by the physical electric coefficient \(c>0\). Fixing internal gauges leaves the same path-product Hilbert space, with residual endpoint gauge, for every \(r\), although the number of subdivided fine edges grows. All conclusions refer to this fixed graph skeleton.

Let \(X=U_2^{-1}U_4U_1^{-1}U_3\), \(x=\operatorname{Re}X\), \(m=\sum_j u_j\) and
\(\alpha=(\kappa_1^2+\kappa_2^2)/12+\kappa_3^2/24\).
For the actual **physical** Hamiltonian after scalar renormalization, the dimensionless bounded-window spectrum satisfies
\[
 \boxed{\quad
  H_r+r^{1/3}\alpha\ \longrightarrow\
     H_{\rm slow}=m(-\Delta_{\rm class})-\frac{\kappa_1\kappa_2\kappa_3}{36}\,x
  \quad}
\]
in the spectral sense developed below: corresponding fixed low eigenvalues, with multiplicity, converge with error \(O(r^{-1/3})\). In particular the actual physical first excitation gap tends to \(c\) times the gap of the displayed slow class operator. This is not a claim of an operator limit with finite fast energies, or of a continuum or general lattice mass gap. For \(\tau=\kappa_1\kappa_2\kappa_3/36\) sufficiently small but nonzero at fixed \(m\), the limiting gap is genuinely changed: the class character recurrence for multiplication by \(x\) gives \(c[3m+7\tau^2/(60m)+O(\tau^4/m^3)]\), strictly above \(3cm\) in that small regime. No monotonicity for arbitrary \(\tau\) is assumed.

## Fast scalar and finite cubic term

Let \(P\) average the two fast Haar products and let \(Q=1-P\); \(K_Q\ge3\), and \(L\) commutes with \(K,P\). The coarse \(P\)-space in the physical sector is exactly Haar class functions of \(X\): deleting the two fast paths leaves one slow cycle, and the original independent endpoint gauges remain. Its kinetic operator is \(L_P=m(-\Delta_{\rm class})\) by the loop product isometries. Internal tree gauge fixing and residual endpoint gauge show that this physical space describes the whole finite graph, not just a chosen pair subspace. The fast projection and the Schrödinger operators preserve the gauge-invariant sector.

The three nonempty marked tags are distinct: \(\{1\},\{2\},\{1,2\}\), so \(PVP=0\) and the marked endpoint sources have fast energies 3, 3 and 6. The exact quadratic covariance is scalar:
\[
 PVK_Q^{-1}VP=\alpha P .
\]
The exact cubic covariance, with \(K_Q^{-1}\) extended by zero on \(P\), is
\[
 PVK_Q^{-1}QVQK_Q^{-1}VP
       =-\frac{\kappa_1\kappa_2\kappa_3}{36}\,x\,P.
\]
For completeness, its only allowed terms by independent fast-center flips are the six permutations of the three different words. Their endpoint inverse weights sum to \(2/9+4/18=4/9\), and Haar in \(S_1\) then \(S_2\) gives \(\mathbb E[fgh\mid U]=x/16\). Their three potential signs are negative. The equal-tag second moments are \(1/4\), with the distinct quadratic cross terms zero. The induced real trace is an actual slow Wilson class, not an unbased noninvariant product.

## Controlled shifted Schur result

Set \(\beta=r^{2/3}\), \(z=-r^{1/3}\alpha+\zeta\) with \(\zeta\) in a fixed bounded set, and on \(Q\) write
\[
 A=rK_Q+L_Q,\qquad B=\beta QVQ-z,\qquad D=A+B .
\]
Then \(A^{-1},D^{-1}=O(r^{-1})\) in norm, since \(A\ge3r\) and \(\|B\|=O(r^{2/3})\). In particular when \(\zeta\) is real the shifted fast block is positive for large \(r\). Here \(B\) is bounded; the unbounded slow kinetic stays in \(A\). The exact bounded-perturbation inverse identity is
\[
 D^{-1}=A^{-1}-A^{-1}BA^{-1}+A^{-1}BD^{-1}BA^{-1}.
\]
The Schur form is \(L_P-z-\beta^2 PVQ D^{-1}QVP\). After multiplying by \(\beta^2\), the last resolvent term is \(O(r^{-1/3})\) in operator norm, because its norm is at most \(C\beta^2 r^{-2}\beta^2 r^{-1}\).

Let \(A_{\rm f}=rK_Q\). Joint spectral calculus for the commuting nonnegative \(K_Q,L_Q\) gives
\[
 0\le A_{\rm f}^{-1}-A^{-1}\le \frac{L_Q}{9r^2}.
\]
On a slow \(F\) the product rule \(\|L_Q^{1/2}QVPF\|\le C\|(L_P+1)^{1/2}F\|\) follows from the fixed smooth word multipliers. Hence the leading Schur term can use \(A_{\rm f}^{-1}\) at \(O(r^{-2/3})\) cost in the slow \(H^1\) to \(H^{-1}\) form norm. This yields exactly \(-r^{1/3}\alpha\), canceling the large scalar in \(-z\).

In the cubic term \(\beta^3 PVA^{-1}QVQA^{-1}VP\) replace both endpoints by the fast inverse. For a joint spectral value \(a\ge3,\ell\ge0\),
\[
 \frac{\ell}{ra(ra+\ell)}
  =\frac{1}{ra}\frac{\ell/(ra)}{1+\ell/(ra)}
  \le \frac{\sqrt\ell}{(ra)^{3/2}} ,
\]
so \(\|(A^{-1}-A_{\rm f}^{-1})v\|\le C r^{-3/2}\|L_Q^{1/2}v\|\). The other inverse remains \(O(r^{-1})\); the same product-gradient bound therefore gives \(O(r^{-1/2})\) form error after \(\beta^3=r^2\). With fast endpoints the cubic term is exactly the order-one multiplication \(-\kappa_1\kappa_2\kappa_3 x/36\). The separate \(-z\) part of \(B\) contributes \(O(\beta^2|z|r^{-2})=O(r^{-1/3})\) in norm, not another order-one potential. Together these prove, uniformly in bounded \(\zeta\),
\[
 S_r(z)=H_{\rm slow}-\zeta+
                  O_{H^1\to H^{-1}}(r^{-1/3}).
\]
No inverse norm expansion treating \(L_Q\) as bounded was made.

## Transfer to actual physical spectrum

For real bounded \(\zeta\), the \(Q\) block \(D\) is positive. Completing the exact \(Q\) square identifies the number of shifted physical eigenvalues strictly below \(\zeta\) with the negative index of \(S_r(z)\). The form bound just proved is bounded by \(C r^{-1/3}(L_P+1)\), and \(H_{\rm slow}-L_P\) is bounded. Comparing the Schur form by min--max with \(H_{\rm slow}-\zeta\), the error shifts each fixed low level by \(O(r^{-1/3})\), with multiplicity. In particular a sufficiently negative fixed \(\zeta\) has positive slow Schur form and no lower eigenvalues, so a diverging branch is not missed below the window. Every bounded interval with endpoints away from the slow spectrum has the corresponding eigenvalue count for large \(r\).

Equivalently, on a compact set of bounded \(\zeta\) away from the slow spectrum, the Schur form inverse differs from \((H_{\rm slow}-\zeta)^{-1}\) by \(O(r^{-1/3})\) in norm using the fixed slow form mass and a Neumann series. The block inverse off-diagonal terms are \(O(\beta\|D^{-1}\|)=O(r^{-1/3})\). The complementary resolvent block is bounded by \(O(r^{-1})+O(r^{-2/3})\). This gives norm convergence of the shifted physical resolvent to the slow resolvent embedded by \(P\), zero on \(Q\); it is a compressed limit rather than the resolvent of a densely defined limit with retained finite-energy \(Q\) states.

For comparison, had \(t_i=\sqrt r\,\kappa_i\), the distinct-tag quadratic contribution would be only the finite common scalar \(-\alpha\), and the cubic contribution would be \(O(r^{-1/2})\). After scalar centering there is no such order-one interaction on that smaller scale. The present \(r^{2/3}\) result is a nontrivial but entirely finite-graph overlap limit, relying on the fixed tag selection and exact Haar moments. It does not claim a universal renormalization prescription, a growing many-plaquette estimate, or continuum behavior.
