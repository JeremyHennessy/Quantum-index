# Quantum Index — current continuation plan

Updated 8 October 2026. This is the single continuation entry point; dated release/research notes remain the audit trail. Runtime counts below are generated and checked by CI.

## Current inventory (generated; not a scientific quality score)

<!-- coverage:start -->
- **59** cited reading profiles and **5** learning paths
- **23** Theory Passports, **5** scientific Problems, **16** Evidence records and **60** structured Research Questions
- **481** theory/framework entities across **14** categories
- **549** bibliography records
- **352** primary-sourced; **129** review-sourced; **0** catalogued-only entries
- **610** relationships: **122** source-backed; **488** editorial
- **41** thought trees
- **405** formulas across **29** categories
- **272** entries with linked formulas; **163** documented formula gaps
- Other audit classes: **11** interpretations, **16** conceptual, **18** theorem-first, **1** thought experiment
- Formula metadata: **150** explicitly reviewed; **255** baseline records
- **16** reviewed DevelopmentEvents through **2026**

Source attachment and formula presence are structural coverage measures, not verification of every claim or complete mathematical coverage.
<!-- coverage:end -->

This block is generated from shipped runtime data by `scripts/coverage-report.mjs`; the existing CI coverage check fails if it drifts. Historical release-specific counts remain in the dated receipts, not in this active plan.

## Verified preceding release

PR #62 merged at `3a61dc9319a45a432e3d6753fc428347de5dffbe`; #63 merged at `462f2d96649f3c030c06fe35b537d3fd1599d90a`. Hosted verification and rollback receipt: PR #63 comment `6046478062`. #60/#61 are closed as superseded; do not merge them again.

The reconciliation release combines the distinct useful content from PRs #60 and #61 while retaining the `cbe65b1f30216565fd93aea838264a4f9838bc6c` UI and browser-local workspace baseline. Read `RELEASE_RECONCILIATION_2026-10-07.md` and its machine-readable reconciliation ledger before making another change. PR #59 remains rejected, not a pending improvement.

## Release checklist

1. Run full Node tests, data validation, generated coverage/freshness checks and asset hashing on the exact candidate.
2. Run real Chromium and WebKit scenarios, including all-equation MathJax conversion and explicit CQ runtime-string assertions.
3. Inspect desktop/mobile screenshots before publishing, then verify hosted assets against the merged revision and smoke-test the changed routes.
4. Only after integration succeeds, close #60/#61 as superseded without deleting the preserved branches.

## Implemented and verified Compare/Zeno follow-up

The single-table Passport comparison and source-located Quantum Zeno representative are implemented in a separate follow-up. See `RELEASE_COMPARE_ZENO_2026-10-07.md` and `COMPARE_ZENO_2026-10-07.json`. Do not repeat these as missing features. Merge/deployment verification is recorded in the corresponding PR discussion; code presence alone is not a hosted acceptance receipt.

## Verified lattice batch

The five SSH/Aubry–André/Holstein representatives and three matching Passports are implemented. See `RELEASE_LATTICE_CURATION_2026-10-07.md` and `LATTICE_CURATION_2026-10-07.json`. Merged as `197aa15c57d2a43d098f43a21f6ec0514f349bba`; complete tests and hosted acceptance are recorded in PR #64 comment `6047147501`. Old review dates are preserved; only two renderer date fallbacks change.

## Verified AMO / steering batch

Four formula cards and two Passports are implemented for Fano resonance and quantum steering. Read `RELEASE_AMO_STEERING_2026-10-07.md` and the corresponding ledger. Merged as `4034edd3bd3f631c67b12255193d203beff234df`; exact-head and hosted acceptance are recorded in PR #65 comment `6047775725`. No UI, storage, graph-edge or earlier scientific-record changes.

## Bell metadata review

Four existing formula records now have source-located assumptions, variables, normalizations and limitations, with their equations and stable identities unchanged. One Bell Passport reuses these cards and the existing experimental Evidence record. Read `RELEASE_BELL_METADATA_2026-10-07.md` and `BELL_METADATA_2026-10-07.json`; check the corresponding PR receipt for exact-head and hosted acceptance. The ledger stores before/after fingerprints and the full prior metadata. No app, CSS, storage, graph or publishing changes.

## Verified directional relationship evidence release

PR #67 promoted exactly four existing editorial directional edges after relationship-specific source review and merged as `ade091a5d4119a21dad148326a4546d313c1c813`. The release preserved all 610 relation identities/endpoints/types while moving the evidence census to 122 source-backed / 488 editorial. Exact-tree Node/Chromium/WebKit checks and fresh hosted desktop/mobile checks passed before this state was treated as verified. See `RELEASE_RELATION_PROMOTIONS_2026-10-07.md`, `RELATION_PROMOTIONS_2026-10-07.json` and PR #67 for the audit trail and rollback boundary.

Do not re-add the four promoted edges or convert remaining editorial links by inference from node-level sources. Future provenance rounds should continue source-specific directional review and intentionally leave useful conceptual overlaps editorial when no publication establishes the claimed direction.

## Merged multidomain scientific-depth release (2026-10-08)

PR #69 merged as `b8827b151d46a7332e062e76a36ab6271d621c46`, adding seven comparison-ready Passports, three source-located formulas, six source records and three Evidence records across many-body physics, AMO, quantum chemistry/electronic structure, neutrino physics and scalar–tensor gravity. The two formula closures reduce documented gaps by two without adding theory entities. The merged commit preserves the renderer, styles, workspace, theory identities and relationship identities. Read `RELEASE_MULTIDOMAIN_DEPTH_2026-10-08.md` and `MULTIDOMAIN_DEPTH_2026-10-08.json`.

The exact PR head passed 116 Node checks, the full 50-test Chromium/WebKit suite, and a separate pinned-image 50-test independent browser suite. The native Pages workflow reported deployment success on the merged SHA. Keep post-merge validation and fresh hosted-route/asset verification as separate acceptance evidence; green PR tests and a successful deployment event alone do not establish all hosted behavior. Existing UI and workspace semantics remain locked.

## Product and curation queue

1. Continue Passport depth beyond the generated count above using the same source-scoped comparison workflow; next hubs should fill quantum information, black-hole/cosmology, nuclear and additional chemistry/many-body gaps rather than duplicate this batch.
2. Continue coherent source-located formula and metadata batches; never attach an arbitrary equation simply to reduce a gap counter. Use the generated inventory above for the current formula-gap and baseline-metadata counts. Fano, steering, Bell/CHSH and the recent lattice representatives are already implemented; do not duplicate them.
3. Review baseline formula metadata and equation-level source locations in bounded, explicitly recorded batches. An `explicit` label does not certify the entire paper.
4. Continue bounded relationship-provenance rounds only when a citation establishes the precise directional relation; use the current sourced/editorial counts in the generated inventory above.
5. Expand reading profiles, Passports and Evidence where they support major learning paths and useful comparisons; do not drift into gravity-only coverage.
6. Reconcile the September 27 PBS-discovery audit against actual current catalog identities before adding duplicate cosmological frameworks.
7. Continue the gravity model-by-observable matrix as a research product. Track source-supported predictions, parameter dependence, non-derived cells and disputes. A finite matrix is not exhaustive and must not claim universal model exclusions.

## Locked operating constraints

Preserve current app design and workspace semantics. No opportunistic dependency changes or loader rewrite. Keep research proposals distinct from accepted equations and observed results. Leave existing Pages publishing and repository settings unchanged; a deployment gate or alternative sharing origin requires a separate infrastructure decision. Do not call the scientific census complete while documented gaps remain.
