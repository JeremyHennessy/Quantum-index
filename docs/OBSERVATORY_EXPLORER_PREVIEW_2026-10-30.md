# Quantum Index — Observatory Explorer research preview

**Date:** October 30, 2026
**Status:** DRAFT / NEW CONTENT VIEW, NOT A SHIPPED OR SCIENTIFICALLY CERTIFIED ATLAS
**Parent review:** COI-0 observational registry, PR #115, source census pinned at `298b3e61fa8bc01879c9f8ebcda1f94f0d1bcdbe`.

## Why this exists

The existing first-fold hero was a well-liked visual style but adding two buttons made almost no perceptible improvement. This prototype explores a **visibly different research workflow** without removing or rewriting any approved Quantum Index screen or altering production scientific claims.

This is a new page under `docs/observatory-explorer.html`, not a replacement for the homepage. The existing header, navigation, graph, thought trees, local research workspace, formulas, Deep Links, research data models and CSS remain byte-identical to the accepted baseline.

It is an experimental public-data catalogue **interface**, not a generic website template or an evidence-authoring system.

## Current scientific scope and review boundaries

The source is a mirror of the exact COI-0 registry:

- **30** facilities, instruments, experiments, surveys and mission identities.
- **18** distinct release/analysis/forecast records with deliberately different access states.
- **28** official source references.
- **6** referenced studies and **6** milestones (four planned, two independently reported Roman mission achievements).

This is an intentionally bounded intake, not a complete worldwide list of all observatories or their full published output. The programme status `not-assessed` must not be displayed as “inactive”; a candidate release labelled `public-analysis-products-only` must not be called an openly downloadable raw spectroscopic dataset.

**No numerical observation, physical parameter estimate, signal/exclusion, discovery or new theory is invented by this interface.** It does not promote any COI-0 research item to production Evidence.

The verified direct official sources include DESI DR2-derived chains (first public October 6, 2025) but not unreleased underlying DR2 spectra; Euclid public Q2 and planned DR1 Foundation; NASA Roman's 2026 launch and later commissioning without claiming public surveys are already available; and rights-restricted Rubin EDP2.

## Distinctive user experience

1. New pale-science/mission-control hero with a schematic **illustration** of observation pathways (not a scientific data visualization).
2. Real research lenses: CMB/early universe, cosmic expansion/large-scale structure, dark-matter direct detection, astrophysics, high-energy sky, multimessenger, gravitational waves and radio astronomy.
3. Search across programme names, release titles/versions, study titles and official-source labels.
4. Availability filters: public observational products, public analysis-only, rights-restricted products, published results, planned releases.
5. Programme inspector with official sources, release status, scholarly papers, existing Quantum Index Problem links, and mission milestones.
6. A clear planned-versus-actual timeline; future dates never imply completed releases.
7. Shareable selected programme via `?programme=`, and native links back to the existing Quantum Index atlas.
8. Desktop and mobile layouts, keyboard-operable buttons, labels, no injected HTML from registry text, no accounts, no storage, no third-party assets.

## Explicit integration status

The prototype only adds:
- `docs/observatory-explorer.html`
- `docs/observatory-explorer.css`
- `docs/observatory-explorer.js`
- `docs/observatory-registry.json` — an **exact byte mirror** of `research/COI0_OBSERVATORY_AND_RELEASE_CENSUS_2026-10-30.json`, with Node parity test.
- `scripts/coi-observatory-explorer-preview.test.mjs`
- `tests/browser/observatory-explorer.spec.mjs`
- This documentation.

It **does not edit** `index.html`, `styles.css`, `app.js`, any scientific corpus, historical ledger, tests for previous features, GitHub Actions, dependencies or publishing settings.

The already-present GitHub Pages package copies `docs/`, so a future reviewed merge will make the page accessible at `/docs/observatory-explorer.html` under the existing site **when packaging and deployment are actually confirmed**. There is no homepage link until a separate approved integration change; do not claim the new view is a production primary navigation option.

## Acceptance gates

- [ ] PR #115's authoritative source census has completed exact-head Node, Chromium and WebKit gates, independently reviewed, and merged before the child feature.
- [ ] New preview's mirrored JSON matches the authoritative research data bytes exactly.
- [ ] New Node tests pass, including data-count, status and source integrity.
- [ ] Both Chromium and mobile WebKit complete the new browsing tests, source links, filtering and no-overflow checks at 320, 390 and 1280 widths.
- [ ] Inspect actual preview screenshots; distinguish genuine usability improvement from cosmetic changes.
- [ ] Confirm exact PR diff only adds the seven preview/test/docs files.
- [ ] No existing UI, code, source data or historical checkpoint has changed.
- [ ] Separate main, Pages and served-file parity after a separately accepted merge; do not infer deployment from passing PR tests.
- [ ] Decide whether/how to link this under the existing evidence/research workflow only after this page is visually and scientifically accepted.

**Rollback:** Since the preview only adds new files, reject the branch, or remove those new files after any future reviewed merge; none of the approved historical UI files need to be rewritten.
