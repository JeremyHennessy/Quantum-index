# All-category scientific completeness campaign — 29 October 2026

**State:** cross-category intake, not an approved scientific-data release. **Exact main baseline:** `228cd84230d0eaef8325dad4a94dc81ad8cf5a27`. The approved UI, science runtime, sources, formula cards, relation evidence, generated coverage, historical integrity ledgers and deployments remain untouched.

This expands the dark-matter-specific audit into **all 14 shipped top-level categories**, with **64 individually dispositioned research questions/candidates**. Each has a research disposition, not a proven missing identity or automatic ADD decision. The machine-readable intake is [`ALL_CATEGORY_CANDIDATES_2026-10-29.json`](../research/ALL_CATEGORY_CANDIDATES_2026-10-29.json); the executable read-only census is `node scripts/all-category-census.mjs`.

## Baseline and limitations

Current shipped structural totals: **483** theory/framework entries; **460** formula cards; **111** documented formula gaps; **614** relationships (**130** source-backed, **484** editorial); **610** bibliography sources; **35** Theory Passports; **21** Evidence records. `docs/FRESHNESS.md` reports **zero** literature sweeps satisfying the explicit scope/date/source-ID provenance rule; this is *unknown sweep status*, not evidence that no research was performed. Theory-level source attachment does not establish relationship-specific provenance.

The prior `research/CANDIDATES.md`, `research/CANDIDATE_AUDIT.md`, `research/EXHAUSTIVENESS_AUDIT.md` and `docs/FRESHNESS.md` were read and cross-reconciled as candidate queues, **not treated as current missing-entity proof**. Several old candidates were promoted or subsumed since those audits. The exact/alias scan is deliberately conservative: `NOT_EXACTLY_NAMED_UNRESOLVED` means a reviewer must inspect aliases, mathematical overlap, primary sources and granularity. A fuzzy name score is a navigation aid only.

## Category-by-category research priorities

| Existing category | Intake | Priority and differentiation |
| --- | ---: | --- |
| Historical foundations | 4 | Separate historical experiments from theories; check semiclassical quantization as a formalism before new identity |
| Formulations | 4 | Schwinger–Keldysh, TDVP, covariant evolution and stochastic trajectories; first reconcile existing Kadanoff–Baym and Tomonaga–Schwinger |
| Foundations & interpretations | 4 | PBR and Leggett–Garg mathematical/no-go evidence, Wigner's friend variants; existing modal and Frauchiger–Renner must not be duplicated |
| Quantum field theory | 5 | Noninvertible symmetries, TMD factorization, constructive φ4 and Schwinger–Dyson depth; separate full frameworks from special cases |
| Quantum information & open systems | 5 | Error mitigation vs correction, quantum causal interventions, coherence resources, lattice surgery; preserve existing comb/process-tensor identities |
| Quantum gravity & spacetime | 5 | Nonlocal gravity, celestial holography, relative locality, matter–gravity fixed points and wedge reconstruction; do not relabel AdS/CFT or asymptotic safety |
| Quantum cosmology | 4 | Wheeler–DeWitt minisuperspace, third quantization, LQC bounce and no-boundary refinements; likely submodels unless distinct source-defined formalism |
| Mathematical structures | 4 | Modular operator theory, detailed balance, fusion categories and higher categories; require formal theorem/definition and scope |
| Quantum optics & AMO | 4 | Dicke collective emission, ion gates, EIT storage, Rydberg gates; prioritize equations/implementations over new umbrella theories |
| Quantum many-body & condensed matter | 5 | 2024 wavefunction matching, TDVP, scars, fractons and strange metals; distinguish new computational methods from established ETH/MBL |
| Quantum chemistry & electronic structure | 4 | CIPSI, CCSD(T), GW/BSE, multireference DMRG; use consistent method granularity and check existing CI/CC/DMRG |
| Astroparticle physics & cosmology | 6 | Warm DM, ALPs, atomic DM/DAO, Higgs portal, Einstein–Boltzmann perturbations and non-Gaussianity; coordinate with separate DM-0/DM-1A/DM-1B |
| Nuclear quantum theory | 5 | Nuclear coupled cluster, lattice nuclear EFT, QMC, symmetry-adapted NCSM and neutrino–nucleus response; check IMSRG/NCSM/chiral EFT overlap |
| Beyond standard quantum theory | 5 | Nonlinear density matrices, quaternionic/real tests, hybrid classical–quantum stochastic models; retain DHR and Hall–Reginatto identities |

## Cross-category gates

1. **Identity first.** For each candidate, search IDs, titles, aliases, source-linked parents and mathematical content. Record ADD / SUBTYPE / FORMULA ONLY / MODEL ONLY / EVIDENCE ONLY / RELATION ONLY / ALREADY COVERED / HOLD with explicit rationale. Exact-name absence is not ADD.
2. **Primary source and chronology.** For a proposed first-class entity, independently inspect original work, publication/preprint year, definitions, scope and assumptions. A review article is not automatically the historical origin.
3. **Mathematics before count chasing.** Prefer a defining, source-located equation with variables, units, conventions, regime, caveats and math verification. Do not add cosmetic rearrangements or equations to conceptual frameworks just to reduce the gap count.
4. **Graph relations are claims.** Existing 484 editorial relationships remain clearly labeled; no promotion to sourced/high without a relationship-specific document.
5. **Evidence is not theory.** Experimental bounds, observational tensions, detector methods, historical experiments and numerical algorithms belong in their respective data layers, not fabricated particle theories.
6. **Freshness provenance.** A scoped literature review must carry a date, exact scope and bibliography IDs. Do not convert `lastReviewed` into a claim of exhaustive up-to-date review.
7. **Release isolation.** DM-1A integration PR #107 and DM-1B source review stay independent. New research is in isolated small PRs. Preserve approved UI, historical source bytes and runtime storage semantics; require full tests, both browser engines, exact-main and served-asset parity before claiming production acceptance.

## Recommended order of next independently verified research batches

**A. High-leverage missing frameworks:** noninvertible symmetries, quantum error mitigation, celestial holography, fracton/subsystem symmetry, operator-algebraic modular theory and nuclear coupled-cluster/lattice EFT. These are candidate *reviews*, not accepted ADDs.

**B. Mathematics/phenomenology depth:** Schwinger–Keldysh and TDVP, GW/BSE, Dicke collective emission, axion misalignment, cosmological transfer and TMD evolution. Use existing parent IDs whenever possible.

**C. Evidence and problem layers:** PBR/Leggett–Garg experiments and constraints, dark-matter detection/structure bounds, neutrino–nucleus responses, real/quaternionic quantum-theory tests, and model-specific gravitational/cosmological discriminators.

**D. Ongoing 111 formula gaps and 484 editorial edges:** prioritize by scientific value, available primary evidence and category impact, not an arbitrary closure percentage.

## Reproduction and release status

```sh
npm ci
node --test scripts/all-category-census.test.mjs
node scripts/all-category-census.mjs > /tmp/quantum-all-category-review.json
npm test
npm run validate
```

The census output is a **dynamic read-only report**, not an edited runtime. CI success verifies only the bounded inventory/test logic. No scientific source pages for these 64 intake candidates were independently reviewed as part of this cross-category pass, and no new theory or formula is promoted here.
