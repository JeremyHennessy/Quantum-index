# A fourth-order obstruction in the global Riesz frame

**2026-11-25 | Research-only diagnostic | No continuum claim**

The [wider sign-window proof](2026-11-25-even-band-localized-sign-window.md) controlled the second-order centered band uniformly and left a fourth-order term bounded by the extensive perturbation norm. A natural next attempt is to prove that every fixed-order coefficient in the same holomorphic Riesz frame is volume-local. That assertion is false across the class of Wilson systems with spatial terms deleted or systems disconnected into independent components. This is a coordinate obstruction, not a nonlocal interaction in the underlying Hamiltonian.

## Disjoint Wilson control

Take a disjoint union of m identical one-square components and m identical two-square components; in each two-square component the plaquettes share exactly one edge. Work in the tensor product of their gauge-invariant Hilbert spaces. The free vacuum and energy-six cluster of each component have the same properties as the [electric-band calculation](2026-11-25-electric-adjoint-residue.md). On each component s let \(P_{0s}(z)\) and \(P_{bs}(z)\) be the analytic vacuum and band projections for \(H_s=L_s+zV_s\). At fixed m, for small real z, the full band's exact factorization is a direct sum of sectors with one component in its band and all others in their vacua: simultaneous excited components have free decay at least 12, outside the contour around −6. Thus the projection is
\[
 P_b(z)=\sum_s P_{bs}(z)\bigotimes_{t\ne s}P_{0t}(z).
\]
Set \(e_i=2\tau_i\) for a plaquette i. A product-respecting analytic frame on the free one-plaquette band uses
\[
 T_{\rm prod}(z)e_i=P_{bs}(z)e_i\otimes\bigotimes_{t\ne s}P_{0t}(z)1_t,\qquad i\in s .
\]
It is invertible onto the band for small z, and in this frame the vacuum-centered generator is an exact direct sum of the component vacuum-centered generators. There is no intercomponent hopping at any order in this frame.

## The global projection frame is different

The band restriction of the full Riesz frame \(S=\sum_{j=0,b,h}P_j(z)P_j(0)\) equals \(P_b(z)\) on the free band. Applied to \(e_i\) in component s, it has the term \(T_{\rm prod}e_i\), but also terms from each other component t:
\[
 P_{0s}(z)e_i\otimes P_{bt}(z)1_t\otimes
 \bigotimes_{u\ne s,t}P_{0u}(z)1_u.
\]
For each i the coefficient of z in \(P_{0s}(z)e_i\), relative to the local vacuum frame \(P_{0s}(z)1_s\), is +1/12. Indeed the vacuum derivative is \(V_s/6\) and \(\langle e_i,V_s\rangle=1/2\). For each plaquette j of t the coefficient of z in \(P_{bt}(z)1_t\), relative to \(P_{bt}(z)e_j\), is −1/12: the Riesz off-diagonal derivative between energies −6 and 0 is \(P_{bt}(0)V_t1/(-6)\). Thus \(S_b=T_{\rm prod}(I+z^2 C+O(z^3))\), where \(C_{ji}=-1/144\) if i,j are in different components, and zero within the same component. These formulas extend holomorphically by analytic continuation from small real z at each fixed m.

Let the direct sum generator in the product frame have quadratic coefficient \(J\). The quartic coefficient of its representation in the global Riesz frame differs from the product-frame quartic coefficient by the commutator \(JC-CJ\), since the zeroth-order generator is scalar and the linear coefficient is zero. In a one-square component J has row sum \(-7/120\), while in a two-square component \(J=(D+B)/168-(7/120)I\) has row sums \(-7/120+1/84\). For each row in a two-square component and column in a one-square component the global quartic coefficient is therefore \(-1/(144\cdot84)=-1/12096\). The reverse block has the opposite sign, as expected for this essentially nonorthogonal change of coordinates of a symmetric leading generator. The product-frame quartic coefficient is block diagonal and cannot cancel those entries.

The cross submatrix has \(2m\) rows and m columns and constant entries of that magnitude. Its Euclidean operator norm is \(\sqrt2\,m/12096\). This is an exact obstruction to claiming a volume-independent norm of the fourth Taylor coefficient for that Riesz frame over disconnected Wilson controls. It is not a result about the homogeneous connected open cube's quartic coefficient, and does not rule out a bound in a frame designed to preserve spatial factorization. [Kato's analytic perturbation framework](https://link.springer.com/book/10.1007/978-3-642-66282-9) guarantees holomorphy on each finite system; it does not require that every coordinate representation preserve locality across this family.

## Checks and next step

The negative control with both types chosen as identical one-square components has identical row sums and hence zero cross commutator, despite the nonzero mixed frame coefficients \(C_{ij}\). This tests that the separation between local excitation shifts is essential to the fourth-order obstruction. Directly summing the factorized partition functions also gives an exactly independent local normalized quotient on each separate component. The spurious volume growth is therefore not a counterexample to the desired locality of the physical observable. It points to a factorization-preserving band frame or a direct connected expansion of the boundary quotient as the appropriate next test.
