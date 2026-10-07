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
      title:"Aziz–Howl classical-gravity entanglement claim opens a new dispute",
      date:"2025-10-22",
      year:2025,
      eventType:"controversy/debate",
      summary:"Aziz and Howl argued that a local classical gravitational background coupled to quantum-field-theoretic matter can generate an entangling contribution. Subsequent analyses dispute either the entanglement calculation itself or its interpretation as gravity-mediated entanglement, so the claim is not treated here as a settled theorem about classical gravity.",
      relatedTheoryIds:["bmv-gravity-entanglement","postquantum-classical-gravity"],
      relatedProblemIds:["quantum-gravity"],
      relatedFormulaIds:[],
      relatedEvidenceIds:["ev-gravity-entanglement-boundary-2025"],
      sourceIds:[
        "aziz-howl-gravity-entanglement-2025",
        "marletto-oppenheim-vedral-wilson-2025",
        "gundhi-infanti-bassi-2026",
        "vidal-iyer-matter-exchange-2026",
        "schneider-huggett-linnemann-2026"
      ],
      sourceLocations:[
        {
          sourceId:"aziz-howl-gravity-entanglement-2025",
          locator:"Nature 646, 813–817 (2025), central classical-gravity/QFT claim",
          url:"https://doi.org/10.1038/s41586-025-09595-7"
        },
        {
          sourceId:"marletto-oppenheim-vedral-wilson-2025",
          locator:"arXiv:2511.07348, direct rebuttal",
          url:"https://arxiv.org/abs/2511.07348"
        },
        {
          sourceId:"schneider-huggett-linnemann-2026",
          locator:"Classical and Quantum Gravity (2026), Newton–Cartan argument",
          url:"https://doi.org/10.1088/1361-6382/ae6f62"
        }
      ],
      significance:"The episode makes the assumptions behind gravity-mediated entanglement inference explicit and motivates model-resolved tests rather than an unqualified classical-versus-quantum label.",
      evidenceStatus:"peer-reviewed claim with direct published/preprint rebuttals",
      reviewedAt:"2026-09-29"

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
    },
    {
      id:"dp-classical-gravity-gie-2025",
      title:"Diósi–Penrose classical-gravity model shown to permit GIE in a defined regime",
      date:"2025-06-12",
      year:2025,
      eventType:"theorem/result",
      summary:"Trillo and Navascués showed that the Diósi–Penrose model of classical gravity can entangle the mechanical degrees of freedom of two particles for specified separations and parameters, providing a concrete counterexample to an unrestricted entanglement-implies-quantized-gravity inference.",
      relatedTheoryIds:["diosi-penrose","bmv-gravity-entanglement"],
      relatedProblemIds:["quantum-gravity","measurement-problem"],
      relatedFormulaIds:[],
      relatedEvidenceIds:["ev-dp-gie-2025"],
      sourceIds:["trillo-navascues-dp-gie-2025"],
      sourceLocations:[{
        sourceId:"trillo-navascues-dp-gie-2025",
        locator:"Phys. Rev. D 111, L121101 (2025), abstract and main GIE condition",
        url:"https://doi.org/10.1103/PhysRevD.111.L121101"
      }],
      significance:"A model-specific classical-gravity counterexample showing that entanglement alone does not classify every hybrid theory.",
      evidenceStatus:"peer-reviewed theoretical result",
      reviewedAt:"2026-09-29"
    },
    {
      id:"minimal-noise-nonquantized-gravity-2026",
      title:"Minimum-noise theorem broadens low-energy tests beyond direct entanglement",
      date:"2026-03-27",
      year:2026,
      eventType:"theorem/result",
      summary:"Fabiano, Fujita, Matsumura and Carney classified a broad time-local, Galilean-invariant family of non-quantized Newtonian interactions reproducing Newtonian forces on average and derived a minimum irreversible-noise requirement for members of that class that remain non-entangling.",
      relatedTheoryIds:["bmv-gravity-entanglement","postquantum-classical-gravity","open-quantum-systems"],
      relatedProblemIds:["quantum-gravity"],
      relatedFormulaIds:[],
      relatedEvidenceIds:["ev-minimal-noise-nonquantized-gravity-2026"],
      sourceIds:["fabiano-minimal-noise-2026"],
      sourceLocations:[{
        sourceId:"fabiano-minimal-noise-2026",
        locator:"arXiv:2603.26075v2, abstract and general classification",
        url:"https://arxiv.org/abs/2603.26075"
      }],
      significance:"Provides a quantitative low-noise target for a broad but explicitly assumption-bounded non-entangling model class; it is not a theorem about every non-quantized gravity model.",
      evidenceStatus:"research preprint / theoretical classification",
      reviewedAt:"2026-09-29"
    },
    {
      id:"nonmarkovian-cq-2026",
      title:"Non-Markovian dynamics sharpen the boundary of classical–quantum tests",
      date:"2026-04-08",
      year:2026,
      eventType:"new formal connection",
      summary:"Tomizuka and Takeda derived effective classical–quantum dynamics from decohered fully quantum models and found the reduced dynamics are generically non-Markovian, with the Oppenheim-type Markovian dynamics recovered in a short-memory limit.",
      relatedTheoryIds:["postquantum-classical-gravity","open-quantum-systems","nonmarkovian-open-systems"],
      relatedProblemIds:["quantum-gravity"],
      relatedFormulaIds:["cq-backreaction-decoherence-diffusion"],
      relatedEvidenceIds:["ev-cq-decoherence-diffusion-2023"],
      sourceIds:["tomizuka-takeda-nonmarkovian-2026"],
      sourceLocations:[{
        sourceId:"tomizuka-takeda-nonmarkovian-2026",
        locator:"arXiv:2604.06891, abstract and short-memory limit",
        url:"https://arxiv.org/abs/2604.06891"
      }],
      significance:"Clarifies that successful Markovian classical–quantum phenomenology need not uniquely identify a fundamentally classical mediator and that non-Markovian alternatives require separate tests.",
      evidenceStatus:"research preprint / theoretical result",
      reviewedAt:"2026-09-29"
    },
    {
      id:"classical-gravity-gie-rebuttal-2026",
      title:"Peer-reviewed Newton–Cartan analysis rejects classical gravitational mediation of GIE",
      date:"2026-09-01",
      year:2026,
      eventType:"controversy/debate",
      summary:"Schneider, Huggett and Linnemann argued using a Newton–Cartan analysis that if gravity is classical and acts as the mediator, observed gravitationally induced entanglement would require some other interaction to supply the entangling force. This is one side of an active theoretical dispute rather than a universal empirical verdict.",
      relatedTheoryIds:["bmv-gravity-entanglement","postquantum-classical-gravity"],
      relatedProblemIds:["quantum-gravity"],
      relatedFormulaIds:[],
      relatedEvidenceIds:["ev-gravity-entanglement-boundary-2025"],
      sourceIds:["schneider-huggett-linnemann-2026"],
      sourceLocations:[{
        sourceId:"schneider-huggett-linnemann-2026",
        locator:"Classical and Quantum Gravity, published 1 September 2026, abstract/conclusion",
        url:"https://doi.org/10.1088/1361-6382/ae6f62"
      }],
      significance:"Adds a peer-reviewed rebuttal to the 2025 Aziz–Howl claim and reinforces the need to state mediator and model assumptions explicitly.",
      evidenceStatus:"peer-reviewed theoretical analysis",
      reviewedAt:"2026-09-29"
    },
    {
      id:"indirect-gme-interferometry-2026",
      title:"Existing matter-wave interferometry linked conditionally to gravity-mediated entanglement",
      date:"2026-04-02",
      year:2026,
      eventType:"theorem/result",
      summary:"Plávala proved that experimentally verifying single-particle Schrödinger evolution for a delocalized mass in an external gravitational field implies two-system gravity-mediated entanglement under either of two stated assumptions. The result is an indirect inference, not a direct two-mass entanglement observation.",
      relatedTheoryIds:["bmv-gravity-entanglement"],
      relatedProblemIds:["quantum-gravity"],
      relatedFormulaIds:[],
      relatedEvidenceIds:["ev-indirect-gme-interferometry-2026"],
      sourceIds:["plavala-indirect-gme-2026"],
      sourceLocations:[{
        sourceId:"plavala-indirect-gme-2026",
        locator:"Phys. Rev. D 113, 085004 (2026), theorem/conclusions; corrected 11 September 2026",
        url:"https://doi.org/10.1103/87dc-qt73"
      }],
      significance:"Moves part of the experimental question from creating a new two-mass entanglement apparatus to validating the assumptions that connect existing single-particle interferometry to two-system dynamics.",
      evidenceStatus:"peer-reviewed conditional theoretical inference",
      reviewedAt:"2026-09-29"
    },
    {
      id:"collapse-witness-locality-2026",
      title:"Diósi–Penrose entanglement dispute reframed around locality",
      date:"2026-05-26",
      year:2026,
      eventType:"controversy/debate",
      summary:"Feng, Vedral and Marletto argued that the Diósi–Penrose model's entangling behavior does not violate the local entanglement-witness theorem because the collapse model contains nonlocal features. The result narrows the disagreement to which locality and mediator assumptions an experiment actually tests.",
      relatedTheoryIds:["diosi-penrose","bmv-gravity-entanglement"],
      relatedProblemIds:["quantum-gravity","measurement-problem"],
      relatedFormulaIds:[],
      relatedEvidenceIds:["ev-gravity-entanglement-boundary-2025"],
      sourceIds:["feng-vedral-marletto-collapse-2026","trillo-navascues-dp-gie-2025"],
      sourceLocations:[{
        sourceId:"feng-vedral-marletto-collapse-2026",
        locator:"Phys. Rev. D 113, 104055 (2026), abstract and locality analysis",
        url:"https://doi.org/10.1103/83rl-nygv"
      }],
      significance:"Clarifies that a classical label alone is insufficient: locality assumptions determine whether an entangling model is inside or outside the witness theorem.",
      evidenceStatus:"peer-reviewed theoretical dispute",
      reviewedAt:"2026-09-29"
    },
    {
      id:"cq-geodesic-deviation-2026",
      title:"Geodesic-deviation spectra proposed to test Oppenheim-type classical–quantum gravity",
      date:"2026-07-08",
      year:2026,
      eventType:"theorem/result",
      summary:"Hirotani and Matsumura derived strain spectra for quantum geodesic-deviation fluctuations coupled to classical gravity in the original Oppenheim model and two variants, reporting that the original model can be probed at current gravitational-wave sensitivity in their analysis.",
      relatedTheoryIds:["postquantum-classical-gravity","stochastic-gravity"],
      relatedProblemIds:["quantum-gravity"],
      relatedFormulaIds:[],
      relatedEvidenceIds:["ev-cq-geodesic-deviation-2026"],
      sourceIds:["hirotani-matsumura-geodesic-2026"],
      sourceLocations:[{
        sourceId:"hirotani-matsumura-geodesic-2026",
        locator:"Phys. Rev. D 114, 026014 (2026), abstract and strain-spectrum comparison",
        url:"https://doi.org/10.1103/fx1h-97sx"
      }],
      significance:"Adds a gravitational-wave observable to the classical–quantum model-discrimination program, separate from tabletop entanglement witnesses.",
      evidenceStatus:"peer-reviewed theoretical prediction",
      reviewedAt:"2026-09-29"
    }
  ];

  return {version:"v1",eventTypes,events};
})();
