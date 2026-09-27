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

Implementation was merged in [PR #44](https://github.com/JeremyHennessy/Quantum-index/pull/44), head `6328b8d6d0513a319b22349b26547d0d25c1b1cf`, merge `8fcd23df38a73965005d663561b0c6c63b4e92d6`. Exact-head CI, main CI and Pages deployment succeeded.

Hosted Chrome checks verified:

- All 50 profile links are present; comparison search narrows options and retains selection.
- Wheeler–DeWitt has the expanded profile; a prerequisite detour preserves the learning-path return link after reload.
- Comparison selection survives a theory-to-prerequisite detour.
- All three new equations render with one MathJax container each and no MathJax error elements.
- A sample Unruh bookmark, note and read marker survive reload; My research shows 1/5 progress on Gravity and time.
- Export produced a valid 219-byte JSON file containing those records. The browser download-event listener timed out, but the actual downloaded file was found and parsed successfully.

The browser-control session stalled during the file chooser step. Resetting that session recovered the completed import preview. The exported backup was merged successfully, and its note, bookmark and read marker survived reload without duplication. Saving a comparison also produced the expected workspace link.

Responsive checks covered Learning paths, Compare, Theory, Equations and My research at 320, 390 and 430 CSS pixels. All views fit except My research at 320 pixels: the native file input's label extended beyond the frame. The follow-up constrains both label and input to the available width. Acceptance recheck after publication: workspace document scroll width must equal client width (305 pixels inside the 320-pixel frame, with its 15-pixel scrollbar). At 390 and 430 pixels all five views had matching document client/scroll widths of 375 and 415 pixels respectively.

The responsive harness is a Chrome layout check, not an iPhone/Safari or touch-device test. Physical iPhone/Safari verification remains a separate manual check.
