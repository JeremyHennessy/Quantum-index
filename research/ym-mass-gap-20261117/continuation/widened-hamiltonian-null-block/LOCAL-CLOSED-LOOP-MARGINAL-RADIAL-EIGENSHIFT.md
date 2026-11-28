# Neighbor correction to the first radial eigenvalue of the true coarse marginal

Take the finite two-adjacent-plaquette vacuum and coarse class variable \(x=\cos\theta=\operatorname{Re}Z\), with the same SU(2) unit metric as in the conditional and marginal calculations. Set \(t_i=g_i/c\), and let \(m\) be the relative density of its class law against normalized Haar class measure \(d\sigma=(2/\pi)\sin^2\theta\,d\theta\). This note treats the **unweighted marginal generator** with coarse electric metric 4, not its score-corrected form, the full interacting generator, or any continuum spectrum.

Let \(\Lambda(t_1,t_2)\) be the first positive eigenvalue of that marginal radial generator including \(4c\). Then near zero at fixed \(c>0\),
\[
 \Lambda(t_1,t_2)-\Lambda(t_1,0)
 =\frac{58841}{10092625920}\,c\,t_1^2t_2^2
  +O\bigl(c\,t_1^2t_2^2(t_1^2+t_2^2)\bigr).
\]
The leading coefficient in physical couplings is therefore \(58841/(10092625920 c^3)\) times \(g_1^2g_2^2\), strictly positive.

## Actual marginal density through the needed coefficient

Use normalized quaternion coordinates \(Z=(x,\mathbf a)\), \(W=(v,\mathbf b)\). Their reference law is independent Haar, and the ambient electric operator on pair functions is
\[
 \Delta_E=3\Delta_Z+3\Delta_W+\sum_{j=1}^3(\ell_Z^j-r_W^j)^2.
\]
Write \(\Omega=\sum_{ij}t_1^it_2^j\psi_{ij}\), with \(\psi_{00}=1\) and \(\|\Omega\|_{L^2(\mathrm{Haar})}=1\). In addition to the already computed \(m_{10}=a x\), \(a=1/6\), and \(m_{12}=d x\), \(d=1/67392\), the exact pair recursion gives
\[
 m_{22}=e(x^2-1/4),\qquad e=\frac{16187}{8074100736}.
\]
Here \(m_{ij}=[t_1^it_2^j]m\). Pure \(t_2\) coefficients vanish identically because the coarse law is Haar at \(t_1=0\). The degree-\((2,2)\) density under the \(W\) Haar integral is
\[
 2\psi_{22}+2\psi_{10}\psi_{12}+2\psi_{01}\psi_{21}
       +2\psi_{20}\psi_{02}+\psi_{11}^2.
\]
After subtracting each group's own constant Haar part, their contributions to the coefficient of \(x^2-1/4\) are, respectively,
\[
 -\frac{851}{207028224},\quad -\frac{37}{3234816},\quad
 \frac{739}{77635584},\quad -\frac1{221184},\quad \frac{11}{876096}.
\]
The constants in their total sum cancel by ground-state normalization. Only the indicated quadratic polynomial can remain: the recursion preserves degree at most 2 in \(Z\), and even coarse parity plus conjugation invariance excludes odd or anisotropic terms.

The exact replay `python exact_radial_marginal_gap.py` (SymPy) reconstructs these fractions from the Schrödinger equation with the actual pair electric operator. At bidegree \(k\), solve \(-\Delta_E\psi_k\) equal to the potential times prior wavefunction terms plus the ground-energy convolution. Compute the energy coefficient by Haar-averaging, and the wavefunction constant from normalization. Each polynomial solve uses the two sphere relations and exact rational matrices on finite degree/parity sectors; it verifies all original differential residuals and the Haar means. Integration uses the exact quaternion sphere moments. The result checks the entire projected polynomial and independently extracts \(e=16\int x^2m_{22}\,d\sigma\).

## Fixed-Haar eigenvalue perturbation

The radial operator divided by \(4c\) is \(-m^{-1}\operatorname{div}_{\sigma}(m\nabla)\). Multiplication by \(\sqrt m\) conjugates it to
\[
 H_m=-\Delta_{\rm class}+\frac{\Delta_{\rm class}\sqrt m}{\sqrt m}
\]
on fixed Haar class \(L^2\); the domain is the usual central subspace of the SU(2) Laplacian (no separately imposed endpoint Dirichlet condition). The Haar radial eigenfunctions are the normalized characters \(u_n(\theta)=\sin((n+1)\theta)/\sin\theta\), with eigenvalues \(n(n+2)\). Thus the \(n=1\) eigenfunction is \(u=2x\) and eigenvalue 3. It remains simple and first positive near zero: the exact transformed ground is \(\sqrt m\) at zero, and small smooth density perturbations give small bounded potentials, preserving the separated neighboring levels. Analyticity in fixed norms follows from compact elliptic perturbation of the underlying vacuum and integration of \(W\). The resulting eigenvalue is separately even in both couplings, since \(t_2\) sign leaves \(m\) fixed and \(t_1\) sign is the isometry \(\theta\mapsto\pi-\theta\). Its difference from the \(t_2=0\) curve vanishes on \(t_1=0\), because that marginal is exactly Haar. Thus \(t_1^2t_2^2\) is the first possible neighbor eigenvalue term.

For \(V_m=(\Delta\sqrt m)/\sqrt m\) let \(y=x^2-1/4\). Since \(\Delta x=-3x\), \(\Delta y=-8y\), and no pure \(t_2\) density terms occur, the three relevant Taylor coefficients are
\[
 (V_m)_{10}=-3ax/2,qquad (V_m)_{12}=-3dx/2,qquad
 (V_m)_{22}=-4ey+2ad\,y+\tfrac32ad\,x^2 .
\]
For the last formula, \([t_1^2t_2^2]\sqrt m=ey/2-ad\,x^2/4\), and the two products of the lower coefficients with the reciprocal of \(\sqrt m\) contribute \(3ad\,x^2/2\). In the state \(u=2x\), the means of \(x^2\) and \(y\) are \(1/2\) and \(1/4\). Hence the direct potential contribution is \(-e+5ad/4\). The only off-diagonal perturbation to this mixed order is the cross of \((V_m)_{10}\) and \((V_m)_{12}\). Since \(xu=(u_2+u_0)/2\), its reduced-eigenvalue denominator gives
\[
 2\frac{9ad}{4}\frac14\left(\frac13-\frac15\right)=\frac{3ad}{20}.
\]
No higher perturbation with solely linear terms can contribute at \((2,2)\), because any \(t_2\)-bearing potential perturbation already has at least one \(t_1\) and two \(t_2\) factors. The coefficient for \(H_m\) is exactly \(-e+7ad/5=58841/40370503680\). Multiplying by \(4c\) gives the result. As a normalization check, using the pure single-loop density coefficient \(m_{20}=7y/576\) yields the reduced pure \(t_1^2\) gap coefficient \(7/960\), also obtained directly as the gap expansion of the one-loop Schrödinger problem divided by \(4c\).

The strict positive shift is a finite radial marginal effect at small magnetic perturbations. It is not a lower bound on the actual conditional-score-corrected marginal and not a mass-gap claim.
