# A Wilson-loop connector can create a false connected four-flux remainder

**2026-11-26 UTC. Exact gauge-invariant finite counterexample with two active spatial plaquette couplings. No claim about the full isotropic Wilson trajectory or the stress-trace mass gap.**

Following the [Gaussian null control](2026-11-26-gaussian-curl-return-null-control.md), try subtracting the Gaussian part of the squared-flux covariance by transporting two flux vectors to the same gauge frame. The subtraction has an obstruction beyond freely randomized frames: a legitimate, deterministic Wilson connector can make it nonzero even when the local gauge-invariant magnitudes are completely independent. Connector dependence of field-strength two-point functions is known; see [Di Giacomo and Meggiolaro](https://arxiv.org/abs/hep-lat/0203012). The following is an exact two-active-face counterexample for this particular test, not a priority claim.

## Identity and adversarial controls

Write x and y for the imaginary quaternion vectors of two SU(2) holonomies. A fixed path transports y by an SO(3) rotation to the base of x; call the transported vector Y and x=X. Gauge invariance at the common base implies zero means and a cross second moment c times the identity, with c=E[X·Y]/3. The fourth cumulant identity gives

`Cov(|X|²,|Y|²) = 6c² + Σ_ij cum(X_i,X_i,Y_j,Y_j).`

The left side is connector-independent. Independent random rotations of an isotropic Gaussian pair with original cross covariance c_0 I and mean rotation ρ I preserve the left side at 6c_0², but produce remainder 6c_0²(1−ρ²) if one computes the Wick term from the averaged cross covariance. This is not a nonabelian interaction.

## Exact counterexample using a Wilson walk

Choose two elementary faces based at the same vertex, e.g. 12 and 34 planes in dimension four, with disjoint link sets on a torus of side at least three. Use the Wilson action with positive coefficient β on those two faces only and zero on all other faces. Their based holonomies U,V are independent: under product Haar they have independent Haar laws because their link sets are disjoint, and each action weight is a function of only its own holonomy. Each law is tilted by exp(β cos θ), with independent Haar-uniform axis n∈S² and angle θ∈[0,π] of density proportional to sin²θ exp(β cos θ). In particular their imaginary-vector magnitudes are independent, and the left side in the displayed identity is exactly zero.

The identity connector gives c=0. Take instead the actual loop connector with holonomy VU, a concatenation of the two rooted plaquette walks in that order. Transport the imaginary vector of V by Ad(VU); this still preserves its squared length and is gauge-covariant. Write n,m for the two axes, z=n·m, A=2θ_U, B=2θ_V. By the rotation formula, n·R_m(B)R_n(A)m is the sum of terms odd in z and sin A sin B·(1−z²). Since z is uniform on [−1,1], its average at fixed angles is (2/3) sin A sin B. Hence

`E[X·Y] = (8/3) (E_β[sin²θ cosθ])²`, and `c = (8/9) (E_β[sin²θ cosθ])² > 0`.

The strict positivity follows by pairing u=cosθ with −u under the Haar symmetric density: u(1−u²) sinh(βu) is positive on a set of positive mass. Thus the apparent fourth cumulant sum is strictly negative, −6c², though there is exactly zero connected squared-flux signal. This is measurable with a prescribed path: it uses no configuration-dependent selection of the walk and no extra randomness. The walk is closed and allowed at coincident bases; this example does not compare distinct straight paths at separated points.

Quaternion arithmetic checked the angular polynomial on 576 exact axis/angle cases. The six axial nodes integrate the required odd and quadratic moments of z exactly, which independently checks the averaging factor and rotation sign. For small β, E[sin²θ cosθ]=β/8+O(β³) by the SU(2) Haar moments E u²=1/4 and E u⁴=1/8, so the spurious remainder is −β⁴/864+O(β⁶). For large β the local Gaussian angle scaling gives β E[sin²θ cosθ]→3, so this fixed detour's c is of order β^−2. This does not bound paths whose lengths grow with the cutoff.

**Decision.** Reject the connector-based subtraction as a path-independent diagnostic of the matched stress trace. Relative coordinates can create either sign of apparent remainder, yet the local gauge-invariant composite has not changed. Next investigate a connector-free subtraction using local scalar trace insertions and the pinned short-distance Wick expansion (or show why its known leading term cannot serve as an infrared baseline). No physical decay, novelty, or continuum gap is established.
