# A single square detects the four-square reflection-odd mode at sufficiently small coupling

2026-11-27. This is an open four-square, fixed-spacing SU(2) Wilson result at temporal link coupling 1. It builds on the [band certificate](../four-square-perimeter-band/README.md) and [exact quadratic cancellation](../four-square-odd-probe/README.md). It does not address weak-coupling continuum existence or the 4D mass gap.

Choose the odd phase (124 minus 134)/sqrt(2) in binary character states. With positive vacuum phase, the leading coefficient of the normalized half-trace transition is of degree four:

| Face, left to right | Outward enclosure for coefficient of b^4 |
| --- | --- |
| 1 | (-1.281e-10, -1.280e-10) |
| 2 | (-2.801e-8, -2.800e-8) |
| 3 | (2.800e-8, 2.801e-8) |
| 4 | (1.280e-10, 1.281e-10) |

The coefficient is independent of analytic eigenvector normalization with the stated phases, because the lower coefficients vanish. Every probe therefore detects this mode for 0 < b <= 10^-11, where the tail bound below suffices. This is **not** a detection certificate at b=0.001. At any symmetric coupling each mirror-summed probe continues to miss this mode exactly.

## Finite exact action envelope

A contributing term expands to a five-hit face word from the vacuum to 124 or 134, including one marked probe. Closed two-hit pivot counterterms can be inserted at their originating pivot (for the odd scalar use the component along a single target, since the scalar is the same throughout the odd line; cross-target two-hit contributions may also be unfolded at that component). At a cut, if p and s are the prefix and suffix hit counts on an edge, and n* is the final binary label, then n <= min(p,s+n*) adjusted down to parity p modulo 2. Replay checks all 4^5 words, 120 words of the necessary parity per target, all six cuts for each. All contributing states satisfy twice-spin <=2 and length-weighted sum <=14. Counterterms only use two hits, and their retained states fall inside the same envelope: two steps from the vacuum have weight at most 8, and the intermediate from an odd pivot must be one step from both pivots when they differ or may be shared with a five-hit contribution when a direct two-hit scalar multiplies the quadratic term. For that last case the scalar is only needed multiplying a lower-order coefficient. At the odd pivot an intermediate one-step state can also have weight 14 at most, since the pivot has weight 10 and each hit changes at most four physical link labels by one; its labels are at most 2.

## Reproducible calculation

Reuse the [local intertwiner and Clebsch–Gordan formula](../three-square-exact-actions/actions.py) on the six oriented trivalent vertices of the collapsed four-face ladder. Matrix elements are first evaluated symbolically; every traversed edge is checked against its transpose. The phase of each odd component is fixed by binary character growth from the vacuum. These exact radicals and Bessel ratios are then evaluated with 60-digit outward interval arithmetic, using positive Bessel series through k=20 plus twice the next term as a tail bound.

Write u=M psi, D_j=(-V)^j/j!, and normalize each generalized eigenvector by its free reference component. To compute u_n from Ku=lambda(b)D(b)u, use F_n=sum(lambda_a D_j u_k) over a+j+k=n, skipping the two unknowns (a,j,k)=(n,0,0),(0,0,n). Then lambda_n=-<u_0,F_n> and u_n=(K-lambda_0)^-1 Q F_n. At the odd pivot the even vectors in the same free energy are excluded as well, since the exact source has odd reflection symmetry; the interval evaluation is in oriented labels and avoids dividing by zero in the full free band. Odd eigenvalue coefficients are exactly zero by the simultaneous center flip. The lambda_2 counterterms are included; lambda_4 only fixes the pivot projection. Finally sum the degrees i+j+k=4 in u_o,i^T W_face D_j u_v,k. The independent exact degree-two check is also replayed by interval inclusion here, along with the opposite signs within reflected pairs.

For analytic control take a relative spectral radius 0.16 in each free sector, so |z|/dist <=7.25. On |b|<=R=0.02, the same Neumann inversion used in the quadratic note gives projector norm <=1/(1-8.25*4R)<3. The projected-vector transition is even and has norm <=9 there. Its remainder divided by b^4 has magnitude <=9 b^2/[R^6 (1-(b/R)^2)] <1.41e-11 for 0<|b|<=10^-11, smaller than every certified fourth coefficient. Projected vectors do not vanish there, and normalization preserves nonvanishing.

Replay: python3 run.py (SymPy 1.14, mpmath 1.3).
