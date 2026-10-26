# Independent scientific review — DGLAP local proposal

**Verdict: PASS within the explicitly limited LO spacelike collinear-PDF scope. No blocking findings remain.**

Reviewed 2026-10-26, independently from the proposal author. This is a local scientific/data-structure review, **not publication, integration, merge or deployment approval**.

## Exact reviewed artifacts

- Candidate SHA-256: `a9c98f5c184592082d4574bd840375fc73e053b87939ed2361c3f30b5f02797d`
- Proposal SHA-256: `7fdf584e507d6c5f5d6e74b06e1db952c14a298558638fa1b8e1774e7b38f40a`
- Accepted-main baseline: `1ca99e424959e2238448335ccd7b6143c376e94d`.
- Proposed delta: two primary sources, one formula, zero mutations to existing records. Formula: `dglap-spacelike-lo-pdf-evolution`.

## Scientific findings

1. The displayed equation, scale derivative, child/parent index order and number-density convolution are consistent. It is correctly classified as an **approximation** retaining the leading-order kernel; the equality is not presented as an all-order physical prediction.
2. External `alpha_s/(2 pi)` is clearly distinguished from a full coupling-containing kernel. Number PDFs and momentum PDFs have the correctly different explicit convolution measures. No accidental `2 n_f` is inserted into the individual-quark kernel.
3. All four LO SU(3) kernels match the inspected primary sources. Plus prescriptions and delta coefficients are consistent; whole-fraction plus and denominator-only plus are not conflated. Valence and momentum conservation apply to finite moments with proper initial normalizations, not to arbitrary input normalization or total parton number.
4. The stated leading-twist/perturbative/fixed-flavour/MS-bar scope, no-threshold interval, and exclusions are appropriate. Leading twist is identified as a domain restriction rather than a false claim that a code paper proves factorization. A separate primary-paper leading-power/twist-two statement was independently inspected as contextual support.
5. The original 1977 source is retained only as historical provenance. No uninspected original equation locator or comprehensive literature-review claim is made. HOPPET and QCDNUM exact locators were checked against extracted text and rendered source-page pixels.

See `SOURCE_REVIEW.md` for precise primary-source locators and independent cross-source checks.

## Reproduced evidence

- Proposal mathematical checks: **17 exact positive checks, 6 rejected negative mutations, 3 numerical synthetic points**, reproduced successfully into `reproduced-proposal-math.json`.
- Independently authored mathematics: **12 exact rational checks, 6 rejected negative controls, 3 independent numerical points**, in `independent-math-results.json`. Includes kernel moments, equivalent plus actions, an analytic toy convolution, momentum-density transformation and a separate analytic quark-kernel fixture.
- Independent read-only runtime injection: all preexisting records preserved, only DGLAP audit changes. Main totals: sources **603→605**, formulas **457→458**, explicit metadata **268→269**, gaps **114→113**. Evidence: `independent-runtime-results.json`.
- Author's three-base VM script reproduced: accepted main, response draft `3e3bc1b`, combined local `50c5b43` all pass exact preservation/no-collision checks. Evidence: `reproduced-three-base-runtime.json`. Combined hypothetical totals **610 sources, 460 formulas, 274 explicit, 111 gaps** remain **conditional, not shipped**.

## Boundaries and remaining release gates

No physical PDF evolution, fit, cross section, finite-grid solver validation, full repository suite, formula renderer or real-browser execution was performed by this review. Source-page rendering is not application-formula rendering. Browser/render/full integration verification remain future gates, accurately disclosed in the proposal. No repository files/branches were changed and no external publication action was taken.

The research/review stopping condition is reached for this standalone candidate. Future integration requires the authorized accepted base and its normal tests; this review does not authorize publishing it.
