# Cross-category source decisions — 30 October 2026

**Release status:** research-only; no runtime entities, formulas, metadata review states, app CSS/layout, bibliography or editorial relationships changed. Exact inspected main `228cd84230d0eaef8325dad4a94dc81ad8cf5a27`. This note is a bounded follow-up to the 64-candidate, 14-category intake. The [structured record](../research/CROSS_CATEGORY_SOURCE_DECISIONS_2026-10-30.json) and `node --test scripts/cross-category-source-decisions.test.mjs` preserve the decisions.

## Already indexed — do not add another first-class umbrella

| Intake subject | Existing catalog identity | Correct next action |
| --- | --- | --- |
| Celestial holography | `celestial-holography` | Improve source-located conformal-primary and celestial amplitude derivations rather than re-indexing. |
| Fracton phases/subsystem symmetries | `fracton-phases` | Consider distinct subtype models and subsystem-symmetry equations, not another base fracton entry. |
| Quantum scars/weak ergodicity breaking | `quantum-many-body-scars` | Review PXP/embedding/eigenstate model depth. |
| Schwinger–Keldysh closed-time-path formalism | `schwinger-keldysh` | Deepen contour-ordered formulas and relation-specific evidence. |
| Resource theory of coherence | `coherence-resource-theory` | Qualify the different free-operation sets and coherence monotones under the existing umbrella. |
| Ghost-free nonlocal gravity | `infinite-derivative-gravity` | Scope local versus infinite-derivative subfamilies and regimes, without duplicate umbrella. |

These determinations come from actual existing canonical IDs, not from string absence, a broad-language model guess or an automatic promotion algorithm.

## Two scientifically distinct research candidates — not yet release-qualified

### Quantum error mitigation

The inspected [Temme, Bravyi & Gambetta manuscript](https://arxiv.org/abs/1612.02058) (2016 preprint; 2017 PRL) explicitly describes zero-noise extrapolation and quasi-probability resampling. The independent [Li–Benjamin work](https://doi.org/10.1103/PhysRevX.7.021050) (2016 preprint; 2017 PRX) describes noise amplification followed by extrapolation. The 2023 [Cai et al. review](https://doi.org/10.1103/RevModPhys.95.045005) distinguishes mitigation from fully error-corrected, fault-tolerant quantum computation.

**Disposition:** `SOURCE_SUPPORTED_IDENTITY_HOLD_MATH`, candidate ID `quantum-error-mitigation`. The broad framework is not the same as the indexed `quantum-error-correction`, but no paper's full defining equations, estimator overhead, noise regime or full historical priority were verified in this batch. The cited 2016 papers are not proof that all error mitigation originated in 2016. Before adding, specify method-level and framework-level granularity, error-cost scaling, and exact equation locators.

### Noninvertible generalized symmetries

The original [Kaidi, Ohmori & Zheng 2022 article](https://doi.org/10.1103/PhysRevLett.128.111601) constructs higher-dimensional noninvertible topological duality defects and their fusion properties. [Schäfer-Nameki's 2024 review](https://doi.org/10.1016/j.physrep.2024.01.007) provides the broader QFT context, including generalized topological defects that need not have group-like inverses.

**Disposition:** `SOURCE_SUPPORTED_IDENTITY_HOLD_ORIGIN_MATH`, candidate ID `noninvertible-generalized-symmetries`. This is conceptually distinct from the existing `topological-qft` umbrella and `bf-theory`, but the older 2D Ising/Kramers–Wannier duality-defect literature must be reviewed before assigning an origin year for the broader framework. The 2022 work is a source for a 4D construction, **not** the earliest discovery of every noninvertible defect. Full source-located fusion definitions and model limitations are required before release.

## Verification and next sequence

1. Check all eight decisions against the actual `main` catalog ID space and existing 64-candidate intake. The decisions are positive examples of protecting canonical IDs.
2. Keep both proposed new identities **research-only**. Inspect primary paper mathematical definitions, historical priority, notation, assumptions and limitations in separately scoped scientific slices; then choose ADD, SUBTYPE or HOLD with full evidence.
3. Continue similar bounded passes for nuclear coupled-cluster versus electronic coupled cluster, operator-algebraic modular theory, and QFT TMD factorization. The 64-candidate intake remains an OPEN queue; eight classified candidates do not mean the other 56 have been scientifically adjudicated.
4. Merge nothing from this branch until exact-head Node and Chromium/WebKit checks pass. It adds only research documentation/tests, with no production change, and does not overlap the separately failing/repairing DM-1A integration PR #107.

**Provenance limits:** This pass uses journal/publisher/author-abstract records, not full PDF equation pages. Bibliography existence and title matching cannot establish all scientific claims. No new discovery, prediction, experimental result or working simulation is asserted.
