# Exhaustiveness audit

_Last reviewed: 2026-09-22_

## Decision

The 2026-09-22 **first-class theory-family census is closed for the currently audited candidate set**.

That statement is deliberately narrower than “every theory that can ever be named is present.” Physics has no authoritative finite registry of theories, and many papers introduce submodels, parameterizations, approximations or equivalent reformulations at different granularities.

## Baseline produced by this audit

- 367 source-backed theory/framework entities
- 13 top-level categories
- 358 bibliography records
- 470 graph relations
- 20 thought trees
- 0 shipped catalog-only theory nodes
- 0 unresolved first-class ADD decisions in the enumerated breadth queue
- validation workflow green after both expansion waves

## Breadth domains explicitly swept

1. historical quantum foundations and formulations;
2. measurement, interpretations, no-go theorems and operational reconstructions;
3. relativistic QM, QFT, EFT, particle theory and canonical QFT model laboratories;
4. quantum information, open systems, computation, metrology and causal-process frameworks;
5. quantum gravity, black-hole information, modified gravity and quantum spacetime;
6. quantum cosmology, inflation, dark energy, dark matter and baryogenesis;
7. quantum optics and AMO;
8. quantum many-body, condensed matter and topological matter;
9. quantum chemistry and correlated electronic-structure methods;
10. mathematical structures and beyond-standard quantum frameworks.

## Candidate generators used

The census combines primary/program-defining literature, authoritative reviews/reference works, the existing repository bibliography, prior candidate audits, and broad transcript/topic sweeps including PBS Space Time as a **discovery source**. A transcript mention is never sufficient by itself for promotion: the entity must resolve to scholarly primary or authoritative-review provenance.

## Granularity rule

A node is first-class when it has a distinct physical or mathematical framework, research program, theorem-level constraint, named formalism or systematically indexed model/method family.

The following normally remain below first-class granularity unless their whole domain is being expanded consistently:

- parameter choices and benchmark points;
- one-off phenomenological ansätze;
- straightforward special cases of an indexed umbrella;
- algebraically equivalent reformulations;
- unnamed variants;
- individual perturbative orders or basis choices;
- single materials/experimental implementations.

This is why constructive P(phi)_2 / phi^4_3, interpretation subvariants, CDT submodels, GUP variants and similar items can remain in the candidate queue without contradicting first-class closure.

## Two expansion waves

### Wave 1 — 65 entities

Closed major omissions in foundations, QFT/particle theory, black-hole information, astroparticle cosmology, canonical quantum matter, electronic structure and AMO.

### Wave 2 — 37 entities

Closed the remaining family-level omissions found in the follow-up review sweep: modified-gravity families; dark-sector production/candidate frameworks; canonical low-dimensional/topological QFT models; additional topological/critical condensed-matter frameworks; advanced multireference/Green-function chemistry; and modern AMO control/simulation platforms.

## What is still incomplete

### Formula layer
134 theories are explicitly classified `formula-bearing-gap`. Breadth completion did not fabricate equations merely to keep the metric low.

### Relation-evidence layer
413 relation edges are editorial navigation edges. They are visible as such and require a separate relationship-specific provenance pass.

### Model-depth layer
The lower-granularity backlog remains open. It is not counted as an unresolved first-class family queue.

### Continuous discovery
A newly found distinct theory family, sourced historical program or genuinely separate modern framework reopens this audit. The baseline is protected, not frozen against new evidence.

## Release acceptance

A breadth-expansion release is acceptable only when:

- all shipped nodes are sourced;
- no duplicate IDs or dangling source/relation/tree references exist;
- all audited breadth candidates have a disposition;
- formula gaps remain explicitly documented;
- the validator passes on the proposed merge commit;
- documentation metrics match runtime metrics.
