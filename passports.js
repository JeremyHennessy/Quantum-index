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
