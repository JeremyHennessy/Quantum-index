# Quantum Index — Phase 9 research report
## Published strong-electric locality recovered; physical connected-resolvent coefficient tail remains open

**Research date:** 2026-11-18 UTC. **Decision:** **B (established published result recovered and mapped)** for the *restricted fixed-lattice strong-electric ground-state gap and local ground-state expectations*; **D (insufficient evidence)** for the specifically requested absolute Taylor-coefficient tail of the centered resolvent. No new locality or continuum theorem is claimed.

**Immutable Phase 8 parent:** 1cfe6f386849aed65b5b12e843972e4106524921, draft PR #152, GitHub exact-head CI run 44223988611 (64/64 tests passed). Phase 7: 2d211370c1e0132a5cd4a9d102768da4e69d06f9; approved production main: a60397f017c5c0bfc2bf88be046320a00c9d28de. This branch adds Phase 9 only; charter, Phases 1–8, production and UI are unchanged.

### 1. Precise question and physical model

For each finite connected open two-row SU(2) N-square ladder (N>=3), let K_N=L²(SU(2)^(3N+1), Haar) and H_phys,N its no-charge vertex-gauge-invariant subspace. Write H_N(beta)=alpha sum_e C_e-beta sum_(i=1)^N W_i with C_e=j_e(j_e+1), alpha>0, and bounded fundamental Wilson character multipliers W_i=Tr_F(holonomy around face i), ||W_i||<=2. On its unique analytic ground branch let E0,N and Omega_N be ground energy and normalized ground vector. For O=W1, v_N=(O-<Omega_N,O Omega_N>)Omega_N, and for s>0 define G_N(s,beta)=<v_N,(H_N-E0,N+s)^(-1)v_N>. It is the same centered physical response as Phases 6–8, not the Phase 5 Q-resolvent.

The primary question is whether c_(N,k)(alpha,s)=[beta^k](G_N-G_(N-1)) obeys an **absolute** volume-uniform tail:
sum_(k>=2(N-1)) |c_(N,k)| |beta|^k <= A q^(N-1) for |beta|<=beta0, with A finite, q<1, beta0>0 independent of N. Phase 7 proves c_(N,k)=0 for k<2(N-1), but that finite-order statement is not a tail estimate. Phase 8 independently computed c_(4,6)(1,1)=1504856360495713/3397652693362287360000 >0. Neither alone controls subsequent coefficients.

### 2. Exact original-link embedding of the Hamiltonian into a standard weak-interaction lattice model

**Do not project Gauss law prematurely.** Work first on the *full* link tensor product K_N, where locality is ordinary tensor-factor locality; H_N commutes with all vertex gauge transformations, so H_phys,N is reducing. Attach to each original link a unique one-dimensional integer site:
- Top horizontal link i -> 3i, bottom horizontal link i -> 3i+1, vertical link i -> 3i+2 (i=0,...,N-1 for horizontals; i=0,...,N for verticals).
- Thus Lambda_N={3i,3i+1,3i+2 : 0<=i<N} union {3N+2}, with |Lambda_N|=3N+1.
- Local Hilbert space at site x is L²(SU(2),Haar), **infinite-dimensional**. h_x=alpha C_x is nonnegative self-adjoint with unique constant ground vector and local gap g=3alpha/4, since j=0 gives 0 and j=1/2 gives Casimir 3/4. The full unperturbed ground is their product.
- Face i (zero indexed) acts on four link sites {3i,3i+1,3i+2,3i+5}; anchor Phi_(3i)=-beta W_(i+1), with ||Phi_(3i)||<=2|beta|, and Phi_x=0 otherwise. Every interaction is self-adjoint, finite range R=5 in the integer-site metric, independent of N. This is true on the full link tensor product despite the physical Gauss constraints.

**Published theorem mapping.** Henheik–Teufel–Wessel (2022), Definition 1 and Theorem 3, explicitly permit possibly infinite-dimensional local Hilbert spaces, unbounded positive on-site h_x, sitewise nondegenerate gapped vacua, and uniformly bounded finite-range interactions, on arbitrary finite subsets of Z^nu. Their Theorem 3 gives exponential locality of *ordinary ground-state expectations* under arbitrary local relatively H-bounded perturbations. The same article, after Theorem 3, records Yarotsky's earlier uniform-ground-gap result for a sufficiently weak interaction in this class; Yarotsky's 2004/2005 studies and the 2006 CMP Theorem 1 provide the primary strong-coupling/cluster-expansion precedents. We do NOT claim the 2006 theorem's original translation-invariance/periodic-boundary hypotheses directly apply to every open-link embedding; the non-translation-invariant finite-volume mapping is to the explicit 2022 restatement of the weakly interacting class and its cited gap result.

Let c_*(g,R)>0 be a published, **unspecified** smallness threshold (or smaller minimum of the bounds needed by the gap and LPPL results). For 2|beta|<=c_*(3alpha/4,5), established stability implies a unique full-link ground and a full-link excitation gap gamma_*(alpha,beta)>0 **uniform in N**. No numerical beta threshold or gamma magnitude is asserted, because these are not given numerically by the cited theorem.

As the full H_N commutes with SU(2) at every vertex, uniqueness makes its ground vector a one-dimensional representation of SU(2)^(2N+2); this compact connected semisimple group has no nontrivial continuous one-dimensional characters, so the full ground is gauge invariant. The physical spectrum (restriction to a reducing subspace containing the ground) lies within the full spectrum; hence its gap is at least the uniform full-link gap. This uses only the known **zero-magnetic on-site gap**, not the desired interacting gap as a premise. It is a **qualified application of existing theorems in the sufficiently strong-electric lattice regime**, not a new theorem of mathematical physics.

For real beta in that regime, v_N is orthogonal to the vacuum, ||v_N||²=Var_(Omega_N)(W1)<=4 and K_N=H_N-E0,N >=gamma_* on Omega_N^perp. Hence the **noncircular, volume-independent infrared bound**
$$
  0 <= G_N(s,beta) <= 4/(s+gamma_*(alpha,beta))  \quad(s>0).
$$
This bounds each response, **not the remote-face difference or its absolute power-series coefficients**.

### 3. Established size-independent bound for local *equal-time* expectation changes

Embed the N−1-face full-link Hamiltonian into K_N by adding the uncoupled electric Casimirs on the three new links, with no new magnetic face term. Call it Hhat_(N-1). Its ground factorizes as the (N−1)-face ground times three constant link vacua, and gauge-invariant local source expectations agree exactly with those on the original graph. We have
  H_N = Hhat_(N-1) + P_N,  P_N=-beta W_N.
P_N is bounded (norm<=2|beta|), hence relative Hhat bound zero, supported only on the last face X_N. This fulfills the *perturbation* hypothesis of Henheik–Teufel–Wessel Theorem 3.

For A supported entirely on the first face's original four links, let Y={0,1,2,5}, |Y|=4. For N>=3, X_N={3(N-1),3(N-1)+1,3(N-1)+2,3N+2} and
  dist(Y,X_N)=3(N−1)−5.
Theorem 3, directly **as a pre-existing result**, gives positive constants c1,c2, independent of N, so
$$
 |\omega_N(A)-\omega_{N-1}(A)|
 \le e^{4c_1}\Vert A\Vert e^{-c_2[3(N-1)-5]}
 = e^{4c_1+5c_2}\Vert A\Vert (e^{-3c_2})^{N-1}.
$$
This is a genuine strong-electric, volume-independent *ground-state expectation* locality result for A=W1 and A=W1² (and other bounded first-face A), with no assumed interacting gap. The exponential prefactor c1/c2 and beta threshold remain unspecified published constants.

**STOP HERE for transfer to G_N.** The centered resolvent is not a bounded operator supported on Y; it involves the inverse of the global Hamiltonian and imaginary-time propagation. Theorem 3 does NOT by itself establish the same inequality for G_N(s,beta), much less the sum of absolute Taylor coefficients. Equal-time exponential clustering is not a substitute for a frequency-resolved resolvent locality statement. Likewise a volume-uniform gap for real beta does not alone certify a common complex-beta disk for the extensive finite-volume eigenvalue branch.

### 4. Smallest noncircular unresolved lemma and a precise sufficient reduction

For a fixed alpha,s>0, the missing piece is the following **unproved** uniform analyticity/majorant statement:

There exist r>0 and M<infinity such that every finite-ladder *physical centered local resolvent* G_N(s,z) has a holomorphic continuation to |z|<r and
  sup_(N>=2) sup_(|z|=r) |G_N(s,z)| <= M.
(Alternatively use a closed disk r with a slightly larger holomorphic neighbourhood.) Here complex z is the **magnetic coupling**, not the Laplace parameter s. The continuation must retain the correct normalized analytic vacuum and E0 shifts and be independent of N.

**Conditional algebraic implication (proved; no physical holomorphy claim):** Let d=N−1 and f_N(z)=G_N(s,z)-G_(N−1)(s,z). The above hypothesis yields |f_N(z)|<=2M on the circle |z|=r. Cauchy's integral formula gives |c_(N,k)|<=2M/r^k; Phase 7's proven support cancellation gives c_(N,k)=0 for k<2d. Therefore for each 0<beta0<r and |beta|<=beta0,
$$
 \sum_{k\ge 2d}|c_{N,k}|\,|\beta|^k
 \le {2M\over 1-\beta_0/r}\left({\beta_0\over r}\right)^{2d}
 = A q^d,
$$
with A=2M/(1−beta0/r), q=(beta0/r)²<1 **independent of N**. This is a conditional reduction, NOT a newly established volume-uniform bound for physical Yang–Mills: its analyticity hypothesis is exactly the hard missing step.

A weaker real-beta bound 0<=G_N<=4/(s+gamma_*) does not imply that complex-disk hypothesis. The finite-N elementary Kato estimate |beta|<3alpha/(4N) is merely crude; its deterioration is **not** a counterexample to a better uniform bound.

**One hypothesis → one bounded test:** independently enumerate the original-link locality/interaction radius and verify the theorem-mapping conditions (Phase 9 test); check the Cauchy algebra and Phase 8 c_(4,6) without re-fitting its value. The theorem itself is a literature result and cannot be verified by 64 or any finite number of unit tests. Do not launch higher orders unless they directly falsify a proposed explicit coefficient majorant.

### 5. Continuum and source controls

Osterwalder–Seiler (1978) establishes Euclidean Wilson-lattice positivity, strong-coupling infinite-volume analyticity and confinement in its setting. Its accessible journal description is not an independently verified transfer theorem for this continuous-time 2+1D Hamiltonian resolvent, and the historical Euclidean theorem may not be substituted for the exact Hamiltonian observable without transfer-matrix/normalization correspondence.

Under the published (2+1)D Kogut–Susskind conventions alpha=g²/2 and beta=2/(a²g²), the dimensionless ratio beta/alpha=4/(a²(g²)²). At fixed positive g², it grows like a^(−2). Thus a fixed sufficiently small beta/alpha regime cannot simply be taken to a→0. Physical dimensions and possible running of coupling must be specified separately; this is not a four-dimensional scaling argument.

**Scope ledger:**
- Phases 7–8: exact fixed-order linked support and one nonzero full-spin sixth-order coefficient.
- Phase 9: known weak-interaction theorem applies to full SU(2) link-tensor Hamiltonian, then Gauss sector, yielding uniform *strong-electric* gap, bounded centered response and exponential last-face insensitivity of equal-time local ground-state expectations.
- Still OPEN: actual G_N(s,beta) remote-face difference, absolute connected Taylor tail, uniform complex-beta resolvent locality, direct continuum scaling, 3+1D spacetime Yang–Mills and all compact simple groups.

### 6. Scientific conclusion and next exact falsifier

**B — ESTABLISHED RESULT RECOVERED**, for a precisely restricted strong-electric gap and local equal-time expectation theorem, with mapping independently checked. No novelty claim.

**D — INSUFFICIENT EVIDENCE**, for the *requested* volume-uniform physical connected-resolvent absolute coefficient tail. The most useful next mathematical question is: **does a published cluster expansion or a new independently checked local-resolvent polymer argument provide an N-independent complex-coupling analytic disk and uniform bound for the exact centered G_N(s,z)?** First seek a theorem whose statement directly matches *this* resolvent; prove missing correspondence rather than extrapolate published local-expectation estimates. If not possible, retain the obstruction.

No merge, deployment, PR publication, or changes to the approved production site are authorized.
