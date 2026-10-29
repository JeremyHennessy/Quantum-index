# Dark-matter scientific completeness campaign — 29 October 2026

**Status:** DM-0 candidate intake and duplicate audit only; **no new dark-matter theory, equation, Evidence record, citation status or live UI has been accepted or released.**

**Exact inspected `main` baseline:** `228cd84230d0eaef8325dad4a94dc81ad8cf5a27` (27 October 2026). The evidence-limited candidate ledger is [`research/DARK_MATTER_CANDIDATE_CENSUS_2026-10-29.json`](../research/DARK_MATTER_CANDIDATE_CENSUS_2026-10-29.json). Its statuses are **decisions about what to investigate**, not scientific certification or permission to merge unreviewed data.

## Scope and current coverage

The inspected baseline has **483 theory/framework entities, 460 formulas, 111 documented formula gaps, 610 bibliography records, 614 directed relationships (130 source-backed), 35 Theory Passports and 21 Evidence records**. These are structural runtime facts, not a scientific quality score. The separate scientific Problem `dark-matter` already links multiple candidates.

Explicitly represented, and therefore **not** candidates for duplicate standalone umbrella entries: `lambda-cdm`, `wimp-dark-matter`, `axion`, `fuzzy-dark-matter`, `sterile-neutrino-dark-matter`, `self-interacting-dark-matter`, `primordial-black-hole-dark-matter`, `dark-photon`, `freeze-in-dark-matter`, `asymmetric-dark-matter`, `mond`, and `teves`. Other modified-gravity entries already exist. A dark-matter model/constraint is not automatically a theory identity.

The current axion entry exists, but a dedicated directly linked formula is not established by the inspected formula record associations; a source-scoped axion misalignment/field equation review is therefore prioritized. Existing WIMP, SIDM, PBH, fuzzy-DM, sterile-neutrino, freeze-in and TeVeS formula cards are *not* evidence that every variant and production mechanism is covered.

## DM-0 decisions (56 separately recorded candidates)

The append-only ledger contains **6 source-backed-for-identity ADD candidates**: SIMP 3→2 relics, ELDER kinetic-decoupling relics, galactic superfluid dark matter, dipolar dark matter, atomic dark matter and dark acoustic oscillations. The abstract-level reviews identify *distinct mechanisms*; they do not yet qualify defining equations, model validity, or addition to the shipped catalog.

**High-priority origin/math holds:** warm dark matter, generic axion-like particles, and dark QCD have clear physical motivations for separate coverage, but the current inspected sources are not verified original-origin and exact-formula reviews. Treat them as `HOLD_ORIGIN` rather than fabricate first dates or new mathematics. Higgs-portal scalars, mirror/dissipative sectors, light vectors, decays and related proposals require dedicated primary-source passes.

**Submodels rather than automatic umbrella theories:** neutralino/wino/higgsino candidates, dark baryons/mesons/glueballs, dark compact objects and gravitino/axino relics need explicit parent/subtype decisions. **Models and mechanisms:** NFW, Einasto, Burkert, Standard Halo Model, coannihilation, misalignment and PBH mass functions belong in their appropriate mathematical/phenomenological layer. **Observations:** rotation curves, lensing/cluster collisions, structure constraints and search limits belong in dated Evidence or scientific Problems with uncertainties and model scopes. Already-covered models must retain their stable IDs.

## Sources examined and exact limits

The sources registered in the JSON are real publisher or author-abstract/official-index records. **No original PDF equation pages were independently inspected during this batch**; do not call this complete primary mathematical review.

| Distinct mechanism or class | Inspected source | Unresolved math/source gate |
| --- | --- | --- |
| SIMP 3→2 freeze-out | [Hochberg et al., PRL 2014](https://doi.org/10.1103/PhysRevLett.113.171301) | 3→2 collision term, equilibrium/decoupling assumptions, source equation page |
| ELDER kinetic decoupling | [Kuflik et al., PRL 2016](https://doi.org/10.1103/PhysRevLett.116.221302) | 2015 preprint vs 2016 publication origin, scattering and 3→2 hierarchy |
| Superfluid DM | [Berezhiani & Khoury, PRD 2015](https://doi.org/10.1103/PhysRevD.92.103510) | superfluid phonon action, galactic phase conditions, cluster limitations |
| Dipolar DM | [Blanchet & Le Tiec, PRD 2008](https://doi.org/10.1103/PhysRevD.78.024031) | GR action, gravitational polarization and perturbative order |
| Atomic DM | [Cyr-Racine & Sigurdson, PRD 2013](https://doi.org/10.1103/PhysRevD.87.103515) | hidden recombination, dark radiation, model parameters |
| Dark acoustic oscillations | [Cyr-Racine et al., PRD 2014](https://doi.org/10.1103/PhysRevD.89.063517) | coupled evolution and transfer-function assumptions |
| Warm DM (origin hold) | [Bode, Ostriker & Turok, 2001](https://arxiv.org/abs/astro-ph/0010389) | original-family chronology and distribution-dependent transfer |
| Generic ALPs (origin hold) | [Irastorza & Redondo, 2018 review](https://arxiv.org/abs/1801.08127) | parent QCD axion distinction and primary Lagrangian |
| Dark QCD (origin hold) | [Alfano et al., 2026](https://doi.org/10.1007/JHEP05(2026)199) | first source/umbrella/subtype scope and equations |
| Composite/heavy DM | [Bramante, 2026 review](https://doi.org/10.1146/annurev-nucl-100324-114307) | candidate identities and mass/interaction-specific bounds |

No hypothesized particle identification, detection signal, model ranking or universal constraint is accepted merely by appearing in a paper or review.

## Small-batch sequence and hard release gates

1. **DM-0 — identity/disposition record (this PR).** Machine-check all 56 candidates against the actual catalog IDs; attach the precise source-intake level; leave runtime untouched. Validate exact GitHub diff, Node regression and release baseline integrity. This stage is documentation/research infrastructure, not a scientific runtime release.
2. **DM-1A — SIMP/ELDER.** Review original full texts and exact defining Boltzmann/relic equations. Decide independently whether each candidate is a theory-level mechanism and what differentiates it from the existing WIMP/SIDM/FIMP nodes. Add only verified source locations, caveats and a small graph slice. Full Node, generated coverage/freshness/assets, Chromium/WebKit, physical math review, merge and served-site acceptance required.
3. **DM-1B — atomic DM/dark acoustic oscillations.** Scope coupled matter-radiation dynamics, recombination and source-defined perturbation equations. Avoid duplicate dark-photon mediation claims. Independent gates.
4. **DM-1C — superfluid/dipolar models.** Review the model action and applicability limits, and compare against existing MOND/TeVeS without implying experimental uniqueness. Independent gates.
5. **DM-2 — existing dark candidates.** Begin with source-specific QCD axion mathematics and production, then WIMP, PBH, SIDM, sterile neutrino and fuzzy-DM formula/Passport depth; preserve all previously source-reviewed record bytes.
6. **DM-3/4 — dated Evidence, candidate holds and relation provenance.** Only attach measured quantities with experiment/dataset, date, uncertainty, model family and explicit nonclaims; promote a directed relation only with relation-specific source evidence.

### Required preservation

- No live-site edit, app layout/CSS/route/label change, generated-data adjustment, source-status promotion or new theory identity in DM-0.
- Existing approved UI, science source strings, notebook storage semantics, application behavior, CI/billing configuration and immutable historical ledgers are protected.
- Always reconcile a change to the actual latest `main` SHA before preparing its release; preserve rollback by exact commit. No production-as-scratchpad experimentation.
- **Do not** merge a scientific candidate merely because Node tests pass or a browser test discovers cases. Source pages, complete browser engines, main CI, Pages deployment and served-asset identity are separate gates.

## Reproduce the DM-0 acceptance

```sh
npm ci
node --test scripts/dark-matter-census.test.mjs
npm test
npm run validate
```

Review the PR diff and confirm the changed files are limited to **new research documentation and tests**. The test checks candidate IDs and related theory IDs against the shipped catalog at the exact intake baseline. It does *not* validate missing full-text equations.

**Next scientific decision:** qualify SIMP and ELDER independently under DM-1A. No formula, observational Evidence, or source status should be fabricated simply to lower the formula-gap metric.
