# The cubic distinct-tag loop changes a physical gap in a slow background

Use the same four-endpoint path-product fixture:
\(S_1:a\to b,\ U_1:b\to a,\ S_2:c_0\to d,\ U_2:d\to c_0,\ U_3:b\to c_0,\ U_4:d\to a\),
with disjoint path interiors. Both fast paths have length \(r\); the slow lengths are fixed positive integers \(u_i\). In addition to the three marked words
\[
 f=\operatorname{Re}(S_1U_1),\quad g=\operatorname{Re}(S_2U_2),\quad
 h=\operatorname{Re}(S_1U_3S_2U_4)
\]
add the tag-empty slow term \(-t_0x\), \(x=\operatorname{Re}X\), \(X=U_2^{-1}U_4U_1^{-1}U_3\). Here \(t_j=g_j/c\) are dimensionless couplings and the electric coefficient \(c>0\) multiplies all dimensionless energies below. In particular \(V_f=-t_1f-t_2g-t_3h\). All graph lengths other than \(r\), and all couplings, are fixed for asymptotic statements unless a small marked-coupling polydisc is explicitly invoked.

In the fast Haar kernel, the physical slow graph after deleting the fast paths is precisely one cycle. Its gauge-invariant Haar Hilbert space consists of class functions of \(X\); its slow electric operator is \(m(-\Delta_{\rm class})\) with \(m=\sum_i u_i\). This is the sum of its four link-product Casimirs by left/right and inverse isometry. Define \(e_0(t_0),e_1(t_0)\) as the lowest two eigenvalues of
\[
 H_s(t_0)=-m\Delta_{\rm class}-t_0x,\qquad \Delta_s(t_0)=e_1(t_0)-e_0(t_0).
\]
They are simple and have smooth normalized class eigenfunctions: the map \(F(\theta)\mapsto\sin\theta\,F(\theta)\) conjugates the class operator to \(-m(\partial_\theta^2+1)-t_0\cos\theta\) on the regular Dirichlet interval \((0,\pi)\), giving simplicity; smoothness also follows by lifting to the compact SU(2) Laplacian. At fixed real \(t_0\) these eigenvalues have isolated neighborhoods.

Let \(G_r=E_1-E_0\) be the first physical excitation of the entire finite graph after internal path gauge fixing and residual endpoint gauge. The coefficient of \(t_1t_2t_3\) in the order-\(r^{-2}\) physical gap is
\[
 \boxed{\quad \frac{c}{36}\,\Delta_s'(t_0).\quad}
\]
In particular its sign for sufficiently small nonzero \(t_0\) is the sign of \(t_0\). Below we also justify that the coefficient of \(t_1t_2t_3\) in the analytic finite-\(r\) gap near zero marked couplings is \(c\Delta_s'(t_0)/(36r^2)+O(cr^{-3})\). This does not assert a sign of the total gap change, which also contains separate quadratic marked-coupling terms.

## Separation of the kinetic and cubic contributions

Let \(P\) average the two fast Haar variables, \(Q=1-P\), \(K=-\Delta_{S_1}-\Delta_{S_2}\), and \(H_0=L-t_0x\) on the full product coordinates. Then \(P,Q\) preserve \(H_0\), and \(H_0|_P=H_s\) on the physical class sector. Write \(R=K_Q^{-1}\), extended by zero on \(P\). For the Schur form at energy \(e\), the two corrections are
\[
 A=-P V_f R V_fP,\qquad
 B(e)=P V_f R\,Q(H_0+V_f-e)Q\,R V_fP
\]
with factors \(r^{-1},r^{-2}\) respectively. \(A=-\alpha I\) with \(\alpha=(t_1^2+t_2^2)/12+t_3^2/24\): the three distinct fast tags are pairwise orthogonal, and each self covariance is \(1/4\), with endpoint divisors 3, 3 and 6. The part of \(B(e)\) with \(H_0-e\) is homogeneous quadratic in the marked couplings, even with the additional slow \(t_0\) term. More explicitly \(H_0-e\) preserves each fast center parity, so this part has only the same-tag quadratic terms. The remaining cubic term is exactly \(-t_1t_2t_3 x/36\) by the checked XOR triple and Haar moment. Thus no quadratic kinetic or spectral-parameter contribution is included in the claimed cubic factor. Evaluating \(B(e)\) at the reference \(e=e_n(t_0)\), rather than at the perturbed energy, is justified by the quasimode construction below.

Let \(F_n\) be a real normalized reference class eigenfunction. Because \(A\) is scalar, there is no order-\(1/r\) slow eigenvector correction; the coefficient at order \(r^{-2}\) is the diagonal \(\langle F_n,B(e_n)F_n\rangle\). Its contribution at multidegree \((1,1,1)\) in marked couplings equals
\[
 -\frac1{36}\langle F_n,xF_n\rangle
    =\frac1{36}e_n'(t_0)
\]
in dimensionless units, using the simple eigenvalue derivative of \(H_s(t_0)\). The common order-\(1/r\) scalar cancels in the physical gap, and subtraction of these diagonal cubic terms gives the stated coefficient.

## Smooth full quasimodes and coefficient control

Put \(\epsilon=1/r\), fix either reference eigenpair \(H_s F=eF\), and set \(e^{(1)}=-\alpha\). Define
\[
 \begin{split}
 q_1&=-R V_fF,\\
 q_2&=-R Q(H_0+V_f-e)q_1,\\
 e^{(2)}&=\langle F,PV_fq_2\rangle=\langle F,B(e)F\rangle,\\
 (H_s-e)f_2&=-PV_fq_2+e^{(2)}F,\qquad f_2\perp F,\\
 q_3&=-R\big[QV_f f_2+Q(H_0+V_f-e)q_2-e^{(1)}q_1\big].
 \end{split}
\]
These operations are legitimate on smooth nonpolynomial \(F\). The \(Q\) correctors are finite fast-harmonic sums whose slow coefficient functions remain smooth: products by the marked words increase fast degrees by finite amounts, \(H_0\) differentiates or multiplies only in slow variables, and fast averaging and \(R\) act by finite-dimensional Casimir values there. The reduced inverse of \(H_s-e\) on the slow class orthogonal complement is elliptic and sends this smooth right hand side to smooth \(f_2\). All functions stay physical because the vertex gauge symmetries commute with the operators and all potentials are gauge invariant.

With
\[
 \Psi_\epsilon=F+\epsilon q_1+\epsilon^2(f_2+q_2)+\epsilon^3 q_3,
 \qquad z_\epsilon=e+\epsilon e^{(1)}+\epsilon^2 e^{(2)},
\]
substitution in \(\epsilon^{-1}K+H_0+V_f-z_\epsilon\) cancels its full \(P,Q\) residual through order \(\epsilon^2\). The order-\(\epsilon\) \(P\) cancellation uses \(A=-\alpha I\); the \(-e^{(1)}q_1\) correction is required only in \(q_3\). Remaining coefficients have bounded full Haar \(L^2\) norms for fixed parameters, so the residual is \(O(\epsilon^3)\) and \(\|\Psi_\epsilon\|\to1\). The bounded-window spectral comparison on the physical space gives exactly one actual eigenvalue near each reference level and excludes an additional lower excitation; the spectral theorem then transfers the real quasimode energies to these eigenvalues with error \(O(\epsilon^3)\).

One can also identify the actual Taylor coefficient without differentiating a real big-O remainder. At fixed real \(t_0\), choose small complex polydiscs in \((t_1,t_2,t_3)\) and fixed contours around the two simple reference levels. At zero marked couplings the rank-one contours of \(\epsilon^{-1}K+H_0\) are uniformly isolated for large \(r\), since the fast complement is at least \(3r-|t_0|\). The bounded complex \(V_f\), on a sufficiently small polydisc, gives analytic rank-one spectral projections by the norm resolvent Neumann series, uniformly close to their unperturbed projections. The correctors above depend polynomially on the marked couplings (with fixed slow inverses), and the residual bound is uniform on that polydisc, taking the holomorphic continuation, not conjugating the parameters. Applying the rank-one contour projection to the residual bounds the analytic eigenvalue error by \(O(\epsilon^3)\): the projected quasimode has norm bounded below since the projection is close to that of \(F\). Multivariate Cauchy estimates then give \(O(\epsilon^3)\) also for the actual \((1,1,1)\) Taylor coefficient. This establishes
\[
 [t_1t_2t_3]G_r
     =\frac{c}{36r^2}\Delta_s'(t_0)+O(cr^{-3}).
\]

## Exact sign near zero slow coupling

At \(t_0=0\), the normalized characters \(\chi_n=\sin((n+1)\theta)/\sin\theta\) have eigenvalues \(m n(n+2)\) and \(x\chi_n=(\chi_{n-1}+\chi_{n+1})/2\), with \(\chi_{-1}=0\). Hence the second coefficient of \(e_0\) under \(-t_0x\) is \(-1/(12m)\); that of \(e_1\) is \((1/(3m)-1/(5m))/4=1/(30m)\). Center reflection \(x\mapsto-x\) makes both spectra even in \(t_0\), so
\[
 \Delta_s(t_0)=3m+\frac{7t_0^2}{60m}+O(t_0^4/m^3),\qquad
 \frac{c}{36}\Delta_s'(t_0)=\frac{7ct_0}{1080m}+O(ct_0^3/m^3).
\]
The leading derivative is nonzero with the stated sign for sufficiently small nonzero \(t_0/m\). The exact arithmetic check verifies the character coefficient and cubic denominator. This is an actual finite physical-graph excitation comparison with a prescribed slow term, not a growing many-plaquette or continuum estimate.
