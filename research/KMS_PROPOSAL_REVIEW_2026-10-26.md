# Independent KMS proposal review

**Result: PASS — local proposal only.** Reviewed 2026-10-26. No required scientific or narrow-integration corrections remain.

## Reviewed artifacts

- `PROPOSAL.md`, SHA-256 `cab22a2ab4b95e94b008c118bb9bbc03dde1adc04f4a4f3d76203b8ecd0e3fe8`.
- `candidate.json`, SHA-256 `074ccd04fc4968ab8d5c999ccdda73accd2b775f506d6300d83397290855eabc`.
- `kms-math-check.py`, SHA-256 `45e7c1ff36678cc6bd5574fa650ba4a77713c1170c2c8952be0ca6d17d950753`.
- `runtime-check.mjs`, SHA-256 `7194196ed9ff2c9116f340ae76a9bfca13c646f8387f00699b4137e5a2f31c7c`.
- Both saved result JSONs, the remote-baseline ledger, extracted source text, and rendered source page 41.

## Scientific findings

1. The positive imaginary displacement `+i beta hbar`, reversed operator order, physical-time dynamics sign, and units are consistent. Independent trace-cyclicity and matrix-unit derivations confirm both the finite Gibbs example and the stated full-matrix-algebra converse.
2. The candidate includes the necessary scalar strip analyticity, bounded continuity, and all-pairs quantifier. It correctly avoids demanding an operator-valued complex-time automorphism for arbitrary algebra elements.
3. Point-norm continuity, finite positive temperature, the distinction between strip boundedness and global entire boundedness, degeneracy, and restricted-observable pitfalls are explicitly handled.
4. No fermionic minus sign belongs in this ordinary algebraic boundary relation. The proposal does not conflate it with time ordering, periodicity, FDT, universal relaxation, or uniqueness of infinite-volume equilibrium.
5. The source locator was independently checked against [Araki–Moriya, Definition 6.1, printed/PDF p. 41](https://arxiv.org/pdf/math-ph/0211016v2#page=41), including visual inspection. The displayed boundary is unnumbered; the proposal correctly distinguishes it from Eq. (6.1). Section 5.1 and Eq. (5.2) support the continuity and generator conventions. The [arXiv record](https://arxiv.org/abs/math-ph/0211016v2) confirms authors, version date, journal reference, and DOI. The historical 1967 paper is not misrepresented as fully inspected.

## Independently rerun checks

Both commands exited successfully and reproduced the saved results:

```text
python kms-math-check.py
node runtime-check.mjs
```

The mathematical script passed 16,200 matrix-unit cases, 60 dense-complex cases, 60 energy-origin cases, 60 unitary-basis cases, and six negative controls. Maximum positive residual was `1.0179146870343963e-15`. Wrong sign, omitted hbar, unchanged ordering, spurious minus sign, wrong specified temperature, and unequal degenerate populations all fail clearly. Numerical samples are appropriately separated from the analytic proof.

The final strengthened basis fixture was reviewed and both commands were rerun afterward. It correctly constructs the positive and negative complex-time exponentials separately: at complex time the inverse is not generally the adjoint. The final added explanation of the inherited theory audit date is also consistent with the runtime result.

The runtime check matched the nine local runtime blobs to the supplied fresh-remote ledger, then added only one source and one formula in memory. Existing formulas, sources, theory records, relations, and all non-KMS formula-audit entries remained unchanged. The derived transition was 114 to 113 formula gaps, with 457 to 458 formulas and 603 to 604 bibliography records. These are proposed counts, not shipped changes. I did not independently repeat the connector's remote reads; I verified the supplied ledger against the local bytes and inspected the preservation assertions.

## Scope and limitations

This is scientific review plus a narrow in-memory integration check, not full repository validation, browser rendering, CI, or deployment approval. Those stages remain explicitly required by the integration plan. The plan preserves historical regression snapshots rather than weakening them. Existing theory provenance and old review dates are intentionally unchanged; only the proposed formula has the new explicit metadata review.

My only file write was this review. No repository edits, branches, commits, uploads, external mutations, or retries of the pending response-draft publication action were performed.
