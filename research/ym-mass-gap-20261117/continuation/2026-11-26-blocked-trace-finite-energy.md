# Finite-energy comparison for the blocked Wilson stress trace

**2026-11-26 UTC. Pinned-Wilson estimate uniform in fine cutoff at a fixed coarse level and period. No thermodynamic or decay conclusion.**

This follows the [rooted forced-gas reduction](2026-11-26-forced-trace-rooted-gas-ratio.md). Work on the same Wilson history and with the same fixed grade-four trace representative as in the [blocked-score identity](2026-11-26-wilson-trace-blocked-score.md). Fix coarse level m at or above its reference, let N>m, and keep the parameter choices of the history unchanged.

## A period-uniform local finite-energy bound

In [Block.lean](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/RG/Block.lean#L43-L71), the last fine-to-coarse step is a mixture of product densities in the output bonds; mixing probabilities depend on the input, not the output. In a fixed term of this mixture, changing k output bonds at fixed input and tags changes the log weight by at most dk, where we may take
\[
 d=4\,\widehat\beta_{m+1}|\mathrm{penalty}|.
\]
The normalized unitary trace gives a price in [0,2] and the exact [coupling band](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/RG/History.lean#L195-L218) bounds the last-step inverse coupling by twice the hatted value. The mixture is positive, and the normalizers cancel in the termwise comparison. Summing over tags and averaging over the input gives the same two-sided comparison for the unnormalized coarse density w. In particular, a set of k coarse bonds, conditional on its complement, has density against its own product Haar between exp(-dk) and exp(dk), for almost every complement (in fact the displayed positive version is defined everywhere). This conclusion is independent of fine cutoff and period for fixed m and k. It does not state that disjoint sets are independent.

## A fixed-period uniform lower bound for the gas and an upper bound for the anchored score

Write w(V)=exp(X(V))G(V), with X and the signed gas G from [History.lean](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/RG/History.lean#L151-L182). At the all-flat configuration I, G(I)=1 by the [empty-flag theorem](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/RG/Activities.lean#L102-L133). Let L be the total number of positively indexed output bonds in the fixed torus. Comparison with I gives
\[
 G(V)=\frac{w(V)}{w(I)}e^{X(I)-X(V)}
       \ \ge\ \exp[-dL-\operatorname{osc}X].
\]
The possibly cutoff-dependent additive vacuum constant cancels in the oscillation. The [fixed-stage path/regular bounds](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/RG/Bounded.lean#L59-L101) bound the remaining oscillation uniformly in N at fixed m,p: each clipped plaquette term has bounded chord and fixed coefficients, each active channel has an absolute length/magnitude budget, the coupling stays in a fixed interval, and each site's regular activities have a fixed absolute mass cap. Summing over the finite torus gives a bound at most proportional to its number of sites for fixed m. No global minorization independent of L is obtained.

Here is the cutoff bookkeeping for the marked numerator. At reference r the coefficient is exactly the fixed token v; at fixed m it has size at most |v|_1 times the finite product of stage column constants by the [coefficient recursion and readout](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/Source/Insertion.lean#L79-L104), independent of N and p. The fixed-stage canonical and regular marked parts have their stated support and supremum budgets. For the forced part, take absolute unmarked address bounds b_i and marked bounds q_i. Their totals B and Q are bounded by the sum over the finite torus of unmarked per-site caps and the anchored marked cap, respectively, since the charged supports are nonempty and weighted masses dominate their bare supremum bounds. Ignoring cover constraints gives
\[
 \left|\sum_{\text{admissible covers}}\sum_{i\in\text{cover}}
 F_i\prod_{j\ne i}K_j\right|
 \le Q\prod_j(1+b_j)\le Qe^B .
\]
The positive lower bound on G now controls the forced ratio, whether viewed as the full ratio or as the exactly equal rooted ratio. Together with the fixed coarse factor a_m^{-4}, this is a uniform-in-N bound on the actual anchored conditional score (and bounds its centered L² norm). A finite combination of fixed **embedded coarse anchors** can use the same argument by translation and linearity. A fine packet with arbitrary anchor offsets does not automatically inherit that bound.

This is a fixed-period ultraviolet estimate, not a bound after taking the period to infinity. A local repair would need to preserve the outside factors, or cancel them with a comparison inside the same conditional law. The eligible-address graph includes long supports, source-only addresses and extra eligibility predicates. A change on one bond can affect the eligibility of an address whose support reaches much farther; the k-bond density comparison does not prove bounded repair size or stability of the exterior covering factors. Controlling that reach under the actual blocked law, and separately controlling the two-mark conditional covariance, remain open. Neither a trace-sector nor a full spectral gap is established.
