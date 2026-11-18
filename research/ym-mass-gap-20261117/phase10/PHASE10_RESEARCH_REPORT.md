# Quantum Index — Yang–Mills Phase 10 research report
## Uniform complex-coupling analyticity: a published eigenbranch theorem, an exact nonnormal countercontrol, and an open dynamical locality bridge

**Date:** 2026-11-18 UTC. **Model:** fixed-spacing finite open spatial two-row SU(2) plaquette ladder, full original-link Gauss-invariant Hilbert space (no spin cutoff). **Scientific decision:** **B** for recovery and application of a published strong-electric **uniform complex isolated eigenbranch** theorem; **C** for falsification of a specific improper inference to global nonnormal projection/resolvent norms; **D** for the actual desired volume-uniform centered-resolvent and absolute connected coefficient tail. **NOT** A for the original Phase 10 lemma. No new Yang–Mills existence, continuum or mass-gap theorem.

**Exact immutable parent:** Phase 9 head 50f07ceb0db117d2e4d9d46a14a79c947d666971, PR #153. Dedicated exact-head Phase 9 CI run 44226143395 succeeded (Phase 8 inherited 20/20 + Phase 9 six mapping tests, 26/26); the distinct catalog run 44226147247 was still in progress at Phase 10 intake and is NOT counted successful absent a later exact check. **Phase 8:** 1cfe6f386849aed65b5b12e843972e4106524921, draft PR #152, dedicated CI 44223988611 64/64 passing. **Approved production main:** a60397f017c5c0bfc2bf88be046320a00c9d28de at intake, unchanged. The binding charter RESEARCH_CHARTER.md and all Phases 1–9 are preserved byte-for-byte.

### 1. Mathematical starting problem

Let H_phys,N ⊂ L²(SU(2)^(3N+1), Haar) be the gauge-invariant no-external-charge sector of N>=2 open square plaquettes. Let H_N(z)=alpha∑_e C_e−z∑_(i=1)^N W_i on the self-adjoint electric domain (entire bounded analytic perturbation for each finite N), alpha>0, W_i the real fundamental Wilson character with ||W_i||<=2. At z=0 the pure-electric vacuum is the unique constant gauge-invariant vector. At small real z the unique normalized interacting ground is Ω_N(z), E0,N(z), and O=W1. For s>0, the physical centered G_N(s,z) is the bilinear in (O−<Ω_N,O Ω_N>)Ω_N and (H_N−E0,N+s)^(-1).

For complex z, use the rank-one **analytic Riesz projection** P_N(z) of the vacuum-origin eigenbranch, NOT a naively conjugate-normalized complex eigenvector. Define mu_N(z)=Tr(P_N(z)O) and
  F_N(s,z)=Tr[P_N(z)(O−mu_N(z))(H_N(z)−E_N(z)+s)^(-1)(O−mu_N(z))].
For small real z, F_N(s,z)=G_N(s,z).

Phase 9's open lemma asks: for each alpha,s>0 do there exist r>0, M<∞ independent of N for which this exact F_N exists and is holomorphic on a common neighbourhood of |z|<=r and sup_N sup_|z|=r |F_N(s,z)|<=M? If so, Phase 7 exact support coefficients [z^k](G_N−G_(N−1))=0 for k<2(N−1) yield the absolute tail:
  ∑_(k≥2d)|c_(N,k)| |beta|^k ≤ [2M/(1−beta0/r)](beta0/r)^(2d), d=N−1,
for 0<beta0<r and real |beta|<=beta0. The Cauchy deduction is proved **conditionally**; F_N uniform complex analyticity/size is NOT assumed true.

### 2. Reconstructing the scientific baseline without rewriting it

- **Phase 5:** the *different* high-spin Q-complementary resolvent has exact remote second-order difference +1/704 at alpha=1,z_spectral=0. Its unsubtracted, nonphysical connected interpretation was rejected.
- **Phase 6:** the full untruncated interacting-ground-centered physical G has second-order coefficient −6647/71280 at alpha=s=1, independent of finite N>=2; dropping normalized vacuum or E0 shift produces false nonlocality.
- **Phase 7:** independent SU(2) face-center parity and separated active-component factorization prove [beta^k](G_N−G_(N−1))=0 for k<2(N−1). No uniform remainder.
- **Phase 8:** perturbatively complete original 13-link, 34-channel SU(2) calculation finds C6(1,1)=+1504856360495713/3397652693362287360000. The projected j<=1/2 beta^6 result −41497429/42323383872 has the wrong sign and is not physical. Exact matrix integrals and rational algorithms have shared Wigner-3j basis-input limits clearly retained.
- **Phase 9:** existing Yarotsky and Henheik–Teufel–Wessel weak-interaction theorems, mapped first to the unconstrained original-link tensor product and then to the gauge-invariant sector, provide a **real strong-electric volume-uniform gap** and exponential insensitivity of **equal-time local ground-state expectations** to adding a distant final face. They do not directly bound the global shifted centered resolvent or absolute Taylor coefficients. Phase 9's 0<=G_N<=4/(s+gamma_*) is only an individual scalar bound, not remote resolvent locality.
No earlier claim is silently upgraded or overwritten.

### 3. Important published complex-coupling theorem recovered (source-qualified B)

The 2020 work by **S. Del Vecchio, J. Fröhlich, A. Pizzo and S. Rossi**, *Lie–Schwinger Block-Diagonalization and Gapped Quantum Chains: Analyticity of the Ground-State Energy*, JFA 279, 108703, https://doi.org/10.1016/j.jfa.2020.108703 , is directly relevant. Its accessible primary paper (https://ricerca.uniba.it/retrieve/dd9e0c68-9eb4-1e9c-e053-3a05fe0a45ef/Lie-Schwinger.pdf) was inspected at §1.1–1.2 Eqs. (1.4)–(1.17), Lemma 3.2 Eq. (3.24), Theorem 3.6 p.24, Theorem 3.8 pp.24–25 and their surrounding hypotheses. For sufficiently weak interactions the theorem constructs a bounded invertible *finite-volume* nonunitary local block diagonalizer at complex coupling, with a nondegenerate analytic eigenvalue and the remaining spectrum separated by a fixed distance independent of chain length. This is a real published theorem, not a computational observation or original Quantum Index proof.

**Exact model mapping (independently audited):** group every original triplet (top_i,bottom_i,vertical_i) into column site i=0,...,N−1 and the remaining right vertical_N into site N. The complete unconstrained original-link Hilbert product becomes an N+1-site nearest-neighbour tensor chain. Each site has infinite-dimensional separable L²(SU2) factor(s), a unique constant product vacuum, and onsite gap δ=3alpha/4; each face W_(i+1) is bounded (||W||<=2) and acts ONLY on neighbouring column sites (i,i+1). Rescale H/δ, interaction τ=z/δ with weighted relative form constant ≤2 and nearest-neighbour range. The 2020 paper explicitly allows unbounded onsite h_i and finite-range form-bounded V_i, with smallness threshold independent of length. Its conclusion applies to the full-link chain, then the isolated eigenbranch is automatically gauge invariant because the gauge group is a product of SU(2)s with no nontrivial continuous one-dimensional characters; the physical reducing sector inherits isolation. This mapping does not assume a product *physical* gauge Hilbert space.

**What is actually recovered:** existence of an unspecified common weak-complex-coupling disk in which E_N(z) is a simple analytic vacuum-origin eigenvalue and is spectrally isolated by a constant after normalization, uniformly in N. This removes the weakest *eigenbranch-radius* concern from Phase 9 in the strong-electric regime. No explicit numerical threshold or fixed-s shifted-resolvent norm is asserted.

**Why it does not solve the full lemma:** A non-self-adjoint spectrum avoiding a fixed neighbourhood of E_N does not imply a norm bound on its Riesz projection or the shifted inverse. The 2020 paper proves certain **local block** resolvent estimates in the course of constructing U_N and controls its block diagonalization; the exact theorem statement does not supply the required uniform norm of the full U_N and U_N^(−1), nor the global dynamically centered F_N(s,z). For arbitrary fixed s>0, a spectral disk excluded around E_N also does not automatically exclude E_N−s. The statement and proof must not be overextended from eigenenergy to the specific observable.

Other literature is mapped precisely in THEOREM_APPLICABILITY_AUDIT.md. Yarotsky 2006 Theorem 1(4) is weak-* analyticity for **bounded local equal-time A**, not F_N. The 2022 LPPL result is equally limited to equal-time local observables; and the accessible 1D complex-time evolution literature does not directly supply a uniform zero-temperature Riesz-projection centered imaginary-time integral. The primary Yarotsky 2004 and 2005 full articles were not available to inspect; their abstracts and 2022 theorem restatement were used with explicit limits.

### 4. Rigorous real dynamical Laplace bridge (restricted elementary theorem)

At each finite N and real beta the physical K_N=H_N−E0,N≥0 is self-adjoint with Ω_N ground. With bounded O=W1, mu_N=<Ω_N,O Ω_N>, v_N=(O−mu_N)Ω_N∈Ω_N^perp, ||v_N||²≤4, the operator spectral theorem gives for s>0:
  (K_N+s)^(-1)=∫_0^∞e^(−st)e^(−tK_N)dt
as an operator-norm Bochner integral. Thus
  G_N(s,beta)=∫_0^∞e^(−st)C_N(t,beta)dt,
  C_N(t,beta)=<Ω_N,Oe^(−tK_N)OΩ_N>−mu_N²
             =<v_N,e^(−tK_N)v_N>≥0.
The norm domination ||e^(−tK_N)||≤1 proves convergence. A known real interacting gap gamma_* yields C_N≤4e^(−gamma_* t). No N→∞ limit, beta derivative, connected coefficient interchange or complex semigroup is thereby justified. These distinctions are fully proved in DYNAMICAL_RESOLVENT_BRIDGE.md.

### 5. One bounded falsifier of a tempting theorem transfer (C, not a physical contradiction)

**One hypothesis:** "Uniform complex eigenbranch isolation and uniform spectral separation imply the N-uniform global ground Riesz-projector norm and hence a bounded centered dynamical resolvent." Test it exactly on n independent two-level analytic sites, h(z)=[[0,−z], [−z,1]]. Each low eigenvalue e_-(z)=(1−sqrt(1+4z²))/2 and full n-site low eigenvalue n e_-(z) is analytic on |z|<1/2, with exciting differences m sqrt(1+4z²). At z=i/4 the one-site rank-one Riesz projection p has ||p||²=4/3. The full n-site projector P_n=p^⊗n has
  ||P_n(i/4)||=(2/sqrt(3))^n→∞,
despite a constant gap |sqrt(1+4z²)|=sqrt(3)/2. Exact symbolic P²=P, Hp=e_-P, trace and tensor norm checks independently reproduce this.

**Interpretation:** FALSIFIED *general norm inference*, not SU(2) F_N analyticity. The toy's local properly centered response actually **factorizes** for every n:
  F_n(s,z)=1/[(1+4z²)(s+sqrt(1+4z²))],
which is uniformly bounded in a sufficiently small common disk. This demonstrates why exponential global nonnormal projection norms are neither a proof nor a counterexample for the local scalar. A separate triangular 2×2 matrix shows spectral distance alone does not bound inverse norms.

All these statements are algebraic in a **different toy model**, not evidence of a new physical SU(2) theorem. Details and exact falsifier in ONE_DECISIVE_LEMMA_OR_COUNTEREXAMPLE.md; reproducible assertions in test_phase10_one_route.py. No competing speculative approaches were implemented.

### 6. Sharpened open lemma and why no A classification is admitted

The 2020 theorem addresses common-disk **eigenbranch existence**. Still unproved for the physical SU(2) centered F_N is: for fixed alpha,s>0, is there an r(alpha,s)>0 and M(alpha,s)<∞ independent of N>=2 such that H_N(z)−E_N(z)+s is invertible, F_N(s,z) is holomorphic near |z|≤r, and sup_(N,|z|=r)|F_N|≤M? A direct time-integrated linked-polymer majorant for two Wilson insertions with correct vacuum centering and exact SU(2) Gauss sectors would be an acceptable equivalent.

If that final piece were proved, Phase 7's 2(N−1) support threshold and Cauchy's formula would imply an N-uniform coefficientwise tail. **That final piece was NOT proved here**, and no selected test can replace its quantifiers. The source-qualified 2020 complex theorem is a genuine reduction of one obstacle, but a finite-lattice strong-electric argument still lies outside fixed-g² continuum scaling as a→0.

### 7. Physical/Clay relevance and next decision

In the cited (2+1)-dimensional Hamiltonian convention alpha=g²/2, beta=2/(a²g²), hence beta/alpha=4/(a²(g²)²) at fixed dimensionful g², blowing up as a→0. The presently admitted analyticity and stability rely on sufficiently small |beta|/alpha, so the new **published** complex-eigenbranch mapping does not move the four-dimensional continuum Clay target within proven reach.

**Next single useful mathematical question:** Can a cited convergent *local time-dependent connected polymer expansion* bound the exact **two-Wilson-insertion, vacuum-centered, shifted-resolvent** F_N(s,z) uniformly in length and complex coupling without estimating the full ground Riesz-projection norm? Formulate the concrete source/time weight and its s-dependent absolute summability before any all-orders SU(2) computation; if no credible theorem/physical continuum bridge exists, reconsider the direction rather than continuing an infinite series of strong-electric phases.

### 8. Reproducibility and strict execution boundary

Research-only branch and files under phase10/, plus append-only claims and a dedicated branch-scoped CI workflow. Pinned Phase 8 exact math requirements NumPy 2.3.5, SymPy 1.14.0 and opt_einsum 3.4.0, Python 3.12 in CI. From phase10/ run:
  OPENBLAS_NUM_THREADS=1 python -m unittest -v test_phase10_one_route
The dedicated Phase 10 workflow should separately re-run inherited Phase 7–9 exact regressions, check prior file preservation and exact-head SHA, and record its **actual final result** before declaring a qualified implementation. A passing CI is NOT a proof of the published theorem or the unresolved physics. No merge, deployment, public UI/science-catalog edit, original-source rewrite or Clay prize claim is authorized.

**Final disposition: B (published complex eigenbranch theorem recovered); C (general norm-transfer shortcut falsified); D (actual SU(2) local complex-resolvent and all-orders absolute tail OPEN).**
