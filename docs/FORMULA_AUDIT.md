# Formula-bearing theory audit

_Last reviewed: 2026-09-22_

## Scope

This audit does **not** attempt to collect every algebraic expression ever derived in quantum physics. For every shipped entity it asks whether at least one canonical/source-linked equation is present, or whether the absence is explicitly classified.

The runtime audit is `formula-audit.js`; formula records are in `formulas.js`.

## Current result

- **454** shipped theory/framework entities audited
- **345** source-linked formula entries
- **202** entities classified **formula-bearing**
- **210** classified **formula-bearing-gap**
- **11** interpretations
- **16** primarily conceptual/structural
- **14** theorem-first
- **1** thought experiment

A `formula-bearing-gap` is an explicit curation gap. It does not claim that the theory lacks mathematics.

## Why the gap count increased

Theory breadth was expanded before formula curation. The third wave adds 50 source-backed frameworks without fabricating equations merely to keep the formula metric low. Of those additions, 49 enter as explicit formula-bearing gaps and the ABJ anomaly enters as theorem-first.

## Highest-priority formula closure domains

1. **Astroparticle physics & cosmology** — ΛCDM background equations/parameterization, freeze-in/freeze-out yields, neutrino-matter mixing, baryogenesis/leptogenesis, dark-sector field equations.
2. **Modified gravity** — Brans–Dicke, f(R), Horndeski, DHOST, DGP, dRGT, Einstein–Æther and Galileon defining actions/equations.
3. **Black-hole information** — Bekenstein–Hawking entropy/temperature linkage, JT action, complementarity/firewall entropy relations, BMV witness Hamiltonians where convention-safe.
4. **Canonical many-body models** — Bose–Hubbard, Heisenberg/Ising/Kitaev/AKLT, Luttinger/Fermi liquid, Bethe equations, SPT/topological-superconductor invariants.
5. **Electronic structure** — Born–Oppenheimer separation, CASSCF/CASPT2/NEVPT2, EOM-CC, ADC, GF2, DMET and DMRG-SCF.
6. **AMO** — Dicke/Tavis–Cummings, Floquet quasienergy, Rydberg blockade, EIT/STIRAP, optomechanical and optical-lattice Hamiltonians.

## Formula metadata schema

Every formula exposes:

- `formulaType`: `exact`, `defining`, `canonical`, `schematic`, `approximation`, `limit`, or `derived identity`
- assumptions
- variables
- regime
- units
- theory relationship
- metadata-review state
- linked theory IDs
- linked source IDs

## Acceptance rules

1. Every shipped theory must have exactly one audit entry.
2. Every `formula-bearing` theory must link at least one shipped formula.
3. Every `formula-bearing-gap` must carry a reason.
4. Every formula must link at least one theory and at least one catalogued source.
5. Schematic or approximate expressions must be labeled as such.
6. Formula coverage and theory coverage are reported separately.
7. Breadth expansion must never be blocked merely to keep the formula-gap count cosmetically low.
