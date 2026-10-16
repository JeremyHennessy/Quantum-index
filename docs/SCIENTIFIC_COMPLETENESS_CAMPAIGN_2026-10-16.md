# Quantum Index — scientific completeness campaign

**Authorized:** 16 October 2026. **Intake main:** `3c2c260fd1f69d885afd04fa21df455424f0f037`. Current authoritative head must be rechecked before each new branch. The historical 14 October hosted/browser acceptance and existing scientific records are approved regression baselines, not permission for an unrelated redesign.

## Aim and evidence gates

Deepen the existing 481-entry sourced catalog into a dependable scientific atlas. Treat an entity, a formula, a directed relationship, and an empirical result as **separate claims** with separate acceptance evidence. A citation attached to an entry does not verify all its statements. Mathematical render success does not verify physical correctness. Published theoretical results do not count as experimental observations.

Snapshot at intake (generated, not a quality score): 481 entries, 405 equations, 163 documented theory-level formula gaps, 252 baseline formula metadata, 610 relationships (125 source-backed, 485 editorial), 27 Passports, 16 mixed-type Evidence records, 60 Research Questions, 550 bibliography records.

### Ordered scientific releases

1. **Provenance/freshness honesty** (this branch). Do not modify `theories.js` or renderer merely to hide weak freshness semantics. `lastReviewed` was populated by citation attachment; count only separately documented `literatureSweep` records (dated, scoped, registered source IDs), classifying absent sweep evidence as *unknown*, not stale.
2. **Held formal Passports**: `yang-mills` and `quantum-error-correction`. Read original primary sources and equation pages, reconcile derivative / curvature signs for Yang–Mills, and original Knill–Laflamme recovery conditions and source IDs for QEC. Preserve QED/GKSL review, never merge the old overlapping unpublished four-Passport branch blindly. Passports require applicability/limitations/comparators and no unsupported experimental claims.
3. **Astroparticle equation wave**: the current 26-entry category has 25 documented gaps and no formula-linked theory. Candidate exact IDs include `lambda-cdm`, `inflationary-cosmology`, `stochastic-inflation`, `quintessence`, `wimp-dark-matter`, `fuzzy-dark-matter`, `leptogenesis`; review source-specific equations before addition. Preserve distinctions among classical cosmology, particle models, and quantum formalisms. Aim for 8–10 meaningful first representatives, not decorative coverage.
4. **Next coherent formula waves**: the current `Quantum field theory` and `Quantum many-body & condensed matter` categories have 26 documented gaps each; `Quantum gravity & spacetime` has 40. Reconcile linked existing formulas first. Prioritize canonical frameworks with precise regimes; keep genuinely conceptual theories or theorem-first entries appropriately classified rather than invent equations.
5. **Equation metadata / evidence / provenance**: review baseline metadata in source-bounded batches (252 outstanding at intake), build empirical constraints with quantities/uncertainties/model boundaries, and promote only directional relationships backed by claim-specific sources. Deliberate editorial overlaps are legitimate and should remain labeled editorial.
6. **Exhaustiveness**: resolve new named candidates via ADD / ALIAS / SUBTYPE / RELATION ONLY / FORMULA ONLY / ALREADY COVERED / REJECT, maintaining provenance and exact-year semantics. Do not confuse recent developments with theory origin years.

## Source review acceptance checklist

Every accepted mathematical change records the exact source and section/equation/printed-page locator; notation, normalization, units, assumptions, regime, approximation order and model-family limits; tested linked IDs; and whether the record is primary, pedagogical, or review provenance. For novel empirical Evidence also record what the work does not establish. Do not invent source, data, precision or conclusion.

Work on branches from the live `main` head. Keep batches independent, reversible and small, preserve all prior approved UI/workspace behavior, generated metrics, archived historical review ledgers, and release fingerprints. Require `npm test`, `npm run validate`, full Chromium/WebKit and review of any affected math rendering before merging. Verify branch CI on its exact head, then separately verify merged main and hosted behavior where changed.

## Progress and next decision

- **16 October / phase 1:** generated freshness report corrected to distinguish *unknown literature sweep status* from *zero stale reviews among actual documented sweeps*, while keeping all original theory/formula/graph/Passport/Evidence data and UI unchanged. Source-attachment dates remain as historical catalog metadata. This statement describes branch intent; publication is subject to PR CI and merge verification.
- **Next scientific decision:** independently qualify `yang-mills` and `quantum-error-correction` held Passports using original sources; otherwise hold them and proceed with independently verifiable astroparticle equations.

- **16 October / QEC candidate:** independently inspected Knill–Laflamme original theorem, Eqs. (19)–(20), printed p. 13, and prepared a bounded QEC Passport and original-source formula metadata. This is still subject to PR, merged-main and hosted verification. Yang–Mills stays held.

- **16 October / Yang–Mills candidate:** QEC merged as PR #80 `a85f22e6`; original 1954 Yang–Mills printed p. 193 and independent university QFT lecture pp. 9–11 directly reviewed. Prepared single Passport + two explicit formula metadata qualifications, preserving mathematical strings and approved UI. Proposed figures 29 Passports, 551 bibliography sources, 156 explicit metadata; source and CI acceptance must precede merge. See `research/YANG_MILLS_SOURCE_REVIEW_2026-10-16.md`.

- **16 October / astroparticle wave candidate:** Yang–Mills PR #81 merged at `127a8de34f78b13b03dd2d99c6bba45afa78bb7e`. Three separate and source-reviewed formula representatives for ΛCDM, canonical potential slow-roll inflation and canonical quintessence now prepared in an isolated branch. Candidate metrics: formulas 408, formula-bearing theories 275, gaps 160, sources 554; verification still required. See `research/ASTROPARTICLE_FORMULA_SOURCE_REVIEW_2026-10-16.md`.

- **16 October / dependent dark-matter source slice:** drafted two further representative formulas—thermal WIMP number-density Boltzmann equation (Arcadi et al., Eq. 1) and stationary FDM Schrödinger–Poisson system (Hui et al., Eq. B1). This work is **dependent on PR #82** and is not accepted or deployed. Candidate totals: 410 formulas, 277 linked entries, 158 gaps, 556 bibliography records, 161 explicitly reviewed formula metadata. Full scientific scopes and source locators are in research/ASTRO_DARK_MATTER_SOURCE_REVIEW_2026-10-16.md.
