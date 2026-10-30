# First-fold navigation review candidate — preservation and test receipt

Date: 2026-10-30
Accepted baseline for comparison: 43dfd3d6467bfa6f9f38c2aa568307fa1da4de37
Review state: DRAFT / NOT USER-APPROVED / NOT SHIPPED
Related issue: #114. Earlier failed, reverted PR: #112.

## Scope

One deliberate product hypothesis: when visitors can enter existing research workflows from the hero before scrolling through ten statistics, Quantum Index becomes easier to use, especially at 390px and 320px. Preserve the attractive hero, cards, 13 tabs, maps, theory pages, comparison, local notes and data model.

Candidate changes:
- Two small CTA links inside the *existing* hero immediately after its copy: Start with a question (existing Problems), Browse theories (existing Catalog).
- One isolated page-entry link handler in index.html: only these hero links scroll their already-routed Problems/Catalog sections below the sticky header. The existing app.js renderer and scripts/analytics.test.mjs remain byte-identical to the accepted main baseline. No modification to normal tab routing, map rendering, scientific logic or workspace.
- A CSS-only addition at the end of styles.css for the two links. No existing theme variables or class styles overwritten. Responsive links stack at narrow widths.
- Existing static asset hashes in index.html and two responsive preview hashes updated.
- A fully declared SHA256 candidate rollback manifest with exact before/after bytes for the three UI files, the small historical-source projector bridge and its original integrity test.
- An earlier independent test-only projection primitive from PR #116; no rewrite of previous source ledgers.
- A dedicated current-file negative regression test and two Chromium/WebKit browser tests with 1280, 390 and 320 screenshots.

## Why historical test changes are deliberate, not relaxed

Previous PR #112 failed 30 Node tests because exact checkpoints rejected UI bytes. The original DM-1A test suite contains direct raw-file checks, as does CI project-split. The chosen narrow design:
1. Adds an *outer*, exact-hash, reversible candidate projection before existing DM-1A projector logic.
2. Preserves all accepted old source bytes and original ledgers; unlisted files are not modified.
3. For one DM-1A test's direct raw-file equality checks, asserts SHA256 of an explicitly reversed, still-byte-identical original file. It still rejects any unknown byte change or attempted fake completion.
4. Does not modify workflow test selection, browser engines, dependencies, CI permissions, package steps, historical source files or raw scientific data.

This is a **candidate test architecture** until exact-head CI validates it. No mechanism is asserted to be working before that result. If any historical file fails to reconstruct, do not conceal the failure: reject and revert the candidate.

## Scientific and UX preservation

No new scientific theory, source, formula, Evidence, DevelopmentEvent, Problem, Passport, reading path, relationship or notebook migration.
All existing 13 route IDs, 10 Explore cards, maps/selection/zoom and analytics are untouched. Page styling should retain original palette and card composition; visible visual changes are restricted to the new hero links.
These two links are NOT a global search and no new observatory data is shipped in the navigation PR.

## Acceptance

- [ ] Exact PR diff and documented manifest; no undeclared production changes.
- [ ] 100% Node suite passes, including both old and candidate negative historical assertions.
- [ ] Generated coverage, freshness and asset versions correct.
- [ ] Chromium and WebKit full browser suites, including map gestures, notebook storage, source links and return-to-view.
- [ ] Inspect desktop and mobile Playwright screenshots against the actual approved 1280/390 screenshot baseline.
- [ ] Test 320px no overflow, hero CTA inside first 844px viewport, keyboard focus and existing entry routes.
- [ ] Verify no new browser errors.
- [ ] Obtain distinct visual acceptance before merge; do not treat a green CI run as visual approval.
- [ ] Only after authorized merge, recheck exact-main tests, Pages success and served-file identity.
- [ ] If unaccepted, revert the isolated branch (no production files altered).

Future enhancements such as categorized sections, cross-scope searches, extra cosmology entry cards or an observatory view belong to separate, independently reviewed release candidates.

## Separate CI preservation correction

The prior draft #117 head changed scripts/analytics.test.mjs to accept new app.js bytes, triggering six old exact-byte historical CI failures. This isolated replacement instead restores both app.js and scripts/analytics.test.mjs to exact accepted main bytes and moves the strictly scoped click-scroll handler to the end of index.html. The new outer manifest continues to reconstruct index.html, stylesheet and responsive preview exactly, and the new regression assertions guard immutable renderer and test hashes. This is a new candidate pending the complete Node and browser gates; it is not yet an accepted solution.
