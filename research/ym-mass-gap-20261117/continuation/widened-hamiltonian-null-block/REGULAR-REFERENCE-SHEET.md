# An exact regular reference sheet at the probe coefficient

2026-11-28 · Zero total momentum and fixed spatial spacing. This is the 42-dimensional Bloch symbol for the separated odd **reference convolution** of the quadratic effective operator; the actual operator may include a finite-rank defect. Parent: research commit cbe82e24b67aecf800bcd2305f6b9c756d019595 and [the separated channel](SEPARATED-CHANNEL.md).

**The probe coefficient \(E_*=-13/336\) is attained on a simple regular sheet of the lowest reference band. A compact reference vector, the xy plaquette times the xy rectangle long in x at one relative lattice site, has strictly positive local spectral density contribution from a patch of this sheet.** This is not a density statement for the full boundary matrix, the defect-shifted operator, the dressed cubic source, or actual scattering.

## Construct the exact generalized symbol

Rebuild the rational energy-6 and energy-9 stencils by the [loop and Haar algorithm](separated_channel.py). Every translation shift has coordinates in \(\{-1,0,1\}\); multiplying their coefficients by 6720 gives integers. Let \(N\) have integer-scaled columns of a rational basis of the 14-dimensional energy-9 first-order null space, with \(G=N^*N\). The reference form at momentum \(p\) is \(B_6(p)\otimes G+I_3\otimes N^*B_9(-p)N\), with metric \(I_3\otimes G\). Subtracting \(E_*\) means adding \(13(I_3\otimes G)/336\). The null basis includes the single orthonormal column for the xy rectangle long in x, as verified directly against its ordinary coordinate and the Gram. The chosen deleted row and column are the tensor product of that column with the xy plaquette coordinate.

Take the chart \(p=(2\arctan8,2\arctan12,2\arctan t)\), so each phase is given by \(\exp(i\,2\arctan u)=(1-u^2+2iu)/(1+u^2)\). Multiplying the energy-subtracted form by the positive factor \(6720\cdot65\cdot145(1+t^2)\) produces a Hermitian polynomial matrix with Gaussian-integer coefficients and degree at most two per entry. Its determinant and specified principal minor therefore have degree at most 84 and 82, respectively. The verifier reconstructs both by exact integer samples and Newton forward differences, and independently validates unused samples. All elimination steps are over Gaussian integers: a Hermitian Bareiss step divides exactly by the preceding real pivot; the signs of consecutive pivot ratios give the endpoint inertia. No plotted root or floating-point diagonalization is used.

## Root and principal minor certificate

Let \(a=64457770,\ b=64457771,\ d=10000000\). For a polynomial \(P\) of degree \(n\), form
\[
(d(1+x))^n P\!\left(\frac{a+b x}{d(1+x)}\right).
\]
Positive \(x\) sweeps the open bracket \((a/d,b/d)\). For the determinant the certificate gives degree 84 with 43 nonzero terms and only even powers of \(t\); the transformed ascending signs are 49 minuses followed by 36 pluses. For the principal minor it gives degree 82 with 42 nonzero even terms, with all 83 transformed coefficients strictly positive. At \(t=a/d\) and \(t=b/d\) the exact inertias are respectively (41 positive, 1 negative, 0 zero) and (42 positive, 0 negative, 0 zero).

Descartes' rule of signs, with the opposite determinant endpoint signs, implies exactly one root in the bracket, counted with multiplicity. The root is simple. The energy-subtracted matrix at that root has nullity one, since nullity two or more would force the determinant derivative to vanish. The other eigenvalues are positive by continuity from the positive-definite endpoint and the absence of additional zeros. Scaling by the positive factor and congruence by the fixed positive metric square root preserve both nullity and inertia. Thus the reference band is the lowest one there. The derivative of its simple eigenvalue along the chart is nonzero: after metric normalization, the determinant derivative at the root is this derivative times the product of the other nonzero eigenvalues and a nonvanishing scale. In particular there is a nonzero momentum derivative in the third coordinate.

## Positive local reference density

The principal minor is strictly positive at the crossing, by its positive transformed coefficients. For the rank-41 Hermitian matrix, its cofactor in the specified coordinate is this minor, so the null eigenvector has nonzero coordinate there. This coordinate tests the claimed unit product vector in the physical metric as well, because the deleted coordinate was Gram-orthogonal to the others. The Fourier transform of the vector at any fixed relative site is that coordinate multiplied by a unit phase, which does not change its spectral weight.

Choose a sufficiently small neighborhood of the certified momentum where the simple band and its projection are smooth and the energy derivative in the third momentum coordinate remains nonzero. The squared projection of the reference vector remains positive on a smaller such neighborhood. A nonnegative smooth momentum cutoff supported there and positive at the crossing gives a nonnegative part of the reference measure. By the local inverse function theorem and coarea, that part has a continuous positive density at \(E_*\). This is a patch contribution only. Other sheets at the same energy, possible singularities of the full boundary value, and any cancellation in the actual dressed source are unclassified.

## Reproduce

Run **python3 regular_sheet.py** or the existing **python3 second_order.py** with Python 3.12 and SymPy 1.14. The inputs are the pinned exact rational low-band loop stencils; all matrix elimination, interpolation, homographic coefficients and inertia tests are exact.
