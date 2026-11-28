# Actual second-order first physical excitation of the two-loop theta graph

Let a finite theta graph consist of three paths between two vertices, pairwise disjoint in their interiors. Their lengths are \(r,u,w\), where \(u,w>0\) stay fixed and \(r\to\infty\). The two active loops of lengths \(r+u,r+w\) traverse the common path oppositely and have based holonomies \(Z=SP\), \(W=QS^{-1}\). In the unit quaternion electric metric, put \(t_i=g_i/c\) for a fixed \(c>0\), with no other magnetic terms. Work on the physical gauge-invariant Hilbert space. A spanning tree containing the shared path and all but one link of each exclusive path leaves exactly the two cycle holonomies, up to simultaneous conjugation at the common basepoint. Thus this physical Hilbert space is exactly the jointly central subspace of independent Haar \(L^2(Z,W)\), not an assumption about extra cycles or spectators.

Write \(m=u+w\) and
\[
 \alpha=\frac{t_1^2+t_2^2}{12},\qquad
 \beta=\frac{t_1t_2}{6},\qquad
 \gamma=\frac{u t_1^2+w t_2^2}{12}.
\]
For fixed \(t_1,t_2\) as \(r\to\infty\), the physical ground and first excited energies satisfy
\[
 \begin{split}
 E_0/c&=-\alpha/r+\bigl(\gamma-\beta^2/(12m)\bigr)/r^2+O(r^{-3}),\\
 E_1/c&=3m-\alpha/r+\bigl(\gamma+\beta^2/(30m)\bigr)/r^2+O(r^{-3}).
 \end{split}
\]
In particular the actual first excitation is
\[
 \boxed{\quad E_1-E_0
       =3cm+\frac{7c\,\beta^2}{60m\,r^2}+O(cr^{-3})
       =3cm+\frac{7g_1^2g_2^2}{2160m\,c^3 r^2}+O(cr^{-3}).\quad}
\]
The leading gap change is strictly positive when both couplings are nonzero; one-coupling zero removes this coefficient. This is for this theta graph at fixed couplings, not a limit of full Wilson systems.

## Remainder by full smooth quasimodes

Write the dimensionless operator \(H_\epsilon=c^{-1}H=\epsilon^{-1}K+L+V\), \(\epsilon=1/r\), with \(K=-\sum_j(\ell_Z^j-r_W^j)^2\), \(L=u(-\Delta_Z)+w(-\Delta_W)\), and \(V=-t_1\operatorname{Re}Z-t_2\operatorname{Re}W\). Put \(Y=WZ\); let \(P\) be the fast-kernel projection to functions of \(Y\), \(Q=1-P\). As established in the bounded-window comparison, \(L\) preserves these spaces, \(L_P=m(-\Delta_Y)\), \(K_Q\ge3\), \(PVP=0\), and \(VP\) lies in the fast mode \(K=3\). The low physical slow levels of \(L_P\) are simple class characters. The bounded-window comparison also gives exactly one physical eigenvalue in a fixed neighborhood of each of the bare levels \(0,3m\) for sufficiently large \(r\), and no additional lower level between their neighborhoods.

Fix \(F=\chi_0=1\) or \(F=\chi_1=2\operatorname{Re}Y\), with unit Haar norm, and let \(e=0\) or \(3m\) be its \(L_P\) eigenvalue. Define
\[
 A=-PVK_Q^{-1}VP,\qquad
 B(e)=PVK_Q^{-1}(L_Q+QVQ-e)K_Q^{-1}VP.
\]
These formulas are initially used on fixed smooth central slow modes; no boundedness of \(B(e)\) on all slow \(L^2\) is asserted. Construct a full fine quasimode with \(P\)-part \(F+\epsilon f_1+\epsilon^2f_2\), \(Q\)-part \(\epsilon q_1+\epsilon^2q_2+\epsilon^3q_3\), and target energy \(e+\epsilon e^{(1)}+\epsilon^2 e^{(2)}\), as follows:
\[
 \begin{split}
 q_1&=-K_Q^{-1}VF,\\
 e^{(1)}&=\langle F,AF\rangle,\qquad
 (L_P-e)f_1=-(A-e^{(1)})F,\quad f_1\perp F,\\
 q_2&=-K_Q^{-1}\bigl[QVf_1+(L_Q+QVQ-e)q_1\bigr],\\
 e^{(2)}&=\langle F,A f_1+B(e)F\rangle,\qquad
 (L_P-e)f_2=-PVq_2+e^{(1)}f_1+e^{(2)}F,\quad f_2\perp F,\\
 q_3&=-K_Q^{-1}\bigl[QVf_2+(L_Q+QVQ-e)q_2-e^{(1)}q_1\bigr].
 \end{split}
\]
The \(P\)-equations are solvable by the stated scalar choices since \(PVq_2=A f_1+B(e)F\) and \(e\) is simple in the central slow space. These are actually finite smooth operations. Multiplication, electric differentiation and the coordinate changes \((Z,W)\leftrightarrow(Z,Y)\) preserve the union of finite-degree quaternion polynomial spaces. Fast averaging and \(K_Q^{-1}\) also preserve this union, by finite SU(2) Casimir decomposition at each polynomial degree. On central slow polynomials the reduced inverse of \(L_P-e\) is finite character expansion. Thus all the displayed coefficients are fixed smooth functions of the two-group variables, independent of \(r\), and belong to the operator domain for every finite \(r\). Every operation preserves joint conjugation invariance.

Substitution cancels all full \(P,Q\) residual terms through order \(\epsilon^2\); the \(\epsilon^3q_3\) term is included precisely to cancel the \(Q\) residual after the factor \(\epsilon^{-1}K\). The remaining residual in the full Haar \(L^2\) norm is \(O(\epsilon^3)\), since its finitely many coefficients are obtained from the fixed smooth functions by \(L+V\) or by bounded scalar multipliers. The quasimode norm tends to one. By the spectral theorem an actual physical eigenvalue lies within \(O(\epsilon^3)\) of the target energy. The prior bounded-window multiplicity distinguishes these as the ground and first physical excited eigenvalues. This controls the unbounded exclusive kinetic operator by fixed smooth correctors, rather than assuming a norm expansion of the fast resolvent over all energies.

## Scalar and mixed terms

As in the first-order perimeter calculation,
\[
 A=-\alpha-\beta\,\operatorname{Re}Y .
\]
The class kinetic eigenfunction \(F=\chi_n\) has center parity \((-1)^n\), so \(e^{(1)}=-\alpha\) and the first corrector \(f_1\) is driven only by \(-\beta\,\operatorname{Re}Y\). For the direct second term, \(K_Q^{-1}VF=VF/3\) gives
\[
 \langle F,B(e)F\rangle
     =\tfrac19\langle VF,(L+V-e)VF\rangle
     =\tfrac19\int |F|^2\Gamma_L(V,V)\,dZ\,dW .
\]
The cubic potential expectation vanishes by \((Z,W)\mapsto(-Z,-W)\), which preserves \(Y\), Haar and \(|F|^2\) while changing the sign of \(V\). The remaining equality uses \(LF=eF\): integrate \(\langle LF,V^2F\rangle\) by parts and subtract it from the gradient energy of \(VF\), leaving the product term \(|F|^2\Gamma_L(V,V)\). The exclusive carré du champ has no cross term between the group factors, so
\[
 \Gamma_L(V,V)=u t_1^2(1-(\operatorname{Re}Z)^2)
              +w t_2^2(1-(\operatorname{Re}W)^2).
\]
Given \(Y\), each group coordinate is Haar, hence the conditional means of the parenthetical factors are \(3/4\). Therefore the direct term is the same scalar \(\gamma\) in both levels.

Finally \(x=\operatorname{Re}Y\) has the exact character recurrence \(x\chi_n=(\chi_{n+1}+\chi_{n-1})/2\), \(\chi_{-1}=0\). For the ground state the \(A\)-driven term in \(e^{(2)}\) is \(-\beta^2/(12m)\), from the single transition to \(3m\). For the first excited state the two transitions go to \(0\) and \(8m\), giving \(\beta^2(1/(3m)-1/(5m))/4=\beta^2/(30m)\). Both scalar shifts cancel in the excitation difference, leaving the stated positive mixed coefficient. As a check, if \(t_1=0\) the ground expansion agrees with the one-active-loop term \(-t_2^2/[12(r+w)]\) through order \(r^{-2}\).

The companion exact quaternion replay at a nontrivial rational parameter fixture reconstructs the two central quasimodes and checks full residual cancellation through \(\epsilon^2\) and the three displayed energy coefficients. No uniform conclusion in \(t_i,u,w\), many-plaquette volume, weak-bare trajectories, or continuum scaling is claimed.
