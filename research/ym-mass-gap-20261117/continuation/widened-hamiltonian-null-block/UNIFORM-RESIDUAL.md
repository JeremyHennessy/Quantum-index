# Uniform dressed-probe residual and a shrinking energy window

2026-11-27 · Finite fully padded open cubic boxes, fixed lattice spacing, small magnetic perturbation of the gapped electric Hamiltonian. Parent: [static first moment](STATIC-SPECTRAL-WEIGHT.md), commit 52999bd9bec6f616ee61b84ccd3a20e9df43bc56. This is not a continuum result and does not concern the lowest excitation or a unique branch.

**There are constants \(g_*,C,K>0\), independent of box size and probe location with the specified padding, for which the normalized centered dressed-probe spectral measure obeys**
\[
\int (\lambda-15)^2\,d\mu_g(\lambda)\le Cg^4,\qquad
\mu_g([15-Kg^2,15-(a/4)g^2])\ge a^2/(64C),\quad a=13/336
\]
**for every real \(0<|g|\le g_*\).** The shrinking window captures a positive fraction independent of coupling as well as of finite box size. The constants are specified in terms of the uniform gap and fixed local derivatives below; no numerical value for \(g_*\) is claimed.

## Uniform derivative estimate for the vacuum

Work on the full product Haar Hilbert space first, not just in the physical subspace: differentiation of the ground vector on a single link need not be gauge invariant. Write \(H=H_0-gV\), \(L=H-E_0\), and \(H_0=-\tfrac12\sum_X X^2\) in the standard round SU(2) normalization; the sum ranges over the three real invariant unit derivative fields per link. The link Casimir commutes with each such field. Let \(\Omega\) be the real normalized ground vector. In any given finite box the operator is elliptic on a compact product of SU(2), with a smooth bounded potential, hence its eigenvectors are smooth. This supplies the domain needed for the differential identities below. Reality follows from conjugation and simplicity. The ground vector and gauge-invariant multipliers recover the physical spectral measure as in the parent.

Use the volume-uniform full link-space gap \(\gamma>0\) on a common sufficiently small real interval from the gapped product-state perturbation argument of [Yarotsky, Theorem 1 and §2](https://arxiv.org/pdf/math-ph/0412040), as applied in the parent static proof. To put the free local gap on the same full fixed neighborhood as a perturbation term, group the three outgoing links at each site, and on the padded periodic product array average the free site generators over the fixed interaction neighborhood for each local free term. Each average has the unique local product vacuum and a fixed positive gap, they sum exactly to the original \(H_0\), and a fixed energy rescaling gives the theorem normalization. Omitted open-boundary plaquettes have zero interaction, so the local estimates and support/cluster counts apply unchanged as in the parent. Dummy link factors are independent and stay in their constants. No gap on derivative vectors inside the gauge subspace is being assumed.

Differentiate the ground equation. Skew adjointness of \(X\) for Haar and reality of \(\Omega\) give \(X\Omega\perp\Omega\); also \(\omega(XV)=0\) for \(g\ne0\) by taking the ground inner product in
\[
L X\Omega = g(XV)\Omega.
\]
Thus \(\|X\Omega\|\le |g|\|XV\|_\infty/\gamma\). The plaquette half trace has first and second derivative bounded by 1 under invariant unit fields on its links. Each derivative inserts one unit imaginary quaternion in the ordered matrix product, with the sign/position appropriate for inverse links; each resulting matrix has operator norm at most 1. There are at most four plaquettes through an edge, with four edges and three fields per edge in each. Hence
\[
\|XV\|_\infty\le4,\qquad \sum_Y\|Y(XV)\|_\infty\le48,\qquad
\|X\Omega\|\le4|g|/\gamma.
\]
Sums involving derivatives of a cylindrical function run over its finite support.

Define \(F_X=X\Omega-(g/6)(XV)\Omega\). Both terms are orthogonal to the ground vector. Since \(H_0V=6V\) and \(X\) commutes with \(H_0\), one has \(H_0(XV)=6 XV\). The product rule gives
\[
L F_X=g(XV)\Omega-(g/6)[H_0,XV]\Omega
=(g/6)\sum_Y (Y(XV))Y\Omega.
\]
Invert \(L\) off the ground vector to obtain \(\|F_X\|\le32|g|^2/\gamma^2\), uniformly for every derivative field. At \(g=0\) both gradient identities hold trivially.

## From local cancellation to the second moment

The real smooth multiplier \(A_g=q+gr\) is the [exactly dressed probe](DRESSED-PROBE.md), with \(H_0q=15q\) and \(P_{15}Vq=0\). The dressing identity and product rule imply
\[
(H_0-15)r=-(H_0-21)(Vq)/6=\tfrac16\sum_X (Xq)(XV).
\]
Using \(L\Omega=0\), commutativity of the potential with \(A_g\), and the expression for \(F_X\), one obtains
\[
(L-15)A_g\Omega=-\sum_X X(q+gr)\,F_X-\tfrac{g^2}{6}\sum_X (Xr)(XV)\Omega.
\]
This is an identity on smooth vectors in each box, with a uniform estimate derived only afterward. Set \(G_s=\sum_X\|Xs\|_\infty\) for \(s=q,r\); these finite constants are common to all fully padded placements. For \(|g|\le1\) let
\[
B_*=32\gamma^{-2}(G_q+G_r)+\tfrac23G_r.
\]
The residual norm is at most \(B_*g^2\). Centering replaces the residual by its projection orthogonal to the vacuum, as this projection commutes with \(L\); it can only reduce the norm. The variance of \(A_g\) is at least 3 on a smaller common interval (its constant term is 6, with uniform static analytic bound from the parent). Therefore
\[
\int(\lambda-15)^2\,d\mu_g
=\frac{\|(L-15)(A_g-\omega(A_g))\Omega\|^2}{\operatorname{Var}_\omega(A_g)}
\le Cg^4,\qquad C=\max\{1,B_*^2/3\}.
\]
This avoids any need for uniform real-time Gaussian correlator derivatives or for treating an unbounded local derivative observable as a bounded static insertion.

## Isolate the moving energy window

The [static first moment](STATIC-SPECTRAL-WEIGHT.md) gives \(\int(15-\lambda)\,d\mu_g\ge (a/2)g^2\) uniformly on a common real interval. For \(g\ne0\) set \(Z=(15-\lambda)/g^2\), so \(\mathbb E Z\ge a/2\) and \(\mathbb E Z^2\le C\). The contribution from \(Z<a/4\) is at most \(a/4\), and that from \(Z>K\) is at most \(C/K\). With \(K=8C/a\), the remaining interval contributes at least \(a/8\). Cauchy–Schwarz gives \(\mu_g(a/4\le Z\le K)\ge a^2/(64C)\), as claimed. Shrink \(g_*\) further if desired to have \(15-Kg^2>0\). No uniform isolation of a perturbed energy-15 cluster is needed.

## Reproduce

Run **python3 second_order.py** (Python 3.12, SymPy 1.14). The additions verify exact SU(2) invariant derivative and product rules on polynomial tests, a separate overlapping finite-spin dressing fixture, the local 4/48 incidence counts in both cubic boxes, and the shrinking-window inequality arithmetic. The uniform estimates themselves are the domain and gap argument above, not a numerical calculation of a box spectrum.
