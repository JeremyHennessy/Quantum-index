# Bell metadata and Passport review — 7 October 2026

## Exact scope

Baseline: `4034edd3bd3f631c67b12255193d203beff234df`, verified PR65 release; tree `6b75fdfc2e261f4bb4c0c2e6918f4dabbd88177b`. This implements the next metadata-review step already recorded in the continuation plan. The prior approved lattice checkpoint remains preserved in history; no new visual approval is inferred.

Four existing formula IDs are reviewed: `bell-factorization`, `chsh-classical`, `chsh-tsirelson`, `bell-state`. Their names, LaTeX, plain equations, categories, tags and theory links do not change. The update replaces empty/generic assumptions, variables, regimes and units with source-located conditions, explains the chosen CHSH combination and outcome normalization, distinguishes conditional factorization from its common hidden-variable mixture, and separates distribution bounds from finite-sample statistical conclusions. The two inequalities are classified as exact conditional bounds, not identities or approximations.

The Phi+ card specifies its computational-basis convention, marginals and difference from the singlet. The new Bell Passport links the same four cards and the existing 2015 Bell-test Evidence record, and distinguishes entanglement, steering and Bell nonlocality. It does not introduce an experimental result or claim that nonviolation of one CHSH expression certifies locality.

## Source-review boundary

Brunner et al., arXiv:1303.2849v3: page 3, Eqs. (2)–(5); page 21, state definition before Eq. (47). Cirelson, *Quantum generalizations of Bell’s inequality* (1980): visually inspected scanned PDF pages 1–3, printed pages 93–95, covering operator assumptions and the sharp quantum bound. Wiseman, Jones and Doherty, arXiv:quant-ph/0612147v3: pages 2–3, Eq. (3) and the state definition after Eq. (12), with the paper's projective-measurement scope explicit. One Cirelson bibliography record is added; previous sources are retained. The original 1969 CHSH full text was not inspected, and no original-paper equation location is fabricated. Historical open-problem claims elsewhere in the 2014 review are not imported.

## Preservation and inventory

No renderer, CSS, workspace, dependencies, publishing workflow/settings, prior theory, prior Passport, existing bibliography record or relationship changes. All 402 equation strings remain unchanged. `BELL_METADATA_2026-10-07.json` stores every declared edited field, complete prior metadata and before/after hashes. Historical JSON ledgers remain byte-identical. A test-only bridge validates the current reviewed hash before reconstructing a prior record for old baseline checks; it rejects undeclared changes rather than ignoring reviewed IDs.

| Measure | Before | After |
|---|---:|---:|
| Formulas | 402 | 402 |
| Explicit metadata | 143 | 147 |
| Baseline metadata | 259 | 255 |
| Representative formula gaps | 165 | 165 |
| Theory Passports | 15 | 16 |
| Bibliography records | 541 | 542 |
| Theories / relationships | 481 / 610 | 481 / 610 |

The 492 editorial relationships remain editorial. This is a four-record metadata review, not an exhaustive scientific certification.

## Verification requirements

Run the full Node suite, graph/reference validation and generated coverage/freshness/asset checks on the exact candidate. New numerical tests cover all 16 deterministic CHSH vertices, stochastic mixtures, a setting-dependent negative control with S=4, Phi+ and singlet correlations, operator identities, attaining/nonattaining quantum settings, outcome-rescaling negative controls and a finite-sample excess from a local distribution. These tests validate explicit examples and assumptions, not a universal locality algorithm or new experiment.

Run the full real Chromium/WebKit suite, including all-equation MathJax conversion and new Passport/metadata/source-link/return-state checks. Inspect actual desktop/mobile screenshots. Record the tested commit/tree and artifact checksums in the PR. Merge only after acceptance; then compare live entrypoint/asset hashes and test the actual hosted routes in fresh isolated browser contexts. Code presence is not a deployed verification receipt. Native browser installer stalls must not be counted as successful tests.

## Rollback

After confirming no later changes would be lost, revert this release's merge using its first parent. Do not reset main to an older SHA or roll back PR62–65. No workspace/storage migration is required. Preserve the review ledger and original source references in the audit trail.
