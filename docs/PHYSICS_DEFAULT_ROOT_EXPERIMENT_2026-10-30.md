# Physics Explorer default-root integration experiment — October 30, 2026

**Status: TEST CANDIDATE ONLY; NOT MERGED / NOT DEPLOYED / NOT A VERIFIED FIX.**
Source baseline: `main=d98b1984ae72d0dfcb4737ea0f837a32fcd185cc`.  
Visual baseline: user-approved Physics Explorer from merged PR #123, source blobs fixed and unchanged (`docs/physics-explorer.html` / CSS / JS).  
Classic app baseline: byte-accurate `index.html` SHA256 `b464c8478c83974dfbab204a39249e4f124531c4129c2ff15a5c315fc74fc121`.

## Single operational hypothesis

A very small, synchronous head script in `index.html` can redirect **only** an exact no-hash directory-root entry to the existing `docs/physics-explorer.html` on the same host. Old hash routes are not redirected. GitHub Pages cannot inspect client hash fragments; do not attempt a blanket server redirect.

The candidate:
- Routes new visitors at `/` to `/docs/physics-explorer.html` without touching the new visual files.
- Preserves `/#/theory/*`, `/#/map`, `/#/formula`, `/#/lineage`, `/#/compare`, `/#/workspace`, unknown or empty hash routes, and `/index.html#/...` to the exact original renderer.
- Preserves explicit `?classic=1` as an escape hatch; keeps other query parameters when redirecting.
- Preserves the original `app.js`, source corpus, classic `styles.css`, note storage, engagement tracker and originally accepted Observatory/Physics Explorer files.

## Exact reversibility and historical tests

The new manifest `research/UI_PHYSICS_ROOT_CANDIDATE_2026-10-30.json` lists the six intentionally changed previous files, their exact before/after SHA256 and inverse operations:

1. `index.html` — one annotated head script; no other markup changed.
2. `docs/responsive-check.html` — two index-version references only.
3. `tests/browser/research.spec.mjs` — original Explore test now explicitly opens `/index.html#/explore`; same test name and all scientific assertions, so it still checks the classic app.
4. `scripts/dm1a-integration-baseline.mjs` — outer, fail-closed candidate projector before old historical checks; old ledgers unchanged.
5. `scripts/dm1a-integration.test.mjs` — checks the exact approved bytes *after* reversing only declared candidate changes.
6. `scripts/physics-explorer-preview.test.mjs` — acknowledges the explicit, versioned root transition and still requires exact original root bytes when reversed; the accepted new visual files stay unchanged.

New `scripts/physics-root-candidate.test.mjs` tests all inverse hashes, mutation rejections and a real isolated VM execution of the route decision. New `tests/browser/physics-default-root.spec.mjs` exercises actual root/legacy browsing, mobile layout, and saved notes, without conditionally skipping old tests.

## Release blockers — explicit

**1. Complete suites.** This is not ready unless the exact-head full Node, Chromium and WebKit projects pass, no old test is weakened, and actual mobile/desktop screenshots are inspected for the *new* root experience and all original tools. Restore main byte-for-byte if there is any regression.

**2. Historical CI.** The pre-existing `research/CI_PROJECT_SPLIT_INTEGRITY_2026-10-26.json` protects `tests/browser/research.spec.mjs`. The outer projectors must reconstruct its original SHA through all existing read sites. We cannot edit the old ledger or rename/skip the test.

**3. Telemetry parity still open.** The classic `index.html` hosts the canonical-domain Cloudflare Web Analytics module and privacy-qualified route engagement collector, but `docs/physics-explorer.html` does **not** currently import `../analytics.js` or the original route collector. Changing the default without addressing and testing the new page's equivalent privacy-preserving telemetry would lose homepage traffic and theory-navigation observability. This is an explicit **HOLD on production merge** even if route/browser tests pass. Do not silently add tracking or submit search terms, notes, workspace data or complete URLs.

**4. Served-byte parity.** GitHub Pages deployment success alone is not proof that the custom domain serves the approved new HTML/CSS/JS and assets. Verify the response, runtime and status separately before root promotion.

**5. Approved visual checkpoint.** The user's approved screen is tied to the exact Physics Explorer and Observatory CSS/JS from PR #123. This experiment must not redesign the new page, collapse maps, break formulas, alter source scope or rewrite saved workspace data.

If one candidate fails, restore the branch to a clean reviewed baseline or leave the experiment unmerged and clearly rejected. Never treat failed CI as permission to relax a historical protection.
