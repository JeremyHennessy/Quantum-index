# The original free-boundary signal has an infinite-volume limit uniformly at every time

**2026-11-25 | Fixed spatial lattice spacing and continuous time | Research-only; Phase 15 not activated.**

This addresses the original conditional quotient, not the dressed or tilted surrogate. For a finite open spatial box Λ, a specified time-zero link configuration x, and a bounded local function F of final links, define
\[
 A_{\Lambda,T}(x)=\frac{[e^{T(L+\gamma V_\Lambda)}F](x)}
 {[e^{T(L+\gamma V_\Lambda)}1](x)},\qquad V_\Lambda=\sum_{p\subset\Lambda}\tau_p.
\]
The endpoint of the free diffusion is integrated with no terminal weight beyond the Wilson interaction. If |\gamma|≤1/50000, then:

1. For any fixed local F, A_{\Lambda,T} converges as spatial boxes exhaust the lattice. The convergence is uniform over T≥0 and all initial fields x, with a spatial error exponentially small in the distance of F from the cut (measured by link adjacency through plaquettes).
2. For T≥8 the oscillation in the entire initial field is bounded uniformly in Λ by \(C_F 4^{-(\lfloor T/8\rfloor-1)}\). In particular the Haar spin-1 witness \(h_{\infty,\gamma}(T)=\int R(x)A_{\infty,T}(x)\,d{\rm Haar}(x)\) exists and obeys this exponential upper bound in absolute value.
3. The local final expectation itself converges as T→∞ to a number independent of x, uniformly in volume, with the same order of error. The limit need not equal the expectation in the ground-state-squared measure.

This furnishes a fixed-positive-γ, all-T bulk construction. The constants are deliberately conservative. It does not determine the true signed tail, its exponent, or the continuum gap.

## Brownian bridges as an exact bounded-interaction model

Feynman–Kac gives this quotient as the endpoint expectation under independent SU(2) edge diffusions, started at x, tilted by \(\exp[\gamma\int_0^T V_\Lambda(X_t)\,dt]\). If T≥8, choose n=floor(T/8) equal segments, of length \(\ell=T/n\in[8,16)\). Skeleton endpoints for all edges at times iℓ, i=1,…,n, are variables. For each edge and segment use one independent bridge seed with fixed uniform law on [0,1]. Given the two skeleton endpoints, sample that edge bridge by a measurable map of the seed and endpoints. One may use the standard randomization of a Borel probability kernel on the Polish continuous-path space; the strictly positive heat kernel gives a measurable bridge for every pair of endpoints. Thus the reference law is a product of Haar measures on free endpoints and uniform measures on seeds. Include in its density the temporal heat factors \(k_\ell(X_{e,i-1},X_{e,i})\). Time zero is fixed. The independent bridge seed is an auxiliary variable; no continuity of its map in the endpoints is needed.

The remaining factors are exactly one per spatial plaquette per time segment, with logarithm \(\gamma\int_{\rm segment}\tau_p\,dt\) of magnitude ≤16|\gamma|. Each involves at most twelve variables: four start endpoints, four end endpoints and four seeds. Each skeleton endpoint touches at most two heat factors and at most eight plaquette factors (four plaquettes incident to its link and at most two adjacent segments). Each bridge seed touches at most four plaquette factors and no heat factor. If 0<T<8, use just one segment and absorb its unary heat factor for each first endpoint into the single-site reference measure; the same argument bounds spatial dependence because the compared fields coincide near F. The zero-time case is exact. Ignoring bridge seeds as independent coordinates without retaining their coupled potentials would not give this influence count.

For the unit-quaternion metric with L=Δ/2 on one link, the Peter–Weyl heat series has energies n(n+2)/2 and dimension n+1. Thus
\[
 \sup|k_\ell-1|\le\sum_{n\ge1}(n+1)^2e^{-12 n}
 =\frac{1+e^{-12}}{(1-e^{-12})^3}-1,\qquad
 \|\log k_\ell\|_\infty<10^{-4}\quad(\ell\ge8).
\]
Here \(|\chi_n|\le n+1\) is enough; no spectral assumption on the interacting diffusion is being made.

## Single-site comparison, uniformly in the number of slabs

For two different values of another variable j, let u_ij be the sum of the sup norms of log factors containing variables i and j. Changing j changes the log single-site weight of i by at most 2u_ij, hence its normalized density ratio lies between \(e^{-4u_{ij}}\) and \(e^{4u_{ij}}\). Total variation is at most \(e^{4u_{ij}}-1≤8u_{ij}\) when \(u_{ij}≤1/4\), by the convex secant bound for the exponential. Even counting all twelve variables wherever some are fixed, the maximal row sum of the influence matrix C is ≤
\[
 8(2\cdot10^{-4} + 8\cdot11\cdot16|\gamma|)<1/4 .
\]
This is a single-site instance of [Dobrushin comparison, Rebeschini and van Handel](https://arxiv.org/abs/1308.4117). For a comparison of two finite specifications, bound the single-site discrepancy b_i by 1 on changed sites and by zero where their kernels coincide. The difference of expectations of F is bounded by the sum, over its variable support, of the single-coordinate oscillation of F times \(\sum_{k\ge0}(C^k b)_i\). If the influence-graph distance from i to the changes is at least d, this last quantity is bounded by \((1/4)^d/(1-1/4)\). The support of F comprises only its final endpoints, not all the variables in earlier slabs.

For spatial comparison embed the smaller box in the larger one, and in the small-box specification keep the outside edge heat processes as decoupled reference trajectories, deleting all plaquettes not wholly contained in the smaller box. The sites whose conditional laws differ are all at or beyond a bounded collar of the spatial cut. Each influence step changes spatial link by at most one co-plaquette step, so the distance from support(F) to these sites grows uniformly in the number of slabs. The estimate gives uniform Cauchy convergence even when x is arbitrary. For different initial fields in the same box, discrepancies occur only at free variables of the first slab. Label each seed by its segment i and each free endpoint by its endpoint index i. Each influence edge changes i by at most one and final F lives at i=n, so the influence distance is at least n−1. This proves the temporal oscillation estimate. It also applies after the spatial limit. Integrating against the mean-zero local R converts the oscillation directly into the same bound for h.

Finally let S≥T. In a fixed box, the semigroup identity writes \(A_{\Lambda,S}(x)\) as a positive weighted average of \(A_{\Lambda,T}(y)\) over the field y at time S−T; the optimizing weight is the preceding Feynman–Kac transition times the positive denominator of the last T. In particular it is within the full initial-field oscillation of \(A_{\Lambda,T}(x)\). The bound is uniform in S, Λ, and x. This proves convergence as T→∞ and permits interchange with the open-box bulk limit **for the expectation itself and the vanishing of the witness**, not for its exponentially rescaled amplitude.

## Verification and limits

The heat-kernel logarithm bound was checked independently against \(2.458\times10^{-5}\) from the series bound; the worst counted influence row sum at the chosen coupling is below 0.227. The first and last slabs, the short single-slab case, and removal of cut plaquettes all reduce the counted incidences. At zero spatial interaction the ratio is the independent heat semigroup: a single plaquette's initial dependence is exactly \(e^{-6T}\), much faster than the comparison estimate, and its spin-1 witness is identically zero. This is a control against interpreting the new bound as a near-sharp estimate or as a lower bound. The theorem uses an established comparison method; priority of this application is unverified. The next mathematical test is a signed bulk expansion at late time for the original quotient, where the crude oscillation bound cannot distinguish cancellation from a genuine slow tail.
