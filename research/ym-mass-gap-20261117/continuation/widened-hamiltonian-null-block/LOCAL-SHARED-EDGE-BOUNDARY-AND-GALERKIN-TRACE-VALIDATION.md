# Adjacent Wilson squares: boundary rank and certified far-trace workflow

This note adds to the exact \((x,y,d)\) orbit coefficient and Haar-pushforward derivation in the companion joint-conjugacy closure note (LOCAL-ADJACENT-PLAQUETTES-JOINT-CONJUGACY-CLOSURE.md). Its exact polynomial checker verifies divergence, boundary tangency, determinant and the perimeter Casimir. We use the actual finite two-square Wilson model and dimensionless electric units, with no rare-slice large-coupling claim.

## Boundary rank and a moment replay check

Write \(a=1-x^2,\ b=1-y^2,\ D=ab-d^2\), \(d=\operatorname{Im}A\cdot\operatorname{Im}B\), and
\[
 {\cal D}=\{(x,y,d): |x|,|y|\le1,\quad D\ge0\}.
\]
The pushforward is \((2/\pi^2)\,dx\,dy\,dd\) on \({\cal D}\). The companion note's cometric \(G\) has \(G\nabla D=D(-8x,-8y,-4(3d+xy))^{\mathsf T}\) and \(\det G\) is divisible by \(D\). At every boundary point with \(a,b>0\), the \(x,y\) principal minor is \(16ab-d^2=15ab>0\). Thus \(G\) has rank exactly 2, with null direction the Gram normal \(\nabla D\). At \(a=0,b>0\), one has \(d=0\) and the \(y,d\) principal minor is \(15b^2>0\) (entries \(4b,xb,4b\)); the null direction is \(x\), and the point is still regular because \(\partial_x D=-2xb\ne0\). The case \(b=0,a>0\) is symmetric. At the four corners \(a=b=d=0\) the entire matrix vanishes. In the strict interior \(G\) is positive definite by the invariant-coordinate submersion and the ellipticity of the true compact pair electric form. The physical operator is the invariant restriction on that compact pair, not a choice of an external boundary condition in \({\cal D}\).

The antipodal raw curve is \((x,-x,1-x^2)\); on its open part the boundary rank is two, not the curve dimension one. The test \((x+y)^2\) vanishes on the curve but its electric Laplacian there is \(12(1-x^2)\), confirming that even tangency to the boundary cannot close an intrinsic one-variable ground-state equation on the curve.

A convenient exact moment family for invariant polynomial solvers is, for all nonnegative integers \(i,j,k\),
\[
 \mathbb E_{\rm Haar}[x^{2i}y^{2j}d^{2k}]
 =\frac{4}{\pi^2(2k+1)}
   B(i+\tfrac12,k+\tfrac32)\,B(j+\tfrac12,k+\tfrac32).
 \tag{1}
\]
This follows by integrating \(d\) over \([-\sqrt{ab},\sqrt{ab}]\) and then using \(x^2,y^2\) as variables in the two one-dimensional integrals. Moments with any odd exponent vanish by the separate reflection symmetries of the quotient measure. Checks: \(\mathbb E[d^2]=3/16\), \(\mathbb E[x^2y^2d^2]=1/192\); (1) is rational for this integer family. Smooth invariant Peter--Weyl truncations are an intrinsic operator/form core, because spectral truncation in product Casimir commutes with conjugation and approximates smooth functions in Sobolev norms.

## Exact Galerkin error certification at a small trace value

Low Ritz value agreement or a pointwise plot is not sufficient for ratios of ground-state values far from the well. The following workflow is on the **true compact pair**, avoiding the coordinate degeneracy when certifying pointwise values.

Let \(K=-\Delta_E,\ V=-t_1x-t_2y,\ H=K+V\), and \(\Lambda=-\Delta_A-\Delta_B\). The pair Casimir \(\Lambda\) commutes with \(K\) and satisfies \(3\Lambda\le K\le5\Lambda\): the shared derivative form squares \(\ell_A-r_B\) in addition to the exclusive \(3\Lambda\), and its squared sum is bounded by \(2\Lambda\). Use invariant projections \(P\) onto finite \(\Lambda\)-cutoffs. To certify spectral isolation, a possible gate is Feshbach inertia: at real \(s\), put \(Q=1-P\) and \(D_0=3\inf\sigma(\Lambda|_Q)-\|V\|_\infty\). For \(D_0>s\) the complement block of \(H-s\) is positive; its Schur correction subtracting from \(P(H-s)P\) is between zero and \(\|PVQ\|^2/(D_0-s)\) times identity. Counts from the two bounding finite matrices enclose the count below \(s\). Do not infer isolated levels when these counts fail to give the needed bounds. All of this can be done with the true invariant subspace, not extra modes.

Let \(\widetilde\phi\) be a normalized invariant Galerkin vector, \(\widetilde E\) its candidate energy, and \(r=(H-\widetilde E)\widetilde\phi\) its **full residual**, not projection into the Galerkin subspace. Suppose a certified \(\gamma>0\) separates \(\widetilde E\) from all eigenvalues except the actual ground \(E_0\), and \(\|r\|_2/\gamma<1\). With sign aligned and \(\phi\) the true normalized positive ground, \(d_0=\widetilde\phi-\phi\) satisfies
\[
 \|d_0\|_2\le\sqrt2\,\|r\|_2/\gamma .
 \tag{2}
\]
Indeed the component orthogonal to the ground has norm at most \(\|r\|_2/\gamma\) by the spectral theorem; normalization then gives (2). Bound \(\varepsilon_0\ge|\widetilde E-E_0|\) from a ground-energy enclosure, or from the residual and the proven nonzero overlap.

Put \(S_j(f)=\|(1+\Lambda)^j f\|_2\). Multiplication by one normalized trace maps product highest-weight labels to at most two labels \(n\to n\pm1\) in the affected factor. The ratio of \(1+\lambda(\Lambda)\) at a target versus a source is at most 4, from \(1+n(n+2)=(n+1)^2\); each block of the unweighted trace multiplier has norm at most one and at most two blocks enter/leave a block row/column. Thus
\(S_j(Vf)\le 2\cdot4^j(|t_1|+|t_2|)S_j(f)\).
By \(K,\Lambda\) commuting and \(K\ge3\Lambda\), the operator \((1+\Lambda)(1+K)^{-1}\) has norm at most one. Apply it to the exact error equation
\((1+K)d_0=(1+E_0-V)d_0+(\widetilde E-E_0)\widetilde\phi+r\)
to get
\[
 S_{j+1}(d_0)
 \le (|1+E_0|+2\cdot4^j(|t_1|+|t_2|))S_j(d_0)
      +\varepsilon_0S_j(\widetilde\phi)+S_j(r).
 \tag{3}
\]
One may replace \(|1+E_0|\) with the enclosure bound. At finite polynomial support, \(\widetilde\phi\) and the full residual have finitely computable Fourier coefficients, hence all right-side residual and trial Sobolev norms are certifiable.

A concrete evaluation estimate using normalized Haar on \(SU(2)^2\) is
\[
 \|f\|_\infty\le
 \left(\sum_{j,k\ge1}\frac{j^2k^2}{(j^2+k^2-1)^4}\right)^{1/2}S_2(f)
 \le\sqrt{48}\,S_2(f).
 \tag{4}
\]
Here \(j,k\) are representation dimensions and the sum of squared normalized matrix elements over indices is \(j^2k^2\) at every group pair. For \(\max(j,k)=N\), use at most \(2N\) pairs, numerator at most \(N^4\) and denominator base \(j^2+k^2-1\ge N^2/2\); thus the sum is bounded by \(32\sum_NN^{-3}\le48\). The same estimate with higher \(S_j\) certifies derivatives (each unit electric derivative costs at most its representation highest weight). Slice derivatives may be evaluated after the smooth map \(V\mapsto(V,-V^{-1})\) on the compact pair rather than differentiating singular quotient coordinates.

If the absolute error \(\epsilon_\infty\) obtained from (2)–(4) is below a certified positive minimum of the sign-aligned trial along the targeted trace set, the true amplitude lies pointwise in the positive interval \([\widetilde\phi-\epsilon_\infty,\widetilde\phi+\epsilon_\infty]\). Take interval logarithms and subtract a reference trace value to bound the actual centered log-density (twice the log-amplitude difference), without needing conditional normalization. An estimate larger than the local amplitude certifies neither relative accuracy nor any feature of the rare slice. In particular (2)–(4) may demand severe absolute precision at large coupling. No Galerkin run, rare-slice asymptotic, or continuum inference is established here.
