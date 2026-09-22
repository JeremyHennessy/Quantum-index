# Quantum Index

Quantum Index is a source-aware map of quantum theory: historical foundations, formulations, interpretations, quantum field theories, information-theoretic frameworks, quantum gravity, quantum cosmology, and alternatives beyond standard quantum mechanics.

## Product goals

- Index quantum theories and major formulations past and present.
- Show lineage: what each idea extended, replaced, challenged, or unified.
- Make overlap visible instead of forcing every idea into one category.
- Separate **established framework**, **interpretation**, **active research program**, **historical/absorbed theory**, and **speculative alternative**.
- Preserve provenance so catalog coverage and source coverage are never confused.
- Support "thought trees": trace ancestors, descendants, rival branches, and cross-links.

## Current build

The current corpus is a broad research seed rather than a claim of literal completeness. The schema is designed to grow without changing the UI.

Current audited branch metrics: **262 theory/framework entities**, **359 typed relationships**, **13 thought trees**, **253 bibliography/source records**, and a separate **320-entry formula atlas** spanning **27 formula categories**. All 262 shipped theory entries carry dedicated provenance: **186 primary-sourced** and **76 review/authoritative-source backed**. Catalog coverage and source coverage are intentionally reported separately.

Static app:
- `index.html`
- `styles.css`
- `theories.js` — theory + relation catalog
- `formulas.js` — source-linked quantum formula atlas with equation-role metadata
- `formula-audit.js` — theory-by-theory formula-bearing coverage audit
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
- `research/CANDIDATES.md` for the unresolved candidate backlog.

The application must not describe the catalog as literally complete until the documented completeness acceptance criteria are satisfied. Unsourced candidates remain in the research backlog rather than entering the shipped catalog.


## Formula atlas

The formula atlas is a separate evidence layer linked to the theory graph. It currently contains **266 canonical equations, identities, inequalities, Hamiltonians, spectra and topological relations** across 26 categories. Every formula must link to at least one indexed theory and at least one existing source record.

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
