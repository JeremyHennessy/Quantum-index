# Quantum Index — current continuation plan

Updated 7 October 2026. This is the single continuation entry point; dated release/research notes remain the audit trail.

## Current release work

The reconciliation release combines the distinct useful content from PRs #60 and #61 while retaining the `cbe65b1f30216565fd93aea838264a4f9838bc6c` UI and browser-local workspace baseline. Read `RELEASE_RECONCILIATION_2026-10-07.md` and its machine-readable reconciliation ledger before making another change. PR #59 remains rejected, not a pending improvement.

## Release checklist

1. Run full Node tests, data validation, generated coverage/freshness checks and asset hashing on the exact candidate.
2. Run real Chromium and WebKit scenarios, including all-equation MathJax conversion and explicit CQ runtime-string assertions.
3. Inspect desktop/mobile screenshots before publishing, then verify hosted assets against the merged revision and smoke-test the changed routes.
4. Only after integration succeeds, close #60/#61 as superseded without deleting the preserved branches.

## Implemented follow-up (release checks still required)

The single-table Passport comparison and source-located Quantum Zeno representative are implemented in a separate follow-up. See `RELEASE_COMPARE_ZENO_2026-10-07.md` and `COMPARE_ZENO_2026-10-07.json`. Do not repeat these as missing features. Merge/deployment verification is recorded in the corresponding PR discussion; code presence alone is not a hosted acceptance receipt.

## Product and curation queue

1. Expand curated Passport coverage beyond the ten hubs, using the implemented comparison workflow to identify useful gaps.
2. Continue a coherent canonical-formula batch after the now-curated Zeno representative; never attach an arbitrary equation simply to reduce a gap counter. Current documented formula gaps: 170.
3. Review baseline formula metadata and equation-level source locations in bounded, explicitly recorded batches. An `explicit` label does not certify the entire paper.
4. Upgrade high-value editorial relationships only when the citation establishes that precise directional relation.
5. Expand reading profiles, Passports and Evidence where they support major learning paths and useful comparisons; do not drift into gravity-only coverage.
6. Reconcile the September 27 PBS-discovery audit against actual current catalog identities before adding duplicate cosmological frameworks.
7. Continue the gravity model-by-observable matrix as a research product. Track source-supported predictions, parameter dependence, non-derived cells and disputes. A finite matrix is not exhaustive and must not claim universal model exclusions.

## Locked operating constraints

Preserve current app design and workspace semantics. No opportunistic dependency changes or loader rewrite. Keep research proposals distinct from accepted equations and observed results. Leave existing Pages publishing and repository settings unchanged; a deployment gate or alternative sharing origin requires a separate infrastructure decision. Do not call the scientific census complete while documented gaps remain.
