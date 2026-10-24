# Quantum Index — Academic & Research Edition: product roadmap

**Status:** PROPOSAL / FUTURE BACKLOG ONLY (21 October 2026). This document is product planning, not an approved scientific result, feature implementation, institutional partnership, deployment, or change to the current product's accepted UI.

**Repository intake:** `main` at `e2cea285d1e49c1a9ac0ff7e9207a9c9cb162526`, read 21 October 2026. Recheck current `main` and `docs/CONTINUATION.md` before implementing anything. Existing science release candidates, including PR #86 at intake, remain independently gated; do not merge or rewrite them to accommodate this plan.

**Relationship to existing work:** This is a *parallel, subordinate product-discovery track* to [the scientific completeness campaign](SCIENTIFIC_COMPLETENESS_CAMPAIGN_2026-10-16.md), not a replacement. The active delivery source remains [CONTINUATION.md](CONTINUATION.md). Approved layout, interactions, workspace behavior, data/model boundaries, publishing, mathematical content, historical ledgers, and release checks remain locked until separately reviewed and explicitly authorized.

## 1. Product thesis and positioning

**Mission:** Help students, instructors and interdisciplinary researchers navigate quantum and adjacent theoretical physics **without obscuring assumptions, provenance, evidence quality or disagreement**.

**Positioning:** A *source-aware, interactive atlas and learning/research workbench* connecting theories, representative equations, historical lineage, experimental evidence, open scientific problems, and the original literature. It is **not** a quantum-computer emulator, symbolic derivation engine, replacement for research papers, automated proof checker, or authority on which speculative theory is true.

The user's academic product idea is promising, but **demand is unvalidated**. Do not imply universities, faculty, students or researchers already use, endorse, requested or will purchase the app. An early pilot must test that proposition before major institutional infrastructure work.

### Why the product might be distinctive

- One graph crosses quantum foundations, QFT, information, AMO, condensed matter, gravity, cosmology, chemistry and nuclear physics instead of limiting the experience to quantum-computing hardware.
- Equations are linked to source IDs, roles, assumptions and applicable regimes rather than being presented as universal formulas.
- Directed historical/formal relationships explicitly separate documented support from editorial interpretation.
- Theory Passports, Problems, Evidence and Research Questions can support both structured teaching and transparent research orientation.
- Users can compare frameworks and follow multiple development paths without flattening interpretations, conjectures and experimentally established results.

No claim of unique capability or educational effectiveness is made without direct competitor/participant testing.

## 2. Starting point: what exists versus what does not

As documented by the repository's generated census at intake (inventory **not** a scientific quality score):

| Existing in current application/data | Important current constraint |
| --- | --- |
| 481 theory/framework entries in 14 categories; 558 bibliography records | Breadth does not establish exhaustive scientific coverage or full source verification |
| 415 formula cards; 281 theories with a linked formula | 154 documented formula gaps; conceptual/theorem/interpretation records should not be assigned artificial formulas |
| 610 typed graph relationships and 41 thought trees | 125 source-backed edges, 485 explicitly editorial; source attachment to a node does not validate an edge |
| 29 comparison-ready Theory Passports | Other entries may have simpler profiles/summary, not equivalent Passport-level depth |
| 59 cited reading profiles and five existing learning paths | Not yet course-assignment, prerequisite, quiz or classroom authoring systems |
| Five scientific Problems, 16 Evidence and 60 Research Questions | Evidence is heterogeneous; none should be silently upgraded to empirical confirmation |
| Search, filters, timelines, graph, formula atlas, compare, coverage | No integrated mathematical derivation engine or physics simulator is claimed |
| Browser-local notes, reading markers, saved comparisons, JSON and Markdown export | No institutional login, server synchronization or classroom roster handling |

For authoritative live counts, use the generated section of [CONTINUATION.md](CONTINUATION.md) or [COVERAGE.md](COVERAGE.md), **not** the historical figures above. Do not rewrite existing exported workspace formats or user data to implement a new educational surface.

## 3. Core users and real workflows

### A. Undergraduate learner

**Job:** “I understand the Schrödinger equation but not its relationship to measurement, density operators, entanglement, Bell inequalities or open-system dynamics.”

- Start with a 20–35 minute *learning module* using existing source-linked entries.
- Show prerequisites, learning objectives, simple visual navigation, progressively revealed assumptions and a worked representative calculation.
- Include a small checkpoint asking the learner to interpret results, not simply memorize vocabulary.
- End with primary/reference sources, conceptual limitations and links into the full theory graph.

**Evidence of value:** Correctly explains key assumptions and finds a cited primary source; can complete an assigned navigation task without an instructor's intervention.

### B. Graduate learner entering a neighboring field

**Job:** “I know closed-system unitary dynamics; where does Lindblad/GKSL apply and where does it break down?”

- Compare GKSL against a suitable non-Markovian/open-system framework **within a shared problem class**.
- Display object, evolution law, positivity/complete-positivity assumptions, regime, approximations, physical observables, representative sources, known limitations and unresolved interpretation.
- Link exact equation locators and explicitly mark unsupported comparison cells.

**Evidence of value:** Can identify a false equivalence and cite an applicable regime rather than using a familiar equation out of scope.

### C. Instructor

**Job:** “Assign a focused sequence and show students how to trace theory claims back to sources.”

- Assemble a shareable *course pack* from stable existing theory/formula/Passport IDs.
- Reorder steps, state prerequisites/objectives, link sources, and export a static reading list/printable notes.
- Use the current compare and graph views in lecture with focused, URL-restorable selection.
- Collect voluntary structured feedback without collecting a gradebook or student identity in the first release.

**Evidence of value:** Instructor can create and distribute a useful lesson with no manual source copying, and would voluntarily reuse it.

### D. Researcher or interdisciplinary visitor

**Job:** “Give me a defensible map from a broad problem to the relevant equations, limitations, papers and open questions.”

- Follow **source-only** relationship paths with an option to include visibly marked editorial edges, never silently converting one into another.
- Build a side-by-side *assumption matrix*, identify the first source for a mathematical statement and export citations/IDs.
- Trace from a theory to linked Evidence, Problems and Questions; distinguish theoretical results from observations.

**Evidence of value:** Faster, more accurate initial literature orientation—not an assertion that the app can perform or validate novel research.

## 4. Proposed feature system (explicit implementation status)

The following items are **proposed**, not shipped merely because they appear here.

| Track | Feature | Reuse first | Priority |
| --- | --- | --- | --- |
| Scientific trust | **Passport v2 teaching/research annotations:** canonical objects, assumptions, domain, limiting cases, failure modes, source locator, last *qualified* review | Existing Passports, formulas, provenance states | P0–P1 |
| Scientific trust | **Source/audit lens:** click claim → equation/source locator → support type → editorial caveat; report an issue | Bibliography, current edge evidence and coverage UI | P0–P1 |
| Scientific trust | **Research-grade citation export:** selected references to verified DOI, BibTeX and CSL JSON where metadata supports it; round-trip test with Zotero | Existing bibliography, Markdown export | P1 |
| Learning | **Course modules:** named lesson, intended level, objectives, prerequisites, stable steps referring to current IDs, further reading | Five existing paths; URL hash routes | P1 |
| Learning | **Checkpoints and worked examples:** authored/rubric-reviewed conceptual and calculational tasks with explanations | Existing formula atlas, reading profiles | P1 |
| Learning | **Illustrative visual labs:** initially one reproducible, bounded model (e.g. spin-1/2 measurement or Bell–CHSH) with assumptions displayed beside parameters | Existing theory/formula links | P1 demonstration; broader P2 |
| Learning | **Instructor pack/share:** stable deep links, focused graph/compare presets, citeable reading packet, print export | URL filters; compare/workspace Markdown | P1–P2 |
| Research | **Source-only relationship navigation:** show exact edge status, evidence and missing source paths | Existing read-only sourced-path analysis; graph not redesigned | P2 |
| Research | **Model applicability matrix:** compare equations, approximations, boundary conditions, predictions and applicable observations with missing-cell disclosures | Existing compare/Passport fields | P2 |
| Research | **Collection export:** theory/formula/source IDs and provenance labels, optional permalink; no account required | Existing local workspace/backup | P2 |
| Discovery | **Bibliography metadata checks:** review DOI, version, title, errata/retractions where available; cache build-time snapshots with provenance | Existing bibliography; optional Crossref/OpenAlex | P2 |
| Institutional | **LTI 1.3 launch / deep linking**, optional institution SSO/rosters/grade passback | Only after demonstrated faculty need; requires secure service/auth design | P4 / gated |
| Institutional | Cross-device sync, accounts, course cohorts, analytics dashboards, collaborative annotations | No such backend in existing static app | P4 / gated |

### Candidate learning tracks (scope hypotheses; not preapproved content)

1. **Measurement and entanglement:** states, observables, Born rule, density matrices, Bell inequalities, open systems.
2. **Quantum information and error correction:** qubits, channels, noise, quantum Shannon constraints, Knill–Laflamme, fault tolerance.
3. **From ordinary quantum mechanics to QFT:** canonical quantization, fields, gauge symmetry, QED, Yang–Mills, renormalization.
4. **Many-body and quantum matter:** spin chains, BCS, Hubbard, topological phases and representative models.
5. **Quantum gravity and cosmology:** compare clearly labeled candidate frameworks, observational inputs and model-specific assumptions; do not imply speculative models are experimentally established.

**Pilot only one track initially.** Pick one with already reviewed source locators and sufficient Passport/formula depth. The pedagogical review can expose genuine scientific gaps; fill them through the normal independent source-review workflow.

### Demonstration labs: safety and truthfulness rules

A lab must identify its **model and idealizations**, display units and variable domains, have source-located equations and numerical/analytical reference tests, and say what it cannot infer. Favor a small deterministic teaching simulation over a general-purpose quantum simulator. Examples, in possible order:

- Spin-1/2 / Bloch sphere: norm, states, measurement probabilities and axis transformations.
- Bell–CHSH: correlations for a specifically stated state, observable choices and detector assumptions; no “Bell proves every interpretation false” simplification.
- Two-level dephasing: closed versus a precisely scoped Lindblad example; no claim that all decoherence is Markovian.
- Double slit/wavepacket: explicitly pedagogical idealization; no unsupported single-experiment inference.

The user interface must not use equations/animations to imply experimentally measured data when rendering theoretical curves.

## 5. Research/source governance and quality bar

Academic trust is the gating capability; *content quantity alone is not progress*.

1. Preserve separate states for **entity sourcing**, **formula sourcing/metadata review**, **directional edge sourcing**, **empirical Evidence**, and **independent literature freshness**. Never collapse them into one “verified” or “truth” badge.
2. Every Passport, worked example or simulation claims only what a qualified source and stated assumptions support. Include paper/edition/section/equation/printed-page locator when available, symbol definitions, conventions, approximations, valid regime and limitations.
3. Do not silently promote editorial graph links. A link to a source in either endpoint does not source the direction of the edge.
4. Distinguish a fundamental equation from a chosen gauge, limit, example, approximation, derivation and numerical toy model.
5. Instructor-provided material is attributed, reviewed and versioned; it never overwrites canonical theory IDs. Flag missing provenance rather than generating plausible references.
6. Corrective reports link immutable IDs, claim text, discrepancy, source locations and review decision. Provide transparent changelog; no automated acceptance of AI-suggested scientific “corrections.”
7. Source metadata can be enriched from Crossref/OpenAlex, but **machine-matched metadata is not human source qualification**. Respect publisher text and image rights; bibliographic metadata openness does not grant full-text redistribution rights.
8. Record content license, code license and contribution/reuse policy as explicit decisions before asking universities to reuse materials. The repo's public visibility alone is not permission to republish content.

**Primary documentation:** [taxonomy](TAXONOMY.md), [scientific campaign](SCIENTIFIC_COMPLETENESS_CAMPAIGN_2026-10-16.md), [formula audit](FORMULA_AUDIT.md), [relationship provenance](RELATION_PROVENANCE.md).

## 6. Engineering approach and non-regression boundaries

**Default architecture:** Extend the current static client with additive, optional data-driven teaching objects; do **not** rewrite the router, scientific catalog, asset pipeline, workspace persistence or graph renderer to make an early academic prototype.

Potential additive read-only contract (illustrative, not an implemented schema):

```text
LearningModule
  id, title, targetLevel, objectives[], prerequisiteIds[],
  steps[{ kind, canonicalId, rationale, sourceIds[] }],
  checkpoints[{ id, prompt, rubricRef, explanationSourceIds[] }],
  curator, reviewState, reviewedAt, version
```

- Validate every `canonicalId` against shipped theory/formula/source/Passport IDs as applicable, with explicit record kinds. Fail CI for broken links, duplicate IDs and missing reviewed-source mappings.
- Keep existing deep links stable; preserve browser-local notes and current JSON import/export semantics.
- Keep externally supplied module text/data inert and sanitized; no arbitrary remote Markdown/HTML execution.
- Start with downloadable/shareable **static course packs** and optional local progress; do not introduce student accounts, server metrics or grades just to test the concept.
- Accessibility target: **WCAG 2.2 AA** with keyboard-first graph/formula navigation, screen-reader descriptive alternatives for diagrams, contrast and reduced-motion consideration. Run automated checks **and** manual assistive technology/task checks.
- Avoid copyrighted paper/full-text mirroring. Link to source-of-record/legitimate open-access editions instead.
- Consider institution-specific LTI 1.3/Advantage only after confirmed need, security/privacy review and a justified backend. LTI is not a change to be made on the static prototype.
- No AI tutor in the pilot. If later justified, it must retrieve from curated sources, distinguish uncertainty, quote/cite defensibly and pass adversarial scientific accuracy evaluation.
- Maintain current Node `npm test`, `npm run validate`, generated coverage/freshness/asset checks, Chromium/WebKit tests, and independent post-merge/hosted acceptance where relevant. Documentation is not implementation evidence.

## 7. Ordered delivery milestones and gates

### M0 — Identify a trustworthy teaching slice (now; no product UI change)

**Deliverable:** One bounded, faculty-reviewable module specification using **existing** theory IDs, Passport/formula/source IDs and precisely located references; gap ledger distinguishing *missing data* from *missing presentation*.

**Gate:** Scientific reviewer checks at least 8–12 module steps and all major equation/claim locators; no fabricated/candidate-only claims. Inventory source and relationship gaps honestly. Existing research completeness queue continues unchanged.

### M1 — End-to-end learning demonstrator (first optional product implementation)

**Deliverable:** One additive course module; stable lesson deep link; prerequisite/objective view; one source-reviewed worked example; a small *validated illustrative* visual lab or other accessible interactive exercise; at least one checkpoint and reading-list/citation export.

**Gate:** End-to-end browser and accessibility checks; no change to original search/compare/graph/note behaviors; reference numerical tests for lab; human source/rubric review; links survive reload. If technical risk is high, split into smaller PRs and ship a static module before the lab.

### M2 — Academic-quality beta

**Deliverable:** Refine M1 based on evidence; approximately three source-reviewed modules, at least three properly scoped labs *only if teachers actually want them*, instructor share/pack flow, citation export, issue-reporting and matrix/path evidence navigation.

**Gate:** Reproducible per-feature acceptance; science review and source provenance; screen-reader/keyboard usability; successful JSON backup and cross-tab conflict regression; URL stability; no new unreviewed literature claims.

### M3 — Consent-based pilot and effectiveness test

**Deliverable:** Two or three volunteer instructors/researchers and a small sample of learners (target 10–20, *not booked*). Evaluate three tasks: finding an equation's regime/source, comparing two frameworks accurately, and following a course-path/research question.

**Gate:** Pilot participants provide feedback; no hidden personal tracking. Pre-register rubric and compare task outcomes with their usual resources, counterbalancing task order where feasible. Initial provisional decision criteria: at least 80% source/assumption correctness on reviewed tasks, at least 70% users finishing the defined task without help, and documented intent-to-reuse from at least two educators. These are **planning hypotheses**, not measured results. Scientific critical errors, privacy failures or severe usability regressions block progression regardless of survey satisfaction.

### M4 — Institutional option (only following positive M3 signal)

Explore LMS integration via LTI 1.3, secure account/sync, multiuser authoring and privacy-respecting progress/grade transfer **only** if actual faculty needs justify institutional support costs. Design, hosting, access controls, retention, breach-response and procurement readiness require separate approval. Keep a fully usable standalone/public mode.

**“Complete app” acceptance is layered:** (a) *reliable standalone software*, (b) *source-trustworthy selected curricula*, (c) *demonstrated learning/research usefulness*, and separately (d) *optional institution readiness*. It does **not** mean every possible theory/formula in physics has been enumerated, nor that academic institutions have adopted it.

## 8. Validation experiment and outreach

**Candidate sites for exploratory conversations** (research fit, not endorsements, partnerships or verified contacts): Perimeter Institute (theoretical breadth), University of Waterloo/IQC (quantum information), and Dalhousie (local accessible pilot), followed by other faculties only if the initial pilot suggests demand. A program's existence does not imply a faculty member has agreed to participate.

Suggested faculty discovery interview (15–20 minutes): show an actual source-specific theory comparison and ask the instructor to perform one real course/research task; learn what sources they currently use, what they distrust, where navigation helps, whether they would assign one module, which features are genuinely missing, and what security/accessibility/licensing concerns block use. **Observe tasks before pitching a paid product**.

Measurement plan:
- Task correctness on source/regime/relationship questions, scored with a human-reviewed rubric.
- Time to a defensible citation/answer versus ordinary materials; record baseline comparability and learning effects.
- Unassisted course-path completion, citation-export success, broken-reference rate.
- Educator willingness to assign/reuse (record actual follow-through separately from verbal interest).
- Scientific defect severity, accessibility task completion and regressions.
- Opt-in, aggregate anonymous feedback in first phase; obtain any necessary ethics/institutional approval before identifiable participant research.

Stop or narrow if no one independently finds the reference/curriculum task more useful, if scientific claims cannot be reviewed economically, or if maintaining broad content quality overwhelms the team. Do not build login, grading, paid tiers or custom deployments without demonstrated need.

## 9. Suggested concrete backlog (each item requires its own scope/approval and independent gate)

| ID | Smallest valuable deliverable | Dependencies | Definition of done |
| --- | --- | --- | --- |
| ACAD-01 | Read-only module feasibility & theory/source gap map | Latest main census, ongoing scientific curation | Proposed 8–12 canonical steps, each linked to IDs and source locator or explicit gap |
| ACAD-02 | Module data-contract and pure validator (no shipped UI) | ACAD-01 | CI rejects invalid IDs, ambiguous record types, duplicate steps and missing mandatory source fields |
| ACAD-03 | One accessible module reader preserving existing navigation | ACAD-02; approved UI boundary | Lesson steps/reload/deep links/keyboard/reader tests; unchanged original app screenshots |
| ACAD-04 | One pedagogical worked example + checkpoint | Source-qualified formula and reviewer | Correct rubric, alternate conventions and source locators tested/reviewed |
| ACAD-05 | One *bounded* illustrative physics lab | Accepted equation, numerical oracle, ACAD-03 | Unit/limit tests and visually explicit assumptions; no implied experimental observation |
| ACAD-06 | Citation export / shareable reading packet | Existing bibliography identity and rights check | Zotero-importable BibTeX/CSL JSON where valid, round-trip tests and honest missing-field behavior |
| ACAD-07 | Source provenance and issue-reporting workflow | Existing source/edge review; no unsourced promotions | Traceable report → human decision → CI-verified correction/rejection |
| ACAD-08 | Instructor/user pilot protocol and outreach assets | M1 proven usable; access/license decision | Pre-registered tasks, privacy plan, small invited pilot; outcomes recorded without inflated claims |
| ACAD-09 | Go/no-go after pilot | ACAD-08 actual observations | Decision compares value, academic accuracy, maintenance cost, security and opportunity cost |
| ACAD-10 | LMS/sync design (deferred) | Explicit positive ACAD-09 and institutional requirement | Architecture threat model, privacy/hosting costs and separate implementation approval |

**Recommended next single slice:** ACAD-01. It builds directly on the 29 existing Passports and existing learning paths, produces an independently reviewable academic demonstrator scope, and does not jeopardize the approved app while concurrent scientific PR work continues.

## 10. Constraints and decisions to preserve

- **Do not** alter accepted UI, CSS, app router, graphs, stored user notes, citations or scientific records as part of merely recording this roadmap.
- **Do not** conflate source attachment with scientific correctness, theoretical prediction with empirical confirmation, or hypothetical use with university adoption.
- **Do not** overwrite scientific campaign priorities, historical approved baselines, source-review candidates or the single continuation entry point.
- **Do not** implement institutional identity, analytics, billing, copyright-sensitive full text, third-party data ingestion or an AI tutor speculatively.
- **Do not** change production deployment or dependency versions as part of documentation planning.
- Any implementation must be isolated, reversible, independently tested, and merged only after the applicable review and hosted acceptance requirements.

## 11. External technical references (for later design decisions)

- [1EdTech: LTI 1.3 and LTI Advantage](https://www.1edtech.org/standards/lti) — future LMS launches, deep linking, optional roster/grade services, **not** an MVP dependency.
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) — accessibility target; not a claim of present conformance.
- [Crossref REST API](https://www.crossref.org/documentation/retrieve-metadata/rest-api) — DOI bibliographic metadata and updates, not original-equation verification.
- [OpenAlex API](https://help.openalex.org/api/) — optional discovery/metadata matching; human review is still required.
- [Zotero data formats](https://www.zotero.org/support/dev/data_formats) — BibTeX and CSL JSON interoperability expectations.
- [UNESCO OER](https://www.unesco.org/en/open-educational-resources/mandate) — useful framing for future academic content rights/licensing decisions.

---

**Decision status:** Roadmap documented for future consideration. No new feature is declared implemented, no institution is contacted and no existing release acceptance is altered by this document.
