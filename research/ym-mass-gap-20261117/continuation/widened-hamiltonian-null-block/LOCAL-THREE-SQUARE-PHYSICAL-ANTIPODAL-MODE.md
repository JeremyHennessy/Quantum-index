# A noncentral spectator makes the low antipodal angular mode physical

Use a finite three-square Wilson subcomplex with the squares pairwise edge-disjoint and meeting just at one common vertex. It embeds in the ordinary three-dimensional cubic lattice by taking respectively the pairs of root directions \((+x,+y)\), \((-x,+z)\), and \((-y,-z)\), and including their square edges and plaquette terms. This is the stated finite subcomplex, not a claim for a full rectangular bulk lattice with more plaquette terms. Use equal Wilson coefficients \(t\), unit-quaternion \(SU(2)\) metric and electric prefactor one. Base the three holonomies \(A,B,C\) at the common vertex. They transform by simultaneous conjugation.

Retain the length-two path product \(z=-I\), where the path enters the common vertex through an edge of the first square and exits through an edge of the second. Fix their remaining raw links to identity. Fix all four links of the third square to leave some noncentral holonomy \(C=C_0\) (for example three identity links and a single unit imaginary quaternion, with orientation chosen accordingly). The third square acts only as a fixed spectator for this fiber. The exact positive full vacuum is the product \(\psi_t(A)\psi_t(B)\psi_t(C)\) in the notation of the one-square reduction: the edge sets are disjoint, product Haar pushes to independent square Haar variables, and the dimensionless Hamiltonian on this pullback is the sum of the individual operators. The positive eigenfunction is the vacuum by simplicity and heat positivity.

Along the fixed raw fiber, \(A=V\), \(B=-V^{-1}\), and \(C=C_0\). The free prefix \(V\) has exactly the previously proved antipodal density \(\psi_t(V)^2\psi_t(-V^{-1})^2\,dV\), with twice the round metric. The factor \(\psi_t(C_0)^2\) cancels in the conditional normalization; the third square contributes no tangent motion. Thus the same radial law concentrates at \(\theta=\pi/2\). Unlike the two-square identity-spectator example, however, a degree-one angular test is now the restriction of a smooth gauge-invariant global function.

Indeed choose the positive constant \(c=|\operatorname{Im} C_0|\), and use the global function
\[
 f(A,B,C)=\frac{\operatorname{Re}A\,\operatorname{Re}C-\operatorname{Re}(AC)}{c}.
\]
Each term is invariant under simultaneous conjugation, hence under all allowed vertex gauges. The denominator is a constant, not a possible singularity on other configurations. On this fiber \(f=\operatorname{Im}V\cdot\operatorname{Im}C_0/c\) by quaternion multiplication, one smooth global sphere coordinate. Consequently the restricted test has zero conditional mean by conditional angular symmetry; writing \(I_t=\mathbb E_{\nu_t}[\sin^2\theta]\), its conditional variance is \(I_t/3\). A unit round coordinate has squared gradient \(1-f^2\); the doubled-round conditional energy is \((1-I_t/3)/2\). Hence the physical restricted raw conditional gap obeys
\[
 \gamma_{\rm phys,raw}(t)\le \frac{3-I_t}{2I_t}\longrightarrow1
 \qquad (|t|\to\infty),
\]
where the displayed limit is of the upper bound. By the companion antipodal radial-gap result, the full ambient gap of this exact same conditional measure tends to 1: the radial sector grows and the degree-one sector tends to 1. The physical restricted gap cannot be lower than the ambient gap because it uses a subspace of tests for the same form. Thus \(\gamma_{\rm phys,raw}(t)\to1\) exactly. The upper argument alone does not require the companion lower bound.

This gives an actual gauge-invariant large-coupling counterexample to any proposed law that **all** such raw fixed-spectator fiber gaps must grow like \(\sqrt{|t|}\) in dimensionless electric units. It does not show a collapsing gap: the stated finite subcomplex has a nonzero limiting gap. Multiplying by the physical electric prefactor also changes its size. No long-cutoff, interacting bulk, or continuum claim is made.
