# Quantum chemistry formula curation — 2026-09-26

This release closes the 12 remaining formula gaps in the quantum chemistry and electronic structure category. It adds 11 representative formulas, eight bibliography records, and evidence notes for eight existing relationships. CASSCF and DMRG-SCF share a variational-objective card whose metadata distinguishes complete active-space coefficients from finite-bond-dimension matrix product states.

Every new formula has explicit assumptions, variables, units, applicability, a review date, and a link to its source location. This is a source-and-convention review of representative equations, not exhaustive mathematical coverage or independent expert certification. Existing theory records, dates, 361 formula expressions, navigation, styles, and dependencies are unchanged.

| Theory | Representative and source location |
|---|---|
| Born–Oppenheimer | Single adiabatic surface and clamped-nuclei eigenproblem; Abedi et al. (2010), opening discussion and Eq. (2). The approximate BO product is distinguished from their exact factorization. |
| Valence bond | Heitler–London spatial singlet; Sax (2015), Sec. 5.1, Eq. (1). Real normalized orbitals and nonzero overlap are handled; spin factor is specified separately. |
| Molecular orbital | LCAO expansion and overlap-metric orthonormality; Roothaan (1951), Sec. III, Eqs. (45)–(50). |
| CASSCF; DMRG-SCF | Joint orbital and wavefunction optimization; Ghosh et al. (2008), Secs. I–II, Eqs. (5)–(7), (11). The combined variational statement does not assert global convergence. |
| RPA | Direct-RPA response closure; Ren et al. (2012), Eq. (19), at full coupling. Exchange-correlation kernel omitted. |
| DMET | Original single-site impurity-plus-bath occupation fit; Knizia and Chan (2012), Eq. (5). This diagonal-occupation objective is not attributed to all later variants. |
| CASPT2 | Projected-Fock Hamiltonian and vanishing first-order residual; Shiozaki and Mizukami (2015), Eqs. (16)–(17). Explicitly a relativistic internally contracted realization. |
| NEVPT2 | Strongly contracted Dyall perturber energies; Guo et al. (2016), Eqs. (4)–(10). The displayed second-order energy sum is derived from their normalized perturber construction. |
| EOM-CC | IP-sector projected eigenproblem; Lange and Berkelbach (2018), Eqs. (11)–(16). Positive ionization-energy convention reverses their Green-function pole sign. |
| ADC | Hermitian neutral-response secular equation; Schirmer (1982), Eqs. (29)–(31). Charged-sector ADC is not implied. |
| GF2 | Dyson closure and second-order dressed imaginary-time self-energy; Phillips and Zgid (2014), Sec. II, Eqs. (1)–(3). Spin-restricted real AO convention; F and the dynamic self-energy are updated. |

The batch manifest is `CURATION_CHEMISTRY_2026-09-26.json`. Relationships retain their existing endpoints and labels, with specific formal-relation notes. No historical influence is inferred from similar equations. Source PDFs are not redistributed.

## Result

- Formula gaps: 188 → 176; entries with formulas: 231 → 243.
- Formula cards: 361 → 372; explicit metadata: 96 → 107.
- Source-backed relationships: 67 → 75; editorial relationships: 521 → 513.
- Bibliography: 455 → 463; catalog remains 464 entries and 588 relationships.

## Verification and rollback

`npm test`: 14 passing tests, including batch coverage and citation metadata, previous navigation regressions, and an independent tensor-product normalization check for the displayed Heitler–London factor. `npm run validate` checks references, structure, and generated coverage reports. These tests use a MathJax stub; actual rendering must be checked on the deployed site.

Merge after CI passes on the exact head, then check the Pages deployment, all selected formula routes, real MathJax output, source links, and return navigation. Mobile viewport testing remains outstanding because the current browser surface does not expose viewport emulation. Revert the release merge commit to roll back; there is no migration or hosting change.
