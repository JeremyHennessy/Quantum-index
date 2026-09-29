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
      "date": "2026-09-01",
      "type": "theoretical controversy",
      "result": "The literature no longer supports presenting gravitationally induced entanglement as an assumption-free binary test of quantized versus classical gravity. Explicit classical/hybrid countermodels predate the 2025 Aziz–Howl claim, the Diósi–Penrose model can generate entanglement in specified regimes, and several 2025–2026 analyses directly dispute Aziz and Howl's proposed classical-gravity entangling channel.",
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
        "Unqualified claims that every classical or hybrid gravity model is necessarily non-entangling."
      ],
      "doesNotEstablish": [
        "That gravity is fundamentally classical.",
        "That gravity-mediated entanglement experiments are uninformative.",
        "That all classical/hybrid models can generate entanglement.",
        "A single accepted resolution of the Aziz–Howl dispute."
      ],
      "sourceIds": [
        "hall-reginatto-classical-gravity-2018",
        "doner-grossardt-gie-2022",
        "trillo-navascues-dp-gie-2025",
        "aziz-howl-gravity-entanglement-2025",
        "marletto-oppenheim-vedral-wilson-2025",
        "lin-mondal-newtonian-entanglement-2026",
        "gundhi-infanti-bassi-2026",
        "vidal-iyer-matter-exchange-2026",
        "schneider-huggett-linnemann-2026"
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
        }
      ],
      "reviewedAt": "2026-09-29",
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
        "Markovian completely-positive classical–quantum gravity models whose measured decoherence, diffusion and back-reaction violate the applicable trade-off."
      ],
      "doesNotEstablish": [
        "That gravity is fundamentally quantum if one specific classical–quantum model is excluded.",
        "The same trade-off for unrestricted non-Markovian hybrid dynamics.",
        "That observing gravitational noise proves gravity is fundamentally classical."
      ],
      "sourceIds": [
        "oppenheim-decoherence-diffusion-2023"
      ],
      "sourceLocations": [
        {
          "sourceId": "oppenheim-decoherence-diffusion-2023",
          "locator": "Nature Communications 14, 7910 (2023), trade-off theorem and Eqs. (26)–(27)",
          "url": "https://doi.org/10.1038/s41467-023-43348-2"
        }
      ],
      "reviewedAt": "2026-09-29",
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
    }
  ]
};
})();
