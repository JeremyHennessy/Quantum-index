# Exact elementary-energy chart on the strict cosine interior

2026-11-28 UTC. This is a fixed-spacing, zero-total-momentum calculation for the separated **elementary reference** operator only. It does not classify the six-loop spectrum, mixed thresholds, residual singularities, limiting absorption, the physical source, or continuum Yang–Mills.

Let X_i=z_i+z_i⁻¹=2 cos p_i, and let e₁=X₀+X₁+X₂, e₂=X₀X₁+X₀X₂+X₁X₂, e₃=X₀X₁X₂. For the exact elementary Haar stencil, the monic characteristic p₆=det(λI−B₆) has numerator
```
592704000 p₆ =
 592704000 λ³ + (7056000 e₁ + 23284800) λ²
 + (21000 e₁² + 100800 e₁ + 52920) λ
 − 225 e₁² + 110 e₁ + 1000 e₂ + 500 e₃ + 31.
```
In particular ∂_(e₃)p₆=1/1185408 is constant. The energies depend only on e₁ and the combination e₃+2e₂=∏(X_i+2)−4e₁−8, equivalently on e₁ and that shifted-coordinate product. The exact elementary-energy elimination is
```
e₃ = U(e₁,e₂,λ)
 = −1185408 λ³ − 14112 e₁ λ² − (232848/5)λ²
   − 42 e₁² λ − (1008/5)e₁ λ − (2646/25)λ
   + (9/20)e₁² − (11/50)e₁ − 2e₂ − 31/500.
```

## Local validity and checks

The exact determinant is computed directly from the 3×3 Laurent stencil before symmetric conversion. The replay verifies all 48 signed/reanchored stencil symmetries and checks every coefficient's independent Laurent inversion invariance. Each orbit is converted by z^k+z^(−k)=2T_k(X/2) for k>0 and the single term 1 for k=0. Substituting back reproduces the complete Laurent determinant exactly. The resulting ordinary X polynomials are converted to symmetric elementary invariants coefficient by coefficient, again with exact substitution back.

When the three X_i are pairwise unequal and each lies strictly between −2 and 2, the map from angles to X has nonzero diagonal entries −2 sin p_i, and the Jacobian from X to (e₁,e₂,e₃) is (X₀−X₁)(X₀−X₂)(X₁−X₂), nonzero on this region. The exact elementary Hermitian matrix is real analytic in these local invariant coordinates. If a real elementary energy λ had multiplicity at least two there, its shifted matrix would have nullity ≥2, so its adjugate and every fixed-energy directional determinant derivative would vanish. This contradicts the nonzero constant ∂_(e₃)p₆. Therefore all elementary energies are simple on the strict region. For each branch,
```
∂_(e₃) λ = −(∂_(e₃)p₆)/(∂_λ p₆) ≠ 0,
```
and (e₁,e₂,λ) is a local analytic chart, with e₃=U. This argument does not cover equal cosines or coordinate endpoints.

The exact crosschecks are:
- X_i=+2, free S=X_j+X_k and u=X_jX_k: (e₁,e₂,e₃)=(S+2,u+2S,2u), exactly reproducing the pinned positive-face cubic.
- X_i=−2: (e₁,e₂,e₃)=(S−2,u−2S,−2u), giving (λ−3/280)(λ+(S+11/5)/168)² exactly, independent of u.
- Evaluating at λ=−5/336 gives the previously certified flat factor: −4741632000 p₆(−5/336)=4300e₁²−8000e₂−4000e₃−1380e₁−19573.

## Replay and limits

```sh
python global_elementary_chart.py new-global-elementary.json
python verify_global_elementary_chart.py new-global-elementary.json positive-face-pencils.json
```
The 498-byte chart JSON is SHA-256 **6cd583183646e40360f530f48307ee26cb7661981e6f7708169b5393f2891711**, reproduced byte-for-byte with seeds 23 and 73. The positive-face check uses SHA-256 611f6294f54cf2535fbddbbcc4eb5dea74736ab92ce3232c24c1a5fa9f71bafb.

No full Q₉ computation was undertaken. A later bounded path is coefficientwise finite-grid interpolation after proving Laurent inversion symmetry and degree bounds separately, or exploiting sparse trace identities before any three-variable reconstruction. The exact elementary chart alone is not a threshold regularity theorem for Q₉.
