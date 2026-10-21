# State and channel metadata audit

Reviewed 2026-10-21. Twelve existing formulas now have source-qualified assumptions, variables, units, regimes and exact locations. This is an explanatory metadata audit, not new mathematics or experimental evidence.

The chain covers density operators, purity and Bloch coordinates, Schmidt decomposition, entropies, fidelity and trace distance, Kraus maps and the Choi representation. Every equation, plain-text expression, formula type, ID and theory association is preserved.

## Conventions made explicit

- Fidelity retains the catalog's squared convention. Watrous's root-fidelity expression is squared explicitly in the metadata.
- Trace distance retains half the trace norm. The source's full-norm convention is translated, not silently substituted.
- The Choi vector is unnormalized and reference-first. Watrous uses output-first ordering; the recorded tensor-factor swap preserves positivity. Its trace is the input dimension and tracing out the output gives the reference identity.
- A multi-term ensemble need not be mixed, and its vectors need not be orthogonal.
- Pure-state entanglement entropy is not a general mixed-state entanglement measure.
- Kraus form ensures complete positivity; trace preservation needs the separate completeness condition. That condition is not unitality.

## Source qualification

The linked Preskill Chapters 2 and 3 are the older editions with their existing equation numbers. Preskill Chapter 10 is the author-hosted June 2025 draft. Watrous is the author-hosted 2018 pre-publication textbook draft, not a claim to have checked the final published edition. The Choi definition is in Section 2.2.2, Eqs. (2.64)–(2.66), printed p.78/PDF p.86.

All locators and these convention translations were independently checked. Original historical references remain provenance and are not relabeled as equation-level original-paper audits. See research/STATE_CHANNEL_SOURCE_AUDIT_2026-10-21.json for precise patches and preservation snapshots. Downloaded source PDFs are not distributed here.

## Counts and validation boundaries

Explicit metadata: 227 → 239. Baseline metadata: 230 → 218. Formulas remain 457; theory/framework entries remain 483; representative-formula gaps remain 114. No new Passport, Evidence or Problem record is added.

Current-runtime tests permit only the twelve exact metadata patches and two bibliography records. Every other scientific record is unchanged. Historical byte projections fail closed against undeclared changes. Browser tests exercise all twelve cards and exact source locators in Chromium and 320px WebKit; this is emulation, not physical-device testing.
