# Formula candidate disposition

Reviewed 2026-09-27. This ledger reconciles the historical proposal list with the shipped atlas. “Represented” means a representative exists, not that every variant or metadata field has been reviewed. Open and partial entries remain research work.

The machine-readable ledger is [formula-candidates.json](formula-candidates.json). Earlier notes are preserved in [FORMULA_CANDIDATES_HISTORY.md](FORMULA_CANDIDATES_HISTORY.md). The runtime formula-gap census in [COVERAGE.md](../docs/COVERAGE.md) is the authoritative entry-level queue.

## 2026-10-11 reconciliation against the live atlas

The 50 existing candidate records were rechecked against the **405** distinct shipped formula IDs on main `e1520a6c4b09cd425629825038dd0e190878024d`. All referenced `formulaIds` resolve (no dangling IDs). Dispositions remain **15 represented / 13 partial / 22 open**; no formula was re-added or status promoted merely because another related equation exists. This catalog is a *candidate-level* queue, distinct from the **163 theory-level formula gaps** and **255 baseline-metadata formula records**. The September 27 candidate decisions and historical source ledger remain unchanged. A new Node integrity test enforces formula-ID resolution for future edits.

| Candidate | Disposition | Formula IDs |
|---|---|---|
| degenerate perturbation theory matrix problem | open |  |
| interaction-picture evolution operator | represented | `dyson-series` |
| spin addition | represented | `cg-expansion` |
| 3j, 6j and 9j symbols | open |  |
| fine structure | partial | `spin-orbit` |
| hyperfine Hamiltonian | open |  |
| atomic selection rules | partial | `wigner-eckart`, `dipole-rate` |
| Hartree–Fock equations | represented | `hf-fock-equation`, `hf-fock-operator`, `hf-energy` |
| Slater determinant | open |  |
| Roothaan–Hall equations | open |  |
| configuration-interaction expansion | represented | `ci-expansion` |
| coupled-cluster exponential ansatz | represented | `cc-ansatz` |
| CCSD working structure | partial | `cc-amplitude` |
| Møller–Plesset perturbation energies | partial | `mp2-energy` |
| Hellmann–Feynman theorem | represented | `hellmann-feynman` |
| virial theorem | represented | `quantum-virial` |
| Kohn–Sham total-energy functional variants | partial | `ks-equation`, `hk-variational` |
| self-energy definition | represented | `dyson-green`, `gw-self-energy` |
| Lehmann representation | represented | `lehmann` |
| Bethe–Salpeter equation | represented | `bse-equation` |
| random-phase approximation | represented | `rpa-density-response` |
| superfluid stiffness and London relations | partial | `london` |
| Josephson relations | open |  |
| Slavnov–Taylor identities | open |  |
| trace anomaly | open |  |
| gauge-fixed generating functionals | partial | `generating-functional`, `fp-determinant` |
| BRST transformations by field | open |  |
| Schwinger parameterization | open |  |
| dimensional-regularization master integrals | open |  |
| Jamiołkowski isomorphism | represented | `choi` |
| entanglement of formation | open |  |
| concurrence | open |  |
| channel-capacity formulas | partial | `holevo`, `coherent-information` |
| optical Bloch equations | open |  |
| Wigner–Weisskopf decay | partial | `spontaneous-decay` |
| squeezing operator | represented | `squeeze-operator` |
| master equations for driven cavities | partial | `lindblad`, `input-output` |
| AC Stark shift | open | `stark-first` |
| Lamb shift | open |  |
| Ashtekar Poisson brackets | represented | `ashtekar-poisson` |
| causal-set d'Alembertian and action | open |  |
| CDT/EDT discrete actions | partial | `cdt-partition`, `regge-action` |
| tensor-model large-N scaling | open | `tensor-model-partition` |
| tensor power spectrum | open |  |
| Page curve/generalized entropy variants | partial | `island`, `replica-entropy-limit` |
| Weinberg nonlinear Schrödinger structure | represented | `weinberg-nonlinear-eom` |
| Doebner–Goldin equation family | open |  |
| q-oscillator algebra variants | partial | `q-oscillator` |
| quaternionic Schrödinger equation variants | open |  |
| p-adic propagators | open |  |
