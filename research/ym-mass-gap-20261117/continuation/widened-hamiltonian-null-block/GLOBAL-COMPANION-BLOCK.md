# Global rectangle/cube companion pencil: mixed-form reduction

2026-11-28 UTC. This fixed-spacing separated-reference algebra does not classify mixed thresholds or singularities, prove any limiting absorption bound, or establish physical spectral density. No full three-variable determinant expansion is used.

On the exact 14-dimensional six-loop first-order null space use the six rectangle circuit vectors (orthonormal) followed by the eight rational cubical null vectors. In this basis the constant metric and the Bloch form are
```
G_full = diag(I₆,G_C),       det G_C = 192,
H(z)   = [[ℓI₆,T(z)],[T★(z),U(z)]],    ℓ=−1/42.
```
Here a Laurent star acts as matrix transpose and z↦z⁻¹, and agrees with the Hermitian adjoint on the real torus. The 8×8 matrix G_C is real positive definite. The exact aligned rectangle/cube basis and all rational coefficients are in the pinned artifact. In particular the entire rectangle–rectangle block is exactly the constant ℓI₆, not merely a diagonal sample. The exact Laurent-field rank of the 6×8 coupling T is three. The operator convention is G_full⁻¹H. Rectangles carry the identity metric, so there is **no extra Gram factor in T★T**.

For d=λ−ℓ and V=λG_C−U, the Schur determinant identity away from d=0 gives
```
p₉(λ) = det(λI₁₄−G_full⁻¹H)
      = det(d V−T★T) / (det(G_C) d²).
```
Indeed the rectangle block contributes d⁶ and clearing d⁻¹ in the remaining 8×8 determinant contributes d⁻⁸. Removing the three persistent monic flat factors then gives the exact reduced characteristic
```
Q(λ) = det((λ−ℓ)(λG_C−U)−T★T) / (192(λ−ℓ)^5).
```
This is a polynomial quotient, not a real pole: rank(T★T)≤3 over the Laurent field, so expanding by columns, any term with at least four columns of T★T vanishes; at least five columns come from dV, giving the factor d⁵ in the Laurent coefficient ring by monic division. Thus a future evaluation at λ=ℓ can use the corresponding mixed minor coefficient instead of numerical division by a small number. The quotient is monic of degree 11. Equivalently, conjugating the cube block by G_C^−1/2 gives the orthonormal-coordinate formula without the constant determinant; the mixed-form version preserves purely rational stencils.

## Exact sparsity and bounded checks

| Block | Nonzero Laurent shifts | Scalar nonzero terms | Maximum absolute coordinate displacement |
|---|---:|---:|---:|
| T | 13 | 48 | 1 |
| U | 7 | 160 | 1 |
| T★T | 19 | 180 | 1 |

The last bound is checked by exact Laurent convolution and cancellation, not assumed from individual T terms. No 8×8 Laurent determinant in three symbolic variables was expanded. The script verifies rank T=3 using only the small rectangular Laurent-field matrix and independently checks the 8×8 determinant against the full 14×14 monic characteristic at 17 distinct λ values for each of four momentum samples, enough for the fixed-point degree-16 identity:

| z | Exact rank T | Exact flat multiplicity in p₉ |
|---|---:|---:|
| (2,3,5), off torus | 3 | 3 |
| (1,1,1) | 2 | 4 |
| (−1,−1,−1) | 0 | 6 |
| (3/5+4i/5, 5/13+12i/13, 8/17+15i/17) | 3 | 3 |

The real-torus rank-three sample also verifies generic rank three of T★T. These examples merely exercise the identity through several flat-rank changes, not classify where such changes occur.

## Rigorous degree ceilings for a later reconstruction

The U shifts have total absolute displacement at most one, and W=T★T shifts have total displacement at most two. Since a nonzero determinant term can contain at most j≤3 columns of W, and the remaining 8−j come from λG_C−U, each Laurent monomial has individual signed degree at most eight and total exponent ℓ₁ norm at most (8−j)+2j≤11. Constant monic division by (λ−ℓ)^5 does not enlarge any spatial support. After inversion symmetry, Chebyshev conversion therefore bounds each ordinary X degree by eight and total X degree by eleven. The original (coefficient-order k) minor bound also gives degree ≤k in any X variable after flat-cube division, so the individual bound can be sharpened coefficientwise to min(k,8). A full nine-level tensor grid with symmetry needs only 165 unordered tuples; the total-degree lower set would reduce this to 76 sorted-index tuples (each index ≤8 and sum ≤11) if using a triangular Newton interpolation in a later step. No such reconstruction is done here.

## Replay

```sh
PYTHONHASHSEED=23 python companion_block.py new-companion-block.json
```
The 10,498-byte `companion-block.json` is SHA-256 **2f49f79e21c602b0850ebde8ce8b868b80ae1d4b82cd7a707c6d000fae6a6a4a**. The artifact replayed byte-identically under seeds 23 and 71. The remaining symbolic problem is deliberately left open; the compact pencil and its rank-truncated determinant are available for a later bounded reconstruction.
