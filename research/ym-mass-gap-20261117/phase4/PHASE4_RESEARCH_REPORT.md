# Quantum Index — Yang–Mills Phase 4: three-plaquette energy-weighted controls

**Research date:** 2026-11-17. **Scope:** finite connected spatial SU(2) graph, **not** a theorem about a four-dimensional continuum mass gap. Phase 3 source checkpoint: `1e8c6f637f0f9c521a9099cefac8ff85265990db`. Protected `main` at intake: `a60397f017c5c0bfc2bf88be046320a00c9d28de`. Follow the inherited `RESEARCH_CHARTER.md`. No production/application/UI/source-catalog changes.

## 1. Sources and correct physical scope

- Ebner et al., *Entanglement entropy of (2+1)-dimensional SU(2) lattice gauge theory on plaquette chains*, **Phys. Rev. D 110**, 014505 (2024), Section II Eq. (1): https://doi.org/10.1103/PhysRevD.110.014505. Establishes the standard electric-Casimir plus magnetic Wilson-trace model, color-singlet Gauss constraints, spin-network/Wigner-6j basis, and its spatially two-dimensional setting. The authors study larger plaquette chains; neither the model nor its general method is original to this laboratory.
- *Entanglement properties of SU(2) gauge theory*, **Communications Physics** (2025), Eq. (1), https://www.nature.com/articles/s42005-025-02298-5. Confirms the published plaquette-chain Hamiltonian and normalization conventions. The local continuum scaling used **only for a controlled failure test** is `alpha=g²/2`, `beta=2/(a²g²)` in those (2+1)D conventions, with g² dimensionful.
- Phase 2 `FULL_TAIL_GAP_CERTIFICATE.md`, Phase 3 `PHASE3_RESEARCH_REPORT.md`, exact-head GitHub receipts from PRs #146/#147. Phase 3 had **17/17 tests passing** on `1e8c6f6…` (run `44189991904`); none of those tests is a formal proof of the Clay problem.

## 2. Exact connected graph and Gauss law

Eight vertices `A,B,C,D` (top) and `E,F,G,H` (bottom), ten oriented links:
`AB,BC,CD,EF,FG,GH,AE,BF,CG,DH`. Three consecutive elementary square plaquettes `ABFE`, `BCGF`, `CDHG`. The shared links `BF` and `CG` enter neighboring oriented loops with opposite orientations. Open boundaries, **no external charges**. All vertices have degree two or three.

For the 2j integer labels `(a,t,u,d,v,w)` of (leftmost outer triple, top middle, bottom middle, rightmost outer triple, first shared vertical, second shared vertical), the four trivalent singlet constraints are

`triangle(a,t,v)`, `triangle(a,u,v)`, `triangle(t,d,w)`, `triangle(u,d,w)`, where `triangle(x,y,z)` means `|x-y|<=z<=x+y` and `x+y+z` even. Each admissible trivalent SU(2) intertwiner is one-dimensional. Degree-two vertices force the three outermost left/right link spins equal. These rules enumerate the **complete physical** link-spin cutoff spaces:

| All-link max j | Complete singlet dimension |
|---|---:|
| 1/2 | 8 |
| 1 | 49 |
| 3/2 | 187 |

Electric diagonal in chosen model units:
`E_elec/alpha = 3 C(a/2)+C(t/2)+C(u/2)+3 C(d/2)+C(v/2)+C(w/2)`, `C(j)=j(j+1)`.

This is not a tensor product of independent plaquette Hilbert spaces. The two shared-link singlet constraints and nontrivial magnetic matrix coefficients make it interacting.

## 3. Two independent magnetic-INTEGRATION constructions and their shared dependency

The common, gauge-invariant spin-network basis is constructed by contracting **normalized SU(2) 3j intertwiners** on all eight vertices. For incoming link legs the invariant tensor is converted with the SU(2) epsilon form; non-tree links are the three bottom edges. Tree-gauge fixing leaves three independent SU(2) loop holonomies `G,H,K`, with a residual simultaneous-conjugation symmetry. The reconstructed wavefunctions are explicitly tested for invariance under **eight independent vertex gauge transformations** before gauge fixing.

The two independent Wilson-matrix computations are:

1. **Haar integration:** evaluate each wavefunction from the ten-link spin network on `24³` quaternion group-element configurations; compute the Gram matrices and all three fundamental Wilson traces. The 24-cell consists of eight quaternion axes plus 16 normalized sign-corners. It has exact Haar moments through polynomial degree five in each independent SU(2) variable. At all-link cutoff j<=1, each basis function is at most degree two per quaternion, so products with one fundamental Wilson trace are at most degree five. The eight-axis rule **fails** fourth moments and must not be reused. No higher-j cubature claim is made.
2. **Exact CG-product Haar identity:** without quadrature, decompose `D^j(U) χ_(1/2)(U)` using Clebsch–Gordan coefficients, then integrate representations using Peter–Weyl orthogonality. Apply the resulting independent trilinear kernel to the explicitly constructed spin-network coefficient tensors.

The two calculations agree on **all entries** of all three complete `49×49` Wilson matrices to < `3e-13` in initial local tests. Each is Hermitian. Gram matrices agree with identity to the same tolerance. A separate half-spin `2^-occupied-neighbors` loop-boundary rule reproduces every element of the 8-state matrices without CG/Haar machinery.

**Limitation:** Both integration routes share the same basis tensor construction, so agreement does not independently prove that the basis itself corresponds to the intended physics. This gap is partially covered by the independent loop rule, Gauss-law enumeration, source conventions and direct 10-link gauge-transformation checks; full specialist peer review is not claimed.

**Failed shortcut:** Simply multiplying four or two raw Wigner-6j numbers without a consistent vertex/basis phase prescription can flip matrix-element signs. Example: for states `(1,0,2,1,1,1)` and `(2,0,2,1,2,1)`, the raw two-symbol shortcut gives `-sqrt(2/3)` whereas direct CG/Haar gives `+sqrt(2/3)` in the declared basis convention. We **reject** that unchecked shortcut even though the magnitudes agree. The relevant 6j method in published work requires its full phase conventions.

## 4. An exact, cutoff-complete magnetic leakage norm

Let P be the **complete** eight-state physical `jmax=1/2` projector, Q=I-P on the full infinite-dimensional connected three-plaquette Hilbert space, and `W=χ(G)+χ(H)+χ(K)`. Character fusion by a fundamental trace changes each link spin by at most 1/2, so `QWP` has support **exactly** in the finite physical `jmax=1` sector even though Q contains all representations. The identity

`K = (QWP)^*(QWP) = P W² P − (P W P)²`

therefore captures all omitted states and is independent of any finite spectral truncation.

In the eight-dimensional low-spin basis ordered by the three loop-occupation bits `000,001,010,011,100,101,110,111`, the matrix K can be evaluated using **exact integer quaternion arithmetic** on the 24³ points. All wavefunctions are rational at these points. After exact summation, K has the eigenvalues

`0, 1, 7/4, 9/4, 39/16, 13/4, (83−sqrt(409))/32, (83+sqrt(409))/32`.

Since `(83+sqrt(409))/32 < 13/4`, the largest eigenvalue is **exactly 13/4**, hence

`||Q W P||² = 13/4`.

The corresponding two-plaquette value from Phase 2 is `5/2`. Both are **finite-spatial-graph algebra**, not new continuum physics. The operator norm is derived exactly from Haar moments; numerical CG one-step tail transitions independently give `3.25` and `2.5`. At the larger cutoff `jmax=1` for three plaquettes, numerical CG transition calculations give `||QWP||²≈4.00690148836` (not an exact interval certificate).

## 5. A conditional energy-weighted inequality—derived, not assumed

For any admitted link spin cutoff `J=n/2` and `Q_J=I-P_J`, choose one omitted link with spin `j>=J+1/2`. At each of its two endpoints, Gauss law requires the other incident spin(s) to couple to it. Convexity of `C(j)=j(j+1)` gives the sum of the *other* incident electric Casimirs at least `2 C(j/2)` per trivalent vertex; at a degree-two vertex, its matching link gives at least the same. This **simple ladder graph** has no parallel edge or triangle, so these four neighboring links are distinct. Consequently, independently of the total number of plaquettes in such a ladder,

`Q_J H_E Q_J >= j_*(2 j_* + 3) Q_J`, `j_*=J+1/2`.

This is a **valid conservative bound**, not the optimal electric floor. For J=1/2 it equals 5; for J=1 it equals 9. Every finite physical state enumerated through jmax=2 in the 3-plaquette graph was checked against this inequality. The full mathematical derivation above uses only local Gauss law, nonnegative Casimirs and graph incidence—not numerical cutoff sampling.

The magnetic multiplication operator satisfies `||W||<=2 Np` for Np plaquettes. Define on Q

`D = alpha H_E|_Q - z`, `F = alpha*j_*(2j_*+3) - z`, `eta = 2 Np beta/F`.

If `F>2 Np beta`, then `D>=F>0`, `QHQ-z >= (1-eta) D>0` as quadratic forms. Inverse monotonicity gives

`(QHQ-z)^(-1) <= (1-eta)^(-1) D^(-1)`.

For `B(z)=(QHQ-z)^(-1/2) QHP`, this yields the explicit **finite-graph, fixed-coupling sufficient inequality**

`||B(z)||² <= beta²/(1-eta) * ||P W Q D^(-1) Q W P||`.

The right-hand matrix is exactly finite-dimensional because `QWP` involves only one additional spin step, even though the resolvent on Q is infinite-dimensional. This uses a standard inverse-order/Schur-type argument; **do not claim methodological novelty**. Its numerical evaluation is explicitly approximate; the underlying mathematical operator inequality is rigorous under its stated hypotheses.

A less sharp but exact bound is

`||B(z)||² <= beta² ||QWP||² / [alpha*j_*(2j_*+3)-2 Np beta-z]`

when its denominator is strictly positive. If it is zero or negative, **NO CERTIFICATE EXISTS FROM THIS ARGUMENT**; do not conclude the physical gap is zero.

## 6. The crucial comparison and its falsification

At `alpha=1`, `beta=1/2`, `z=0`, and `jmax=1/2`:

| Quantity | 2 plaquettes | 3 plaquettes |
|---|---:|---:|
| Rigorous local electric floor | 5 | 5 |
| Exact raw tail norm squared | 5/2 | 13/4 |
| Safe Q-sector denominator | 3 | 2 |
| **Rigorous crude bound on ||B(0)||²** | **5/24** | **13/32** |
| Improved energy-weighted bound (numerically evaluated matrix) | ~0.14824 | ~0.29447 |

Thus a local energy penalty does **not** automatically create a useful **volume-independent global bound**: the number of magnetic terms increases, the denominator shrinks, and the global coupling becomes larger. This falsifies the naive inference of volume uniformity, **not** the energy-weighted approach in every possible form. At `jmax=1`, the three-plaquette improved bound is approximately 0.10557 for the same fixed couplings; increasing spin cutoff helps **at fixed volume and coupling**.

Physical-scaling adverse test: take source (2+1)D coefficients `alpha=g²/2`, `beta=2/(a²g²)`, hold `g²=2`, so `alpha=1`, `beta=1/a²`. At `a=1`, the **three-plaquette** `jmax=1/2` bound has denominator `5-6=-1` and is invalid. At `a=1/2`, beta=4, it becomes much more negative even for jmax=1. This is a **failure of the sufficient certificate** under this test, not a demonstration of gaplessness or a physical continuum extrapolation. The lattice is spatially 2D; results must NOT be imported directly into the 4D Clay question.

## 7. Reproducibility and actual status

Run in the isolated `phase4/` directory (or let the dedicated branch-scoped workflow run):

`OPENBLAS_NUM_THREADS=1 python -m unittest -v test_phase4_three_plaquette`

The local prototype passed **17/17 tests** on Python 3.13.5/NumPy 2.3.5/SymPy 1.14/opt_einsum 3.4. The test initially requested an out-of-scope cutoff n=5; that fixture was corrected to stay within the deliberately bounded implementation. No physical model equation was changed. Exact-head GitHub CI is a separate required admission gate.

No experiment here produced a four-dimensional continuum Yang–Mills mass gap, a unique thermodynamic limit, a formal Lean proof of the three-plaquette model, peer review, or a substantiated literature-novel theorem.

**Next single mathematical question:** can the extensive factor `2 Np beta` be replaced *under a proved physical low-energy localization or conditional spectral construction* by a graph-local, energy-weighted estimate without importing an assumed mass gap? The smallest valid test is a connected four-plaquette graph with one fixed local excitation and an explicit comparison of total vs local resolvent controls, including adverse physical scaling. Do not expand until that conjectured localization statement is precisely formulated and falsifiable.
