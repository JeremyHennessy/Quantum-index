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
      "title": "Classical-gravity models can generate matter entanglement",
      "date": "2025-10-22",
      "type": "theoretical constraint",
      "result": "A broader class of local classical-gravity models coupled to quantum field theory was shown capable of generating entanglement, narrowing the claim that observing gravity-mediated entanglement would by itself constitute model-independent proof that gravity is quantum.",
      "relatedTheoryIds": [
        "bmv-gravity-entanglement",
        "postquantum-classical-gravity"
      ],
      "relatedProblemIds": [
        "quantum-gravity"
      ],
      "relatedClaimIds": [],
      "constrains": [
        "Interpretations of gravity-mediated entanglement as a model-independent witness of quantized gravity."
      ],
      "doesNotEstablish": [
        "That gravity is classical.",
        "That every proposed gravity-entanglement experiment is uninformative.",
        "That a specific postquantum classical-gravity model describes nature."
      ],
      "sourceIds": [
        "aziz-howl-gravity-entanglement-2025"
      ],
      "sourceLocations": [
        {
          "sourceId": "aziz-howl-gravity-entanglement-2025",
          "locator": "Nature (2025), main theorem/result summarized by the publication",
          "url": "https://doi.org/10.1038/s41586-025-09595-7"
        }
      ],
      "reviewedAt": "2026-09-28",
      "evidenceStatus": "theoretical interpretation constraint"
    }
  ]
};
})();
