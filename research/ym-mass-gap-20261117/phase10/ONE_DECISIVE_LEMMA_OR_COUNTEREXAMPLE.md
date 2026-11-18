# Phase 10 — ONE decisive counterexample to the proposed theorem transfer

**Decision route chosen:** **A (published theorem transfer), subjected to one falsifier.** The published 2020 theorem really does supply common-disk isolated complex eigenbranches for this *weakly interacting original-link chain* (see theorem audit). The next tempting inference was: an N-independent complex spectral separation automatically gives N-independent bounds on full-volume Riesz projections and hence the centered shifted resolvent. That inference is **FALSE**. This precise invalid inference is rejected; the physical SU(2) centered-resolvent locality lemma is **NOT disproved**.

## 1. An exact elementary non-Hermitian proof-of-failure

Consider a **different**, deliberately simplified model of n uncoupled two-dimensional sites:
  H_n(z) = ∑_(i=1)^n h(z)_(i),  h(z) = [[0,−z], [−z,1]] .
The unperturbed onsite Hamiltonian diag(0,1) is gapped and its bounded local magnetic perturbation −z sigma_x is entire analytic. This is **not** the SU(2) lattice Hamiltonian, not a Gauss-constrained Yang–Mills theory and not a counterexample to the desired physical F_N bound. Its purpose is to check an alleged *logical implication*.

Let r(z)=sqrt(1+4z²) with r(0)=1, and e_±(z)=(1±r(z))/2. For |z|<1/2, both are analytic and distinct. The low-energy rank-one Riesz projector is
  p(z) = [e_+(z) I−h(z)]/r(z).
It satisfies p²=p, Tr p=1, h p=e_- p. The n-site low eigenvalue is n e_-(z), with remaining eigenvalues n e_-+m r(z), m=1,...,n, so the eigenbranch exists on a **common complex disk** independent of n; at z=i/4 the excited spectral separation has modulus r(i/4)=sqrt(3)/2, again **independent of n**.

At z=i/4 the projector is not orthogonal. Direct exact matrix multiplication gives
  Tr[p(i/4)^*p(i/4)] = 4/3.
Because p has rank one, ||p||²=Tr(p^*p)=4/3. For independent sites P_n=p^(⊗n), and tensor norm multiplicativity yields
  ||P_n(i/4)|| = (2/sqrt(3))^n  → infinity.

**Consequently there is no inference from the existence of a common analytic isolated eigenbranch and a constant spectral distance to a constant bound on the FULL-volume Riesz projection norm.** This is an exact algebraic counterexample to that shortcut, not a hypothesis or a numerical trend.

A complementary two-by-two example illustrates the difference between spectral distance and inverse norm even without tensor products:
  T_L=[[0,L],[0,1]], spec(T_L)={0,1},
  (T_L+sI)^(-1)=[[1/s,−L/(s(s+1))],[0,1/(s+1)]], s>0.
For fixed s and arbitrarily large L, its inverse operator norm diverges despite fixed eigenvalue locations. Again T_L is *not* asserted to satisfy the quantum-link interaction assumptions; it disproves only a generic spectral-inclusion⇒norm-bound inference.

## 2. Necessary distinction: the toy's local centered response remains well behaved

Choose a local first-site observable O=σ_x. With mu(z)=Tr[p(z)O]=2z/r(z), the centered response of one site, with any s>0 outside its poles, is exactly
  F_1(s,z) = Tr[p(z)(O−mu)(h−e_-+s)^(-1)(O−mu)]
           = [1−mu(z)²]/[s+r(z)]
           = 1/[r(z)² (s+r(z))].
For n uncoupled sites, the source resides on site 1, other sites stay in their vacuum-origin eigenbranches, and the full ground-energy shift cancels spectator energies. Therefore
  F_n(s,z) = F_1(s,z)
for every n, **even though ||P_n(z)|| grows exponentially for z=i/4**. Exact 4×4 two-site verification and the general factorization argument are included in test_phase10_one_route.py.

Thus this counterexample rejects **global projector-norm control as an automatic consequence of spectral isolation**. It does **not** reject the possibility of a local centered response with a uniform complex-coupling disk. The distinction is essential: the latter may be controlled by connected/linked observable estimates that do not require a uniform bound on the full spectral projection.

## 3. Sharpened smallest open lemma after incorporating the published 2020 result

Fix alpha,s>0. By the published Del Vecchio–Fröhlich–Pizzo–Rossi 2020 theorem and the verified column-grouping map, the *full-link and physical SU(2) Hamiltonians* have a common weak-magnetic complex disk with an isolated analytic vacuum-origin eigenbranch E_N(z). Let P_N(z) be its correct rank-one Riesz projection and define
  mu_N(z)=Tr[P_N(z)W1],
  F_N(s,z)=Tr[P_N(z)(W1−mu_N(z))(H_N(z)−E_N(z)+s)^(-1)(W1−mu_N(z))].

**OPEN.** Prove or refute existence of an r=r(alpha,s)>0 and M=M(alpha,s)<∞, independent of N>=2, such that:
- the shifted inverse exists for every |z|<=r (not merely an excluded disk around eigenvalue in the complex spectrum);
- the scalar F_N(s,z) is analytic on an open neighbourhood of the closed disk |z|<=r;
- sup_(N>=2) sup_(|z|=r)|F_N(s,z)|<=M.

Alternatively, prove an absolute linked coefficient bound directly for this exact F_N using a qualified local imaginary-time polymer expansion. In either case require **N-independent complex-coupling dynamical** control and the exact non-Hermitian Riesz-projection centering, not a bound on equal-time local A or an assumed interacting continuum gap.

**Direct physical falsifier:** an analytically established sequence N_j→∞ and z_j→0 with poles/singularities of F_(N_j)(s,z_j) or |F_(N_j)(s,z_j)|→∞; or an exact violating coefficient for any explicitly stated candidate bound. The toy family above is only a counterexample to an attempted *proof shortcut*, not this SU(2) lemma.

## 4. Why this is the correct stopping point

The 2020 theorem removes a significant *spectral-analyticity* uncertainty from Phase 9. It does not prove a uniformly bounded physical response. The precise shortcut from spectral locations to non-selfadjoint inverse/projection norms has been mathematically falsified. Advancing to a new proof claim would require a genuine local complex resolvent estimate, not more finite-size tests or formal manipulations.

**Classification:** **B** for the established published uniform **complex eigenbranch** theorem; **C** for the exactly falsified global norm inference; **D** for the original SU(2) all-orders complex-resolvent locality majorant. No Phase 10 A claim.

**Continuum:** In the reviewed (2+1)D Kogut–Susskind convention, alpha=g²/2, beta=2/(a²g²), so beta/alpha=4/(a²(g²)²). For fixed positive g², a→0 leaves the perturbative strong-electric region. Even a future proof of this local lemma at small beta/alpha would not establish the four-dimensional Yang–Mills existence/mass-gap problem.
