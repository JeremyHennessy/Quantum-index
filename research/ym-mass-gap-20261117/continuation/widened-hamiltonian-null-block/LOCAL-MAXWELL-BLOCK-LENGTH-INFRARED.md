# General fixed-length transverse Maxwell blocking in the infrared

This extends the length-two Gaussian vacuum-slice control to any integer block length \(b\ge2\) in three **spatial** dimensions. It is not an estimate for the interacting Wilson vacuum, the Euclidean four-dimensional cell stiffness, or the continuum mass gap.

On periodic fine lattices whose side is a multiple of \(b\), block along straight positive coordinate paths of length \(b\) from sites \(bn\); the paths are edge-disjoint. Let \(k\in[-\pi,\pi)^3\) be a nonzero coarse momentum and write
\[
 q_\alpha=(k+2\pi\alpha)/b\pmod{2\pi},\quad
 d_i(q)=e^{iq_i}-1,\quad
 M_b(t)=\sum_{r=0}^{b-1}e^{irt},\quad
 \omega(q)=\|d(q)\|_2 .
\]
Here \(\alpha\in\{0,\ldots,b-1\}^3\). Let \(P(k)\) be orthogonal projection onto \(d(k)^\perp\), and restrict each fine mode to \(d(q_\alpha)^\perp\). Unit Fourier transforms give the usual factor \(b^{-3/2}\) in path-sum downsampling. Dividing additionally by \(\sqrt b\), the prescribed horizontal normalization, yields
\[
 A_\alpha=b^{-2}P(k)\operatorname{diag}_i M_b(q_{\alpha,i}),
 \qquad A=(A_\alpha)_\alpha.
\]
Indeed \(M_b(q_{\alpha,i})d_i(q_\alpha)=d_i(k)\), so \(A_\alpha\) kills its fine longitudinal vector and inserting the fine transverse projector does not change its Gram form. For each coordinate, discrete Fourier orthogonality gives \(\sum_{\alpha_i=0}^{b-1}|M_b(q_{\alpha,i})|^2=b^2\), hence \(AA^*=I\) on the coarse transverse plane. Conjugate paired modes impose the real-field condition without altering these Hermitian estimates.

## Exact low-alias and infrared limits

Use covariance \(C=\bigoplus_\alpha c\,\omega(q_\alpha)^{-1}I\), where the earlier note uses \(c=1\); the conventional real oscillator variance is \(c=1/2\). Let \(S=ACA^*\), \(N=AC^2A^*\) on the coarse plane. The regression derivative into the vertical space \(\ker A\) is \(D=(I-A^*A)CA^*S^{-1}\), so the exact inverse-energy score matrix is
\[
 D^*D=S^{-1}NS^{-1}-I .
\]
This follows by inserting the orthogonal vertical projector and \(ACA^*=S\) into \(D^*D\); the Gaussian conditional energy calculation in the earlier note identifies it with the conditional score matrix.

Write \(\rho=|k|\), \(G=A_0A_0^*\), \(\omega_0=\omega(k/b)\). With \(\operatorname{sinc}(u)=\sin(u)/u\), including the value 1 at zero, the squared low-alias multipliers equal
\[
 b^{-4}|M_b(k_i/b)|^2
 =b^{-2}\frac{\operatorname{sinc}(k_i/2)^2}
                  {\operatorname{sinc}(k_i/(2b))^2}.
\]
Thus \(b^2G=I+O(\rho^2)\) in operator norm and \(\omega_0=(\rho/b)[1+O(\rho^2/b^2)]\), uniformly in direction and \(b\) for \(0<\rho\le1\). For a fixed \(b\) all other aliases have frequencies bounded away from zero. Therefore the leading covariance and second-covariance matrices are \(S_0=(c/\omega_0)G\) and \(N_0=(c/\omega_0)^2G\), respectively. It follows (also quantitatively below) that uniformly in direction as \(k\to0\),
\[
 A_0A_0^*\longrightarrow b^{-2} I,\qquad
 \frac{S^{-1}}{b|k|/c}\longrightarrow I,\qquad
 D^*D\longrightarrow (b^2-1)I .
\]
All statements are on the varying transverse plane at \(k\), in operator norm against its identity. In particular **both** eigenvalues of the score matrix tend to \(b^2-1\), not just its norm. The coarse precision asymptotic is \(b|k|\) in the retained convention \(c=1\), or \(2b|k|\) for \(c=1/2\).

## Explicit uniformity in block length

The following dimension-only estimates make the order of limits explicit. The hard pieces \(H_p=\sum_{\alpha\ne0}(c/\omega(q_\alpha))^p A_\alpha A_\alpha^*\) obey
\[
 \|H_1\|\le C_1 c,\qquad
 \|H_2\|\le C_2 c^2(1+\log b),\qquad 0<\rho\le1 .
\]
To see this, before projection onto the coarse plane each sum is diagonal. For component \(i\) put \(r_j=\min(\alpha_j,b-\alpha_j)\). If either of the two perpendicular \(r_j\) is nonzero, write \(r\) for their maximum; the reduced momentum has a perpendicular component of magnitude at least \((2\pi r-1)/b\). The corresponding frequency is at least a constant times \(r/b\). Sum the path multiplier over \(\alpha_i\) by the exact \(b^2\) identity. The number of perpendicular alias pairs at radius \(r\) is at most \(8r\). Their contribution is bounded by \(Cc^p b^{p-2}\sum_{r=1}^{\lfloor b/2\rfloor}r^{1-p}\). If both perpendicular indices are zero but \(r_i>0\), then
\[
 |M_b(q_{\alpha,i})|=\frac{|\sin(k_i/2)|}{|\sin(q_{\alpha,i}/2)|}
 \le C b\rho/r_i .
\]
Using the same frequency bound on this coordinate and at most two indices per positive \(r_i\), this part is at most \(Cc^p\rho^2 b^{p-2}\sum_{r_i\ge1}r_i^{-p-2}\). These estimates prove the bounds, with no lattice-volume constants.

Write \(S=S_0+H_1\), \(N=N_0+H_2\). Because \(S\ge S_0\), \(\|S^{-1}\|\le Cb\rho/c\). For precision, inverting \((b\rho/c)S\) and comparing with identity gives
\[
 \left\|\frac{cS^{-1}}{b\rho}-I\right\|\le C(b\rho+\rho^2)\qquad(0<\rho\le1).
\]
Indeed \((b\rho/c)S_0=I+O(\rho^2)\) with a uniform positive lower bound, and its hard correction is \(O(b\rho)\). For score, set \(L=S^{-1}S_0=I-S^{-1}H_1\), so \(\|L-I\|\le Cb\rho\). The exact noncommuting decomposition is
\[
 D^*D+I = L G^{-1} L^*+S^{-1}H_2S^{-1}.
\]
For \(b\rho\le1\), the first term divided by \(b^2\) is within \(O(b\rho+\rho^2)\) of \(I\); the normalized hard error is \(O(\rho^2(1+\log b))\). In particular the normalized score matrix differs from identity by at most \(Cb\rho\) in that regime. The relative precision and normalized score limits therefore hold uniformly along sequences with \(b|k|\to0\). These are not error estimates uniform in arbitrary simultaneous limits at fixed nonzero \(k\).

A separate global bound needs no expansion: on the coarse Brillouin zone \(G\ge(4/\pi^2)b^{-2}I\) by the sinc ratio, and \(q_0\) has the smallest absolute reduced coordinate in each axis among its aliases, hence the lowest frequency. With \(c_{\max}=c/\omega_0\), \(C^2\le c_{\max}C\). Therefore
\[
 0\le D^*D\le c_{\max}S^{-1}-I
          \le \bigl((\pi^2/4)b^2-1\bigr)I .
\]

For comparison the discarded fiber gap (precision of the restricted conditional form) also has a block-length cost. Let \(\Omega_h\) denote the diagonal matrix of hard frequencies and \(R=A_h\Omega_h^{-1}A_h^*\). The bound on \(H_1/c\) gives \(\|R\|=O(1)\) for \(\rho\le1\). Also \(R\ge (1-b^{-2})/(2\sqrt3)I\), since \(\omega\le2\sqrt3\) and \(A_h A_h^*= I-G\ge (1-b^{-2})I\). For \(y\in\ker A\), use \(y_0=-A_0^{-1}A_h y_h\) to obtain \(\|y_0\|^2\le Cb^2\langle y_h,\Omega_h y_h\rangle\), while \(\|y_h\|^2\le Cb\langle y_h,\Omega_h y_h\rangle\) by the hard frequency floor. This gives conditional precision at least \(C_3/(cb^2)\). Conversely test \(y_h=\Omega_h^{-1}A_h^*v\) for unit coarse \(v\), and \(y_0=-A_0^{-1}Rv\). Hard energy is bounded and \(\|y_0\|^2\ge C_4 b^2\), since \(G\le b^{-2}I\) and \(R\) has the above lower bound. The full quotient is at most \(c^{-1}(\omega_0+C_5/b^2)\), giving matching order \(1/(cb^2)\) uniformly for \(0<|k|\le1/b\). This fiber comparison is not itself a marginal or full Hamiltonian gap.

## Zero mode and scope

At \(k=0\) the \(q=0\) fine harmonic mode has no normalizable oscillator vacuum with the covariance used here; also the coarse projection onto the two-dimensional nonzero-momentum plane is not defined there. The estimates exclude this sector, not regularize it with a fictitious mass. If both fine and coarse harmonic coordinates are removed, there is no coarse transverse observable in that sector; kinematical hard aliases still exist but do not define the missing vacuum oscillator. The positive-momentum limit is taken along compatible tori; no extra lower bound at \(k=0\) is inferred.

Larger fixed blocks do **not** cure the massless coarse marginal. Its precision still vanishes linearly as \(k\to0\), and the infrared score coefficient grows linearly in \(b\) (squared coefficient \(b^2-1\)). A proof on the actual interacting vacuum slice would require separate control of both the nonlinear marginal and its conditional scores; no such claim is made here.

`python verify_maxwell_alias_ir.py` is a numerical sanity check, not the proof: it checks alias gradient transport, horizontal Gram normalization and both eigenvalues for \(b=2,3,4,8,16\), with two directions and both covariance conventions. Every b-uniform statement above follows from the analytic estimates.
