# Zero curves on the strict repeated-cosine chart

For the same fixed-spacing separated reference threshold, let
`(X₁,X₂,X₃)=(x,x,y)` with `−2<x,y<2` and `x≠y`.
The scalar threshold determinant on each elementary-energy chart is
locally nonvanishing, zero on one smooth curve, or zero on two
transversely intersecting curves. This classifies the scalar restricted
zero geometry only; a full localized operator bound is not inferred.

The elementary cubic numerator factors into
`840λ+5y+1` times
`C=705600λ²+16800λx+4200λy+26880λ+100x²+220x−45y+31`.
Its discriminant is a positive constant times
`(x+2)²(x−y)²(y+2)(8x+y+18)`, strictly positive on this chart,
so the branches are simple. Solve for y in terms of (x,λ): on the
linear branch `y=−168λ−1/5`; on the quadratic branches the y coefficient
is `4200λ−45`. At the only exceptional λ=3/280 the quadratic equals
`100(x+2)²`, and the linear branch forces y=−2. Neither is on the
strict chart. The nonzero y derivative and elementary simplicity make
(x,λ) local analytic coordinates on each branch.

Put `s=2x+y, t=x²+2xy` in the pinned threshold G. Substituting the
linear y gives two distinct primitive factors of bidegrees (2,5),(4,6)
in (x,λ). Taking the resultant with C in y gives, apart from a nonvanishing
cap factor on the chart, two distinct factors (4,7),(6,8). Elimination of y
in the second case is multiplication by a nonzero power of its linear
coefficient, so it preserves zero and rank geometry on the chart.

For each factor f, the projected gcd of `Res_x(f,f_x)` and
`Res_x(f,f_λ)` is 1 for the linear branch and the fourth power
of the monic cap factor for the quadratic branches. A finite
stationary zero would make both projected resultants vanish. Thus there
are none. The resultant of the two factors in each chart has degree 24
(linear) or 50 (quadratic), and is squarefree outside the cap: the gcd
with its derivative is 1 or the eighth power of the monic cap factor.

At a finite simultaneous zero, the two curves must therefore meet
transversely. Indeed, projection multiplicity is at least the local
intersection length, by the determinant of multiplication in the local
power-series algebra as used for the strict chart. If an x leading
coefficient vanishes at the specialization, make a fixed projective
coordinate change in x choosing infinity away from the two finite root
sets; the homogeneous resultant changes only by a nonzero constant.
No factor specializes identically to zero because both are irreducible
with positive x degree. Nontransverse intersection would give local
length at least two, contradicting the simple projected root.

Next exclude/characterize flat-channel overlaps and check how the exact
restricted curve geometry enters the localized matrix bound. The
all-equal locus and endpoint intersections require their own treatment.
No global spectral-density, continuum or mass-gap claim.

```sh
python verify_repeated_cosine_threshold.py global-interior-threshold.json
```
