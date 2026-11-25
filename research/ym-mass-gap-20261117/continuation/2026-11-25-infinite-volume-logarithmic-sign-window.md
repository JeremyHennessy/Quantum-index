# No cancellation on a growing time interval in the original bulk signal

**2026-11-25 | Fixed spatial lattice, continuous time | Research-only; Phase 15 not activated.**

The [free-boundary bulk construction](2026-11-25-free-boundary-bulk-limit.md) gave existence and a coarse late-time upper bound, not sign. Here the actual original infinite-volume Haar witness is strictly negative from time zero up to a growing logarithmic horizon, using an exact coupling symmetry before estimating the remainder. There is no positive lower bound for the signal at arbitrary late times in this note.

Let \(h_{\Lambda,\gamma}(T)=\int R(x)A_{\Lambda,T}(x)\,d{\rm Haar}(x)\) for the pair p,q and shared-edge spin-1 witness specified in the [finite-box quotient calculation](2026-11-25-finite-box-adjoint-exceptional-times.md). Let \(h_{\infty,\gamma}\) be its open-box bulk limit. For every ε>0 there exists γ_ε>0 such that for \(0<\gamma<\gamma_\epsilon\)
\[
 h_{\infty,\gamma}(T)<0
 \quad\hbox{for all}\quad
 0<T\le \tfrac13\log(1/\gamma)-(\tfrac12+\epsilon)\log\log(1/\gamma).
\]
The exact upper endpoint is a sufficient bound, not an asserted cancellation time. In particular this covers any fixed bounded time interval as γ decreases and extends strictly beyond the volume-independent window obtained by keeping only a quadratic remainder.

## Exact symmetry

For the positively directed edge from z in direction i, set \(\sigma_i(z)=(-1)^{\sum_{j<i}z_j}\) and multiply its SU(2) matrix by this central sign. Each elementary square has product of signs −1, since exactly the shift of the higher-direction sign by the lower direction changes its parity. Therefore V and F=τ_p are odd under this map. The product τ_pτ_q is even, and the bent cycle C is even because its sign is the product of the two plaquette signs, with the shared edge squared out. Thus R=τ_pτ_q−τ_C/4 is even. The map preserves product Haar and commutes with the free electric generator. For complex coupling wherever the quotient is defined this gives \(A_{\Lambda,T}(-\gamma;\sigma x)=-A_{\Lambda,T}(\gamma;x)\), hence
\[
 h_{\Lambda,-\gamma}(T)=-h_{\Lambda,\gamma}(T).
\]
No periodic boundary parity assumption is made; the signs are defined on the infinite cubic lattice and restrict to all open boxes. In particular the coefficient of γ² vanishes, even when the corresponding pointwise coefficient for the conditional mean need not vanish.

## Uniform analytic remainder for every T>0

For one trajectory on each spatial link, independent before the tilt and with initial values x fixed, put \(B_r=\int_0^T\tau_r(X_t)dt\) and \(U_r=e^{\gamma B_r}-1\). Apply the exact overlap-graph ratio argument from the [volume-uniform leakage note](2026-11-25-volume-uniform-adjoint-leakage.md) to these continuous paths. This is an application of abstract polymer ideas, not a new abstract expansion; see [Kotecký–Preiss](https://doi.org/10.1007/BF01211762). The source factor is \(1+tF(X_T)\), the plaquette and source supports have overlap graph degree at most 13, and \(|B_r|\le T\). For absolute constants d₀>0 and M<∞ independent of T, x and box, the quotient is holomorphic for \(|\gamma|<d_0/T\) and bounded by M there. This follows with the constants of the cited ratio calculation: use \(|U_r|\le e^{|\gamma|T}-1\) and choose d₀ so the graph majorant applies. Integrating against R preserves the bound up to \(\|R\|_{L^1}\).

Cauchy estimates and oddness now imply, uniformly for \(|\gamma|T\le d_0/2\),
\[
 \left|h_{\Lambda,\gamma}(T)-\gamma h'_{\Lambda,0}(T)\right|
 \le C|\gamma|^3T^3.
\]
The open-box bulk real limit exists throughout the interval of couplings needed below by the free-boundary comparison theorem. The derivative is exactly independent of the box once it contains p and q, as follows by inserting a single plaquette in the Duhamel formula: only q can contribute to the parity and spin support of R. Hence the same estimate passes to the bulk. As an additional check, the bulk holomorphic extension for each fixed T follows by coefficient stabilization on finite neighborhoods: a derivative of order m at zero is a sum of joint cumulants of F and at most m plaquette path integrals, counting repeats. A cumulant vanishes when the variables split into independent nonempty groups, by factorization of the log moment-generating function. Connected terms therefore lie at most m overlap steps from p. The coefficient bounds and dominated geometric series then give convergence on every smaller complex disc. This argument does not give a nonshrinking complex radius as T grows.

## Sign and checks

The [exact first variation](2026-11-25-anisotropic-adjoint-response.md) has
\[
 -h'_{\Lambda,0}(T)
 =\|R\|^2 e^{-6T}\int_0^T e^{-6t}(1-e^{-t})\,dt
 \ge c e^{-6T}\min(T^2,1)
\]
for a constant c>0: restrict the integral to [0,min(T,1)] and use \(1-e^{-t}\ge(1-e^{-1})t\) there. The ratio of the cubic error to this negative leading term is bounded by \(C'\gamma^2 T^3 e^{6T}/\min(T^2,1)\). For T≤1 this is O(γ²). On 1≤T≤T_γ it increases in T, and at the stated endpoint \(T_\gamma\) it is O((log(1/γ))^(−6ε)). Also γT_γ tends to zero, as required for the Cauchy bound. This proves the bulk sign on the interval and also the same sign estimate in every finite open box. An independent integer check enumerated all 1,029 oriented-coordinate plaquette placements based at points of [−3,3]^3, including negative coordinates, and verified the central sign. An attempted replacement by a vertex gauge sign fails the plaquette test: such signs telescope with product +1 and cannot enforce oddness in the coupling.

The time scale here is logarithmic, not the electric-band resolving scale γ^−2. The result does not determine the sign or rate at fixed γ and arbitrarily large time in the infinite lattice. A proof there would need an error that decays with T relative to the low-energy signal, not a further fixed-order absolute Taylor estimate. Neither priority of this observable-specific result nor any continuum claim is asserted.
