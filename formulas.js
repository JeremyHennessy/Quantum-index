window.QI_FORMULAS = {
  "version": "v6",
  "scope": "Canonical, defining, exact, schematic, approximate, limiting and derived equations across the indexed quantum-theory landscape. Formula-bearing coverage is audited separately from theory coverage; this is not a claim of every formula ever derived.",
  "formulas": [
    {
      "id": "planck-relation",
      "name": "Planck–Einstein relation",
      "category": "Core quantum mechanics",
      "latex": "E=h\\nu=\\hbar\\omega",
      "plain": "E = h nu = hbar omega",
      "description": "Relates the energy of a quantum of radiation to its frequency.",
      "theoryIds": [
        "planck-quanta",
        "light-quantum"
      ],
      "sourceIds": [
        "planck-1901",
        "einstein-light-1905"
      ],
      "tags": [
        "energy",
        "photon",
        "frequency"
      ]
    },
    {
      "id": "photon-momentum",
      "name": "Photon momentum",
      "category": "Core quantum mechanics",
      "latex": "p=\\frac{h}{\\lambda}=\\hbar k",
      "plain": "p = h/lambda = hbar k",
      "description": "Relates photon momentum to wavelength and wave number.",
      "theoryIds": [
        "light-quantum"
      ],
      "sourceIds": [
        "einstein-light-1905"
      ],
      "tags": [
        "photon",
        "momentum"
      ]
    },
    {
      "id": "de-broglie",
      "name": "de Broglie wavelength",
      "category": "Core quantum mechanics",
      "latex": "\\lambda=\\frac{h}{p}",
      "plain": "lambda = h/p",
      "description": "Associates a wavelength with matter of momentum p.",
      "theoryIds": [
        "de-broglie"
      ],
      "sourceIds": [
        "debroglie-1925"
      ],
      "tags": [
        "matter waves"
      ]
    },
    {
      "id": "tdse",
      "name": "Time-dependent Schrödinger equation",
      "category": "Wave mechanics",
      "latex": "i\\hbar\\frac{\\partial}{\\partial t}\\Psi(\\mathbf r,t)=\\hat H\\Psi(\\mathbf r,t)",
      "plain": "i hbar dPsi/dt = H Psi",
      "description": "Fundamental unitary evolution equation of nonrelativistic wave mechanics.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "schrodinger-1926"
      ],
      "tags": [
        "Schrodinger",
        "evolution"
      ]
    },
    {
      "id": "tise",
      "name": "Time-independent Schrödinger equation",
      "category": "Wave mechanics",
      "latex": "\\hat H\\psi_n=E_n\\psi_n",
      "plain": "H psi_n = E_n psi_n",
      "description": "Stationary-state eigenvalue equation obtained when the Hamiltonian is time independent.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "schrodinger-1926"
      ],
      "tags": [
        "eigenvalue",
        "stationary state"
      ]
    },
    {
      "id": "born-probability",
      "name": "Born probability density",
      "category": "Core quantum mechanics",
      "latex": "P(\\mathbf r,t)=|\\Psi(\\mathbf r,t)|^2",
      "plain": "P = |Psi|^2",
      "description": "Gives position probability density from a normalized wavefunction.",
      "theoryIds": [
        "born-rule",
        "wave-mechanics"
      ],
      "sourceIds": [
        "born-probability-1926"
      ],
      "tags": [
        "Born rule"
      ]
    },
    {
      "id": "born-projector",
      "name": "Born rule for a projector",
      "category": "Core quantum mechanics",
      "latex": "p(a)=\\langle\\psi|\\hat P_a|\\psi\\rangle",
      "plain": "p(a) = <psi|P_a|psi>",
      "description": "Probability of a projective measurement outcome.",
      "theoryIds": [
        "born-rule",
        "von-neumann"
      ],
      "sourceIds": [
        "born-probability-1926",
        "vonneumann-probability-1927"
      ],
      "tags": [
        "measurement"
      ]
    },
    {
      "id": "trace-born",
      "name": "Born rule in density-operator form",
      "category": "Core quantum mechanics",
      "latex": "p(a)=\\operatorname{Tr}(\\rho E_a)",
      "plain": "p(a) = Tr(rho E_a)",
      "description": "General probability rule for a POVM effect E_a.",
      "theoryIds": [
        "density-operator",
        "quantum-information"
      ],
      "sourceIds": [
        "vonneumann-probability-1927",
        "schumacher-1995"
      ],
      "tags": [
        "POVM",
        "density matrix"
      ]
    },
    {
      "id": "expectation",
      "name": "Expectation value",
      "category": "Core quantum mechanics",
      "latex": "\\langle A\\rangle=\\langle\\psi|\\hat A|\\psi\\rangle=\\operatorname{Tr}(\\rho\\hat A)",
      "plain": "<A> = <psi|A|psi> = Tr(rho A)",
      "description": "Expected measurement value of an observable.",
      "theoryIds": [
        "von-neumann",
        "density-operator"
      ],
      "sourceIds": [
        "vonneumann-probability-1927"
      ],
      "tags": [
        "observable"
      ]
    },
    {
      "id": "normalization",
      "name": "Wavefunction normalization",
      "category": "Core quantum mechanics",
      "latex": "\\int |\\Psi(\\mathbf r,t)|^2\\,d^3r=1",
      "plain": "integral |Psi|^2 d^3r = 1",
      "description": "Normalization condition for a pure-state wavefunction.",
      "theoryIds": [
        "wave-mechanics",
        "born-rule"
      ],
      "sourceIds": [
        "schrodinger-1926",
        "born-probability-1926"
      ],
      "tags": [
        "normalization"
      ]
    },
    {
      "id": "canonical-commutator",
      "name": "Canonical commutation relation",
      "category": "Core quantum mechanics",
      "latex": "[\\hat x,\\hat p]=i\\hbar",
      "plain": "[x,p] = i hbar",
      "description": "Canonical position–momentum commutator.",
      "theoryIds": [
        "canonical-quantization",
        "matrix-mechanics"
      ],
      "sourceIds": [
        "dirac-1925"
      ],
      "tags": [
        "commutator"
      ]
    },
    {
      "id": "general-commutator",
      "name": "Commutator definition",
      "category": "Core quantum mechanics",
      "latex": "[\\hat A,\\hat B]=\\hat A\\hat B-\\hat B\\hat A",
      "plain": "[A,B] = AB-BA",
      "description": "Defines the operator commutator.",
      "theoryIds": [
        "matrix-mechanics"
      ],
      "sourceIds": [
        "heisenberg-1925"
      ],
      "tags": [
        "operators"
      ]
    },
    {
      "id": "heisenberg-uncertainty",
      "name": "Robertson–Heisenberg uncertainty",
      "category": "Core quantum mechanics",
      "latex": "\\Delta A\\,\\Delta B\\ge\\frac12|\\langle[\\hat A,\\hat B]\\rangle|",
      "plain": "Delta A Delta B >= |<[A,B]>|/2",
      "description": "General uncertainty lower bound for two observables.",
      "theoryIds": [
        "uncertainty"
      ],
      "sourceIds": [
        "heisenberg-uncertainty-1927"
      ],
      "tags": [
        "uncertainty"
      ]
    },
    {
      "id": "xp-uncertainty",
      "name": "Position–momentum uncertainty",
      "category": "Core quantum mechanics",
      "latex": "\\Delta x\\,\\Delta p\\ge\\frac{\\hbar}{2}",
      "plain": "Delta x Delta p >= hbar/2",
      "description": "Special case of the uncertainty principle for canonical position and momentum.",
      "theoryIds": [
        "uncertainty"
      ],
      "sourceIds": [
        "heisenberg-uncertainty-1927"
      ],
      "tags": [
        "position",
        "momentum"
      ]
    },
    {
      "id": "unitary-evolution",
      "name": "Unitary time evolution",
      "category": "Core quantum mechanics",
      "latex": "|\\psi(t)\\rangle=U(t,t_0)|\\psi(t_0)\\rangle,\\quad U=e^{-i\\hat H(t-t_0)/\\hbar}",
      "plain": "psi(t)=U psi(t0)",
      "description": "Time evolution for a time-independent Hamiltonian.",
      "theoryIds": [
        "dirac-transformation",
        "von-neumann"
      ],
      "sourceIds": [
        "dirac-transformation-1927"
      ],
      "tags": [
        "unitary"
      ]
    },
    {
      "id": "heisenberg-equation",
      "name": "Heisenberg equation of motion",
      "category": "Core quantum mechanics",
      "latex": "\\frac{d\\hat A_H}{dt}=\\frac{i}{\\hbar}[\\hat H,\\hat A_H]+\\left(\\frac{\\partial\\hat A}{\\partial t}\\right)_H",
      "plain": "dA/dt = i[H,A]/hbar + partial A/partial t",
      "description": "Operator equation of motion in the Heisenberg picture.",
      "theoryIds": [
        "matrix-mechanics",
        "dirac-transformation"
      ],
      "sourceIds": [
        "heisenberg-1925",
        "dirac-transformation-1927"
      ],
      "tags": [
        "Heisenberg picture"
      ]
    },
    {
      "id": "von-neumann-eq",
      "name": "von Neumann equation",
      "category": "Core quantum mechanics",
      "latex": "i\\hbar\\frac{d\\rho}{dt}=[\\hat H,\\rho]",
      "plain": "i hbar drho/dt = [H,rho]",
      "description": "Unitary evolution equation for a density operator.",
      "theoryIds": [
        "density-operator",
        "von-neumann"
      ],
      "sourceIds": [
        "vonneumann-probability-1927"
      ],
      "tags": [
        "density matrix"
      ]
    },
    {
      "id": "pure-density",
      "name": "Pure-state density operator",
      "category": "Core quantum mechanics",
      "latex": "\\rho=|\\psi\\rangle\\langle\\psi|",
      "plain": "rho = |psi><psi|",
      "description": "Density operator corresponding to a pure state.",
      "theoryIds": [
        "density-operator"
      ],
      "sourceIds": [
        "vonneumann-probability-1927"
      ],
      "tags": [
        "density matrix"
      ]
    },
    {
      "id": "mixed-density",
      "name": "Mixed-state density operator",
      "category": "Core quantum mechanics",
      "latex": "\\rho=\\sum_i p_i|\\psi_i\\rangle\\langle\\psi_i|",
      "plain": "rho = sum p_i |psi_i><psi_i|",
      "description": "Statistical mixture of quantum states.",
      "theoryIds": [
        "density-operator"
      ],
      "sourceIds": [
        "vonneumann-probability-1927"
      ],
      "tags": [
        "mixed state"
      ]
    },
    {
      "id": "purity",
      "name": "Purity",
      "category": "Core quantum mechanics",
      "latex": "\\gamma=\\operatorname{Tr}(\\rho^2)",
      "plain": "gamma = Tr(rho^2)",
      "description": "Measures mixedness; equals one for a pure normalized state.",
      "theoryIds": [
        "density-operator",
        "quantum-information"
      ],
      "sourceIds": [
        "vonneumann-probability-1927",
        "schumacher-1995"
      ],
      "tags": [
        "purity"
      ]
    },
    {
      "id": "superposition",
      "name": "Linear superposition",
      "category": "Core quantum mechanics",
      "latex": "|\\psi\\rangle=\\sum_n c_n|n\\rangle",
      "plain": "psi = sum c_n |n>",
      "description": "Expansion of a state in an orthonormal basis.",
      "theoryIds": [
        "wave-mechanics",
        "dirac-transformation"
      ],
      "sourceIds": [
        "schrodinger-1926",
        "dirac-transformation-1927"
      ],
      "tags": [
        "superposition"
      ]
    },
    {
      "id": "completeness",
      "name": "Resolution of identity",
      "category": "Core quantum mechanics",
      "latex": "\\sum_n|n\\rangle\\langle n|=I",
      "plain": "sum |n><n| = I",
      "description": "Completeness relation for a discrete orthonormal basis.",
      "theoryIds": [
        "dirac-transformation"
      ],
      "sourceIds": [
        "dirac-transformation-1927"
      ],
      "tags": [
        "basis"
      ]
    },
    {
      "id": "continuous-completeness",
      "name": "Continuous resolution of identity",
      "category": "Core quantum mechanics",
      "latex": "\\int |x\\rangle\\langle x|\\,dx=I",
      "plain": "integral |x><x| dx = I",
      "description": "Completeness relation for the position basis.",
      "theoryIds": [
        "dirac-transformation",
        "rigged-hilbert-space"
      ],
      "sourceIds": [
        "dirac-transformation-1927",
        "bohm-dollard-rigged-1978"
      ],
      "tags": [
        "continuous spectrum"
      ]
    },
    {
      "id": "continuity-equation",
      "name": "Quantum probability continuity equation",
      "category": "Wave mechanics",
      "latex": "\\frac{\\partial\\rho}{\\partial t}+\\nabla\\cdot\\mathbf j=0",
      "plain": "partial rho/partial t + div j = 0",
      "description": "Conservation law for probability density.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "schrodinger-1926"
      ],
      "tags": [
        "probability current"
      ]
    },
    {
      "id": "probability-current",
      "name": "Schrödinger probability current",
      "category": "Wave mechanics",
      "latex": "\\mathbf j=\\frac{\\hbar}{2mi}(\\Psi^*\\nabla\\Psi-\\Psi\\nabla\\Psi^*)",
      "plain": "j = hbar/(2mi)(Psi* grad Psi - Psi grad Psi*)",
      "description": "Probability-current density for the standard Schrödinger equation.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "schrodinger-1926"
      ],
      "tags": [
        "current"
      ]
    },
    {
      "id": "ehrenfest-x",
      "name": "Ehrenfest theorem: position",
      "category": "Wave mechanics",
      "latex": "\\frac{d}{dt}\\langle x\\rangle=\\frac{\\langle p\\rangle}{m}",
      "plain": "d<x>/dt = <p>/m",
      "description": "Expectation values partly recover classical equations of motion.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "schrodinger-1926"
      ],
      "tags": [
        "classical limit"
      ]
    },
    {
      "id": "ehrenfest-p",
      "name": "Ehrenfest theorem: momentum",
      "category": "Wave mechanics",
      "latex": "\\frac{d}{dt}\\langle p\\rangle=-\\left\\langle\\frac{\\partial V}{\\partial x}\\right\\rangle",
      "plain": "d<p>/dt = -<dV/dx>",
      "description": "Momentum expectation obeys the average force law.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "schrodinger-1926"
      ],
      "tags": [
        "classical limit"
      ]
    },
    {
      "id": "path-amplitude",
      "name": "Feynman path integral",
      "category": "Formulations",
      "latex": "K(b,a)=\\int\\mathcal D[x(t)]\\,e^{iS[x]/\\hbar}",
      "plain": "K = integral Dx exp(iS/hbar)",
      "description": "Transition amplitude expressed as a coherent sum over paths.",
      "theoryIds": [
        "path-integral"
      ],
      "sourceIds": [
        "feynman-path-1948"
      ],
      "tags": [
        "path integral",
        "action"
      ]
    },
    {
      "id": "propagator-composition",
      "name": "Propagator composition",
      "category": "Formulations",
      "latex": "K(x_2,t_2;x_0,t_0)=\\int dx_1\\,K(x_2,t_2;x_1,t_1)K(x_1,t_1;x_0,t_0)",
      "plain": "K20 = integral K21 K10 dx1",
      "description": "Composition law for quantum propagators.",
      "theoryIds": [
        "path-integral"
      ],
      "sourceIds": [
        "feynman-path-1948"
      ],
      "tags": [
        "propagator"
      ]
    },
    {
      "id": "wigner-function",
      "name": "Wigner quasiprobability",
      "category": "Phase-space quantum mechanics",
      "latex": "W(x,p)=\\frac{1}{\\pi\\hbar}\\int dy\\,e^{2ipy/\\hbar}\\psi^*(x+y)\\psi(x-y)",
      "plain": "W(x,p) = phase-space quasiprobability",
      "description": "Phase-space representation of a quantum state.",
      "theoryIds": [
        "phase-space-qm"
      ],
      "sourceIds": [
        "wigner-1932"
      ],
      "tags": [
        "Wigner function"
      ]
    },
    {
      "id": "moyal-bracket",
      "name": "Moyal evolution",
      "category": "Phase-space quantum mechanics",
      "latex": "\\partial_t W=\\{H,W\\}_{\\mathrm M}",
      "plain": "partial_t W = {H,W}_M",
      "description": "Phase-space quantum evolution written with the Moyal bracket.",
      "theoryIds": [
        "phase-space-qm",
        "deformation-quantization"
      ],
      "sourceIds": [
        "moyal-1949",
        "groenewold-1946"
      ],
      "tags": [
        "Moyal bracket"
      ]
    },
    {
      "id": "star-product",
      "name": "Moyal star product",
      "category": "Phase-space quantum mechanics",
      "latex": "f\\star g=f\\exp\\!\\left[\\frac{i\\hbar}{2}(\\overleftarrow\\partial_x\\overrightarrow\\partial_p-\\overleftarrow\\partial_p\\overrightarrow\\partial_x)\\right]g",
      "plain": "f star g = f exp[i hbar/2(...)] g",
      "description": "Noncommutative product used in deformation quantization.",
      "theoryIds": [
        "deformation-quantization"
      ],
      "sourceIds": [
        "groenewold-1946"
      ],
      "tags": [
        "star product"
      ]
    },
    {
      "id": "jordan-product",
      "name": "Jordan product",
      "category": "Mathematical structures",
      "latex": "A\\circ B=\\frac12(AB+BA)",
      "plain": "A o B = (AB+BA)/2",
      "description": "Symmetrized product central to Jordan-algebraic formulations.",
      "theoryIds": [
        "jordan-algebra-qm"
      ],
      "sourceIds": [
        "jordan-vnw-1934"
      ],
      "tags": [
        "Jordan algebra"
      ]
    },
    {
      "id": "weak-value",
      "name": "Weak value",
      "category": "Foundations & interpretations",
      "latex": "A_w=\\frac{\\langle\\psi_f|\\hat A|\\psi_i\\rangle}{\\langle\\psi_f|\\psi_i\\rangle}",
      "plain": "Aw = <psif|A|psii>/<psif|psii>",
      "description": "Pre- and post-selected weak-measurement value.",
      "theoryIds": [
        "two-state-vector"
      ],
      "sourceIds": [
        "abl-1964"
      ],
      "tags": [
        "weak measurement"
      ]
    },
    {
      "id": "bohm-guidance",
      "name": "Bohmian guidance equation",
      "category": "Foundations & interpretations",
      "latex": "\\frac{d\\mathbf Q}{dt}=\\frac{\\hbar}{m}\\operatorname{Im}\\frac{\\nabla\\Psi}{\\Psi}(\\mathbf Q,t)",
      "plain": "dQ/dt = (hbar/m) Im(grad Psi/Psi)",
      "description": "Guidance law for particle configuration in Bohmian mechanics.",
      "theoryIds": [
        "bohmian"
      ],
      "sourceIds": [
        "bohm-1952-i"
      ],
      "tags": [
        "Bohmian"
      ]
    },
    {
      "id": "bohm-quantum-potential",
      "name": "Bohm quantum potential",
      "category": "Foundations & interpretations",
      "latex": "Q=-\\frac{\\hbar^2}{2m}\\frac{\\nabla^2R}{R},\\quad \\Psi=Re^{iS/\\hbar}",
      "plain": "Q = -hbar^2/(2m) nabla^2 R/R",
      "description": "Quantum potential obtained from polar decomposition of the wavefunction.",
      "theoryIds": [
        "bohmian"
      ],
      "sourceIds": [
        "bohm-1952-i"
      ],
      "tags": [
        "quantum potential"
      ]
    },
    {
      "id": "bell-factorization",
      "name": "Bell-local factorization",
      "category": "Foundations & interpretations",
      "latex": "P(a,b|x,y,\\lambda)=P(a|x,\\lambda)P(b|y,\\lambda)",
      "plain": "P(ab|xy lambda)=P(a|x lambda)P(b|y lambda)",
      "description": "Local hidden-variable factorization used in Bell-type analyses.",
      "theoryIds": [
        "bell",
        "ontological-models"
      ],
      "sourceIds": [
        "bell-1964",
        "sep-bell"
      ],
      "tags": [
        "Bell locality"
      ]
    },
    {
      "id": "chsh-classical",
      "name": "CHSH classical bound",
      "category": "Foundations & interpretations",
      "latex": "|S|\\le2",
      "plain": "|S| <= 2",
      "description": "Bound satisfied by local hidden-variable models in the CHSH scenario.",
      "theoryIds": [
        "bell"
      ],
      "sourceIds": [
        "sep-bell"
      ],
      "tags": [
        "CHSH"
      ]
    },
    {
      "id": "chsh-tsirelson",
      "name": "Tsirelson bound",
      "category": "Foundations & interpretations",
      "latex": "|S|\\le2\\sqrt2",
      "plain": "|S| <= 2 sqrt(2)",
      "description": "Maximum CHSH value allowed by quantum theory.",
      "theoryIds": [
        "bell",
        "quantum-information",
        "device-independent-qi"
      ],
      "sourceIds": [
        "sep-bell",
        "barrett-gpt-2007",
        "brunner-bell-2014"
      ],
      "tags": [
        "CHSH",
        "nonlocality"
      ]
    },
    {
      "id": "histories-decoherence",
      "name": "Histories decoherence functional",
      "category": "Foundations & interpretations",
      "latex": "D(\\alpha,\\alpha')=\\operatorname{Tr}(C_\\alpha\\rho C_{\\alpha'}^{\\dagger})",
      "plain": "D(alpha,alpha') = Tr(C_alpha rho C_alpha'^dagger)",
      "description": "Decoherence functional used to test consistency of quantum histories.",
      "theoryIds": [
        "consistent-histories",
        "decoherent-histories-cosmology"
      ],
      "sourceIds": [
        "griffiths-1984",
        "hartle-qm-cosmology-1990"
      ],
      "tags": [
        "histories"
      ]
    },
    {
      "id": "grw-collapse",
      "name": "Gaussian collapse operator",
      "category": "Collapse theories",
      "latex": "L_i(x)\\propto\\exp\\!\\left[-\\frac{(\\hat q_i-x)^2}{4r_C^2}\\right]",
      "plain": "L_i(x) proportional exp[-(q_i-x)^2/(4 r_C^2)]",
      "description": "Representative localization operator in GRW-type spontaneous collapse.",
      "theoryIds": [
        "grw",
        "objective-collapse",
        "grwm",
        "grwf"
      ],
      "sourceIds": [
        "grw-1986",
        "sep-collapse"
      ],
      "tags": [
        "GRW"
      ]
    },
    {
      "id": "gup",
      "name": "Generalized uncertainty principle",
      "category": "Quantum spacetime",
      "latex": "\\Delta x\\,\\Delta p\\gtrsim\\frac{\\hbar}{2}\\left[1+\\beta(\\Delta p)^2\\right]",
      "plain": "Delta x Delta p >= hbar/2 [1 + beta (Delta p)^2]",
      "description": "Common phenomenological form encoding a minimal-length correction.",
      "theoryIds": [
        "generalized-uncertainty"
      ],
      "sourceIds": [
        "qg-phenomenology"
      ],
      "tags": [
        "GUP",
        "minimal length"
      ]
    },
    {
      "id": "free-particle-energy",
      "name": "Free-particle dispersion",
      "category": "Wave mechanics",
      "latex": "E=\\frac{p^2}{2m}=\\frac{\\hbar^2k^2}{2m}",
      "plain": "E=p^2/(2m)=hbar^2 k^2/(2m)",
      "description": "Nonrelativistic free-particle energy.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "schrodinger-1926"
      ],
      "tags": [
        "free particle"
      ]
    },
    {
      "id": "infinite-well",
      "name": "Infinite square-well energies",
      "category": "Wave mechanics",
      "latex": "E_n=\\frac{n^2\\pi^2\\hbar^2}{2mL^2}",
      "plain": "E_n = n^2 pi^2 hbar^2/(2mL^2)",
      "description": "Energy levels of a one-dimensional infinite potential well.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "schrodinger-1926"
      ],
      "tags": [
        "square well"
      ]
    },
    {
      "id": "harmonic-hamiltonian",
      "name": "Quantum harmonic-oscillator Hamiltonian",
      "category": "Wave mechanics",
      "latex": "\\hat H=\\frac{\\hat p^2}{2m}+\\frac12m\\omega^2\\hat x^2",
      "plain": "H=p^2/(2m)+m omega^2 x^2/2",
      "description": "Hamiltonian of the quantum harmonic oscillator.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "schrodinger-1926"
      ],
      "tags": [
        "harmonic oscillator"
      ]
    },
    {
      "id": "harmonic-energy",
      "name": "Harmonic-oscillator spectrum",
      "category": "Wave mechanics",
      "latex": "E_n=\\hbar\\omega\\left(n+\\frac12\\right)",
      "plain": "E_n = hbar omega (n+1/2)",
      "description": "Discrete energy spectrum of the harmonic oscillator.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "schrodinger-1926"
      ],
      "tags": [
        "harmonic oscillator"
      ]
    },
    {
      "id": "ladder-commutator",
      "name": "Bosonic ladder commutator",
      "category": "Wave mechanics",
      "latex": "[a,a^{\\dagger}]=1",
      "plain": "[a,a†]=1",
      "description": "Canonical commutator of harmonic-oscillator ladder operators.",
      "theoryIds": [
        "wave-mechanics",
        "quantum-optical-coherence"
      ],
      "sourceIds": [
        "schrodinger-1926",
        "glauber-coherence-1963"
      ],
      "tags": [
        "ladder operators"
      ]
    },
    {
      "id": "number-operator",
      "name": "Number operator",
      "category": "Wave mechanics",
      "latex": "\\hat N=a^{\\dagger}a,\\quad \\hat N|n\\rangle=n|n\\rangle",
      "plain": "N=a†a",
      "description": "Counts bosonic quanta.",
      "theoryIds": [
        "wave-mechanics",
        "quantum-optical-coherence"
      ],
      "sourceIds": [
        "glauber-coherence-1963"
      ],
      "tags": [
        "number operator"
      ]
    },
    {
      "id": "hydrogen-energy",
      "name": "Hydrogenic energy levels",
      "category": "Wave mechanics",
      "latex": "E_n=-\\frac{m_e e^4}{2(4\\pi\\varepsilon_0)^2\\hbar^2n^2}",
      "plain": "E_n proportional -1/n^2",
      "description": "Bound-state energies of ideal hydrogen in the nonrelativistic Coulomb problem.",
      "theoryIds": [
        "bohr-model",
        "wave-mechanics"
      ],
      "sourceIds": [
        "bohr-1913",
        "schrodinger-1926"
      ],
      "tags": [
        "hydrogen"
      ]
    },
    {
      "id": "bohr-radius",
      "name": "Bohr radius",
      "category": "Wave mechanics",
      "latex": "a_0=\\frac{4\\pi\\varepsilon_0\\hbar^2}{m_e e^2}",
      "plain": "a0 = 4 pi epsilon0 hbar^2/(m_e e^2)",
      "description": "Characteristic length scale of hydrogenic atoms.",
      "theoryIds": [
        "bohr-model",
        "wave-mechanics"
      ],
      "sourceIds": [
        "bohr-1913"
      ],
      "tags": [
        "hydrogen"
      ]
    },
    {
      "id": "angular-commutator",
      "name": "Angular-momentum algebra",
      "category": "Core quantum mechanics",
      "latex": "[J_i,J_j]=i\\hbar\\epsilon_{ijk}J_k",
      "plain": "[J_i,J_j]=i hbar epsilon_ijk J_k",
      "description": "Commutation relations of angular momentum.",
      "theoryIds": [
        "matrix-mechanics",
        "dirac-electron-theory"
      ],
      "sourceIds": [
        "dirac-1925",
        "dirac-electron-1928"
      ],
      "tags": [
        "angular momentum"
      ]
    },
    {
      "id": "angular-spectrum",
      "name": "Angular-momentum spectrum",
      "category": "Core quantum mechanics",
      "latex": "J^2|jm\\rangle=\\hbar^2j(j+1)|jm\\rangle,\\quad J_z|jm\\rangle=\\hbar m|jm\\rangle",
      "plain": "J^2 = hbar^2 j(j+1), Jz=hbar m",
      "description": "Eigenvalues of total and projected angular momentum.",
      "theoryIds": [
        "dirac-electron-theory"
      ],
      "sourceIds": [
        "dirac-electron-1928"
      ],
      "tags": [
        "angular momentum"
      ]
    },
    {
      "id": "spin-half",
      "name": "Spin-1/2 operator",
      "category": "Core quantum mechanics",
      "latex": "\\mathbf S=\\frac{\\hbar}{2}\\boldsymbol\\sigma",
      "plain": "S = hbar sigma/2",
      "description": "Spin-1/2 angular-momentum operator in terms of Pauli matrices.",
      "theoryIds": [
        "dirac-electron-theory"
      ],
      "sourceIds": [
        "dirac-electron-1928"
      ],
      "tags": [
        "spin"
      ]
    },
    {
      "id": "pauli-algebra",
      "name": "Pauli-matrix algebra",
      "category": "Core quantum mechanics",
      "latex": "\\sigma_i\\sigma_j=\\delta_{ij}I+i\\epsilon_{ijk}\\sigma_k",
      "plain": "sigma_i sigma_j = delta_ij I + i epsilon_ijk sigma_k",
      "description": "Multiplication rule for Pauli matrices.",
      "theoryIds": [
        "dirac-electron-theory",
        "quantum-information"
      ],
      "sourceIds": [
        "dirac-electron-1928",
        "schumacher-1995"
      ],
      "tags": [
        "Pauli"
      ]
    },
    {
      "id": "wkb",
      "name": "WKB wavefunction",
      "category": "Wave mechanics",
      "latex": "\\psi(x)\\approx\\frac{C}{\\sqrt{p(x)}}\\exp\\!\\left[\\pm\\frac{i}{\\hbar}\\int^x p(x')dx'\\right]",
      "plain": "psi ~ C/sqrt(p) exp(± i integral p dx / hbar)",
      "description": "Leading semiclassical WKB form away from turning points.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "schrodinger-1926"
      ],
      "tags": [
        "WKB",
        "semiclassical"
      ]
    },
    {
      "id": "klein-gordon",
      "name": "Klein–Gordon equation",
      "category": "Relativistic quantum theory",
      "latex": "\\left(\\Box+\\frac{m^2c^2}{\\hbar^2}\\right)\\phi=0",
      "plain": "(Box + m^2 c^2/hbar^2) phi = 0",
      "description": "Relativistic wave equation for a free scalar field.",
      "theoryIds": [
        "qed",
        "wightman-qft"
      ],
      "sourceIds": [
        "sep-qft"
      ],
      "tags": [
        "scalar field"
      ]
    },
    {
      "id": "dirac-equation",
      "name": "Dirac equation",
      "category": "Relativistic quantum theory",
      "latex": "(i\\hbar c\\,\\gamma^\\mu\\partial_\\mu-mc^2)\\psi=0",
      "plain": "(i hbar c gamma^mu partial_mu - mc^2) psi = 0",
      "description": "Relativistic equation for free spin-1/2 fermions.",
      "theoryIds": [
        "dirac-electron-theory"
      ],
      "sourceIds": [
        "dirac-electron-1928"
      ],
      "tags": [
        "Dirac equation"
      ]
    },
    {
      "id": "clifford-algebra",
      "name": "Gamma-matrix Clifford algebra",
      "category": "Relativistic quantum theory",
      "latex": "\\{\\gamma^\\mu,\\gamma^\\nu\\}=2\\eta^{\\mu\\nu}I",
      "plain": "{gamma^mu,gamma^nu}=2 eta^munu I",
      "description": "Defining anticommutation relation of Dirac gamma matrices.",
      "theoryIds": [
        "dirac-electron-theory"
      ],
      "sourceIds": [
        "dirac-electron-1928"
      ],
      "tags": [
        "gamma matrices"
      ]
    },
    {
      "id": "dirac-current",
      "name": "Dirac conserved current",
      "category": "Relativistic quantum theory",
      "latex": "j^\\mu=c\\,\\bar\\psi\\gamma^\\mu\\psi,\\quad \\partial_\\mu j^\\mu=0",
      "plain": "j^mu = c psi-bar gamma^mu psi",
      "description": "Conserved U(1) current of the Dirac field.",
      "theoryIds": [
        "dirac-electron-theory",
        "qed"
      ],
      "sourceIds": [
        "dirac-electron-1928",
        "feynman-qed-1949"
      ],
      "tags": [
        "current"
      ]
    },
    {
      "id": "qed-lagrangian",
      "name": "QED Lagrangian",
      "category": "Quantum field theory",
      "latex": "\\mathcal L_{\\mathrm{QED}}=\\bar\\psi(i\\hbar c\\gamma^\\mu D_\\mu-mc^2)\\psi-\\frac14F_{\\mu\\nu}F^{\\mu\\nu}",
      "plain": "L_QED = psi-bar(i hbar c gamma D - mc^2)psi - F^2/4",
      "description": "Compact Lagrangian of quantum electrodynamics.",
      "theoryIds": [
        "qed"
      ],
      "sourceIds": [
        "feynman-qed-1949",
        "dyson-qed-1949"
      ],
      "tags": [
        "QED"
      ]
    },
    {
      "id": "em-field-strength",
      "name": "Electromagnetic field-strength tensor",
      "category": "Quantum field theory",
      "latex": "F_{\\mu\\nu}=\\partial_\\mu A_\\nu-\\partial_\\nu A_\\mu",
      "plain": "F_mn = d_m A_n - d_n A_m",
      "description": "Gauge-invariant electromagnetic field strength.",
      "theoryIds": [
        "qed"
      ],
      "sourceIds": [
        "feynman-qed-1949"
      ],
      "tags": [
        "gauge field"
      ]
    },
    {
      "id": "covariant-derivative",
      "name": "Gauge-covariant derivative",
      "category": "Quantum field theory",
      "latex": "D_\\mu=\\partial_\\mu+igA_\\mu^aT^a",
      "plain": "D_mu = partial_mu + i g A_mu^a T^a",
      "description": "Derivative modified by a gauge connection.",
      "theoryIds": [
        "yang-mills",
        "qed"
      ],
      "sourceIds": [
        "yang-mills-1954"
      ],
      "tags": [
        "gauge theory"
      ]
    },
    {
      "id": "yang-mills-field",
      "name": "Yang–Mills field strength",
      "category": "Quantum field theory",
      "latex": "F^a_{\\mu\\nu}=\\partial_\\mu A^a_\\nu-\\partial_\\nu A^a_\\mu+gf^{abc}A^b_\\mu A^c_\\nu",
      "plain": "F^a_mn = d_m A^a_n - d_n A^a_m + g f^abc A^b_m A^c_n",
      "description": "Non-Abelian gauge-field strength.",
      "theoryIds": [
        "yang-mills"
      ],
      "sourceIds": [
        "yang-mills-1954"
      ],
      "tags": [
        "Yang-Mills"
      ]
    },
    {
      "id": "yang-mills-lagrangian",
      "name": "Yang–Mills Lagrangian",
      "category": "Quantum field theory",
      "latex": "\\mathcal L_{\\mathrm{YM}}=-\\frac14F^a_{\\mu\\nu}F^{a\\mu\\nu}",
      "plain": "L_YM = -F^a_mn F^{a mn}/4",
      "description": "Pure non-Abelian gauge-field Lagrangian.",
      "theoryIds": [
        "yang-mills"
      ],
      "sourceIds": [
        "yang-mills-1954"
      ],
      "tags": [
        "Yang-Mills"
      ]
    },
    {
      "id": "qcd-lagrangian",
      "name": "QCD Lagrangian",
      "category": "Quantum field theory",
      "latex": "\\mathcal L_{\\mathrm{QCD}}=\\sum_f\\bar q_f(i\\gamma^\\mu D_\\mu-m_f)q_f-\\frac14G^a_{\\mu\\nu}G^{a\\mu\\nu}",
      "plain": "L_QCD = qbar(i gamma D-m)q - G^2/4",
      "description": "Gauge-theory Lagrangian of quarks and gluons.",
      "theoryIds": [
        "qcd",
        "standard-model"
      ],
      "sourceIds": [
        "pdg-standard-model-2024",
        "gross-wilczek-1973"
      ],
      "tags": [
        "QCD"
      ]
    },
    {
      "id": "standard-model-group",
      "name": "Standard Model gauge group",
      "category": "Quantum field theory",
      "latex": "SU(3)_C\\times SU(2)_L\\times U(1)_Y",
      "plain": "SU(3)_C x SU(2)_L x U(1)_Y",
      "description": "Gauge group of the Standard Model.",
      "theoryIds": [
        "standard-model"
      ],
      "sourceIds": [
        "pdg-standard-model-2024"
      ],
      "tags": [
        "Standard Model"
      ]
    },
    {
      "id": "weak-mixing",
      "name": "Electroweak mixing",
      "category": "Quantum field theory",
      "latex": "A_\\mu=B_\\mu\\cos\\theta_W+W^3_\\mu\\sin\\theta_W",
      "plain": "A_mu = B_mu cos theta_W + W3_mu sin theta_W",
      "description": "Defines the photon field from electroweak gauge fields after symmetry breaking.",
      "theoryIds": [
        "electroweak",
        "standard-model"
      ],
      "sourceIds": [
        "weinberg-leptons-1967"
      ],
      "tags": [
        "electroweak"
      ]
    },
    {
      "id": "wz-mass",
      "name": "Electroweak gauge-boson masses",
      "category": "Quantum field theory",
      "latex": "m_W=\\frac12gv,\\quad m_Z=\\frac12v\\sqrt{g^2+g'^2}",
      "plain": "mW=gv/2, mZ=v sqrt(g^2+g'^2)/2",
      "description": "Tree-level gauge-boson masses after Higgs symmetry breaking.",
      "theoryIds": [
        "electroweak",
        "standard-model"
      ],
      "sourceIds": [
        "weinberg-leptons-1967",
        "pdg-standard-model-2024"
      ],
      "tags": [
        "Higgs"
      ]
    },
    {
      "id": "rg-beta",
      "name": "Renormalization-group beta function",
      "category": "Quantum field theory",
      "latex": "\\mu\\frac{dg}{d\\mu}=\\beta(g)",
      "plain": "mu dg/dmu = beta(g)",
      "description": "Defines scale dependence of a running coupling.",
      "theoryIds": [
        "renormalization-group"
      ],
      "sourceIds": [
        "wilson-rg-1971"
      ],
      "tags": [
        "RG"
      ]
    },
    {
      "id": "qcd-beta",
      "name": "One-loop QCD beta function",
      "category": "Quantum field theory",
      "latex": "\\beta(g)=-\\frac{g^3}{16\\pi^2}\\left(11-\\frac{2}{3}n_f\\right)+\\cdots",
      "plain": "beta(g) = -g^3/(16 pi^2)(11-2n_f/3)+...",
      "description": "Leading asymptotic-freedom beta function for SU(3) QCD.",
      "theoryIds": [
        "qcd",
        "renormalization-group"
      ],
      "sourceIds": [
        "gross-wilczek-1973",
        "politzer-1973"
      ],
      "tags": [
        "asymptotic freedom"
      ]
    },
    {
      "id": "eft-expansion",
      "name": "Effective-field-theory expansion",
      "category": "Quantum field theory",
      "latex": "\\mathcal L_{\\mathrm{EFT}}=\\mathcal L_{\\mathrm{ren}}+\\sum_{d>4}\\frac{C_i^{(d)}}{\\Lambda^{d-4}}\\mathcal O_i^{(d)}",
      "plain": "L_EFT = L_ren + sum C_i O_i/Lambda^(d-4)",
      "description": "Organizes higher-dimensional operators by powers of a heavy scale.",
      "theoryIds": [
        "effective-field-theory",
        "standard-model-eft",
        "gravity-effective-field-theory"
      ],
      "sourceIds": [
        "weinberg-eft-1979",
        "warsaw-smeft-2010",
        "donoghue-gravity-eft-1994"
      ],
      "tags": [
        "EFT"
      ]
    },
    {
      "id": "smeft",
      "name": "SMEFT Lagrangian",
      "category": "Quantum field theory",
      "latex": "\\mathcal L_{\\mathrm{SMEFT}}=\\mathcal L_{\\mathrm{SM}}+\\sum_i\\frac{C_i^{(6)}}{\\Lambda^2}\\mathcal O_i^{(6)}+\\cdots",
      "plain": "L_SMEFT = L_SM + sum C_i O_i/Lambda^2 + ...",
      "description": "Leading dimension-six extension of the Standard Model EFT.",
      "theoryIds": [
        "standard-model-eft"
      ],
      "sourceIds": [
        "warsaw-smeft-2010"
      ],
      "tags": [
        "SMEFT"
      ]
    },
    {
      "id": "generating-functional",
      "name": "QFT generating functional",
      "category": "Quantum field theory",
      "latex": "Z[J]=\\int\\mathcal D\\phi\\,\\exp\\!\\left[\\frac{i}{\\hbar}\\left(S[\\phi]+\\int J\\phi\\right)\\right]",
      "plain": "Z[J] = integral Dphi exp[i(S+Jphi)/hbar]",
      "description": "Generates time-ordered correlation functions by functional differentiation.",
      "theoryIds": [
        "path-integral",
        "qed"
      ],
      "sourceIds": [
        "feynman-path-1948",
        "sep-qft"
      ],
      "tags": [
        "generating functional"
      ]
    },
    {
      "id": "schwinger-dyson",
      "name": "Schwinger–Dyson identity",
      "category": "Quantum field theory",
      "latex": "\\int\\mathcal D\\phi\\,\\frac{\\delta}{\\delta\\phi(x)}\\left[F[\\phi]e^{iS/\\hbar}\\right]=0",
      "plain": "integral Dphi delta/delta phi [F exp(iS/hbar)] = 0",
      "description": "Functional identity underlying the Schwinger–Dyson hierarchy.",
      "theoryIds": [
        "schwinger-dyson"
      ],
      "sourceIds": [
        "schwinger-green-1951"
      ],
      "tags": [
        "Schwinger-Dyson"
      ]
    },
    {
      "id": "scalar-propagator",
      "name": "Scalar Feynman propagator",
      "category": "Quantum field theory",
      "latex": "\\tilde\\Delta_F(p)=\\frac{i}{p^2-m^2+i\\epsilon}",
      "plain": "Delta_F(p)=i/(p^2-m^2+i epsilon)",
      "description": "Momentum-space propagator of a free scalar field in natural units.",
      "theoryIds": [
        "wightman-qft",
        "qed"
      ],
      "sourceIds": [
        "sep-qft"
      ],
      "tags": [
        "propagator"
      ]
    },
    {
      "id": "fermion-propagator",
      "name": "Dirac Feynman propagator",
      "category": "Quantum field theory",
      "latex": "S_F(p)=\\frac{i(\\slashed p+m)}{p^2-m^2+i\\epsilon}",
      "plain": "S_F(p)=i(p-slash+m)/(p^2-m^2+i epsilon)",
      "description": "Momentum-space propagator of a free Dirac fermion in natural units.",
      "theoryIds": [
        "qed",
        "dirac-electron-theory"
      ],
      "sourceIds": [
        "feynman-qed-1949",
        "sep-qft"
      ],
      "tags": [
        "propagator"
      ]
    },
    {
      "id": "wilson-loop",
      "name": "Wilson loop",
      "category": "Quantum field theory",
      "latex": "W(C)=\\operatorname{Tr}\\,\\mathcal P\\exp\\!\\left(ig\\oint_C A_\\mu dx^\\mu\\right)",
      "plain": "W(C)=Tr P exp(i g integral_C A dx)",
      "description": "Gauge-invariant holonomy observable around a closed loop.",
      "theoryIds": [
        "lattice-gauge",
        "yang-mills",
        "loop-quantum-gravity"
      ],
      "sourceIds": [
        "wilson-lattice-1974",
        "rovelli-lqg"
      ],
      "tags": [
        "Wilson loop",
        "holonomy"
      ]
    },
    {
      "id": "brst-nilpotency",
      "name": "BRST nilpotency",
      "category": "Quantum field theory",
      "latex": "Q_{\\mathrm{BRST}}^2=0",
      "plain": "Q_BRST^2 = 0",
      "description": "Nilpotency condition underlying BRST cohomology.",
      "theoryIds": [
        "brst"
      ],
      "sourceIds": [
        "becchi-rouet-stora-1976"
      ],
      "tags": [
        "BRST"
      ]
    },
    {
      "id": "bv-master",
      "name": "BV classical master equation",
      "category": "Quantum field theory",
      "latex": "(S,S)=0",
      "plain": "(S,S)=0",
      "description": "Classical Batalin–Vilkovisky master equation.",
      "theoryIds": [
        "bv-formalism"
      ],
      "sourceIds": [
        "batalin-vilkovisky-1981"
      ],
      "tags": [
        "BV"
      ]
    },
    {
      "id": "cft-two-point",
      "name": "CFT scalar two-point function",
      "category": "Quantum field theory",
      "latex": "\\langle\\mathcal O(x)\\mathcal O(0)\\rangle=\\frac{C}{|x|^{2\\Delta}}",
      "plain": "<O(x)O(0)> = C/|x|^(2 Delta)",
      "description": "Conformally fixed two-point function of a scalar primary.",
      "theoryIds": [
        "conformal-field-theory",
        "conformal-bootstrap"
      ],
      "sourceIds": [
        "bpz-1984",
        "simmons-duffin-bootstrap-2016"
      ],
      "tags": [
        "CFT"
      ]
    },
    {
      "id": "virasoro",
      "name": "Virasoro algebra",
      "category": "Quantum field theory",
      "latex": "[L_m,L_n]=(m-n)L_{m+n}+\\frac{c}{12}(m^3-m)\\delta_{m+n,0}",
      "plain": "[L_m,L_n]=(m-n)L_m+n + c(m^3-m)delta/12",
      "description": "Central extension of two-dimensional conformal symmetry.",
      "theoryIds": [
        "conformal-field-theory"
      ],
      "sourceIds": [
        "bpz-1984"
      ],
      "tags": [
        "Virasoro"
      ]
    },
    {
      "id": "wetterich",
      "name": "Wetterich flow equation",
      "category": "Quantum field theory",
      "latex": "\\partial_k\\Gamma_k=\\frac12\\operatorname{Tr}\\left[(\\Gamma_k^{(2)}+R_k)^{-1}\\partial_kR_k\\right]",
      "plain": "d_k Gamma_k = 1/2 Tr[(Gamma''+R)^-1 d_k R]",
      "description": "Exact functional renormalization-group flow equation.",
      "theoryIds": [
        "functional-rg"
      ],
      "sourceIds": [
        "wetterich-1993"
      ],
      "tags": [
        "FRG"
      ]
    },
    {
      "id": "nrqed-expansion",
      "name": "NRQED expansion",
      "category": "Quantum field theory",
      "latex": "\\mathcal L_{\\mathrm{NRQED}}=\\psi^\\dagger\\left(iD_t+\\frac{\\mathbf D^2}{2m}+\\frac{c_F e\\,\\boldsymbol\\sigma\\cdot\\mathbf B}{2m}+\\cdots\\right)\\psi",
      "plain": "NRQED low-energy Lagrangian",
      "description": "Representative nonrelativistic QED operator expansion.",
      "theoryIds": [
        "nrqed"
      ],
      "sourceIds": [
        "caswell-lepage-nrqed-1986"
      ],
      "tags": [
        "NRQED"
      ]
    },
    {
      "id": "nrqcd-factorization",
      "name": "NRQCD factorization",
      "category": "Quantum field theory",
      "latex": "\\sigma(H)=\\sum_n\\hat\\sigma(Q\\bar Q[n])\\,\\langle\\mathcal O_n^H\\rangle",
      "plain": "sigma(H)=sum sigmahat(QQ[n]) <O_n^H>",
      "description": "Representative separation of short-distance coefficients and quarkonium matrix elements.",
      "theoryIds": [
        "nrqcd"
      ],
      "sourceIds": [
        "bodwin-braaten-lepage-nrqcd-1995"
      ],
      "tags": [
        "NRQCD"
      ]
    },
    {
      "id": "scet-power",
      "name": "SCET light-cone decomposition",
      "category": "Quantum field theory",
      "latex": "p^\\mu=\\frac{n\\cdot p}{2}\\bar n^\\mu+\\frac{\\bar n\\cdot p}{2}n^\\mu+p_\\perp^\\mu",
      "plain": "p = light-cone components + transverse part",
      "description": "Momentum decomposition used in soft-collinear effective theory.",
      "theoryIds": [
        "soft-collinear-effective-theory"
      ],
      "sourceIds": [
        "bauer-scet-2001"
      ],
      "tags": [
        "SCET"
      ]
    },
    {
      "id": "qubit-state",
      "name": "General pure qubit",
      "category": "Quantum information",
      "latex": "|\\psi\\rangle=\\alpha|0\\rangle+\\beta|1\\rangle,\\quad |\\alpha|^2+|\\beta|^2=1",
      "plain": "psi = alpha|0> + beta|1>",
      "description": "General normalized pure state of one qubit.",
      "theoryIds": [
        "quantum-information"
      ],
      "sourceIds": [
        "schumacher-1995"
      ],
      "tags": [
        "qubit"
      ]
    },
    {
      "id": "bloch-sphere",
      "name": "Bloch-sphere density matrix",
      "category": "Quantum information",
      "latex": "\\rho=\\frac12(I+\\mathbf r\\cdot\\boldsymbol\\sigma),\\quad |\\mathbf r|\\le1",
      "plain": "rho=(I+r.sigma)/2",
      "description": "Parametrization of a single-qubit state by a Bloch vector.",
      "theoryIds": [
        "quantum-information"
      ],
      "sourceIds": [
        "schumacher-1995"
      ],
      "tags": [
        "Bloch sphere"
      ]
    },
    {
      "id": "bell-state",
      "name": "Bell state",
      "category": "Quantum information",
      "latex": "|\\Phi^+\\rangle=\\frac{|00\\rangle+|11\\rangle}{\\sqrt2}",
      "plain": "Phi+ = (|00>+|11>)/sqrt2",
      "description": "One of the four maximally entangled two-qubit Bell states.",
      "theoryIds": [
        "quantum-information",
        "bell"
      ],
      "sourceIds": [
        "schumacher-1995",
        "bell-1964"
      ],
      "tags": [
        "entanglement"
      ]
    },
    {
      "id": "schmidt",
      "name": "Schmidt decomposition",
      "category": "Quantum information",
      "latex": "|\\psi\\rangle_{AB}=\\sum_i\\sqrt{\\lambda_i}\\,|i_A\\rangle|i_B\\rangle",
      "plain": "psi_AB = sum sqrt(lambda_i)|iA iB>",
      "description": "Canonical bipartite pure-state decomposition.",
      "theoryIds": [
        "quantum-information"
      ],
      "sourceIds": [
        "schumacher-1995"
      ],
      "tags": [
        "entanglement"
      ]
    },
    {
      "id": "von-neumann-entropy",
      "name": "von Neumann entropy",
      "category": "Quantum information",
      "latex": "S(\\rho)=-\\operatorname{Tr}(\\rho\\log\\rho)",
      "plain": "S(rho)=-Tr rho log rho",
      "description": "Quantum analogue of Shannon entropy.",
      "theoryIds": [
        "quantum-information",
        "quantum-thermodynamics"
      ],
      "sourceIds": [
        "schumacher-1995",
        "quantum-thermo-review"
      ],
      "tags": [
        "entropy"
      ]
    },
    {
      "id": "relative-entropy",
      "name": "Quantum relative entropy",
      "category": "Quantum information",
      "latex": "D(\\rho\\|\\sigma)=\\operatorname{Tr}[\\rho(\\log\\rho-\\log\\sigma)]",
      "plain": "D(rho||sigma)=Tr rho(log rho-log sigma)",
      "description": "Asymmetric distinguishability measure with major information-theoretic roles.",
      "theoryIds": [
        "quantum-information",
        "resource-theories"
      ],
      "sourceIds": [
        "resource-rmp-2019"
      ],
      "tags": [
        "relative entropy"
      ]
    },
    {
      "id": "mutual-information",
      "name": "Quantum mutual information",
      "category": "Quantum information",
      "latex": "I(A:B)=S(\\rho_A)+S(\\rho_B)-S(\\rho_{AB})",
      "plain": "I(A:B)=S(A)+S(B)-S(AB)",
      "description": "Total correlations between two quantum subsystems.",
      "theoryIds": [
        "quantum-information"
      ],
      "sourceIds": [
        "schumacher-1995"
      ],
      "tags": [
        "mutual information"
      ]
    },
    {
      "id": "entanglement-entropy",
      "name": "Pure-state entanglement entropy",
      "category": "Quantum information",
      "latex": "S_A=-\\operatorname{Tr}(\\rho_A\\log\\rho_A),\\quad \\rho_A=\\operatorname{Tr}_B|\\psi\\rangle\\langle\\psi|",
      "plain": "S_A=-Tr rho_A log rho_A",
      "description": "Entanglement measure for a bipartite pure state.",
      "theoryIds": [
        "quantum-information",
        "emergent-spacetime"
      ],
      "sourceIds": [
        "schumacher-1995",
        "van-raamsdonk-2010"
      ],
      "tags": [
        "entanglement entropy"
      ]
    },
    {
      "id": "fidelity",
      "name": "Quantum fidelity",
      "category": "Quantum information",
      "latex": "F(\\rho,\\sigma)=\\left(\\operatorname{Tr}\\sqrt{\\sqrt\\rho\\,\\sigma\\sqrt\\rho}\\right)^2",
      "plain": "F(rho,sigma)=(Tr sqrt(sqrt(rho) sigma sqrt(rho)))^2",
      "description": "Similarity measure between quantum states.",
      "theoryIds": [
        "quantum-information"
      ],
      "sourceIds": [
        "schumacher-1995"
      ],
      "tags": [
        "fidelity"
      ]
    },
    {
      "id": "trace-distance",
      "name": "Trace distance",
      "category": "Quantum information",
      "latex": "D(\\rho,\\sigma)=\\frac12\\|\\rho-\\sigma\\|_1",
      "plain": "D=1/2 ||rho-sigma||_1",
      "description": "Operational distinguishability measure for quantum states.",
      "theoryIds": [
        "quantum-information"
      ],
      "sourceIds": [
        "schumacher-1995"
      ],
      "tags": [
        "trace distance"
      ]
    },
    {
      "id": "kraus-map",
      "name": "Kraus representation",
      "category": "Quantum information",
      "latex": "\\mathcal E(\\rho)=\\sum_k K_k\\rho K_k^{\\dagger}",
      "plain": "E(rho)=sum K rho K†",
      "description": "Operator-sum representation of a quantum channel.",
      "theoryIds": [
        "quantum-information",
        "open-quantum-systems"
      ],
      "sourceIds": [
        "breuer-petruccione-2007"
      ],
      "tags": [
        "quantum channel"
      ]
    },
    {
      "id": "kraus-completeness",
      "name": "Trace-preserving Kraus condition",
      "category": "Quantum information",
      "latex": "\\sum_k K_k^{\\dagger}K_k=I",
      "plain": "sum K†K=I",
      "description": "Condition ensuring a Kraus map is trace preserving.",
      "theoryIds": [
        "quantum-information"
      ],
      "sourceIds": [
        "breuer-petruccione-2007"
      ],
      "tags": [
        "CPTP"
      ]
    },
    {
      "id": "lindblad",
      "name": "GKSL/Lindblad master equation",
      "category": "Open quantum systems",
      "latex": "\\dot\\rho=-\\frac{i}{\\hbar}[H,\\rho]+\\sum_k\\gamma_k\\left(L_k\\rho L_k^{\\dagger}-\\frac12\\{L_k^{\\dagger}L_k,\\rho\\}\\right)",
      "plain": "rho-dot = -i[H,rho]/hbar + dissipator",
      "description": "General Markovian completely positive trace-preserving semigroup generator.",
      "theoryIds": [
        "gksl",
        "open-quantum-systems"
      ],
      "sourceIds": [
        "gks-1976",
        "lindblad-1976"
      ],
      "tags": [
        "Lindblad"
      ]
    },
    {
      "id": "gibbs-state",
      "name": "Quantum Gibbs state",
      "category": "Quantum thermodynamics",
      "latex": "\\rho_\\beta=\\frac{e^{-\\beta H}}{Z},\\quad Z=\\operatorname{Tr}(e^{-\\beta H})",
      "plain": "rho_beta=e^-betaH/Z",
      "description": "Thermal equilibrium state at inverse temperature beta.",
      "theoryIds": [
        "quantum-thermodynamics",
        "open-quantum-systems"
      ],
      "sourceIds": [
        "quantum-thermo-review"
      ],
      "tags": [
        "thermal state"
      ]
    },
    {
      "id": "jarzynski",
      "name": "Jarzynski equality",
      "category": "Quantum thermodynamics",
      "latex": "\\langle e^{-\\beta W}\\rangle=e^{-\\beta\\Delta F}",
      "plain": "<exp(-beta W)>=exp(-beta Delta F)",
      "description": "Nonequilibrium work identity that also has quantum formulations.",
      "theoryIds": [
        "quantum-thermodynamics"
      ],
      "sourceIds": [
        "quantum-thermo-review"
      ],
      "tags": [
        "fluctuation theorem"
      ]
    },
    {
      "id": "landauer",
      "name": "Landauer bound",
      "category": "Quantum thermodynamics",
      "latex": "Q\\ge k_BT\\ln2",
      "plain": "Q >= k_B T ln 2",
      "description": "Minimum heat cost associated with erasing one classical bit under standard assumptions.",
      "theoryIds": [
        "quantum-thermodynamics",
        "quantum-information"
      ],
      "sourceIds": [
        "quantum-thermo-review"
      ],
      "tags": [
        "Landauer"
      ]
    },
    {
      "id": "continuous-measurement",
      "name": "Stochastic master equation for monitored observable",
      "category": "Open quantum systems",
      "latex": "d\\rho=-\\frac{i}{\\hbar}[H,\\rho]dt+\\kappa\\mathcal D[A]\\rho\\,dt+\\sqrt{\\eta\\kappa}\\,\\mathcal H[A]\\rho\\,dW",
      "plain": "d rho = Hamiltonian + measurement dissipator + stochastic innovation",
      "description": "Representative diffusive continuous-measurement update.",
      "theoryIds": [
        "continuous-quantum-measurement",
        "quantum-filtering"
      ],
      "sourceIds": [
        "jacobs-steck-continuous-2006",
        "belavkin-filtering-1992"
      ],
      "tags": [
        "stochastic master equation"
      ]
    },
    {
      "id": "davies-generator",
      "name": "Davies weak-coupling generator",
      "category": "Open quantum systems",
      "latex": "\\mathcal L(\\rho)=-i[H_{\\rm eff},\\rho]+\\sum_{\\omega,\\alpha}\\gamma_\\alpha(\\omega)\\mathcal D[A_\\alpha(\\omega)]\\rho",
      "plain": "Davies generator = Hamiltonian + frequency-resolved dissipators",
      "description": "Weak-coupling Markov generator resolved by Bohr frequencies.",
      "theoryIds": [
        "davies-generators"
      ],
      "sourceIds": [
        "davies-master-1974"
      ],
      "tags": [
        "Davies"
      ]
    },
    {
      "id": "quantum-fisher",
      "name": "Quantum Fisher information for a pure state",
      "category": "Quantum information",
      "latex": "F_Q=4\\left(\\langle\\dot\\psi|\\dot\\psi\\rangle-|\\langle\\psi|\\dot\\psi\\rangle|^2\\right)",
      "plain": "F_Q=4(<dot psi|dot psi>-|<psi|dot psi>|^2)",
      "description": "Pure-state quantum Fisher information for a parameterized state.",
      "theoryIds": [
        "quantum-information"
      ],
      "sourceIds": [
        "schumacher-1995"
      ],
      "tags": [
        "metrology"
      ]
    },
    {
      "id": "cramer-rao",
      "name": "Quantum Cramér–Rao bound",
      "category": "Quantum information",
      "latex": "\\mathrm{Var}(\\hat\\theta)\\ge\\frac{1}{N F_Q}",
      "plain": "Var theta >= 1/(N F_Q)",
      "description": "Lower bound on unbiased parameter-estimation variance.",
      "theoryIds": [
        "quantum-information"
      ],
      "sourceIds": [
        "schumacher-1995"
      ],
      "tags": [
        "metrology"
      ]
    },
    {
      "id": "rabi-hamiltonian",
      "name": "Quantum Rabi Hamiltonian",
      "category": "Quantum optics & AMO",
      "latex": "H=\\hbar\\omega a^{\\dagger}a+\\frac{\\hbar\\omega_0}{2}\\sigma_z+\\hbar g\\sigma_x(a+a^{\\dagger})",
      "plain": "H = hbar omega a†a + hbar omega0 sigma_z/2 + hbar g sigma_x(a+a†)",
      "description": "Full single-mode light–matter Hamiltonian for a two-level system.",
      "theoryIds": [
        "quantum-rabi-model"
      ],
      "sourceIds": [
        "rabi-model-review-2016"
      ],
      "tags": [
        "Rabi model"
      ]
    },
    {
      "id": "jc-hamiltonian",
      "name": "Jaynes–Cummings Hamiltonian",
      "category": "Quantum optics & AMO",
      "latex": "H_{JC}=\\hbar\\omega a^{\\dagger}a+\\frac{\\hbar\\omega_0}{2}\\sigma_z+\\hbar g(a\\sigma_++a^{\\dagger}\\sigma_-)",
      "plain": "H_JC = cavity + atom + rotating-wave coupling",
      "description": "Rotating-wave light–matter Hamiltonian.",
      "theoryIds": [
        "jaynes-cummings"
      ],
      "sourceIds": [
        "jaynes-cummings-1963"
      ],
      "tags": [
        "Jaynes-Cummings"
      ]
    },
    {
      "id": "coherent-eigenstate",
      "name": "Coherent-state eigenvalue equation",
      "category": "Quantum optics & AMO",
      "latex": "a|\\alpha\\rangle=\\alpha|\\alpha\\rangle",
      "plain": "a|alpha>=alpha|alpha>",
      "description": "Defines a Glauber coherent state.",
      "theoryIds": [
        "quantum-optical-coherence"
      ],
      "sourceIds": [
        "glauber-coherence-1963"
      ],
      "tags": [
        "coherent state"
      ]
    },
    {
      "id": "coherent-expansion",
      "name": "Coherent-state Fock expansion",
      "category": "Quantum optics & AMO",
      "latex": "|\\alpha\\rangle=e^{-|\\alpha|^2/2}\\sum_{n=0}^{\\infty}\\frac{\\alpha^n}{\\sqrt{n!}}|n\\rangle",
      "plain": "|alpha>=exp(-|alpha|^2/2) sum alpha^n/sqrt(n!) |n>",
      "description": "Expansion of a coherent state in photon-number states.",
      "theoryIds": [
        "quantum-optical-coherence"
      ],
      "sourceIds": [
        "glauber-coherence-1963"
      ],
      "tags": [
        "coherent state"
      ]
    },
    {
      "id": "poisson-photons",
      "name": "Coherent-state photon-number distribution",
      "category": "Quantum optics & AMO",
      "latex": "P(n)=e^{-|\\alpha|^2}\\frac{|\\alpha|^{2n}}{n!}",
      "plain": "P(n)=e^-nbar nbar^n/n!",
      "description": "Poissonian photon statistics of a coherent state.",
      "theoryIds": [
        "quantum-optical-coherence"
      ],
      "sourceIds": [
        "glauber-coherence-1963"
      ],
      "tags": [
        "photon statistics"
      ]
    },
    {
      "id": "g1",
      "name": "First-order coherence",
      "category": "Quantum optics & AMO",
      "latex": "g^{(1)}(1,2)=\\frac{\\langle E^{(-)}(1)E^{(+)}(2)\\rangle}{\\sqrt{\\langle I(1)\\rangle\\langle I(2)\\rangle}}",
      "plain": "g1 = normalized first-order field correlation",
      "description": "Normalized first-order optical coherence function.",
      "theoryIds": [
        "quantum-optical-coherence"
      ],
      "sourceIds": [
        "glauber-coherence-1963"
      ],
      "tags": [
        "coherence"
      ]
    },
    {
      "id": "g2",
      "name": "Second-order coherence",
      "category": "Quantum optics & AMO",
      "latex": "g^{(2)}(0)=\\frac{\\langle a^{\\dagger}a^{\\dagger}aa\\rangle}{\\langle a^{\\dagger}a\\rangle^2}",
      "plain": "g2(0)=<a†a†aa>/<a†a>^2",
      "description": "Measures photon bunching or antibunching.",
      "theoryIds": [
        "quantum-optical-coherence"
      ],
      "sourceIds": [
        "glauber-coherence-1963"
      ],
      "tags": [
        "antibunching"
      ]
    },
    {
      "id": "quadrature-x",
      "name": "Field quadrature",
      "category": "Quantum optics & AMO",
      "latex": "X=\\frac{a+a^{\\dagger}}{\\sqrt2},\\quad P=\\frac{a-a^{\\dagger}}{i\\sqrt2}",
      "plain": "X=(a+a†)/sqrt2, P=(a-a†)/(i sqrt2)",
      "description": "Dimensionless conjugate field quadratures.",
      "theoryIds": [
        "quantum-optical-coherence"
      ],
      "sourceIds": [
        "glauber-coherence-1963"
      ],
      "tags": [
        "quadrature"
      ]
    },
    {
      "id": "displacement",
      "name": "Displacement operator",
      "category": "Quantum optics & AMO",
      "latex": "D(\\alpha)=\\exp(\\alpha a^{\\dagger}-\\alpha^*a)",
      "plain": "D(alpha)=exp(alpha a†-alpha* a)",
      "description": "Unitary phase-space displacement generating coherent states.",
      "theoryIds": [
        "quantum-optical-coherence"
      ],
      "sourceIds": [
        "glauber-coherence-1963"
      ],
      "tags": [
        "displacement"
      ]
    },
    {
      "id": "coherent-displacement",
      "name": "Coherent state from vacuum",
      "category": "Quantum optics & AMO",
      "latex": "|\\alpha\\rangle=D(\\alpha)|0\\rangle",
      "plain": "|alpha>=D(alpha)|0>",
      "description": "Constructs a coherent state by displacing the vacuum.",
      "theoryIds": [
        "quantum-optical-coherence"
      ],
      "sourceIds": [
        "glauber-coherence-1963"
      ],
      "tags": [
        "coherent state"
      ]
    },
    {
      "id": "jc-rabi-frequency",
      "name": "Jaynes–Cummings dressed splitting",
      "category": "Quantum optics & AMO",
      "latex": "\\Omega_n=2g\\sqrt{n+1}",
      "plain": "Omega_n = 2 g sqrt(n+1)",
      "description": "Photon-number-dependent Rabi frequency on resonance.",
      "theoryIds": [
        "jaynes-cummings"
      ],
      "sourceIds": [
        "jaynes-cummings-1963"
      ],
      "tags": [
        "vacuum Rabi"
      ]
    },
    {
      "id": "thermal-photon",
      "name": "Thermal mean photon number",
      "category": "Quantum optics & AMO",
      "latex": "\\bar n=\\frac{1}{e^{\\hbar\\omega/k_BT}-1}",
      "plain": "nbar=1/(exp(hbar omega/kBT)-1)",
      "description": "Bose–Einstein mean occupation of a harmonic mode.",
      "theoryIds": [
        "quantum-optical-coherence",
        "quantum-thermodynamics"
      ],
      "sourceIds": [
        "quantum-thermo-review"
      ],
      "tags": [
        "thermal photons"
      ]
    },
    {
      "id": "fermi-dirac",
      "name": "Fermi–Dirac distribution",
      "category": "Quantum many-body & condensed matter",
      "latex": "f(E)=\\frac{1}{e^{(E-\\mu)/k_BT}+1}",
      "plain": "f(E)=1/(exp((E-mu)/kBT)+1)",
      "description": "Thermal occupation of fermionic single-particle states.",
      "theoryIds": [
        "bcs-theory",
        "hubbard-model"
      ],
      "sourceIds": [
        "bcs-1957"
      ],
      "tags": [
        "fermions"
      ]
    },
    {
      "id": "bose-einstein",
      "name": "Bose–Einstein distribution",
      "category": "Quantum many-body & condensed matter",
      "latex": "n(E)=\\frac{1}{e^{(E-\\mu)/k_BT}-1}",
      "plain": "n(E)=1/(exp((E-mu)/kBT)-1)",
      "description": "Thermal occupation of bosonic states.",
      "theoryIds": [
        "bogoliubov-bose-gas",
        "gross-pitaevskii"
      ],
      "sourceIds": [
        "bec-rmp-1999"
      ],
      "tags": [
        "bosons"
      ]
    },
    {
      "id": "hubbard-hamiltonian",
      "name": "Hubbard Hamiltonian",
      "category": "Quantum many-body & condensed matter",
      "latex": "H=-t\\sum_{\\langle ij\\rangle,\\sigma}(c_{i\\sigma}^{\\dagger}c_{j\\sigma}+h.c.)+U\\sum_i n_{i\\uparrow}n_{i\\downarrow}",
      "plain": "H = hopping + on-site U",
      "description": "Canonical single-band Hubbard model.",
      "theoryIds": [
        "hubbard-model"
      ],
      "sourceIds": [
        "hubbard-1963"
      ],
      "tags": [
        "Hubbard"
      ]
    },
    {
      "id": "bcs-wavefunction",
      "name": "BCS ground-state ansatz",
      "category": "Quantum many-body & condensed matter",
      "latex": "|\\mathrm{BCS}\\rangle=\\prod_{\\mathbf k}(u_{\\mathbf k}+v_{\\mathbf k}c_{\\mathbf k\\uparrow}^{\\dagger}c_{-\\mathbf k\\downarrow}^{\\dagger})|0\\rangle",
      "plain": "BCS = product_k (u_k + v_k pair†)|0>",
      "description": "Variational paired-fermion ground state of BCS theory.",
      "theoryIds": [
        "bcs-theory"
      ],
      "sourceIds": [
        "bcs-1957"
      ],
      "tags": [
        "BCS"
      ]
    },
    {
      "id": "bcs-dispersion",
      "name": "BCS quasiparticle dispersion",
      "category": "Quantum many-body & condensed matter",
      "latex": "E_k=\\sqrt{\\xi_k^2+|\\Delta|^2}",
      "plain": "E_k=sqrt(xi_k^2+Delta^2)",
      "description": "Bogoliubov quasiparticle energy in a uniform BCS superconductor.",
      "theoryIds": [
        "bcs-theory"
      ],
      "sourceIds": [
        "bcs-1957"
      ],
      "tags": [
        "BCS gap"
      ]
    },
    {
      "id": "bcs-gap",
      "name": "BCS gap equation",
      "category": "Quantum many-body & condensed matter",
      "latex": "1=V\\sum_k\\frac{1-2f(E_k)}{2E_k}",
      "plain": "1 = V sum_k [1-2f(Ek)]/(2Ek)",
      "description": "Self-consistency equation for the superconducting pairing gap.",
      "theoryIds": [
        "bcs-theory"
      ],
      "sourceIds": [
        "bcs-1957"
      ],
      "tags": [
        "gap equation"
      ]
    },
    {
      "id": "ks-equation",
      "name": "Kohn–Sham equation",
      "category": "Quantum many-body & condensed matter",
      "latex": "\\left[-\\frac{\\hbar^2\\nabla^2}{2m}+V_{\\rm eff}[n](\\mathbf r)\\right]\\phi_i=\\epsilon_i\\phi_i",
      "plain": "[-hbar^2 nabla^2/2m + Veff[n]] phi_i = epsilon_i phi_i",
      "description": "Single-particle equations of practical density-functional theory.",
      "theoryIds": [
        "density-functional-theory"
      ],
      "sourceIds": [
        "kohn-sham-1965"
      ],
      "tags": [
        "DFT"
      ]
    },
    {
      "id": "hk-variational",
      "name": "Hohenberg–Kohn variational principle",
      "category": "Quantum many-body & condensed matter",
      "latex": "E_0=\\min_n\\left\\{F[n]+\\int v(\\mathbf r)n(\\mathbf r)d^3r\\right\\}",
      "plain": "E0 = min_n {F[n]+int v n}",
      "description": "Ground-state energy obtained by minimizing over admissible densities.",
      "theoryIds": [
        "density-functional-theory"
      ],
      "sourceIds": [
        "hohenberg-kohn-1964"
      ],
      "tags": [
        "DFT"
      ]
    },
    {
      "id": "anderson-hamiltonian",
      "name": "Anderson tight-binding model",
      "category": "Quantum many-body & condensed matter",
      "latex": "H=\\sum_i\\epsilon_i|i\\rangle\\langle i|-t\\sum_{\\langle ij\\rangle}(|i\\rangle\\langle j|+h.c.)",
      "plain": "H = random onsite energies + hopping",
      "description": "Canonical disordered lattice Hamiltonian for Anderson localization.",
      "theoryIds": [
        "anderson-localization"
      ],
      "sourceIds": [
        "anderson-1958"
      ],
      "tags": [
        "disorder"
      ]
    },
    {
      "id": "landau-levels",
      "name": "Landau-level energies",
      "category": "Quantum many-body & condensed matter",
      "latex": "E_n=\\hbar\\omega_c\\left(n+\\frac12\\right),\\quad \\omega_c=\\frac{|q|B}{m}",
      "plain": "E_n=hbar omega_c(n+1/2)",
      "description": "Orbital energy levels of a charged particle in a uniform magnetic field.",
      "theoryIds": [
        "integer-quantum-hall"
      ],
      "sourceIds": [
        "klitzing-1980"
      ],
      "tags": [
        "Landau levels"
      ]
    },
    {
      "id": "hall-conductance",
      "name": "Quantized Hall conductance",
      "category": "Quantum many-body & condensed matter",
      "latex": "\\sigma_{xy}=\\nu\\frac{e^2}{h}",
      "plain": "sigma_xy = nu e^2/h",
      "description": "Hall conductance in integer or fractional quantum Hall states.",
      "theoryIds": [
        "integer-quantum-hall",
        "fractional-quantum-hall"
      ],
      "sourceIds": [
        "klitzing-1980",
        "laughlin-1983"
      ],
      "tags": [
        "quantum Hall"
      ]
    },
    {
      "id": "chern-number",
      "name": "First Chern number",
      "category": "Quantum many-body & condensed matter",
      "latex": "C=\\frac{1}{2\\pi}\\int_{\\mathrm{BZ}}\\Omega(\\mathbf k)\\,d^2k",
      "plain": "C = (1/2pi) integral_BZ Omega(k) d2k",
      "description": "Topological invariant of a two-dimensional isolated band.",
      "theoryIds": [
        "integer-quantum-hall",
        "haldane-model"
      ],
      "sourceIds": [
        "haldane-1988"
      ],
      "tags": [
        "Chern number"
      ]
    },
    {
      "id": "berry-connection",
      "name": "Berry connection",
      "category": "Quantum many-body & condensed matter",
      "latex": "\\mathbf A_n(\\mathbf k)=i\\langle u_n(\\mathbf k)|\\nabla_{\\mathbf k}u_n(\\mathbf k)\\rangle",
      "plain": "A_n=i<u_n|grad_k u_n>",
      "description": "Gauge-dependent Berry connection in parameter or momentum space.",
      "theoryIds": [
        "haldane-model",
        "integer-quantum-hall"
      ],
      "sourceIds": [
        "haldane-1988"
      ],
      "tags": [
        "Berry phase"
      ]
    },
    {
      "id": "berry-curvature",
      "name": "Berry curvature",
      "category": "Quantum many-body & condensed matter",
      "latex": "\\mathbf\\Omega_n=\\nabla_{\\mathbf k}\\times\\mathbf A_n",
      "plain": "Omega_n = curl_k A_n",
      "description": "Gauge-invariant curvature derived from the Berry connection.",
      "theoryIds": [
        "haldane-model",
        "integer-quantum-hall"
      ],
      "sourceIds": [
        "haldane-1988"
      ],
      "tags": [
        "Berry curvature"
      ]
    },
    {
      "id": "laughlin-wavefunction",
      "name": "Laughlin wavefunction",
      "category": "Quantum many-body & condensed matter",
      "latex": "\\Psi_m=\\prod_{i<j}(z_i-z_j)^m\\exp\\!\\left(-\\sum_i\\frac{|z_i|^2}{4\\ell_B^2}\\right)",
      "plain": "Psi_m = product(z_i-z_j)^m exp(-sum |z_i|^2/4l_B^2)",
      "description": "Canonical correlated wavefunction for filling ν=1/m.",
      "theoryIds": [
        "fractional-quantum-hall"
      ],
      "sourceIds": [
        "laughlin-1983"
      ],
      "tags": [
        "Laughlin"
      ]
    },
    {
      "id": "bogoliubov-transform",
      "name": "Bogoliubov transformation",
      "category": "Quantum many-body & condensed matter",
      "latex": "b_k=u_k a_k-v_k a_{-k}^{\\dagger},\\quad |u_k|^2-|v_k|^2=1",
      "plain": "b_k = u_k a_k - v_k a_-k†",
      "description": "Canonical transformation diagonalizing quadratic bosonic Hamiltonians.",
      "theoryIds": [
        "bogoliubov-bose-gas"
      ],
      "sourceIds": [
        "bec-rmp-1999"
      ],
      "tags": [
        "Bogoliubov"
      ]
    },
    {
      "id": "bogoliubov-dispersion",
      "name": "Bogoliubov dispersion",
      "category": "Quantum many-body & condensed matter",
      "latex": "E_k=\\sqrt{\\epsilon_k(\\epsilon_k+2gn_0)},\\quad \\epsilon_k=\\frac{\\hbar^2k^2}{2m}",
      "plain": "E_k=sqrt(epsilon_k(epsilon_k+2 g n0))",
      "description": "Excitation spectrum of a weakly interacting homogeneous Bose gas.",
      "theoryIds": [
        "bogoliubov-bose-gas"
      ],
      "sourceIds": [
        "bec-rmp-1999"
      ],
      "tags": [
        "BEC"
      ]
    },
    {
      "id": "gp-equation",
      "name": "Gross–Pitaevskii equation",
      "category": "Quantum many-body & condensed matter",
      "latex": "i\\hbar\\partial_t\\psi=\\left[-\\frac{\\hbar^2\\nabla^2}{2m}+V+g|\\psi|^2\\right]\\psi",
      "plain": "i hbar dpsi/dt = [-hbar^2 nabla^2/2m + V + g|psi|^2] psi",
      "description": "Nonlinear mean-field equation for dilute Bose condensates.",
      "theoryIds": [
        "gross-pitaevskii"
      ],
      "sourceIds": [
        "bec-rmp-1999"
      ],
      "tags": [
        "Gross-Pitaevskii"
      ]
    },
    {
      "id": "gp-coupling",
      "name": "Contact-interaction coupling",
      "category": "Quantum many-body & condensed matter",
      "latex": "g=\\frac{4\\pi\\hbar^2a_s}{m}",
      "plain": "g = 4 pi hbar^2 a_s/m",
      "description": "Low-energy contact coupling for dilute bosons in three dimensions.",
      "theoryIds": [
        "gross-pitaevskii"
      ],
      "sourceIds": [
        "bec-rmp-1999"
      ],
      "tags": [
        "scattering length"
      ]
    },
    {
      "id": "healing-length",
      "name": "BEC healing length",
      "category": "Quantum many-body & condensed matter",
      "latex": "\\xi=\\frac{\\hbar}{\\sqrt{2mgn_0}}",
      "plain": "xi = hbar/sqrt(2 m g n0)",
      "description": "Characteristic length for condensate density recovery.",
      "theoryIds": [
        "gross-pitaevskii"
      ],
      "sourceIds": [
        "bec-rmp-1999"
      ],
      "tags": [
        "BEC"
      ]
    },
    {
      "id": "kondo-hamiltonian",
      "name": "Kondo Hamiltonian",
      "category": "Quantum many-body & condensed matter",
      "latex": "H=\\sum_{k\\sigma}\\epsilon_k c_{k\\sigma}^{\\dagger}c_{k\\sigma}+J\\,\\mathbf S\\cdot\\mathbf s(0)",
      "plain": "H = conduction band + J S dot s(0)",
      "description": "Exchange model of a localized spin coupled to conduction electrons.",
      "theoryIds": [
        "kondo-model"
      ],
      "sourceIds": [
        "kondo-1964"
      ],
      "tags": [
        "Kondo"
      ]
    },
    {
      "id": "kondo-temperature",
      "name": "Kondo scale",
      "category": "Quantum many-body & condensed matter",
      "latex": "k_BT_K\\sim D\\exp\\!\\left[-\\frac{1}{\\rho J}\\right]",
      "plain": "k_B T_K ~ D exp[-1/(rho J)]",
      "description": "Characteristic low-energy scale in the weak-coupling Kondo problem.",
      "theoryIds": [
        "kondo-model"
      ],
      "sourceIds": [
        "kondo-1964"
      ],
      "tags": [
        "Kondo"
      ]
    },
    {
      "id": "toric-code-hamiltonian",
      "name": "Toric-code Hamiltonian",
      "category": "Quantum many-body & condensed matter",
      "latex": "H=-J_e\\sum_s A_s-J_m\\sum_p B_p",
      "plain": "H = -J_e sum star - J_m sum plaquette",
      "description": "Exactly solvable commuting-projector Hamiltonian with topological order.",
      "theoryIds": [
        "toric-code"
      ],
      "sourceIds": [
        "kitaev-anyons-2003"
      ],
      "tags": [
        "toric code"
      ]
    },
    {
      "id": "mps",
      "name": "Matrix-product state",
      "category": "Quantum many-body & condensed matter",
      "latex": "|\\psi\\rangle=\\sum_{i_1\\cdots i_N}\\operatorname{Tr}(A^{i_1}\\cdots A^{i_N})|i_1\\cdots i_N\\rangle",
      "plain": "psi = sum Tr(A_i1...A_iN)|i1...iN>",
      "description": "Canonical one-dimensional tensor-network state.",
      "theoryIds": [
        "tensor-network-states"
      ],
      "sourceIds": [
        "fannes-mps-1992"
      ],
      "tags": [
        "MPS"
      ]
    },
    {
      "id": "area-law",
      "name": "Entanglement area law",
      "category": "Quantum many-body & condensed matter",
      "latex": "S(A)\\propto |\\partial A|",
      "plain": "S(A) proportional boundary area",
      "description": "Typical ground-state entanglement scaling for many gapped local systems.",
      "theoryIds": [
        "tensor-network-states",
        "mera",
        "peps"
      ],
      "sourceIds": [
        "fannes-mps-1992",
        "vidal-mera-2007"
      ],
      "tags": [
        "area law"
      ]
    },
    {
      "id": "planck-length",
      "name": "Planck length",
      "category": "Quantum gravity & cosmology",
      "latex": "\\ell_P=\\sqrt{\\frac{\\hbar G}{c^3}}",
      "plain": "l_P = sqrt(hbar G/c^3)",
      "description": "Natural length scale built from quantum mechanics, gravity and relativity.",
      "theoryIds": [
        "canonical-quantum-gravity",
        "perturbative-qg"
      ],
      "sourceIds": [
        "rovelli-qg-survey"
      ],
      "tags": [
        "Planck scale"
      ]
    },
    {
      "id": "wheeler-dewitt",
      "name": "Wheeler–DeWitt equation",
      "category": "Quantum gravity & cosmology",
      "latex": "\\hat{\\mathcal H}\\Psi[h_{ij},\\phi]=0",
      "plain": "H_hat Psi[h_ij,phi] = 0",
      "description": "Hamiltonian-constraint equation of canonical quantum geometrodynamics.",
      "theoryIds": [
        "wheeler-dewitt",
        "canonical-quantum-gravity"
      ],
      "sourceIds": [
        "dewitt-canonical-gravity-1967"
      ],
      "tags": [
        "problem of time"
      ]
    },
    {
      "id": "bh-entropy",
      "name": "Bekenstein–Hawking entropy",
      "category": "Quantum gravity & cosmology",
      "latex": "S_{BH}=\\frac{k_B c^3A}{4G\\hbar}",
      "plain": "S_BH = k_B c^3 A/(4 G hbar)",
      "description": "Entropy proportional to black-hole horizon area.",
      "theoryIds": [
        "hawking-radiation",
        "holographic-principle",
        "fuzzball-model",
        "black-hole-thermodynamics"
      ],
      "sourceIds": [
        "hawking-1975",
        "bekenstein-entropy-1973",
        "thooft-holography-1993"
      ],
      "tags": [
        "black hole entropy"
      ]
    },
    {
      "id": "hawking-temp",
      "name": "Hawking temperature",
      "category": "Quantum gravity & cosmology",
      "latex": "T_H=\\frac{\\hbar\\kappa}{2\\pi c k_B}",
      "plain": "T_H = hbar kappa/(2 pi c k_B)",
      "description": "Black-hole temperature in terms of surface gravity κ.",
      "theoryIds": [
        "hawking-radiation",
        "black-hole-thermodynamics"
      ],
      "sourceIds": [
        "hawking-1975",
        "bekenstein-entropy-1973"
      ],
      "tags": [
        "Hawking radiation"
      ]
    },
    {
      "id": "schwarzschild-temp",
      "name": "Schwarzschild Hawking temperature",
      "category": "Quantum gravity & cosmology",
      "latex": "T_H=\\frac{\\hbar c^3}{8\\pi G M k_B}",
      "plain": "T_H = hbar c^3/(8 pi G M k_B)",
      "description": "Hawking temperature of a nonrotating uncharged black hole.",
      "theoryIds": [
        "hawking-radiation"
      ],
      "sourceIds": [
        "hawking-1975"
      ],
      "tags": [
        "black hole"
      ]
    },
    {
      "id": "unruh-temp",
      "name": "Unruh temperature",
      "category": "Quantum gravity & cosmology",
      "latex": "T_U=\\frac{\\hbar a}{2\\pi c k_B}",
      "plain": "T_U = hbar a/(2 pi c k_B)",
      "description": "Thermal temperature perceived by a uniformly accelerated observer.",
      "theoryIds": [
        "unruh"
      ],
      "sourceIds": [
        "unruh-1976"
      ],
      "tags": [
        "Unruh"
      ]
    },
    {
      "id": "semiclassical-einstein",
      "name": "Semiclassical Einstein equation",
      "category": "Quantum gravity & cosmology",
      "latex": "G_{\\mu\\nu}+\\Lambda g_{\\mu\\nu}=\\frac{8\\pi G}{c^4}\\langle\\hat T_{\\mu\\nu}\\rangle",
      "plain": "G_mn + Lambda g_mn = 8 pi G <T_mn>/c^4",
      "description": "Classical geometry sourced by quantum expectation value of stress–energy.",
      "theoryIds": [
        "semiclassical-gravity"
      ],
      "sourceIds": [
        "hu-verdaguer-stochastic-2008"
      ],
      "tags": [
        "semiclassical gravity"
      ]
    },
    {
      "id": "einstein-langevin",
      "name": "Einstein–Langevin equation",
      "category": "Quantum gravity & cosmology",
      "latex": "G_{\\mu\\nu}[g+h]=8\\pi G\\left(\\langle\\hat T_{\\mu\\nu}\\rangle+\\xi_{\\mu\\nu}\\right)",
      "plain": "Einstein equation + stochastic stress tensor noise",
      "description": "Representative stochastic-gravity equation including stress-tensor fluctuations.",
      "theoryIds": [
        "stochastic-gravity"
      ],
      "sourceIds": [
        "hu-verdaguer-stochastic-2008"
      ],
      "tags": [
        "stochastic gravity"
      ]
    },
    {
      "id": "lqg-area",
      "name": "LQG area spectrum",
      "category": "Quantum gravity & cosmology",
      "latex": "A=8\\pi\\gamma\\ell_P^2\\sum_i\\sqrt{j_i(j_i+1)}",
      "plain": "A = 8 pi gamma l_P^2 sum sqrt(j_i(j_i+1))",
      "description": "Discrete area eigenvalues in loop quantum gravity.",
      "theoryIds": [
        "loop-quantum-gravity"
      ],
      "sourceIds": [
        "rovelli-lqg"
      ],
      "tags": [
        "LQG"
      ]
    },
    {
      "id": "holonomy",
      "name": "Connection holonomy",
      "category": "Quantum gravity & cosmology",
      "latex": "h_\\gamma[A]=\\mathcal P\\exp\\!\\left(\\int_\\gamma A\\right)",
      "plain": "h_gamma[A] = P exp integral_gamma A",
      "description": "Parallel-transport variable central to loop formulations.",
      "theoryIds": [
        "loop-quantum-gravity",
        "spin-foams"
      ],
      "sourceIds": [
        "rovelli-lqg"
      ],
      "tags": [
        "holonomy"
      ]
    },
    {
      "id": "ads-cft",
      "name": "AdS/CFT generating-functional relation",
      "category": "Quantum gravity & cosmology",
      "latex": "Z_{\\mathrm{grav}}[\\phi_0]\\simeq Z_{\\mathrm{CFT}}[J=\\phi_0]",
      "plain": "Z_gravity[boundary] = Z_CFT[source]",
      "description": "Schematic equality relating bulk gravity/string partition functions and boundary CFT generating functionals.",
      "theoryIds": [
        "ads-cft",
        "holographic-principle"
      ],
      "sourceIds": [
        "maldacena-1997"
      ],
      "tags": [
        "AdS/CFT"
      ]
    },
    {
      "id": "rt-formula",
      "name": "Ryu–Takayanagi-type entropy relation",
      "category": "Quantum gravity & cosmology",
      "latex": "S_A=\\frac{\\mathrm{Area}(\\gamma_A)}{4G_N}",
      "plain": "S_A = Area(gamma_A)/(4 G_N)",
      "description": "Holographic entanglement entropy formula in static AdS/CFT settings.",
      "theoryIds": [
        "emergent-spacetime",
        "quantum-error-correction-gravity",
        "ads-cft"
      ],
      "sourceIds": [
        "van-raamsdonk-2010",
        "almheiri-qec-2015"
      ],
      "tags": [
        "holography"
      ]
    },
    {
      "id": "island",
      "name": "Island entropy formula",
      "category": "Quantum gravity & cosmology",
      "latex": "S(R)=\\min_I\\operatorname{ext}\\left[\\frac{\\mathrm{Area}(\\partial I)}{4G_N}+S_{\\mathrm{matter}}(R\\cup I)\\right]",
      "plain": "S(R)=min ext [Area/4G + S_matter(R union I)]",
      "description": "Generalized-entropy prescription underlying island calculations.",
      "theoryIds": [
        "island-formula"
      ],
      "sourceIds": [
        "almheiri-islands-2020"
      ],
      "tags": [
        "islands"
      ]
    },
    {
      "id": "friedmann",
      "name": "Friedmann equation",
      "category": "Quantum gravity & cosmology",
      "latex": "H^2=\\frac{8\\pi G}{3}\\rho-\\frac{kc^2}{a^2}+\\frac{\\Lambda c^2}{3}",
      "plain": "H^2 = 8 pi G rho/3 - k c^2/a^2 + Lambda c^2/3",
      "description": "Background cosmological expansion equation used throughout quantum cosmology.",
      "theoryIds": [
        "quantum-cosmology",
        "inflationary-fluctuations",
        "flrw-cosmology",
        "lambda-cdm",
        "quintessence"
      ],
      "sourceIds": [
        "quantum-cosmology-review"
      ],
      "tags": [
        "cosmology"
      ]
    },
    {
      "id": "slow-roll-power",
      "name": "Inflationary curvature power spectrum",
      "category": "Quantum gravity & cosmology",
      "latex": "\\mathcal P_{\\mathcal R}\\simeq\\frac{H^2}{8\\pi^2\\epsilon M_{\\rm Pl}^2}",
      "plain": "P_R ~ H^2/(8 pi^2 epsilon M_Pl^2)",
      "description": "Leading slow-roll scalar curvature-perturbation spectrum in natural units.",
      "theoryIds": [
        "inflationary-fluctuations"
      ],
      "sourceIds": [
        "guth-pi-1982"
      ],
      "tags": [
        "inflation"
      ]
    },
    {
      "id": "lqc-friedmann",
      "name": "Effective LQC Friedmann equation",
      "category": "Quantum gravity & cosmology",
      "latex": "H^2=\\frac{8\\pi G}{3}\\rho\\left(1-\\frac{\\rho}{\\rho_c}\\right)",
      "plain": "H^2 = 8 pi G rho/3 (1-rho/rho_c)",
      "description": "Common effective loop-quantum-cosmology modification producing a bounce at critical density.",
      "theoryIds": [
        "loop-quantum-cosmology"
      ],
      "sourceIds": [
        "quantum-cosmology-review",
        "bojowald-lqc-2001"
      ],
      "tags": [
        "LQC"
      ]
    },
    {
      "id": "de-sitter-horizon",
      "name": "de Sitter horizon scale",
      "category": "Quantum gravity & cosmology",
      "latex": "r_H=\\frac{c}{H}",
      "plain": "r_H = c/H",
      "description": "Characteristic horizon length of exact de Sitter expansion.",
      "theoryIds": [
        "quantum-cosmology",
        "eternal-inflation"
      ],
      "sourceIds": [
        "quantum-cosmology-review"
      ],
      "tags": [
        "de Sitter"
      ]
    },
    {
      "id": "de-sitter-vacuum",
      "name": "Vacuum-energy Friedmann relation",
      "category": "Quantum gravity & cosmology",
      "latex": "H^2=\\frac{8\\pi G}{3c^2}u_{\\rm vac}",
      "plain": "H^2 = 8 pi G u_vac/(3 c^2)",
      "description": "Expansion rate for a spatially flat vacuum-energy-dominated universe.",
      "theoryIds": [
        "quantum-cosmology",
        "string-landscape"
      ],
      "sourceIds": [
        "quantum-cosmology-review"
      ],
      "tags": [
        "vacuum energy"
      ]
    },
    {
      "id": "gup-minlength",
      "name": "Minimal-length GUP estimate",
      "category": "Quantum gravity & cosmology",
      "latex": "\\Delta x_{\\min}\\sim\\hbar\\sqrt\\beta",
      "plain": "Delta x_min ~ hbar sqrt(beta)",
      "description": "Characteristic minimum uncertainty implied by a quadratic GUP model.",
      "theoryIds": [
        "generalized-uncertainty"
      ],
      "sourceIds": [
        "qg-phenomenology"
      ],
      "tags": [
        "minimal length"
      ]
    },
    {
      "id": "kappa-minkowski",
      "name": "κ-Minkowski commutator",
      "category": "Quantum gravity & cosmology",
      "latex": "[x^0,x^i]=\\frac{i}{\\kappa}x^i,\\quad [x^i,x^j]=0",
      "plain": "[x0,xi]=i xi/kappa",
      "description": "Representative noncommutative spacetime relation dual to κ-Poincaré structures.",
      "theoryIds": [
        "kappa-poincare"
      ],
      "sourceIds": [
        "majid-ruegg-kappa-1994"
      ],
      "tags": [
        "kappa Minkowski"
      ]
    },
    {
      "id": "noncommutative-coordinates",
      "name": "Canonical noncommutative coordinates",
      "category": "Quantum gravity & cosmology",
      "latex": "[x^\\mu,x^\\nu]=i\\theta^{\\mu\\nu}",
      "plain": "[x^mu,x^nu]=i theta^munu",
      "description": "Common coordinate algebra in noncommutative field theories.",
      "theoryIds": [
        "noncommutative-geometry",
        "noncommutative-qft"
      ],
      "sourceIds": [
        "seiberg-witten-ncqft-1999"
      ],
      "tags": [
        "noncommutative geometry"
      ]
    },
    {
      "id": "anyonic-braiding",
      "name": "Anyonic braid action",
      "category": "Topological quantum theory",
      "latex": "|\\psi\\rangle\\mapsto U(\\sigma_i)|\\psi\\rangle",
      "plain": "psi -> U(sigma_i) psi",
      "description": "Braiding acts by a unitary representation of the braid group on a fusion space.",
      "theoryIds": [
        "topological-qc",
        "toric-code"
      ],
      "sourceIds": [
        "kitaev-anyons-2003"
      ],
      "tags": [
        "anyons"
      ]
    },
    {
      "id": "pentagon",
      "name": "Fusion associativity / pentagon consistency",
      "category": "Topological quantum theory",
      "latex": "F_{12,3,4}F_{1,2,34}=F_{1,23,4}F_{2,3,4}F_{1,2,3}",
      "plain": "schematic pentagon equation for F moves",
      "description": "Consistency condition for reassociating fusion channels.",
      "theoryIds": [
        "categorical-qm",
        "topological-qft",
        "topological-qc"
      ],
      "sourceIds": [
        "kitaev-anyons-2003",
        "witten-tqft-1988"
      ],
      "tags": [
        "F symbols"
      ]
    },
    {
      "id": "quantum-fourier",
      "name": "Quantum Fourier transform",
      "category": "Quantum information",
      "latex": "|x\\rangle\\mapsto\\frac{1}{\\sqrt N}\\sum_{y=0}^{N-1}e^{2\\pi ixy/N}|y\\rangle",
      "plain": "QFT: |x> -> 1/sqrt(N) sum_y exp(2 pi i xy/N)|y>",
      "description": "Unitary discrete Fourier transform on computational basis states.",
      "theoryIds": [
        "quantum-information"
      ],
      "sourceIds": [
        "schumacher-1995"
      ],
      "tags": [
        "quantum computing"
      ]
    },
    {
      "id": "adiabatic-interpolation",
      "name": "Adiabatic computation interpolation",
      "category": "Quantum information",
      "latex": "H(s)=(1-s)H_0+sH_P,\\quad s=t/T",
      "plain": "H(s)=(1-s)H0+sHP",
      "description": "Standard Hamiltonian interpolation used in adiabatic quantum computation.",
      "theoryIds": [
        "adiabatic-qc"
      ],
      "sourceIds": [
        "farhi-adiabatic-2000"
      ],
      "tags": [
        "adiabatic"
      ]
    },
    {
      "id": "quantum-switch",
      "name": "Quantum-switch process state",
      "category": "Quantum information",
      "latex": "|0\\rangle_C\\,U_BU_A|\\psi\\rangle+|1\\rangle_C\\,U_AU_B|\\psi\\rangle",
      "plain": "control coherently selects U_B U_A or U_A U_B",
      "description": "Schematic coherent superposition of two operation orders.",
      "theoryIds": [
        "quantum-switch",
        "indefinite-causal-order"
      ],
      "sourceIds": [
        "chiribella-switch-2013"
      ],
      "tags": [
        "causal order"
      ]
    },
    {
      "id": "resource-monotone",
      "name": "Resource monotonicity",
      "category": "Quantum information",
      "latex": "M(\\Lambda_{\\rm free}(\\rho))\\le M(\\rho)",
      "plain": "M(free operation on rho) <= M(rho)",
      "description": "Defining monotonicity property of a resource measure.",
      "theoryIds": [
        "resource-theories",
        "contextuality-resource-theory"
      ],
      "sourceIds": [
        "resource-rmp-2019",
        "duarte-amaral-contextuality-2017"
      ],
      "tags": [
        "resource theory"
      ]
    },
    {
      "id": "perturb-first-energy",
      "name": "First-order stationary perturbation energy",
      "category": "Perturbation theory",
      "latex": "E_n^{(1)}=\\langle n^{(0)}|V|n^{(0)}\\rangle",
      "plain": "E_n^(1)=<n0|V|n0>",
      "description": "First-order energy correction for a nondegenerate stationary state.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "sep-math-rigor",
        "schrodinger-1926"
      ],
      "tags": [
        "perturbation theory"
      ]
    },
    {
      "id": "perturb-second-energy",
      "name": "Second-order stationary perturbation energy",
      "category": "Perturbation theory",
      "latex": "E_n^{(2)}=\\sum_{m\\ne n}\\frac{|\\langle m^{(0)}|V|n^{(0)}\\rangle|^2}{E_n^{(0)}-E_m^{(0)}}",
      "plain": "E_n^(2)=sum_m!=n |<m|V|n>|^2/(E_n-E_m)",
      "description": "Second-order nondegenerate energy correction.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "sep-math-rigor"
      ],
      "tags": [
        "perturbation theory"
      ]
    },
    {
      "id": "perturb-first-state",
      "name": "First-order perturbed state",
      "category": "Perturbation theory",
      "latex": "|n^{(1)}\\rangle=\\sum_{m\\ne n}\\frac{\\langle m^{(0)}|V|n^{(0)}\\rangle}{E_n^{(0)}-E_m^{(0)}}|m^{(0)}\\rangle",
      "plain": "|n1>=sum_m!=n <m|V|n>/(E_n-E_m)|m>",
      "description": "First-order correction to a nondegenerate eigenstate.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "sep-math-rigor"
      ],
      "tags": [
        "perturbation theory"
      ]
    },
    {
      "id": "dyson-series",
      "name": "Dyson time-ordered series",
      "category": "Perturbation theory",
      "latex": "U_I(t,t_0)=\\mathcal T\\exp\\!\\left[-\\frac{i}{\\hbar}\\int_{t_0}^t H_I(t')dt'\\right]",
      "plain": "U_I = T exp[-i/hbar integral H_I dt]",
      "description": "Interaction-picture time-evolution operator as a time-ordered exponential.",
      "theoryIds": [
        "qed",
        "path-integral"
      ],
      "sourceIds": [
        "dyson-qed-1949"
      ],
      "tags": [
        "Dyson series"
      ]
    },
    {
      "id": "fermi-golden-rule",
      "name": "Fermi golden rule",
      "category": "Perturbation theory",
      "latex": "\\Gamma_{i\\to f}=\\frac{2\\pi}{\\hbar}|\\langle f|V|i\\rangle|^2\\rho(E_f)",
      "plain": "Gamma=2 pi/hbar |<f|V|i>|^2 rho(E_f)",
      "description": "Leading transition rate into a continuum of final states.",
      "theoryIds": [
        "canonical-quantization",
        "qed"
      ],
      "sourceIds": [
        "dirac-1925"
      ],
      "tags": [
        "transition rate"
      ]
    },
    {
      "id": "lippmann-schwinger",
      "name": "Lippmann–Schwinger equation",
      "category": "Scattering theory",
      "latex": "|\\psi^{(\\pm)}\\rangle=|\\phi\\rangle+\\frac{1}{E-H_0\\pm i0}V|\\psi^{(\\pm)}\\rangle",
      "plain": "psi± = phi + (E-H0±i0)^-1 V psi±",
      "description": "Integral-equation form of stationary quantum scattering.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "sep-math-rigor"
      ],
      "tags": [
        "scattering"
      ]
    },
    {
      "id": "t-matrix",
      "name": "T-matrix equation",
      "category": "Scattering theory",
      "latex": "T(E)=V+V\\frac{1}{E-H_0+i0}T(E)",
      "plain": "T=V+V G0 T",
      "description": "Operator equation defining the scattering T matrix.",
      "theoryIds": [
        "wave-mechanics",
        "qed"
      ],
      "sourceIds": [
        "sep-qft"
      ],
      "tags": [
        "scattering"
      ]
    },
    {
      "id": "born-scattering",
      "name": "First Born scattering amplitude",
      "category": "Scattering theory",
      "latex": "f^{(1)}(\\mathbf q)=-\\frac{m}{2\\pi\\hbar^2}\\int d^3r\\,e^{-i\\mathbf q\\cdot\\mathbf r}V(\\mathbf r)",
      "plain": "f1(q)=-m/(2pi hbar^2) Fourier[V]",
      "description": "Leading weak-potential scattering amplitude.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "sep-math-rigor"
      ],
      "tags": [
        "Born approximation"
      ]
    },
    {
      "id": "differential-cross-section",
      "name": "Differential scattering cross section",
      "category": "Scattering theory",
      "latex": "\\frac{d\\sigma}{d\\Omega}=|f(\\theta,\\phi)|^2",
      "plain": "d sigma/d Omega = |f|^2",
      "description": "Differential cross section from the asymptotic scattering amplitude.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "sep-math-rigor"
      ],
      "tags": [
        "cross section"
      ]
    },
    {
      "id": "optical-theorem",
      "name": "Optical theorem",
      "category": "Scattering theory",
      "latex": "\\sigma_{\\rm tot}=\\frac{4\\pi}{k}\\operatorname{Im}f(0)",
      "plain": "sigma_tot=4 pi Im f(0)/k",
      "description": "Relates total cross section to the forward elastic scattering amplitude.",
      "theoryIds": [
        "qed",
        "wave-mechanics"
      ],
      "sourceIds": [
        "sep-qft"
      ],
      "tags": [
        "unitarity"
      ]
    },
    {
      "id": "partial-wave-amplitude",
      "name": "Partial-wave scattering amplitude",
      "category": "Scattering theory",
      "latex": "f(\\theta)=\\frac{1}{k}\\sum_{\\ell=0}^{\\infty}(2\\ell+1)e^{i\\delta_\\ell}\\sin\\delta_\\ell\\,P_\\ell(\\cos\\theta)",
      "plain": "f(theta)=1/k sum (2l+1)e^iδ sinδ P_l",
      "description": "Expansion of a central-potential scattering amplitude in phase shifts.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "sep-math-rigor"
      ],
      "tags": [
        "partial waves"
      ]
    },
    {
      "id": "s-matrix-unitarity",
      "name": "S-matrix unitarity",
      "category": "Scattering theory",
      "latex": "S^{\\dagger}S=SS^{\\dagger}=I",
      "plain": "S†S=I",
      "description": "Probability-conservation condition for the scattering matrix.",
      "theoryIds": [
        "qed",
        "amplitudes-bootstrap"
      ],
      "sourceIds": [
        "dyson-qed-1949",
        "elvang-huang-amplitudes-2015"
      ],
      "tags": [
        "S matrix"
      ]
    },
    {
      "id": "angular-ladder",
      "name": "Angular-momentum ladder action",
      "category": "Angular momentum",
      "latex": "J_{\\pm}|j,m\\rangle=\\hbar\\sqrt{j(j+1)-m(m\\pm1)}\\,|j,m\\pm1\\rangle",
      "plain": "J±|jm>=hbar sqrt[j(j+1)-m(m±1)] |j,m±1>",
      "description": "Raises or lowers the magnetic quantum number of an angular-momentum state.",
      "theoryIds": [
        "dirac-electron-theory"
      ],
      "sourceIds": [
        "sep-math-rigor"
      ],
      "tags": [
        "angular momentum"
      ]
    },
    {
      "id": "cg-expansion",
      "name": "Clebsch–Gordan expansion",
      "category": "Angular momentum",
      "latex": "|JM\\rangle=\\sum_{m_1,m_2}C^{JM}_{j_1m_1,j_2m_2}|j_1m_1\\rangle|j_2m_2\\rangle",
      "plain": "|JM>=sum CG |j1m1>|j2m2>",
      "description": "Expansion of coupled angular momentum states in an uncoupled basis.",
      "theoryIds": [
        "dirac-electron-theory"
      ],
      "sourceIds": [
        "sep-math-rigor"
      ],
      "tags": [
        "Clebsch-Gordan"
      ]
    },
    {
      "id": "wigner-eckart",
      "name": "Wigner–Eckart theorem",
      "category": "Angular momentum",
      "latex": "\\langle jm|T_q^{(k)}|j'm'\\rangle=\\frac{\\langle j'||T^{(k)}||j\\rangle}{\\sqrt{2j+1}}\\,C^{jm}_{j'm',kq}",
      "plain": "matrix element = reduced matrix element times CG coefficient",
      "description": "Separates angular dependence from a reduced matrix element for spherical tensor operators.",
      "theoryIds": [
        "dirac-electron-theory"
      ],
      "sourceIds": [
        "sep-math-rigor"
      ],
      "tags": [
        "Wigner-Eckart"
      ]
    },
    {
      "id": "zeeman",
      "name": "Zeeman interaction Hamiltonian",
      "category": "Atomic and AMO physics",
      "latex": "H_Z=-\\boldsymbol\\mu\\cdot\\mathbf B",
      "plain": "H_Z = -mu dot B",
      "description": "Magnetic-dipole interaction with an external magnetic field.",
      "theoryIds": [
        "dirac-electron-theory",
        "quantum-optical-coherence"
      ],
      "sourceIds": [
        "dirac-electron-1928"
      ],
      "tags": [
        "Zeeman"
      ]
    },
    {
      "id": "spin-orbit",
      "name": "Spin–orbit interaction",
      "category": "Atomic and AMO physics",
      "latex": "H_{SO}=\\xi(r)\\,\\mathbf L\\cdot\\mathbf S",
      "plain": "H_SO = xi(r) L dot S",
      "description": "Effective coupling between orbital and spin angular momentum.",
      "theoryIds": [
        "dirac-electron-theory"
      ],
      "sourceIds": [
        "dirac-electron-1928"
      ],
      "tags": [
        "spin orbit"
      ]
    },
    {
      "id": "stark-first",
      "name": "First-order Stark shift",
      "category": "Atomic and AMO physics",
      "latex": "\\Delta E_n^{(1)}=\\langle n|(-\\mathbf d\\cdot\\mathbf E)|n\\rangle",
      "plain": "Delta E1=<n|-d dot E|n>",
      "description": "First-order electric-field energy shift.",
      "theoryIds": [
        "wave-mechanics",
        "quantum-optical-coherence"
      ],
      "sourceIds": [
        "sep-math-rigor"
      ],
      "tags": [
        "Stark"
      ]
    },
    {
      "id": "dipole-rate",
      "name": "Electric-dipole spontaneous-emission rate",
      "category": "Quantum optics & AMO",
      "latex": "\\Gamma_{eg}=\\frac{\\omega_{eg}^3|\\mathbf d_{eg}|^2}{3\\pi\\varepsilon_0\\hbar c^3}",
      "plain": "Gamma=omega^3 |d|^2/(3 pi epsilon0 hbar c^3)",
      "description": "Free-space spontaneous-emission rate in the electric-dipole approximation.",
      "theoryIds": [
        "quantum-optical-coherence",
        "qed"
      ],
      "sourceIds": [
        "glauber-coherence-1963",
        "feynman-qed-1949"
      ],
      "tags": [
        "spontaneous emission"
      ]
    },
    {
      "id": "lsz",
      "name": "LSZ reduction formula (schematic)",
      "category": "Quantum field theory",
      "latex": "\\langle p'_1\\cdots|S|p_1\\cdots\\rangle\\propto\\prod_i\\lim_{p_i^2\\to m_i^2}(p_i^2-m_i^2)\\,\\tilde G_n",
      "plain": "S matrix proportional amputated on-shell n-point function",
      "description": "Relates S-matrix elements to amputated on-shell time-ordered correlation functions.",
      "theoryIds": [
        "wightman-qft",
        "qed"
      ],
      "sourceIds": [
        "sep-qft"
      ],
      "tags": [
        "LSZ"
      ]
    },
    {
      "id": "ward-takahashi",
      "name": "Ward–Takahashi identity",
      "category": "Quantum field theory",
      "latex": "q_\\mu\\Gamma^\\mu(p+q,p)=S^{-1}(p+q)-S^{-1}(p)",
      "plain": "q_mu Gamma^mu = S^-1(p+q)-S^-1(p)",
      "description": "Gauge-symmetry identity relating the QED vertex and fermion propagator.",
      "theoryIds": [
        "qed",
        "brst"
      ],
      "sourceIds": [
        "sep-qft",
        "feynman-qed-1949"
      ],
      "tags": [
        "Ward identity"
      ]
    },
    {
      "id": "callan-symanzik",
      "name": "Callan–Symanzik equation",
      "category": "Quantum field theory",
      "latex": "\\left[\\mu\\partial_\\mu+\\beta(g)\\partial_g+n\\gamma(g)\\right]G^{(n)}=0",
      "plain": "[mu d_mu + beta d_g + n gamma] G_n = 0",
      "description": "Renormalization-group equation for renormalized correlation functions.",
      "theoryIds": [
        "renormalization-group",
        "qed",
        "qcd"
      ],
      "sourceIds": [
        "wilson-rg-1971",
        "sep-qft"
      ],
      "tags": [
        "Callan-Symanzik"
      ]
    },
    {
      "id": "ope",
      "name": "Operator-product expansion",
      "category": "Quantum field theory",
      "latex": "\\mathcal O_i(x)\\mathcal O_j(0)\\sim\\sum_k C_{ij}^{\\ k}(x)\\mathcal O_k(0)",
      "plain": "O_i(x) O_j(0) ~ sum C_ij^k(x) O_k(0)",
      "description": "Short-distance expansion central to CFT and general QFT.",
      "theoryIds": [
        "conformal-field-theory",
        "conformal-bootstrap"
      ],
      "sourceIds": [
        "bpz-1984",
        "simmons-duffin-bootstrap-2016"
      ],
      "tags": [
        "OPE"
      ]
    },
    {
      "id": "axial-anomaly",
      "name": "Axial anomaly",
      "category": "Quantum field theory",
      "latex": "\\partial_\\mu j_5^\\mu=\\frac{e^2}{16\\pi^2}\\epsilon^{\\mu\\nu\\rho\\sigma}F_{\\mu\\nu}F_{\\rho\\sigma}",
      "plain": "div j5 = e^2/(16pi^2) epsilon F F",
      "description": "Quantum violation of classical axial-current conservation in a gauge background.",
      "theoryIds": [
        "qed",
        "qcd"
      ],
      "sourceIds": [
        "sep-qft"
      ],
      "tags": [
        "anomaly"
      ]
    },
    {
      "id": "fp-determinant",
      "name": "Faddeev–Popov determinant",
      "category": "Quantum field theory",
      "latex": "1=\\Delta_{FP}[A]\\int\\mathcal Dg\\,\\delta(G[A^g])",
      "plain": "1 = Delta_FP integral Dg delta(gauge condition)",
      "description": "Gauge-fixing identity underlying the Faddeev–Popov procedure.",
      "theoryIds": [
        "brst",
        "yang-mills"
      ],
      "sourceIds": [
        "becchi-rouet-stora-1976"
      ],
      "tags": [
        "gauge fixing"
      ]
    },
    {
      "id": "bv-quantum-master",
      "name": "BV quantum master equation",
      "category": "Quantum field theory",
      "latex": "\\frac12(S,S)-i\\hbar\\Delta S=0",
      "plain": "1/2(S,S)-i hbar Delta S=0",
      "description": "Quantum consistency condition in the Batalin–Vilkovisky formalism.",
      "theoryIds": [
        "bv-formalism"
      ],
      "sourceIds": [
        "batalin-vilkovisky-1981"
      ],
      "tags": [
        "BV"
      ]
    },
    {
      "id": "wilson-lattice-action",
      "name": "Wilson lattice gauge action",
      "category": "Quantum field theory",
      "latex": "S_W=\\beta\\sum_p\\left(1-\\frac{1}{N}\\operatorname{ReTr}U_p\\right)",
      "plain": "S_W=beta sum_p (1 - ReTr U_p/N)",
      "description": "Standard plaquette action for lattice gauge theory.",
      "theoryIds": [
        "lattice-gauge"
      ],
      "sourceIds": [
        "wilson-lattice-1974"
      ],
      "tags": [
        "lattice gauge"
      ]
    },
    {
      "id": "polyakov-loop",
      "name": "Polyakov loop",
      "category": "Quantum field theory",
      "latex": "P(\\mathbf x)=\\operatorname{Tr}\\prod_{\\tau=0}^{N_\\tau-1}U_0(\\mathbf x,\\tau)",
      "plain": "P(x)=Tr product temporal links",
      "description": "Thermal Wilson line used as an order parameter in pure gauge theory.",
      "theoryIds": [
        "lattice-gauge",
        "qcd"
      ],
      "sourceIds": [
        "wilson-lattice-1974"
      ],
      "tags": [
        "confinement"
      ]
    },
    {
      "id": "green-time-ordered",
      "name": "Time-ordered many-body Green function",
      "category": "Many-body Green functions",
      "latex": "G(1,2)=-i\\langle\\mathcal T\\,\\psi(1)\\psi^{\\dagger}(2)\\rangle",
      "plain": "G=-i<T psi psi†>",
      "description": "Single-particle time-ordered Green function.",
      "theoryIds": [
        "hubbard-model",
        "schwinger-dyson"
      ],
      "sourceIds": [
        "schwinger-green-1951",
        "hubbard-1963"
      ],
      "tags": [
        "Green function"
      ]
    },
    {
      "id": "dyson-green",
      "name": "Dyson equation for Green functions",
      "category": "Many-body Green functions",
      "latex": "G^{-1}=G_0^{-1}-\\Sigma",
      "plain": "G^-1 = G0^-1 - Sigma",
      "description": "Defines the self-energy correction to a propagator.",
      "theoryIds": [
        "schwinger-dyson",
        "hubbard-model"
      ],
      "sourceIds": [
        "schwinger-green-1951"
      ],
      "tags": [
        "self energy"
      ]
    },
    {
      "id": "lehmann",
      "name": "Lehmann spectral representation (schematic)",
      "category": "Many-body Green functions",
      "latex": "G(\\omega)=\\sum_n\\frac{|\\langle n|A|0\\rangle|^2}{\\omega-(E_n-E_0)+i0}-\\cdots",
      "plain": "G(omega)=sum spectral weights over excitation poles",
      "description": "Expresses a Green function through exact energy eigenstates and spectral weights.",
      "theoryIds": [
        "schwinger-dyson",
        "quantum-information"
      ],
      "sourceIds": [
        "sep-qft"
      ],
      "tags": [
        "spectral function"
      ]
    },
    {
      "id": "matsubara",
      "name": "Matsubara Green function",
      "category": "Many-body Green functions",
      "latex": "G(\\tau)=-\\langle\\mathcal T_\\tau\\psi(\\tau)\\psi^{\\dagger}(0)\\rangle",
      "plain": "G(tau)=-<T_tau psi(tau) psi†(0)>",
      "description": "Imaginary-time thermal Green function.",
      "theoryIds": [
        "quantum-thermodynamics",
        "hubbard-model"
      ],
      "sourceIds": [
        "quantum-thermo-review"
      ],
      "tags": [
        "Matsubara"
      ]
    },
    {
      "id": "kubo",
      "name": "Kubo linear-response formula",
      "category": "Many-body response",
      "latex": "\\chi_{AB}(t)=\\frac{i}{\\hbar}\\Theta(t)\\langle[A(t),B(0)]\\rangle",
      "plain": "chi_AB(t)=i Theta(t)<[A(t),B(0)]>/hbar",
      "description": "Linear response of observable A to a perturbation coupling to B.",
      "theoryIds": [
        "quantum-thermodynamics",
        "hubbard-model"
      ],
      "sourceIds": [
        "quantum-thermo-review"
      ],
      "tags": [
        "Kubo"
      ]
    },
    {
      "id": "fdt",
      "name": "Quantum fluctuation–dissipation relation",
      "category": "Many-body response",
      "latex": "S_{AA}(\\omega)=\\hbar\\coth\\!\\left(\\frac{\\hbar\\omega}{2k_BT}\\right)\\operatorname{Im}\\chi_{AA}(\\omega)",
      "plain": "S(omega)=hbar coth(hbar omega/2kBT) Im chi",
      "description": "One common symmetrized form relating equilibrium fluctuations and response.",
      "theoryIds": [
        "quantum-thermodynamics",
        "open-quantum-systems"
      ],
      "sourceIds": [
        "quantum-thermo-review"
      ],
      "tags": [
        "fluctuation dissipation"
      ]
    },
    {
      "id": "bdg",
      "name": "Bogoliubov–de Gennes equation",
      "category": "Quantum many-body & condensed matter",
      "latex": "\\begin{pmatrix}H_0-\\mu&\\Delta\\\\\\Delta^*&-(H_0-\\mu)^*\\end{pmatrix}\\binom{u_n}{v_n}=E_n\\binom{u_n}{v_n}",
      "plain": "BdG matrix acting on (u,v) equals E(u,v)",
      "description": "Quasiparticle eigenproblem for mean-field superconductors and superfluids.",
      "theoryIds": [
        "bcs-theory"
      ],
      "sourceIds": [
        "bcs-1957"
      ],
      "tags": [
        "BdG"
      ]
    },
    {
      "id": "london",
      "name": "London penetration relation",
      "category": "Quantum many-body & condensed matter",
      "latex": "\\nabla^2\\mathbf B=\\frac{\\mathbf B}{\\lambda_L^2}",
      "plain": "nabla^2 B = B/lambda_L^2",
      "description": "Magnetic-field screening equation in a local London superconductor.",
      "theoryIds": [
        "bcs-theory"
      ],
      "sourceIds": [
        "bcs-1957"
      ],
      "tags": [
        "superconductivity"
      ]
    },
    {
      "id": "choi",
      "name": "Choi matrix of a channel",
      "category": "Quantum information",
      "latex": "J_{\\mathcal E}=(\\mathcal I\\otimes\\mathcal E)(|\\Phi\\rangle\\langle\\Phi|)",
      "plain": "J_E=(I tensor E)(Phi)",
      "description": "Operator representation of a quantum channel through a maximally entangled input.",
      "theoryIds": [
        "quantum-information",
        "quantum-supermaps"
      ],
      "sourceIds": [
        "quantum-supermaps-2008"
      ],
      "tags": [
        "Choi"
      ]
    },
    {
      "id": "knill-laflamme",
      "name": "Knill–Laflamme error-correction condition",
      "category": "Quantum information",
      "latex": "P E_a^{\\dagger}E_b P=c_{ab}P",
      "plain": "P Ea† Eb P = c_ab P",
      "description": "Condition for a code subspace to exactly correct a set of errors.",
      "theoryIds": [
        "quantum-information",
        "toric-code"
      ],
      "sourceIds": [
        "kitaev-anyons-2003",
        "schumacher-1995"
      ],
      "tags": [
        "quantum error correction"
      ]
    },
    {
      "id": "holevo",
      "name": "Holevo quantity",
      "category": "Quantum information",
      "latex": "\\chi=S\\!\\left(\\sum_xp_x\\rho_x\\right)-\\sum_xp_xS(\\rho_x)",
      "plain": "chi=S(sum p rho)-sum p S(rho)",
      "description": "Upper bound on accessible classical information from a quantum ensemble.",
      "theoryIds": [
        "quantum-information"
      ],
      "sourceIds": [
        "schumacher-1995"
      ],
      "tags": [
        "Holevo"
      ]
    },
    {
      "id": "coherent-information",
      "name": "Coherent information",
      "category": "Quantum information",
      "latex": "I_c(A\\rangle B)=S(\\rho_B)-S(\\rho_{AB})",
      "plain": "I_c = S(B)-S(AB)",
      "description": "Information quantity central to quantum channel capacities and entanglement transmission.",
      "theoryIds": [
        "quantum-information"
      ],
      "sourceIds": [
        "schumacher-1995"
      ],
      "tags": [
        "coherent information"
      ]
    },
    {
      "id": "negativity",
      "name": "Entanglement negativity",
      "category": "Quantum information",
      "latex": "\\mathcal N(\\rho)=\\frac{\\|\\rho^{T_B}\\|_1-1}{2}",
      "plain": "N=(||rho^TB||_1-1)/2",
      "description": "Entanglement measure based on partial transposition.",
      "theoryIds": [
        "quantum-information",
        "resource-theories"
      ],
      "sourceIds": [
        "resource-rmp-2019"
      ],
      "tags": [
        "negativity"
      ]
    },
    {
      "id": "log-negativity",
      "name": "Logarithmic negativity",
      "category": "Quantum information",
      "latex": "E_{\\mathcal N}=\\log_2\\|\\rho^{T_B}\\|_1",
      "plain": "E_N=log2 ||rho^TB||_1",
      "description": "Computable entanglement monotone based on the trace norm of the partial transpose.",
      "theoryIds": [
        "quantum-information",
        "resource-theories"
      ],
      "sourceIds": [
        "resource-rmp-2019"
      ],
      "tags": [
        "negativity"
      ]
    },
    {
      "id": "ssa",
      "name": "Strong subadditivity",
      "category": "Quantum information",
      "latex": "S(ABC)+S(B)\\le S(AB)+S(BC)",
      "plain": "S(ABC)+S(B) <= S(AB)+S(BC)",
      "description": "Fundamental entropy inequality for tripartite quantum states.",
      "theoryIds": [
        "quantum-information"
      ],
      "sourceIds": [
        "schumacher-1995"
      ],
      "tags": [
        "entropy inequality"
      ]
    },
    {
      "id": "data-processing",
      "name": "Quantum relative-entropy data processing",
      "category": "Quantum information",
      "latex": "D(\\mathcal E(\\rho)\\|\\mathcal E(\\sigma))\\le D(\\rho\\|\\sigma)",
      "plain": "D(E(rho)||E(sigma)) <= D(rho||sigma)",
      "description": "Distinguishability cannot increase under a quantum channel.",
      "theoryIds": [
        "quantum-information",
        "resource-theories"
      ],
      "sourceIds": [
        "resource-rmp-2019"
      ],
      "tags": [
        "data processing"
      ]
    },
    {
      "id": "diamond-norm",
      "name": "Diamond norm of a channel difference",
      "category": "Quantum information",
      "latex": "\\|\\Phi\\|_{\\diamond}=\\sup_{\\rho}\\|(\\Phi\\otimes I)(\\rho)\\|_1",
      "plain": "||Phi||_diamond = sup_rho ||(Phi tensor I)(rho)||_1",
      "description": "Completely bounded trace norm used to distinguish quantum channels.",
      "theoryIds": [
        "quantum-information",
        "quantum-supermaps"
      ],
      "sourceIds": [
        "quantum-supermaps-2008"
      ],
      "tags": [
        "diamond norm"
      ]
    },
    {
      "id": "squeeze-operator",
      "name": "Single-mode squeeze operator",
      "category": "Quantum optics & AMO",
      "latex": "S(\\zeta)=\\exp\\!\\left[\\frac12(\\zeta^*a^2-\\zeta a^{\\dagger2})\\right]",
      "plain": "S(zeta)=exp[(zeta* a^2-zeta a†^2)/2]",
      "description": "Unitary generating single-mode squeezed states.",
      "theoryIds": [
        "quantum-optical-coherence"
      ],
      "sourceIds": [
        "glauber-coherence-1963"
      ],
      "tags": [
        "squeezing"
      ]
    },
    {
      "id": "husimi-q",
      "name": "Husimi Q function",
      "category": "Quantum optics & AMO",
      "latex": "Q(\\alpha)=\\frac{1}{\\pi}\\langle\\alpha|\\rho|\\alpha\\rangle",
      "plain": "Q(alpha)=<alpha|rho|alpha>/pi",
      "description": "Positive phase-space quasiprobability built from coherent states.",
      "theoryIds": [
        "quantum-optical-coherence",
        "phase-space-qm"
      ],
      "sourceIds": [
        "glauber-coherence-1963",
        "wigner-1932"
      ],
      "tags": [
        "Husimi"
      ]
    },
    {
      "id": "p-representation",
      "name": "Glauber–Sudarshan P representation",
      "category": "Quantum optics & AMO",
      "latex": "\\rho=\\int d^2\\alpha\\,P(\\alpha)|\\alpha\\rangle\\langle\\alpha|",
      "plain": "rho=integral P(alpha)|alpha><alpha| d2alpha",
      "description": "Diagonal coherent-state representation of a field state.",
      "theoryIds": [
        "quantum-optical-coherence"
      ],
      "sourceIds": [
        "glauber-coherence-1963"
      ],
      "tags": [
        "P representation"
      ]
    },
    {
      "id": "input-output",
      "name": "Cavity input–output relation",
      "category": "Quantum optics & AMO",
      "latex": "a_{\\rm out}=a_{\\rm in}-\\sqrt\\kappa\\,a",
      "plain": "a_out = a_in - sqrt(kappa) a",
      "description": "Standard single-port input–output relation up to convention-dependent signs.",
      "theoryIds": [
        "open-quantum-systems",
        "quantum-optical-coherence"
      ],
      "sourceIds": [
        "breuer-petruccione-2007"
      ],
      "tags": [
        "input-output"
      ]
    },
    {
      "id": "purcell",
      "name": "Purcell factor",
      "category": "Quantum optics & AMO",
      "latex": "F_P=\\frac{3}{4\\pi^2}\\left(\\frac{\\lambda}{n}\\right)^3\\frac{Q}{V}",
      "plain": "F_P = 3/(4pi^2) (lambda/n)^3 Q/V",
      "description": "Idealized cavity enhancement of spontaneous emission.",
      "theoryIds": [
        "jaynes-cummings",
        "quantum-optical-coherence"
      ],
      "sourceIds": [
        "jaynes-cummings-1963"
      ],
      "tags": [
        "Purcell"
      ]
    },
    {
      "id": "cooperativity",
      "name": "Cavity cooperativity",
      "category": "Quantum optics & AMO",
      "latex": "C=\\frac{4g^2}{\\kappa\\gamma}",
      "plain": "C=4g^2/(kappa gamma)",
      "description": "Dimensionless strong-coupling figure of merit for cavity QED.",
      "theoryIds": [
        "jaynes-cummings"
      ],
      "sourceIds": [
        "jaynes-cummings-1963"
      ],
      "tags": [
        "cavity QED"
      ]
    },
    {
      "id": "adm-hamiltonian",
      "name": "ADM Hamiltonian constraint",
      "category": "Quantum gravity & cosmology",
      "latex": "\\mathcal H=\\frac{16\\pi G}{\\sqrt h}\\left(\\pi_{ij}\\pi^{ij}-\\frac12\\pi^2\\right)-\\frac{\\sqrt h}{16\\pi G}({}^{(3)}R-2\\Lambda)=0",
      "plain": "ADM Hamiltonian constraint = 0",
      "description": "Canonical general-relativistic Hamiltonian constraint underlying Wheeler–DeWitt quantization.",
      "theoryIds": [
        "canonical-quantum-gravity",
        "wheeler-dewitt"
      ],
      "sourceIds": [
        "dewitt-canonical-gravity-1967"
      ],
      "tags": [
        "ADM"
      ]
    },
    {
      "id": "regge-action",
      "name": "Regge action",
      "category": "Quantum gravity & cosmology",
      "latex": "S_R=\\frac{1}{8\\pi G}\\sum_h A_h\\,\\delta_h",
      "plain": "S_R = 1/(8piG) sum hinge area times deficit angle",
      "description": "Discrete Einstein–Hilbert action for piecewise-flat simplicial geometries.",
      "theoryIds": [
        "quantum-regge",
        "euclidean-dynamical-triangulations",
        "cdt"
      ],
      "sourceIds": [
        "cdt-review"
      ],
      "tags": [
        "Regge calculus"
      ]
    },
    {
      "id": "mukhanov-sasaki",
      "name": "Mukhanov–Sasaki equation",
      "category": "Quantum gravity & cosmology",
      "latex": "v_k''+\\left(k^2-\\frac{z''}{z}\\right)v_k=0",
      "plain": "v_k'' + (k^2-z''/z)v_k = 0",
      "description": "Mode equation for scalar cosmological perturbations in single-field inflation.",
      "theoryIds": [
        "inflationary-fluctuations"
      ],
      "sourceIds": [
        "quantum-cosmology-review"
      ],
      "tags": [
        "inflation"
      ]
    },
    {
      "id": "scalar-index",
      "name": "Scalar spectral index",
      "category": "Quantum gravity & cosmology",
      "latex": "n_s-1=\\frac{d\\ln\\mathcal P_{\\mathcal R}}{d\\ln k}\\approx-6\\epsilon+2\\eta",
      "plain": "n_s-1 = d ln P_R/d ln k ~ -6 epsilon +2 eta",
      "description": "Leading slow-roll expression for the scalar spectral tilt.",
      "theoryIds": [
        "inflationary-fluctuations"
      ],
      "sourceIds": [
        "quantum-cosmology-review"
      ],
      "tags": [
        "inflation"
      ]
    },
    {
      "id": "tensor-ratio",
      "name": "Tensor-to-scalar ratio",
      "category": "Quantum gravity & cosmology",
      "latex": "r\\equiv\\frac{\\mathcal P_T}{\\mathcal P_{\\mathcal R}}\\approx16\\epsilon",
      "plain": "r = P_T/P_R ~16 epsilon",
      "description": "Leading single-field slow-roll tensor-to-scalar ratio.",
      "theoryIds": [
        "inflationary-fluctuations"
      ],
      "sourceIds": [
        "quantum-cosmology-review"
      ],
      "tags": [
        "inflation"
      ]
    },
    {
      "id": "csl-sde",
      "name": "CSL stochastic state equation (schematic)",
      "category": "Collapse theories",
      "latex": "d|\\psi_t\\rangle=\\left[-\\frac{i}{\\hbar}Hdt+\\sqrt\\lambda(A-\\langle A\\rangle_t)dW_t-\\frac{\\lambda}{2}(A-\\langle A\\rangle_t)^2dt\\right]|\\psi_t\\rangle",
      "plain": "dpsi = unitary + stochastic localization + nonlinear drift",
      "description": "Representative normalized continuous-spontaneous-localization stochastic equation for one collapse operator.",
      "theoryIds": [
        "csl",
        "objective-collapse"
      ],
      "sourceIds": [
        "sep-collapse",
        "bassi-ghirardi-collapse-2003"
      ],
      "tags": [
        "CSL"
      ]
    },
    {
      "id": "qmupl-sde",
      "name": "QMUPL stochastic state equation (schematic)",
      "category": "Collapse theories",
      "latex": "d|\\psi_t\\rangle=\\left[-\\frac{i}{\\hbar}Hdt+\\sqrt\\lambda(x-\\langle x\\rangle_t)dW_t-\\frac{\\lambda}{2}(x-\\langle x\\rangle_t)^2dt\\right]|\\psi_t\\rangle",
      "plain": "QMUPL position-localizing stochastic equation",
      "description": "Simplified position-localizing continuous-collapse dynamics.",
      "theoryIds": [
        "qmupl",
        "objective-collapse"
      ],
      "sourceIds": [
        "bassi-ghirardi-collapse-2003"
      ],
      "tags": [
        "QMUPL"
      ]
    },
    {
      "id": "diosi-master",
      "name": "Diósi gravitational master equation (schematic)",
      "category": "Collapse theories",
      "latex": "\\dot\\rho=-\\frac{i}{\\hbar}[H,\\rho]-\\frac{G}{2\\hbar}\\int d^3x\\,d^3y\\,\\frac{[\\hat\\mu(x),[\\hat\\mu(y),\\rho]]}{|x-y|}",
      "plain": "rho-dot = unitary - gravitational double commutator",
      "description": "Representative gravity-related decoherence/collapse master equation in the Diósi program.",
      "theoryIds": [
        "diosi-gravitational-collapse",
        "diosi-penrose"
      ],
      "sourceIds": [
        "diosi-gravity-collapse-1987"
      ],
      "tags": [
        "Diosi"
      ]
    },
    {
      "id": "energy-collapse",
      "name": "Energy-driven collapse SDE (schematic)",
      "category": "Collapse theories",
      "latex": "d|\\psi\\rangle=\\left[-iHdt-\\frac{\\sigma^2}{8}(H-\\langle H\\rangle)^2dt+\\frac{\\sigma}{2}(H-\\langle H\\rangle)dW_t\\right]|\\psi\\rangle",
      "plain": "energy-driven stochastic collapse equation",
      "description": "Representative norm-preserving stochastic energy-based reduction dynamics.",
      "theoryIds": [
        "energy-driven-collapse"
      ],
      "sourceIds": [
        "hughston-energy-collapse-1996"
      ],
      "tags": [
        "energy collapse"
      ]
    },
    {
      "id": "stabilizer-condition",
      "name": "Stabilizer-state condition",
      "category": "Quantum error correction",
      "latex": "g_i|\\psi\\rangle=|\\psi\\rangle\\quad\\forall g_i\\in\\mathcal S",
      "plain": "g_i |psi> = |psi>",
      "description": "A stabilizer state or code lies in the simultaneous +1 eigenspace of its stabilizer generators.",
      "theoryIds": [
        "stabilizer-formalism",
        "quantum-error-correction"
      ],
      "sourceIds": [
        "gottesman-stabilizer-1997"
      ],
      "tags": [
        "stabilizer"
      ]
    },
    {
      "id": "stabilizer-commute",
      "name": "Stabilizer-generator commutation",
      "category": "Quantum error correction",
      "latex": "[g_i,g_j]=0",
      "plain": "[g_i,g_j]=0",
      "description": "Independent stabilizer generators must mutually commute so they can define a common eigenspace.",
      "theoryIds": [
        "stabilizer-formalism"
      ],
      "sourceIds": [
        "gottesman-stabilizer-1997"
      ],
      "tags": [
        "stabilizer"
      ]
    },
    {
      "id": "stabilizer-projector",
      "name": "Stabilizer-code projector",
      "category": "Quantum error correction",
      "latex": "P=\\prod_{i=1}^{r}\\frac{I+g_i}{2}",
      "plain": "P = product_i (I+g_i)/2",
      "description": "Projector onto the common +1 eigenspace of r independent commuting stabilizer generators.",
      "theoryIds": [
        "stabilizer-formalism",
        "quantum-error-correction"
      ],
      "sourceIds": [
        "gottesman-stabilizer-1997"
      ],
      "tags": [
        "projector"
      ]
    },
    {
      "id": "stabilizer-dimension",
      "name": "Stabilizer-code dimension",
      "category": "Quantum error correction",
      "latex": "k=n-r",
      "plain": "k = n-r",
      "description": "An n-qubit stabilizer code with r independent stabilizer generators encodes k logical qubits.",
      "theoryIds": [
        "stabilizer-formalism",
        "quantum-error-correction"
      ],
      "sourceIds": [
        "gottesman-stabilizer-1997"
      ],
      "tags": [
        "logical qubits"
      ]
    },
    {
      "id": "surface-star",
      "name": "Surface-code star operator",
      "category": "Quantum error correction",
      "latex": "A_s=\\prod_{e\\ni s}X_e",
      "plain": "A_s = product X_e around vertex s",
      "description": "X-type stabilizer associated with a vertex in the surface/toric-code construction.",
      "theoryIds": [
        "surface-code",
        "toric-code"
      ],
      "sourceIds": [
        "dennis-surface-2002",
        "kitaev-anyons-2003"
      ],
      "tags": [
        "surface code"
      ]
    },
    {
      "id": "surface-plaquette",
      "name": "Surface-code plaquette operator",
      "category": "Quantum error correction",
      "latex": "B_p=\\prod_{e\\in\\partial p}Z_e",
      "plain": "B_p = product Z_e around plaquette p",
      "description": "Z-type stabilizer associated with a plaquette.",
      "theoryIds": [
        "surface-code",
        "toric-code"
      ],
      "sourceIds": [
        "dennis-surface-2002",
        "kitaev-anyons-2003"
      ],
      "tags": [
        "surface code"
      ]
    },
    {
      "id": "logical-anticommute",
      "name": "Logical Pauli anticommutation",
      "category": "Quantum error correction",
      "latex": "X_LZ_L=-Z_LX_L",
      "plain": "X_L Z_L = - Z_L X_L",
      "description": "Logical X and Z operators intersecting once obey Pauli anticommutation.",
      "theoryIds": [
        "surface-code",
        "toric-code",
        "stabilizer-formalism"
      ],
      "sourceIds": [
        "dennis-surface-2002",
        "gottesman-stabilizer-1997"
      ],
      "tags": [
        "logical operators"
      ]
    },
    {
      "id": "gkp-stabilizers",
      "name": "Ideal square-GKP stabilizers",
      "category": "Quantum error correction",
      "latex": "S_q=e^{i2\\sqrt\\pi\\hat q},\\qquad S_p=e^{-i2\\sqrt\\pi\\hat p}",
      "plain": "S_q=exp(i2sqrt(pi) q), S_p=exp(-i2sqrt(pi) p)",
      "description": "Canonical stabilizers of the ideal square-lattice GKP code in units with [q,p]=i.",
      "theoryIds": [
        "gkp-code",
        "continuous-variable-qi"
      ],
      "sourceIds": [
        "gkp-2001"
      ],
      "tags": [
        "GKP"
      ]
    },
    {
      "id": "gkp-logicals",
      "name": "Ideal square-GKP logical Paulis",
      "category": "Quantum error correction",
      "latex": "Z_L=e^{i\\sqrt\\pi\\hat q},\\qquad X_L=e^{-i\\sqrt\\pi\\hat p}",
      "plain": "Z_L=exp(i sqrt(pi) q), X_L=exp(-i sqrt(pi) p)",
      "description": "Displacement operators implementing logical Pauli operations in the ideal square GKP code.",
      "theoryIds": [
        "gkp-code"
      ],
      "sourceIds": [
        "gkp-2001"
      ],
      "tags": [
        "GKP"
      ]
    },
    {
      "id": "gkp-comb",
      "name": "Ideal GKP logical-zero comb",
      "category": "Quantum error correction",
      "latex": "|0_L\\rangle\\propto\\sum_{s\\in\\mathbb Z}|q=2s\\sqrt\\pi\\rangle",
      "plain": "|0_L> proportional sum_s |q=2s sqrt(pi)>",
      "description": "Idealized infinite-energy position-space comb representation of a GKP logical codeword.",
      "theoryIds": [
        "gkp-code"
      ],
      "sourceIds": [
        "gkp-2001"
      ],
      "tags": [
        "GKP"
      ]
    },
    {
      "id": "cv-covariance",
      "name": "Continuous-variable covariance matrix",
      "category": "Continuous-variable quantum information",
      "latex": "V_{ij}=\\frac12\\langle\\{R_i-\\langle R_i\\rangle,R_j-\\langle R_j\\rangle\\}\\rangle",
      "plain": "V_ij = 1/2 <{Delta R_i, Delta R_j}>",
      "description": "Second-moment matrix of canonical quadratures for a bosonic state.",
      "theoryIds": [
        "continuous-variable-qi"
      ],
      "sourceIds": [
        "weedbrook-cv-2012"
      ],
      "tags": [
        "Gaussian states"
      ]
    },
    {
      "id": "cv-uncertainty",
      "name": "Robertson–Schrödinger matrix uncertainty",
      "category": "Continuous-variable quantum information",
      "latex": "V+\\frac{i\\hbar}{2}\\Omega\\ge0",
      "plain": "V + i hbar Omega/2 >= 0",
      "description": "Physical covariance matrices satisfy a matrix uncertainty condition set by the symplectic form.",
      "theoryIds": [
        "continuous-variable-qi"
      ],
      "sourceIds": [
        "weedbrook-cv-2012"
      ],
      "tags": [
        "symplectic"
      ]
    },
    {
      "id": "cv-symplectic",
      "name": "Canonical symplectic transformation",
      "category": "Continuous-variable quantum information",
      "latex": "S\\Omega S^T=\\Omega",
      "plain": "S Omega S^T = Omega",
      "description": "Defines a real symplectic transformation preserving canonical commutators.",
      "theoryIds": [
        "continuous-variable-qi"
      ],
      "sourceIds": [
        "weedbrook-cv-2012"
      ],
      "tags": [
        "symplectic"
      ]
    },
    {
      "id": "cv-symplectic-eigen",
      "name": "Symplectic eigenvalues",
      "category": "Continuous-variable quantum information",
      "latex": "\\operatorname{spec}|i\\Omega V|=\\{\\nu_1,\\nu_1,\\ldots,\\nu_n,\\nu_n\\}",
      "plain": "eigenvalues of |i Omega V| occur in pairs nu_i",
      "description": "Symplectic spectrum used to characterize Gaussian states.",
      "theoryIds": [
        "continuous-variable-qi"
      ],
      "sourceIds": [
        "weedbrook-cv-2012"
      ],
      "tags": [
        "Gaussian states"
      ]
    },
    {
      "id": "gaussian-wigner",
      "name": "Gaussian-state Wigner function",
      "category": "Continuous-variable quantum information",
      "latex": "W(R)=\\frac{\\exp[-\\frac12(R-d)^TV^{-1}(R-d)]}{(2\\pi)^n\\sqrt{\\det V}}",
      "plain": "W(R)=normal Gaussian with covariance V",
      "description": "Phase-space form of an n-mode Gaussian state, up to quadrature convention.",
      "theoryIds": [
        "continuous-variable-qi",
        "phase-space-qm"
      ],
      "sourceIds": [
        "weedbrook-cv-2012",
        "wigner-1932"
      ],
      "tags": [
        "Gaussian states"
      ]
    },
    {
      "id": "rotated-quadrature",
      "name": "Rotated field quadrature",
      "category": "Continuous-variable quantum information",
      "latex": "X_\\theta=\\frac{ae^{-i\\theta}+a^{\\dagger}e^{i\\theta}}{\\sqrt2}",
      "plain": "X_theta=(a e^-itheta+a† e^itheta)/sqrt2",
      "description": "Quadrature measured in phase-sensitive homodyne detection.",
      "theoryIds": [
        "continuous-variable-qi",
        "quantum-optical-coherence"
      ],
      "sourceIds": [
        "weedbrook-cv-2012",
        "glauber-coherence-1963"
      ],
      "tags": [
        "homodyne"
      ]
    },
    {
      "id": "wineland-squeezing",
      "name": "Wineland spin-squeezing parameter",
      "category": "Quantum metrology",
      "latex": "\\xi_R^2=\\frac{N(\\Delta J_\\perp)^2}{|\\langle\\mathbf J\\rangle|^2}",
      "plain": "xi_R^2 = N (Delta J_perp)^2 / |<J>|^2",
      "description": "Metrological spin-squeezing parameter; values below one indicate sub-standard-quantum-limit sensitivity under the usual conditions.",
      "theoryIds": [
        "spin-squeezing",
        "quantum-metrology"
      ],
      "sourceIds": [
        "wineland-squeezing-1992"
      ],
      "tags": [
        "spin squeezing"
      ]
    },
    {
      "id": "sql-phase",
      "name": "Standard quantum limit scaling",
      "category": "Quantum metrology",
      "latex": "\\Delta\\phi_{\\rm SQL}\\sim\\frac{1}{\\sqrt N}",
      "plain": "Delta phi_SQL ~ 1/sqrt(N)",
      "description": "Shot-noise scaling for N independent probes.",
      "theoryIds": [
        "quantum-metrology"
      ],
      "sourceIds": [
        "giovannetti-metrology-2011"
      ],
      "tags": [
        "SQL"
      ]
    },
    {
      "id": "heisenberg-phase",
      "name": "Heisenberg-limit scaling",
      "category": "Quantum metrology",
      "latex": "\\Delta\\phi_{\\rm HL}\\sim\\frac{1}{N}",
      "plain": "Delta phi_HL ~ 1/N",
      "description": "Ideal entanglement-enhanced phase-sensitivity scaling for suitable resource counting.",
      "theoryIds": [
        "quantum-metrology"
      ],
      "sourceIds": [
        "giovannetti-metrology-2011"
      ],
      "tags": [
        "Heisenberg limit"
      ]
    },
    {
      "id": "error-propagation",
      "name": "Metrological error propagation",
      "category": "Quantum metrology",
      "latex": "\\Delta\\theta=\\frac{\\Delta A}{|\\partial_\\theta\\langle A\\rangle|}",
      "plain": "Delta theta = Delta A / |d <A>/d theta|",
      "description": "Estimator sensitivity from an observable's fluctuations and parameter response.",
      "theoryIds": [
        "quantum-metrology"
      ],
      "sourceIds": [
        "giovannetti-metrology-2011"
      ],
      "tags": [
        "sensitivity"
      ]
    },
    {
      "id": "classical-fisher",
      "name": "Classical Fisher information",
      "category": "Quantum metrology",
      "latex": "F(\\theta)=\\sum_x\\frac{[\\partial_\\theta p(x|\\theta)]^2}{p(x|\\theta)}",
      "plain": "F=sum (d_theta p)^2/p",
      "description": "Information carried by outcome statistics about a parameter.",
      "theoryIds": [
        "quantum-metrology"
      ],
      "sourceIds": [
        "giovannetti-metrology-2011"
      ],
      "tags": [
        "Fisher information"
      ]
    },
    {
      "id": "mixed-qfi",
      "name": "Quantum Fisher information for a mixed state",
      "category": "Quantum metrology",
      "latex": "F_Q=2\\sum_{ij}\\frac{|\\langle i|\\partial_\\theta\\rho|j\\rangle|^2}{\\lambda_i+\\lambda_j}",
      "plain": "F_Q=2 sum_ij |<i|d rho|j>|^2/(lambda_i+lambda_j)",
      "description": "Spectral formula for quantum Fisher information, summing terms with nonzero denominators.",
      "theoryIds": [
        "quantum-metrology"
      ],
      "sourceIds": [
        "giovannetti-metrology-2011"
      ],
      "tags": [
        "QFI"
      ]
    },
    {
      "id": "ramsey-fringe",
      "name": "Ideal Ramsey fringe",
      "category": "Quantum metrology",
      "latex": "P_e(\\phi)=\\frac{1+\\cos\\phi}{2}",
      "plain": "P_e=(1+cos phi)/2",
      "description": "Ideal two-pulse Ramsey interference probability for a suitable phase convention.",
      "theoryIds": [
        "quantum-metrology",
        "spin-squeezing"
      ],
      "sourceIds": [
        "giovannetti-metrology-2011"
      ],
      "tags": [
        "Ramsey"
      ]
    },
    {
      "id": "hellmann-feynman",
      "name": "Hellmann–Feynman theorem",
      "category": "Wave mechanics",
      "latex": "\\frac{dE_n}{d\\lambda}=\\left\\langle n(\\lambda)\\left|\\frac{\\partial H}{\\partial\\lambda}\\right|n(\\lambda)\\right\\rangle",
      "plain": "dE/dlambda=<dH/dlambda>",
      "description": "Relates a parametric energy derivative to the expectation value of the Hamiltonian derivative for an exact eigenstate.",
      "theoryIds": [
        "wave-mechanics",
        "density-functional-theory"
      ],
      "sourceIds": [
        "sep-math-rigor",
        "hohenberg-kohn-1964"
      ],
      "tags": [
        "Hellmann-Feynman"
      ]
    },
    {
      "id": "quantum-virial",
      "name": "Quantum virial theorem",
      "category": "Wave mechanics",
      "latex": "2\\langle T\\rangle=\\langle\\mathbf r\\cdot\\nabla V\\rangle",
      "plain": "2<T>=<r dot grad V>",
      "description": "Virial relation for stationary bound states under suitable regularity assumptions.",
      "theoryIds": [
        "wave-mechanics"
      ],
      "sourceIds": [
        "sep-math-rigor"
      ],
      "tags": [
        "virial theorem"
      ]
    },
    {
      "id": "rabi-transition",
      "name": "Resonant Rabi oscillation probability",
      "category": "Quantum optics & AMO",
      "latex": "P_e(t)=\\sin^2\\!\\left(\\frac{\\Omega_R t}{2}\\right)",
      "plain": "P_e=sin^2(Omega_R t/2)",
      "description": "Excited-state probability for an ideal resonantly driven two-level system initially in the ground state.",
      "theoryIds": [
        "quantum-rabi-model",
        "jaynes-cummings"
      ],
      "sourceIds": [
        "rabi-model-review-2016",
        "jaynes-cummings-1963"
      ],
      "tags": [
        "Rabi oscillation"
      ]
    },
    {
      "id": "spontaneous-decay",
      "name": "Exponential spontaneous decay",
      "category": "Quantum optics & AMO",
      "latex": "P_e(t)=e^{-\\Gamma t}",
      "plain": "P_e(t)=exp(-Gamma t)",
      "description": "Markovian excited-state survival probability for constant decay rate Gamma.",
      "theoryIds": [
        "quantum-optical-coherence",
        "open-quantum-systems"
      ],
      "sourceIds": [
        "glauber-coherence-1963",
        "breuer-petruccione-2007"
      ],
      "tags": [
        "decay"
      ]
    },
    {
      "id": "ashtekar-poisson",
      "name": "Ashtekar–Barbero Poisson bracket",
      "category": "Quantum gravity & cosmology",
      "latex": "\\{A_a^i(x),E^b_j(y)\\}=8\\pi G\\gamma\\,\\delta_a^b\\delta_j^i\\delta^{(3)}(x-y)",
      "plain": "{A,E}=8 pi G gamma delta",
      "description": "Canonical Poisson bracket of connection and densitized triad variables, convention without explicit c factors.",
      "theoryIds": [
        "loop-quantum-gravity",
        "canonical-quantum-gravity"
      ],
      "sourceIds": [
        "rovelli-lqg",
        "ashtekar-1986"
      ],
      "tags": [
        "Ashtekar variables"
      ]
    },
    {
      "id": "lqg-gauss",
      "name": "LQG Gauss constraint",
      "category": "Quantum gravity & cosmology",
      "latex": "G_i=D_aE^a_i\\approx0",
      "plain": "G_i = D_a E^a_i approx 0",
      "description": "Internal SU(2) gauge constraint of canonical loop gravity.",
      "theoryIds": [
        "loop-quantum-gravity",
        "canonical-quantum-gravity"
      ],
      "sourceIds": [
        "rovelli-lqg"
      ],
      "tags": [
        "constraint"
      ]
    },
    {
      "id": "regge-deficit",
      "name": "Regge deficit angle",
      "category": "Quantum gravity & cosmology",
      "latex": "\\delta_h=2\\pi-\\sum_{\\sigma\\supset h}\\theta_h^{\\sigma}",
      "plain": "delta_h=2pi-sum dihedral angles",
      "description": "Discrete curvature concentrated on codimension-two hinges in Regge calculus.",
      "theoryIds": [
        "quantum-regge",
        "euclidean-dynamical-triangulations",
        "cdt"
      ],
      "sourceIds": [
        "cdt-review"
      ],
      "tags": [
        "Regge"
      ]
    },
    {
      "id": "spin-foam-sum",
      "name": "Spin-foam state sum (schematic)",
      "category": "Quantum gravity & cosmology",
      "latex": "Z=\\sum_{\\{j_f,i_e\\}}\\prod_fA_f(j_f)\\prod_eA_e(j_f,i_e)\\prod_vA_v(j_f,i_e)",
      "plain": "Z=sum labels product face edge vertex amplitudes",
      "description": "Generic factorized spin-foam state-sum structure.",
      "theoryIds": [
        "spin-foams"
      ],
      "sourceIds": [
        "spin-foam-review"
      ],
      "tags": [
        "spin foam"
      ]
    },
    {
      "id": "gft-action",
      "name": "Group-field-theory action (schematic)",
      "category": "Quantum gravity & cosmology",
      "latex": "S[\\varphi]=\\frac12\\int\\bar\\varphi K\\varphi+\\frac{\\lambda}{n!}\\int V\\,\\varphi^n+\\text{c.c.}",
      "plain": "S_GFT = quadratic kinetic + interaction vertex",
      "description": "Generic field-theoretic action for group-field degrees of freedom.",
      "theoryIds": [
        "group-field-theory",
        "tensorial-group-field-theory"
      ],
      "sourceIds": [
        "gft-review",
        "carrozza-oriti-rivasseau-tgft-2014"
      ],
      "tags": [
        "GFT"
      ]
    },
    {
      "id": "no-boundary",
      "name": "No-boundary wavefunction (schematic)",
      "category": "Quantum gravity & cosmology",
      "latex": "\\Psi[h,\\phi]\\sim\\int_{\\partial g=h}\\mathcal Dg\\,\\mathcal D\\Phi\\,e^{-S_E[g,\\Phi]/\\hbar}",
      "plain": "Psi ~ Euclidean path integral over compact geometries",
      "description": "Semiclassical Euclidean representation of the Hartle–Hawking no-boundary proposal.",
      "theoryIds": [
        "hartle-hawking",
        "quantum-cosmology"
      ],
      "sourceIds": [
        "quantum-cosmology-review"
      ],
      "tags": [
        "no-boundary"
      ]
    },
    {
      "id": "tunneling-wavefunction",
      "name": "Tunneling wavefunction boundary condition (schematic)",
      "category": "Quantum gravity & cosmology",
      "latex": "\\Psi\\sim e^{+iS}\\quad\\text{for outgoing expanding branches}",
      "plain": "Psi ~ outgoing WKB branch",
      "description": "Schematic outgoing-wave condition used in Vilenkin's tunneling proposal.",
      "theoryIds": [
        "vilenkin",
        "quantum-cosmology"
      ],
      "sourceIds": [
        "vilenkin-qc",
        "quantum-cosmology-review"
      ],
      "tags": [
        "tunneling"
      ]
    },
    {
      "id": "causal-sprinkling",
      "name": "Poisson sprinkling probability",
      "category": "Quantum gravity & cosmology",
      "latex": "P(n;V)=\\frac{(\\rho V)^n}{n!}e^{-\\rho V}",
      "plain": "P(n;V)=(rho V)^n exp(-rho V)/n!",
      "description": "Lorentz-invariant Poisson process used to generate causal-set elements in a continuum region.",
      "theoryIds": [
        "causal-sets",
        "causal-set-quantum-dynamics"
      ],
      "sourceIds": [
        "surya-causal-set-review-2019"
      ],
      "tags": [
        "causal set"
      ]
    },
    {
      "id": "cdt-partition",
      "name": "CDT/triangulation partition sum (schematic)",
      "category": "Quantum gravity & cosmology",
      "latex": "Z=\\sum_T\\frac{1}{C_T}e^{-S_E[T]}",
      "plain": "Z=sum triangulations 1/C_T exp(-S_E[T])",
      "description": "Euclideanized statistical sum over causal triangulations after Wick rotation in CDT.",
      "theoryIds": [
        "cdt"
      ],
      "sourceIds": [
        "cdt-review",
        "cdt-2000"
      ],
      "tags": [
        "CDT"
      ]
    },
    {
      "id": "holographic-bound",
      "name": "Holographic entropy bound (schematic)",
      "category": "Quantum gravity & cosmology",
      "latex": "S\\lesssim\\frac{k_B A}{4\\ell_P^2}",
      "plain": "S <= k_B A/(4 l_P^2)",
      "description": "Area-scaling entropy bound motivated by black-hole thermodynamics and holography.",
      "theoryIds": [
        "holographic-principle",
        "hawking-radiation"
      ],
      "sourceIds": [
        "thooft-holography-1993",
        "susskind-hologram-1994",
        "hawking-1975"
      ],
      "tags": [
        "holography"
      ]
    },
    {
      "id": "hf-fock-equation",
      "name": "Hartree–Fock orbital equation",
      "category": "Quantum chemistry & electronic structure",
      "latex": "\\hat F\\,\\phi_i=\\varepsilon_i\\phi_i",
      "plain": "F phi_i = epsilon_i phi_i",
      "description": "Self-consistent one-electron eigenvalue equation defining canonical Hartree–Fock orbitals.",
      "theoryIds": ["hartree-fock"],
      "sourceIds": ["bartlett-musial-2007"],
      "tags": ["Hartree-Fock","Fock operator","SCF"],
      "formulaType": "defining",
      "assumptions": ["Single Slater determinant reference", "Mean-field treatment of electron–electron interaction", "Born–Oppenheimer electronic Hamiltonian in the usual quantum-chemistry setting"],
      "variables": ["F: Fock operator", "phi_i: occupied spin orbital", "epsilon_i: orbital energy"],
      "regime": "Nonrelativistic electronic-structure mean-field theory.",
      "units": "Energy units for epsilon_i; atomic units are conventional.",
      "theoryRelationship": "defining equation",
      "metadataReview": "explicit"
    },
    {
      "id": "hf-fock-operator",
      "name": "Hartree–Fock Fock operator",
      "category": "Quantum chemistry & electronic structure",
      "latex": "\\hat F=\\hat h+\\sum_{j\\in\\mathrm{occ}}(\\hat J_j-\\hat K_j)",
      "plain": "F = h + sum_j (J_j - K_j)",
      "description": "Canonical closed-shell-style decomposition of the Fock operator into one-electron, Coulomb, and exchange contributions.",
      "theoryIds": ["hartree-fock"],
      "sourceIds": ["bartlett-musial-2007"],
      "tags": ["Hartree-Fock","Coulomb","exchange"],
      "formulaType": "defining",
      "assumptions": ["Single-determinant Hartree–Fock framework", "Notation shown schematically for occupied orbitals"],
      "variables": ["h: one-electron core Hamiltonian", "J_j: Coulomb operator", "K_j: exchange operator"],
      "regime": "Canonical Hartree–Fock electronic structure.",
      "units": "Operator has energy dimensions; atomic units are conventional.",
      "theoryRelationship": "defining operator",
      "metadataReview": "explicit"
    },
    {
      "id": "hf-energy",
      "name": "Hartree–Fock total electronic energy",
      "category": "Quantum chemistry & electronic structure",
      "latex": "E_{\\mathrm{HF}}=\\sum_i\\langle i|\\hat h|i\\rangle+\\frac12\\sum_{ij}\\left(\\langle ij|ij\\rangle-\\langle ij|ji\\rangle\\right)",
      "plain": "E_HF = sum_i <i|h|i> + 1/2 sum_ij (J_ij - K_ij)",
      "description": "Energy functional evaluated for a Hartree–Fock Slater determinant.",
      "theoryIds": ["hartree-fock"],
      "sourceIds": ["bartlett-musial-2007"],
      "tags": ["Hartree-Fock","energy functional"],
      "formulaType": "canonical",
      "assumptions": ["Normalized orthonormal spin orbitals", "Single Slater determinant"],
      "variables": ["h: one-electron Hamiltonian", "<ij|kl>: two-electron Coulomb integrals"],
      "regime": "Nonrelativistic Hartree–Fock electronic structure.",
      "units": "Energy; atomic units are conventional.",
      "theoryRelationship": "canonical energy expression",
      "metadataReview": "explicit"
    },
    {
      "id": "ci-expansion",
      "name": "Configuration-interaction wavefunction expansion",
      "category": "Quantum chemistry & electronic structure",
      "latex": "|\\Psi_{\\mathrm{CI}}\\rangle=\\sum_I c_I|\\Phi_I\\rangle",
      "plain": "|Psi_CI> = sum_I c_I |Phi_I>",
      "description": "Expands an electronic wavefunction in a chosen basis of Slater determinants or configuration state functions.",
      "theoryIds": ["configuration-interaction"],
      "sourceIds": ["bartlett-musial-2007"],
      "tags": ["CI","determinants","linear expansion"],
      "formulaType": "defining",
      "assumptions": ["Finite chosen one-particle basis for practical CI", "Antisymmetrized many-electron basis states"],
      "variables": ["c_I: CI coefficient", "Phi_I: determinant or configuration state function"],
      "regime": "Wavefunction-based electronic structure; exact within the selected many-electron basis for full CI.",
      "units": "Dimensionless coefficients for normalized basis states.",
      "theoryRelationship": "defining ansatz",
      "metadataReview": "explicit"
    },
    {
      "id": "ci-secular",
      "name": "Configuration-interaction secular equation",
      "category": "Quantum chemistry & electronic structure",
      "latex": "\\sum_J H_{IJ}c_J=E c_I",
      "plain": "sum_J H_IJ c_J = E c_I",
      "description": "Matrix eigenvalue problem for CI coefficients in an orthonormal configuration basis.",
      "theoryIds": ["configuration-interaction"],
      "sourceIds": ["bartlett-musial-2007"],
      "tags": ["CI","eigenvalue problem"],
      "formulaType": "defining",
      "assumptions": ["Orthonormal configuration basis as written"],
      "variables": ["H_IJ: Hamiltonian matrix element", "c_J: expansion coefficient", "E: electronic energy"],
      "regime": "Configuration interaction in a finite many-electron basis.",
      "units": "H_IJ and E have energy dimensions.",
      "theoryRelationship": "defining eigenproblem",
      "metadataReview": "explicit"
    },
    {
      "id": "mp2-energy",
      "name": "MP2 correlation energy",
      "category": "Quantum chemistry & electronic structure",
      "latex": "E_{\\mathrm{MP2}}=\\frac14\\sum_{ij}^{\\mathrm{occ}}\\sum_{ab}^{\\mathrm{virt}}\\frac{|\\langle ij||ab\\rangle|^2}{\\varepsilon_i+\\varepsilon_j-\\varepsilon_a-\\varepsilon_b}",
      "plain": "E_MP2 = 1/4 sum_ijab |<ij||ab>|^2 / (eps_i+eps_j-eps_a-eps_b)",
      "description": "Second-order Møller–Plesset correlation energy in spin-orbital notation.",
      "theoryIds": ["moller-plesset"],
      "sourceIds": ["moller-plesset-1934","bartlett-musial-2007"],
      "tags": ["MP2","correlation energy","perturbation"],
      "formulaType": "approximation",
      "assumptions": ["Hartree–Fock reference", "Second-order Rayleigh–Schrödinger perturbation treatment", "Canonical orbital-energy denominator as written"],
      "variables": ["i,j: occupied orbitals", "a,b: virtual orbitals", "<ij||ab>: antisymmetrized two-electron integral", "epsilon_p: orbital energy"],
      "regime": "Weak-to-moderate dynamical electron correlation around a Hartree–Fock reference.",
      "units": "Energy; atomic units are conventional.",
      "theoryRelationship": "second-order approximation",
      "metadataReview": "explicit"
    },
    {
      "id": "cc-ansatz",
      "name": "Coupled-cluster exponential ansatz",
      "category": "Quantum chemistry & electronic structure",
      "latex": "|\\Psi_{\\mathrm{CC}}\\rangle=e^{\\hat T}|\\Phi_0\\rangle,\\qquad \\hat T=\\hat T_1+\\hat T_2+\\cdots",
      "plain": "|Psi_CC> = exp(T)|Phi_0>, T=T1+T2+...",
      "description": "Defining exponential wavefunction ansatz of single-reference coupled-cluster theory.",
      "theoryIds": ["coupled-cluster"],
      "sourceIds": ["bartlett-musial-2007"],
      "tags": ["coupled cluster","cluster operator"],
      "formulaType": "defining",
      "assumptions": ["Reference determinant Phi_0", "Excitation operators collected in T"],
      "variables": ["T_n: n-fold excitation cluster operator", "Phi_0: reference determinant"],
      "regime": "Single-reference coupled-cluster electronic structure; truncation level determines practical approximation.",
      "units": "Cluster amplitudes are dimensionless in the standard normalization.",
      "theoryRelationship": "defining ansatz",
      "metadataReview": "explicit"
    },
    {
      "id": "cc-amplitude",
      "name": "Coupled-cluster amplitude equations",
      "category": "Quantum chemistry & electronic structure",
      "latex": "\\langle\\Phi_\\mu|e^{-\\hat T}\\hat H e^{\\hat T}|\\Phi_0\\rangle=0",
      "plain": "<Phi_mu| exp(-T) H exp(T) |Phi_0> = 0",
      "description": "Projected nonlinear equations determining coupled-cluster amplitudes for excited determinants Phi_mu.",
      "theoryIds": ["coupled-cluster"],
      "sourceIds": ["bartlett-musial-2007"],
      "tags": ["coupled cluster","amplitude equations","similarity transform"],
      "formulaType": "defining",
      "assumptions": ["Chosen truncation of cluster operator in practical calculations", "Reference determinant Phi_0"],
      "variables": ["T: cluster operator", "H: electronic Hamiltonian", "Phi_mu: excited determinant"],
      "regime": "Single-reference coupled-cluster theory.",
      "units": "Projected equation has energy dimensions before setting it to zero.",
      "theoryRelationship": "defining amplitude condition",
      "metadataReview": "explicit"
    },
    {
      "id": "cc-energy",
      "name": "Coupled-cluster energy",
      "category": "Quantum chemistry & electronic structure",
      "latex": "E_{\\mathrm{CC}}=\\langle\\Phi_0|e^{-\\hat T}\\hat H e^{\\hat T}|\\Phi_0\\rangle",
      "plain": "E_CC = <Phi0| exp(-T) H exp(T) |Phi0>",
      "description": "Energy obtained from the similarity-transformed Hamiltonian after solving the cluster-amplitude equations.",
      "theoryIds": ["coupled-cluster"],
      "sourceIds": ["bartlett-musial-2007"],
      "tags": ["coupled cluster","energy"],
      "formulaType": "canonical",
      "assumptions": ["Cluster amplitudes satisfy the chosen projected CC equations"],
      "variables": ["T: cluster operator", "H: Hamiltonian", "Phi_0: reference determinant"],
      "regime": "Coupled-cluster electronic structure.",
      "units": "Energy.",
      "theoryRelationship": "canonical energy expression",
      "metadataReview": "explicit"
    },
    {
      "id": "ks-density",
      "name": "Kohn–Sham density",
      "category": "Quantum chemistry & electronic structure",
      "latex": "n(\\mathbf r)=\\sum_{i\\in\\mathrm{occ}}|\\phi_i(\\mathbf r)|^2",
      "plain": "n(r) = sum_occ |phi_i(r)|^2",
      "description": "Electron density reconstructed from occupied Kohn–Sham orbitals in the standard zero-temperature closed-shell-style notation.",
      "theoryIds": ["density-functional-theory"],
      "sourceIds": ["kohn-sham-1965"],
      "tags": ["DFT","density","Kohn-Sham"],
      "formulaType": "defining",
      "assumptions": ["Independent Kohn–Sham orbitals reproduce the interacting ground-state density"],
      "variables": ["n(r): electron density", "phi_i: Kohn–Sham orbital"],
      "regime": "Ground-state Kohn–Sham DFT.",
      "units": "Number density, typically inverse volume.",
      "theoryRelationship": "density reconstruction",
      "metadataReview": "explicit"
    },
    {
      "id": "tdks-equation",
      "name": "Time-dependent Kohn–Sham equation",
      "category": "Quantum chemistry & electronic structure",
      "latex": "i\\hbar\\frac{\\partial}{\\partial t}\\phi_i(\\mathbf r,t)=\\left[-\\frac{\\hbar^2\\nabla^2}{2m}+v_s[n](\\mathbf r,t)\\right]\\phi_i(\\mathbf r,t)",
      "plain": "i hbar d phi_i/dt = [-hbar^2 nabla^2/(2m) + v_s[n](r,t)] phi_i",
      "description": "Auxiliary single-particle evolution equation used in time-dependent density-functional theory.",
      "theoryIds": ["time-dependent-dft"],
      "sourceIds": ["runge-gross-1984"],
      "tags": ["TDDFT","time-dependent Kohn-Sham"],
      "formulaType": "defining",
      "assumptions": ["Time-dependent density is represented by a noninteracting Kohn–Sham system", "Exchange-correlation potential requires an approximation in practical calculations"],
      "variables": ["phi_i: time-dependent Kohn–Sham orbital", "v_s[n]: effective Kohn–Sham potential"],
      "regime": "Time-dependent electronic density response and dynamics.",
      "units": "Hamiltonian terms have energy dimensions.",
      "theoryRelationship": "canonical propagation equation",
      "metadataReview": "explicit"
    },
    {
      "id": "tddft-response",
      "name": "TDDFT linear-response Dyson equation",
      "category": "Quantum chemistry & electronic structure",
      "latex": "\\chi=\\chi_s+\\chi_s\\,(v_c+f_{xc})\\,\\chi",
      "plain": "chi = chi_s + chi_s (v_c + f_xc) chi",
      "description": "Compact operator form of the TDDFT linear-response relation between interacting and Kohn–Sham density responses.",
      "theoryIds": ["time-dependent-dft"],
      "sourceIds": ["runge-gross-1984"],
      "tags": ["TDDFT","linear response","exchange-correlation kernel"],
      "formulaType": "canonical",
      "assumptions": ["Linear response about a reference state", "Exchange-correlation kernel f_xc must be specified or approximated in applications"],
      "variables": ["chi: interacting density response", "chi_s: Kohn–Sham response", "v_c: Coulomb kernel", "f_xc: exchange-correlation kernel"],
      "regime": "Linear-response TDDFT.",
      "units": "Response-function units depend on the density/potential convention.",
      "theoryRelationship": "canonical response relation",
      "metadataReview": "explicit"
    },
    {
      "id": "gw-self-energy",
      "name": "GW self-energy",
      "category": "Quantum chemistry & electronic structure",
      "latex": "\\Sigma(1,2)\\approx i\\,G(1,2)W(1^+,2)",
      "plain": "Sigma(1,2) approx i G(1,2) W(1+,2)",
      "description": "Defining GW approximation to the electronic self-energy using the one-particle Green function and screened interaction.",
      "theoryIds": ["gw-approximation"],
      "sourceIds": ["hedin-gw-1965"],
      "tags": ["GW","self-energy","screening"],
      "formulaType": "approximation",
      "assumptions": ["Vertex function replaced by its lowest-order value in the GW closure of Hedin's equations"],
      "variables": ["Sigma: self-energy", "G: one-particle Green function", "W: screened Coulomb interaction"],
      "regime": "Quasiparticle electronic-structure calculations within the GW approximation.",
      "units": "Sigma has energy dimensions; integral kernels include spacetime variables in compact notation.",
      "theoryRelationship": "defining approximation",
      "metadataReview": "explicit"
    },
    {
      "id": "gw-screened-interaction",
      "name": "Screened Coulomb interaction",
      "category": "Quantum chemistry & electronic structure",
      "latex": "W=v+vPW=\\varepsilon^{-1}v",
      "plain": "W = v + v P W = epsilon^{-1} v",
      "description": "Dyson-like screening equation for the dynamically screened Coulomb interaction used in GW/Hedin theory.",
      "theoryIds": ["gw-approximation"],
      "sourceIds": ["hedin-gw-1965"],
      "tags": ["GW","screening","polarization"],
      "formulaType": "canonical",
      "assumptions": ["Operator/integral notation suppresses spatial, temporal, and frequency integrations"],
      "variables": ["W: screened interaction", "v: bare Coulomb interaction", "P: irreducible polarization", "epsilon: dielectric operator"],
      "regime": "Many-body Green-function electronic structure.",
      "units": "Same interaction/energy-length convention as v; representation dependent.",
      "theoryRelationship": "canonical screening relation",
      "metadataReview": "explicit"
    },
    {
      "id": "bse-equation",
      "name": "Bethe–Salpeter equation",
      "category": "Quantum chemistry & electronic structure",
      "latex": "L=L_0+L_0 K L",
      "plain": "L = L0 + L0 K L",
      "description": "Compact integral-operator form of the Bethe–Salpeter equation for a two-particle correlation function.",
      "theoryIds": ["bethe-salpeter"],
      "sourceIds": ["bethe-salpeter-1951","hedin-gw-1965"],
      "tags": ["BSE","two-particle Green function","excitations"],
      "formulaType": "defining",
      "assumptions": ["Compact notation suppresses integration and internal indices", "Kernel K depends on the chosen many-body approximation"],
      "variables": ["L: interacting two-particle correlation function", "L0: independent/quasiparticle two-particle propagator", "K: Bethe–Salpeter interaction kernel"],
      "regime": "Two-particle excitations and response; commonly paired with GW quasiparticles.",
      "units": "Correlation-function dimensions depend on representation.",
      "theoryRelationship": "defining integral equation",
      "metadataReview": "explicit"
    },
    {
      "id": "dmrg-reduced-density",
      "name": "DMRG reduced density matrix",
      "category": "Quantum many-body & condensed matter",
      "latex": "\\rho_A=\\operatorname{Tr}_B|\\Psi\\rangle\\langle\\Psi|",
      "plain": "rho_A = Tr_B |Psi><Psi|",
      "description": "Reduced density matrix whose dominant eigenvectors define the optimal retained subsystem basis in standard DMRG truncation.",
      "theoryIds": ["dmrg","tensor-network-states"],
      "sourceIds": ["white-dmrg-1992","fannes-mps-1992"],
      "tags": ["DMRG","reduced density matrix","truncation"],
      "formulaType": "defining",
      "assumptions": ["Bipartition into retained subsystem A and environment B", "Target state Psi chosen for truncation"],
      "variables": ["rho_A: reduced density operator", "A/B: bipartition", "Psi: target many-body state"],
      "regime": "DMRG and tensor-network truncation.",
      "units": "Dimensionless density operator; trace normalized to one for normalized Psi.",
      "theoryRelationship": "defining truncation object",
      "metadataReview": "explicit"
    },
    {
      "id": "dmrg-truncation",
      "name": "DMRG discarded weight",
      "category": "Quantum many-body & condensed matter",
      "latex": "\\epsilon_{\\mathrm{disc}}=\\sum_{\\alpha>m} w_\\alpha",
      "plain": "epsilon_disc = sum_{alpha>m} w_alpha",
      "description": "Weight discarded when retaining the m largest eigenvalues of a subsystem reduced density matrix.",
      "theoryIds": ["dmrg"],
      "sourceIds": ["white-dmrg-1992"],
      "tags": ["DMRG","truncation error"],
      "formulaType": "approximation",
      "assumptions": ["Density-matrix eigenvalues w_alpha ordered from largest to smallest", "Finite retained bond dimension m"],
      "variables": ["w_alpha: eigenvalue of reduced density matrix", "m: retained-state count"],
      "regime": "Finite-bond-dimension DMRG truncation.",
      "units": "Dimensionless probability weight.",
      "theoryRelationship": "truncation diagnostic",
      "metadataReview": "explicit"
    },
    {
      "id": "dmft-local-green",
      "name": "DMFT local Green function",
      "category": "Quantum many-body & condensed matter",
      "latex": "G_{\\mathrm{loc}}(i\\omega_n)=\\int d\\epsilon\\,\\frac{\\rho_0(\\epsilon)}{i\\omega_n+\\mu-\\Sigma(i\\omega_n)-\\epsilon}",
      "plain": "G_loc(iwn)=integral d eps rho0(eps)/(iwn+mu-Sigma(iwn)-eps)",
      "description": "Local lattice Green function for a momentum-independent DMFT self-energy.",
      "theoryIds": ["dmft"],
      "sourceIds": ["georges-dmft-1996"],
      "tags": ["DMFT","Green function","self-consistency"],
      "formulaType": "defining",
      "assumptions": ["Local self-energy in the infinite-coordination/DMFT construction", "Single-band density-of-states notation as written"],
      "variables": ["G_loc: local Green function", "rho_0: noninteracting density of states", "Sigma: local self-energy", "mu: chemical potential"],
      "regime": "Single-site dynamical mean-field theory.",
      "units": "Green function has inverse-energy dimensions in standard frequency normalization.",
      "theoryRelationship": "defining self-consistency ingredient",
      "metadataReview": "explicit"
    },
    {
      "id": "dmft-weiss",
      "name": "DMFT Weiss-field relation",
      "category": "Quantum many-body & condensed matter",
      "latex": "\\mathcal G_0^{-1}(i\\omega_n)=G_{\\mathrm{loc}}^{-1}(i\\omega_n)+\\Sigma(i\\omega_n)",
      "plain": "G0^{-1} = G_loc^{-1} + Sigma",
      "description": "Impurity Weiss-field relation closing the DMFT self-consistency cycle.",
      "theoryIds": ["dmft"],
      "sourceIds": ["georges-dmft-1996"],
      "tags": ["DMFT","Weiss field","impurity model"],
      "formulaType": "defining",
      "assumptions": ["Single-site DMFT mapping to an auxiliary quantum impurity problem"],
      "variables": ["G0: Weiss/noninteracting impurity Green function", "G_loc: local interacting Green function", "Sigma: impurity/lattice self-energy"],
      "regime": "Single-site DMFT.",
      "units": "Inverse Green functions and self-energy have energy dimensions.",
      "theoryRelationship": "defining self-consistency equation",
      "metadataReview": "explicit"
    },
    {
      "id": "qmc-variational-energy",
      "name": "Variational Monte Carlo energy estimator",
      "category": "Quantum many-body & condensed matter",
      "latex": "E_V=\\frac{\\langle\\Psi_T|\\hat H|\\Psi_T\\rangle}{\\langle\\Psi_T|\\Psi_T\\rangle}=\\frac{\\int dR\\,|\\Psi_T(R)|^2 E_L(R)}{\\int dR\\,|\\Psi_T(R)|^2}",
      "plain": "E_V = <Psi_T|H|Psi_T>/<Psi_T|Psi_T> = average of local energy",
      "description": "Variational quantum Monte Carlo energy written as an expectation of the local energy under |Psi_T|^2 sampling.",
      "theoryIds": ["quantum-monte-carlo"],
      "sourceIds": ["ceperley-qmc-1995"],
      "tags": ["QMC","VMC","energy estimator"],
      "formulaType": "canonical",
      "assumptions": ["Normalizable trial wavefunction Psi_T", "Monte Carlo samples drawn from |Psi_T|^2 for the second form"],
      "variables": ["Psi_T: trial wavefunction", "H: Hamiltonian", "R: many-particle configuration", "E_L: local energy"],
      "regime": "Variational Monte Carlo.",
      "units": "Energy.",
      "theoryRelationship": "canonical estimator",
      "metadataReview": "explicit"
    },
    {
      "id": "qmc-local-energy",
      "name": "Quantum Monte Carlo local energy",
      "category": "Quantum many-body & condensed matter",
      "latex": "E_L(R)=\\frac{\\hat H\\Psi_T(R)}{\\Psi_T(R)}",
      "plain": "E_L(R) = H Psi_T(R) / Psi_T(R)",
      "description": "Configuration-dependent local-energy estimator used throughout variational and diffusion Monte Carlo.",
      "theoryIds": ["quantum-monte-carlo"],
      "sourceIds": ["ceperley-qmc-1995"],
      "tags": ["QMC","local energy"],
      "formulaType": "defining",
      "assumptions": ["Psi_T(R) is nonzero at the sampled configuration"],
      "variables": ["E_L: local energy", "R: configuration", "Psi_T: trial wavefunction"],
      "regime": "Wavefunction-based quantum Monte Carlo.",
      "units": "Energy.",
      "theoryRelationship": "defining estimator",
      "metadataReview": "explicit"
    },
    {
      "id": "master-constraint",
      "name": "Master-constraint functional",
      "category": "Quantum gravity & cosmology",
      "latex": "\\mathbf M=\\int_\\Sigma d^3x\\,\\frac{H(x)^2}{\\sqrt{\\det q(x)}}",
      "plain": "M = integral d^3x H(x)^2 / sqrt(det q)",
      "description": "Representative master constraint combining local Hamiltonian constraints into one positive functional.",
      "theoryIds": ["master-constraint-program","algebraic-quantum-gravity","canonical-quantum-gravity"],
      "sourceIds": ["master-constraint-2006","giesel-thiemann-aqg-2007"],
      "tags": ["Master Constraint","canonical gravity"],
      "formulaType": "defining",
      "assumptions": ["Representative continuum expression; convention-dependent density weights are suppressed"],
      "variables": ["H(x): Hamiltonian constraint density", "q: spatial metric", "Sigma: spatial hypersurface"],
      "regime": "Canonical loop-gravity constraint quantization.",
      "units": "Convention dependent; density weights and gravitational constants depend on normalization.",
      "theoryRelationship": "defining constraint construction",
      "metadataReview": "explicit"
    },
    {
      "id": "process-tensor-born-rule",
      "name": "Process-tensor generalized Born rule",
      "category": "Quantum information",
      "latex": "p(\\mathbf x|\\mathbf J)=\\operatorname{Tr}\\!\\left[\\Upsilon_{k:0}\\,\\mathbf A_{\\mathbf x}^{T}\\right]",
      "plain": "p(x|J) = Tr[Upsilon_{k:0} A_x^T]",
      "description": "Compact Choi-state form of the generalized Born rule pairing a process tensor with a sequence of intervention operations.",
      "theoryIds": ["process-tensor","quantum-combs"],
      "sourceIds": ["pollock-process-2018","chiribella-combs-2009"],
      "tags": ["process tensor","multi-time Born rule","Choi"],
      "formulaType": "defining",
      "assumptions": ["Choi representation of the process and intervention sequence", "Transpose convention depends on Choi-index ordering"],
      "variables": ["Upsilon_{k:0}: process-tensor Choi state", "A_x: Choi operator of the intervention sequence", "p: joint outcome probability"],
      "regime": "Multi-time open quantum processes.",
      "units": "Dimensionless probability after the trace pairing.",
      "theoryRelationship": "defining probability rule",
      "metadataReview": "explicit"
    },
    {
      "id": "pseudo-density-definition",
      "name": "Pseudo-density matrix",
      "category": "Quantum information",
      "latex": "R=\\frac{1}{2^n}\\sum_{i_1,\\ldots,i_n=0}^{3}\\langle\\sigma_{i_1}\\cdots\\sigma_{i_n}\\rangle\\,\\sigma_{i_1}\\otimes\\cdots\\otimes\\sigma_{i_n}",
      "plain": "R = 1/2^n sum <sigma_i1 ... sigma_in> sigma_i1 tensor ... tensor sigma_in",
      "description": "Pauli-correlation expansion defining the pseudo-density operator over events that may be separated in space or time.",
      "theoryIds": ["pseudo-density-matrix"],
      "sourceIds": ["pseudo-density-2015"],
      "tags": ["pseudo-density matrix","temporal correlations","Pauli expansion"],
      "formulaType": "defining",
      "assumptions": ["Qubit events and Pauli operator basis as written"],
      "variables": ["R: pseudo-density matrix", "sigma_i: Pauli/identity operators", "n: number of events"],
      "regime": "Multi-event qubit correlation analysis across space and/or time.",
      "units": "Dimensionless operator.",
      "theoryRelationship": "defining representation",
      "metadataReview": "explicit"
    },
    {
      "id": "lorentzian-gravity-path-integral",
      "name": "Lorentzian gravitational path integral",
      "category": "Quantum gravity & cosmology",
      "latex": "G[h_1,h_0]\\sim\\int_{g|_{\\partial}=h_0,h_1}\\mathcal Dg\\,e^{iS[g]/\\hbar}",
      "plain": "G[h1,h0] ~ integral Dg exp(i S[g]/hbar)",
      "description": "Schematic Lorentzian gravitational path integral whose saddle-point contour can be defined using Picard–Lefschetz theory.",
      "theoryIds": ["lorentzian-quantum-cosmology","euclidean-qg","quantum-cosmology"],
      "sourceIds": ["feldbrugge-lehners-turok-2017","quantum-cosmology-review"],
      "tags": ["Lorentzian path integral","Picard-Lefschetz"],
      "formulaType": "schematic",
      "assumptions": ["Formal measure over geometries", "Boundary data h_0 and h_1", "Gauge fixing and contour prescription suppressed"],
      "variables": ["g: spacetime metric/history", "S[g]: gravitational action", "h_0,h_1: boundary geometries"],
      "regime": "Lorentzian quantum-cosmology path-integral formulations.",
      "units": "Action divided by hbar is dimensionless.",
      "theoryRelationship": "schematic path-integral representation",
      "metadataReview": "explicit"
    },
    {
      "id": "grwm-density",
      "name": "GRWm matter-density field",
      "category": "Collapse theories",
      "latex": "m(\\mathbf x,t)=\\sum_i m_i\\int d^{3N}q\\,|\\psi(q,t)|^2\\,\\delta(\\mathbf q_i-\\mathbf x)",
      "plain": "m(x,t) = sum_i m_i integral dq |psi(q,t)|^2 delta(q_i-x)",
      "description": "Matter-density ontology associated with the GRWm formulation.",
      "theoryIds": ["grwm","primitive-ontology","grw"],
      "sourceIds": ["allori-primitive-2014","grw-1986"],
      "tags": ["GRWm","matter density","primitive ontology"],
      "formulaType": "defining",
      "assumptions": ["Nonrelativistic N-particle configuration-space wavefunction", "Mass-density primitive ontology"],
      "variables": ["m(x,t): matter density in physical space", "m_i: particle mass parameter", "psi: universal wavefunction"],
      "regime": "Nonrelativistic GRW matter-density ontology.",
      "units": "Mass per physical-space volume.",
      "theoryRelationship": "defining ontology map",
      "metadataReview": "explicit"
    }
,
    {
      "id": "aqft-isotony",
      "name": "Haag–Kastler isotony",
      "category": "Quantum field theory",
      "latex": "\\mathcal O_1\\subseteq\\mathcal O_2\\;\\Longrightarrow\\;\\mathcal A(\\mathcal O_1)\\subseteq\\mathcal A(\\mathcal O_2)",
      "plain": "O1 subset O2 implies A(O1) subset A(O2)",
      "description": "Net-isotony axiom: observables localized in a smaller spacetime region belong to the algebra of any larger containing region.",
      "theoryIds": ["aqft"],
      "sourceIds": ["haag-kastler-1964"],
      "tags": ["AQFT","isotony","local algebras"],
      "formulaType": "defining",
      "assumptions": ["Net of local observable algebras indexed by spacetime regions"],
      "variables": ["O: spacetime region", "A(O): local observable algebra"],
      "regime": "Algebraic relativistic quantum field theory.",
      "units": "Pure algebraic inclusion; no physical units.",
      "theoryRelationship": "axiom",
      "metadataReview": "explicit"
    },
    {
      "id": "aqft-locality",
      "name": "AQFT microcausality",
      "category": "Quantum field theory",
      "latex": "[A,B]=0\\quad\\text{for }A\\in\\mathcal A(\\mathcal O_1),\\;B\\in\\mathcal A(\\mathcal O_2),\\;\\mathcal O_1\\perp\\mathcal O_2",
      "plain": "[A,B]=0 for spacelike separated local algebras",
      "description": "Local commutativity condition for observables associated with spacelike separated regions.",
      "theoryIds": ["aqft","wightman-qft"],
      "sourceIds": ["haag-kastler-1964","sep-qft"],
      "tags": ["AQFT","microcausality","locality"],
      "formulaType": "defining",
      "assumptions": ["Spacelike-separated localization regions"],
      "variables": ["A,B: local observables", "O1 perpendicular O2: spacelike separation"],
      "regime": "Relativistic local quantum field theory.",
      "units": "Operator relation; no standalone units.",
      "theoryRelationship": "locality axiom",
      "metadataReview": "explicit"
    },
    {
      "id": "susy-algebra",
      "name": "N=1 supersymmetry algebra",
      "category": "Quantum field theory",
      "latex": "\\{Q_\\alpha,\\bar Q_{\\dot\\beta}\\}=2\\sigma^\\mu_{\\alpha\\dot\\beta}P_\\mu",
      "plain": "{Q_alpha,Qbar_dotbeta}=2 sigma^mu P_mu",
      "description": "Canonical four-dimensional N=1 supersymmetry anticommutator relating supercharges to spacetime translations.",
      "theoryIds": ["supersymmetry","supergravity"],
      "sourceIds": ["wess-zumino-1974","freedman-supergravity-1976"],
      "tags": ["supersymmetry","supercharges","algebra"],
      "formulaType": "defining",
      "assumptions": ["Four-dimensional N=1 supersymmetry notation"],
      "variables": ["Q: supercharge", "P_mu: four-momentum generator", "sigma^mu: Pauli-vector matrices"],
      "regime": "Four-dimensional supersymmetric field theory.",
      "units": "Natural-unit conventions are standard; dimensions follow the supercharge normalization.",
      "theoryRelationship": "defining symmetry algebra",
      "metadataReview": "explicit"
    },
    {
      "id": "causal-factorization",
      "name": "Epstein–Glaser causal factorization",
      "category": "Quantum field theory",
      "latex": "S(g_1+g_2)=S(g_1)S(g_2)\\quad\\text{when }\\operatorname{supp}g_1\\succ\\operatorname{supp}g_2",
      "plain": "S(g1+g2)=S(g1)S(g2) for causally ordered supports",
      "description": "Causal factorization property underlying the recursive construction of perturbative time-ordered products.",
      "theoryIds": ["causal-perturbation","perturbative-aqft"],
      "sourceIds": ["epstein-glaser-1973","brunetti-fredenhagen-1999"],
      "tags": ["causal perturbation","Epstein-Glaser","factorization"],
      "formulaType": "defining",
      "assumptions": ["Switching functions with causally ordered supports"],
      "variables": ["S(g): perturbative S-matrix functional", "g1,g2: switching/test functions"],
      "regime": "Perturbative local QFT in the causal/Epstein–Glaser construction.",
      "units": "Functional relation; switching functions carry convention-dependent dimensions.",
      "theoryRelationship": "causal axiom",
      "metadataReview": "explicit"
    },
    {
      "id": "chpt-lo",
      "name": "Leading chiral perturbation theory Lagrangian",
      "category": "Quantum field theory",
      "latex": "\\mathcal L_2=\\frac{f^2}{4}\\operatorname{Tr}(\\partial_\\mu U\\,\\partial^\\mu U^\\dagger)+\\frac{f^2}{4}\\operatorname{Tr}(\\chi U^\\dagger+U\\chi^\\dagger)",
      "plain": "L2 = f^2/4 Tr(dU dUdagger) + f^2/4 Tr(chi Udagger + U chi dagger)",
      "description": "Lowest-order mesonic chiral effective Lagrangian in the derivative and quark-mass expansion.",
      "theoryIds": ["chiral-perturbation-theory"],
      "sourceIds": ["gasser-leutwyler-1984"],
      "tags": ["ChPT","effective Lagrangian","chiral symmetry"],
      "formulaType": "approximation",
      "assumptions": ["Low momenta and light-quark masses relative to the chiral-symmetry-breaking scale"],
      "variables": ["U: Goldstone-boson field matrix", "f: pseudoscalar decay constant in the chosen normalization", "chi: symmetry-breaking source proportional to quark masses"],
      "regime": "Leading-order low-energy QCD effective field theory.",
      "units": "Lagrangian density has energy-density dimensions; natural units are standard.",
      "theoryRelationship": "leading-order effective Lagrangian",
      "metadataReview": "explicit"
    },
    {
      "id": "hqet-leading",
      "name": "Leading HQET Lagrangian",
      "category": "Quantum field theory",
      "latex": "\\mathcal L_{\\mathrm{HQET}}=\\bar h_v\\,iv\\!\\cdot\\!D\\,h_v+\\mathcal O(1/m_Q)",
      "plain": "L_HQET = hbar_v i v.D h_v + O(1/m_Q)",
      "description": "Leading heavy-quark effective-theory Lagrangian plus the inverse-heavy-mass expansion.",
      "theoryIds": ["heavy-quark-effective-theory"],
      "sourceIds": ["isgur-wise-1989"],
      "tags": ["HQET","heavy quark","1/m expansion"],
      "formulaType": "limit",
      "assumptions": ["Heavy-quark mass m_Q much larger than the QCD confinement scale", "Velocity label v held fixed in the heavy-quark limit"],
      "variables": ["h_v: velocity-dependent heavy-quark field", "v: heavy-hadron four-velocity", "D: gauge-covariant derivative"],
      "regime": "Heavy-quark limit with systematic 1/m_Q corrections.",
      "units": "Natural units; Lagrangian density has mass dimension four in four spacetime dimensions.",
      "theoryRelationship": "leading heavy-mass limit",
      "metadataReview": "explicit"
    },
    {
      "id": "susy-localization",
      "name": "Supersymmetric localization integral",
      "category": "Quantum field theory",
      "latex": "Z=\\int_{\\mathcal M_{\\mathrm{BPS}}}d\\mu\\;e^{-S_{\\mathrm{cl}}}Z_{\\mathrm{1-loop}}\\,Z_{\\mathrm{inst}}",
      "plain": "Z = integral over BPS locus exp(-S_cl) Z_1-loop Z_inst",
      "description": "Schematic localization structure reducing a supersymmetric path integral to a BPS/localization locus with determinant and instanton factors.",
      "theoryIds": ["supersymmetric-localization"],
      "sourceIds": ["pestun-localization-2012"],
      "tags": ["localization","BPS","one-loop determinant"],
      "formulaType": "schematic",
      "assumptions": ["Suitable supersymmetry generator and Q-exact deformation", "Observable protected under the localization deformation"],
      "variables": ["M_BPS: localization locus", "S_cl: classical action on the locus", "Z_1-loop: fluctuation determinant", "Z_inst: nonperturbative instanton factor when present"],
      "regime": "Supersymmetric QFT observables admitting localization.",
      "units": "Partition function dimension depends on normalization; exponent is dimensionless.",
      "theoryRelationship": "schematic localized path integral",
      "metadataReview": "explicit"
    },
    {
      "id": "yang-baxter-smatrix",
      "name": "Factorized-scattering Yang–Baxter consistency",
      "category": "Quantum field theory",
      "latex": "S_{12}(\\theta_{12})S_{13}(\\theta_{13})S_{23}(\\theta_{23})=S_{23}(\\theta_{23})S_{13}(\\theta_{13})S_{12}(\\theta_{12})",
      "plain": "S12 S13 S23 = S23 S13 S12",
      "description": "Consistency relation ensuring equivalent factorization orders for three-particle scattering in integrable 1+1-dimensional QFT.",
      "theoryIds": ["integrable-qft"],
      "sourceIds": ["zamolodchikov-integrable-1979"],
      "tags": ["integrable QFT","Yang-Baxter","factorized scattering"],
      "formulaType": "defining",
      "assumptions": ["Elastic factorized scattering with conserved rapidities in 1+1 dimensions"],
      "variables": ["S_ij: two-particle S-matrix acting on particle labels i,j", "theta_ij: rapidity difference"],
      "regime": "Integrable relativistic QFT in 1+1 dimensions.",
      "units": "S-matrix relation is dimensionless.",
      "theoryRelationship": "factorization consistency condition",
      "metadataReview": "explicit"
    },
    {
      "id": "gpt-probability",
      "name": "GPT state–effect probability rule",
      "category": "Quantum information",
      "latex": "p(e|\\omega)=e(\\omega),\\qquad 0\\le e(\\omega)\\le1",
      "plain": "p(e|omega) = e(omega), between 0 and 1",
      "description": "Operational probability rule pairing a GPT state with an allowed effect.",
      "theoryIds": ["generalized-probabilistic"],
      "sourceIds": ["barrett-gpt-2007"],
      "tags": ["GPT","state","effect","probability"],
      "formulaType": "defining",
      "assumptions": ["Convex operational state space and admissible effect functional"],
      "variables": ["omega: state", "e: effect", "p: operational probability"],
      "regime": "Generalized probabilistic theories.",
      "units": "Dimensionless probability.",
      "theoryRelationship": "defining probability pairing",
      "metadataReview": "explicit"
    },
    {
      "id": "process-matrix-born",
      "name": "Process-matrix generalized Born rule",
      "category": "Quantum information",
      "latex": "p(a,b|x,y)=\\operatorname{Tr}\\!\\left[W\\left(M_{a|x}^A\\otimes M_{b|y}^B\\right)\\right]",
      "plain": "p(a,b|x,y)=Tr[W (M_a|x^A tensor M_b|y^B)]",
      "description": "Probability rule pairing a process matrix with local CP-map Choi operators.",
      "theoryIds": ["process-matrices","indefinite-causal-order"],
      "sourceIds": ["process-matrix-ocb"],
      "tags": ["process matrix","indefinite causal order","Choi"],
      "formulaType": "defining",
      "assumptions": ["Local operations represented by Choi operators satisfying instrument normalization conditions", "W satisfies process-matrix positivity and normalization constraints"],
      "variables": ["W: process matrix", "M_a|x^A: Choi operator for Alice's local operation/outcome", "M_b|y^B: Bob's local operation/outcome"],
      "regime": "Higher-order quantum processes without assuming a fixed global causal order.",
      "units": "Dimensionless probability after trace pairing.",
      "theoryRelationship": "defining probability rule",
      "metadataReview": "explicit"
    },
    {
      "id": "quantum-jump-heff",
      "name": "Quantum-trajectory effective Hamiltonian",
      "category": "Open quantum systems",
      "latex": "H_{\\mathrm{eff}}=H-\\frac{i\\hbar}{2}\\sum_k L_k^\\dagger L_k",
      "plain": "H_eff = H - i hbar/2 sum_k L_k^dagger L_k",
      "description": "Non-Hermitian no-jump Hamiltonian used in Monte Carlo wavefunction / quantum-jump unravelings.",
      "theoryIds": ["quantum-trajectories","open-quantum-systems"],
      "sourceIds": ["dalibard-castin-molmer-1992","breuer-petruccione-2007"],
      "tags": ["quantum trajectories","quantum jumps","effective Hamiltonian"],
      "formulaType": "defining",
      "assumptions": ["Lindblad-form Markovian master equation", "Jump unraveling chosen"],
      "variables": ["H_eff: no-jump effective Hamiltonian", "H: system Hamiltonian", "L_k: jump/Lindblad operators"],
      "regime": "Markovian quantum-jump trajectories.",
      "units": "Energy.",
      "theoryRelationship": "defining no-jump generator",
      "metadataReview": "explicit"
    },
    {
      "id": "collision-map",
      "name": "Repeated-interaction collision map",
      "category": "Open quantum systems",
      "latex": "\\rho_S^{(n+1)}=\\operatorname{Tr}_{E_n}\\!\\left[U_n(\\rho_S^{(n)}\\otimes\\eta_{E_n})U_n^\\dagger\\right]",
      "plain": "rho_S^(n+1) = Tr_En[ U_n (rho_S^n tensor eta_En) U_n^dagger ]",
      "description": "One-step reduced-state update for a system colliding with a fresh environmental ancilla.",
      "theoryIds": ["collision-models","open-quantum-systems"],
      "sourceIds": ["collision-models-review-2022"],
      "tags": ["collision model","repeated interaction","channel"],
      "formulaType": "defining",
      "assumptions": ["Fresh-ancilla form as written; memory models modify the ancilla correlations/interactions"],
      "variables": ["rho_S: system state", "eta_En: nth ancilla state", "U_n: system–ancilla unitary"],
      "regime": "Discrete-time collision/repeated-interaction open-system models.",
      "units": "Density operators are dimensionless.",
      "theoryRelationship": "defining one-step map",
      "metadataReview": "explicit"
    },
    {
      "id": "cluster-stabilizer",
      "name": "Cluster-state stabilizer",
      "category": "Quantum information",
      "latex": "K_v=X_v\\prod_{u\\in N(v)}Z_u,\\qquad K_v|G\\rangle=|G\\rangle",
      "plain": "K_v = X_v product_{u in N(v)} Z_u; K_v|G>=|G>",
      "description": "Graph/cluster-state stabilizer relation used as the resource-state structure of measurement-based quantum computation.",
      "theoryIds": ["measurement-based-qc","stabilizer-formalism"],
      "sourceIds": ["raussendorf-briegel-2001","gottesman-stabilizer-1997"],
      "tags": ["MBQC","cluster state","stabilizer"],
      "formulaType": "defining",
      "assumptions": ["Graph-state qubits with neighborhood N(v)"],
      "variables": ["K_v: vertex stabilizer", "X_v,Z_u: Pauli operators", "N(v): neighbors of vertex v"],
      "regime": "Graph-state and cluster-state measurement-based computation.",
      "units": "Dimensionless operator relation.",
      "theoryRelationship": "resource-state stabilizer",
      "metadataReview": "explicit"
    },
    {
      "id": "decoherence-factor",
      "name": "Environment-induced decoherence factor",
      "category": "Open quantum systems",
      "latex": "\\rho_{ij}^{S}(t)=\\rho_{ij}^{S}(0)\\,\\langle E_j(t)|E_i(t)\\rangle",
      "plain": "rho_ij^S(t)=rho_ij^S(0) <E_j(t)|E_i(t)>",
      "description": "Canonical pure-dephasing-style expression showing suppression of system coherences by decreasing overlap of correlated environment states.",
      "theoryIds": ["decoherence"],
      "sourceIds": ["zurek-decoherence"],
      "tags": ["decoherence","environment overlap","off-diagonal coherence"],
      "formulaType": "canonical",
      "assumptions": ["Branch-correlated system–environment state and basis in which environmental records become distinguishable"],
      "variables": ["rho_ij^S: reduced-system coherence", "E_i,E_j: conditional environment states"],
      "regime": "Illustrative environment-induced decoherence / pure-dephasing structure.",
      "units": "Density-matrix elements and state overlaps are dimensionless.",
      "theoryRelationship": "canonical decoherence mechanism",
      "metadataReview": "explicit"
    },
    {
      "id": "darwinism-redundancy",
      "name": "Quantum-Darwinism redundancy",
      "category": "Quantum information",
      "latex": "R_\\delta=\\frac{1}{f_\\delta}",
      "plain": "R_delta = 1/f_delta",
      "description": "Defines redundancy as the number of disjoint environmental fragments, each of fractional size f_delta, sufficient to recover all but a deficit delta of the selected classical information.",
      "theoryIds": ["quantum-darwinism"],
      "sourceIds": ["zurek-darwinism"],
      "tags": ["quantum Darwinism","redundancy","environment fragments"],
      "formulaType": "defining",
      "assumptions": ["Environmental fragments are assessed against an information-deficit criterion delta"],
      "variables": ["R_delta: redundancy", "f_delta: minimal environment fraction meeting the information criterion"],
      "regime": "Quantum Darwinism / redundant environmental records.",
      "units": "Dimensionless.",
      "theoryRelationship": "defining redundancy measure",
      "metadataReview": "explicit"
    },
    {
      "id": "polyakov-action",
      "name": "Polyakov string action",
      "category": "Quantum gravity & cosmology",
      "latex": "S_P=-\\frac{T}{2}\\int d^2\\sigma\\,\\sqrt{-h}\\,h^{ab}\\partial_aX^\\mu\\partial_bX_\\mu",
      "plain": "S_P = -T/2 integral d2sigma sqrt(-h) h^ab d_a X^mu d_b X_mu",
      "description": "Worldsheet action of a relativistic bosonic string in Polyakov form.",
      "theoryIds": ["string-theory"],
      "sourceIds": ["rovelli-qg-survey"],
      "tags": ["string theory","Polyakov action","worldsheet"],
      "formulaType": "defining",
      "assumptions": ["Bosonic string sector shown; background couplings and superstring worldsheet fields omitted"],
      "variables": ["T: string tension", "h_ab: worldsheet metric", "X^mu: embedding coordinates"],
      "regime": "Relativistic string worldsheet dynamics.",
      "units": "Action; T has energy per length in SI-like units and 1/(2 pi alpha') in common natural conventions.",
      "theoryRelationship": "defining worldsheet action",
      "metadataReview": "explicit"
    },
    {
      "id": "asymptotic-fixed-point",
      "name": "Asymptotic-safety fixed-point condition",
      "category": "Quantum gravity & cosmology",
      "latex": "\\beta_i(g_*)=0,\\qquad g_i(k)\\xrightarrow{k\\to\\infty}g_{i*}",
      "plain": "beta_i(g*)=0 and g_i(k)->g_i* as k->infinity",
      "description": "Defining ultraviolet fixed-point criterion of the asymptotic-safety scenario.",
      "theoryIds": ["asymptotic-safety"],
      "sourceIds": ["asymptotic-review-2026"],
      "tags": ["asymptotic safety","RG fixed point","UV"],
      "formulaType": "defining",
      "assumptions": ["Dimensionless running couplings g_i and a renormalization-group flow with a suitable non-Gaussian fixed point"],
      "variables": ["beta_i: beta function", "g_i: running coupling", "k: RG scale"],
      "regime": "Ultraviolet completion by an interacting RG fixed point.",
      "units": "g_i are dimensionless by construction.",
      "theoryRelationship": "defining UV criterion",
      "metadataReview": "explicit"
    },
    {
      "id": "matrix-model-partition",
      "name": "Hermitian matrix-model partition function",
      "category": "Quantum gravity & cosmology",
      "latex": "Z=\\int dM\\,e^{-N\\operatorname{Tr}V(M)}",
      "plain": "Z = integral dM exp[-N Tr V(M)]",
      "description": "Canonical one-matrix partition function underlying matrix-model descriptions of random surfaces and two-dimensional gravity.",
      "theoryIds": ["matrix-models"],
      "sourceIds": ["ginsparg-matrix-1991"],
      "tags": ["matrix model","large N","random geometry"],
      "formulaType": "defining",
      "assumptions": ["Hermitian one-matrix model shown", "Potential V specifies the model"],
      "variables": ["M: Hermitian N by N matrix", "V(M): matrix potential", "N: matrix size"],
      "regime": "Large-N matrix models and random two-dimensional geometry.",
      "units": "Typically dimensionless after model-dependent rescaling.",
      "theoryRelationship": "defining partition function",
      "metadataReview": "explicit"
    },
    {
      "id": "induced-gravity-action",
      "name": "Induced-gravity effective action",
      "category": "Quantum gravity & cosmology",
      "latex": "\\Gamma_{\\mathrm{eff}}[g]\\supset\\int d^4x\\sqrt{-g}\\left(c_0+c_1R+c_2R^2+\\cdots\\right)",
      "plain": "Gamma_eff contains integral sqrt(-g) [c0 + c1 R + c2 R^2 + ...]",
      "description": "Schematic curvature expansion illustrating how Einstein-like and higher-curvature gravitational terms can be induced in an effective action.",
      "theoryIds": ["induced-gravity","gravity-effective-field-theory"],
      "sourceIds": ["sakharov-induced-1967","donoghue-gravity-eft-1994"],
      "tags": ["induced gravity","effective action","curvature"],
      "formulaType": "schematic",
      "assumptions": ["Low-curvature derivative expansion of the quantum effective action"],
      "variables": ["Gamma_eff: effective action", "R: Ricci scalar", "c_i: induced/effective couplings"],
      "regime": "Low-energy effective description of gravitational terms generated by quantum fields.",
      "units": "Coefficients c_i carry dimensions required to make the action have units of action.",
      "theoryRelationship": "schematic effective-action structure",
      "metadataReview": "explicit"
    },
    {
      "id": "witten-string-field-action",
      "name": "Cubic open string-field-theory action",
      "category": "Quantum gravity & cosmology",
      "latex": "S=-\\frac{1}{g_o^2}\\left(\\frac12\\langle\\Psi,Q_B\\Psi\\rangle+\\frac13\\langle\\Psi,\\Psi*\\Psi\\rangle\\right)",
      "plain": "S = -1/g_o^2 [1/2 <Psi,Q_B Psi> + 1/3 <Psi,Psi*Psi>]",
      "description": "Witten's cubic action for open bosonic string field theory.",
      "theoryIds": ["string-field-theory","string-theory"],
      "sourceIds": ["witten-sft-1986"],
      "tags": ["string field theory","BRST","star product"],
      "formulaType": "defining",
      "assumptions": ["Open bosonic string field theory", "BRST operator and associative string star product"],
      "variables": ["Psi: string field", "Q_B: BRST charge", "*: string-field star product", "g_o: open-string coupling"],
      "regime": "Cubic open bosonic string field theory.",
      "units": "Convention dependent; action normalization shown in standard field-theory units.",
      "theoryRelationship": "defining action",
      "metadataReview": "explicit"
    },
    {
      "id": "ikkt-action",
      "name": "IKKT matrix-model action",
      "category": "Quantum gravity & cosmology",
      "latex": "S=-\\frac{1}{g^2}\\operatorname{Tr}\\left(\\frac14[A_\\mu,A_\\nu][A^\\mu,A^\\nu]+\\frac12\\bar\\psi\\Gamma^\\mu[A_\\mu,\\psi]\\right)",
      "plain": "S = -1/g^2 Tr[1/4[A_mu,A_nu]^2 + 1/2 psibar Gamma^mu[A_mu,psi]]",
      "description": "Supersymmetric reduced-matrix action of the IKKT/IIB matrix model.",
      "theoryIds": ["ikkt-matrix","matrix-models"],
      "sourceIds": ["ikkt-1997"],
      "tags": ["IKKT","IIB matrix model","matrix action"],
      "formulaType": "defining",
      "assumptions": ["Ten-dimensional supersymmetric matrix-model conventions; signs depend on metric/signature conventions"],
      "variables": ["A_mu: bosonic matrices", "psi: fermionic matrix spinor", "Gamma^mu: gamma matrices", "g: coupling"],
      "regime": "IKKT/IIB nonperturbative matrix-model proposal.",
      "units": "Convention dependent after dimensional reduction/rescaling.",
      "theoryRelationship": "defining action",
      "metadataReview": "explicit"
    },
    {
      "id": "infinite-derivative-action",
      "name": "Infinite-derivative gravity action (schematic)",
      "category": "Quantum gravity & cosmology",
      "latex": "S=\\frac{M_P^2}{2}\\int d^4x\\sqrt{-g}\\left[R+R\\mathcal F_1(\\Box)R+R_{\\mu\\nu}\\mathcal F_2(\\Box)R^{\\mu\\nu}+\\cdots\\right]",
      "plain": "S ~ integral sqrt(-g)[R + R F1(Box) R + R_mn F2(Box) R^mn + ...]",
      "description": "Schematic analytic-form-factor extension used in ghost-free infinite-derivative/nonlocal gravity models.",
      "theoryIds": ["infinite-derivative-gravity","higher-derivative-qg"],
      "sourceIds": ["biswas-infinite-derivative-2012","stelle-1977"],
      "tags": ["nonlocal gravity","infinite derivatives","form factors"],
      "formulaType": "schematic",
      "assumptions": ["Analytic form factors selected to control propagator poles/UV behavior", "Displayed curvature basis is representative rather than unique"],
      "variables": ["F_i(Box): nonlocal analytic form factor", "Box: covariant d'Alembertian", "M_P: Planck scale"],
      "regime": "Nonlocal/infinite-derivative modified gravity.",
      "units": "Form factors carry inverse powers of a nonlocality scale as required by dimensions.",
      "theoryRelationship": "schematic defining action family",
      "metadataReview": "explicit"
    },
    {
      "id": "minisuperspace-wdw",
      "name": "Minisuperspace Wheeler–DeWitt equation (schematic)",
      "category": "Quantum gravity & cosmology",
      "latex": "\\left[-\\hbar^2\\frac{\\partial^2}{\\partial a^2}+U(a)+\\hat H_m(a,\\phi)\\right]\\Psi(a,\\phi)=0",
      "plain": "[-hbar^2 d2/da2 + U(a) + H_m] Psi(a,phi)=0",
      "description": "Representative reduced Wheeler–DeWitt equation after truncating gravity to homogeneous minisuperspace degrees of freedom.",
      "theoryIds": ["minisuperspace","wheeler-dewitt","quantum-cosmology"],
      "sourceIds": ["quantum-cosmology-review","dewitt-canonical-gravity-1967"],
      "tags": ["minisuperspace","Wheeler-DeWitt","scale factor"],
      "formulaType": "schematic",
      "assumptions": ["Homogeneous/symmetric truncation", "Factor ordering and lapse conventions suppressed"],
      "variables": ["a: scale factor or minisuperspace coordinate", "U(a): effective gravitational potential", "H_m: matter Hamiltonian", "Psi: cosmological wavefunction"],
      "regime": "Minisuperspace quantum cosmology.",
      "units": "Convention dependent; rescalings of a and lapse change coefficient dimensions.",
      "theoryRelationship": "schematic reduced constraint equation",
      "metadataReview": "explicit"
    },
    {
      "id": "pre-big-bang-duality",
      "name": "Scale-factor duality",
      "category": "Quantum gravity & cosmology",
      "latex": "a(t)\\rightarrow a(t)^{-1},\\qquad \\phi(t)\\rightarrow\\phi(t)-2d\\ln a(t)",
      "plain": "a -> 1/a; phi -> phi - 2 d ln a",
      "description": "Representative scale-factor duality transformation in string-frame homogeneous dilaton cosmology underlying pre-big-bang scenarios.",
      "theoryIds": ["pre-big-bang-cosmology","string-theory"],
      "sourceIds": ["pre-big-bang-1993"],
      "tags": ["pre-big-bang","duality","dilaton"],
      "formulaType": "defining",
      "assumptions": ["Homogeneous isotropic string-frame background with d spatial dimensions", "Convention for dilaton normalization as shown"],
      "variables": ["a(t): scale factor", "phi(t): dilaton", "d: number of spatial dimensions"],
      "regime": "Lowest-order string cosmology exhibiting scale-factor duality.",
      "units": "a is dimensionless by convention; phi normalization is convention dependent.",
      "theoryRelationship": "defining duality symmetry",
      "metadataReview": "explicit"
    },
    {
      "id": "pt-symmetry-condition",
      "name": "PT-symmetry condition",
      "category": "Beyond standard quantum theory",
      "latex": "[H,\\mathcal{PT}]=0",
      "plain": "[H,PT]=0",
      "description": "Defining commutation condition of a PT-symmetric Hamiltonian with combined parity and time reversal.",
      "theoryIds": ["pt-symmetric","non-hermitian"],
      "sourceIds": ["pt-review"],
      "tags": ["PT symmetry","non-Hermitian"],
      "formulaType": "defining",
      "assumptions": ["Parity P and anti-linear time reversal T defined for the model"],
      "variables": ["H: Hamiltonian", "P: parity", "T: time-reversal operation"],
      "regime": "PT-symmetric non-Hermitian quantum models.",
      "units": "Operator commutation relation; no standalone units.",
      "theoryRelationship": "defining symmetry condition",
      "metadataReview": "explicit"
    },
    {
      "id": "weinberg-nonlinear-eom",
      "name": "Weinberg nonlinear quantum equation",
      "category": "Beyond standard quantum theory",
      "latex": "i\\hbar\\frac{d\\psi_k}{dt}=\\frac{\\partial h(\\psi,\\psi^*)}{\\partial\\psi_k^*}",
      "plain": "i hbar d psi_k/dt = partial h(psi,psi*) / partial psi_k*",
      "description": "Canonical Hamiltonian-functional evolution law in Weinberg's nonlinear extension of quantum mechanics.",
      "theoryIds": ["nonlinear-qm"],
      "sourceIds": ["weinberg-nonlinear-1989"],
      "tags": ["nonlinear quantum mechanics","Weinberg"],
      "formulaType": "defining",
      "assumptions": ["Homogeneous real Hamiltonian functional h on state amplitudes in Weinberg's formulation"],
      "variables": ["psi_k: state amplitude", "h: nonlinear Hamiltonian function"],
      "regime": "Weinberg-type nonlinear quantum mechanics.",
      "units": "h has energy dimensions under the usual normalization.",
      "theoryRelationship": "defining evolution equation",
      "metadataReview": "explicit"
    },
    {
      "id": "haldane-exclusion",
      "name": "Haldane exclusion-statistics relation",
      "category": "Quantum many-body & condensed matter",
      "latex": "\\Delta d_i=-\\sum_j g_{ij}\\,\\Delta N_j",
      "plain": "Delta d_i = - sum_j g_ij Delta N_j",
      "description": "Defining relation for generalized exclusion statistics: adding particles changes the dimension of the available one-particle state space.",
      "theoryIds": ["generalized-exclusion-statistics"],
      "sourceIds": ["haldane-exclusion-1991"],
      "tags": ["Haldane statistics","exclusion statistics"],
      "formulaType": "defining",
      "assumptions": ["Species-resolved generalized exclusion-statistics description"],
      "variables": ["d_i: dimension of available single-particle state space for species i", "N_j: particle number", "g_ij: exclusion-statistics parameters"],
      "regime": "Generalized exclusion statistics in many-body systems.",
      "units": "Dimensionless counting relation.",
      "theoryRelationship": "defining statistical relation",
      "metadataReview": "explicit"
    },
    {
      "id": "q-oscillator",
      "name": "q-deformed oscillator algebra",
      "category": "Mathematical structures",
      "latex": "aa^\\dagger-q\\,a^\\dagger a=q^{-N}",
      "plain": "a a^dagger - q a^dagger a = q^{-N}",
      "description": "One standard Macfarlane q-oscillator convention illustrating deformation of the harmonic-oscillator algebra.",
      "theoryIds": ["q-deformed-qm"],
      "sourceIds": ["macfarlane-q-1989"],
      "tags": ["q oscillator","quantum group","deformation"],
      "formulaType": "defining",
      "assumptions": ["Macfarlane q-oscillator convention; alternative but equivalent parameterizations exist"],
      "variables": ["a,a†: q-deformed ladder operators", "N: number operator", "q: deformation parameter"],
      "regime": "q-deformed oscillator/quantum-group models.",
      "units": "Dimensionless algebraic relation.",
      "theoryRelationship": "defining deformed algebra",
      "metadataReview": "explicit"
    }
,
    {
      "id": "hidden-measurement-probability",
      "name": "Hidden-measurement outcome probability",
      "category": "Foundations & interpretations",
      "latex": "P(i|\\psi)=\\frac{\\mu(\\Lambda_i(\\psi))}{\\mu(\\Lambda(\\psi))}",
      "plain": "P(i|psi) = mu(Lambda_i(psi)) / mu(Lambda(psi))",
      "description": "Schematic measure-ratio form expressing an outcome probability as the relative measure of measurement interactions producing outcome i.",
      "theoryIds": ["hidden-measurements"],
      "sourceIds": ["aerts-hidden-1986"],
      "tags": ["hidden measurements","measurement interactions","probability"],
      "formulaType": "schematic",
      "assumptions": ["A set of possible measurement interactions is equipped with a measure mu", "Lambda_i denotes the subset yielding outcome i", "Exact interaction spaces and measures are model dependent"],
      "variables": ["psi: prepared system state", "Lambda: set of possible measurement interactions", "Lambda_i: interactions producing outcome i", "mu: measure over interactions"],
      "regime": "Hidden-measurements models of quantum probabilities.",
      "units": "Dimensionless probability.",
      "theoryRelationship": "schematic defining probability mechanism",
      "metadataReview": "explicit"
    },
    {
      "id": "operational-state-effect",
      "name": "Operational state–effect probability pairing",
      "category": "Mathematical structures",
      "latex": "p(e|\\omega)=\\omega(e)\\in[0,1]",
      "plain": "p(e|omega) = omega(e) in [0,1]",
      "description": "Abstract operational probability pairing between a state and an effect/test outcome.",
      "theoryIds": ["operational-quantum-logic","generalized-probabilistic"],
      "sourceIds": ["coecke-operational-logic-2000","barnum-operational-2003","barrett-gpt-2007"],
      "tags": ["operational quantum logic","effect algebra","state space"],
      "formulaType": "defining",
      "assumptions": ["States are normalized positive functionals or equivalent operational state objects", "Effects represent admissible yes/no outcomes or affine probability functionals"],
      "variables": ["omega: operational state", "e: effect/test outcome", "p: outcome probability"],
      "regime": "Operational quantum logic, convex operational theories, and related generalized probabilistic frameworks.",
      "units": "Dimensionless probability.",
      "theoryRelationship": "defining operational probability rule",
      "metadataReview": "explicit"
    },
    {
      "id": "polymer-cosmology-substitution",
      "name": "Polymerized cosmological momentum substitution",
      "category": "Quantum gravity & cosmology",
      "latex": "b\\;\\longrightarrow\\;\\frac{\\sin(\\lambda b)}{\\lambda}",
      "plain": "b -> sin(lambda b)/lambda",
      "description": "Canonical effective polymerization replacing a connection/momentum-like cosmological variable by a bounded holonomy function.",
      "theoryIds": ["polymer-quantum-cosmology","polymer-quantum-mechanics","loop-quantum-cosmology"],
      "sourceIds": ["achour-livine-polymer-cosmology-2019"],
      "tags": ["polymer cosmology","holonomy","polymerization"],
      "formulaType": "defining",
      "assumptions": ["Effective polymer representation with polymer scale lambda", "Choice of canonical variable b and polymerization map is model/convention dependent"],
      "variables": ["b: connection- or momentum-like cosmological canonical variable", "lambda: polymer scale"],
      "regime": "Effective polymer quantization of homogeneous cosmological phase space.",
      "units": "lambda b is dimensionless; dimensions of lambda depend on the canonical convention.",
      "theoryRelationship": "defining effective polymerization map",
      "metadataReview": "explicit"
    }
,
    {
      "id": "bohr-sommerfeld-quantization",
      "name": "Bohr–Sommerfeld action quantization",
      "category": "Core quantum mechanics",
      "latex": "\\oint p_i\\,dq_i=n_i h",
      "plain": "closed integral p_i dq_i = n_i h",
      "description": "Old-quantum-theory quantization condition restricting classical action variables to integer multiples of Planck's constant.",
      "theoryIds": ["old-quantum"],
      "sourceIds": ["old-quantum-review-2026"],
      "tags": ["old quantum theory","Bohr-Sommerfeld","action variable"],
      "formulaType": "defining",
      "assumptions": ["Integrable or separable classical motion with closed action cycles", "Pre-modern quantum theory before full matrix/wave mechanics"],
      "variables": ["p_i,q_i: canonical momentum and coordinate", "n_i: integer quantum number", "h: Planck constant"],
      "regime": "Semiclassical old quantum theory.",
      "units": "Action.",
      "theoryRelationship": "defining quantization rule",
      "metadataReview": "explicit"
    },
    {
      "id": "constructive-phi4-measure",
      "name": "Euclidean phi-four functional measure",
      "category": "Quantum field theory",
      "latex": "d\\mu(\\phi)=Z^{-1}e^{-S_E[\\phi]}\\,\\mathcal D\\phi,\\qquad S_E=\\int d^dx\\left[\\frac12(\\partial\\phi)^2+\\frac12m^2\\phi^2+\\lambda\\phi^4\\right]",
      "plain": "dmu(phi) = Z^-1 exp[-S_E(phi)] Dphi with Euclidean phi^4 action",
      "description": "Schematic Euclidean functional-measure form underlying constructive scalar-field models such as P(phi)_2 and phi^4_3.",
      "theoryIds": ["constructive-qft","euclidean-qft"],
      "sourceIds": ["constructive-qft-review","osterwalder-schrader-1973"],
      "tags": ["constructive QFT","phi4","Euclidean measure"],
      "formulaType": "schematic",
      "assumptions": ["Regularization/renormalization and rigorous measure construction are suppressed", "Scalar Euclidean field shown as representative constructive model"],
      "variables": ["phi: Euclidean scalar field", "S_E: Euclidean action", "Z: normalization/partition function", "lambda: interaction coupling"],
      "regime": "Constructive Euclidean scalar QFT.",
      "units": "Natural-unit field/coupling dimensions depend on spacetime dimension d.",
      "theoryRelationship": "schematic constructive measure",
      "metadataReview": "explicit"
    },
    {
      "id": "os-reflection-positivity",
      "name": "Osterwalder–Schrader reflection positivity",
      "category": "Quantum field theory",
      "latex": "\\langle(\\Theta F)F\\rangle_E\\ge0",
      "plain": "<(Theta F) F>_E >= 0",
      "description": "Compact reflection-positivity condition required for reconstruction of a physical Hilbert space from Euclidean correlation functions.",
      "theoryIds": ["euclidean-qft","wightman-qft"],
      "sourceIds": ["osterwalder-schrader-1973","sep-math-rigor"],
      "tags": ["Osterwalder-Schrader","reflection positivity","Euclidean QFT"],
      "formulaType": "defining",
      "assumptions": ["F is supported at positive Euclidean times", "Theta implements Euclidean time reflection"],
      "variables": ["F: functional of Euclidean fields", "Theta: reflection operation", "<...>_E: Euclidean expectation"],
      "regime": "Axiomatic Euclidean QFT and OS reconstruction.",
      "units": "Positivity statement; normalization is convention dependent.",
      "theoryRelationship": "axiom",
      "metadataReview": "explicit"
    },
    {
      "id": "keldysh-generating-functional",
      "name": "Closed-time-path generating functional",
      "category": "Formulations",
      "latex": "Z[J_+,J_-]=\\operatorname{Tr}\\left(U_{J_+}(t_f,t_0)\\,\\rho_0\\,U_{J_-}^\\dagger(t_f,t_0)\\right)",
      "plain": "Z[J+,J-] = Tr(U_J+ rho0 U_J-^dagger)",
      "description": "Forward/backward contour generating functional at the core of Schwinger–Keldysh nonequilibrium theory.",
      "theoryIds": ["schwinger-keldysh"],
      "sourceIds": ["schwinger-1961","keldysh-1965"],
      "tags": ["Schwinger-Keldysh","closed time path","nonequilibrium"],
      "formulaType": "defining",
      "assumptions": ["Initial density operator rho_0 specified at t_0", "Forward and backward contour sources may differ before physical-source identification"],
      "variables": ["U_J+: source-dependent forward evolution", "U_J-: backward-branch evolution", "rho_0: initial density operator"],
      "regime": "Real-time nonequilibrium quantum dynamics.",
      "units": "Generating functional is dimensionless under standard normalization.",
      "theoryRelationship": "defining contour functional",
      "metadataReview": "explicit"
    },
    {
      "id": "geometric-prequantum-operator",
      "name": "Geometric-quantization prequantum operator",
      "category": "Formulations",
      "latex": "\\widehat f=-i\\hbar\\nabla_{X_f}+f",
      "plain": "f_hat = -i hbar nabla_Xf + f",
      "description": "Kostant–Souriau prequantization map associating a classical observable with an operator acting on sections of the prequantum line bundle.",
      "theoryIds": ["geometric-quantization"],
      "sourceIds": ["kostant-1970"],
      "tags": ["geometric quantization","prequantization","Hamiltonian vector field"],
      "formulaType": "defining",
      "assumptions": ["Prequantizable symplectic manifold with a compatible line bundle and connection"],
      "variables": ["f: classical observable", "X_f: Hamiltonian vector field", "nabla: prequantum connection"],
      "regime": "Prequantization stage of geometric quantization.",
      "units": "Operator has units of the observable f.",
      "theoryRelationship": "defining quantization map",
      "metadataReview": "explicit"
    },
    {
      "id": "stochastic-quantization-langevin",
      "name": "Parisi–Wu stochastic-quantization Langevin equation",
      "category": "Formulations",
      "latex": "\\frac{\\partial\\phi(x,\\tau)}{\\partial\\tau}=-\\frac{\\delta S_E}{\\delta\\phi(x,\\tau)}+\\eta(x,\\tau),\\qquad \\langle\\eta(x,\\tau)\\eta(x',\\tau')\\rangle=2\\delta(x-x')\\delta(\\tau-\\tau')",
      "plain": "d phi/d tau = - delta S_E/delta phi + eta; <eta eta> = 2 delta delta",
      "description": "Auxiliary-time Langevin dynamics whose equilibrium distribution reproduces Euclidean functional-integral weights.",
      "theoryIds": ["stochastic-quantization"],
      "sourceIds": ["parisi-wu-1981"],
      "tags": ["stochastic quantization","Langevin","fictitious time"],
      "formulaType": "defining",
      "assumptions": ["Euclidean action S_E", "Gaussian white noise with the displayed normalization"],
      "variables": ["tau: stochastic/fictitious time", "phi: field", "eta: Gaussian white noise"],
      "regime": "Parisi–Wu stochastic quantization.",
      "units": "Stochastic-time dimensions depend on field/action normalization.",
      "theoryRelationship": "defining stochastic evolution",
      "metadataReview": "explicit"
    },
    {
      "id": "light-front-dispersion",
      "name": "Light-front mass-shell relation",
      "category": "Formulations",
      "latex": "p^-=\\frac{p_\\perp^2+m^2}{2p^+},\\qquad x^\\pm=\\frac{x^0\\pm x^3}{\\sqrt2}",
      "plain": "p^-=(p_perp^2+m^2)/(2 p^+); x^+-=(x0+-x3)/sqrt2",
      "description": "Free-particle light-front Hamiltonian and null-coordinate definitions in a common normalization.",
      "theoryIds": ["light-front-quantization"],
      "sourceIds": ["dirac-front-1949"],
      "tags": ["light front","front form","mass shell"],
      "formulaType": "canonical",
      "assumptions": ["Metric and sqrt(2) light-front convention as displayed", "Free relativistic particle"],
      "variables": ["p+: longitudinal light-front momentum", "p-: light-front Hamiltonian component", "p_perp: transverse momentum"],
      "regime": "Front-form relativistic dynamics.",
      "units": "Momentum/energy units.",
      "theoryRelationship": "canonical kinematic relation",
      "metadataReview": "explicit"
    },
    {
      "id": "background-field-split",
      "name": "Background-field decomposition",
      "category": "Formulations",
      "latex": "A_\\mu=\\bar A_\\mu+a_\\mu",
      "plain": "A_mu = Abar_mu + a_mu",
      "description": "Defining split of a gauge or gravitational field into background and quantum-fluctuation components.",
      "theoryIds": ["background-field-method"],
      "sourceIds": ["dewitt-background-1967"],
      "tags": ["background field","quantum fluctuation","gauge theory"],
      "formulaType": "defining",
      "assumptions": ["Background-field perturbative quantization"],
      "variables": ["A_mu: full field", "Abar_mu: background field", "a_mu: quantum fluctuation"],
      "regime": "Background-field quantization of gauge and gravitational theories.",
      "units": "All three field terms have identical dimensions.",
      "theoryRelationship": "defining field split",
      "metadataReview": "explicit"
    },
    {
      "id": "weyl-quantization-kernel",
      "name": "Weyl quantization kernel",
      "category": "Formulations",
      "latex": "[\\operatorname{Op}_W(f)\\psi](x)=\\frac{1}{(2\\pi\\hbar)^n}\\int d^ny\\,d^np\\;e^{i(x-y)\\cdot p/\\hbar}f\\!\\left(\\frac{x+y}{2},p\\right)\\psi(y)",
      "plain": "Op_W(f) psi(x) = (2 pi hbar)^-n integral dy dp exp[i(x-y).p/hbar] f((x+y)/2,p) psi(y)",
      "description": "Standard Weyl pseudodifferential quantization of a classical phase-space symbol.",
      "theoryIds": ["weyl-quantization","phase-space-qm"],
      "sourceIds": ["weyl-representation-review-1998"],
      "tags": ["Weyl quantization","phase space","operator kernel"],
      "formulaType": "defining",
      "assumptions": ["Suitable symbol f and test wavefunction psi", "Flat phase space R^(2n)"],
      "variables": ["f(x,p): classical symbol", "Op_W(f): Weyl-quantized operator", "psi: wavefunction"],
      "regime": "Weyl/pseudodifferential quantization on flat phase space.",
      "units": "Determined by the symbol f; phase in exponent is dimensionless.",
      "theoryRelationship": "defining quantization map",
      "metadataReview": "explicit"
    },
    {
      "id": "polymer-shift",
      "name": "Polymer translation operator",
      "category": "Formulations",
      "latex": "\\widehat U(\\lambda)|\\mu\\rangle=|\\mu+\\lambda\\rangle",
      "plain": "U(lambda)|mu> = |mu+lambda>",
      "description": "Finite translation action characteristic of the non-regular polymer representation, where an infinitesimal momentum generator need not exist.",
      "theoryIds": ["polymer-quantum-mechanics","polymer-quantum-cosmology"],
      "sourceIds": ["ashtekar-polymer-2003","achour-livine-polymer-cosmology-2019"],
      "tags": ["polymer quantization","translation","nonregular representation"],
      "formulaType": "defining",
      "assumptions": ["Polymer basis labeled by mu", "Finite translation scale lambda"],
      "variables": ["U(lambda): finite translation operator", "mu: configuration label", "lambda: translation/polymer scale"],
      "regime": "Polymer representation of quantum mechanics and its cosmological applications.",
      "units": "mu and lambda share the configuration-variable units.",
      "theoryRelationship": "defining representation action",
      "metadataReview": "explicit"
    },
    {
      "id": "qrf-parity-swap",
      "name": "Quantum-reference-frame transformation",
      "category": "Quantum information",
      "latex": "\\hat S_x=\\hat{\\mathcal P}_{AC}\\exp\\!\\left(\\frac{i}{\\hbar}\\hat q_C\\otimes\\hat P_B\\right)",
      "plain": "S_x = parity-swap_AC exp[i q_C tensor P_B / hbar]",
      "description": "Representative unitary transformation between quantum reference frames for a translation-related three-system setting.",
      "theoryIds": ["quantum-reference-frames"],
      "sourceIds": ["qrf-giacomini"],
      "tags": ["quantum reference frames","frame transformation","parity swap"],
      "formulaType": "canonical",
      "assumptions": ["Translation-related nonrelativistic reference frames in the Giacomini–Castro-Ruiz–Brukner construction", "Operator convention follows the cited source"],
      "variables": ["P_AC: parity-swap map between frames A and C", "q_C: position operator of frame C", "P_B: momentum of system B"],
      "regime": "Nonrelativistic quantum reference-frame transformations.",
      "units": "Exponent is dimensionless.",
      "theoryRelationship": "canonical example transformation",
      "metadataReview": "explicit"
    },
    {
      "id": "quantum-ito-table",
      "name": "Hudson–Parthasarathy quantum Itô rule",
      "category": "Open quantum systems",
      "latex": "dB_t\\,dB_t^\\dagger=dt",
      "plain": "dB_t dB_t^dagger = dt",
      "description": "Core bosonic quantum Itô multiplication rule for vacuum noise increments.",
      "theoryIds": ["quantum-stochastic-calculus"],
      "sourceIds": ["hudson-parthasarathy-1984"],
      "tags": ["quantum Ito calculus","bosonic noise","HP calculus"],
      "formulaType": "defining",
      "assumptions": ["Vacuum bosonic quantum noise in the Hudson–Parthasarathy convention"],
      "variables": ["dB_t: annihilation noise increment", "dB_t†: creation noise increment"],
      "regime": "Continuous-time quantum stochastic calculus.",
      "units": "Noise increments scale as square root of time.",
      "theoryRelationship": "defining stochastic multiplication rule",
      "metadataReview": "explicit"
    },
    {
      "id": "zx-z-spider",
      "name": "ZX-calculus Z-spider map",
      "category": "Quantum information",
      "latex": "Z_{m,n}^{\\alpha}=|0\\rangle^{\\otimes n}\\langle0|^{\\otimes m}+e^{i\\alpha}|1\\rangle^{\\otimes n}\\langle1|^{\\otimes m}",
      "plain": "Z_mn^alpha = |0>^n<0|^m + exp(i alpha)|1>^n<1|^m",
      "description": "Linear map represented by a green/Z spider with m inputs, n outputs, and phase alpha.",
      "theoryIds": ["zx-calculus","categorical-qm"],
      "sourceIds": ["coecke-duncan-2011"],
      "tags": ["ZX calculus","spider","diagrammatic quantum mechanics"],
      "formulaType": "defining",
      "assumptions": ["Computational-basis qubit convention", "Unnormalized spider convention as displayed"],
      "variables": ["m,n: input/output arities", "alpha: phase"],
      "regime": "ZX-calculus qubit processes.",
      "units": "Dimensionless linear map.",
      "theoryRelationship": "defining generator",
      "metadataReview": "explicit"
    },
    {
      "id": "twistor-incidence",
      "name": "Penrose twistor incidence relation",
      "category": "Quantum gravity & cosmology",
      "latex": "\\omega^A=i\\,x^{AA'}\\pi_{A'}",
      "plain": "omega^A = i x^(AA') pi_A'",
      "description": "Incidence relation connecting a spacetime point to a projective line in twistor space.",
      "theoryIds": ["twistor","twistor-string"],
      "sourceIds": ["rovelli-qg-survey","witten-twistor-string-2004"],
      "tags": ["twistor","incidence relation","complex geometry"],
      "formulaType": "defining",
      "assumptions": ["Complexified Minkowski/spinor notation and conventional factor of i"],
      "variables": ["omega^A,pi_A': twistor spinors", "x^(AA'): spacetime point in spinor form"],
      "regime": "Penrose twistor geometry and twistor-based field theory.",
      "units": "Projective scaling obscures absolute dimensions; convention dependent.",
      "theoryRelationship": "defining incidence relation",
      "metadataReview": "explicit"
    },
    {
      "id": "entropic-force",
      "name": "Entropic-force relation",
      "category": "Quantum gravity & cosmology",
      "latex": "F\\,\\Delta x=T\\,\\Delta S",
      "plain": "F Delta x = T Delta S",
      "description": "Thermodynamic work/entropy relation used as the starting point of entropic-gravity force arguments.",
      "theoryIds": ["entropic-gravity"],
      "sourceIds": ["verlinde-2011"],
      "tags": ["entropic gravity","entropy","force"],
      "formulaType": "defining",
      "assumptions": ["Entropic-force interpretation with effective temperature T and entropy gradient"],
      "variables": ["F: effective force", "Delta x: displacement", "T: effective temperature", "Delta S: entropy change"],
      "regime": "Entropic-gravity phenomenological derivations.",
      "units": "Both sides have energy units.",
      "theoryRelationship": "defining thermodynamic relation",
      "metadataReview": "explicit"
    },
    {
      "id": "horava-action",
      "name": "Hořava–Lifshitz gravity action",
      "category": "Quantum gravity & cosmology",
      "latex": "S=\\int dt\\,d^3x\\,N\\sqrt g\\left[\\frac{2}{\\kappa^2}(K_{ij}K^{ij}-\\lambda K^2)-\\mathcal V[g]\\right]",
      "plain": "S = integral N sqrt(g) [2/kappa^2 (KijKij-lambda K^2) - V(g)]",
      "description": "Canonical ADM-like kinetic-plus-potential structure of Hořava–Lifshitz gravity.",
      "theoryIds": ["horava-lifshitz"],
      "sourceIds": ["horava-2009"],
      "tags": ["Horava-Lifshitz","anisotropic scaling","ADM"],
      "formulaType": "defining",
      "assumptions": ["Preferred foliation with lapse N and spatial metric g_ij", "Potential V contains higher spatial derivatives permitted by the model"],
      "variables": ["K_ij: extrinsic curvature", "lambda: kinetic coupling", "V[g]: spatial potential"],
      "regime": "Hořava–Lifshitz gravity.",
      "units": "Coupling dimensions depend on anisotropic-scaling convention.",
      "theoryRelationship": "defining action family",
      "metadataReview": "explicit"
    },
    {
      "id": "tensor-model-partition",
      "name": "Tensor-model partition function",
      "category": "Quantum gravity & cosmology",
      "latex": "Z_N=\\int dT\\,d\\bar T\\;e^{-N^{d-1}S(T,\\bar T)}",
      "plain": "Z_N = integral dT dTbar exp[-N^(d-1) S(T,Tbar)]",
      "description": "Canonical large-N tensor-model partition function with tensor-invariant action.",
      "theoryIds": ["tensor-models","tensorial-group-field-theory"],
      "sourceIds": ["gurau-tensor-2010","carrozza-oriti-rivasseau-tgft-2014"],
      "tags": ["tensor models","large N","random geometry"],
      "formulaType": "defining",
      "assumptions": ["Rank-d tensor model with conventional N-scaling", "Action chosen from allowed tensor invariants"],
      "variables": ["T: rank-d tensor", "N: index range / large-N parameter", "S: tensor action"],
      "regime": "Random tensor models and tensorial GFT large-N expansions.",
      "units": "Typically dimensionless after model rescaling.",
      "theoryRelationship": "defining partition function",
      "metadataReview": "explicit"
    },
    {
      "id": "celestial-mellin",
      "name": "Celestial Mellin transform",
      "category": "Quantum gravity & cosmology",
      "latex": "\\widetilde{\\mathcal A}(\\Delta_i,z_i,\\bar z_i)=\\prod_i\\int_0^\\infty d\\omega_i\\,\\omega_i^{\\Delta_i-1}\\mathcal A(\\omega_i,z_i,\\bar z_i)",
      "plain": "A_tilde(Delta_i,z_i) = product_i integral d omega_i omega_i^(Delta_i-1) A(omega_i,z_i)",
      "description": "Mellin transform mapping momentum-space scattering amplitudes to celestial conformal-basis correlator-like objects.",
      "theoryIds": ["celestial-holography","amplitudes-bootstrap"],
      "sourceIds": ["pasterski-celestial-2017"],
      "tags": ["celestial holography","Mellin transform","scattering amplitudes"],
      "formulaType": "defining",
      "assumptions": ["Massless external states parameterized by energy and celestial coordinates", "Normalization conventions suppressed"],
      "variables": ["omega_i: external energy", "Delta_i: celestial conformal dimension", "z_i: celestial-sphere coordinate"],
      "regime": "Celestial representation of asymptotically flat scattering.",
      "units": "Transform dimensions depend on amplitude normalization and Delta_i.",
      "theoryRelationship": "defining basis transform",
      "metadataReview": "explicit"
    },
    {
      "id": "causal-fermion-action",
      "name": "Causal-fermion-system action",
      "category": "Quantum gravity & cosmology",
      "latex": "\\mathcal S(\\rho)=\\iint \\mathcal L(x,y)\\,d\\rho(x)\\,d\\rho(y)",
      "plain": "S(rho) = double integral L(x,y) d rho(x) d rho(y)",
      "description": "Causal action functional minimized in the causal-fermion-system framework.",
      "theoryIds": ["causal-fermion-systems"],
      "sourceIds": ["finster-cfs-2011"],
      "tags": ["causal fermion systems","causal action","measure"],
      "formulaType": "defining",
      "assumptions": ["Positive measure rho on the chosen space of finite-rank operators", "Lagrangian L defined from spectral data of operator products"],
      "variables": ["rho: universal measure", "L(x,y): causal Lagrangian", "x,y: operator-space points"],
      "regime": "Causal fermion systems.",
      "units": "Convention dependent; often normalized in mathematical units.",
      "theoryRelationship": "defining variational action",
      "metadataReview": "explicit"
    },
    {
      "id": "bfss-action",
      "name": "BFSS Matrix-theory action (schematic)",
      "category": "Quantum gravity & cosmology",
      "latex": "S_{\\mathrm{BFSS}}\\sim\\int dt\\,\\operatorname{Tr}\\left[\\frac12(D_tX^i)^2+\\frac14[X^i,X^j]^2+\\text{fermions}\\right]",
      "plain": "S_BFSS ~ integral dt Tr[1/2(D_t X)^2 + 1/4[X,X]^2 + fermions]",
      "description": "Schematic supersymmetric matrix-quantum-mechanics action underlying the BFSS conjecture for M-theory.",
      "theoryIds": ["bfss-matrix"],
      "sourceIds": ["bfss-1997"],
      "tags": ["BFSS","Matrix theory","D0 branes"],
      "formulaType": "schematic",
      "assumptions": ["Overall couplings, compactification radius, spinor normalization, and sign conventions suppressed"],
      "variables": ["X^i: matrix-valued transverse coordinates", "D_t: gauge-covariant time derivative"],
      "regime": "BFSS large-N supersymmetric matrix quantum mechanics.",
      "units": "Convention dependent after rescaling.",
      "theoryRelationship": "schematic defining action",
      "metadataReview": "explicit"
    },
    {
      "id": "topological-string-genus",
      "name": "Topological-string genus expansion",
      "category": "Quantum gravity & cosmology",
      "latex": "F(g_s)=\\sum_{g=0}^{\\infty}g_s^{2g-2}F_g",
      "plain": "F(g_s) = sum_g g_s^(2g-2) F_g",
      "description": "Perturbative genus expansion of the topological-string free energy.",
      "theoryIds": ["topological-string","string-theory"],
      "sourceIds": ["witten-topological-string-1992"],
      "tags": ["topological string","genus expansion","free energy"],
      "formulaType": "canonical",
      "assumptions": ["Perturbative topological-string expansion in string coupling g_s"],
      "variables": ["g_s: string coupling", "F_g: genus-g free-energy contribution"],
      "regime": "Perturbative topological string theory.",
      "units": "Commonly dimensionless after topological-string normalization.",
      "theoryRelationship": "canonical perturbative expansion",
      "metadataReview": "explicit"
    },
    {
      "id": "pr-box-distribution",
      "name": "PR-box correlation",
      "category": "Foundations & interpretations",
      "latex": "P(a,b|x,y)=\\begin{cases}\\frac12,&a\\oplus b=xy\\\\0,&\\text{otherwise}\\end{cases}",
      "plain": "P(a,b|x,y)=1/2 if a xor b = x y, otherwise 0",
      "description": "Canonical nonsignalling Popescu–Rohrlich box achieving the algebraic CHSH value.",
      "theoryIds": ["pr-box"],
      "sourceIds": ["popescu-rohrlich-1994"],
      "tags": ["PR box","superquantum","nonsignalling"],
      "formulaType": "defining",
      "assumptions": ["Binary inputs x,y and outputs a,b", "Arithmetic xy and XOR over bits"],
      "variables": ["x,y: binary measurement inputs", "a,b: binary outputs"],
      "regime": "Post-quantum nonsignalling correlation model.",
      "units": "Dimensionless probability.",
      "theoryRelationship": "defining behavior",
      "metadataReview": "explicit"
    },
    {
      "id": "newton-gravity-force",
      "name": "Newtonian gravitational force",
      "category": "Relativity & astrophysics",
      "latex": "\\mathbf F=-\\frac{Gm_1m_2}{r^2}\\,\\hat{\\mathbf r}",
      "plain": "F = -G m1 m2/r^2 rhat",
      "description": "Inverse-square gravitational force between point masses in Newtonian gravity.",
      "theoryIds": [
        "newtonian-gravity"
      ],
      "sourceIds": [
        "newton-principia-1687"
      ],
      "tags": [
        "gravity",
        "inverse square"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Point masses or spherically symmetric bodies",
        "Weak-field nonrelativistic regime"
      ],
      "variables": [
        "G: gravitational constant",
        "m1,m2: masses",
        "r: separation"
      ],
      "regime": "Newtonian gravity; weak fields and speeds much smaller than c.",
      "units": "Force in newtons in SI.",
      "theoryRelationship": "defining force law",
      "metadataReview": "explicit"
    },
    {
      "id": "poisson-gravity",
      "name": "Poisson equation for Newtonian gravity",
      "category": "Relativity & astrophysics",
      "latex": "\\nabla^2\\Phi=4\\pi G\\rho",
      "plain": "nabla^2 Phi = 4 pi G rho",
      "description": "Relates Newtonian gravitational potential to mass density.",
      "theoryIds": [
        "newtonian-gravity",
        "stellar-structure",
        "jeans-instability"
      ],
      "sourceIds": [
        "newton-principia-1687",
        "kippenhahn-stellar-2012"
      ],
      "tags": [
        "Poisson equation",
        "potential",
        "density"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Newtonian gravitational field"
      ],
      "variables": [
        "Phi: gravitational potential",
        "rho: mass density"
      ],
      "regime": "Nonrelativistic self-gravitating systems.",
      "units": "Phi has units of specific energy; both sides have inverse-time-squared dimensions.",
      "theoryRelationship": "field equation",
      "metadataReview": "explicit"
    },
    {
      "id": "lorentz-factor",
      "name": "Lorentz factor",
      "category": "Relativity & astrophysics",
      "latex": "\\gamma=\\frac{1}{\\sqrt{1-v^2/c^2}}",
      "plain": "gamma = 1/sqrt(1-v^2/c^2)",
      "description": "Relativistic boost factor for speed v.",
      "theoryIds": [
        "special-relativity"
      ],
      "sourceIds": [
        "einstein-sr-1905"
      ],
      "tags": [
        "Lorentz",
        "relativity"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Inertial frames",
        "Flat spacetime"
      ],
      "variables": [
        "v: relative speed",
        "c: speed of light"
      ],
      "regime": "Special relativity.",
      "units": "Dimensionless.",
      "theoryRelationship": "defining kinematic factor",
      "metadataReview": "explicit"
    },
    {
      "id": "minkowski-interval",
      "name": "Minkowski spacetime interval",
      "category": "Relativity & astrophysics",
      "latex": "ds^2=-c^2dt^2+dx^2+dy^2+dz^2",
      "plain": "ds^2 = -c^2 dt^2 + dx^2 + dy^2 + dz^2",
      "description": "Invariant interval in flat spacetime for the stated metric signature.",
      "theoryIds": [
        "special-relativity"
      ],
      "sourceIds": [
        "einstein-sr-1905"
      ],
      "tags": [
        "Minkowski",
        "interval"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Flat spacetime",
        "Metric signature (-,+,+,+)"
      ],
      "variables": [
        "t: time coordinate",
        "x,y,z: spatial coordinates"
      ],
      "regime": "Special relativity in Cartesian inertial coordinates.",
      "units": "All terms have length-squared units when ct is used.",
      "theoryRelationship": "defining invariant geometry",
      "metadataReview": "explicit"
    },
    {
      "id": "einstein-field-equation",
      "name": "Einstein field equation",
      "category": "Relativity & astrophysics",
      "latex": "G_{\\mu\\nu}+\\Lambda g_{\\mu\\nu}=\\frac{8\\pi G}{c^4}T_{\\mu\\nu}",
      "plain": "G_mn + Lambda g_mn = (8 pi G/c^4) T_mn",
      "description": "Relates spacetime curvature to stress-energy, including a cosmological constant.",
      "theoryIds": [
        "general-relativity",
        "flrw-cosmology",
        "lambda-cdm"
      ],
      "sourceIds": [
        "einstein-gr-1916",
        "planck-cosmology-2018"
      ],
      "tags": [
        "Einstein equation",
        "curvature",
        "stress energy"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Classical general relativity"
      ],
      "variables": [
        "G_mn: Einstein tensor",
        "g_mn: metric",
        "T_mn: stress-energy tensor",
        "Lambda: cosmological constant"
      ],
      "regime": "Classical spacetime gravity.",
      "units": "Curvature terms and the stress-energy coupling both have inverse-length-squared dimensions.",
      "theoryRelationship": "defining field equation",
      "metadataReview": "explicit"
    },
    {
      "id": "geodesic-equation",
      "name": "Geodesic equation",
      "category": "Relativity & astrophysics",
      "latex": "\\frac{d^2x^\\mu}{d\\tau^2}+\\Gamma^\\mu_{\\alpha\\beta}\\frac{dx^\\alpha}{d\\tau}\\frac{dx^\\beta}{d\\tau}=0",
      "plain": "d2 x^mu/dtau2 + Gamma^mu_ab dx^a/dtau dx^b/dtau = 0",
      "description": "Equation of freely falling motion in a curved spacetime.",
      "theoryIds": [
        "general-relativity",
        "schwarzschild-spacetime",
        "kerr-spacetime"
      ],
      "sourceIds": [
        "einstein-gr-1916"
      ],
      "tags": [
        "geodesic",
        "free fall"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Test-particle motion",
        "No nongravitational force"
      ],
      "variables": [
        "tau: affine parameter/proper time",
        "Gamma: Christoffel symbols"
      ],
      "regime": "Classical general relativity.",
      "units": "Coordinate dependent; covariant equation is dimensionally consistent.",
      "theoryRelationship": "defining equation of motion",
      "metadataReview": "explicit"
    },
    {
      "id": "schwarzschild-metric",
      "name": "Schwarzschild metric",
      "category": "Relativity & astrophysics",
      "latex": "ds^2=-\\left(1-\\frac{2GM}{rc^2}\\right)c^2dt^2+\\left(1-\\frac{2GM}{rc^2}\\right)^{-1}dr^2+r^2d\\Omega^2",
      "plain": "ds^2 = -(1-2GM/rc^2)c^2dt^2 + (1-2GM/rc^2)^-1 dr^2 + r^2 dOmega^2",
      "description": "Standard Schwarzschild-coordinate form of the static spherical vacuum metric.",
      "theoryIds": [
        "schwarzschild-spacetime"
      ],
      "sourceIds": [
        "schwarzschild-1916"
      ],
      "tags": [
        "Schwarzschild",
        "black hole",
        "metric"
      ],
      "formulaType": "exact",
      "assumptions": [
        "Vacuum exterior",
        "Spherical symmetry",
        "Static geometry"
      ],
      "variables": [
        "M: gravitating mass",
        "r: areal radius",
        "dOmega^2: unit-sphere metric"
      ],
      "regime": "Exterior Schwarzschild spacetime in standard coordinates.",
      "units": "ds^2 has length-squared units.",
      "theoryRelationship": "exact solution metric",
      "metadataReview": "explicit"
    },
    {
      "id": "kerr-horizons",
      "name": "Kerr horizon radii",
      "category": "Relativity & astrophysics",
      "latex": "r_{\\pm}=\\frac{GM}{c^2}\\pm\\sqrt{\\left(\\frac{GM}{c^2}\\right)^2-a^2}",
      "plain": "r_pm = GM/c^2 +/- sqrt[(GM/c^2)^2-a^2]",
      "description": "Outer and inner horizon radii of the Kerr geometry in Boyer–Lindquist coordinates.",
      "theoryIds": [
        "kerr-spacetime"
      ],
      "sourceIds": [
        "kerr-1963"
      ],
      "tags": [
        "Kerr",
        "horizon",
        "spin"
      ],
      "formulaType": "exact",
      "assumptions": [
        "Uncharged Kerr solution",
        "a=J/(Mc) expressed as a length"
      ],
      "variables": [
        "M: mass",
        "J: angular momentum",
        "a: spin length parameter"
      ],
      "regime": "Subextremal or extremal Kerr spacetime.",
      "units": "r and a have length units.",
      "theoryRelationship": "exact horizon relation",
      "metadataReview": "explicit"
    },
    {
      "id": "stellar-hydrostatic",
      "name": "Stellar hydrostatic equilibrium",
      "category": "Astrophysical structure",
      "latex": "\\frac{dP}{dr}=-\\frac{Gm(r)\\rho(r)}{r^2}",
      "plain": "dP/dr = -G m(r) rho(r)/r^2",
      "description": "Newtonian radial force balance in a spherical star.",
      "theoryIds": [
        "stellar-structure",
        "lane-emden"
      ],
      "sourceIds": [
        "kippenhahn-stellar-2012"
      ],
      "tags": [
        "hydrostatic equilibrium",
        "star"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Spherical symmetry",
        "Quasistatic Newtonian star"
      ],
      "variables": [
        "P: pressure",
        "m(r): enclosed mass",
        "rho: density"
      ],
      "regime": "Ordinary stellar structure away from strong relativistic gravity.",
      "units": "Pressure gradient in Pa/m in SI.",
      "theoryRelationship": "core stellar-structure equation",
      "metadataReview": "explicit"
    },
    {
      "id": "stellar-mass-continuity",
      "name": "Stellar mass-continuity equation",
      "category": "Astrophysical structure",
      "latex": "\\frac{dm}{dr}=4\\pi r^2\\rho",
      "plain": "dm/dr = 4 pi r^2 rho",
      "description": "Enclosed stellar mass accumulated over spherical shells.",
      "theoryIds": [
        "stellar-structure",
        "lane-emden",
        "tov-stellar-structure"
      ],
      "sourceIds": [
        "kippenhahn-stellar-2012",
        "oppenheimer-volkoff-1939"
      ],
      "tags": [
        "stellar structure",
        "mass conservation"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Spherical symmetry"
      ],
      "variables": [
        "m(r): enclosed mass",
        "rho: density"
      ],
      "regime": "Spherical stellar/compact-object structure.",
      "units": "Mass per length on both sides.",
      "theoryRelationship": "core structure equation",
      "metadataReview": "explicit"
    },
    {
      "id": "stellar-luminosity",
      "name": "Stellar luminosity-generation equation",
      "category": "Astrophysical structure",
      "latex": "\\frac{dL}{dr}=4\\pi r^2\\rho\\,\\epsilon",
      "plain": "dL/dr = 4 pi r^2 rho epsilon",
      "description": "Local energy generation accumulated into stellar luminosity.",
      "theoryIds": [
        "stellar-structure"
      ],
      "sourceIds": [
        "kippenhahn-stellar-2012"
      ],
      "tags": [
        "stellar structure",
        "energy generation"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Spherical stellar model",
        "epsilon is net specific energy-generation rate"
      ],
      "variables": [
        "L: luminosity",
        "epsilon: energy generation per unit mass"
      ],
      "regime": "Standard one-dimensional stellar structure.",
      "units": "W/m on both sides in SI.",
      "theoryRelationship": "core stellar-structure equation",
      "metadataReview": "explicit"
    },
    {
      "id": "radiative-gradient",
      "name": "Radiative stellar temperature gradient",
      "category": "Astrophysical structure",
      "latex": "\\frac{dT}{dr}=-\\frac{3\\kappa\\rho L}{16\\pi a c\\,T^3 r^2}",
      "plain": "dT/dr = -3 kappa rho L /(16 pi a c T^3 r^2)",
      "description": "Temperature gradient for radiative diffusion in an optically thick spherical star.",
      "theoryIds": [
        "stellar-structure"
      ],
      "sourceIds": [
        "kippenhahn-stellar-2012"
      ],
      "tags": [
        "radiative diffusion",
        "stellar structure"
      ],
      "formulaType": "approximation",
      "assumptions": [
        "Diffusion approximation",
        "Spherical symmetry",
        "Optically thick medium"
      ],
      "variables": [
        "kappa: opacity",
        "a: radiation constant",
        "L: luminosity"
      ],
      "regime": "Radiative zones in stellar interiors.",
      "units": "Temperature gradient in K/m.",
      "theoryRelationship": "standard transport approximation",
      "metadataReview": "explicit"
    },
    {
      "id": "lane-emden-equation",
      "name": "Lane–Emden equation",
      "category": "Astrophysical structure",
      "latex": "\\frac{1}{\\xi^2}\\frac{d}{d\\xi}\\left(\\xi^2\\frac{d\\theta}{d\\xi}\\right)=-\\theta^n",
      "plain": "(1/xi^2) d/dxi (xi^2 dtheta/dxi) = -theta^n",
      "description": "Dimensionless equation for a spherical self-gravitating polytrope.",
      "theoryIds": [
        "lane-emden"
      ],
      "sourceIds": [
        "kippenhahn-stellar-2012"
      ],
      "tags": [
        "polytrope",
        "Lane-Emden"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Polytropic equation of state P=K rho^(1+1/n)",
        "Spherical Newtonian hydrostatic equilibrium"
      ],
      "variables": [
        "xi: dimensionless radius",
        "theta: dimensionless density variable",
        "n: polytropic index"
      ],
      "regime": "Newtonian polytropic spheres.",
      "units": "Dimensionless.",
      "theoryRelationship": "defining dimensionless equation",
      "metadataReview": "explicit"
    },
    {
      "id": "jeans-wavenumber",
      "name": "Jeans wavenumber",
      "category": "Astrophysical structure",
      "latex": "k_J^2=\\frac{4\\pi G\\rho_0}{c_s^2}",
      "plain": "k_J^2 = 4 pi G rho0/cs^2",
      "description": "Critical wavenumber separating pressure-supported and gravitationally unstable modes in the idealized Jeans analysis.",
      "theoryIds": [
        "jeans-instability"
      ],
      "sourceIds": [
        "bonnor-jeans-1957"
      ],
      "tags": [
        "Jeans",
        "instability",
        "collapse"
      ],
      "formulaType": "canonical",
      "assumptions": [
        "Uniform background",
        "Linear perturbations",
        "Barotropic sound speed c_s"
      ],
      "variables": [
        "rho0: background density",
        "c_s: sound speed"
      ],
      "regime": "Linear gravitational instability in a self-gravitating fluid.",
      "units": "k_J has inverse-length units.",
      "theoryRelationship": "canonical instability scale",
      "metadataReview": "explicit"
    },
    {
      "id": "chandrasekhar-mass",
      "name": "Chandrasekhar mass estimate",
      "category": "Compact objects",
      "latex": "M_{\\rm Ch}\\simeq\\frac{5.83}{\\mu_e^2}M_\\odot",
      "plain": "M_Ch ~= 5.83/mu_e^2 solar masses",
      "description": "Composition-dependent limiting mass for an ideal cold relativistically degenerate white dwarf.",
      "theoryIds": [
        "chandrasekhar-limit"
      ],
      "sourceIds": [
        "chandrasekhar-milne-1931",
        "kippenhahn-stellar-2012"
      ],
      "tags": [
        "white dwarf",
        "Chandrasekhar"
      ],
      "formulaType": "approximation",
      "assumptions": [
        "Cold ideal fully degenerate electron gas",
        "Newtonian gravity with relativistic electron equation of state"
      ],
      "variables": [
        "mu_e: mean molecular weight per electron",
        "M_sun: solar mass"
      ],
      "regime": "Idealized white-dwarf limiting configuration.",
      "units": "Mass.",
      "theoryRelationship": "canonical limiting estimate",
      "metadataReview": "explicit"
    },
    {
      "id": "tov-equation",
      "name": "Tolman–Oppenheimer–Volkoff equation",
      "category": "Compact objects",
      "latex": "\\frac{dP}{dr}=-\\frac{G\\left(\\rho+P/c^2\\right)\\left(m+4\\pi r^3P/c^2\\right)}{r^2\\left(1-2Gm/(rc^2)\\right)}",
      "plain": "dP/dr = -G(rho+P/c^2)(m+4 pi r^3 P/c^2)/[r^2(1-2Gm/rc^2)]",
      "description": "Relativistic hydrostatic-equilibrium equation for a spherical perfect-fluid star.",
      "theoryIds": [
        "tov-stellar-structure"
      ],
      "sourceIds": [
        "oppenheimer-volkoff-1939"
      ],
      "tags": [
        "TOV",
        "neutron star",
        "GR"
      ],
      "formulaType": "exact",
      "assumptions": [
        "Static spherical spacetime",
        "Perfect fluid",
        "rho is mass density under the displayed convention"
      ],
      "variables": [
        "P: pressure",
        "rho: mass density",
        "m(r): enclosed gravitational mass"
      ],
      "regime": "Relativistic stellar structure.",
      "units": "Pressure gradient in Pa/m under SI convention.",
      "theoryRelationship": "defining equilibrium equation",
      "metadataReview": "explicit"
    },
    {
      "id": "eddington-luminosity",
      "name": "Eddington luminosity",
      "category": "Astrophysical structure",
      "latex": "L_{\\rm Edd}=\\frac{4\\pi GMc}{\\kappa}",
      "plain": "L_Edd = 4 pi G M c / kappa",
      "description": "Luminosity at which radiative acceleration balances gravity for opacity κ.",
      "theoryIds": [
        "eddington-limit",
        "stellar-structure"
      ],
      "sourceIds": [
        "kippenhahn-stellar-2012"
      ],
      "tags": [
        "Eddington",
        "radiation pressure"
      ],
      "formulaType": "canonical",
      "assumptions": [
        "Spherical steady radiation field",
        "Opacity represented by flux-mean kappa"
      ],
      "variables": [
        "M: gravitating mass",
        "kappa: opacity"
      ],
      "regime": "Radiatively supported ionized astrophysical gas.",
      "units": "Luminosity in watts in SI.",
      "theoryRelationship": "canonical limiting luminosity",
      "metadataReview": "explicit"
    },
    {
      "id": "bondi-rate",
      "name": "Bondi accretion rate",
      "category": "Accretion astrophysics",
      "latex": "\\dot M_B=4\\pi\\lambda\\frac{(GM)^2\\rho_\\infty}{c_{s,\\infty}^3}",
      "plain": "Mdot_B = 4 pi lambda (GM)^2 rho_inf / cs_inf^3",
      "description": "Canonical steady spherical accretion rate for a polytropic gas.",
      "theoryIds": [
        "bondi-accretion"
      ],
      "sourceIds": [
        "bondi-1952"
      ],
      "tags": [
        "Bondi",
        "accretion"
      ],
      "formulaType": "canonical",
      "assumptions": [
        "Steady spherical flow",
        "Gas at rest at infinity",
        "Polytropic equation of state"
      ],
      "variables": [
        "lambda: equation-of-state factor",
        "rho_inf: ambient density",
        "c_s,inf: ambient sound speed"
      ],
      "regime": "Bondi spherical accretion.",
      "units": "Mass per time.",
      "theoryRelationship": "canonical accretion-rate scaling",
      "metadataReview": "explicit"
    },
    {
      "id": "alpha-viscosity",
      "name": "Shakura–Sunyaev α viscosity",
      "category": "Accretion astrophysics",
      "latex": "\\nu=\\alpha c_s H",
      "plain": "nu = alpha c_s H",
      "description": "Phenomenological turbulent kinematic-viscosity prescription for a thin disk.",
      "theoryIds": [
        "shakura-sunyaev-disk"
      ],
      "sourceIds": [
        "shakura-sunyaev-1973"
      ],
      "tags": [
        "alpha disk",
        "viscosity"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Thin-disk phenomenology",
        "Subsonic turbulent stress parameterized by alpha"
      ],
      "variables": [
        "nu: kinematic viscosity",
        "alpha: dimensionless stress parameter",
        "H: disk scale height"
      ],
      "regime": "Shakura–Sunyaev thin-disk model.",
      "units": "nu has area-per-time units.",
      "theoryRelationship": "defining closure prescription",
      "metadataReview": "explicit"
    },
    {
      "id": "thin-disk-flux",
      "name": "Newtonian thin-disk radiative flux",
      "category": "Accretion astrophysics",
      "latex": "F(r)=\\frac{3GM\\dot M}{8\\pi r^3}\\left[1-\\left(\\frac{r_{\\rm in}}{r}\\right)^{1/2}\\right]",
      "plain": "F(r)=3 G M Mdot/(8 pi r^3) [1-sqrt(r_in/r)]",
      "description": "Standard steady thin-disk surface flux with a zero-torque inner-boundary approximation.",
      "theoryIds": [
        "shakura-sunyaev-disk"
      ],
      "sourceIds": [
        "shakura-sunyaev-1973"
      ],
      "tags": [
        "thin disk",
        "radiative flux"
      ],
      "formulaType": "approximation",
      "assumptions": [
        "Newtonian Keplerian thin disk",
        "Steady accretion",
        "Zero torque at inner radius"
      ],
      "variables": [
        "Mdot: mass accretion rate",
        "r_in: inner disk radius"
      ],
      "regime": "Outer/nonrelativistic Shakura–Sunyaev disk.",
      "units": "Energy flux per unit area.",
      "theoryRelationship": "canonical thin-disk limit",
      "metadataReview": "explicit"
    },
    {
      "id": "bz-power",
      "name": "Blandford–Znajek power scaling",
      "category": "Accretion astrophysics",
      "latex": "P_{\\rm BZ}\\sim\\frac{\\kappa}{4\\pi c}\\Phi_{\\rm BH}^2\\Omega_H^2",
      "plain": "P_BZ ~ kappa Phi_BH^2 Omega_H^2/(4 pi c)",
      "description": "Leading scaling of electromagnetic power extracted from a spinning magnetized black hole.",
      "theoryIds": [
        "blandford-znajek",
        "kerr-spacetime"
      ],
      "sourceIds": [
        "blandford-znajek-1977"
      ],
      "tags": [
        "BZ",
        "jet",
        "black hole"
      ],
      "formulaType": "schematic",
      "assumptions": [
        "Stationary axisymmetric magnetosphere",
        "Coefficient kappa depends on magnetic geometry and convention"
      ],
      "variables": [
        "Phi_BH: horizon magnetic flux",
        "Omega_H: horizon angular frequency"
      ],
      "regime": "Force-free/relativistic black-hole magnetosphere.",
      "units": "Power.",
      "theoryRelationship": "schematic power scaling",
      "metadataReview": "explicit"
    },
    {
      "id": "ideal-mhd-ohm",
      "name": "Ideal-MHD Ohm law",
      "category": "Plasma astrophysics",
      "latex": "\\mathbf E+\\mathbf v\\times\\mathbf B=0",
      "plain": "E + v x B = 0",
      "description": "Infinite-conductivity condition in ideal magnetohydrodynamics.",
      "theoryIds": [
        "ideal-mhd"
      ],
      "sourceIds": [
        "goedbloed-poedts-mhd-2004"
      ],
      "tags": [
        "MHD",
        "flux freezing"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Infinite electrical conductivity",
        "Single-fluid ideal MHD"
      ],
      "variables": [
        "E: electric field",
        "v: fluid velocity",
        "B: magnetic field"
      ],
      "regime": "Ideal magnetohydrodynamics.",
      "units": "SI electric-field units on both terms.",
      "theoryRelationship": "defining ideal-MHD condition",
      "metadataReview": "explicit"
    },
    {
      "id": "mhd-induction",
      "name": "Ideal-MHD induction equation",
      "category": "Plasma astrophysics",
      "latex": "\\frac{\\partial\\mathbf B}{\\partial t}=\\nabla\\times(\\mathbf v\\times\\mathbf B)",
      "plain": "dB/dt = curl(v x B)",
      "description": "Magnetic-field evolution implied by Faraday's law and ideal conductivity.",
      "theoryIds": [
        "ideal-mhd"
      ],
      "sourceIds": [
        "goedbloed-poedts-mhd-2004"
      ],
      "tags": [
        "MHD",
        "induction",
        "magnetic field"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Ideal Ohm law",
        "div B = 0"
      ],
      "variables": [
        "B: magnetic field",
        "v: fluid velocity"
      ],
      "regime": "Ideal magnetohydrodynamics.",
      "units": "Magnetic field per time.",
      "theoryRelationship": "core evolution equation",
      "metadataReview": "explicit"
    },
    {
      "id": "synchrotron-critical-frequency",
      "name": "Synchrotron critical frequency",
      "category": "Radiative astrophysics",
      "latex": "\\nu_c=\\frac{3}{4\\pi}\\gamma^2\\frac{eB}{m_e}\\sin\\alpha",
      "plain": "nu_c = (3/4pi) gamma^2 (eB/m_e) sin alpha",
      "description": "Characteristic synchrotron radiation frequency in SI-like angular-frequency conventions without an extra c in the gyrofrequency.",
      "theoryIds": [
        "synchrotron-radiation"
      ],
      "sourceIds": [
        "rybicki-lightman-1985"
      ],
      "tags": [
        "synchrotron",
        "critical frequency"
      ],
      "formulaType": "canonical",
      "assumptions": [
        "Ultrarelativistic electron",
        "Uniform local magnetic field"
      ],
      "variables": [
        "gamma: electron Lorentz factor",
        "alpha: pitch angle"
      ],
      "regime": "Relativistic synchrotron radiation.",
      "units": "Frequency in s^-1 under the displayed SI convention.",
      "theoryRelationship": "canonical characteristic frequency",
      "metadataReview": "explicit"
    },
    {
      "id": "shock-power-law-index",
      "name": "Strong-shock diffusive-acceleration index",
      "category": "High-energy astrophysics",
      "latex": "p=\\frac{r+2}{r-1}\\;\\xrightarrow{r=4}\\;2",
      "plain": "p = (r+2)/(r-1), strong shock r=4 gives p=2",
      "description": "Test-particle energy-spectrum index for nonrelativistic diffusive shock acceleration.",
      "theoryIds": [
        "diffusive-shock-acceleration"
      ],
      "sourceIds": [
        "drury-shock-1983"
      ],
      "tags": [
        "shock acceleration",
        "cosmic rays"
      ],
      "formulaType": "approximation",
      "assumptions": [
        "Test-particle limit",
        "Steady planar nonrelativistic shock",
        "Isotropic diffusion"
      ],
      "variables": [
        "r: compression ratio",
        "p: energy-spectrum index"
      ],
      "regime": "First-order Fermi acceleration at strong nonrelativistic shocks.",
      "units": "Dimensionless.",
      "theoryRelationship": "canonical test-particle result",
      "metadataReview": "explicit"
    },
    {
      "id": "flrw-metric",
      "name": "FLRW metric",
      "category": "Cosmology & dark sector",
      "latex": "ds^2=-c^2dt^2+a^2(t)\\left[\\frac{dr^2}{1-kr^2}+r^2d\\Omega^2\\right]",
      "plain": "ds^2 = -c^2 dt^2 + a(t)^2 [dr^2/(1-k r^2)+r^2 dOmega^2]",
      "description": "Homogeneous and isotropic cosmological spacetime metric.",
      "theoryIds": [
        "flrw-cosmology",
        "lambda-cdm"
      ],
      "sourceIds": [
        "lemaitre-1931"
      ],
      "tags": [
        "FLRW",
        "metric",
        "cosmology"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Homogeneity",
        "Isotropy"
      ],
      "variables": [
        "a(t): scale factor",
        "k: spatial-curvature parameter"
      ],
      "regime": "FLRW cosmology.",
      "units": "ds^2 has length-squared units.",
      "theoryRelationship": "defining spacetime metric",
      "metadataReview": "explicit"
    },
    {
      "id": "lcdm-hubble",
      "name": "Flat ΛCDM Hubble relation",
      "category": "Cosmology & dark sector",
      "latex": "H^2(z)=H_0^2\\left[\\Omega_r(1+z)^4+\\Omega_m(1+z)^3+\\Omega_\\Lambda\\right]",
      "plain": "H(z)^2 = H0^2 [Omega_r(1+z)^4 + Omega_m(1+z)^3 + Omega_Lambda]",
      "description": "Background expansion rate for spatially flat radiation+matter+cosmological-constant ΛCDM, neglecting additional components.",
      "theoryIds": [
        "lambda-cdm",
        "flrw-cosmology"
      ],
      "sourceIds": [
        "planck-cosmology-2018"
      ],
      "tags": [
        "Lambda CDM",
        "Hubble",
        "dark energy"
      ],
      "formulaType": "canonical",
      "assumptions": [
        "Spatial flatness",
        "Standard radiation, nonrelativistic matter and cosmological constant"
      ],
      "variables": [
        "z: redshift",
        "Omega_i: present density fractions"
      ],
      "regime": "Base flat ΛCDM background.",
      "units": "H has inverse-time units.",
      "theoryRelationship": "canonical background relation",
      "metadataReview": "explicit"
    },
    {
      "id": "ltb-evolution",
      "name": "LTB areal-radius evolution equation",
      "category": "Cosmology & dark sector",
      "latex": "\\dot R^2(t,r)=\\frac{2GM(r)}{R(t,r)}+2E(r)+\\frac{\\Lambda c^2}{3}R^2(t,r)",
      "plain": "Rdot^2 = 2 G M(r)/R + 2 E(r) + Lambda c^2 R^2/3",
      "description": "Standard LTB radial evolution equation including an optional cosmological constant.",
      "theoryIds": [
        "ltb-cosmology"
      ],
      "sourceIds": [
        "tolman-inhomogeneity-1934"
      ],
      "tags": [
        "LTB",
        "inhomogeneous cosmology"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Spherical dust spacetime",
        "Conventional LTB radial functions"
      ],
      "variables": [
        "R(t,r): areal radius",
        "M(r): mass function",
        "E(r): energy/curvature function"
      ],
      "regime": "Lemaître–Tolman–Bondi cosmology.",
      "units": "Terms have velocity-squared units.",
      "theoryRelationship": "defining evolution equation",
      "metadataReview": "explicit"
    },
    {
      "id": "press-schechter-fraction",
      "name": "Press–Schechter collapsed fraction",
      "category": "Cosmology & dark sector",
      "latex": "F(>M)=\\operatorname{erfc}\\!\\left[\\frac{\\delta_c}{\\sqrt{2}\\,\\sigma(M)}\\right]",
      "plain": "F(>M) = erfc[delta_c/(sqrt(2) sigma(M))]",
      "description": "Canonical Press–Schechter fraction of matter assigned to collapsed halos above mass M.",
      "theoryIds": [
        "press-schechter"
      ],
      "sourceIds": [
        "press-schechter-1974"
      ],
      "tags": [
        "Press-Schechter",
        "halo mass function"
      ],
      "formulaType": "canonical",
      "assumptions": [
        "Gaussian linear density field",
        "Spherical-collapse threshold",
        "Traditional factor-of-two prescription"
      ],
      "variables": [
        "delta_c: collapse threshold",
        "sigma(M): smoothed rms density contrast"
      ],
      "regime": "Analytic hierarchical structure-formation estimate.",
      "units": "Dimensionless fraction.",
      "theoryRelationship": "canonical abundance relation",
      "metadataReview": "explicit"
    },
    {
      "id": "nfw-density",
      "name": "NFW halo density profile",
      "category": "Cosmology & dark sector",
      "latex": "\\rho(r)=\\frac{\\rho_s}{(r/r_s)(1+r/r_s)^2}",
      "plain": "rho(r) = rho_s / [(r/r_s)(1+r/r_s)^2]",
      "description": "Navarro–Frenk–White collisionless dark-matter halo density profile.",
      "theoryIds": [
        "nfw-halo"
      ],
      "sourceIds": [
        "nfw-1997"
      ],
      "tags": [
        "NFW",
        "halo",
        "dark matter"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Spherically averaged halo profile"
      ],
      "variables": [
        "rho_s: scale density",
        "r_s: scale radius"
      ],
      "regime": "Empirical/simulation-motivated halo modeling.",
      "units": "Density.",
      "theoryRelationship": "defining profile",
      "metadataReview": "explicit"
    },
    {
      "id": "mond-interpolation",
      "name": "MOND acceleration relation",
      "category": "Cosmology & dark sector",
      "latex": "\\mu\\!\\left(\\frac{a}{a_0}\\right)\\,a=a_N",
      "plain": "mu(a/a0) a = a_N",
      "description": "Generic MOND interpolation between Newtonian and low-acceleration regimes.",
      "theoryIds": [
        "mond"
      ],
      "sourceIds": [
        "milgrom-mond-1983"
      ],
      "tags": [
        "MOND",
        "modified gravity"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Phenomenological interpolation function mu(x) with Newtonian and deep-MOND limits"
      ],
      "variables": [
        "a: physical acceleration",
        "a_N: Newtonian acceleration",
        "a0: MOND acceleration scale"
      ],
      "regime": "Nonrelativistic MOND phenomenology.",
      "units": "Acceleration.",
      "theoryRelationship": "defining phenomenological relation",
      "metadataReview": "explicit"
    },
    {
      "id": "mond-deep",
      "name": "Deep-MOND acceleration",
      "category": "Cosmology & dark sector",
      "latex": "a\\simeq\\sqrt{a_0a_N}",
      "plain": "a ~= sqrt(a0 a_N)",
      "description": "Low-acceleration MOND limit for isolated systems.",
      "theoryIds": [
        "mond"
      ],
      "sourceIds": [
        "milgrom-mond-1983"
      ],
      "tags": [
        "MOND",
        "deep MOND"
      ],
      "formulaType": "limit",
      "assumptions": [
        "a << a0",
        "Standard deep-MOND interpolation limit"
      ],
      "variables": [
        "a0: MOND acceleration constant",
        "a_N: Newtonian acceleration"
      ],
      "regime": "Deep-MOND low-acceleration regime.",
      "units": "Acceleration.",
      "theoryRelationship": "defining low-acceleration limit",
      "metadataReview": "explicit"
    },
    {
      "id": "teves-physical-metric",
      "name": "TeVeS physical metric relation",
      "category": "Cosmology & dark sector",
      "latex": "\\tilde g_{\\mu\\nu}=e^{-2\\phi}g_{\\mu\\nu}-2\\,U_\\mu U_\\nu\\sinh(2\\phi)",
      "plain": "gtilde_mn = exp(-2 phi) g_mn - 2 U_m U_n sinh(2 phi)",
      "description": "Relation between Einstein-frame metric, scalar field, vector field and the physical metric in TeVeS.",
      "theoryIds": [
        "teves"
      ],
      "sourceIds": [
        "bekenstein-teves-2004"
      ],
      "tags": [
        "TeVeS",
        "physical metric",
        "MOND"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Bekenstein TeVeS conventions",
        "Unit timelike vector U"
      ],
      "variables": [
        "phi: scalar field",
        "U_mu: TeVeS vector field",
        "g_mn: Einstein metric"
      ],
      "regime": "Tensor–vector–scalar gravity.",
      "units": "Metric components dimensionless in standard coordinate convention.",
      "theoryRelationship": "defining metric relation",
      "metadataReview": "explicit"
    },
    {
      "id": "pbh-dark-fraction",
      "name": "Primordial-black-hole dark-matter fraction",
      "category": "Cosmology & dark sector",
      "latex": "f_{\\rm PBH}(M)=\\frac{1}{\\Omega_{\\rm DM}}\\frac{d\\Omega_{\\rm PBH}}{d\\ln M}",
      "plain": "f_PBH(M) = (1/Omega_DM) dOmega_PBH/d ln M",
      "description": "Common definition of the differential PBH dark-matter fraction per logarithmic mass interval.",
      "theoryIds": [
        "pbh-dark-matter"
      ],
      "sourceIds": [
        "green-kavanagh-pbh-2021"
      ],
      "tags": [
        "PBH",
        "dark matter",
        "mass function"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Mass-distributed PBH population"
      ],
      "variables": [
        "Omega_PBH: PBH density fraction",
        "Omega_DM: total dark-matter density fraction"
      ],
      "regime": "Primordial-black-hole dark-matter phenomenology.",
      "units": "Dimensionless per logarithmic mass interval.",
      "theoryRelationship": "defining abundance measure",
      "metadataReview": "explicit"
    },
    {
      "id": "wimp-boltzmann",
      "name": "Thermal WIMP number-density equation",
      "category": "Cosmology & dark sector",
      "latex": "\\dot n+3Hn=-\\langle\\sigma v\\rangle\\left(n^2-n_{\\rm eq}^2\\right)",
      "plain": "ndot + 3 H n = -<sigma v>(n^2 - n_eq^2)",
      "description": "Boltzmann equation governing thermal relic freeze-out for a stable annihilating species.",
      "theoryIds": [
        "wimp-dark-matter"
      ],
      "sourceIds": [
        "jungman-wimp-1996"
      ],
      "tags": [
        "WIMP",
        "freezeout",
        "Boltzmann"
      ],
      "formulaType": "canonical",
      "assumptions": [
        "Homogeneous expanding universe",
        "Thermally averaged annihilation rate",
        "Stable relic after freeze-out"
      ],
      "variables": [
        "n: WIMP number density",
        "H: Hubble rate",
        "<sigma v>: annihilation rate coefficient"
      ],
      "regime": "Thermal WIMP freeze-out.",
      "units": "Number density per time on both sides.",
      "theoryRelationship": "canonical relic-abundance equation",
      "metadataReview": "explicit"
    },
    {
      "id": "axion-field-eom",
      "name": "Homogeneous axion misalignment equation",
      "category": "Cosmology & dark sector",
      "latex": "\\ddot a+3H\\dot a+m_a^2(T)a\\simeq0",
      "plain": "addot + 3 H adot + m_a(T)^2 a ~= 0",
      "description": "Small-angle homogeneous axion-field equation used in the misalignment mechanism.",
      "theoryIds": [
        "axion-dark-matter"
      ],
      "sourceIds": [
        "preskill-axion-1983"
      ],
      "tags": [
        "axion",
        "misalignment",
        "dark matter"
      ],
      "formulaType": "approximation",
      "assumptions": [
        "Homogeneous field",
        "Small-angle harmonic approximation near the axion-potential minimum"
      ],
      "variables": [
        "a: axion field amplitude",
        "m_a(T): temperature-dependent axion mass"
      ],
      "regime": "Early-universe axion misalignment dynamics.",
      "units": "Natural units are normally used.",
      "theoryRelationship": "canonical misalignment approximation",
      "metadataReview": "explicit"
    },
    {
      "id": "quintessence-eom",
      "name": "Quintessence field equation",
      "category": "Cosmology & dark sector",
      "latex": "\\ddot\\phi+3H\\dot\\phi+\\frac{dV}{d\\phi}=0",
      "plain": "phiddot + 3 H phidot + dV/dphi = 0",
      "description": "Homogeneous Klein–Gordon equation for a minimally coupled quintessence field in FLRW spacetime.",
      "theoryIds": [
        "quintessence"
      ],
      "sourceIds": [
        "caldwell-quintessence-1998"
      ],
      "tags": [
        "quintessence",
        "dark energy",
        "scalar field"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Canonical minimally coupled scalar field",
        "Homogeneous FLRW background"
      ],
      "variables": [
        "phi: scalar field",
        "V(phi): potential",
        "H: Hubble rate"
      ],
      "regime": "Canonical quintessence cosmology.",
      "units": "Usually expressed in natural units.",
      "theoryRelationship": "defining background equation",
      "metadataReview": "explicit"
    },
    {
      "id": "quintessence-rho-p",
      "name": "Quintessence energy density and pressure",
      "category": "Cosmology & dark sector",
      "latex": "\\rho_\\phi=\\frac12\\dot\\phi^2+V(\\phi),\\qquad p_\\phi=\\frac12\\dot\\phi^2-V(\\phi)",
      "plain": "rho_phi = 1/2 phidot^2 + V; p_phi = 1/2 phidot^2 - V",
      "description": "Effective perfect-fluid density and pressure of a homogeneous canonical scalar field.",
      "theoryIds": [
        "quintessence"
      ],
      "sourceIds": [
        "caldwell-quintessence-1998"
      ],
      "tags": [
        "quintessence",
        "equation of state"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Canonical scalar kinetic term",
        "Homogeneous field"
      ],
      "variables": [
        "rho_phi: field energy density",
        "p_phi: field pressure"
      ],
      "regime": "Canonical quintessence.",
      "units": "Energy density/pressure.",
      "theoryRelationship": "defining effective-fluid relation",
      "metadataReview": "explicit"
    },
    {
      "id": "cosmic-string-deficit",
      "name": "Cosmic-string conical deficit angle",
      "category": "Cosmology & dark sector",
      "latex": "\\Delta=\\frac{8\\pi G\\mu}{c^2}",
      "plain": "Delta = 8 pi G mu / c^2",
      "description": "Conical deficit angle outside an ideal straight thin cosmic string.",
      "theoryIds": [
        "cosmic-strings"
      ],
      "sourceIds": [
        "kibble-cosmic-strings-1976"
      ],
      "tags": [
        "cosmic string",
        "deficit angle"
      ],
      "formulaType": "canonical",
      "assumptions": [
        "Ideal thin straight string",
        "Locally flat exterior in the simplest string solution"
      ],
      "variables": [
        "mu: string mass per unit length/tension"
      ],
      "regime": "Classical gravitational field of an ideal cosmic string.",
      "units": "Dimensionless angle in radians.",
      "theoryRelationship": "canonical gravitational signature",
      "metadataReview": "explicit"
    },
    {
      "id": "de-sitter-hubble",
      "name": "de Sitter Hubble–cosmological-constant relation",
      "category": "Cosmology & dark sector",
      "latex": "H^2=\\frac{\\Lambda c^2}{3}",
      "plain": "H^2 = Lambda c^2/3",
      "description": "Expansion rate of four-dimensional de Sitter spacetime in a flat exponentially expanding slicing.",
      "theoryIds": [
        "de-sitter-spacetime"
      ],
      "sourceIds": [
        "desitter-1917"
      ],
      "tags": [
        "de Sitter",
        "cosmological constant",
        "Hubble"
      ],
      "formulaType": "exact",
      "assumptions": [
        "Four-dimensional vacuum Einstein equation with positive cosmological constant",
        "Flat expanding slicing"
      ],
      "variables": [
        "H: de Sitter Hubble parameter",
        "Lambda: cosmological constant"
      ],
      "regime": "Four-dimensional de Sitter spacetime.",
      "units": "Both sides have inverse-time-squared units.",
      "theoryRelationship": "exact curvature/expansion relation",
      "metadataReview": "explicit"
    },
    {
      "id": "ads-curvature-radius",
      "name": "AdS curvature-radius relation",
      "category": "Relativity & astrophysics",
      "latex": "R_{\\mu\\nu}=\\Lambda g_{\\mu\\nu},\\qquad \\Lambda=-\\frac{3}{L^2}",
      "plain": "R_mn = Lambda g_mn, Lambda = -3/L^2",
      "description": "Four-dimensional anti-de Sitter spacetime as a maximally symmetric Einstein space with negative cosmological constant.",
      "theoryIds": [
        "anti-de-sitter-spacetime"
      ],
      "sourceIds": [
        "sokolowski-ads-2016"
      ],
      "tags": [
        "AdS",
        "negative cosmological constant",
        "curvature"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Four spacetime dimensions",
        "Vacuum Einstein equation with negative cosmological constant"
      ],
      "variables": [
        "R_mn: Ricci tensor",
        "L: AdS curvature radius",
        "Lambda: negative cosmological constant"
      ],
      "regime": "Four-dimensional anti-de Sitter spacetime.",
      "units": "Lambda and 1/L^2 have inverse-length-squared units.",
      "theoryRelationship": "defining constant-curvature relation",
      "metadataReview": "explicit"
    },
    {
      "id": "alcubierre-metric",
      "name": "Alcubierre warp-drive metric",
      "category": "Relativity & astrophysics",
      "latex": "ds^2=-c^2dt^2+\\left[dx-v_s(t)f(r_s)dt\\right]^2+dy^2+dz^2",
      "plain": "ds^2 = -c^2 dt^2 + [dx - v_s(t) f(r_s) dt]^2 + dy^2 + dz^2",
      "description": "Canonical form of the Alcubierre warp-bubble line element for motion along the x direction.",
      "theoryIds": [
        "alcubierre-warp-drive",
        "general-relativity"
      ],
      "sourceIds": [
        "alcubierre-1994"
      ],
      "tags": [
        "Alcubierre",
        "warp drive",
        "metric"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Chosen Cartesian-like coordinates",
        "Warp-bubble center moves along x",
        "Shape function f approaches one inside and zero outside"
      ],
      "variables": [
        "v_s(t): coordinate velocity of bubble center",
        "r_s: distance from bubble center",
        "f: warp shape function"
      ],
      "regime": "Alcubierre's original general-relativistic warp geometry.",
      "units": "ds^2 has length-squared units when time is multiplied by c.",
      "theoryRelationship": "defining exact metric ansatz",
      "metadataReview": "explicit"
    },
    {
      "id": "cpt-universe-tetrad",
      "name": "CPT-symmetric-universe tetrad condition",
      "category": "Cosmology & dark sector",
      "latex": "e^{a}{}_{\\mu}(\\tau,\\mathbf x)=-e^{a}{}_{\\mu}(-\\tau,\\mathbf x)",
      "plain": "e^a_mu(tau,x) = - e^a_mu(-tau,x)",
      "description": "Central spacetime symmetry condition used to analytically extend the tetrad geometry across the big bang in the CPT-symmetric-universe proposal.",
      "theoryIds": [
        "cpt-symmetric-universe"
      ],
      "sourceIds": [
        "boyle-finn-turok-2018"
      ],
      "tags": [
        "CPT",
        "tetrad",
        "big bang",
        "time reversal"
      ],
      "formulaType": "defining",
      "assumptions": [
        "Flat FRW background continued through conformal time tau=0",
        "Tetrad formulation with the conventions of Boyle, Finn and Turok"
      ],
      "variables": [
        "e^a_mu: tetrad",
        "tau: conformal time",
        "x: comoving spatial coordinate"
      ],
      "regime": "CPT-symmetric-universe proposal near and across the bang.",
      "units": "Tetrad convention dependent.",
      "theoryRelationship": "defining CPT spacetime symmetry",
      "metadataReview": "explicit"
    },
    {
      "id": "cns-fitness-condition",
      "name": "Cosmological-natural-selection fitness condition",
      "category": "Cosmology & dark sector",
      "latex": "B(p+\\delta p)\\lesssim B(p)",
      "plain": "B(p + delta p) <= approximately B(p)",
      "description": "Schematic local-optimality prediction of cosmological natural selection: small parameter changes away from observed values should not increase black-hole production.",
      "theoryIds": [
        "cosmological-natural-selection"
      ],
      "sourceIds": [
        "smolin-evolve-1992"
      ],
      "tags": [
        "cosmological natural selection",
        "black holes",
        "fitness"
      ],
      "formulaType": "schematic",
      "assumptions": [
        "B(p) denotes expected black-hole production for cosmological/particle parameters p",
        "Observed parameters lie near a local maximum under the proposal"
      ],
      "variables": [
        "p: vector of dimensionless physical parameters",
        "B(p): black-hole production measure"
      ],
      "regime": "Cosmological natural selection hypothesis.",
      "units": "B is a count/fitness measure; parameter units depend on chosen dimensionless parametrization.",
      "theoryRelationship": "schematic falsifiability/fitness condition",
      "metadataReview": "explicit"
    },
    {
      "id": "inflation-acceleration-condition",
      "name": "Inflationary acceleration condition",
      "category": "Cosmology & dark sector",
      "latex": "\\ddot a>0",
      "plain": "d^2 a/dt^2 > 0",
      "description": "Kinematic condition defining accelerated expansion of the cosmological scale factor during an inflationary phase.",
      "theoryIds": ["cosmic-inflation"],
      "sourceIds": ["guth-inflation-1981"],
      "tags": ["inflation","scale factor","accelerated expansion"],
      "formulaType": "defining",
      "assumptions": ["Homogeneous and isotropic FLRW background"],
      "variables": ["a(t): cosmological scale factor","t: cosmic proper time"],
      "regime": "Background cosmological expansion during an inflationary epoch.",
      "units": "a is conventionally dimensionless; d²a/dt² has inverse-time-squared units when a is dimensionless.",
      "theoryRelationship": "defining kinematic condition",
      "metadataReview": "explicit"
    },
    {
      "id": "bbn-neutron-proton-ratio",
      "name": "BBN neutron–proton equilibrium ratio",
      "category": "Cosmology & dark sector",
      "latex": "\\frac{n_n}{n_p}\\simeq\\exp\\!\\left[-\\frac{(m_n-m_p)c^2}{k_B T}\\right]",
      "plain": "n_n/n_p ~= exp[-(m_n-m_p)c^2/(k_B T)]",
      "description": "Approximate neutron-to-proton abundance ratio while weak interactions maintain thermal equilibrium before freeze-out.",
      "theoryIds": ["big-bang-nucleosynthesis"],
      "sourceIds": ["alpher-bethe-gamow-1948"],
      "tags": ["BBN","neutron proton ratio","freeze-out"],
      "formulaType": "approximation",
      "assumptions": ["Thermal/chemical equilibrium for neutron-proton interconversion","Neglect of small chemical potentials and later neutron decay in the displayed ratio"],
      "variables": ["n_n,n_p: neutron and proton number densities","m_n,m_p: neutron and proton masses","T: plasma temperature"],
      "regime": "Hot early universe prior to or near weak-interaction freeze-out.",
      "units": "Exponent is dimensionless.",
      "theoryRelationship": "canonical approximation controlling primordial neutron availability",
      "metadataReview": "explicit"
    },
    {
      "id": "gravitational-wave-quadrupole-power",
      "name": "Gravitational-wave quadrupole power",
      "category": "Relativity & astrophysics",
      "latex": "P=\\frac{G}{5c^5}\\left\\langle \\dddot Q_{ij}\\dddot Q_{ij}\\right\\rangle",
      "plain": "P = G/(5 c^5) <Q'''_ij Q'''_ij>",
      "description": "Leading weak-field gravitational-radiation power in terms of the third time derivative of the trace-free mass quadrupole.",
      "theoryIds": ["gravitational-wave-theory","general-relativity"],
      "sourceIds": ["peters-mathews-gw-1963","einstein-gr-1916"],
      "tags": ["gravitational waves","quadrupole","radiated power"],
      "formulaType": "approximation",
      "assumptions": ["Weak gravitational field in the wave-generation zone","Source motions nonrelativistic compared with c","Leading quadrupole order"],
      "variables": ["Q_ij: trace-free mass quadrupole tensor","P: radiated gravitational-wave power"],
      "regime": "Slow-motion weak-field radiation; not a replacement for full numerical relativity in strong-field mergers.",
      "units": "P has units of power.",
      "theoryRelationship": "canonical leading-order radiation formula",
      "metadataReview": "explicit"
    },
    {
      "id": "einstein-lens-angle",
      "name": "Point-mass Einstein angle",
      "category": "Relativity & astrophysics",
      "latex": "\\theta_E=\\sqrt{\\frac{4GM}{c^2}\\frac{D_{LS}}{D_LD_S}}",
      "plain": "theta_E = sqrt[(4GM/c^2) D_LS/(D_L D_S)]",
      "description": "Angular Einstein-ring scale for an isolated point-mass lens in the thin-lens approximation.",
      "theoryIds": ["gravitational-lensing","general-relativity"],
      "sourceIds": ["einstein-lensing-1936","einstein-gr-1916"],
      "tags": ["gravitational lensing","Einstein ring","point lens"],
      "formulaType": "canonical",
      "assumptions": ["Point-mass lens","Thin-lens and small-angle approximations","Standard angular-diameter distance geometry"],
      "variables": ["M: lens mass","D_L: observer-lens distance","D_S: observer-source distance","D_LS: lens-source distance"],
      "regime": "Weak-field gravitational lensing by an isolated compact lens.",
      "units": "theta_E is an angle (dimensionless in radians).",
      "theoryRelationship": "canonical point-lens scale",
      "metadataReview": "explicit"
    },
    {
      "id": "boson-star-einstein-klein-gordon",
      "name": "Einstein–Klein–Gordon system for a boson star",
      "category": "Relativity & astrophysics",
      "latex": "G_{\\mu\\nu}=\\frac{8\\pi G}{c^4}T^{(\\phi)}_{\\mu\\nu},\\qquad \\left(\\Box-\\frac{m^2c^2}{\\hbar^2}\\right)\\phi=0",
      "plain": "G_mn = (8 pi G/c^4) T_mn(phi),  (Box - m^2 c^2/hbar^2) phi = 0",
      "description": "Minimal coupled gravitational and Klein–Gordon field equations whose stationary self-gravitating solutions include non-self-interacting boson stars.",
      "theoryIds": ["boson-stars","general-relativity"],
      "sourceIds": ["kaup-boson-star-1968","einstein-gr-1916"],
      "tags": ["boson star","Einstein-Klein-Gordon","scalar field"],
      "formulaType": "defining",
      "assumptions": ["Minimally coupled scalar field","Displayed Klein–Gordon form omits additional self-interaction potentials"],
      "variables": ["phi: bosonic scalar field","m: boson mass","T_mn(phi): scalar-field stress-energy tensor"],
      "regime": "Classical self-gravitating scalar-field configurations underlying the simplest boson-star models.",
      "units": "Constants are explicit; tensor dimensions follow the Einstein equation convention.",
      "theoryRelationship": "defining coupled field equations",
      "metadataReview": "explicit"
    },
    {
      "id": "ccc-conformal-matching",
      "name": "CCC conformal matching relation",
      "category": "Cosmology & dark sector",
      "latex": "g^{(n+1)}_{ab}\\sim\\Omega^2 g^{(n)}_{ab}",
      "plain": "g_(n+1) ~ Omega^2 g_(n)",
      "description": "Schematic statement of the conformal rescaling used to relate the remote future geometry of one aeon to the big-bang boundary of the next in conformal cyclic cosmology.",
      "theoryIds": ["conformal-cyclic-cosmology"],
      "sourceIds": ["penrose-ccc-2014"],
      "tags": ["CCC","conformal rescaling","aeon","crossover"],
      "formulaType": "schematic",
      "assumptions": ["Represents only the conformal-matching idea, not the complete crossover field equations","Conformal factors and metric conventions are source dependent"],
      "variables": ["g_ab^(n): representative metric in one aeon","Omega: conformal rescaling factor"],
      "regime": "Conceptual crossover relation in Penrose's CCC framework.",
      "units": "Metric scaling depends on coordinate and conformal conventions.",
      "theoryRelationship": "schematic representative of the crossover geometry",
      "metadataReview": "explicit"
    }

  ]
};


(() => {
  const formulas = window.QI_FORMULAS.formulas;
  const schematic = new Set(formulas.filter(f => /schematic/i.test(f.name + " " + f.description)).map(f => f.id));
  const approximation = new Set([
    "wkb","qcd-beta","slow-roll-power","lqc-friedmann","gup-minlength","perturb-first-energy",
    "perturb-second-energy","perturb-first-state","born-scattering","spontaneous-decay","nrqed-expansion",
    "nrqcd-factorization","scet-power","smeft","dmrg-truncation","mp2-energy","gw-self-energy"
  ]);
  const limit = new Set(["sql-phase","heisenberg-phase"]);
  const derived = new Set([
    "heisenberg-uncertainty","xp-uncertainty","normalization","continuity-equation","ehrenfest-x","ehrenfest-p",
    "chsh-classical","chsh-tsirelson","jarzynski","landauer","cramer-rao","optical-theorem","s-matrix-unitarity",
    "wigner-eckart","ward-takahashi","axial-anomaly","ssa","data-processing","fdt","hellmann-feynman",
    "quantum-virial","holographic-bound","propagator-composition"
  ]);
  const defining = new Set([
    "general-commutator","canonical-commutator","pure-density","mixed-density","star-product","jordan-product",
    "qed-lagrangian","em-field-strength","covariant-derivative","yang-mills-field","yang-mills-lagrangian",
    "qcd-lagrangian","standard-model-group","smeft","qubit-state","bloch-sphere","kraus-map","kraus-completeness",
    "rabi-hamiltonian","jc-hamiltonian","hubbard-hamiltonian","bcs-wavefunction","ks-equation","anderson-hamiltonian",
    "laughlin-wavefunction","gp-equation","kondo-hamiltonian","toric-code-hamiltonian","mps","wheeler-dewitt",
    "kappa-minkowski","noncommutative-coordinates","quantum-switch","choi","cv-covariance","cv-symplectic",
    "stabilizer-condition","surface-star","surface-plaquette","gkp-stabilizers","gkp-logicals","ashtekar-poisson",
    "lqg-gauss","hf-fock-equation","hf-fock-operator","ci-expansion","ci-secular","cc-ansatz","cc-amplitude",
    "ks-density","tdks-equation","bse-equation","dmrg-reduced-density","dmft-local-green","dmft-weiss",
    "qmc-local-energy","master-constraint","process-tensor-born-rule","pseudo-density-definition","grwm-density"
  ]);
  for (const f of formulas) {
    if (!f.formulaType) {
      if (schematic.has(f.id)) f.formulaType = "schematic";
      else if (approximation.has(f.id)) f.formulaType = "approximation";
      else if (limit.has(f.id)) f.formulaType = "limit";
      else if (derived.has(f.id) || /\b(identity|theorem|bound|inequality|unitarity)\b/i.test(f.name)) f.formulaType = "derived identity";
      else if (defining.has(f.id) || /\b(definition|operator|hamiltonian|lagrangian|algebra|commutator|state|matrix|condition)\b/i.test(f.name)) f.formulaType = "defining";
      else f.formulaType = "canonical";
    }
    if (!Array.isArray(f.assumptions)) f.assumptions = [];
    if (!Array.isArray(f.variables)) f.variables = [];
    if (!f.regime) f.regime = "Canonical representative within the linked theory or framework; consult the linked source for detailed domain assumptions.";
    if (!f.units) f.units = "Unit convention follows the linked source; constants are shown explicitly where present.";
    if (!f.theoryRelationship) f.theoryRelationship = f.formulaType === "schematic" ? "schematic representative" : "canonical representative";
    if (!f.metadataReview) f.metadataReview = "baseline-audit-v1";
  }
  window.QI_FORMULAS.formulaTypes = ["exact","defining","canonical","schematic","approximation","limit","derived identity"];
  window.QI_FORMULAS.metadataSchema = {
    formulaType: "Epistemic/formal role of the displayed equation.",
    assumptions: "Assumptions required by the displayed form when specifically audited.",
    variables: "Variable/parameter meanings when specifically audited.",
    regime: "Applicable physical or mathematical regime.",
    units: "Dimensional or unit convention notes where meaningful.",
    theoryRelationship: "How the equation relates to the linked theory.",
    metadataReview: "Whether metadata is explicitly reviewed or inherited from the conservative baseline audit."
  };
})();
