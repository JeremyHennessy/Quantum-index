# First neighboring-plaquette correction to the actual coarse class law

Use the same two adjacent SU(2) plaquettes as the closed-loop conditional computation, with shared link \(S\), coarse holonomy \(Z=SP\), neighboring holonomy \(W=QS^{-1}\), and distinct three-link complements \(P,Q\). The unit electric group metric is \(-\tfrac12\operatorname{tr}(XY)\); write \(t_i=g_i/c\) for dimensionless couplings in \(H/c=-\Delta-t_1 x-t_2 v\), where \(x=\operatorname{Re}Z\) and \(v=\operatorname{Re}W\). The normalized vacuum law is \(\Omega^2\) times product Haar.

Under product Haar \((Z,W)\) are independent Haar: condition on \(S\) and integrate their disjoint link complements. The positive lifted ground wavefunction is a function of this pair by the exact two-square reduction. The coarse marginal density relative to Haar is therefore \(m(Z;t_1,t_2)=\int \Omega(Z,W)^2 dW\). Simultaneous conjugation makes this a class function. In angle \(\theta\), \(x=\cos\theta\), the actual probability law is
\[
 m(\cos\theta;t_1,t_2)\,\frac{2}{\pi}\sin^2\theta\,d\theta,
 \qquad 0\le\theta\le\pi .
\]
This reference measure is normalized, and \(m\) integrates to one against it for all couplings.

A center flip of an exclusive neighboring link preserves \(Z\) and changes \(t_2\) to \(-t_2\); thus \(m\) is even in \(t_2\). A center flip on an exclusive coarse link gives \(m(x;t_1,t_2)=m(-x;-t_1,t_2)\). For \(t_1=0\) the normalized ground state depends only on \(W\) exactly (the positive one-square vacuum lifts to the eigenfunction), so the coarse marginal is **exactly Haar** for all \(t_2\) in that restriction. These identities rule out all neighboring corrections below degree \(t_1 t_2^2\).

## Direct projected cubic coefficient

Write \(\psi_{ij}=[t_1^it_2^j]\Omega\), \(e_{ij}=[t_1^it_2^j](E/c)\), and \(\bar f(Z)=\int f(Z,W)dW\). The ambient pair Laplacian is \(4\Delta_Z+4\Delta_W-2\sum_j \ell_Z^j r_W^j\); integrating \(W\) kills the last two terms. Basic normalized eigenfunction coefficients are
\[
\psi_{10}=x/12,\quad \psi_{01}=v/12,\quad e_{02}=-1/48,\quad
\psi_{02}=(v^2-1/4)/384-1/1152 .
\]
Here \(v\) has Haar second moment \(1/4\) and electric eigenvalue 12, while \(v^2-1/4\) has eigenvalue 32. The constant in \(\psi_{02}\) comes from \(\|\Omega\|_2=1\). With \(d=\operatorname{Im}Z\cdot\operatorname{Im}W\), the already certified shared-edge mixed electric block gives \(\psi_{11}=(5/702)xv-d/1404\). Its energy coefficient is zero by parity, as is \(e_{12}\).

At bidegree \((1,2)\) the dimensionless eigen-equation is
\[
 -\Delta\psi_{12}=x\psi_{02}+v\psi_{11}+e_{02}\psi_{10}.
\]
Integrating out \(W\), with \(\int v\operatorname{Im}W\,dW=0\), gives
\[
 -4\Delta_Z \bar\psi_{12}
 =\left(-\frac1{1152}+\frac{5}{702\cdot4}-\frac1{48\cdot12}\right)x,
 \qquad \bar\psi_{12}=-\frac{37}{539136}x.
\]
The integration constant is zero by the odd parity in the coarse holonomy at this bidegree. Squaring the ground wavefunction now gives
\[
 [t_1t_2^2]\,m
 =2\bar\psi_{12}+2\overline{\psi_{10}\psi_{02}}+
                      2\overline{\psi_{01}\psi_{11}}
 =\frac{x}{67392}.
\]
Independently, integrating the previous exact full cubic density coefficient gives the same value: its \(x\) coefficient is \(29/18432-(3361/1617408)(3/4)=1/67392\), and the term linear in \(v\operatorname{Im}W\) averages to zero.

Thus the first neighbor effect is real and nonzero:
\[
 m(x;t_1,t_2)-m(x;t_1,0)
 =\frac{t_1t_2^2}{67392}x
   +O\bigl(|t_1|t_2^2(|t_1|+t_2^2)\bigr).
\]
For fixed \(c>0\) the leading physical-coupling coefficient in the density is \(g_1g_2^2/(67392c^3)\). The remainder holds uniformly in angle in any fixed finite derivative norm: finite elliptic perturbation gives analytic ground wavefunction in sufficiently high Sobolev norms of the fixed product group, Haar integration preserves smoothness, and joint analyticity, exact zero at \(t_1=0\), and evenness in \(t_2\) give the explicit factors. This smooth marginal statement includes the endpoints as a density against Haar class law, and is not a statement about the inverse of the singular endpoint fibers. The coefficient integrates to zero, as required by normalization. The difference of normalized first moments of \(x\) is
\[
 \mathbb E_{t_1,t_2}x-\mathbb E_{t_1,0}x
  =\frac{t_1t_2^2}{269568}
     +O\bigl(|t_1|t_2^2(|t_1|+t_2^2)\bigr),
\]
using Haar \(\mathbb E x^2=1/4\). This is an actual marginal sensitivity, not an estimate of a coarse or full spectral gap.

Run `python verify_marginal_neighbor_coefficient.py` for the independent rational eigen-equation and full-density projection checks. All conclusions apply only to this finite small-magnetic two-plaquette vacuum.
