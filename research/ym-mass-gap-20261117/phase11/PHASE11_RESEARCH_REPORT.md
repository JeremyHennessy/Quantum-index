# Quantum Index — Yang–Mills Research Phase 11
## Exact local auxiliary-probe reduction, complex source susceptibility and continuum-relevance decision

**Date:** 2026-11-18 UTC. **Scientific disposition:** **A — restricted finite-volume identity independently established** (standard existing Feshbach/Rayleigh–Schrödinger mathematics, newly applied explicitly to the chosen SU(2) observable); **D — insufficient evidence** for the uniform complex-polydisk local-energy defect and physical all-orders resolvent tail. **Continuum direction: PIVOT.** None of these statements establishes mathematical novelty, a continuum theory or the Clay mass-gap theorem.

## 1. Verified baseline and preservation boundary

Project: JeremyHennessy/Quantum-index. Owner-approved production main at intake: a60397f017c5c0bfc2bf88be046320a00c9d28de. Immutable qualified Phase 8: 1cfe6f386849aed65b5b12e843972e4106524921 (PR #152). Qualified Phase 9: 50f07ceb0db117d2e4d9d46a14a79c947d666971 (PR #153). **Exact Phase 10 parent:** 0b79953a68ec866a04126eb40bead69076e28874 (draft PR #154), no change at Phase 11 intake. Phase 10 dedicated exact-head run 44229753648 passed 77/77 tests; separate catalog workflow 44229849307 later completed success at the same SHA. No preexisting Phase 11 branch existed at intake.

The binding charter (blob e1e6ddbb06e30bd69f13308f6212518bfe361e7c), Phase 1–10 reports, all historical claim-registry objects, original SU(2) mathematical implementations, production files, catalog, UI and deployments are immutable. Phase 11 is research-only on a new branch from exact Phase 10. Do not merge or deploy.

Previous restricted mathematical controls remain differentiated:
- Phase 5 DIFFERENT high-spin Q-complementary resolvent distant second-order +1/704.
- Phase 6 actual full physical centered G_N beta² coefficient −6647/71280 at alpha=s=1.
- Phase 7 full spin finite-order last-face support c_(N,k)=0 whenever k<2(N−1).
- Phase 8 full untruncated finite sixth-order coefficient c_(4,6)(1,1)=+1504856360495713/3397652693362287360000; j<=1/2 projected sixth-order sign is negative and must not be used as physical.
- Phase 9 published weak-interaction strong-electric N-uniform **real** gap and local equal-time expectation stability, but no physical dynamic-resolvent tail.
- Phase 10 published N-uniform weak-complex-coupling isolated eigenbranch and real Laplace transform of centered Wilson imaginary-time correlation. Phase 10's N-copy two-level model showed uniform complex spectral separation does not imply ||P_N|| uniform.

## 2. Exact physical observable and the proposed local probe

For finite N>=2, H_phys,N is the no-charge SU(2) Gauss-invariant sector of L²(SU(2)^(3N+1), normalized Haar), without a spin cutoff; H_N(z)=alpha H_E−z∑_i W_i, alpha>0, defined on D(H_E). Each fundamental Wilson W_i is a bounded real gauge-invariant multiplier with ||W_i||<=2. H_E is nonnegative self-adjoint and has a unique pure-electric vacuum separated by 3alpha on the *physical* sector. Near z=0, the vacuum-origin rank-one Riesz projection P_N(z) and eigenvalue E_N(z) are analytic for each finite N. For fixed s>0, require explicitly that B_N(z,s)=(H_N(z)−E_N(z)+s)^(-1) exists.

With O=W1 and mu_N(z)=Tr(P_N O), the holomorphic centered scalar is
  F_N(s,z)=Tr[P_N(O−mu_N) B_N(s,z) (O−mu_N)].
For real small z this is the physical G_N from Phases 6–8. For complex z, P_N is generally *nonorthogonal* and must not be replaced by a conjugate-normalized right-eigenvector expectation.

On H_phys,N⊗C² introduce gauge-neutral probe levels |0>,|1>:
  H_N^probe(z,lambda)=H_N(z)⊗I+s I⊗|1><1|+lambda O⊗sigma_x.
The new spectral probe has excitation energy s, strictly positive by assumption; O preserves Gauss law, no artificial gauge charge is introduced.

## 3. Mathematical result (restricted A): exact finite-volume probe/source identity

Under the separate finite-N simple-eigenbranch and shifted-inverse hypotheses, the probe eigenvalue E_N^probe(z,lambda) continuing from E_N(z) at lambda=0 satisfies, **exactly**,
  [lambda²](E_N^probe(z,lambda)−E_N(z))
  = −Tr[P_N(z) O B_N(z,s) O].

The proof works for complex z via the analytic left/right Riesz projection and an independently justified complementary reduced resolvent. Probe sigma_x has no first-order matrix element in |0> and sends the source sector entirely into the probe-|1> resolvent block. Inserting the rank-one identity P_N B_N=B_N P_N=P_N/s yields the exact vacuum-pole correction,
  **F_N(s,z)=−[lambda²](E_N^probe(z,lambda)−E_N(z))−mu_N(z)²/s.**
A separate local field H_N(z,h)=H_N(z)−hO gives the **exact** source-energy first coefficient,
  **mu_N(z)=−[h](E_N(z,h)−E_N(z)).**

These are *direct consequences of established perturbation/Schur-complement mathematics*, not a newly established mass-gap or all-orders locality theorem. Their validity on the full untruncated **finite** SU(2) Hilbert follows from general bounded-perturbation analytic operator theory; finite-dimensional tests are independent falsifiers, not the proof.

**Method A, proof:** See LOCAL_PROBE_IDENTITY.md §2–4 for full reduced-resolvent derivation, left/right normalization and trace-order handling.

**Method B, independent exact control:** Take a distinct toy two-level H(z)=[[0,−z], [−z,2]], O=[[1,1],[1,−1]], s=3/2. Compute analytic Riesz/centered resolvent directly, and independently the λ² probe-energy coefficient from the implicit derivative of a **4×4 characteristic determinant**, plus source h derivative from another 2×2 determinant. Check z=0 (mu=1, uncentered=20/21, centered=2/7, probe coefficient=−20/21), z=1/3, z=i/5 (P nonorthogonal). Invalid s=0 and resonant s=−2 controls are rejected. See test_phase11_probe.py. No arbitrary SU(2) link-spin cutoff is passed off as physical.

## 4. Independent weaker result: volume-independent REAL local energy Lipschitz bounds

When z,h,lambda are real and the isolated analytic branches remain the actual ground energies, min–max with ||O||<=2 gives
  |E_N^probe(z,lambda)−E_N(z)|<=2|lambda|,
  |E_N(z,h)−E_N(z)|<=2|h|
for **every finite N**, no N-dependent constant. If the **published** Phase 9 uniform strong-electric real physical gap gamma>0 is admitted, the probe-at-lambda0 real gap is min(gamma,s), hence for |lambda|<min(gamma,s)/4 the unique ground branch remains isolated, and analogously for |h|<gamma/4. These are real-only statements, not a uniform holomorphic polydisk.

## 5. Rigorous conditional all-orders connection, hard gate NOT passed

Write D_N(z,lambda)=E_N^probe(z,lambda)−E_N(z) and L_N(z,h)=E_N(z,h)−E_N(z). Suppose there exist N-independent r,rho,eta>0 and C_D,C_h<∞ such that, throughout the corresponding complex bidisks with neighbourhoods of their closure, the analytic branches are consistently defined and |D_N|<=C_D, |L_N|<=C_h. Cauchy in lambda,h gives
  |[lambda²]D_N|<=C_D/rho²,
  |mu_N|<=C_h/eta,
  |F_N(s,z)|<= M := C_D/rho²+(C_h/eta)²/s.
Then Phase 7's exact last-face cancellation and Cauchy in z yield for d=N−1 and all 0<beta0<r:
  ∑_(k>=2d)|c_(N,k)| |beta|^k
  <= 2M( beta0/r)^(2d)/(1−beta0/r) = A q^d,
  A=2M/(1−beta0/r), q=(beta0/r)² in (0,1).
The algebra is rigorous; **no N-independent complex bidisk with those two local energy bounds was proved or numerically guessed**. This is the single central OPEN mathematical lemma, defined in ONE_DECISIVE_LEMMA_OR_COUNTEREXAMPLE.md.

The published 2020 complex eigenenergy theorem **does not automatically** give independent (z,lambda,h) joint analyticity or **bounded local energy differences** merely because an extensive E_N(z) is analytic. The needed source/defect structure and nonselfadjoint complex norms require a separate argument. No unverified mathematical promotion is made.

## 6. Prior art and hard failure points

**Del Vecchio, Fröhlich, Pizzo, Rossi (2020)**, JFA 279 108703, DOI https://doi.org/10.1016/j.jfa.2020.108703 , §1.1 Eqs(1.1)–(1.12), Theorems 3.6/3.8: analytic isolated eigenbranch for one complex scalar τ times fixed symmetric finite-range interactions, uniform in chain length. Our physical column-chain geometry is nearest neighbour; padding with decoupled spectator Casimirs/qubits can realize identical onsite spaces and onsite gap min(s,3alpha/4) **without changing** the vacuum-origin eigenbranch. **This does not prove the required multiple-complex-parameter theorem or local energy-defect uniformity.** Do not confuse energy-density analyticity with local-defect boundedness.

**Yarotsky (2006)**, https://arxiv.org/pdf/math-ph/0412040 , original Theorem 1 and §2 Lemmas 1–3, gives gapped weak product-ground systems, local weak-* analyticity and *site-wise independent complex variables* within a convergent space–time polymer proof. But its literal theorem uses translation-invariant perturbations and periodic finite boxes, with the analyticity conclusion for local infinite-volume expectations; neither the exact inhomogeneous open-ladder source/probe energy defect nor a uniform finite-volume complex absolute bound is explicitly established by this review.

**Henheik, Teufel, Wessel (2022)**, https://pmc.ncbi.nlm.nih.gov/articles/PMC8766402/ , Definition 1/Theorem 3/Theorem 7: weakly interacting infinite-dimensional sites and unbounded onsite terms allowed, but theorem controls real ordinary bounded local ground-state expectations, not this complex local energy defect.

**Henheik and Wessel (2026)**, *Response Theory for Locally Gapped Systems*, published October 12, 2026, https://doi.org/10.1007/s10955-026-03703-1 , §2.1 Eq(13), §2.2 Eqs(14–15), §4.1 Theorem 4.1: higher-order *adiabatic* local response and Kubo formula under a local dynamical gap, formulated for **uniformly finite-dimensional local Hilbert spaces and bounded operators**. Original-link SU(2) L² links are infinite-dimensional with unbounded electric Casimirs, and the theorem does not supply the exact complex Riesz-probe-energy susceptibility. **DO NOT APPLY directly.** All source/literature limits recorded in LOCAL_ENERGY_SHIFT_THEOREM_AUDIT.md.

2004 and 2005 Yarotsky complete original proofs were not available in this inspection; no fictional source locators are used. There is no novelty certification.

## 7. Negative controls and the continuum decision

The chief rejected shortcuts are: omit mu²/s; replace analytic left/right eigenprojections by orthogonal conjugation at complex z; extend across a singular probe shifted spectral point; infer complex uniformity from real min–max; and infer a multiparameter uniform defect bound from a published **one-parameter** complex ground-energy theorem. They are documented without editing older records in NEGATIVE_RESULTS.md.

**PIVOT for the Clay objective** (details in CONTINUUM_RELEVANCE_DECISION.md). The one-strip spatial (2+1)D SU(2) strong-electric region |beta|/alpha small does not persist as a→0 at fixed dimensionful g² under alpha=g²/2 and beta=2/(a²g²), since beta/alpha=4/[a²(g²)²]→∞. Even proving the complex local defect bound would remain restricted fixed-spacing mathematics. The official Clay target is a nontrivial four-dimensional continuum quantum Yang–Mills on R⁴ with positive mass gap for every compact simple gauge group. A mathematically serious next **different** investigation should independently audit published constructive 4D weak-coupling/renormalization and reflection-positivity methods, identify one precise unproved continuum/infrared step, and then decide whether there is any credible proof program. No Phase 12 or speculative strong-coupling extension authorized by this report.

## 8. Reproducibility and acceptance boundaries

All new code remains under phase11/, pinned Python 3.12, NumPy 2.3.5, SymPy 1.14.0, opt_einsum 3.4.0 inherited from the immutable Phase 8 requirements. Run in phase11/:
  OPENBLAS_NUM_THREADS=1 python -m unittest -v test_phase11_probe
The Phase 11 dedicated CI must rerun prior Phase 5–10 controls and the eight local-probe tests, check append-only claim registry and exact parent-vs-head file differences, and record the **actual final SHA/job logs**. A passing job validates code regressions, not a new uniform theorem or expert mathematical peer review.

**Final classification: A ONLY for the finite-volume exact probe/local-source reduction; D for the N-uniform complex local defect and centered-resolvent coefficient tail; PIVOT for the continuation toward four-dimensional Clay Yang–Mills.**
