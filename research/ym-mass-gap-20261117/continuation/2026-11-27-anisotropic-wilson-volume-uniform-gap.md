# A volume-uniform SU(2) transfer gap in an explicit anisotropic window

**2026-11-27 UTC. Fixed spatial regulator, arbitrary finite spatial torus with sides at least six.** This is an application of [block comparison](https://arxiv.org/abs/1308.4117) to the [Wilson transfer operator](2026-11-27-wilson-transfer-plaquette-gap-hessian.md). It does not require summing the [plaquette-band series](2026-11-27-wilson-band-factorial-bound.md), nor does it assert band isolation or the isotropic continuum gap.

Fix a temporal coupling t>0. Let r=I₂(t)/I₁(t), m=ceil(log(16)/(−log r)), n=32m, and κ=log(2)/n. For real static spatial plaquette couplings with v*=sup_p|v_p|≤1/(72n), the physical transfer T normalized by its vacuum eigenvalue has all nonvacuum spectrum in [0,exp(−κ)]. The constants are independent of spatial volume.

## A one-link mixing time of order t

For the normalized one-link convolution kernel k_t, the spin j/2 eigenvalue is I_(j+1)(t)/I₁(t), with representation dimension j+1. The [Bessel Turán inequality](https://arxiv.org/abs/1009.4814) makes the ratios I_(j+1)/I_j decreasing, so that eigenvalue is bounded above by r^j. Peter–Weyl and the character bound |χ_(j/2)|≤j+1 give an absolutely convergent pointwise bound

    ||k_t^{*m}−1||∞ ≤ Σ_(j≥1) (j+1)²(r^m)^j
                     ≤ (1+1/16)/(1−1/16)³−1 = 977/3375 < 1/2.

Thus the one-link bridge argument can use m=O(t) at large t, by the [fixed-order Bessel asymptotic](https://dlmf.nist.gov/10.40) r=1−3/(2t)+O(t⁻²). This also improves the sufficient mixing power used in the earlier Gevrey proof, replacing O(t log(t+2)) by O(t) in that proof's large-t upper bound on C(t).

## Uniform small spatial interaction by temporal block comparison

Use the auxiliary periodic path distribution given by the trace of the ambient link-space transfer T=e^{V/2}Ke^{V/2}. Its interactions are the unprojected one-link k_t along time and V=Σ_p v_p W_p on each slice. Do not identify this finite-period ambient trace with the physical gauge-projected trace. Take time period greater than 2n. Update every block of n consecutive times on one spatial link at rate 1/n, so each site updates at total rate one. Conditional on the exterior, the chain segment has the bare one-link nearest-time transitions and site fields of absolute size at most 4v*, since each link belongs to four spatial plaquettes.

With the right endpoint fixed, an m-step checkpoint transition out of x has density proportional to A(x,z)h(z), where h is the fixed remaining future weight, including the right endpoint factors. The m-step kernel A lies between e^(−4mv*) k_t^{*m} and e^(4mv*) k_t^{*m}, counting at most m field factors and including the target field at most once. Consequently each checkpoint law dominates the probability with density proportional to h by a common mass α≥e^(−8mv*)/3≥3/10. This domination is independent of h, which need not be bounded uniformly over the length of the remainder. For two left endpoint values, couple the checkpoints by the common part, use their conditional bridge law on each part, and use identical future paths once the checkpoint matches. The disagreement probability of an interior site at distance d from the left endpoint is at most (1−α)^floor(d/m); the right-end influence is the reversed statement.

One changed spatial neighbor at one time perturbs the block log weight by a term of oscillation at most 4v* (two distinct links share at most one elementary face). Interpolating the log weight, the derivative of an event probability is a covariance bounded by the oscillation divided by four: condition the perturbation on the event and its complement and use p(1−p)≤1/4. The resulting whole-block total variation distance is at most v*, which bounds every coordinate's mismatch under one maximal coupling. For multiple exterior differences, glue the individual couplings along a sequence of single changes, bounding each output disagreement by the sum.

Average the update influences over the n intervals containing a given site. The endpoint part of the row sum is at most 2m/(α n)≤5/24. The spatial part is at most 12 n v*≤1/6. This uses at most 12 same-slice neighbors per block time. Each influence spans at most n graph steps (temporal nearest neighbors plus same-slice plaquette adjacency of links). Weighting by exp(κ distance) gives a row sum at most 2(5/24+1/6)=3/4.

For a bounded local real G, tilt the path distribution by exp(sG). Compare it with the untilted distribution using the same update clocks and couplings. A same-exterior tilted block update adds at most |s| osc(G)/4 to each mismatch probability, and only for blocks intersecting supp G. If h is the vector of marginal mismatch probabilities, coupled time evolution gives h'≤−h+Ch+b, where C is the influence above and b is supported within graph distance n of supp G. Start each marginal in its own Gibbs law. In the norm weighted by exp(κ dist(i,supp G)), the positive evolution from any initial mismatch dies; the accumulated source is bounded by the geometric sum with ratio at most 3/4. Thus for any bounded F whose coordinate oscillations are δ_i(F), differentiating the expectation difference at s=0 gives

    |Cov(F,G)| ≤ 2 osc(G) Σ_i δ_i(F) exp(−κ dist(i,supp G)).

The argument is at finite space and time volume; the displayed bound is uniform in both. Bounded continuous observables suffice for the transfer application.

## From the ambient trace to the physical spectrum

At any fixed finite spatial volume the ambient transfer has smooth positive kernel, is compact and positive as a self-adjoint operator, and has a unique strictly positive vacuum Ω. The compact positive-kernel eigenvalue argument uses strict positivity for simplicity; gauge invariance of Ω follows from uniqueness and symmetry. The transfer is trace class: the finite product convolution has summable representation-dimension-weighted eigenvalues (also by the bound r^j), and multiplication by the spatial weights is bounded. For a real same-slice observable F, take the periodic trace length to infinity at fixed lag τ. It converges to the centered autocorrelation ⟨ξ,(T/λ₀)^τ ξ⟩ of the vector ξ=(F−∫F Ω² dHaar)Ω. The time-coordinate distance is at least τ once the circle length exceeds 2τ. The resulting positive spectral moment is bounded by a finite F-dependent constant times exp(−κτ). Any spectral mass at λ>exp(−κ) would violate this at sufficiently large τ. Bounded gauge-invariant F times Ω are dense in the physical vacuum complement after centering, since Ω is strictly positive and bounded continuous functions are dense in the weighted L² space. Thus the claimed physical spectral bound follows, without changing any order of mesh, spatial volume, or vacuum limits. The same reasoning even gives the ambient bound, but that auxiliary spectrum is not a claim about gauge-charged physical states.

At large t the demonstrated spatial window and dimensionless gap lower bound are both at least of order 1/t, at fixed regulator. In particular the condition is a small bound on t v*, not a condition met by v=t. The ordered matched isotropic continuum problem is unchanged. No priority, Lean replay, or Clay-solution claim.
