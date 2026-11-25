# Finite spatial boxes: the adjoint witness can vanish at only finitely many positive times

**2026-11-25 | Research-only continuation | Phase 15 not activated.**

This extends the [volume-uniform short-time result](2026-11-25-short-time-adjoint-leakage.md) in a different direction. Fix a finite open spatial box, the adjacent plaquettes p,q, and any scaled spatial coupling γ>0. Take the time-continuum limit b→∞, d/b→T, s=γ/b while leaving the spatial lattice fixed. For the same local adjoint witness R=τ_pτ_q−τ_C/4, the scalar overlap of the normalized endpoint conditional mean with R is nonzero at every positive time except possibly finitely many times. This rules out a persistent cancellation at fixed box and coupling, not every isolated cancellation, a volume-uniform nonzero bound at long times, or a continuum mass gap.

## Normalized time-continuum limit

On the finite product group M=SU(2)^E give each edge the unit-quaternion metric, and let L=(1/2)∑_e Δ_e, with nonpositive Laplacian. On a spin-j edge it has rate −2j(j+1); thus the fundamental rate is −3/2 and the spin-1 rate is −4. Set V=∑_rτ_r, F=τ_p, and H=L+γV, with V acting by multiplication. For T≥0 use
\[
A(T)=\frac{e^{TH}F}{e^{TH}1}.
\]
This is the limit of the normalized Wilson half-slab mean A_d(b,γ/b), uniformly over middle fields in each fixed spatial box. Here is an elementary consistency argument in this normalization. With δ=1/b the one-step convolution K_b is sup-norm contractive and, on smooth f,
\[
K_b f=f+\delta Lf+o(\delta).
\]
Indeed on each edge the central increment has a uniform tangent direction, with radial density proportional to e^{b\cos r}\sin^2r, 0≤r≤π. Rescaling r by √b gives b E r²→3 and E r³=O(b⁻³ᐟ²). To justify the moment limits, use 1−cos r≥2r²/π² and sin r≤r for domination after rescaling, and the pointwise Maxwell density limit. Taylor expansion in the radial direction and symmetry give the displayed consistency on sets of functions with uniformly bounded C³ norms; the Taylor bounds over the finite set of edges telescope. Then P_b=K_b e^{δγV} satisfies P_b f=f+δHf+o(δ), with norm at most exp(δ|γ|‖V‖∞). Compare P_b^d to e^{dδ H} by the telescoping sum of one-step differences on the smooth, uniformly C³-bounded trajectories e^{tH}F and e^{tH}1 for 0≤t≤T+1. The semigroup steps also satisfy the same consistency there by their integral evolution equation. The sum of d bounded o(δ) errors is o(1). The denominator is bounded below by e^{−(T+1)|γ|‖V‖∞} from positivity/Feynman–Kac, so division preserves convergence. The representation on each gauge-invariant input is preserved by both operators. The time-only Hamiltonian scaling is standard; see [Kogut–Susskind](https://doi.org/10.1103/PhysRevD.11.395) and [Creutz](https://doi.org/10.1103/PhysRevD.15.1128).

## A signed coefficient at time zero

Quotient differentiation, using (e^{TH}1)' at zero equal to γV, gives
\[
A(T)=F+TLF+\tfrac12T^2\{L^2F+\gamma[L(VF)-VLF-FLV]\}+O(T^3).
\]
The terms quadratic in γ cancel exactly. Smooth F,V lie in the needed generator domains in the fixed box. Let Q denote the Haar projection with spin 1 on the shared edge, spin 1/2 on C, and spin zero elsewhere. Only q in V contributes to Q(VF): to have spin 1 on the shared edge, both factors must contain that edge, and the six remaining fundamental edges identify q. The projected product is R. Both single plaquettes have decay rate 6, while R has rate 4+6·(3/2)=13. Thus Q of the bracket is (−13+6+6)R=−R. For h(T)=⟨R,A(T)⟩_Haar,
\[
h(T)=-\tfrac12\gamma\|R\|^2 T^2+O(T^3),\qquad \|R\|^2=3/64.
\]
In particular h is strictly negative at sufficiently small positive times (for each fixed box and γ). This coefficient agrees with the exact finite-step limit. Its sign comes from the shared-edge spin-1 decay rate, not a pointwise sign of R.

## Long-time argument: eventual sign, without an a priori sign choice

On the compact connected product manifold, H is self-adjoint with compact resolvent and a positivity-improving heat semigroup. Its top eigenvalue λ₀ is simple with a smooth eigenfunction φ>0, bounded below on the fixed box. These properties follow from ellipticity, the strictly positive diffusion kernel, and the bounded real Feynman–Kac weight; see also [Davies–Simon](https://www.sciencedirect.com/science/article/pii/0022123684900764) for the general heat-semigroup context. Write λ_j=λ₀−δ_j for the distinct remaining eigenvalues, with orthogonal projections P_j. The positive gaps δ_j increase to infinity. For real T>0, the maps e^{TH}F and e^{TH}1 are analytic into continuous functions: for a neighborhood about each T, apply a fixed positive-time smoothing step to the L² analytic semigroup. The denominator is positive and has a positive minimum at each fixed real T. Its reciprocal is therefore real analytic there. Hence h is real analytic on (0,∞).

Let a=⟨φ,F⟩/⟨φ,1⟩. After removing the leading e^{λ₀T} factor,
\[
 A(T)-a
 =\frac{\sum_{j\ge1} e^{-\delta_jT}P_j(F-a)}
        {\langle\phi,1\rangle\,\phi+\sum_{j\ge1} e^{-\delta_jT}P_j1}.
\]
Use the positive minimum of ⟨φ,1⟩φ to expand the reciprocal geometrically at large T. Every sum here is absolutely convergent in C(M) beyond some T₀: at any fixed positive time, smoothing gives ∥P_j f∥∞≤C e^{t δ_j}∥f∥₂, and the heat trace is finite by comparison of H to L plus a bounded potential. Choose T₀ so that the summed norms of the denominator perturbations after dividing by ⟨φ,1⟩φ are less than one half. The geometric expansion is then absolutely convergent even after summing separately the norms of all products. Taking the scalar overlap with R, using ⟨R,1⟩=0, gives an absolutely convergent series of decaying exponentials. Its rates lie in the additive semigroup of the δ_j (with at least one gap); below every finite bound there are finitely many possible sums, since δ₁>0 and the distinct gaps have no finite accumulation point. Equal rates, including all possible resonances, may be collected.

If every collected coefficient vanished, h would vanish for all T≥T₀ and hence identically by real analyticity, contrary to the short-time calculation. Thus there is a smallest rate with nonzero coefficient. All faster rates give o(1) relative to it as T→∞, by absolute convergence at T₀ and dominated convergence. This proves eventual strict sign, without identifying that sign or the first rate. Analyticity, strict short-time sign, and eventual sign confine any positive zeros to a compact subinterval of (0,∞) and make their number finite. Consequently the one-link adjoint sector is provably nonzero away from this finite possible exceptional set. A countable family of finite boxes has at most countably many exceptional times for a fixed γ, but this says nothing about a lower bound common to all boxes at those times.

## Falsification control and limits

Positivity of an underlying semigroup alone does not prevent a sign change of a signed witness. For an exact control, use four independent binary spins whose product characters on the first k spins, f_k, decay at rate k. With source (f₁+f₂+f₃+f₄)/4, witness 4(f₁/2−2f₂+(5/2)f₃−f₄), and constant denominator, the overlap is x(1−x)²(1/2−x), x=e^{-T}. It is quadratic and negative near T=0, changes sign at T=log 2, and eventually has positive sign. Direct checks recover 0, 0, −1 for the zeroth, first and second Taylor derivatives. This is not a Wilson counterexample; it shows why Wilson-specific structure would be needed to rule out the isolated exceptions or to identify the eventual sign.

The eventual exponential rate above belongs to a fixed spatial lattice and may be a sum of several finite-box eigenvalue differences. Neither its value nor its box or lattice-spacing dependence was controlled. The theorem does not address isotropic large coupling, infinite-volume spectral gaps, or literature priority of the observable-specific conclusion. The next target is Wilson-specific: determine whether the first surviving term is generated by a single gauge-invariant eigenspace rather than denominator combinations, and identify which symmetry channels can contribute.
