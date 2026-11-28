# Unequal fast lengths in the cubic distinct-tag spectral limit

Use the same four-endpoint graph with disjoint path interiors and two fast products \(S_1,S_2\), but with lengths \(R_1,R_2>0\) not necessarily equal. The four exclusive slow path lengths \(u_j\) stay fixed. The dimensionless potential is
\[
 V=-t_1\operatorname{Re}(S_1U_1)
   -t_2\operatorname{Re}(S_2U_2)
   -t_3\operatorname{Re}(S_1U_3S_2U_4),
\]
with the same closed-path orientations: \(S_1:a\to b,\ U_1:b\to a,\ S_2:c_0\to d,\ U_2:d\to c_0,\ U_3:b\to c_0,\ U_4:d\to a\). There is no external slow potential. The graph skeleton and its path-product gauge Hilbert space are fixed while the fast subdivisions may grow. Let \(X=U_2^{-1}U_4U_1^{-1}U_3\), \(x=\operatorname{Re}X\), \(m=\sum_j u_j\), and \(c>0\) be the physical electric factor. The physical fast kernel is Haar class functions of \(X\), with \(L_P=m(-\Delta_{\rm class})\): deleting the two fast paths leaves that single slow cycle with the independent original endpoint gauges.

## Exact anisotropic denominators

In dimensionless units let \(K_{\rm f}=R_1(-\Delta_{S_1})+R_2(-\Delta_{S_2})\), \(L=\sum_j u_j(-\Delta_{U_j})\), and \(P\) be the fast Haar average, \(Q=1-P\). Path-product Haar is independent, and \(K_{\rm f}\) commutes with \(L\) and respects residual endpoint gauge. The three endpoint sources \(VP\) have fast tag energies
\[
 \lambda_1=3R_1,\qquad \lambda_2=3R_2,\qquad
 \lambda_{12}=3(R_1+R_2)=\lambda_1+\lambda_2.
\]
The second moment of each individual real trace is \(1/4\); the three sources are orthogonal by center parity. Hence \(PVP=0\) and the quadratic scalar is exactly
\[
 \alpha_R=\frac{t_1^2}{12R_1}+\frac{t_2^2}{12R_2}
                      +\frac{t_3^2}{12(R_1+R_2)}.
\]
At cubic order just the permutations of all three distinct tags survive. The sum of their endpoint weights is
\[
 2\left(\frac1{\lambda_1\lambda_2}
         +\frac1{\lambda_1\lambda_{12}}
         +\frac1{\lambda_2\lambda_{12}}\right)
   =\frac4{\lambda_1\lambda_2}.
\]
The independently checked fast Haar triple moment is \(x/16\), with three minus signs from \(V\). Thus the cubic potential is \(-\tau_R x\), where
\[
 \tau_R=\frac{t_1t_2t_3}{36R_1R_2}.
\]
Neither coefficient assumes a bounded ratio.

For exact fixed ratios \(R_1=ar,\ R_2=br\), \(a,b>0\), and couplings \(t_i=r^{2/3}\kappa_i\), these give
\[
 \alpha_R=r^{1/3}\left(\frac{\kappa_1^2}{12a}
                   +\frac{\kappa_2^2}{12b}
                   +\frac{\kappa_3^2}{12(a+b)}\right),\qquad
 \tau_R=\frac{\kappa_1\kappa_2\kappa_3}{36ab}.
\]
The \(O(1)\) rounding of the lengths, when needed for integers, changes the displayed leading center by \(O(r^{-2/3})\) and the potential coefficient by \(O(r^{-1})\). If just \(R_1/r\to a,R_2/r\to b\) is known without a rate, center by the **exact** \(\alpha_R\): the limiting-ratio center need not have vanishing error since it is multiplied by \(r^{1/3}\).

## A sufficient bound even when the ratio grows

Let \(p=\min(R_1,R_2)\), \(q=\max(R_1,R_2)\), \(T=|t_1|+|t_2|+|t_3|\), so \(\alpha_R\le C T^2/p\). For shifted spectral parameter \(z=-\alpha_R+\zeta\), with \(\zeta\) in a fixed bounded set, put \(A=K_{{\rm f},Q}+L_Q\), \(B=QVQ-z\). We have \(A\ge3p\), \(\|B\|\le C(T+\alpha_R+1)\). Assume this last bound is sufficiently small relative to \(p\) so that \((A+B)^{-1}=O(p^{-1})\) in norm. Then
\[
 (A+B)^{-1}=A^{-1}-A^{-1}BA^{-1}+A^{-1}B(A+B)^{-1}BA^{-1}.
\]
The unbounded slow operator was kept in \(A\). On the smooth fixed word multipliers, the slow product rule gives \(\|L_Q^{1/2}QVPF\|\le C T\|(L_P+1)^{1/2}F\|\), where \(C\) is independent of \(R_i,t_i\). Joint spectral calculus with the fast bound \(3p\) gives
\[
 0\le K_{{\rm f},Q}^{-1}-A^{-1}\le L_Q/(9p^2),\qquad
 \|(K_{{\rm f},Q}^{-1}-A^{-1})v\|
                      \le C p^{-3/2}\|L_Q^{1/2}v\|.
\]
Consequently the shifted Schur form (\(L_P-z-PVQ(A+B)^{-1}QVP\)) is
\[
 L_P-\tau_R x-\zeta+O_{H^1\to H^{-1}}(\mathcal R),
\]
where a sufficient explicit remainder is
\[
 \mathcal R=C\left[
    \frac{T^2}{p^2}+\frac{T^3}{p^{5/2}}
    +\frac{T^2(1+\alpha_R)}{p^2}
    +\frac{T^2(T+\alpha_R+1)^2}{p^3}\right].
\]
These terms respectively bound the leading endpoint form replacement, cubic endpoint replacements, the spectral-parameter term, and the final bounded inverse remainder. All constants here use the fixed slow subgraph, finite word set, and bounded shifted window, not the anisotropic ratio. This is a sufficient estimate, not an assertion of optimality.

If \(p\to\infty\), \(T=o(p^{3/4})\), and \(\tau_R\to\tau\) finite, then the relative bound on \(B\) holds and \(\mathcal R\to0\) using \(\alpha_R=O(T^2/p)\). At real \(\zeta\) the \(Q\) block is positive. Completing its square equates the full negative index at \(\zeta\) with that of the Schur form; min–max against \(L_P-\tau x-\zeta\) gives convergence of the actual shifted bounded-window physical eigenvalues with multiplicity and error \(O(\mathcal R+|\tau_R-\tau|)\) for fixed low levels. Taking a sufficiently negative fixed shifted threshold also shows there are no missing divergent lower eigenvalues. Equivalently the block inverse converges in norm off the limiting spectrum to the embedded slow resolvent zero on \(Q\): the slow error is controlled by the form norm and the fast cross factors are \(O(T/p)\). This is not a resolvent on the whole original Hilbert space with finite fast energies.

For the balanced anisotropic choice \(t_i=(R_1R_2)^{1/3}\kappa_i\), the coefficient \(\tau_R=\kappa_1\kappa_2\kappa_3/36\) is fixed. A clean sufficient length regime is \(q=o(p^{5/4})\), since then \(T=O((p q)^{1/3})=o(p^{3/4})\). In particular the ratio \(q/p\) may diverge while remaining \(o(p^{1/4})\). No claim for faster-growing ratios follows from this estimate. At fixed ratios and \(t_i=r^{2/3}\kappa_i\), the displayed bounds give the \(O(r^{-1/3})\) rate and physical limit \(c[L_P-\kappa_1\kappa_2\kappa_3 x/(36ab)]\) after the exact scalar shift \(c\alpha_R\).

The companion exact check verifies the six weight sum and sufficient length powers. The result is a finite-skeleton anisotropic scale limit under explicit conditions, not a conventional weak-bare, many-plaquette, or continuum assertion.
