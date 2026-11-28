# Matching lower order for visible open-cell stiffness at identity

Use the same open side-\(b\) four-dimensional cell and Euclidean quotient of its active tangential edge data by active boundary graph gradients. Pure-boundary plaquettes remain omitted; the exact kernel characterization is unchanged. Work in one real Lie direction, with the same unit Hessian convention. Write \(Q_b(h)=\min_{A|_{\rm active}=h}\|dA\|^2\) for the minimized included curl energy; inactive edge values never enter. An interior gauge forest may be fixed or not, with the same minimum. We prove
\[
 \lambda_b^+\ge\frac{1}{(\sqrt{7(b-1)-4}+1)^2}\quad(b\ge3),
 \qquad \lambda_2^+\ge1.
\]

## Exact boundary-to-core seam identity

Fix a global coordinate order for the clamp to the inner cube \([1,b-1]^4\) and let \(c(v)\) be the final clamped vertex, \(\gamma_v\) its oriented track of unit edges. For each positively oriented active edge \(e=(v,w)\), let \(c(e)\) be its clamped core edge, or the zero chain when it collapses. Add the elementary homotopy identities along the four clamp stages:
\[
e+\gamma_w-c(e)-\gamma_v=\partial P_e .
\]
Here \(P_e\) is zero or one signed included square. An active edge has exactly one transverse boundary coordinate, which is the only step that can sweep a square. If its longitudinal interval is boundary-adjacent and that longitudinal coordinate is clamped first, the edge has already collapsed and there is no prism. No other stages contribute a square. Endpoint tracks agree at shared boundary vertices because the coordinate order is fixed.

Furthermore an included square is used by **at most one** active edge. It can be swept only by an original active side whose transverse normal, within the square, has a boundary value. If both varying coordinates of the square touch the boundary, there are two candidate sides; the side whose normal coordinate precedes the other axis sweeps it, while the other side collapses along its own longitudinal coordinate first. All other squares have at most one candidate. Thus the prism-curl error summed over active edges has Euclidean norm at most \(\|dA\|\).

On the inner cube let \(u=A|_{\rm core}-d\phi\) be its Euclidean orthogonal projection off gradients, so \(d^*u=0\) there and \(du=(dA)|_{\rm core}\). Evaluating the chain identity gives
\[
 A(e)-d\bigl(\phi\circ c-A(\gamma_{\cdot})\bigr)(e)
 =u(c(e))+dA(P_e).
\]
The left side is a representative of the active boundary quotient. The core contribution pulled back to the active graph has squared norm at most the sum of squared tangent traces of \(u\) over the eight core faces. Indeed every noncollapsed edge has its original longitudinal interval entirely inside the core, and for each original facet the normal is the sole transverse boundary coordinate. Clamping gives an injective map on such edges into that core face. The trace sum intentionally counts different faces separately.

## Core Hodge gap and trace estimate

Write \(m=b-1\) for the number of vertices per core axis. For \(m\ge2\) the cubical cochain complex with Euclidean counting norms is the graded tensor product of four path cochain complexes (path incidence, with no boundary condition added). On degree 1 its Hodge quadratic form is
\[
\|du\|^2+\|d^*u\|^2=\sum_i\left(\|D_i^*u_i\|^2+\sum_{j\ne i}\|D_j u_i\|^2\right).
\]
Here \(u_i\) is indexed by an edge position in coordinate \(i\) and a vertex position in the other coordinates, and \(D\) is the one-dimensional vertex-to-edge forward difference. Mixed terms cancel because the signed tensor differentials on different coordinates anticommute and similarly cancel with adjoints. This factorization uses only the cubical cochains through degree two. On the link factor the path Laplacian \(DD^*\) has all eigenvalues \(4\sin^2(\pi k/(2m))\), \(1\le k<m\): its tridiagonal diagonal is 2 and both neighboring off-diagonals are \(-1\), so discrete sine eigenvectors give the formula. In particular it is at least \(4/m^2\), by \(\sin x\ge 2x/\pi\) on \([0,\pi/2]\). Since \(d^*u=0\), this proves \(\|u\|^2\le(m^2/4)\|du\|^2\) and \(\sum_i\sum_{j\ne i}\|D_j u_i\|^2\le\|du\|^2\).

For a length-\(m\) vertex sequence \(f\), averaging \(|f_0|^2\le2|f_k|^2+2|f_k-f_0|^2\) in \(k\), and bounding each difference by the telescoping sum and Cauchy-Schwarz, gives
\[
|f_0|^2+|f_{m-1}|^2\le\frac4m\sum_{k=0}^{m-1}|f_k|^2+4(m-1)\sum_{k=0}^{m-2}|f_{k+1}-f_k|^2.
\]
Apply this in each direction \(j\ne i\) to each transverse section of \(u_i\), and sum. The full squared tangent trace is at most \((12/m)\|u\|^2+4(m-1)\|du\|^2\le(7m-4)\|du\|^2\).

Combining the two boundary terms by the triangle inequality and using \(\|du\|\le\|dA\|\),
\[
\|[h]\|_{\rm quot}\le(\sqrt{7m-4}+1)\|dA\|.
\]
This holds for every extension \(A\) and hence for the minimizer. At \(b=2\) the core is a point; there is no core trace and the exact seam bound alone gives \(\|[h]\|_{\rm quot}\le\|dA\|\).

## Scale conclusion and replay

Together with the trial-extension upper bound, the least visible Euclidean stiffness has order \(1/b\), more explicitly
\[
\frac17\le\liminf_{b\to\infty} b\lambda_b^+
\le\limsup_{b\to\infty} b\lambda_b^+\le 8 .
\]
No limit or sharp prefactor is claimed. Inactive nongauge directions still have exactly zero stiffness. This is a linear identity result in counting Euclidean norms. It does not give nonlinear coercivity uniform in background, uniform Laplace remainder in \(b\), a scale trajectory, a continuum stiffness, or a mass-gap result.

Run `python verify_clamp_prism_trace.py` for the independent exact chain/incidence replay on sides \(b=2,\ldots,8\). It checks endpoint-track signs against the actual oriented square boundary, every prism is included, prism multiplicity is one, and the noncollapsed active edges inject into the specified core traces. The Hodge and trace inequalities are established analytically above.
