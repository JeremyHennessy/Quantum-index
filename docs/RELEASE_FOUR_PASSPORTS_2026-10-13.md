# Release — four source-reviewed Theory Passports (2026-10-13)

## Intended runtime delta

- Theory Passports: 25 → 29
- Bibliography records: 549 → 550
- Formula records: 405 → 405
- Formula metadata: 150 explicit / 255 baseline → 157 explicit / 248 baseline
- Formula gaps: 163 → 163
- Evidence records: unchanged at 16
- Relationships: unchanged at 610 (125 sourced / 485 editorial)

## Scope

Add QED, Yang–Mills, GKSL/Lindblad and quantum-error-correction Passports after source-specific review. Correct source/convention metadata on seven existing formula records and add one authoritative modern-QED notation source. No UI redesign, workspace migration, new theory, new relationship or new Evidence record.

## Acceptance

Before merge, require:
- all historical fingerprints to reconstruct their original states;
- full Node/data/generated coverage/freshness/asset validation;
- complete Chromium and WebKit suite;
- real MathJax rendering for the reviewed formulas;
- desktop/mobile comparison and formula screenshots;
- exact candidate SHA/tree recorded.

After merge, verify Pages deployment and fresh hosted routes separately. A green deploy event alone is not hosted acceptance.

## Rollback

First-parent revert this release only after checking whether main has moved. There is no storage migration.
