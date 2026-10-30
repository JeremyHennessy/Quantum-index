# Dark-matter DM-1A — primary equations reviewed, runtime candidate only

**Review date:** 29 October 2026. **Release state:** `source-reviewed-unreleased-runtime-proposal`. Exact protected intake main: `228cd84230d0eaef8325dad4a94dc81ad8cf5a27`. Source-reviewed, schema-compatible **proposed** theory, formula, bibliography and editorial-edge records are in [`research/DARK_MATTER_DM1A_SIMP_ELDER_PROPOSED_RECORDS_2026-10-29.json`](../research/DARK_MATTER_DM1A_SIMP_ELDER_PROPOSED_RECORDS_2026-10-29.json).

**No code, current theory/formula identities, application UI, historical ledger, generated coverage, CI, production deploy, source status or browser-local workspace has changed.** The proposed content is NOT in `theories.js` or `formulas.js`. Do not describe its expected counts as current runtime counts.

## Reviewed original sources

1. **SIMP 3→2 relic mechanism:** Hochberg, Kuflik, Volansky & Wacker, arXiv:[1402.5143v2](https://arxiv.org/pdf/1402.5143v2), published as *Mechanism for Thermal Relic Dark Matter of Strongly Interacting Massive Particles*, PRL 113, 171301 (2014). The author-v2 PDF was inspected visually on **printed/PDF p. 2**, Eqs. (5)–(6), and **printed/PDF p. 4**, Eq. (21). Original mechanism deposited February 2014, so proposed theory origin year is 2014.
2. **ELDER kinetic-decoupling relic:** Kuflik, Perelstein, Rey-Le Lorier & Tsai, arXiv:[1512.04545v1](https://arxiv.org/pdf/1512.04545v1), dated 14 December 2015, later PRL 116, 221302 (2016). The original v1 PDF was inspected visually on **printed/PDF p. 1** (sequence of kinetic decoupling, cannibal period and self-freezeout) and **printed/PDF p. 2**, Eqs. (1)–(2). The preprint model year is 2015, not the later journal year 2016.

This page-scoped inspection supports exact *formula transcription and explicitly limited physical interpretation*. It is not a rederivation of all the authors' calculations, a comprehensive source-sweep of related work, proof of model viability or independent empirical evidence.

## SIMP equations proposed

The source defines the effective 3→2 rate in Eq. (6) as

```text
<sigma v²>_(3→2) := alpha_eff³ / m_DM⁵ .
```

The proposed card labels this **defining parametrization**, not a model-independent microscopic cross section. Its `mass^-5` natural-units dimension follows directly and its numerical effective coupling can vary with nonperturbative interactions, light mediators and species content.

The author's Eq. (21), p. 4, is the one-species number-density balance

```text
dn/dt + 3 H n
  = -(n³ - n² n_eq) <sigma v²>_(3→2)
    -(n² - n_eq²) <sigma v>_ann .
```

**Physical scope:** a homogeneous expanding model with sufficiently rapid dark elastic equilibration and a thermal bath. The full equation includes ordinary 2→2 annihilation/inverse-production as a separately represented collision term. In the intended SIMP region, 3→2 number-changing reactions set relic freezeout and visible scattering removes excess heat. This is distinct from the existing one-species WIMP 2→2 equation; it is not a generic model of self-interactions.

**Sanity checks:** for `n=n_eq` both collision terms vanish; for positive rates and `n>n_eq`, both have the expected number-depleting signs. In natural units `[n]=E³`, `[H]=E`, `[<sigma v²>]=E⁻⁵`, so each term has `E⁴`. Finite positivity/dimension checks are not a rederived thermal solution or proof of cosmological viability.

## ELDER equations proposed

The original p. 2 Eq. (1) gives the approximate entropy relation `a³s' ≃ a³mχ nχ/T' = const` in the nonrelativistic **cannibal epoch** after kinetic decoupling, while internal number-changing reactions maintain chemical equilibrium. It is not a statement of comoving dark-entropy conservation throughout all cosmic epochs.

The original Eq. (2) is

```text
T' ≈ T_d / [1 + (3/x_d) ln(T_d/T)],    x_d = m_chi/T_d .
```

This shows slower temperature decline in the stated approximation with separate dark entropy and approximately `a ∝ T⁻¹`. For the illustrative `m_chi=100`, `T_d=20`, `T=10` (consistent units), the approximation yields `T'≈14.13 > T=10` and `< T_d=20`, not a physical detection claim.

**Physical distinction:** ELDER kinetic decoupling occurs *before* dark 3→2 chemical freezeout, unlike the SIMP thermal-equilibrium ordering, and its relic abundance is primarily controlled by visible-sector elastic scattering. The two original sources support separate mechanism entries; they do not establish exact graph historical causality. Proposed graph overlap links deliberately remain **editorial**.

## Formal candidate contract

The JSON proposes **2 new theory records, 4 source-located formula cards, 2 bibliography source records and 2 editorial navigation relationships**; all existing source/range/ID bytes are protected by being untouched. If fully integrated into the exact baseline, the *expected* generated totals would be 485 theories, 464 formula cards, 612 sources, 328 formula-bearing entries, 111 previously documented formula gaps, and 616 relationships (130 sourced; 486 editorial). **These are unshipped projections, not current app metrics.**

### Remaining gates before scientific release

1. Independent technical review of every symbol, source locator, assumption, model regime, formula class and theory identity, including SIMP rate-normalization conventions and ELDER entropy approximations. If a claim is unsupported, change or hold it **inside the candidate**, not the accepted runtime.
2. Reconcile the exact `main` SHA and the historical *fail-closed* state-projection chain. Introduce one narrowly scoped new integration checkpoint while leaving all old immutable ledgers and tests intact; preserve exact prior source/formula bytes. Do not bypass prior counts by deleting/weakening checks.
3. Apply the exact candidate data in a separate integration branch, regenerate coverage/freshness/hashed assets and add deterministic mathematical and data tests. Run `npm test`, `npm run validate`, Chromium and WebKit MathJax/responsive/Back/Forward tests; inspect actual equation rendering, including narrow screens and scroll endpoints.
4. Independently verify exact-head GitHub Actions, guarded merge to `main`, Pages deployment and **served-file hash parity**. Do not describe a PR or a green test list as deployment approval.
5. Only later consider dated detector Evidence or comparative theory Passports; the original papers are *theoretical proposals*, not confirmed microscopic identity of dark matter.

**Rollback:** this candidate is isolated in newly added research files and requires no production rollback. A later integration must have its own explicit reversible commit and acceptance receipt.
