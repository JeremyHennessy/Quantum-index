# Three thermodynamics cards: source and scope review

Candidate based on accepted main `ea3bcdb95d39cace2dee6afc264f7cd5523a88b6` (PR #99).

## Bounded change

Three existing formula cards now state their assumptions, symbols, units, regimes and exact source locations:

- **Quantum Gibbs state:** canonical-ensemble normalization and domain; not a promise of equilibration for arbitrary open dynamics.
- **Jarzynski equality:** initial Gibbs ensemble, fixed unitary protocol, two-projective-measurement work, and equilibrium endpoint free energies at the same temperature. The actual final state need not be thermal.
- **Landauer bound:** heat deposited in the reservoir, the unbiased-bit ideal-reset specialization, and finite-reservoir limitations. Its role changes from `derived identity` to the supported `canonical` label; the regime explicitly identifies it as a lower-bound inequality.

All three equation strings, IDs, theory associations and original bibliography links are unchanged. Two versioned primary sources are appended; the existing review remains a review, not an original-source claim. See the [source review](../research/THERMAL_SOURCE_REVIEW_2026-10-25.md) and [record-level audit](../research/THERMAL_SOURCE_AUDIT_2026-10-25.json).

Candidate inventory: **268 explicitly reviewed / 189 baseline metadata**, **603 bibliography records**. The catalog remains **483 entries, 457 formulas and 114 documented representative-formula gaps**. No theory, formula, relationship or empirical Evidence record is added.

## Preservation and acceptance

The dated historical ledgers are unchanged. A new exact-byte projection reconstructs accepted PR #99 only for historical assertions; current-runtime tests independently enforce the three-card/two-source delta. The UI, workspace, analytics, domain, dependencies and release workflow are unchanged apart from generated asset references.

Mathematical fixtures cover normalization, endpoint partition-function ratios, Jensen's inequality, nonthermal and work-operator counterexamples, finite-reservoir entropy balance and an initially correlated memory/reservoir counterexample. They are bounded algebraic tests, not experiments or complete physics proofs.

Run `npm test`, `npm run validate`, and `npx playwright test tests/browser/thermal-source-audit.spec.mjs`, followed by the full Chromium/WebKit suite. Source review and local tests do not establish browser, merge or live acceptance. The draft PR's exact-head CI is the release evidence; merge/deployment requires separate authorization and subsequent hosted-file verification. Academic-roadmap PR #87 is outside this change.
