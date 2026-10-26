# Independent scientific review — finite-outcome quantum instrument

**PASS for a local, bounded proposal.** No scientific correctness blocker found in the exact candidate reviewed. This is not repository integration, release approval, browser verification, or evidence of deployment.

- Reviewer: `/root/qualify_quantum_instrument_gap/review_instrument_sources`
- Review date: 2026-10-26 UTC
- Baseline: `1ca99e424959e2238448335ccd7b6143c376e94d`
- Candidate SHA-256: `d1a580a3245132ddb6d6c656bcd68f50c6f2568f279c02982c2747f4b857e67d`
- `instrument-math-check.py` SHA-256: `d49ec27fc3b8a344b219ffe1385434f414dab05059b8036ae04dea85ef49b3ba`
- `runtime-check.mjs` SHA-256: `e650bfd4cf354e9a94150e7e95d2fb71771b90708be44683138cfdff43f8a273`

## Source and equation assessment

The candidate's finite-dimensional, same-Hilbert-space CP-branch family with trace-preserving total is correctly scoped. The trace gives an outcome probability. Dividing the positive branch output by a strictly positive trace produces a density operator. A null-probability branch has zero output; its normalized posterior is undefined, not the zero density operator. This distinction is explicit in the record.

I independently inspected [Ozawa's version 2](https://arxiv.org/pdf/2110.03219v2): PDF/printed p.20, Section 5, Eqs.(53)–(54), and p.21, Eqs.(57)–(61), including rendered page images. The formula and multi-Kraus normalization locators are accurate. Section 3.4, p.8, supplies the null-event convention. Section 3.6, p.9, gives positivity and total trace preservation; the source's erroneous finite-support line is not copied. The source is transparently described as the originator's own axiomatic chapter, with the inspected 2023 revision date, not a 2023 invention of instruments.

[Okamura–Ozawa v3](https://arxiv.org/pdf/1501.00239v3), introduction p.2, distinguishes the instrument framework from the later CP requirement; Definition III.1 and its following paragraph on p.7 distinguish positive instruments and CP instruments. On p.8, Eq.(22), subsequent probability/posterior conditions, and the surrounding extendability discussion support the modern qualification. The arXiv abstract record confirms the 2016 journal year and DOI `10.1063/1.4935407`.

No claim is made that Davies–Lewis 1970 or Ozawa 1984 full text was inspected. Their inaccessible originals are not used as unseen equation locators. The final declared entity delta appends only `okamura-ozawa-instruments-2016` to `quantum-instruments.sources`, preserving the historical source, date, core text, all other fields and every graph relationship. Its explicit source mapping correctly assigns historical provenance to Davies–Lewis and the modern CP definition to the inspected formal research paper. This resolves the support mismatch in the local proposal and simulation; it is not a repository change.

## Independent mathematical and structural checks

- Re-ran `python instrument-math-check.py`: **PASS, 10 groups**, including 25 valid instrument/state fixtures, exact null outcomes, incomplete-family rejection, multi-Kraus coarse-graining, and conditional non-affinity.
- Independently calculated the same-POVM/different-state and same-channel/different-instrument examples with separate NumPy code before receiving the candidate. Both distinctions hold.
- Independently diagonalized the partially transposed Bell state: eigenvalues `(-1/2, 1/2, 1/2, 1/2)`. Positivity and trace preservation on an isolated qubit do not imply complete positivity.
- Re-ran `node runtime-check.mjs`: **PASS**. The one-formula/two-source in-memory addition applies exactly one declared existing-record delta (`quantum-instruments.sources`) and changes the corresponding computed formula-audit row. All other existing fields and records are preserved. Predicted totals: 483 theories, 605 sources, 458 formulas, 113 gaps.
- Independently compared all nine saved baseline runtime files byte-for-byte with `git show` at the accepted baseline commit: **all identical**.

These fixtures are regression examples, not a finite-sample proof of all instruments or empirical Evidence. The CP property of tested operator-sum maps follows algebraically from their Kraus form. The record's dimensionless-matrix units and distinction between labels and measured physical units are appropriate.

## Limits and integration advice

The proposal is distinct from existing unconditional Kraus cards and POVM-only probabilities. One card is enough for this representative gap; no new entity, graph edge, or empirical claim is warranted. Keep the finite-outcome scope, zero-probability caveat, and source-role disclosure intact. The single declared entity-source association is included in this review; no entity wording rewrite is proposed. Reconcile independently with other candidates before counting combined totals. Full repository tests, generated coverage/assets, real-browser rendering, remote CI, merge and deployment remain unrun and unclaimed here.

`PROPOSAL.md` was also reviewed after the final source-association delta: its finite-algebra consequences, positive-probability weighted sum, explicit modern/historical roles, source-access caveats and non-integration status are consistent with the candidate. This final review supersedes the earlier optional-association draft.

Independent rerun receipts: `independent-math-check.json`, `independent-runtime-check.json`.
