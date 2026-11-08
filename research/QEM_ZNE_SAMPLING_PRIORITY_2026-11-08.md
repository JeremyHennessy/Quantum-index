# Quantum error mitigation — chronology and Richardson sampling-cost gate (8 November 2026)

**Research-only, unmerged, no scientific runtime or UI changes.** Main baseline: \`7ba1c0647e7734192f3a8fbd420baddccdb89ba8\`. This independent follow-up does **not** repeat or merge [draft PR #108](https://github.com/JeremyHennessy/Quantum-index/pull/108), whose equation proposal and test already cover first-order noise cancellation and signed quasi-probability decomposition. Companion machine-readable fixture: [QEM_ZNE_SAMPLING_PRIORITY_2026-11-08.json](QEM_ZNE_SAMPLING_PRIORITY_2026-11-08.json).

## Source chronology and claim limits

| Source | Earliest accessible preprint | Journal release | What it supports |
| --- | --- | --- | --- |
| [Li & Benjamin, arXiv:1611.09301](https://arxiv.org/abs/1611.09301); [PRX 7, 021050](https://doi.org/10.1103/PhysRevX.7.021050) | 28 Nov 2016 | 29 Jun 2017 | A controllable-noise-amplification/extrapolation approach within a variational quantum simulator; Sec. VII.A, Eqs. (27)-(28), Fig. 4(a), printed pp. 8-9 |
| [Temme, Bravyi & Gambetta, arXiv:1612.02058](https://arxiv.org/abs/1612.02058); [PRL 119, 180509](https://doi.org/10.1103/PhysRevLett.119.180509) | 6 Dec 2016 | 3 Nov 2017 | Richardson extrapolation and separate quasiprobability method; v3 PDF printed p. 2, Eqs. (2)-(4), Eq. (6) |
| [Endo, Benjamin & Li, PRX 8, 031027](https://doi.org/10.1103/PhysRevX.8.031027) | Not assessed here | 26 Jul 2018 | Subsequent practical method comparison; not a first-priority claim |

**Admission consequence:** Li–Benjamin's public preprint precedes Temme–Bravyi–Gambetta's by eight days. That establishes a *comparison between these dated records*, **not** the historical first appearance of every technique called quantum error mitigation. Keep the umbrella theory's \`originYear\` **null** and its ID candidate-only pending a broader priority/identity review. Do not conflate mitigated expectation-value estimators with quantum error-correcting codes or fault-tolerant physical recovery.

**Review provenance:** APS publisher text and arXiv's dated publication records were inspected. The source PDFs' text/equation contexts were retrievable, but the web screenshot service returned cache misses; do **not** call the original equation-page pixels independently re-inspected in this slice. PR #108 separately documents earlier page-level source review. Its Temme Eq. (4) dummy-index typo is retained as an explicit notation caveat, not silently carried into the estimator.

## Independent Richardson-variance derivation

Let a noisy observable response admit an expansion
\[
E(c\lambda)=E_0+a\,c\lambda+b\,c^2\lambda^2+O(\lambda^3)
\]
at stable controllable noise scales \`c\`, and let independent sample means \`Ehat_j\` estimate \`E(c_j lambda)\`. For \`c=[1,2]\`, the moment constraints \`sum(w)=1\` and \`sum(w*c)=0\` give \`w=[2,-1]\`. Consequently:
\[
\widehat E_0=2\widehat E(\lambda)-\widehat E(2\lambda),\qquad
2E(\lambda)-E(2\lambda)=E_0-2b\lambda^2+O(\lambda^3).
\]
The first-order bias cancels in the **specified** expansion. It is not a general proof that noisy estimates or physical circuit states are error-free.

Assume independent shot batches, \`n_j\` samples at each scale, and per-shot variances \`v_j\`. Then the **derived**, not paper-quoted, sampling variance is
\[
\operatorname{Var}(\widehat E_0)=\sum_j w_j^2 v_j/n_j.
\]
For a fixed total \`N=sum(n_j)\`, minimizing that expression yields \`n_j proportional to |w_j| sqrt(v_j)\` and
\[
\operatorname{Var}_{\min}=(\sum_j |w_j|\sqrt{v_j})^2/N.
\]
Thus, *only when equal per-shot variances are assumed*, the first-order \`[2,-1]\` estimator has a minimum **9x sampling-variance cost** relative to direct measurements with the same total shot budget. This is a statistical overhead ratio, not a measured QPU cost or a claim that mitigation always improves accuracy. With \`N=300\` abstract independent unit-variance shots, an optimally split \`[200,100]\` gives variance \`9/300\`; equal \`[150,150]\` gives \`10/300\`; 300 direct shots give \`1/300\`. A second-order illustrative \`c=[1,2,3], w=[3,-3,1]\` cancels first and second powers but would carry **49x** minimum variance under the same equal-variance assumptions.

**Trade-off:** Total mean squared error includes residual model bias squared plus sampling variance. Higher extrapolation order, inaccurate noise-factor control, time-varying errors, non-independent shots and per-scale unequal variance can undermine the gain. Li–Benjamin Sec. VII.A expressly requires tunable stochastic errors and small effective circuit noise; Temme et al. derive bounded *weak effective-noise* expansions, not universal device guarantees. Digital gate folding is one possible practical noise amplifier, not a property demonstrated by either toy arithmetic fixture.

## Release separation

The source-located Richardson expression and quasi-probability expression are **already** proposed under PR #108, with IDs \`qem-richardson-noise-extrapolation\` and \`qem-quasiprobability-ideal-noisy-map\`. Do not add duplicates to the runtime. This new slice adds only chronology, explicit estimator variance/shot allocation, negative mathematical cases, and independent tests; the broad QEM identity stays **HOLD**.

Run \`node --test scripts/qem-zne-sampling-priority.test.mjs\` before the full \`npm test\` / \`npm run validate\` / Chromium-WebKit gates. No approved Explorer HTML/CSS/JS, classic routes, catalog, bibliography, notes, graphs, analytics or historical checkpoint files may be modified. Draft status is not a release; any future promotion requires exact-head CI, screenshot review, a separately reviewed merge and independent live Pages/served-asset verification.

