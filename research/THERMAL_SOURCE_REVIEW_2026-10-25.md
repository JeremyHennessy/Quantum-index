# Quantum thermal metadata source review — 2026-10-25

Candidate proposal: [record audit](THERMAL_SOURCE_AUDIT_2026-10-25.json), based on `ea3bcdb95d39cace2dee6afc264f7cd5523a88b6`.

## Findings and bounded changes

All three cards currently have empty assumptions and variables. Their displayed equations are retained. `landauer` changes the supported role value from `derived identity` to `canonical`: the record contains a lower-bound inequality, not an identity. No new role, formula, theory, association, evidence item or claimed discovery is proposed.

- `gibbs-state`: define the canonical ensemble and its normalization/domain; do not imply arbitrary open dynamics or interacting marginals are Gibbs states of their bare Hamiltonians.
- `jarzynski`: state the initial ensemble, fixed unitary protocol, two-measurement work distribution and same-temperature free-energy comparison. A generic work-operator expectation is not interchangeable.
- `landauer`: make the unbiased-reset specialization and heat direction explicit; distinguish entropy decrease from the name “one bit” and the limiting ideal benchmark from exact finite-reservoir attainability.

## Inspected evidence

- [Tasaki, version 2 (2000)](https://arxiv.org/pdf/cond-mat/0009244v2#page=2): Sections 2.1–2.2, Eqs. (2.1), (2.4)–(2.7), printed/PDF pp. 1–2. Eq. (2.7) uses two inverse temperatures; the proposed specialization identifies them. The author calls the energy-distribution average classical and distinguishes it from general operator expectations.
- [Reeb–Wolf, version 3 (2014)](https://arxiv.org/pdf/1306.4352v3#page=9): assumptions in Section 2.1; heat/entropy definitions Eqs. (7)–(8); Theorem 3 Eqs. (22)–(23); Corollary 4; Proposition 5 and Section 6. The primary theorem handles general entropy decrease; the retained bit equation is its ideal-reset specialization, not a finite-temperature finite-bath existence claim.
- [Goold et al., version 3 (2016)](https://arxiv.org/pdf/1505.07835v3#page=21): existing review retained. Section II.C, p. 8, supports the interacting-marginal qualification. Section V.A Eqs. (16)–(20) explicitly fixes TPM work and free energy; Example 3, p. 16, covers unknown-bit and partial-information erasure. This is review evidence, not an original derivation claim.

Versioned PDF downloads returned PDF magic and independent hashes listed in the JSON. Copyrighted PDFs were not saved or bundled. Exact equation/domain text was inspected. No source was inferred from an abstract alone.

## Independent mathematical spot checks

132 Python assertions passed (reproduce with `python /tmp/quantum-thermal-math-check.py`): Gibbs positivity/normalization and constant-energy-shift invariance; driven two-level TPM Jarzynski checks; partial-swap heat/entropy identity; and three counterexamples/limits.

For H_i = sigma_z, H_f = sigma_x, U = I and beta = 1, the TPM exponential average is 1, while Tr[rho_i exp(-(H_f-H_i))] is about 1.136. This rejects a generic “work is one observable” replacement. A coupled two-qubit Gibbs marginal differs from the bare-zero-Hamiltonian Gibbs state. A biased bit has less than ln 2 entropy. These are bounded algebraic fixtures, not experiments or completeness proofs.

Recommended integration checks: exact runtime three-record delta; only two appended source records; unchanged mathematical strings, IDs and theory links; source locator rendering; visible regime/units at narrow widths; regenerated coverage and asset hashes; full existing suite. Expected explicit/baseline counts become 268/189 and bibliography 603; formula and gap counts stay 457/114.

Independent source review completed before integration. No browser or deployment acceptance is claimed by this research note.
