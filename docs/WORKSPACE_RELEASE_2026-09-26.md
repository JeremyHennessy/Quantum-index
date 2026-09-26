# Research workspace release — 2026-09-26

## Delivered scope

- Navigation retains comparison selections and learning-path context through prerequisite, connection and formula detours. Return destinations are encoded in shareable URLs and restored on fresh loads.
- Local script/style URLs use SHA-256 content versions; CI rejects stale references. The responsive harness also tracks the generated index version.
- Network and thought-tree nodes expose names, button roles and Enter/Space activation. Global filter scope is explicit.
- The Compare tab searches each selection by name, alias or tag, retaining the selected entry while searching.
- 50 cited reading profiles (30 added); all learning-path steps now have profiles. A proper-time and Schwarzschild-clock primer introduces Gravity and time.
- Three representative equations added: the minimally coupled curved-background Klein–Gordon equation, JT curvature constraint and normalized replica entropy identity. Complementarity is classified as primarily conceptual; AMPS as a conditional theorem/no-go argument, with citation locators.
- 25 existing relationships reviewed: 15 gained sources, 3 existing sourced edges gained explanations/locators, 7 retained editorial status. See the adjacent JSON review manifest. No edge endpoints or types were added or changed.
- My research: browser-local bookmarks, notes, read markers, saved comparisons and JSON export/import. Imports preview their contents before merging. Conflicting notes are appended; repeat imports are idempotent for the same note segments. Failed writes retain prior saved state. Unreadable stored data is protected from overwrite and exportable for recovery.

## Scope of evidence

Profiles summarize the cited works and distinguish theoretical constructions, conditional results and interpretations. Questions and prerequisites are editorial reading aids. These profiles are not exhaustive assessments of every experimental claim or current research dispute. Some original publisher pages were inaccessible during this pass; citations to those historical works are not represented as a fresh line-by-line full-text verification. Accessible reviews, author papers, abstracts and MIT notes informed the descriptions. In particular, the three new equations were checked against accessible full-text sources and carry equation/section locators and assumptions.

The primer uses Carroll's GR notes, Sections 1, 4 and 7. The static-clock formula requires exterior Schwarzschild geometry and a clock held at fixed radius; it does not describe arbitrary motion. The replica identity uses a normalized density matrix and natural logarithms; gravitational saddle evaluation requires additional assumptions. JT's unit AdS radius is explicitly restored to L. With mostly-plus signature the scalar equation's flat-space plane-wave limit gives ω² = k² + m².

Source attachment, coverage counts and passing schema tests are structural checks, not scientific certification. The catalog remains open: 186 documented formula gaps and 498 editorial graph edges remain.

## Local verification

- `npm test`: 35 passing checks covering existing regressions plus new routes, fresh-load return URLs, search, keyboard activation, storage, literal note rendering, preview/merge and malformed imports.
- `npm run validate`: schema, reference integrity, generated coverage and asset versions.
- `git diff --check`: no whitespace errors.
- Baseline comparison against ec1b823: all 480 theory records, 372 pre-existing formulas and 20 pre-existing profiles preserved exactly. Three formulas and thirty profiles appended.
- Backup limits: 20,000 characters per note, 100 comparisons, 1 MB encoded JSON. Quota failures and unreadable storage do not silently replace saved work.

## Release and browser verification

The pull request and associated Actions runs provide the publication record. Hosted navigation, math rendering, workspace persistence and responsive checks are performed after Pages deployment. The responsive harness includes 320, 390 and 430 CSS-pixel frames; this is a Chrome layout check, not an iPhone/Safari or touch-device test. Physical iPhone/Safari verification remains a separate manual check.
