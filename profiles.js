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
