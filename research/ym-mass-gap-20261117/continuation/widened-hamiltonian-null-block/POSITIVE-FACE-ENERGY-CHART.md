# Positive-face individual elementary-energy chart and exact derivative projection

2026-11-28 UTC. This is a local algebraic result for the plus-parity reference threshold on X_i=+2 at E=−13/336. It concerns an individual elementary-energy contribution in the strict physical interior. It does not classify crossings between different elementary contributions, boundaries, the full reference torus, physical spectral density or continuum physics.

Write S=X_j+X_k and u=X_jX_k. Where the two free cosines are distinct and strictly between −2 and 2, (S,u) are local real analytic coordinates on each angular face chart. The elementary characteristic p₆ is affine in u with ∂_u p₆=1/296352. If the corresponding Hermitian elementary eigenvalue λ had multiplicity ≥2, all its fixed-energy determinant derivatives would vanish, including ∂_u p₆, a contradiction. Thus p₆_λ≠0 there, and ∂_uλ=−p₆_u/p₆_λ≠0. This justifies replacing u by λ as a local coordinate along each individual elementary eigenbranch. No simplicity conclusion at the diagonal or angular endpoints follows from this argument.

The exact elimination is
```
u = U(S,λ)
  = −296352 λ³ − 3528 S λ² − (93492/5)λ²
    − (21/2)S² λ − (462/5)S λ − (8463/50)λ
    + (9/80) S² − (121/200) S + 649/2000.
```
The scalar plus-parity threshold for that elementary contribution is G(S,λ)=Q_+(E−λ;S,U(S,λ)). The replay checks p₆(S,U,λ)=0 exactly and implements the substitution simultaneously. G has exact bidegree (4,10), 44 rational terms, and a single irreducible factor over Q. Its energy leading coefficient is the constant 343/8 (in this actual monic-Q_+ evaluation). The coefficient triples, primitive factor and exact scale −1/37261659602187622973177856000000 appear in the pinned chart artifact.

## Bounded derivative elimination

Eliminate S rather than eliminating λ or solving the full face determinant. This uses very small Sylvester matrices since deg_S G=4. The monic-in-λ versions of the derivative projection polynomials have exact degrees and rational factor census
```
Res_S(G,G_S):     52 = 1 + 4·1 + 2 + 45
Res_S(G,G_λ):     58 = 2·1 + 56.
```
The common monic gcd is (λ−3/112)². The leading coefficient in S may vanish at special λ, so a projected root is not automatically a finite common derivative root. At λ=3/112 the degree in S of G drops from four to two; G and G_S specialize up to nonzero scalar to
```
157758300 S² + 5013355620 S + 12825059767,
751230 S + 11936561,
```
respectively, and they are coprime. Thus the only common projection value is not a finite simultaneous root of G, G_S and G_λ. This conclusion concerns the chart polynomial itself; no global search over torus eigenvalues is invoked.

At a strict physical chart root away from F, the B9 plus threshold is not at its removed flat eigenvalue. A multiple B9 eigenvalue again would force all fixed-threshold determinant derivatives to vanish, so the preceding exact derivative certificate ensures one simple reduced B9 threshold crossing for each selected elementary contribution, with a nonzero tangential energy gradient. It need not be the only elementary contribution at that same (S,u). Intersections of these distinct mapped smooth contributions and their possible shared gradients remain a different problem. The F overlap is treated by the separate previously certified chart analysis.

## Replay

```sh
python positive_branch_threshold.py positive-face-pencils.json new-chart-g.json
python lambda_derivative_projections.py new-chart-g.json new-lambda-derivatives.json
python verify_chart_finite_candidate.py new-chart-g.json new-lambda-derivatives.json
```
- Input positive-face pencils: SHA-256 611f6294f54cf2535fbddbbcc4eb5dea74736ab92ce3232c24c1a5fa9f71bafb.
- Exact 3,537-byte chart: SHA-256 **1a877cc211d85bb4fb30b0558d9e74f3eac28e7c2c88232cb4a7ff5a688252e9**.
- Exact 14,226-byte derivative factor artifact: SHA-256 **b7a00a645a547d1af95bea6f66240089f8eaef7f7258fdff0d7e7b0f3c8829b0**.
The larger S-projection route (eliminating λ) was stopped without relying on it. No boundary, full-face or global solve is used.
