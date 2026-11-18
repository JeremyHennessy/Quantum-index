# Phase 12 — one open quantitative lemma and one exact falsifier

**Status: OPEN for pure 4D Yang–Mills.** This is a precisely specified *conditional spectral frontier*, not a new theorem or claim that the group-assessed continuum construction has been completely independently verified. Selected deep-audit chain: **October 28 OpenAI Wilson-continuum formal submission as assessed November 10 by the Yang–Mills group**, not a splice of Bałaban and Magnen–Rivasseau–Sénéor regulators.

## 1. The exact unproved quantitative question

**Gauge group and measure:** first G=SU(2), fundamental 2×2 Wilson plaquette law
\(d\mu_{a,L}\propto\exp[-b_{a,L}\sum_p(1-\frac12\Re\tr U_p)]\prod_e dU_e\)
on a 4D Euclidean side-L periodic torus with spacing a|L, normalized Haar, \(b_{a,L}\) chosen along a source-qualified *asymptotically-free* weak-bare-coupling trajectory, not the former 2+1D strong-electric strip. Renormalized local gauge-invariant curvature-polynomial observables \(O^{ren}_{a,L;f}\) include operator mixing/contact renormalization and smearing by \(f\in C_c^\infty\) with separated-time supports.

**Conditional construction context:** assume *only for stating the lemma* that the same UV (a→0 at fixed L) and extracted/subsequential IR (L→∞) limits produce a selected, OS-positive pure component with physical Hilbert ℋ_G, vacuum Ω_G, strongly continuous positive Euclidean-time contraction e^(-tH_G), H_G≥0, and a countable dense collection of centered vectors
\[
\mathcal D_G=\{\Psi_f=[O_f-\langle\Omega_G,O_f\Omega_G\rangle]\Omega_G:
f\in\mathcal F_G\},\quad \overline{\operatorname{span}\mathcal D_G}=\Omega_G^\perp.
\]
The existence, purity, operator-field correspondence and density are obligations of the **actual** continuum construction, not new results proved here. \(O_f\) denotes a suitably smeared physical renormalized local gauge-invariant field polynomial (may be unbounded, but \(\Psi_f\in\mathcal H_G\) is assumed and its norm finite). The selected sector has unique Ω_G, as required to identify the zero-eigenspace.

**Unproved statement (ONE quantitative lemma):** There exists **m_G>0 in inverse physical length units**, independent of the field f, finite cutoff, physical volume and Euclidean time t, such that for **every** \(\Psi_f\in\mathcal D_G\) there are finite constants \(K_f\ge0\) and \(t_f\ge0\) (allowed to depend on f and selected phase) with
\[
0\le C_f(t):=
S^{conn}_{G,2}(O_f;\theta_t O_f)
=\langle\Psi_f,e^{-tH_G}\Psi_f\rangle
\le K_f e^{-m_G t}\qquad\forall t\ge t_f .
\tag{QG}
\]
Here \(\theta_t\) means the appropriate positive Euclidean time separation/translation in the reconstructed OS correlation (not a reflection symmetry symbol). The precise test-function pair and OS Hilbert representatives must be fixed; the middle equality is an **essential reconstruction premise**. Nothing in the Nov 10 group assessment or inspected Lean CombinedAcceptance proves QG. It lists the uniform mass gap as explicitly open (§8 item 3).

**Before claiming a regulator-uniform route to QG** one must prove a comparable positive connected two-time estimate for the *same* renormalized observables and phase selection along (a,L), with constants \(K_f\) and **m_G independent of cutoff in physical units**, plus convergence for fixed time and sufficient time-boundary/transfer control. On periodic time torus, a typical candidate bound would require justified wrap term \(K_f(e^{-m_G t}+e^{-m_G(L-t)})\) for \(t_0(f)\le t\le L/2\), rather than pretending finite-periodic correlations already equal a zero-temperature vacuum semigroup. This is a **candidate sufficient regulator estimate**, NOT a theorem/axiom or an assertion that the selected formal construction has established the requisite correspondence.

## 2. Why QG, with the stated density, implies a physical mass gap

By the spectral theorem \(H_G\ge0\), the positive measure \(\nu_f(B)=\langle\Psi_f,E_{H_G}(B)\Psi_f\rangle\) has finite mass \(\|\Psi_f\|^2\) and \(C_f(t)=\int_{[0,\infty)}e^{-t\lambda}\,d\nu_f(\lambda)\). Since Ω is the only zero-energy vector and \(\Psi_f\perp\Omega\), \(\nu_f(\{0\})=0\).

For any 0<ε<m_G, if \(q=\nu_f([0,m_G-\varepsilon])>0\), then \(C_f(t)\ge q e^{-(m_G-\varepsilon)t}\) for all t. QG would give \(q e^{\varepsilon t}\le K_f\) for all large t, a contradiction. Thus \(\nu_f([0,m_G-\varepsilon])=0\) for every f and every ε. Sending ε↓0 implies \(\nu_f((0,m_G))=0\). By cyclic density in \(\Omega^\perp\), the spectral projection \(E_{H_G}((0,m_G))\) vanishes on the entire excited Hilbert space, hence \(E_{H_G}((0,m_G))=0\) and
\[
\sigma(H_G)\subseteq \{0\}\cup[m_G,\infty).
\]
This implication is **elementary rigorous spectral mathematics**, conditional on QG, OS reconstruction and dense physical states. It proves a gap in **one selected SU2 component**, not Clay's every-compact-simple-group result or UV field/axiomatic existence if those are unqualified.

## 3. ONE adversarial falsification test — qualitative clustering is not QG

**Candidate inference to reject:** "Reflection positivity, existence of a reconstructed Hilbert space with unique vacuum and qualitative clustering \(C_f(t)\to0\) imply a positive spectral gap."

**Exact counterexample (not a Yang–Mills model):** Let
\[
\mathcal H=\mathbb C\Omega\oplus L^2([0,\infty), e^{-\lambda}d\lambda),\qquad
H=0\oplus M_\lambda,
\]
where \(M_\lambda f(\lambda)=\lambda f(\lambda)\) on its natural multiplication domain. Ω is the unique normalized zero eigenvector, \(H\ge0\), and \(\sigma(H)=[0,\infty)\) has **no gap** above Ω. Let \(\phi(\lambda)=1\) in the second summand (unit vector) and bounded selfadjoint rank-two A=|\phi\rangle\langle\Omega|+|\Omega\rangle\langle\phi|. Then \(\langle\Omega,A\Omega\rangle=0\), \(\Psi=A\Omega=\phi\), and
\[
\langle\Psi,e^{-tH}\Psi\rangle
=\int_0^\infty e^{-(t+1)\lambda}d\lambda
=\frac1{t+1}\xrightarrow[t\to\infty]{}0.
\]
For **all** bounded A,B, \(\langle\Omega,A e^{-tH}B\Omega\rangle\to\langle\Omega,A\Omega\rangle\langle\Omega,B\Omega\rangle\), since \(e^{-tH}\to|\Omega\rangle\langle\Omega|\) **strongly** by dominated convergence on the continuous excited sector. The Euclidean semigroup Gram kernel \([\,C_\Psi(t_i+t_j)\,]_{ij}\) is reflection positive because it is \(\langle e^{-t_iH}\Psi,e^{-t_jH}\Psi\rangle\). Yet no m>0,K<∞ can bound 1/(t+1)≤K e^{-mt} for all large t; \(e^{mt}/(t+1)\to\infty\).

**Interpretation:** rigorously **C — the attempted qualitative-clustering⇒gap implication fails**, even in a positive semigroup model with unique vacuum and RP covariance. This is **not** a counterexample to physical SU2 Yang–Mills or to any claimed exponential estimate. QG remains genuinely unproved; one cannot replace it with arbitrary ordinary clustering. No numerical simulation or fragile finite-size data were used.

## 4. Immediate research decision

**First unsupported step, CONDITIONAL on accepting the 2026 claimed existence/reconstruction semantics:** independently prove QG (or an equivalent dense-sector spectral/transfer estimate) with m_G>0 **uniform in physical UV/IR regulator removal**, along the same Wilson construction and for every selected physically admissible component. This cannot be supplied by the 1993 fixed-infrared-cutoff construction, a 1989 conditional RG estimate, a 1978 fixed-spacing strong-coupling area law, a projected SU2 strip coefficient, a single glueball correlator or a formal check of a theorem **not asserting QG**.

**Falsifiers for a proposed quantitative bound:** produce exact admissible source/phase/test vector with spectral weight in (0,m_G), or a verified sequence of physical-regulator correlations violating its *specified* K_f and m_G. The abstract countermodel above falsifies only the unsupported general inference and proves the necessity of a **quantitative** rate; it cannot establish failure of any SU2-specific QG conjecture.

**Scope:** Source evidence—Jaffe–Witten official §4–5; Nov 10 Yang–Mills-group assessment §8 item 3, §10–11; actual group Lean AcceptanceSpec.lean/CombinedAcceptance.lean (no mass-gap field); selection/dependency conditions in CONSTRUCTIVE_4D_THEOREM_MAP.md. Neither mathematical novelty nor solution of the Clay problem is claimed.
