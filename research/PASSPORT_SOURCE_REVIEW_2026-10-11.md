# Nuclear Passport source review — 2026-10-11

This bounded scientific batch adds **two** new comparison-ready Passports: `nuclear-shell-model` and `in-medium-srg`. Their shared effective-Hamiltonian setting must not be confused with an exact fundamental nuclear solution. The **23 previously shipped Passport records are protected byte-for-byte**; no evidence record, theory, formula, relation or historical ledger is altered. Machine-readable review decisions and specific source locations are in [PASSPORT_SOURCE_REVIEW_2026-10-11.json](PASSPORT_SOURCE_REVIEW_2026-10-11.json).

## Source-reconciled mathematical structures

- **Nuclear shell model:** Stroberg et al., *Non-Empirical Interactions for the Nuclear Shell Model: An Update*, arXiv:1902.06154, Introduction and Sec. 2.1 Eq. (3), uses the P/Q model-space projection with both `P H_eff P |Psi_n> = E_n P |Psi_n>` and `Q H_eff P = 0`. The existing atlas formula displays the projected eigenproblem; the reviewed Passport calls out the companion decoupling assumption rather than implying the formula is complete. Sections 5, 6 and 8 discuss numerical comparisons, collective/intruder issues and solver/interaction separation.
- **In-medium SRG:** Hergert, *The In-Medium Similarity Renormalization Group: A Novel Ab Initio Method for Nuclei*, arXiv:1512.06956, Sec. 3.1 Eqs. (1)–(4), derives `H(s)=U(s) H(0) U†(s)`, `dH/ds=[eta,H]`, `eta=(dU/ds)U†=-eta†` and ordered U. Secs. 3.2–3.5 cover normal-ordered flow; Secs. 4, 7–9 discuss generators and approximation limits. Stroberg et al. Sec. 6.2 independently discuss intruder-state problems.

Both are methods/frameworks, not independently observed entities. Source review and numerical comparisons **do not** count as new experimental Evidence. Practical IM-SRG rank truncation is not proven to preserve exact unitarity, and nuclear shell-model spectral agreement may depend on fitted interactions. The new Passport records explicitly expose comparisons, discriminators, unanswered questions, evidence nonclaims and source locations. Source identifiers and formula identifiers were verified to exist already, so there are no duplicated theory/formula entities.

## Four held candidates

- **QED:** review modern compact Lagrangian notation and hbar/c/gauge coupling consistency; Feynman and Dyson historical papers support perturbative/QED formulations, not automatically the exact modern expression printed in the atlas.
- **Yang–Mills:** original Yang and Mills 1954 p. 193 Eqs. (4), (9), (11) located; reconcile SU(2) original conventions versus generic modern notation and review empirical/confinement-limit language before publication.
- **GKSL:** AIP abstract and GKS theorem pointer are available, but primary full-text theorem/convention and Lindblad bounded-generator limitations require direct review.
- **Quantum error correction:** Knill–Laflamme 1997 original paper is catalogued but not among the existing formula record's `sourceIds`; review and correct exact original equation provenance before shipping the Passport.

The original six-candidate scope JSON dated October 8 is intentionally unchanged; this is an additive 2026-10-11 review decision. The next bounded release should address the QED/QEC locator discrepancies, then finish the four remaining Passports when all source gates clear.
