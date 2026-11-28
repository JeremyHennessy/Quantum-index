# A common fast path induces interactions and can split the first physical multiplet

Consider an abstract finite graph with one common path \(S\) of length \(r\) and \(M\ge3\) mutually edge-disjoint exclusive return paths \(P_i\) of fixed lengths \(u_i>0\), disjoint from \(S\). Use the same orientation of \(S\) in all based loop holonomies \(Z_i=SP_i\). Reversing a loop makes no difference to its real trace. Each exclusive path is nonempty, so the \(Z_i\) are independent under reference Haar by conditioning on \(S\). Use unit quaternion electric metric, fixed \(c>0\), and dimensionless couplings \(t_i=g_i/c\) in the potential \(-\sum_i t_i\operatorname{Re}Z_i\). No other magnetic terms are included.

The full holonomy-tuple subspace is invariant for the fine Hamiltonian by the exact link differential formulas. To identify this subspace's simultaneous-conjugacy sector with the **entire** physical graph, assume in addition that all paths have disjoint interiors and only the common endpoints coincide. Then a spanning tree using \(S\) and all but one link of each return path leaves exactly \(M\) cycle holonomies up to simultaneous conjugation. We use such a graph in the splitting example.

## Slow coordinates and exact electric operator

Divide energies by \(c\), so the pair-generalized operator is
\[
 H_r/c=rK+L+V,\qquad
 K=-\sum_{a=1}^3\left(\sum_{i=1}^M\ell_i^a\right)^2,\quad
 L=\sum_{i=1}^M u_i(-\Delta_{Z_i}),\quad
 V=-\sum_{i=1}^M t_i\operatorname{Re}Z_i .
\]
Each shared link differentiates the product \(S\) isometrically, giving diagonal left increments on all \(Z_i\). An exclusive link contributes only its own group Laplacian. Put \(Y_1=1\) and \(Y_i=Z_1^{-1}Z_i\), \(2\le i\le M\). Reference Haar is product in \((Z_1,Y_2,\ldots,Y_M)\) by conditional left invariance. The fast action is simultaneous left multiplication in the original variables, so \(K=-\Delta_{Z_1}\) at fixed \(Y\). Its kernel projection \(P\) averages \(Z_1\), and on \(Q=1-P\) the gap is 3. Each exclusive Casimir commutes with the fast group action and hence with \(K\), for example by their finite original Peter--Weyl blocks. Thus \(L\) preserves \(P,Q\).

The exclusive slow electric operator is exactly
\[
 \boxed{\quad L_P
 =-u_1\sum_a\left(\sum_{i=2}^M\ell_{Y_i}^a\right)^2
       +\sum_{i=2}^M u_i(-\Delta_{Y_i}).\quad}
\]
Use the right-increment realization of each original Casimir. An increment \(Z_1\mapsto Z_1h\) changes every \(Y_i\mapsto h^{-1}Y_i\), giving the diagonal left Casimir in this formula. An increment \(Z_i\mapsto Z_ih\), \(i\ge2\), changes only \(Y_i\mapsto Y_i h\). Thus the slow kinetic term is not a sum of independently retained relative-loop energies in these coordinates. Since all \(u_i>0\), it is elliptic; on physical slow functions it is restricted to simultaneous conjugacy of the \(Y_i\).

## Bounded-window effective potential

On the slow space, \(V=-\sum_i t_i\operatorname{Re}(Z_1Y_i)\) is linear in the fast quaternion \(Z_1\) at fixed \(Y\). Therefore \(PVP=0\), and \(VP\) lies wholly at the fast eigenvalue 3. For fixed \(Y_i,Y_j\) use the four Haar quaternion coordinate covariances \(\delta_{\mu\nu}/4\):
\[
 \int \operatorname{Re}(Z_1Y_i)\operatorname{Re}(Z_1Y_j)\,dZ_1
     =\tfrac14\operatorname{Re}(Y_i^{-1}Y_j).
\]
On the slow sector the leading effective dimensionless operator is consequently
\[
 \boxed{\quad
 H_{\rm eff}=L_P-\frac1r\left[
       \sum_i \frac{t_i^2}{12}
       +\sum_{i<j}\frac{t_it_j}{6}\operatorname{Re}(Y_i^{-1}Y_j)
                         \right].\quad}
\]
In fixed bounded dimensionless spectral windows the Schur operator differs from \(H_{\rm eff}-z\) by \(O(r^{-2})\) in the \(H^1\)-to-\(H^{-1}\) slow form norm, and the corresponding bounded-window physical eigenvalues, with multiplicities, differ from those of \(H_{\rm eff}\) by \(O(r^{-2})\). Here the constants allow fixed \(M,u_i,t_i\), not growing families.

For the control, set \(A_0=rK_Q+L_Q\) and \(D(z)=A_0+QVQ-z\). Both inverses are \(O(1/r)\) and their difference is \(O(1/r^2)\) in operator norm by the bounded-perturbation resolvent identity. On the joint spectral calculus of \(K_Q,L_Q\), \(0\le(rK_Q)^{-1}-A_0^{-1}\le L_Q/(9r^2)\) as forms. In applying this to \(VPF\), the product rule gives \(\|L_Q^{1/2}VPF\|\le C\|(L_P+1)^{1/2}F\|\), since \(V\) has bounded exclusive gradient. This proves the Schur remainder without extending a high-energy inverse expansion in bare norm. For real \(z\) in the window the \(Q\) block is positive, and completing the exact \(Q\) square identifies the full negative index below \(z\) with the slow Schur index. Comparing that form with \(H_{\rm eff}-z\) by min--max, the error is bounded by \(Cr^{-2}(L_P+1)\) and so changes each fixed low eigenvalue by at most \(O(r^{-2})\). All operations commute with simultaneous conjugation, including the conjugacy restriction in the example below. Ellipticity at each finite \(r\) and compactness give discrete spectra.

## A first physical multiplet that splits at order \(1/r\)

Take \(M=3\) and all exclusive lengths equal to \(u\). This is a realizable finite graph, for example take adjacent endpoints in a cubic lattice, use three internally disjoint length-three detours in the positive \(y\), negative \(y\), and positive \(z\) directions, and a length \(2j+1\) shared path making a rectangle of depth \(j\) in negative \(z\). Thus \(u=3\) is a concrete admissible choice as \(r\) grows through odd values. The spectral calculation is the same for any equal admissible \(u\).

The physical fast-invariant slow space consists of original three-group functions invariant under simultaneous left and simultaneous right actions: on the left-invariant functions, simultaneous conjugation is equivalent to right invariance. In the original Peter--Weyl blocks, \(L\) has value \(u\sum_i n_i(n_i+2)\), with each group label \(n_i\) the twice-spin index. A fast diagonal left singlet cannot contain just one nonzero spin. The first nonzero allowed kinetic level is therefore \(6u\), achieved precisely by two spin-\(1/2\) labels and one trivial label. The two spin-\(1/2\)'s have exactly one singlet on each of the left and right sides, so the physical multiplicity is three (one for each choice of pair). An orthonormal basis is
\[
 \phi_{12},\ \phi_{13},\ \phi_{23},\qquad
 \phi_{ij}=2v_{ij},\quad
 v_{ij}=\operatorname{Re}(Y_i^{-1}Y_j)=\operatorname{Re}(Z_i^{-1}Z_j).
\]
Direct Haar verification uses \(\int v_{ij}^2=1/4\) and orthogonality by independent original group center flips.

At this level the only nonzero off-diagonal entry from each edge multiplier \(v_{ij}\) pairs the other two edges; all other entries vanish by original group center parity. For example
\[
 \langle\phi_{12},v_{23}\phi_{13}\rangle
  =4\int v_{12}v_{13}v_{23}\,dY_2\,dY_3
  =1/4 .
\]
Indeed \(v_{12},v_{13}\) are the zeroth quaternion coordinates of the independent \(Y_2,Y_3\), and \(v_{23}\) is their Euclidean dot product, giving \(1/16\) for the triple integral. The dimensionless \(r^{-1}\) correction on this multiplet is
\[
 -\frac{t_1^2+t_2^2+t_3^2}{12}I
 -\frac1{24}\begin{pmatrix}
 0&t_2t_3&t_1t_3\\
 t_2t_3&0&t_1t_2\\
 t_1t_3&t_1t_2&0
 \end{pmatrix}.
\]
At \(t_1=t_2=t_3=t\ne0\) its eigenvalues are \(-t^2/3\) once and \(-5t^2/24\) twice. Ordinary finite-level perturbation of \(H_{\rm eff}\) gives these as the leading coefficients of the split first cluster; the bounded-window Schur estimate transfers them to the actual physical finite graph with \(O(r^{-2})\) error. The ground coefficient is \(-t^2/4\) since all edge multipliers average to zero, so the first physical excitation gap for these fixed couplings is
\[
 \boxed{\quad 6cu-\frac{ct^2}{12r}+O(cr^{-2}).\quad}
\]
The next two gaps in that same cluster have coefficient \(+ct^2/(24r)\). In contrast to one perimeter group in the two-loop fixture, these mixed relative traces can have a genuine same-level compression. The proof establishes splitting, not a claim that the upper doublet is nondegenerate at higher orders.

The companion exact Haar-moment replay checks the basis norms, off-diagonal matrix and split eigenvalues. This is a finite common-path graph at fixed couplings, not a uniform many-plaquette, scale-flow, continuum or broader mass-gap result.
