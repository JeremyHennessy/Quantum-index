# Physics Explorer default-root migration — proof and acceptance plan

Date: 2026-10-30.  
**State: RESEARCH/TEST ONLY. NO DEFAULT-ROOT EDIT, MERGE OR DEPLOYMENT.**  
Parent accepted main: `3f41634e950e4fd353f23a6427302c3a1c4a8991`, adding the source-preserving Observatory-style Physics Explorer via PR #123.  
Approved visual evidence: successful Chromium/WebKit screenshots and exact candidate blob SHAs from PR #123, recorded in issue #124 after the user's October 30 statement **“looks good keep it up.”**

## Goal
New visitors reaching the custom-domain directory root `/` with no hash receive the **existing, user-approved** `docs/physics-explorer.html`. All previously shared deep links and saved local research preserve exactly the original `index.html` renderer and client-side hash router.

## Source of truth
`scripts/physics-default-route-contract.mjs` exports a **pure, hook-free route classifier**, tested by `scripts/physics-default-route-contract.test.mjs`. It is research-only: `index.html` does not import or call it.

The contract currently proposes:
- Eligible: `https://quantumindex.site/`, with optional query (preserved same-origin), and supported project-site directory `/Quantum-index/`, **only when no `#` fragment was supplied**.
- Not eligible: `/#/theory/...,` `/#/map`, `/#/formula`, `/#/compare`, `/#/workspace`, **all other hash forms including an explicit empty `#`**, `/index.html`, `/docs/`, and a deliberate `?classic=1`.
- The origin is preserved; never redirect private notes, stored workspace content, user search text or bookmarks to an external service.
- Old and new apps remain separately addressable and reloadable.

**This classifier is a tested hypothesis, not production behavior.**

## Known conflicts identified before production work
1. `tests/browser/research.spec.mjs` contains an approved test **“Explore is the researcher home and routes into major workflows”** which begins with `page.goto('/')` and expects the classic `#exploreView`. A root-default migration must deliberately revise that expectation and retain coverage of the old experience at `/index.html#/explore`; it must not skip the test or conditionally detect automation.
2. `research/CI_PROJECT_SPLIT_INTEGRITY_2026-10-26.json` lists `tests/browser/research.spec.mjs` in `unchangedFiles`, and other historic reconstructions compare exact accepted bytes. Modify none of the old ledgers. Any new explicitly approved test/UI revision must use a new append-only SHA256 manifest and a fully fail-closed projection mechanism that reconstructs each old accepted file **before** legacy checks.
3. `scripts/physics-explorer-preview.test.mjs` deliberately asserts the current classic `index.html` hash and absence of Physics Explorer references; these checks become inapplicable only after the user explicitly accepts a new default-root behavior. Rewrite expectations only in an independently reviewed, versioned release with positive/negative tests and preserved old baselines.
4. GitHub Pages servers cannot see hash fragments. A blanket server redirect would break shared `/#/theory/*` URLs and local notes.

## Next bounded experiment
A new separate **unmerged branch** may add a tiny client-side no-hash chooser to the `index.html` head, plus explicit reversible hashes for the exact changed source, and the minimum updated tests. No other UI/visual change. Start with one Node contract test and one browser journey, watch the **first failing historical source comparison**, and stop there if old checkpoints cannot be reconstructed without weakening protections.

### Acceptance
- 100% original Node and browser suite in Chromium and WebKit; no test removals, conditional skips or old-ledger edits.
- New browser tests: `/` routes to the approved new Physics Explorer, hash routes remain classic, `/index.html#/...` works, keyboard, mobile layouts, back/reload, note conflict and workspace persistence unaffected.
- Original 485 theories, 464 formula records, 21 Evidence records, 616 relations and current source identities unchanged.
- New default uses the exact previously approved Physics Explorer files; no recreation from memory or unrelated styling.
- Verified same-origin Pages publication, served content/asset parity, and a precise rollback commit.
- User-facing preview uses inline **real screenshots** from the exact tested head; do not rely on inaccessible sandbox-only download links.

This deliverable authorizes **no main-app production change**. It establishes the pre-migration proof and blocked historical-test boundary.
