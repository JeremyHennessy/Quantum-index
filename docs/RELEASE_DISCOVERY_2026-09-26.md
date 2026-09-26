# Catalog discovery — 2026-09-26

This release adds 16 distinct models, frameworks, and effects identified by comparing research sources with the existing 464-entry catalog, including names, aliases, summaries, and nearby umbrella entries. These are additions to the index, not claims of 16 new fundamental theories or an exhaustive inventory.

The batch records each entry’s nearest existing neighbors, why it is separately useful, source IDs, and the basis for its historical year in `DISCOVERY_2026-09-26.json`. Newer entries use the inspected first public preprint date where available; the bibliography dates those preprints accordingly. Dates are representative documented anchors, not universal priority claims. The fracton date explicitly marks Chamon’s precursor, and operational steering explicitly distinguishes its modern formulation from Schrödinger’s 1935 idea.

| Added entry | Why separate from existing coverage |
|---|---|
| Su–Schrieffer–Heeger model | A one-dimensional bond-alternating model, distinct from the Haldane Chern-insulator model and the broader topological-insulator class. |
| Aubry–André quasiperiodic localization model | A specific noninteracting quasiperiodic model, distinct from random-disorder localization and interacting many-body localization. |
| Holstein molecular-crystal / polaron model | Local electron–phonon coupling is distinct from Hubbard electron repulsion and a two-level spin coupled to a bath. |
| Deconfined quantum criticality | A framework for critical points, not a claim that a stable spin-liquid phase occurs throughout the neighboring phases. |
| Fracton phases and restricted-mobility frameworks | Restricted excitation mobility and unusual size-dependent degeneracy distinguish these models from conventional topological-order examples. |
| Quantum many-body scar framework | Special many-body states differ from both single-particle chaotic scars and broadly localized many-body spectra. |
| Discrete / Floquet time-crystal framework | A symmetry-breaking phase of driven systems, not all Floquet dynamics or an equilibrium perpetually moving ground state. |
| Measurement-induced entanglement transitions | A transition in monitored dynamics, distinct from using measurements to perform a computation. |
| Quantum discord framework | A measure of quantum correlations and measurement disturbance, distinct from an entanglement measure. |
| Resource theory of quantum coherence | A basis-dependent operational resource theory, distinct from general resource theories and Glauber optical correlation functions. |
| Quantum Zeno effect and dynamics | A particular dynamical effect of repeated or strong monitoring, rather than the entire continuous-measurement formalism. |
| Berry phase / adiabatic geometric phase | A specific adiabatic phase construction, distinct from all geometric formulations of quantum mechanics or any single Hall model. |
| Aharonov–Bohm effect framework | A particular gauge-sensitive interference phenomenon within quantum theory, not an alternative to electrodynamics. |
| Fano discrete–continuum resonance theory | A discrete–continuum interference theory, distinct from general configuration interaction and ideal three-level EIT. |
| Operational quantum steering framework | An operational local-hidden-state criterion, distinct from the original EPR argument and a Bell-local hidden-variable model. |
| Quantum Kibble–Zurek framework | A framework for finite-rate critical dynamics, distinct from equilibrium criticality and the earlier cosmological or thermal Kibble–Zurek settings. |

## Sources and coverage

There are 18 added bibliography records, 17 source-backed graph connections, and three thought-tree groupings. Research descriptions were checked against article abstracts and relevant text. Berry’s scanned original was visually inspected on pp. 46–47; the existing connection and curvature equations are linked to the new Berry-phase entry without changing their expressions. The Aubry–André original date is supported by Ref. 19 of Roati et al. (2008), whose main text explicitly writes the model; the older original chapter was not directly retrieved. The Zeno historical source is accompanied by an inspected review.

This is a discovery pass, not a new equation-curation batch. The other 15 entries are recorded as formula-bearing gaps with an explicit reason. They are not silently classified as conceptual to conceal missing equations. Their audit review dates now inherit the theory review date; existing entry dates are unchanged.

- Catalog: 464 → 480 entries; bibliography: 463 → 481 sources.
- Relationships: 588 → 605; sourced: 75 → 92; editorial remains 513.
- Thought trees: 38 → 41.
- Equations: 372 unchanged; covered entries: 243 → 244.
- Formula gaps: 176 → 191, comprising the same 176 existing gaps plus 15 explicitly recorded new ones.

## Preservation and verification

All 464 pre-existing theory records, 588 relationship records, and 372 equation expressions were compared with baseline `96c848bc0ca264bcc9ba7434e079a3c9174b5f17` and preserved. The two Berry formula records receive only additional theory and bibliography links. No UI, CSS, dependencies, or hosting settings change.

The regression suite checks the discovery manifest, evidence links, chronology, explicit coverage gaps, and all 16 detail routes, as well as prior navigation and formula tests. Structural validation also checks graph references and isolated thought-tree nodes. Publish only after exact-head CI passes; verify all 16 hosted detail routes and Berry formula rendering after Pages completes. Mobile viewport emulation remains unavailable in the current browser surface.

Rollback is a revert of the release merge commit. No data migration is required. The next content step is an equation-level source review of the 15 newly logged gaps, alongside continued searches in other subject areas.
