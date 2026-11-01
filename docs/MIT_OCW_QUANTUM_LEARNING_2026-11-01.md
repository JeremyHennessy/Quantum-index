# MIT OpenCourseWare quantum-learning bridge — first source-reviewed batch

**Reviewed:** 2026-11-01  
**State:** research/teaching content only; not published in the Quantum Index UI or promoted to scientific records  
**Intake:** main `9e8ae083d0a9906bb9316b1b081cb50df899fecf`  
**Machine-readable links and limitations:** [source-located course crosswalk](../research/MIT_OCW_QUANTUM_LEARNING_BRIDGE_2026-11-01.json)

## What this adds, and what it does not

The current Quantum Index catalog already holds the theories and many representative equations below. A missing explanation is not a missing theory. This batch provides **five original teaching bridges** between its existing record IDs, mathematical examples that readers can check, assumptions, and the exact MIT OpenCourseWare lectures used for independent study. The links are *editorial navigation suggestions*, not new graph-edge claims or historical provenance for any formula.

MIT OCW materials are **pedagogical secondary sources** in this context. They can demonstrate a derivation or conventional definition, but cannot by themselves validate experimental claims, observational constraints, historical priority, or current research consensus. Preserve the accepted primary bibliography and all existing scientific records. No MIT notes, diagrams or lecture prose are copied here. The calculations and commentary below were newly written for this bridge.

### 1. A two-state system is a *subspace*, not necessarily an entire physical world

**Read:** [MIT 8.05 Quantum Physics II, chapter 7, Two-State Systems](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b27e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf) — Barton Zwiebach (2013), §1 printed p. 1 and §2 printed p. 3, Eqs. (2.8), (2.10).

A qubit models any *selected* orthonormal pair of states. A spin-1/2 system can supply such a pair, but an atom or other physical device may have additional degrees of freedom. For a state

\[
|\psi(0)\rangle=\frac{|\uparrow\rangle+|\downarrow\rangle}{\sqrt 2},\qquad
H=-\gamma B S_z ,
\]

the Hamiltonian has opposite energies on the spin-up and spin-down states. Unitary evolution therefore changes the **relative phase**, not the individual probabilities measured in the \(z\) basis:

\[
|\psi(t)\rangle=\frac{e^{+i\gamma Bt/2}|\uparrow\rangle+
e^{-i\gamma Bt/2}|\downarrow\rangle}{\sqrt 2}.
\]

A \(z\)-basis measurement still gives each result with probability \(1/2\). A measurement in a transverse basis can respond to the changing phase. This distinction connects the state-vector, measurement and dynamics concepts rather than presenting each equation in isolation.

**Existing catalog:** `quantum-information`; `qubit-state`, `spin-half`, `unitary-evolution`. **Boundary:** an isolated, constant-field spin illustration; not a claim about actual hardware coherence or measurement dynamics.

### 2. A Bell pair is pure jointly and mixed locally

**Read:** [MIT 8.05, chapter 8, Multiparticle States and Tensor Products](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf) — §1 printed p. 3, Eq. (1.6); §§2–3 printed pp. 9–10, Eq. (3.52).

The Hilbert-space dimension of two distinguishable qubits is \(2\times2=4\); not every vector of that four-dimensional space factors into two one-qubit vectors. Consider

\[
|\Phi^+\rangle = \frac{|00\rangle+|11\rangle}{\sqrt2},\qquad
C=\frac{1}{\sqrt2}\begin{pmatrix}1&0\\0&1\end{pmatrix}.
\]

A product two-qubit state has a rank-one coefficient matrix. Here \(\det C=1/2\), so the state cannot factorize. Its joint density matrix is pure, yet tracing out qubit B gives

\[
\rho_A=\operatorname{Tr}_B(|\Phi^+\rangle\langle\Phi^+|)=\frac{I_2}{2}.
\]

That local state contains no information about which superposed term the pair occupies. Entanglement, a violation of a particular Bell inequality, and a communication protocol are **three distinct claims**: specify measurements and statistics before claiming a Bell violation, and do not imply faster-than-light signalling.

**Existing catalog:** `entanglement-theory`, `quantum-information`, `bell` (the latter as an onward study link); `bell-state`. **Boundary:** ideal normalized pure Bell state for distinguishable qubits, not a measured Bell experiment.

### 3. Why second-order perturbation theory has a denominator

**Read:** [MIT 8.06 Quantum Physics III, chapter 1, Perturbation Theory](https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/a0889c5ca8a479c3e56c544d646fb770_MIT8_06S18ch1.pdf) — Barton Zwiebach (2018), §1 printed p. 1 Eq. (1.0.2), printed p. 8 Eqs. (1.1.36)–(1.1.37).

For a nondegenerate unperturbed energy \(E_n^{(0)}\), a common second-order formula is

\[
E_n^{(2)}=\sum_{m\ne n}
\frac{|\langle m^{(0)}|V|n^{(0)}\rangle|^2}
{E_n^{(0)}-E_m^{(0)}}.
\]

**Original worked check:** take \(H_0=\operatorname{diag}(0,\Delta)\) with \(\Delta>0\), and a real off-diagonal perturbation \(V=\epsilon\sigma_x\). Exactly diagonalizing \(H(\lambda)=H_0+\lambda V\) gives

\[
E_-(\lambda)=\frac{\Delta-\sqrt{\Delta^2+4\lambda^2\epsilon^2}}{2}
=-\frac{\lambda^2\epsilon^2}{\Delta}
+O\!\left(\frac{\lambda^4\epsilon^4}{\Delta^3}\right).
\]

The perturbative answer matches the exact low-coupling expansion. As the unperturbed gap \(\Delta\) approaches zero, the expansion parameter \(|\lambda\epsilon|/\Delta\) grows, warning that ordinary nondegenerate perturbation theory is not reliable near degeneracy.

**Existing catalog:** `wave-mechanics`; `perturb-first-energy`, `perturb-second-energy`. **Boundary:** two stationary levels and a nondegenerate expansion, not a new theory ID or empirical measurement.

### 4. The non-Abelian term follows from the gauge-covariant derivative

**Read:** [MIT 8.324 Relativistic Quantum Field Theory II, lecture 3](https://ocw.mit.edu/courses/8-324-relativistic-quantum-field-theory-ii-fall-2010/fa941a1dfc792c352ff23669a23f02de_MIT8_324F10_Lecture3.pdf) — Hong Liu (2010), printed pp. 2–3, Eqs. (14), (16), (19), (21).

In the lecture's **Hermitian-generator convention**, set \(D_\mu=\partial_\mu-ig A_\mu\). Then

\[
[D_\mu,D_\nu]=-igF_{\mu\nu},\qquad
F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu-ig[A_\mu,A_\nu].
\]

For an Abelian gauge group, \([A_\mu,A_\nu]=0\). With noncommuting matrix-valued \(A_\mu\), the commutator contributes the additional self-interaction term. In components with \([T^a,T^b]=if^{abc}T^c\), that term is \(+g f^{abc} A_\mu^b A_\nu^c\). A common Yang–Mills kinetic normalization is \(-\frac12\operatorname{Tr}(F_{\mu\nu}F^{\mu\nu})=-\frac14 F_{\mu\nu}^aF^{a\mu\nu}\) **when** \(\operatorname{Tr}(T^aT^b)=\delta^{ab}/2\).

Different texts choose other signs or generator normalizations. Reconciling conventions is required **before** comparing or editing a formula card; an apparent sign mismatch does not automatically mean either source is wrong.

**Existing catalog:** `yang-mills`, `qed`; `covariant-derivative`, `yang-mills-field`, `yang-mills-lagrangian`. **Boundary:** standard classical gauge-field mathematics underpinning QFT; no new measured prediction or replacement for original Yang–Mills primary source.

### 5. Three-qubit bit-flip protection is not full quantum error correction

**Read:** [MIT 18.435J Quantum Computation, lecture 16](https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/91bddd9a25a390ed70bacc5f80f6c23a_qc_lec16.pdf) — Peter Shor's course, lecture scribed by Dah-Yoh Lim (2003), printed pp. 1–2.

Encode one logical qubit by linear extension of

\[
|0_L\rangle=|000\rangle,\quad |1_L\rangle=|111\rangle,\quad
\alpha|0\rangle+\beta|1\rangle\mapsto
\alpha|000\rangle+\beta|111\rangle.
\]

Consider ideal parity checks \(Z_1Z_2\) and \(Z_2Z_3\). A single \(X_2\) bit flip gives check outcomes \((-1,-1)\), identifying the middle qubit in this idealized example. A phase flip \(Z_1\), by contrast, takes the logical state to \(\alpha|000\rangle-\beta|111\rangle\) while leaving **both** bit-flip checks at \((+1,+1)\). This simple code does not fix that logical phase error.

The encoding maps one unknown state into a three-qubit code space: it does **not** make three independent clones. More sophisticated codes address both X and Z errors and need distinct source support for general error-correction conditions.

**Existing catalog:** `quantum-error-correction`. **Boundary:** noiseless checks and a stipulated single Pauli error. Do not reattribute the separately source-reviewed `knill-laflamme` formula to these introductory lecture pages.

## Source and publication controls

- Course PDFs are linked at MIT OCW; the MIT site owns the course materials. This guide contains original explanations and calculations and does not reproduce the PDFs, figures, or extended course text. No MIT endorsement is implied.
- Each link in the JSON crosswalk points to an **already existing** theory or formula ID. It is an editorial teaching relationship, not a source-backed graph edge or a new experimental Evidence item.
- The material must be checked independently before any runtime data integration. Existing source IDs, formula metadata, historical reviews, saved workspace/notes, classic routes, and the approved Observatory / Physics Explorer assets are unchanged.
- A new user-facing teaching experience would be a **separate visual candidate**, subject to open Issue #128, screenshots, browser checks and explicit acceptance. No UI work is part of this batch.
- Before considering a release: review exact PDF locators and mathematics, run `npm test`, `npm run validate`, Chromium/WebKit, inspect exact-head screenshots where UI is affected, and separately verify any merge, Pages deployment, and served assets. A draft PR is not a release.

## Next bounded learning batches

A logical course sequence is **8.04** for first principles; **8.05** for measurement, angular momentum and identical particles; **8.06** for scattering, adiabatic change and approximation methods; **8.370x / 18.435J** for circuits, information and noise; **8.323 / 8.324** for quantized fields, renormalization and gauge structure. Cosmology and quantum-gravity connections can then be cross-checked with **8.962** general relativity notes and *independent primary research*. These are prospective syllabus areas, **not** claims that their formulas have all been reviewed in this batch.

Useful course catalogs: [8.04](https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/), [8.05](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/pages/lecture-notes/), [8.06](https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/pages/lecture-notes/), [8.370x](https://ocw.mit.edu/courses/8-370x-quantum-information-science-i-spring-2018/), [18.435J](https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/pages/lecture-notes/), [8.324](https://ocw.mit.edu/courses/8-324-relativistic-quantum-field-theory-ii-fall-2010/pages/lecture-notes/), [8.962](https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/).
