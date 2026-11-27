# Binary spin labels sharpen the uniform quadratic bound

2026-11-27 · Finite open cubic SU(2) boxes at fixed spatial spacing. This sharpens [the earlier uniform estimate](UNIFORM-QUADRATIC-BAND.md) for the canonical vacuum-subtracted second-order operator. It is not a bound at nonzero coupling or in the continuum.

Let $P$ be the physical free energy-15 band, $R$ the reduced resolvent $Q(15-H_0)^{-1}Q$, $V$ the sum of normalized fundamental plaquette traces, and $L$ the number of faces. Set $B=PVRVP+(L/24)P$. Then
$$
\|B\|\le 695/12.
$$

## The full band has only binary edge labels

The twice-energy contributions of occupied links are $3,8,15,24,\ldots$ for spins $1/2,1,3/2,2,\ldots$. The cost-30 partitions in these four spins, expressed as multiplicities, are exactly $(10,0,0,0)$, $(2,3,0,0)$, $(5,0,1,0)$, $(0,0,2,0)$, $(2,0,0,1)$. At each gauge-invariant vertex the number of incident half-integer labels is even, by the center action. Thus their occupied subgraph has all degrees even. On a simple bipartite cubic box two such edges cannot occur; six such edges must form one six-cycle, since each cycle has length at least four. In the six-edge partition with a single spin $3/2$, no integer-spin edges are occupied. At the endpoints of that edge the two spins are inequivalent and have no singlet. Thus only ten spin-$1/2$ edges survive. This argument allows all intertwiner multiplicities of that binary label.

## Block estimates

As proved in the [disconnected-pair calculation](UNIFORM-QUADRATIC-BAND.md), the two orderings of disjoint insertions cancel. Repeated faces disjoint from the input support cancel against their $1/24$ vacuum correction. For two different adjacent faces $p,r$, the overlap is exactly one edge and only the six other edges change center parity. Binary input and output therefore leave at most one possible output label, obtained by toggling those six edges. To conserve the number of occupied edges, exactly three of the six must be occupied in the input.

If a first face has $k$ occupied input edges then on an occupied edge the fundamental insertion can produce spin 0 or 1, and on the others spin $1/2$. The intermediate energy shift is $6-3k+4x$, $0\le x\le k$, where $x$ occupied edges produce spin 1. Excluding a zero shift by $R$ yields minimal nonzero absolute shifts $(6,3,4,1,2)$ for $k=0,\ldots,4$. The norm of insertion on the input label block is at most $1/2$ for $k<4$: condition on the other links and integrate the squared half trace on an unoccupied Haar edge, on which the input is constant. At $k=4$ use the sup norm 1.

Let $\alpha,\beta$ be the counts of occupied exclusive edges of $p,r$ in the input, and $s$ the occupancy of their shared edge. Then $\alpha+\beta=3$. After both insertions the output occupancy of $r$ is $(3-\beta)+s=\alpha+s$, equal to the initial occupancy of $p$. Thus the norm of the ordered term with $p$ first is bounded by the product of the input and output insertion norms and the reduced resolvent bound, giving $(1/24,1/12,1/16,1/4,1/2)$ indexed by $k=\alpha+s$. Use the analogous bound for the other order. When $s=0$ the two $k$ values sum to 3, and their worst combined bound is $7/24$; when $s=1$ their sum is 5, and the worst is $7/12$.

Charge each eligible unordered adjacent pair to its three occupied exclusive edges. An occupied edge can belong to at most four faces, each with at most nine neighbours sharing a different edge. Thus there are at most $10\cdot4\cdot9/3=120$ pairs. At most $10\binom42=60$ have an occupied shared edge. A repeated face with $k>0$ stays within the input label, and its norm including the vacuum addition, per occupied incidence, is at most $13/96$: maximize $(b_k+1/24)/k$ over $k=1,\ldots,4$, with $b_k$ the ordered-term list above. There are at most 40 occupied face incidences. Consequently each input column's sum of block norms is at most $60(7/24)+60(7/12)+40(13/96)=695/12$. Hermiticity gives the same row bound, and scalar Schur on those block norms bounds the full operator. No intertwiner counting enters the estimate.

## Sharper probe-weight floor

In a fully padded box, use the normalized six-loop vector in the zero-slope kernel. The [cubic locality calculation](CUBIC-LOCALITY.md) gives mean quadratic coefficient $-13/336$. The zero-slope compression of $B$ has the same norm bound. Put $d=13/672$. If $w$ is the vector's spectral weight for quadratic coefficients $\le -d$, its mean is at least $-(695/12)w-d(1-w)$. Hence
$$
w\ge \frac{d}{695/12-d}=\frac{13}{38907}>0.000334.
$$
This is more than twenty times the earlier certified lower bound from [the second-moment calculation](AGGREGATED-WEIGHT.md). It is an aggregate perturbative weight, not a guarantee for an individual mode or a nonzero-coupling interval. Exact integer and rational checks reproduce the partition list, the five resolvent denominators, both ordered-pair bounds, the repeated-face maximum, and the final constants.
