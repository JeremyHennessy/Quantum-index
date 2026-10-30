# Quantum Index — Full Physics Explorer redesign candidate

Date: 2026-10-30  
State: **DRAFT VISUAL + FUNCTIONAL CANDIDATE / NOT MAIN REPLACEMENT**  
Original main baseline: `9c647d0836c892c54cfcf7d89e3550ccc87b5839`  
Visual reference approved by the user: standalone **Observatory Explorer**, `docs/observatory-explorer.html` and `docs/observatory-explorer.css`, merged by #120.

## Purpose

User feedback: previews were not visible, and the previous two-button improvement looked essentially identical to the old homepage. The user explicitly likes the new Observatory Explorer and wants the **main Quantum Index explorer to look and function the same way**.

The proposal is therefore a **complete research-discovery experience**, not an extra hero button. The new page uses the actual accepted Observatory Explorer stylesheet, shell, research rail, search/filters, two-pane inspector, responsive layout, visual hierarchy, palette and interaction patterns.

This page must **not** silently replace the live homepage before browser testing, actual screenshot inspection and visual acceptance. Preview source is staged independently at `docs/physics-explorer.html`. The original Quantum Index application and its exact approved files are unchanged.

## What works in the candidate

- All **485** accepted theory/framework records in the **14** existing scientific categories, without copying or changing records.
- A populated subject sidebar with category counts and active state. It collapses into a horizontal topic rail on smaller screens, matching the Observatory interaction.
- Search matching theory titles, summaries, core ideas, aliases, tags and related equation names/descriptions.
- Scientific-status filters derived from original recorded statuses, not fabricated labels.
- Three first-class curated Problems: dark matter, the measurement problem, and quantum gravity. Each filters the existing approach-group IDs and provides source-aware context.
- An inspectable theory panel with original year, kind/status/provenance, scientific core, tags, representative formulas, linked Evidence and explicit limitations, Research Questions, typed relations, and original bibliography links.
- Selected-theory shareable URL query (`?theory=`); research-problem selection via `?problem=`. No independent new theory/relation assertion.
- Cross-links to accepted full-theory detail, Formula Atlas, Network Map, Compare, complete Evidence, and Research Questions. The accepted personal research/notes workflow stays in the original application, with direct links.
- Four existing dated DevelopmentEvents presented as recent scientific activity, explicitly separate from historical origin dates.
- An unmodified Observatory Explorer link and separate original Classic Atlas link.
- No new external framework, API key, third-party analytics, persistence, mutation, or automatic science promotion.

## Preservation and distinction

New files only:
- `docs/physics-explorer.html`
- `docs/physics-explorer.css`
- `docs/physics-explorer.js`
- `scripts/physics-explorer-preview.test.mjs`
- `tests/browser/physics-explorer.spec.mjs`
- this review document.

This candidate references, but does not alter, the exact merged `docs/observatory-explorer.css` design system and original `../theories.js`, `../formulas.js`, `../problems.js`, `../questions.js`, `../evidence.js`, `../developments.js`, `../passports.js`.

The approved `index.html`, `styles.css`, `app.js`, all original scientific source records, relationships, user notes/workspace, and historical byte-ledgers remain unchanged. The previous unapproved gateway PR #122 must not be merged into this proposal.

A theory record being source-linked does **not** make it empirically confirmed. A link to Evidence does not establish every claim in a framework. A missing indexed formula or Evidence record means incomplete coverage, not absence of mathematics or experiments.

## User-facing preview policy

**Do not ask the user to open an unverified sandbox download link.** Once the exact PR head has browser artifacts, render actual desktop and mobile screenshots *inline inside the chat* rather than relying on download-only links. Verify each screenshot corresponds to the currently tested commit; older PR screenshots must not be labelled current. The chat interface may still have rendering limitations; do not assert that it displayed an image without evidence.

## Acceptance gates

- [ ] Validate changed-file inventory is only these six additions.
- [ ] Existing original index/renderer content hashes unchanged.
- [ ] Node validation and scientific catalog tests pass on exact PR head.
- [ ] Entire Chromium and WebKit browser projects pass, including the new explorer tests.
- [ ] Inspect real desktop and 390px/320px mobile screenshots for new subject rail, cards, theory inspector, evidence and small-screen behavior.
- [ ] Confirm query/filter/back links, approved Observatory URL and original 13 classic routes, graph, formula rendering, Compare and research note preservation.
- [ ] Show actual screenshots in chat for visual review.
- [ ] Only after visual acceptance decide whether to promote the new shell into the main homepage, while preserving original functionality and immutable evidence.
- [ ] Merge/deploy only after all accepted gates; verify live served files and exact main/Pages revision, not just GitHub PR state.

Rollback: reject or close the independent six-file branch; no approved live application file needs restoration.
