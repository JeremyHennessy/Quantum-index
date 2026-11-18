# Phase 11 — exact auxiliary-probe identity and its logical scope

**Scientific status:** Rigorous *finite-volume* operator-theoretic identity on the full untruncated SU(2) physical Hilbert space, under explicit isolated-eigenvalue and shifted-inverse hypotheses; independently checked using an unrelated 2-level toy's exact characteristic polynomial. Not a volume-uniform complex-locality theorem, an original Feshbach formula, or a continuum mass-gap proof. Charter unchanged.

## 1. Domain, representation, gauge constraints and analytic normalization

Let N>=2, alpha>0 and original-link H_phys,N be the no-external-charge SU(2) vertex-gauge-invariant closed subspace of L²(SU(2)^(3N+1), normalized product Haar). Every original link has all Peter–Weyl spins j=0,1/2,1,..., without an artificial cutoff. H_E=∑_e j_e(j_e+1) is self-adjoint on its natural electric Sobolev domain and nonnegative with compact resolvent on this finite graph. O=W1 is bounded self-adjoint real Wilson-character multiplication with ||O||<=2, gauge invariant. For z∈C, H(z)=alpha H_E−z∑_i W_i is an analytic type-A closed family on D(H_E). At z=0 the normalized constant vacuum has E(0)=0 and physical electric gap 3alpha.

For each fixed finite N there is a neighbourhood of z=0 with an isolated simple analytic eigenvalue E(z) and rank-one **Riesz projection** P(z). For complex z, P may be nonorthogonal: choose a right eigenvector R(z), left eigenfunctional L(z), normalized L(R)=1, so P=|R><L|; do NOT use a conjugate-normalized right eigenvector as the analytic continuation. P²=P, Tr P=1, HP=PH=E P. Put Q=I−P. For fixed s>0 choose an admitted neighbourhood of z=0 such that H(z)−E(z)+s is boundedly invertible (true at z=0 by electric positivity and finite N, and locally by the open-resolvent-set property). This condition is independent of the mere isolation of E for arbitrary s.

Define B(z)=(H(z)−E(z)+s)^(-1), mu(z)=Tr(P O) and the **correct holomorphic centered response**
  F(s,z)=Tr[P(O−mu) B (O−mu)].
The rank-one P makes this trace well-defined even though the Hilbert space is infinite dimensional. At real small z, P=|Omega><Omega|, and F(s,z) equals the original physical G_N(s,z).

## 2. Method A: full-Hilbert analytic eigenvalue/Feshbach derivation

On H_phys,N⊗C² with probe levels |0>,|1>, let p1=|1><1| and X=|0><1|+|1><0|. For complex z and a new complex parameter lambda set
  K(z,lambda)=H(z)⊗I+s I⊗p1+lambda O⊗X.
This is analytic type A on D(H_E)⊗C², because O is bounded; no probe Gauss charge is introduced. At lambda=0 the analytic eigenvalue E(z) of H(z)⊗|0><0| has rank-one projection P0=P⊗|0><0|. In the chosen neighbourhood it is isolated both from the other probe-0 levels and from the entire probe-1 spectrum (the latter is the *explicit requirement* 0∈rho(H−E+s)). Since the first probe matrix element <0|X|0>=0, the first-order energy coefficient of the eigenvalue epsilon(z,lambda) continuing from E(z) vanishes.

Let T=O⊗X, Q0=I−P0, and S=[Q0(K(z,0)−E(z))Q0]^(-1)Q0 on the complementary spectral sector, justified by isolation. Standard analytic eigenvalue perturbation, which does NOT require an orthogonal P, gives
  [lambda²] epsilon(z,lambda) = −Tr[P0 T S T].
The vector T maps probe |0> only to |1>; the whole probe-1 block equals H(z)+s and is disjoint from E. Thus S acts on T ran(P0) as B(z)⊗|1><1| and
  **[lambda²](epsilon(z,lambda)−E(z)) = −Tr[P O B(z) O].**
With left/right vectors: −L(O B O R), where L(R)=1. This exact identity is finite-volume **and remains valid for admissible complex z**, without a spectral gap uniform in N. There is NO extra 1/2: [lambda²] is the Taylor coefficient, equal to (1/2)∂²_lambda epsilon|0.

## 3. Vacuum term: the subtraction is EXACT, not optional

Since BP=PB=P/s (the resolvent commutes with H and its Riesz projection),
  Tr[P O B]=Tr[P B O]=mu/s,
  Tr[P B]=1/s.
Expanding F gives
  F = Tr[P O B O] − 2mu(mu/s)+mu²/s
    = Tr[P O B O] − mu²/s.
Combine with the probe coefficient:
  **F_N(s,z) = −[lambda²](E_N^probe(z,lambda)−E_N(z)) − mu_N(z)²/s.**
The vacuum pole +mu²/s in the uncentered two-point function is *removed* by the negative subtraction. Omitting it is wrong whenever mu!=0. At z=0 for the real four-link Wilson O, mu=0 by face-center symmetry; this particular slice cannot test the necessity of the subtraction. The independent two-level test deliberately uses a nonzero mu.

## 4. Local source field and operator ordering

Introduce H(z,h)=H(z)−hO. At any isolated simple eigenbranch with analytic P,
  [h](E_N(z,h)−E_N(z)) = Tr(P·(−O)) = −mu_N(z).
Again this is a rank-one nonselfadjoint Hellmann–Feynman identity (left/right normalization), not a conjugate-ket formula. The source acts only on the first plaquette; the probe T also acts only on that face and the neutral probe. Gauge transformations commute with both augmented Hamiltonians on the original-link gauge-invariant subspace.

## 5. Method B: independent exact characteristic-polynomial check

Take the intentionally **different** two-level model H(z)=[[0,−z], [−z,2]], O=[[1,1],[1,−1]], s=3/2. Its low eigenvalue E=1−sqrt(1+z²) and analytic rank-one P=((1+sqrt(1+z²))I−H)/(2sqrt(1+z²)). Let r=sqrt(1+z²). Then
  mu=(1+z)/r,
  F=(2−mu²)/(s+2r),
  Tr(P O B O)=mu²/s+F.
An independent implementation uses the **4×4 determinant** f(x,lambda)=det(K_probe(z,lambda)−xI), not P or the resolvent, and implicit differentiation at x=E:
  [lambda²] E_probe=− ([lambda²]f(E,lambda))/[(∂_x f)(E,0)].
A second, independent 2×2 determinant of H(z)−hO gives [h]E(z,h). Both agree **exactly** with the Riesz/Green computation at z=0, z=1/3 and z=i/5; at z=i/5 P≠P†, proving the test exercises nonorthogonal complex eigenprojection. At z=0, mu=1, uncentered=20/21, centered=2/7, probe coefficient=−20/21 and mu²/s=2/3. This defeats accidental omission of centering.

The tests also explicitly check that s=0 produces a degenerate probe vacuum and that the shifted operator is singular at s=−2 for z=0. Both lie outside the admitted s>0 domain. Exact toy agreement is a **negative/falsification control**; the proof in §2–3 is what establishes the identity in the full infinite-dimensional finite-graph physical theory.

## 6. Real finite-volume *uniform norm-Lipschitz* energy changes — a weaker independent fact

For real z in the admitted ground regime, and real h,lambda sufficiently small that the analytic branches remain the actual lowest eigenvalues, the perturbations are bounded and selfadjoint:
  ||K(z,lambda)−K(z,0)||<=2|lambda|,
  ||H(z,h)−H(z,0)||<=2|h|.
The min–max/variational principle gives **for every finite N**, without an N-dependent constant,
  |E_N^probe(z,lambda)−E_N(z)|<=2|lambda|,
  |E_N(z,h)−E_N(z)|<=2|h|.
If the published Phase 9 real strong-electric physical gap gamma>0 is admitted, probe lambda=0 has gap ≥min(gamma,s) and the source Hamiltonian gap ≥gamma. The two spectral gaps stay positive for real |lambda|<min(gamma,s)/4 and |h|<gamma/4 by bounded perturbation (strict inequalities). This yields common **real** small-neighbourhood branch identification; it does **not** give any **complex** uniform local-energy bound or polydisk. A real-axis Lipschitz estimate is not a holomorphic maximum-modulus estimate.

## 7. Conditional all-orders bridge, with every premise visible

Let D_N(z,lambda)=E_N^probe(z,lambda)−E_N(z) and L_N(z,h)=E_N(z,h)−E_N(z). **Assume, but do not assert**, common N-independent radii r,rho,eta>0 on whose closed z×lambda and z×h disks both functions are jointly holomorphic with
  sup_N sup_(|z|≤r,|lambda|≤rho)|D_N|<=C_D<∞,
  sup_N sup_(|z|≤r,|h|≤eta)|L_N|<=C_h<∞.
Cauchy along lambda and h gives
  |[lambda²]D_N(z,lambda)|<=C_D/rho²,
  |mu_N(z)|=|[h]L_N(z,h)|<=C_h/eta.
Therefore exactly
  **|F_N(s,z)|<=C_D/rho²+(C_h/eta)²/s =: M**, independent of N.
Analyticity of both local shifts on a common disk then provides the requisite holomorphic F_N. With Phase 7's exact c_(N,k)=0 for k<2(N−1), Cauchy in z implies, for d=N−1 and any 0<beta0<r,
  sum_(k≥2d)|c_(N,k)| |beta|^k
  <= [2M/(1−beta0/r)] (beta0/r)^(2d)
  =A q^d,  q=(beta0/r)²∈(0,1).
No result in this file proves the multiparameter uniform complex-energy **premises**. The algebraic implication is rigorous, but the physical coefficient-tail claim remains OPEN.

## 8. Source and originality status

This identity is a direct application of standard nondegenerate Rayleigh–Schrödinger/Feshbach perturbation and a probe-space Schur complement, plus an exact rank-one centering identity. It is **new as an explicit reduction in this project's research**, not established as a novel theorem of mathematical physics. For the relevant prior art, see Phase 11 LOCAL_ENERGY_SHIFT_THEOREM_AUDIT.md. An externally refereed analytic proof of the Yang–Mills continuum mass gap is neither claimed nor inferred.
