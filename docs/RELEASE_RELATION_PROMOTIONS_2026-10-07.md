# Relationship evidence review — 7 October 2026

## Baseline and purpose

Exact verified production baseline: `f186171c405c0a7ab1461d250cb1800531808982`, tree `038f7a930f19feb43031bc347e8478eeae1686a7` (Bell/CHSH metadata release, PR #66). No UI changes or reclassification of the 481 theory entries. The scope is **four previously editorial, existing directional edges** whose relationship-specific evidence is visible in published source material. One source entry is added for the explicit MPS/PEPS/MERA comparison.

## Four evidence decisions

| Existing edge | Direct source and locator | Judgment |
|---|---|---|
| RG → functional RG (`extends`) | Wetterich (1993), *Phys. Lett. B* 301:90–94, publisher abstract: scale-dependent effective action and flow equation | High, formal mathematical relation. Truncated solutions are not claimed exact. |
| Categorical QM → ZX calculus (`extends`) | Coecke and Duncan (2011), arXiv:0906.4725v3, abstract: graphical calculus rooted in dagger monoidal categories and complementarity | High, formal mathematical relation. Not a universal completeness claim. |
| CFT → conformal bootstrap (`supports`) | Simmons-Duffin (2016), arXiv:1602.07982v1, §1.3 and ch. 9.1–9.4: crossing, OPE and conformal consistency | High, formal mathematical relation. Does not imply all CFTs are solved. |
| Tensor-network states → MERA (`extends`) | Evenbly and Vidal (2011), arXiv:1106.1082v1, abstract directly contrasts MPS, PEPS and MERA network geometries | Medium, formal family relation. MERA is **not** asserted to subsume all MPS. |

The evidence for the first two is principally original-paper abstracts; the third includes source-located HTML sections; the fourth is explicitly family-level and therefore medium confidence. This release does **not** claim an exhaustive review of those fields or fully verify every source result. The original directional edge types are preserved rather than rewritten to exaggerate support.

## Preservation and counts

- Exactly four existing records gain `sourceIds`, `evidenceType`, `confidence`, `evidenceNote`, `sourceLocator`, `reviewedAt`; no `from`, `to`, `type`, or `note` fields are modified.
- The only new bibliography record is `evenbly-vidal-tn-geometry-2011`, using the verified arXiv v1 URL.
- Total relationships **610 unchanged**; sourced **118 → 122**; editorial **492 → 488**; high **98 → 101**; medium **20 → 21**; sources **542 → 543**.
- Theory entries **481**, formulas **402**, Passports **16**, and formula gaps **165** unchanged.
- Presentation, app renderer, workspace, formulas, prior Passports, tests' package and publishing workflow are unchanged in byte-level preservation checks.

`RELATION_PROMOTIONS_2026-10-07.json` is the exact machine-readable ledger of selected before/after records, complete original relation/source SHA-256 fingerprints and unchanged-file hashes. Unpromoted edges remain editorial, including ontological-model debates awaiting relationship-specific source checks.

## Verification and rollback

Check exact candidate with `npm test`, `npm run validate`, full Chromium and WebKit tests, and visual inspection of existing relationship graph/list evidence indicators. Verify the hosted asset bytes against the tested merge tree after publishing. If tests fail, leave main untouched; do not disable tests or change UI to mask an evidence/data issue. Preserve old branch and source review records. To revert only this release use a first-parent revert of its merge, after reviewing any later commits, without rolling back prior approved content or resetting main.
