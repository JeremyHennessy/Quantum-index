# Quantum Index — App, UX and Scientific Content Audit

**Date:** October 30, 2026
**Pinned reference:** main 43dfd3d6467bfa6f9f38c2aa568307fa1da4de37
**Status:** REVIEW AND ISOLATED DRAFT CANDIDATE. Not a production publication or approved visual replacement.
**Sources inspected:** Public page structure, repository index.html, styles.css, app.js, Problems/Evidence/Developments data, active scientific PR metadata, existing browser tests, approved release documentation and previous UI-preservation discussions.
**Limit:** An actual current-candidate browser screenshot has not yet been independently reviewed in this audit. Existing browser-test screenshots are historical evidence only. Native iPhone Safari verification is not claimed.

## 1. What must be preserved

- The approved light scientific design: subtle multicolor hero, teal accent, restrained cards, readable typography and responsive layout.
- The original 13 tabs and all original route identifiers, search/filter states, deep links and return behavior.
- Network map, source-backed-versus-editorial relationships, selected-node context and source-only paths.
- Thought trees with zoom/pan/selection behavior and chronological, typed edges.
- Timeline: distinguish historical theory origins from recent development dates.
- Formula Atlas with MathJax, actual source locators, independent filters and reviewed-metadata labels.
- Compare (2–4 theories), Theory Passports, learning paths and scientific Problems.
- Evidence with explicit model-dependent claims, limitations and exclusions; Research Questions; Coverage.
- Browser-local notes, bookmarks, progress, conflict safeguards, JSON/Markdown export and unchanged saved data.
- Historical integrity ledgers, immutable scientific identifiers, current CI/publishing gates and existing analytics disclosure.

## 2. Verified structural snapshot

Current pinned main: **485 theories/frameworks**, **464 formulas**, **612 bibliography records**, **616 relationships** (130 source-backed, 486 editorial), **35 Passports**, **9 Problems**, **21 Evidence records**, **60 Research Questions**, **16 reviewed developments**, **41 thought trees**.

These are record counts, not scientific quality or literature completeness scores.

Existing landing-page anatomy: large hero, ten numeric statistics, filter section, a 13-button horizontal scrolling tab bar, Explore introduction with ten workflow cards, a recent-developments module, an open-research module. The filter section is intentionally hidden outside Network, Timeline and Catalog. Formula/Evidence/Questions each have separate search mechanisms.

## 3. UX assessment

### P0: Discoverability of 13 destinations

The horizontally scrollable tab bar is functional but dense, especially at 320–390px. It does not visually explain that Problems, data, visualization, comparison and personal research are different kinds of destinations. This is a confirmed structural discoverability concern, **not** an assertion about actual visitor behaviour.

**Pilot:** A mobile-only grouped section-jump selector, invoking the exact existing tab navigation. Do not hide, rename, duplicate functionality or remove any of the 13 original buttons. Preserve desktop tab layout.

### P0: Direct concept lookup from Explore

Explore has no concept search even though Catalog, Timeline and Network provide a shared scoped theory search; visitors must first know where to go. It would be misleading to label the existing theory-only search as full-text global search across all scientific content.

**Pilot:** A specifically labelled Explore theory/concept search linking into the existing Catalog filtered hash URL, retaining selection and return context.

### P1: Subject-oriented first steps

The existing scientific Problems include dark-matter, dark-energy-expansion, inflation-mechanism and primordial-quantum-classical. First-time visitors currently must find Problems before reaching those research questions.

**Pilot:** Four first-step links into these pre-existing, source-linked Problems. These add zero unreviewed scientific assertions or duplicate data records.

### P1: Potential inconsistencies to review next

- The Explore card named Follow history displays thought-tree count but links to timeline origins, not Thought trees. Decide the expected workflow first; do not change arbitrarily.
- Ten Explore cards and ten hero statistics form a tall mobile experience. Do not resize/reorganize without real screenshots and measured comprehension benefits.
- Independent searches across theory, formula, questions and evidence are useful, but their scopes should be made more obvious. A true cross-record search is future work.
- Formula selection has many options; autocomplete could be helpful, but needs specific accessibility and performance tests first.
- Graph performance and real-world iPhone behavior have not been newly profiled; neither is claimed broken.

## 4. Scientific-content priorities

**Do not equate increasing catalog count with research depth.** New cosmology content should principally add versioned observational metadata and claim-specific evidence connections:

1. COI-0 observational census: identify 30–40 authoritative facility, experiment, survey and collaboration candidates. This is an intake target, not a promise of completeness. Include CMB (Planck, ACT, SPT, BICEP/Keck, Simons), structure and dark energy (DESI, SDSS, DES, Euclid, Rubin, Roman, SPHEREx), astrophysics (JWST, ALMA), dark-matter searches (LZ, XENONnT, ADMX), multimessenger (GWOSC, IceCube) and additional domain-scoped programmes. Verify original source pages and rights before acceptances.
2. COI-1 versioned releases and analyses: keep instrument, programme, dataset version, paper and derived parameter estimate as different record types. Capture accessible-data status, corrected/reprocessed/superseded versions, DOIs and precise release dates.
3. COI-2 curated links: begin with existing Problems and Evidence on dark matter, dark energy and inflation. Attach assumptions, model/likelihood, dataset combination, units, uncertainty and explicit what-a-result-does-not-establish. No automatically claimed discovery or universal bound.
4. COI-3 official future programme milestones: record planned versus accomplished, source and date last checked; avoid inventing calendar days for month/year ranges.
5. COI-4 optional metadata discovery automation after source-specific manual review. New paper alone is not a new theory; citation alone is not a confirmed result. No paid APIs or full copyrighted article copying.

Start research-only. Integrate contextual links inside existing Problems/Evidence before deciding whether a new tab is justified. Do not overtake the active dark-matter completeness campaign or academic roadmap PR.

## 5. First candidate change list

The separately staged navigation pilot:
- Adds Explore Find a theory or concept input that passes a trimmed search to the existing Catalog route.
- Adds four already-curated cosmology Problem shortcuts.
- Adds a visible-only-on-mobile grouped navigation select for all 13 current views.
- Adds two event handlers plus one synchronized select value to the existing router.
- Appends local CSS only; prior classes, colors, grid/graph sizing, renderer and workspace logic are untouched.
- Updates the exact content-hashed app, CSS and responsive-check references.
- Adds focused Playwright checks for desktop palette and tabs, mobile jump/overflow, topic route accuracy, and catalog search/deep-link/back.

**No production science data records or accepted UI files are changed until reviewed release authorization.**

## 6. Release / rollback gates

- [ ] Exact changed-file inventory and latest-main conflict check.
- [ ] All source/record identifiers, source strings and historical ledgers preserved.
- [ ] Node tests, generated coverage/freshness, syntax and asset versions passing on the exact PR head.
- [ ] Full Chromium and WebKit browser suites passing, including prior map/touch/return/notebook scenarios.
- [ ] Inspect screenshots at 1280px desktop and 390px and 320px mobile; compare to approved design with real visible content.
- [ ] Verify no global overflow and that the original 13 tabs still work.
- [ ] Verify unmodified saved workspace, note draft, comparison and source-link behavior.
- [ ] Publish only after explicit acceptance and verify merged-main checks, Pages and served file hashes separately.
- [ ] Reject or revert this isolated candidate if there is any visual or functional regression.

Next scientific delivery should be a **separate research-only observatory source census**. Avoid mixing a scientific migration and a user-interface change in one difficult-to-revert release.
