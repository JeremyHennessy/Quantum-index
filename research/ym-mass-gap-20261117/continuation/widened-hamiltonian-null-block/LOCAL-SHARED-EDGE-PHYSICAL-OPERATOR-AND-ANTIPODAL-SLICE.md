# Adjacent Wilson squares: exact physical operator and interacting antipodal slice

Use the unit-quaternion round metric on \(G=SU(2)\), so \(-\Delta_G\) has fundamental eigenvalue 3. Let two ordinary squares share exactly one edge \(S\) in a finite spatial cubic graph containing just their union. Work in dimensionless electric units. Base both square holonomies at the source \(o\) of \(S\), orienting the traversals oppositely on that edge:
\[
 A=SP,\qquad B=QS^{-1}.
\]
Here \(P\) is the first square's exclusive three-edge return from the end of \(S\) to \(o\), and \(Q\) the second square's exclusive three-edge outward route from \(o\) to the end of \(S\). All exclusive edges are distinct. Put \(x=\operatorname{Re}A,\ y=\operatorname{Re}B,\ d=\operatorname{Im}A\cdot\operatorname{Im}B\). Magnetic couplings \(t_1,t_2\) are independent until the special slice calculation.

## Exact reduction and domain

Choose a spanning tree that includes \(S\), deleting one exclusive edge from each square; each of the remaining exclusive pieces attaches to one of the two endpoints of \(S\). Tree gauge fixing leaves two cycle data, with remaining gauge at \(o\) acting by simultaneous conjugation. They can be identified with \(A,B\) by the path convention above. The physical Hilbert space is \(L^2(G^2,dA\,dB)^{\rm Ad}\): conditional on \(S\), the exclusive products are independent Haar, so the Haar pushforward of \((A,B)\) is exactly independent Haar. The gauge quotient therefore uses this Haar inner product, not a flat coordinate measure on a rectangle of separate traces.

Write \(\ell^a\) for the infinitesimal left increment \(U\mapsto e^{sE_a}U\) and \(r^a\) for the right increment \(U\mapsto Ue^{sE_a}\), with the unit imaginary quaternion basis. Differentiating any exclusive link in its loop affects only that loop and acts by an isometry on its holonomy (fixed left/right multipliers and possibly inversion). Each contributes the same \(\Delta_G\). For the shared edge, \(S\mapsto e^{sE_a}S\) sends \(A\mapsto e^{sE_a}A\) and \(B\mapsto B e^{-sE_a}\), exactly for the full one-parameter flow. Its generator is \(\ell_A^a-r_B^a\). Thus the reduced operator on the physical subspace is
\[
 H_{\rm phys}=-\Delta_E-t_1x-t_2y,\qquad
 \Delta_E=3\Delta_A+3\Delta_B+\sum_a(\ell_A^a-r_B^a)^2
         =4\Delta_A+4\Delta_B-2\sum_a\ell_A^a r_B^a .
 \tag{1}
\]
In the last equality the two loop fields commute on different factors. Inverting \(B\), so both traversals use the shared edge in the same orientation, replaces the shared generator by \(\ell_A^a+\ell_{B^{-1}}^a\) and leaves the real trace potential unchanged. No magnetic coefficient is absorbed into the kinetic normalization.

On the full pair \(G^2\), (1) is positive-kinetic, uniformly elliptic by the exclusive \(3\Delta\) terms, with the smooth functions as a core and \(H^2\) operator domain. Compactness, smooth bounded potential, and a strictly positive elliptic heat semigroup yield a smooth simple positive ground state. Simultaneous conjugation commutes with the operator; its positive ground is invariant by uniqueness. Averaging the smooth core over the conjugation group proves the physical restriction has the invariant part of the same domain and core. Pullback to fine links is a positive eigenfunction, hence is also the fine graph's positive vacuum. No boundary condition is separately imposed when representing the invariant subspace in singular coordinates.

The pair orbit is determined by \((x,y,d)\), whose range is \(d^2\le(1-x^2)(1-y^2)\). The needed operator tests, with \(\Gamma\) the electric gradient pairing, are
\[
 \begin{gathered}
 \Delta_E x=-12x,\quad \Delta_E y=-12y,\quad
 \Gamma(x,x)=4(1-x^2),\quad \Gamma(y,y)=4(1-y^2),\quad \Gamma(x,y)=-d,\\
 \Delta_E(xy)=-24xy-2d,\qquad
 \Delta_E d=-6xy-20d .
 \end{gathered}
 \tag{2}
\]
For the cross sign, \((\ell_A^a x)_a=-\operatorname{Im}A\), \((r_B^a y)_a=-\operatorname{Im}B\), and the shared variation has a minus sign for \(B\). The last identity follows because \(xy-d=\operatorname{Re}(BA)=\operatorname{Re}(QP)\), the trace with six distinct exclusive links, has electric eigenvalue \(-18\).

## A raw antipodal slice and the failure of separation

Use two adjacent planar squares with their shared vertical edge starting at the bottom central vertex \(o\). The chosen length-two coarse path follows the two exclusive bottom links, entering \(o\) along \(U_1\) and leaving \(o\) along \(U_2\); set all other raw links to identity, including \(S\). Fix the retained path product \(z=U_1U_2=-I\). With free prefix \(V=U_1\) one has exactly \(A=V,\ B=-V^{-1}\). If \(x=\operatorname{Re}V\), the orbit coordinates on the slice are
\[
 (x,y,d)=(x,-x,1-x^2).
 \tag{3}
\]
Indeed the two imaginary parts coincide. The true prefix density relative to Haar is the normalized square of the interacting pair ground evaluated at this orbit curve. The induced prefix metric is twice round, and the physical restrictions are radial since the pair orbit in (3) is determined by \(x\); every smooth central test arises from a smooth function of \(A\) on the graph. The usual raw conditional has a positive smooth version at these pinned values by the product-coordinate disintegration, despite individual exact conditions being Haar-null events.

For \(t_1t_2\ne0\) a positive factorized ground \(F(A)G(B)\) on the pair is impossible. If such a product is simultaneously conjugation invariant, integrating over one factor shows \(F,G\) are each independently central. At regular traces write them as positive functions of \(x,y\). In (1) the positive kinetic cross term then contributes \(2d F'(x)G'(y)\), whereas the two marginal electric pieces and magnetic terms depend only on \(x,y\). If both factors are nonconstant, there exist separate regular traces with nonzero derivatives, at which \(d\) can vary on an interval; the eigen-equation cannot hold. If one factor is constant, the corresponding nonzero magnetic term still depends on its trace while all other terms do not, again a contradiction. Thus the separated two-square vacuum method is not available.

Moreover the retained curve is not invariant for the electric operator viewed on invariant functions: the smooth polynomial \((x+y)^2\) vanishes on (3), but by (2) its electric Laplacian there is \(12(1-x^2)\), nonzero in the open slice. Consequently the restriction of the eigen-equation does not close as a one-dimensional ODE for the ground trace. One must obtain some information from the surrounding joint orbit space, not simply substitute the slice into an independent radial square equation.

## Exact perturbative witness of interaction on this same slice

The operator has an isolated simple vacuum at zero coupling, so the log ground \(u=\log\Omega\) is analytic near zero on this fixed finite compact geometry in \(C^2\), by smooth bounded perturbation on the relevant Sobolev spaces. Normalization only changes additive constants in \(u\). The first term is \(u=(t_1x+t_2y)/12+\cdots\). In the log equation, \(-\Delta_E u=t_1x+t_2y+|\nabla_Eu|^2-\text{constant}\). Hence the mixed coefficient obeys
\[
 -\Delta_E[t_1 t_2]u=-d/72,\qquad
 [t_1t_2]u=xy/5616-d/1404+\text{constant},
 \tag{4}
\]
where the solution follows from the two identities for \(xy,d\) in (2). The pure second coefficients are \(-(x^2-1/4)/1152\) and \(-(y^2-1/4)/1152\), up to constants: the derivative pairing in (2) gives the nonconstant source \(-(x^2-1/4)/36\) and the Casimir of \(x^2-1/4\) is 32 under \(-\Delta_E\).

At equal couplings \(t_1=t_2=t\), the log conditional density relative to Haar, after ignoring its \(x\)-independent normalization, is therefore
\[
 \log q_t(x)=\text{constant}-\frac{t^2}{416}x^2+O(t^4).
 \tag{5}
\]
The product-vacuum assumption would yield only \(-t^2 x^2/288\); (4) supplies the nonconstant correction \(+t^2x^2/936\) in the actual log density. The absence of a cubic term in (5) is exact: at equal couplings the pair involution \((A,B)\mapsto(B^{-1},A^{-1})\) preserves (1) and maps (3) to \(x\mapsto -x\). The simultaneous center flip of the two distinct path links preserves all fixed values (including \(z=-I\)), takes \(t\mapsto -t\), and likewise maps \(V\mapsto -V\). Their combination gives an even-in-\(t\) conditional density on this exact slice. The remainder is for this fixed compact geometry and does not address large \(t\).

A concrete next strong-coupling test is to bound the centered trace
\(\log\Omega_t(V,-V^{-1})-\log\Omega_t(V_0,-V_0^{-1})\) with \(\operatorname{Re}V_0=0\), first on \(x\) compact away from the endpoints, and to determine whether its leading rate has a single nondegenerate maximum or competing maxima on that curve. This would require bounds for the **interacting** elliptic problem (1), including its derivatives normal to (3); neither symmetry nor (5) determines it. No large-\(t\) spectrum or continuum claim follows.
