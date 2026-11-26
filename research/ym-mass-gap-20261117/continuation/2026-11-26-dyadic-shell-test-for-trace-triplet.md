# A one-scale-step test for the trace-triplet coefficient

**2026-11-26 UTC. Conditional analytic criterion; no Wilson shell estimate is asserted.**

Let K be a fixed compact separated shape set and write F(r,u)=r¹²G₃(ru), using the unselected continuum Wilson trace with one fixed signed normalization. All Wilson limits are taken at each fixed physical r before varying r. Put L=log(1/r), h=log 2, and A(u)=−9K₃(u)/(2π⁶) in the preceding SU(2) trace convention.

A sufficient quantitative input is the following pair of estimates, uniform on K:
1. F(r,·)→0.
2. L⁵[F(r,·)−F(r/2,·)]→4h A(·).

This is a **one-way** criterion; an r¹²L⁴ asymptotic with an uncontrolled o(1) error does not imply a scaled shell derivative. To prove sufficiency set Δ(r)=F(r)−F(r/2). Exact telescoping and condition 1 give F(r)=Σ_{j≥0} Δ(r/2ʲ), with absolute convergence in sup norm by condition 2. The leading term is 4h A Σ_{j≥0}(L+jh)⁻⁵. Monotone integral comparison gives
`L⁻⁴/(4h) ≤ Σ_{j≥0}(L+jh)⁻⁵ ≤ L⁻⁴/(4h)+L⁻⁵.`
For δ(L)=sup_{0<t≤exp(−L)} ‖log⁵(1/t)Δ(t)−4hA‖, the normalized remainder after summing is at most δ(L)(1/(4h)+1/L). Hence L⁴F→A. If only dyadic radii on one initial orbit are controlled, the conclusion is only on that orbit; full convergence requires estimates uniform in the initial log-scale offset or a separate interpolation bound.

The [identity-channel comparison](2026-11-26-triple-identity-channel-and-centering.md) permits exactly the same two tests with F replaced by r¹² times the scalar extracted from the orbit reader: their difference is O(r^(7/2)), negligible even after taking the shell difference and multiplying by L⁵. They also give the same test in any fixed viewer after local centering. Thus one need not separately derive beta-scale increments for the change of viewer or for the vacuum subtraction. A scale-step estimate is useful only if the actual quantitative Wilson RG gives it; formal tree-level Gaussian cancellation supplies neither condition 1 for the matched field nor condition 2. If condition 1 is absent, summability provides a limit but permits an arbitrary additive constant. There is no connection here to the long-time decay rate.

Verification: telescope exact partial sums first, then use monotone integral comparison; the sign agrees with F(L)−F(L+h)=4h A L⁻⁵+O(L⁻⁶) for the model A L⁻⁴. No Lean execution or new asymptotic claimed.
