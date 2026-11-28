# Exact interacting ground-state score equation for a two-link path

This is an identity on a finite SU(2) lattice configuration space with its product bi-invariant electric metric. It does not estimate the conditional inverse-energy score uniformly in volume or spacing, and is not a continuum statement.

Write \(H=-c\Delta+V\), where \(c>0\), \(\Delta=\sum_e\Delta_e\) is the nonpositive product Laplacian, and \(V\) is the finite real smooth gauge-invariant Wilson potential. The compact elliptic ground state \(\Omega>0\) is smooth and gauge invariant by positivity and uniqueness. Let \(\rho=\Omega^2\) and \(L=\Omega^{-1}(H-E_0)\Omega\), the full ground-state transformed generator on \(L^2(\rho\,d\mathrm{Haar})\). For any smooth vector field \(T\),
\[
 L(T\log\rho)
 =2\Omega^{-1}(H-E_0)T\Omega
 =-2TV+2c\,\Omega^{-1}[T,\Delta]\Omega ,
\]
with \([T,\Delta]=T\Delta-\Delta T\). The first equality uses \(T\log\rho=2\Omega^{-1}T\Omega\); the second follows by differentiating the ground-state equation, with \([V,T]\Omega=-(TV)\Omega\). Thus a constant electric Killing field \(X\), such as a constant left or right translation on a link, has \([X,\Delta]=0\) and exactly
\[
 L(X\log\Omega^2)=-2XV .
\]
Smoothness on the compact configuration space puts the functions here in the domains of the stated differential operators. Generic horizontal path fields are not Killing.

## Two-link horizontal lift and electric commutator

Use the **standard** adjoint convention \(\operatorname{Ad}_U X=UXU^{-1}\). Denote by \(\ell_e^X\) differentiation of \(e^{tX}U_e\) and by \(r_e^X\) differentiation of \(U_e e^{tX}\). For two forward oriented links \(1,2\) with product \(Z=U_1U_2\), the unit horizontal lift of a fixed unit direction \(X\) is
\[
 Y=\operatorname{Ad}_{U_1^{-1}}X,\qquad
 T=\tfrac1{\sqrt2}(\ell_1^X+\ell_2^Y).
\]
Indeed \(U_1 e^{tY} U_2=e^{tX}Z\); the first-link derivative gives the same path derivative. This uses the **inverse prefix** under the declared adjoint convention. The earlier path-score note denotes the rotated direction by the prefix; with the standard adjoint and left link variation, that phrase must mean the inverse-prefix rotation above. The horizontal metric and Haar-disintegration conclusions are unchanged with this explicit lift. Both terms are Haar-divergence-free: the coefficient in the second depends only on the first link.

Take \(E_a\) orthonormal for \(-\tfrac12\operatorname{tr}(XY)\) on anti-Hermitian traceless matrices. They may be chosen as the three imaginary quaternions, with Lie bracket twice the cross product. Thus \(\sum_a [E_a,[E_a,Y]]=-8Y\). Since \(r_1^{E_a}Y=-[E_a,Y]\) and \(\Delta_1=\sum_a(r_1^{E_a})^2\), this gives \(\Delta_1Y=-8Y\). All constant electric fields commute with the Laplacian; the only noncommutation in \(T\) arises from the first-link coefficients of \(\ell_2^Y\). Applying the product rule,
\[
 [T,\Delta]=\tfrac1{\sqrt2}\left(
    8\ell_2^Y+2\sum_a\ell_2^{[E_a,Y]}r_1^{E_a}\right).
\]
The Lie-algebra coefficients here multiply the result of a derivative and are not further differentiated inside a mixed term. In another electric metric the adjoint Casimir replaces 8; the ground-state score formula consistently retains the prefactor \(2c\).

## Ward transfer and a nonzero interacting fixture

At the intermediate vertex a constant gauge generator is
\[
 G_v^Z=-r_1^Z+\ell_2^Z+G_{\mathrm{rest}}^Z,
\]
where the last term acts on the other incident links with their appropriate endpoint signs. Gauge invariance implies \(G_v^Zf=0\); it continues to hold pointwise when the generator label is chosen to be \(Z=Y(U_1)\). Since \(r_1^Y=\ell_1^X\) pointwise, on every gauge-invariant input
\[
 Tf=\left(\sqrt2\ell_1^X-\tfrac1{\sqrt2}G_{\mathrm{rest}}^Y\right)f .
\]
The product Laplacian preserves gauge invariance. Therefore the two versions of \(T\) give the same commutator on an invariant input, and the electric correction can be transferred entirely onto the spectators:
\[
 [T,\Delta]f=-\tfrac1{\sqrt2}\left(
    8G_{\mathrm{rest}}^Y+2\sum_a G_{\mathrm{rest}}^{[E_a,Y]}r_1^{E_a}\right)f .
\]
This follows by applying the same product rule, as \(G_{\mathrm{rest}}\) acts only on links other than 1 and 2 and its constant-label components commute with the Laplacian. At a degree-two intermediate vertex this correction vanishes exactly on gauge-invariant functions, including \(\Omega\); on a lattice with spectators the Ward identity does not force it to vanish.

For a direct gauge-invariant check let \(f\) be the normalized trace of a plaquette that contains link 2 but not link 1, oriented so link 2 is traversed positively. Take \(U_1=U_2=I\), \(X=i\) in quaternion notation, and the remaining oriented plaquette product equal to \(i\) (one link suffices). Then \(r_1 f=0\) and \(\ell_2^Y f=\mathrm{Re}(i^2)=-1\); consequently \([T,\Delta]f=-8/\sqrt2\) at this configuration. This is an explicit nonzero spectator term written in its path form. `python verify_score_lift_quaternion.py` checks the Casimir, inverse-prefix relation and trace witness in integer quaternion arithmetic.

The correction also survives in a genuine finite interacting ground-state example. Use a nonzero one-plaquette Wilson potential on this plaquette and a free incoming link 1 outside it. Separation of the free electric link, and positivity and uniqueness of the product ground state, give \(\Omega=\Omega_*(U_2,\mathrm{rest})\) independent of \(U_1\). The eigen-equation rules out independence of \(U_2\): otherwise all derivatives of \(\Omega\) in the eigen-equation would be independent of \(U_2\), whereas \(V\Omega\) varies with it. Since varying \(U_1\) rotates a fixed nonzero \(X\) over its adjoint sphere, \(\ell_2^Y\Omega\) is not identically zero. Thus
\[
 2c\,\Omega^{-1}[T,\Delta]\Omega=8c\,T\log\rho\not\equiv0.
\]
For this fixture the correction is even **conditionally centered** given the coarse link \(Z=U_1U_2\). The free link \(U_1\) is Haar and independent of the rest, so \(Z\) is Haar and independent of \(U_2,\mathrm{rest}\). At fixed \(Z\), \(Y=\operatorname{Ad}_{U_2Z^{-1}}X\), so on \(\Omega_*\) the second-link derivative field is \(r_2^{\operatorname{Ad}_{Z^{-1}}X}\). Its \(\rho\)-expectation on \(\log\rho\) is zero by Haar integration of \(r_2\rho\). This establishes non-removability by Ward identity or by centering in this fixture; it is not a claim about cancellations for every Wilson geometry or coefficient.

## What the source equation does not control

The generator \(L\) above differentiates in *all* links and is not the intrinsic conditional generator \(L_z\). The score components are generally gauge-covariant rather than gauge-invariant functions, so even a physical-sector global spectral gap would not automatically invert these equations. More fundamentally, conditioning does not make \(L\) equal to \(L_z\); the horizontal terms and their coupling to the varying conditional law are additional. The exact equation exposes the \(-2TV\) source and the first-link/other-incident-link electric commutator, but does not bound \(\langle s,L_z^{-1}s\rangle\) or justify a spacing-uniform weak-bare criterion. The two-scale conditional norm remains a separate problem.
