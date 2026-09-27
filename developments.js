window.QI_DEVELOPMENTS = (() => {
  const extraSources = [
    {
      id:"desi-y1-cosmology-2024",
      title:"DESI 2024 VI: Cosmological Constraints from the Measurements of Baryon Acoustic Oscillations",
      authors:"DESI Collaboration",
      year:2024,
      type:"primary collaboration paper",
      url:"https://arxiv.org/abs/2404.03002"
    },
    {
      id:"atlas-top-entanglement-2024",
      title:"Observation of quantum entanglement with top quarks at the ATLAS detector",
      authors:"ATLAS Collaboration",
      year:2024,
      type:"primary experimental paper",
      url:"https://doi.org/10.1038/s41586-024-07824-z"
    },
    {
      id:"okada-tachikawa-noninvertible-2024",
      title:"Noninvertible Symmetries Act Locally by Quantum Operations",
      authors:"Masaki Okada, Yuji Tachikawa",
      year:2024,
      type:"primary source",
      url:"https://doi.org/10.1103/PhysRevLett.133.191602"
    },
    {
      id:"google-surface-qec-2024",
      title:"Quantum error correction below the surface code threshold",
      authors:"Google Quantum AI and Collaborators",
      year:2024,
      type:"primary experimental paper",
      url:"https://doi.org/10.1038/s41586-024-08449-y"
    },
    {
      id:"desi-dr2-cosmology-2025",
      title:"DESI DR2 Results II: Measurements of Baryon Acoustic Oscillations and Cosmological Constraints",
      authors:"DESI Collaboration",
      year:2025,
      type:"primary collaboration paper",
      url:"https://arxiv.org/abs/2503.14738"
    },
    {
      id:"pizzi-scars-2025",
      title:"Genuine quantum scars in many-body spin systems",
      authors:"Andrea Pizzi et al.",
      year:2025,
      type:"primary source",
      url:"https://doi.org/10.1038/s41467-025-61765-3"
    },
    {
      id:"aziz-howl-gravity-entanglement-2025",
      title:"Classical theories of gravity produce entanglement",
      authors:"Joseph Aziz, Richard Howl",
      year:2025,
      type:"primary source",
      url:"https://doi.org/10.1038/s41586-025-09595-7"
    },
    {
      id:"desi-dr2-lya-2026",
      title:"DESI DR2 Results IV: Alcock-Paczynski Measurements from the Lyman Alpha Forest and Cosmological Constraints",
      authors:"DESI Collaboration",
      year:2026,
      type:"primary collaboration paper",
      url:"https://arxiv.org/abs/2607.27410"
    },
    {
      id:"desi-dr2-lya-release-2026",
      title:"New DESI DR2 Lyman-alpha Results Shed Light on Dark Energy",
      authors:"DESI Collaboration",
      year:2026,
      type:"official collaboration release",
      url:"https://www.desi.lbl.gov/2026/07/30/new-desi-dr2-lyman-alpha-results-shed-light-on-dark-energy/"
    },
    {
      id:"lz-extended-window-2026",
      title:"Search for dark matter particle interactions in an extended nuclear recoil energy window with the LUX-ZEPLIN (LZ) experiment",
      authors:"LUX-ZEPLIN (LZ) Collaboration",
      year:2026,
      type:"primary collaboration preprint",
      url:"https://arxiv.org/abs/2609.02823"
    }
  ];
  const existingSources = new Set(window.QI_DATA.sources.map(source=>source.id));
  for (const source of extraSources) if (!existingSources.has(source.id)) window.QI_DATA.sources.push(source);

  const eventTypes = [
    "framework introduced",
    "theorem/result",
    "mathematical development",
    "experimental result",
    "observational result",
    "exclusion/constraint",
    "major review/synthesis",
    "new formal connection",
    "new computational method",
    "reinterpretation",
    "controversy/debate",
    "open-problem milestone"
  ];

  const events = [
    {
      id:"desi-y1-bao-cosmology-2024",
      title:"DESI Year 1 BAO cosmology results",
      date:"2024-04-03",
      year:2024,
      eventType:"observational result",
      summary:"DESI's first-year BAO analysis was consistent with flat ΛCDM when used alone, while combinations with CMB and supernova data showed dataset-dependent preferences for time-varying dark-energy models.",
      relatedTheoryIds:["lambda-cdm","quintessence","phantom-dark-energy"],
      relatedProblemIds:[],
      relatedFormulaIds:[],
      relatedEvidenceIds:[],
      sourceIds:["desi-y1-cosmology-2024"],
      sourceLocations:[{
        sourceId:"desi-y1-cosmology-2024",
        locator:"Abstract and cosmological-constraint summary; first submitted 3 April 2024",
        url:"https://arxiv.org/abs/2404.03002"
      }],
      significance:"A major new precision-cosmology dataset tightened expansion-history constraints while producing model- and dataset-dependent tension with a cosmological constant.",
      evidenceStatus:"primary collaboration analysis",
      reviewedAt:"2026-09-27"
    },
    {
      id:"atlas-top-entanglement-2024",
      title:"ATLAS observes entanglement in top-quark pairs",
      date:"2024-09-18",
      year:2024,
      eventType:"experimental result",
      summary:"ATLAS reported spin entanglement in top–antitop events at 13 TeV, with the measured entanglement marker more than five standard deviations from a no-entanglement scenario.",
      relatedTheoryIds:["quantum-information","qcd","standard-model"],
      relatedProblemIds:[],
      relatedFormulaIds:[],
      relatedEvidenceIds:[],
      sourceIds:["atlas-top-entanglement-2024"],
      sourceLocations:[{
        sourceId:"atlas-top-entanglement-2024",
        locator:"Abstract; Nature 633, 542–547 (2024)",
        url:"https://doi.org/10.1038/s41586-024-07824-z"
      }],
      significance:"The result extended experimentally observed quantum entanglement to quark pairs at the highest energy scale reported at the time.",
      evidenceStatus:"peer-reviewed experimental result",
      reviewedAt:"2026-09-27"
    },
    {
      id:"noninvertible-quantum-operations-2024",
      title:"Noninvertible symmetries linked to quantum operations",
      date:"2024-11-06",
      year:2024,
      eventType:"new formal connection",
      summary:"Okada and Tachikawa showed that noninvertible symmetries act on local operators through completely positive maps, connecting a modern symmetry framework in QFT and many-body physics to quantum-information operations.",
      relatedTheoryIds:["conformal-field-theory","quantum-information"],
      relatedProblemIds:[],
      relatedFormulaIds:[],
      relatedEvidenceIds:[],
      sourceIds:["okada-tachikawa-noninvertible-2024"],
      sourceLocations:[{
        sourceId:"okada-tachikawa-noninvertible-2024",
        locator:"Abstract; Phys. Rev. Lett. 133, 191602",
        url:"https://doi.org/10.1103/PhysRevLett.133.191602"
      }],
      significance:"A source-backed formal bridge between noninvertible-symmetry actions and completely positive quantum operations.",
      evidenceStatus:"peer-reviewed theoretical result",
      reviewedAt:"2026-09-27"
    },
    {
      id:"surface-code-below-threshold-2024",
      title:"Below-threshold surface-code quantum error correction",
      date:"2024-12-09",
      year:2024,
      eventType:"experimental result",
      summary:"Google Quantum AI reported distance-5 and distance-7 surface-code memories operating below threshold, with logical errors suppressed as code distance increased and real-time decoding demonstrated.",
      relatedTheoryIds:["surface-code","quantum-error-correction"],
      relatedProblemIds:[],
      relatedFormulaIds:["knill-laflamme","surface-star","surface-plaquette"],
      relatedEvidenceIds:[],
      sourceIds:["google-surface-qec-2024"],
      sourceLocations:[{
        sourceId:"google-surface-qec-2024",
        locator:"Abstract; published online 9 December 2024",
        url:"https://doi.org/10.1038/s41586-024-08449-y"
      }],
      significance:"A milestone demonstration of increasing logical protection with increasing surface-code distance below the error-correction threshold.",
      evidenceStatus:"peer-reviewed experimental result",
      reviewedAt:"2026-09-27"
    },
    {
      id:"desi-dr2-bao-cosmology-2025",
      title:"DESI DR2 sharpens dark-energy model comparisons",
      date:"2025-03-18",
      year:2025,
      eventType:"observational result",
      summary:"DESI's three-year DR2 BAO analysis remained well described by flat ΛCDM, while combinations with CMB and supernova data favored a time-evolving dark-energy parameterization at significance levels that depended on the external dataset.",
      relatedTheoryIds:["lambda-cdm","quintessence","phantom-dark-energy"],
      relatedProblemIds:[],
      relatedFormulaIds:[],
      relatedEvidenceIds:[],
      sourceIds:["desi-dr2-cosmology-2025"],
      sourceLocations:[{
        sourceId:"desi-dr2-cosmology-2025",
        locator:"Abstract; arXiv v1 submitted 18 March 2025",
        url:"https://arxiv.org/abs/2503.14738"
      }],
      significance:"A higher-statistics cosmological comparison that strengthened interest in dynamical dark energy without constituting a model-independent discovery.",
      evidenceStatus:"primary collaboration analysis",
      reviewedAt:"2026-09-27"
    },
    {
      id:"many-body-scars-2025",
      title:"Quantum scarring generalized across many-body spin systems",
      date:"2025-07-21",
      year:2025,
      eventType:"theorem/result",
      summary:"Pizzi and collaborators found exponentially many scarred eigenstates across a broad family of spin models even when eigenstates are thermal and the eigenstate thermalization hypothesis is fulfilled.",
      relatedTheoryIds:["quantum-many-body-scars","eigenstate-thermalization","quantum-chaos"],
      relatedProblemIds:[],
      relatedFormulaIds:["eth-ansatz"],
      relatedEvidenceIds:[],
      sourceIds:["pizzi-scars-2025"],
      sourceLocations:[{
        sourceId:"pizzi-scars-2025",
        locator:"Abstract and introduction; Nature Communications 16, 6722 (2025)",
        url:"https://doi.org/10.1038/s41467-025-61765-3"
      }],
      significance:"The work broadened the notion of many-body scarring beyond rare nonthermal eigenstates and clarified that scarring can coexist with ETH.",
      evidenceStatus:"peer-reviewed theoretical result",
      reviewedAt:"2026-09-27"
    },
    {
      id:"classical-gravity-entanglement-2025",
      title:"Local classical-gravity models shown capable of generating entanglement with QFT matter",
      date:"2025-10-22",
      year:2025,
      eventType:"theorem/result",
      summary:"Aziz and Howl showed that when matter is treated using quantum field theory, local theories with classical gravity can transmit quantum information and generate entanglement through physical local processes.",
      relatedTheoryIds:["bmv-gravity-entanglement","postquantum-classical-gravity"],
      relatedProblemIds:[],
      relatedFormulaIds:[],
      relatedEvidenceIds:[],
      sourceIds:["aziz-howl-gravity-entanglement-2025"],
      sourceLocations:[{
        sourceId:"aziz-howl-gravity-entanglement-2025",
        locator:"Abstract and main discussion of QFT matter; Nature 646, 813–817 (2025)",
        url:"https://doi.org/10.1038/s41586-025-09595-7"
      }],
      significance:"The result narrows what a gravity-mediated entanglement experiment can establish unless assumptions about classical communication and matter are specified.",
      evidenceStatus:"peer-reviewed theoretical result",
      reviewedAt:"2026-09-27"
    },
    {
      id:"desi-lya-fullshape-2026",
      title:"DESI DR2 Lyman-alpha full-shape analysis tightens high-redshift cosmology",
      date:"2026-07-30",
      year:2026,
      eventType:"observational result",
      summary:"DESI's DR2 Lyman-alpha full-shape analysis achieved its tightest Lyman-alpha cosmological constraints to date. The new central value shifted toward ΛCDM, while combined DESI+CMB and supernova fits still retained model-dependent preference for evolving dark energy.",
      relatedTheoryIds:["lambda-cdm","quintessence","phantom-dark-energy"],
      relatedProblemIds:[],
      relatedFormulaIds:[],
      relatedEvidenceIds:[],
      sourceIds:["desi-dr2-lya-2026","desi-dr2-lya-release-2026"],
      sourceLocations:[
        {
          sourceId:"desi-dr2-lya-2026",
          locator:"Abstract; DESI DR2 Results IV cosmological constraints",
          url:"https://arxiv.org/abs/2607.27410"
        },
        {
          sourceId:"desi-dr2-lya-release-2026",
          locator:"Results section; collaboration release dated 30 July 2026",
          url:"https://www.desi.lbl.gov/2026/07/30/new-desi-dr2-lyman-alpha-results-shed-light-on-dark-energy/"
        }
      ],
      significance:"A precision update that moved one important high-redshift probe toward ΛCDM while leaving the broader dynamical-dark-energy question dependent on combined datasets and model assumptions.",
      evidenceStatus:"collaboration release and primary analysis",
      reviewedAt:"2026-09-27"
    },
    {
      id:"lz-extended-window-2026",
      title:"LZ reports a 2.6σ global excess in an extended recoil search",
      date:"2026-09-02",
      year:2026,
      eventType:"experimental result",
      summary:"LZ reported one high-energy nuclear-recoil-like event in a low-background region. Across the tested dark-matter models the background-only tension was 2.6σ globally after look-elsewhere effects, with a maximum local significance of 3.4σ.",
      relatedTheoryIds:["wimp-dark-matter"],
      relatedProblemIds:[],
      relatedFormulaIds:[],
      relatedEvidenceIds:[],
      sourceIds:["lz-extended-window-2026"],
      sourceLocations:[{
        sourceId:"lz-extended-window-2026",
        locator:"Abstract; arXiv v1 dated 2 September 2026",
        url:"https://arxiv.org/abs/2609.02823"
      }],
      significance:"An event of interest and new constraint dataset, not a dark-matter discovery; further data and background discrimination are required.",
      evidenceStatus:"collaboration preprint / candidate excess",
      reviewedAt:"2026-09-27"
    }
  ];

  return {version:"v1",eventTypes,events};
})();
