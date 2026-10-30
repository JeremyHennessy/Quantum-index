# Physics Explorer — explicit Cloudflare Web Analytics parity

Date: 2026-10-30.  
**Status: DRAFT / not deployed / route-level engagement not addressed.**  
Accepted baseline: `main=d98b1984ae72d0dfcb4737ea0f837a32fcd185cc` (includes the user-approved Physics Explorer visuals).

## Finding, independently verified against the connected Cloudflare Personal account

The Quantum Index Web Analytics site in Cloudflare is hosted at `quantumindex.site`, with site tag `62199771b17647a2b10bfdf2ce35081e` and public beacon token `f402f014fafa46fd946dad89b1561973`. **Auto-install is disabled** for that site. The classic `index.html` explicitly loads the existing `analytics.js`, whose canonical-HTTPS-host gate matches this published token. The approved Physics Explorer page did not load it.

Consequently, making the Physics Explorer the default without a standalone script would lose at least its explicit browser Web Analytics page-view instrumentation. This assertion is based on checked page scripts and Cloudflare configuration, not inferred traffic totals.

## Single hypothesis tested in this PR

Add the **existing, unchanged** `../analytics.js` script to `docs/physics-explorer.html` with `defer` and give visitors a small factual privacy disclosure in the footer. Do not add analytics on localhost or unapproved hostnames, personal workspace reads or new background requests. Cloudflare's auto-install configuration is left unchanged.

Exact changed-file receipt: `research/PHYSICS_EXPLORER_RUM_PARITY_2026-10-30.json`. It contains the approved HTML/CSS/JS Git blob SHAs, exact HTML before/after SHA256 hashes and reversible operations. The original styled hero, 14-category nav, list-detail inspector, equation cards, and visual JS/CSS **are not modified**.

### Tests
- Node: reverse the modified HTML to the approved exact Git blob and reject any undeclared mutations; assert no changes to the original atlas; exercise the existing `analytics.js` canonical-host decision in an isolated VM without leaking private data.
- Chromium + WebKit: page loads 485 theories, 464 formulas, 60 questions and 21 Evidence records; local test hosts send no Cloudflare beacon; 1280/390 visual screenshots inspected against accepted reference.

## Explicit distinction — this does NOT solve all analytics

Cloudflare Web Analytics covers page-level traffic and performance. The classic `index.html` has an **additional** privacy-scoped temporary-ID route-engagement collector keyed by section/theory hash. The new Physics Explorer uses `?theory=` and currently does **not** implement an equivalent collector.

**Default-root promotion remains on HOLD** until route engagement equivalence and privacy scope are deliberately tested, or the user explicitly authorizes a narrower analytics change. Never send search terms, saved research notes, workspace content, IP addresses or full browsing URLs into the engagement database.

## Release gates
1. Exact-head Node, QA, Map, Chromium and WebKit pass.
2. Screenshot comparison confirms no change to the approved hero/rail/detail layout; only an informational footer sentence differs.
3. Diff is limited to new receipt, tests, documentation and one small existing HTML edit; no change to scientific sources or original app.
4. After independently accepted merge, verify main, GitHub Pages and actual public domain served assets separately.
5. Do not merge the root-redirect experiment while its own full tests, historical identities, telemetry parity and server checks remain unresolved.
