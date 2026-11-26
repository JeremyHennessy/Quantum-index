# An exact single-edit formula for the actual Wilson blocked trace score

**2026-11-26 UTC. One-step identity at finite cutoff, and conditional localization. No continuum bound.**

The [positive two-edit analysis](2026-11-26-positive-wilson-edit-localization.md) concerned output-density edits, not physical trace insertions. Here a coarse edit has an exact, distinct relationship to the posterior of the actual fine trace: its change is a covariance on the fine-field posterior alone.

Let A(U) be the actual finite-cutoff fine trace representative before the last blocking step. If the previous steps have already been performed, use its conditional mean given that input U, including the exact deterministic source scaling; the tower property applies because the new tag/noise step depends on the preceding history only through U. In particular this applies to a fixed anchor through the [exact signed push](2026-11-26-wilson-trace-blocked-score.md). Define h(V)=E_V[A(U)] with the same positive unmarked law, and M_e(U)=E_V[r_e|U] with the notation of the preceding note. A constant vacuum centering of h drops out of the difference. At every coarse output with positive density,
`h(V^e)−h(V)=Cov_{P_V(U)}(A,M_e)/E_{P_V(U)} M_e.`
Indeed, the posterior at the edited output is precisely the old one reweighted by r_e, so subtraction gives the joint posterior covariance divided by its mean. Since A is a function of U, total covariance kills the conditional tag covariance identically. This is also the derivative at s=0 of the log of the edited to unedited density ratio after a trace tilt exp(sA), provided the finite-cutoff derivative is integrable (in particular for a bounded finite-cutoff representative). It uses the actual trace posterior, not an identification of a coarse bond edit with the trace.

Under the uniform conditional tag comparison assumption q<1 of the preceding note, replace M_e by the strictly local truncated-tag expectation M_e^(R). The covariance error is at most
`ε_R E_V |A−E_V A| ≤ ε_R sqrt(Var_V A)`,
where `ε_R=2 Δ q^R/(1−q)`. Thus
`|h(V^e)−h(V)| ≤ exp(d) [ |Cov_V(A,M_e^(R))| + ε_R sqrt(Var_V A) ]`.
For the exact matched fine trace (rather than a pushed conditional mean), this is a test of covariance between explicit fine stencils when they are spatially separated. For an already-blocked mark, A itself need not be local; an independent localization estimate for it is required. The variance multiplier can depend on the finer cutoff; a finite-cutoff bound is not a uniform estimate in the continuum limit.

For an independent algebraic check, take distinct fine draws U,U' from the same posterior. The numerator is half the expectation of `(A(U)−A(U'))(M_e(U)−M_e(U'))`. The draws here are independent draws from the *same exact posterior*, not a replacement for the law of two physical trace insertions. Ninety-six positive joint-law fixtures passed exact integer tests of the posterior-reweighting and pair formulas after clearing denominators. These tests do not sample the Wilson field.

**Next obstruction.** The actual law to study is the fine field weighted by the positive likelihood of the observed coarse configuration. It can retain long-range dependence even if the auxiliary tags mix and all factors are strictly positive. To quantify this, pick a fair hidden bit, let the trace surrogate be the bit and let a far-away edit have likelihood ratio 1+bit. The posterior mean changes by 1/6 regardless of separation. This control is not the Wilson law. The one-edit formula says what must be controlled in the real law; a two-trace physical result still needs the ordered-limit bound on the actual separated source pair. No mass-gap or novelty claim is made.
