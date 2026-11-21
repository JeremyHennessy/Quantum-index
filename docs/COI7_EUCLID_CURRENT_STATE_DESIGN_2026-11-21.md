# COI-7 — Euclid DR1-Foundation current-state projection (draft, not runtime)

**Reviewed:** 2026-11-21. **Scope:** Issue #158 only. **Status:** independent research proposal; no public-site change.

## Observed contradiction and first incorrect layer

- The historically correct October 30 census and byte-identical `docs/observatory-registry.json` encode the then-planned DR1-Foundation as `planned-no-observational-products` and explicitly date the review note to October 30.
- The separate November 12 receipt `research/COI4_EUCLID_DR1_FOUNDATION_DELIVERY_2026-11-12.json` confirms the actual public release. ESA's dated release announcement and NASA/IPAC IRSA's archive description agree.
- `docs/observatory-explorer.js` reads `./observatory-registry.json` and renders `registry.releases`; the **stale presentation-data payload** is therefore the first identified incorrect current-state layer. This is not evidence of a CSS/rendering bug. The user's original visual issue #128 is independent and unresolved.
- The archived October 30 status must remain unchanged; blindly updating that snapshot would contradict its date-specific integrity tests.

## Official source review and limits

- ESA's [November 12, 2026 release announcement](https://www.esa.int/articles/about-us/directorates/science/euclid/euclid-lays-the-foundation-for-its-best-ever-3d-map-of-the-universe) documents the achieved DR1-Foundation release, covering approximately 1,900 square degrees of wide-survey observations and a broad family of products. This is **public release metadata**, not evidence for a particular dark-energy model.
- [NASA/IPAC IRSA's DR1 archive overview](https://irsa.ipac.caltech.edu/data/Euclid/docs/overview_dr1.html) separately confirms the November 12 Foundation release and public image/catalogue/spectra product families. IRSA warns that catalogue services are being populated incrementally. Documented availability is **not** verification that any specific file was downloaded or query executed.
- [Euclid NASA Science Center's DR1 overview](https://euclid.caltech.edu/page/euclid-dr1) identifies **DR1 Complete as future, expected mid-2027**, with high-level galaxy-clustering and weak-lensing products. Do not promote Foundation availability into a released Complete likelihood, verified cosmological constraint, or validated dark-matter theory.

## Minimal research-only projection contract

`projectEuclidFoundation(registry, receipt, asOf)` is an isolated pure function. It validates both historical inputs and the authoritative achieved-release receipt. For as-of dates before November 12 it returns no overlay; from November 12 through the independently reviewed **November 21, 2026 horizon** it returns a **proposal** that changes only the existing Euclid Foundation release and milestone identities, plus two explicit source records. DR1 Complete remains future; no scientific Evidence is promoted. Dates after November 21 require a new official-source review, rather than continuing to label DR1 Complete as future forever. Unknown, mutated, or conflicting source or access claims fail closed. The function does **not** change historical source files, site JSON, loader, CSS, HTML, notes, analytics, root routes, or approved theory IDs.

Source-precedence rule: **official dated achieved event supersedes an older dated forecast only for current-status views**, never by retroactively editing historical evidence. The model is intentionally not wired into the live Explorer while visual blocker #128 remains open.

## Required before any public-site correction

1. Independent scientific review of source status and projection semantics; preserve historical COI-0/COI-2/COI-4 bytes and existing identity mappings.
2. Exact-head Node tests, BAO/NFW historical controls, QA/map, Chromium/WebKit and independently inspected desktop/mobile screenshots. Passing tests alone is not approval of any UI change.
3. Explicit user acceptance of changes to displayed access labels/behaviour; design the smallest non-destructive, separately source-qualified current-release view. Do not redirect the root or rewrite a renderer.
4. Separate verification of merged main CI, Pages deployment, live deep route and served assets. Keep issue #158 open until the **live user-facing status** is corrected and observed.

**Rollback:** close the draft PR/discard its isolated branch. No production rollback is needed because only additive model, test and guide files are proposed.
