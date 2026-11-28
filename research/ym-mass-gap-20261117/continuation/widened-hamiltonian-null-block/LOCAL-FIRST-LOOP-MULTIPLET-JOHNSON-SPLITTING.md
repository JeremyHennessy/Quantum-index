# The first physical common-path multiplet is a Johnson graph problem

Consider the finite common-path graph with one shared path of length \(r\) and \(M\ge3\) exclusive return paths of lengths \(u_i>0\), disjoint in their interiors, with only the common endpoints identified. Orient all based loop products \(Z_i=SP_i\) through the shared path in the same direction. The dimensionless couplings \(t_i=g_i/c\), the lengths \(u_i\), and \(M\) stay fixed as \(r\) grows, with \(c>0\) the unit-metric electric prefactor. The physical space is the simultaneous-conjugacy sector, by tree gauge fixing exactly these \(M\) cycle degrees. The result uses the previously established bounded-window Feshbach estimate to error \(O(r^{-2})\) in dimensionless energies; it is not uniform in \(M\).

## First kinetic level at arbitrary positive lengths

In the original independent Haar variables the exclusive kinetic term is \(L=\sum_i u_i(-\Delta_i)\). The fast kernel is the simultaneous left-invariant space. Within this kernel, imposing simultaneous conjugation is equivalent to simultaneous right invariance as well. On the original Peter--Weyl block indexed by twice-spins \(n_i\ge0\) the exclusive kinetic value is
\[
 e(n)=\sum_i u_i n_i(n_i+2).
\]
A diagonal singlet with nonconstant labels must have at least two nontrivial group factors, since one nontrivial irreducible spin alone contains no invariant vector. This excludes a competing one-group spin-one excitation, irrespective of its length. Therefore every nonconstant physical slow level is at least \(3(u_{(1)}+u_{(2)})\), where \(u_{(1)}\le u_{(2)}\) are the two smallest lengths counting multiplicity. Equality requires exactly two nontrivial labels, both \(n=1\), on a pair with this minimal sum: every extra nontrivial label costs positive energy and any larger spin pushes its pair contribution strictly above its own \(3(u_i+u_j)\). Two spin-\(1/2\) factors have a unique left singlet and a unique right singlet, so each such pair supplies exactly one physical mode. In particular the first level is attained and these are all its modes.

Let \(\mathcal I\) be the set of unordered minimal pairs. Its orthonormal mode basis is \(\phi_{ij}=2v_{ij}\), \(v_{ij}=\operatorname{Re}(Z_i^{-1}Z_j)\) for \(\{i,j\}\in\mathcal I\). Indeed \(Z_i^{-1}Z_j\) is Haar under the reference law, giving unit norm after multiplying by 2, and different pairs are orthogonal by one original-group center flip. Equivalently set \(Y_i=Z_1^{-1}Z_i\), \(Y_1=1\), so \(v_{ij}=\operatorname{Re}(Y_i^{-1}Y_j)\) on the slow space.

## Finite first-order matrix and ties

The leading effective potential from the fast segment is
\[
 -\frac1r\left(\alpha+\frac16\sum_{i<j}t_it_jv_{ij}\right),
 \qquad \alpha=\sum_i t_i^2/12.
\]
Every diagonal entry of the mixed sum on the first multiplet is zero by center parity. An off-diagonal entry between two different pair modes can be nonzero only if the pair labels share exactly one vertex and the multiplier uses their two unmatched vertices: the center parity of all three pairs must cancel. For example for distinct \(i,j,k\),
\[
 \langle\phi_{ij},v_{jk}\phi_{ik}\rangle=1/4.
\]
To calculate it, condition on \(Z_i\), giving independent Haar \(Z_i^{-1}Z_j,Z_i^{-1}Z_k\). Two factors in the triple integral are their zeroth coordinates and the third is their quaternion dot product. Their coordinate covariance matrix is \(I/4\), so the integral is \(1/16\) before the two mode factors multiply it by 4.

Thus the \(r^{-1}\) dimensionless matrix on the actual first kinetic cluster is \(-\alpha I-T/24\), where \(T_{\{i,j\},\{i,k\}}=t_jt_k\) for distinct adjacent pairs, and \(T=0\) on the diagonal or on disjoint pairs. Its eigenvalues give the first-order cluster shifts by the isolated kinetic spectral projection and the \(O(r^{-2})\) Feshbach comparison. For the ground mode, all \(v_{ij}\) have Haar mean zero, so the corresponding shift is just \(-\alpha/r\). In particular at arbitrary fixed lengths the lowest gap is
\[
 3c(u_{(1)}+u_{(2)})-\frac{c\,\lambda_{\max}(T)}{24r}
                       +O(cr^{-2}).
\]
If a unique pair minimizes the sum, \(T=0\). If the smallest length occurs \(p\ge2\) times, the tied pair set consists of all pairs among those \(p\) labels. Otherwise, if the unique shortest length is followed by \(q\) equal second-shortest lengths, the tied pairs are a star on those \(q\) possibilities; their unweighted incident-pair graph is \(K_q\). Thus the displayed weighted restriction also describes the unequal-length ties. Coupling signs can be removed from this matrix by changing each basis sign by the product of the signs at its two endpoints (with any choice for a zero coupling), but no positivity or simplicity hypothesis on the weighted matrix is needed for the formula.

## Equal lengths and couplings: the full Johnson spectrum

Now let all \(u_i=u\) and \(t_i=t\), with \(t\ne0\). Then \(\mathcal I\) is the full set of unordered pairs; incident pairs are the adjacent vertices of the Johnson graph \(J(M,2)\). Let \(B\) be the unoriented vertex--edge incidence matrix of the complete graph on \(M\) vertices. Its columns are pair labels, and
\[
 B^{\mathsf T}B=2I+\operatorname{Adj}J(M,2),\qquad
 BB^{\mathsf T}=(M-2)I+\mathbf1\mathbf1^{\mathsf T}.
\]
The nonzero eigenvalues of these Gram matrices coincide, with multiplicities. Hence the adjacency spectrum is
\[
 2(M-2)\ \text{(once)},\qquad M-4\ \text{(\(M-1\) times)},\qquad
 -2\ \text{(\(M(M-3)/2\) times)} .
\]
The last sector is absent at \(M=3\). Here \(T=t^2\operatorname{Adj}J(M,2)\). Subtracting the ground scalar shift gives the first physical gap
\[
 \boxed{\quad 6cu-\frac{ct^2(M-2)}{12r}+O(cr^{-2}).\quad}
\]
The other two sectors of this first multiplet have relative gap corrections \(-ct^2(M-4)/(24r)\) and \(+ct^2/(12r)\) with the multiplicities above, to the same remainder. The first eigenvalue in the multiplet is separated at this order for any fixed \(M\ge3\) and \(t\ne0\). Any later splitting inside a first-order degenerate sector is not addressed. The result can be read for an abstract finite graph of fixed \(M\); a fixed-dimensional nearest-neighbor lattice additionally constrains how many internally disjoint paths can exit one vertex.

The exact incidence replay checks the matrix identities, spectra for several \(M\), the triangle moment coefficient and unequal-length tied-pair counts. The proof uses neither a growing-\(M\) uniform estimate nor an interacting full-lattice, weak-bare, or continuum claim.
