# Quantum Index coverage report

_Last audited: 2026-09-22_

Quantum Index indexes source-backed theories, formulations, interpretations, research programs, formal frameworks, theorem-level constraints, major computational theories, and adjacent astroparticle/cosmological frameworks when they materially connect the development or application of quantum theory.

## Audited corpus snapshot

- **367** shipped theory/framework entities
- **470** typed relationships
- **20** curated thought trees
- **13** top-level categories
- **358** bibliography/source records
- **345** source-linked formula entries across **28** formula categories
- **367 / 367 (100.0%)** shipped entries have dedicated source provenance
- **0 / 367** shipped entries are catalogued-only
- **278 / 367** are `primary-sourced`
- **89 / 367** are `review-sourced`
- **57 / 470** relation edges currently have relationship-specific source evidence
- **413 / 470** relation edges are explicitly marked editorial
- formula audit: **202 formula-bearing**, **134 documented formula-bearing gaps**, **11 interpretations**, **14 primarily conceptual**, **5 theorem-first**, **1 thought experiment**

### Category coverage

| Category | Entries |
|---|---:|
| Historical foundations | 5 |
| Formulations | 20 |
| Foundations & interpretations | 47 |
| Quantum field theory | 47 |
| Quantum information & open systems | 41 |
| Quantum gravity & spacetime | 75 |
| Quantum cosmology | 18 |
| Mathematical structures | 11 |
| Quantum optics & AMO | 14 |
| Quantum many-body & condensed matter | 31 |
| Quantum chemistry & electronic structure | 19 |
| Astroparticle physics & cosmology | 19 |
| Beyond standard quantum theory | 20 |

### Era coverage

| Era | Entries |
|---|---:|
| 1900–1924 | 6 |
| 1925–1939 | 26 |
| 1940–1959 | 22 |
| 1960–1979 | 73 |
| 1980–1999 | 111 |
| 2000–2014 | 88 |
| 2015–present | 41 |

## What “exhaustive” means here

There is no universally agreed finite set called “all quantum theories.” The boundary between a theory, model, formulation, theorem, approximation, calculational method, interpretation and research program is not unique.

The project therefore uses an auditable operational definition:

1. **First-class family coverage** — every materially distinct family found in the audited domain sweeps is either shipped or explicitly dispositioned as alias/subtype/formula-only/duplicate.
2. **Systematic granularity** — individual submodels are promoted only when that granularity is being applied consistently to the surrounding domain.
3. **Source requirement** — no shipped entity may remain catalogued-only.
4. **Candidate closure** — unresolved `ADD` decisions must be zero for the audited candidate set before a breadth sweep is called closed.
5. **Validation** — every expansion must pass the repository graph/formula/source validator.
6. **Reopenability** — discovery of a distinct sourced framework reopens the census; “closed” never means physics itself is finished.

Under that definition, the **2026-09-22 first-class family sweep is closed for the currently audited candidate set**. This is not a claim that no future literature search can discover another distinct framework.

## 2026-09-22 breadth expansion

The expansion added first-class source-backed coverage in the following previously thin areas:

- generalized measurement, DHR superselection, Gleason/GHZ/Frauchiger–Renner and constructor theory;
- QFT in curved spacetime, Higgs/BEH, GUTs, neutrino mixing/MSW/seesaw, Peccei–Quinn/axion and thermal QFT;
- black-hole thermodynamics, complementarity, fuzzballs, AMPS firewalls, soft hair, JT gravity, postquantum classical gravity and gravity-entanglement witness proposals;
- inflation/reheating, ΛCDM, dark-energy alternatives, MOND/TeVeS, multiple dark-matter paradigms, baryogenesis/leptogenesis and cosmic strings;
- Fermi/Luttinger liquids, Bose–Hubbard, spin models, topological phases, Bethe ansatz and quantum criticality;
- Born–Oppenheimer, valence-bond/molecular-orbital theory, CASSCF/RPA/DMET and post-CASSCF methods;
- Dicke/Tavis–Cummings, cavity/circuit QED, Floquet theory, Rydberg blockade, laser cooling, optomechanics, EIT/STIRAP and optical-lattice simulation;
- scalar–tensor/f(R)/Horndeski/DHOST/DGP/dRGT/Einstein–Æther/Galileon gravity;
- canonical Schwinger, Thirring, Gross–Neveu, NJL, Chern–Simons, BF and WZW field-theory laboratories.

## Remaining work is no longer one undifferentiated “missing theory” queue

The outstanding work is split into separate evidence layers:

- **formula closure:** 134 theory nodes are intentionally marked as formula-bearing gaps;
- **relation provenance:** 413 useful navigation edges remain editorial until a relationship-specific source review;
- **submodel depth:** constructive-QFT models, interpretation variants, gravity submodels, EFT subfamilies and method variants stay in the lower-granularity research backlog until their domain is expanded systematically;
- **continuous discovery:** PBS Space Time transcripts, major reviews, reference works and new literature remain candidate generators, not automatic authority for promotion.

See `research/EXHAUSTIVENESS_AUDIT.md`, `research/CANDIDATE_AUDIT.md`, `docs/FORMULA_AUDIT.md`, and `docs/RELATION_PROVENANCE.md`.

## Provenance states

### `catalogued`
Placed in the ontology but not yet independently source-verified. The validator currently forbids this state for shipped entities.

### `review-sourced`
At least one authoritative review or equivalent scholarly source directly supports the entity classification/core description.

### `primary-sourced`
At least one original or program-defining primary record is attached and verified.

## Acceptance controls

A release may not reduce the current breadth baseline without an explicit migration decision. The validator enforces source integrity, unique IDs, relation endpoints, thought-tree connectivity, formula references and a minimum corpus floor.
