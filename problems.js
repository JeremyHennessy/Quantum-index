// First-class scientific Problem layer. Problems organize existing catalog records; they are not theory entities.
window.QI_PROBLEMS = {
  "version": "v1",
  "reviewedAt": "2026-09-29",
  "scope": "Five pilot scientific problems. Problems organize existing entities, equations, questions and dated developments; they are not theory entities and do not duplicate catalog records.",
  "problems": [
    {
      "id": "black-hole-information",
      "name": "Black-hole information problem",
      "shortQuestion": "How can black-hole evaporation be reconciled with unitary quantum evolution, semiclassical horizons and the entropy behavior of Hawking radiation?",
      "whyItMatters": "Hawking's leading semiclassical calculation gives approximately thermal outgoing radiation. If complete evaporation erased the correlations needed for a pure quantum state, that would conflict with ordinary unitary quantum evolution. Modern entropy calculations have sharpened the problem and produced controlled Page-curve results, but they do not by themselves provide one universally established microscopic account of realistic evaporating black holes.",
      "establishedBackground": [
        "Quantum fields on a semiclassical black-hole background produce Hawking radiation with a temperature fixed by the surface gravity.",
        "Black-hole thermodynamics assigns an entropy proportional to horizon area.",
        "The information problem concerns the complete quantum state and correlations of the radiation, not merely the approximate thermality of a one-particle spectrum.",
        "Island and replica-wormhole calculations reproduce Page-like entropy behavior in controlled gravitational models under their stated assumptions."
      ],
      "approachGroups": [
        {
          "name": "Semiclassical starting point",
          "description": "Defines the radiation and entropy calculations that generate the puzzle.",
          "theoryIds": [
            "qft-curved-spacetime",
            "hawking-radiation",
            "black-hole-thermodynamics"
          ]
        },
        {
          "name": "Horizon consistency proposals and no-go arguments",
          "description": "Tests whether unitarity, semiclassical exterior physics and smooth infall can coexist.",
          "theoryIds": [
            "black-hole-complementarity",
            "amps-firewall",
            "soft-hair"
          ]
        },
        {
          "name": "Microscopic structure proposals",
          "description": "Modify or replace the naive interior/horizon description with explicit microscopic structure or alternative end states.",
          "theoryIds": [
            "fuzzball",
            "black-hole-remnants",
            "black-hole-final-state"
          ]
        },
        {
          "name": "Holography and entropy reconstruction",
          "description": "Uses duality, quantum error correction and gravitational replica methods to organize information and entropy.",
          "theoryIds": [
            "ads-cft",
            "quantum-error-correction-gravity",
            "jt-gravity",
            "replica-wormholes",
            "island-formula"
          ]
        }
      ],
      "keyAssumptions": [
        "How long semiclassical quantum field theory remains valid near and outside the horizon.",
        "Whether Hilbert-space factorization into interior, exterior and radiation subsystems is justified in the calculation being used.",
        "Whether a result obtained in an AdS/bath or low-dimensional gravitational model generalizes to realistic asymptotically flat evaporation.",
        "What microscopic degrees of freedom encode the black-hole entropy and radiation correlations."
      ],
      "formulaIds": [
        "curved-kg-free",
        "bh-entropy",
        "hawking-temp",
        "schwarzschild-temp",
        "ads-cft",
        "rt-formula",
        "jt-curvature-constraint",
        "replica-entropy-limit",
        "island"
      ],
      "evidenceIds": [],
      "questionIds": [
        "rq-hawking-radiation",
        "rq-black-hole-thermodynamics",
        "rq-black-hole-complementarity",
        "rq-amps-firewall",
        "rq-fuzzball",
        "rq-quantum-error-correction-gravity",
        "rq-jt-gravity",
        "rq-replica-wormholes",
        "rq-island-formula"
      ],
      "developmentIds": [],
      "developmentContext": "No 2024–2026 DevelopmentEvent in the current reviewed seed set is specific enough to this problem to attach without additional source review.",
      "sourceIds": [
        "hawking-1975",
        "bekenstein-1973",
        "susskind-complementarity-1993",
        "amps-2012",
        "mathur-fuzzball-2005",
        "almheiri-qec-2015",
        "wave4-replica-wormholes-2019",
        "almheiri-islands-2020"
      ],
      "currentStatus": "The paradox remains a major quantum-gravity problem. Controlled holographic and semiclassical-gravity models now reproduce key entropy behavior, including Page curves, but that success is not equivalent to a universally accepted microscopic decoding mechanism for every evaporating astrophysical black hole.",
      "openIssues": [
        "Identify which assumptions behind the semiclassical paradox fail in a complete microscopic description.",
        "Relate generalized-entropy/island calculations to a microscopic description of the radiation state.",
        "Establish the domain in which controlled model results transfer to realistic black-hole evaporation."
      ]
    },
    {
      "id": "measurement-problem",
      "name": "Measurement problem",
      "shortQuestion": "How do definite measurement records and classical-looking outcomes arise from quantum states whose ordinary dynamics permits superposition?",
      "whyItMatters": "Standard quantum mechanics combines continuous state evolution with a probability rule for measurement outcomes. Different interpretations and modified-dynamics theories disagree about whether this is a problem of ontology, probability, effective classicality or incomplete dynamics.",
      "establishedBackground": [
        "The Born rule gives measurement probabilities once a state and measurement are specified.",
        "Environment-induced decoherence can suppress interference between selected alternatives and explain stable effective classical records in appropriate regimes.",
        "Decoherence alone does not, by itself, select one unique outcome under every interpretation of the quantum state.",
        "Objective-collapse models modify the dynamics and therefore admit experimental constraints that ordinary interpretations do not."
      ],
      "approachGroups": [
        {
          "name": "Measurement formalism",
          "description": "Takes the probability rule and measurement operators as part of the operational formalism.",
          "theoryIds": [
            "born-rule",
            "von-neumann"
          ]
        },
        {
          "name": "Unitary interpretations",
          "description": "Retain unitary dynamics and reinterpret the relation between the quantum state, histories, observers and outcomes.",
          "theoryIds": [
            "everett",
            "consistent-histories",
            "qbism"
          ]
        },
        {
          "name": "Environment and emergent classicality",
          "description": "Explains suppression of interference and proliferation of robust records through system-environment dynamics.",
          "theoryIds": [
            "decoherence",
            "quantum-darwinism"
          ]
        },
        {
          "name": "Modified dynamics",
          "description": "Changes the quantum dynamics so macroscopic superpositions collapse objectively.",
          "theoryIds": [
            "objective-collapse",
            "grw",
            "csl",
            "diosi-penrose"
          ]
        },
        {
          "name": "Foundational constraints",
          "description": "No-go results and observer scenarios constrain possible underlying explanations without themselves choosing one interpretation.",
          "theoryIds": [
            "bell",
            "kochen-specker",
            "wigner-friend",
            "frauchiger-renner"
          ]
        }
      ],
      "keyAssumptions": [
        "Whether the quantum state is ontic, epistemic, relational or otherwise interpreted.",
        "Whether unitary dynamics is exact or only approximate.",
        "What counts as a measurement, observer or stable classical record.",
        "Which independence, locality and noncontextuality assumptions are imposed in foundational arguments."
      ],
      "formulaIds": [
        "born-probability",
        "born-projector",
        "von-neumann-eq",
        "histories-decoherence",
        "decoherence-factor",
        "darwinism-redundancy",
        "grw-collapse",
        "csl-sde",
        "qmupl-sde"
      ],
      "evidenceIds": ["ev-bell-loophole-free-2015","ev-diosi-penrose-underground-2021"],
      "questionIds": [
        "rq-born-rule",
        "rq-density-operator",
        "rq-kochen-specker",
        "rq-everett",
        "rq-qbism",
        "rq-decoherence",
        "rq-consistent-histories",
        "rq-quantum-zeno"
      ],
      "developmentIds": [],
      "developmentContext": "Recent foundational experiments should enter through the Evidence layer rather than by assigning new origin years to historical interpretations.",
      "sourceIds": [
        "everett-1957",
        "zurek-decoherence",
        "zurek-darwinism",
        "grw-1986",
        "griffiths-1984",
        "frauchiger-renner-2018",
        "sep-collapse"
      ],
      "currentStatus": "There is no single consensus formulation of the measurement problem or universally accepted resolution. Decoherence is an established part of the dynamical account of classical records, while interpretive and modified-dynamics approaches make different additional claims.",
      "openIssues": [
        "Separate problems of effective classicality, outcome definiteness and probability rather than treating them as one question.",
        "Determine which proposed modified dynamics remain viable under increasingly sensitive experimental bounds.",
        "Clarify which assumptions are used when observer/no-go arguments are applied to specific interpretations."
      ]
    },
    {
      "id": "quantum-gravity",
      "name": "Quantum gravity",
      "shortQuestion": "What framework consistently describes quantum matter and a dynamical spacetime beyond the regimes where semiclassical gravity or low-energy effective field theory are sufficient?",
      "whyItMatters": "General relativity makes spacetime geometry dynamical, while quantum theory describes matter and interactions with fundamentally quantum states. Low-energy effective field theory is predictive, but it does not by itself specify the ultraviolet completion or the microscopic degrees of freedom of spacetime.",
      "establishedBackground": [
        "General relativity can be treated as a low-energy effective quantum field theory with calculable long-distance quantum corrections.",
        "Canonical, covariant, string/holographic, discrete/causal and renormalization-group approaches implement different microscopic assumptions.",
        "Many mathematical results are established inside individual frameworks, but there is no direct experimental result selecting one complete fundamental program.",
        "Tabletop gravity-mediated-entanglement proposals can discriminate explicit mediator and hybrid models, but current 2025–2026 literature does not justify treating all 'classical gravity' as one dynamical hypothesis.",
        "Recovering the classical spacetime limit and controlled observable predictions is a central cross-program requirement."
      ],
      "approachGroups": [
        {
          "name": "Canonical and quantum geometry",
          "description": "Quantizes gravitational phase-space variables and constraints, with covariant spin-foam/group-field relatives.",
          "theoryIds": [
            "canonical-quantum-gravity",
            "wheeler-dewitt",
            "loop-quantum-gravity",
            "spin-foams",
            "group-field-theory"
          ]
        },
        {
          "name": "Strings and holography",
          "description": "Uses extended microscopic degrees of freedom and dual quantum descriptions of gravity in controlled settings.",
          "theoryIds": [
            "string-theory",
            "ads-cft",
            "holographic-principle"
          ]
        },
        {
          "name": "Continuum quantum field theory",
          "description": "Organizes gravity through perturbative/EFT expansions, higher derivatives or renormalization-group fixed points.",
          "theoryIds": [
            "perturbative-qg",
            "gravity-effective-field-theory",
            "higher-derivative-qg",
            "asymptotic-safety"
          ]
        },
        {
          "name": "Discrete and causal spacetime",
          "description": "Builds spacetime from discrete causal/combinatorial structures and sums or dynamics over them.",
          "theoryIds": [
            "causal-sets",
            "causal-set-growth",
            "causal-set-quantum-dynamics",
            "cdt"
          ]
        },
        {
          "name": "Emergent and information-theoretic spacetime",
          "description": "Relates geometry to entanglement, holographic encoding and quantum error-correction structures.",
          "theoryIds": [
            "emergent-spacetime",
            "quantum-error-correction-gravity",
            "er-epr"
          ]
        },
        {
          "name": "Tabletop gravity and model discrimination",
          "description": "Compares quantized-mediator proposals with explicit semiclassical, stochastic, collapse and classical–quantum alternatives using entanglement dynamics, decoherence, diffusion/noise, back-reaction and locality assumptions.",
          "theoryIds": [
            "bmv-gravity-entanglement",
            "postquantum-classical-gravity",
            "semiclassical-gravity",
            "stochastic-gravity",
            "diosi-penrose",
            "objective-collapse",
            "open-quantum-systems"
          ]
        }
      ],
      "keyAssumptions": [
        "What the fundamental degrees of freedom are and whether a background geometry is assumed.",
        "How diffeomorphism/gauge constraints and observables are defined.",
        "How the continuum and classical-gravity limits are recovered.",
        "For tabletop tests, whether the alternative model is local or nonlocal, Markovian or non-Markovian, what is treated as the mediator, and which matter degrees of freedom are allowed to propagate.",
        "Which calculations can be connected to experimentally accessible observables."
      ],
      "formulaIds": [
        "eft-expansion",
        "planck-length",
        "adm-hamiltonian",
        "wheeler-dewitt",
        "ashtekar-poisson",
        "lqg-gauss",
        "lqg-area",
        "holonomy",
        "spin-foam-sum",
        "gft-action",
        "polyakov-action",
        "ads-cft",
        "rt-formula",
        "causal-sprinkling",
        "cdt-partition",
        "asymptotic-fixed-point",
        "cq-decoherence-diffusion-tradeoff"
      ],
      "evidenceIds": [
        "ev-cq-decoherence-diffusion-2023",
        "ev-minimal-noise-nonquantized-2026",
        "ev-dp-gie-2025",
        "ev-gravity-entanglement-boundary-2025"
      ],
      "questionIds": [
        "rq-qft-curved-spacetime",
        "rq-gravity-effective-field-theory",
        "rq-loop-quantum-gravity",
        "rq-string-theory",
        "rq-asymptotic-safety",
        "rq-ads-cft",
        "rq-er-epr",
        "rq-wheeler-dewitt",
        "rq-canonical-quantum-gravity",
        "rq-gravity-entanglement-discrimination"
      ],
      "developmentIds": [
        "dp-gie-entanglement-2025",
        "classical-gravity-entanglement-2025",
        "minimal-noise-nonquantized-2026",
        "gravity-entanglement-debate-2026"
      ],
      "developmentContext": "The gravity-entanglement literature now contains explicit classical/hybrid models that can entangle in some regimes and other classical mediator models that do not. The 2025 Aziz–Howl mechanism is directly disputed. These developments motivate model discrimination, not a single settled inference from entanglement alone.",
      "sourceIds": [
        "donoghue-gravity-eft-1994",
        "rovelli-qg-survey",
        "spin-foam-review",
        "bombelli-causal-set-1987",
        "asymptotic-review-2026",
        "marletto-vedral-2017",
        "oppenheim-decoherence-diffusion-2023",
        "fabiano-minimal-noise-2026",
        "trillo-navascues-dp-gie-2025",
        "angeli-carlesso-hybrid-entanglement-2025",
        "lin-mondal-newtonian-gie-2026",
        "schneider-classical-gie-2026",
        "feng-vedral-marletto-collapse-witness-2026",
        "di-biagio-gie-witness-2026",
        "tomizuka-nonmarkovian-cq-2026"
      ],
      "currentStatus": "Quantum gravity remains open at the level of a complete empirically selected fundamental theory. Several programs have deep internal mathematical results and controlled limits, while low-energy gravitational EFT is an established predictive framework. Tabletop gravity experiments are beginning to sharpen falsifiable distinctions among explicit mediator and hybrid models. The locality-conditioned entanglement witness remains meaningful within its assumptions, but 2026 analyses emphasize that its locality premise is stronger than ordinary spacetime locality and that GIE is not an assumption-free binary classifier covering every possible classical-gravity alternative.",
      "openIssues": [
        "Recover robust low-energy spacetime and matter dynamics from candidate microscopic descriptions.",
        "Identify observables that distinguish candidate frameworks rather than only internal consistency tests.",
        "For tabletop gravity, build a source-backed model-by-observable map spanning entanglement dynamics, decoherence, diffusion/noise, back-reaction, locality and memory, then determine experimentally feasible combinations that separate the enumerated alternatives.",
        "Test whether force/noise measurements can reach below the 2026 minimum-noise thresholds for non-entangling time-local Newtonian model classes.",
        "Determine where Markovian classical–quantum consistency bounds cease to apply and which non-Markovian signatures can be measured.",
        "Connect formal advances to experimentally accessible gravitational or cosmological regimes."
      ]
    },
    {
      "id": "quantum-thermalization",
      "name": "Quantum thermalization",
      "shortQuestion": "Why and when does an isolated quantum many-body system reproduce statistical-mechanical behavior under unitary evolution, and what mechanisms prevent it?",
      "whyItMatters": "The microscopic dynamics of a closed quantum system is unitary, yet many macroscopic observables relax toward values described by statistical mechanics. Understanding when this occurs—and the structured exceptions—is central to nonequilibrium many-body physics.",
      "establishedBackground": [
        "The eigenstate thermalization hypothesis provides a successful ansatz for many observables in broad classes of nonintegrable quantum-chaotic systems.",
        "Integrable systems retain extensive conserved quantities and can relax to generalized Gibbs ensembles rather than ordinary thermal ensembles.",
        "Many-body localization provides a mechanism that can obstruct conventional thermalization in suitable disordered systems.",
        "Quantum many-body scars provide exceptional nonthermal states inside otherwise thermalizing spectra."
      ],
      "approachGroups": [
        {
          "name": "Generic chaotic thermalization",
          "description": "Connects quantum chaos, random-matrix ideas and ETH to equilibrium behavior of local observables.",
          "theoryIds": [
            "quantum-chaos",
            "eigenstate-thermalization"
          ]
        },
        {
          "name": "Integrable dynamics",
          "description": "Uses extensive conservation laws and generalized ensembles to describe relaxation without generic ETH behavior.",
          "theoryIds": [
            "integrable-qft",
            "bethe-ansatz",
            "generalized-gibbs-ensemble"
          ]
        },
        {
          "name": "Localization",
          "description": "Studies regimes where disorder and emergent local integrals of motion obstruct transport and thermalization.",
          "theoryIds": [
            "many-body-localization"
          ]
        },
        {
          "name": "Exceptional nonthermal subspaces",
          "description": "Studies scarred states that violate naive strong-ETH expectations while coexisting with thermalizing states.",
          "theoryIds": [
            "quantum-many-body-scars"
          ]
        }
      ],
      "keyAssumptions": [
        "Which observables are local or few-body and which system-size limit is taken.",
        "Whether the Hamiltonian is genuinely nonintegrable or retains hidden conservation laws.",
        "How disorder, dimensionality and interaction range affect localization.",
        "Whether atypical eigenstates occupy a vanishing or dynamically important part of the spectrum."
      ],
      "formulaIds": [
        "eth-ansatz",
        "gge-density-operator",
        "yang-baxter-smatrix"
      ],
      "evidenceIds": [],
      "questionIds": [],
      "developmentIds": [
        "many-body-scars-2025"
      ],
      "developmentContext": "The 2025 scar result broadens the classes of many-body spin systems in which nonthermal scarred behavior can arise; it is a development of the scar framework rather than a new origin date.",
      "sourceIds": [
        "wave3-eth-review-2016",
        "wave3-mbl-review-2015",
        "wave3-rigol-gge-2007",
        "discovery-scars-2017"
      ],
      "currentStatus": "The broad mechanisms of ETH thermalization, integrable relaxation and important exceptions are well established as research frameworks, but their precise domains of validity, finite-size behavior and stability remain active research topics.",
      "openIssues": [
        "Characterize the broadest useful class of observables and Hamiltonians for which ETH holds in the thermodynamic limit.",
        "Determine the stability of localization-like behavior across dimensionality, long-range interactions and experimentally relevant timescales.",
        "Explain when scarred subspaces have measurable long-time dynamical consequences."
      ],
      "questionCoverageNote": "The current 59 profile-question audit does not contain a dedicated ETH/MBL/scar question set; dedicated problem-level ResearchQuestions should be added only after a focused literature review."
    },
    {
      "id": "dark-matter",
      "name": "Dark matter",
      "shortQuestion": "What physical component or modification of gravitational dynamics accounts for the nonluminous gravitating matter inferred across galaxies, clusters, the cosmic microwave background and large-scale structure?",
      "whyItMatters": "A cold nonbaryonic dark component is central to the standard cosmological model, but its microscopic identity has not been established. Candidate particles and fields span enormous parameter ranges, compact-object scenarios are constrained but not eliminated in every mass window, and modified-gravity approaches address parts of the phenomenology with different assumptions.",
      "establishedBackground": [
        "The ΛCDM framework successfully describes a wide range of cosmological observations using a cold dark-matter component, but this does not identify the underlying particle or field.",
        "Direct, indirect and collider searches constrain candidate interactions and masses rather than testing one unique dark-matter theory.",
        "Axions, WIMPs, ultralight fields, sterile neutrinos, self-interacting dark matter and primordial black holes represent physically distinct candidate classes.",
        "Modified-gravity frameworks such as MOND address selected astrophysical regularities but must also confront cluster, lensing and cosmological observations."
      ],
      "approachGroups": [
        {
          "name": "Cosmological baseline",
          "description": "Treats cold dark matter as a gravitating component in the standard cosmological model without specifying its microphysics.",
          "theoryIds": [
            "lambda-cdm"
          ]
        },
        {
          "name": "Particle and field candidates",
          "description": "Introduces new particles, fields or production mechanisms with testable parameter spaces.",
          "theoryIds": [
            "wimp-dark-matter",
            "axion",
            "fuzzy-dark-matter",
            "sterile-neutrino-dark-matter",
            "dark-photon",
            "freeze-in-dark-matter",
            "asymmetric-dark-matter",
            "self-interacting-dark-matter"
          ]
        },
        {
          "name": "Compact-object candidates",
          "description": "Uses primordial black holes or related compact populations over allowed mass fractions/windows.",
          "theoryIds": [
            "primordial-black-hole-dark-matter"
          ]
        },
        {
          "name": "Modified-gravity alternatives",
          "description": "Changes gravitational dynamics instead of, or in addition to, introducing a new dark component.",
          "theoryIds": [
            "mond",
            "teves"
          ]
        }
      ],
      "keyAssumptions": [
        "The cosmological model used to infer the dark component and its primordial abundance.",
        "The local halo model, nuclear response and detector assumptions used in direct-search constraints.",
        "The production mechanism and interaction structure for a particle or field candidate.",
        "Whether an alternative-gravity model can fit cosmological as well as galactic/cluster-scale data."
      ],
      "formulaIds": [],
      "evidenceIds": ["ev-desi-dr2-2025","ev-lz-extended-window-2026"],
      "questionIds": [
        "rq-wimp-dark-matter"
      ],
      "developmentIds": [
        "desi-y1-bao-cosmology-2024",
        "desi-dr2-bao-cosmology-2025",
        "desi-lya-fullshape-2026",
        "lz-extended-window-2026"
      ],
      "developmentContext": "DESI events constrain the background cosmological model and dark-energy sector; they are not direct detections of dark matter. LZ is a direct-search development and its 2026 excess remains a 2.6σ global candidate signal rather than a discovery.",
      "sourceIds": [
        "planck-cosmology-2020",
        "jungman-wimp-1996",
        "weinberg-axion-1978",
        "milgrom-mond-1983",
        "lz-extended-window-2026",
        "desi-dr2-cosmology-2025",
        "desi-dr2-lya-2026"
      ],
      "currentStatus": "The gravitational evidence motivating dark matter is extensive, while the microscopic nature of the dark component remains unidentified. Current experimental and observational results constrain candidate models and parameter space rather than selecting one established microphysical explanation.",
      "openIssues": [
        "Identify or exclude viable particle/field candidates across poorly constrained mass and coupling regimes.",
        "Reconcile small-scale structure phenomenology with particle physics and baryonic astrophysics.",
        "Discriminate a dark component from modified-gravity explanations across galactic, cluster and cosmological scales."
      ]
    }
  ]
};
