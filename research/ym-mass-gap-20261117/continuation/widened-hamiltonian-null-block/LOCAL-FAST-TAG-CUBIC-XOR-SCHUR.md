# Different fast tags can couple at cubic order

Use a finite SU(2) path-product graph with link-disjoint fast products \(S_a\) of length \(r\), disjoint slow products \(U_j\) of fixed positive lengths, unit quaternion electric metric, and normalized Haar. As in the leading tag reduction, the product-coordinate Hamiltonian divided by the electric coefficient \(c\) is
\[
 H=rK+L+V,\qquad K=\sum_a(-\Delta_{S_a}),\qquad
 L=\sum_j u_j(-\Delta_{U_j}).
\]
All word counts and dimensionless real couplings are fixed as \(r\to\infty\). Let \(P\) average the fast Haar coordinates, \(Q=1-P\), so \(K_Q\ge3\). Group potential terms by the set \(A\) of fast products used, \(V=\sum_A V_A\). Each word uses any fast product at most once, in either orientation. The source \(V_A PF\) for a slow function \(F\) is pure eigenvalue \(3|A|\) of \(K\), and is in \(Q\) for \(A\ne\varnothing\). The empty-tag term has no \(P\)-to-\(Q\) source.

## Controlled fixed-core expansion through \(r^{-2}\)

For a bounded dimensionless spectral parameter \(z\), write \(A_r=rK_Q\), \(M_z=Q(L+V-z)Q\), \(D_z=A_r+M_z\). For large \(r\), \(D_z^{-1}\) has norm \(O(r^{-1})\) by \(K_Q\ge3\), \(L\ge0\), and bounded \(V,z\). On endpoint sources \(a=QVPF\), \(b=QVPG\) with smooth slow \(F,G\), one can use twice the resolvent identity to obtain
\[
 D_z^{-1}=A_r^{-1}-A_r^{-1}M_z A_r^{-1}
                 +A_r^{-1}M_z D_z^{-1}M_z A_r^{-1}
\]
as **matrix elements** on these sources, not as a free operator-norm expansion with unbounded \(L\). Here all first endpoint inverses are in the domain of \(L_Q\): \(K_Q^{-1}QVPF=\sum_{A\ne\varnothing}(3|A|)^{-1}V_A F\) is a smooth multiplier sum applied to \(F\). Thus \(\|M_zK_Q^{-1}QVPF\|\le C\|(L+1)F\|\), from the slow group product rule at derivative orders up to two. For complex \(z\) the bound for the left pairing uses \(M_{\bar z}\); the same norm estimates apply. One can justify the displayed elementwise identity by starting on \(A_r^{-1}a,A_r^{-1}b\) in the joint \(K_Q,L_Q\) domain, using \(D_z^{-1}\) there and its resolvent relation on each side. The last term when sandwiched therefore has magnitude at most \(Cr^{-3}\|(L+1)F\|\|(L+1)G\|\). In particular the expansion is norm-controlled on any fixed finite-dimensional smooth slow spectral core, uniformly in bounded \(z\).

The Schur form is \(L+PVP-z-PVQ D_z^{-1}QVP\). Its two inverse correction orders are consequently
\[
 -\frac1r PV K_Q^{-1}VP
 +\frac1{r^2}PVK_Q^{-1}Q(L-z)QK_Q^{-1}VP
 +\frac1{r^2}PVK_Q^{-1}QVQ K_Q^{-1}VP.
\]
Here \(K_Q^{-1}\) is extended by zero on \(P\). The second displayed term is a kinetic and spectral-parameter correction, distinct from the third, which is cubic in the potential terms. The fixed-core proof does not by itself identify the full slow spectrum to error \(O(r^{-3})\).

## Center parity and endpoint weights of the cubic term

At cubic order an ordered triple of tags \((A,B,C)\) has nonempty *endpoint* tags \(A,C\); the middle \(B\) may be empty. Between the two endpoint sources the intervening \(Q\) projections can be dropped in the pairing because the endpoint vectors are already in \(Q\). Since each endpoint has its definite fast eigenvalue, the ordered contribution to the cubic **multiplication** operator is
\[
 \frac{1}{9|A|\,|C|\,r^2}\,P V_A V_B V_C P.
\]
There is no denominator from the middle tag. Under the independent center flip of \(S_a\), this integrand changes sign if \(a\) belongs to an odd number of the three tags. Consequently its fast Haar mean vanishes unless
\[
 A\triangle B\triangle C=\varnothing .
\]
This is a necessary parity rule, not a guarantee of nonzero value for arbitrary words or coefficients. In contrast to the leading quadratic order, it permits all three tags to be different.

## Exact nonzero example on an actual gauge graph

Take distinct endpoints \(a,b,c_0,d\), disjoint path interiors, and orient paths as
\[
 \begin{array}{llll}
 S_1:a\to b,& U_1:b\to a,&
 S_2:c_0\to d,& U_2:d\to c_0,\\
 U_3:b\to c_0,&U_4:d\to a.&&
 \end{array}
\]
Let
\[
 f=\operatorname{Re}(S_1U_1),\qquad
 g=\operatorname{Re}(S_2U_2),\qquad
 h=\operatorname{Re}(S_1U_3S_2U_4),\qquad
 V=-t_1 f-t_2 g-t_3 h .
\]
These are closed Wilson paths with tags \(\{1\},\{2\},\{1,2\}\). Average first in \(S_1\), using \(\int\operatorname{Re}(SA)\operatorname{Re}(SB)dS=\operatorname{Re}(A^{-1}B)/4\). This replaces \(fh\) by \(\operatorname{Re}(U_1^{-1}U_3S_2U_4)/4\). Cyclicity of real trace and the same second moment in \(S_2\) then give
\[
 P(fgh)P=\frac1{16}\operatorname{Re}(U_2^{-1}U_4U_1^{-1}U_3).
\]
The product inside that trace is the actual slow closed path \(c_0\to d\to a\to b\to c_0\), so this is a real gauge-invariant multiplication function. The slow gauge actions are the original independent endpoint actions after the fast coordinates are averaged, not ones obtained by identifying the endpoints of a fast path. Here deleting the fast paths leaves only a single slow cycle. Holding it at identity, or varying it by an exclusive link, shows its real trace is not the zero function.

The parity-allowed triples in this example are exactly the six orders of the three distinct terms. Two have both endpoints of cardinality 1, and four have endpoint cardinalities 1 and 2. Their denominator weights sum to \(2/9+4/18=4/9\). The three signs in \(V\) give the net effective cubic contribution in dimensionless energy:
\[
 \boxed{\quad
   -\frac{t_1t_2t_3}{36r^2}\operatorname{Re}(U_2^{-1}U_4U_1^{-1}U_3).
   \quad}
\]
The leading \(r^{-1}\) quadratic effects in this particular example are only the scalar \(-[(t_1^2+t_2^2)/12+t_3^2/24]/r\), since all tags are distinct and each individual squared word has fast average \(1/4\). The \(r^{-2}\) kinetic and \(z\)-dependent terms are not included in the boxed cubic coefficient.

Since all graph paths have disjoint interiors, fixing internal link gauge leaves exactly the described endpoint products with Haar and residual endpoint gauge. \(P,Q,K,L\) commute with that gauge, and the three trace multipliers are invariant, so the same elementwise expansion holds in the physical space. Multiply all dimensionless corrections by \(c\) for physical energy units. The companion exact quaternion replay verifies the Haar triple average, the passing parity permutations, and the rational prefactor. This is a fixed finite-network statement, not a uniform growing-graph, weak-bare, or continuum theorem.
