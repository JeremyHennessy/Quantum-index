# Exhaustiveness audit

_Last reviewed: 2026-09-23_

## Decision: OPEN

The previous 367-node first-class closure is superseded. A third systematic audit found materially distinct, source-backed frameworks that were absent from the shipped graph.

The current branch baseline is:

- **417** source-backed theory/framework entities
- **14** top-level categories
- **402** bibliography records
- **523** graph relations
- **25** thought trees
- **0** catalog-only theory nodes
- **345** formula-atlas entries
- **183** explicit formula-bearing gaps

## Why the census reopened

Searches across authoritative reviews and primary literature found missing first-class families in five areas:

1. quantum chaos, thermalization and nonequilibrium many-body theory;
2. nuclear structure and nuclear effective field theory;
3. perturbative/small-x and nonperturbative QCD;
4. geometric/duality-covariant gravity frameworks;
5. quantum computation and quantum-information formalisms.

Those findings demonstrate why a fixed count cannot be treated as proof of completeness.

## Third-wave promotions

Fifty source-backed entities were added. The new dedicated **Nuclear quantum theory** category prevents nuclear many-body frameworks from being hidden inside generic condensed-matter or QFT buckets.

## Active follow-up search queue

The census remains open while searching and dispositioning:

- KMS/nonequilibrium Green-function and quantum-kinetic frameworks;
- additional canonical impurity/lattice/superconductivity models;
- nuclear ab-initio and hadronic/QCD effective descriptions not already represented;
- teleparallel, metric-affine and higher-curvature subfamilies that may justify first-class treatment;
- quantum-channel, entanglement, computation and simulation frameworks;
- major named inflation/dark-sector/cosmology model families versus subtype status;
- black-hole-information subprograms versus the existing complementarity/firewall/island/fuzzball umbrellas.

## Granularity rule

A candidate is first-class only when it is a distinct theory family, named formalism, research program, theorem-level constraint, or systematically indexed model/method family with scholarly provenance. Parameter choices, simple special cases, equivalent reformulations and isolated phenomenological ansätze remain subtypes unless their surrounding domain is promoted at the same granularity.

## Release controls

A census update may merge only when:

- every added node is source-backed;
- IDs, sources, relations and thought trees have no dangling references;
- formula absence is explicit rather than hidden;
- CI passes on the exact PR head;
- documentation metrics match runtime metrics.

Closure is not being asserted in this revision.
