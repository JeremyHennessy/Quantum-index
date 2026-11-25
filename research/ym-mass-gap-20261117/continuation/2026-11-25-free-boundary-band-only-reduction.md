# A controlled band-only reduction for the original free-boundary bulk signal

**2026-11-25 | Fixed spatial SU(2) Wilson Hamiltonian, weak real coupling | Research only**

The [scalar boundary reduction](2026-11-25-scalar-boundary-normalization.md) keeps the true free terminal vector and Haar/reciprocal-vacuum observation. The [support-cost control](2026-11-25-support-cost-of-boundary-dedressing.md) shows why a direct use of arbitrary radius-local operators cannot control these weights. Nevertheless, a logarithmic amount of positive semigroup smoothing at each boundary makes the *high-band remainder* controllable, without replacing the true walls.

For any fixed \(0<\delta<1/4\) and sufficiently weak real positive γ, take cubic comparison boxes \(\Lambda_T\) centered on the two probes, with both probes at spatial graph distance at least \(vT\) from the cut, and with \(N_T=O((1+T)^3)\) links. Here \(v\) is a sufficiently large fixed constant. Write \(H,\Psi,\lambda_0,P_b\) for their real Hamiltonian, vacuum, vacuum eigenvalue, and isolated energy-six projection, \(U_t=e^{t(H-\lambda_0)}\), \(a=\nu(\Psi)\), and \(a_F=\nu(F\Psi)/a\). As \(T\to\infty\),
\[
 h_{\infty,\gamma}(T)=a^{-1}
 \langle R/\Psi,\ U_T P_b(F-a_F)\rangle_\nu
 +O(e^{-(6+\delta)T}).
\]
The right-hand band term is evaluated in \(\Lambda_T\); this does not assert a separate fixed-T bulk limit for its spectral measure. The remainder is faster than the lower band edge, and all slower contributions of the genuine bulk witness must now come from the isolated band in these comparison boxes.

## Smooth the two positive walls without paying their bare norms

For either \(w=1\) or \(w=\Psi^{-1}\), let \(a_w=\nu(\Psi w)\). The estimate needed is
\[
 \|U_s w\|_2\le C a_w
 \qquad\text{if } s\ge K\log(2+N_T)
\]
for fixed sufficiently large K. This is not assumed at s=0.

Use the real skeleton and bridge factors of the [free-boundary proof](2026-11-25-free-boundary-bulk-limit.md), with time slabs of length 8 up to the last one in [8,16). Multiplying by \(w=\Psi^{-1}\) at the free terminal endpoint adds a conditional log-density contribution only for final endpoint variables on that layer. Its spatial conditional influences are bounded by \(C\min(|\gamma|,4^{-d(e,f)})\) by the [local ratio bound and its influence consequence](2026-11-25-free-boundary-law-and-fidelity.md). The likelihood-ratio proof of the influence bound combines this contribution with the old slab factors by adding log differences before normalizing. Up to an absolute factor the spatial influence row sum is \(O(|\gamma|\log^3(1/|\gamma|))\); shrink γ so the combined row sum is bounded by a fixed \(q<1\). The terminal influence may be long-range in space but does not jump between time layers.

For starting fields x,y differing on one link, write the ratio \(Z^w_s(y)/Z^w_s(x)\), \(Z^w_s=e^{sH}w\), as expectation of the bounded exponential of the first-slab factor change, exactly as in the [local vacuum-ratio proof](2026-11-25-local-vacuum-boundary-ratios.md). This test is identical for w=1 and w=Ψ⁻¹. The two specifications differ only at the final endpoints, and the test lies in the first layer. [Dobrushin comparison](https://arxiv.org/abs/1308.4117) bounds the difference of these expectations by \(C e^{-\kappa s}\), uniformly in the box; a fixed positive lower bound on the test permits taking logs. The same time-comparison argument with w=1 gives the ratio of Ψ at x,y up to \(C e^{-\kappa s}\). Therefore every coordinate oscillation of \(\log[(U_sw)/\Psi]\) is at most this error. Telescoping over N_T coordinates bounds the full oscillation by \(C N_T e^{-\kappa s}\). The positive function \((U_s w)/\Psi\) has mean \(a_w\) under \(\mu_2=\Psi^2\nu\), by self-adjointness and \(U_s\Psi=\Psi\). Thus once the log oscillation is bounded by one, it is at most \(e a_w\) everywhere. This proves the norm estimate; the two wall normalizations are \(a_1=a\) and \(a_{\Psi^{-1}}=1\).

By positivity \(|U_s(F-a_F)|\le2\|F\|_\infty U_s1\) and \(|U_s(R/\Psi)|\le\|R\|_\infty U_s(\Psi^{-1})\). Hence both signed walls inherit the respective smoothed norm bounds. No local sign or pointwise upper bound on the *bare* inverse wall is used.

## Apply the physical spectral cut in the middle time

Use \(s=K\log(2+N_T)=O(\log T)\), so \(T-2s\to\infty\). Orthogonally split \(I=P_0+P_b+P_{\rm high}\) in the gauge-invariant space. The [uniform electric band cut](2026-11-25-volume-uniform-electric-plaquette-band.md) gives excitation energy ≥25/4 on the high part and ≥5.94 on all excited states. The vacuum term of the numerator is exactly zero by the definition of \(a_F\). Move s units of positive semigroup time to both endpoints and apply the spectral bound to the middle \(T-2s\). The high part of the numerator is at most \(C a e^{-(25/4)(T-2s)}\), hence after division by a is \(O(e^{-(6+\delta)T})\) for every fixed \(\delta<1/4\). Similarly the full centered numerator divided by a is bounded by \(Ce^{-5.94(T-2s)}\).

For the scalar denominator of the previous reduction, the ground term is a and its excited part is \(O(a e^{-5.94(T-2s)})\), by smoothing on the same two positive walls. Thus replacing that denominator by a, *in the centered expression*, costs \(O(e^{-2\cdot5.94(T-2s)})\). Take \(c<6\) with \(2c>6+\delta\) in the previous reduction to handle its nonlinear error. Finally, the real spatial cutoff bound for the original quotient, at distance vT, controls the growing-box replacement with exponential error at rate above \(6+\delta\) by choosing v large. This proves the assertion. In contrast, applying a spectral-gap bound directly to the bare walls would leave their uncontrolled volume factors.

## What this says about the sign

At fixed finite volume the already verified factorization-preserving Gram coordinates \(U\) are analytic. The normalization used above gives left boundary vector \(\nu[R\,U(\cdot)/\Psi]\) and right vector \(a^{-1}\nu[(F-a_F)U(\cdot)]\). At zero coupling the right vector is \(d_p/2\); the leading left vector is \(-\gamma(d_p+d_q)/448\) from the exact \(1/7-1/6\) cancellation. Their formal lowest bulk momentum amplitude is therefore \(-\gamma/1344\), using the leading orientation projector with entries 1/3. The negative first coefficient is checked, but it does not bound the true volume dependence of the boundary profiles. In particular removal of the high spectrum does not permit replacing these profiles by the dressed ones or asserting their spatial summability. A sufficient next result would be local, summable bounds for these two boundary vectors in the true band and uniform control of the Fourier amplitude near its bottom. The arbitrarily late sign and continuum mass gap remain open.
