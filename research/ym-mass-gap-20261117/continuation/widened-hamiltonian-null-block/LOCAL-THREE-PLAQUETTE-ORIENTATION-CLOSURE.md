# Three loops can force an oriented triple in a closed coarse algebra

Take three SU(2) elementary plaquettes based at the same vertex. Plaquettes 1 and 2 have the same one-edge shared arrangement as in the adjacent-pair computation; plaquette 3 has no shared edges. Such a finite cubic configuration can use two \(x\)-\(y\) plaquettes on opposite \(x\) sides of the positive \(y\) edge, and a \(y\)-\(z\) plaquette in the negative \(y\) direction. All holonomies are based and oriented as indicated below. The fine geometry uses normalized Haar and unit quaternion electric metric. This is a finite closure diagnostic, not an interacting or continuum estimate.

Write \(Z_1=SP,\ Z_2=QS^{-1}\) at the common basepoint, where \(S\) is the single shared link, and write \(Z_3\) for the separate loop. Under Haar, the three holonomies are independent Haar: condition on \(S\) and use the independent exclusive path products and independent third loop. Put
\[
 Z_i=(x_i,\mathbf a_i),\qquad
 d_{ij}=\mathbf a_i\cdot\mathbf a_j,\qquad
 \tau=\mathbf a_1\cdot(\mathbf a_2\times\mathbf a_3).
\]
The fine Laplacian on functions of the full triple is
\[
 \Delta_E=3\Delta_1+3\Delta_2+4\Delta_3+
                         \sum_j(\ell_1^j-r_2^j)^2 ,
\]
where the superscripts denote the three unit imaginary quaternion generators. This follows by differentiating the shared link on the left and using isometry on each of the other links. Every fine gauge acts on the three based holonomies by simultaneous conjugation at the common basepoint or acts trivially.

## Pairwise dots do not suffice

Let \(\Gamma\) denote the associated gradient pairing. The only common derivative of \(x_1\) and \(d_{23}\) is on the shared link. For the basis \(e_j\) of imaginary unit quaternions, the shared vector field \(D_j=\ell_1^j-r_2^j\) has
\[
 D_jx_1=-a_{1,j},\qquad
 r_2^j\mathbf a_2=x_2e_j+\mathbf a_2\times e_j,\qquad
 (D_j d_{23})_{j=1}^3=-x_2\mathbf a_3+\mathbf a_2\times\mathbf a_3.
\]
The last sign comes from
\((\mathbf a_2\times e_j)\cdot\mathbf a_3
=-e_j\cdot(\mathbf a_2\times\mathbf a_3)\).
Contracting the shared fields gives the exact identity
\[
 \boxed{\ \Gamma(x_1,d_{23})=x_2 d_{13}-\tau.\ }
\]
Thus any gradient-closed retained algebra that contains the \(x_i\) and the \(d_{ij}\) must also retain \(\tau\). The same obstruction appears for the Laplacian of a retained product: \(\Delta_E x_1=-12x_1\) and \(\Delta_E d_{23}=-24d_{23}\), the latter because the mixed link derivative acts trivially on a function independent of \(Z_1\). Consequently
\[
 \Delta_E(x_1d_{23})=-36x_1d_{23}+2x_2d_{13}-2\tau.
\]

For a concrete reflected pair take all \(x_i=0\) and \((\mathbf a_1,\mathbf a_2,\mathbf a_3)=(i,j,k)\) or \((i,j,-k)\). Both have identical pairwise dots and diagonal lengths but \(\tau=1,-1\), and the retained gradient pairing in the box is respectively \(-1,+1\). All holonomies in this fixture are realizable by fixing \(S\) and choosing exclusive fine links. The effect is not restricted to exceptional points: on independent Haar axes a simultaneous orthogonal reflection preserves the real parts and Gram matrix, preserves Haar, and flips \(\tau\). Their imaginary vectors span three dimensions almost surely, so the two signs have equal conditional probability where the Gram determinant is positive. Internal reflection is not a gauge conjugation.

## Oriented traces restore the joint quotient and closure

The \(x_i\), dots \(d_{ij}\) and oriented \(\tau\) determine the simultaneous-conjugacy orbit exactly. The Gram matrix determines the three vectors up to an orthogonal isometry of \(\mathbb R^3\), extending an isometry on their span. In full rank the sign of \(\tau\) specifies the orientation; in lower rank it is zero and one can choose the orientation of the extension on the nonzero orthogonal complement. Every resulting rotation lifts to an SU(2) conjugation. The algebraic relation \(\tau^2=\det[(\mathbf a_i\cdot\mathbf a_j)_{ij}]\), with diagonal entries \(1-x_i^2\), explains why magnitudes alone leave exactly the orientation ambiguity in full rank.

All the required invariants can be recovered by normalized real traces of words of length at most three. In the chosen multiplication order,
\[
 \operatorname{Re}(Z_iZ_j)=x_i x_j-d_{ij},
 \qquad
 \operatorname{Re}(Z_1Z_2Z_3)
  =x_1x_2x_3-x_1d_{23}-x_2d_{13}-x_3d_{12}-\tau .
\]
Reversing the triple order changes the sign of the last term. Thus a single triple trace, in addition to all length-one and length-two traces, suffices to recover the missing information.

The smooth retained algebra of the resulting quotient means smooth simultaneously conjugation-invariant functions on the full three-group cover. It satisfies both Laplacian and gradient closure: conjugation rotates all Lie basis labels by the same orthogonal matrix and preserves each squared sum in \(\Delta_E\); the product rule then gives the same equivariance for \(\Gamma\). Each output is invariant and therefore depends only on the orbit-complete retained trace data. This does not assert smooth extension of quotient coordinates across singular strata of a Euclidean presentation. Conditional projection is smooth in the group cover by solving one exclusive link per loop and then averaging simultaneous conjugation. The extra triple trace is forced by the boxed gradient identity; it is not an arbitrary extra axis.

The companion exact quaternion replay verifies the signed gradient contraction, reflection fixtures, triple word traces and Gram relation. The result concerns only these three finite loops and their quotient geometry, not any multi-volume, weak-bare, mass-gap or continuum theorem.

The trace-coordinate description is classical; see [Goldman, *Trace coordinates on Fricke spaces of some simple hyperbolic surfaces*](https://doi.org/10.4171/055-1/16). The calculation here identifies the specific fine electric gradient identity that forces the oriented coordinate for this finite Wilson geometry; it makes no priority claim about trace generators.
