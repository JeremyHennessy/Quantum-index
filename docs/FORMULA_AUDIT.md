# Formula-bearing theory audit

_Last reviewed: 2026-09-22_

## Scope

This audit does **not** attempt to collect every algebraic expression ever derived in quantum physics. It asks a narrower, auditable question for every shipped theory/framework:

> Does this entity have at least one canonical, defining, exact, schematic, approximate, limiting, or derived source-linked equation in the formula atlas? If not, what is the documented reason?

The runtime audit is in `formula-audit.js`; formula records are in `formulas.js`.

## Current result

- 265 shipped theory/framework entities audited
- 323 source-linked formula entries
- 179 entities classified **formula-bearing**
- 61 classified **formula-bearing-gap**
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

### Highest-priority QFT / formalism gaps

- constructive quantum field theory
- Euclidean QFT / Osterwalder–Schrader framework
- Schwinger–Keldysh / closed-time-path formalism
- geometric quantization
- stochastic quantization
- light-front quantization
- background-field method
- Weyl quantization
- polymer quantum mechanics

### Highest-priority quantum-information gaps

- quantum reference frames
- quantum causal models
- quantum stochastic calculus
- ZX calculus
- device-independent quantum information
- causal boxes

### Highest-priority quantum-gravity gaps

- twistor theory
- M-theory
- entropic gravity
- Hořava–Lifshitz gravity
- shape dynamics
- tensor models
- ER=EPR
- celestial holography
- doubly special relativity
- quantum graphity
- relative locality
- causal-set sequential growth dynamics
- higher-spin gravity
- causal fermion systems
- BFSS Matrix theory
- twistor-string theory
- twisted geometries
- topological string theory
- Holographic Space-Time

These remain explicit gaps until a compact, source-supported equation can be selected without presenting a convention-dependent or merely illustrative expression as uniquely canonical.

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
