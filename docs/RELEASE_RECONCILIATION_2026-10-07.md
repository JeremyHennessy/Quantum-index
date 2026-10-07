# Reconciled scientific release — 7 October 2026

## Baseline and preservation

Baseline main: `cbe65b1f30216565fd93aea838264a4f9838bc6c`.
Reconciles PR #60 at `cb2f1b5d8f4f88871cb847054971e38d32f8eca9` and PR #61 at `151d102c275ffb2ecef554901abc6fbdbd00496f`.
The rejected PR #59 is not reinstated.

No app layout/CSS, workspace behavior, dependency, or Pages setting is changed. All 480 pre-existing theory records and all 389 pre-existing formula records are preserved byte-for-byte at the canonical-data level, checked by a baseline fingerprint regression. The changed bibliography type and two promoted relationship evidence records are documented separately from new catalog records.

## Integrated scientific work

- Retains the configuration-ensemble classical–quantum framework and its explicit signaling caveat from #60.
- Retains three distinct formula representatives: the configuration-ensemble Hamiltonian, an observational drift/decoherence/diffusion inequality, and the continuous-generator special-normalization kernel constraint.
- Fixes the lost TeX backslash in #61. The JavaScript source now preserves the runtime `\succeq` command, tested independently of MathJax's ability to typeset ordinary letters.
- Specifies the support/generalized-inverse and Hamiltonian-drift assumptions for the kernel constraint.
- Specifies that the observational inequality uses the state-traced scalar contraction of D0 and phase-space matrix contraction of D2, with the back-reaction restriction of the cited preprint proof. Source-version equation numbers are explicit.
- Retains the distinct motion-correlation, conditional interferometry and geodesic-deviation evidence from #60 and the Diósi–Penrose model-specific evidence from #61.
- Canonicalizes duplicate bibliography and development records instead of presenting them as additional discoveries. See `RECONCILIATION_2026-10-07.json` for the ID map.
- Keeps the Aziz–Howl result labeled an active theoretical controversy, with locality-conditioned witness arguments and countermodels represented with their respective assumptions.
- Preserves the original 2025 claim date; later review dates describe the reassessment.
- Retains the richer research question and synthesis note without claiming a universal discriminator, new proof or experimentally selected fundamental theory.

## Counts and remaining curation

481 theories; 392 formulas; 610 relationships (118 source-backed, 492 editorial); 536 bibliography records; 16 developments; 13 Evidence records; 60 ResearchQuestions. The five Problems, ten Passports, 59 profiles and five learning paths are retained.

The census remains open. There are 171 documented formula gaps, 259 baseline-metadata formulas, 492 editorial relationships and substantial profile/Passport coverage still to curate. These are not silently marked complete by passing software tests.

Both the coverage generator and data validator now include bibliography additions from the Evidence layer, matching the browser runtime. Generated coverage, freshness and asset references are regenerated together.

## Acceptance and rollback

Acceptance requires the exact candidate head to pass Node regression tests, full data/report/asset checks, real Chromium/WebKit math and interaction checks, and screenshot review. A successful test run is not independent verification of every cited scientific result. Hosted bytes and important routes are checked after publishing.

Rollback is a revert of this release; no data migration, account changes or repository-settings restoration is required. Browser-local research storage is unchanged.
