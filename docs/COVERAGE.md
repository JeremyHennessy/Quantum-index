# Quantum Index coverage report

_Last audited: 2026-09-21_

Quantum Index is intentionally broader than a list of interpretations. It indexes theories, formulations, interpretations, research programs, formal frameworks, theorem-level constraints, and historically important thought structures when they materially connect the development of quantum theory.

## Current corpus

- **262** catalogued entities
- **359** typed relationships
- **13** curated thought trees
- **12** top-level categories
- **253** bibliography/source records
- **301** source-linked formula entries across **28** formula categories
- **262 / 262 (100.0%)** entries currently have dedicated source provenance
- **0 / 262** shipped entries remain catalogued-only
- **186 / 262** are marked `primary-sourced`; the remaining **76 / 262** are review/authoritative-source backed

### Category coverage

| Category | Entries |
|---|---:|
| Historical foundations | 5 |
| Formulations | 18 |
| Foundations & interpretations | 42 |
| Quantum field theory | 30 |
| Quantum information & open systems | 40 |
| Quantum gravity & spacetime | 56 |
| Quantum cosmology | 17 |
| Mathematical structures | 10 |
| Quantum optics & AMO | 3 |
| Quantum many-body & condensed matter | 14 |
| Quantum chemistry & electronic structure | 7 |
| Beyond standard quantum theory | 20 |

### Era coverage

| Era | Entries |
|---|---:|
| 1900–1924 | 5 |
| 1925–1939 | 21 |
| 1940–1959 | 15 |
| 1960–1979 | 46 |
| 1980–1999 | 77 |
| 2000–2014 | 64 |
| 2015–present | 34 |

## What "all quantum theories" means operationally

Literal completeness is not currently claimed. There is no universally agreed finite list of "all quantum theories"; the boundary between a theory, formulation, interpretation, calculational framework, effective theory, model, theorem, and research program is itself contested.

Quantum Index therefore uses an explicit entity `kind` and keeps coverage claims auditable. The catalog can contain:

- theory / theory family
- interpretation
- formulation
- quantization framework
- axiomatic or mathematical framework
- research program
- quantum-gravity or quantum-spacetime approach
- process / open-system framework
- cosmological framework
- theorem or no-go result
- historically important thought experiment
- toy or post-quantum model

The UI exposes these kinds as a filter rather than flattening them into a single misleading "theory" label.

## Provenance states

### `catalogued`
The entity has been placed in the ontology and relation graph, but its displayed summary has not yet completed a dedicated source-verification pass.

### `review-sourced`
At least one authoritative review, encyclopedia entry, or peer-reviewed source is attached and has been checked for the entry's classification/core description.

### `primary-sourced`
Reserved for entries where the original paper/book or equivalent primary record has been independently verified in addition to secondary context.

Source coverage and catalog coverage are intentionally reported separately.

## Current strengths

The strongest current branches are:

1. interpretations and measurement foundations;
2. major QFT lineages;
3. quantum-gravity research programs;
4. quantum information, open systems, and causal-process frameworks;
5. quantum cosmology boundary-condition and early-universe branches.

The September 21 expansion added explicit treatment of quantum logic, ontological-model frameworks, ψ-ontology, objective collapse as a family, Wightman/constructive/Euclidean QFT, BRST/BV, open-system GKSL dynamics, quantum combs/switches/process tensors, perturbative/Euclidean/discrete gravity, and several Planck-scale phenomenology programs.

A follow-on primary-source pass directly verified foundational papers for matrix mechanics, wave mechanics, Born's probability interpretation, canonical quantization, Bohmian mechanics, Everett, Bell, time-symmetric two-state work, consistent histories, transactional interpretation, GRW collapse, relational QM, the Ithaca interpretation, PBR and quantum logic.

The next pass verified program-defining primary sources across QFT and quantum gravity: Feynman's path integral and QED, Yang–Mills gauge theory, electroweak theory, asymptotic freedom/QCD, Wilson RG, effective-field-theory methodology, Haag–Kastler AQFT, Osterwalder–Schrader Euclidean QFT, GKSL/Lindblad dynamics, Hawking and Unruh effects, higher-derivative gravity, Ashtekar variables/LQG, causal sets, spin foams, CDT, holography, AdS/CFT, Hořava–Lifshitz gravity and entropic gravity.

The formal/emergent sweep then added 23 source-backed entities spanning Jordan-algebraic QM, light-front and causal perturbative quantization, quantum stochastic calculus, p-adic and q-deformed QM, tensor networks/MPS, quantum measure theory, topos and sheaf contextuality, causal-set growth, adiabatic/measurement-based/topological quantum computation, higher-spin gravity, MERA, ZX calculus, causal fermion systems, many-interacting-worlds, string field theory, BFSS/IKKT matrix models and modal quantum theory.

The early-foundations source pass then verified Planck's quantization paper, Einstein's light-quantum paper, Bohr's 1913 atomic model, de Broglie's matter-wave thesis, Heisenberg's uncertainty paper, Dirac's transformation theory, von Neumann's probabilistic/density-operator formalism, EPR, Schrödinger's 1935 cat paper and the Leggett–Garg theorem. The old quantum theory umbrella is separately review-sourced rather than incorrectly assigned to a single primary paper.

The information/formalism pass added dedicated provenance for quantum information, GPTs, resource theories, quantum causal modelling, open-system theory, quantum trajectories, quantum combs, the quantum switch, process tensors, categorical QM, the amplituhedron, deformation and geometric quantum mechanics, Wigner–Moyal phase-space QM, Schwinger–Keldysh, geometric and stochastic quantization, BV and BRST.

The remaining-QFT pass then sourced the Standard Model, supersymmetry, lattice gauge theory, conformal field theory, topological QFT, scattering-amplitudes methods, conformal bootstrap, functional RG and perturbative AQFT. Broad umbrellas such as the Standard Model and modern amplitude/bootstrap programs use authoritative reviews or monographs where assigning one paper as the unique origin would be misleading.

The remaining quantum-gravity/spacetime pass sourced Wheeler–DeWitt canonical gravity, supergravity, semiclassical and stochastic gravity, M-theory, shape dynamics, matrix and tensor models, ER=EPR, entanglement/emergent spacetime, holographic quantum error correction, islands/Page-curve work, celestial holography, Sakharov induced gravity and quantum graphity. Semiclassical/stochastic gravity and broad matrix-model programs remain review-sourced where a single-origin paper would be misleading.

The remaining quantum-cosmology pass sourced loop quantum cosmology, the string landscape, inflationary quantum fluctuations, eternal inflation, third quantization and string-gas cosmology using program-defining primary papers.

The final seed-provenance pass sourced the ensemble interpretation, Nelson stochastic mechanics, nonlinear quantum mechanics, trace dynamics, nonassociative quantum mechanics, quantum mereology, the cellular-automaton interpretation, superdeterministic and retrocausal programs, quaternionic and real-Hilbert-space quantum theory, Wigner's-friend history, and PR-box/superquantum correlations.

**Source coverage remains complete for the current 191-entity shipped corpus. This is not a claim that the corpus itself is complete.** Unsourced or unresolved candidates stay in `research/CANDIDATES.md` until they have sufficient provenance to enter the application.

The next gap sweep promoted 19 additional source-backed frameworks: the background-field method; chiral perturbation theory; HQET; SMEFT; SCET; noncommutative QFT; supersymmetric localization; PEPS; continuous quantum measurement; device-independent quantum information; quantum filtering; gravity as EFT; twistor-string theory; κ-Poincaré/κ-Minkowski; ekpyrotic and cyclic cosmology; parastatistics; generalized exclusion statistics; and the Doebner–Goldin nonlinear family.

A second gap sweep added quantum collision models, quantum supermaps, causal boxes, the pseudo-density-matrix framework, Euclidean dynamical triangulations, twisted geometries, the LQG Master Constraint Programme, group-field cosmology, spin-foam cosmology and pre-big-bang string cosmology.

The formal/QFT depth sweep added Weyl quantization, rigged Hilbert spaces, noncommutative probability, Schwinger–Dyson equations, integrable QFT, NRQED, NRQCD, topological strings, Davies weak-coupling generators and a resource theory of contextuality.

The quantum-gravity/collapse depth sweep added Algebraic Quantum Gravity, tensorial group field theory, Lorentzian/Picard–Lefschetz quantum cosmology, the primitive-ontology program, GRW matter-density and flash ontologies, and QMUPL.

The histories/canonical/collapse sweep added the History Projection Operator formalism, the coevent interpretation, decoherent-histories quantum cosmology, the distinct Diósi gravitational-collapse model, energy-driven stochastic collapse, and canonical quantum gravity as an umbrella framework.

The reconstruction/holography sweep added operational/informational reconstructions of quantum theory, Bell-type quantum field theories, Holographic Space-Time, ghost-free infinite-derivative gravity, polymer quantum mechanics, and causal-set quantum path-sum dynamics.

## Known coverage gaps / next research passes

### Historical and formal foundations
- Weyl quantization and Weyl systems as distinct entities
- rigged Hilbert-space / Gel'fand-triplet formulation
- quantum probability / noncommutative probability
- Mackey imprimitivity and operational axiomatics
- Ludwig-style operational quantum theory

### Interpretations and ontologies
- primitive-ontology variants of collapse theories (flash and mass-density)
- Bell-type QFT / Bohmian QFT
- de Broglie's later double-solution variants
- stochastic interpretations beyond Nelson
- information-theoretic / epistemic interpretations beyond QBism
- perspectival modal variants
- consistent-histories subfamilies and decoherent-histories cosmology

### Quantum field theory
- Osterwalder–Schrader original primary-source chain
- constructive model families (P(φ)₂, φ⁴₃, etc.)
- Schwinger–Dyson hierarchy as a formal framework
- exact / integrable QFT
- light-cone and canonical gauge quantization families
- background-field method
- functional methods beyond FRG
- Standard Model EFT and major specialized EFT families
- resurgent/transseries approaches
- conformal bootstrap historical and modern subbranches

### Quantum information / open systems
- Davies weak-coupling theory
- collision models / repeated interactions
- continuous-measurement theory
- device-independent and semi-device-independent frameworks
- generalized probabilistic reconstruction programs
- categorical / diagrammatic subframeworks such as ZX calculus
- tensor-network and MERA frameworks

### Quantum gravity and spacetime
- canonical quantum gravity as umbrella distinct from Wheeler–DeWitt
- covariant perturbative gravity and EFT gravity as separate branches
- Euclidean dynamical triangulations
- twistor-string theory
- nonlocal gravity
- dynamical triangulations / Regge subfamilies
- quantum graph / pregeometry families
- causal-diamond / holographic spacetime programs
- emergent-gravity thermodynamic derivations
- asymptotic-safety subprograms
- modified-dispersion and noncommutative-spacetime phenomenology

### Quantum cosmology
- decoherent-histories quantum cosmology
- third-quantized / group-field cosmology
- string/pre-big-bang cosmology
- ekpyrotic and cyclic quantum-cosmology treatments
- path-integral contour/Picard–Lefschetz approaches
- no-boundary variants and recent Lorentzian formulations

### Beyond-standard quantum theory
- real, quaternionic, p-adic and finite-field quantum theories
- parastatistics / generalized statistics
- nonlinear families beyond Weinberg
- energy-driven collapse families
- modal quantum theories and other finite operational toy theories
- post-quantum nonsignalling/GPT models beyond PR boxes

## Acceptance rule

The application must never present the current catalog size as proof of literal completeness. A future "complete" milestone requires:

1. a documented candidate-generation method for every category;
2. duplicate/alias reconciliation;
3. primary or authoritative provenance for every displayed factual claim;
4. explicit unresolved classification disputes;
5. zero dangling theory, tree, relation, or source references;
6. reproducible coverage metrics.


## Many-body and quantum-optics expansion

The current sweep adds two explicit domains that were underrepresented in the original ontology: **Quantum many-body & condensed matter** and **Quantum optics & AMO**. Added entries include Dirac relativistic electron theory, Glauber coherence theory, the quantum Rabi and Jaynes–Cummings models, BCS superconductivity, density-functional theory, the Hubbard model, Anderson localization, integer and fractional quantum Hall theories, Bogoliubov and Gross–Pitaevskii Bose-gas frameworks, the Kondo model, the Haldane Chern-insulator model and the toric code.


## Formula coverage

Formula coverage is audited separately from theory coverage. The Formula Atlas now contains 301 source-linked entries. Every shipped formula references at least one existing theory ID and at least one source ID, and CI rejects duplicate formula IDs or dangling theory/source references.

The current formula corpus emphasizes canonical equations and identities across core quantum mechanics, wave mechanics, relativistic quantum theory, QFT, quantum information, open systems, quantum optics, many-body physics, topological quantum theory, and quantum gravity/cosmology. Literal completeness is not yet claimed; see `docs/FORMULA_COVERAGE.md`.


## Quantum error correction and metrology expansion

The latest theory sweep adds quantum error-correction theory, the stabilizer formalism, surface codes, continuous-variable quantum information, the GKP bosonic code, quantum metrology and spin squeezing. A dedicated thought tree now traces quantum-error-correction and sensing lineages through the existing information-theory graph.


## Quantum chemistry and correlated-electron expansion

The latest sweep adds a dedicated **Quantum chemistry & electronic structure** category and source-backed entries for Hartree–Fock, configuration interaction, Møller–Plesset perturbation theory, coupled-cluster theory, time-dependent DFT, GW and Bethe–Salpeter methods. It also adds DMRG, DMFT and Quantum Monte Carlo to the many-body catalog, plus a dedicated thought tree linking reference-state, correlated-wavefunction, Green-function and density-based methods.
