# Support size, not just spatial radius, controls the mixed-boundary spectral amplitudes

**2026-11-25 | Fixed spatial SU(2) Wilson Hamiltonian, weak real coupling | Research only**

The [scalar normalization reduction](2026-11-25-scalar-boundary-normalization.md) leaves a mixed-boundary weight with reciprocal vacuum on one side and the free terminal vector on the other. A natural idea is to lift the spectral filter used for the [dressed band](2026-11-25-dressed-bulk-spectral-edge.md) to these boundary functionals by operator-norm locality alone. Here we prove an upper bound in support **cardinality** and an exactly factorized SU(2) counterexample to that shortcut. Exponential locality in spatial radius is not enough for this class of tests. Neither the sign of the true filtered residue nor the continuum gap is inferred.

Let \(\Psi>0\) be the normalized vacuum in a finite box, \(\nu\) Haar, \(a=\nu(\Psi)\), \(a_F=\nu(\Psi F)/a\), and \(R\) the original Haar-centered witness. For a bounded operator B acting only on a finite set S of link coordinates, define
\[
 L_R(B)=\nu\!\left[R\frac{B\Psi}{\Psi}\right],\qquad
 U_F(B)=a^{-1}\nu[(F-a_F)B\Psi].
\]
The displayed integrals are ordinary scalar pairings in finite volume. These are precisely the two relevant weights when \(B\Psi\) is in the isolated energy band, with opposite factors a canceling between the two original normalized amplitudes. They satisfy
\[
 |L_R(B)|\le \|R\|_\infty\|B\| e^{C\gamma^2|S|},\qquad
 |U_F(B)|\le 2\|F\|_\infty\|B\| e^{C\gamma^2|S|}.
\]
The bounds include operators that are not pointwise multiplications or Markov kernels.

## Conditional bounded differences, fiber by fiber

Freeze all exterior links. On the Haar fiber for S, let \(g=\log\Psi\) and \(m=\nu_S(g)\). Its oscillation under a single-link change is \(O(|\gamma|)\), uniformly in this exterior by the [local ratio proof](2026-11-25-local-vacuum-boundary-ratios.md). Product-Haar bounded differences on that fiber, obtained by successive exposure and conditional Hoeffding as in the [boundary-law calculation](2026-11-25-free-boundary-law-and-fidelity.md), imply
\[
 \nu_S e^{t(g-m)}\le e^{C t^2\gamma^2|S|}\quad(t\in\mathbb R).
\]
Hence \(\|\Psi\|_{2,S}\|\Psi^{-1}\|_{2,S}\le e^{C'\gamma^2|S|}\) and \(\|\Psi\|_{2,S}\le e^{C'\gamma^2|S|}\nu_S(\Psi)\), the latter by Jensen in the denominator. Applying Cauchy–Schwarz to the left fiber pairing proves the first inequality. The right fiber pairing costs at most \(2\|F\|_\infty\|B\|\|\Psi\|_{2,S}\); integrate \(\nu_S(\Psi)\) over the exterior to cancel a. This uses no global inverse-vacuum norm. An exponential in \(|\gamma||S|\) based only on the pointwise ranges would be strictly worse; the quadratic coupling factor here is a consequence of averaging on the product Haar fiber before comparing.

## Why an exponential cost is unavoidable for unrestricted operators

Use the Wilson deletion control from the [Riesz-frame counterexample](2026-11-25-quartic-riesz-frame-obstruction.md), with one two-plaquette root component carrying R and separated single-plaquette spectator components. Place them at a fixed positive density in growing cubic balls, with disjoint vertices by taking a sparse periodic pattern. All other interaction coefficients are zero, so vacuum factors are exact (unused links are in their free vacua). Let \(\psi\) be the normalized one-square vacuum, and \(a_*=\nu(\psi)\) on that component. As computed from its first vacuum derivative \(\tau/6\) and \(\|\tau\|^2=1/4\),
\[
 a_* = 1-\gamma^2/288+O(\gamma^4).
\]
Here evenness of the overlap follows by the center-sign map on a square. The coefficient follows directly from normalization and the square norm of the first derivative. By Jensen, \(\nu(1/\psi)\ge1/a_*>1\) for small nonzero γ.

On one spectator take the norm-one, gauge-invariant rank-one operator \(P_*=|1\rangle\langle\psi|\); it maps ψ exactly to 1. On the root take \(P_R=|f_R\rangle\langle\Psi_{\rm root}|\), with \(f_R\) the normalized local vector \(R/\Psi_{\rm root}\). The root's \(L_R\) pairing with \(P_R\) is the strictly positive constant \(\|R/\Psi_{\rm root}\|_2\). For m spectators the norm-one product \(B_m=P_R\otimes P_*^{\otimes m}\) (identity on remaining components) then has
\[
 L_R(B_m)=\|R/\Psi_{\rm root}\|_2[\nu(1/\psi)]^m
 \ge \|R/\Psi_{\rm root}\|_2 e^{c\gamma^2m}.
\]
In a right-hand version, choose at the root \(B\Psi_{\rm root}\) proportional to the nonzero \(F-a_F\); each spectator gives the factor \(1/a_*\), since the right normalization cancels only its original \(\nu(\psi)\). All rank-one factors commute with the vertex gauge actions, since both vectors defining each are invariant. This verifies exponential support cost for both types of boundary pairings, not merely a lossy upper estimate.

## A bounded radius-local counterexample and a usable criterion

For each integer r let \(B_r\) be the preceding product using all spectator components within distance r of the root; their number is bounded below by a positive constant times \(r^3\) for large r. The series \(B=\sum_{r\ge1}e^{-r} B_r\) converges in operator norm on the infinite tensor algebra, with truncations on balls giving an exponentially small radius error. In a finite box containing the radius-n ball, the boundary pairing of the nth truncation is a sum of positive terms, its last term at least \(c_R e^{-n+c\gamma^2 n^3}\). Thus even an exponentially small operator-norm radius tail does **not** ensure boundedness of the boundary response of such local truncations. This is a counterexample for arbitrary quasi-local operators on actual disjoint Wilson controls, not an assertion that the physical spectral filter has the bad tail. In particular it does not contradict the standard forms of [quasi-locality of real-time filters](https://arxiv.org/abs/1810.02428).

A sufficient replacement would be a decomposition \(B_x=\sum_S B_{x,S}\) with \(\sum_S e^{C\gamma^2|S|}\|B_{x,S}\|<\infty\) uniformly, with additional summable distance control for the coefficient profiles. For centered boundary tests, terms whose physical dependence factors from that test cancel exactly on disconnected models. On connected lattices that feature would have to be imposed or proved in a linked expansion, not inferred from ordinary radius approximation. This identifies a quantitative obstruction and narrows the next sign test to the actual filter or connected boundary series. No general sign statement or continuum conclusion follows.
