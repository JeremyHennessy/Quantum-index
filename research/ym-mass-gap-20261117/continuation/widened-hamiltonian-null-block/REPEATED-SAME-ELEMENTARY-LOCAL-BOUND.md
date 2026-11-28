# Same-elementary residual intersections on the strict repeated-cosine chart

Scope: the fixed-spacing separated reference at E=−13/336, with X=(x,x,y),
−2<x,y<2 and x≠y. Among same-elementary intersections of the two residual
threshold factors, exactly two lie on this chart, both off the flat threshold.
At each point the isolated full threshold cluster has a definite tangent
derivative, giving a localized reference matrix-element bound.

The pinned Q₉ on this surface factors over QQ into two primitive
polynomials with (x,y,μ) degrees (2,2,5) and (4,2,6). Substituting μ=E−λ
and the linear or quadratic elementary chart for y gives respectively the
two threshold factors of degrees (2,5),(4,6) or (4,7),(6,8) in (x,λ).
The exact projection in x and its penultimate linear subresultant
recover the unique candidate x for each surviving λ factor. The
linear subresultant is a polynomial combination of the x polynomials:
every common point satisfies it. The only projected candidate in the
physical energy interval for which its leading coefficient vanishes is
the quadratic cap, already excluded by the elementary y equation.
For each other real projected root in the interval, reconstruct
x and y in the corresponding algebraic number field. Rational interval
refinement evaluates the signs of x+2, 2−x, y+2, 2−y and x−y.
The only strict results are:

| Elementary chart | λ factor degree | Exact λ isolator |
|---|---:|---|
| Linear | 14 | (−13183159/1050447020, −18364206/1463277919) |
| Quadratic | 26 | (−19329913/1419912592, −19200733/1410423449) |

The replay verifies by exact remainders that both factors vanish at each
reconstructed point. At both factors, the tested modular quotient at
1009 retains the degree of the exact λ factor; all divisions used for
the reduction have invertible denominators. The two companion-energy
derivatives are nonzero in the reduced ring, so the exact number-field
values cannot vanish. The same reduction proves nonzero the two
flat-level checks and the other elementary threshold checks. On the
linear chart the norm of the remainder of G modulo the monic
elementary quadratic excludes either additional level; on the
quadratic chart the two other energies are explicit. Showing nonzero
via reduction does not assume that a solution in a finite field lifts.

It follows that these are exactly two companion modes and no other
threshold modes. Along the repeated surface the two threshold curves
are transverse, as independently certified by the simple projected
resultants. In a local Hermitian frame for the isolated two-mode
cluster, the determinant of the compressed derivative in any repeated
tangent direction is, up to a nonzero real scalar, the product of the
two threshold curve linear forms evaluated in that direction. This
follows by comparing the leading quadratic term of the exact
characteristic factorization with that of the isolated cluster.
Nonparallel linear forms make this quadratic form take both signs.
Selecting a direction giving positive determinant makes the
2×2 Hermitian derivative definite; reverse the direction if it is
negative definite. Positivity persists in a full neighborhood, and the
prior localized monotone Cauchy–Green argument applies.

This does not on its own settle the other-branch intersections, the
whole torus, dressed-source density or the continuum mass gap.

```sh
python verify_repeated_same_elementary.py global-interior-threshold.json global-q.json
```
