# Phase 11 — one decisive open lemma after the PROVED probe identity

**Research decision:** The finite-volume proposed identity survived a full exact operator derivation and independent characteristic-polynomial tests. The next attempted leap — from published one-parameter complex ground-energy analyticity to uniformly bounded complex **local energy shifts** — is not justified without a new theorem. We retain this as **one precise open lemma**; no larger multiscale expansion was attempted.

## Exact, bounded finite-volume result (not the open lemma)

For every fixed finite original-link physical SU(2) ladder N, alpha>0, s>0, and complex z in an admitted neighbourhood where the vacuum-origin E_N(z) is a simple analytic eigenvalue and the shifted inverse exists, define O=W1, P_N(z), mu_N(z)=Tr(P_N O) and the gauge-neutral two-level probe Hamiltonian H_N^probe(z,lambda). Then rigorously
  F_N(s,z)=−[lambda²](E_N^probe(z,lambda)−E_N(z))−mu_N(z)²/s,
  mu_N(z)=−[h](E_N(z,h)−E_N(z)).
This is proved by analytic Feshbach perturbation and rank-one Riesz projection algebra in LOCAL_PROBE_IDENTITY.md, with independent finite-dimensional complex controls; it holds on the **full finite-volume physical Hilbert space**, without a link-spin cutoff. It does not supply a uniform N-independent coupling domain.

## The **one** missing lemma: N-uniform, jointly analytic LOCAL ENERGY DEFECTS

Fix alpha,s>0 and the complete no-charge SU(2) ladder family. Do there exist r,rho,eta>0 and C_D,C_h<∞, **independent of every N>=2**, such that:

1. For all |z|<=r and |lambda|<=rho the analytically continued isolated vacuum-origin E_N^probe(z,lambda) and E_N(z) exist with a common holomorphic neighbourhood of this closed bidisk, and |D_N(z,lambda)|=|E_N^probe(z,lambda)−E_N(z)|<=C_D;
2. For all |z|<=r and |h|<=eta, the analytic vacuum-origin E_N(z,h) and E_N(z) exist with a common holomorphic neighbourhood of the closed bidisk, and |L_N(z,h)|=|E_N(z,h)−E_N(z)|<=C_h?

**A successful answer must prove all quantifiers and domains**, including nonselfadjoint complex interactions, original-link Gauss constraints and the finite-N vacuum-branch correspondences. It must not assume a global uniform bound on ||P_N(z)||, which Phase 10 showed is not implied by complex eigenvalue isolation. Neither a real min–max bound nor Yarotsky's published infinite-volume weak-* analyticity for local observables is sufficient by itself.

**Sufficient conditional deduction (rigorous):** If both assumptions hold on a common z-disk, complex Cauchy gives
  |[lambda²]D_N|<=C_D/rho²,
  |mu_N|=|[h]L_N|<=C_h/eta,
and therefore |F_N(s,z)|<=C_D/rho²+(C_h/eta)²/s uniformly in N. Combined with Phase 7's exact degree-2(N−1) support condition, Cauchy in z gives a volume-independent exponential absolute connected-coefficient tail for every 0<beta0<r. This is **conditional**, not a Phase 11 theorem about the SU(2) model.

## Minimal direct falsifier

For **any explicit proposed** (r,rho,eta,C_D,C_h), a single exact N and complex parameter point within those disks where the analytically continued eigenvalue is absent, the relevant energy difference becomes singular, or the defect exceeds its claimed constant disproves that proposed bound. A sequence N_j→∞ of proven local-defect divergences at fixed admitted parameters could falsify uniformity. Finite small-N agreement does not verify all-N bounds; failure of one specific majorant does not eliminate all possible estimates.

**Smallest viable new mathematical test** *if this fixed-lattice route were to continue*: derive one source-qualified connected-polymer **defect** estimate in Yarotsky's site-wise complex coupling construction (2006, §2 Lemmas 1–3), showing that the logarithmic partition-function contributions containing the *first-face local insertion* are absolutely summable with a bound independent of N and imaginary-time extent, even when its local probe/source term has an independent complex coupling. Verify the exact non-Hermitian centered trace identity rather than importing an equal-time response theorem. Do not launch a global all-orders numerical expansion.

**Status: OPEN.** An independent continuum-relevance decision in CONTINUUM_RELEVANCE_DECISION.md recommends not extending this finite-strip strong-electric path by routine additional phases.
