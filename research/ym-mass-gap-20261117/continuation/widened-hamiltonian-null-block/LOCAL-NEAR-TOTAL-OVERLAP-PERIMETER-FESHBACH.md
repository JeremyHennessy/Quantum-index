# The actual low-energy perimeter operator for two coupled near-overlapping loops

Take the two-loop SU(2) fixture with common opposite segment of length \(r\), and fixed positive exclusive lengths \(u,w\), so \(b=r+u,\ k=r+w\). Retain the **full based holonomy pair** \((Z,W)\), with the unit quaternion metric, and put \(t_i=g_i/c\) for fixed electric coefficient \(c>0\). The dimensionless pair Hamiltonian acts on independent product Haar and is
\[
 H_r/c=rK+L+V,\qquad
 K=-\sum_j(\ell_Z^j-r_W^j)^2,\quad
 L=u(-\Delta_Z)+w(-\Delta_W),\quad
 V=-t_1\operatorname{Re}Z-t_2\operatorname{Re}W.
\]
This follows from the exact link-product reduction, since only the common segment acts on both loops. The following is an actual spectral reduction for fixed \(u,w,t_1,t_2\) as \(r\to\infty\), not a small-\(t_i\) expansion or a continuum claim.

## Fast kernel, exclusive electric term, and exact matrix element

Set \(Y=WZ\), the unshared perimeter holonomy, and use coordinates \((Z,Y)\). Haar is again product, as right multiplication of \(W\) by fixed \(Z\) preserves Haar. Fast transformations are \((Z,W)\mapsto(hZ,Wh^{-1})\); they leave \(Y\) fixed. Thus \(K=-\Delta_Z\) in \((Z,Y)\) coordinates, its kernel consists of functions of \(Y\), and its orthogonal complement has spectral floor 3. Let \(P\) be the projection to this kernel (Haar average in its fast coordinate) and \(Q=1-P\).

The two exclusive Casimirs in the original coordinates each commute with the fast group action and hence strongly commute with \(K\); one may also see this on the invariant finite Peter--Weyl blocks of the two original group factors. In particular \(L\) preserves \(P,Q\). Each exclusive Casimir on a function of \(Y=WZ\) gives the same group Laplacian of \(Y\) by the isometry of multiplication at fixed other factor. Consequently
\[
 L_P=(u+w)(-\Delta_Y).
\]
In \((Z,Y)\) variables \(V=-t_1\operatorname{Re}Z-t_2\operatorname{Re}(YZ^{-1})\). Both functions are linear in the real quaternion coordinates of \(Z\) at fixed \(Y\), so \(PVP=0\) and \(VP\) lies wholly in the fast eigenspace \(K=3\). Since each coordinate has Haar squared norm \(1/4\), cross moment
\(\mathbb E_Z[\operatorname{Re}Z\,\operatorname{Re}(YZ^{-1})]=\operatorname{Re}Y/4\). Thus
\[
 P V(rK_Q)^{-1} VP
  =\frac1r\left(\frac{t_1^2+t_2^2}{12}
                   +\frac{t_1t_2}{6}\operatorname{Re}Y\right)
\]
as multiplication on the slow space.

## Bounded-window Feshbach estimate with unbounded exclusive energy

For clarity write \(H=rK+L+V\) in dimensionless units here. On \(Q\), set
\[
 A_0=rK_Q+L_Q,\qquad D(z)=A_0+QVQ-z .
\]
For \(z\) in any fixed bounded spectral window and large \(r\), both inverses exist with norm \(O(1/r)\), since \(A_0\ge3r\) and \(V,z\) are bounded. The norm resolvent identity gives
\[
 \|D(z)^{-1}-A_0^{-1}\|=O(r^{-2}).
\]
It is not legitimate to discard \(L_Q\) in bare inverse operator norm at this same order on arbitrary high slow energies. Instead, simultaneous spectral calculus for \(K_Q,L_Q\) gives the form inequality
\[
 0\le(rK_Q)^{-1}-A_0^{-1}\le \frac{L_Q}{9r^2}.
\]
Indeed for common spectral values \(a\ge3,\ \ell\ge0\), the scalar difference is \(\ell/[(ra)(ra+\ell)]\). Sandwich this with \(VP\): the smooth bounded \(V\) has bounded derivatives in the finite group variables, and the product rule yields
\[
 \|L_Q^{1/2}VPF\|\le C\|(L_P+1)^{1/2}F\|.
\]
Here \(VPF\) is in \(Q\), because \(PVP=0\), and the \(L\)-energy of \(PF=F(Y)\) is exactly \(L_P\)-energy. This estimate and polarization give a uniform \(O(r^{-2})\) remainder in the slow \(H^1\) to \(H^{-1}\) form norm, with constants depending on \(u,w,t_i\) and the fixed window, not on \(r\).

The Schur form on \(P\) at energy \(z\) is therefore
\[
 \boxed{\quad
 S_r(z)=(u+w)(-\Delta_Y)-z
       -\frac1r\left[\frac{t_1^2+t_2^2}{12}
                   +\frac{t_1t_2}{6}\operatorname{Re}Y\right]
       +O_{H^1\to H^{-1}}(r^{-2}).\quad}
\]
For example, on a contour in the resolvent of the bare slow operator, the error implies an actual compressed resolvent approximation: add the slow form mass \(L_P+1\), use its Riesz norm and a Neumann series, and apply the exact Schur inverse identity. More elementarily for real \(z\) in the fixed window, \(D(z)>0\) at large \(r\), and completing the \(Q\) square identifies the number of full dimensionless eigenvalues strictly below \(z\) with the negative index of \(S_r(z)\). Thus the bounded-window corresponding eigenvalues differ by \(O(r^{-2})\) from those of the displayed slow operator without \(-z\) and the remainder: if \(H_{\rm eff}=L_P+O(1/r)\) denotes that slow operator, the form error is bounded by \(Cr^{-2}(L_P+1)\), hence by \(C'r^{-2}(H_{\rm eff}+C'')\). The upper and lower min--max brackets at real \(z\) differ by \(O(r^{-2})\) for every fixed finite set of slow levels. Combined with the exact negative-index relation this brackets the full eigenvalues with their multiplicities. The fast block cannot supply an additional low eigenvalue because its shifted form is positive. Compactness and the form-domain completions used here hold for each finite \(r\): the exclusive coefficients \(u,w\) are positive and supply a fixed elliptic principal form on the compact pair. The physical estimates multiply dimensionless energies by \(c\).

## The mixed potential is real even though its first diagonal vanishes

The term \(-t_1t_2\operatorname{Re}Y/(6r)\) is a genuine mixed perimeter potential on the slow space. It does not produce a first-order split within an individual free kinetic level. Indeed center flip \(Y\mapsto-Y\) acts as a constant sign \((-1)^n\) on the entire SU(2) Laplacian level \(n(n+2)\) (the matrix coefficients of spin \(n/2\)); multiplication by \(\operatorname{Re}Y\) is odd. Thus its same-level compression is zero, even in a degenerate full-pair multiplet. By ordinary bounded perturbation about each isolated finite-level eigenspace, each fixed level has first-order common shift \(-(t_1^2+t_2^2)/(12r)\), with uncertainty \(O(r^{-2})\). In particular subtracting the ground energy cancels that first-order constant in excitation energies. The leading mixed low-energy operator is nonzero, but the present order does not determine individual mixed excitation shifts at \(r^{-2}\).

All operations commute with simultaneous conjugation of the based pair. If imposing gauge invariance within this pair, the slow sector becomes the central functions of \(Y\) and the same statements hold restricted to that sector. On an entire fine graph the pair pullbacks are an invariant subspace by the exact pair differential formulas. They exhaust gauge-invariant degrees only when the chosen graph has no additional independent loop degrees (for example, a two-cycle theta graph after subdivision); no low spectrum outside this retained pair subspace is excluded here.

The companion symbolic check verifies the Haar cross moment, fast Casimir denominator and center parity. The conclusion is a finite two-loop low-energy comparison in an overlap-length limit with fixed exclusive lengths and fixed dimensionless couplings. It is not a limit of actual enlarged Wilson systems with many active plaquettes, a continuum construction, or a mass-gap theorem.
