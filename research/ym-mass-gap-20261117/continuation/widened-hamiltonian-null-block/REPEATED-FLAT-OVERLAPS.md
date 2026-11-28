# Exact flat overlaps and localized bounds on the strict repeated-cosine chart

This checks intersections of the flat-channel threshold with residual thresholds at (X₀,X₁,X₂)=(x,x,y), with x and y strictly in (−2,2) and x≠y. It is a fixed-spacing separated-reference calculation at E=−13/336. It neither reclassifies the scalar residual curves nor closes their off-flat interactions or the global/physical boundary problem.

The four prerequisite files were read from the exact research commit e5bb5608397f9b87e242e7353b6c08a5d2666065 and matched their local Git blobs: reference repeated-cosine note 0639e7d96fd99f20285d71e9fbd11d8ab8500a5f, verifier a651d62a363dea648f8c7e3259e998d8e1bfdaa1, global scalar threshold 72481631a51475867d96a5120ed019be3aec2238 and global Q₉ 3892195e1e7b5945e6ccf28ea9c1fda5e735eb04.

## Complete flat-graph check

Let ℓ=−1/42, λ_f=E−ℓ=−5/336. Of the exact elementary factors L and C from the repeated-cosine chart, L(λ_f)=0 would require y=23/10, outside the physical domain. The other factor has ∂_y C(λ_f)=−215/2, and its flat graph is
```
y = Y_f(x) = (400x²−120x−851)/430.
```
On that graph the three elementary energies are exactly
```
λ_f = −5/336,
λ_other C = −(200x²+800x+413)/36120,
λ_L = −(80x²−24x−153)/14448.
```
The elementary discriminant on the strict chart is nonzero, so these are pairwise distinct at every physical point. Including all three is essential: substituting only λ_f into the residual factors would miss four actual overlaps on different elementary branches.

For each energy a(x), form H_a(x)=Q₉(E−a(x);e₁,e₂,e₃) on (x,x,Y_f(x)). It exactly matches the independently pinned G after elementary elimination. The companion derivative Q_μ, where μ is its independent energy, is computed before evaluating at μ=E−a. Exact polynomial factorization and Sturm tests isolate all roots on x∈[−2,2]. Every H_a is squarefree, with constant gcd against its Q_μ specialization. The only inter-branch gcd is x+2 shared by H_f and H_L; this gives y=23/10 and is nonphysical. Thus every physical flat overlap has exactly one additional residual sum with a simple companion-energy root.

The chart factors C1,C2 (respectively L1,L2) refer to the smaller and larger x degree irreducibles in the prior quadratic (respectively linear) elementary chart. Bounded direct evaluation of these four polynomials labels each root below; their derivative-projection classification is not replayed.

| Elementary branch | Residual curve | Minimal x factor degree | Strict physical x isolator | Exact six-loop flat multiplicity |
|---|---|---:|---|---:|
| λ_f | C1 | 4 | (144454/75669,449121/235262) | 4 |
| λ_f | C2 | 5 | (15665/142572,11233/102235) | 4 |
| other C | C1 | 10 | (28833294/38001755,39249911/51730666) | 3 |
| other C | C2 | 12 | (1827/63803,5288/184669) | 3 |
| other C | C2 | 12 | (22973/157776,19317/132667) | 3 |
| L | L2 | 11 | (398598/207815,337025/175713) | 3 |

No physical L1 intersection occurs. The artifact gives all minimal polynomials, rational y enclosures and domain signs. The two candidates at x=−2 are rejected; none of the six listed points is at an endpoint or all-equal cosine. Some y values lie very close to −2, so their physical classification uses the exact signs of Y_f+2, 2−Y_f and Y_f−x in the root field, not rounding.

Along the flat graph, each extra energy sum has derivative −H_a′/Q_μ with respect to increasing x, computed by differentiating its implicit simple companion-energy equation. All six signs are exactly negative. In particular the two ℓ jumps are transverse along the flat graph, rather than just algebraic rank changes.

## Local reference matrix-element bound at all six overlap types

At an individual overlap, simple elementary eigenvalues and the exact branch gcds leave exactly four modes at E: the elementary λ_f with the three persistent flat companions, plus the single residual threshold just checked. All other modes remain locally gapped. The flat summed energy gradient is nonzero in (x,y), because the fixed λ_f elementary factor has nonzero y derivative. The extra sum has nonzero derivative along the flat graph by the exact slope check. Therefore their gradients are independent on the repeated-cosine tangent plane. The two coordinates correspond to analytic real angular coordinates (neither cosine is an endpoint), so an angular tangent direction exists in which both energy derivatives are positive.

At an ordinary overlap the extra companion level differs from ℓ; the three-dimensional flat and simple residual projectors are locally analytic on their isolated tensor factors. At either jump, the simple root of the reduced characteristic instead supplies an analytic δ=μ−ℓ in a neighborhood, even though the full four-dimensional companion cluster is degenerate at the center. Its derivative along the flat graph is nonzero. In a local analytic frame, the shifted Hermitian four-dimensional companion block vanishes on the real-analytic δ=0 hypersurface; division by its analytic defining coordinate gives D=δP, with P a rank-one projector by continuation from δ≠0. Thus both the extra and the three-flat projectors extend analytically. Tensoring with the simple elementary factor gives the same derivative spectrum at the common threshold.

In each case the compressed derivative of the isolated **full** rank-four reference cluster along the chosen tangent has eigenvalues consisting of the positive flat derivative three times and the positive extra derivative once (derivatives of projectors multiplied by zero target energies do not contribute). Continuity in a full local momentum chart preserves definiteness in a small neighborhood. The established monotone Cauchy–Green argument therefore bounds the reference resolvent matrix elements with smooth cutoff supported near these points, including the jump cases. This proves a local bound at each of the six representatives and their signed/permuted images only.

Off the flat graph, simultaneous residual sums from **different elementary branches** on the strict repeated-cosine chart are not decided by these checks or by the earlier same-chart scalar intersections. The all-equal and uncovered off-face global interior cases are not settled here. There is no physical boundary/density or continuum consequence asserted.

## Exact replay

```sh
PYTHONHASHSEED=23 python repeated_flat_overlap.py \
  global-interior-threshold.json \
  global-q.json new-flat-overlaps.json
```
Exact input SHA-256: scalar G 42da7a91cb2421f081e93966fe275e12849aeccd920581c787fdb9f475469df9; complete Q₉ dd22b182d55a1a01c21dda984cedcd476363de0478413852ab97e89097aa73b7. The 12,542-byte `flat-overlaps.json` is SHA-256 **e84ea9d2d316430e25d9ddcd928e2daf10678f974979a623a5b2df911bd4f0da**; seeds 23 and 79 replay byte-identically.
