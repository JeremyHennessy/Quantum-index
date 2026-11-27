# Exact three-box projection and the remaining boundary-correlation estimate

**2026-11-27 UTC. Finite-cutoff Wilson calculation.** This applies the familiar Wilson Gibbs boundary specification ([Chatterjee, §2.1 and §6](https://arxiv.org/html/2006.16229v5#S2)) to the connected packet. This is not a novelty claim or a Lean replay.

## The projection that actually factorizes

On the finite periodic lattice with raw Wilson plaquette weight and product Haar reference, choose three link interiors I₁,I₂,I₃, with no plaquette using edges in two interiors. Let Xᵢ be a gauge-invariant packet measurable using links in Iᵢ (allowing each packet its own fixed cutoff normalization). In particular, this applies to products or triples formed from fixed spatially separated local plaquette packets whose complete link supports fit inside the interiors. For a nonlocal dressed observable, this support condition must be proved, not assumed. Retain Y, all links outside the union. Every plaquette is an exterior term or belongs to precisely one incidence list Pᵢ. Conditional on Y, the exterior weight cancels and the interior density is the product of exp(Sᵢ) / Zᵢ(Y), where Sᵢ is the sum over Pᵢ and each Zᵢ integrates only Iᵢ. Thus for any subset J of distinct packet labels, E[∏ⱼ Xⱼ | Y] = ∏ⱼ mⱼ(Y), where mⱼ=E[Xⱼ|Y]. All conditionally mixed source jets vanish at this projection and κ₃(X₁,X₂,X₃)=κ₃(m₁,m₂,m₃), exactly at every cutoff.

Each mᵢ uses only retained links in Pᵢ; write Bᵢ for their graph. Gauge transformations on its vertices extend to transformations of all vertices of the finite lattice. The Haar change of variables on Iᵢ preserves both Sᵢ and Xᵢ and proves boundary gauge invariance. Gauging a spanning forest to identity represents mᵢ by cycle holonomies modulo common conjugation in each component. This is not independence of the three Bᵢ under the exterior marginal. Sparse retained fields or nonlocal effective plaquette interactions need not have the separator property. The identity does not need limits of conditional observables taken individually: one can carry the equality of full expectations at each cutoff.

## A quantitative target, not a correlation bound

Let fᵢ=mᵢ−E mᵢ, and let ρ₁ be maximal correlation of the retained sigma fields σ(B₁) and σ(B₂,B₃) in the actual exterior law (supremum over unit centered L² functions). Then
`|κ₃(X₁,X₂,X₃)| ≤ ρ₁ · ||f₁||₂ · ||f₂f₃−E(f₂f₃)||₂ ≤ ρ₁ · ||f₁||₂ · ||f₂||₄ · ||f₃||₄.`
The first inequality follows by expressing the third cumulant as Cov(f₁,f₂f₃). Shared retained variables can force ρ₁=1; this norm is no stronger than the known data unless boundary moments and genuine decorrelation are independently bounded. More narrowly the exact signed target is Cov(f₁,f₂f₃), not a norm bound on all boundary functions. In the setting of the existing rescaled packet zero anchor, after putting the same scaling on the boundary means, the first-order task still requires a signed 1/log(1/r) coefficient, not just a bound of that order.

For the infrared two-packet problem, the same proof gives connected covariance = Cov(m₁,m₂). An exponential physical-separation bound on this specific centered pairing, with constants that survive the ordered mesh-then-volume limits for the same operators, would directly serve the existing trace-sector decay target. Neither conditional factorization nor a UV asymptotic supplies this estimate, and one trace channel cannot certify a gap for a dense family by itself.

## Exact regression control

Independently enumerated all eight interior assignments for each of 64 fixed exterior configurations on a periodic 4×4 Z₂ lattice. Each plaquette contributes weight 4 for product +1 and 1 for product −1. Use horizontal links based at (0,0), (2,2), (0,2) for the separated case. All 64 cases factorized every mixed pair and triple exactly by integer cross multiplication. Flipping horizontal link (3,3), which is outside the first link's incident-plaquette boundary, preserved its conditional mean in all 64. Replace the second separated link by the vertical link based at (1,0), and the third by the horizontal link at (2,2). All 64 shared-plaquette controls had nonzero mixed conditional covariance. The enumerated link-variable fixtures test probability algebra only; the gauge-invariant SU(2) packet statement follows from the proof.

**Remaining obstacle:** control the law of the boundary observables rather than simply reduce their support. No signed continuum coefficient, uniform long-time estimate, or mass-gap proof follows here.
