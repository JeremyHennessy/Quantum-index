// Structured research questions curated from the 27 Sep 2026 profile-question audit.
// These dispositions describe the reviewed state of each prompt; they are not a taxonomy of all unsolved physics.
window.QI_QUESTIONS = {
  "version": "v1",
  "reviewedAt": "2026-09-27",
  "scope": "Structured migration of the 59 cited profile questions. Current answers are research-orientation summaries, not independent proofs.",
  "dispositions": [
    "established-learning",
    "conditional-model-dependent",
    "model-specific-investigation",
    "open"
  ],
  "questions": [
    {
      "id": "rq-qft-curved-spacetime",
      "order": 1,
      "title": "Quantum field theory in curved spacetime",
      "question": "How far can these constructions extend when quantum fluctuations of geometry become important?",
      "relatedTheoryIds": [
        "qft-curved-spacetime"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "category": "Quantum field theory",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "A prescribed metric supports local covariant QFT, but it does not describe superpositions of geometries. Perturbative quantum gravity or a chosen nonperturbative construction is needed when metric fluctuations cannot be treated as small. A fixed-background calculation is not itself an answer to the full dynamical problem.",
      "detailedStatus": "A prescribed metric supports local covariant QFT, but it does not describe superpositions of geometries. Perturbative quantum gravity or a chosen nonperturbative construction is needed when metric fluctuations cannot be treated as small. A fixed-background calculation is not itself an answer to the full dynamical problem.",
      "supportingClaims": [],
      "sourceIds": [
        "hollands-wald-qftcs-2015"
      ],
      "auditReferences": [
        {
          "title": "Quantum fields in curved spacetime",
          "url": "https://doi.org/10.1016/j.physrep.2015.02.001"
        }
      ],
      "uncertainty": "The reviewed literature does not supply a general resolved answer; the scope and assumptions in the current position remain part of the research problem.",
      "nextInvestigation": "Choose a background and a gauge-invariant observable; compare the fixed-background value with leading metric-fluctuation corrections and identify the expansion parameter.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-semiclassical-gravity",
      "order": 2,
      "title": "Semiclassical gravity",
      "question": "When do stress-energy fluctuations invalidate a particular semiclassical solution?",
      "relatedTheoryIds": [
        "semiclassical-gravity"
      ],
      "relatedProblemIds": [],
      "category": "Quantum gravity & spacetime",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "The mean stress tensor alone is not an adequate validity test. Use the connected stress-tensor two-point function, smeared over physical scales, and the response of metric perturbations. Large relative fluctuations of a quantity whose mean happens to vanish do not by themselves establish breakdown.",
      "detailedStatus": "The mean stress tensor alone is not an adequate validity test. Use the connected stress-tensor two-point function, smeared over physical scales, and the response of metric perturbations. Large relative fluctuations of a quantity whose mean happens to vanish do not by themselves establish breakdown.",
      "supportingClaims": [],
      "sourceIds": [
        "hu-verdaguer-stochastic-2008"
      ],
      "auditReferences": [
        {
          "title": "Stochastic Gravity: Theory and Applications",
          "url": "https://doi.org/10.12942/lrr-2008-3"
        },
        {
          "title": "Hu and Verdaguer — Stochastic Gravity: Theory and Applications",
          "url": "https://arxiv.org/abs/0802.0658"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Compute the noise kernel and linear-response metric correlator for a specified state; vary smearing scale and compare with the background curvature.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-hawking-radiation",
      "order": 3,
      "title": "Hawking radiation",
      "question": "How does an evaporating black hole encode correlations beyond the leading thermal description?",
      "relatedTheoryIds": [
        "hawking-radiation"
      ],
      "relatedProblemIds": [
        "black-hole-information"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "The leading Hawking calculation traces inaccessible degrees of freedom and gives an approximately thermal exterior state. Information-sensitive correlations concern the complete radiation state, not just its one-particle spectrum. Island and replica calculations recover Page-like entropy behavior in controlled models; translating that to a microscopic description of generic evaporation requires additional assumptions.",
      "detailedStatus": "The leading Hawking calculation traces inaccessible degrees of freedom and gives an approximately thermal exterior state. Information-sensitive correlations concern the complete radiation state, not just its one-particle spectrum. Island and replica calculations recover Page-like entropy behavior in controlled models; translating that to a microscopic description of generic evaporation requires additional assumptions.",
      "supportingClaims": [],
      "sourceIds": [
        "hawking-1975"
      ],
      "auditReferences": [
        {
          "title": "Particle creation by black holes",
          "url": "https://doi.org/10.1007/BF02345020"
        },
        {
          "title": "Antonini et al. — An apologia for islands",
          "url": "https://arxiv.org/abs/2506.04311"
        },
        {
          "title": "Geng et al. — Inconsistency of Islands in Theories with Long-Range Gravity",
          "url": "https://arxiv.org/abs/2107.03390"
        }
      ],
      "uncertainty": "The reviewed literature does not supply a general resolved answer; the scope and assumptions in the current position remain part of the research problem.",
      "nextInvestigation": "Specify the radiation observable algebra, bath, gravitational region and approximation; calculate correlations or entropy without silently assuming tensor-factorization.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-black-hole-thermodynamics",
      "order": 4,
      "title": "Black-hole thermodynamics",
      "question": "How should microscopic entropy counting extend to realistic evaporating black holes?",
      "relatedTheoryIds": [
        "black-hole-thermodynamics"
      ],
      "relatedProblemIds": [
        "black-hole-information"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "S_BH=A/(4G hbar) in c=k_B=1 units is the semiclassical entropy relation. Microscopic state counts exist in particular constructions, not a universal calculation of all realistic evaporating black holes. Wald-type corrections also matter beyond Einstein gravity.",
      "detailedStatus": "S_BH=A/(4G hbar) in c=k_B=1 units is the semiclassical entropy relation. Microscopic state counts exist in particular constructions, not a universal calculation of all realistic evaporating black holes. Wald-type corrections also matter beyond Einstein gravity.",
      "supportingClaims": [],
      "sourceIds": [
        "bekenstein-1973"
      ],
      "auditReferences": [
        {
          "title": "Black Holes and Entropy",
          "url": "https://doi.org/10.1103/PhysRevD.7.2333"
        },
        {
          "title": "Antonini et al. — An apologia for islands",
          "url": "https://arxiv.org/abs/2506.04311"
        },
        {
          "title": "Geng et al. — Inconsistency of Islands in Theories with Long-Range Gravity",
          "url": "https://arxiv.org/abs/2107.03390"
        }
      ],
      "uncertainty": "The reviewed literature does not supply a general resolved answer; the scope and assumptions in the current position remain part of the research problem.",
      "nextInvestigation": "Separate stationary microscopic counts, corrected gravitational entropy and time-dependent radiation entropy; test one controlled extension before generalizing.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-unruh",
      "order": 5,
      "title": "Unruh effect",
      "question": "How does a finite detector protocol isolate acceleration-dependent response?",
      "relatedTheoryIds": [
        "unruh"
      ],
      "relatedProblemIds": [],
      "category": "Quantum gravity & spacetime",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "At leading detector coupling, the response is an integral of the Wightman function weighted by the switching function and detector phase. Infinite-duration uniform acceleration gives the thermal idealization; finite switching, trajectories, gaps and backgrounds change the response.",
      "detailedStatus": "At leading detector coupling, the response is an integral of the Wightman function weighted by the switching function and detector phase. Infinite-duration uniform acceleration gives the thermal idealization; finite switching, trajectories, gaps and backgrounds change the response.",
      "supportingClaims": [],
      "sourceIds": [
        "unruh-1976"
      ],
      "auditReferences": [
        {
          "title": "Notes on black-hole evaporation",
          "url": "https://doi.org/10.1103/PhysRevD.14.870"
        },
        {
          "title": "Crispino, Higuchi and Matsas — The Unruh effect and its applications",
          "url": "https://arxiv.org/abs/0710.5373"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Compare identical switching and gap protocols on accelerated and inertial trajectories, including switching transients and background noise.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-stochastic-gravity",
      "order": 6,
      "title": "Stochastic gravity",
      "question": "Which regimes require effects beyond the stochastic approximation?",
      "relatedTheoryIds": [
        "stochastic-gravity"
      ],
      "relatedProblemIds": [],
      "category": "Quantum gravity & spacetime",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "Einstein-Langevin methods include a specified class of stress fluctuations and their metric response. Higher connected correlations, strong backreaction, non-Gaussian effects or large intrinsic metric fluctuations may require an extension. There is no state-independent numerical boundary of validity.",
      "detailedStatus": "Einstein-Langevin methods include a specified class of stress fluctuations and their metric response. Higher connected correlations, strong backreaction, non-Gaussian effects or large intrinsic metric fluctuations may require an extension. There is no state-independent numerical boundary of validity.",
      "supportingClaims": [],
      "sourceIds": [
        "hu-verdaguer-stochastic-2008"
      ],
      "auditReferences": [
        {
          "title": "Stochastic Gravity: Theory and Applications",
          "url": "https://doi.org/10.12942/lrr-2008-3"
        }
      ],
      "uncertainty": "The reviewed literature does not supply a general resolved answer; the scope and assumptions in the current position remain part of the research problem.",
      "nextInvestigation": "Compare successive correlation orders and a controlled large-N or weak-coupling expansion for the observable of interest.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-gravity-effective-field-theory",
      "order": 7,
      "title": "Gravity as an effective field theory",
      "question": "Which low-energy observables best separate universal corrections from unknown short-distance parameters?",
      "relatedTheoryIds": [
        "gravity-effective-field-theory"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "Long-distance nonanalytic contributions to amplitudes can be distinguished from local analytic terms whose coefficients encode short-distance physics. The measurable object should be an invariant amplitude, cross section or other defined observable, not an arbitrary coordinate-dependent potential.",
      "detailedStatus": "Long-distance nonanalytic contributions to amplitudes can be distinguished from local analytic terms whose coefficients encode short-distance physics. The measurable object should be an invariant amplitude, cross section or other defined observable, not an arbitrary coordinate-dependent potential.",
      "supportingClaims": [],
      "sourceIds": [
        "donoghue-gravity-eft-1994"
      ],
      "auditReferences": [
        {
          "title": "General relativity as an effective field theory: The leading quantum corrections",
          "url": "https://doi.org/10.1103/PhysRevD.50.3874"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Choose a low-energy scattering observable and explicitly separate nonanalytic momentum dependence from fitted local Wilson coefficients.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-loop-quantum-gravity",
      "order": 8,
      "title": "Loop quantum gravity",
      "question": "How do controlled continuum dynamics recover realistic spacetime and matter?",
      "relatedTheoryIds": [
        "loop-quantum-gravity"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "Discrete spectra of kinematical operators do not alone establish a continuum limit with the observed dynamics and matter. Continuum recovery must be assessed for a specified dynamics, state family and observable.",
      "detailedStatus": "Discrete spectra of kinematical operators do not alone establish a continuum limit with the observed dynamics and matter. Continuum recovery must be assessed for a specified dynamics, state family and observable.",
      "supportingClaims": [],
      "sourceIds": [
        "rovelli-qg-survey"
      ],
      "auditReferences": [
        {
          "title": "Strings, loops and others: a critical survey of the present approaches to quantum gravity",
          "url": "https://arxiv.org/abs/gr-qc/9803024"
        }
      ],
      "uncertainty": "The reviewed literature does not supply a general resolved answer; the scope and assumptions in the current position remain part of the research problem.",
      "nextInvestigation": "Track constraints, semiclassical expectation values and correlation functions under refinement; test stability against choices of states and discretization.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-string-theory",
      "order": 9,
      "title": "String theory",
      "question": "Which construction connects controlled microscopic calculations to distinctive observable predictions?",
      "relatedTheoryIds": [
        "string-theory"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "Predictions depend on a specific background, compactification, moduli stabilization and supersymmetry-breaking prescription. A controlled example is more informative than a universal-looking equation that suppresses those choices.",
      "detailedStatus": "Predictions depend on a specific background, compactification, moduli stabilization and supersymmetry-breaking prescription. A controlled example is more informative than a universal-looking equation that suppresses those choices.",
      "supportingClaims": [],
      "sourceIds": [
        "rovelli-qg-survey"
      ],
      "auditReferences": [
        {
          "title": "Strings, loops and others: a critical survey of the present approaches to quantum gravity",
          "url": "https://arxiv.org/abs/gr-qc/9803024"
        }
      ],
      "uncertainty": "The reviewed literature does not supply a general resolved answer; the scope and assumptions in the current position remain part of the research problem.",
      "nextInvestigation": "Select one construction with controllable corrections and derive an observable together with its parameter and background dependence.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-asymptotic-safety",
      "order": 10,
      "title": "Asymptotic safety",
      "question": "Which observable predictions remain robust as truncations and matter content are varied?",
      "relatedTheoryIds": [
        "asymptotic-safety"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "A fixed point observed in a truncation is evidence about that approximation, not by itself a regulator-independent physical prediction. Relevant directions and observable quantities must remain stable as operators, gauge choices and matter sectors are varied.",
      "detailedStatus": "A fixed point observed in a truncation is evidence about that approximation, not by itself a regulator-independent physical prediction. Relevant directions and observable quantities must remain stable as operators, gauge choices and matter sectors are varied.",
      "supportingClaims": [],
      "sourceIds": [
        "asymptotic-review-2026"
      ],
      "auditReferences": [
        {
          "title": "Asymptotically safe quantum gravity and its phenomenology — a review",
          "url": "https://arxiv.org/abs/2606.21522"
        }
      ],
      "uncertainty": "The reviewed literature does not supply a general resolved answer; the scope and assumptions in the current position remain part of the research problem.",
      "nextInvestigation": "Build a comparison table of truncations and track critical exponents, universality and a genuinely physical observable rather than only running couplings.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-ads-cft",
      "order": 11,
      "title": "AdS/CFT correspondence",
      "question": "How can bulk reconstruction and quantum corrections be controlled away from classical gravity limits?",
      "relatedTheoryIds": [
        "ads-cft"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "Bulk reconstruction is controlled in particular limits and code subspaces. At finite N, gravitational dressing, quantum extremal surfaces and backreaction constrain what algebra can be reconstructed and where.",
      "detailedStatus": "Bulk reconstruction is controlled in particular limits and code subspaces. At finite N, gravitational dressing, quantum extremal surfaces and backreaction constrain what algebra can be reconstructed and where.",
      "supportingClaims": [],
      "sourceIds": [
        "maldacena-1997"
      ],
      "auditReferences": [
        {
          "title": "The Large N Limit of Superconformal Field Theories and Supergravity",
          "url": "https://arxiv.org/abs/hep-th/9711200"
        },
        {
          "title": "Antonini et al. — An apologia for islands",
          "url": "https://arxiv.org/abs/2506.04311"
        },
        {
          "title": "Geng et al. — Inconsistency of Islands in Theories with Long-Range Gravity",
          "url": "https://arxiv.org/abs/2107.03390"
        }
      ],
      "uncertainty": "The reviewed literature does not supply a general resolved answer; the scope and assumptions in the current position remain part of the research problem.",
      "nextInvestigation": "State the boundary theory and code subspace, then compare reconstruction and relative entropies at successive orders in 1/N.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-black-hole-complementarity",
      "order": 12,
      "title": "Black-hole complementarity",
      "question": "Which microscopic description makes the observer-dependent accounts mutually consistent?",
      "relatedTheoryIds": [
        "black-hole-complementarity"
      ],
      "relatedProblemIds": [
        "black-hole-information"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "Complementarity is a set of consistency requirements, not a unique microscopic evolution law. It needs an explicit map between accessible observables without granting one observer mutually incompatible copies of quantum information.",
      "detailedStatus": "Complementarity is a set of consistency requirements, not a unique microscopic evolution law. It needs an explicit map between accessible observables without granting one observer mutually incompatible copies of quantum information.",
      "supportingClaims": [],
      "sourceIds": [
        "susskind-complementarity-1993"
      ],
      "auditReferences": [
        {
          "title": "The stretched horizon and black hole complementarity",
          "url": "https://doi.org/10.1103/PhysRevD.48.3743"
        }
      ],
      "uncertainty": "The reviewed literature does not supply a general resolved answer; the scope and assumptions in the current position remain part of the research problem.",
      "nextInvestigation": "Write the observable algebras for a controlled infalling/exterior setup and test no-cloning and causal-access assumptions.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-amps-firewall",
      "order": 13,
      "title": "AMPS firewall argument",
      "question": "Which assumption fails in a controlled microscopic model of evaporation?",
      "relatedTheoryIds": [
        "amps-firewall"
      ],
      "relatedProblemIds": [
        "black-hole-information"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "conditional-model-dependent",
      "dispositionLabel": "Conditional / framework-dependent",
      "shortAnswer": "The tension is conditional: suitable radiation purity, semiclassical exterior entanglement and a smooth horizon cannot all be retained in the usual AMPS setup. A model must identify which premise or subsystem description changes; the argument does not independently prove a literal firewall in nature.",
      "detailedStatus": "The tension is conditional: suitable radiation purity, semiclassical exterior entanglement and a smooth horizon cannot all be retained in the usual AMPS setup. A model must identify which premise or subsystem description changes; the argument does not independently prove a literal firewall in nature.",
      "supportingClaims": [],
      "sourceIds": [
        "amps-2012"
      ],
      "auditReferences": [
        {
          "title": "Black Holes: Complementarity or Firewalls?",
          "url": "https://arxiv.org/abs/1207.3123"
        },
        {
          "title": "Antonini et al. — An apologia for islands",
          "url": "https://arxiv.org/abs/2506.04311"
        },
        {
          "title": "Geng et al. — Inconsistency of Islands in Theories with Long-Range Gravity",
          "url": "https://arxiv.org/abs/2107.03390"
        }
      ],
      "uncertainty": "The answer depends on the framework, assumptions or regime specified in the reviewed literature.",
      "nextInvestigation": "Give an explicit entropy inequality with named early radiation, late mode and partner degrees of freedom; record which identification fails in the chosen model.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-fuzzball",
      "order": 14,
      "title": "Fuzzball microstate program",
      "question": "How can microstate constructions and their dynamics be extended to more general black holes?",
      "relatedTheoryIds": [
        "fuzzball"
      ],
      "relatedProblemIds": [
        "black-hole-information"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "Constructed microstate geometries demonstrate particular horizon-scale alternatives in restricted sectors. The outstanding extension is to sufficiently generic states and realistic dynamics, including how coarse-graining reproduces semiclassical behavior.",
      "detailedStatus": "Constructed microstate geometries demonstrate particular horizon-scale alternatives in restricted sectors. The outstanding extension is to sufficiently generic states and realistic dynamics, including how coarse-graining reproduces semiclassical behavior.",
      "supportingClaims": [],
      "sourceIds": [
        "mathur-fuzzball-2005"
      ],
      "auditReferences": [
        {
          "title": "The fuzzball proposal for black holes: an elementary review",
          "url": "https://doi.org/10.1002/prop.200410203"
        }
      ],
      "uncertainty": "The reviewed literature does not supply a general resolved answer; the scope and assumptions in the current position remain part of the research problem.",
      "nextInvestigation": "Compare a defined microstate family with the corresponding thermodynamic ensemble and calculate a dynamical observable rather than only count solutions.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-er-epr",
      "order": 15,
      "title": "ER = EPR",
      "question": "Under what conditions does entanglement admit a controlled geometric interpretation?",
      "relatedTheoryIds": [
        "er-epr"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "Entanglement alone does not guarantee a smooth, traversable or even semiclassical wormhole. Controlled geometric interpretations require special states, theories, large-N/strong-coupling limits and an operational specification of the geometry.",
      "detailedStatus": "Entanglement alone does not guarantee a smooth, traversable or even semiclassical wormhole. Controlled geometric interpretations require special states, theories, large-N/strong-coupling limits and an operational specification of the geometry.",
      "supportingClaims": [],
      "sourceIds": [
        "maldacena-susskind-2013"
      ],
      "auditReferences": [
        {
          "title": "Cool horizons for entangled black holes",
          "url": "https://doi.org/10.1002/prop.201300020"
        }
      ],
      "uncertainty": "The reviewed literature does not supply a general resolved answer; the scope and assumptions in the current position remain part of the research problem.",
      "nextInvestigation": "Contrast an appropriate thermofield-double state with generic entangled states and state the additional geometric/reconstruction assumptions.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-quantum-error-correction-gravity",
      "order": 16,
      "title": "Quantum error correction in holography",
      "question": "How should reconstruction handle larger state spaces and stronger gravitational backreaction?",
      "relatedTheoryIds": [
        "quantum-error-correction-gravity"
      ],
      "relatedProblemIds": [
        "black-hole-information"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "Bulk reconstruction depends on the code subspace and correctable algebra. Enlarging the state space or changing backreaction can alter the entanglement wedge and invalidate a reconstruction valid in a smaller subspace.",
      "detailedStatus": "Bulk reconstruction depends on the code subspace and correctable algebra. Enlarging the state space or changing backreaction can alter the entanglement wedge and invalidate a reconstruction valid in a smaller subspace.",
      "supportingClaims": [],
      "sourceIds": [
        "almheiri-qec-2015"
      ],
      "auditReferences": [
        {
          "title": "Bulk locality and quantum error correction in AdS/CFT",
          "url": "https://doi.org/10.1007/JHEP04(2015"
        }
      ],
      "uncertainty": "The reviewed literature does not supply a general resolved answer; the scope and assumptions in the current position remain part of the research problem.",
      "nextInvestigation": "Test complementary recovery and approximate reconstruction error while increasing the energy and dimension of the code subspace.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-jt-gravity",
      "order": 17,
      "title": "Jackiw–Teitelboim gravity",
      "question": "Which information-recovery lessons survive beyond the model’s simplifying limits?",
      "relatedTheoryIds": [
        "jt-gravity"
      ],
      "relatedProblemIds": [
        "black-hole-information"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "JT fixes the two-dimensional curvature while the dilaton and boundary dynamics carry important physics. Its entropy calculations are valuable controlled examples, but its dimensionality, matter, topology sum and possible ensemble interpretation limit automatic extrapolation.",
      "detailedStatus": "JT fixes the two-dimensional curvature while the dilaton and boundary dynamics carry important physics. Its entropy calculations are valuable controlled examples, but its dimensionality, matter, topology sum and possible ensemble interpretation limit automatic extrapolation.",
      "supportingClaims": [],
      "sourceIds": [
        "profile-jt-review-2023"
      ],
      "auditReferences": [
        {
          "title": "Solvable models of quantum black holes: a review on Jackiw–Teitelboim gravity",
          "url": "https://arxiv.org/abs/2210.10846"
        },
        {
          "title": "Antonini et al. — An apologia for islands",
          "url": "https://arxiv.org/abs/2506.04311"
        },
        {
          "title": "Geng et al. — Inconsistency of Islands in Theories with Long-Range Gravity",
          "url": "https://arxiv.org/abs/2107.03390"
        },
        {
          "title": "Geng — The mechanism behind the information encoding for islands",
          "url": "https://doi.org/10.1007/JHEP03(2026"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Add one specified correction or a higher-dimensional embedding and quantify the change in the observable, rather than claiming general black-hole completion.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-replica-wormholes",
      "order": 18,
      "title": "Replica-wormhole framework",
      "question": "How broadly can replica calculations be controlled in less idealized evaporation settings?",
      "relatedTheoryIds": [
        "replica-wormholes"
      ],
      "relatedProblemIds": [
        "black-hole-information"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "Replica saddles can change the entropy calculation in selected gravitational path integrals. Control requires the allowed saddles, boundary conditions, analytic continuation and subsystem definition; a Page-shaped result alone does not settle every microscopic interpretation.",
      "detailedStatus": "Replica saddles can change the entropy calculation in selected gravitational path integrals. Control requires the allowed saddles, boundary conditions, analytic continuation and subsystem definition; a Page-shaped result alone does not settle every microscopic interpretation.",
      "supportingClaims": [],
      "sourceIds": [
        "wave4-replica-wormholes-2019"
      ],
      "auditReferences": [
        {
          "title": "Replica Wormholes and the Entropy of Hawking Radiation",
          "url": "https://arxiv.org/abs/1911.12333"
        },
        {
          "title": "Antonini et al. — An apologia for islands",
          "url": "https://arxiv.org/abs/2506.04311"
        },
        {
          "title": "Geng et al. — Inconsistency of Islands in Theories with Long-Range Gravity",
          "url": "https://arxiv.org/abs/2107.03390"
        },
        {
          "title": "Geng — The mechanism behind the information encoding for islands",
          "url": "https://doi.org/10.1007/JHEP03(2026"
        }
      ],
      "uncertainty": "The reviewed literature does not supply a general resolved answer; the scope and assumptions in the current position remain part of the research problem.",
      "nextInvestigation": "Compare replica and direct computations in a model with a clearly defined non-gravitating bath, then identify which ingredients persist when gravity is restored.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-island-formula",
      "order": 19,
      "title": "Quantum extremal surfaces / island formula",
      "question": "How can the prescription be extended and interpreted microscopically beyond the controlled models?",
      "relatedTheoryIds": [
        "island-formula"
      ],
      "relatedProblemIds": [
        "black-hole-information"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "The prescription extremizes generalized entropy and selects the relevant extremum/minimum. Controlled successes do not remove questions about gravitational subsystem algebras and microscopic encoding. Recent papers defend operational implementations and challenge interpretations based on restrictive observable choices.",
      "detailedStatus": "The prescription extremizes generalized entropy and selects the relevant extremum/minimum. Controlled successes do not remove questions about gravitational subsystem algebras and microscopic encoding. Recent papers defend operational implementations and challenge interpretations based on restrictive observable choices.",
      "supportingClaims": [],
      "sourceIds": [
        "almheiri-islands-2020"
      ],
      "auditReferences": [
        {
          "title": "The Page curve of Hawking radiation from semiclassical geometry",
          "url": "https://doi.org/10.1007/JHEP03(2020"
        },
        {
          "title": "Antonini et al. — An apologia for islands",
          "url": "https://arxiv.org/abs/2506.04311"
        },
        {
          "title": "Geng et al. — Inconsistency of Islands in Theories with Long-Range Gravity",
          "url": "https://arxiv.org/abs/2107.03390"
        },
        {
          "title": "Geng — The mechanism behind the information encoding for islands",
          "url": "https://doi.org/10.1007/JHEP03(2026"
        }
      ],
      "uncertainty": "The reviewed literature does not supply a general resolved answer; the scope and assumptions in the current position remain part of the research problem.",
      "nextInvestigation": "Store competing interpretations with their assumptions and reproduce one calculation with an explicitly defined radiation algebra.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-inflationary-fluctuations",
      "order": 20,
      "title": "Quantum fluctuations in inflation",
      "question": "Which observations distinguish competing mechanisms for generating primordial perturbations?",
      "relatedTheoryIds": [
        "inflationary-fluctuations"
      ],
      "relatedProblemIds": [],
      "category": "Quantum cosmology",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "Scalar tilt, running, tensor modes, non-Gaussianity, isocurvature and their correlations constrain mechanisms, but no single statistic identifies a unique potential. Reheating and transfer functions connect generation to observed scales.",
      "detailedStatus": "Scalar tilt, running, tensor modes, non-Gaussianity, isocurvature and their correlations constrain mechanisms, but no single statistic identifies a unique potential. Reheating and transfer functions connect generation to observed scales.",
      "supportingClaims": [],
      "sourceIds": [
        "guth-pi-1982"
      ],
      "auditReferences": [
        {
          "title": "Fluctuations in the New Inflationary Universe",
          "url": "https://doi.org/10.1103/PhysRevLett.49.1110"
        },
        {
          "title": "Baumann — TASI Lectures on Inflation",
          "url": "https://arxiv.org/abs/0907.5424"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Compare a small set of mechanisms using the same transfer functions, reheating assumptions and likelihood, rather than only plotting potentials.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-wheeler-dewitt",
      "order": 21,
      "title": "Wheeler–DeWitt quantum geometrodynamics",
      "question": "Which variable acts as a clock in a chosen reduced model, and where does its approximation fail?",
      "relatedTheoryIds": [
        "wheeler-dewitt"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "A monotonic scalar, scale factor or other degree of freedom can serve as an internal clock only on an appropriate sector. Turning points, quantum spreading and branch mixing can invalidate a reduced-time approximation.",
      "detailedStatus": "A monotonic scalar, scale factor or other degree of freedom can serve as an internal clock only on an appropriate sector. Turning points, quantum spreading and branch mixing can invalidate a reduced-time approximation.",
      "supportingClaims": [],
      "sourceIds": [
        "profile-kiefer-geometrodynamics-2009"
      ],
      "auditReferences": [
        {
          "title": "Quantum geometrodynamics: whence, whither?",
          "url": "https://arxiv.org/abs/0812.0295"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Solve one reduced model using two clock choices and compare relational observables in their common validity domain.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-canonical-quantum-gravity",
      "order": 22,
      "title": "Canonical quantum gravity",
      "question": "How does a proposed quantization recover classical gravitational dynamics in its intended limit?",
      "relatedTheoryIds": [
        "canonical-quantum-gravity"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "Recovery requires more than writing H-hat Psi=0. The constraint algebra, physical states, relational observables and semiclassical dynamics must be mutually consistent.",
      "detailedStatus": "Recovery requires more than writing H-hat Psi=0. The constraint algebra, physical states, relational observables and semiclassical dynamics must be mutually consistent.",
      "supportingClaims": [],
      "sourceIds": [
        "dewitt-canonical-gravity-1967"
      ],
      "auditReferences": [
        {
          "title": "Quantum Theory of Gravity. I. The Canonical Theory",
          "url": "https://doi.org/10.1103/PhysRev.160.1113"
        }
      ],
      "uncertainty": "The reviewed literature does not supply a general resolved answer; the scope and assumptions in the current position remain part of the research problem.",
      "nextInvestigation": "Test the proposed constraint implementation for anomalies and derive a semiclassical Hamilton-Jacobi limit with controlled correction terms.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-planck-quanta",
      "order": 23,
      "title": "Planck energy quanta",
      "question": "How does the radiation law approach the classical result when photon energy is small compared with thermal energy?",
      "relatedTheoryIds": [
        "planck-quanta"
      ],
      "relatedProblemIds": [],
      "category": "Historical foundations",
      "disposition": "established-learning",
      "dispositionLabel": "Established learning question",
      "shortAnswer": "Let x=h nu/(k_B T). Since exp(x)-1=x+O(x^2), u_nu=(8 pi h nu^3/c^3)/(exp(x)-1) tends to 8 pi k_B T nu^2/c^3 as x approaches zero: the Rayleigh-Jeans limit.",
      "detailedStatus": "Let x=h nu/(k_B T). Since exp(x)-1=x+O(x^2), u_nu=(8 pi h nu^3/c^3)/(exp(x)-1) tends to 8 pi k_B T nu^2/c^3 as x approaches zero: the Rayleigh-Jeans limit.",
      "supportingClaims": [],
      "sourceIds": [
        "planck-1901"
      ],
      "auditReferences": [
        {
          "title": "Zur Theorie des Gesetzes der Energieverteilung im Normalspektrum",
          "url": "https://doi.org/10.1002/andp.19013090310"
        }
      ],
      "uncertainty": "The core result is established within the stated framework; the question is retained as a learning or diagnostic prompt rather than an unresolved research problem.",
      "nextInvestigation": "Add a worked limit and a plot of the relative approximation error versus x; do not label this an unsolved physics problem.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-bohr-model",
      "order": 24,
      "title": "Bohr atomic model",
      "question": "Which steps are classical mechanics, and which new postulates are essential to obtain the spectrum?",
      "relatedTheoryIds": [
        "bohr-model"
      ],
      "relatedProblemIds": [],
      "category": "Historical foundations",
      "disposition": "established-learning",
      "dispositionLabel": "Established learning question",
      "shortAnswer": "Coulomb attraction and centripetal motion are classical. The allowed angular momenta L=n hbar, stationary-state postulate and transition rule h nu=E_i-E_f are additional assumptions. They give the ideal hydrogenic E_n proportional to -1/n^2 but do not replace modern quantum dynamics.",
      "detailedStatus": "Coulomb attraction and centripetal motion are classical. The allowed angular momenta L=n hbar, stationary-state postulate and transition rule h nu=E_i-E_f are additional assumptions. They give the ideal hydrogenic E_n proportional to -1/n^2 but do not replace modern quantum dynamics.",
      "supportingClaims": [],
      "sourceIds": [
        "bohr-1913"
      ],
      "auditReferences": [
        {
          "title": "On the Constitution of Atoms and Molecules",
          "url": "https://doi.org/10.1080/14786441308634955"
        }
      ],
      "uncertainty": "The core result is established within the stated framework; the question is retained as a learning or diagnostic prompt rather than an unresolved research problem.",
      "nextInvestigation": "Annotate each step of the radius and energy derivation as classical input or quantization postulate.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-matrix-mechanics",
      "order": 25,
      "title": "Matrix mechanics",
      "question": "How do matrix elements relate to transition frequencies and to the same system in wave mechanics?",
      "relatedTheoryIds": [
        "matrix-mechanics"
      ],
      "relatedProblemIds": [],
      "category": "Formulations",
      "disposition": "established-learning",
      "dispositionLabel": "Established learning question",
      "shortAnswer": "In an energy basis, A_mn(t)=exp[i(E_m-E_n)t/hbar] A_mn(0). The same matrix element is the integral of psi_m^* A-hat psi_n in a wave representation. Matrix and wave mechanics are representations of the same operator relations in this setting.",
      "detailedStatus": "In an energy basis, A_mn(t)=exp[i(E_m-E_n)t/hbar] A_mn(0). The same matrix element is the integral of psi_m^* A-hat psi_n in a wave representation. Matrix and wave mechanics are representations of the same operator relations in this setting.",
      "supportingClaims": [],
      "sourceIds": [
        "born-jordan-1925"
      ],
      "auditReferences": [
        {
          "title": "Zur Quantenmechanik",
          "url": "https://doi.org/10.1007/BF01328531"
        }
      ],
      "uncertainty": "The core result is established within the stated framework; the question is retained as a learning or diagnostic prompt rather than an unresolved research problem.",
      "nextInvestigation": "Compute position and momentum matrices for the harmonic oscillator and compare transition amplitudes with wave-function integrals.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-wave-mechanics",
      "order": 26,
      "title": "Wave mechanics",
      "question": "How do boundary conditions change the spectrum without changing the differential equation?",
      "relatedTheoryIds": [
        "wave-mechanics"
      ],
      "relatedProblemIds": [],
      "category": "Formulations",
      "disposition": "established-learning",
      "dispositionLabel": "Established learning question",
      "shortAnswer": "An operator includes its domain, not just its differential expression. Different self-adjoint boundary conditions give different eigenvalues: a free particle in a finite Dirichlet box differs from a periodic ring.",
      "detailedStatus": "An operator includes its domain, not just its differential expression. Different self-adjoint boundary conditions give different eigenvalues: a free particle in a finite Dirichlet box differs from a periodic ring.",
      "supportingClaims": [],
      "sourceIds": [
        "profile-mit-wave-2013"
      ],
      "auditReferences": [
        {
          "title": "Quantum Physics II: Wave Mechanics",
          "url": "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/61bc31b8d8bf0680c322733910a71aa0_MIT8_05F13_Chap_01.pdf"
        }
      ],
      "uncertainty": "The core result is established within the stated framework; the question is retained as a learning or diagnostic prompt rather than an unresolved research problem.",
      "nextInvestigation": "Present the same second-derivative operator with Dirichlet and periodic domains and derive both spectra.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-born-rule",
      "order": 27,
      "title": "Born probability rule",
      "question": "How does changing the measurement basis change the probabilities for the same state?",
      "relatedTheoryIds": [
        "born-rule"
      ],
      "relatedProblemIds": [
        "measurement-problem"
      ],
      "category": "Foundations & interpretations",
      "disposition": "established-learning",
      "dispositionLabel": "Established learning question",
      "shortAnswer": "For a fixed density operator rho, the probability of outcome j is tr(rho Pi_j). Rotating the measurement projectors changes the probabilities; a passive change of coordinates applied consistently to both state and measurement does not.",
      "detailedStatus": "For a fixed density operator rho, the probability of outcome j is tr(rho Pi_j). Rotating the measurement projectors changes the probabilities; a passive change of coordinates applied consistently to both state and measurement does not.",
      "supportingClaims": [],
      "sourceIds": [
        "born-probability-1926"
      ],
      "auditReferences": [
        {
          "title": "Zur Quantenmechanik der Stoßvorgänge",
          "url": "https://doi.org/10.1007/BF01397477"
        }
      ],
      "uncertainty": "The core result is established within the stated framework; the question is retained as a learning or diagnostic prompt rather than an unresolved research problem.",
      "nextInvestigation": "Use a qubit prepared in |0> and compare Z and X measurements, distinguishing a changed measurement from relabelled coordinates.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-uncertainty",
      "order": 28,
      "title": "Heisenberg uncertainty principle",
      "question": "Which states attain the position–momentum bound, and what changes for a different observable pair?",
      "relatedTheoryIds": [
        "uncertainty"
      ],
      "relatedProblemIds": [],
      "category": "Foundations & interpretations",
      "disposition": "established-learning",
      "dispositionLabel": "Established learning question",
      "shortAnswer": "Unchirped minimum-uncertainty Gaussian wave packets saturate Delta x Delta p=hbar/2; squeezed widths can still saturate it. For general A and B, equality requires an appropriate linear dependence of the centered state vectors, and the stronger covariance bound must also be considered.",
      "detailedStatus": "Unchirped minimum-uncertainty Gaussian wave packets saturate Delta x Delta p=hbar/2; squeezed widths can still saturate it. For general A and B, equality requires an appropriate linear dependence of the centered state vectors, and the stronger covariance bound must also be considered.",
      "supportingClaims": [],
      "sourceIds": [
        "profile-mit-uncertainty-2013"
      ],
      "auditReferences": [
        {
          "title": "Quantum Physics II: Uncertainty Principle and Compatible Observables",
          "url": "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
        }
      ],
      "uncertainty": "The core result is established within the stated framework; the question is retained as a learning or diagnostic prompt rather than an unresolved research problem.",
      "nextInvestigation": "Derive the equality condition from Cauchy-Schwarz, then compare a Gaussian with a number state and a chirped Gaussian.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-dirac-electron-theory",
      "order": 29,
      "title": "Dirac relativistic electron theory",
      "question": "How does the nonrelativistic limit expose spin-dependent terms absent from the scalar Schrödinger equation?",
      "relatedTheoryIds": [
        "dirac-electron-theory"
      ],
      "relatedProblemIds": [],
      "category": "Formulations",
      "disposition": "established-learning",
      "dispositionLabel": "Established learning question",
      "shortAnswer": "A low-energy expansion yields the Pauli magnetic coupling and, at higher order, spin-orbit and Darwin terms. These depend on field, charge and unit conventions; the nonrelativistic scalar equation omits that spin structure.",
      "detailedStatus": "A low-energy expansion yields the Pauli magnetic coupling and, at higher order, spin-orbit and Darwin terms. These depend on field, charge and unit conventions; the nonrelativistic scalar equation omits that spin structure.",
      "supportingClaims": [],
      "sourceIds": [
        "dirac-electron-1928"
      ],
      "auditReferences": [
        {
          "title": "The Quantum Theory of the Electron",
          "url": "https://doi.org/10.1098/rspa.1928.0023"
        }
      ],
      "uncertainty": "The core result is established within the stated framework; the question is retained as a learning or diagnostic prompt rather than an unresolved research problem.",
      "nextInvestigation": "Show a convention-explicit Foldy-Wouthuysen expansion through the requested order and identify the small momentum/energy parameter.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-path-integral",
      "order": 30,
      "title": "Path-integral formulation",
      "question": "How does stationary phase relate the quantum amplitude to classical trajectories?",
      "relatedTheoryIds": [
        "path-integral"
      ],
      "relatedProblemIds": [],
      "category": "Formulations",
      "disposition": "established-learning",
      "dispositionLabel": "Established learning question",
      "shortAnswer": "When the action varies rapidly relative to hbar, contributions away from stationary action tend to cancel. Stationary paths satisfy the classical Euler-Lagrange equations; multiple saddles, caustics and tunnelling require more than a single classical trajectory.",
      "detailedStatus": "When the action varies rapidly relative to hbar, contributions away from stationary action tend to cancel. Stationary paths satisfy the classical Euler-Lagrange equations; multiple saddles, caustics and tunnelling require more than a single classical trajectory.",
      "supportingClaims": [],
      "sourceIds": [
        "feynman-path-1948"
      ],
      "auditReferences": [
        {
          "title": "Space-Time Approach to Non-Relativistic Quantum Mechanics",
          "url": "https://doi.org/10.1103/RevModPhys.20.367"
        }
      ],
      "uncertainty": "The core result is established within the stated framework; the question is retained as a learning or diagnostic prompt rather than an unresolved research problem.",
      "nextInvestigation": "Evaluate the free-particle propagator by stationary phase and contrast it with a barrier problem.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-density-operator",
      "order": 31,
      "title": "Density-operator formulation",
      "question": "How can different mixtures yield identical statistics for every measurement on the system?",
      "relatedTheoryIds": [
        "density-operator"
      ],
      "relatedProblemIds": [
        "measurement-problem"
      ],
      "category": "Formulations",
      "disposition": "established-learning",
      "dispositionLabel": "Established learning question",
      "shortAnswer": "Different ensembles can have the same density operator. For example, an equal mixture of |0>,|1> and an equal mixture of |+>,|-> both give I/2, hence tr(rho E) agrees for every system-only POVM effect E. Correlations with an external preparation record can distinguish the larger preparations.",
      "detailedStatus": "Different ensembles can have the same density operator. For example, an equal mixture of |0>,|1> and an equal mixture of |+>,|-> both give I/2, hence tr(rho E) agrees for every system-only POVM effect E. Correlations with an external preparation record can distinguish the larger preparations.",
      "supportingClaims": [],
      "sourceIds": [
        "profile-harrow-states-2018"
      ],
      "auditReferences": [
        {
          "title": "Quantum Information Science II, Lecture 1: Quantum states and operations",
          "url": "https://web.mit.edu/8.371/www/lectures/lect01.pdf"
        }
      ],
      "uncertainty": "The core result is established within the stated framework; the question is retained as a learning or diagnostic prompt rather than an unresolved research problem.",
      "nextInvestigation": "Add the two explicit decompositions and distinguish local statistics from statistics conditioned on an external label.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-bell",
      "order": 32,
      "title": "Bell theorem",
      "question": "Which locality and independence assumptions enter each step of the inequality?",
      "relatedTheoryIds": [
        "bell"
      ],
      "relatedProblemIds": [],
      "category": "Foundations & interpretations",
      "disposition": "conditional-model-dependent",
      "dispositionLabel": "Conditional / framework-dependent",
      "shortAnswer": "A CHSH derivation uses factorizability of outcomes given hidden variables and settings, plus an appropriate independence of the hidden-variable distribution from setting choices. Outcomes bounded by one then give |S|<=2. Quantum violations exclude that joint package, not every possible causal assumption individually.",
      "detailedStatus": "A CHSH derivation uses factorizability of outcomes given hidden variables and settings, plus an appropriate independence of the hidden-variable distribution from setting choices. Outcomes bounded by one then give |S|<=2. Quantum violations exclude that joint package, not every possible causal assumption individually.",
      "supportingClaims": [],
      "sourceIds": [
        "bell-1964"
      ],
      "auditReferences": [
        {
          "title": "On the Einstein Podolsky Rosen paradox",
          "url": "https://doi.org/10.1103/PhysicsPhysiqueFizika.1.195"
        }
      ],
      "uncertainty": "The answer depends on the framework, assumptions or regime specified in the reviewed literature.",
      "nextInvestigation": "Display each conditional probability assumption beside the algebraic step that uses it.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-kochen-specker",
      "order": 33,
      "title": "Kochen–Specker contextuality theorem",
      "question": "Which shared observable forces two measurement contexts to use the same value?",
      "relatedTheoryIds": [
        "kochen-specker"
      ],
      "relatedProblemIds": [
        "measurement-problem"
      ],
      "category": "Foundations & interpretations",
      "disposition": "conditional-model-dependent",
      "dispositionLabel": "Conditional / framework-dependent",
      "shortAnswer": "The contradiction depends on a value assignment to the same projector/observable remaining context-independent, while each compatible context obeys its functional or orthogonality constraints. No single universal shared observable supplies every proof; the chosen configuration determines the obstruction.",
      "detailedStatus": "The contradiction depends on a value assignment to the same projector/observable remaining context-independent, while each compatible context obeys its functional or orthogonality constraints. No single universal shared observable supplies every proof; the chosen configuration determines the obstruction.",
      "supportingClaims": [],
      "sourceIds": [
        "profile-kochen-specker-1967"
      ],
      "auditReferences": [
        {
          "title": "The Problem of Hidden Variables in Quantum Mechanics",
          "url": "https://doi.org/10.1512/iumj.1968.17.17004"
        }
      ],
      "uncertainty": "The answer depends on the framework, assumptions or regime specified in the reviewed literature.",
      "nextInvestigation": "Add a complete finite contextuality proof with named observables and a context-incidence table; classify this entry as theorem-level, not merely conceptual.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-pbr-theorem",
      "order": 34,
      "title": "Pusey–Barrett–Rudolph theorem",
      "question": "What changes if independently chosen preparations do not imply independent underlying states?",
      "relatedTheoryIds": [
        "pbr-theorem"
      ],
      "relatedProblemIds": [],
      "category": "Foundations & interpretations",
      "disposition": "conditional-model-dependent",
      "dispositionLabel": "Conditional / framework-dependent",
      "shortAnswer": "Without preparation independence, the factorization of ontic distributions used in the PBR argument is unavailable. That removes this route to the stated contradiction; it does not automatically construct a viable psi-epistemic model satisfying every other constraint.",
      "detailedStatus": "Without preparation independence, the factorization of ontic distributions used in the PBR argument is unavailable. That removes this route to the stated contradiction; it does not automatically construct a viable psi-epistemic model satisfying every other constraint.",
      "supportingClaims": [],
      "sourceIds": [
        "pbr-2012"
      ],
      "auditReferences": [
        {
          "title": "On the reality of the quantum state",
          "url": "https://doi.org/10.1038/nphys2309"
        }
      ],
      "uncertainty": "The answer depends on the framework, assumptions or regime specified in the reviewed literature.",
      "nextInvestigation": "Mark the exact product-distribution step and separately assess any proposed replacement model against measurement predictions.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-everett",
      "order": 35,
      "title": "Everett relative-state / many-worlds",
      "question": "How should an observer connect branch-relative records with the ordinary statistical use of the theory?",
      "relatedTheoryIds": [
        "everett"
      ],
      "relatedProblemIds": [
        "measurement-problem"
      ],
      "category": "Foundations & interpretations",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "Decohered branch-relative records can reproduce the operational setting of probability use, but deriving or interpreting Born weights requires additional arguments and assumptions. Decision-theoretic, symmetry and typicality accounts should not be merged into one uncontested proof.",
      "detailedStatus": "Decohered branch-relative records can reproduce the operational setting of probability use, but deriving or interpreting Born weights requires additional arguments and assumptions. Decision-theoretic, symmetry and typicality accounts should not be merged into one uncontested proof.",
      "supportingClaims": [],
      "sourceIds": [
        "everett-1957"
      ],
      "auditReferences": [
        {
          "title": "Relative State Formulation of Quantum Mechanics",
          "url": "https://doi.org/10.1103/RevModPhys.29.454"
        }
      ],
      "uncertainty": "The reviewed literature does not supply a general resolved answer; the scope and assumptions in the current position remain part of the research problem.",
      "nextInvestigation": "Represent those arguments separately with their premises and distinguish empirical Born-rule agreement from its interpretation.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-bohmian",
      "order": 36,
      "title": "de Broglie–Bohm / pilot-wave theory",
      "question": "How does a many-particle guiding state encode correlations between separated configurations?",
      "relatedTheoryIds": [
        "bohmian"
      ],
      "relatedProblemIds": [],
      "category": "Foundations & interpretations",
      "disposition": "conditional-model-dependent",
      "dispositionLabel": "Conditional / framework-dependent",
      "shortAnswer": "For the usual spinless case, velocities depend on the full configuration-space wave function: v_i=(hbar/m_i) Im(nabla_i Psi/Psi). Entanglement can make one velocity depend on distant configuration coordinates. The equilibrium distribution |Psi|^2 recovers the standard statistical predictions under the usual dynamics.",
      "detailedStatus": "For the usual spinless case, velocities depend on the full configuration-space wave function: v_i=(hbar/m_i) Im(nabla_i Psi/Psi). Entanglement can make one velocity depend on distant configuration coordinates. The equilibrium distribution |Psi|^2 recovers the standard statistical predictions under the usual dynamics.",
      "supportingClaims": [],
      "sourceIds": [
        "bohm-1952-i"
      ],
      "auditReferences": [
        {
          "title": "A Suggested Interpretation of the Quantum Theory in Terms of Hidden Variables. I",
          "url": "https://doi.org/10.1103/PhysRev.85.166"
        }
      ],
      "uncertainty": "The answer depends on the framework, assumptions or regime specified in the reviewed literature.",
      "nextInvestigation": "Calculate a two-particle entangled example and separate nonlocal dependence from controllable signalling.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-qbism",
      "order": 37,
      "title": "QBism",
      "question": "How does the quantum coherence constraint go beyond ordinary Bayesian probability rules?",
      "relatedTheoryIds": [
        "qbism"
      ],
      "relatedProblemIds": [
        "measurement-problem"
      ],
      "category": "Foundations & interpretations",
      "disposition": "conditional-model-dependent",
      "dispositionLabel": "Conditional / framework-dependent",
      "shortAnswer": "The Born rule imposes a quantum-specific relation among an agent’s probabilities, not merely ordinary Bayesian conditioning. In a SIC representation where the required SIC exists, it can be expressed as a modified total-probability relation with dimension-dependent coefficients.",
      "detailedStatus": "The Born rule imposes a quantum-specific relation among an agent’s probabilities, not merely ordinary Bayesian conditioning. In a SIC representation where the required SIC exists, it can be expressed as a modified total-probability relation with dimension-dependent coefficients.",
      "supportingClaims": [],
      "sourceIds": [
        "qbism-2013"
      ],
      "auditReferences": [
        {
          "title": "Quantum-Bayesian coherence",
          "url": "https://doi.org/10.1103/RevModPhys.85.1693"
        }
      ],
      "uncertainty": "The answer depends on the framework, assumptions or regime specified in the reviewed literature.",
      "nextInvestigation": "Define the SIC and dimension explicitly before giving the probability relation; present the interpretive commitments separately from the algebra.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-decoherence",
      "order": 38,
      "title": "Environment-induced decoherence",
      "question": "Which environmental interaction selects the stable states in a particular experiment?",
      "relatedTheoryIds": [
        "decoherence"
      ],
      "relatedProblemIds": [
        "measurement-problem"
      ],
      "category": "Quantum information & open systems",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "Pointer states depend on the system-environment interaction and relevant timescales. Robust states approximately resist the monitored coupling; competing self-dynamics can change the preferred states. Decoherence alone does not select one experienced outcome.",
      "detailedStatus": "Pointer states depend on the system-environment interaction and relevant timescales. Robust states approximately resist the monitored coupling; competing self-dynamics can change the preferred states. Decoherence alone does not select one experienced outcome.",
      "supportingClaims": [],
      "sourceIds": [
        "zurek-decoherence"
      ],
      "auditReferences": [
        {
          "title": "Decoherence, einselection, and the quantum origins of the classical",
          "url": "https://arxiv.org/abs/quant-ph/0105127"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Derive the reduced dynamics for a specified coupling and compare decay of coherences in candidate bases.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-consistent-histories",
      "order": 39,
      "title": "Consistent / decoherent histories",
      "question": "How does changing the consistent family change the questions that can meaningfully be asked?",
      "relatedTheoryIds": [
        "consistent-histories"
      ],
      "relatedProblemIds": [
        "measurement-problem"
      ],
      "category": "Foundations & interpretations",
      "disposition": "conditional-model-dependent",
      "dispositionLabel": "Conditional / framework-dependent",
      "shortAnswer": "A consistent/decoherent family permits classical probability assignments within that family. Incompatible families can ask different questions; their events cannot simply be combined as though they belong to one joint sample space.",
      "detailedStatus": "A consistent/decoherent family permits classical probability assignments within that family. Incompatible families can ask different questions; their events cannot simply be combined as though they belong to one joint sample space.",
      "supportingClaims": [],
      "sourceIds": [
        "griffiths-1984"
      ],
      "auditReferences": [
        {
          "title": "Consistent histories and the interpretation of quantum mechanics",
          "url": "https://doi.org/10.1007/BF01015734"
        }
      ],
      "uncertainty": "The answer depends on the framework, assumptions or regime specified in the reviewed literature.",
      "nextInvestigation": "Compute the decoherence functional for two candidate families and make the single-family restriction visible.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-quantum-information",
      "order": 40,
      "title": "Quantum information theory",
      "question": "How does a source’s mixed-state spectrum determine its compressibility?",
      "relatedTheoryIds": [
        "quantum-information"
      ],
      "relatedProblemIds": [],
      "category": "Quantum information & open systems",
      "disposition": "established-learning",
      "dispositionLabel": "Established learning question",
      "shortAnswer": "For an i.i.d. quantum source, the von Neumann entropy S(rho) gives the asymptotic qubit compression rate in the Schumacher setting. The eigenvalue distribution determines the typical-subspace dimension, about 2^(n S), subject to the usual fidelity and large-block assumptions.",
      "detailedStatus": "For an i.i.d. quantum source, the von Neumann entropy S(rho) gives the asymptotic qubit compression rate in the Schumacher setting. The eigenvalue distribution determines the typical-subspace dimension, about 2^(n S), subject to the usual fidelity and large-block assumptions.",
      "supportingClaims": [],
      "sourceIds": [
        "schumacher-1995"
      ],
      "auditReferences": [
        {
          "title": "Quantum coding",
          "url": "https://doi.org/10.1103/PhysRevA.51.2738"
        }
      ],
      "uncertainty": "The core result is established within the stated framework; the question is retained as a learning or diagnostic prompt rather than an unresolved research problem.",
      "nextInvestigation": "Show two source spectra with equal dimension but different entropy, then demonstrate finite-block overhead.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-entanglement-theory",
      "order": 41,
      "title": "Quantum entanglement theory",
      "question": "Which entanglement property is actually required by the information-processing task under study?",
      "relatedTheoryIds": [
        "entanglement-theory"
      ],
      "relatedProblemIds": [],
      "category": "Quantum information & open systems",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "The useful resource depends on the allowed operations and task. Entanglement entropy characterizes pure bipartite asymptotic transformations, while mixed-state distillation, formation, steering and Bell nonlocality are different questions. No one entanglement number certifies every task.",
      "detailedStatus": "The useful resource depends on the allowed operations and task. Entanglement entropy characterizes pure bipartite asymptotic transformations, while mixed-state distillation, formation, steering and Bell nonlocality are different questions. No one entanglement number certifies every task.",
      "supportingClaims": [],
      "sourceIds": [
        "wave4-entanglement-review-2009"
      ],
      "auditReferences": [
        {
          "title": "Quantum entanglement",
          "url": "https://doi.org/10.1103/RevModPhys.81.865"
        },
        {
          "title": "Wootters — Entanglement of Formation of an Arbitrary State of Two Qubits",
          "url": "https://arxiv.org/abs/quant-ph/9709029"
        },
        {
          "title": "Wiseman, Jones and Doherty — Steering, Entanglement, Nonlocality, and the EPR Paradox",
          "url": "https://arxiv.org/abs/quant-ph/0612147"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "State the task and free operations first, then choose and validate the corresponding resource measure.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-quantum-error-correction",
      "order": 42,
      "title": "Quantum error-correction theory",
      "question": "Which errors violate the code condition, and how should the encoding be changed?",
      "relatedTheoryIds": [
        "quantum-error-correction"
      ],
      "relatedProblemIds": [],
      "category": "Quantum information & open systems",
      "disposition": "conditional-model-dependent",
      "dispositionLabel": "Conditional / framework-dependent",
      "shortAnswer": "An error set is exactly correctable on projector P when P E_a^dagger E_b P=c_ab P. Failure of this condition diagnoses the chosen code/error set, not every possible encoding. Degenerate errors may share a syndrome while remaining correctable.",
      "detailedStatus": "An error set is exactly correctable on projector P when P E_a^dagger E_b P=c_ab P. Failure of this condition diagnoses the chosen code/error set, not every possible encoding. Degenerate errors may share a syndrome while remaining correctable.",
      "supportingClaims": [],
      "sourceIds": [
        "knill-laflamme-1997"
      ],
      "auditReferences": [
        {
          "title": "Theory of quantum error-correcting codes",
          "url": "https://doi.org/10.1103/PhysRevA.55.900"
        }
      ],
      "uncertainty": "The answer depends on the framework, assumptions or regime specified in the reviewed literature.",
      "nextInvestigation": "Compute the condition for the actual noise operators; compare code distance, degeneracy and approximate-recovery error.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-quantum-shannon-theory",
      "order": 43,
      "title": "Quantum Shannon theory",
      "question": "How does allowing shared entanglement change a channel’s communication task and achievable rate?",
      "relatedTheoryIds": [
        "quantum-shannon-theory"
      ],
      "relatedProblemIds": [],
      "category": "Quantum information & open systems",
      "disposition": "conditional-model-dependent",
      "dispositionLabel": "Conditional / framework-dependent",
      "shortAnswer": "For a memoryless channel, unlimited shared entanglement changes the classical communication capacity to a maximized channel mutual information. This is not the unassisted quantum capacity or a generic one-shot formula. Resources and task must be named separately.",
      "detailedStatus": "For a memoryless channel, unlimited shared entanglement changes the classical communication capacity to a maximized channel mutual information. This is not the unassisted quantum capacity or a generic one-shot formula. Resources and task must be named separately.",
      "supportingClaims": [],
      "sourceIds": [
        "wave3-wilde-shannon-2017"
      ],
      "auditReferences": [
        {
          "title": "Quantum Information Theory",
          "url": "https://doi.org/10.1017/9781316809976"
        }
      ],
      "uncertainty": "The answer depends on the framework, assumptions or regime specified in the reviewed literature.",
      "nextInvestigation": "Put entanglement-assisted classical, unassisted classical and quantum capacities on separate cards, with regularization and resource conventions.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-quantum-metrology",
      "order": 44,
      "title": "Quantum metrology",
      "question": "Does a claimed improvement survive when all resources and dominant noise sources are counted?",
      "relatedTheoryIds": [
        "quantum-metrology"
      ],
      "relatedProblemIds": [],
      "category": "Quantum information & open systems",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "An ideal Fisher-information scaling is meaningful only with a consistent count of probes, interrogation time, state preparation and relevant noise. Decoherence and correlated resources can change the attainable scaling and optimal protocol.",
      "detailedStatus": "An ideal Fisher-information scaling is meaningful only with a consistent count of probes, interrogation time, state preparation and relevant noise. Decoherence and correlated resources can change the attainable scaling and optimal protocol.",
      "supportingClaims": [],
      "sourceIds": [
        "giovannetti-metrology-2011"
      ],
      "auditReferences": [
        {
          "title": "Advances in quantum metrology",
          "url": "https://doi.org/10.1038/nphoton.2011.35"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Compare protocols at equal total resource budget using the actual noise model and an attainable estimator, not only the quantum Cramer-Rao lower bound.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-open-quantum-systems",
      "order": 45,
      "title": "Open quantum systems",
      "question": "Which observable distinguishes environmental memory from a poorly fitted memoryless model?",
      "relatedTheoryIds": [
        "open-quantum-systems"
      ],
      "relatedProblemIds": [],
      "category": "Quantum information & open systems",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "One fitted relaxation curve generally cannot distinguish genuine environmental memory from a poor Markovian model. Trace-distance backflow, CP-divisibility and multi-time intervention tests probe different notions and need not be equivalent.",
      "detailedStatus": "One fitted relaxation curve generally cannot distinguish genuine environmental memory from a poor Markovian model. Trace-distance backflow, CP-divisibility and multi-time intervention tests probe different notions and need not be equivalent.",
      "supportingClaims": [],
      "sourceIds": [
        "profile-breuer-memory-2016"
      ],
      "auditReferences": [
        {
          "title": "Colloquium: Non-Markovian dynamics in open quantum systems",
          "url": "https://arxiv.org/abs/1505.01385"
        },
        {
          "title": "Breuer et al. — Non-Markovian dynamics in open quantum systems",
          "url": "https://arxiv.org/abs/1505.01385"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Use several initial states and interventions; state the chosen memory definition and compare predictive multi-time data.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-gksl",
      "order": 46,
      "title": "GKSL / Lindblad open-system dynamics",
      "question": "Which approximation in a concrete bath model permits a time-homogeneous semigroup description?",
      "relatedTheoryIds": [
        "gksl"
      ],
      "relatedProblemIds": [],
      "category": "Quantum information & open systems",
      "disposition": "conditional-model-dependent",
      "dispositionLabel": "Conditional / framework-dependent",
      "shortAnswer": "A time-homogeneous GKSL semigroup often follows from a weak-coupling, stationary-bath limit with appropriate Markov and secular/coarse-graining conditions. Simply calling a bath fast does not ensure a completely positive generator; a generic Redfield equation is not automatically GKSL.",
      "detailedStatus": "A time-homogeneous GKSL semigroup often follows from a weak-coupling, stationary-bath limit with appropriate Markov and secular/coarse-graining conditions. Simply calling a bath fast does not ensure a completely positive generator; a generic Redfield equation is not automatically GKSL.",
      "supportingClaims": [],
      "sourceIds": [
        "lindblad-1976"
      ],
      "auditReferences": [
        {
          "title": "On the generators of quantum dynamical semigroups",
          "url": "https://doi.org/10.1007/BF01608499"
        },
        {
          "title": "Breuer et al. — Non-Markovian dynamics in open quantum systems",
          "url": "https://arxiv.org/abs/1505.01385"
        }
      ],
      "uncertainty": "The answer depends on the framework, assumptions or regime specified in the reviewed literature.",
      "nextInvestigation": "Record bath correlation time, relaxation time, frequency resolution, initial-correlation assumptions and positivity checks.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-quantum-zeno",
      "order": 47,
      "title": "Quantum Zeno effect and dynamics",
      "question": "Which timescale separates inhibited evolution from measurement-enhanced transitions?",
      "relatedTheoryIds": [
        "quantum-zeno"
      ],
      "relatedProblemIds": [
        "measurement-problem"
      ],
      "category": "Quantum information & open systems",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "The initial survival probability has a quadratic expansion with tau_Z=hbar/Delta H when the energy variance exists. Repeated sufficiently frequent projections inhibit transitions. The Zeno/anti-Zeno crossover depends on the spectral density and measurement protocol; it is not universally equal to tau_Z.",
      "detailedStatus": "The initial survival probability has a quadratic expansion with tau_Z=hbar/Delta H when the energy variance exists. Repeated sufficiently frequent projections inhibit transitions. The Zeno/anti-Zeno crossover depends on the spectral density and measurement protocol; it is not universally equal to tau_Z.",
      "supportingClaims": [],
      "sourceIds": [
        "discovery-zeno-review-2012"
      ],
      "auditReferences": [
        {
          "title": "The Quantum Zeno Effect — Watched Pots in the Quantum World",
          "url": "https://arxiv.org/abs/1211.3498"
        },
        {
          "title": "Facchi and Pascazio — Quantum Zeno dynamics: mathematical and physical aspects",
          "url": "https://arxiv.org/abs/0903.3297"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Calculate the protocol-dependent effective decay rate and compare it with the unmeasured rate.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-berry-phase",
      "order": 48,
      "title": "Berry phase / adiabatic geometric phase",
      "question": "How can an interference experiment separate the geometric phase from the dynamical contribution?",
      "relatedTheoryIds": [
        "berry-phase"
      ],
      "relatedProblemIds": [],
      "category": "Mathematical structures",
      "disposition": "conditional-model-dependent",
      "dispositionLabel": "Conditional / framework-dependent",
      "shortAnswer": "A cyclic adiabatic evolution accumulates both dynamical and geometric phases. Compare matched paths, reverse a loop or use an echo/interferometric reference to isolate the geometric contribution while controlling nonadiabatic corrections.",
      "detailedStatus": "A cyclic adiabatic evolution accumulates both dynamical and geometric phases. Compare matched paths, reverse a loop or use an echo/interferometric reference to isolate the geometric contribution while controlling nonadiabatic corrections.",
      "supportingClaims": [],
      "sourceIds": [
        "discovery-berry-1984"
      ],
      "auditReferences": [
        {
          "title": "Quantal phase factors accompanying adiabatic changes",
          "url": "https://doi.org/10.1098/rspa.1984.0023"
        }
      ],
      "uncertainty": "The answer depends on the framework, assumptions or regime specified in the reviewed literature.",
      "nextInvestigation": "Design two arms with matched dynamical phase and calculate the remaining loop integral i integral <n|dn>.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-adiabatic-qc",
      "order": 49,
      "title": "Adiabatic quantum computation",
      "question": "How does the smallest gap vary with problem size for the chosen instance family?",
      "relatedTheoryIds": [
        "adiabatic-qc"
      ],
      "relatedProblemIds": [],
      "category": "Quantum information & open systems",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "The minimum gap and transition matrix elements depend on the instance family and interpolation path. A generic gap-independent runtime claim is unjustified; exponentially small avoided crossings can obstruct a chosen path.",
      "detailedStatus": "The minimum gap and transition matrix elements depend on the instance family and interpolation path. A generic gap-independent runtime claim is unjustified; exponentially small avoided crossings can obstruct a chosen path.",
      "supportingClaims": [],
      "sourceIds": [
        "farhi-adiabatic-2000"
      ],
      "auditReferences": [
        {
          "title": "Quantum Computation by Adiabatic Evolution",
          "url": "https://arxiv.org/abs/quant-ph/0001106"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Perform finite-size scaling of the gap and relevant matrix elements across a specified distribution of instances, not only one favourable example.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-stabilizer-formalism",
      "order": 50,
      "title": "Stabilizer formalism",
      "question": "How do logical operators act without changing the measured stabilizer syndrome?",
      "relatedTheoryIds": [
        "stabilizer-formalism"
      ],
      "relatedProblemIds": [],
      "category": "Quantum information & open systems",
      "disposition": "established-learning",
      "dispositionLabel": "Established learning question",
      "shortAnswer": "Logical Pauli operators commute with every stabilizer and preserve its syndrome. They are not themselves stabilizers modulo phases; the normalizer quotient distinguishes nontrivial logical actions from operations acting trivially on the code space.",
      "detailedStatus": "Logical Pauli operators commute with every stabilizer and preserve its syndrome. They are not themselves stabilizers modulo phases; the normalizer quotient distinguishes nontrivial logical actions from operations acting trivially on the code space.",
      "supportingClaims": [],
      "sourceIds": [
        "gottesman-stabilizer-1997"
      ],
      "auditReferences": [
        {
          "title": "Stabilizer Codes and Quantum Error Correction",
          "url": "https://arxiv.org/abs/quant-ph/9705052"
        }
      ],
      "uncertainty": "The core result is established within the stated framework; the question is retained as a learning or diagnostic prompt rather than an unresolved research problem.",
      "nextInvestigation": "Show an explicit logical X and Z for a small code and verify their commutation with every stabilizer.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-nuclear-hfb",
      "order": 51,
      "title": "Nuclear Hartree–Fock–Bogoliubov theory",
      "question": "When are symmetry restoration and correlations beyond HFB necessary?",
      "relatedTheoryIds": [
        "nuclear-hfb"
      ],
      "relatedProblemIds": [],
      "category": "Nuclear quantum theory",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "Broken symmetries and quasiparticle mean fields efficiently describe some correlations, but observables sensitive to particle number, angular momentum or collective fluctuations can require projection and beyond-mean-field methods. Necessity depends on the nucleus and observable.",
      "detailedStatus": "Broken symmetries and quasiparticle mean fields efficiently describe some correlations, but observables sensitive to particle number, angular momentum or collective fluctuations can require projection and beyond-mean-field methods. Necessity depends on the nucleus and observable.",
      "supportingClaims": [],
      "sourceIds": [
        "dobaczewski-nazarewicz-hfb-2012"
      ],
      "auditReferences": [
        {
          "title": "Hartree-Fock-Bogoliubov solution of the pairing Hamiltonian in finite nuclei",
          "url": "https://arxiv.org/abs/1206.2600"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Compare HFB, symmetry-restored and configuration-mixed predictions with a consistent interaction and convergence/error assessment.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-in-medium-srg",
      "order": 52,
      "title": "In-medium similarity renormalization group",
      "question": "How can induced-operator truncation errors be quantified?",
      "relatedTheoryIds": [
        "in-medium-srg"
      ],
      "relatedProblemIds": [],
      "category": "Nuclear quantum theory",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "Truncating the normal-ordered operator hierarchy omits induced higher-body terms. Basis, interaction, reference and flow dependence can help diagnose errors but are not by themselves a rigorous uncertainty bound.",
      "detailedStatus": "Truncating the normal-ordered operator hierarchy omits induced higher-body terms. Basis, interaction, reference and flow dependence can help diagnose errors but are not by themselves a rigorous uncertainty bound.",
      "supportingClaims": [],
      "sourceIds": [
        "wave3-hergert-imsrg-2016"
      ],
      "auditReferences": [
        {
          "title": "The In-Medium Similarity Renormalization Group: A Novel Ab Initio Method for Nuclei",
          "url": "https://doi.org/10.1016/j.physrep.2015.12.007"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Compare operator-rank truncations and exact benchmarks where available; propagate evolved observables consistently with the Hamiltonian.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-density-functional-theory",
      "order": 53,
      "title": "Density functional theory",
      "question": "Which density-functional approximations preserve the properties needed for a given system?",
      "relatedTheoryIds": [
        "density-functional-theory"
      ],
      "relatedProblemIds": [],
      "category": "Quantum many-body & condensed matter",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "No single functional preserves every desired property for every system. Choose relevant exact constraints and diagnostics, including spin symmetry, derivative discontinuities, charge-transfer behavior and dispersion where needed. Hohenberg-Kohn is not an accuracy certificate for an approximation.",
      "detailedStatus": "No single functional preserves every desired property for every system. Choose relevant exact constraints and diagnostics, including spin symmetry, derivative discontinuities, charge-transfer behavior and dispersion where needed. Hohenberg-Kohn is not an accuracy certificate for an approximation.",
      "supportingClaims": [],
      "sourceIds": [
        "hohenberg-kohn-1964"
      ],
      "auditReferences": [
        {
          "title": "Inhomogeneous Electron Gas",
          "url": "https://doi.org/10.1103/PhysRev.136.B864"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Benchmark the target observable using varied functionals and a higher-level or experimental reference; separate basis error from functional error.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-hubbard-model",
      "order": 54,
      "title": "Hubbard model",
      "question": "Which conclusions survive outside a controlled limit?",
      "relatedTheoryIds": [
        "hubbard-model"
      ],
      "relatedProblemIds": [],
      "category": "Quantum many-body & condensed matter",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "Statements depend on dimension, filling, temperature and interaction strength. Exact or controlled results in selected limits do not establish the complete doped two-dimensional phase diagram.",
      "detailedStatus": "Statements depend on dimension, filling, temperature and interaction strength. Exact or controlled results in selected limits do not establish the complete doped two-dimensional phase diagram.",
      "supportingClaims": [],
      "sourceIds": [
        "arovas-hubbard-2022"
      ],
      "auditReferences": [
        {
          "title": "The Hubbard Model",
          "url": "https://arxiv.org/abs/2103.12097"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Specify the regime and compare complementary numerical methods with finite-size, temperature and sign-problem limitations recorded.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-jaynes-cummings",
      "order": 55,
      "title": "Jaynes–Cummings model",
      "question": "At what coupling does the approximation cease to describe the desired observable?",
      "relatedTheoryIds": [
        "jaynes-cummings"
      ],
      "relatedProblemIds": [],
      "category": "Quantum optics & AMO",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "The rotating-wave approximation is governed by counter-rotating terms relative to the relevant transition scales and times, not a single universal coupling threshold. Photon occupation, detuning and the chosen observable can change the error.",
      "detailedStatus": "The rotating-wave approximation is governed by counter-rotating terms relative to the relevant transition scales and times, not a single universal coupling threshold. Photon occupation, detuning and the chosen observable can change the error.",
      "supportingClaims": [],
      "sourceIds": [
        "he-jaynes-cummings-2012"
      ],
      "auditReferences": [
        {
          "title": "Jaynes-Cummings model: What emerges first beyond the rotating-wave approximation?",
          "url": "https://arxiv.org/abs/1203.2410"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Compare Jaynes-Cummings and full Rabi dynamics for the actual state, coupling and observation time, including Bloch-Siegert corrections.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-coupled-cluster",
      "order": 56,
      "title": "Coupled-cluster theory",
      "question": "Which truncation is adequate for the molecule and observable of interest?",
      "relatedTheoryIds": [
        "coupled-cluster"
      ],
      "relatedProblemIds": [],
      "category": "Quantum chemistry & electronic structure",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "Adequate excitation rank depends on correlation structure and observable. A single-reference low-rank truncation can work well near a suitable reference but fail near degeneracies or bond breaking. Energy agreement alone does not validate response properties.",
      "detailedStatus": "Adequate excitation rank depends on correlation structure and observable. A single-reference low-rank truncation can work well near a suitable reference but fail near degeneracies or bond breaking. Energy agreement alone does not validate response properties.",
      "supportingClaims": [],
      "sourceIds": [
        "bartlett-musial-2007"
      ],
      "auditReferences": [
        {
          "title": "Coupled-cluster theory in quantum chemistry",
          "url": "https://doi.org/10.1103/RevModPhys.79.291"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Compare excitation ranks, reference diagnostics, basis convergence and selected exact/active-space benchmarks for the specified observable.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-reheating-preheating",
      "order": 57,
      "title": "Reheating and preheating after inflation",
      "question": "Which interactions control the transition from resonance to thermal equilibrium?",
      "relatedTheoryIds": [
        "reheating-preheating"
      ],
      "relatedProblemIds": [],
      "category": "Astroparticle physics & cosmology",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "Resonant particle production is not synonymous with thermal equilibrium. Expansion, rescattering, backreaction and number-changing interactions control the subsequent distribution and equilibration. Perturbative decay equations alone can miss the resonance stage.",
      "detailedStatus": "Resonant particle production is not synonymous with thermal equilibrium. Expansion, rescattering, backreaction and number-changing interactions control the subsequent distribution and equilibration. Perturbative decay equations alone can miss the resonance stage.",
      "supportingClaims": [],
      "sourceIds": [
        "kofman-reheating-1994"
      ],
      "auditReferences": [
        {
          "title": "Reheating after Inflation",
          "url": "https://doi.org/10.1103/PhysRevLett.73.3195"
        },
        {
          "title": "Baumann — TASI Lectures on Inflation",
          "url": "https://arxiv.org/abs/0907.5424"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Use a specified interaction to connect mode growth, backreaction and kinetic equilibration; track energy conservation and departure from thermal distributions.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-wimp-dark-matter",
      "order": 58,
      "title": "WIMP dark-matter paradigm",
      "question": "How do nuclear and halo uncertainties alter an inferred constraint?",
      "relatedTheoryIds": [
        "wimp-dark-matter"
      ],
      "relatedProblemIds": [
        "dark-matter"
      ],
      "category": "Astroparticle physics & cosmology",
      "disposition": "model-specific-investigation",
      "dispositionLabel": "Model-specific investigation",
      "shortAnswer": "An inferred rate depends on particle couplings, nuclear response, local density and velocity distribution. A published exclusion under one halo and interaction model is not a model-independent prohibition of all WIMP candidates.",
      "detailedStatus": "An inferred rate depends on particle couplings, nuclear response, local density and velocity distribution. A published exclusion under one halo and interaction model is not a model-independent prohibition of all WIMP candidates.",
      "supportingClaims": [],
      "sourceIds": [
        "jungman-wimp-1996"
      ],
      "auditReferences": [
        {
          "title": "Supersymmetric dark matter",
          "url": "https://doi.org/10.1016/0370-1573(95"
        }
      ],
      "uncertainty": "The answer is expected to depend on the chosen model, observable, approximation or parameter regime.",
      "nextInvestigation": "Propagate halo and nuclear nuisance parameters through the recoil spectrum, and compare like-for-like interaction assumptions rather than headline cross sections.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-pr-box",
      "order": 59,
      "title": "PR-box / superquantum correlations",
      "question": "What additional principles distinguish quantum from general no-signalling correlations?",
      "relatedTheoryIds": [
        "pr-box"
      ],
      "relatedProblemIds": [],
      "category": "Beyond standard quantum theory",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "No-signalling alone allows stronger correlations than quantum theory. Principles such as information causality or local-orthogonality constraints rule out some post-quantum correlations, but the scope and assumptions of a full characterization must be specified.",
      "detailedStatus": "No-signalling alone allows stronger correlations than quantum theory. Principles such as information causality or local-orthogonality constraints rule out some post-quantum correlations, but the scope and assumptions of a full characterization must be specified.",
      "supportingClaims": [],
      "sourceIds": [
        "rohrlich-popescu-nonlocality-1995"
      ],
      "auditReferences": [
        {
          "title": "Nonlocality as an axiom for quantum theory",
          "url": "https://arxiv.org/abs/quant-ph/9508009"
        }
      ],
      "uncertainty": "The reviewed literature does not supply a general resolved answer; the scope and assumptions in the current position remain part of the research problem.",
      "nextInvestigation": "Choose a Bell scenario and compare the quantum set with the sets allowed by each principle; record a counterexample or inclusion proof instead of asserting universal equivalence.",
      "reviewedAt": "2026-09-27",
      "evidenceState": "research-audit-draft"
    },
    {
      "id": "rq-gravity-entanglement-discrimination",
      "order": 60,
      "title": "Gravity-mediated entanglement as a model-discrimination problem",
      "question": "Which combined observables can distinguish quantized gravitational mediation from the explicit classical and classical–quantum alternatives that can mimic part of a gravity-entanglement experiment?",
      "relatedTheoryIds": [
        "bmv-gravity-entanglement",
        "postquantum-classical-gravity",
        "diosi-penrose",
        "semiclassical-gravity",
        "stochastic-gravity",
        "open-quantum-systems",
        "configuration-ensemble-cq"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "category": "Quantum gravity & spacetime",
      "disposition": "open",
      "dispositionLabel": "Open research question",
      "shortAnswer": "No single positive entanglement outcome is presently model-independent across every classical or hybrid alternative. Explicit countermodels can generate entanglement, while Markovian completely-positive classical–quantum models predict linked decoherence, diffusion and back-reaction signatures. Other proposals use motion cross-correlations or minimum-noise bounds, and non-Markovian effective classical–quantum dynamics weakens simple Markovian inference. The experiment must therefore name the model class and assumptions it excludes.",
      "detailedStatus": "BMV-style locality/information arguments motivate entanglement as a nonclassicality witness under specified mediator assumptions. However, Diósi–Penrose and broader Markovian hybrid models have entangling parameter regimes, while specified semiclassical/stochastic tidal models and Newton–Cartan mediator analyses do not. Time-local completely-positive classical–quantum dynamics also obey decoherence/diffusion/back-reaction constraints, and a 2026 classification derives a minimum noise floor for non-entangling time-local Galilean models reproducing Newtonian gravity on average; non-Markovian effective classical–quantum descriptions need not satisfy the same instantaneous trade-off at all times. Feng, Vedral and Marletto show that collapse-based entangling models can evade the locality-conditioned witness by violating its locality premise, while Di Biagio emphasizes that this locality is information-theoretic and therefore GIE is not a theory-independent classifier of the gravitational field. The unresolved task is to identify a minimal experimentally feasible set of observables and interventions that separates a clearly enumerated model class with controlled systematics. The retained configuration-ensemble models have explicit signaling caveats. The experimental leads also include classical motion cross-correlations, conditional matter-wave interferometry and geodesic-deviation strain spectra; none is promoted here to a completed experimental exclusion.",
      "supportingClaims": [],
      "sourceIds": [
        "marletto-vedral-2017",
        "oppenheim-decoherence-diffusion-2023",
        "fabiano-minimal-noise-2026",
        "trillo-navascues-dp-gie-2025",
        "angeli-carlesso-hybrid-entanglement-2025",
        "lin-mondal-newtonian-entanglement-2026",
        "schneider-huggett-linnemann-2026",
        "feng-vedral-marletto-collapse-2026",
        "di-biagio-gie-witness-2026",
        "tomizuka-takeda-nonmarkovian-2026",
        "hall-reginatto-classical-gravity-2018",
        "doner-grossardt-gie-2022",
        "kryhin-sudhir-classical-gravity-2025",
        "plavala-indirect-gme-2026",
        "hirotani-matsumura-geodesic-2026"
      ],
      "auditReferences": [
        {
          "title": "Gravitationally Induced Entanglement between Two Massive Particles is Sufficient Evidence of Quantum Effects in Gravity",
          "url": "https://doi.org/10.1103/PhysRevLett.119.240402"
        },
        {
          "title": "Gravitationally induced decoherence vs space-time diffusion: testing the quantum nature of gravity",
          "url": "https://doi.org/10.1038/s41467-023-43348-2"
        },
        {
          "title": "Minimal noise in non-quantized gravity",
          "url": "https://arxiv.org/abs/2603.26075"
        },
        {
          "title": "Diósi-Penrose model of classical gravity predicts gravitationally induced entanglement",
          "url": "https://doi.org/10.1103/PhysRevD.111.L121101"
        },
        {
          "title": "Entanglement in Markovian hybrid classical-quantum theories of gravity",
          "url": "https://doi.org/10.1103/jzht-fbwt"
        },
        {
          "title": "Can Newtonian gravity produce quantum entanglement?",
          "url": "https://doi.org/10.1103/fv38-kgkb"
        },
        {
          "title": "A demonstration that classical gravity does not produce entanglement",
          "url": "https://doi.org/10.1088/1361-6382/ae6f62"
        },
        {
          "title": "Collapse-based models for gravity do not violate the entanglement-based witness of nonclassicality",
          "url": "https://doi.org/10.1103/83rl-nygv"
        },
        {
          "title": "Gravity-induced entanglement is not a theory-independent witness of nonclassicality of the gravitational field",
          "url": "https://doi.org/10.1103/r8ry-sp35"
        },
        {
          "title": "Emergence of Non-Markovian Classical-Quantum Dynamics from Decoherence",
          "url": "https://arxiv.org/abs/2604.06891"
        },
        {
          "title": "On two recent proposals for witnessing nonclassical gravity",
          "url": "https://doi.org/10.1088/1751-8121/aaa734"
        },
        {
          "title": "Distinguishable Consequence of Classical Gravity on Quantum Matter",
          "url": "https://doi.org/10.1103/PhysRevLett.134.061501"
        }
      ],
      "uncertainty": "No exhaustive theorem in the reviewed set establishes a finite universal test that excludes every conceivable classical, nonlocal, retrocausal or non-Markovian alternative. The discriminating set is necessarily relative to explicitly defined model classes, Markovianity, locality and experimental assumptions.",
      "nextInvestigation": "Construct a source-backed hypothesis-by-observable model matrix for the concrete models now indexed; calculate which combinations of entanglement dynamics, decoherence, force noise/diffusion, back-reaction, intervention and memory are jointly incompatible with each model, then optimize the experimentally feasible hitting set without treating unmodeled alternatives as excluded.",
      "reviewedAt": "2026-10-07",
      "evidenceState": "source-reviewed research synthesis"
    }

  ]
};