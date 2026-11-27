# Second-order Wilson transfer gap near the temporal-only point

**2026-11-27 UTC. Paper-level derivation on a finite spatial torus, infinite transfer time.** Fixed anisotropic Wilson regulator, not the isotropic continuum trajectory. The transfer framework is [Lüscher](https://doi.org/10.1007/BF01614090) and [Osterwalder–Seiler](https://doi.org/10.1016/0003-4916(78)90039-8); the finite isolated spectral-cluster expansion is [Kato perturbation theory](https://link.springer.com/book/10.1007/978-3-642-66282-9). Priorities in the strong-electric/anisotropic literature are not assessed here.

## Exact unperturbed slice gap

On a three-dimensional periodic cubic spatial graph with each cycle length at least six in the coordinate directions, use t>0 for temporal coupling and v for spatial coupling. Normalize the temporal single-link convolution by its constant eigenvalue. On the gauge-invariant Hilbert space of the spatial links, the transfer operator is

    T(v) = exp(v V/2) K exp(v V/2),    V = Σ_p W_p,    W_p = Tr(U_p)/2.

This is the temporally averaged transfer kernel restricted to gauge-invariant states: temporal-link integration is gauge averaging and is the identity on that invariant subspace; the spatial Wilson weight is split symmetrically. This step does not drop temporal holonomies from a finite time-periodic expectation. The one-link spin-j convolution eigenvalue is I_(2j+1)(t)/I_1(t), from SU(2) character orthogonality and the Bessel recurrence. It is positive and strictly decreasing with j by [Soni's inequality](https://doi.org/10.1002/sapm1965441406). Put r=I_2/I_1, s=I_3/I_1 and q=r⁴.

A nontrivial physical spin network needs degree at least two at each vertex of its nonzero-spin support, since one nontrivial representation alone has no singlet. It therefore contains at least four links; exactly four means an elementary square, all four spins equal by the degree-two fusion rule. Consequently K has constant eigenvector of eigenvalue 1 and largest non-vacuum eigenvalue q, with orthonormal basis f_p=Tr(U_p)=2W_p over elementary plaquettes. All other eigenvalues are at most max(r⁵,s⁴)<q. The finite-volume cluster is isolated. Orthogonality also follows from the independent edge-center parities and each plaquette holonomy is Haar under product Haar.

## Center parity kills the entire first derivative and makes the second local

Write P for the q-eigenspace projector. Link-center flips commute with K. A matrix element ⟨f_p,V f_b⟩ requires three plaquette boundaries with zero sum mod 2. Repeated faces cannot give zero. Three distinct faces cannot cancel all four edges of any one face because distinct elementary faces share at most one edge. Hence PVP=0; similarly the first-order ground eigenvalue shift is zero.

Let F(x)=(q+x)/(q−x) on the complement of P, and C=(1+q)/(1−q)=F(q²)=−F(1). Expanding T(v) gives T'=(VK+KV)/2 and T''=(V²K+2VKV+KV²)/4. The second derivative cluster matrix, divided by q, is P V F(K) V P, with the reduced resolvent excluding P. Indeed the θ-channel of T'' plus the second-order mixing contributes (q+θ)/2 + (q+θ)²/[2(q−θ)] = q F(θ). On the constant eigenspace the same calculation at eigenvalue 1 gives the second derivative of log λ₀ equal to C N_p/4, where N_p is the number of plaquettes. Therefore the matrix for the quadratic coefficient of log(λ/λ₀), with the convention v²/2, is D=P V F(K) V P − C N_p I/4.

For a diagonal entry, parity forces the two copies of V to use the same face. A face edge-disjoint from p yields a product of two fundamental loops, eigenvalue q² and squared norm 1/4, so cancels its subtraction C/4. Face p yields V_p f_p=(1+χ_adj(U_p))/2, with eigenvalues 1 and s⁴ and squared norms 1/4 each. An edge-sharing neighbor b yields V_b f_p=f_b f_p/2. On the shared edge two fundamental spins split into singlet and adjoint; the remaining six links are fundamental. Before the factor 1/2 their squared norms are 1/4 and 3/4: the singlet projection integrates out the shared Haar link and is 1/2 times the fundamental trace around the merged six-edge loop. The full squared norm is 1 by conditioning on the shared edge and separately integrating the independent return paths. Thus the two eigenvalues are r⁶ and r⁶s.

For an off-diagonal entry p≠b, the only possible pairings of the four plaquette labels are repeats: four distinct boundaries cannot cancel, since at most three of a face's four edges could be shared. The first pairing gives V_p f_p against V_b f_b, only the common constant sector contributing, −C/4. The other gives f_p f_b/2 against itself. It gives +C/4 for disjoint edges, exactly canceling. For a shared edge it uses the same two fusion channels as the diagonal neighbor. Thus, with A_edge the adjacency matrix of sharing exactly one edge,

    D = (A + 12 B) I + B A_edge,
    A = [F(s⁴) − 2C]/4,
    B = [F(r⁶)/4 + 3F(r⁶s)/4 − C]/4.

Every square has 12 neighbors, three via each of its four edges. In particular the entire ground-normalized Hessian is local and has norm bounded independently of spatial volume at each fixed t. This conclusion is at the derivative level only; it gives no volume-uniform neighborhood or remainder estimate.

## Weak temporal bare coupling and the direction of the correction

Using the [fixed-order large t Bessel expansion](https://dlmf.nist.gov/10.40), r=1−3/(2t)+O(t⁻²) and s=1−4/t+O(t⁻²). Thus A/t→−7/60 and B/t→1/84. At sufficiently large t, B>0 and the largest eigenvalue of D is A+24 B, since the adjacency matrix is 12-regular. It is asymptotic to (71/420)t, strictly positive. For each fixed such t and finite torus, the largest normalized nonvacuum eigenvalue consequently increases to second order away from v=0; the dimensionless transfer gap −log(λ₁/λ₀) decreases to that order. This is not a behavior statement for large v. The curvature grows with t while the unperturbed gap is only 6/t+O(t⁻²), so a naive extrapolation to v=t is not controlled.

**Checks.** Enumerated the geometry of all 648 plaquettes on a periodic 6³ graph: each had 12 distinct edge-sharing neighbors. An exact integer check with signed quaternion coordinate axes reproduced the product, singlet and adjoint norm ratios 1, 1/4 and 3/4 (the proof of the Haar result is above). Scaled Bessel quadrature at t=10,100,1000 gave (A+24 B)/t ≈ 0.163810, 0.168231, 0.168963, consistent with 71/420 ≈ 0.169048.

**Next obligation:** bound the higher spatial-coupling terms with local connected estimates, or identify a different weak-coupling expansion whose radius reaches the matched four-dimensional Wilson trajectory. The exact finite Hessian is a regulator-side result, not an isotropic Wilson bound or a Yang–Mills mass-gap proof. No new Lean replay or external novelty claim.
