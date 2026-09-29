window.QI_EVIDENCE = (() => {
  const extraSources=[
  {
    "id": "hensen-bell-2015",
    "title": "Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres",
    "authors": "B. Hensen et al.",
    "year": 2015,
    "type": "primary experimental paper",
    "url": "https://doi.org/10.1038/nature15759"
  },
  {
    "id": "donadi-collapse-2021",
    "title": "Underground test of gravity-related wave function collapse",
    "authors": "Sandro Donadi et al.",
    "year": 2021,
    "type": "primary experimental paper",
    "url": "https://doi.org/10.1038/s41567-020-1008-4"
  },
  {
    "id": "superk-atmospheric-1998",
    "title": "Evidence for Oscillation of Atmospheric Neutrinos",
    "authors": "Super-Kamiokande Collaboration",
    "year": 1998,
    "type": "primary experimental paper",
    "url": "https://doi.org/10.1103/PhysRevLett.81.1562"
  }
];
  const existing=new Set(window.QI_DATA.sources.map(source=>source.id));
  for(const source of extraSources)if(!existing.has(source.id))window.QI_DATA.sources.push(source);
  return {
  "version": "v1",
  "reviewedAt": "2026-09-29",
  "scope": "Curated empirical and theoretical evidence/constraint records. Records state what a result constrains and what it does not establish.",
  "records": [
    {
      "id": "ev-bell-loophole-free-2015",
      "title": "Loophole-free Bell inequality violation",
      "date": "2015-10-21",
      "type": "experimental result",
      "result": "A Bell test with electron spins separated by 1.3 km closed the principal locality and detection loopholes in the experimental design and observed correlations inconsistent with local-realist models satisfying the Bell-test assumptions.",
      "relatedTheoryIds": [
        "bell"
      ],
      "relatedProblemIds": [
        "measurement-problem"
      ],
      "relatedClaimIds": [],
      "constrains": [
        "Local hidden-variable models satisfying the assumptions entering the tested Bell inequality."
      ],
      "doesNotEstablish": [
        "A unique interpretation of quantum mechanics.",
        "Faster-than-light signalling.",
        "The failure of every conceivable realist model."
      ],
      "sourceIds": [
        "hensen-bell-2015"
      ],
      "sourceLocations": [
        {
          "sourceId": "hensen-bell-2015",
          "locator": "Nature 526, 682–686 (2015), abstract and Bell-test result",
          "url": "https://doi.org/10.1038/nature15759"
        }
      ],
      "reviewedAt": "2026-09-28",
      "evidenceStatus": "observed experimental violation"
    },
    {
      "id": "ev-diosi-penrose-underground-2021",
      "title": "Underground constraint on gravity-related collapse",
      "date": "2021-09-07",
      "type": "experimental constraint",
      "result": "A dedicated underground search for spontaneous radiation associated with Diósi–Penrose collapse set a much stronger lower bound on the effective nuclear mass-density size and ruled out the natural parameter-free version tested by the analysis.",
      "relatedTheoryIds": [
        "diosi-penrose",
        "objective-collapse"
      ],
      "relatedProblemIds": [
        "measurement-problem"
      ],
      "relatedClaimIds": [],
      "constrains": [
        "The natural parameter-free Diósi–Penrose model in the tested implementation and parameter assumptions."
      ],
      "doesNotEstablish": [
        "That all objective-collapse theories are excluded.",
        "That gravity cannot play any role in collapse.",
        "That ordinary unitary interpretations are uniquely selected."
      ],
      "sourceIds": [
        "donadi-collapse-2021"
      ],
      "sourceLocations": [
        {
          "sourceId": "donadi-collapse-2021",
          "locator": "Nature Physics 17, 74–78 (2021), abstract/result",
          "url": "https://doi.org/10.1038/s41567-020-1008-4"
        }
      ],
      "reviewedAt": "2026-09-28",
      "evidenceStatus": "parameter-space exclusion"
    },
    {
      "id": "ev-superk-atmospheric-1998",
      "title": "Atmospheric-neutrino oscillation evidence",
      "date": "1998-08-24",
      "type": "experimental result",
      "result": "Super-Kamiokande observed an atmospheric-neutrino zenith-angle and flavor pattern inconsistent with no oscillations and interpreted it as evidence for neutrino oscillation.",
      "relatedTheoryIds": [
        "neutrino-mixing"
      ],
      "relatedProblemIds": [],
      "relatedClaimIds": [],
      "constrains": [
        "No-oscillation descriptions of the atmospheric-neutrino data under the analysis assumptions."
      ],
      "doesNotEstablish": [
        "The absolute neutrino mass scale.",
        "A complete determination of the mass ordering or CP phase."
      ],
      "sourceIds": [
        "superk-atmospheric-1998"
      ],
      "sourceLocations": [
        {
          "sourceId": "superk-atmospheric-1998",
          "locator": "Phys. Rev. Lett. 81, 1562 (1998), atmospheric-neutrino oscillation analysis",
          "url": "https://doi.org/10.1103/PhysRevLett.81.1562"
        }
      ],
      "reviewedAt": "2026-09-28",
      "evidenceStatus": "observed oscillation evidence"
    },
    {
      "id": "ev-atlas-top-entanglement-2024",
      "title": "Top-quark entanglement at the LHC",
      "date": "2024-09-18",
      "type": "experimental result",
      "result": "ATLAS measured a top–antitop spin-entanglement marker more than five standard deviations from the no-entanglement scenario in the stated fiducial region, establishing entanglement at the highest energy scale then observed.",
      "relatedTheoryIds": [
        "quantum-information",
        "qcd",
        "standard-model"
      ],
      "relatedProblemIds": [],
      "relatedClaimIds": [],
      "constrains": [
        "No-entanglement descriptions for the measured top-pair sample and observable."
      ],
      "doesNotEstablish": [
        "Physics beyond the Standard Model.",
        "A deviation from ordinary quantum mechanics."
      ],
      "sourceIds": [
        "atlas-top-entanglement-2024"
      ],
      "sourceLocations": [
        {
          "sourceId": "atlas-top-entanglement-2024",
          "locator": "Nature 633, 542–547 (2024), abstract/result",
          "url": "https://doi.org/10.1038/s41586-024-07824-z"
        }
      ],
      "reviewedAt": "2026-09-28",
      "evidenceStatus": ">5σ entanglement observation"
    },
    {
      "id": "ev-desi-dr2-2025",
      "title": "DESI DR2 expansion-history constraints",
      "date": "2025-03-18",
      "type": "observational constraint",
      "result": "DESI DR2 BAO measurements are well described by flat ΛCDM on their own, while combinations with CMB and supernova datasets give model- and dataset-dependent preferences for time-varying dark energy.",
      "relatedTheoryIds": [
        "lambda-cdm",
        "quintessence",
        "phantom-dark-energy"
      ],
      "relatedProblemIds": [
        "dark-matter"
      ],
      "relatedClaimIds": [],
      "constrains": [
        "The background expansion history and cosmological parameter combinations used in ΛCDM and dynamical-dark-energy fits."
      ],
      "doesNotEstablish": [
        "A direct detection or microscopic identity of dark matter.",
        "A single dataset-independent verdict that ΛCDM is false."
      ],
      "sourceIds": [
        "desi-dr2-cosmology-2025"
      ],
      "sourceLocations": [
        {
          "sourceId": "desi-dr2-cosmology-2025",
          "locator": "DESI DR2 Results II, abstract and cosmological-constraint summary",
          "url": "https://arxiv.org/abs/2503.14738"
        }
      ],
      "reviewedAt": "2026-09-28",
      "evidenceStatus": "precision cosmological constraint"
    },
    {
      "id": "ev-lz-extended-window-2026",
      "title": "LZ extended recoil-window search",
      "date": "2026-09-02",
      "type": "experimental search",
      "result": "LZ observed one high-energy nuclear-recoil-like event in a low-background region. Across the tested dark-matter models, the background-only tension reaches 2.6σ global significance after the look-elsewhere effect, with a 3.4σ maximum local significance.",
      "relatedTheoryIds": [
        "wimp-dark-matter"
      ],
      "relatedProblemIds": [
        "dark-matter"
      ],
      "relatedClaimIds": [],
      "constrains": [
        "Dark-matter interaction parameter space probed by the extended nuclear-recoil analysis."
      ],
      "doesNotEstablish": [
        "A dark-matter discovery.",
        "That the event is caused by a WIMP or other dark-matter particle."
      ],
      "sourceIds": [
        "lz-extended-window-2026"
      ],
      "sourceLocations": [
        {
          "sourceId": "lz-extended-window-2026",
          "locator": "arXiv:2609.02823, abstract/statistical result",
          "url": "https://arxiv.org/abs/2609.02823"
        }
      ],
      "reviewedAt": "2026-09-28",
      "evidenceStatus": "2.6σ global candidate excess"
    },
    {
      "id": "ev-minimal-noise-nonquantized-2026",
      "title": "Non-entangling non-quantized Newtonian gravity requires a minimum noise floor",
      "date": "2026-03-30",
      "type": "theoretical constraint",
      "result": "Fabiano, Fujita, Matsumura and Carney classify time-local, Galilean-invariant non-quantized gravity models that reproduce the Newtonian interaction on average and show that any model in this class that remains non-entangling must inject a quantifiable minimum amount of irreversible noise. Measuring gravity below the corresponding noise threshold would therefore exclude the non-entangling portion of that model class.",
      "relatedTheoryIds": [
        "bmv-gravity-entanglement",
        "postquantum-classical-gravity",
        "open-quantum-systems"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "relatedClaimIds": [],
      "constrains": [
        "Non-entangling, time-local, Galilean-invariant non-quantized models that reproduce Newtonian gravity on average.",
        "Attempts to make such a non-entangling gravitational interaction arbitrarily reversible or noiseless."
      ],
      "doesNotEstablish": [
        "That every non-quantized gravity model is non-entangling.",
        "A universal bound for arbitrary non-Markovian or relativistic alternatives outside the paper's assumptions.",
        "That detecting noise would uniquely imply fundamental classical gravity."
      ],
      "sourceIds": [
        "fabiano-minimal-noise-2026"
      ],
      "sourceLocations": [
        {
          "sourceId": "fabiano-minimal-noise-2026",
          "locator": "arXiv:2603.26075v2, abstract and general classification/noise-threshold result",
          "url": "https://arxiv.org/abs/2603.26075"
        }
      ],
      "reviewedAt": "2026-09-29",
      "evidenceStatus": "preprint general non-entangling noise bound"
    },
    {
      "id": "ev-cq-decoherence-diffusion-2023",
      "title": "Time-local classical–quantum dynamics require a decoherence–diffusion trade-off",
      "date": "2023-12-04",
      "type": "theoretical constraint",
      "result": "For probability-preserving time-local classical–quantum dynamics, complete positivity imposes a trade-off between quantum decoherence, diffusion of the classical phase-space variables and the strength of back-reaction. In the gravity application this makes simultaneous long matter coherence and arbitrarily quiet classical spacetime incompatible within the stated Markovian framework.",
      "relatedTheoryIds": [
        "postquantum-classical-gravity",
        "open-quantum-systems"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "relatedClaimIds": [],
      "constrains": [
        "Time-local/Markovian completely-positive classical–quantum gravity models with nontrivial back-reaction.",
        "Attempts to suppress both gravitationally induced decoherence and classical metric/force diffusion while retaining the stated coupling."
      ],
      "doesNotEstablish": [
        "That gravity is fundamentally classical.",
        "A universal bound for arbitrary non-Markovian effective classical–quantum descriptions.",
        "That observing diffusion would uniquely identify a classical theory of gravity."
      ],
      "sourceIds": [
        "oppenheim-decoherence-diffusion-2023",
        "layton-weak-field-cq-2023"
      ],
      "sourceLocations": [
        {
          "sourceId": "oppenheim-decoherence-diffusion-2023",
          "locator": "Main decoherence–diffusion/back-reaction trade-off and gravity application",
          "url": "https://doi.org/10.1038/s41467-023-43348-2"
        },
        {
          "sourceId": "layton-weak-field-cq-2023",
          "locator": "Weak-field Newtonian CQ dynamics; Eq. (4.12) in the path-integral normalization",
          "url": "https://doi.org/10.1007/JHEP08(2023)163"
        }
      ],
      "reviewedAt": "2026-09-29",
      "evidenceStatus": "theoretical Markovian consistency constraint"
    },
    {
      "id": "ev-dp-gie-2025",
      "title": "A Diósi–Penrose classical-gravity model can generate transient probe entanglement",
      "date": "2025-06-12",
      "type": "model-specific theoretical result",
      "result": "Trillo and Navascués found that the Diósi–Penrose classical-gravity dynamics they analyze can entangle two mechanical probes below a parameter-dependent separation scale, while the same dynamics drives the system toward separability asymptotically. Later work on Markovian hybrid models likewise identifies entangling regimes tied to nonlocal structure. Feng, Vedral and Marletto argue that this does not violate the original entanglement-based witness because the collapse-based models themselves violate the witness's locality assumption.",
      "relatedTheoryIds": [
        "diosi-penrose",
        "objective-collapse",
        "bmv-gravity-entanglement",
        "postquantum-classical-gravity"
      ],
      "relatedProblemIds": [
        "quantum-gravity",
        "measurement-problem"
      ],
      "relatedClaimIds": [],
      "constrains": [
        "Blanket claims that every classical or hybrid gravity model is incapable of generating probe entanglement.",
        "The use of a positive gravity-mediated-entanglement signal as a model-independent classifier without testing the dynamics and model parameters."
      ],
      "doesNotEstablish": [
        "That the Diósi–Penrose model describes nature.",
        "That classical Einstein gravity mediates entanglement.",
        "That every stochastic or hybrid classical-gravity model can entangle."
      ],
      "sourceIds": [
        "trillo-navascues-dp-gie-2025",
        "angeli-carlesso-hybrid-entanglement-2025",
        "feng-vedral-marletto-collapse-witness-2026"
      ],
      "sourceLocations": [
        {
          "sourceId": "trillo-navascues-dp-gie-2025",
          "locator": "Abstract and model-specific GIE threshold/dynamics",
          "url": "https://doi.org/10.1103/PhysRevD.111.L121101"
        },
        {
          "sourceId": "angeli-carlesso-hybrid-entanglement-2025",
          "locator": "Abstract and analysis of entanglement generation in Markovian hybrid gravity models",
          "url": "https://doi.org/10.1103/jzht-fbwt"
        },
        {
          "sourceId": "feng-vedral-marletto-collapse-witness-2026",
          "locator": "Phys. Rev. D 113, 104055 (2026), locality analysis of collapse-based entangling models",
          "url": "https://doi.org/10.1103/83rl-nygv"
        }
      ],
      "reviewedAt": "2026-09-29",
      "evidenceStatus": "model-specific entangling prediction"
    },
    {
      "id": "ev-gravity-entanglement-boundary-2025",
      "title": "Whether classical gravity can mediate entanglement is model- and interpretation-dependent",
      "date": "2026-09-01",
      "type": "theoretical controversy",
      "result": "The 2025 Aziz–Howl calculation argues that QFT matter coupled through a classical gravitational background can acquire entanglement through virtual matter propagation. Multiple 2025–2026 analyses dispute that inference or recover no final entanglement for specified classical mediator models, while other classical-hybrid constructions independently predict entangling regimes. Feng, Vedral and Marletto preserve the locality-conditioned witness by identifying nonlocal features in collapse-based entangling models, while Di Biagio argues that the locality premise is information-theoretic rather than simply spatiotemporal and therefore GIE is not a theory-independent classifier. The literature therefore does not support a single undifferentiated rule that all classical-gravity models either can or cannot entangle.",
      "relatedTheoryIds": [
        "bmv-gravity-entanglement",
        "postquantum-classical-gravity",
        "stochastic-gravity",
        "diosi-penrose"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "relatedClaimIds": [],
      "constrains": [
        "Model-independent interpretations of a gravity-mediated entanglement signal.",
        "Statements that treat 'classical gravity' as one dynamical hypothesis without specifying locality, Markovianity, mediator degrees of freedom and matter description."
      ],
      "doesNotEstablish": [
        "That the Aziz–Howl mechanism is experimentally realized.",
        "That a positive entanglement signal cannot provide evidence about gravity when competing channels and explicit classical alternatives are controlled.",
        "That every classical-hybrid alternative survives current experimental constraints."
      ],
      "sourceIds": [
        "aziz-howl-gravity-entanglement-2025",
        "trillo-navascues-dp-gie-2025",
        "angeli-carlesso-hybrid-entanglement-2025",
        "marchese-newton-gie-2025",
        "lin-mondal-newtonian-gie-2026",
        "gundhi-aziz-howl-2026",
        "schneider-classical-gie-2026",
        "feng-vedral-marletto-collapse-witness-2026",
        "di-biagio-gie-witness-2026"
      ],
      "sourceLocations": [
        {
          "sourceId": "aziz-howl-gravity-entanglement-2025",
          "locator": "Nature 646, 813–817 (2025), QFT-matter classical-gravity entanglement claim",
          "url": "https://doi.org/10.1038/s41586-025-09595-7"
        },
        {
          "sourceId": "trillo-navascues-dp-gie-2025",
          "locator": "Phys. Rev. D 111, L121101 (2025), DP model-specific entangling prediction",
          "url": "https://doi.org/10.1103/PhysRevD.111.L121101"
        },
        {
          "sourceId": "angeli-carlesso-hybrid-entanglement-2025",
          "locator": "Phys. Rev. D 112, 024047 (2025), Markovian hybrid entanglement analysis",
          "url": "https://doi.org/10.1103/jzht-fbwt"
        },
        {
          "sourceId": "marchese-newton-gie-2025",
          "locator": "Phys. Rev. A 111, 042202 (2025), Newton-law evolution reproducing GIE in the stated setup",
          "url": "https://doi.org/10.1103/PhysRevA.111.042202"
        },
        {
          "sourceId": "lin-mondal-newtonian-gie-2026",
          "locator": "Phys. Rev. D 113, L061901 (2026), comparison of minisuperspace, semiclassical and stochastic tidal models",
          "url": "https://doi.org/10.1103/fv38-kgkb"
        },
        {
          "sourceId": "gundhi-aziz-howl-2026",
          "locator": "arXiv:2604.19696, recalculation challenging the Aziz–Howl entanglement result",
          "url": "https://arxiv.org/abs/2604.19696"
        },
        {
          "sourceId": "schneider-classical-gie-2026",
          "locator": "Class. Quantum Grav. 43, 177001 (2026), Newton–Cartan mediator analysis",
          "url": "https://doi.org/10.1088/1361-6382/ae6f62"
        },
        {
          "sourceId": "feng-vedral-marletto-collapse-witness-2026",
          "locator": "Phys. Rev. D 113, 104055 (2026), collapse-model locality analysis",
          "url": "https://doi.org/10.1103/83rl-nygv"
        },
        {
          "sourceId": "di-biagio-gie-witness-2026",
          "locator": "Phys. Rev. D accepted 1 September 2026, review of the information-theoretic locality assumption",
          "url": "https://doi.org/10.1103/r8ry-sp35"
        }
      ],
      "reviewedAt": "2026-09-29",
      "evidenceStatus": "active model-dependent theoretical controversy"
    }
  ]
};
})();
