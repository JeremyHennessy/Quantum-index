// Cited reading profiles. Questions and prerequisite order are editorial prompts, not new catalog relations.
window.QI_PROFILES = {
  "version": "v1",
  "reviewedAt": "2026-09-26",
  "profiles": {
    "qft-curved-spacetime": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "How do quantum fields behave when spacetime is curved?",
        "sourceIds": [
          "hollands-wald-qftcs-2015"
        ]
      },
      "scope": {
        "text": "Local, covariant quantum field theory on a prescribed classical spacetime.",
        "sourceIds": [
          "hollands-wald-qftcs-2015"
        ]
      },
      "assumptions": {
        "text": "The background is globally hyperbolic; physically admissible states satisfy appropriate short-distance conditions.",
        "sourceIds": [
          "hollands-wald-qftcs-2015"
        ]
      },
      "predictions": {
        "text": "The framework describes particle creation and renormalized stress-energy, including Hawking and Unruh effects.",
        "sourceIds": [
          "hollands-wald-qftcs-2015"
        ]
      },
      "evidence": {
        "text": "The review develops mathematical constructions and perturbative results; these are theoretical foundations.",
        "sourceIds": [
          "hollands-wald-qftcs-2015"
        ]
      },
      "limitations": {
        "text": "The geometry is not itself a fully quantized dynamical field.",
        "sourceIds": [
          "hollands-wald-qftcs-2015"
        ]
      },
      "questions": {
        "text": "How far can these constructions extend when quantum fluctuations of geometry become important?",
        "sourceIds": [
          "hollands-wald-qftcs-2015"
        ]
      },
      "prerequisites": []
    },
    "semiclassical-gravity": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "How can quantum matter influence a classical spacetime?",
        "sourceIds": [
          "hu-verdaguer-stochastic-2008"
        ]
      },
      "scope": {
        "text": "The semiclassical Einstein equation couples geometry to the renormalized expectation value of matter stress-energy.",
        "sourceIds": [
          "hu-verdaguer-stochastic-2008"
        ]
      },
      "assumptions": {
        "text": "A classical metric and a suitable quantum state provide an adequate mean-field description.",
        "sourceIds": [
          "hu-verdaguer-stochastic-2008"
        ]
      },
      "predictions": {
        "text": "Quantum stress-energy can alter background evolution and black-hole backreaction.",
        "sourceIds": [
          "hu-verdaguer-stochastic-2008"
        ]
      },
      "evidence": {
        "text": "The review analyzes theoretical consistency and stability of semiclassical solutions.",
        "sourceIds": [
          "hu-verdaguer-stochastic-2008"
        ]
      },
      "limitations": {
        "text": "A mean stress tensor alone does not capture its fluctuations or a fully quantum geometry.",
        "sourceIds": [
          "hu-verdaguer-stochastic-2008"
        ]
      },
      "questions": {
        "text": "When do stress-energy fluctuations invalidate a particular semiclassical solution?",
        "sourceIds": [
          "hu-verdaguer-stochastic-2008"
        ]
      },
      "prerequisites": [
        "qft-curved-spacetime"
      ]
    },
    "hawking-radiation": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "Can a black hole emit radiation through quantum effects?",
        "sourceIds": [
          "hawking-1975"
        ]
      },
      "scope": {
        "text": "Quantum field propagation through a classical gravitational-collapse spacetime.",
        "sourceIds": [
          "hawking-1975"
        ]
      },
      "assumptions": {
        "text": "The calculation treats quantum fields on a background admitting a late-time black-hole exterior.",
        "sourceIds": [
          "hawking-1975"
        ]
      },
      "predictions": {
        "text": "The outgoing radiation has a thermal spectrum with temperature set by surface gravity.",
        "sourceIds": [
          "hawking-1975"
        ]
      },
      "evidence": {
        "text": "The cited paper derives the effect theoretically; it does not report an astrophysical detection.",
        "sourceIds": [
          "hawking-1975"
        ]
      },
      "limitations": {
        "text": "This background-field calculation does not provide a microscopic account of complete evaporation.",
        "sourceIds": [
          "hawking-1975"
        ]
      },
      "questions": {
        "text": "How does an evaporating black hole encode correlations beyond the leading thermal description?",
        "sourceIds": [
          "hawking-1975"
        ]
      },
      "prerequisites": [
        "qft-curved-spacetime"
      ]
    },
    "black-hole-thermodynamics": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "How should entropy and the second law account for black holes?",
        "sourceIds": [
          "bekenstein-1973"
        ]
      },
      "scope": {
        "text": "Thermodynamic reasoning associates black-hole entropy with horizon area.",
        "sourceIds": [
          "bekenstein-1973"
        ]
      },
      "assumptions": {
        "text": "Horizon mechanics and information loss motivate extending ordinary thermodynamic accounting.",
        "sourceIds": [
          "bekenstein-1973"
        ]
      },
      "predictions": {
        "text": "Black holes contribute an area-dependent entropy to a generalized second law.",
        "sourceIds": [
          "bekenstein-1973"
        ]
      },
      "evidence": {
        "text": "Bekenstein gives a theoretical entropy argument; Hawking radiation supplies the temperature and standard coefficient.",
        "sourceIds": [
          "bekenstein-1973",
          "hawking-1975"
        ]
      },
      "limitations": {
        "text": "Thermodynamic relations alone do not identify all underlying microscopic states.",
        "sourceIds": [
          "bekenstein-1973"
        ]
      },
      "questions": {
        "text": "How should microscopic entropy counting extend to realistic evaporating black holes?",
        "sourceIds": [
          "bekenstein-1973"
        ]
      },
      "prerequisites": [
        "hawking-radiation"
      ]
    },
    "unruh": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "Do different observers agree on the particle content of a quantum field?",
        "sourceIds": [
          "unruh-1976"
        ]
      },
      "scope": {
        "text": "Accelerated detector response in a quantum field, with comparison to black-hole settings.",
        "sourceIds": [
          "unruh-1976"
        ]
      },
      "assumptions": {
        "text": "The idealized thermal result uses uniform acceleration and a specified vacuum and detector coupling.",
        "sourceIds": [
          "unruh-1976"
        ]
      },
      "predictions": {
        "text": "A uniformly accelerated detector can respond thermally in the Minkowski vacuum.",
        "sourceIds": [
          "unruh-1976"
        ]
      },
      "evidence": {
        "text": "The paper analyzes quantum detector models, rather than reporting a laboratory measurement.",
        "sourceIds": [
          "unruh-1976"
        ]
      },
      "limitations": {
        "text": "Finite-duration motion and detector details must be distinguished from the ideal stationary limit.",
        "sourceIds": [
          "unruh-1976"
        ]
      },
      "questions": {
        "text": "How does a finite detector protocol isolate acceleration-dependent response?",
        "sourceIds": [
          "unruh-1976"
        ]
      },
      "prerequisites": [
        "qft-curved-spacetime"
      ]
    },
    "stochastic-gravity": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "How can fluctuations of quantum matter be included beyond semiclassical mean fields?",
        "sourceIds": [
          "hu-verdaguer-stochastic-2008"
        ]
      },
      "scope": {
        "text": "An Einstein–Langevin description supplements the mean stress tensor with a noise kernel.",
        "sourceIds": [
          "hu-verdaguer-stochastic-2008"
        ]
      },
      "assumptions": {
        "text": "The chosen effective description and quantum state permit a controlled treatment of metric fluctuations.",
        "sourceIds": [
          "hu-verdaguer-stochastic-2008"
        ]
      },
      "predictions": {
        "text": "The framework calculates induced metric correlations and studies backreaction and stability.",
        "sourceIds": [
          "hu-verdaguer-stochastic-2008"
        ]
      },
      "evidence": {
        "text": "The review develops calculations for cosmology and black-hole fluctuations within specified approximations.",
        "sourceIds": [
          "hu-verdaguer-stochastic-2008"
        ]
      },
      "limitations": {
        "text": "Stochastic metric fluctuations do not constitute a complete theory of quantum spacetime.",
        "sourceIds": [
          "hu-verdaguer-stochastic-2008"
        ]
      },
      "questions": {
        "text": "Which regimes require effects beyond the stochastic approximation?",
        "sourceIds": [
          "hu-verdaguer-stochastic-2008"
        ]
      },
      "prerequisites": [
        "semiclassical-gravity"
      ]
    },
    "gravity-effective-field-theory": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "Can quantum gravity yield predictions without knowing its short-distance completion?",
        "sourceIds": [
          "donoghue-gravity-eft-1994"
        ]
      },
      "scope": {
        "text": "Low-energy effective field theory organizes gravitational corrections in an expansion.",
        "sourceIds": [
          "donoghue-gravity-eft-1994"
        ]
      },
      "assumptions": {
        "text": "External energies are sufficiently below the scale where the low-energy expansion fails.",
        "sourceIds": [
          "donoghue-gravity-eft-1994"
        ]
      },
      "predictions": {
        "text": "Long-distance propagation of massless fields yields calculable nonanalytic quantum corrections.",
        "sourceIds": [
          "donoghue-gravity-eft-1994"
        ]
      },
      "evidence": {
        "text": "The paper calculates leading long-distance corrections to the interaction of heavy masses.",
        "sourceIds": [
          "donoghue-gravity-eft-1994"
        ]
      },
      "limitations": {
        "text": "Short-distance coefficients require additional input; the expansion is not a high-energy completion.",
        "sourceIds": [
          "donoghue-gravity-eft-1994"
        ]
      },
      "questions": {
        "text": "Which low-energy observables best separate universal corrections from unknown short-distance parameters?",
        "sourceIds": [
          "donoghue-gravity-eft-1994"
        ]
      },
      "prerequisites": []
    },
    "loop-quantum-gravity": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "How can gravity be quantized without starting from a fixed background metric?",
        "sourceIds": [
          "rovelli-qg-survey"
        ]
      },
      "scope": {
        "text": "A canonical, background-independent quantum-gravity research program using loop variables.",
        "sourceIds": [
          "rovelli-qg-survey"
        ]
      },
      "assumptions": {
        "text": "General relativity is reformulated for quantization with constraints encoding its gauge symmetries.",
        "sourceIds": [
          "rovelli-qg-survey"
        ]
      },
      "predictions": {
        "text": "The survey discusses quantum-geometric structures and black-hole entropy calculations.",
        "sourceIds": [
          "rovelli-qg-survey"
        ]
      },
      "evidence": {
        "text": "The cited survey assesses theoretical achievements and difficulties, not experimental confirmation.",
        "sourceIds": [
          "rovelli-qg-survey"
        ]
      },
      "limitations": {
        "text": "Achievements in selected constructions do not by themselves establish a complete classical limit.",
        "sourceIds": [
          "rovelli-qg-survey"
        ]
      },
      "questions": {
        "text": "How do controlled continuum dynamics recover realistic spacetime and matter?",
        "sourceIds": [
          "rovelli-qg-survey"
        ]
      },
      "prerequisites": []
    },
    "string-theory": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "Can gravitational and other quantum interactions share a consistent microscopic framework?",
        "sourceIds": [
          "rovelli-qg-survey"
        ]
      },
      "scope": {
        "text": "A quantum-gravity research program based on extended strings and related degrees of freedom.",
        "sourceIds": [
          "rovelli-qg-survey"
        ]
      },
      "assumptions": {
        "text": "The chosen string construction and background determine the calculational setting.",
        "sourceIds": [
          "rovelli-qg-survey"
        ]
      },
      "predictions": {
        "text": "The survey discusses gravity within string theory and microscopic black-hole entropy results.",
        "sourceIds": [
          "rovelli-qg-survey"
        ]
      },
      "evidence": {
        "text": "The cited comparison reviews theoretical successes and unresolved construction problems.",
        "sourceIds": [
          "rovelli-qg-survey"
        ]
      },
      "limitations": {
        "text": "Results in specific backgrounds do not alone select a model describing our universe.",
        "sourceIds": [
          "rovelli-qg-survey"
        ]
      },
      "questions": {
        "text": "Which construction connects controlled microscopic calculations to distinctive observable predictions?",
        "sourceIds": [
          "rovelli-qg-survey"
        ]
      },
      "prerequisites": []
    },
    "asymptotic-safety": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "Can gravity remain predictive at arbitrarily high energy through renormalization-group behavior?",
        "sourceIds": [
          "asymptotic-review-2026"
        ]
      },
      "scope": {
        "text": "A proposed ultraviolet completion governed by an interacting fixed point.",
        "sourceIds": [
          "asymptotic-review-2026"
        ]
      },
      "assumptions": {
        "text": "The fixed point and a suitable predictive trajectory must survive beyond calculational approximations.",
        "sourceIds": [
          "asymptotic-review-2026"
        ]
      },
      "predictions": {
        "text": "Quantum scale symmetry could control high-energy gravitational interactions.",
        "sourceIds": [
          "asymptotic-review-2026"
        ]
      },
      "evidence": {
        "text": "The 2026 review surveys theoretical evidence, including Euclidean gravity, matter and Lorentzian developments.",
        "sourceIds": [
          "asymptotic-review-2026"
        ]
      },
      "limitations": {
        "text": "Approximation control and connecting fixed-point calculations to physical observables remain essential checks.",
        "sourceIds": [
          "asymptotic-review-2026"
        ]
      },
      "questions": {
        "text": "Which observable predictions remain robust as truncations and matter content are varied?",
        "sourceIds": [
          "asymptotic-review-2026"
        ]
      },
      "prerequisites": [
        "gravity-effective-field-theory"
      ]
    },
    "ads-cft": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "Can a gravitational theory be described by a quantum theory without dynamical gravity on its boundary?",
        "sourceIds": [
          "maldacena-1997"
        ]
      },
      "scope": {
        "text": "A proposed duality between specified anti-de Sitter string/gravity systems and conformal field theories.",
        "sourceIds": [
          "maldacena-1997"
        ]
      },
      "assumptions": {
        "text": "The theories and boundary conditions must form a matching dual pair; classical bulk control uses special limits.",
        "sourceIds": [
          "maldacena-1997"
        ]
      },
      "predictions": {
        "text": "Large-N, strongly coupled field theory can admit a supergravity description.",
        "sourceIds": [
          "maldacena-1997"
        ]
      },
      "evidence": {
        "text": "The original paper motivates the correspondence using brane limits and matching theoretical structures.",
        "sourceIds": [
          "maldacena-1997"
        ]
      },
      "limitations": {
        "text": "The construction does not directly supply a dual for arbitrary cosmological spacetimes.",
        "sourceIds": [
          "maldacena-1997"
        ]
      },
      "questions": {
        "text": "How can bulk reconstruction and quantum corrections be controlled away from classical gravity limits?",
        "sourceIds": [
          "maldacena-1997"
        ]
      },
      "prerequisites": [
        "string-theory"
      ]
    },
    "black-hole-complementarity": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "Can unitary evaporation coexist with the effective descriptions used by different observers?",
        "sourceIds": [
          "susskind-complementarity-1993"
        ]
      },
      "scope": {
        "text": "A set of black-hole complementarity postulates and a stretched-horizon description.",
        "sourceIds": [
          "susskind-complementarity-1993"
        ]
      },
      "assumptions": {
        "text": "Unitary evolution, semiclassical exterior physics and statistical black-hole thermodynamics are retained.",
        "sourceIds": [
          "susskind-complementarity-1993"
        ]
      },
      "predictions": {
        "text": "Exterior and infalling descriptions are proposed to avoid operationally accessible duplication of information.",
        "sourceIds": [
          "susskind-complementarity-1993"
        ]
      },
      "evidence": {
        "text": "The paper develops a conceptual framework and toy-model reasoning.",
        "sourceIds": [
          "susskind-complementarity-1993"
        ]
      },
      "limitations": {
        "text": "Postulates do not supply a complete microscopic evaporation mechanism.",
        "sourceIds": [
          "susskind-complementarity-1993"
        ]
      },
      "questions": {
        "text": "Which microscopic description makes the observer-dependent accounts mutually consistent?",
        "sourceIds": [
          "susskind-complementarity-1993"
        ]
      },
      "prerequisites": [
        "hawking-radiation",
        "black-hole-thermodynamics"
      ]
    },
    "amps-firewall": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "Are standard assumptions about an old evaporating black hole mutually compatible?",
        "sourceIds": [
          "amps-2012"
        ]
      },
      "scope": {
        "text": "An entanglement-based consistency argument about outgoing radiation and horizon modes.",
        "sourceIds": [
          "amps-2012"
        ]
      },
      "assumptions": {
        "text": "The argument combines pure final radiation, semiclassical exterior physics and a smooth horizon.",
        "sourceIds": [
          "amps-2012"
        ]
      },
      "predictions": {
        "text": "The assumptions cannot all hold in the stated setting; a firewall is a proposed way to relinquish smoothness.",
        "sourceIds": [
          "amps-2012"
        ]
      },
      "evidence": {
        "text": "The cited result is a conditional theoretical contradiction, not an observed firewall.",
        "sourceIds": [
          "amps-2012"
        ]
      },
      "limitations": {
        "text": "The argument diagnoses incompatible assumptions without selecting a unique replacement theory.",
        "sourceIds": [
          "amps-2012"
        ]
      },
      "questions": {
        "text": "Which assumption fails in a controlled microscopic model of evaporation?",
        "sourceIds": [
          "amps-2012"
        ]
      },
      "prerequisites": [
        "black-hole-complementarity"
      ]
    },
    "fuzzball": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "Can black-hole microstates avoid the conventional empty-interior picture?",
        "sourceIds": [
          "mathur-fuzzball-2005"
        ]
      },
      "scope": {
        "text": "String-theory microstate constructions motivate a fuzzball account of black-hole interiors.",
        "sourceIds": [
          "mathur-fuzzball-2005"
        ]
      },
      "assumptions": {
        "text": "Explicit constructions use selected charge sectors and regimes with calculational control.",
        "sourceIds": [
          "mathur-fuzzball-2005"
        ]
      },
      "predictions": {
        "text": "Two-charge examples motivate structure extending through the would-be black-hole interior.",
        "sourceIds": [
          "mathur-fuzzball-2005"
        ]
      },
      "evidence": {
        "text": "The review connects explicit microstates with entropy reasoning in special string-theory systems.",
        "sourceIds": [
          "mathur-fuzzball-2005"
        ]
      },
      "limitations": {
        "text": "These examples do not construct every state of a realistic neutral, evaporating black hole.",
        "sourceIds": [
          "mathur-fuzzball-2005"
        ]
      },
      "questions": {
        "text": "How can microstate constructions and their dynamics be extended to more general black holes?",
        "sourceIds": [
          "mathur-fuzzball-2005"
        ]
      },
      "prerequisites": [
        "string-theory",
        "black-hole-thermodynamics"
      ]
    },
    "er-epr": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "How might entanglement relate to the geometric connection between black holes?",
        "sourceIds": [
          "maldacena-susskind-2013"
        ]
      },
      "scope": {
        "text": "A conjectural relation between entangled systems and Einstein–Rosen bridges.",
        "sourceIds": [
          "maldacena-susskind-2013"
        ]
      },
      "assumptions": {
        "text": "The concrete starting point uses suitable entangled black holes with a geometric description.",
        "sourceIds": [
          "maldacena-susskind-2013"
        ]
      },
      "predictions": {
        "text": "Entangled black-hole pairs can be associated with nontraversable bridges; a wider relation is conjectured.",
        "sourceIds": [
          "maldacena-susskind-2013"
        ]
      },
      "evidence": {
        "text": "The paper offers theoretical examples and a conjecture extending beyond those examples.",
        "sourceIds": [
          "maldacena-susskind-2013"
        ]
      },
      "limitations": {
        "text": "A nontraversable bridge does not enable communication, and arbitrary entanglement need not have a simple classical geometry.",
        "sourceIds": [
          "maldacena-susskind-2013"
        ]
      },
      "questions": {
        "text": "Under what conditions does entanglement admit a controlled geometric interpretation?",
        "sourceIds": [
          "maldacena-susskind-2013"
        ]
      },
      "prerequisites": [
        "ads-cft",
        "amps-firewall"
      ]
    },
    "quantum-error-correction-gravity": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "How can multiple boundary regions reconstruct the same bulk information consistently?",
        "sourceIds": [
          "almheiri-qec-2015"
        ]
      },
      "scope": {
        "text": "Quantum error correction and operator-algebra methods applied to holographic bulk reconstruction.",
        "sourceIds": [
          "almheiri-qec-2015"
        ]
      },
      "assumptions": {
        "text": "Reconstruction is formulated for suitable code subspaces within a holographic setting.",
        "sourceIds": [
          "almheiri-qec-2015"
        ]
      },
      "predictions": {
        "text": "Redundant boundary encoding helps explain bulk locality and subregion reconstruction.",
        "sourceIds": [
          "almheiri-qec-2015"
        ]
      },
      "evidence": {
        "text": "The paper establishes theoretical connections between reconstruction and quantum-error-correction conditions.",
        "sourceIds": [
          "almheiri-qec-2015"
        ]
      },
      "limitations": {
        "text": "Code-subspace results should not be assumed to apply to every state or arbitrary geometry.",
        "sourceIds": [
          "almheiri-qec-2015"
        ]
      },
      "questions": {
        "text": "How should reconstruction handle larger state spaces and stronger gravitational backreaction?",
        "sourceIds": [
          "almheiri-qec-2015"
        ]
      },
      "prerequisites": [
        "ads-cft"
      ]
    },
    "jt-gravity": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "Can a solvable gravitational model clarify black-hole quantum dynamics?",
        "sourceIds": [
          "profile-jt-review-2023"
        ]
      },
      "scope": {
        "text": "Two-dimensional Jackiw–Teitelboim dilaton gravity and its quantum description.",
        "sourceIds": [
          "profile-jt-review-2023"
        ]
      },
      "assumptions": {
        "text": "The two-dimensional model, boundary conditions and any matter sector specify the problem.",
        "sourceIds": [
          "profile-jt-review-2023"
        ]
      },
      "predictions": {
        "text": "The model provides controlled calculations relevant to chaos, wormholes and information recovery.",
        "sourceIds": [
          "profile-jt-review-2023"
        ]
      },
      "evidence": {
        "text": "The review describes solvable results and links to certain limits of higher-dimensional black holes.",
        "sourceIds": [
          "profile-jt-review-2023"
        ]
      },
      "limitations": {
        "text": "A tractable two-dimensional model is not a general four-dimensional theory of quantum gravity.",
        "sourceIds": [
          "profile-jt-review-2023"
        ]
      },
      "questions": {
        "text": "Which information-recovery lessons survive beyond the model’s simplifying limits?",
        "sourceIds": [
          "profile-jt-review-2023"
        ]
      },
      "prerequisites": [
        "semiclassical-gravity"
      ]
    },
    "replica-wormholes": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "Which gravitational contributions enter the entropy calculation for Hawking radiation?",
        "sourceIds": [
          "wave4-replica-wormholes-2019"
        ]
      },
      "scope": {
        "text": "Replica-trick path integrals include saddles connecting replica copies.",
        "sourceIds": [
          "wave4-replica-wormholes-2019"
        ]
      },
      "assumptions": {
        "text": "The saddle approximation and analytic continuation in replica number are used in specified gravity–bath models.",
        "sourceIds": [
          "wave4-replica-wormholes-2019"
        ]
      },
      "predictions": {
        "text": "Replica-connected saddles yield an island contribution and a unitary-compatible entropy evolution in the models studied.",
        "sourceIds": [
          "wave4-replica-wormholes-2019"
        ]
      },
      "evidence": {
        "text": "The paper performs theoretical calculations, including JT gravity coupled to matter.",
        "sourceIds": [
          "wave4-replica-wormholes-2019"
        ]
      },
      "limitations": {
        "text": "An entropy replica saddle is not evidence of a physically traversable wormhole.",
        "sourceIds": [
          "wave4-replica-wormholes-2019"
        ]
      },
      "questions": {
        "text": "How broadly can replica calculations be controlled in less idealized evaporation settings?",
        "sourceIds": [
          "wave4-replica-wormholes-2019"
        ]
      },
      "prerequisites": [
        "jt-gravity",
        "hawking-radiation"
      ]
    },
    "island-formula": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "How can radiation entropy account for information associated with a black-hole interior?",
        "sourceIds": [
          "almheiri-islands-2020"
        ]
      },
      "scope": {
        "text": "A generalized-entropy prescription using quantum extremal surfaces and possible interior islands.",
        "sourceIds": [
          "almheiri-islands-2020"
        ]
      },
      "assumptions": {
        "text": "The cited construction uses a gravitational system whose matter admits a higher-dimensional holographic description.",
        "sourceIds": [
          "almheiri-islands-2020"
        ]
      },
      "predictions": {
        "text": "Including an island can produce a Page curve and place interior regions in the radiation entanglement wedge.",
        "sourceIds": [
          "almheiri-islands-2020"
        ]
      },
      "evidence": {
        "text": "The paper derives the prescription in controlled holographic models.",
        "sourceIds": [
          "almheiri-islands-2020"
        ]
      },
      "limitations": {
        "text": "These entropy calculations do not automatically provide a practical decoding procedure for every evaporating black hole.",
        "sourceIds": [
          "almheiri-islands-2020"
        ]
      },
      "questions": {
        "text": "How can the prescription be extended and interpreted microscopically beyond the controlled models?",
        "sourceIds": [
          "almheiri-islands-2020"
        ]
      },
      "prerequisites": [
        "ads-cft",
        "hawking-radiation"
      ]
    },
    "inflationary-fluctuations": {
      "reviewedAt": "2026-09-26",
      "problem": {
        "text": "How could quantum fluctuations seed primordial density variations?",
        "sourceIds": [
          "guth-pi-1982"
        ]
      },
      "scope": {
        "text": "Quantum fluctuations during inflation are converted into density perturbations.",
        "sourceIds": [
          "guth-pi-1982"
        ]
      },
      "assumptions": {
        "text": "The original calculation uses a particular new-inflation field model and its evolution.",
        "sourceIds": [
          "guth-pi-1982"
        ]
      },
      "predictions": {
        "text": "The model produces a nearly scale-invariant density-perturbation spectrum.",
        "sourceIds": [
          "guth-pi-1982"
        ]
      },
      "evidence": {
        "text": "The cited work is a theoretical mechanism and spectrum calculation, not a measurement establishing all inflationary models.",
        "sourceIds": [
          "guth-pi-1982"
        ]
      },
      "limitations": {
        "text": "Predictions depend on the inflationary model and the conversion from field fluctuations to density perturbations.",
        "sourceIds": [
          "guth-pi-1982"
        ]
      },
      "questions": {
        "text": "Which observations distinguish competing mechanisms for generating primordial perturbations?",
        "sourceIds": [
          "guth-pi-1982"
        ]
      },
      "prerequisites": [
        "qft-curved-spacetime"
      ]
    }
  },
  "comparisons": [
    {
      "name": "Quantum gravity approaches",
      "theoryIds": [
        "loop-quantum-gravity",
        "string-theory",
        "asymptotic-safety",
        "gravity-effective-field-theory"
      ]
    },
    {
      "name": "Black-hole information",
      "theoryIds": [
        "black-hole-complementarity",
        "amps-firewall",
        "fuzzball",
        "island-formula"
      ]
    },
    {
      "name": "Fields and spacetime",
      "theoryIds": [
        "qft-curved-spacetime",
        "semiclassical-gravity",
        "stochastic-gravity",
        "unruh"
      ]
    }
  ]
};

// Editorial reading routes; these do not assert new historical relationships.
window.QI_PROFILES.learningPaths = [
  {
    "id": "gravity-time",
    "title": "Gravity and time",
    "goal": "Follow the role of backgrounds, observers and quantum geometry.",
    "prerequisites": "Basic quantum mechanics; special relativity; introductory spacetime geometry.",
    "steps": [
      {
        "theoryId": "qft-curved-spacetime",
        "why": "Start with the distinction between a classical spacetime and the quantum fields living on it."
      },
      {
        "theoryId": "unruh",
        "why": "Ask how an observer’s motion enters a detector’s response."
      },
      {
        "theoryId": "hawking-radiation",
        "why": "Compare the horizon setting with the accelerated-observer example."
      },
      {
        "theoryId": "semiclassical-gravity",
        "why": "Introduce the next question: how does quantum matter affect the geometry?"
      },
      {
        "theoryId": "wheeler-dewitt",
        "why": "Read the canonical approach and investigate what “time” means when geometry is quantized."
      }
    ],
    "comparison": [
      "unruh",
      "hawking-radiation"
    ]
  },
  {
    "id": "black-hole-information",
    "title": "The black-hole information problem",
    "goal": "Trace the tension, then compare proposed resolutions and controlled models.",
    "prerequisites": "Quantum states, entropy and entanglement; basic black-hole geometry.",
    "steps": [
      {
        "theoryId": "black-hole-thermodynamics",
        "why": "Begin with the entropy and temperature that motivate the information question."
      },
      {
        "theoryId": "hawking-radiation",
        "why": "Study the leading radiation calculation and its stated limitations."
      },
      {
        "theoryId": "black-hole-complementarity",
        "why": "Identify the postulates that the proposed description tries to retain."
      },
      {
        "theoryId": "amps-firewall",
        "why": "Check which assumptions enter the consistency argument."
      },
      {
        "theoryId": "jt-gravity",
        "why": "Introduce a tractable model before reading the entropy calculations."
      },
      {
        "theoryId": "replica-wormholes",
        "why": "Examine the role of replica saddles in the cited calculation."
      },
      {
        "theoryId": "island-formula",
        "why": "Compare the entropy prescription with a microscopic account of information recovery."
      }
    ],
    "comparison": [
      "black-hole-complementarity",
      "amps-firewall",
      "island-formula"
    ]
  },
  {
    "id": "quantum-gravity",
    "title": "Approaches to quantum gravity",
    "goal": "Compare what each approach assumes, calculates and still needs to explain.",
    "prerequisites": "General relativity, quantum mechanics and introductory quantum field theory.",
    "steps": [
      {
        "theoryId": "gravity-effective-field-theory",
        "why": "Use low-energy predictivity as a reference point for the other approaches."
      },
      {
        "theoryId": "loop-quantum-gravity",
        "why": "Explore the background-independent canonical program."
      },
      {
        "theoryId": "string-theory",
        "why": "Read the extended-object approach and its construction-dependent scope."
      },
      {
        "theoryId": "asymptotic-safety",
        "why": "Examine the proposed high-energy fixed point and the evidence described in the review."
      },
      {
        "theoryId": "ads-cft",
        "why": "Finish with a concrete duality setting and its limits of applicability."
      }
    ],
    "comparison": [
      "gravity-effective-field-theory",
      "loop-quantum-gravity",
      "string-theory",
      "asymptotic-safety"
    ]
  }
];

// Foundation and information reading profiles; prompts are editorial.
Object.assign(window.QI_PROFILES.profiles, {
  "wheeler-dewitt": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "How can a quantum state describe spatial geometry without an external time parameter?",
      "sourceIds": [
        "profile-kiefer-geometrodynamics-2009"
      ]
    },
    "scope": {
      "text": "Canonical geometrodynamics uses the three-metric and matter configurations as wavefunctional arguments.",
      "sourceIds": [
        "profile-kiefer-geometrodynamics-2009"
      ]
    },
    "assumptions": {
      "text": "Physical states obey gravitational constraints; operator definitions and boundary conditions must be specified.",
      "sourceIds": [
        "profile-kiefer-geometrodynamics-2009"
      ]
    },
    "predictions": {
      "text": "The Wheeler–DeWitt constraint replaces an ordinary external-time Schrödinger evolution; approximate time can emerge semiclassically.",
      "sourceIds": [
        "profile-kiefer-geometrodynamics-2009"
      ]
    },
    "evidence": {
      "text": "Kiefer reviews formal constructions and semiclassical applications, not a confirmed microscopic theory of spacetime.",
      "sourceIds": [
        "profile-kiefer-geometrodynamics-2009"
      ]
    },
    "limitations": {
      "text": "The problem of time and the definition of the full constraint operators obstruct a straightforward probabilistic interpretation.",
      "sourceIds": [
        "profile-kiefer-geometrodynamics-2009"
      ]
    },
    "questions": {
      "text": "Which variable acts as a clock in a chosen reduced model, and where does its approximation fail?",
      "sourceIds": [
        "profile-kiefer-geometrodynamics-2009"
      ]
    },
    "prerequisites": [
      "canonical-quantum-gravity"
    ]
  },
  "canonical-quantum-gravity": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "How can general relativity be put into a form suitable for canonical quantization?",
      "sourceIds": [
        "dewitt-canonical-gravity-1967"
      ]
    },
    "scope": {
      "text": "The Hamiltonian formulation promotes geometric variables and their conjugate momenta to quantum operators.",
      "sourceIds": [
        "dewitt-canonical-gravity-1967"
      ]
    },
    "assumptions": {
      "text": "Constraints arising from gravitational gauge freedom must remain consistent after quantization.",
      "sourceIds": [
        "dewitt-canonical-gravity-1967"
      ]
    },
    "predictions": {
      "text": "The resulting state must satisfy quantum constraint equations rather than arbitrary evolution on a fixed background.",
      "sourceIds": [
        "dewitt-canonical-gravity-1967"
      ]
    },
    "evidence": {
      "text": "DeWitt develops the canonical mathematical framework and discusses its interpretation.",
      "sourceIds": [
        "dewitt-canonical-gravity-1967"
      ]
    },
    "limitations": {
      "text": "A formal quantization prescription alone does not resolve regularization, operator ordering or physical observables.",
      "sourceIds": [
        "dewitt-canonical-gravity-1967"
      ]
    },
    "questions": {
      "text": "How does a proposed quantization recover classical gravitational dynamics in its intended limit?",
      "sourceIds": [
        "dewitt-canonical-gravity-1967"
      ]
    },
    "prerequisites": []
  },
  "planck-quanta": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "How can the frequency distribution of equilibrium thermal radiation be explained?",
      "sourceIds": [
        "planck-1901"
      ]
    },
    "scope": {
      "text": "Planck models radiation through resonators and discrete energy elements proportional to frequency.",
      "sourceIds": [
        "planck-1901"
      ]
    },
    "assumptions": {
      "text": "Thermal equilibrium and a statistical count using finite energy elements enter the calculation.",
      "sourceIds": [
        "planck-1901"
      ]
    },
    "predictions": {
      "text": "The radiation law interpolates between the low-frequency and high-frequency behavior of the spectrum.",
      "sourceIds": [
        "planck-1901"
      ]
    },
    "evidence": {
      "text": "The paper develops an analytical law for the black-body spectrum; its energy-counting step introduced the quantum constant.",
      "sourceIds": [
        "planck-1901"
      ]
    },
    "limitations": {
      "text": "This historical construction is not a general theory of quantum states, measurement or particle dynamics.",
      "sourceIds": [
        "planck-1901"
      ]
    },
    "questions": {
      "text": "How does the radiation law approach the classical result when photon energy is small compared with thermal energy?",
      "sourceIds": [
        "planck-1901"
      ]
    },
    "prerequisites": []
  },
  "bohr-model": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "Why do atoms possess discrete spectral lines and stable states?",
      "sourceIds": [
        "bohr-1913"
      ]
    },
    "scope": {
      "text": "A nuclear atom is supplemented with stationary states and transitions whose frequencies depend on energy differences.",
      "sourceIds": [
        "bohr-1913"
      ]
    },
    "assumptions": {
      "text": "The original model postulates special nonradiating states instead of applying classical radiation theory to every orbit.",
      "sourceIds": [
        "bohr-1913"
      ]
    },
    "predictions": {
      "text": "The hydrogenic construction produces discrete energies and associated spectral frequencies.",
      "sourceIds": [
        "bohr-1913"
      ]
    },
    "evidence": {
      "text": "Bohr compares the model with atomic spectra, particularly hydrogen, within the original paper.",
      "sourceIds": [
        "bohr-1913"
      ]
    },
    "limitations": {
      "text": "The orbit construction does not provide the later wavefunction description or a general treatment of many-electron atoms.",
      "sourceIds": [
        "bohr-1913"
      ]
    },
    "questions": {
      "text": "Which steps are classical mechanics, and which new postulates are essential to obtain the spectrum?",
      "sourceIds": [
        "bohr-1913"
      ]
    },
    "prerequisites": [
      "planck-quanta"
    ]
  },
  "matrix-mechanics": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "How can quantum dynamics be expressed using transitions between observable states?",
      "sourceIds": [
        "born-jordan-1925"
      ]
    },
    "scope": {
      "text": "Dynamical quantities are represented by arrays of transition amplitudes with matrix multiplication.",
      "sourceIds": [
        "born-jordan-1925"
      ]
    },
    "assumptions": {
      "text": "Canonical variables obey a quantum commutation rule rather than commuting classical multiplication.",
      "sourceIds": [
        "born-jordan-1925"
      ]
    },
    "predictions": {
      "text": "The formalism yields operator equations of motion and quantized oscillator dynamics.",
      "sourceIds": [
        "born-jordan-1925"
      ]
    },
    "evidence": {
      "text": "Born and Jordan develop the algebraic formulation and its application to quantum mechanics.",
      "sourceIds": [
        "born-jordan-1925"
      ]
    },
    "limitations": {
      "text": "The representation needs a specified Hamiltonian and state; noncommutativity alone does not determine a physical model.",
      "sourceIds": [
        "born-jordan-1925"
      ]
    },
    "questions": {
      "text": "How do matrix elements relate to transition frequencies and to the same system in wave mechanics?",
      "sourceIds": [
        "born-jordan-1925"
      ]
    },
    "prerequisites": [
      "bohr-model"
    ]
  },
  "wave-mechanics": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "How does a quantum wavefunction evolve and determine stationary energies?",
      "sourceIds": [
        "profile-mit-wave-2013"
      ]
    },
    "scope": {
      "text": "The Schrödinger equation describes nonrelativistic motion in a specified potential.",
      "sourceIds": [
        "profile-mit-wave-2013"
      ]
    },
    "assumptions": {
      "text": "The Hamiltonian, boundary conditions and a normalized state define the problem.",
      "sourceIds": [
        "profile-mit-wave-2013"
      ]
    },
    "predictions": {
      "text": "Energy eigenfunctions and superpositions determine stationary distributions and time-dependent interference.",
      "sourceIds": [
        "profile-mit-wave-2013"
      ]
    },
    "evidence": {
      "text": "The lecture notes derive probability conservation and energy-eigenvalue methods from the formulation.",
      "sourceIds": [
        "profile-mit-wave-2013"
      ]
    },
    "limitations": {
      "text": "This single-particle treatment does not include relativistic particle creation or a quantized radiation field.",
      "sourceIds": [
        "profile-mit-wave-2013"
      ]
    },
    "questions": {
      "text": "How do boundary conditions change the spectrum without changing the differential equation?",
      "sourceIds": [
        "profile-mit-wave-2013"
      ]
    },
    "prerequisites": [
      "planck-quanta"
    ]
  },
  "born-rule": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "How do quantum amplitudes connect to observed outcome probabilities?",
      "sourceIds": [
        "born-probability-1926"
      ]
    },
    "scope": {
      "text": "Born interprets collision-wave amplitudes statistically; the modern rule assigns probabilities from squared amplitudes.",
      "sourceIds": [
        "born-probability-1926"
      ]
    },
    "assumptions": {
      "text": "A normalized quantum state and a specified measurement define the alternatives.",
      "sourceIds": [
        "born-probability-1926"
      ]
    },
    "predictions": {
      "text": "The rule assigns distributions of outcomes rather than a definite individual scattering result.",
      "sourceIds": [
        "born-probability-1926"
      ]
    },
    "evidence": {
      "text": "The original collision analysis introduces the probabilistic interpretation of quantum mechanics.",
      "sourceIds": [
        "born-probability-1926"
      ]
    },
    "limitations": {
      "text": "A probability rule alone supplies neither the system Hamiltonian nor a mechanism selecting an individual outcome.",
      "sourceIds": [
        "born-probability-1926"
      ]
    },
    "questions": {
      "text": "How does changing the measurement basis change the probabilities for the same state?",
      "sourceIds": [
        "born-probability-1926"
      ]
    },
    "prerequisites": [
      "wave-mechanics"
    ]
  },
  "uncertainty": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "Which spreads of measurement outcomes are compatible with a quantum state?",
      "sourceIds": [
        "profile-mit-uncertainty-2013"
      ]
    },
    "scope": {
      "text": "Operator uncertainty relations bound products of standard deviations for observables.",
      "sourceIds": [
        "profile-mit-uncertainty-2013"
      ]
    },
    "assumptions": {
      "text": "The state must have the relevant finite moments and lie in the required operator domains.",
      "sourceIds": [
        "profile-mit-uncertainty-2013"
      ]
    },
    "predictions": {
      "text": "Position and momentum spreads obey a lower bound fixed by their canonical commutator.",
      "sourceIds": [
        "profile-mit-uncertainty-2013"
      ]
    },
    "evidence": {
      "text": "The notes derive the bound using state vectors and operator algebra.",
      "sourceIds": [
        "profile-mit-uncertainty-2013"
      ]
    },
    "limitations": {
      "text": "This preparation-uncertainty statement is not automatically a bound on an apparatus’s measurement error or disturbance.",
      "sourceIds": [
        "profile-mit-uncertainty-2013"
      ]
    },
    "questions": {
      "text": "Which states attain the position–momentum bound, and what changes for a different observable pair?",
      "sourceIds": [
        "profile-mit-uncertainty-2013"
      ]
    },
    "prerequisites": [
      "matrix-mechanics",
      "born-rule"
    ]
  },
  "dirac-electron-theory": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "How can electron wave mechanics respect special relativity?",
      "sourceIds": [
        "dirac-electron-1928"
      ]
    },
    "scope": {
      "text": "A first-order relativistic wave equation uses multicomponent spinor states.",
      "sourceIds": [
        "dirac-electron-1928"
      ]
    },
    "assumptions": {
      "text": "The equation imposes relativistic energy–momentum structure and a specified electromagnetic coupling.",
      "sourceIds": [
        "dirac-electron-1928"
      ]
    },
    "predictions": {
      "text": "Spin and magnetic behavior emerge within the relativistic electron description.",
      "sourceIds": [
        "dirac-electron-1928"
      ]
    },
    "evidence": {
      "text": "Dirac’s construction derives the electron equation and analyzes its atomic implications.",
      "sourceIds": [
        "dirac-electron-1928"
      ]
    },
    "limitations": {
      "text": "A single-particle reading faces negative-energy states; interacting creation and annihilation require quantum field theory.",
      "sourceIds": [
        "dirac-electron-1928"
      ]
    },
    "questions": {
      "text": "How does the nonrelativistic limit expose spin-dependent terms absent from the scalar Schrödinger equation?",
      "sourceIds": [
        "dirac-electron-1928"
      ]
    },
    "prerequisites": [
      "wave-mechanics"
    ]
  },
  "path-integral": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "Can quantum transition amplitudes be expressed directly through spacetime histories?",
      "sourceIds": [
        "feynman-path-1948"
      ]
    },
    "scope": {
      "text": "Amplitudes are assembled from paths weighted by a phase determined by the action.",
      "sourceIds": [
        "feynman-path-1948"
      ]
    },
    "assumptions": {
      "text": "A specified action, boundary data and a suitable limiting prescription define the sum.",
      "sourceIds": [
        "feynman-path-1948"
      ]
    },
    "predictions": {
      "text": "The construction reproduces nonrelativistic quantum evolution and interference between histories.",
      "sourceIds": [
        "feynman-path-1948"
      ]
    },
    "evidence": {
      "text": "Feynman presents the formulation and its correspondence with conventional quantum mechanics.",
      "sourceIds": [
        "feynman-path-1948"
      ]
    },
    "limitations": {
      "text": "The real-time sum is not an ordinary positive probability distribution; convergence and measures need care.",
      "sourceIds": [
        "feynman-path-1948"
      ]
    },
    "questions": {
      "text": "How does stationary phase relate the quantum amplitude to classical trajectories?",
      "sourceIds": [
        "feynman-path-1948"
      ]
    },
    "prerequisites": [
      "wave-mechanics"
    ]
  },
  "density-operator": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "How can both pure states and statistical mixtures be represented uniformly?",
      "sourceIds": [
        "profile-harrow-states-2018"
      ]
    },
    "scope": {
      "text": "A positive, unit-trace operator encodes the measurement statistics of an ensemble.",
      "sourceIds": [
        "profile-harrow-states-2018"
      ]
    },
    "assumptions": {
      "text": "The finite-dimensional presentation uses a Hilbert space and normalized, nonnegative ensemble weights.",
      "sourceIds": [
        "profile-harrow-states-2018"
      ]
    },
    "predictions": {
      "text": "Expectation values follow the trace rule; different ensembles can produce the same density operator.",
      "sourceIds": [
        "profile-harrow-states-2018"
      ]
    },
    "evidence": {
      "text": "Harrow’s notes derive the representation and compare pure and maximally mixed states.",
      "sourceIds": [
        "profile-harrow-states-2018"
      ]
    },
    "limitations": {
      "text": "The operator does not uniquely identify the particular ensemble decomposition used to prepare it.",
      "sourceIds": [
        "profile-harrow-states-2018"
      ]
    },
    "questions": {
      "text": "How can different mixtures yield identical statistics for every measurement on the system?",
      "sourceIds": [
        "profile-harrow-states-2018"
      ]
    },
    "prerequisites": [
      "born-rule"
    ]
  },
  "bell": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "Can a local hidden-variable account reproduce all quantum correlations?",
      "sourceIds": [
        "bell-1964"
      ]
    },
    "scope": {
      "text": "Bell analyzes correlations for entangled systems with spatially separated measurement settings.",
      "sourceIds": [
        "bell-1964"
      ]
    },
    "assumptions": {
      "text": "The argument imposes local outcome dependence, a shared hidden-state description and setting-independent hidden-state statistics.",
      "sourceIds": [
        "bell-1964"
      ]
    },
    "predictions": {
      "text": "These assumptions constrain correlations in a way that quantum predictions can violate.",
      "sourceIds": [
        "bell-1964"
      ]
    },
    "evidence": {
      "text": "The 1964 paper supplies a theoretical incompatibility argument; it is not itself an experimental report.",
      "sourceIds": [
        "bell-1964"
      ]
    },
    "limitations": {
      "text": "The conclusion concerns the joint assumptions and does not imply controllable faster-than-light communication.",
      "sourceIds": [
        "bell-1964"
      ]
    },
    "questions": {
      "text": "Which locality and independence assumptions enter each step of the inequality?",
      "sourceIds": [
        "bell-1964"
      ]
    },
    "prerequisites": [
      "born-rule"
    ]
  },
  "kochen-specker": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "Can all quantum observables possess preassigned values independent of measurement context?",
      "sourceIds": [
        "profile-kochen-specker-1967"
      ]
    },
    "scope": {
      "text": "The theorem studies value assignments compatible with functional relations between observables.",
      "sourceIds": [
        "profile-kochen-specker-1967"
      ]
    },
    "assumptions": {
      "text": "In Hilbert-space dimension at least three, assignments must be noncontextual and preserve the required relations.",
      "sourceIds": [
        "profile-kochen-specker-1967"
      ]
    },
    "predictions": {
      "text": "No global assignment can satisfy those conditions for the constructed collection of observables.",
      "sourceIds": [
        "profile-kochen-specker-1967"
      ]
    },
    "evidence": {
      "text": "Kochen and Specker give a mathematical impossibility proof.",
      "sourceIds": [
        "profile-kochen-specker-1967"
      ]
    },
    "limitations": {
      "text": "The theorem does not exclude contextual hidden-variable models or by itself specify an experimental noise threshold.",
      "sourceIds": [
        "profile-kochen-specker-1967"
      ]
    },
    "questions": {
      "text": "Which shared observable forces two measurement contexts to use the same value?",
      "sourceIds": [
        "profile-kochen-specker-1967"
      ]
    },
    "prerequisites": [
      "matrix-mechanics"
    ]
  },
  "pbr-theorem": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "Can distinct pure quantum states merely describe overlapping knowledge of the same underlying physical state?",
      "sourceIds": [
        "pbr-2012"
      ]
    },
    "scope": {
      "text": "PBR analyze ontological models that reproduce quantum measurement predictions.",
      "sourceIds": [
        "pbr-2012"
      ]
    },
    "assumptions": {
      "text": "Independently prepared systems are assumed to possess independently distributed physical states.",
      "sourceIds": [
        "pbr-2012"
      ]
    },
    "predictions": {
      "text": "Under preparation independence, the relevant overlapping-state models contradict quantum predictions.",
      "sourceIds": [
        "pbr-2012"
      ]
    },
    "evidence": {
      "text": "The paper establishes a conditional no-go result, not a direct observation of a wavefunction as a material object.",
      "sourceIds": [
        "pbr-2012"
      ]
    },
    "limitations": {
      "text": "Its force depends on the ontological-model setting and preparation-independence assumption.",
      "sourceIds": [
        "pbr-2012"
      ]
    },
    "questions": {
      "text": "What changes if independently chosen preparations do not imply independent underlying states?",
      "sourceIds": [
        "pbr-2012"
      ]
    },
    "prerequisites": [
      "born-rule"
    ]
  },
  "everett": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "Can quantum mechanics describe observers and measurements without a separate collapse rule?",
      "sourceIds": [
        "everett-1957"
      ]
    },
    "scope": {
      "text": "The relative-state formulation treats the combined observer–system state quantum mechanically.",
      "sourceIds": [
        "everett-1957"
      ]
    },
    "assumptions": {
      "text": "Universal wave mechanics is retained, including linear evolution for measurement interactions.",
      "sourceIds": [
        "everett-1957"
      ]
    },
    "predictions": {
      "text": "Correlations allow a subsystem state to be specified relative to an observer record.",
      "sourceIds": [
        "everett-1957"
      ]
    },
    "evidence": {
      "text": "Everett presents a theoretical interpretation and measurement analysis, not a distinct experimental test of branching.",
      "sourceIds": [
        "everett-1957"
      ]
    },
    "limitations": {
      "text": "The relative-state prescription requires an account of probabilities and of the physical meaning of observer records.",
      "sourceIds": [
        "everett-1957"
      ]
    },
    "questions": {
      "text": "How should an observer connect branch-relative records with the ordinary statistical use of the theory?",
      "sourceIds": [
        "everett-1957"
      ]
    },
    "prerequisites": [
      "wave-mechanics",
      "born-rule"
    ]
  },
  "bohmian": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "Can quantum predictions coexist with an account of definite particle configurations?",
      "sourceIds": [
        "bohm-1952-i"
      ]
    },
    "scope": {
      "text": "Bohm supplements the wavefunction with particle variables governed by an additional dynamical description.",
      "sourceIds": [
        "bohm-1952-i"
      ]
    },
    "assumptions": {
      "text": "The standard statistical predictions use the appropriate quantum-equilibrium distribution of configurations.",
      "sourceIds": [
        "bohm-1952-i"
      ]
    },
    "predictions": {
      "text": "The model reproduces ordinary nonrelativistic predictions in its stated setting while assigning definite trajectories.",
      "sourceIds": [
        "bohm-1952-i"
      ]
    },
    "evidence": {
      "text": "The paper constructs an alternative description and compares it with conventional quantum mechanics.",
      "sourceIds": [
        "bohm-1952-i"
      ]
    },
    "limitations": {
      "text": "Agreement in this setting is not an experimental distinction; relativistic and field-theoretic extensions require further structure.",
      "sourceIds": [
        "bohm-1952-i"
      ]
    },
    "questions": {
      "text": "How does a many-particle guiding state encode correlations between separated configurations?",
      "sourceIds": [
        "bohm-1952-i"
      ]
    },
    "prerequisites": [
      "wave-mechanics"
    ]
  },
  "qbism": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "What role does a quantum state play in an agent’s expectations about experiments?",
      "sourceIds": [
        "qbism-2013"
      ]
    },
    "scope": {
      "text": "QBism treats quantum probabilities as personal judgments constrained by quantum coherence requirements.",
      "sourceIds": [
        "qbism-2013"
      ]
    },
    "assumptions": {
      "text": "The approach adopts a personalist Bayesian reading of probability and of measurement outcomes for an agent.",
      "sourceIds": [
        "qbism-2013"
      ]
    },
    "predictions": {
      "text": "The Born rule becomes an additional normative relation among probability assignments.",
      "sourceIds": [
        "qbism-2013"
      ]
    },
    "evidence": {
      "text": "Fuchs and Schack develop the consistency framework and its informational representation.",
      "sourceIds": [
        "qbism-2013"
      ]
    },
    "limitations": {
      "text": "This interpretation does not turn subjective probability assignments into an independently measured physical wavefield.",
      "sourceIds": [
        "qbism-2013"
      ]
    },
    "questions": {
      "text": "How does the quantum coherence constraint go beyond ordinary Bayesian probability rules?",
      "sourceIds": [
        "qbism-2013"
      ]
    },
    "prerequisites": [
      "born-rule"
    ]
  },
  "decoherence": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "Why can interference between some alternatives become inaccessible to local observations?",
      "sourceIds": [
        "zurek-decoherence"
      ]
    },
    "scope": {
      "text": "Environment-induced entanglement suppresses selected coherences in a subsystem’s reduced state.",
      "sourceIds": [
        "zurek-decoherence"
      ]
    },
    "assumptions": {
      "text": "The system–environment coupling, initial state and accessible observables determine the relevant timescales and basis.",
      "sourceIds": [
        "zurek-decoherence"
      ]
    },
    "predictions": {
      "text": "Robust pointer states can emerge while interference between alternatives is strongly reduced.",
      "sourceIds": [
        "zurek-decoherence"
      ]
    },
    "evidence": {
      "text": "Zurek reviews dynamical models of decoherence and environment-induced selection.",
      "sourceIds": [
        "zurek-decoherence"
      ]
    },
    "limitations": {
      "text": "Reduced interference alone does not select one unique outcome from the global unitary state.",
      "sourceIds": [
        "zurek-decoherence"
      ]
    },
    "questions": {
      "text": "Which environmental interaction selects the stable states in a particular experiment?",
      "sourceIds": [
        "zurek-decoherence"
      ]
    },
    "prerequisites": [
      "density-operator"
    ]
  },
  "consistent-histories": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "When can probabilities be assigned to alternatives spanning several times?",
      "sourceIds": [
        "griffiths-1984"
      ]
    },
    "scope": {
      "text": "A history is a temporal sequence of quantum propositions within a chosen family.",
      "sourceIds": [
        "griffiths-1984"
      ]
    },
    "assumptions": {
      "text": "The family must satisfy the consistency condition needed for ordinary probability sum rules.",
      "sourceIds": [
        "griffiths-1984"
      ]
    },
    "predictions": {
      "text": "Compatible histories admit joint and conditional probabilities without inserting measurement as a fundamental primitive.",
      "sourceIds": [
        "griffiths-1984"
      ]
    },
    "evidence": {
      "text": "Griffiths constructs the framework and analyzes its interpretation.",
      "sourceIds": [
        "griffiths-1984"
      ]
    },
    "limitations": {
      "text": "Incompatible families cannot simply be combined into one universal classical sample space.",
      "sourceIds": [
        "griffiths-1984"
      ]
    },
    "questions": {
      "text": "How does changing the consistent family change the questions that can meaningfully be asked?",
      "sourceIds": [
        "griffiths-1984"
      ]
    },
    "prerequisites": [
      "born-rule"
    ]
  },
  "quantum-information": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "What resources are needed to encode information carried by quantum states?",
      "sourceIds": [
        "schumacher-1995"
      ]
    },
    "scope": {
      "text": "Schumacher’s coding result supplies a central example: compression of a quantum source.",
      "sourceIds": [
        "schumacher-1995"
      ]
    },
    "assumptions": {
      "text": "The coding theorem treats long sequences from a specified source with an asymptotic fidelity criterion.",
      "sourceIds": [
        "schumacher-1995"
      ]
    },
    "predictions": {
      "text": "The source density operator’s von Neumann entropy sets the optimal asymptotic compression rate.",
      "sourceIds": [
        "schumacher-1995"
      ]
    },
    "evidence": {
      "text": "The cited paper establishes a coding theorem rather than measuring a particular communication device.",
      "sourceIds": [
        "schumacher-1995"
      ]
    },
    "limitations": {
      "text": "Compression is one task within quantum information; noisy-channel capacities and finite-block performance need separate results.",
      "sourceIds": [
        "schumacher-1995"
      ]
    },
    "questions": {
      "text": "How does a source’s mixed-state spectrum determine its compressibility?",
      "sourceIds": [
        "schumacher-1995"
      ]
    },
    "prerequisites": [
      "density-operator"
    ]
  },
  "entanglement-theory": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "Which nonseparable correlations can be detected, quantified and converted into useful resources?",
      "sourceIds": [
        "wave4-entanglement-review-2009"
      ]
    },
    "scope": {
      "text": "Entanglement theory studies states and transformations under specified local operations and communication.",
      "sourceIds": [
        "wave4-entanglement-review-2009"
      ]
    },
    "assumptions": {
      "text": "The partition, allowed operations and resource accounting must be fixed.",
      "sourceIds": [
        "wave4-entanglement-review-2009"
      ]
    },
    "predictions": {
      "text": "States differ in their conversion possibilities, distillability and entanglement measures.",
      "sourceIds": [
        "wave4-entanglement-review-2009"
      ]
    },
    "evidence": {
      "text": "The Horodecki review surveys mathematical criteria, operational tasks and their physical applications.",
      "sourceIds": [
        "wave4-entanglement-review-2009"
      ]
    },
    "limitations": {
      "text": "No single simple measure orders all mixed or multipartite states for every task.",
      "sourceIds": [
        "wave4-entanglement-review-2009"
      ]
    },
    "questions": {
      "text": "Which entanglement property is actually required by the information-processing task under study?",
      "sourceIds": [
        "wave4-entanglement-review-2009"
      ]
    },
    "prerequisites": [
      "density-operator"
    ]
  },
  "quantum-error-correction": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "How can encoded quantum information survive a specified family of errors?",
      "sourceIds": [
        "knill-laflamme-1997"
      ]
    },
    "scope": {
      "text": "A code subspace and recovery operation protect logical states against errors on a larger physical system.",
      "sourceIds": [
        "knill-laflamme-1997"
      ]
    },
    "assumptions": {
      "text": "The noise model, encoding and admissible recovery operations are specified.",
      "sourceIds": [
        "knill-laflamme-1997"
      ]
    },
    "predictions": {
      "text": "The Knill–Laflamme condition characterizes when the error set is exactly correctable on the code.",
      "sourceIds": [
        "knill-laflamme-1997"
      ]
    },
    "evidence": {
      "text": "The paper derives necessary and sufficient correction conditions and develops coding results.",
      "sourceIds": [
        "knill-laflamme-1997"
      ]
    },
    "limitations": {
      "text": "Exact correctability for a model does not establish a hardware threshold or eliminate the cost of noisy recovery.",
      "sourceIds": [
        "knill-laflamme-1997"
      ]
    },
    "questions": {
      "text": "Which errors violate the code condition, and how should the encoding be changed?",
      "sourceIds": [
        "knill-laflamme-1997"
      ]
    },
    "prerequisites": [
      "quantum-information"
    ]
  },
  "quantum-shannon-theory": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "What are the ultimate communication rates allowed by quantum states and channels?",
      "sourceIds": [
        "wave3-wilde-shannon-2017"
      ]
    },
    "scope": {
      "text": "Quantum Shannon theory studies coding tasks, capacities and resource tradeoffs.",
      "sourceIds": [
        "wave3-wilde-shannon-2017"
      ]
    },
    "assumptions": {
      "text": "A channel model, assistance resources, error criterion and asymptotic regime define each theorem.",
      "sourceIds": [
        "wave3-wilde-shannon-2017"
      ]
    },
    "predictions": {
      "text": "Achievability and converse results bound rates for classical and quantum communication.",
      "sourceIds": [
        "wave3-wilde-shannon-2017"
      ]
    },
    "evidence": {
      "text": "Wilde develops the mathematical coding framework and representative capacity theorems.",
      "sourceIds": [
        "wave3-wilde-shannon-2017"
      ]
    },
    "limitations": {
      "text": "Capacity expressions may require optimization over many channel uses; finite-block guarantees are separate questions.",
      "sourceIds": [
        "wave3-wilde-shannon-2017"
      ]
    },
    "questions": {
      "text": "How does allowing shared entanglement change a channel’s communication task and achievable rate?",
      "sourceIds": [
        "wave3-wilde-shannon-2017"
      ]
    },
    "prerequisites": [
      "quantum-information",
      "entanglement-theory"
    ]
  },
  "quantum-metrology": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "How can quantum preparation and measurement improve parameter estimation?",
      "sourceIds": [
        "giovannetti-metrology-2011"
      ]
    },
    "scope": {
      "text": "Quantum metrology analyzes precision limits and protocols using quantum resources.",
      "sourceIds": [
        "giovannetti-metrology-2011"
      ]
    },
    "assumptions": {
      "text": "The parameter encoding, noise, measurement class and resource count must be explicit.",
      "sourceIds": [
        "giovannetti-metrology-2011"
      ]
    },
    "predictions": {
      "text": "Appropriate quantum strategies can improve precision scaling over corresponding classical benchmarks.",
      "sourceIds": [
        "giovannetti-metrology-2011"
      ]
    },
    "evidence": {
      "text": "The review surveys theoretical bounds and proposed or realized sensing strategies.",
      "sourceIds": [
        "giovannetti-metrology-2011"
      ]
    },
    "limitations": {
      "text": "Ideal scaling is not universal: noise and preparation or measurement costs can alter the advantage.",
      "sourceIds": [
        "giovannetti-metrology-2011"
      ]
    },
    "questions": {
      "text": "Does a claimed improvement survive when all resources and dominant noise sources are counted?",
      "sourceIds": [
        "giovannetti-metrology-2011"
      ]
    },
    "prerequisites": [
      "quantum-information"
    ]
  },
  "open-quantum-systems": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "How does interaction with an environment affect a quantum subsystem?",
      "sourceIds": [
        "profile-breuer-memory-2016"
      ]
    },
    "scope": {
      "text": "Reduced dynamics describe relaxation, coherence loss and possible memory effects.",
      "sourceIds": [
        "profile-breuer-memory-2016"
      ]
    },
    "assumptions": {
      "text": "The system–environment model and initial correlations determine which reduced description is justified.",
      "sourceIds": [
        "profile-breuer-memory-2016"
      ]
    },
    "predictions": {
      "text": "Memoryless approximations can yield semigroup evolution, while other regimes show revivals and information backflow.",
      "sourceIds": [
        "profile-breuer-memory-2016"
      ]
    },
    "evidence": {
      "text": "The review compares definitions and examples of non-Markovian behavior and discusses experimental detection.",
      "sourceIds": [
        "profile-breuer-memory-2016"
      ]
    },
    "limitations": {
      "text": "A Markovian master equation is a restricted model, and different memory criteria need not be equivalent.",
      "sourceIds": [
        "profile-breuer-memory-2016"
      ]
    },
    "questions": {
      "text": "Which observable distinguishes environmental memory from a poorly fitted memoryless model?",
      "sourceIds": [
        "profile-breuer-memory-2016"
      ]
    },
    "prerequisites": [
      "density-operator"
    ]
  },
  "gksl": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "What generators produce continuous, completely positive quantum dynamical semigroups?",
      "sourceIds": [
        "lindblad-1976"
      ]
    },
    "scope": {
      "text": "The GKSL structure describes Hamiltonian motion combined with dissipative terms.",
      "sourceIds": [
        "lindblad-1976"
      ]
    },
    "assumptions": {
      "text": "The relevant semigroup is trace preserving and completely positive; Lindblad’s theorem treats bounded generators.",
      "sourceIds": [
        "lindblad-1976"
      ]
    },
    "predictions": {
      "text": "The generator has a constrained operator form that preserves valid density operators.",
      "sourceIds": [
        "lindblad-1976"
      ]
    },
    "evidence": {
      "text": "The cited work proves a structural result for quantum dynamical semigroups.",
      "sourceIds": [
        "lindblad-1976"
      ]
    },
    "limitations": {
      "text": "The theorem does not make every reduced physical evolution Markovian or justify an arbitrary microscopic approximation.",
      "sourceIds": [
        "lindblad-1976"
      ]
    },
    "questions": {
      "text": "Which approximation in a concrete bath model permits a time-homogeneous semigroup description?",
      "sourceIds": [
        "lindblad-1976"
      ]
    },
    "prerequisites": [
      "open-quantum-systems"
    ]
  },
  "quantum-zeno": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "How can repeated interventions change quantum evolution?",
      "sourceIds": [
        "discovery-zeno-review-2012"
      ]
    },
    "scope": {
      "text": "Zeno dynamics concern suppression or restriction of transitions by measurements or suitable strong coupling.",
      "sourceIds": [
        "discovery-zeno-review-2012"
      ]
    },
    "assumptions": {
      "text": "The monitoring protocol and timescale must be specified; ideal frequent projections are a limiting case.",
      "sourceIds": [
        "discovery-zeno-review-2012"
      ]
    },
    "predictions": {
      "text": "Survival can be enhanced, or evolution can be constrained to selected subspaces.",
      "sourceIds": [
        "discovery-zeno-review-2012"
      ]
    },
    "evidence": {
      "text": "The review discusses theoretical mechanisms, experiments and applications of Zeno behavior.",
      "sourceIds": [
        "discovery-zeno-review-2012"
      ]
    },
    "limitations": {
      "text": "Monitoring need not always slow decay; the regime can instead favor an anti-Zeno response.",
      "sourceIds": [
        "discovery-zeno-review-2012"
      ]
    },
    "questions": {
      "text": "Which timescale separates inhibited evolution from measurement-enhanced transitions?",
      "sourceIds": [
        "discovery-zeno-review-2012"
      ]
    },
    "prerequisites": [
      "born-rule",
      "open-quantum-systems"
    ]
  },
  "berry-phase": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "What phase remains when an eigenstate is transported around a closed parameter cycle?",
      "sourceIds": [
        "discovery-berry-1984"
      ]
    },
    "scope": {
      "text": "Berry’s construction separates a geometric phase from the ordinary dynamical phase.",
      "sourceIds": [
        "discovery-berry-1984"
      ]
    },
    "assumptions": {
      "text": "The original nondegenerate treatment follows an instantaneous eigenstate adiabatically around the circuit.",
      "sourceIds": [
        "discovery-berry-1984"
      ]
    },
    "predictions": {
      "text": "The state acquires a phase depending on the geometry of the parameter path.",
      "sourceIds": [
        "discovery-berry-1984"
      ]
    },
    "evidence": {
      "text": "The paper derives the phase and analyzes examples near degeneracies.",
      "sourceIds": [
        "discovery-berry-1984"
      ]
    },
    "limitations": {
      "text": "Degenerate states require a more general treatment, and nonadiabatic transitions can spoil the original approximation.",
      "sourceIds": [
        "discovery-berry-1984"
      ]
    },
    "questions": {
      "text": "How can an interference experiment separate the geometric phase from the dynamical contribution?",
      "sourceIds": [
        "discovery-berry-1984"
      ]
    },
    "prerequisites": [
      "wave-mechanics"
    ]
  },
  "adiabatic-qc": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "Can the ground state of a problem Hamiltonian be reached by slowly changing a simpler Hamiltonian?",
      "sourceIds": [
        "farhi-adiabatic-2000"
      ]
    },
    "scope": {
      "text": "Adiabatic computation interpolates between an easily prepared system and one encoding a computational task.",
      "sourceIds": [
        "farhi-adiabatic-2000"
      ]
    },
    "assumptions": {
      "text": "Runtime and interpolation must control transitions out of the desired state, especially near small spectral gaps.",
      "sourceIds": [
        "farhi-adiabatic-2000"
      ]
    },
    "predictions": {
      "text": "The final ground state can encode a solution when the evolution meets the required adiabatic conditions.",
      "sourceIds": [
        "farhi-adiabatic-2000"
      ]
    },
    "evidence": {
      "text": "Farhi and colleagues analyze the proposal and selected examples.",
      "sourceIds": [
        "farhi-adiabatic-2000"
      ]
    },
    "limitations": {
      "text": "The proposal does not establish efficient scaling for arbitrary hard instances; minimum gaps can be prohibitive.",
      "sourceIds": [
        "farhi-adiabatic-2000"
      ]
    },
    "questions": {
      "text": "How does the smallest gap vary with problem size for the chosen instance family?",
      "sourceIds": [
        "farhi-adiabatic-2000"
      ]
    },
    "prerequisites": [
      "wave-mechanics"
    ]
  },
  "stabilizer-formalism": {
    "reviewedAt": "2026-09-26",
    "problem": {
      "text": "How can useful quantum codes be described and manipulated algebraically?",
      "sourceIds": [
        "gottesman-stabilizer-1997"
      ]
    },
    "scope": {
      "text": "Stabilizer codes specify a subspace through a commuting subgroup of Pauli operators.",
      "sourceIds": [
        "gottesman-stabilizer-1997"
      ]
    },
    "assumptions": {
      "text": "The chosen generators must define a consistent code and the error model determines the required protection.",
      "sourceIds": [
        "gottesman-stabilizer-1997"
      ]
    },
    "predictions": {
      "text": "Pauli errors yield syndrome information that can support recovery and fault-tolerant code operations.",
      "sourceIds": [
        "gottesman-stabilizer-1997"
      ]
    },
    "evidence": {
      "text": "Gottesman develops the coding formalism, examples, bounds and fault-tolerant constructions.",
      "sourceIds": [
        "gottesman-stabilizer-1997"
      ]
    },
    "limitations": {
      "text": "The stabilizer description does not by itself supply universal encoded computation or guarantee a physical error threshold.",
      "sourceIds": [
        "gottesman-stabilizer-1997"
      ]
    },
    "questions": {
      "text": "How do logical operators act without changing the measured stabilizer syndrome?",
      "sourceIds": [
        "gottesman-stabilizer-1997"
      ]
    },
    "prerequisites": [
      "quantum-error-correction"
    ]
  }
});

window.QI_PROFILES.learningPaths.find(p=>p.id==="gravity-time").primer = {
  "title": "Start here: clocks, gravity and proper time",
  "reviewedAt": "2026-09-26",
  "paragraphs": [
    {
      "text": "A clock measures proper time along its own worldline. Different paths between events can accumulate different elapsed times. A coordinate time is a label used to describe spacetime; it is not a universal clock shared by every observer.",
      "sourceIds": [
        "carroll-gr-notes-1997"
      ]
    },
    {
      "text": "For a clock held at fixed radius outside a spherical, nonrotating mass, Schwarzschild geometry gives the rate below. Here M is the mass, r the areal radius, G Newton’s constant, c the speed of light, and t is normalized to a stationary clock at infinity. This expression requires r > 2GM/c² and does not describe a freely falling clock.",
      "sourceIds": [
        "carroll-gr-notes-1997"
      ]
    },
    {
      "text": "At a larger radius the static clock runs faster relative to t, approaching the distant-clock rate. This comparison does not require a new substance or an inverse black hole. The Unruh effect addresses a different question: how acceleration changes a quantum detector’s response.",
      "sourceIds": [
        "carroll-gr-notes-1997",
        "unruh-1976"
      ]
    }
  ],
  "equation": "dτ/dt = √(1 − 2GM/(rc²))",
  "sourceLocator": "Carroll: Sections 1 (proper time), 4 (gravitational redshift), 7 (Schwarzschild geometry)."
};
