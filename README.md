# Quantum Index

Quantum Index is a source-aware map of quantum theory and its connected physics landscape: historical foundations, formulations, interpretations, quantum field theories, information-theoretic frameworks, quantum gravity, cosmology, relativity, astrophysics, quantum matter, quantum chemistry, and alternatives beyond standard quantum mechanics.

## Product goals

- Index quantum theories and major formulations past and present.
- Show lineage: what each idea extended, replaced, challenged, or unified.
- Make overlap visible instead of forcing every idea into one category.
- Separate **established framework**, **interpretation**, **active research program**, **historical/absorbed theory**, and **speculative alternative**.
- Preserve provenance so catalog coverage and source coverage are never confused.
- Support "thought trees": trace ancestors, descendants, rival branches, and cross-links.

## Current build

The current corpus is a broad research seed rather than a claim of literal completeness. The schema is designed to grow without changing the UI.

Current audited branch metrics: **302 theory/framework entities**, **408 typed relationships**, **15 thought trees**, **292 scientific bibliography/source records**, and a separate **389-entry formula atlas** spanning **36 formula categories**. All 302 shipped theory entries carry dedicated provenance: **210 primary-sourced** and **92 review/authoritative-source backed**. A separate **15-record PBS Space Time transcript layer** is used for discovery/navigation and never counts as scientific provenance. Catalog coverage and source coverage are intentionally reported separately.

Static app:
- `index.html`
- `styles.css`
- `theories.js` — theory + relation catalog
- `formulas.js` — source-linked quantum formula atlas with equation-role metadata
- `formula-audit.js` — theory-by-theory formula-bearing coverage audit
- `pbs-spacetime.js` — curated PBS Space Time transcript/media mention crosswalk; discovery only
- `app.js` — search, filters, graph, timeline, lineage, formula and detail UI

## Data model

Each theory has:
- canonical name and aliases
- approximate first year / era
- category and status
- concise description and core claim
- tags
- provenance state
- relation graph

Relations are typed:
- `precursor`
- `reformulates`
- `extends`
- `challenges`
- `interprets`
- `unifies`
- `supports`
- `generalizes`
- `overlaps`

## Provenance rule

A catalogued theory is not automatically "fully sourced." The UI displays a provenance badge. Entries marked `catalogued` have been placed in the ontology but still require a dedicated source pass. Entries marked `review-sourced` have dedicated review/authoritative provenance; entries marked `primary-sourced` have at least one verified original or program-defining source attached.

## Development

No application build step is required. Open `index.html` or serve the repository as static files. GitHub Pages is deployed through the repository's native Pages configuration; catalog/formula integrity is enforced separately by `.github/workflows/validate.yml`.


## Research controls

See:
- `docs/COVERAGE.md` for current coverage, provenance metrics, gaps and completion criteria.
- `docs/TAXONOMY.md` for category, kind, status and relation semantics.
- `docs/FORMULA_AUDIT.md` for the theory-by-theory formula-bearing audit and formula-gap controls.
- `docs/RELATION_PROVENANCE.md` for edge-evidence semantics and the relation-source audit.
- `docs/PBS_SPACETIME_AUDIT.md` for transcript discovery rules and evidence separation.
- `research/PBS_SPACETIME_CANDIDATES.md` for transcript-index candidate dispositions.
- `research/CANDIDATES.md` for the unresolved candidate backlog.
- `research/CANDIDATE_AUDIT.md` for add/alias/subtype/formula-only/duplicate decisions on remaining candidates.

The application must not describe the catalog as literally complete until the documented completeness acceptance criteria are satisfied. Unsourced candidates remain in the research backlog rather than entering the shipped catalog.


## Formula atlas

The formula atlas is a separate evidence layer linked to the theory graph. It currently contains **389 canonical equations, identities, inequalities, Hamiltonians, spectra, astrophysical relations and topological relations** across 36 categories. Every formula must link to at least one indexed theory and at least one existing source record.

"All formulas" is treated operationally rather than literally: quantum physics admits arbitrarily many derived equations, equivalent rearrangements, special cases and model-specific identities. The completeness target is therefore **all materially distinct, named or canonical formulas used to define, derive, test, or operationalize indexed quantum theories**, with variants tracked explicitly when they carry different physical content.

See:
- `docs/FORMULA_COVERAGE.md` for scope and current coverage.
- `research/FORMULA_CANDIDATES.md` for the next equation/formula sweeps.


## Formula governance

The formula atlas is deliberately scoped to **canonical/source-linked equations**, not every algebraic expression ever published. Each formula records:
- role: `exact`, `defining`, `canonical`, `schematic`, `approximation`, `limit`, or `derived identity`;
- assumptions;
- variables;
- applicable regime;
- units/dimensional notes;
- theory-to-formula relationship;
- source IDs and metadata review state.

`formula-audit.js` classifies every theory as formula-bearing, a documented formula gap, primarily conceptual, theorem, interpretation, or thought experiment. A documented gap means a canonical equation has not yet been curated; it does **not** mean the theory lacks mathematics.


## Relationship provenance

Every relation edge now carries:

- `sourceIds`
- `evidenceType`
- `confidence`
- optional `evidenceNote`

The first provenance pass source-backs the highest-confidence historical and formal edges. Unsourced edges are **explicitly labeled editorial** rather than silently presented as documented historical fact. This distinction is shown in theory details and graph tooltips.

Current relation evidence states are:
- `documented historical influence`
- `formal mathematical relation`
- `editorial relation`

Confidence is `high`, `medium`, or `editorial`.
