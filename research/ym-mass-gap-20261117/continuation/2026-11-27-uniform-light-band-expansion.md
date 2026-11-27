# Volume-uniform second-order light-band estimate on SU(2) tori

**2026-11-27 UTC. Fixed spatial mesh, continuous time, strong electric coupling.** Starting from the original-metric vacuum dressing in [b69653b](https://github.com/JeremyHennessy/Quantum-index/commit/b69653b0dc1dc219c1e36c66d379670b21ecf8af), fix a real profile |h_p|≤1, put V=−Σ_p h_p W_p (W_p=Tr(U_p)/2), and H(g)=A+gV. Constants below are independent of the volume and profile. Let P be the free physical energy-6 band (one state per elementary plaquette on tori of side lengths ≥6), let Q=1−P on the physical space, and define

    M = PVQ (6−A|_Q)⁻¹ QVP − e₂P,   e₂=−Σ_p h_p²/24.

Let μ_j be the sorted eigenvalues of M on P. For sufficiently small |g|, the sorted light energies **above the interacting ground state**, with multiplicities, satisfy

    |λ_j(g)−6−g²μ_j| ≤ C |g|³.

On all-even tori the right side improves to C |g|⁴. In particular |λ_j(g)−6|≤C' g² on both types of tori. This is not an estimate along the spatial continuum trajectory. The coefficient is the usual degenerate energy perturbation matrix; no priority or external verification claim.

## Uniform expansion before the volume sum

Write τ_s for evolution with A+sV, F_s=∫w(u)τ_s^u(V)du and D_s=∫W(u)τ_s^u(V)du, with the filters and graph-domain argument of the preceding note. Use signed s with |s|≤g₀≤1/400. Write α_s(O)=U_s* O U_s, U'_s=iD_sU_s. Then B(g)=α_g(H(g))−A=∫₀ᵍ α_s(F_s)ds; in finite volume B(g)Ω=E₀(g)Ω. The Fourier support of w is inside the common ambient gap and inside (−1/2,1/2).

For either filter and each source plaquette p, start with the oriented identity

    τ_s^u(V_p)−τ_0^u(V_p)
      = is ∫₀ᵘ τ_s^(u−v)([V,τ_0^v(V_p)])dv.

The identity follows by differentiating τ_s^(u−v)τ_0^v. Iterate by applying it to its leftmost interacting propagation. For the degree-2 expansion with remainder of order 3, each remainder precursor is a nested commutator with three copies of V, separated by free propagation, then evolved once under τ_s. Every free propagation keeps the exact link support. Each copy of V in a commutator can be restricted to summands touching the current support. Thus for three insertions there are a bounded number of local summands, all in a fixed-radius ball about p, with bounded norms. The simplex costs ≤|u|³/6 in this remainder. For comparison with radius-r truncation, split at |u|=c r: short times have an exponentially small Lieb–Robinson truncation error times the simplex bound; long times have a direct operator norm bound integrated against the rapid filter tail. Nested truncation differences give shell norm ≤C_m |s|³(1+r)^(-m) for arbitrary fixed m. Coefficients through order 2 are fixed-range interactions (of increasing but fixed radius), without requiring norm continuity of the on-link Casimir evolution. This proves the expansion for both F_s and D_s in all polynomial shell moments.

For clarity, the transport part can be expanded without derivatives of α in any weighted operator topology. For a fixed observable O use

    α_s(O)=O+i∫₀ˢ α_v([O,D_v])dv.

Substitute this identity into its own integrand twice, applying it to the fixed observable [O,D_v] for each fixed v, and similarly at the next nesting. Its order-3 remainder is three commutators with D at their own integration parameters, acted on by α at the innermost parameter. Apply this with O=F_s held fixed, insert the degree-2 expansions of D and F, and retain total degree ≤2 in s. For intersecting balls, their union is contained in a ball about the first center of radius ≤2(r₁+r₂+1); the number of partner centers is polynomial in r₁+r₂+1, and multiplicities are bounded. The shell moments of a finite nested commutator are therefore bounded by products of sufficiently high input moments, using the commutator norm inequality. The shell propagation estimate of the previous note for α is uniform over this signed compact interval; use extra input moments to absorb support and boundary factors. Integrating over signed time then preserves order 3 and all polynomial shell moments of the remainder. No total-volume norm of V, D, or B is used for these uniform estimates.

It follows that B(g)=g B₁+g² B₂+g³ B₃+R₄(g), with R₄ shells bounded by C_m |g|⁴(1+r)^(-m). At each fixed volume the operator-norm expansion and exact vacuum equation imply B_k Ω=e_k Ω, and R₄(g)Ω=(E₀(g)−Σ_{k≤3}g^k e_k)Ω. Apply the first-excited-link telescoping lemma of b69653b separately to these centered terms. Its incidence sums consume at most a fixed number of shell powers. Consequently each K_k=B_k−e_k has form bound C_k A and the centered remainder has form bound C |g|⁴ A. All form estimates hold on D(A^1/2). Compact resolvent at fixed volume follows from the electric spectrum and bounded perturbation.

## First two coefficients and parity

The first coefficient B₁=F₀ is the exact electric-energy diagonal since A has half-integer spectrum. It is locally vacuum-annihilating (Haar mean zero, one-dimensional zero eigenspace) and e₁=0. For PVP, an independent center flip on a link gives zero unless the symmetric difference of the three plaquette boundaries is empty. Equal endpoint plaquettes cancel and leave the inserted four links; distinct ones share at most one edge and have symmetric difference of size ≥6. Thus B₁P=0. The geometric overlap bound follows because two incident nonparallel elementary edges determine their unique elementary square; two parallel opposite edges of a square fix the same unit offset, and the ± offsets are distinct modulo side length ≥6.

Let F'_0 denote the linear coefficient of F_s. Then B₂=(F'_0+i[F₀,D₀])/2, and P[F₀,D₀]P=0. For a,b in P and an intermediate electric energy E_c≠6, the Duhamel integrand for F'_0 contributes V_ac V_cb times i(e^{iv(E_c−6)}−e^{−iv(E_c−6)}). Integration in v up to u gives 2(cos(u(E_c−6))−1)/(E_c−6). The w average of the cosine is zero. The E_c=6 contribution vanishes, and this spectral pairing is valid by Cauchy–Schwarz of the V matrix elements at fixed volume, with nonzero denominators bounded away from zero. Consequently PB₂P=PVQ(6−A|_Q)⁻¹QVP. The same calculation at E=0 gives e₂=−||VΩ||²/6; plaquette characters are orthogonal and ||W_pΩ||²=1/4, giving the formula above.

On all-even tori, multiplication of the oriented link U_i(x) by the center sign η_i(x)=(−1)^(Σ_{j<i} x_j) is periodic. The product of the four signs on every elementary plaquette is −1. Its implementing unitary J fixes Ω, commutes with A and gauge transformations, and sends V to −V. By uniqueness of the flow, or covariance of its filters and graph-domain evolution, JB(g)J*=B(−g). As J|_P=−I, PB₃P=0 and e₃=0. This particular center pattern is not asserted on odd tori.

## Uniform conversion to ordered eigenvalue estimates

Work on Ω^⊥ in the physical space after ground-state subtraction. Let S=1−P on this space. Uniform forms above give H_d=α_g(H(g))−E₀(g)=(A+gB₁)+O_form(g² A), and the first reference block is exactly 6. The variational principle, with A≥9 on S, gives the isolated band with the free multiplicity and |λ_j−6|≤C g². For E in [5,7], the S block has H_d|_S−E≥c A|_S when |g| is small (use E≤7 and A|_S≥9). The polarization of the quadratic bound for H_d−A−g B₁ gives ||A_S^(-1/2) S H_d P||≤C g²√6, since A and B₁ have no P-to-S block. Here the cross term and inverse may equivalently be understood on the form domain. Accordingly the Schur correction has norm ≤C g⁴, uniformly for E∈[5,7]. Completing the square against the positive S block shows that the negative index of H_d−E equals that of the finite Schur matrix. Its P diagonal is 6P+g²M+O(g³) on general tori and 6P+g²M+O(g⁴) on all-even tori. Using the two norm bounds in the finite Schur matrix brackets each sorted eigenvalue (take endpoints with an arbitrarily small extra offset), including degeneracies. This proves both estimates without taking a finite-volume analytic radius to be uniform.

## Controls and boundaries

- Independent geometry loop enumerated 2,718,210 distinct plaquette pairs on sizes (6,6,6), (6,8,10), (8,6,6), (7,6,6), (6,7,6), and (7,7,7): all had edge overlap ≤1. It checked 2,952 even-torus plaquette sign products, including wrap edges, and found 255 positive products as an odd-torus negative control. The general claims use the proofs, not enumeration.
- One active face: W_p times the normalized face character is (χ_0+χ_1)/2 (spin notation), exciting intermediate energies 0 and 16. Its diagonal second-order shift relative to ground is (1/6−1/10)/4+1/24=7/120, tested by exact common-denominator arithmetic. This controls the sign and vacuum subtraction, not a lattice-continuum coefficient.
- Quasi-local estimates use [Nachtergaele–Sims–Young I](https://arxiv.org/abs/1810.02428); compare [Yarotsky's relatively bounded stability work](https://arxiv.org/abs/math-ph/0412040). Moving from fixed-mesh strong electric coupling to a controlled spatial refinement at physical weak coupling remains the main obstruction. Increasing the order of this expansion alone will not accomplish that bridge.
