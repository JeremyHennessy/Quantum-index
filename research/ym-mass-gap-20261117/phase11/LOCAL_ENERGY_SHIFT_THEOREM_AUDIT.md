# Phase 11 — published theorem applicability to local energy shifts

**Research date:** 2026-11-18 UTC. This audit distinguishes *published statements* from a proposed *new application* and a currently **UNPROVED multiparameter extension**. No original mathematical-physics theorem, publication priority or continuum result is claimed.

## Full object to be bounded

On the untruncated original-link SU(2) physical Hilbert space define H_N(z), O=W1, E_N(z) and its rank-one analytic Riesz P_N(z). Introduce the gauge-neutral C² probe and source perturbations:
  K_N(z,lambda)=H_N(z)⊗I+s I⊗|1><1|+lambda O⊗sigma_x,
  H_N(z,h)=H_N(z)−hO.
Define D_N(z,lambda)=E_N^probe(z,lambda)−E_N(z), L_N(z,h)=E_N(z,h)−E_N(z), each for a chosen simple analytic vacuum-origin eigenbranch. The previously PROVED algebra is
  F_N(s,z)=−[lambda²]D_N(z,lambda)−([h]L_N(z,h))²/s.
An N-independent *jointly complex analytic*, *uniformly bounded* local shift D and L in a common z×lambda×h neighbourhood suffices by Cauchy to bound F_N, but is NOT established simply from the analyticity of extensive E_N(z).

## 1. Del Vecchio–Fröhlich–Pizzo–Rossi (2020) — strongest spectral precedent, exact limit

Original primary accessible article: *Lie–Schwinger Block-Diagonalization and Gapped Quantum Chains: Analyticity of the Ground-State Energy*, J. Funct. Anal. 279 (2020) 108703, DOI https://doi.org/10.1016/j.jfa.2020.108703 , PDF https://ricerca.uniba.it/retrieve/dd9e0c68-9eb4-1e9c-e053-3a05fe0a45ef/Lie-Schwinger.pdf .

**Inspected exact statements:** §1.1 Eqs. (1.1)–(1.12): *identical* separable site Hilbert H, same onsite nonnegative h with isolated constant vacuum/gap, finite-support symmetric interaction potentials V_(k,i) under uniform relative-form bounds, K_N(τ)=Σh_i+τΣV, a **single** complex scalar τ multiplying fixed potential operators. §1.2 and Theorems 3.6/3.8 (pp.24–25): for sufficiently small |τ| in a common disk independent of N, an analytic nondegenerate vacuum-origin eigenvalue is isolated by a uniform **complex spectral distance**. Proposition 3.9's analytic energy **per site** also assumes translation invariance and is NOT invoked for our boundary defects.

**Exact original-link geometry:** Group N plaquette links into N+1 nearest-neighbour column sites: site i<N has (top_i,bottom_i,vertical_i), final site N has vertical_N. Each face spans only sites i,i+1, ||W_i||<=2. Onsite electric gap of every site is δ=3alpha/4. The probe is an extra C² factor at the left site with gap s; the first-face O remains supported on the first two columns. The perturbing operators are bounded and local, and source/probe are gauge invariant.

**Subtle hypothesis audit, previously implicit:** the original paper Eq. (1.1) assumes identical single-site H and h, while the *bare* final column has only one link and only the first column contains the probe. An **exact spectator-padding construction** can make the hypotheses geometrically match without altering the physical low eigenbranch:
  - Give each of the N+1 sites the same enlarged factor H_site=L²(SU(2))^⊗3⊗C².
  - All sites receive the SAME nonnegative onsite h=alpha(C1+C2+C3)+s|1><1| with unique constant×|0> vacuum and gap δ_probe=min(3alpha/4,s)>0.
  - For i<N, the three original links fill the corresponding factors; at i=N, add two **uncoupled dummy SU(2) links**, both with independent electric Hamiltonians and vacuum ground. All extra auxiliary probes i>0 are uncoupled spectators, with gap s.
  - Magnetic W_i act on the appropriate original four link variables; lambda O sigma_x acts only on the actual probe at column 0, and the source -h O on the first-face original variables. Dummy links and dummy qubits never enter any W, source or probe interaction. Their exact tensor-factorized vacuum eigenbranch contributes zero ground energy, hence E_N(z,h) and E_N^probe(z,lambda) match the unpadded system in their admitted finite-volume neighbourhood.
This removes the homogeneous-site **geometric** obstruction. It does NOT prove the desired analytic local-energy shift bounds or introduce any actual new physical links. The padding is a proof device, not a modification of the research model.

**Hard unproved transfer:** Theorem 3.8 is for **one scalar complex τ** times fixed symmetric interaction potentials. Our independent complex (z,lambda,h) enters different local terms, and for independently complex ratios the fixed underlying potentials are not necessarily symmetric. The theorem does NOT explicitly provide a **uniform joint polydisk**, bounds on D_N=E_N^probe−E_N, on L_N=E_N(z,h)−E_N(z), or on the second λ derivative and source h derivative. Its local Lie–Schwinger series/norm bounds may plausibly extend to multiple small couplings/defect insertions, but this requires a proof tracing the uniform constants and cancellations. We do NOT claim that proof was completed.

## 2. Yarotsky (2006): convergent cluster expansions and weak-* analyticity, not an automatic defect bound

D. A. Yarotsky, *Ground states in relatively bounded quantum perturbations of classical lattice systems*, Commun. Math. Phys. 261 (2006) 799–819, primary preprint https://arxiv.org/pdf/math-ph/0412040 .

**Inspected primary original:** §1 Eqs. (1)–(2), Theorem 1 (pp.2–4): possibly infinite-dimensional local spaces, unbounded gapped classical onsite terms, weak relatively form-bounded finite-range perturbations; uniform finite-volume **real** gap and weak-* analytic **infinite-volume local observable expectations** for analytic perturbation terms. §2 Lemma 1 and Eq. (10) construct an analytic operator family in **independent local parameters z_x** on a finite cluster, apply a multivariable Schwarz estimate, and derive weighted space–time polymer activities. This makes the **multiparameter cluster technique** especially relevant prior art.

**Important limit:** Original theorem states translation-invariant perturbations and uses periodic finite volumes for simplicity, and its weak-* analyticity conclusion specifically concerns the local observable expectation in the **infinite-volume** ground state. Source/spectator/probe boundary defects break literal translation invariance. We have not independently upgraded the exact cited theorem to a uniform **finite-volume complex** local energy defect bound for arbitrary inhomogeneous sources. Analyticity of individual E_N, weak-* analyticity of local observables, or analytic *pressure per site* cannot be identified with |D_N|<=C_D without an additional cluster-defect argument. A possible route would compare linked polymer partitions with and without the left-end insertion and prove absolute summability of polymers touching that endpoint; this **is not carried out here**.

The original source contains precisely the sort of local multivariable analytic machinery that might close the missing lemma. That is a justified direction for a future *single* bounded source-based proof, but no result is promoted from it automatically.

## 3. Yarotsky 2004 and 2005 — qualified indirect sources

- Yarotsky, *Perturbations of Ground States in Weakly Interacting Quantum Spin Systems*, J. Math. Phys. 45 (2004), DOI https://doi.org/10.1063/1.1705718 . Journal abstract describes weak bounded finite-range perturbations of gapped product systems. Complete primary proof not acquired here; no multiparameter local defect theorem attributed.
- Yarotsky, *Uniqueness of the Ground State in Weak Perturbations of Non-Interacting Gapped Quantum Lattice Systems*, J. Stat. Phys. 118 (2005), DOI https://doi.org/10.1007/s10955-004-8780-x . Journal abstract and the 2022 source's cited restatement substantiate boundary stability, not our specific complex local energy response. No inaccessible equation is reconstructed from memory.

## 4. Henheik–Teufel–Wessel (2022) — real local equal-time bound, not joint complex energy

*Local Stability of Ground States in Locally Gapped and Weakly Interacting Quantum Spin Systems*, Lett. Math. Phys. 112 (2022) 9, open primary https://pmc.ncbi.nlm.nih.gov/articles/PMC8766402/ . Definition 1 allows arbitrary finite graph subsets, infinite-dimensional sites, unbounded on-site terms with a product vacuum and gap, bounded finite-range interactions. Theorem 3 proves exponential insensitivity of **bounded local equal-time ground-state expectations** to a distant *real* local perturbation; Theorem 7 discusses the relevant weak-interaction stability. These establish the restricted Phase 9 statements, not a uniform complex polydisk or an analytic local-energy shift D_N. Do not replace the probe F_N by an ordinary local A.

## 5. Henheik–Wessel (2026) — current rigorous response theory, incompatible local operator class

*Response Theory for Locally Gapped Systems*, J. Stat. Phys. 193, 151 (published 12 October 2026), DOI https://doi.org/10.1007/s10955-026-03703-1 ; full open primary https://link.springer.com/article/10.1007/s10955-026-03703-1 .

**Actual published hypotheses:** Introduction immediately before §1.3 says: *only finite-dimensional spaces and bounded operators* are treated for simplicity. §2.1, Eq. (13), assumes sup_x dim H_x<∞; §2.2 Eqs. (14)–(15) treats bounded self-adjoint local SLT interaction operators on finite-dimensional tensor factors. §4.1 Theorem 4.1 proves **adiabatic response** expansions under a local dynamical gap and quasi-local commutator machinery, with stated support-distance and switching assumptions. Kubo's formula here is **not** a uniform joint-complex-coupling Riesz-projection defect-energy theorem. Our SU(2) original links are infinite-dimensional L²(SU2) and onsite electric Casimirs are unbounded. A rigorous infinite-dimensional/unbounded-operator extension is required before applying the published theorem. The 2026 paper is correctly included as relevant context but **NOT** imported as a proof.

## 6. Real local energy inequalities and the missing COMPLEX bridge

For sufficiently small *real* h,lambda in an identified isolated-ground region, the bounded perturbations have norms at most 2|h|, 2|lambda|. Thus min–max gives |L_N(z,h)|<=2|h| and |D_N(z,lambda)|<=2|lambda|, constants independent of N. Combining with the Phase 9 published real strong-electric gap yields a common small **real** neighbourhood for the ground branch, including probe gap min(s,gamma). These are genuine elementary statements but real bounds do NOT imply a complex uniform bound.

**The only missing step for this proposed method:** produce an exact-source-qualified, N-independent **joint-complex polydisk** and absolute bound on these local energy defects (possibly via site-labelled connected-polymer bounds with the source/probe coupling attached to one face) while preserving the proper Riesz eigenbranches. If such bounds are proved, the elementary Cauchy reduction in LOCAL_PROBE_IDENTITY.md gives the full Phase 9 response majorant. In this research turn those bounds remain OPEN.

**Novelty classification:** standard second-order eigenvalue susceptibility and analytic defect-source methods have long-standing literature precedents. Our finite-N probe identity is a correct restricted reduction, not established as a new theorem of mathematical physics; the strong-electric volume-uniform complex inference is **unverified**.
