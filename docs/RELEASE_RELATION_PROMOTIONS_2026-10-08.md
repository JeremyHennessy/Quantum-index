# Directional relationship provenance — bounded release candidate (2026-10-08)

**State:** PR candidate; not a production release until exact-head Node/data/browser checks pass and post-merge validation and Pages deployment are checked.

**Approved baseline:** `5679138652bd24a7c52b31558205d19b7cecbbc0`, after PRs #71 and #73. The review ledger `research/RELATION_SOURCE_REVIEW_2026-10-08.json` remains immutable. This release adds a separate machine-readable receipt, `docs/RELATION_PROMOTIONS_2026-10-08.json`.

## Exactly three evidence-scoped promotions

| Existing directional edge | Source | Confidence | Limitation |
|---|---|---|---|
| `tensor-network-states → peps` (`extends`) | Verstraete & Cirac (2004), arXiv:cond-mat/0407066, abstract | Medium | PEPS extends MPS-style constructions to higher dimensions; this does not make PEPS a strict superset of all tensor networks |
| `quantum-error-correction → stabilizer-formalism` (`formalizes`) | Gottesman (1997), arXiv:quant-ph/9705052, abstract | Medium | Group-theoretic stabilizer codes are an important subclass, not all QEC |
| `quantum-rabi-model → jaynes-cummings` (`reformulates`) | He et al. (2012), arXiv:1203.2410, abstract | Medium | Rotating-wave approximation only, not exact equivalence or validity at arbitrary coupling |

**Expected census:** 610 total relations unchanged; sourced **122 → 125**, editorial **488 → 485**, high confidence 101 unchanged, medium confidence **21 → 24**. All 481 theory IDs, 549 bibliography records, 405 formulas, 23 Passports, 16 Evidence records, five Problems, and 163 formula gaps remain unchanged.

## Verification and preservation

- Only three preexisting editorial records receive evidence metadata; source IDs are already registered, and original endpoints, types, notes, and relative graph order are preserved.
- The runtime addition is **append-only** to `theories.js` with a unique marker. The exact before/after SHA-256 fingerprints are recorded in the new ledger.
- Test-only historical reconstruction strips the **verified exact append**, then reuses the existing September/October release fingerprints and rejects undeclared edits to unrelated edges or old sources.
- Existing generated coverage documents and content-addressed script references are regenerated for the changed runtime. This does not change layout, typography, CSS, app renderer, workspace or package dependencies.
- `scripts/relation-promotions-20261008.test.mjs` verifies every exact field, prior graph identity, original file fingerprints, source references, and documented-path behavior.

## Remaining acceptance gates

1. All Node tests, graph validation, generated coverage/freshness/asset checks.
2. Full Chromium/WebKit browser suite, including existing comparison and workspace regressions.
3. Merge only the exact tested head. Confirm successful post-merge validation and GitHub Pages publishing.
4. Check hosted routes/assets separately; CI success and deployment event are not direct evidence of every hosted interaction.

A source-backed edge is a **bounded scientific navigation claim**, not proof that the source establishes a universal equivalence, causality, or all predictions of either framework.
