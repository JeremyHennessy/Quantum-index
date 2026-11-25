# A volume-uniform mixed adjoint–plaquette weight in the electric band

**2026-11-25 | Research-only continuation | Phase 15 not activated.**

The [finite-box residue](2026-11-25-electric-adjoint-residue.md) was for a conditional quotient with a Haar witness. The [uniform band result](2026-11-25-volume-uniform-electric-plaquette-band.md) bounded the positive weight of a plaquette source, but not its signed overlap with an adjoint witness. This note closes the latter gap for the **ground-state-dressed mixed spectral observable**, which is not the conditional quotient.

Use the same finite open spatial boxes, including boundary placements of an adjacent pair p,q, and K=−L−γV. Let Ψγ be the positive normalized ground state, Eγ its energy, and P_b(γ) the isolated physical band around 6. Write F=τ_p and R=τ_pτ_q−τ_C/4. Regarding the two observables as multiplication operators, put
\[
S_\Lambda(\gamma)=\langle R\Psi_\gamma,\ P_b(\gamma)F\Psi_\gamma\rangle.
\]
There are constants C and γ₀>0 independent of the box and pair location for which
\[
|S_\Lambda(\gamma)-\tfrac{13}{896}\gamma|\le C|\gamma|^{3/2}
\qquad(|\gamma|<\gamma_0).
\]
In particular for all sufficiently small positive γ this cross weight is positive and at least (13/1792)γ, even though the contribution of a single finite-box eigenmode need not survive as volume grows. This is about the total isolated-band overlap; it is not pointwise positivity of the cross spectral measure inside the band.

## Real-time spectral filter and locality

Use the padded anchor-site representation from the uniform band proof. The spectral confinement theorem there holds just as well if an arbitrary subset of the plaquette terms is switched off, or if their coefficients are turned on individually along an interpolation with magnitudes bounded by |γ|: the per-site interaction supremum remains at most 3|γ|. In particular the full Hilbert-space ground state is simple with a common positive gap throughout. The common spectral cuts around 6 remain available in the full Hilbert space. Since F,R and the Hamiltonians are gauge invariant, only the physical subspace contributes. Free pad links tensor out in their vacuum.

Choose a real smooth compactly supported function f on energy that equals 1 on [5.94,6.06] and vanishes outside (23/4,25/4). Let g denote its inverse Fourier kernel in the convention f(ω)=∫g(t)e^{itω}dt; it decays faster than any power. Then, writing τ_t for the Heisenberg dynamics,
\[
S_\Lambda(\gamma)=\left\langle\Psi_\gamma,\ R\int_{\mathbb R}g(t)\tau_t(F)\,dt\,\Psi_\gamma\right\rangle .
\]
Indeed τ_t(F)Ψγ=e^{it(K−Eγ)}FΨγ. The integral may be understood strongly and is norm bounded; no norm continuity in t for general on-site observables is needed.

For r larger than a fixed constant, turn off all plaquette terms whose supports in anchor-site language are not contained in the radius-r neighborhood of the source pair. Write S_{\Lambda,r} for the same filtered quantity for this truncated Hamiltonian, still on the original finite volume. It has the following uniform locality estimate for each m:
\[
 |S_\Lambda(\gamma)-S_{\Lambda,r}(\gamma)|\le C_m(1+r)^{-m}
 \quad (|\gamma|<\gamma_0).
\]
Here is a proof of both parts of this estimate. Use the Lieb–Robinson bounds for bounded interactions with arbitrary on-site terms in [Nachtergaele–Sims–Young, Theorems 3.1, 3.4 and the interaction-picture extension](https://arxiv.org/pdf/1810.02428). In the interaction picture the free electric terms only rotate operators on existing supports; finite range, exponential spatial weights and interaction norms remain uniform. For the filtered dynamics of F, compare either model with the model truncated at radius r/2. For |t|≤ar with sufficiently small fixed a>0, Duhamel's formula and summation over the omitted plaquettes yield a volume-independent exponentially small error: each commutator has the usual exponential penalty in its distance from the fixed support, and the three-dimensional shell growth is polynomial. For |t|>ar, bound both evolved observables by ∥F∥ and integrate the rapidly decreasing kernel. Thus either filtered operator, multiplied by R, differs by O_m(r^{-m}) in norm from the same operator A_{r/2} supported within the inner neighborhood and bounded by ∥R∥∥F∥∥g∥₁. This applies equally to boxes cut off by a physical boundary.

To compare the two ground-state expectations of A_{r/2}, interpolate just the deleted terms outside the radius-r region. The uniform ground gap already established applies along this path. For such a bounded derivative of a common-domain self-adjoint Hamiltonian, [the same paper, Theorem 6.3 and Section 6.2](https://arxiv.org/pdf/1810.02428), provides the spectral flow differentiation of the ground projection with generator D_u=∫W(t)τ^{(u)}_t(K'_u)dt, where W has integrable tails faster than any power. In finite volume the derivative of a ground expectation of a fixed bounded operator is its expectation against the corresponding commutator with iD_u, up to the immaterial sign convention. Decompose K'_u into the removed local plaquette terms. For each such term at distance d from the inner support, split the commutator integral at |t|=a d. The small-time part is exponentially small by the same Lieb–Robinson bound, with at most the polynomial support-size prefactor of the inner region; the long-time part is bounded by the tail of W times the two operator norms. Summing over the omitted plaquettes loses at most polynomial powers of r because their distances are at least r/2−O(1). Since the decay is faster than any power, the expectation difference is O_m(r^{-m}) for each m, uniformly in volume. This proves the locality estimate without assuming a uniform bound on the total interaction norm.

## Exact local derivative and uniform error

Only O((1+r)^3) anchor sites participate in the cutoff Hamiltonian; all exterior sites are free tensor factors. For Γ equal to this active site set intersected with the padded box, the perturbation norm on Γ is at most C₀(1+r)^3. At complex γ with |γ|≤c₀(1+r)^{-3}, fixed resolvent contours around 0 and 6 for the free Hamiltonian (one may use circles of radius 1/8) yield analytic, uniformly operator-bounded projections P₀(z) and P_b(z). The common domains are preserved by the bounded perturbation. The free half-integer energy grid ensures the contours miss the rest of the spectrum, including charged states; for real small γ within the disc the fixed contour for 6 selects the same band as the shifted filter. This follows by reducing c₀ so the total norm shift and ground energy shift cannot change either cut.

An analytic extension of S_{\Lambda,r} is
\[
\frac{\langle 1,\ P_0(z)\,R\,P_b(z)\,F\,P_0(z)1\rangle}
{\langle 1,P_0(z)1\rangle}.
\]
The bracket uses the same *fixed* electric vacuum on both sides, and the denominator is bounded away from zero by closeness of P₀(z) to P₀(0). For real z this is exactly the ground-state expectation. Thus Cauchy's bound yields a remainder O(γ²(1+r)^6) after its linear term, for |γ| less than half this radius, without involving the rank of the band.

At zero coupling S_{\Lambda,r}=0. Let V_r be the local retained plaquette sum. The derivative of the ground state at zero, orthogonal to its vacuum, is V_r/6. The derivative term on FΨ drops out by P_b(0)R=0. The derivative from dressing R gives ⟨R,V_r F⟩/6. The band-projector derivative between energies 6 and 13 gives +⟨R,V_r F⟩/7, since the perturbation of K is −V_r and the denominator is 6−13. Only q in V_r can hit this precise edge-spin support and q is present uniformly for r above a fixed constant. Thus ⟨R,V_r F⟩=∥R∥²=3/64; the linear coefficient is (1/6+1/7)(3/64)=13/896. The positive dressing term here is different from the **negative** ground-denominator correction of the earlier normalized conditional quotient.

Finally take r=⌈|γ|^{-1/12}⌉ and use m=18. Both the localization bound and the finite-neighborhood Taylor remainder are O(|γ|^{3/2}), and the small-disc condition holds as γ→0. This proves the statement uniformly over the boxes, including ones smaller than r. By the same outer truncation estimate, the overlap has a thermodynamic limit along boxes exhausting around a fixed pair: for a given r the truncated calculation stabilizes once its neighborhood is interior, with uniform O_m(r^{-m}) discrepancy. The nonzero bound passes to this limit.

## Limits and validation

The exact fractions and the cutoff balancing powers were checked independently. Locality and the analytic argument, not a numerical extrapolation, supply the uniform remainder. The result uses an established locality and weak-coupling spectral framework; literature priority for this specific Wilson mixed observable is not established. It does not imply a signed lower bound for the earlier Haar-conditioned quotient, any statement along isotropic large coupling, or the spatial-continuum mass gap. The next test is whether a corresponding local spectral weight survives in a genuinely normalized conditional observable after a controlled volume limit, or whether the boundary normalization is the first obstruction.
