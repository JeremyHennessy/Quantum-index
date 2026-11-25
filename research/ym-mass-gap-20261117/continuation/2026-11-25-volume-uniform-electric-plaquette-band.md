# Volume-uniform isolation and local visibility of the electric plaquette band

**2026-11-25 | Research-only continuation | Phase 15 not activated.**

The [finite-box residue proof](2026-11-25-electric-adjoint-residue.md) identified a single slow eigenvector by small-coupling perturbation. Its finite-box Neumann-series bounds were not volume uniform. Here we apply a published uniform theorem to the fixed-spatial-spacing Hamiltonian, then show directly that a local plaquette creates a uniformly nonzero total weight in the isolated band. The statement is about the **whole physical band**, not an individual finite-box eigenvector or the four-dimensional continuum problem.

Let K=−L−γV on any finite open rectangular spatial box with at least two vertices per axis, with the same normalized SU(2) edge metric and plaquette potential V=∑_rτ_r as before. Let Ψ be its norm-one ground state and E its energy. There is a box-independent γ₀>0 such that for |γ|<γ₀:

* In the gauge-invariant subspace, the excitation spectrum below 25/4 consists of 0 and a separated band in [5.94,6.06]. The band has exactly one dimension per spatial plaquette. There are uniform empty intervals on both sides of the band.
* If P_b is its spectral projection, for every plaquette p,
\[
\|P_b(\tau_p\Psi)\|^2 \ge
\frac14-2\sqrt{\frac{64|\gamma|}{3}}-4096|\gamma|.
\]
After reducing γ₀ this implies, for example, a uniform lower bound of 1/8. It is total spectral weight of a local source, not a lower bound for the signed mixed adjoint residue.

## Check the precise perturbation theorem and the boundary

Use [Yarotsky, Quasi-particles in weak perturbations of non-interacting quantum lattice systems, Theorem 1 and equation (4)](https://arxiv.org/pdf/math-ph/0411042). The theorem allows infinite-dimensional site Hilbert spaces and unbounded nonnegative on-site operators with a simple ground state and gap at least 1. A bounded perturbation with fixed finite support range and sufficiently small supremum **per local term**, not small norm of the total perturbation, gives a simple ground state. The spectrum above the perturbed ground, after subtracting its energy, lies in a union of relative neighborhoods |z−a|≤c₂ηa of free energies a, where η is the maximum local perturbation norm. The constants are independent of finite volume. This use of Theorem 1 is not the paper's separate one-particle construction, whose additional isolated nondegenerate on-site eigenvalue hypothesis is not supplied by a physical plaquette.

To match the theorem, pack the three positively directed outgoing link spaces at anchor x into a site. Its electric Hamiltonian is the sum of three edge Laplacians; the constant state is simple and its on-site gap is 3/2. Group the at most three plaquette potentials based at x into φ_x. Each is multiplication by a real normalized trace, so the grouped norm is at most 3|γ| on the sites {x,x+e₁,x+e₂,x+e₃}. In an open box, a plaquette parallel to a boundary can be allowed while the unused third forward neighbor is outside the box. To avoid incorrectly dropping it, pad the site box by a one-vertex positive collar. Set disallowed plaquette coefficients to zero by the **original** vertex box, and set terms based outside that original box to zero. All allowed terms now fit the theorem's range convention. Any unphysical outgoing links introduced by packing or padding are decoupled free factors; freeze them in their ground tensor to recover exactly the physical-edge Hamiltonian. The full ground is the physical-edge ground tensored with those vacuum factors. The physically gauged sector is reducing because K commutes with all vertex gauge actions. The full ground is positive (finite-product Feynman–Kac), unique, and gauge invariant. No bound on an extensive perturbation norm is used.

The single-link free electric rates are n(n+2)/2, n a nonnegative integer, so all free energies, including charged or dummy configurations, are half-integers. Choose γ₀ so that the theorem's relative radius is at most 1/100. The entire spectrum avoids the cuts 23/4 and 25/4, uniformly. Indeed a≤5.5 gives z≤5.555; a=6 gives [5.94,6.06]; a≥6.5 gives z≥6.435. Thus there is no reliance on a theorem restricted to the gauge-invariant Hilbert space.

Now interpolate tγ from 0 to γ, using the same fixed cuts at every t. In each finite box the perturbation is bounded and the shifted spectrum varies norm-resolvent continuously; ranks below the cuts, restricted to the physical gauge-invariant sector and fixed dummy ground tensor, are constant. At zero coupling, the only physical states below 23/4 are the ground; the states at 6 are exactly the elementary fundamental plaquette traces, as verified in the preceding note. There is no different eigenvalue in (6,25/4) because the next possible half-integer is 6.5. This proves the asserted band ranks and uniform isolation. It does not identify the spread inside the band at fixed positive γ.

## Uniform spectral weight of a local plaquette

Put h_e=−Δ_e/2 and F=τ_p, supported on the four links S. Removing from K the terms touching link e decouples it and leaves h_e plus a rest Hamiltonian of ground energy E_rest. At most four plaquettes touch any spatial link, so the removed potential has norm at most 4|γ|. The ground energy E of K is at most E_rest+4|γ| by a trial product. Conversely the ground expectation of K is at least E_rest+⟨h_e⟩−4|γ|. Hence
\[
\langle\Psi,h_e\Psi\rangle\le8|\gamma|
\]
uniformly, also at the boundary.

Let P_S be the tensor projection onto the edge vacua on S, leaving all other links untouched. Since h_e has gap 3/2, the excluded probability satisfies
\[
1-\|P_S\Psi\|^2
\le \tfrac23\sum_{e\in S}\langle h_e\rangle
\le 64|\gamma|/3.
\]
The normalized P_SΨ has exactly the local Haar product ground on S, and the expectation of F² there is 1/4. The trace-distance bound between these two normalized vectors gives
\[
\|F\Psi\|^2\ge\tfrac14-2\sqrt{64|\gamma|/3}.
\]
This bound concerns the physical ground of the full perturbed theory, not a replacement state used for the spectral test.

To control spectral leakage, use left-invariant unit-vector derivatives X_{e,a} on SU(2) with Δ_e=∑_a X_{e,a}². The free energy of F is 6, the potential commutes with F, and KΨ=EΨ. The exact product commutator therefore gives
\[
 (K-E-6)F\Psi
 =-\sum_{e\in S,a}(X_{e,a}F)X_{e,a}\Psi .
\]
For a fixed setting of the other three links, F is a unit-norm real linear functional of the remaining unit quaternion (inversion is a linear isometry in these coordinates). Thus ∑_a|X_{e,a}F|²≤1. Cauchy–Schwarz and the local electric estimates give
\[
\|(K-E-6)F\Psi\|^2
\le 4\cdot 2\sum_{e\in S}\langle h_e\rangle\le256|\gamma|.
\]
All uses of the commutator are on smooth finite-box ground states. The distance to 6 of any physical spectral value outside the band is at least 1/4 by construction (the lower ground eigenvalue presents no exception). The spectral theorem bounds the total squared weight outside by 16·256|γ|. Subtraction proves the local band-weight bound. In particular any one Perron coefficient may go to zero with volume without losing the entire local plaquette signal.

## Scope and next discriminant

Exact rational checks verified the cuts and 4,200 allowed plaquette placements across boxes of side 2–5 under the padding rule. The cited theorem supplies the pre-existing perturbative spectral framework; the local commutator argument above quantifies visibility of this particular physical band. Neither its literature priority nor a volume-uniform signed adjoint overlap in the band has been established. Isolation here is uniform in box size at fixed spatial spacing and sufficiently small anisotropic γ, not as spatial spacing goes to zero along the physical Wilson scaling. The next question is whether a **mixed adjoint–plaquette spectral weight**, rather than an ordinary positive plaquette weight, can be kept nonzero when the individual finite-box residues merge into the band.
