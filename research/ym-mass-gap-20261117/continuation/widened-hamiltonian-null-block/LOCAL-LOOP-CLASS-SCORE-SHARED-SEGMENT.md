# Exact leading class score for loops sharing a contiguous segment

Consider two simple SU(2) loops of lengths \(b,k\), with a common contiguous segment of length \(r\), \(1\le r<\min(b,k)\), traversed oppositely. Assume their exclusive paths are edge-disjoint and use no edges of the shared segment. In a common basepoint orientation write \(Z=SP,\ W=QS^{-1}\), where \(S\) is the ordered segment product and \(P,Q\) are the exclusive products. Use normalized fine Haar and the unit quaternion electric metric, with \(H=-c\Delta-g_2\,\operatorname{Re} W\) at fixed \(c>0\); the coarse-loop coupling \(g_1\) is zero. The retained variable is the genuinely gauge-invariant class angle \(\theta=\arccos\operatorname{Re}Z\). This computes a Taylor coefficient at each fixed regular angle, not a uniform estimate on any length or continuum trajectory.

## Pair operator and normalized score

The joint Haar law of \((Z,W)\) is independent Haar: condition on \(S\) and use independent Haar of the nonempty exclusive products. The exact electric operator on the full pair is
\[
 \Delta_E=(b-r)\Delta_Z+(k-r)\Delta_W
                  +r\sum_{j=1}^3(\ell_Z^j-r_W^j)^2
          =b\Delta_Z+k\Delta_W-2r\sum_j\ell_Z^j r_W^j.
\]
On a single segment product each separate link induces the group Laplacian isometrically, so its \(r\) terms sum to \(r\Delta_S\). A left variation of \(S\) then gives the indicated simultaneous left \(Z\) and opposite right \(W\) increments. The same argument gives the pure contributions from the exclusive paths. The paired mixed cometric in these frames is \(-rI\), and the pure \(Z\) one is \(bI\).

The normalized positive full ground state is a function of \(W\) alone: its one-group eigenproblem is \(-ck\Delta_W-g_2\operatorname{Re}W\), and a positive solution lifts to the full operator. The coarse marginal is exactly Haar, including Haar class angle, for all \(g_2\) in this fixture. Write \(v=\operatorname{Re}W\), \(n=\operatorname{Im}Z/\sin\theta\), \(p=n\cdot\operatorname{Im}W\) for \(0<\theta<\pi\). The first vacuum perturbation is \(\log\rho=2g_2v/(3kc)+O(g_2^2)\) at fixed lengths and \(c\), since \(-\Delta_Wv=3v\).

The unit radial horizontal field is \(T_\theta=\nabla\theta/\sqrt b\), with \(|\nabla\theta|^2=b\). On functions of \(W\) it acts as \(-(r/\sqrt b)r_W^n\). Since \(r_W^n v=-p\), the first centered score is
\[
 s_\theta=\frac{2r\,g_2}{3k c\sqrt b}\,p+O(g_2^2).
\]
In fact the score \(T_\theta\log\rho\) is already centered for this fixture: conditional on the angle, the reference \(W\) is independent of the coarse axis, the actual conditional weight depends only on \(W\), and the right derivative integrates to zero against \(\rho\,dW\). The \(r\) contributions to the horizontal action come from the whole shared-segment cometric, not just one of its endpoints.

## True regular-class vertical operator

At zero coupling the normalized reference fiber comes from Haar disintegration; the angle normal Jacobian is the constant \(\sqrt b\) at regular angles. For an ambient test \(F\), the tangential gradient is \(\nabla F-\Gamma(\theta,F)\nabla\theta/b\), where \(\Gamma\) is the fine gradient pairing. Its ambient Haar divergence gives the genuine intrinsic class operator by integration by parts against arbitrary fine tests times functions of \(\theta\), followed by disintegration. In particular the tangential correction to the ambient Laplacian is
\[
 -b^{-1}\bigl(\Gamma(\theta,\Gamma(\theta,F))
                       +\Gamma(\theta,F)\Delta_E\theta\bigr).
\]
The necessary identities are
\[
 \Delta_E\theta=2b\cot\theta,\quad
 \Gamma(\theta,p)=-rv,\quad \Gamma(\theta,v)=rp,\quad
 \Delta_Z n=-2\csc^2\theta\,n,\quad
 \sum_j\ell_Z^j r_W^j p=2v\cot\theta-2p .
\]
For the last contraction, use \(\ell_Z^j n=\cot\theta(e_j-n_jn)+e_j\times n\) and \(r_W^j\operatorname{Im}W=v e_j+\operatorname{Im}W\times e_j\). Combining these identities gives on the Haar-orthogonal span \((p,v)\), with each squared norm \(1/4\), the symmetric matrix
\[
 -\Delta_{v,\theta}=
 \begin{pmatrix}
 2b\csc^2\theta+3k-4r-r^2/b&2r\cot\theta\\
 2r\cot\theta&3k-r^2/b
 \end{pmatrix}.
\]
The fiber is connected at regular angle: after solving one coarse link it is parametrized by the coarse conjugacy sphere and the remaining group links. Thus the solution in this centered invariant span is the full intrinsic Poisson inverse on the leading source. Each of these two functions is also invariant under simultaneous conjugation of the based pair.

Set \(A=3k-r^2/b\) and
\[
 D_\theta=2b+A-4r+\bigl(2b-4r^2/A\bigr)\cot^2\theta .
\]
Then the physical conditional generator at zero is \(c(-\Delta_{v,\theta})\), and the first diagonal inverse matrix entry is \(1/(cD_\theta)\). The leading physical inverse-score energy is
\[
 \boxed{\quad
 \left\langle s_\theta,L_\theta^{-1}s_\theta\right\rangle
 =\frac{r^2\,g_2^2}{9 b k^2 c^3 D_\theta}
       +O(g_2^4).\quad}
\]
Here \(L_\theta\) includes \(c\); if it is omitted, multiply the result by \(c\). The factor \(1/4\) in the leading norm is the Haar squared norm of \(p\). The even remainder follows from analyticity at fixed regular fiber near zero and a center flip on an exclusive neighboring link, which changes \(g_2\) to \(-g_2\), preserves the coarse angle, and intertwines its intrinsic forms. Analyticity follows from the finite elliptic vacuum expansion and a fixed-fiber Riesz inverse perturbation; neither its radius nor its constants are asserted uniform. For comparison, fixing the entire \(Z\) rather than its class removes all \(b\)-normalized horizontal directions; on \(W\)-only pullbacks its reference vertical Laplacian is \((k-r^2/b)\Delta_W\), and the same leading radial prefactor has denominator \(A\) instead of \(D_\theta\). The two-level distinction persists for general \(b,k,r\).

## Finite coefficient scaling

Let \(u=b-r>0\) and \(w=k-r>0\) count exclusive segments. The two pieces of the Schur denominator obey
\[
 \begin{split}
 D_0&=2b+A-4r=(2+r/b)u+3w,\\
 D_2&=2b-4r^2/A=6(bk-r^2)/A=6(ku+rw)/A,\qquad
       D_\theta=D_0+D_2\cot^2\theta .
 \end{split}
\]
Since \(2k<A\le3k\), this gives \(2(u+w)\le D_\theta\le3(u+w)\csc^2\theta\). In particular for each fixed regular \(\theta\) the coefficient of \(g_2^2\) is of order \(r^2/[b k^2 c^3(b+k-2r)]\), with constants depending on the angle but not on the integer lengths. When \(b,k\) are comparable to \(L\), illustrative length regimes are:
- Fixed \(r\): order \(L^{-4}\).
- \(r\) of order \(L\) and \(u+w\) also of order \(L\): order \(L^{-2}\).
- Near-total overlap with \(u,w\) fixed and \(r\to\infty\): order \(r^{-1}\), and \(r\) times the coefficient tends to \(\sin^2\theta/[27c^3(u+w)]\).

For example at \(b=k=L\) and fixed \(r\), \(L^4\) times the coefficient tends to \(r^2/[9c^3(5+2\cot^2\theta)]\). At \(b=k=4,r=1\) the prefactor becomes \(1/(576c^3)\) and \(D_\theta=63/4+(360/47)\cot^2\theta\), reproducing the neighboring-square result.

The companion exact symbolic check verifies the Schur factor and limits. These are statements about finite Taylor coefficients, not about a Taylor expansion uniform in \(b,k,r,\theta\), a weak-bare trajectory, or the continuum.
