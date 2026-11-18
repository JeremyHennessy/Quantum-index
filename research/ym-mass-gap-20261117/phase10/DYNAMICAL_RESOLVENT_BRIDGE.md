# Phase 10 — real dynamical resolvent bridge and holomorphic continuation

**Status:** real-coupling Laplace identity is an elementary **rigorous spectral-calculus theorem** for the exact untruncated SU(2) model; it is not a newly discovered Yang–Mills statement. Complex-coupling uniform semigroup and absolute connected-cluster control remain **OPEN**.

## 1. Exact original operator and real spectral theorem

For fixed finite N>=2, alpha>0 and any real beta, define the no-charge gauge-invariant closed subspace H_phys,N of K_N=L²(SU(2)^(3N+1), product normalized Haar). H_E=∑_links C_e is nonnegative self-adjoint with compact resolvent on the finite graph, on the natural electric Sobolev/Laplacian domain. Every W_i is a bounded self-adjoint real Wilson-character multiplier with ||W_i||<=2 and preserves the gauge constraints. Therefore H_N(beta)=alpha H_E−beta∑_iW_i is self-adjoint on D(H_E) by bounded perturbation. Its ground is a normalized eigenvector Ω_N with real eigenvalue E0,N (in fact it exists at all real beta for any fixed N by compact resolvent, although the analytic unique branch is guaranteed only in the admitted regime). In the small real-beta region relevant here, the vacuum-origin ground branch is unique.

Let K_N=H_N−E0,N>=0, O=W1, mu_N=<Ω_N,O Ω_N> real, and v_N=(O−mu_N)Ω_N. Since O is bounded, v_N belongs to H_phys,N with ||v_N||<=2 and <Ω_N,v_N>=0. We do not need v_N in D(H_N) for bounded resolvent/semigroup matrix elements.

The nonnegative self-adjoint K_N has spectral resolution K_N=∫_[0,∞) λ dE_N(λ). For s>0,
  (K_N+s)^(-1) = ∫_0^∞ e^(−st) e^(−tK_N) dt
as a **Bochner operator-norm integral**: ||e^(−st)e^(−tK_N)|| <= e^(−st), integrable. Equivalently, for each λ>=0 use 1/(s+λ)=∫_0^∞exp[−(s+λ)t]dt and Fubini/Tonelli with the finite positive spectral measure ⟨v_N,dE_N(λ)v_N⟩. Thus exactly,
  G_N(s,beta) = <v_N,(K_N+s)^(-1)v_N>
               = ∫_0^∞ e^(−st) <v_N,e^(−tK_N)v_N> dt.

Because e^(−tK_N) Ω_N=Ω_N and O*=O, the **correctly centered imaginary-time Wilson correlation** is
  C_N(t,beta) := <v_N,e^(−tK_N)v_N>
               = <Ω_N,O e^(−tK_N) O Ω_N> − mu_N²,
  t>=0.
Here 0<=C_N(t,beta)<=||v_N||²<=4 by spectral positivity. It is not the uncentered Q-resolvent from Phase 5. At beta=0, E0=0 and W1|0> has electric energy 3alpha, hence C_N(t,0)=exp(−3alpha t), G_N(s,0)=1/(s+3alpha).

If a **separately proved** real-beta interacting uniform physical gap gamma_*>0 is available (e.g. existing strong-electric theorem mapped in Phase 9), v_N lies in its excited subspace. Then C_N(t,beta) <= ||v_N||² exp(−gamma_* t) and 0<=G_N<=4/(s+gamma_*), all uniformly in N. This proves an upper bound on EACH scalar G_N, but **neither** a remote-face difference estimate nor an absolute coefficient tail.

## 2. Domain, sum, and differentiation conditions

- No exchange of an infinite-volume limit with the Laplace integral is asserted. Uniform pointwise domination 4e^(−st) would suffice for some scalar limits *if* the integrands converged at each fixed t, but that convergence has not been proved here.
- No interchange of beta derivatives, linked-cluster sums or N→∞ limits with ∫_0^∞ is asserted without a single uniform integrable majorant for differentiated terms. The generic real-bound 4e^(−st) is not a bound on derivatives.
- Neither self-adjointness nor positivity persists for generic complex z. The expressions for real beta use the Hilbert-space conjugate-linear inner product and real normalized Ω_N only.
- On D(H_E), finite N H_N(z)=alpha H_E−z∑W_i is an entire type-A analytic closed operator family with compact resolvent, since the perturbation is bounded for each N, but its operator norm is ≤2N|z| and an elementary perturbative radius is not N-uniform.

## 3. Correct complex holomorphic response and why real formulas do not transfer automatically

For fixed N near z=0, wherever the simple isolated vacuum-origin eigenbranch E_N(z) and rank-one analytic Riesz projection P_N(z) exist, and the shifted inverse exists, define mu_N(z)=Tr[P_N(z)O] and
  F_N(s,z)=Tr[P_N(z)(O−mu_N(z))(H_N(z)−E_N(z)+s)^(-1)(O−mu_N(z))].
All operators under the trace are bounded except H inside its bounded resolvent; P_N(z) is rank one trace class. For *real small z*, P_N=|Ω_N><Ω_N| and F_N=G_N. For complex z, P_N need not be orthogonal and **must not** be replaced by a sesquilinear expression using an unholomorphically conjugated right eigenvector. Centering O−mu_N(z) is defined by the algebraic trace, not by a positive state.

The **published** 2020 complex Lie–Schwinger theorem supplies a common N-independent disk for *an isolated analytic eigenbranch*, after column grouping (see THEOREM_APPLICABILITY_AUDIT.md). Its complex spectral separation does not bound ||P_N(z)|| or ||(H_N(z)−E_N(z)+s)^(-1)|| uniformly, nor directly provide a common disk for arbitrary fixed s>0 with a uniformly bounded **centered scalar** F_N.

Even in a different 2-level product model with a uniform analytic complex spectral separation, ||P_N(z)|| can grow exponentially with volume. The exact example is retained in ONE_DECISIVE_LEMMA_OR_COUNTEREXAMPLE.md. Remarkably, its *local* centered F_N remains uniformly bounded by exact factorization, illustrating why trying to bound the **global** projector norm is neither a valid deduction nor necessarily the appropriate route.

### A finite-N complex semigroup is not a uniform substitute

For each fixed N, the bounded-perturbation estimate on the full link space is
  ||e^(−tH_N(z))|| <= exp(2N|z| t),  t>=0,
because alpha H_E generates a contraction semigroup. Therefore
  ||e^(−t(H_N(z)−E_N(z)))|| <= exp[(2N|z| + Re E_N(z))t].
If s>2N|z|+Re E_N(z), the norm-Laplace integral of the shifted complex semigroup converges and equals the shifted resolvent. This is merely a **sufficient finite-N condition**, with an extensive term and generally no N-uniform positive radius. Its failure is not a physical counterexample to a better local dynamical estimate.

We do not infer a uniform complex-semigroup representation from the real spectral theorem, the 2022 LPPL result, or the 2020 complex spectral separation.

## 4. Why the bridge does not complete Phase 10's target

The original target requires a nontrivial N-independent complex-coupling disk for F_N and sup_N sup_|z|=r |F_N(s,z)|<∞, or an equivalent absolute linked coefficient majorant. Real-time Lieb–Robinson bounds, equal-time ground-state locality and real-beta spectral gaps by themselves do not supply this quantity. A valid future proof could use a local imaginary-time connected-polymer estimate with explicit integration in t and non-Hermitian centering, but that additional input has not been proved.

Under a *hypothetical* F_N disk radius r with scalar bound M, Phase 7 zeros combined with Cauchy give:
  sum_(k>=2d)|c_(N,k)| |beta|^k <= [2M/(1−beta0/r)] (beta0/r)^(2d),
with d=N−1, 0<beta0<r. This is algebraically correct and **conditional**. No positive β0, M or q for the actual physical F_N has yet been rigorously established.

**Scientific decision:** B for the known real spectral/Laplace representation and existing complex-eigenbranch isolation theorem; C for the invalid complex-gap⇒uniform-norm shortcut; D for the exact centered-resolvent all-orders locality claim.
