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

Current audited branch metrics: **201 entities**, **244 typed relationships**, **9 thought trees**, **197 bibliography/source records**, with **201/201 entries carrying dedicated source provenance**: **146 primary-sourced** and **55 review/authoritative-source backed**. Catalog coverage and source coverage are intentionally reported separately.

Static app:
- `index.html`
- `styles.css`
- `theories.js` — theory + relation catalog
- `app.js` — search, filters, graph, timeline, lineage and detail UI

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

No build step is required. Open `index.html` or serve the repository as static files. GitHub Pages deployment is included under `.github/workflows/pages.yml`.


## Research controls

See:
- `docs/COVERAGE.md` for current coverage, provenance metrics, gaps and completion criteria.
- `docs/TAXONOMY.md` for category, kind, status and relation semantics.
- `research/CANDIDATES.md` for the unresolved candidate backlog.

The application must not describe the catalog as literally complete until the documented completeness acceptance criteria are satisfied. Unsourced candidates remain in the research backlog rather than entering the shipped catalog.
