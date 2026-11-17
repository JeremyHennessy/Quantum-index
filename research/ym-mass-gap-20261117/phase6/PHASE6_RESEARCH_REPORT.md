# Quantum Index — Yang–Mills Phase 6: connected resolvent at second order

Research date: 2026-11-17. Status: exact finite-volume SU(2) Hamiltonian ladder second-order perturbation calculation. NOT a four-dimensional continuum mass-gap solution, a nonperturbative locality theorem, a Lean formalization, an independently peer-reviewed result, or a certified original mathematical discovery.

## Preserved source and references

Phase 5 parent PR #149, commit e7a90d87d2f9eab02660dd8e13beb933e06cc5f9. Approved public main at intake a60397f017c5c0bfc2bf88be046320a00c9d28de. All earlier scientific files and application/UI/deployment files remain unchanged; this work is additive on an isolated Phase 6 draft branch.

Known Hamiltonian and Gauss-law basis: Ebner et al., Physical Review D 110, 014505 (2024), section II equation (1), https://doi.org/10.1103/PhysRevD.110.014505 . Standard analytic isolated-eigenvalue perturbation: https://www.imo.universite-paris-saclay.fr/~antoine.levitt/blog/quantum-mechanics/sec_perturbation_indep.html . Linked-cluster/finite-volume perturbation methods are established physics, not an invention by this lab. Follow inherited RESEARCH_CHARTER.md.

## 1. The exact physical observable and finite-volume domain

For any fixed finite N>=2 open SU(2) two-row connected square-plaquette ladder, use the no-charge gauge-invariant physical Hilbert space, complete in link representations without a spin cutoff. Let H_N(beta)=alpha H_E-beta W_N where W_N=sum_i W_i and W_i is the fundamental Wilson trace around face i. alpha>0, beta real; each ||W_i||<=2, hence ||W_N||<=2N.

H_E is self-adjoint with compact resolvent on the finite graph and its unique zero-energy pure-electric vacuum is |0>. The lowest nonzero physical energy is 3alpha: a nonzero closed electric flux has at least a four-link spin-1/2 loop. Analytic perturbation theory gives a unique normalized interacting ground state Omega_N(beta) and ground energy E0_N(beta) for sufficiently small beta. The crude sufficient spectral-isolation condition |beta|<3alpha/(4N) is nonuniform in volume.

The local gauge-invariant observable is O_N=W_1. Define Otilde=O_N-<Omega_N,O_N Omega_N>I. For real s>0 the physical vacuum-centered connected resolvent response is

G_N(s,beta)=<Otilde Omega_N,[H_N(beta)-E0_N(beta)+s]^{-1} Otilde Omega_N>.

This is NOT the Phase 5 Q_(j<=1/2)-complementary resolvent evaluated in a high-spin state; the states, spectral operators, projectors and vacuum-energy shifts all differ. The Phase 5 1/704 is never directly subtracted from this observable.

## 2. Independent Phase 5 reproduction

Using all independently source-checked SU(2) intermediate characters, channel energies 15,9,12,11 times alpha and squared weights 1,1/3,2/3,1, the exact high-spin Q-resolvent beta-squared coefficients at alpha=1,z=0 reproduce

[beta²]R3=743/190080; [beta²]R4=1013/190080;
[beta²](R4-R3)=1/704.

This confirms the older distinct observable. It is not proof that any particular physical connected correlation contains or cancels precisely the 1/704 term.

## 3. Perturbatively complete physical electric basis through beta²

An exact coefficient of order beta² involves at most two magnetic Wilson insertions, in addition to the two external local Wilson insertions, and can be computed using the orthogonal pure-electric states reachable by those actions. No finite-beta invariant-subspace claim is made. The necessary states and electric energies divided by alpha are:

Vacuum: 0.
One fundamental Wilson loop on face i: 3.
Spin-one single-loop component from W_i squared: 8.
Two adjacent loops: normalized shared-link singlet, 9/2, coefficient 1/2; normalized shared-link triplet, 13/2, coefficient sqrt(3)/2.
Two disjoint loops (face distance>=2): 6, coefficient 1.

Gauss-law character fusion and normalized Haar orthogonality give the list and exclude any other second-order intermediate state. Each missing higher-spin state would have to be reached by more Wilson insertions than admitted here. The detailed independent matrix program phase6_sparse.py uses this complete reachable electric-state set, not a fictitious all-coupling finite representation cutoff.

## 4. Normalized vacuum and resolvent expansion

Let u=1/(3alpha), r=1/(s+3alpha), t=1/(s+6alpha) and
L=1/(s+8alpha)+1/[4(s+9alpha/2)]+3/[4(s+13alpha/2)].

In an analytic real normalized ground-state gauge, let u2exc be the pure-electric excited-sector second-order correction. Then
Omega_N=|0>+beta u sum_i |i>+beta² [u2exc - N u² |0>/2]+O(beta³);
E0_N(beta)=-N beta²/(3alpha)+O(beta³);
<Omega_N,O_N Omega_N>=2 beta/(3alpha)+O(beta²).

The beta² term in the mean vanishes by SU(2) center parity. Define
Tplus=1/s+L+(N-2)t and Tminus=-1/s+L+(N-2)t.
Straight Rayleigh–Schrödinger/Kato plus resolvent perturbation gives the complete coefficient

[beta²]G_N =
   u²*Tplus
 + 2r*[1/(24alpha²)-N/(18alpha²)-2/(9alpha²)]
 + 2ru*Tminus
 + r²*Tplus
 - N*u*r².

These are respectively the first-order centered-state norm, the second-order normalized-state cross, the state/resolvent cross, two magnetic resolvent insertions, and the extensive vacuum-energy correction. The separate exact symbolic implementation phase6_closed.py and explicit sparse electric-state matrix implementation phase6_sparse.py agree for all N=2,3,4,5 tested, for arbitrary positive symbolic alpha and s wherever checked.

## 5. Exact distance cancellation through beta²

Each additional face i>=3 contributes

u²t - r u² + 2ru t + r²t - r²u
   = (r+u)^2*t-r*u*(r+u) = 0,

since t=r*u/(r+u), exactly.

Consequently for EVERY finite N>=2 and alpha>0,s>0,
[beta²]G_N(s,beta) does not depend on N.

A closed reference formula is:

[beta²]G_N =
 -(41544 alpha^4+29595 alpha^3 s+7717 alpha² s²+872 alpha s³+36 s^4) /
  [36 alpha² (3alpha+s)^2 (8alpha+s) (9alpha+2s) (13alpha+2s)].

At alpha=1 and s=1:
G_N(1,beta)=1/4-6647 beta²/71280+O(beta^4).

Why remainder beta^4 rather than beta^3: multiply the unique top horizontal link of each face by central -I in SU(2). This unitary transformation preserves Gauss law and H_E, changes the sign of every W_i and of O=W_1, and maps H(beta) to H(-beta). With the unique analytic ground, G_N is even in beta. Thus all odd coefficients are zero for any fixed finite N. This is a finite-graph symmetry and not a spatial mass-gap theorem.

## 6. Explicit negative controls

Omitting the normalized-ground-state beta² correction leaves a FALSE distant-face contribution +1/[9alpha²(s+3alpha)].
Omitting the extensive vacuum-energy shift leaves a FALSE contribution +1/[3alpha(s+3alpha)^2].
Both are nonzero; a fake volume-dependence claim results from either incomplete calculation. Merely subtracting the vacuum energy, without properly centering and normalizing the state, does not suffice.

The old high-spin Q-resolvent still has its correctly established +1/704 difference; that is a DIFFERENT observable and does not contradict the cancellation in G_N.

## 7. Unproved higher-order gate and exact representation requirements

Only the beta² coefficient is verified. At total magnetic perturbative order k, at most k+2 fundamental Wilson multiplications appear when including both source insertions. Since each changes a link representation by at most 1/2, j<=(k+2)/2 is a conservative complete intermediate-spin cutoff for the coefficient; it is generally not optimal. Thus beta⁴ has a safe j<=3 gate. The complete four-plaquette j<=1 magnetic matrix was NOT independently verified in Phase 5, so it cannot support an exact beta⁴ or beta⁶ coefficient. A finite-β diagonalization of the two-insertion surrogate is expressly NOT a physical spectrum calculation.

Symmetry excludes odd-order differences. The first unresolved even coefficient of G4-G3 is beta⁴; whether it vanishes, or whether the first genuine connected-path term occurs later, is OPEN. No all-order linked-cluster theorem or distance-dependent bound is established.

## 8. Scientific limitations, tests and next work

For every fixed finite N the small-beta analytic expansion is justified, but the elementary isolation bound shrinks as 1/N. No common nonperturbative radius, uniform infinite-volume/continuum estimate, positive physical spectral gap, 3+1 dimensional Yang–Mills construction, or all compact simple group result follows. Scientific novelty and peer review are unestablished.

Reproduce in this folder: OPENBLAS_NUM_THREADS=1 python -m unittest -v test_phase6.
Initial local SymPy 1.14/NumPy suite passed 13/13. The dedicated GitHub Python 3.12 exact-head workflow must separately pass on the final research commit; no Lean formal proof was attempted.

**Next single falsifiable task:** calculate and independently verify [beta^4](G4-G3) using the exact SU(2) fusion-complete intermediate Hilbert space and vacuum centering, or prove a small-order linked-cluster cancellation theorem with explicit premises. Do not assume a mass gap or import higher-spin magnetic matrix elements that have not been verified.
