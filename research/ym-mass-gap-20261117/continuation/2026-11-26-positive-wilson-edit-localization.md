# Positive two-edit response and localization in the pinned Wilson blocking

**2026-11-26 UTC. Fixed coarse level. Exact identities plus a conditional comparison theorem. Not a continuum result or a trace-insertion estimate.**

The [flag-density floor](2026-11-26-blocked-wilson-flag-density-floor.md) makes sparse flags a poor starting point. The calculation below uses the positive kernel directly, with no flag-count assumption. It separates short-range dependence of auxiliary tags from possible long-range dependence of the fine-field posterior and localizes the latter's test functions under an explicit hypothesis.

## Exact decomposition

Use [the pinned StepData density and push](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/RG/Block.lean#L30-L76). With the fine field U fixed, summing the bond tags separately gives edge factors
`K_e(v;i,j)=sum_b predictorMass(b|i,j,U) noise(v|prediction(i,j,b,U))`.
The remaining site-tag law at coarse output V is proportional to the product of site frame masses and these edge factors. Its support is the product of the positive frame-mass supports; all edge factors are positive since the predictor masses sum to one. Coarse tori of side at least 3 suffice below.

Let V^e, V^f, V^{ef} denote two specified distinct bond replacements, and let r_e be the ratio of the edited edge factor to the original factor; likewise r_f. Put d=|β penalty| osc(price), b=exp(d), a=1/b, Δ=b−a. For every U and tag pair the factor K_e is between the minimum and maximum of the normalized noise density, so a≤r_e≤b. The joint posterior P_V of fine field and site tags is the exact positive law obtained by weighting the unmarked input by the site and edge factors. Write w for the resulting coarse density. Then
`w(V^{ef})w(V)/(w(V^e)w(V^f))−1 = Cov_{P_V}(r_e,r_f)/(E_{P_V}r_e E_{P_V}r_f)`.
This follows by multiplying the original weight by r_e, r_f, or their product without altering any other factors. Factor normalizers cancel, and the denominator is at least a², independent of volume. The numerator is exactly
`E[Cov(r_e,r_f | U,V) | V] + Cov_{P_V(U)}(M_e,M_f)`, where `M_e=E[r_e | U,V]`.

## Conditional comparison and reduction to local posterior observables

For a single edge let η_e be the largest absolute log cross ratio of K_e over its two endpoint tags, at the given U,V. Then η_e≤2d. The influence across that edge is at most tanh(η_e/4): changing the neighbor reweights the one-site law by a factor whose maximum/minimum is at most exp(η_e). For a positive likelihood ratio with range ratio L, its normalized reweighting changes total variation by at most (sqrt(L)−1)/(sqrt(L)+1); maximize the expected positive part about its mean by concentrating at the two range endpoints, then optimize the mean. One-site frame factors cancel in this ratio. Thus a uniform influence row sum q≤8 tanh(d/2) is sufficient, and the actual cross ratios may yield a smaller row-sum bound. Require q<1, uniformly in U,V over the scope claimed.

Use the single-site [Dobrushin comparison theorem](https://arxiv.org/abs/1308.4117), or its Neumann-series coupling bound: a discrepancy confined to sites J contributes at most q^L/(1−q) at a site at graph distance ≥L from J. Each matrix power of order less than L vanishes between these sites and the discrepancy, and each remaining row sum is ≤q^n. An observable on two endpoints with range Δ has coordinate oscillations at most Δ each. If the endpoint sets of e and f have distance L, replacing the f factor changes the site kernels only at endpoints of f. Reweight by r_f and multiply the change in expectation of r_e by E[r_f|U,V]. Therefore
`|Cov(r_e,r_f | U,V)| ≤ 2 b Δ q^L/(1−q)`.

More importantly, M_e is uniformly approximable by an actually local function of U. Take the ball of radius R around the endpoints of e. Compute M_e^(R) by summing inside tags, retaining all incident factors and fixing exterior tags at arbitrary tag values chosen independently of U. No exterior frame factors are used in this restricted law, so a synthetic fixed boundary need not belong to the support of the actual exterior tags. Comparison to each supported exterior conditioning has discrepancies only in the inner boundary, at distance at least R. Averaging yields
`|M_e−M_e^(R)| ≤ ε_R = 2 Δ q^R/(1−q)`.
The approximant only reads fine links in the frame and connector stencils of sites and bonds incident to the ball, plus the corresponding coarse V and replacement. In particular, fixing all of V does not turn the approximant into a globally supported function of U. As each exact and approximate mean is in [a,b], replacing both means in the fine-field posterior covariance costs at most `2 Δ ε_R`, by centering the second factor in each of the two covariance differences.

This leaves a precise local test: bound covariance of the two truncated tag responses in the actual fine-field posterior conditional on V (e.g. if one can do so on balls of radius floor(L/3), while accounting for the enlarged fine stencils). The result would control the positive coarse two-edit response without signed-cover denominators, even with extensive flags. The fine-field posterior itself does not satisfy the tag comparison merely because the tags do. Also the sufficient q<1 condition has not been established along the required Wilson trajectory. The effective one-link K factors depend on U and V and must be estimated there; choosing a favorable parameter in a toy model does not verify this.

## Controls and boundary of the result

A shared fair bit and positive edit ratios r_e=r_f=1+bit yield conditional covariance zero at every separation given the bit, but full cross ratio (1+4)/2 divided by (3/2)^2 = 10/9. Thus perfect conditional tag mixing does not imply coarse mixing. An exact integer check of 64 positive binary chain fixtures, three truncation radii and all four boundary pairs (768 cases) passed the stated localization bound with row-sum 2/3; these check the algebraic bound, not Wilson parameters or dynamics.

A coarse output edit is not the matched physical trace tilt. If A,B are the actual fine trace representatives, differentiating the log pushed weight tilted by exp(sA+tB) gives Cov(A,B|V) at zero, by finite-volume differentiation. Identifying that covariance with the edit test would require an additional matching theorem, not provided here. The present result reduces one positive-kernel test to a concrete posterior estimate; it proves neither continuum trace decay nor a Hamiltonian mass gap. No novelty or independent referee verification is claimed.
