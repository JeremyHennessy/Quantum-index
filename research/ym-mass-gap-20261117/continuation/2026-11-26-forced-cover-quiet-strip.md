# Two ways the Wilson forced cover crosses a quiet strip

**2026-11-26 UTC. A deterministic absolute estimate for bounded flag count, not a relative Wilson or trace-decay estimate.**

At one fixed coarse configuration let the nonempty flag set be the disjoint union A∪B and let R>0 be their minimum torus sup-distance. Use the [pinned exact-cover gas, eligibility, and site-wise budget](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/RG/Activities.lean#L38-L117). Let G be the full vacuum gas. Form G_A and G_B by covering only the respective flag set with addresses whose inventories lie on that side, **keeping the original configuration and eligibility tests**, not recomputing flags or weights in either region. Within each separate sum enforce the usual disjoint supports.

Write q_i for the native connected cover number of support i at radius B_0, alpha for the support exponent, and κ for the common per-site bound on the sum of absolute address weights multiplied by exp(alpha q_i) over supports containing the site. Set L=2B_0+1. As in the [local edit bound](2026-11-26-wilson-cover-local-edit-stability.md), any two support points are at distance at most Lq_i. These estimates are uniform in period and fine cutoff at fixed blocking level.

## Exact decomposition and absolute estimate

Without a mixed-inventory address, any global cover corresponds to one cover from each side with no cross-side support overlaps. Consequently G-G_A G_B is exactly:

1. the sum over full disjoint covers containing an address whose inventory meets both sides, **minus**
2. the product sum over pairs of side covers with at least one cross-side support overlap.

These sets are defined before signs; use a union bound after absolute values. For an address in (1), q_i≥R/L. For overlapping addresses i,j in (2), take one flag from each inventory and a point in the common support. The triangle inequality gives q_i+q_j≥R/L. The two effects have the same exponential penalty; suppressing only mixed inventories misses the second.

For the counting bound, assign each chosen address to its least inventoried flag in a fixed ordering. Within a covering family these chosen anchors are distinct because inventories are nonempty and disjoint (also across a pair of separate side covers). Dropping all remaining constraints and independently summing one optional address per flag costs at most (1+κ) per unassigned flag. Choose a marked mixed-inventory address by its assigned anchor, or mark one conflicting pair by its two assigned anchors. Each constraining address is charged to a flag in its support, so its sum of weighted absolute values is at most κ. With n=|A|+|B| this yields
\[
 |G-G_A G_B|
 \le e^{-\alpha R/L}\big[n\kappa(1+\kappa)^{n-1}
 +|A|\,|B|\kappa^2(1+\kappa)^{n-2}\big].
\]
The first term's n can be reduced by choosing the ordering to put A first; mixed addresses then have their assigned anchor in A. When there are exactly two flags there are no remaining addresses after a mixed address or two incompatible single-inventory addresses. The corresponding bound is exactly the simpler (κ+κ²)exp(-alpha R/L). This proof does not rely on positivity of the activities.

Exact enumeration in 256 signed two-flag fixtures checked the subtraction: when the separate sides have weights (a,b) and (c), the first choice a overlaps c, and the mixed address is d, the difference is d-ac. Omitting the overlap term already fails with d=0. This is an arithmetic check of the identity, not a sample of Wilson configurations.

## When it is safe to normalize, and when it is not

If the **same** configuration admits an all-clear repair on j bonds, the preceding local edit comparison yields G≥exp[-(C_m+d)j], since the repaired gas is exactly 1. Dividing the absolute estimate by G is then justified, with that extra factor. This is not a generic availability statement about such repairs; see the [boundary obstruction](2026-11-26-wilson-local-flag-repair.md). For example, an explicit sufficient geometry is that all nonflat links already belong to a prescribed set of j bonds: resetting those to identity gives the all-clear comparison. Other cases remain unresolved.

Nor can one divide merely because G is positive. An eligible two-flag algebra fixture with disjoint singletons of weights eps², eps² and a mixed address of weight eps has G=eps+eps⁴, whereas G_A G_B=eps⁴. The absolute bridge mass tends to zero but its relative share tends to one. The weights may respect a fixed positive budget even for a long mixed support by choosing eps exponentially small in its cover cost. This is an exact positive-weight obstruction to that inference from the address format and budgets alone, not a counterexample for the actual blocked Wilson law.

The first unresolved step is a local denominator or inverse-denominator estimate on typical Wilson configurations, with large flag counts and cross-buffer incompatibilities still accounted for. This argument does not bound the actual normalized marked trace or its two-insertion conditional covariance.
