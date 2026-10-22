# Quantum Index — current continuation plan

Updated 21 October 2026. This is the single continuation entry point; dated release/research notes remain the audit trail. Runtime counts below are generated and checked by CI.

## Current inventory (generated; not a scientific quality score)

<!-- coverage:start -->
- **62** cited reading profiles and **7** learning paths
- **35** Theory Passports, **9** scientific Problems, **21** Evidence records and **60** structured Research Questions
- **483** theory/framework entities across **14** categories
- **601** bibliography records
- **354** primary-sourced; **129** review-sourced; **0** catalogued-only entries
- **614** relationships: **130** source-backed; **484** editorial
- **41** thought trees
- **457** formulas across **30** categories
- **323** entries with linked formulas; **114** documented formula gaps
- Other audit classes: **11** interpretations, **16** conceptual, **18** theorem-first, **1** thought experiment
- Formula metadata: **265** explicitly reviewed; **192** baseline records
- **16** reviewed DevelopmentEvents through **2026**

Source attachment and formula presence are structural coverage measures, not verification of every claim or complete mathematical coverage.
<!-- coverage:end -->

## Accepted release baseline: 21 October 2026

- Earlier releases through PR85, including QEC and Yang–Mills source-qualified Passports, are already accepted. They are not pending additions.
- PR86 recovery preserves its four source-qualified formulas and repairs formula cards to expose every exact citation locator. Its exact-head CI, main and hosted acceptance are tracked separately from the follow-on campaign.
- PR86 recovery is accepted: PR and merged-main validation/browser gates passed; Pages deployment and served application/scientific-file hashes were verified at merge commit `649aa3cf46a640029b4dcbd7fee9dd875b31f6c1`.
- The cosmology block is accepted in [PR89](https://github.com/JeremyHennessy/Quantum-index/pull/89). It integrates six cosmology Passports, model-specific equation representatives, four explicit perturbation metadata reviews, linked empirical constraints and scientific Problems. Evidence retains its dataset dates, confidence levels, model assumptions and explicit nonclaims. Exact-head and merged-main checks, Pages deployment and served-file hashes passed at merge `9bae6d90fe2b1163d65926f6d01635cb0428ba75`.
- EFT of inflation and transient scalar early dark energy are distinct, source-qualified additions, not evidence of empirical completion. Generic early dark energy has an earlier history; the transient scalar entry does not claim to originate that whole family.
- Candidate dispositions and dependencies are recorded in [CAMPAIGN_CANDIDATE_DISPOSITIONS_2026-10-21.json](../research/CAMPAIGN_CANDIDATE_DISPOSITIONS_2026-10-21.json). Deferred frameworks are not silently counted as shipped.
- Release acceptance requires independent scientific review, current-runtime schema/reference tests, exact historical-prefix and record guards, Node regressions, Chromium/WebKit MathJax and responsive checks, then main/deployment verification. This candidate is not declared published merely because it exists locally.

## Broader completion block

[PR90](https://github.com/JeremyHennessy/Quantum-index/pull/90) is accepted, not pending. It merged at `3530ab3f8a3f2b7ce94109951de862bc2937925d` after 181 Node and 184 Chromium/WebKit tests on the exact candidate. Merged-main validation run 39544792420 and Pages run 39544791900 succeeded; nine served application/data files were checked against the accepted release. Eighteen existing entries received source-qualified representative equations; fifteen foundation records received scope clarifications while retaining baseline review status at that dated checkpoint. Those historical receipts remain unchanged.

## Current implementation: inspectable research navigation and foundational source audit

This follow-on implementation audits those fifteen foundation records against four inspected authoritative lecture-note references. It preserves their IDs, equations and theory links, distinguishes retained historical provenance from newly inspected sources, and promotes only the reviewed metadata to explicit status. This is equation-level documentation, not primary-original-source verification or empirical validation.

The atlas still has 457 formulas and 114 representative-formula gaps. This release adds no theory, formula or Evidence records. It adds a sixth editorial learning path, from primordial fluctuations through transfer physics to conditional CMB and large-scale-structure inference, reusing existing Evidence and Problems. Two explicitly qualified directed relations are documented; the study-step order does not generate graph edges.

Network now offers a source-backed directed-path search using the same pure engine as the CLI. It respects stored direction, shows every source locator, excludes editorial fallback and reports bounded no-path or zero-edge results honestly. Coverage adds factual record-level provenance, formula-review, Passport, Evidence and relationship inspection. Neither tool awards a scientific validity score or treats a path as proof.

Release verification requires independent review, current-runtime and historical-integrity tests, exact-head Chromium/WebKit checks, merged-main CI, Pages deployment and served-file verification. Consult the implementation pull request’s acceptance receipt for exact commits, run results and hosted verification; these instructions do not assert publication of an unverified revision. Dated historical ledgers remain unchanged. The separate academic-roadmap PR87 remains untouched and is not part of this release.

Subsequent scientific priorities are the remaining documented formula gaps, exact source-depth review of baseline metadata, qualified observational updates and deferred framework dispositions. Exploratory hypotheses belong in a separate research record until evidence supports catalog inclusion.

## Historical release notes

The dated notes below preserve the original candidate receipts. Their pending-language describes the state at authorship, not the active queue; consult the current status above.

## 2026-10-17 Cosmology gap closure candidate: dark energy, dark matter production, leptogenesis

Four new, distinct, source-located equations now address currently uncovered existing theory entries: `k-essence` (factorized pressure, density and effective scalar sound speed), `chaplygin-gas` (original fluid equation of state and conserved FLRW background), `freeze-in-dark-matter` (parent-decay FIMP production collision term) and `leptogenesis` (heavy-neutrino flavour-dependent CP decay asymmetry). Already registered original sources for k-essence and FIMP freeze-in are reused; two new bibliography records qualify the original Chaplygin 2001 paper and Davidson–Nardi–Nir 2008 leptogenesis review. The mathematical equation locations were independently inspected and every claim is scoped to its source's assumptions. No new experimental Evidence is invented.

**Candidate metrics:** 419 formulas, 285 formula-linked theories, 150 documented formula gaps, 560 bibliography records, 170 explicitly reviewed / 249 baseline formula metadata, 481 theory entities, 29 Passports and 610 directed relations. Earlier scientific/data files are protected with exact Git blob prefixes. The 21 October repair exposes every exact source locator instead of only the first locator per source; an exact before/after renderer projection preserves immutable historical checks. CSS, workspace and historical ledgers are unchanged. This batch remains **unmerged pending exact-head scientific and browser validation, followed by merged-main and hosted checks**. See [source review](../research/COSMOLOGY_SOURCE_REVIEW_2026-10-17.md) and [remaining cosmology gaps and expansion queue](../research/COSMOLOGY_EXPANSION_QUEUE_2026-10-17.md).

## 2026-10-16 MOND and Starobinsky R² — dependent scientific candidate

Two mathematically explicit first representatives are appended for `mond` and `starobinsky-inflation`, with **no new bibliography** because the original Milgrom (1983) and De Felice–Tsujikawa (2010) sources already exist. Milgrom's original *Astrophysical Journal* printed p. 366, Eq. (1) and immediately following limiting μ behavior supply an effective nonrelativistic working relation, **not** a finished N-body or covariant theory. The 2010 *Living Reviews* Section 3.1 Eq. (3.6) supports the metric Starobinsky `f(R)=R+R²/(6M²)` model function as a specific curvature action choice, **not** a claim of experimentally unique inflation.

**Release dependency:** this candidate descends from the still-verifying PR #84 branch. It must not merge ahead of PR #84, and must be reconciled to the accepted main Git tree with its own Node, generated coverage, Chromium/WebKit and hosted acceptance. Cumulative *candidate-only* metrics: **415 formulas, 281 formula-linked theories, 154 documented formula gaps, 166 explicit / 249 baseline metadata**; **558** bibliography records, **481** theories, **29** Passports, **610** relationships and **16** Evidence items unchanged. See [MOND_STAROBINSKY_SOURCE_REVIEW_2026-10-16.md](../research/MOND_STAROBINSKY_SOURCE_REVIEW_2026-10-16.md).

## 2026-10-16 Stochastic-inflation and preheating formula wave — acceptance candidate

A source-specific extension proposes **three new formula records covering two existing theory gaps**: the e-fold-time Langevin equation and Itô Fokker–Planck equation for `stochastic-inflation`, and the friction-rescaled daughter-field oscillator mode equation for `reheating-preheating`. All three are independently matched to *original theory papers* and have source-specific notation, assumptions and validity limits. The Vennin–Starobinsky source is explicitly leading slow roll with N=ln a, Itô probability interpretation and **reduced M_Pl** (unlike the PDG 2025 potential slow-roll formula); the Kofman–Linde–Starobinsky mode treatment retains residual expansion/curvature term Delta and does not substitute the static Mathieu equation for broad expanding-universe resonance.

Candidate metrics: **413** formulas, **279** formula-linked theories, **156** gaps, **558** bibliography sources, **164 explicit / 249 baseline** formula metadata, existing 481 theory IDs, 29 Passports, 610 graph relationships and 16 Evidence unchanged. All pre-existing source and mathematical record bytes are preserved with exact parent-blobs and test-only history reconstruction. This is *not* a deployed status: require branch-level Node, generated coverage/freshness/asset and Chromium/WebKit testing, and then merged-main and hosted acceptance before declaring publication. Primary equation locations and nonclaims: [source review](../research/STOCHASTIC_PREHEATING_SOURCE_REVIEW_2026-10-16.md).

## 2026-10-16 Two further dark-matter model formulas — dependent candidate

A second independent source review prepared two additional *model-scoped* formula cards: a single self-conjugate thermal WIMP annihilation Boltzmann equation, sourced to Arcadi et al. (2018), Sec. 2 Eq. (1), and the stationary nonrelativistic Schrödinger–Poisson eigenproblem of fuzzy/ultralight dark matter, sourced to Hui et al. (2017), Appendix B Eq. (B1), printed p. 24. Neither a WIMP discovery nor evidence for ultralight scalar dark matter is claimed. The original 408 equations and bibliography entries from PR #82 are retained byte-for-byte.

This **dependent branch** starts at PR #82 exact head, *not at the production main baseline*. It must not be merged or presented as published until PR #82 is accepted, its content reconciled to merged main, and independent CI/browser/hosted checks pass. Proposed cumulative metrics: **410** formulas, **277** formula-linked theories, **158** documented gaps, **556** sources, **161 explicit / 249 baseline** formula metadata; theories **481**, Passports **29** and relationships **610** unchanged. Source and model-accuracy boundaries: [dark-matter source review](../research/ASTRO_DARK_MATTER_SOURCE_REVIEW_2026-10-16.md).

## 2026-10-16 Astroparticle formulas — candidate source review

Three **new** source-reviewed equations are appended to existing entries, with full mathematical conventions and no changes to prior equation strings: `lambda-cdm-redshift-expansion` (ΛCDM component-resolved background E(z)), `inflation-potential-slow-roll-2025` (single-canonical-field PDG unreduced-Planck potential slow-roll), and `quintessence-canonical-fluid-2008` (homogeneous canonical field ρ, p and w). Primary existing theory IDs are `lambda-cdm`, `inflationary-cosmology`, and `quintessence`. Source locations were inspected directly in 2025 PDG reviews and the Fermilab-hosted Frieman–Turner–Huterer 2008 review. The ΛCDM redshift formula is explicitly flagged as a reviewer's component-wise derived combination, not a verbatim PDG equation.

Candidate metrics: **408** formulas, **30** formula categories, **275** formula-linked theory entries, **160** documented formula gaps, **554** registered sources, **159 explicit / 249 baseline** formula metadata, Passports **29** unchanged. No other scientific entities, existing equation bytes, graph relationships, Evidence or UI elements are changed. See [ASTROPARTICLE_FORMULA_SOURCE_REVIEW_2026-10-16.md](../research/ASTROPARTICLE_FORMULA_SOURCE_REVIEW_2026-10-16.md). Exact-head CI, desktop/WebKit and subsequent main/hosted acceptance are required; this is candidate documentation, not a deployment assertion.

## 2026-10-16 Yang–Mills source-qualification candidate

Two existing formula expressions (`yang-mills-field`, `yang-mills-lagrangian`) have source-reviewed **metadata only**; mathematical strings and formula identities are unchanged. Independent comparison of Yang–Mills (1954), printed p. 193 Eqs. (4), (7), (9), (11), with university QFT Lecture 15 pp. 9–11 established the exact index-orientation and covariant-derivative sign mapping. In modern D=partial−igA notation the nonlinear component term is **+g f A A**; with the original A=2b normalization F_modern=−F_original. Neither sign is presented without its conventions. One comparison-ready Yang–Mills Passport is added with no empirical Evidence claim or unproven mass-gap assertion.

Candidate metrics: **29** Passports, **551** bibliography records, **156 explicit / 249 baseline** formula metadata. Theories 481, formulas 405, gaps 163 and relationships 610 remain unchanged. All pre-candidate theory/formula/Passport files are protected by byte-level baselines, and historic receipts remain immutable. Publication is **pending exact-head Node/browser validation and subsequent hosted checks**; see [independent source review](../research/YANG_MILLS_SOURCE_REVIEW_2026-10-16.md).

## Scientific completeness campaign — 16 October 2026

The current prioritized, read-only-baseline campaign is in [SCIENTIFIC_COMPLETENESS_CAMPAIGN_2026-10-16.md](SCIENTIFIC_COMPLETENESS_CAMPAIGN_2026-10-16.md). Phase 1 corrects misleading freshness semantics without changing the science corpus or approved UI. Historical `theory.lastReviewed` values reflect catalog/source attachment; a literature sweep is unknown unless documented independently (see [FRESHNESS.md](FRESHNESS.md)).

Next content gates remain **Yang–Mills and quantum error correction** source qualifications; neither held Passport is implicitly accepted. Then prioritize source-specific astroparticle formulas, formal-QFT and many-body equation gaps, metadata reviews, empirical constraints and directional graph provenance. Every batch must preserve identity, existing scientific review bytes and app/workspace behavior unless a source-located correction is explicit and tested.

This block is generated from shipped runtime data by `scripts/coverage-report.mjs`; the existing CI coverage check fails if it drifts. Historical release-specific counts remain in the dated receipts, not in this active plan.

## 2026-10-16 QEC original-theorem qualification candidate

The scientific-completeness campaign directly inspected Knill–Laflamme arXiv:quant-ph/9604034v1, Sec. 3.2 Theorem 3.2 Eqs. (19)–(20), printed p. 13. The existing `knill-laflamme` formula now directly cites its original theorem, with bounded exact-recovery assumptions and unchanged mathematics. One QEC Passport is appended, with zero new empirical Evidence. All earlier 27 Passport bytes and all 405 formula identities are protected. Candidate inventory: **28 Passports, 154 explicit / 251 baseline formula metadata**. Yang–Mills remains on hold. This is not a deployment claim; acceptance requires exact-head CI and hosted verification. See [QEC_SOURCE_REVIEW_2026-10-16.md](../research/QEC_SOURCE_REVIEW_2026-10-16.md).

## 2026-10-14 QED / GKSL source qualification

Intake main was `d2a9f204cdd664b2751669aea0d229fc3188b79e` (merged PR #77); no open PRs at intake. A subsequent Actions/branch audit found unpublished `science/four-passports-20261013` at `e30f090`. That candidate had passed non-browser preparation run [38341887618](https://github.com/JeremyHennessy/Quantum-index/actions/runs/38341887618), but was neither merged nor browser-accepted. This release reuses its QED notation work and historical reconstruction, independently qualifies **QED and GKSL only**, and records the reconciliation in `research/PASSPORT_SOURCE_REVIEW_2026-10-14.md` / `.json`.

Current release: **27 Passports**, **550 sources**, **153 explicit / 252 baseline formula metadata**. Existing counts of 481 theories, 405 formulas, 610 relations and 16 Evidence records stay unchanged. The QED Lagrangian now uses explicit natural-unit conventions; two other existing cards receive qualified metadata, with the free-propagator slash expanded to gamma^mu p_mu for correct MathJax rendering. All 25 preceding Passport bytes, unrelated scientific records, UI and workspace semantics are preserved. Original review ledgers remain historical.

Remaining Passport holds: **Yang–Mills and quantum error correction**. Do not merge the older four-Passport candidate wholesale: it overlaps this release, includes an unqualified Yang–Mills sign convention and contains stale GKSL locators/comparison identity. QED's precision-experiment and broad nonperturbative claims remain outside this formal Passport qualification; no Evidence record is invented.

Validation on scientific head `25c8d38bb27a496116f57a70d64945c19088e54d` (tree `2bf8295128cfb2592031a430d02e90112b6892fe`): **142 Node tests passed, 0 failed**; catalog integrity/scientific-data validation, generated coverage/freshness and content-hashed assets passed. [CI run 38642055503](https://github.com/JeremyHennessy/Quantum-index/actions/runs/38642055503) passed **all 52 Chromium/WebKit tests**, including conversion checks for all 405 formulas, the new comparison/source-link checks and explicit rejection of red unknown-command output in the QED formulas. Desktop 1280px and mobile 390px screenshots were inspected; artifact `11930427798` contains the browser report.

Pre-release QA caught two separate issues: initial run 38639875577 had 50 passes and two failures caused by a misplaced new-test source-link selector; after that correction, run 38640790043 passed 52 tests but visual inspection exposed the pre-existing unsupported `\slashed` macro. The equivalent explicit gamma contraction and stronger rendering assertion passed the final run above. Original scientific records and UI behavior remain protected by regression fingerprints.

The final pre-merge head `2f86c1fc04b4ae8c827ac178193b2f6a325e2aef` changed only this continuation receipt and passed all **142 Node tests, 0 failed**, plus `npm run validate`. Its runtime assets and browser tests are identical to the accepted scientific head.

### Merged and hosted acceptance — 14 October 2026

[PR #78](https://github.com/JeremyHennessy/Quantum-index/pull/78) merged as `290c1ac68677b2d2266a2e11d15be3f23c3075a4`; the merged file tree matched the final local candidate exactly. Native [Pages run 38643345039](https://github.com/JeremyHennessy/Quantum-index/actions/runs/38643345039) completed successfully. On 14 October, approximately 21:52–21:53 UTC, all **15/15 checked hosted files matched the merged revision byte-for-byte**: `index.html`, `app.js`, `styles.css`, `theories.js`, `formulas.js`, `formula-audit.js`, `developments.js`, `questions.js`, `problems.js`, `evidence.js`, `passports.js`, `profiles.js`, `workspace.js`, `docs/coverage.json` and `docs/responsive-check.html`.

Fresh hosted Chrome checks confirmed the 27-Passport inventory; GKSL/open-system/non-Markovian comparison; QED/Dirac/Yang–Mills comparison; GKSL detail navigation and original-source locators; and both explicitly reviewed QED formula cards with two MathJax outputs and zero red unknown-command/error nodes. The 390px verification frame displayed the corrected propagator and preserved document containment (375px client/scroll width after its scrollbar). Screenshots were inspected. This fixed-width hosted check is not native iOS emulation; the separate passing CI WebKit suite provides that engine coverage. No application-origin browser errors were observed.

The post-merge [Validate catalog run 38643345160](https://github.com/JeremyHennessy/Quantum-index/actions/runs/38643345160) is additional automatic revalidation; the completed pre-release and hosted acceptance evidence is specified above. This receipt changes documentation only. Pages publishing settings and workflows remain unchanged.

### Next scientific-depth work

1. Finish Yang–Mills source qualification, including the covariant-derivative/curvature sign relationship, before lifting its hold.
2. Independently qualify QEC recovery-condition and stabilizer source locations; reuse the unpublished candidate only after checking its claims.
3. Add source-specific empirical Evidence separately from formal Passport qualification; then follow the product queue below.

## 2026-10-11 source-reviewed nuclear Passport batch

This tree includes **two additive Theory Passports** (`nuclear-shell-model` and `in-medium-srg`), supported by inspected sections/equations of Stroberg et al. (2019) and Hergert (2016). The existing 23 curated Passport records remain byte-for-byte intact. See `research/PASSPORT_SOURCE_REVIEW_2026-10-11.md` and its JSON record for exact locators, explicit evidence nonclaims, discriminators, and four deferred candidates. **Historical release Passport count: 25**; four scoped candidates remained unshipped at that checkpoint (superseded by the October 14 disposition above). The October 8 scope JSON retains its historical pre-review status and is not retroactively edited. No experimental Evidence was created.

## 2026-10-11 live-main reconciliation (recorded baseline: `e1520a6c4b09cd425629825038dd0e190878024d`)

The repository main ref was checked against the handoff and was unchanged. PRs #69–#75 are merged; no open PRs were present at this checkpoint. The generated inventory above is current. PR #69 shipped seven Passports, three formulas and three Evidence records; #70 generated continuation metrics; #71 independently reviewed three directional relations; #72 added the read-only category-trust census; #73 added the read-only source-only path engine; #74 promoted three reviewed relations, reaching **125 sourced / 485 editorial**; and #75 **only scoped** six Passport candidates.

At that pre-PR #77 checkpoint, the six `research/PASSPORT_CURATION_QUEUE_2026-10-08.json` candidates were unshipped. This historical count is superseded by the October 11 and October 14 review decisions above. The category census and path engine are Node tools, **not user-facing app views**. PRs #59–#61 remain superseded/closed.

Recorded latest main workflows: Validate catalog run [37838463196](https://github.com/JeremyHennessy/Quantum-index/actions/runs/37838463196) and Pages run [37838461958](https://github.com/JeremyHennessy/Quantum-index/actions/runs/37838461958), both success on the recorded main. This is workflow/deployment evidence only, **not** a fresh hosted-browser acceptance check. Release-specific historical receipts and counts are unchanged.

### Next bounded releases (evidence gates apply independently)

1. Complete the remaining source-qualified Passport queue identified above, preserving all existing Passport records.
2. Add an isolated Coverage/Trust drill-down using `scripts/category-trust-census.mjs` with record-level gap links and explicit non-additivity; no invented quality score.
3. Surface `scripts/sourced-paths.mjs` as a source-only directed-path analytical control with no editorial fallback; preserve existing Network layout.
4. Deepen coherent formula/metadata batches and Evidence/Problem records only after source-specific review.
5. Continue the open exhaustiveness disposition queue, then address PR-only workflow concurrency without cancelling main validation/deployment.

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

The five next bounded releases and their scientific/visual boundaries are recorded in the **2026-10-11 live-main reconciliation** above. The current generated counts, not dated release counts, define outstanding formula, Passport, Evidence and provenance coverage. Continue to distinguish domain breadth from mathematical depth and experiment-backed evidence from source attachment.

The gravity model-by-observable matrix remains a research product: track source-supported predictions, parameter dependence, non-derived cells and disputes. Do not claim that a finite matrix gives universal exclusions. Reconcile PBS-discovery candidates with existing theory IDs before promotion.

## Locked operating constraints

Preserve current app design and workspace semantics. No opportunistic dependency changes or loader rewrite. Keep research proposals distinct from accepted equations and observed results. Leave existing Pages publishing and repository settings unchanged; a deployment gate or alternative sharing origin requires a separate infrastructure decision. Do not call the scientific census complete while documented gaps remain.
