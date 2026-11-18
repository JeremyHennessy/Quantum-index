# Phase 12 — four-dimensional Wilson regulator and limits

**Date:** 2026-11-18 UTC. **Model:** pure SU(2) Yang–Mills on a four-dimensional Euclidean hypercubic lattice; no matter/Higgs. This is a **source audit**, not a continuum construction.

## Regulated law and exact gauge constraints

For lattice spacing a>0, physical torus side L with n=L/a∈ℕ, let Λ_(a,L)=(aℤ/Lℤ)^4. Assign each positively oriented edge e an original SU(2) variable U_e, set U_reverse=U_e^(-1), integrate normalized Haar dU_e, and let U_p be the oriented product on plaquette p. In the fundamental dimension-2 representation define
\[
S_{a,L,b}(U)=b(a,L)\sum_p[1-\tfrac12\operatorname{Re}\operatorname{tr}_{\mathbf2}(U_p)],\quad
d\mu_{a,L,b}(U)=Z_{a,L,b}^{-1}e^{-S_{a,L,b}(U)}\prod_{e>0}dU_e.
\]
Here Z>0 is the finite-lattice partition function. Gauge transformations U_(xy)↦g_x U_(xy) g_y^(-1) leave plaquette traces and Haar invariant. Finite-lattice positivity, gauge symmetry and normalization are proved directly from this definition, **not** continuum existence.

**Coupling warning:** November 10 Yang–Mills-group assessment, §3 Eq.(2), §4 Eq.(3), writes β times [1−(1/m)ReTr U_p], identifies β=1/g_0² under its specified Lie-algebra quadratic form and converts to another formal lattice convention by dividing by m. The often-quoted SU(2) Wilson β=4/g_0² assumes different action/trace conventions. Only the displayed b-action defines our symbols; do not transfer numerical prefactors without a convention proof.

Along an asymptotically free ultraviolet trajectory b(a,L)→+∞ as a→0. The group's reviewed **claim**, §4.3 Eq.(7), includes a leading-log condition
\[
\sup_p\left|\frac{\beta_{N,p}}{\log(\ell/a_N)}-\frac{11C_{\mathfrak g}}{24\pi^2}\right|\longrightarrow0
\]
in **its own** metric convention and fixed reference length ℓ. This is an attributed formal-claim condition, not a new independent RG theorem here. It is NOT the earlier 2+1D strip convention α=g²/2, β=2/(a²g²). Four-dimensional bare coupling is dimensionless.

## Gauge-invariant observable and reflection regime

Finite-lattice Wilson loop characters are bounded gauge invariant observables. A scalar glueball local candidate is a properly **renormalized and smeared** gauge-invariant curvature-polynomial insertion. The smooth-field formal expansion
a^(-4)[1−(1/2)ReTr U_(μν)]→−(1/4)Tr(F_(μν)²)
is **not** a proof of UV convergence of random insertions: mixed operators, contact terms, lattice spacing factors and distributional limits must be controlled. The group's assessment §4.1–4.3 allows regulator-dependent mixing of curvature/covariant-derivative local labels and first tests separated-point Schwartz correlations; no direct continuum connection-field probability measure is proved.

Choose a time reflection θ across an admissible temporal hyperplane. The lattice Osterwalder–Schrader inequality for positive-time gauge-invariant cylinder functions f is ⟨θf·f⟩≥0, with correct boundary/link conventions. Osterwalder–Seiler 1978 (*Ann. Phys.* 110, 440–471, DOI 10.1016/0003-4916(78)90039-8) provides finite-lattice physical positivity/transfer-matrix precedent and fixed-lattice strong-coupling infinite-volume analyticity; **only the primary abstract was independently accessible**, not its complete technical proof. Positivity of a probability measure alone does not imply reflection positivity. RP at each cutoff does not yield the OS continuum axioms without convergence in a positivity-preserving topology.

## Order of limiting operations

1. Fix physical torus side L. Select a→0, b(a,L) with UV running, renormalized gauge-invariant local observables and joint **distributional** convergence of all required smeared n-point functions, including contact terms as needed.
2. Take L→∞ by a justified sequence/subsequence, preserve Euclidean covariance/OS positivity, control clusters and phase decomposition; **subsequential existence is not unique-limit convergence**.
3. Select a pure OS-positive phase, reconstruct physical Hilbert space ℋ, unique vacuum Ω in that phase, semigroup e^(−tH) and a **dense set** of field-created vectors with correct gauge-invariant interpretation.
4. Establish a gap Δ>0 in **inverse physical length** in the reconstructed H, not merely a finite-a transfer eigenvalue separation; prove all required groups (SU2 alone cannot discharge Clay).

The November 10 **group assessment of the OpenAI formal submission** explicitly takes fixed-L UV first and extracted/subsequential IR second; that is its qualified construction claim and does not prove independence of limit order. Separate density, uniqueness and mass-gap questions must not be hidden in this order.

## Quantitative spectral bridge needed

Let A_f be a smeared renormalized gauge-invariant field polynomial in the selected OS phase, Ψ_f=(A_f−⟨Ω,A_fΩ⟩)Ω, and C_f(t)=⟨Ψ_f,e^(−tH)Ψ_f⟩. If for **a dense family** of excited vectors there is a **common m>0 in physical units** and individual constants C_f^0<∞, t_f such that
0≤C_f(t)≤C_f^0 e^(−mt) for t≥t_f,
then the spectral measure of every such Ψ_f has zero mass in [0,m), hence by density the physical H has no spectrum in (0,m). But to prove this from Wilson lattices rather than assume it, prove cutoff-uniform connected time-correlator bounds, correct normalization, convergence and centering for the **same** selected UV/IR phase. An isolated Wilson area law, qualitative clustering, and a strong-electric finite-spacing result are insufficient.

**Primary source locators:** Jaffe–Witten official https://www.claymath.org/wp-content/uploads/2022/06/yangmills.pdf §§4–5; Yang–Mills group's dated assessment https://alexisdpc.github.io/yang-mills/references/assessment-1-2026-11-10.pdf §§3–6; group Lean checks Accepted, LatticeAndScale and PhaseAndOS in https://github.com/yang-mills-group/YM/tree/main/submissions/openai-20261028/checks ; Osterwalder–Seiler DOI above (abstract-only). Each evidentiary tier remains distinct.
