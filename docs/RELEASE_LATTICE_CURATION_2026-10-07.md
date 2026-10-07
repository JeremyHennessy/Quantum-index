# Lattice-model depth — 7 October 2026

Baseline: `462f2d96649f3c030c06fe35b537d3fd1599d90a`, tree `8e289ef17de97bf2b0b32549bca87216dfac7c97` (the verified PR #62/#63 release).

## Delivered scope

Five source-located formulas for three existing catalog entries, without adding duplicate theories:

- SSH: the fixed-dimerization chain/bulk bands and its chiral winding number.
- Aubry–André: the quasiperiodic onsite Hamiltonian.
- Holstein: the single-electron local-phonon Hamiltonian and first-order small-hopping band.

Three new Theory Passports make those models comparable in the existing view. Each links its equations and bibliography, states the selected degrees of freedom, assumptions and limits, and separates mathematical statements from experimental evidence. No new experimental Evidence records or relationship claims are introduced.

Formula count: 393 → 398. Representative gaps: 170 → 167. Explicit metadata: 134 → 139; the 259-record baseline-metadata queue is unchanged. Bibliography: 537 → 539. Passports: 10 → 13. Theory count remains 481; relationships remain 610 (118 source-backed and 492 editorial).

## Sources and conventions

Asbóth, Oroszlány and Pályi, arXiv:1509.02295v1, Chapter 1: the open operator in Eq. (1.1) is kept separate from the periodic bulk matrix in Eq. (1.14). The Bloch basis has phase +imk. Winding uses the vector formula (1.38); the v1 logarithmic form (1.40), with its stated h=dx-idy, has the opposite orientation to (1.38). We do not copy that log sign. The convention is tested by Fourier transformation and both winding orientations.

Roati et al., arXiv:0804.2609v1, Eq. (1): the cosine coefficient is Delta, with positive hopping J. The ideal golden-ratio threshold is not assigned to the finite experiment; the cited adjacent discussion explicitly distinguishes them. A finite rational Fourier-duality test checks coefficients, not infinite-system localization.

Bonča, Trugman and Batistić, arXiv:cond-mat/9812252v1, Eqs. (1), (8)–(11): the source's omega has energy units, denoted Omega=hbar omega_0 here. The projected band is explicitly first order in hopping. A displaced-oscillator residual and two-site oscillator overlap check its atomic energy and hopping reduction. The test is not a numerical solution of the full finite-t polaron problem.

All source-version URLs and one-based PDF page anchors are stored on the formula records. Relevant equation pages were visually inspected. This is targeted curation, not full-paper reproduction or independent experimental confirmation.

## Preservation and regression control

All 481 prior theory records, 393 formulas, 537 bibliography records and ten Passports are protected by record-level fingerprints. Historical release ledgers remain unmodified; tests chain their fingerprints through this additive release. Styles, workspace implementation, profiles, dependencies, existing publishing workflow and other scientific layers are byte-identical to the baseline.

The only production-renderer change is two date expressions: use a Passport's own review date when present, falling back to the existing global date for old records. This shows 7 October for the new records without falsely re-reviewing September's ten hubs. Layout and interaction code are unchanged.

## Release gate and rollback

Require the complete Node suite, generated coverage/freshness/asset checks, all-equation real MathJax conversion, full Chromium/WebKit tests and actual desktop/mobile screenshot review. After merge, require hosted file hashes and changed-route checks. Results and exact merged SHA are recorded in the PR discussion; this document does not predeclare success.

Rollback: revert this release's merge with the first parent; no workspace migration or repository-setting change is necessary. Do not undo #62 or #63 to roll back this content batch.
