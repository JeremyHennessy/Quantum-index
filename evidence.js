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
  "reviewedAt": "2026-09-28",
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
      "id": "ev-gravity-entanglement-boundary-2025",
      "title": "Gravity-mediated entanglement inference is model-dependent",
      "date": "2025-10-22",
      "type": "theoretical controversy",
      "result": "The 2025 Aziz–Howl calculation argues that QFT matter coupled through a classical gravitational background can acquire entanglement through virtual matter propagation. Multiple 2025–2026 analyses dispute that inference or recover no final entanglement for specified classical mediator models, while other classical-hybrid constructions independently predict entangling regimes. Feng, Vedral and Marletto preserve the locality-conditioned witness by identifying nonlocal features in collapse-based entangling models, while Di Biagio argues that the locality premise is information-theoretic rather than simply spatiotemporal and therefore GIE is not a theory-independent classifier. The literature therefore does not support a single undifferentiated rule that all classical-gravity models either can or cannot entangle. Earlier configuration-ensemble countermodels and their signaling limitations are represented separately; they do not invalidate a theorem whose locality premises they do not meet.",
      "relatedTheoryIds": [
        "bmv-gravity-entanglement",
        "postquantum-classical-gravity",
        "diosi-penrose",
        "stochastic-gravity",
        "configuration-ensemble-cq"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "relatedClaimIds": [],
      "constrains": [
        "Unqualified claims that observing probe entanglement alone proves that the gravitational mediator is quantized.",
        "Unqualified claims that every classical or hybrid gravity model is necessarily non-entangling.",
        "Model-independent interpretations of a gravity-mediated entanglement signal.",
        "Statements that treat 'classical gravity' as one dynamical hypothesis without specifying locality, Markovianity, mediator degrees of freedom and matter description."
      ],
      "doesNotEstablish": [
        "That gravity is fundamentally classical.",
        "That gravity-mediated entanglement experiments are uninformative.",
        "That all classical/hybrid models can generate entanglement.",
        "A single accepted resolution of the Aziz–Howl dispute.",
        "That the Aziz–Howl mechanism is experimentally realized.",
        "That a positive entanglement signal cannot provide evidence about gravity when competing channels and explicit classical alternatives are controlled.",
        "That every classical-hybrid alternative survives current experimental constraints."
      ],
      "sourceIds": [
        "hall-reginatto-classical-gravity-2018",
        "doner-grossardt-gie-2022",
        "trillo-navascues-dp-gie-2025",
        "marchese-newton-gie-2025",
        "aziz-howl-gravity-entanglement-2025",
        "marletto-oppenheim-vedral-wilson-2025",
        "lin-mondal-newtonian-entanglement-2026",
        "gundhi-infanti-bassi-2026",
        "vidal-iyer-matter-exchange-2026",
        "schneider-huggett-linnemann-2026",
        "feng-vedral-marletto-collapse-2026",
        "angeli-carlesso-hybrid-entanglement-2025",
        "di-biagio-gie-witness-2026"
      ],
      "sourceLocations": [
        {
          "sourceId": "hall-reginatto-classical-gravity-2018",
          "locator": "Abstract and explicit configuration-ensemble counterexample",
          "url": "https://doi.org/10.1088/1751-8121/aaa734"
        },
        {
          "sourceId": "trillo-navascues-dp-gie-2025",
          "locator": "Abstract and main result: Diósi–Penrose dynamics can generate GIE in a specified regime",
          "url": "https://doi.org/10.1103/PhysRevD.111.L121101"
        },
        {
          "sourceId": "aziz-howl-gravity-entanglement-2025",
          "locator": "Nature 646, 813–817 (2025), central QFT/classical-gravity claim",
          "url": "https://doi.org/10.1038/s41586-025-09595-7"
        },
        {
          "sourceId": "schneider-huggett-linnemann-2026",
          "locator": "Classical and Quantum Gravity (2026), Newton–Cartan analysis and conclusion",
          "url": "https://doi.org/10.1088/1361-6382/ae6f62"
        },
        {
          "sourceId": "feng-vedral-marletto-collapse-2026",
          "locator": "Phys. Rev. D 113, 104055 (2026), locality analysis of collapse-based gravity models",
          "url": "https://doi.org/10.1103/83rl-nygv"
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
          "sourceId": "lin-mondal-newtonian-entanglement-2026",
          "locator": "Phys. Rev. D 113, L061901 (2026), comparison of minisuperspace, semiclassical and stochastic tidal models",
          "url": "https://doi.org/10.1103/fv38-kgkb"
        },
        {
          "sourceId": "gundhi-infanti-bassi-2026",
          "locator": "arXiv:2604.19696, recalculation challenging the Aziz–Howl entanglement result",
          "url": "https://arxiv.org/abs/2604.19696"
        },
        {
          "sourceId": "di-biagio-gie-witness-2026",
          "locator": "Phys. Rev. D accepted 1 September 2026, review of the information-theoretic locality assumption",
          "url": "https://doi.org/10.1103/r8ry-sp35"
        }
      ],
      "reviewedAt": "2026-10-07",
      "evidenceStatus": "active theoretical controversy"
    },
    {
      "id": "ev-cq-decoherence-diffusion-2023",
      "title": "Markovian classical–quantum dynamics require a decoherence–diffusion trade-off",
      "date": "2023-12-04",
      "type": "theoretical constraint",
      "result": "Oppenheim and collaborators prove that Markovian completely-positive dynamics coupling classical and quantum degrees of freedom necessarily links quantum decoherence to diffusion in the classical phase space, with the interaction/back-reaction strength entering the bound. Applied to gravity, this supplies an experimentally testable signature of that model class.",
      "relatedTheoryIds": [
        "postquantum-classical-gravity",
        "open-quantum-systems",
        "stochastic-gravity"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "relatedClaimIds": [],
      "constrains": [
        "Markovian completely-positive classical–quantum gravity models whose measured decoherence, diffusion and back-reaction violate the applicable trade-off.",
        "Time-local/Markovian completely-positive classical–quantum gravity models with nontrivial back-reaction.",
        "Attempts to suppress both gravitationally induced decoherence and classical metric/force diffusion while retaining the stated coupling."
      ],
      "doesNotEstablish": [
        "That gravity is fundamentally quantum if one specific classical–quantum model is excluded.",
        "The same trade-off for unrestricted non-Markovian hybrid dynamics.",
        "That observing gravitational noise proves gravity is fundamentally classical.",
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
          "locator": "arXiv:2203.01982v1, Eqs. (19)–(21), (24)–(26), with the stated back-reaction restriction",
          "url": "https://arxiv.org/abs/2203.01982v1"
        },
        {
          "sourceId": "layton-weak-field-cq-2023",
          "locator": "arXiv:2307.02557v1, Eqs. (54)–(55), and the non-Markovian boundary in the discussion",
          "url": "https://arxiv.org/abs/2307.02557v1"
        }
      ],
      "reviewedAt": "2026-10-07",
      "evidenceStatus": "model-class theoretical constraint"
    },
    {
      "id": "ev-classical-gravity-cross-correlation-2025",
      "title": "Cross-correlation signature for a Newtonian classical-gravity model",
      "date": "2025-02-12",
      "type": "theoretical experimental discriminator",
      "result": "Kryhin and Sudhir derive a characteristic phase response in the cross-correlation of coherently moving source masses for a consistent Newtonian classical–quantum gravity model, proposing an observable that distinguishes that model from quantum gravity and from simple environmental decoherence.",
      "relatedTheoryIds": [
        "postquantum-classical-gravity",
        "open-quantum-systems"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "relatedClaimIds": [],
      "constrains": [
        "The specific Newtonian classical–quantum dynamics analyzed when the predicted cross-correlation phase/noise structure is absent."
      ],
      "doesNotEstablish": [
        "A universal signature shared by every conceivable classical-gravity model.",
        "That an observed cross-correlation by itself identifies gravity as fundamentally classical."
      ],
      "sourceIds": [
        "kryhin-sudhir-classical-gravity-2025"
      ],
      "sourceLocations": [
        {
          "sourceId": "kryhin-sudhir-classical-gravity-2025",
          "locator": "Phys. Rev. Lett. 134, 061501 (2025), abstract and predicted cross-correlation phase response",
          "url": "https://doi.org/10.1103/PhysRevLett.134.061501"
        }
      ],
      "reviewedAt": "2026-09-29",
      "evidenceStatus": "model-specific proposed discriminator"
    },
    {
      "id": "ev-minimal-noise-nonquantized-gravity-2026",
      "title": "Minimum-noise bound for a broad non-entangling Newtonian model class",
      "date": "2026-03-27",
      "type": "theoretical constraint",
      "result": "Fabiano, Fujita, Matsumura and Carney classify a broad time-local, Galilean-invariant set of non-quantized Newtonian interactions that reproduce Newton's force on average and show that any member of that class that remains non-entangling must inject a quantifiable minimum amount of irreversible noise. Noise measured below the relevant threshold would demonstrate that the Newtonian interaction is entangling under those assumptions.",
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
        "Time-local, Galilean-invariant, Newtonian-average non-quantized models that are required to remain non-entangling."
      ],
      "doesNotEstablish": [
        "That every non-quantized gravity model is non-entangling.",
        "A fully relativistic no-go theorem.",
        "A unique microscopic quantum-gravity theory if the noise bound is beaten."
      ],
      "sourceIds": [
        "fabiano-minimal-noise-2026"
      ],
      "sourceLocations": [
        {
          "sourceId": "fabiano-minimal-noise-2026",
          "locator": "arXiv:2603.26075v2, abstract and general classification/minimum-noise result",
          "url": "https://arxiv.org/abs/2603.26075"
        }
      ],
      "reviewedAt": "2026-09-29",
      "evidenceStatus": "preprint theoretical bound"
    },
    {
      "id": "ev-indirect-gme-interferometry-2026",
      "title": "Existing matter-wave interferometry can imply GME under stated assumptions",
      "date": "2026-04-02",
      "type": "theoretical experimental inference",
      "result": "Plávala proves that if the Schrödinger evolution of a single delocalized system interacting gravitationally with an external mass is experimentally verified, then under either of two explicit assumptions the corresponding two-delocalized-system dynamics generates gravity-mediated entanglement. The result reframes some existing interferometry as indirect evidence about an entangling gravitational interaction rather than a direct two-mass GME observation.",
      "relatedTheoryIds": [
        "bmv-gravity-entanglement"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "relatedClaimIds": [],
      "constrains": [
        "Models incompatible with the verified single-particle Schrödinger gravitational dynamics plus the paper's stated extension assumptions."
      ],
      "doesNotEstablish": [
        "A direct experimental observation of entanglement between two gravitating masses.",
        "An assumption-free inference that the gravitational field is fundamentally quantum.",
        "A unique microscopic quantum-gravity theory."
      ],
      "sourceIds": [
        "plavala-indirect-gme-2026"
      ],
      "sourceLocations": [
        {
          "sourceId": "plavala-indirect-gme-2026",
          "locator": "Phys. Rev. D 113, 085004 (2026), abstract and conclusions; corrected 11 September 2026",
          "url": "https://doi.org/10.1103/87dc-qt73"
        }
      ],
      "reviewedAt": "2026-09-29",
      "evidenceStatus": "peer-reviewed conditional inference"
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
        "feng-vedral-marletto-collapse-2026"
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
          "sourceId": "feng-vedral-marletto-collapse-2026",
          "locator": "Phys. Rev. D 113, 104055 (2026), locality analysis of collapse-based entangling models",
          "url": "https://doi.org/10.1103/83rl-nygv"
        }
      ],
      "reviewedAt": "2026-10-07",
      "evidenceStatus": "model-specific entangling prediction"
    },
    {
      "id": "ev-cq-geodesic-deviation-2026",
      "title": "Geodesic-deviation strain spectrum proposed for classical–quantum gravity",
      "date": "2026-07-08",
      "type": "theoretical experimental discriminator",
      "result": "Hirotani and Matsumura derive geodesic-deviation strain spectra for the original Oppenheim classical–quantum gravity model and two related variants, and report that the original model can be tested at current gravitational-wave observational sensitivity in their analysis.",
      "relatedTheoryIds": [
        "postquantum-classical-gravity",
        "stochastic-gravity"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "relatedClaimIds": [],
      "constrains": [
        "The analyzed Oppenheim-type and related classical–quantum gravity models through their predicted strain spectra."
      ],
      "doesNotEstablish": [
        "That a null result excludes every classical–quantum gravity theory.",
        "That agreement with one strain spectrum proves the mediator is fundamentally classical.",
        "A direct observation of quantum gravity."
      ],
      "sourceIds": [
        "hirotani-matsumura-geodesic-2026"
      ],
      "sourceLocations": [
        {
          "sourceId": "hirotani-matsumura-geodesic-2026",
          "locator": "Phys. Rev. D 114, 026014 (2026), abstract and strain-spectrum comparison",
          "url": "https://doi.org/10.1103/fx1h-97sx"
        }
      ],
      "reviewedAt": "2026-09-29",
      "evidenceStatus": "peer-reviewed model-specific proposed test"
    }
  ]
};
})();


// 2026-10-08 multidomain depth sources and empirical constraints.
for (const source of [
  {
    "id": "greiner-mott-2002",
    "title": "Quantum phase transition from a superfluid to a Mott insulator in a gas of ultracold atoms",
    "authors": "Markus Greiner, Olaf Mandel, Tilman Esslinger, Theodor W. Hänsch, Immanuel Bloch",
    "year": 2002,
    "type": "primary experimental paper",
    "url": "https://doi.org/10.1038/415039a"
  },
  {
    "id": "brune-rabi-1996",
    "title": "Quantum Rabi Oscillation: A Direct Test of Field Quantization in a Cavity",
    "authors": "M. Brune, F. Schmidt-Kaler, A. Maali, J. Dreyer, E. Hagley, J. M. Raimond, S. Haroche",
    "year": 1996,
    "type": "primary experimental paper",
    "url": "https://doi.org/10.1103/PhysRevLett.76.1800"
  },
  {
    "id": "pdg-neutrino-mixing-2026",
    "title": "Neutrino Masses, Mixing, and Oscillations (Review of Particle Physics 2026)",
    "authors": "M.C. Gonzalez-Garcia, R. Wendell; Particle Data Group",
    "year": 2026,
    "type": "authoritative review",
    "url": "https://pdg.lbl.gov/2026/reviews/rpp2026-rev-neutrino-mixing.pdf"
  },
  {
    "id": "kozak-wojnar-scalar-tensor-2021",
    "title": "Invariant quantities of scalar–tensor theories for stellar structure",
    "authors": "Aleksander Kozak, Aneta Wojnar",
    "year": 2021,
    "type": "peer-reviewed theoretical paper",
    "url": "https://doi.org/10.1140/epjc/s10052-021-09277-4"
  },
  {
    "id": "bertotti-cassini-2003",
    "title": "A test of general relativity using radio links with the Cassini spacecraft",
    "authors": "B. Bertotti, L. Iess, P. Tortora",
    "year": 2003,
    "type": "primary experimental paper",
    "url": "https://doi.org/10.1038/nature01997"
  },
  {
    "id": "fienga-minazzoli-gravity-tests-2024",
    "title": "Testing theories of gravity with planetary ephemerides",
    "authors": "Agnès Fienga, Olivier Minazzoli",
    "year": 2024,
    "type": "authoritative review",
    "url": "https://doi.org/10.1007/s41114-023-00047-0"
  }
]) {
  if (!window.QI_DATA.sources.some(existing => existing.id === source.id)) window.QI_DATA.sources.push(source);
}
window.QI_EVIDENCE.records.push(...[
  {
    "id": "ev-bose-mott-transition-2002",
    "title": "Optical-lattice superfluid–Mott-insulator transition",
    "date": "2002-01-03",
    "type": "experimental result",
    "result": "An ultracold repulsive Bose gas in a three-dimensional optical lattice was driven reversibly from a phase-coherent superfluid regime into a Mott-insulating regime with integer site occupation, suppressed long-range phase coherence and a measured excitation gap.",
    "relatedTheoryIds": [
      "bose-hubbard",
      "optical-lattice-quantum-simulation"
    ],
    "relatedProblemIds": [],
    "relatedClaimIds": [],
    "constrains": [
      "Descriptions of the lattice gas that do not accommodate interaction-driven number localization and loss of phase coherence in the explored regime."
    ],
    "doesNotEstablish": [
      "That every optical-lattice realization is described exactly by the single-band Bose–Hubbard Hamiltonian.",
      "Universal critical behavior in all dimensions, fillings or trap geometries."
    ],
    "sourceIds": [
      "greiner-mott-2002"
    ],
    "sourceLocations": [
      {
        "sourceId": "greiner-mott-2002",
        "locator": "Nature 415, 39–44 (2002), abstract and superfluid-to-Mott transition result",
        "url": "https://doi.org/10.1038/415039a"
      }
    ],
    "reviewedAt": "2026-10-08",
    "evidenceStatus": "observed many-body quantum phase transition"
  },
  {
    "id": "ev-cavity-rabi-1996",
    "title": "Cavity quantum Rabi oscillation with discrete photon-number components",
    "date": "1996-03-11",
    "type": "experimental result",
    "result": "Circular Rydberg atoms interacting with vacuum and weak coherent fields in a high-Q cavity exhibited Rabi-oscillation Fourier components whose frequencies scaled with square roots of successive photon numbers, providing direct evidence of field quantization in the cavity.",
    "relatedTheoryIds": [
      "jaynes-cummings",
      "cavity-qed"
    ],
    "relatedProblemIds": [],
    "relatedClaimIds": [],
    "constrains": [
      "Semiclassical descriptions that cannot reproduce the observed discrete photon-number-dependent Rabi frequencies in the tested cavity regime."
    ],
    "doesNotEstablish": [
      "That the ideal lossless Jaynes–Cummings Hamiltonian is exact at arbitrary coupling, detuning or damping.",
      "That all cavity-QED implementations share the same two-level and single-mode approximations."
    ],
    "sourceIds": [
      "brune-rabi-1996"
    ],
    "sourceLocations": [
      {
        "sourceId": "brune-rabi-1996",
        "locator": "Phys. Rev. Lett. 76, 1800 (1996), abstract and photon-number-resolved Rabi-oscillation result",
        "url": "https://doi.org/10.1103/PhysRevLett.76.1800"
      }
    ],
    "reviewedAt": "2026-10-08",
    "evidenceStatus": "observed cavity-field quantization signature"
  },
  {
    "id": "ev-cassini-ppn-2003",
    "title": "Cassini solar-conjunction constraint on the PPN light-propagation parameter",
    "date": "2003-09-25",
    "type": "experimental constraint",
    "result": "Radio links to the Cassini spacecraft during solar conjunction measured the post-Newtonian light-propagation parameter as gamma = 1 + (2.1 ± 2.3) × 10^-5, consistent with general relativity. In the constant-omega massless Brans–Dicke mapping reviewed in the planetary-ephemeris literature, this strongly constrains small omega values.",
    "relatedTheoryIds": [
      "brans-dicke"
    ],
    "relatedProblemIds": [],
    "relatedClaimIds": [],
    "constrains": [
      "Constant-parameter massless Brans–Dicke models through their PPN gamma prediction under the stated mapping and solar-system assumptions."
    ],
    "doesNotEstablish": [
      "That every scalar–tensor theory is excluded.",
      "That constraints inferred through a PPN mapping replace a direct fit of each alternative theory to the full planetary data set.",
      "That scalar fields could not have different behavior in cosmological or screened regimes."
    ],
    "sourceIds": [
      "bertotti-cassini-2003",
      "fienga-minazzoli-gravity-tests-2024"
    ],
    "sourceLocations": [
      {
        "sourceId": "bertotti-cassini-2003",
        "locator": "Nature 425, 374–376 (2003), abstract; gamma measurement from solar-conjunction radio links",
        "url": "https://doi.org/10.1038/nature01997"
      },
      {
        "sourceId": "fienga-minazzoli-gravity-tests-2024",
        "locator": "Living Rev. Relativity 27, 1 (2024), scalar–tensor/PPN discussion and caution on translating fitted PPN bounds into theory constraints",
        "url": "https://doi.org/10.1007/s41114-023-00047-0"
      }
    ],
    "reviewedAt": "2026-10-08",
    "evidenceStatus": "solar-system parameter constraint"
  }
]);

// 2026-10-21 source-qualified completion campaign.
window.QI_EVIDENCE.records.push(...[
  {
    "id": "ev-planck-inflation-2018",
    "title": "Planck 2018 primordial-spectrum constraints",
    "date": "2018-07-17",
    "type": "observational constraint",
    "result": "Planck temperature, polarization and lensing analysis finds scalar spectral index n_s = 0.9649 ± 0.0042 (68% confidence) within its fitted cosmological model.",
    "relatedTheoryIds": [
      "inflationary-cosmology",
      "inflationary-fluctuations",
      "starobinsky-inflation"
    ],
    "relatedProblemIds": [
      "inflation-mechanism",
      "primordial-quantum-classical"
    ],
    "relatedClaimIds": [],
    "constrains": [
      "The primordial scalar spectrum and allowed inflationary parameter regions, conditional on the specified likelihood and cosmological assumptions."
    ],
    "doesNotEstablish": [
      "Identification of the inflaton, its potential or initial state.",
      "A direct observation of primordial quantum coherence or proof of a measurement interpretation."
    ],
    "sourceIds": [
      "planck-inflation-2018"
    ],
    "sourceLocations": [
      {
        "sourceId": "planck-inflation-2018",
        "locator": "Planck 2018 X, abstract; Sections 3–4 and conclusions; n_s from Planck TT,TE,EE+lowE+lensing.",
        "url": "https://arxiv.org/abs/1807.06211"
      }
    ],
    "reviewedAt": "2026-10-21",
    "evidenceStatus": "model-dependent observational constraint"
  },
  {
    "id": "ev-bicep-keck-bk18-2021",
    "title": "BK18 primordial tensor upper limit",
    "date": "2021-10-01",
    "type": "observational constraint",
    "result": "BICEP/Keck data through 2018, combined with WMAP and Planck frequency maps, give r_0.05 < 0.036 at 95% confidence under the fitted lensed-Lambda-CDM plus tensors and foreground model.",
    "relatedTheoryIds": [
      "inflationary-cosmology",
      "inflationary-fluctuations",
      "starobinsky-inflation"
    ],
    "relatedProblemIds": [
      "inflation-mechanism"
    ],
    "relatedClaimIds": [],
    "constrains": [
      "Tensor-to-scalar power ratio at pivot k = 0.05 Mpc^-1 with dust and synchrotron marginalization."
    ],
    "doesNotEstablish": [
      "A detection of primordial gravitational waves.",
      "Exclusion of inflation as a whole; smaller tensor amplitudes remain possible."
    ],
    "sourceIds": [
      "bicep-keck-bk18-2021"
    ],
    "sourceLocations": [
      {
        "sourceId": "bicep-keck-bk18-2021",
        "locator": "Abstract and main parameter-constraint result, Phys. Rev. Lett. 127, 151301 (2021).",
        "url": "https://arxiv.org/abs/2110.00483"
      }
    ],
    "reviewedAt": "2026-10-21",
    "evidenceStatus": "upper limit, not detection"
  },
  {
    "id": "ev-primordial-deuterium-2018",
    "title": "Primordial deuterium abundance and BBN consistency",
    "date": "2018-03-26",
    "type": "observational result",
    "result": "Seven high-precision absorption-system measurements yield primordial D/H = (2.527 ± 0.030) × 10^-5. Converting this abundance into a baryon density requires a BBN reaction network and nuclear rates.",
    "relatedTheoryIds": [
      "lambda-cdm",
      "sakharov-baryogenesis"
    ],
    "relatedProblemIds": [
      "baryon-asymmetry",
      "dark-matter"
    ],
    "relatedClaimIds": [],
    "constrains": [
      "Primordial baryon density and early thermal history under standard nucleosynthesis assumptions."
    ],
    "doesNotEstablish": [
      "Which baryogenesis mechanism produced the baryon excess.",
      "Resolution of the lithium-abundance discrepancy or identification of dark matter."
    ],
    "sourceIds": [
      "cooke-deuterium-2018"
    ],
    "sourceLocations": [
      {
        "sourceId": "cooke-deuterium-2018",
        "locator": "Abstract, precision-sample combined abundance; arXiv:1710.11129v3, published ApJ 855, 102.",
        "url": "https://arxiv.org/abs/1710.11129v3"
      }
    ],
    "reviewedAt": "2026-10-21",
    "evidenceStatus": "abundance measurement with model-dependent BBN inference"
  },
  {
    "id": "ev-katrin-mass-2025",
    "title": "KATRIN direct neutrino-mass upper limit",
    "date": "2025-04-10",
    "type": "experimental constraint",
    "result": "The 259-day KATRIN tritium-endpoint analysis reports an effective electron-antineutrino mass below 0.45 eV at 90% confidence.",
    "relatedTheoryIds": [
      "neutrino-mixing",
      "seesaw-mechanism"
    ],
    "relatedProblemIds": [],
    "relatedClaimIds": [],
    "constrains": [
      "The beta-decay effective mass under the fitted endpoint spectrum, backgrounds and systematic uncertainties."
    ],
    "doesNotEstablish": [
      "The cosmological sum of neutrino masses, a mass ordering, or a Majorana nature.",
      "Exclusion of all sterile-neutrino dark-matter models or proof of leptogenesis."
    ],
    "sourceIds": [
      "katrin-mass-2025"
    ],
    "sourceLocations": [
      {
        "sourceId": "katrin-mass-2025",
        "locator": "Abstract and reported mass bound, Science 388, 180–185 (2025); arXiv:2406.13516. Date field is the journal online-publication date; first preprint was 2024-06-19.",
        "url": "https://arxiv.org/abs/2406.13516"
      }
    ],
    "reviewedAt": "2026-10-21",
    "evidenceStatus": "upper limit, not mass detection"
  },
  {
    "id": "ev-planck-bao-neutrino-mass-2018",
    "title": "Planck plus BAO neutrino-mass constraint",
    "date": "2018-07-17",
    "type": "observational constraint",
    "result": "Planck TT,TE,EE+lowE+lensing+BAO yields sum m_nu < 0.12 eV (95% confidence) in its Lambda-CDM plus neutrino-mass analysis.",
    "relatedTheoryIds": [
      "lambda-cdm",
      "neutrino-mixing"
    ],
    "relatedProblemIds": [
      "dark-matter"
    ],
    "relatedClaimIds": [],
    "constrains": [
      "The sum of three active-neutrino masses under the analysis model, datasets and parameter priors.",
      "The calculation uses degenerate masses, a Fermi–Dirac distribution and zero chemical potential."
    ],
    "doesNotEstablish": [
      "A direct laboratory mass measurement or a model-independent cosmological bound.",
      "Exclusion of every nonstandard neutrino population or proof of the mass ordering."
    ],
    "sourceIds": [
      "planck-cosmology-2020"
    ],
    "sourceLocations": [
      {
        "sourceId": "planck-cosmology-2020",
        "locator": "Planck 2018 VI, Section 7.5.1, HTML Eq. (61b), corresponding to v4 PDF Eq. (63b), PDF p. 48; statistical/parameter conventions in Section 2.1. Published A&A 641 A6 (2020).",
        "url": "https://arxiv.org/html/1807.06209v4#S7.SS5.SSS1"
      }
    ],
    "reviewedAt": "2026-10-21",
    "evidenceStatus": "model-dependent upper limit"
  }
]);
(()=>{const row=window.QI_EVIDENCE.records.find(r=>r.id==="ev-desi-dr2-2025");if(!row)throw new Error("Missing patched record");for(const [key,values] of Object.entries({
  "relatedProblemIds": [
    "dark-energy-expansion"
  ]
}))row[key]=[...new Set([...(row[key]||[]),...values])];})();
