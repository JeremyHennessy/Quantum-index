# Wilson adjoint leakage in the finite-spatial continuous-time scaling

**2026-11-25 | Research-only continuation | Phase 15 not activated.**

The [fixed-depth result](2026-11-25-fixed-depth-adjoint-channel.md) concerns the isotropic small-coupling corner. Here temporal plaquettes have coupling b>0 and spatial plaquettes s, with all spatial plaquettes active for s>0. Keep the same finite spatial box, neighboring p,q, bent cycle C, shared edge, adjoint-sector projector Q, and R=Q(τ_pτ_q). Write A_d(b,s) for the upper endpoint trace conditioned on the middle links. We obtain an exact first variation for every b and depth, and an actual nonzero projection in a finite-spatial anisotropic scaling limit. This is not a statement about isotropic b=s→∞ or the spatial continuum limit.

## Exact first variation

Let u=I_2(b)/I_1(b), v=I_3(b)/I_1(b), K=the temporal-gauge convolution from the fixed-depth note, and V=∑_r τ_r over one spatial slice. At s=0, A_d=u^{4d}τ_p. Differentiate the product (K e^{sV})^d in the numerator and denominator, with e^{sV} acting by multiplication. Inserting V at slice r, counted outward from the middle, gives

\[
\partial_s A_d(b,0)=\sum_{r=1}^d \big[K^r(V K^{d-r}\tau_p)-(K^d\tau_p)(K^r V)\big].
\]

Only insertion of q can reach parity C or Q. Indeed parity of τ_pτ_r is ∂p xor ∂r, distinct plaquettes have distinct boundaries, and K preserves the edge parities. The shared-edge spin-0 projection equals τ_C/4; the spin-1 projection is R. Thus

\[
\begin{aligned}
\Pi_C\partial_s A_d(b,0)
 &=\frac{u^{4d}}4\,\tau_C\sum_{r=1}^d (u^{2r}-u^{4r}),\\
Q\partial_s A_d(b,0)
 &=u^{4d}R\sum_{r=1}^d \big[(u^2v)^r-u^{4r}\big].
\end{aligned}
\]

These expressions are exact, including the normalization terms. The first scalar coefficient is positive (0<u<1 since it is the mean of the normalized trace at finite b, and positive by the Bessel series). The second is negative: the strict [Bessel Turán inequality](https://arxiv.org/pdf/1010.3346) at order 2 gives I_2²>I_1I_3, hence 0<v<u². Each slice contributes with the same sign. For every b>0 and d≥1 the exact adjoint projection is therefore nonzero for sufficiently small positive s. The allowed s-neighborhood can depend on b, d and the spatial box.

## Many-step accumulation and a uniform local perturbation bound

Fix T>0, take d=d(b) with d/b→T, and use s=γ/b. The [fixed-order Bessel expansion](https://dlmf.nist.gov/10.40.E1) gives u=1−3/(2b)+O(b⁻²) and v=1−4/b+O(b⁻²). Then u^{4d}→e^{-6T}. The geometric sums become Riemann sums since log(u²v)=−7/b+O(b⁻²), log(u⁴)=−6/b+O(b⁻²), log(u²)=−3/b+O(b⁻²). Uniformly for r≤d, the O(r/b²) terms tend to zero. Consequently

\[
\begin{aligned}
\lim_{b\to\infty}\left.\Pi_C\partial_\gamma A_{d(b)}(b,\gamma/b)\right|_{\gamma=0}
 &=\frac{e^{-6T}}4\,\tau_C\int_0^T(e^{-3t}-e^{-6t})\,dt,\\
\lim_{b\to\infty}\left.Q\partial_\gamma A_{d(b)}(b,\gamma/b)\right|_{\gamma=0}
 &=e^{-6T}R\int_0^T(e^{-7t}-e^{-6t})\,dt.
\end{aligned}
\]

Both limiting signals are nonzero for every T>0. In particular the higher-spin response does not disappear simply because each temporal step gets short.

To promote this derivative to nonzero signal at a fixed small γ, view the normalized mean at each boundary as an exponential tilt of the s=0 Markov path law by exp(γB), where B=b⁻¹∑_{r=1}^d V(X_r). With F=τ_p at the endpoint, the second γ derivative is E_γ[(F−E_γF)(B−E_γB)²]. For real γ its absolute value is bounded uniformly over boundary fields by 8(d‖V‖∞/b)², since |F|≤1. Both projections contract Haar L², so the error after the first-order Taylor term has L² norm at most 4(d‖V‖∞/b)²γ². The limiting adjoint derivative has strictly positive norm (‖R‖²=3/64). It follows that for each fixed T and spatial box there are γ_* >0 and b_*<∞ such that for b≥b_* and 0<γ≤γ_* the adjoint norm is bounded below by a positive constant times γ. The same statement holds in the bent fundamental sector, possibly after reducing γ_*. The proof does not require convergence of the entire nonlinear observable as b→∞.

## Scope and reproducibility

At T=0.7 the normalized derivative's adjoint coefficient, with u^{4d} divided out, is approximately −0.022374058587671 in the limit. Direct 50-digit evaluations at b=200,1000,5000 and d=Tb gave −0.022347049134177, −0.022369162292392, and −0.022373099477488. Reproduce them by setting u=I₂(b)/I₁(b), v=I₃(b)/I₁(b), G(x)=x(1−x^d)/(1−x), and evaluating [G(u²v)−G(u⁴)]/b. The sign and limit are proved above; the numerical comparison is only a sanity check.

The estimate is a fixed-spatial-box, finite-scaled-time, small-spatial-perturbation result. The Taylor bound uses the total spatial plaquette count and is not volume uniform. It does not say how large adjoint feedback can be in a thermodynamic limit, provide a continuum mass gap, or verify literature priority for this observable-specific coefficient. A sharper next target is to replace the volume-dependent tilt bound by a local or connected bound, or to isolate the first obstruction to doing so uniformly in the temporal scaling.
