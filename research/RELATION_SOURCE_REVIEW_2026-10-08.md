# Directed relation source review — 8 October 2026

Status: **source-reviewed promotion candidates, not runtime provenance changes**. The baseline for this review is production `b8827b151d46a7332e062e76a36ab6271d621c46` (PR #69). This file records evidence and limits before modifying scientific data. The approved UI, formula records, workspace, relation identities and previous release ledgers are not changed here.

## Source-reviewed editorial edges

| Existing edge (direction/type unchanged) | Existing bibliography source | Source location and directly supported claim | Bounded review decision |
|---|---|---|---|
| `tensor-network-states → peps` (`extends`) | `verstraete-cirac-peps-2004` · [Verstraete & Cirac, arXiv:cond-mat/0407066](https://arxiv.org/abs/cond-mat/0407066) | Abstract: projected entangled-pair states naturally extend matrix-product-state constructions to two and higher spatial dimensions | **medium, formal mathematical relation**. PEPS generalizes matrix-product-state constructions, but the stored parent is the broader tensor-network family; this is a qualified family-level relationship; the source does not establish efficient exact representations for every many-body state |
| `quantum-error-correction → stabilizer-formalism` (`formalizes`) | `gottesman-stabilizer-1997` · [Gottesman, arXiv:quant-ph/9705052](https://arxiv.org/abs/quant-ph/9705052) | Thesis abstract: group-theoretical stabilizer-code construction is a fruitful formalism for a **subclass** of quantum error-correcting codes | **medium, formal mathematical relation**. A mathematically explicit subfamily; not a claim that all quantum error correction is stabilizer-based |
| `quantum-rabi-model → jaynes-cummings` (`reformulates`) | `he-jaynes-cummings-2012` · [He et al., arXiv:1203.2410](https://arxiv.org/abs/1203.2410) | Abstract: contrasts the Jaynes–Cummings rotating-wave approximation with counter-rotating contributions recovered beyond that approximation; cross-check: [Guo, Phys. Rev. A 80, 033828 (2009)](https://doi.org/10.1103/PhysRevA.80.033828), abstract | **medium, formal mathematical relation**. The existing `reformulates` navigation type is strictly interpreted as a rotating-wave **approximation**, not exact unitary equivalence or validity at ultrastrong coupling |

These sources establish the stated narrow connections. They are not substitutes for comprehensive independent checks of all claims in the underlying papers.

## Duplicate / hold decisions

- **ALREADY SOURCED:** `semiclassical-gravity → stochastic-gravity` (`extends`) was source-reviewed 2026-09-26 using `hu-verdaguer-stochastic-2008` (Einstein–Langevin noise-kernel extension). Existing `sourceIds` and the historical review record must be preserved, not promoted a second time.

- **ALREADY SOURCED:** `decoherence → quantum-darwinism` (`extends`), already reviewed 2026-09-27 via `zurek-darwinism`; do not relabel or double count.
- **HOLD:** `brst → bv-formalism` (`generalizes`). Related literature establishes close BRST/antifield connections, but the current broad graph relation still needs a deliberately narrowed comparison with a specific section or theorem before treating the arrow as high-confidence evidence.

## Promotion acceptance checklist (not yet satisfied)

1. Re-evaluate all three candidate records in the **runtime** after checking no concurrent changes or prior promotions; require exactly one edge of each key and ensure `sourceIds=[]` and `confidence=editorial` before mutation.
2. Preserve **all 610 edge identities, endpoints, types, original notes, theory records and all existing sources**, including prior PR #67 and September 27 promotions. Do not add duplicates.
3. Record the complete before/after edge fields, source IDs, review dates, precise source locators, expected census change (**122→125 sourced, 488→485 editorial**), and exact baseline fingerprints in a machine-readable audit ledger.
4. Extend the **test-only historical bridge** to reconstruct prior graph snapshots and guard against undeclared modifications, rather than editing an old release's approved ledger or disabling existing assertions.
5. Pass all existing Node tests, generated coverage/freshness/asset checks, full Chromium and WebKit browser tests, and post-merge published-route inspection before declaring deployment verified.

No graph mutation or page change is implied by this research note. Its purpose is to make the next bounded promotion reproducible, source-scoped and reversible.
