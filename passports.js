// Curated Theory Passports for high-value hub entries.
window.QI_PASSPORTS = {
  "version": "v1",
  "reviewedAt": "2026-09-29",
  "scope": "Curated Theory Passports for hub entries and selected lattice models. Passports structure existing sourced catalog/profile content; they do not supersede the underlying sources or imply experimental confirmation.",
  "records": [
    {
      "theoryId": "hawking-radiation",
      "problemIds": [
        "black-hole-information"
      ],
      "entityType": "research program",
      "scientificStatus": "established prediction",
      "coreIdea": "Quantum fields propagating on a black-hole spacetime produce an approximately thermal outgoing flux for distant observers.",
      "degreesOfFreedom": "Quantum matter fields on a prescribed classical black-hole geometry; the background metric is not itself fully quantized in the leading calculation.",
      "assumptions": [
        "A semiclassical background with a late-time black-hole exterior is adequate for the field calculation.",
        "The quantum state and mode decomposition are specified so the in/out field modes can be compared.",
        "Backreaction and the microscopic completion of evaporation are not supplied by the leading calculation."
      ],
      "mathematicalStructure": "Quantum field theory in curved spacetime, mode mixing/Bogoliubov transformations, and horizon thermodynamics.",
      "formulaIds": [
        "curved-kg-free",
        "hawking-temp",
        "schwarzschild-temp",
        "bh-entropy"
      ],
      "regime": "Semiclassical gravity; exterior/late-time black-hole radiation calculations where the background geometry is treated classically.",
      "predictionsConsequences": [
        "Outgoing radiation with a temperature set by surface gravity.",
        "Black holes lose energy through quantum radiation in the semiclassical description.",
        "The thermal character of the leading result motivates the black-hole information problem."
      ],
      "evidenceIds": [],
      "evidenceSummary": "The cited source is a theoretical derivation; the Passport does not claim direct astrophysical detection of Hawking radiation.",
      "limitations": [
        "Does not provide a microscopic theory of complete evaporation.",
        "Leading thermality does not specify the complete radiation correlation structure.",
        "Does not by itself quantize the spacetime geometry."
      ],
      "questionIds": [
        "rq-hawking-radiation"
      ],
      "developmentIds": [],
      "sourceIds": [
        "hawking-1975"
      ]
    },
    {
      "theoryId": "island-formula",
      "problemIds": [
        "black-hole-information"
      ],
      "entityType": "research program",
      "scientificStatus": "active research",
      "coreIdea": "The generalized entropy of radiation can be extremized over candidate quantum extremal surfaces, allowing disconnected gravitating regions ('islands') to contribute.",
      "degreesOfFreedom": "Radiation degrees of freedom plus semiclassical gravitational regions whose generalized entropy is evaluated through a quantum extremal-surface prescription.",
      "assumptions": [
        "A controlled semiclassical gravitational setup is available.",
        "The matter/gravity system and radiation region admit the entropy prescription being used.",
        "Results derived in holographic/bath or lower-dimensional models require additional justification before being generalized to arbitrary astrophysical evaporation."
      ],
      "mathematicalStructure": "Generalized entropy extremization and quantum extremal surfaces, with entropy contributions from candidate island regions.",
      "formulaIds": [
        "island"
      ],
      "regime": "Controlled semiclassical/holographic evaporation models and related generalized-entropy calculations.",
      "predictionsConsequences": [
        "Can reproduce Page-curve behavior in tractable models.",
        "Places some interior regions in the radiation entanglement wedge after the relevant transition."
      ],
      "evidenceIds": [],
      "evidenceSummary": "Current support in this Passport is theoretical and model-based rather than experimental.",
      "limitations": [
        "Does not automatically provide a practical microscopic decoding algorithm for generic radiation.",
        "The domain of validity beyond controlled models remains an active research question."
      ],
      "questionIds": [
        "rq-island-formula"
      ],
      "developmentIds": [],
      "sourceIds": [
        "almheiri-islands-2020"
      ]
    },
    {
      "theoryId": "decoherence",
      "problemIds": [
        "measurement-problem"
      ],
      "entityType": "framework",
      "scientificStatus": "established",
      "coreIdea": "Entanglement with uncontrolled environmental degrees of freedom suppresses locally observable interference between selected alternatives.",
      "degreesOfFreedom": "A quantum system, its environment, and the reduced state obtained after inaccessible environmental degrees of freedom are traced out.",
      "assumptions": [
        "The system-environment interaction and initial state are specified.",
        "The accessible observables define which coherences are operationally relevant.",
        "A reduced-state description is appropriate for the subsystem under study."
      ],
      "mathematicalStructure": "Open-system/reduced-density-operator dynamics, environment-induced entanglement, and pointer-state/einselection analysis.",
      "formulaIds": [
        "decoherence-factor"
      ],
      "regime": "Open quantum systems with environmental interactions strong enough to produce relevant decoherence timescales.",
      "predictionsConsequences": [
        "Suppression of interference terms in appropriate reduced descriptions.",
        "Emergence of robust pointer-like states selected by the interaction structure."
      ],
      "evidenceIds": [],
      "evidenceSummary": "The indexed review develops and surveys dynamical decoherence models; a dedicated experiment-level Evidence set is not yet attached to this Passport.",
      "limitations": [
        "Decoherence alone does not select one unique global outcome under every interpretation.",
        "The preferred basis and timescale depend on the actual interaction and environment."
      ],
      "questionIds": [
        "rq-decoherence"
      ],
      "developmentIds": [],
      "sourceIds": [
        "zurek-decoherence"
      ]
    },
    {
      "theoryId": "grw",
      "problemIds": [
        "measurement-problem"
      ],
      "entityType": "framework",
      "scientificStatus": "alternative theory",
      "coreIdea": "The quantum state undergoes rare stochastic localization events whose aggregate effect suppresses macroscopic superpositions.",
      "degreesOfFreedom": "The ordinary quantum wavefunction supplemented by stochastic spontaneous-localization dynamics.",
      "assumptions": [
        "Unitary Schrödinger evolution is modified by objective stochastic collapse events.",
        "Collapse parameters determine the localization rate and spatial scale.",
        "The nonrelativistic formulation is the relevant scope of the indexed core model."
      ],
      "mathematicalStructure": "Stochastic nonlinear state evolution/localization operators added to ordinary quantum dynamics.",
      "formulaIds": [
        "grw-collapse",
        "grwm-density"
      ],
      "regime": "Nonrelativistic microscopic-to-macroscopic quantum dynamics in GRW-type collapse models.",
      "predictionsConsequences": [
        "Microscopic systems are only rarely affected while macroscopic aggregates collapse rapidly.",
        "Unlike purely interpretive approaches, altered dynamics can in principle produce testable deviations from standard quantum theory."
      ],
      "evidenceIds": [],
      "evidenceSummary": "The current Evidence pilot constrains a Diósi–Penrose model, not GRW specifically; no direct GRW constraint is attached here.",
      "limitations": [
        "Requires additional collapse parameters beyond ordinary quantum mechanics.",
        "Relativistic extensions and precise experimental bounds require model-specific treatment."
      ],
      "questionIds": [],
      "developmentIds": [],
      "sourceIds": [
        "grw-1986",
        "sep-collapse"
      ]
    },
    {
      "theoryId": "loop-quantum-gravity",
      "problemIds": [
        "quantum-gravity"
      ],
      "entityType": "research program",
      "scientificStatus": "active research",
      "coreIdea": "General relativity is canonically reformulated in connection variables and quantized using holonomies, fluxes and spin-network states.",
      "degreesOfFreedom": "SU(2)-connection/holonomy and flux variables represented by spin networks, with quantum constraints encoding gauge and gravitational dynamics.",
      "assumptions": [
        "Background independence is retained rather than quantizing perturbations on a fixed metric.",
        "The canonical constraint structure provides the starting point for quantization.",
        "A satisfactory continuum and semiclassical limit must recover realistic general-relativistic dynamics."
      ],
      "mathematicalStructure": "Canonical constrained quantization, Ashtekar–Barbero variables, holonomy-flux algebra, spin networks and related covariant spin-foam constructions.",
      "formulaIds": [
        "wilson-loop",
        "lqg-area",
        "holonomy",
        "ashtekar-poisson",
        "lqg-gauss"
      ],
      "regime": "Nonperturbative quantum-geometry constructions and their semiclassical/continuum limits.",
      "predictionsConsequences": [
        "Discrete spectra for selected kinematical geometric operators.",
        "Quantum-geometric structures that can be used in black-hole and cosmological model calculations."
      ],
      "evidenceIds": [],
      "evidenceSummary": "The indexed sources establish theoretical structures and survey results; no experiment currently selects LQG as the fundamental theory of gravity.",
      "limitations": [
        "Kinematical discreteness alone does not establish the correct continuum dynamics.",
        "Connecting the formalism to distinctive experimentally accessible observables remains an open challenge."
      ],
      "questionIds": [
        "rq-loop-quantum-gravity"
      ],
      "developmentIds": [],
      "sourceIds": [
        "rovelli-lqg",
        "rovelli-qg-survey",
        "ashtekar-1986"
      ]
    },
    {
      "theoryId": "string-theory",
      "problemIds": [
        "quantum-gravity"
      ],
      "entityType": "research program",
      "scientificStatus": "active research",
      "coreIdea": "Fundamental excitations are extended strings whose quantum spectra include gravitational modes and whose interactions can provide ultraviolet-softened quantum-gravity constructions.",
      "degreesOfFreedom": "Strings and, in broader constructions, related extended objects and fields; the precise spectrum depends on the chosen background/compactification.",
      "assumptions": [
        "A particular string construction and background are specified.",
        "Compactification, moduli and other model choices determine the low-energy physics.",
        "Controlled results in special backgrounds do not automatically select a model of our universe."
      ],
      "mathematicalStructure": "World-sheet quantum theory/string actions, mode spectra, dualities and background-dependent compactification/holographic constructions.",
      "formulaIds": [
        "polyakov-action",
        "witten-string-field-action",
        "pre-big-bang-duality",
        "topological-string-genus"
      ],
      "regime": "Perturbative string descriptions and related nonperturbative/dual constructions in backgrounds where calculations are controlled.",
      "predictionsConsequences": [
        "Contains a massless spin-2 excitation interpreted as a graviton.",
        "Provides microscopic black-hole and holographic calculations in selected controlled settings."
      ],
      "evidenceIds": [],
      "evidenceSummary": "The current Passport records theoretical evidence and consistency results; it does not claim experimental confirmation of string theory as the description of nature.",
      "limitations": [
        "Observable predictions are highly construction-dependent.",
        "Results in special backgrounds do not by themselves establish a unique phenomenological model."
      ],
      "questionIds": [
        "rq-string-theory"
      ],
      "developmentIds": [],
      "sourceIds": [
        "rovelli-qg-survey"
      ]
    },
    {
      "theoryId": "eigenstate-thermalization",
      "problemIds": [
        "quantum-thermalization"
      ],
      "entityType": "foundational framework",
      "scientificStatus": "active framework",
      "coreIdea": "For suitable nonintegrable many-body systems, matrix elements of simple observables in the energy eigenbasis have a smooth thermodynamic structure that explains local equilibration.",
      "degreesOfFreedom": "Many-body energy eigenstates and matrix elements of selected few-body/local observables.",
      "assumptions": [
        "The Hamiltonian is in the class where ETH is expected to apply rather than integrable/localized.",
        "The observable is sufficiently simple/local for the ETH ansatz to be relevant.",
        "Finite-size behavior must be distinguished from the thermodynamic limit."
      ],
      "mathematicalStructure": "ETH ansatz for diagonal/off-diagonal observable matrix elements, connected to quantum-chaos/random-matrix reasoning.",
      "formulaIds": [
        "eth-ansatz"
      ],
      "regime": "Generic isolated nonintegrable many-body quantum systems and appropriate local/few-body observables.",
      "predictionsConsequences": [
        "Individual eigenstates can reproduce equilibrium expectation values for suitable observables.",
        "Unitary evolution from broad initial conditions can yield thermal-looking local observables."
      ],
      "evidenceIds": [],
      "evidenceSummary": "Support is theoretical and numerical across many models; the current Evidence pilot does not yet contain a dedicated ETH experiment record.",
      "limitations": [
        "Not universal: integrability, localization and exceptional scarred states provide important counter-regimes.",
        "Strong and weak formulations of ETH must be distinguished."
      ],
      "questionIds": [],
      "developmentIds": [
        "many-body-scars-2025"
      ],
      "sourceIds": [
        "wave3-eth-review-2016"
      ]
    },
    {
      "theoryId": "many-body-localization",
      "problemIds": [
        "quantum-thermalization"
      ],
      "entityType": "theory / framework",
      "scientificStatus": "active framework",
      "coreIdea": "Interacting disordered quantum systems can retain local memory and fail to display the conventional ETH thermalization pattern over appropriate regimes.",
      "degreesOfFreedom": "Interacting many-body degrees of freedom in disordered systems, often described through emergent quasi-local conserved quantities in the localized regime.",
      "assumptions": [
        "Sufficient disorder and interaction structure are present.",
        "Dimensionality, interaction range and system size/time window are specified.",
        "Finite-size and finite-time localization signatures are not automatically equated with a stable thermodynamic phase."
      ],
      "mathematicalStructure": "Disordered interacting Hamiltonians, localization diagnostics, transport/entanglement dynamics and quasi-local-integral-of-motion descriptions.",
      "formulaIds": [],
      "regime": "Disordered interacting many-body systems in parameter regimes where localization/nonergodicity is studied.",
      "predictionsConsequences": [
        "Suppressed transport and long-lived memory of local initial conditions.",
        "Violation of the usual ETH description in localized regimes."
      ],
      "evidenceIds": [],
      "evidenceSummary": "The indexed review summarizes theoretical/numerical evidence; the current Evidence pilot does not yet attach a dedicated MBL experimental record.",
      "limitations": [
        "Stability in higher dimensions, with long-range interactions, and in asymptotic limits remains regime-dependent.",
        "Finite-size/time observations require careful interpretation."
      ],
      "questionIds": [],
      "developmentIds": [],
      "sourceIds": [
        "wave3-mbl-review-2015"
      ]
    },
    {
      "theoryId": "lambda-cdm",
      "problemIds": [
        "dark-matter"
      ],
      "entityType": "cosmological model",
      "scientificStatus": "established phenomenological model",
      "coreIdea": "A compact parameterized model combines general relativity, a cosmological constant, cold dark matter, baryons, radiation and primordial perturbations to predict cosmological observables.",
      "degreesOfFreedom": "Background cosmological density components plus a primordial perturbation spectrum evolved through general-relativistic cosmology.",
      "assumptions": [
        "Large-scale gravity is described by general relativity in the model.",
        "Dark matter is effectively cold on relevant cosmological scales.",
        "Dark energy is represented by a cosmological constant in baseline ΛCDM."
      ],
      "mathematicalStructure": "FLRW background expansion plus linear/nonlinear perturbation evolution and parameter inference from cosmological datasets.",
      "formulaIds": [],
      "regime": "Homogeneous/isotropic background cosmology and structure formation across the scales modeled by ΛCDM.",
      "predictionsConsequences": [
        "A specific expansion history and growth of structure for a chosen parameter set.",
        "Predictions for CMB anisotropies, large-scale structure, BAO and distance observables."
      ],
      "evidenceIds": [
        "ev-desi-dr2-2025"
      ],
      "evidenceSummary": "Planck-era cosmological data provide strong support for the ΛCDM phenomenological baseline; recent DESI combinations refine expansion-history/model comparisons rather than identifying dark-matter microphysics.",
      "limitations": [
        "Does not specify the microscopic identity of cold dark matter.",
        "Current dark-energy tensions/model comparisons can depend on dataset combinations and assumptions."
      ],
      "questionIds": [],
      "developmentIds": [
        "desi-y1-bao-cosmology-2024",
        "desi-dr2-bao-cosmology-2025",
        "desi-lya-fullshape-2026"
      ],
      "sourceIds": [
        "planck-cosmology-2020"
      ]
    },
    {
      "theoryId": "wimp-dark-matter",
      "problemIds": [
        "dark-matter"
      ],
      "entityType": "candidate framework",
      "scientificStatus": "candidate framework",
      "coreIdea": "A stable or long-lived massive particle with weak-scale-like interactions can realize cold dark matter, with an abundance and detection phenomenology fixed by a specified particle model.",
      "degreesOfFreedom": "One or more new massive particle species plus their couplings to Standard-Model and/or dark-sector fields.",
      "assumptions": [
        "A particle model and production history are specified.",
        "Astrophysical halo distributions and detector/nuclear response models enter direct-detection predictions.",
        "Thermal freeze-out is one important production mechanism but not a universal assumption for every WIMP model."
      ],
      "mathematicalStructure": "Relic-abundance calculations and scattering/annihilation amplitudes translated into collider, direct-detection and indirect-search observables.",
      "formulaIds": [],
      "regime": "Particle dark-matter models in the mass/coupling ranges addressed by the chosen production and search calculation.",
      "predictionsConsequences": [
        "Model-dependent relic abundance and scattering/annihilation signals.",
        "Direct, indirect and collider searches constrain different slices of parameter space."
      ],
      "evidenceIds": [
        "ev-lz-extended-window-2026"
      ],
      "evidenceSummary": "LZ constrains WIMP-nucleus interaction parameter space; its 2026 extended-window excess is a 2.6σ global candidate signal, not a dark-matter discovery.",
      "limitations": [
        "The WIMP label spans many models rather than one unique parameter point.",
        "Null/candidate search results constrain parameter space and assumptions rather than disproving all WIMP realizations at once."
      ],
      "questionIds": [
        "rq-wimp-dark-matter"
      ],
      "developmentIds": [
        "lz-extended-window-2026"
      ],
      "sourceIds": [
        "jungman-wimp-1996"
      ]
    }
  ]
};

// Per-record review dates preserve the original hub review history.
window.QI_PASSPORTS.records.push(...[
  {
    "theoryId": "ssh-model",
    "problemIds": [],
    "entityType": "model",
    "scientificStatus": "established model; scope-limited representative",
    "coreIdea": "Alternating bond strengths make the boundary and bulk differ in a precisely specified one-dimensional chain.",
    "degreesOfFreedom": "One orbital on each A/B sublattice; one spin sector. The original electron–lattice model also has distortion variables.",
    "assumptions": [
      "Freeze the distortion for these formulas.",
      "Neglect electron interactions and onsite terms.",
      "Fix the unit cell and boundary termination."
    ],
    "mathematicalStructure": "Alternating-hopping matrix, two Bloch bands, chiral symmetry and an oriented bulk winding.",
    "formulaIds": [
      "ssh-fixed-dimerization-bands",
      "ssh-chiral-winding"
    ],
    "regime": "Static nearest-neighbor bulk; open-chain edges require their own boundary condition.",
    "predictionsConsequences": [
      "Dimerization opens a bulk gap.",
      "A compatible boundary can support in-gap edge states."
    ],
    "evidenceIds": [],
    "evidenceSummary": "These cards curate a theoretical limit; no dedicated experimental Evidence record is attached.",
    "limitations": [
      "Finite edges can hybridize rather than remain exactly at zero energy.",
      "Breaking chiral symmetry changes the winding argument."
    ],
    "questionIds": [],
    "developmentIds": [],
    "sourceIds": [
      "discovery-ssh-1979",
      "asboth-ssh-course-2015"
    ],
    "reviewedAt": "2026-10-07"
  },
  {
    "theoryId": "aubry-andre",
    "problemIds": [],
    "entityType": "model",
    "scientificStatus": "established model; scope-limited representative",
    "coreIdea": "Localization can arise from a deterministic incommensurate onsite potential rather than random site energies.",
    "degreesOfFreedom": "A single particle in a Wannier basis with uniform hopping and a spatially modulated site energy.",
    "assumptions": [
      "Neglect interactions and extra confinement.",
      "Separate the ideal irrational ratio from finite approximants.",
      "Specify phase, size and boundary conditions."
    ],
    "mathematicalStructure": "A nearest-neighbor lattice Hamiltonian with one cosine modulation; real-space and Fourier-space descriptions expose the competing energy scales.",
    "formulaIds": [
      "aubry-andre-onsite-hamiltonian"
    ],
    "regime": "Single-particle quasiperiodic chain, not interacting many-body localization.",
    "predictionsConsequences": [
      "The ideal golden-ratio model has its transition at Delta/J=2.",
      "Finite samples and experimental incommensuration alter the observed crossover."
    ],
    "evidenceIds": [],
    "evidenceSummary": "Roati et al. report inhibited expansion and localized profiles in a nearly noninteracting condensate. This does not establish interacting MBL; no separate Evidence card is added here.",
    "limitations": [
      "Do not assign the ideal threshold to every experimental setup.",
      "A rational finite ring is not proof of the irrational infinite-system limit."
    ],
    "questionIds": [],
    "developmentIds": [],
    "sourceIds": [
      "discovery-roati-2008"
    ],
    "reviewedAt": "2026-10-07"
  },
  {
    "theoryId": "holstein-model",
    "problemIds": [],
    "entityType": "model",
    "scientificStatus": "established model; scope-limited representative",
    "coreIdea": "An electron moving between sites dresses itself with local vibrational excitations.",
    "degreesOfFreedom": "One itinerant electron and a harmonic oscillator on each site; the quantum phonon cloud is retained.",
    "assumptions": [
      "One electron and dispersionless local phonons.",
      "Fix coupling and energy conventions.",
      "Use the small-hopping band only within its perturbative regime."
    ],
    "mathematicalStructure": "A fermion–boson Hamiltonian; displacement of occupied oscillators and small-hopping perturbation give a limiting polaron band.",
    "formulaIds": [
      "holstein-local-phonon-hamiltonian",
      "holstein-small-hopping-band"
    ],
    "regime": "Clean one-dimensional single-polaron problem; finite-density correlations are outside these representatives.",
    "predictionsConsequences": [
      "At zero hopping the occupied oscillator lowers energy by lambda²/Omega.",
      "At first order the coherent hopping is reduced by exp[-(lambda/Omega)²]."
    ],
    "evidenceIds": [],
    "evidenceSummary": "The cited research supplies analytical limits and variational numerical calculations, not a direct observation that every material follows this Hamiltonian.",
    "limitations": [
      "The finite-t band is not exact.",
      "Band narrowing alone does not demonstrate a sharp self-trapping ground-state transition."
    ],
    "questionIds": [],
    "developmentIds": [],
    "sourceIds": [
      "discovery-holstein-1959",
      "bonca-holstein-polaron-1998"
    ],
    "reviewedAt": "2026-10-07"
  }
]);

// Source-scoped AMO/steering curation, 7 October 2026. Prior records are unchanged.
window.QI_PASSPORTS.records.push(...[
  {
    "theoryId": "fano-resonance",
    "problemIds": [],
    "entityType": "resonance framework",
    "scientificStatus": "established framework; isolated-resonance representative",
    "coreIdea": "A discrete resonant pathway interferes with continuum excitation, producing an asymmetric spectral feature.",
    "degreesOfFreedom": "A discrete state coupled to a continuum, plus a noninterfering background in the selected cross-section model.",
    "assumptions": [
      "Use a real asymmetry parameter and an isolated resonance.",
      "Keep the background approximately constant across the relevant energy interval.",
      "Separate the natural line width from instrumental energy spread."
    ],
    "mathematicalStructure": "The real-q Fano profile and its convolution with a normalized Gaussian; scaled detuning fixes the imaginary-part sign.",
    "formulaIds": [
      "fano-real-q-profile",
      "fano-gaussian-broadened-profile"
    ],
    "regime": "Linear spectral response in the stated local line-shape model, not every multichannel or overlapping resonance.",
    "predictionsConsequences": [
      "The interfering contribution vanishes at epsilon=-q before instrumental broadening.",
      "A nonzero background or finite resolution can leave a nonzero observed minimum."
    ],
    "evidenceIds": [],
    "evidenceSummary": "These cards document a theoretical profile and convolution, not a new experimental measurement. Source-equation review uses Schippers 2018; the original Fano bibliography entry is retained.",
    "limitations": [
      "A fitted asymmetric peak alone does not uniquely identify its microscopic mechanism.",
      "Gamma is not generally the observed asymmetric peak FWHM."
    ],
    "questionIds": [],
    "developmentIds": [],
    "sourceIds": [
      "discovery-fano-1961",
      "schippers-fano-convolution-2018"
    ],
    "reviewedAt": "2026-10-07"
  },
  {
    "theoryId": "quantum-steering",
    "problemIds": [],
    "entityType": "correlation framework",
    "scientificStatus": "established framework; measurement- and trust-dependent",
    "coreIdea": "One party can demonstrate correlations that cannot be explained by pre-existing quantum states of the trusted party.",
    "degreesOfFreedom": "A bipartite quantum state, Alice’s measurement setting and announced outcome, and Bob’s trusted conditional quantum states.",
    "assumptions": [
      "Specify Alice-to-Bob direction and the allowed measurements.",
      "Use one hidden ensemble for all settings when testing an LHS explanation.",
      "State sampling and detector assumptions before applying a witness."
    ],
    "mathematicalStructure": "Subnormalized conditional states form an assemblage; an LHS decomposition is the null model and a finite Pauli witness can exclude it.",
    "formulaIds": [
      "steering-projective-lhs",
      "steering-finite-setting-bound"
    ],
    "regime": "The defining card uses the source’s projective scenario; the witness additionally assumes trusted qubit observables.",
    "predictionsConsequences": [
      "For three orthogonal axes the ideal LHS bound is 1/sqrt(3).",
      "A singlet Werner example with visibility above that bound violates this witness with matched signs."
    ],
    "evidenceIds": [],
    "evidenceSummary": "Saunders et al. demonstrate photonic steering with multiple settings; their experiment does not close the detection loophole. No new Evidence record or universal Bell-locality threshold is asserted here.",
    "limitations": [
      "Failure to violate this finite witness is inconclusive about general steerability.",
      "Conditioned-state changes do not enable signalling and do not alone prove steering."
    ],
    "questionIds": [],
    "developmentIds": [],
    "sourceIds": [
      "discovery-steering-2006",
      "saunders-steering-2010"
    ],
    "reviewedAt": "2026-10-07"
  }
]);

// Bell Passport reuses existing formulas and experimental evidence; no new observation.
window.QI_PASSPORTS.records.push({
  "theoryId": "bell",
  "problemIds": [
    "measurement-problem"
  ],
  "entityType": "no-go theorem and correlation framework",
  "scientificStatus": "established theorem under explicit assumptions",
  "coreIdea": "Some quantum correlations cannot be reproduced by a common setting-independent hidden-variable distribution and local responses.",
  "degreesOfFreedom": "Observed conditional outcome probabilities, two local setting choices per party in CHSH, and hypothetical shared hidden variables.",
  "assumptions": [
    "Specify the allowed settings, outcome alphabet and coding before choosing a Bell inequality.",
    "Bell locality and measurement independence are separate ingredients of the local model.",
    "An experimental conclusion needs valid trial selection, locality controls and finite-sample statistics."
  ],
  "mathematicalStructure": "Conditional factorization and convex mixtures define the local set; CHSH separates some quantum behaviors from it, while the quantum operator bound limits the achievable value.",
  "formulaIds": [
    "bell-factorization",
    "chsh-classical",
    "chsh-tsirelson",
    "bell-state"
  ],
  "regime": "Bipartite Bell/CHSH comparisons; the four cards do not classify all states, scenarios or Bell inequalities.",
  "predictionsConsequences": [
    "The declared local CHSH model obeys |S| <= 2; appropriate two-qubit measurements can reach 2 sqrt(2).",
    "Phi+ is maximally entangled, but poorly chosen measurements can give no CHSH violation."
  ],
  "evidenceIds": [
    "ev-bell-loophole-free-2015"
  ],
  "evidenceSummary": "The existing linked 2015 Bell-test record is retained with its experimental assumptions. This Passport adds no new experimental result and does not convert theoretical bounds into observed values.",
  "limitations": [
    "Bell violation does not enable faster-than-light signalling or select a unique interpretation of quantum mechanics.",
    "Entanglement, steering and Bell nonlocality are distinct tests with different trust and measurement assumptions.",
    "Failing one CHSH test does not establish general Bell locality."
  ],
  "questionIds": [
    "rq-bell"
  ],
  "developmentIds": [],
  "sourceIds": [
    "bell-1964",
    "brunner-bell-2014",
    "discovery-steering-2006",
    "cirelson-bell-1980",
    "hensen-bell-2015"
  ],
  "reviewedAt": "2026-10-07"
});


// 2026-10-08 multidomain Theory Passports.
window.QI_PASSPORTS.records.push(...[
  {
    "theoryId": "bose-hubbard",
    "problemIds": [],
    "entityType": "lattice many-body model",
    "scientificStatus": "established model with controlled experimental realizations",
    "coreIdea": "Bosons hopping on a lattice compete with local repulsion, producing delocalized superfluid and number-localized Mott-insulating regimes.",
    "degreesOfFreedom": "Bosonic creation/annihilation operators on lattice sites, local occupations, hopping amplitudes, on-site interaction energies and optional site offsets.",
    "assumptions": [
      "A single-band lattice description is adequate in the representative formula.",
      "Interactions are predominantly local and the displayed Hamiltonian keeps nearest-neighbor hopping.",
      "Trap geometry, dimensionality and filling affect the phase diagram and must be specified for quantitative comparisons."
    ],
    "mathematicalStructure": "Interacting lattice-boson Hamiltonian, strong/weak-coupling limits and quantum critical behavior controlled by the hopping-to-interaction competition.",
    "formulaIds": [
      "bose-hubbard-lattice"
    ],
    "regime": "Low-energy lattice bosons in regimes where a single-band Bose–Hubbard description is justified.",
    "predictionsConsequences": [
      "Increasing interaction relative to hopping can drive superfluid–Mott-insulator transitions at commensurate filling.",
      "The Mott regime has suppressed number fluctuations/phase coherence and an interaction-generated excitation gap in the idealized setting."
    ],
    "evidenceIds": [
      "ev-bose-mott-transition-2002"
    ],
    "evidenceSummary": "The 2002 optical-lattice experiment observed a reversible superfluid-to-Mott transition with localization, loss of phase coherence and a gap. That validates the targeted regime, not every Bose–Hubbard approximation.",
    "limitations": [
      "Higher bands, long-range interactions, disorder, trapping and finite temperature can require extensions.",
      "The model does not by itself specify a universal phase boundary across all lattice geometries and dimensions."
    ],
    "questionIds": [],
    "developmentIds": [],
    "sourceIds": [
      "fisher-bose-hubbard-1989",
      "jaksch-optical-lattice-1998",
      "greiner-mott-2002"
    ],
    "reviewedAt": "2026-10-08"
  },
  {
    "theoryId": "jaynes-cummings",
    "problemIds": [],
    "entityType": "light–matter model",
    "scientificStatus": "established approximation with experimentally resolved quantum signatures",
    "coreIdea": "A two-level emitter coherently exchanges one excitation at a time with a single quantized field mode under the rotating-wave approximation.",
    "degreesOfFreedom": "One bosonic cavity mode and a two-level emitter, with excitation-number sectors coupled by the light–matter interaction.",
    "assumptions": [
      "Single relevant cavity mode and a valid two-level emitter approximation.",
      "Rotating-wave approximation; drive, damping and additional levels are absent from the canonical Hamiltonian card.",
      "Near-resonant weak-to-moderate coupling relative to bare frequencies for the canonical approximation."
    ],
    "mathematicalStructure": "Exactly block-diagonalizable rotating-wave Hamiltonian with photon-number-dependent dressed-state splittings and coherent Rabi exchange.",
    "formulaIds": [
      "jc-hamiltonian",
      "jc-rabi-frequency"
    ],
    "regime": "Cavity/circuit QED and related single-mode two-level systems outside the ultrastrong-coupling regime.",
    "predictionsConsequences": [
      "Dressed-state splittings scale with the square root of photon number in the ideal model.",
      "Vacuum and low-photon-number fields drive resolvable quantum Rabi oscillations."
    ],
    "evidenceIds": [
      "ev-cavity-rabi-1996"
    ],
    "evidenceSummary": "Brune et al. resolved photon-number-dependent Rabi frequencies in a high-Q cavity, directly probing field quantization in the regime tested.",
    "limitations": [
      "Counter-rotating terms become important in ultrastrong coupling.",
      "Dissipation, multilevel structure, multimode fields and external drive require open-system or extended models."
    ],
    "questionIds": [
      "rq-jaynes-cummings"
    ],
    "developmentIds": [],
    "sourceIds": [
      "jaynes-cummings-1963",
      "he-jaynes-cummings-2012",
      "brune-rabi-1996"
    ],
    "reviewedAt": "2026-10-08"
  },
  {
    "theoryId": "hartree-fock",
    "problemIds": [],
    "entityType": "electronic-structure approximation",
    "scientificStatus": "established mean-field framework",
    "coreIdea": "Approximate an interacting fermionic state by one optimized antisymmetrized Slater determinant and solve the resulting orbital equations self-consistently.",
    "degreesOfFreedom": "Occupied one-particle spin orbitals forming a Slater determinant; Coulomb and exchange operators built from those orbitals.",
    "assumptions": [
      "Single-determinant ansatz and orthonormal spin orbitals.",
      "Typical molecular use assumes a nonrelativistic Born–Oppenheimer electronic Hamiltonian.",
      "Exchange is included within the determinant, while correlation beyond the single determinant is omitted."
    ],
    "mathematicalStructure": "Variational optimization of a determinant gives nonlinear self-consistent Fock equations, a Fock operator and a mean-field total energy.",
    "formulaIds": [
      "hf-fock-equation",
      "hf-fock-operator",
      "hf-energy"
    ],
    "regime": "Mean-field electronic structure where a single reference determinant is qualitatively adequate.",
    "predictionsConsequences": [
      "Provides self-consistent orbitals and an exchange-aware reference energy.",
      "Supplies a common reference for post-Hartree–Fock correlation methods."
    ],
    "evidenceIds": [],
    "evidenceSummary": "This Passport is methodological and source-based; it does not attach a single experiment as validation of Hartree–Fock across all chemical systems.",
    "limitations": [
      "Dynamical electron correlation is absent and static correlation can invalidate a single-reference description.",
      "Orbital energies are auxiliary eigenvalues and should not all be interpreted as exact charged excitation energies."
    ],
    "questionIds": [],
    "developmentIds": [],
    "sourceIds": [
      "bartlett-musial-2007"
    ],
    "reviewedAt": "2026-10-08"
  },
  {
    "theoryId": "neutrino-mixing",
    "problemIds": [],
    "entityType": "particle-mixing framework",
    "scientificStatus": "established framework supported by oscillation experiments",
    "coreIdea": "Weak-interaction flavor states are coherent superpositions of neutrino mass eigenstates; relative propagation phases produce flavor oscillations.",
    "degreesOfFreedom": "Light neutrino mass eigenstates, flavor production/detection states, a unitary low-energy mixing matrix and mass-squared splittings.",
    "assumptions": [
      "The standard practical three-neutrino description treats the light mixing matrix as unitary.",
      "Vacuum probability cards assume relativistic coherent propagation without matter effects.",
      "Real experiments average over source spectra, detector resolution and finite baselines."
    ],
    "mathematicalStructure": "Unitary basis transformation between flavor and mass states plus phase evolution of distinct masses; interference yields oscillation probabilities and CP-sensitive terms.",
    "formulaIds": [
      "neutrino-flavor-mixing-state",
      "neutrino-vacuum-oscillation-probability"
    ],
    "regime": "Standard light-neutrino flavor oscillations; matter propagation and nonstandard interactions require extended evolution equations.",
    "predictionsConsequences": [
      "Flavor composition changes with L/E when nonzero mass-squared splittings and mixing are present.",
      "Three-flavor interference allows CP-sensitive differences between neutrino and antineutrino oscillation probabilities."
    ],
    "evidenceIds": [
      "ev-superk-atmospheric-1998"
    ],
    "evidenceSummary": "Atmospheric-neutrino data provide direct evidence for flavor oscillation; the record does not determine the absolute neutrino mass scale or every mixing parameter.",
    "limitations": [
      "Oscillations determine mass-squared differences rather than the absolute mass scale.",
      "The vacuum formula does not include matter effects, decoherence, sterile states or general nonunitarity."
    ],
    "questionIds": [],
    "developmentIds": [],
    "sourceIds": [
      "mns-1962",
      "pdg-neutrino-mixing-2026",
      "superk-atmospheric-1998"
    ],
    "reviewedAt": "2026-10-08"
  },
  {
    "theoryId": "brans-dicke",
    "problemIds": [],
    "entityType": "alternative classical gravity theory",
    "scientificStatus": "established scalar–tensor benchmark; strongly constrained in simple constant-parameter form",
    "coreIdea": "Promote the effective gravitational coupling to a dynamical scalar degree of freedom coupled to spacetime curvature.",
    "degreesOfFreedom": "A spacetime metric plus a scalar gravitational field; the representative action also records the connection convention and scalar kinetic parameter.",
    "assumptions": [
      "The displayed action is a no-potential Brans–Dicke representative in the normalization of the cited scalar–tensor paper.",
      "Solar-system bounds quoted through PPN gamma apply to the corresponding constant-parameter massless mapping and should not be generalized automatically to all scalar–tensor models.",
      "Matter coupling and frame/field normalizations must be stated when comparing formulations."
    ],
    "mathematicalStructure": "Scalar–tensor gravitational action with nonminimal scalar-curvature coupling and a kinetic term controlled by the Brans–Dicke parameter.",
    "formulaIds": [
      "brans-dicke-scalar-tensor-action"
    ],
    "regime": "Classical scalar–tensor gravity; the canonical massless constant-parameter benchmark and its close variants.",
    "predictionsConsequences": [
      "The scalar modifies post-Newtonian gravity unless its coupling becomes sufficiently weak or the model has additional suppressing structure.",
      "The general-relativistic limit is approached in the appropriate weak-scalar-coupling parameter regime, subject to model assumptions."
    ],
    "evidenceIds": [
      "ev-cassini-ppn-2003"
    ],
    "evidenceSummary": "Cassini strongly constrains deviations of the PPN light-propagation parameter from GR; translating that result into a Brans–Dicke parameter bound is model-dependent and is recorded with that caveat.",
    "limitations": [
      "Not a quantum theory of gravity.",
      "A bound on constant massless Brans–Dicke does not exclude scalar–tensor theories with potentials, environment dependence or screening."
    ],
    "questionIds": [],
    "developmentIds": [],
    "sourceIds": [
      "brans-dicke-1961",
      "kozak-wojnar-scalar-tensor-2021",
      "bertotti-cassini-2003",
      "fienga-minazzoli-gravity-tests-2024"
    ],
    "reviewedAt": "2026-10-08"
  },
  {
    "theoryId": "bcs-theory",
    "problemIds": [],
    "entityType": "many-body theory",
    "scientificStatus": "established theory of conventional superconductivity",
    "coreIdea": "An effective attraction near the Fermi surface destabilizes the normal state toward a coherent condensate of paired fermions with an excitation gap.",
    "degreesOfFreedom": "Fermionic quasiparticles near the Fermi surface, pair amplitudes and a superconducting order parameter.",
    "assumptions": [
      "Canonical BCS treats a weak-coupling pairing instability with a mean-field-like coherent pair state.",
      "The simplest formulas assume the conventional pairing channel and a homogeneous equilibrium state.",
      "Strong-coupling, unconventional or strongly disordered superconductors can require extensions."
    ],
    "mathematicalStructure": "Variational paired ground-state ansatz, Bogoliubov quasiparticle transformation, self-consistent gap equation and broken-symmetry mean-field structure.",
    "formulaIds": [
      "bcs-wavefunction",
      "bcs-dispersion",
      "bcs-gap"
    ],
    "regime": "Conventional superconductivity and weak-coupling paired-fermion systems where BCS assumptions are appropriate.",
    "predictionsConsequences": [
      "A quasiparticle excitation gap opens below the superconducting transition.",
      "Coherent Cooper pairing produces characteristic thermodynamic and electromagnetic responses."
    ],
    "evidenceIds": [],
    "evidenceSummary": "The theory is historically well established for conventional superconductors; this Passport does not substitute one experiment for the broader experimental literature.",
    "limitations": [
      "Does not automatically describe unconventional pairing mechanisms or strongly correlated superconductors.",
      "The simplest weak-coupling relations are not universal in strong-coupling or anisotropic systems."
    ],
    "questionIds": [],
    "developmentIds": [],
    "sourceIds": [
      "bcs-1957"
    ],
    "reviewedAt": "2026-10-08"
  },
  {
    "theoryId": "density-functional-theory",
    "problemIds": [],
    "entityType": "electronic-structure framework",
    "scientificStatus": "established exact ground-state framework with approximation-dependent practical functionals",
    "coreIdea": "Ground-state observables can be formulated in terms of the particle density; Kohn–Sham theory maps the density problem to auxiliary noninteracting orbitals with an effective potential.",
    "degreesOfFreedom": "Ground-state electron density and, in the Kohn–Sham construction, auxiliary orbitals reproducing that density.",
    "assumptions": [
      "The Hohenberg–Kohn framework concerns ground-state density information under its theorem assumptions.",
      "Practical Kohn–Sham calculations require an approximate exchange-correlation functional.",
      "Kohn–Sham orbital eigenvalues are not generically exact many-body excitation energies."
    ],
    "mathematicalStructure": "Density variational principle plus self-consistent one-particle Kohn–Sham equations and density reconstruction.",
    "formulaIds": [
      "hk-variational",
      "ks-equation",
      "ks-density"
    ],
    "regime": "Ground-state electronic structure; time-dependent and strongly correlated extensions introduce additional structure.",
    "predictionsConsequences": [
      "The exact ground-state density determines the external potential up to an additive constant under the theorem conditions.",
      "Practical functionals enable scalable first-principles calculations but introduce approximation error."
    ],
    "evidenceIds": [],
    "evidenceSummary": "This is a mathematical/computational framework; its practical accuracy depends on the chosen functional and system rather than one universal experimental validation.",
    "limitations": [
      "Unknown exact exchange-correlation functional necessitates approximations.",
      "Approximate functionals can have self-interaction, delocalization, derivative-discontinuity and strong-correlation errors."
    ],
    "questionIds": [
      "rq-density-functional-theory"
    ],
    "developmentIds": [],
    "sourceIds": [
      "hohenberg-kohn-1964",
      "kohn-sham-1965"
    ],
    "reviewedAt": "2026-10-08"
  }
]);
// 2026-10-11 nuclear Passports — independently source-reviewed additive batch.
window.QI_PASSPORTS.records.push(...[
  {
    "theoryId": "nuclear-shell-model",
    "problemIds": [],
    "entityType": "effective many-body model/framework",
    "scientificStatus": "established nuclear-structure framework; calculation-dependent predictions",
    "coreIdea": "Use quantized proton and neutron orbitals in a mean field plus residual interactions to organize low-lying nuclear structure and calculate valence-nucleon spectra in a selected model space.",
    "degreesOfFreedom": "Protons and neutrons occupying finite single-particle orbitals; inert-core and valence-space partitions are approximations chosen for a calculation, not newly postulated fundamental particles.",
    "assumptions": [
      "Low-energy nuclear states of interest admit a useful finite configuration/valence-space truncation with a specified core and orbital basis.",
      "The effective Hamiltonian and its many-nucleon interactions are suited to that same model space, with relevant symmetries retained.",
      "Out-of-space excitations and continuum channels are either small enough to neglect or are reflected consistently in effective interactions and operators.",
      "Comparisons must identify whether the interaction was phenomenologically adjusted to the observations or derived from an input nuclear force."
    ],
    "mathematicalStructure": "Diagonalization of a projected effective many-body Hamiltonian; Stroberg et al. Sec. 2.1 Eq. (3) states P H_eff P |Psi_n> = E_n P |Psi_n>, together with decoupling Q H_eff P = 0, in its specified P/Q convention.",
    "formulaIds": [
      "nuclear-model-space-eigenproblem"
    ],
    "regime": "Primarily low-lying nuclear spectra and transition observables for nuclei where the selected shell/valence truncation is applicable; strongly collective, continuum-coupled and intruder-state regimes require extra care.",
    "predictionsConsequences": [
      "Mean-field shell structure with spin-orbit splitting helps organize observed magic numbers and single-particle levels.",
      "Given a specified interaction and model space, configuration mixing produces calculable excitation spectra and transitions.",
      "Different interactions, truncations and effective operators can produce distinguishable predictions for the same nucleus."
    ],
    "evidenceIds": [],
    "evidenceSummary": "The review describes experimental magic-number patterns and spectroscopy comparisons, but no new experimental Evidence record has been source-reviewed here. Agreement with fitted spectra is not an independent out-of-sample confirmation of the chosen effective interaction.",
    "whatEvidenceDoesNotEstablish": "Fitted or approximately reproduced energy levels do not establish that a particular potential, valence truncation or many-body solver is unique or microscopically exact.",
    "limitations": [
      "Predictions depend on the effective interaction, many-body truncations and selected model space; omitted collective and intruder configurations can be consequential.",
      "Continuum coupling, consistent effective transition operators and three-nucleon contributions require additional treatment in many applications.",
      "Uncertainty quantification is often incomplete; model-to-experiment disagreement cannot be attributed unambiguously without controlling the input interaction and solver."
    ],
    "comparisonFrameworks": [
      "no-core-shell-model",
      "nuclear-collective-model",
      "in-medium-srg",
      "coupled-cluster"
    ],
    "usefulDiscriminators": [
      "Excitation energies and level ordering at fixed Hamiltonian and valence space, with out-of-sample levels kept distinct from fitted inputs.",
      "Electromagnetic transition strengths and radii computed using consistently evolved operators.",
      "Sensitivity to model-space enlargement, interaction choice, continuum inclusion and explicit uncertainty estimates."
    ],
    "unresolvedQuestions": [
      "How can controlled theoretical uncertainties be assigned to truncated valence-space nuclear observables?",
      "How do intruder configurations, collective excitations and continuum channels alter predicted spectroscopy?"
    ],
    "questionIds": [],
    "developmentIds": [],
    "sourceIds": [
      "wave3-shell-review-2019"
    ],
    "sourceLocations": [
      {
        "sourceId": "wave3-shell-review-2019",
        "locator": "Sec. 1 Introduction (mean field, spin-orbit and valence residual interaction); Sec. 2.1 Eq. (3), P/Q projected eigenproblem and decoupling",
        "url": "https://ar5iv.labs.arxiv.org/html/1902.06154"
      },
      {
        "sourceId": "wave3-shell-review-2019",
        "locator": "Secs. 5–6 (selected comparisons, transitions and intruder-state challenges); Sec. 8, concluding constraints and interpretation",
        "url": "https://ar5iv.labs.arxiv.org/html/1902.06154"
      }
    ],
    "sourceVersion": "Stroberg, Hergert, Bogner & Holt, arXiv:1902.06154 review / Annual Review of Nuclear and Particle Science 69 (2019); equations follow the review's P/Q projectors.",
    "reviewedAt": "2026-10-11"
  },
  {
    "theoryId": "in-medium-srg",
    "problemIds": [],
    "entityType": "computational many-body transformation framework",
    "scientificStatus": "established ab-initio nuclear many-body method with controlled but nonzero truncation errors",
    "coreIdea": "Use a continuous unitary similarity transformation, implemented with operators normal-ordered relative to a finite-density reference, to suppress off-diagonal many-body couplings and compute nuclear structure or effective valence Hamiltonians.",
    "degreesOfFreedom": "Nucleon creation and annihilation operators in a chosen single-particle basis with a reference Slater determinant or suitable many-body reference; flowing zero-, one-, two- and optionally higher-body operators are not independent physical fields.",
    "assumptions": [
      "A specific input nuclear Hamiltonian and finite basis are provided; input two-/three-body forces and their resolution scales matter.",
      "The formal flow has anti-Hermitian eta(s) and unitary U(s), with eta chosen to target a stated decoupling.",
      "Practical IM-SRG truncates the normal-ordered operator hierarchy, for example at two-body rank; formally exact unitarity does not survive that truncation unchanged.",
      "A reference state and generator are chosen in a regime where targeted decoupling is numerically meaningful; challenging intruder states require attention."
    ],
    "mathematicalStructure": "H(s)=U(s)H(0)U†(s) and dH(s)/ds=[eta(s),H(s)], with eta=(dU/ds)U†=-eta†; Hergert Sec. 3.1 Eqs. (1)–(3). Secs. 3.2–3.5 expand the operators and flow in a normal-ordered many-body basis.",
    "formulaIds": [
      "imsrg-flow-equation"
    ],
    "regime": "Low-energy nuclear many-body calculations in finite bases, especially closed shells and suitable valence-space/open-shell extensions; accuracy depends on reference, truncation, generator and input nuclear forces.",
    "predictionsConsequences": [
      "Decoupled ground-state sectors and effective valence Hamiltonians permit numerical spectra for specified input interactions.",
      "Computed binding energies and observables can be compared across generators, rank truncations and other many-body approaches.",
      "The flowing transformation induces higher-body interactions and observable corrections that require consistent treatment."
    ],
    "evidenceIds": [],
    "evidenceSummary": "Hergert reviews numerical nuclear-energy comparisons and algorithmic convergence. Numerical agreement with benchmarks or measured nuclear properties tests an input Hamiltonian plus approximations; it is not experimental confirmation that the exact, untruncated flow was realized.",
    "whatEvidenceDoesNotEstablish": "A successful finite-basis nuclear calculation does not demonstrate exact unitary equivalence after IM-SRG(2) truncation, uniquely validate the input nuclear interaction, or prove a new fundamental physical theory.",
    "limitations": [
      "Discarded induced many-body operators introduce truncation and resolution-scale dependence.",
      "Reference and generator selection can encounter slow convergence and intruder-state difficulties.",
      "Evolving observables, three-nucleon terms, continuum effects and uncertainty budgets adds work beyond the formal flow equation."
    ],
    "comparisonFrameworks": [
      "nuclear-shell-model",
      "no-core-shell-model",
      "coupled-cluster"
    ],
    "usefulDiscriminators": [
      "Energy and operator convergence with truncation rank, generator choice and single-particle basis.",
      "Comparison at fixed input Hamiltonian against coupled-cluster and exact-diagonalization benchmarks where available.",
      "Consistency of radii and transition observables after evolving both Hamiltonian and operators."
    ],
    "unresolvedQuestions": [
      "How are omitted higher-body terms and model-space truncation errors estimated quantitatively across nuclei?",
      "Which reference, generator and decoupling choices control difficult open-shell and intruder-state regimes?"
    ],
    "questionIds": [],
    "developmentIds": [],
    "sourceIds": [
      "wave3-hergert-imsrg-2016",
      "wave3-shell-review-2019"
    ],
    "sourceLocations": [
      {
        "sourceId": "wave3-hergert-imsrg-2016",
        "locator": "Sec. 3.1 Eqs. (1)–(4), unitary H(s), commutator flow, anti-Hermitian generator and s-ordering; Secs. 3.2–3.5, normal-ordering and flow expansion",
        "url": "https://ar5iv.labs.arxiv.org/html/1512.06956"
      },
      {
        "sourceId": "wave3-hergert-imsrg-2016",
        "locator": "Sec. 4, generator choices; Sec. 7, truncation/MBPT analysis; Secs. 8–9, selected limitations and review conclusions",
        "url": "https://ar5iv.labs.arxiv.org/html/1512.06956"
      },
      {
        "sourceId": "wave3-shell-review-2019",
        "locator": "Sec. 3.1, many-body approaches; Sec. 6.2, intruder-state problem in IMSRG; Sec. 8, distinctions between solver and interaction",
        "url": "https://ar5iv.labs.arxiv.org/html/1902.06154"
      }
    ],
    "sourceVersion": "Hergert, arXiv:1512.06956 / Physics Reports 621 (2016), and Stroberg et al., arXiv:1902.06154 (2019); formula uses the exact untruncated flow convention with hbar absorbed into s/eta.",
    "reviewedAt": "2026-10-11"
  }
]);
