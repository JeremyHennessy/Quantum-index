# QEC primary-source review — 16 October 2026

**Baseline:** `63959a9491f4f99cd787fd9aea22338ee8c6e12b`. This bounded scientific candidate adds a single `quantum-error-correction` Theory Passport and reviews the existing `knill-laflamme` equation's source provenance and applicability. It does not add theories, equations, empirical Evidence, relationships or any UI redesign.

## Primary paper and exact locator

E. Knill and R. Laflamme, [*A Theory of Quantum Error-Correcting Codes*](https://arxiv.org/pdf/quant-ph/9604034v1), arXiv:quant-ph/9604034v1 (1996), published as [Phys. Rev. A 55, 900 (1997)](https://doi.org/10.1103/PhysRevA.55.900). Direct page inspection: **Section 3.2 Theorem 3.2, Eqs. (19)–(20), printed p. 13 (PDF page 13)**; for the two-state case see **Section 2 Eqs. (6)–(7), printed p. 6**. Those equal-diagonal and vanishing off-diagonal matrix-element conditions imply the existing atlas identity `P E_a† E_b P=c_ab P`. The latter is an algebraically equivalent modern projector form, not a verbatim historical equation. Sec. 3.2 Theorem 3.5 presents a code⊗syndrome decomposition with a recovery construction.

## Boundaries and nonclaims

The theorem is necessary and sufficient **for exact correction of a declared family of error operators**. It does not establish fault-tolerant thresholds, approximate QEC performance, empirical hardware accuracy, or universally correctable noise. Stabilizer and surface codes are concrete subfamilies, not all QEC. A new empirical Evidence item would require independent measured data, so none is added.

## Changes and checkpoints

- Append-only metadata improvement to the unchanged `knill-laflamme` mathematical string, linking the already catalogued primary source `knill-laflamme-1997` directly (previous linked sources preserved).
- Append one source-located Passport, preserving all 27 earlier Passport bytes.
- Expected census after candidate: **28 Passports, 405 formulas, 154 explicitly reviewed formula metadata and 251 baseline records**; **481 theories, 163 formula gaps, 550 sources and 610 relationships unchanged**.
- Accepted only after exact candidate tests, browser equation rendering, generated-metric checks, merged-main and hosted verification. This report documents scientific scope, not automatically successful deployment.

Yang–Mills remains separately held pending a convention/source-specific review.
