# KMS, finite instruments and DGLAP — local dependent candidate

**Local integration only, 26 October 2026. Not published, merged, deployed, or approved for release.**

This expanded candidate preserves frozen two-gap commit
`50c5b434d4f249b7a17d7cfa616a602d2ac258df` and its recovery packet. Its new local
Git parent is that commit, while the same unpublished batch and integrity ledger
remain anchored to the exact response-metadata draft PR101 commit
`3e3bc1b6da8eed0e43ab96e98d69f990362b2f72`, tree
`cabf849ab7f3bc66fa0ececdee09320b939af1f0`. Accepted main at preparation was
`1ca99e424959e2238448335ccd7b6143c376e94d`. A dependency on draft PR101 is not an
assertion that the draft is accepted. Do not publish this batch without a new
explicit publication decision and reconciliation with the accepted base.

## Narrow scientific delta

The runtime change is exactly three formula cards (two defining and one LO
approximation), five source records,
and one declared source association on the existing `quantum-instruments`
entity. All pre-existing formula fields, other entity fields, relationships,
Evidence, Problems, Questions, Passports, profiles, historical/review dates and
application implementation remain unchanged. Other behavior is intended to remain
unchanged; real-browser verification is still required. No new entity or
empirical claim is added.

- **KMS equilibrium:** the complete scalar analytic-strip criterion, including
  bounded continuity, the all-pairs quantifier, positive `+i beta hbar`
  displacement and reversed operator order. Araki–Moriya, inspected
  arXiv:math-ph/0211016v2, Definition 6.1(A), PDF p.41; generator and continuity
  conventions on pp.31–32. This is not a promise of relaxation or a unique
  infinite-volume phase, nor a time-ordered fermionic sign rule.
- **Finite quantum instruments:** CP outcome operations whose sum is trace
  preserving, outcome probabilities and conditional states only for positive
  probability. A null-probability branch has zero output and an undefined
  normalized posterior. Ozawa, arXiv:2110.03219v2, pp.20–21, Eqs.(53)–(61),
  and Okamura–Ozawa, arXiv:1501.00239v3, Definition III.1 and CP qualification,
  p.7. Davies–Lewis remains attached as historical provenance; only the modern
  CP source is appended to the existing entity. This does not attribute the
  later CP requirement to an unseen original definition.
- **DGLAP PDF evolution:** one unpolarized LO spacelike, fixed-flavor,
  leading-twist collinear representative with number-density convolution,
  stripped-kernel coupling convention, child/parent indices and explicit
  endpoint distribution actions. HOPPET arXiv:0804.3755v1 pp.4,7 and QCDNUM
  arXiv:1005.1481v3 pp.8,26,62 support the equation and kernels. Momentum-density
  conversion, singlet flavor factors and the logarithmic scale convention are
  distinguished. Altarelli–Parisi 1977 remains historical provenance; its full
  text returned HTTP403 and no inspected-original equation claim is made. This
  is not time-like, polarized, TMD, BFKL or a complete phenomenological solution.

The original independently reviewed proposal records are preserved exactly in
`research/FORMULA_GAPS_SOURCE_AUDIT_2026-10-26.json`, with their candidate hashes.
The adjacent KMS/instrument/DGLAP proposal and review documents are **historical
pre-integration evidence**; their original main-based counts and local-only
statements describe those proposals, not this combined state. Raw research
PDFs/screenshots are not redistributed as repository assets.

## Measured structural coverage

| Metric | Draft PR101 base | Local combined candidate |
| --- | ---: | ---: |
| Theories | 483 | 483 |
| Relationships | 614 | 614 |
| Sources | 605 | 610 |
| Formula cards | 457 | 460 |
| Explicitly reviewed formula metadata | 271 | 274 |
| Formula-bearing theories | 323 | 326 |
| Documented formula gaps | 114 | 111 |
| Evidence records | 21 | 21 |

These are runtime-generated structural counts, not scientific-completeness or
empirical-verification scores. The catalog remains open. Entity provenance and
old review dates are not promoted by formula presence.

## Regression preservation and checks

`FORMULA_GAPS_INTEGRITY_2026-10-26.json` records exact before/after hashes and the
actual Git-base bytes, not the old parallel-main KMS ledger. Expansion retains
this same ledger boundary rather than adding another historical projection
layer; frozen two-gap history remains recoverable separately. Historical tests
compose **current → pre-gaps/draft PR101 → pre-response/PR100 → pre-thermal/PR99**.
Every changed-file projection rejects both undeclared mutations and stale
pre-change input. All historical assertions remain, with exact reader
substitutions tested separately. Existing browser tests change only current
formula/review totals, with the complete expected-file transformation asserted.

Reproduce in the checkout with the pinned development dependencies available:

```sh
npm test
npm run validate
python3 scripts/kms-math-check.py
python3 scripts/instrument-math-check.py
python3 -S scripts/dglap-stdlib-check.py
python3 scripts/dglap-math-check.py
python3 scripts/response-math-check.py
python3 scripts/thermal-math-check.py
npx --no-install playwright test --list
npx --no-install playwright test tests/browser/formula-gaps.spec.mjs
npm run test:browser
```

The new Node tests cover exact runtime preservation, derived gap transitions,
source role/locator constraints, duplicate/closed-gap rejection, zero-probability
wording, and immutable serial snapshots. Finite KMS checks comprise 16,200
matrix-unit cases, 180 dense/invariance cases and six negative controls. Finite
instrument checks comprise ten groups including 25 valid state/instrument
fixtures, multi-Kraus versus coherent sums, non-affine normalization and a
positive-but-not-CP transposition witness. Numeric checks supplement the
proposals' algebraic derivations, not universal empirical proof.

The DGLAP source script uses the locally available SymPy/SciPy research
dependencies for 17 exact, six rejected-mutation and three synthetic numerical
checks. Its independent standard-library counterpart checks 12 exact identities,
six negative controls and three separate numerical points. The npm regression
uses the latter under `python3 -S`, without new CI packages or installation. Its
only adaptation removes filesystem output and prints the full result; mathematical
operations remain identical to the independently reviewed script. Neither script
claims physical PDF evolution, finite-grid solver validation or phenomenology.

DOM checks assert complete untypeset equations, plain text, assumptions, source
locators and theory linkage. They stub MathJax and **do not** establish real
rendering or geometry. The new Playwright cases cover all three cards, source links,
full MathJax output, narrow mobile overflow, repeated theory/formula navigation,
Back/Forward and reload; equation screenshots inspect both scroller ends.

**Real browser execution remains unrun locally:** pinned Playwright 1.63.0
Chromium and WebKit executables are absent. No browser installer or local
server/socket retry was attempted. Test discovery is not browser QA. Hosted CI,
publication, merge, deployment and public asset identity are unverified for this
local candidate. The external delivery receipt binds actual test results and an
independent review to the final local commit/tree and verified Git bundle.
