window.QI_FORMULAS = {
  "version": "v1",
  "scope": "Canonical equations and identities across the indexed quantum-theory landscape; not a claim of literally every derivable formula.",
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
        "quantum-information"
      ],
      "sourceIds": [
        "sep-bell",
        "barrett-gpt-2007"
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
        "holographic-principle"
      ],
      "sourceIds": [
        "hawking-1975",
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
        "hawking-radiation"
      ],
      "sourceIds": [
        "hawking-1975"
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
        "inflationary-fluctuations"
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
    }
  ]
};
