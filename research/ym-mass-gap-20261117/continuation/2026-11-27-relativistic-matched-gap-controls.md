# Relativistic controls with matched finite measurements and identical non-Gaussian signatures

**2026-11-27 UTC. Counterexample for what finite measurement and a signed triplet can certify.** Extends the [finite-lag spectral counterexample](2026-11-27-boundary-hankel-finite-data-obstruction.md) inside local relativistic models, using [Greenberg's generalized free field construction](https://doi.org/10.1016/0003-4916(61)90032-X). These are scalar controls, not competing Yang–Mills constructions.

## Exact matching under Lorentz invariance and locality

Fix any finite list of two-point measurements of a scalar Euclidean field on ℝ⁴: fixed noncoincident point pairs or fixed compact smooth two-point test pairings. Let v(s) be the real vector of their values in the free field of mass √s, including a first coordinate 1 to constrain total spectral weight. Each coordinate is real analytic on s>0. For smeared pairs this follows from the distributional Fourier kernel 1/(p²+s), holomorphic in Re(s)>0; for noncoincident point pairs it follows from the heat-kernel representation at positive separation. In four dimensions all these chosen coordinates are bounded for 0<s≤1: 1/p² is locally integrable and the heat representation for positive separation is integrable at both ends even at s=0.

For an arbitrary open interval J of strictly positive squared masses let V be the span of {v(s): s∈J}. Then v(s)∈V for every s>0: any real functional annihilating V vanishes on J, and analyticity forces it to vanish on the whole positive axis. Pick basis values v(s₁),…,v(s_d) with sᵢ∈J.

Choose a positive probability measure λ with squared masses tending to zero, for example weights 2⁻ᵏ at s=s_*4⁻ᵏ, k≥1 and 0<s_*≤1. It has no atom at zero. Its vector b=∫v(s)dλ(s) is finite and in V; write b=Σ cᵢv(sᵢ), with Σcᵢ=1. The two spectral measures

    ν_fast = Σ (1/d) δ_sᵢ
    ν_slow = Σ (1/d − ε cᵢ) δ_sᵢ + ε λ

are positive, normalized, and match all specified measurements exactly for any sufficiently small positive ε. For example ε<1/[2d max(1,max|cᵢ|)] keeps every old weight positive. Their generalized free fields have the usual Gaussian Schwinger functions with reflection-positive covariance, and the Lorentzian commutator is the corresponding positive spectral mixture of causal commutators. Both spectral measures are finite with bounded mass support. The fast model has a positive mass threshold. The slow model has no positive lower threshold in the smeared field sector. For example a real test with nonzero Fourier transform near zero overlaps low-energy one-particle states at the arbitrarily small masses and momenta. No atom at zero and no second vacuum are used to produce the difference.

## The signed connected triplet can match everywhere, not just on the list

Tensor each model independently with the same additional massive real free field φ of mass M>0, and observe A = G − :φ²:, where G is the corresponding independent generalized free field. Both observables are local scalar fields. Their finite specified two-point measurements still agree when the measurements of Wick-square covariance are defined (in particular for separated supports or noncoincident points); both receive the same added contribution. Their joint connected correlation functions of order k≥3 agree as distributions wherever defined by the common Wightman construction, and in Euclidean space in particular at pairwise separated points: connected cumulants add for independent fields, and G contributes zero for k≥3.

In particular the separated Euclidean connected triplet is exactly

    κ₃(A(x₁),A(x₂),A(x₃)) = −8 Δ_M(x₁−x₂) Δ_M(x₂−x₃) Δ_M(x₃−x₁),

negative and nonzero because the massive kernel Δ_M is positive away from coincidence. The positive spectral covariance of A adds the two independent spectral contributions, so the low threshold of G cannot be canceled by the massive Wick square. The fast example is gapped and the slow one gapless in the A sector, despite agreement in the entire separated signed triplet and any preassigned finite set of admissible two-point tests. One can also match any finite collection of Gaussian-only higher measurements obtained by Wick products from the specified finite covariance entries; the connected-function comparison above does not require that restriction.

This closes an objection to the simpler finite-time control: Lorentz covariance, locality and reflection positivity, even alongside a nonzero signed higher correlation, do not by themselves rescue a finite-measurement gap inference. It does **not** reproduce the Wilson hierarchy, the Ward-normalized stress tensor, or its logarithmic trace coefficient, and does not rule out a Wilson-specific proof using that additional structure. For the actual project, the infrared estimate must use more than the existence and sign of a higher connected correlation. No Lean replay or novelty assessment made.
