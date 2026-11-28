# Strict repeated-cosine cross-elementary thresholds off the flat graph

This calculation is at E=−13/336 on a strict repeated-cosine chart (X₀,X₁,X₂)=(x,x,y), −2<x,y<2, x≠y, away from the flat graph F=0. The exact prerequisites are from research commit 44a853b3ef8c3a596921137aa35a46cf3efe49f2 (checked blobs 0639e7d9… for the scalar repeated-chart note, 7bf6b0dd… for its flat-overlap continuation, 72481631… for global G and 3892195e… for global Q₉). It treats **cross-elementary** pairs only, not the complete same-elementary threshold intersections or the entire torus/density problem.

## Exact systems and bounded projections

Write V(x,y,λ)=G(2x+y,x²+2xy,λ), and let C=C₂λ²+C₁λ+C₀ be the exact quadratic elementary factor and a_L=−(5y+1)/840 the linear eigenvalue. Reduce V modulo monic C:
```
V ≡ A(x,y) λ + B(x,y)    mod C / C₂.
```
A and B have exact bidegrees (10,10),(11,10) and 66,76 terms. Their gcd is one. At the two distinct real C roots a₁,a₂, both residual thresholds are zero exactly when A=B=0. For a cross between L and one C root, use V_L=V(x,y,a_L) and
```
N_C = (C₀/C₂) A² − (C₁/C₂) AB + B² = V(a₁)V(a₂).
```
The exact L factors have bidegrees (2,5),(4,6) and the C norm factors (10,7),(12,8) in x,y. V_L and N_C have gcd one. Their factor exponents are all one; the notation L_i,C_j below refers to these spatial norm factors, not an ordering of the elementary energies.

Project each exact polynomial pair in y, using full rational resultants and keeping the degree-one y subresultant. Factors in x were isolated exactly on the closed interval [−2,2]. At every non-endpoint projection encountered, global y degrees specialize correctly and the nonzero linear subresultant gives the unique finite y lift; the fallback for degree drops is an exact Euclidean gcd over the x root number field. Signs of y+2,2−y,y−x and C(λ_f) are evaluated by exact polynomial reduction modulo the minimal x factor and rational interval refinement. The strict y inequalities remain exact even for points near −2. The outward boxes in the compact witness are widened from the verified rational isolators, not rounded estimates.

| System | y-resultant degree | x projections in [−2,2] | Strict off-F pairs retained |
|---|---:|---:|---:|
| C/C: A,B | 110 (20,30,60, all once) | 7 | 6 |
| L1/C1 | 50 | 8 | 3 |
| L1/C2 | 60 | 7 | 2 |
| L2/C1 | 60 | 6 | 2 |
| L2/C2 | 72 | 6 | 2 |

The 34 projections count testing each system separately, so shared boundary projections may be counted repeatedly. Of these, 19 are proved non-strict (4 x endpoints, 9 diagonal lifts y=x, 6 outside in y). All 15 strict physical lifts are away from F, and none is unresolved. All 15 are simple zeros of their full x resultants and are obtained at fixed y degrees with a sole finite shared y.

No C/C projected factor is shared by an L/C projection, proving no strict triple L,C,C threshold. Any two of the four L/C projections share only x+2 and the same irreducible quartic 2960000x⁴−102687000x³+1429088325x²+796997740x−4264791342. Their checked lifts from the quartic are exactly diagonal and excluded; x+2 is a strict endpoint exclusion. Thus no physical L/C pair also has a second spatial factor from either norm product. The 15 are distinct strict chart representatives, not a count of all torus symmetry copies. The complete exact minimal x factors and their refined root isolators are in `cross-physical.json` at `cases[].candidates[].factor` with `off_F_strict:true`; the compact report retains outward x/y intervals for all 15.

## Spatial regularity and local cluster at these pairs

For each retained pair, the exact degree-one specialized gcd in y implies at least one y derivative in the pair is nonzero. Use that polynomial to solve y=h(x) analytically near the point. Dividing it by its local monic y−h(x) factor leaves no other common root at the specialization; original y leading coefficients are nonzero. The full resultant is therefore the other polynomial evaluated on this graph times a nonzero local factor. Its simple x zero forces a nonzero graph derivative, hence the pair has a nonzero spatial (x,y) Jacobian.

For C/C, the two elementary eigenvalues are simple and distinct on the strict repeated-cosine chart. On A=B=0 their separate scalar threshold gradients are a₁∇A+∇B and a₂∇A+∇B, so both are nonzero and independent. For L/C, precisely one C eigenbranch can contribute (a second would give a forbidden triple); each selected spatial norm factor is isolated from the other factor of the same norm, as shown by the shared projection exclusion. The C norm is analytically the product of the two C branch thresholds, one nonzero here; thus the spatial Jacobian gives independence of the individual L and C threshold gradients as well.

Because F≠0, the selected companion energies are not ℓ. The normalized scalar threshold is therefore the Hermitian companion determinant divided by a nonvanishing flat cube. A repeated companion root (Q_μ=0 with real μ) would imply shifted companion nullity ≥2 and vanishing of every determinant derivative, including the calculated (x,y) derivatives with both geometry and threshold energy varying. The independent gradients rule this out exactly. At each retained pair there are consequently exactly two modes at E, one for each elementary branch, with simple companion eigenvalues; no extra within-branch multiplicity or flat mode is hidden at these same points.

The two simple summed energy gradients differ from their scalar threshold gradients by nonzero factors and remain independent in the angular tangent plane (x,y are strict analytic coordinates there). Choose a tangent direction making both energy derivatives positive. The simple elementary and companion tensor projectors are analytic locally and separate the contributions; their derivatives multiplied by zero target energies do not affect the compressed derivative of the isolated rank-two cluster. This gives the definite derivative hypothesis of the prior localized monotone Cauchy–Green argument at each of these 15 **cross-elementary** pairs. It does not classify any separately occurring within-elementary double points or close the full repeated chart without that separate result.

## Exact local replay

```sh
python cross_elementary_support.py global-interior-threshold.json new-support.json
python cross_projections.py new-support.json new-projections.json
python cross_physical_lifts.py new-support.json new-projections.json new-lifts.json
python verify_cross_pairs.py new-projections.json new-lifts.json new-summary.json
```
- Input G SHA-256 42da7a91cb2421f081e93966fe275e12849aeccd920581c787fdb9f475469df9.
- `pair-support.json`: 46,591 bytes, SHA-256 baf192fb35a57b62163a3072b14a200ef0770725217201c9c63c3e674dae6b05.
- `cross-projections.json`: 502,514 bytes, SHA-256 5435aa89d739fe5c1bec37f0e8801ef53b5e3c75aa7ccb13fcb2395855338b98.
- `cross-physical.json`: 149,192 bytes, SHA-256 4a766c9f429e9709ec365f2c81ae827d61318d66a8623bf38923de40fc5ab1d4 (seed19/81 byte-identical).
- `cross-pair-summary.json`: 2,930 bytes, SHA-256 65479d226139742572f5541af04881a554af59552d00ef41a0875708e0bd6387.

No physical boundary, density, or continuum statement is made.
