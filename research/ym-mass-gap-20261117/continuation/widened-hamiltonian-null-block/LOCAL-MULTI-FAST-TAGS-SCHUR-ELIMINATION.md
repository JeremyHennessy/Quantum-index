# Independent fast segments enforce a tag selection rule

Consider a finite graph with distinct link-disjoint marked path products \(S_a\), each of length \(r\), and disjoint exclusive slow path products \(U_j\) of fixed positive lengths \(u_j\). Assume each path product uses its own independent fine links, and every magnetic Wilson word is a smooth function of these products. Use unit quaternion electric metric, normalized Haar, and divide the Hamiltonian by its electric coefficient \(c>0\). There are finitely many segments and words, with fixed dimensionless couplings \(t=g/c\). The number of segments and slow geometry are held fixed as \(r\to\infty\).

Each individual path product has Haar distribution by Haar invariance of its link coordinates; different products are independent. Differentiating with respect to each link in a given product contributes one unit group Laplacian on that product. The product-coordinate fine Hamiltonian is exactly
\[
 H=rK+L+V,\qquad
 K=\sum_a(-\Delta_{S_a}),\qquad L=\sum_j u_j(-\Delta_{U_j}).
\]
In particular the pullback to path products is an invariant subspace. If paths have disjoint internal vertices and meet only at their endpoints, this reduction retains the full gauge-invariant Hilbert space after imposing residual endpoint gauge, by gauge fixing the internal links on each path and retaining the endpoint transport. If there are additional fine degrees of freedom this exhaustiveness is not assumed. Gauge acts by endpoint left/right multiplications on these path products, so the magnetic closed trace terms and Casimirs preserve its invariant subspace.

## Fast tag selection and the exact leading coefficient

For the stated selection rule, each Wilson trace uses each fast product at most once, either oriented forward or inversely. Group the signed potential terms as \(V=\sum_A V_A\) by the set \(A\) of fast products they use. Empty \(A\) is allowed and is just a slow potential. Let \(P\) Haar-average all the fast coordinates, so its range is the kernel of \(K\); \(Q=1-P\) has \(K_Q\ge3\). Both projections commute with the endpoint gauge action (including left/right multiplication on fast coordinates) and \(L\), not in general with \(V\).

For a slow function \(F(U)\), \(V_A F\) belongs to the joint fast electric eigenspace with eigenvalue 3 on each marked coordinate in \(A\), 0 on every other one. Indeed a normalized trace linear in one fundamental group entry is linear in its unit quaternion coordinates; the inverse changes signs on imaginary coordinates but is equally linear. The resulting total fast value is \(3|A|\), and the vector has mean zero when \(A\ne\varnothing\). Equivalently under a center flip on segment \(a\), the vector changes sign just when \(a\in A\), so distinct tags are orthogonal, even when their cardinalities coincide. It follows for \(A,B\ne\varnothing\) that
\[
 P V_A K_Q^{-1} V_B P=0\quad(A\ne B),\qquad
 P V_A K_Q^{-1} V_A P=(3|A|)^{-1}P V_A^2P.
\]
For each \(U\), \(P V_A^2 P\) is multiplication by the normalized fast Haar average of \(V_A^2\). The tag-empty term gives \(PVP=V_\varnothing\) and contributes no off-diagonal \(P\)-to-\(Q\) source. A word with repeated occurrences of a marked segment does not obey the assumed first-harmonic rule, and is outside this statement.

In any fixed bounded dimensionless spectral window the leading effective slow operator is therefore
\[
 \boxed{\quad H_{\rm eff}=L+V_\varnothing
       -\frac1r\sum_{A\ne\varnothing}\frac{P V_A^2 P}{3|A|} .\quad}
\]
The Schur form differs from \(H_{\rm eff}-z\) by \(O(r^{-2})\) in slow \(H^1\)-to-\(H^{-1}\) norm. Indeed on \(Q\) both inverses of \(A_0=rK_Q+L_Q\) and \(A_0+QVQ-z\) have norm \(O(1/r)\), and their difference is \(O(r^{-2})\) in norm by the bounded-perturbation resolvent identity. Since \(K,L\) strongly commute, their joint spectral calculus gives \(0\le(rK_Q)^{-1}-A_0^{-1}\le L_Q/(9r^2)\) as forms. For smooth finite-word potentials the product derivative bound \(\|L_Q^{1/2}QVPF\|\le C\|(L+1)^{1/2}F\|\) follows by the slow product rule. This proves the sandwiched form estimate without discarding unbounded slow kinetic terms in norm. At real \(z\) in the bounded window, the \(Q\) block is positive for large \(r\); completing its square preserves the negative index of the full spectral form and reduces it to the one of the slow Schur form. The latter is bounded above and below by \(H_{\rm eff}-z\) plus or minus \(Cr^{-2}(L+1)\). Min--max brackets each fixed low eigenvalue by its \(H_{\rm eff}\) value plus or minus \(O(r^{-2})\), including multiplicity, since \(V_\varnothing\) and the effective multiplication terms are bounded. Ellipticity on the compact product gives the discrete spectra; the gauge-invariant restrictions are reducing and satisfy the same argument. Physical energies carry the factor \(c\).

## Actual two-fast-segment fixture

Choose four distinct vertices \(a,b,c_0,d\). Put \(S_1:a\to b\), \(S_2:c_0\to d\), two disjoint slow paths \(U_1,U_3:b\to c_0\), and two disjoint slow paths \(U_2,U_4:d\to a\), all with disjoint interiors. This is an actual finite subdivided graph, with the two marked paths each of length \(r\). Its two active Wilson words are
\[
 f=\operatorname{Re}(S_1U_1S_2U_2),\qquad
 g=\operatorname{Re}(S_1U_3S_2U_4),\qquad V=-t_1f-t_2g.
\]
Both have fast tag \(\{1,2\}\). At fixed slow variables the normalized real-trace covariance over \(S_1\) is \(\int\operatorname{Re}(S_1 A)\operatorname{Re}(S_1 B)\,dS_1=\tfrac14\operatorname{Re}(A^{-1}B)\), by Haar quaternion coordinate second moments. Thus their cross after averaging \(S_1\) is \(\tfrac14\operatorname{Re}(U_2^{-1}S_2^{-1}U_1^{-1}U_3S_2U_4)\). Haar conjugation of a quaternion averages its imaginary part to zero. Therefore
\[
 \mathbb{E}_{S_1,S_2}[fg\mid U]
  =\tfrac14\,\operatorname{Re}(U_1^{-1}U_3)\operatorname{Re}(U_2^{-1}U_4).
\]
Each same-word second moment is \(1/4\). The actual effective potential correction is accordingly
\[
 -\frac1r\left[\frac{t_1^2+t_2^2}{24}
             +\frac{t_1t_2}{12}\,x y\right],\qquad
 x=\operatorname{Re}(U_1^{-1}U_3),\quad y=\operatorname{Re}(U_2^{-1}U_4).
\]
Both \(x,y\) are gauge invariant. In the fast kernel the original endpoint gauge groups remain independent: a function independent of both fast paths is just a gauge-invariant function of the two separated exclusive slow bundles. There is no identification of those endpoint gauges by contracting a fast edge. More explicitly the residual physical slow space is product Haar class space of \(X=U_1^{-1}U_3\), \(Y=U_2^{-1}U_4\), since gauges can independently set \(U_1,U_2\) to the identity and conjugate the resulting loops. The corresponding slow electric metric coefficients are \(u_1+u_3\) for \(X\) and \(u_2+u_4\) for \(Y\).

For example if both length sums equal \(m\), the first physical slow kinetic level \(3m\) has the orthonormal two-mode basis \(2x,2y\). Multiplication by \(xy\) has zero same-mode diagonal and off-diagonal \(4\mathbb E[x^2 y^2]=1/4\). Its ground expectation is zero. Hence with both couplings nonzero the two first physical excitation gaps split with corrections \(\pm c|t_1t_2|/(48r)\) about \(3cm\), up to \(O(cr^{-2})\); a common scalar shift in the absolute energies cancels from the gaps. This is an explicit example of a surviving two-segment equal-tag interaction, not a mixed interaction between different tags.

The companion exact quaternion replay checks the cross integral and gap prefactor. All estimates are finite with fixed word set, slow lengths, and couplings. They give no result for a growing set of segments, a general full-lattice vacuum, or continuum scaling.
