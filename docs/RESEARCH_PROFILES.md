# Research profiles and comparison

Fifty-nine profiles in `profiles.js` cover historical foundations, quantum formulations, interpretations and no-go theorems, quantum information, open systems, quantum fields in spacetime, quantum-gravity approaches, black-hole information and primordial fluctuations, nuclear theory, chemistry, many-body physics, AMO, astroparticle models and beyond-standard correlations. Each has seven cited explanatory fields, a review date and an editorial prerequisite list. Questions are prompts for investigation, not a claim that every formulation remains unresolved in all models. Evidence descriptions concern the cited publications, not an exhaustive current experimental-status review.

The Compare tab accepts any two to four catalog entries. Three presets provide starting points. Each selector can search names, aliases and tags while retaining its current selection. Uncurated entries retain their catalog summaries, bibliography and formula coverage with an explicit missing-profile message. Selection is stored in the URL; theory links preserve the comparison return URL across reloads. Invalid IDs and duplicates are discarded; at most four valid IDs are retained.

All 480 catalog records and 605 relationship endpoints/types are preserved. The atlas contains 384 formulas and the bibliography contains 495 records. Original IDs are preserved; subsequent equation-level metadata and bibliography corrections are documented in the release notes. The workspace release reviews the evidence for 25 existing relationships; its decisions are recorded in `RELATION_REVIEW_2026-09-26.json`. Profile prerequisites do not create graph edges. The current typography and colors are reused; comparison columns scroll horizontally when needed.

Validation includes profile citations and identifiers, presets, navigation, selection limits, uncurated-entry fallback, all profile rendering, and fresh comparison/detail loads. Browser checks complement DOM tests; a real narrow viewport must be checked separately before claiming mobile verification.

Source basis: the linked original papers and reviews, including their abstracts and selected accessible text. These concise profiles are reading aids, not exhaustive literature reviews. Older papers are identified by their citation dates and do not establish present-day experimental status.

## Guided learning paths

The Learning paths tab provides five editorial routes: Gravity and time, The black-hole information problem, Approaches to quantum gravity, Quantum foundations, and Quantum information. Each route lists background knowledge, ordered reading prompts, read/not-read indicators, previous/next steps and a concluding comparison. Progress bars and Start/Continue/Review links appear in both Learn and My research. Continue chooses the first unread step, including skipped earlier entries. Review from start leaves all read markers intact. Shared entries count toward every path that includes them; progress stays browser-local and travels with exported/imported read markers. Route URLs and their theory-step URLs retain path context on reload. Unknown path IDs show the complete path list. These routes reuse existing catalog entries and do not introduce historical graph relationships. Every step has an expanded profile. Gravity and time begins with a sourced primer distinguishing proper time, Schwarzschild clock rates and the Unruh effect.

`docs/responsive-check.html` is a manual QA page that embeds the actual application at 320, 390 or 430 CSS pixels. It exercises responsive rendering without claiming device or Safari emulation.

## Personal research and release checks

My research supports browser-local bookmarks, explicitly saved notes, read markers and saved comparisons. JSON export/import includes validation, a merge preview, preservation of conflicting notes and explicit storage-failure reporting. See `WORKSPACE_RELEASE_2026-09-26.md` for limits and verification evidence.

PR #44 passed all 35 tests and Pages deployment. Live checks verified the 50-profile collection, searchable comparison, prerequisite return URLs, learning context after reload, all three new equations rendered by MathJax, and persisted bookmarks/notes/read markers. A real exported JSON backup was downloaded and parsed successfully. After resetting a stalled browser-control session, the actual exported backup was imported, merged and verified after reload. Saved comparison behavior also passed. The 320/390/430-pixel checks found one native file-picker overflow in the 320-pixel workspace; the follow-up constrains that label and input to the available width. Other views fit at all three widths. Automated import preview, merge and malformed-backup checks pass. Physical iPhone/Safari testing was not available.

## September 27 reliability and depth pass

Nine new cross-domain profiles bring every category into the profile collection. Automated Chromium and mobile WebKit tests cover note conflicts, draft recovery, durable URLs, rendered equations and 320-pixel layout. WebKit emulation does not replace physical iPhone testing. Current counts and remaining research gaps appear in [Coverage](COVERAGE.md).
