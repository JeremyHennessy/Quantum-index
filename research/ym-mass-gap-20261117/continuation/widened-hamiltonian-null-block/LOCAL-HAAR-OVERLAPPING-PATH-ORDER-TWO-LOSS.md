# Overlapping Haar path products can lose principal-order energy

Take three independent Haar SU(2) variables \((U_1,U_2,U_3)\), unit bi-invariant quaternion metrics, and coarse variables
\[
 Z=U_1U_2,\qquad W=U_2U_3 .
\]
There is no vacuum tilt (\(\rho=1\)). The coarse pullback nevertheless fails Laplacian and gradient closure. Its exact constrained fine-energy deficit need not be a bounded operator on coarse \(L^2\): this fixture has a smooth sequence with deficit of order \(N^2\) at fixed variance.

## Geometry and failure of closure

In coordinates \((Z,W,S)\), \(S=U_2\), the inverse map reads \(U_1=ZS^{-1}\), \(U_3=S^{-1}W\). Haar invariance on each independent link at fixed \(S\) gives product Haar in the new coordinates. Thus \(S\) is independent Haar conditional on \((Z,W)\).

Take a real smooth phase \(\phi(Z,W)\). Let \(\alpha\) be its \(Z\)-gradient in the right-increment frame \(Z\mapsto Z\exp(tX)\), and \(\beta\) its \(W\)-gradient in the left-increment frame \(W\mapsto\exp(tX)W\). An increment \(U_2\mapsto U_2\exp(tX)\) differentiates \((Z,W)\) by these two frames in directions \(X,\operatorname{Ad}_S X\), respectively. The other links contribute independently to just one coarse factor isometrically. Consequently the pulled-back squared gradient is
\[
 \kappa=\Gamma(J\phi,J\phi)
      =2(|\alpha|^2+|\beta|^2)+2\langle\operatorname{Ad}_S\alpha,\beta\rangle,
 \qquad |\alpha|^2+|\beta|^2\le\kappa\le3(|\alpha|^2+|\beta|^2).
\]
For \(\alpha,\beta\) both nonzero, \(\operatorname{Ad}_S\alpha/|\alpha|\) is uniform on the unit sphere in the three-dimensional Lie algebra. Conditional mean and variance are therefore
\[
 \mathbb E[\kappa\mid Z,W]=2(|\alpha|^2+|\beta|^2),
 \qquad \operatorname{Var}(\kappa\mid Z,W)=\tfrac43|\alpha|^2|\beta|^2>0 .
\]
For example \(\phi=x+v\), \(x=\operatorname{Re}Z\), \(v=\operatorname{Re}W\), has \(|\alpha|^2=1-x^2\), \(|\beta|^2=1-v^2\). This proves failure of retained gradient closure. The pulled-back trace product also shows failure of Laplacian closure: each single trace has fine Laplacian \(-6\) times itself, but the product picks up \(2\Gamma(Jx,Jv)=2\langle\operatorname{Ad}_S\alpha,\beta\rangle\), nonconstant along the same fibers.

## Smooth exact-constraint trial and principal-order loss

Choose a nonzero real smooth cutoff \(\chi(Z,W)\) supported in \(|x|,|v|<1/2\). In its support the phase geometry has \(\kappa\ge3/2\); the upper bound above also gives \(\kappa\le6\). To make the trial globally smooth, choose a smooth real function \(r\ge0\) of one trace, identically zero on a neighborhood of \([-1/2,1/2]\), and positive at \(\pm1\). Replace \(\kappa\) by \(\widetilde\kappa=\kappa+r(x)+r(v)\). This is strictly positive on the compact full space because the only possible zeros of \(\kappa\) have \(x,v\in\{-1,1\}\); it agrees with \(\kappa\) near the trial support. Define
\[
 A(Z,W,S)=\frac{\widetilde\kappa(Z,W,S)^{-1}}
                    {\int \widetilde\kappa(Z,W,s)^{-1}\,ds}.
\]
This is smooth, real and positive, and \(\mathbb E[A\mid Z,W]=1\) exactly. Differentiation under the compact \(s\)-integral is justified by global smoothness and the positive uniform minimum. On the cutoff support,
\[
 \mathbb E[A^2\kappa\mid Z,W]=\bigl(\mathbb E[\kappa^{-1}\mid Z,W]\bigr)^{-1}
                              =:H(Z,W).
\]
This harmonic mean is strictly below the arithmetic mean there. Quantitatively, the identity
\[
 \mathbb E[\kappa\mid Z,W]-H
     =\mathbb E[(\kappa-H)^2/\kappa\mid Z,W]
     \ge \operatorname{Var}(\kappa\mid Z,W)/6
     \ge 1/8
\]
uses the support bounds and the exact variance.

Let \(F_N=\chi\exp(iN\phi)\) on the coarse variables and \(f_N=(J F_N) A\) on the fine variables. Their conditional means agree exactly: \(\mathbb E[f_N\mid Z,W]=F_N\). For real amplitudes the cross term between their amplitude and phase gradients is purely imaginary and drops from the real squared norm. With a positive electric prefactor \(c\), the bare pullback and trial fine energies are exactly
\[
 \mathcal E(JF_N)=cN^2\int\chi^2\,\mathbb E[\kappa\mid Z,W]\,dZ\,dW
                  + c\|\nabla J\chi\|_2^2,
 \qquad
 \mathcal E(f_N)=cN^2\int\chi^2 H\,dZ\,dW
                  + c\|\nabla((J\chi)A)\|_2^2 .
\]
Their remainders are fixed constants. If \(\mathcal E_{\rm elim}(F_N)\) is the exact fine infimum under the retained conditional mean, testing \(f_N\) proves
\[
 \mathcal E(JF_N)-\mathcal E_{\rm elim}(F_N)
       \ge (c/8)N^2\|\chi\|_2^2-O(c).
\]
Nonnegativity of the exact fine form gives the matching order-\(N^2\) upper bound for this deficit, while the retained \(L^2\) norm is fixed. If desired, subtract each mean before normalizing: the phase is nonstationary on the support, so that mean tends to zero by integration by parts, and constants do not affect the deficit. Real tests are also available: real and imaginary parts have separate real conditional constraints and their deficits add to the complex one, so at least one gives the same order along the sequence.

This is an explicit finite Haar failure of the closure hypothesis for an overlapping path map. No conditional-vacuum interaction is needed: the random mixed metric alone changes the principal retained energy after minimization. It is not a statement on a gauge-invariant physical sector of a full lattice, uniform weak-bare trajectories, or the continuum.
