# Phase 9 — ONE precise open lemma

**Status: OPEN.** This file is an unresolved research target, **not** an accepted SU(2) theorem, not a claim of mathematical novelty, and not a Clay proof.

## Fixed data and quantifiers

Fix alpha>0 and s>0. For every N>=2 define the original-link finite open-ladder physical Hilbert H_phys,N, H_N(z)=alpha H_E−z sum_i W_i, O=W1. Magnetic coupling z may now be **complex**. At z=0 let P_N(0)=|0><0| be the rank-one pure-electric Riesz projection and E_N(0)=0.

For each *individual* finite N, analytic isolated-eigenvalue perturbation gives a local Riesz projection P_N(z) and analytic energy E_N(z) for z sufficiently close to zero. For complex z, P_N(z) is not required to be orthogonal; define the scalar mu_N(z)=Tr(P_N(z) O). Whenever the shifted resolvent exists define its **holomorphic** source response

  F_N(s,z) = Tr[ P_N(z) (O−mu_N(z)) (H_N(z)−E_N(z)+s)^(-1) (O−mu_N(z)) ].

For small *real* z this is exactly the original interacting-vacuum-centered physical G_N(s,z), since P_N(z) is then the orthogonal ground-state projector. It is crucial NOT to define the complex continuation by naively analytically varying the sesquilinear conjugate of a normalized ket: conjugation would destroy holomorphy.

### The unproved lemma — uniform local complex analyticity

**Question:** Do there exist constants r=r(alpha,s)>0 and M=M(alpha,s)<infinity such that, for every integer N>=2,

1. P_N(z) is a rank-one analytic continuation of the pure-electric vacuum projector throughout a common disk of radius **strictly larger than r**, with a consistently analytic E_N(z);
2. H_N(z)−E_N(z)+s has a bounded inverse for every |z|<=r;
3. F_N(s,z) is holomorphic on and inside |z|=r and obeys sup_(N>=2) sup_(|z|=r)|F_N(s,z)|<=M?

A direct local cluster expansion yielding a uniform coefficient absolute majorant for F_N, without these global rank-one projection properties, would also be acceptable **if its assumptions are independently proved and its conclusion actually implies the required physical coefficient tail**.

### Why this one lemma matters (exact conditional deduction)

Phase 7 proved c_(N,k)=[z^k](G_N−G_(N−1))=0 for all 0<=k<2d, d=N−1. If the complex-disk lemma holds, Cauchy's formula gives |c_(N,k)|<=2M/r^k. Hence for any 0<beta0<r and all real |beta|<=beta0:

  sum_(k>=2d)|c_(N,k)| |beta|^k
  <= [2M/(1−beta0/r)] (beta0/r)^(2d)
  = A q^d,

with A=2M/(1−beta0/r), q=(beta0/r)^2 in [0,1), both independent of N. This is a **correct algebraic implication** of the unproved lemma, not a proof that the lemma holds.

### Why existing results do not already settle it

- **Finite-N Kato:** gives N-dependent local analyticity; the elementary total perturbation norm scales as N. Failure of that sufficient radius is not proof that uniform F_N analyticity fails.
- **Yarotsky-type strong-electric stability:** supplies an N-independent positive gap for **real beta** in a sufficiently small regime, using only the unperturbed on-site gap. Real-axis spectral isolation alone does not bound non-selfadjoint complex-coupling Riesz projections or guarantee a common complex disk with bounded F_N.
- **Henheik–Teufel–Wessel Theorem 3:** controls local *ordinary equal-time ground-state expectations*. F_N includes the **global shifted resolvent**, not a four-link local bounded observable, so Theorem 3 cannot simply be applied to it.
- **Osterwalder–Seiler 1978:** is Euclidean and not automatically identified with this original-link continuous-time Hamiltonian G_N; any transfer requires a source-checked map.
- **Exponential clustering:** equal-time clustering does not automatically give a coefficientwise absolute majorant of a frequency-resolved local response.

### Single smallest decisive next test

Find a **published theorem with full accessible proof** whose hypotheses imply the common disk-and-bound above for weak bounded finite-range perturbations of products of **infinite-dimensional** L²(SU(2)) link Hilbert spaces with unbounded onsite Casimirs, **or** derive a local-resolvent polymer/linked-word majorant that proves it directly. Check explicitly: gauge projection, ground-state energy subtraction, centering, resolvent shift, non-selfadjoint complex coupling, N-independent constants, and scaling of interaction strength. Reproduce the Phase 8 c_(4,6)(1,1)>0 as a nontrivial necessary low-order check, not as evidence of all-orders convergence.

**Direct falsifier:** an exact sequence of finite N and complex z_N with z_N→0 for which F_N(s,z_N) has a singularity or becomes unbounded, or an analytically established growth of connected coefficients inconsistent with **every** fixed pair (r,M) of the proposed form. For a *particular proposed majorant*, a single exact coefficient violating its claimed explicit bounds is sufficient to falsify that majorant, not necessarily the existence of all alternatives.

If a valid theorem applies only to physical real couplings or ordinary ground expectations, record that partial result and leave this lemma **OPEN**. Do not replace it by a theorem that assumes the desired interacting gap or analyticity.
