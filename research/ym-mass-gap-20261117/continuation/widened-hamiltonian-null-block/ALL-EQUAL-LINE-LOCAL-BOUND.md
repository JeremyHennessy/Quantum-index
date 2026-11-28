# Local bounds along the strict all-equal cosine line

In the same fixed-spacing separated reference let `X=(x,x,x)` with
`−2<x<2`. At E=−13/336 there are exactly eight threshold representatives
on the line: seven residual locations and one flat-only location. In a
neighborhood of each, a definite threshold-cluster derivative supplies
the localized reference resolvent matrix-element bound. This does not
cover off-line mixtures in other regions, the physical dressed source,
or a continuum gap.

## Exact threshold locations

The elementary characteristic factorization on this line is
`(840λ+5x+1)²(840λ+20x+31)`. Thus the singlet has energy
`λ_S=−x/42−31/840` and the doublet `λ_D=−x/168−1/840`.
They meet only at x=−2, outside the strict line. With ℓ=−1/42 the
flat threshold occurs at x=−37/40 in the singlet; the formal doublet
flat solution x=23/10 is outside. Both reduced companion
determinants are nonzero at the flat location.

Let `H_i(x,v)=Q₉(E−λ_i(x)+v;3x,3x²,x³)`. Exact factorization and
rational root isolation for H_i(x,0) exclude the endpoints and give:

| Elementary sector | Factor degrees and multiplicities | Strict roots for those factors |
|---|---|---|
| Singlet | 1×1, 2×1, 4×2 | 1, 1, 2 |
| Doublet | 1×1, 2×1, 4×2 | 1, 0, 2 |

The two determinants are coprime, so these residual locations do not
coincide across the elementary sectors. The verifier prints exact
rational bounds and proves the signs by interval refinement, not
floating-point root evaluation.

## Why each location admits a full local bound

For a physical root of multiplicity k=1 or 2 in the reduced determinant,
the first k−1 derivatives in v vanish and the kth derivative is
nonzero. Hence the Hermitian companion threshold eigenvalue multiplicity
is exactly k, and no extra flat eigenvalue is present at that point.
In an analytic frame for the isolated k-mode cluster, regarded along the
diagonal x direction, the leading coefficient of H_i(x,0) divided by
that of H_i(x₀,v) gives the product of the k derivatives of the summed
energies, with sign (−1)^k. Equivalently this follows by writing the
relative cluster matrix as (x−x₀)A+O((x−x₀)²); the ratio is
(−1)^k det A, because the nonzero complementary factors cancel.
The exact product signs are negative for k=1 and positive for k=2.
For k=2, a Hermitian 2×2 derivative with positive determinant is
definite. On the elementary doublet, the line derivative of the
elementary block is its common eigenvalue slope times the identity,
so the computed summed derivative is duplicated with the same signs.

At the flat-only location the three flat companions are separated from
all other summed modes, and their summed derivative is the nonzero
singlet slope, −1/42. Choosing the sign of the diagonal direction makes
each threshold-cluster derivative positive (the direction may differ
between locations). The diagonal x direction lifts to a real angular
direction at all strict points. The isolated full spectral projection
is analytic locally; continuity extends the positive derivative to a
small full chart neighborhood. The previous localized monotone
Cauchy–Green argument then bounds the cutoff matrix elements.
Locations on the signed/permuted angular copies follow by symmetry.

This leaves off-flat intersections of different elementary branches
on the strict repeated-cosine surfaces and uncovered off-face
interior interactions, as well as any global and continuum conclusion.

Replay:
```sh
python verify_all_equal_threshold.py global-q.json
```
