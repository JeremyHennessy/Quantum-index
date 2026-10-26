# Response metadata source review — 25 October 2026

## Scope and reconstruction provenance

This is a newly reconstructed, freshly validated candidate, not byte-exact recovery of an earlier missing local artifact. The authored proposal was reconstructed from retained conversation/tool-call content. Its metadata and source locators were independently re-reviewed against freshly retrieved primary-paper PDFs. Earlier test results are not proof for these new bytes.

The immutable input is `RESPONSE_SOURCE_PROPOSAL_2026-10-25.json` (SHA256 `51ab3411f745e07d3a4595fe0d82bba7badf30f6ae04bc0dc86470035d582317`). Its proposal-stage statement about not changing historical projections describes that input artifact, not this separate integration. `RESPONSE_INTEGRITY_2026-10-25.json` explicitly records the integration and its two historical-helper adaptations.

The scientific checkpoint is exact reviewed PR #100 head `ec083e7b4ee712ee82c12d21434119eb852eac0b`, tree `9bf53a450eac4af65fd9f1f88b07a60b90d43df5`. PR #100 subsequently merged as `1ca99e424959e2238448335ccd7b6143c376e94d` with that identical tree; this candidate is reconciled onto the merge. The frozen input's pending-base wording records its proposal-stage provenance, not the current release state. This candidate does not modify the PR #100 branch, and the merge alone is not proof of hosted acceptance.

## Three existing cards only

- **Kubo (`kubo`):** the retained positive commutator sign is paired with perturbation `Hprime = -f B`; response is first order about equilibrium, with the declared `exp(+i omega t)` Fourier convention. Field-dependent observables can require contact terms. The newly inspected reference is a modern primary paper, not the original Kubo derivation.
- **Fluctuation–dissipation (`fdt`):** explicitly two-sided, symmetrized, centered autocorrelation with no forward-transform `1/(2 pi)` factor. The displayed coth relation is qualified at nonzero frequency; a conserved observable's elastic zero-frequency peak cannot be recovered by naively multiplying divergent coth by zero response. No nonequilibrium or generic cross-response claim is made.
- **Matsubara (`matsubara`):** a finite-mode fermionic, grand-canonical representative with `K = H - mu N`, inverse-energy imaginary time, fermionic ordering and antiperiodic extension. The displayed minus prefactor is a modern imaginary-time re-expression, not a verbatim Martin–Schwinger equation with its historical `-i` prefactor. Equal-time limits and bosonic conventions are not conflated.

All equation strings, roles, IDs, names, descriptions, tags, theory associations and original source IDs remain unchanged. The existing Goold review remains attached, without being promoted to an original derivation. No KMS formula or theory link is added; its documented gap remains open.

## Primary sources and locators

1. Pappalardi, Foini and Kurchan, *Quantum bounds and fluctuation-dissipation relations*, arXiv:2110.03497v3. Section 2, printed/PDF pp. 3–4: Eqs. (5)–(6b), Fourier convention after Eq. (7), and Eqs. (8a)–(8b). The card maps source response `R` to `chi` and symmetrized correlator `C` to `S`. The inspected versioned author manuscript is distinct from the final publication.
2. Martin and Schwinger, *Theory of Many-Particle Systems. I*, Phys. Rev. 115, 1342 (1959). Printed p. 1347/PDF p. 6 Eq. (3.1) and ordering definition; pp. 1357–1359/PDF pp. 16–18 Eqs. (5.8)–(5.18) and thermal substitutions near Eq. (5.32). The explicit imaginary-time and prefactor mapping is part of the review, not an asserted verbatim identity.

Fresh source byte lengths, SHA256 hashes, precise URLs and inspection boundaries are recorded in the proposal. Both freshly downloaded PDFs match their earlier recorded hashes; rendered source pages were independently re-inspected. No source PDFs are bundled. No successful full-text inspection of Kubo 1957, Matsubara 1955 or HHW 1967 is claimed.

## Reproducible bounded mathematics

Run `python3 scripts/response-math-check.py` with NumPy and SciPy available. The reconstructed script SHA256 is `5d640739ab69d27d2112e0b8994ad62768b77d4987ccf3a51c6da174277c3cee`.

The 532 assertions cover impulse-response sign reversal, discrete nonzero-frequency FDT weights, detailed balance and units, the conserved-observable zero-frequency counterexample, classical/zero-temperature limits, one-mode fermionic antiperiodicity/equal-time jump/Matsubara transform, and research-only finite-dimensional KMS identities. These finite models do not prove infinite-system analyticity, validate experiments or justify shipping a KMS formula.

## Integration boundaries

The new fail-closed response projection restores exact PR #100 bytes before the prior thermal and older historical projections run. Prior dated research ledgers are untouched. The thermal test's historical runtime is explicitly restored to its own checkpoint; none of its scientific assertions is removed. A separate raw-current-runtime test checks the complete three-card/two-source delta and preserves all other scientific collections.

Browser verification and any publication/release require separate exact-head receipts. Local math or Node success alone does not establish browser acceptance or deployment.
