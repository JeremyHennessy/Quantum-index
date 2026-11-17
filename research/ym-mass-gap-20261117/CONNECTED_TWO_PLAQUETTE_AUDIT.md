# YM Phase 2 — connected two-plaquette SU(2) gauge-invariant preflight

**2026-11-17. Scope: research-only; NOT a four-dimensional continuum theorem, and NOT a claimed novel result.** This is an independently reproduced piece of finite (2+1)-dimensional Hamiltonian lattice gauge theory, designed to falsify naive representation-tail assumptions.

## 0. Preservation and status

Research basis: `JeremyHennessy/Quantum-index`, parent research head `557aa17b60a7469a4b9e60824e420a420373b136`; approved main baseline `a60397f017c5c0bfc2bf88be046320a00c9d28de`. Historical identifiers must be rechecked before write. The accepted research charter, one-plaquette min–max certificate, global-volume negative control, Lean proofs and validation receipts must remain byte-for-byte unchanged. The existing one-plaquette bound `E1-E0 >= 3/2 - sqrt(21/20)/2 > 79/80` is a standard variational argument in the **specified** reduced Jacobi operator. Its proof of the stated inequality checks algebraically but does not prove any 4D continuum statement; literature novelty is unestablished.

### Sources and exact boundaries

- **Primary**: L. Ebner, A. Schäfer, C. Seidl, B. Müller, X. Yao, *Entanglement entropy of (2+1)-dimensional SU(2) lattice gauge theory on plaquette chains*, Phys. Rev. D 110, 014505 (2024), **Section II, Eq. (1), printed page 2 / PDF page 2**, https://doi.org/10.1103/PhysRevD.110.014505 . The cited paper uses the seven-link Gauss-law electric basis, electric `j(j+1)` on a link, Wilson loop terms, and Wigner-6j recoupling. It explicitly considers **2+1D plaquette chains**, not the four-dimensional Clay problem. Its September 2024 correction concerns Fig. 7's legend. Figures/other physics results in the paper are not independently reproduced here.
- **Second source**: *Entanglement properties of SU(2) gauge theory*, Communications Physics (2025), Eq. (1) and SU(2) lattice-gauge theory section, https://www.nature.com/articles/s42005-025-02298-5 . It independently states the link Casimir, Gauss-law and 6j framework.
- **Conventions**: For the first paper's displayed Eq. (1), take `alpha = g²/2`, `beta = 2/(a² g²)`, with the paper's own lattice units; the tested arbitrary `(alpha,beta)` pairs are **mathematical examples**, not claimed to follow a continuum scaling trajectory.
- **Other**: Kogut and Susskind, Phys. Rev. D 11, 395 (1975), https://doi.org/10.1103/PhysRevD.11.395; known Hamiltonian technique, not novelty.

## 1. Graph and Gauss-law basis

Six vertices `A,B,C` (top, left-to-right), `D,E,F` (bottom). Seven oriented links: `AB, BC, DE, EF, AD, BE, CF`. Left plaquette loop starting at `B`: `AB^-1 · AD · DE · BE^-1`. Right starting at `B`: `BE · EF · CF^-1 · BC^-1`. Their shared link `BE` appears with opposite orientations. The outer loop is their concatenation, with `BE^-1 BE` cancelled. All site gauge transformations are imposed; there are **no external charges** and **open spatial boundaries**.

The four outer degree-two vertices force their adjacent links to carry equal SU(2) irreducible representations. Denote the left outer three links by `jL`, the right outer three by `jR`, and the shared link `BE` by `jS`. At `B` and `E` the three link spins must couple to a singlet. For SU(2), that means `|jL-jR| <= jS <= jL+jR` and `jL+jR+jS` is an integer. Three-valent SU(2) singlet intertwiner multiplicity is one. Therefore `(jL,jR,jS)` labels the complete physical **electric/spin-network basis** of this finite graph, before cutoff.

With **all seven link spins `j <= 1/2`**, the physically admissible states are exactly:

| State | `2jL,2jR,2jS` | Electric eigenvalue / alpha |
|---|---|---:|
| vacuum | `(0,0,0)` | `0` |
| left fundamental plaquette | `(1,0,1)` | `3` |
| right fundamental plaquette | `(0,1,1)` | `3` |
| outer perimeter loop | `(1,1,0)` | `9/2` |

One more **explicitly excluded** physical state with the same outer spins is the shared-link triplet `(1,1,2)` with electric eigenvalue `13/2 alpha`; it violates the **uniform** `j <= 1/2` link cutoff because `jS=1`. This *five-state* span is not a complete higher-spin cutoff. The general electric eigenvalue is

`E_elec = alpha [ 3 jL(jL+1) + 3 jR(jR+1) + jS(jS+1) ].`

The electric energy `9 alpha / 2` of the outer loop is **not** the sum `3 alpha + 3 alpha` of two independent one-plaquette excitations; the shared link changes the state and its cost. This is one check that the graph is genuinely coupled.

## 2. Two independently derived magnetic matrix calculations

Fix a spanning tree. The two independent loop holonomies `G,H ∈ SU(2)` have product Haar measure, with residual simultaneous conjugation. Let `χ(G)=Tr_F(G)`. The normalized gauge-invariant functions are

- `f0 = 1`, `fL=χ(G)`, `fR=χ(H)`, `fO=χ(GH)`;
- `fT = (2/sqrt(3)) [χ(G)χ(H) - χ(GH)/2]`.

The outer loop `GH` contains no shared-link holonomy. The product of two loops has shared-link spin `0 ⊕ 1`; orthogonality and the SU(2) character convolution identity imply

`χ(G)χ(H) = (1/2) fO + (sqrt(3)/2) fT`.

The trace functions are orthonormal by Haar integration, including `⟨χ(G)χ(H), χ(GH)⟩=1/2`. In conventional recoupling notation, the relevant absolute Wigner-6j factors are `|{1/2 1/2 0; 1/2 1/2 0}|=1/2` and `|{1/2 1/2 0; 1/2 1/2 1}|=1/2` (checked using SymPy `wigner_6j`); multiplication by `sqrt(2jS+1)` yields `1/2` and `sqrt(3)/2` after choosing compatible basis phases. The cited 2024 paper states 6j recoupling, but these two particular numerical coefficients are **derived here**, not quoted as the paper's printed matrix elements.

**Independent computational route:** identify SU(2) with unit quaternions in `S³`, so `Tr_F(G)=2G0`, `Tr_F(GH)=2(G0 H0-Gvec·Hvec)`. Uniformly averaging over the eight points `±e0,±e1,±e2,±e3` for each quaternion reproduces its Haar second moments exactly and integrates all odd monomials to zero. Every Gram or Wilson matrix element in this five-state space has degree at most **three separately in each quaternion**; the cubature is therefore exact for precisely this calculation. It is NOT a general replacement for Haar integration of higher-degree or higher-spin observables. This independently reconstructs the whole `5×5` Gram and the two Wilson matrices.

Writing `WL=χ(G)` and `WR=χ(H)` for multiplication operators, the **only nonzero** off-diagonal entries in this five-state subspace (symmetric counterparts understood) are

`⟨vac|WL|L⟩=1`, `⟨R|WL|O⟩=1/2`, `⟨R|WL|T⟩=sqrt(3)/2`;

`⟨vac|WR|R⟩=1`, `⟨L|WR|O⟩=1/2`, `⟨L|WR|T⟩=sqrt(3)/2`.

The Hamiltonian **compressed to** a declared finite subspace is `H_P = P (alpha Σ_l E_l² - beta(WL+WR)) P`. Here `P` is the 4-state link-spin-1/2 projector or the explicitly described 5-state enlargement. Both matrices are Hermitian and involve shared-link coupling; **neither finite subspace is asserted to be invariant under the full Hamiltonian**. Do not conflate `P H P` with the physical untruncated spectrum.

## 3. A decisive missing-representation falsifier

Apply the **left** plaquette multiplication operator to the **right** single-loop state:

`WL fR = χ(G)χ(H) = (1/2) fO + (sqrt(3)/2) fT`.

At the uniform link cutoff `j <= 1/2`, `fO` is retained but `fT` (`jS=1`) is not. Consequently the **exact squared norm fractions for this one operator action** are

- `||P WL fR||² = 1/4` (retained),
- `||(I-P) WL fR||² = 3/4` (discarded).

This is an **exact, cutoff-specific representation-theory statement**, not a numerical estimate. A proposed tail bound that assumes high shared-link spin coupling is always small at cutoff `jmax=1/2` is falsified. The corresponding **magnetic** matrix element is scaled by `beta`; the result says nothing by itself about a small **physical** spectral gap in a large lattice. It also does not prove tail leakage remains large at higher cutoffs.

## 4. Numerical cross-checks and limitations

With purely illustrative `(alpha,beta)=(1,1/2)`, symmetric diagonalization gives (energy units defined above):

| Projection | E0 | E1 | E1-E0 |
|---|---:|---:|---:|
| complete 4-state `j<=1/2` link cutoff | -0.1596028310 | 3.0000000000 | 3.1596028310 |
| 5-state subspace adding only shared `jS=1` | -0.1623756691 | 2.9791358456 | 3.1415115147 |

The second row is **not** a complete `jmax=1` lattice basis, so the difference does NOT measure true representation cutoff convergence. Numerical eigenvalues were checked against an independently implemented NumPy symmetric eigensolver. Nothing here proves a bound for the full interacting infinite-dimensional Hamiltonian, even at this finite spatial graph.

Local checks: `node --test two-plaquette.test.mjs`. These include graph closure, explicit local gauge covariance of Wilson traces under six independent SU(2) vertex transformations, Gauss-law enumeration, exact Haar/cubature-vs-recouping matrix agreement, Hermiticity, electric-energy constraints, independent eigenvalues, incomplete truncation warning, input rejection, and missing-representation falsifier. All twelve tests passed in the initial local environment. Independent SymPy 6j and NumPy eigvalsh checks support the specified coefficients. They are not a Lean kernel proof or expert peer review.

## 5. Claim classification and next admissible experiment

1. **Established physics**: Kogut–Susskind link Casimir and Wilson trace, SU(2) spin-network Gauss-law triangle rules, 6j recoupling and general finite plaquette-chain modeling (cited above).
2. **Reproduced mathematics / local tests**: exact four-state cutoff basis, two independent 5×5 projected matrix constructions, one-step omitted shared-triplet squared norm `3/4`. This is not claimed to be new to literature.
3. **Numerical only**: projected gaps and comparison of the 4 vs selective 5 states. Not an upper/lower certificate for the complete lattice spectrum.
4. **Failed hypothesis**: automatic smallness of **all** high-spin Wilson action leakage under a fixed `jmax=1/2` cutoff. Counterexample is precise and local.
5. **Still open**: rigorous scale-adaptive local tail bounds that remain meaningful under increasing spin cutoff, interacting volume, and continuum scaling. Do not infer even a finite-graph gap from this one-step matrix calculation.

**Single best next bounded experiment:** derive and independently verify the **complete** `jmax=1` (not selective five-state) connected two-plaquette spin-network Wilson matrix using exact 6j recoupling and an independent full-link Haar/CG calculation; then compare leakage from the `jmax=1/2` subspace, varying `alpha,beta`. Stop at any unverified matrix element. Only after this admission gate should a new tail inequality be proposed. No 4D mass-gap proof is established.
