# A single plaquette can see the shared-perimeter state

November 27, 2026 UTC. This addresses an overlap question left open by the [two-square Wilson calculation](two-shared-square-wilson-wrap/README.md). Keep the open two-square spatial graph, temporal coefficient β_time=1, and identical spatial coefficients b on both faces. This is a small-b result in this fixed finite geometry, not a continuum or large-volume claim.

The physical transfer is S(b)=exp(bB/2) K exp(bB/2), with B=F₁+F₂, and F_i the fundamental half trace of one face. We continue to use the [physical spin-network basis](https://arxiv.org/abs/hep-lat/9906036) with exact shared-edge labels. Put a=I₂(1)/I₁(1), λ=a⁴, d=a⁶. At b=0 the vacuum e₀=1 has eigenvalue 1; e₁=2F₁ and e₂=2F₂ have eigenvalue λ; and the normalized outer-loop trace e_o has simple eigenvalue d. The transfer normalization changes eigenvalues, not the eigenvectors. Gauge-fix with the shared link in a tree and orient the two based faces U,V so the perimeter character is χ(UV⁻¹), where χ is the fundamental character. Product Haar on U,V then gives
```
⟨e_o,F₁e₁⟩ = 0,
⟨e_o,F₁e₂⟩ = 1/4,
⟨e₁,B e_o⟩ = 1/4.
```
The first vanishes by integrating over V. In the second, integrate χ(UV⁻¹)χ(V) over V to obtain χ(U)/2 by Schur orthogonality, then integrate χ(U)²=1 in Haar mean, including the 1/2 from F₁. In the third, the F₁ term vanishes while the F₂ term follows by exchange.

## First nonzero coefficient

Let P_o(b) and P₀(b) be the spectral projectors continued from the isolated outer eigenvalue and vacuum. The scalar L(b)=⟨e_o,P_o(b)F₁P₀(b)e₀⟩ is analytic near zero and vanishes at zero. For real b, the absolute value of L is at most the absolute overlap of F₁ between the normalized continued outer state and vacuum, since the two projections multiply the latter by overlaps of magnitude at most one. Exact vacuum subtraction does not change this transition.

Since S′(0)=(BK+KB)/2, the first vacuum derivative has components (1+λ)/[4(1−λ)] along each e_i and no other components. The outer projector derivative between e_o and e₁ is (λ+d)/[8(d−λ)]. These formulas use the elementary derivative of an isolated spectral projector; the twofold degeneracy at λ is immaterial because neither projector encircles it. Differentiating L, using F₁e₀=e₁/2 and the Haar identities, gives
```
L′(0) = (1/16)[(1+λ)/(1−λ)+(λ+d)/(d−λ)]
      = −a²/[8(1−a⁴)].
```
Thus the effect is not inferred from the shifted eigenvalue. The local probe overlaps the shared-perimeter state to first order, even though it is blind to it at b=0. The corresponding spectral weight for the unnormalized, vacuum-subtracted source is quadratic to leading order; the normalized continued vectors can be chosen continuously with both reference overlaps tending to one.

## A conservative nonzero-coupling certificate

The other unperturbed eigenvalues are at least 10⁻⁴ away from d by the explicit character bounds in the preceding note (besides d, only 1 and λ exceed d). Use Riesz contours of radius 1/20000 about d and radius 1/2 about 1. For complex |b|≤r=10⁻⁵, ‖S(b)−K‖≤e^(2r)−1≤2r/(1−2r)<1/40000; the first Neumann-resolvent estimate makes each projector norm at most 2, so |L(b)|≤4. Multiplying a nonshared edge of each face by the central element −I flips both F_i and leaves the outer loop and vacuum even. This unitary commutes with K, and conjugates S(b) to S(−b). Hence L is odd, and Cauchy's coefficient bounds give
```
|L(b)−b L′(0)| ≤ 4 (|b|/r)³ / [1−(|b|/r)²].
```
The exact bound a>0.23 implies |L′(0)|>(0.23)²/8. At 0<b≤10⁻⁹, the remainder divided by b is at most 0.004000001, and |L(b)|>b/400. That explicitly certifies a nonzero shared-perimeter spectral weight greater than b²/160000 for the unnormalized local source. The bound is deliberately conservative; it does **not** certify overlap at b=1/100, where the earlier midpoint computation applies. Five exact rational checks verified the separation, resolvent radius, derivative simplification and remainder constants.

## What crosses the edge

The interchange of faces leaves the vacuum and continued perimeter eigenspaces even (they are simple and even at zero). Therefore both local plaquette probes have the same transition amplitude to this state, and it gives a strictly positive **individual** contribution to the cross-face spectral measure for these certified b. This does not make the full signed cross-correlation positive; other exchange-parity channels can cancel it. The independent next step is a sharper resolvent estimate using the low spin sectors and bounded elimination of higher labels, to test whether the effect can be certified at the same b=1/100 as the midpoint calculation.
