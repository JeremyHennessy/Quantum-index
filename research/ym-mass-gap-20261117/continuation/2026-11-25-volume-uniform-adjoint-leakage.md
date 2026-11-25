# Volume-uniform adjoint leakage at finite anisotropic time

**2026-11-25 | Research-only continuation | Phase 15 not activated.**

The [anisotropic response calculation](2026-11-25-anisotropic-adjoint-response.md) used a Taylor remainder proportional to the square of the spatial plaquette count. That bound cannot be taken to growing spatial volume. We replace it by a local estimate and avoid using a potentially vanishing global lower bound on the middle-slice Gibbs density.

## Statement

Use the same open spatial boxes containing p and its bent neighbor q, temporal coupling b, spatial coupling s=γ/b, depth d=d(b), and d/b→T∈(0,∞). There exist b_*, γ_*, c>0, independent of the spatial box, such that for b≥b_* and 0<γ≤γ_*, the squared distance of the upper conditional mean A_d from the space with **no spin-1 component on the shared middle link** in the true equilibrium middle marginal is at least cγ². Here the absence of spin 1 is imposed conditionally on all other middle links in the product-Haar sense; all other link spins may be arbitrary. In particular the smaller space of spin networks using only spin 0 or 1/2 on every link misses this much of the mirrored covariance. Use closed subspaces or infima of distances throughout.

The result controls an anisotropic regime with small scaled spatial action. It neither covers isotropic b=s nor the spatial continuum mass gap.

## Uniform Taylor bound via overlap graph

Fix the middle configuration X. In temporal gauge and at s=0, the reference Markov path factors independently over spatial edges, with each path initialized at its fixed edge value. For each spatial plaquette r define B_r=b⁻¹∑_{i=1}^d τ_r(X_i), a function only of its four edge paths, with |B_r|≤d/b≤T_* for a fixed T_*>T. Set U_r=e^{γB_r}−1. Let F be the endpoint trace τ_p. Add one source vertex *, with factor U_*=tF. Two vertices are adjacent if they share a spatial edge on which their path functions depend. This graph has maximum degree Δ≤13: an edge lies in at most four spatial squares, and a plaquette has four edges; the source can overlap its matching plaquette as well.

For any vertex subset Λ define Z(Λ)=E∏_{r∈Λ}(1+U_r) in the reference law. Expanding and grouping by connected components gives a hard-core polymer sum: weight w(P)=E∏_{r∈P}U_r for nonempty connected P, and selected components are disjoint and nonadjacent. This uses independence of edge paths, not independence of neighboring plaquettes. If |U_r|≤δ then |w(P)|≤δ^{|P|}. A direct ratio induction gives Z(Λ)≠0 and |Z(Λ)/Z(Λ\v)−1|≤1/2 for
\[
\delta=(2\Delta^2\,2^{\Delta+1})^{-1},
\]
using Δ=13 as a fixed upper bound. Indeed, configurations not using v contribute Z(Λ\v); those using v have exactly one component P containing v and contribute w(P)Z(Λ\N[P]), with N[P] the closed neighborhood. The latter partition ratio relative to Z(Λ\v) is bounded by 2^{(Δ+1)|P|−1} by successive deletions, using the induction hypothesis on smaller sets. There are at most Δ^{2(n−1)} connected n-sets containing v, by encoding a deterministic spanning-tree depth-first walk. Summing the geometric majorant gives
\[
\frac{2^\Delta\delta}{1-\Delta^2 2^{\Delta+1}\delta}=\frac1{2\Delta^2}<\frac12 .
\]
The bound also holds for complex γ and t satisfying |γ|≤ρ=log(1+δ)/T_* and |t|≤δ.

Remove the source vertex in this estimate. Since Z(Λ∪{*})/Z(Λ)=1+t A_d(b,γ/b), taking |t|=δ gives |A_d|≤M=1/(2δ) throughout the complex γ-disc, uniformly in X, b,d, and box. Cauchy's estimate now gives, for real |γ|≤ρ/2, a uniform sup-norm Taylor remainder
\[
\left|A_d(b,\gamma/b)-A_d(b,0)
-\gamma\,\left.\partial_\gamma A_d(b,\gamma/b)\right|_0\right|
\le 2M\gamma^2/\rho^2 .
\]
This constant is deliberately crude. An exact rational independent-binary-path control checked ten disconnected-factor and derivative-neighborhood cancellations through fifth order; it is a bookkeeping check, not the SU(2) proof.

## Local spin projection and true middle-slice weight

Let S be the seven spatial edges consisting of the six edges of C plus the shared link e. Fix all other middle links Y and use the local product-Haar projection Q_S on these seven variables, with spin 1 on e and spin 1/2 on the six C edges. The zeroth-order projection vanishes. The first-order term is exactly the adjoint term in the preceding note, irrespective of Y: in a term from spatial plaquette r, spin 1 on e requires e to be in both p and r, so at most six other edges can have odd parity. Requiring all six edges of C leaves exactly r=q. The first-order local norm thus tends, uniformly over boxes and Y, to the positive constant
\[
L_T=e^{-6T}\|R\|_2\int_0^T(e^{-6t}-e^{-7t})\,dt .
\]
For sufficiently large b the first derivative has norm at least L_T/2. Applying the uniform Taylor remainder in local Haar L², Q_S A_d has norm at least γL_T/4 when γ is further restricted so that 2Mγ/ρ²≤L_T/4.

To compare with the true equilibrium middle marginal, couple two reference paths with middle configurations differing only on S by using the same right increments on each spatial edge in each of the two half-slabs. This construction is valid because K is convolution by independent edge measures; the unchanged edges then agree at every time. Changing S can affect only the J≤4|S| spatial plaquettes meeting S on each slice, so each slice's potential changes by at most 2J. The marginal weights, including the middle spatial term and both half-slab normalizing zero-source weights, therefore have pointwise ratio at most exp(2|γ|J(2d+1)/b) for real γ, at fixed Y. Normalizing over the local Haar law shows its conditional Gibbs density is bounded below by exp(-2|γ|J(2d+1)/b), uniformly in Y and box. This deliberately avoids a global density estimate.

Every retained function with no spin 1 on e has zero Q_S when the exterior variables are fixed. Therefore its squared distance from A_d under the true middle law is at least
\[
\exp[-2|\gamma|J(2d+1)/b]\,\gamma^2L_T^2/16.
\]
The multiplier is bounded away from zero for the stated b,d,γ ranges. Reflection and conditional independence express the centered mirrored endpoint covariance as the squared L² norm of the centered conditional mean. Since constants have no spin 1, centering does not change the stated projection error. The norm estimate does not rely on the choice of how the retained modes are projected, only on their absence of spin 1 on e.

## What is and is not gained

The small-γ interval can now be chosen before spatial volume. No bound as scaled time T→∞, no lower bound uniform in spatial lattice spacing, no isotropic weak-coupling estimate, and no mass-gap conclusion follow. This uses standard local polymer/analytic machinery; literature priority of the specific conditional projection estimate is unverified. A meaningful next question is whether the same missing-mode mechanism forces an exact nonclosure for arbitrary positive scaled spatial action, or whether genuine cancellations can occur outside the small-γ disc.
