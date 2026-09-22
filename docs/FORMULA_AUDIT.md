# Formula-bearing theory audit

_Last reviewed: 2026-09-22_

## Scope

This audit does **not** attempt to collect every algebraic expression ever derived in quantum physics. It asks a narrower, auditable question for every shipped theory/framework:

> Does this entity have at least one canonical, defining, exact, schematic, approximate, limiting, or derived source-linked equation in the formula atlas? If not, what is the documented reason?

The runtime audit is in `formula-audit.js`; formula records are in `formulas.js`.

## Current result

- 265 shipped theory/framework entities audited
- 345 source-linked formula entries
- 202 entities classified **formula-bearing**
- 38 classified **formula-bearing-gap**
- 11 **interpretations**
- 11 **primarily conceptual/structural**
- 2 **theorem-first**
- 1 **thought experiment**

A `formula-bearing-gap` is an explicit curation gap. It does not claim that the theory has no mathematical content.

## Formula metadata schema

Every formula now exposes:

- `formulaType`: `exact`, `defining`, `canonical`, `schematic`, `approximation`, `limit`, or `derived identity`
- `assumptions`
- `variables`
- `regime`
- `units`
- `theoryRelationship`
- `metadataReview`
- linked `theoryIds`
- linked `sourceIds`

Legacy formulas are assigned a conservative baseline role when they have not yet had a formula-by-formula metadata review. Priority additions in this sweep have explicit metadata.

## Priority formula additions completed

### Quantum chemistry and electronic structure

Added canonical/source-linked forms for:

- Hartree–Fock orbital equation, Fock operator, and HF energy
- configuration-interaction expansion and secular equation
- MP2 correlation energy
- coupled-cluster exponential ansatz, projected amplitude equations, and energy
- Kohn–Sham density
- time-dependent Kohn–Sham equation and TDDFT linear-response relation
- GW self-energy and screened Coulomb interaction
- Bethe–Salpeter equation

### Many-body / computational methods

Added:

- DMRG reduced density matrix and discarded weight
- DMFT local Green function and Weiss-field self-consistency
- variational-QMC energy estimator and local energy

### QFT / EFT

Added:

- AQFT isotony and microcausality
- N=1 supersymmetry algebra
- Epstein–Glaser causal factorization
- leading chiral perturbation theory Lagrangian
- leading HQET Lagrangian
- supersymmetric-localization integral structure
- factorized-scattering Yang–Baxter consistency

### Quantum information and open systems

Added:

- GPT state/effect probability rule
- process-matrix generalized Born rule
- process-tensor generalized Born rule
- pseudo-density-matrix definition
- quantum-jump effective Hamiltonian
- repeated-interaction collision map
- cluster-state stabilizer
- environment-overlap decoherence factor
- Quantum-Darwinism redundancy

### Quantum gravity / cosmology

Added:

- Master Constraint functional
- Lorentzian gravitational path integral
- GRWm matter-density map
- Polyakov string action
- asymptotic-safety fixed-point condition
- matrix-model partition function
- induced-gravity effective-action structure
- cubic open string-field-theory action
- IKKT matrix-model action
- infinite-derivative gravity action
- minisuperspace Wheeler–DeWitt equation
- pre-big-bang scale-factor duality

### Alternative / generalized quantum frameworks

Added:

- PT-symmetry condition
- Weinberg nonlinear quantum equation
- Haldane exclusion-statistics relation
- q-deformed oscillator algebra

## Remaining formula-bearing gaps

The remaining **38** gaps are concentrated in narrower, model-dependent, or structurally specialized areas. These are explicit curation gaps, not claims that the entries lack mathematical content.

### Beyond-standard quantum theory
- Nelson stochastic mechanics
- Trace dynamics
- Nonassociative quantum mechanics
- Cellular automaton interpretation
- Superdeterministic approaches
- Quaternionic quantum mechanics
- Spekkens toy theory
- Real-Hilbert-space quantum theory
- p-adic quantum mechanics
- Many interacting worlds
- Modal quantum theory
- Parastatistics
- Doebner–Goldin nonlinear quantum mechanics
- Bell-type quantum field theories

### Quantum gravity and spacetime
- M-theory
- Shape dynamics
- ER = EPR
- Doubly special relativity
- Quantum graphity
- Relative locality
- Causal-set sequential growth dynamics
- Higher-spin gravity
- Twisted geometries
- Holographic Space-Time

### Quantum information and open systems
- Quantum causal models
- Causal boxes

### Mathematical structures
- Positive-geometry / amplituhedron programs
- Geometric quantum mechanics
- Topos approaches to quantum theory
- Sheaf-theoretic contextuality
- Noncommutative / quantum probability
- History Projection Operator formalism

### Quantum cosmology
- Third quantization
- String gas cosmology
- Ekpyrotic cosmology
- Cyclic cosmology
- Group-field cosmology
- Spin-foam cosmology

The next equation pass should prioritize entries above that have a compact defining relation with low convention risk. Conceptual conjectures such as ER=EPR should instead be reclassified as primarily conceptual if no unique defining equation is appropriate.

## Acceptance rules

1. Every shipped theory must have one audit entry.
2. Every `formula-bearing` theory must link at least one shipped formula.
3. Every `formula-bearing-gap` must carry a reason.
4. Every formula must link at least one theory and one catalogued source.
5. Schematic or approximate expressions must be labeled as such.
6. Formula coverage and theory coverage are reported separately.


## Candidate-promotion formulas added

- Hidden-measurement outcome probability — schematic measure-ratio form.
- Operational state–effect probability pairing — defining operational rule.
- Polymerized cosmological momentum substitution — defining effective polymerization map.

These formulas moved the three promoted candidate theories directly into the formula-bearing class rather than creating new unsatisfied formula gaps.


## Second priority gap pass completed

Added source-linked equations for old quantum theory; constructive/Euclidean QFT; Schwinger–Keldysh; geometric, stochastic, light-front, background-field, Weyl and polymer quantization; quantum-reference-frame transformations; quantum stochastic calculus; ZX calculus; twistor incidence; entropic gravity; Hořava–Lifshitz gravity; tensor models; celestial holography; causal fermion systems; BFSS Matrix theory; topological strings; and PR-box correlations. Device-independent QI now also links directly to the Tsirelson bound.
