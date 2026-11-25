# Gauge-filtered smoothing of the reciprocal and free terminal walls

**2026-11-25 | Fixed spatial lattice | Research only**

This verifies a faster, gauge-sensitive version of the positive-wall smoothing in the [band-only reduction](2026-11-25-free-boundary-band-only-reduction.md). It yields approximations of the two exact boundary vectors by ordinary ground-state pairings. It does not yet identify their bulk amplitudes or the eventual sign.

Use a real positive normalized vacuum \(\Psi\), Haar \(\nu\), \(U_s=e^{s(H-\lambda_0)}\), and \(w\in\{1,\Psi^{-1}\}\); put \(a_w=\nu(\Psi w)\). For each \(0<c<6\), at sufficiently small real \(\gamma\) depending on c, the tilted quotient \(A_s^{w}(B)=e^{sH}(wB)/e^{sH}w\) for a bounded local invariant B obeys
\[
 \|A_s^w(B)-\nu(\Psi wB)/a_w\|_\infty\le C_{B,c}e^{-cs},
 \qquad
 \delta_i\log [(U_s w)/\Psi]\le C_c e^{-cs}.
\]
The constants are uniform in all finite open boxes and \(s\ge1\). Here \(\delta_i\) is the oscillation under change of a single initial link. In particular the inverse-vacuum tilt puts the Haar mean of B in the first formula, not its vacuum-squared mean.

## 1. Resolve the vacuum normalization into terminal potentials

In the [local complex vacuum ratio construction](2026-11-25-complex-local-vacuum-ratios.md), use the full connected logarithmic expansion of the strip with fixed initial fields. Its heat and plaquette factors have uniformly bounded size, range, and incidence; choose the long slab length large, then the coupling disc small. For any prescribed finite b>0 the connected series is absolutely summable even after multiplying each factor occurrence by \(e^{C b}\), with C a fixed geometry constant. For an explicit criterion, expand over connected factor subsets (polymers); its activity in absolute value is at most the product of their factor sup norms. The usual rooted bound from [Kotecký–Preiss](https://doi.org/10.1007/BF01211762) applies to the inflated activities. A cluster that depends on a given fixed initial link contains one of the bounded number of first-slab factors at that link; its weighted absolute sum is bounded uniformly by rooting there. Both the number and the spatial diameter of its initial support S are bounded by C times its total number of factor occurrences, since the factor support in space is connected. Subtract each such cluster's value at \(\gamma=0\). The sum of the subtraction is independent of initial field at the physical factor values, because the free path partition function is one. Cauchy in the fixed coupling disc bounds this subtraction on a smaller disc by \(C_b|\gamma|\) in the same rooted weighted norm.

Assign each term to its finite initial support S, retaining the full declared support even when a function happens to depend on fewer links. Each cluster weight is invariant under vertex gauge rotation on those initial links: each subset expectation is invariant by rotating all endpoints, free variables and conditional bridges simultaneously, and the log coefficients are sums of products of these expectations. In the long-time limit at fixed spatial box, each finite cluster coefficient stabilizes as extra remote slabs are appended, and rooted weighted absolute summability controls the tail. The finite-box ratio \(e^{tH}1(y)/e^{tH}1(x)\) identifies the resulting differences with the true positive vacuum. Thus, up to an additive constant,
\[
 \log\Psi=\sum_{S\ne\varnothing}\phi_S,\qquad
 \sup_e\sum_{S\ni e}\|\phi_S\|_\infty
            e^{b(|S|+\operatorname{diam} S)}
 \le C_b|\gamma|.
\]
The norm concerns differences from a constant, not the normalization of the full global vacuum. The same expansion controls spatial boundary dependence: for a cluster to change when remote plaquettes are deleted, its support in the space-time factor graph must reach the deletion, and the surplus inflated factor weight bounds that rooted tail exponentially in distance.

## 2. Include many terminal factors without assuming bounded overlap degree

In a second strip use the weighted time variable t of the [gauge-filtered decay proof](2026-11-25-gauge-filtered-complex-time-decay.md). Place the factors \(1+u_S=e^{-\phi_S}\) in the final layer, with no temporal t weight. They can have unbounded support and unbounded overlap degree. The right hypothesis is the following per-variable bound for a product-factor expansion (use all ordinary strip factors, terminal factors and a fixed sufficiently small local source if present):
\[
 \sup_i \sum_{f\ni i}\|u_f\|_\infty e^{A|S_f|} \le \epsilon ,
\]
where \(S_f\) is the set of product variables used by f and \(A\) is a fixed constant chosen sufficiently large. To check it yields a KP bound, give each factor the activity \(d_f=\|u_f\|_\infty e^{|S_f|}\). Bound connected subsets rooted at f by rooted trees labeled by factors, allowing the same label in different branches when this overcounts. At a given parent the children have distinct labels for each genuine subset tree. Summing over all finite child subsets contributes at most the exponential of the neighboring rooted-tree weights. Iterating this majorant gives total tree weight at most \(d_f e^{|S_f|}\) when \(\sup_i\sum_{g\ni i}d_g e^{|S_g|}\le1\). Each genuine connected subset has a spanning tree of that type, so summing polymer weights times \(e^{|{\rm support}(P)|}\) over those touching a given coordinate i is bounded by \(\sum_{f\ni i}d_f e^{|S_f|}\). Summing over the coordinates of a fixed polymer gives the KP incompatibility bound with \(a(P)=|{\rm support}(P)|\). Keep strict smallness; optional extra diameter weights for spatial comparison fit by using a larger b in the potential construction. This argument does not bound the number of overlapping terminal factors.

Choose the time slab Δ and t disc of radius \(e^{c\Delta/4}\) as in the gauge-filtered proof (using a slightly larger rate than c if necessary). Then shrink γ further so the ordinary and terminal activities obey the displayed criterion. In each contributing monomial comparing different initial fields, its connected support must reach from the first to the last slab. A monomial in a local log ratio comparing two durations or comparing the tilted and untilted walls must do the same, up to the fixed collar at the terminal end. The invariant terminal factors, and the invariant terminal B if present, preserve the forest rule in every pure intermediate slab, including each replicated subset term of the logarithm. Consequently each traversed slab costs at least four t degrees. The rooted logarithmic expansion remains bounded on the t disc; Cauchy at t=1 gives \(C e^{-cs}\). Extra spatial weight bounds changes at a remote spatial cut independent of s, and also accounts for the dependence of \(\phi_S\) on the box proved in step 1. For bounded s enlarge constants using the positive bounded quotient and local ratio estimates. The positive semigroup weighted-average property identifies the constant in the first assertion by its fixed-box limit. The local initial ratio for the inverse wall differs from the free one by the same tubular estimate. Time comparison for the free wall against its vacuum limit is justified exactly as in the [scalar boundary proof](2026-11-25-scalar-boundary-normalization.md). This proves the two estimates.

## 3. Controlled ordinary vacuum pairings for the actual band vectors

Let U be the real isometry from the factorized Gram frame and \(K=\lambda_0-H\). Write \(\ell=U^*(R/\Psi)\) and \(r=a^{-1}U^*(F-a_F)\), with \(a=\nu(\Psi)\), \(a_F=\nu(\Psi F)/a\). These are the true boundary coordinate vectors. Use \(u_s^{w}=(U_s w)/(a_w\Psi)\), of mean one under \(\Psi^2\nu\). By telescoping at most N links, \(\|u_s^w-1\|_\infty\le C N e^{-cs}\) once the latter is sufficiently small. Then
\[
 \ell= U^* e^{sK}P_b[\Psi A_s^{\Psi^{-1}}(R)]
         +O_{\ell^2}(N e^{-(2c-6.06)s}),
\]
\[
 r= U^* e^{sK}P_b[\Psi (A_s^{1}(F)-a_F)]
         +O_{\ell^2}(N e^{-(2c-6.06)s}).
\]
Indeed the exact formula inserts \(u_s^w\) next to each displayed test inside brackets: positive evolution of a signed wall equals the positive wall times its conditional quotient. Replace \(u_s^w\) by 1, use the two \(e^{-cs}\) bounds and the band norm \(\|e^{sK}P_b\|\le e^{6.06s}\). The \(\ell^2\) statement follows from the isometry; it is not a separately multiplied estimate for each coordinate. This step requires \(c>3.03\) to give a gain. Taking \(s\) a sufficiently large multiple of \(\log(2+N)\) suppresses the displayed error to any prescribed inverse power of N.

At \(\gamma=0\) the potentials vanish, the positive walls are identically one, and the inverse-wall bound is exact. A noninvariant terminal potential would not justify the four-link counting; bounded overlap degree is also not available for the actual terminal potentials. The new pairings have ordinary vacuum norm control at fixed s, but the filter and spatial comparison constants must be tracked for \(s\) growing logarithmically. The next target is quantitative comparison of these two pairings in dyadic boxes and summable decay away from the probes, preferably first for the unnormalized Gram columns to avoid unjustified entrywise claims about the inverse Gram matrix. No eventual sign or continuum gap is concluded.
