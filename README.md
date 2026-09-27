# Quantum Index

Quantum Index is a source-aware map of quantum theory and adjacent fundamental physics: historical foundations, formulations, interpretations, quantum field theories, information-theoretic frameworks, quantum gravity, quantum cosmology, astroparticle/cosmological models, quantum matter, quantum chemistry, AMO, and alternatives beyond standard quantum mechanics.

## Product goals

- Index quantum theories and major formulations past and present.
- Show lineage: what each idea extended, replaced, challenged, or unified.
- Make overlap visible instead of forcing every idea into one category.
- Separate **established framework**, **interpretation**, **active research program**, **historical/absorbed theory**, and **speculative alternative**.
- Preserve provenance so catalog coverage and source coverage are never confused.
- Support "thought trees": trace ancestors, descendants, rival branches, and cross-links.

## Current build

<!-- coverage:start -->
The census remains **open**. The current catalog contains **480 entries**, **605 typed relationships**, **41 thought trees**, and **495 bibliography records** across **14 categories**. Provenance is attached to all entries: **351 primary-sourced** and **129 review-sourced**. The formula atlas contains **384 entries** across **29 categories**; **176** theory entries remain documented formula gaps. Counts are generated from runtime data, separately from scientific review.
<!-- coverage:end -->

Static app:
- `index.html`
- `styles.css`
- `theories.js` — theory + relation catalog
- `formulas.js` — source-linked quantum formula atlas with equation-role metadata
- `formula-audit.js` — theory-by-theory formula-bearing coverage audit
- `profiles.js` — cited reading profiles and guided learning paths
- `workspace.js` — local research notes, bookmarks, progress and backup validation
- `app.js` — search, filters, graph, timeline, lineage, formula, comparison and workspace UI

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

No application build step is required. For development checks, run `npm ci`, `npm test`, and `npm run validate`. Run `npm run coverage` after catalog changes to regenerate coverage reports, then `npm run assets` after changes to shipped scripts or styles. CI verifies content-hashed asset URLs to prevent mixed cached releases. Test dependencies are development-only.

Theory links use `#/theory/<id>` and work on GitHub Pages without server routing.

 Open `index.html` or serve the repository as static files. GitHub Pages is deployed through the repository's native Pages configuration; catalog/formula integrity is enforced separately by `.github/workflows/validate.yml`.


## Research controls

See:
- `docs/COVERAGE.md` for current coverage, provenance metrics, gaps and completion criteria.
- `docs/TAXONOMY.md` for category, kind, status and relation semantics.
- `docs/FORMULA_AUDIT.md` for the theory-by-theory formula-bearing audit and formula-gap controls.
- `docs/RELATION_PROVENANCE.md` for edge-evidence semantics and the relation-source audit.
- `research/CANDIDATES.md` for the unresolved candidate backlog.
- `research/CANDIDATE_AUDIT.md` for add/alias/subtype/formula-only/duplicate decisions on remaining candidates.
- `research/EXHAUSTIVENESS_AUDIT.md` for the 2026-09-22 breadth census, acceptance criteria, and remaining lower-granularity queues.

The application must not describe the catalog as literally complete until the documented completeness acceptance criteria are satisfied. Unsourced candidates remain in the research backlog rather than entering the shipped catalog.


## Formula atlas

The formula atlas is a separate evidence layer linked to the theory graph. It contains canonical equations, identities, inequalities, Hamiltonians, spectra and topological relations. Current counts are generated in the census above. Every formula must link to at least one indexed theory and at least one existing source record.

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

## Learning and personal research

The Learn tab offers five guided paths, including Quantum foundations and Quantum information. Read markers show your progress, and Start/Continue/Review links in Learn and My research open the first unread step or return to the beginning when every entry is marked read. Gravity and time starts with a cited proper-time primer, and every path step has a reading profile. The Compare tab searches all catalog entries by name, alias or tag and compares two to four selections. Fifty-nine entries have expanded profiles; other entries retain their catalog summary and bibliography.

My research stores bookmarks, notes, read markers and saved comparisons in this browser only. Save notes explicitly. Export a JSON backup before clearing browser data or moving devices. Imports show a preview and merge with existing work; conflicting notes are appended rather than replaced. Limits are 20,000 characters per note, 100 saved comparisons and 1 MB per backup. Corrupt stored data is preserved and can be exported for recovery; storage failures do not report success. There is no account or cross-device synchronization.

Global filters apply to Network map, Timeline and Catalog. Comparisons and the formula atlas have their own controls. Graph and thought-tree nodes support Enter and Space.

The September 26 workspace release also reviews 25 existing graph edges in `docs/RELATION_REVIEW_2026-09-26.json`. Relationship disclosures expose the explanation, locator and sources. Source-backed does not mean experimentally confirmed.

My research also searches saved entries by name, alias, tag or full note text and saved comparisons by name or included entry. The Read entries list opens any marked entry, including entries outside learning paths. Search stays in place while visiting a detail and returning. Export research notebook downloads a Markdown reading copy with complete notes, entry links, catalog sources and comparison links; it always includes the whole workspace and does not replace the restorable JSON backup. Notes are exported as literal text.

The Coverage tab reports profile, formula and relationship review gaps from current data. URL filters survive reloads; relationship evidence and formula metadata review can be filtered separately. Draft notes survive navigation and tab reloads; conflicting cross-tab saves require explicit combination. See [the reliability release notes](docs/RELEASE_RELIABILITY_2026-09-27.md) for storage limits, browser CI and the Pages gate activation requirement.
