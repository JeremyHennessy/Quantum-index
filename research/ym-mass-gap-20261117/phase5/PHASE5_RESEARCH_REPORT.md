# Quantum Index — Yang–Mills Phase 5: localized one-step estimate vs full resolvent

**Status (2026-11-17):** mathematically derived, independently cross-checked *finite open-ladder* identities; 15 local Python tests. **Not** independently peer reviewed, Lean-formalized, established as novel in the literature, or a theorem about the 4D continuum mass gap.

## Preservation and exact parent

Research parent: Phase 4 draft PR #148, commit `3edec6d5c93cd4b3792c7f0ff371d8fa0d804423`. Its dedicated pinned workflow [44196064782](https://github.com/JeremyHennessy/Quantum-index/actions/runs/44196064782) passed 17/17 tests. The *separate* full catalog run [44196075189](https://github.com/JeremyHennessy/Quantum-index/actions/runs/44196075189) was **still in progress at this Phase 5 intake**; do not count it as successful without a later exact check. Approved main at intake was `a60397f017c5c0bfc2bf88be046320a00c9d28de`. The Research Charter and all preceding files remain unchanged.

## 1. Source and physical assumptions

- **Established Hamiltonian formulation:** Ebner et al., *Phys. Rev. D* **110**, 014505 (2024), §II Eq. (1), https://doi.org/10.1103/PhysRevD.110.014505 . SU(2), Kogut–Susskind electric link Casimirs and fundamental Wilson-plaquette multiplication; lattice plaquette chains in spatially two-dimensional (2+1-dimensional) theory. Not the 3+1-dimensional Clay problem. See also [Communications Physics (2025)](https://www.nature.com/articles/s42005-025-02298-5), section on spin-network gauge constraints.
- **Resolvent scope:** Combes–Thomas and related resolvent-locality estimates assume a spectral separation. For example Princeton MAT595/PHY508 2024 lecture notes, Theorem 1.18, https://web.math.princeton.edu/~js129/PDFs/teaching/MAT595_spring_2024/MAT595_PHY508_Lecture_Notes.pdf ; this cannot be invoked to *establish* a Yang–Mills gap without checking its hypotheses.
- **Previous research:** Phase 2–4 branch reports and exact-head test receipts. The *energy-weighted* Schur bound obtained there had an extensive magnetic penalty and did not establish volume-uniform control. Phase 3's raw cutoff-leakage suppression was explicitly falsified.

Use open boundaries and zero external charges. For an `N`-plaquette 2-row ladder, there are `2(N+1)` vertices, `3N+1` links, and `N` squares sharing `N−1` vertical links. The trivalent vertices carry unique SU(2) singlet intertwiners iff the triangle and parity conditions hold. The two degree-two endpoints force their adjacent link spins to match. The full-link cutoff spin-network basis is enumerated by `states(N, 2J)`. This graph is genuinely connected; no product Hilbert-space assumption was used in the basis enumeration.

### Basis and admitted Hamiltonian verification

| Spatial ladder | All-link j≤1/2 basis | All-link j≤1 basis | Magnetic validation |
|---|---:|---:|---|
| 3 squares (Phase 4) | 8 | 49 | Prior complete independent CG/Haar magnetic check at j≤1 |
| 4 squares (Phase 5) | **16** | **233** | **Complete j≤1/2 magnetic matrices independently checked**; j≤1 full magnetic matrices **NOT** independently constructed and remain an explicit gate |

The complete 233-state **electric** basis, singlet admissibility and Casimir spectrum are enumerated. There is no claim that the 233×233 Wilson matrices have been independently checked, or that the 233-state truncated spectrum is converged. At `j≤1/2`, the independent constructions are (A) SU(2) loop-character fusion and (B) exact-degree Haar integration over `8^4` signed quaternion axes. A retained `j≤1/2` loop wavefunction is degree at most one in each loop quaternion; its Gram and Wilson matrix polynomials have degree at most three per quaternion. Thus the signed axes are exact **for these matrices only**, not for `j≤1` or quartic high-spin leakage. The `24`-point fourth-moment scheme independently checks the spin-one norm; eight axes incorrectly report norm squared three rather than one.

A separate test constructs explicit original 13-link SU(2) holonomies and applies independent gauge transformations at all ten vertices: each oriented Wilson trace is invariant. The complete 16×16 j≤1/2 matrices agree exactly between methods. Independently computed 16-state finite-projected spectra at `(α,β)=(1,1/2)` give gaps near `3.1582106875` (three squares) and `3.1575139512` (four squares). **These are numerics on spin-truncated finite spaces only**, not rigorous untruncated gaps.

## 2. The first locally supported excitation: exact one-step result

Tree gauge fixing yields independent loop holonomies `G₁,...,G_N ∈ SU(2)`, with normalized product Haar measure and residual simultaneous conjugation. The physical low-spin projector `P_N` retains every gauge-invariant link-spin state with all `j≤1/2`, and `Q_N=1−P_N` is the **full untruncated complement**. Define the normalized localized gauge-invariant state

`ψ_N=χ_(1/2)(G₁)` (the fundamental trace on the leftmost square). Let `W_N=∑_{i=1}^N χ_(1/2)(G_i)` and `D_N=Q_N (α H_E−z) Q_N` with the pure electric Hamiltonian `H_E=∑links j_l(j_l+1)`.

**Assume** α>0 and z below both omitted electric energies in this computation. Character fusion gives:

- First plaquette: `χ_(1/2)(G₁)^2=1+χ_1(G₁)`. The omitted normalized spin-one loop has squared amplitude **1**, electric energy **8** (four spin-one links).
- Adjacent second plaquette: the product of neighbouring fundamental loops decomposes into a retained shared-link singlet (squared amplitude `1/4`) and omitted shared-link triplet (squared amplitude **3/4**), with omitted electric energy **13/2**.
- Any plaquette `i≥3` is edge-disjoint from the original first loop. `W_i ψ_N` is a valid product of distinct fundamental Wilson loops with every link spin ≤1/2, and is thus entirely in `P_N`. It cannot contribute to this **one-step** high-spin coupling.

Consequently for **every finite N≥2**:

`||Q_N W_N ψ_N||²=7/4`, and

`β² ⟨Q_NW_Nψ_N, D_N^(-1) Q_NW_Nψ_N⟩ = β² [1/(8α−z) + (3/4)/(13α/2−z)]`.

At α=1, β=1/2, z=0 this exact rational electric-weighted contribution is **25/416** for both N=3 and N=4 (also N=5 in a separate analytic test). This is a correct but **weak**, first-step local result. It does **not** establish the same locality for the full `QHQ` resolvent, ground-state energy differences or a volume-independent physical mass gap.

## 3. The decisive falsifier: the full complementary resolvent is not strictly local

Use a separately defined normalized high-spin, gauge-invariant state `η_N=χ_1(G₁)∈ran(Q_N)`. Consider the **full untruncated complementary resolvent** scalar:

`R_N(β;α,z)=⟨η_N,[Q_N(α H_E−βW_N)Q_N−z]^{-1}η_N⟩`.

The embedding from three to four plaquettes is valid **for this observable**: under product Haar tree-gauge variables it extends a conjugation-invariant function by independence of the appended loop coordinate. It is isometric, and the state stays gauge invariant. No arbitrary tensor-product embedding of the full Gauss-law spin-network space is assumed.

For real z<5α, the Phase 4 local Gauss-law electric estimate provides `D_N≥(5α−z)Q_N`. Since `||W_N||≤2N`, the resolvent is guaranteed invertible and its Neumann expansion converges whenever

`2N |β| < 5α−z`.

At β=0 the normalized spin-one loop has electric energy 8α. Character fusion and **complete** Q projection give mutually orthogonal contributions from `QW_Nη_N`:

| Source action | Squared amplitude | Final electric energy / α |
|---|---:|---:|
| `W₁` (spin-3/2 loop; spin-1/2 portion projected into P) | 1 | 15 |
| `W₂` lower shared-spin channel | 1/3 | 9 |
| `W₂` upper shared-spin channel | 2/3 | 12 |
| Each `W_i` for `i≥3` (independent distant loop) | 1 | 11 |

The two nontrivial `W₂` amplitudes are independently checked against exact Wigner-6j coefficients. The disconnected distant-loop norm is independently checked against fourth-degree SU(2) Haar moments. The first-order coefficient vanishes by the character selection rules. Thus the exact second-order Neumann coefficient for **each finite N≥3** is

`[β²]R_N = 1/(8α−z)² × [1/(15α−z)+(1/3)/(9α−z)+(2/3)/(12α−z)+(N−2)/(11α−z)]`.

At α=1, z=0, exact rational arithmetic yields

`[β²]R_3 = 743/190080`, `[β²]R_4 = 1013/190080`, and **`[β²](R_4−R_3)=1/704>0`**.

Therefore for sufficiently small positive β:

`R_4(β;1,0)−R_3(β;1,0)=β²/704+O(β³)`.

The same new contribution arises when a still more distant fifth square is appended. This **falsifies** a naive claim that the *unsubtracted full* complementary resolvent expectation for a localized gauge-invariant high-spin state is strictly unchanged by a distant added plaquette. It is a disconnected loop fluctuation, not evidence of a propagating physical long-range excitation. A theorem that omits this contribution must use a correctly defined connected/vacuum-subtracted or conditional observable and prove the subtraction is legitimate. At finite β, and particularly through a physical continuum scaling, the perturbative identity alone makes **no** statement about gap persistence or exponential decay.

## 4. The genuinely open issue and next smallest test

The contrast is decisive: the exact one-step *electric-weighted* local term is independent of the number of distant plaquettes, while an **unsubtracted all-order complementary resolvent** contains an extensive disconnected response already at order β². Any hoped-for volume-independent locality theorem must carefully define connected contributions or subtract the vacuum-energy variation; it cannot simply quote the one-step identity as a full-resolvent result.

Next bounded research task: formally define a *connected* local resolvent response compatible with Gauss law and a valid energy/vacuum subtraction, then test its third and fourth perturbative coefficients under an added remote plaquette. Prove the subtraction is noncircular and does not import an assumed spectral gap. Only then consider a general connected-cluster or Combes–Thomas-type bound, and independently check its spectral-separation assumptions.

No original mathematical novelty is established: local character fusion, virtual high-spin penalties, perturbative resolvent expansions and disconnected-loop corrections are established methods. These exact coefficients are independently derived restricted-model comparisons, not the four-dimensional Yang–Mills Millennium Prize solution.

## Reproduce / acceptance evidence

From this folder run `OPENBLAS_NUM_THREADS=1 python -m unittest -v test_phase5_local` with Python 3.12, NumPy 2.3.5 and SymPy 1.14.0. The initial local detailed controls passed **15/15 tests** on Python 3.13.5 in the research runtime. A separately pinned GitHub workflow must be checked at its **exact final commit SHA** before calling the published research files accepted. No Lean formalization or specialist peer review occurred in Phase 5. Prior Phase 1–4 research was not modified.
