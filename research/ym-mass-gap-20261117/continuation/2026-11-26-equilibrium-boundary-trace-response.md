# Trace curvature as an equilibrium boundary response

**November 26, 2026 UTC. Exact finite Wilson reduction; the uniform physical contraction remains open.**

The [whole-slice obstruction](2026-11-26-wilson-slice-global-contraction-obstruction.md) rules out iterating a one-step coefficient that takes a worst case over all boundary fields. There is an equilibrium formulation for the same [reflection-matched trace packet](2026-11-26-matched-wilson-trace-reflection.md), with no worst-case comparison and no coincident lattice variance in its target.

## Exact cut on the periodic geometry

On the pinned periodic Wilson torus place the spatial-link time slice 0 at the reflection plane, and write R for time reflection with the usual reversal of oriented reflected links. Let F_u be the real matched trace packet shifted by physical time u into the positive half; its complete finite stencil is inside that half and away from the cut. For an exact grid step Δ put D=F_u−F_(u+Δ). Translation covariance of the finite token gives E[D]=0, without assuming each packet has zero finite-volume mean. For the reference reflected pairing C(t)=E[F_0 R F_t] with F_0 already supported strictly at positive times, reflection and translations yield
\[
 E[D\,RD]=C(2u)-2C(2u+\Delta)+C(2u+2\Delta).
\]
The definition chooses reference placement so t is the extra physical gap, not the entire distance between two supports. Integer units may be chosen for u and Δ. If one wants the curvature sampled at spacing Δ also in 2u, choose Δ an even integer reference unit and u=u_0+nΔ/2; then the base point and all translated tests are grid-exact for a=1/denominator. Fixed n is taken before the ordered limits.

For an even number M of time slices let S be the collection of spatial links at slices 0 and M/2. Every Wilson plaquette touches either one slice or two consecutive slices. Given S, the two interiors (including temporal links assigned to each arc) are independent: their conditional density relative to Haar is a product of the two arc weights, up to a boundary-only factor. Reflection fixes those spatial links pointwise and exchanges the interiors. Hence with \(m(S)=E[D\mid S]\),
\[
 E[D\,RD]=E[m(S)^2].
\]
There is no gauge fixing in the conditional factorization. The conditional response is invariant under boundary gauge transformations, by change of the interior variables.

For odd M let S include slice 0 and the paired spatial-link slices (M−1)/2 and (M+1)/2. The temporal links at the single far seam can be integrated separately: every plaquette using these seam links also uses only links on these two conditioned slices and that seam. The remaining arc interiors still factor given S. Reflection preserves the boundary law but exchanges the far pair. With m_R=m∘R, the exact identity is
\[
 E[D\,RD]=E[m\,m_R]=E[m^2]-\tfrac12 E[(m-m_R)^2]\le E[m^2].
\]
Nonnegativity of the left side is separately supplied by the previously verified periodic transfer commutator formula. No parity of the pinned mesh denominators or period refinement is assumed. On an odd circle do **not** identify the curvature with the squared conditional norm or use the curvature alone to bound that norm from above.

Exact arithmetic control: sum over the binary ring with bond weight 3 for equal and 1 for unequal neighbors; take D=b₁−b₂. At M=8 the partition sum is 65792 and the unnormalized direct and boundary-square numerators both equal 1280. At M=9 the partition sum is 262656; the direct and boundary-product numerators both equal 4608, while the boundary-square numerator is 446976/85 and the half-square correction is 55296/85. This control tests the cut algebra, not any Wilson rate.

## A telescoping contraction target on the actual conditional profiles

Fix the packet difference in a time interval in a finite torus and consider **expanding** intervals I_j containing its stencil. Write S_j for the pair of spatial-link boundary slices of I_j, and \(m_j=E[D\mid S_j]\), \(Q_j=E[m_j^2]\). Increasing I_j moves its cuts away from the packet, before the cuts meet on the circle. By the same plaquette-local conditional independence, the interior of I_j is independent of its exterior given S_j. For nested expanding intervals, S_(j+1) is on or outside that boundary, so
\[
 m_{j+1}=E[m_j\mid S_{j+1}],\qquad
 Q_j-Q_{j+1}=E\!\left[\operatorname{Var}(m_j\mid S_{j+1})\right].
\]
This is an exact identity under the true periodic marginal and needs no stationary distribution for an independently constructed boundary chain. Only monotonicity is automatic. A useful sufficient next lemma would give a fixed physical step, a common \(\eta>0\), and
\[
 E[\operatorname{Var}(m_j\mid S_{j+1})]\ \ge\ \eta Q_j-\epsilon_{N,p,j}
\]
for these particular response profiles. This gives \(Q_j\le(1-\eta)^j Q_0+\sum_{i<j}(1-\eta)^{j-1-i}\epsilon_{N,p,i}\). One must also prove a finite separated starting bound on Q_0 and choose the nested cuts so that the outward boundary in the target reflected pairing is reached at each specified separation (or bound it using a contained pair of cuts). Moving only the near cut while leaving a far cut at fixed physical distance from the support is not sufficient to make the far boundary forget the packet. The same conditioning identity applies to cut layers containing an extra seam slice; only the even case has the direct equality with the curvature. All error terms must vanish mesh first and period second for each fixed j. The recursion does not claim this, nor demand a gap for all functions of the boundary.

There is a precise warning for a proposed good-boundary estimate. For any centered m and good set G of probability p>0 with B=Gᶜ,
\[
 E[m^2]=p\,\operatorname{Var}(m\mid G)+E[1_Bm^2]
                    +\frac{E[1_B m]^2}{p}
       \le p\,\operatorname{Var}(m\mid G)+\frac{E[1_Bm^2]}p.
\]
Thus either directly control the good conditional mean and bad contribution or use the displayed weighted moment with centering; measuring good-set oscillation and bad-set probability alone does not establish a physical rate. A reversible four-state control is the independent product of a boundary flag with stationary bad probability ε and a fair coin refreshed every step. Let the flag update from 0 to 1 with probability εδ, and from 1 to 0 with probability (1−ε)δ. The bounded centered response \(1_{\mathrm{bad}}-\epsilon\) has zero within-good oscillation and covariance \(\epsilon(1-\epsilon)(1-\delta)^j\), with arbitrarily slow rate as δ decreases even though ε is fixed and small. This is not a Wilson counterexample.

## Relation to prior work and limit

The geometrical factorization uses [the pinned nearest-slice plaquette action and ordered limit](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/PublicWilson.lean), together with the verified trace-token correspondence. A parallel route is the physical-size uniform block condition in Theorem 45 of [Bhattacharjee et al. v6](https://hexagonmath.org/pdf/2610.00341v6#page=23), conditional on its D(n,α) bound. That criterion assumes more global mixing and an appropriate continuum limit; it does not supply a bound on these Wilson boundary response profiles. Their Theorem 46 also makes explicit the need for decay on a total family for a full gap. This note neither claims priority for domain Markov factorization nor verifies an exponential estimate, a trace-sector gap, or a full spectrum gap.
