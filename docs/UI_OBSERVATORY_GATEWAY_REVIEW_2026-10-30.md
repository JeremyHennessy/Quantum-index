# Observatory Explorer entry-point candidate — preserved atlas baseline

**Date:** 30 October 2026
**Candidate status:** DRAFT / NOT MERGED / NOT USER VISUALLY APPROVED
**Immutable starting main:** `9c647d0836c892c54cfcf7d89e3550ccc87b5839` (standalone Observatory Explorer, PR #120).
**Source page:** `docs/observatory-explorer.html`, already in merged main.
**Tracked UX request:** Issue #121.

## Purpose

Users should be able to discover the new, genuinely different Observatory Explorer from the existing Quantum Index Explore screen. The current site has many valuable maps, chronology, comparison, formulas and personal workspace features. **Do not replace or redesign them** to add this gateway.

The proposed change adds exactly **one** substantive, source-aware featured gateway before the ten existing Explore cards:

> New · Observational Intelligence — Discover the science behind the sky. Explore observatories, source-linked datasets, studies and upcoming research milestones. Open Observatory Explorer.

Clicking opens the existing standalone `./docs/observatory-explorer.html` page; the new page already has a native return link to the original atlas. Its specific data-access categories, official sources, limitations and completion state remain visible there. The new gateway itself claims no scientific result.

## Scope

Expected pre-merge diff:
- `index.html`: add only the one gateway link, preserve all 13 original tabs, ten existing Explore cards, hero, route structure and scripts; update the CSS hash to match the append-only stylesheet change.
- `styles.css`: append scoped `.observatory-gateway*` rules only; existing rules and theme variables remain unchanged.
- `docs/responsive-check.html`: update two generated index version references only.
- `scripts/dm1a-integration-baseline.mjs` and `scripts/dm1a-integration.test.mjs`: introduce the exact SHA256 candidate projection, based on the independently tested #116 mechanism, so historical tests compare byte-identical accepted originals and reject every undeclared alteration.
- `research/UI_OBSERVATORY_GATEWAY_CANDIDATE_INTEGRITY_2026-10-30.json`: before/after hashes and explicit reversible operations (new file).
- `scripts/ui-observatory-gateway.test.mjs`: exact identity, rollback, and negative mutation tests (new file).
- `tests/browser/observatory-gateway.spec.mjs`: desktop/mobile presentation and keyboard/deep-link/return checks (new file).

**Untouched:** approved `app.js`, `analytics.js`, all existing theory/formula/Evidence/Problems/Passports data, the Observatory registry bytes, the map, relationships, personal notes/workspace, old historical ledgers, dependencies, and CI/publishing settings.

## Acceptance

- [ ] Verify exact PR diff contains only declared files, and all old scientific records and `app.js` blobs equal immutable main.
- [ ] New SHA256 gateway manifest reconstructs every changed historical source byte exactly, and rejects unrecognized changes. Historical records are never rewritten.
- [ ] `npm test` and `npm run validate` pass on exact head without weakened or skipped tests.
- [ ] Chromium and WebKit full browser suites pass, including new checks at 1280, 390, 320 pixels.
- [ ] Visually inspect actual gateway screenshots against the accepted Quantum Index page; confirm the additional gateway is clear without damaging existing cards/layout.
- [ ] Confirm native keyboard activation and forward/back navigation to the standalone Explorer.
- [ ] Distinct UI change receives visual acceptance before merge.
- [ ] After merge, independently verify merged main, Pages deployment and source/served bytes. If fails, revert exact candidate.

Do not mistake PR activity, a browser screenshot, or GitHub merge for verified public user experience. No new observational results or theoretical support are inferred from this navigation feature.
