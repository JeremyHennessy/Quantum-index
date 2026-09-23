# Quantum Index formula coverage

_Last audited: 2026-09-22_

## Current formula corpus

- **345** formula entries
- **28** formula categories
- **0** duplicate formula IDs
- **0** dangling theory references
- **0** dangling source references
- every formula links to at least one indexed theory
- every formula links to at least one source record

### Category coverage

| Formula category | Entries |
|---|---:|
| Angular momentum | 3 |
| Atomic and AMO physics | 3 |
| Beyond standard quantum theory | 2 |
| Collapse theories | 6 |
| Continuous-variable quantum information | 6 |
| Core quantum mechanics | 26 |
| Formulations | 9 |
| Foundations & interpretations | 9 |
| Many-body Green functions | 4 |
| Many-body response | 2 |
| Mathematical structures | 3 |
| Open quantum systems | 7 |
| Perturbation theory | 5 |
| Phase-space quantum mechanics | 3 |
| Quantum chemistry & electronic structure | 15 |
| Quantum error correction | 10 |
| Quantum field theory | 45 |
| Quantum gravity & cosmology | 56 |
| Quantum information | 35 |
| Quantum many-body & condensed matter | 34 |
| Quantum metrology | 7 |
| Quantum optics & AMO | 21 |
| Quantum spacetime | 1 |
| Quantum thermodynamics | 3 |
| Relativistic quantum theory | 4 |
| Scattering theory | 7 |
| Topological quantum theory | 2 |
| Wave mechanics | 17 |

## Operational completeness target

A literal list of every quantum formula is not finite in a useful sense. Quantum Index targets **materially distinct named or canonical equations used to define, derive, test or operationalize indexed theories**.

Included classes:

1. defining Hamiltonians, Lagrangians, actions and evolution equations;
2. canonical spectra, inequalities, conservation laws and uncertainty relations;
3. standard measurement, information and entropy formulas;
4. canonical correlation functions, propagators and RG equations;
5. topological invariants and quantum-geometry relations;
6. many-body, AMO, condensed-matter and electronic-structure equations when they define a distinct indexed framework.

Trivial algebraic rearrangements stay out unless the variant carries different physical assumptions or regime.

## Current control state

Theory breadth is now ahead of equation curation: `formula-audit.js` reports **134 formula-bearing gaps** after the 367-node census expansion. Those gaps are deliberate, visible work items rather than silently invented equations.

See `docs/FORMULA_AUDIT.md` for closure priorities.

## Acceptance rules

A formula may enter the shipped atlas only if it has a stable ID, documented notation/regime, at least one linked theory, at least one linked source, a valid formula type, and no merely cosmetic duplication of an existing entry.
