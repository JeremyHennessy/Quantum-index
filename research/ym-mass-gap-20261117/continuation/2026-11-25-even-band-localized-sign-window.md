# Even centered band and localized Taylor coefficients extend the free-boundary sign window

**2026-11-25 | Fixed spatial lattice, continuous time | Research only**

For the same original Haar/free-terminal witness \(h_{\infty,\gamma}(T)\), there is an absolute \(a>0\) such that, for sufficiently small positive γ,
\[
 h_{\infty,\gamma}(T)<0
 \quad\text{for }0<T\le a\,\gamma^{-4/13}\bigl(\log(1/\gamma)\bigr)^{12/13}.
\]
This extends the [previous polynomial window](2026-11-25-refined-polynomial-sign-window.md). The argument first widens the finite-box complex disc by symmetry and exact vacuum subtraction, then uses exact spatial localization *coefficient by coefficient*. It does not compare a real finite-volume signal to the infinite-volume signal out to an uncontrolled radius. The arbitrarily late sign at fixed coupling and the continuum limit remain open.

## 1. Even band in the same holomorphic frame

Use the three-block Riesz similarity \(S(z)=\sum_{j=0,b,h}P_j(z)P_j(0)\) from the [complex-box argument](2026-11-25-polynomial-noncancellation-window.md), with \(N\) bounding the link and plaquette counts and \(w=zN\). Let U be the unitary center-cochain involution in the [log-window calculation](2026-11-25-infinite-volume-logarithmic-sign-window.md). It conjugates H(z) to H(−z), preserves free spectral projections, and is the scalar −I on the free plaquette band and +I on the free vacuum. It follows by the same contour formula and the same choice of frame that \(P_j(-z)=UP_j(z)U\) and \(S(-z)=US(z)U\). Consequently the compressed conjugated band generator and scalar vacuum eigenvalue are both even holomorphic functions of z, also for complex z. This uses the cochain on an open box, and does not assert any parity for the entire higher block.

Use [Kato's analytic projection framework](https://link.springer.com/book/10.1007/978-3-642-66282-9), with the same contours and uniform perturbation parameter w. The quadratic coefficient of the band generator minus the vacuum energy is the exact weight from the [finite-box reduced matrix](2026-11-25-electric-adjoint-residue.md):
\[
 J_\Lambda=(D_\Lambda+B_\Lambda)/168-(7/120)I.
\]
The value does not depend on choosing the Riesz similarity instead of an orthonormal band frame: the frames differ by an analytic change of coordinates equal to the identity at zero, and the zeroth block is scalar and its first derivative zero. The centered coefficient is uniformly bounded since the graph degree is at most 12. Cauchy on the fixed w disc therefore gives the centered transported band
\[
 -6I+z^2J_\Lambda+O(|w|^4),
\]
with uniform remainder in operator norm. The term N/24 in the uncentered quadratic coefficient cannot be retained in this step. The vacuum eigenvalue itself still obeys \(|\lambda_0(z)|\le C|w|^2\); we do not bound its exponential for the full time T, as it cancels in the quotient. The transported higher block remains a bounded O(|w|) perturbation of the free block with spectral bound at most −6.5.

In a box with \(N\le C_2 T^3\), for T large the uniform bound
\[
 \sup_{|z|\le r_N(T)}e^{6T}|h_{\Lambda,z}(T)|\le C,\qquad
 r_N(T)=d\min(T^{-1/2},N^{-1}T^{-1/4})
\]
now follows by the prior complex-box argument with this improvement. Specifically, on this disc \(T(|z|^2+|w|^4)\) is bounded, so the shifted band evolution is bounded by a constant times \(e^{-6T}\). The one-link heat-kernel product smoothing takes time \(t_s=\log(C_0N)+2=o(T)\). Since \(|w|t_s\) and \(|w|^2t_s\) go to zero uniformly, the pointwise rescaled vacuum denominator stays close to one by the previous smoothing estimate, and its excitation correction tends to zero in sup norm. The centered numerator is bounded in L² by \(Ce^{-6T}\); multiplication by the reciprocal denominator in Haar pairing retains that bound. No extra factor growing with N is required. The argument yields holomorphy on the entire disc, not merely an estimate for real z.

## 2. Use small boxes for coefficients and the bulk analytic bound for the tail

Let \(b_j(T)=[z^j]h_{\infty,z}(T)\). The [connected-cumulant proof](2026-11-25-infinite-volume-logarithmic-sign-window.md) implies exact equality of \(b_j\) with the coefficient in a box containing the j-step overlap neighborhood of p, including the support of R. Such a box needs at most \(C(j+1)^3\) links and plaquettes; each step moves bounded spatial distance, and repeats in a cumulant do not enlarge the neighborhood. All even coefficients vanish. For \(j\le T\) and T large, the preceding finite-box disc gives
\[
 e^{6T}|b_j(T)|\le C \left[C'\max(\sqrt T,(j+1)^3T^{1/4})\right]^j.
\]
The bounded complex bulk extension on the *original* radius \(d_0/T\) obtained by the [polymer ratio argument](2026-11-25-infinite-volume-logarithmic-sign-window.md) supplies the separate tail bound \(C(\gamma T/d_0)^{J+1}\) in absolute, unscaled units for \(\gamma T/d_0\le1/2\). The abstract polymer idea is standard; see [Kotecký–Preiss](https://doi.org/10.1007/BF01211762).

Set \(L=\log(1/\gamma)\). The previous polynomial window already covers \(T\le L^2\) for small γ. Above that, let \(J=\lceil14T/L\rceil\), with \(J\le T\) for large L. Throughout the claimed new window \(\log(d_0/(\gamma T))\ge(3/5)L\) for small γ (the leading coefficient is 9/13), so the tail past J is \(O(e^{-8.4T})=o(\gamma e^{-6T})\) uniformly for \(T\ge L^2\).

For degrees through J put \(q_j=C'\gamma\max(\sqrt T,(j+1)^3T^{1/4})\). Then \(q_j\le1/4\) throughout this range by choosing a sufficiently small: at the chosen endpoint \(\gamma T^{13/4}/L^3\le a^{13/4}\), and \(\gamma\sqrt T\to0\). For the first \(j_0=\lceil4L/\log4\rceil\) degrees the tighter uniform bound \(q_j=O(\gamma^{4/5})\) holds for small γ, since \(\gamma \sqrt T\le C\gamma^{11/13}L^{6/13}\), and \(\gamma(j_0+1)^3T^{1/4}\le C\gamma^{12/13}L^{3+3/13}\). Thus orders 3 through \(\min(J,j_0)\) contribute \(O(\gamma^{12/5}e^{-6T})\), using a geometric sum. If \(J>j_0\), orders above \(j_0\) through J contribute \(O(\gamma^4e^{-6T})\) by \(q_j\le1/4\). Both are negligible compared to the negative exact linear term, bounded away from zero after rescaling by \(\gamma e^{-6T}\) on T≥1. This proves the sign.

## Failure controls

The powers \(13/4=3+1/4\) and \(12/13=3/(13/4)\) arise from the rank-independent fourth-order norm estimate and the Taylor cutoff \(J\asymp T/L\). Neither is a predicted physical exponent. Dropping the vacuum subtraction introduces an extensive second-order term, invalidating the wider disc. Dropping the center-cochain parity leaves a third-order remainder in the complex band and does not yield the stated disc. Using a fixed-order cutoff for the *absolute* bulk tail would swamp the exponentially small signal. These are distinct failure modes. The next test is a volume-controlled higher-order centered band estimate (or a direct relative boundary expansion), not an extrapolation of this window to the \(\gamma^{-2}\) scale.
