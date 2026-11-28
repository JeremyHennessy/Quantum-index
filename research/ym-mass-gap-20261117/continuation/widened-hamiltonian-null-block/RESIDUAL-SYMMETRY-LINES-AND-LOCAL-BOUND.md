# High-symmetry residual crossings at E=−13/336

2026-11-28 UTC. This is an exact classification on six coordinate-edge/diagonal families and the eight corners of the three-dimensional reference torus, modulo cubic coordinate permutations and inversions. It does not classify all residual critical points elsewhere, establish a global reference bound, or establish any physical spectral density.

## Families and spectrum construction

Write X_i=z_i+z_i⁻¹=2 cos p_i. The six representative lines are (2,2,x), (2,−2,x), (−2,−2,x), (2,x,x), (−2,x,x), and (x,x,x), with −2≤x≤2. Independent momentum signs and coordinate permutations are handled by the exact signed/reanchored stencil symmetry. The eight corners have four cubic orbits: all plus, one minus, two minus, all minus. The exact operator-normalized residual signs there are −,+,+,−, respectively; no F or R corner zero occurs.

Let p₆ and p₉ be the monic elementary and six-loop characteristic polynomials, and Q₉ the monic quotient p₉/(λ+1/42)³. Using the unscaled operator convention, R=−Res_λ(p₆(λ),Q₉(E−λ)). The p₆ and Q₉ line coefficients are reconstructed exactly with algebraic-field evaluations. If d different axes are assigned the free coordinate x on a line, characteristic coefficient k has signed Laurent degree at most k in each axis, so independent inversion-invariance makes it a polynomial of X degree at most k in each axis; the line degree is at most d k. Constant monic division keeps the same bound. Thus the d k+1 interpolation values determine every coefficient, and extra exact independent points check the reconstruction. The resulting line residual is factored over Q and its roots counted exactly in physical x by Sturm. None is at a line endpoint. The exact F check at each residual root is p₆(E+1/42)=0, evaluated over its algebraic number field; no overlap occurs.

## Exact counts and slopes

The energy multiplicity at a root is computed over the root number field from square-free factors of p₆ and Q₉(E−λ). If two factors of respective powers a and b have common-factor degree d, their pair contributes a b d to the energy multiplicity. This counts residual candidate eigenvalues with multiplicity. Since F never vanishes at these roots, this is also the nullity of the full shifted reference matrix there.

At every one of the 35 line roots, the vanishing order in x equals the energy multiplicity. The one-variable Hermitian analytic eigenbranches through E have positive integer vanishing orders in x; this equality forces all of them to have order exactly one. Their derivative signs are computed from the exact counts below E at rational endpoints isolating that single full-determinant zero (one R zero, no F zero or endpoint root). We isolate the two loop eigenvalue lists over Q separately and compare every sum against E by rational intervals. The identity is
```
n_−(left) − n_−(right) = (# positive slopes) − (# negative slopes)
```
in the orientation of increasing X=x. For degenerate crossings these are the eigenvalues' derivative signs, equivalently the signature of the first compressed derivative on the zero eigenspace. Changing the orientation of the angular coordinate reverses sign but preserves definiteness.

| Family | Distinct line roots | Nullity / determinant order | Exact direction counts |
|---|---:|---|---|
| (2,2,x) | 5 | five of 1 | four negative, one positive |
| (2,−2,x) | 2 | two of 2 | both rank-two crossings negative definite |
| (−2,−2,x) | 4 | one of 1, two of 2, one of 4 | all negative definite |
| (2,x,x) | 9 | nine of 1 | eight negative, one positive |
| (−2,x,x) | 8 | three of 1, five of 2 | all negative definite |
| (x,x,x) | 7 | two of 1, three of 2, two of 4 | all negative definite |

The 35 are line representatives, not a count of distinct torus momenta. All 15 repeated roots are negative definite along the tested line. No residual stationary eigenbranch or indefinite crossing was observed on these six families. At a repeated root the ambient derivative of the determinant does vanish: the fixed-axis derivatives in angular coordinates are zero by inversion symmetry at the endpoints; for repeated free coordinates, symmetry makes their partial X derivatives equal, so the line derivative is a nonzero multiple of their common value before it vanishes. This is a determinant-critical zero, despite every relevant eigenvalue having a nonzero line slope. Simple roots are ambient regular. No inference for off-line residual singularities follows.

## Local reference boundary bound at these roots

At any listed root, F is nonzero and all reference modes outside the residual zero eigenspace are separated from the target by a nonzero gap, which persists in a sufficiently small neighborhood. Choose an analytic Riesz frame for the crossing cluster, and a real analytic coordinate τ oriented along the line through the root. The eigenvalues of the first derivative of the compressed Hermitian block at the root are exactly the calculated line slopes. They are either all negative or all positive (including at every simple root). Reverse orientation when necessary. By continuity the compressed block C satisfies ∂_τ C ≥ c I in a small real neighborhood, uniformly also with respect to the other two real coordinates.

The previously established [monotone Cauchy–Green argument](FLAT-CRITICAL-INTERSECTIONS-AND-LOCAL-BOUND.md) applies: extend the analytic block in τ from x to x−iy in a fixed short strip, so Im C(x−iy)≤−cy I/2; the shifted inverse is bounded by (η+cy/2)⁻¹. For each smooth compact matrix amplitude from a reference matrix element, use the entrywise first-order almost analytic extension (g(x)−iy g′(x))χ(y), with χ equal to one near the real axis and zero before the bottom of the strip. It has ∂bar defect O(y), so its area integral against this inverse is bounded uniformly down to η=0 by the integrable bound O(y)/(η+cy/2). The cutoff eliminates side and bottom terms. The gapped complement is bounded directly. Hence the full reference matrix elements localized near each of these roots are uniformly bounded; this does not claim a bound over the remainder of the reference torus or a physical density.

## Every repeated crossing

All intervals are exact and in increasing X=x; nullity equals determinant order. Every listed slope is strictly negative.
| Line | Isolating interval | Order = nullity | Positive/negative slopes |
|---|---|---:|---:|
| edge+- | -4557/2524, -7397/4097 | 2 | 0/2 |
| edge+- | -4534/4627, -4729/4826 | 2 | 0/2 |
| edge-- | -3886/8169, -3377/7099 | 2 | 0/2 |
| edge-- | -7028/3901, -7255/4027 | 2 | 0/2 |
| edge-- | -9080/5401, -6839/4068 | 4 | 0/4 |
| face- | -131/1757, -507/6800 | 2 | 0/2 |
| face- | -4833/2626, -8501/4619 | 2 | 0/2 |
| face- | -7775/4237, -7052/3843 | 2 | 0/2 |
| face- | -13213/6951, -9531/5014 | 2 | 0/2 |
| face- | 517/3639, 698/4913 | 2 | 0/2 |
| body | -157500001/100000000, -157499999/100000000 | 2 | 0/2 |
| body | -6712/3467, -8133/4201 | 2 | 0/2 |
| body | -3172/4339, -2661/3640 | 2 | 0/2 |
| body | -4060/2161, -14179/7547 | 4 | 0/4 |
| body | 4313/2798, 5856/3799 | 4 | 0/4 |

## Replay

```sh
python verify_corner_residual.py
PYTHONHASHSEED=42 python residual_symmetry_lines.py --output new-lines.json
python residual_line_multiplicities.py new-lines.json new-root-orders.json
python classify_crossing_signs.py new-lines.json new-root-orders.json new-signed-crossings.json
```
The exact artifacts are:
- Interpolated characteristic pencils and residual factorizations: `symmetry-lines.json`, 44,708 bytes, SHA-256 `f919081c68e4c65333e9100930cc1a6768ba34f1d96dd726a4b0ae20fcbb5db6`.
- Root-field multiplicities/isolators: `line-root-orders.json`, 5,666 bytes, SHA-256 `b04bea6dff6d02a13d15f503ee79cc3c0aff2112829182e7b33f64a1c7e5b598`.
- Signed inertia witness: `signed-crossings.json`, 9,142 bytes, SHA-256 `4badb563afd9785917bf0fd8b45ec576666433d06751f6a8d43a5fc51df6f8ee`.
