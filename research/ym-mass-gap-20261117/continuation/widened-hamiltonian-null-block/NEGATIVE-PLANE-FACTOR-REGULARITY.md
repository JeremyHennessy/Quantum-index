# Individual threshold factors are tangentially regular on the negative face

2026-11-28 UTC, fixed-spacing quadratic reference, \(E=-13/336\). This is a statement about **each factor separately**, not a simultaneous crossing or a boundary resolvent bound over the entire face. Use the exact four factors \(A_+,A_-,B_+,B_-\) in [the negative-face reduction](NEGATIVE-PLANE-THRESHOLDS.md).

In the open \((S,u)\) coordinate chart the factors linear in \(u\) have nonzero leading coefficients throughout the physical \(S\) interval. For a quadratic \(f=a(S)u^2+b(S)u+c(S)\), the leading coefficient \(a\) also has no zero there. A singular zero would have \(u=-b/(2a)\), with discriminant \(d=b^2-4ac=0\). At this value of \(u\), \(f=-d/(4a)\), and differentiating in \(S\) with \(f_u=0\) forces \(d'=0\) at a singular zero. Exact rational polynomial GCD verifies that the two discriminants, of degrees 10 and 4, are square-free. No individual factor is singular in these coordinates on the physical domain.

At the diagonal or an angular endpoint the map from angular coordinates to \((S,u)\) can lose rank, so a separate check is needed. Restrict to the three boundary profiles \(u=S^2/4,\ 2S-4,\ -2S-4\), each on its physical interval. Exact Sturm counts and derivative GCD exclude endpoint zeros and verify that every physical root of each restricted factor is simple:
 
| Factor | Diagonal | Positive edge | Negative edge |
|---|---:|---:|---:|
| \(A_+\) | 2 | 1 | 1 |
| \(A_-\) | 3 | 1 | 2 |
| \(B_+\) | 1 | 0 | 1 |
| \(B_-\) | 2 | 0 | 2 |

In the interior of each boundary path the derivative of \(S\) in its free angular direction is nonzero. These simple roots therefore exhibit a tangential derivative even where the coordinate Jacobian drops. On the rest of the face the two free cosines are interior and unequal and the Jacobian is invertible. Thus each factor has a nonzero derivative in some angular tangent direction at each of its real zeros on the face.

A single isolated threshold eigenbranch can use its own monotone direction. Where threshold factors meet, their individual directions need not agree. Neither a definite joint compressed derivative at these intersections nor a full-face reference resolvent bound follows from this result.

Replay: **python negative_plane_factor_regularity.py plane-polynomials.json**.
