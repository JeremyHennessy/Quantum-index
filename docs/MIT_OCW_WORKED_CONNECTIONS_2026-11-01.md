# MIT OpenCourseWare — worked quantum connections, wave 2

**Reviewed 2026-11-01.** Research-only, not yet included in the shipped Quantum Index UI or catalog records. Based on main commit 32a4a0a74af766e7854320f890a1bcd8e8417a0a. The [structured crosswalk](../research/MIT_OCW_SECOND_WAVE_2026-11-01.json) contains exact, existing catalog IDs, course links, locations, assumptions and limitations.

The aim is scientific *depth*: explain why accepted formulas work, how their regimes differ, and where a researcher can study the derivation. These are new explanations, not an attempt to rebrand three existing equations as newly discovered. MIT OCW is a pedagogical source, not evidence of a recent experimental result or of who originally discovered a theory. No MIT figures, lecture PDFs, or extended course passages are copied.

## 1. Berry phase: what changes under a gauge transformation?

**Original lecture:** [MIT 8.06, chapter 6 — Adiabatic Approximation](https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/95ffb7405e75bec4f75564318e173ce0_MIT8_06S18ch6.pdf), Barton Zwiebach, §5, printed **p. 14**, Eqs. (5.15)–(5.22), and **p. 15**, Eqs. (5.23)–(5.27).

Given an instantaneous, normalized and *nondegenerate* eigenvector depending smoothly on parameters R, define the local Berry connection

\[
\mathbf A_n(\mathbf R)=i\langle n(\mathbf R)|\boldsymbol\nabla_{\mathbf R}n(\mathbf R)\rangle.
\]

The phase convention of the eigenvector is arbitrary. Under the rephasing

\[
|n(\mathbf R)\rangle\longrightarrow e^{-i\beta(\mathbf R)}|n(\mathbf R)\rangle,
\]

the connection changes by a gradient:

\[
\mathbf A_n\longrightarrow\mathbf A_n+\boldsymbol\nabla_{\mathbf R}\beta.
\]

That does **not** mean the geometric phase is fictitious. For a closed loop C, the loop phase is defined modulo 2π: the additional integral of a smooth, admissible gauge gradient is zero modulo 2π, and the curvature remains unchanged because the curl of a smooth gradient vanishes. For an *open* path, endpoint phases matter; do not call the bare open-path integral gauge invariant without specifying how the endpoint states are compared.

**Our worked example.** Parametrize a spin-1/2 eigenvector by a fixed polar angle θ and a changing azimuth φ:

\[
|n_+(\theta,\phi)\rangle=
\begin{pmatrix}
\cos(\theta/2)\\e^{i\phi}\sin(\theta/2)
\end{pmatrix}.
\]

Its azimuthal connection is A_φ = −sin²(θ/2), so circling φ from 0 to 2π gives

\[
\gamma_+ = -2\pi\sin^2(\theta/2)
         = -\frac{\Omega}{2}\pmod{2\pi},\qquad
\Omega=2\pi(1-\cos\theta).
\]

At θ=π/3, the enclosed solid angle Ω=π and γ_+=−π/2. The other eigenbranch has an opposite sign under consistent spin conventions. This geometric contribution is distinct from the dynamical phase involving the time integral of energy.

**Qualification:** This simple expression assumes an isolated eigenlevel followed adiabatically. Nonadiabatic transitions and level crossings require separate treatment; the example alone does not establish a quantum-computer advantage or a measured phase.

**Existing Quantum Index links:** theory **berry-phase**; formulas **berry-connection** and **berry-curvature**. The existing Berry records already identify gauge dependence and invariance; the missing depth was a concrete, qualified calculation.

## 2. First Born scattering: Fourier transform, units and where it breaks

**Original lecture:** [MIT 8.06, chapter 7 — Scattering](https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/45dbd7038c3e969491eceeae86c44d42_MIT8_06S18ch7.pdf), Barton Zwiebach, §7.3.1, printed **p. 148**, Eqs. (7.3.30)–(7.3.33), and **p. 149**, Eq. (7.3.37). The lecture explicitly assumes nonrelativistic, spinless, elastic potential scattering.

For incident and scattered wave vectors k_in and k_out, the wave-number transfer is

\[
\mathbf K=\mathbf k_{\rm out}-\mathbf k_{\rm in},
\qquad|\mathbf K|=2k\sin(\theta/2).
\]

The capital K denotes a **wave number** (inverse length), not physical momentum by itself; momentum transfer is ℏK. To leading order in a suitably weak scattering potential, the Born amplitude is

\[
f_{\rm Born}(\mathbf K)
=-\frac{m}{2\pi\hbar^2}\int d^3r\, e^{-i\mathbf K\cdot\mathbf r}V(\mathbf r).
\]

The reduced mass m is appropriate for the two-body center-of-mass reduction, and the amplitude has dimensions of length. The differential cross section in this elastic normalization is dσ/dΩ=|f|², with units of area per unit solid angle.

**Our worked example.** For a short-range Yukawa potential V(r)=βe^{−μr}/r, the Fourier integral is 4πβ/(K²+μ²), giving

\[
f_{\rm Born}(K)=-\frac{2m\beta}{\hbar^2(K^2+\mu^2)}.
\]

Choose consistent illustrative units m=ℏ=β=μ=k=1 and angle θ=π/2. Then K=√2, f=−2/3 and dσ/dΩ=4/9. These are mathematical example values, **not** laboratory data.

**Qualification:** Keeping only the first Born term presumes that further scattering iterations are small. A weak/short-range potential or sufficiently favorable high-energy regime can help; simply writing E>V at one point is not an all-purpose convergence criterion. Near a resonance, for strong potentials, or for long-range Coulomb scattering, this example is not a universal reliable approximation. Do not equate this nonrelativistic potential amplitude with a complete relativistic QFT S-matrix.

**Existing Quantum Index links:** theory **wave-mechanics**; formulas **born-scattering** and **differential-cross-section**. These equation IDs already exist, but their one-line descriptions omit the wave-number-versus-momentum distinction and the Yukawa exercise.

## 3. Two spin-1/2 systems: where the singlet and triplet come from

**Original lecture:** [MIT 8.05, chapter 10 — Addition of Angular Momentum](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/f27e44d7b761cec0ef1d01734f0a23b8_MIT8_05F13_Chap_10.pdf), Barton Zwiebach, §2, printed **p. 4**, Eqs. (2.8)–(2.10), and **p. 5**, Eqs. (2.17)–(2.18).

For two distinguishable spin-1/2 systems, their four-dimensional tensor-product spin space decomposes into a three-dimensional total-spin-one sector and a one-dimensional total-spin-zero sector:

\[
\tfrac12\otimes\tfrac12=1\oplus0,\qquad
\dim(3\oplus1)=4.
\]

In a conventional computational spin basis, the orthonormal states are

\[
|1,1\rangle=|\uparrow\uparrow\rangle,\quad
|1,0\rangle=\frac{|\uparrow\downarrow\rangle+|\downarrow\uparrow\rangle}{\sqrt2},\quad
|1,-1\rangle=|\downarrow\downarrow\rangle,
\]

\[
|0,0\rangle=\frac{|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle}{\sqrt2}.
\]

The three triplet states satisfy S²|1,m⟩=2ℏ²|1,m⟩, while S²|0,0⟩=0. The difference between plus and minus combinations is not decorative: it determines total spin and exchange symmetry of the **spin factor**. For identical particles, the total physical state (including spatial degrees of freedom) must obey the appropriate particle-exchange statistics.

**Our worked check.** Let P swap the two spin factors. In units ℏ=1, for two spin-1/2 particles S²=I+P. The symmetric triplet has P=+1 and S²=2; the antisymmetric singlet has P=−1 and S²=0. Direct normalization and orthogonality follow from the equal ±1/√2 coefficients.

**Qualification:** These identities are quantum kinematics, not a claim that a particular apparatus created a Bell pair, or that this pedagogical source first discovered Clebsch–Gordan coefficients. Coupling conventions and relative signs should be stated when comparing textbooks.

**Existing Quantum Index links:** theories **quantum-information** and **heisenberg-spin-model** as editorial study connections; formula **cg-expansion**. The existing catalog formula has narrower linked theory IDs; this *does not* add a catalog graph edge or alter the formula.

## Verification and publishing boundary

- Official MIT-hosted PDFs and the referenced equations were directly inspected. This study does not assign MIT course notes to experimental Evidence records or overwrite accepted primary-source references.
- Independent numerical checks established the Berry latitude-loop phase (including an admissible 2π gauge change), Yukawa-Born amplitude and differential cross section for the stated example units, and the singlet/triplet S² eigenvalues.
- Every crosswalk link points to an existing catalog entity; none creates a new theory/formula identity or endorses an experiment.
- This branch adds research notes and their dedicated integrity tests only. No renderer, interface, existing scientific record, workspace, analytics or approved historical manifest changes.
- Before any merge, run the exact-head Node and catalog validation, strict historic checkpoints, Chromium and WebKit full suites; inspect actual screenshots if any UI changes are proposed. A draft or green test is not a shipped release.

**Forward integration idea, requiring separate review:** add these lessons to the established reader workflow as clearly labeled *teaching/explanation* context, not as original discovery citations. The approved Physics Explorer layout must not change without visual acceptance; Issue #128 remains open.
