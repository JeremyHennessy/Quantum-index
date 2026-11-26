# Sparse flags are exponentially rare under the actual noisy Wilson blocking

**2026-11-26 UTC. Fixed coarse level, uniform in finer cutoffs and exterior. This is a counting obstruction, not a correlation-decay theorem.**

The [quiet-strip absolute estimate](2026-11-26-forced-cover-quiet-strip.md) is mathematically valid at bounded flag count. Can that hypothesis cover typical large configurations in the *actual* representation? No. The last noisy step creates a positive floor for flag density at every fixed coarse level, even if the predictors before their noise are perfectly correlated.

## A lower stochastic bound from the exact kernel

Use the same fixed level m, fine cutoffs N>m, and [positive output-density comparison](2026-11-26-blocked-trace-finite-energy.md). The latter follows from the actual [tag mixture of product noise](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/RG/Block.lean#L43-L71). Given all other coarse links, the law of any one coarse link has density at least exp(-d_m) against its own probability Haar, with d_m independent of N and period. This remains true with a fixed exterior imposed on any block containing the link. It does not require independent coarse links.

Choose M distinct coarse plaquettes, with distinct base sites, and for each choose a distinguished bond not contained in any other selected plaquette. Pairwise edge-disjoint plaquettes suffice. Let X_i be the indicator that plaquette i has chord above the pinned threshold t_m≤1. With its other three links held fixed, probability Haar on the distinguished link makes the plaquette holonomy Haar by multiplication and inversion. The [SU(2) Haar cap calculation](2026-11-26-wilson-local-flag-repair.md) gives Haar probability at least p0=2/3+sqrt(3)/(4 pi) of exceeding threshold. Thus the conditional probability of X_i=1, even given all other links, is at least
\[
 p_m=e^{-d_m}p_0>0 .
\]
All earlier indicators are measurable in those other links. The tower property gives the same lower bound conditional on the earlier indicators and any fixed exterior not containing the distinguished links. A sequential uniform coupling (or repeated conditional moment generating functions) thus makes the sum S of selected indicators stochastically dominate Binomial(M,p_m), including conditional on that exterior. Each open plaquette contributes its own base site to the [actual flag set](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/RG/Masks.lean#L26-L37); no double-counting of these sites occurs.

For every 0≤θ<p_m, the lower-tail Chernoff bound therefore gives
\[
 \Pr(\text{at most }\theta M\text{ flagged sites among these anchors}\mid\text{exterior})
 \le\Pr(S\le\theta M\mid\text{exterior})
 \le e^{-M D(\theta\Vert p_m)} ,
\]
where D is binary relative entropy and the displayed bound at θ=0 is (1-p_m)^M. Direct proof: take s>0, use E[e^{-sX_i}|past,exterior]≤1-p_m+p_m e^{-s}, iterate and optimize s. A fixed finite flag count bound is the θ tending to zero case, or one can simply take θ=p_m/2 for large enough M.

## Large strips and periods

In a coordinate rectangle, select plaquettes in two directions where the side counts are at least two; tile those directions by disjoint pairs of adjacent sites, and take every site in the other two directions. They have pairwise distinct bonds and anchors, and their number is the product of the two half-length floors and the other two lengths. Thus M is proportional to volume for large rectangular strips containing at least two such axes. The same choice inside a fundamental box works uniformly for growing tori without using wraparound. At any fixed coarse level the event of an entirely unflagged large strip, or of bounded total flags on the whole torus, therefore has an exponentially small upper bound. The constants are independent of finer cutoff, so the estimate cannot be undone by first refining it at fixed period. This complements the positive-probability result for a **fixed finite** quiet core; it does not contradict it.

This lower bound on flag *count* does not imply connectivity, and the floor p_m need not be large enough for a percolation argument. It does not identify flags with large forced contributions. It also is not uniform as the coarse level itself moves. The practical consequence is that there is no basis for extending bounded-total-flag results by treating the remaining configurations as exceptional. The next viable normalization argument must tolerate extensive flags, for example by controlling weighted cross-strip addresses relative to the exterior cover, or by estimating the two-insertion residual without requiring a globally quiet strip. No trace-sector or full mass gap follows.
