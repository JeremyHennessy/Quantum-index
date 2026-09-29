# Gravity-mediated entanglement: model-discrimination research note

**Status:** source-reviewed synthesis and active research program  
**Reviewed:** 2026-09-29  
**Baseline:** `cbe65b1f30216565fd93aea838264a4f9838bc6c`  
**Supersedes:** the narrower three-test closure candidate preserved on the closed draft PR #59 branch  
**Production/UI rule:** no approved layout or styling changes are required for this research pass

## Revised question

The reviewed literature no longer supports treating “classical gravity” as one hypothesis with one entanglement prediction.

The useful question is:

> Which combination of observables and interventions best discriminates among explicitly defined quantum-gravity, semiclassical, stochastic, collapse and hybrid classical–quantum models?

This is narrower and more falsifiable than asking whether a single entanglement witness proves that gravity is quantum.

## Why the earlier closure result was revised

The previous candidate grouped several classical alternatives into a no-entanglement class. That grouping is too broad.

Two 2025 results are particularly important:

- Trillo and Navascués show that the Diósi–Penrose classical-gravity model they analyze can generate gravitationally induced entanglement in a parameter-dependent regime and later drive the state toward separability.
  - https://doi.org/10.1103/PhysRevD.111.L121101
- Angeli and Carlesso show that Markovian hybrid classical–quantum gravity models can generate entanglement and trace the effect to nonlocal structure in the dynamics.
  - https://doi.org/10.1103/jzht-fbwt

Therefore a positive entanglement result is not a universal falsifier of every model that keeps some gravitational variables classical.

At the same time, other analyses recover no gravity-mediated entanglement for the explicit models they study:

- Lin and Mondal: specified semiclassical and stochastic Newtonian tidal models fail to entangle the final probes, while a quantized minisuperspace tidal degree of freedom can.
  - https://doi.org/10.1103/fv38-kgkb
- Schneider, Huggett and Linnemann: a Newton–Cartan mediator analysis argues that classical gravity itself cannot be the mediator responsible for an observed GIE signal.
  - https://doi.org/10.1088/1361-6382/ae6f62

These are not contradictory once the model assumptions are kept explicit.

## Current model map

| Model / claim family | Entanglement prediction in reviewed setting | Other discriminating structure | Current interpretation |
|---|---|---|---|
| BMV / Marletto–Vedral local-mediator argument | Quantized mediator can entangle probes under the stated information/locality assumptions | mediator noncommutativity / information capacity | Foundational witness framework, assumption-dependent |
| Time-local CP classical–quantum gravity | Model-dependent; some hybrid constructions can entangle | mandatory decoherence/diffusion/back-reaction trade-offs | Test with joint noise + coherence + back-reaction measurements |
| Non-entangling time-local Galilean non-quantized Newtonian models | By definition non-entangling | quantifiable minimum irreversible noise floor | A sub-threshold noise measurement excludes this model class under the stated assumptions |
| Diósi–Penrose classical-gravity dynamics | Can entangle below a parameter-dependent scale; asymptotically separable in the analyzed model | separation threshold, time dependence, collapse/decoherence parameter | Entanglement alone does not exclude this model |
| Semiclassical/stochastic tidal models of Lin–Mondal | No final probe entanglement in the specified models | tidal-field parity/quantization and stochastic response | Model-specific negative prediction |
| Aziz–Howl QFT-matter classical-gravity calculation | Claims entanglement via virtual matter propagation | matter-propagation channel and scaling | Active dispute; direct recalculations challenge the claimed entangling effect |
| Newton-law evolution construction of Marchese et al. | Reproduces GIE in the stated formal setup | interpretation of direct Newtonian evolution versus a physical mediator | Does not by itself settle mediator ontology |
| Kryhin–Sudhir classical stochastic gravity | Classical correlations/noise without quantum entanglement in the analyzed CQ setting | source–probe cross-correlations and irreducible force fluctuations | Experimentally distinguishable stochastic signature |
| Non-Markovian effective CQ dynamics | Need not obey the same instantaneous Markovian positivity trade-off at all times | memory, recoherence, nonlocal kernels | Agreement with effective CQ behavior does not imply fundamental classical gravity |

## Mathematical discriminator already mature enough for the app

For the continuous time-local CQ normalization used by Layton et al., complete positivity gives the canonical decoherence–diffusion relation

[
4D_2 succeq D_0^{-1}.
]

Source:
- Layton, Oppenheim, Russo & Weller-Davies, JHEP 08 (2023) 163
- https://doi.org/10.1007/JHEP08(2023)163

The broader Nature Communications analysis derives general trade-offs among decoherence, classical diffusion and back-reaction for time-local CQ dynamics:
- https://doi.org/10.1038/s41467-023-43348-2

This is useful because a model cannot make the quantum system arbitrarily coherent and the classical gravitational sector arbitrarily quiet while maintaining the same time-local CP coupling.

A 2026 preprint by Fabiano, Fujita, Matsumura and Carney extends the experimental logic to a broader class of **non-entangling** non-quantized Newtonian models satisfying Galilean invariance, time-locality and the correct average Newtonian interaction, deriving a minimum noise floor for that class:
- https://arxiv.org/abs/2603.26075

This does not cover non-quantized models that are themselves entangling, and it does not remove the non-Markovian boundary.

### Boundary

This is not a universal theorem for arbitrary memory-bearing effective dynamics.

Tomizuka and Takeda derive effective CQ dynamics from a fully quantum mediator plus decoherence and find that the reduced CQ evolution is generically non-Markovian:
- https://arxiv.org/abs/2604.06891

Oppenheim et al. give the general continuous memoryless CQ form in 2026:
- https://doi.org/10.1103/1sy3-dyb6

So “violate the Markovian trade-off” is evidence against that Markovian model class, not automatically evidence against every effective classical-looking description.

## Aziz–Howl controversy

Aziz and Howl:
- https://doi.org/10.1038/s41586-025-09595-7

They argue that QFT matter interacting in a classical gravitational background can acquire entanglement through virtual matter propagation.

Direct challenges include:

- Gundhi, Infantino & Bassi:
  - https://arxiv.org/abs/2604.19696
  - Their recalculation argues that restoring omitted transition amplitudes keeps an initially factorized state factorized in the analyzed setup.
- Schneider, Huggett & Linnemann:
  - https://doi.org/10.1088/1361-6382/ae6f62
  - Their Newton–Cartan mediator analysis argues that if classical gravity is the mediator, another interaction must be responsible for an observed entangling force.
- Lin & Mondal:
  - https://doi.org/10.1103/fv38-kgkb
  - Their specified semiclassical/stochastic tidal models do not produce final probe entanglement.

Quantum Index must therefore label the Aziz–Howl result as an active theoretical controversy rather than as a settled theorem that classical gravity generically entangles.

## New research target

Define an explicit finite model set (M={M_1,ldots,M_n}) and an observable/intervention set such as:

- final entanglement and full entanglement time series;
- separation and mass scaling;
- matter coherence loss;
- classical force/metric diffusion spectrum;
- quantum-to-classical back-reaction;
- source–probe cross-correlation;
- matter-channel blocking or species substitution;
- memory/recoherence/non-Markovian witnesses;
- locality-sensitive controls.

For every model, store only source-supported predictions and parameter dependencies. Then solve two separate problems:

1. **identifiability:** which model pairs remain observationally degenerate under the available measurements?
2. **experiment design:** which feasible measurement/intervention adds the most discrimination among the remaining models?

This avoids the error in the earlier hitting-set construction: a test should not be credited with excluding a broad umbrella when a member model under that umbrella has a different prediction.

## Candidate computational representation

For model (M_i), observable (O_j), parameters (	heta_i), and an experimental design (d), store a predictive object

[
p(O_jmid M_i,	heta_i,d)
]

or, where the literature is not quantitative enough, a bounded qualitative state:

- predicts;
- forbids under stated assumptions;
- parameter-dependent;
- not derived;
- disputed.

A pair of models is experimentally distinguishable only when their predictive regions do not fully overlap after nuisance parameters and experimental uncertainty are propagated.

This suggests a future Quantum Index layer above the existing theory graph:

**Theory / Model → Assumptions → Observable prediction → Evidence / Constraint → Discriminating experiment**

The current Problem, Evidence, Formula and ResearchQuestion layers already provide most of the schema needed.

## Immediate app changes implemented on the branch

1. Source-backed graph links among BMV, postquantum classical gravity, Diósi–Penrose, stochastic gravity, open systems and non-Markovian dynamics.
2. A canonical CQ decoherence–diffusion formula with explicit regime/assumption metadata.
3. A dedicated Evidence record for the Markovian trade-off.
4. A dedicated Evidence record for DP model-specific entanglement.
5. The prior Aziz–Howl Evidence record converted into an active model-dependent theoretical controversy.
6. Development timeline entries for the 2025 DP result and the 2026 model split.
7. A new open ResearchQuestion: gravity-mediated entanglement as model discrimination.
8. A new Quantum Gravity Problem approach group for tabletop model discrimination.
9. Regression tests that prevent the disputed 2025 claim from silently reverting to settled language.

## Research directions worth pursuing next

### A. Build the quantitative model–observable matrix

Extract equations and numerical regimes from:
- Diósi–Penrose GIE;
- Angeli–Carlesso hybrid dynamics;
- Oppenheim CQ gravity;
- Kryhin–Sudhir stochastic signatures;
- Lin–Mondal tidal models;
- quantized Newtonian/BMV baselines.

The goal is not to score theories. It is to expose where predictions differ.

### B. Search for an experimentally accessible non-Markovian discriminator

The Markovian trade-off is strong precisely because it is assumption-bounded. A useful next result would identify an observable memory/recoherence signature that separates:
- fundamental Markovian CQ gravity;
- effective CQ behavior derived from an underlying quantum mediator;
- ordinary environmental decoherence.

This must be derived for a concrete protocol, not asserted generically.

### C. Combine entanglement dynamics with noise spectroscopy

DP and other hybrid models can predict entanglement while also producing characteristic decoherence/heating/noise. A joint time-domain entanglement + force-noise measurement may separate models that are degenerate at one final entanglement time.

### D. Preserve mediator versus direct-potential distinctions

A direct Newtonian potential Hamiltonian, a Newton–Cartan classical mediator, a stochastic CQ field and a quantized mediator are not interchangeable ontologies even when they reproduce the same phase evolution in one regime. Quantum Index should track that distinction as a first-class assumption.

## Novelty status

No world-first claim is made here.

What is original to this Quantum Index pass is the **cross-literature synthesis into a model-discrimination program and data schema**. The individual mathematical results and proposed experimental signatures are prior art and remain attributed to their sources.

A genuine new physics result would require either:
- a new theorem connecting previously separate model classes;
- a new experimentally feasible discriminator with a derivation;
- or a quantitative identifiability result over a well-defined model family.

Those remain open targets.
