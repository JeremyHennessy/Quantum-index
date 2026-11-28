# Exact global companion polynomial and interior threshold chart

2026-11-28 UTC. This is a fixed-spacing, zero-total-momentum reference calculation at \(E=-13/336\), not a global resolvent estimate. It reconstructs the full eleven-degree reduced six-loop characteristic \(Q_9\) and derives a compact interior threshold polynomial. It does not classify its stationary points or crossings.

## Exact reconstruction of the global characteristic

Let \(X_i=z_i+z_i^{-1}\) and \(e_1,e_2,e_3\) be the elementary symmetric invariants of \(X\). The independent signed stencil symmetries and coordinate permutations give invariance of the characteristic coefficients under Laurent inversions and permutations. Thus each coefficient is a symmetric polynomial in the three \(X_i\). For the coefficient at order \(k\), the Laurent degree in each variable is at most \(k\) because the operator stencil has signed degree at most one and the coefficient is a sum of \(k\)-minors. Removing the known monic flat cube \((\lambda+1/42)^3\) by triangular recursion preserves the bound coefficientwise. The separate [mixed-form Schur calculation](GLOBAL-COMPANION-BLOCK.md) improves this further to per-coordinate degree at most eight and total degree at most eleven; these stronger limits are checked on the resulting coefficients.

The replay uses the conservative twelve levels \(z=1,\ldots,12\), whose distinct rational values \(X=z+1/z\) yield a unisolvent tensor grid. Only 364 unordered triples are evaluated by exact rational 14-by-14 characteristic computation and exact monic division. Coordinate symmetry supplies the other tensor entries. For each order \(k\), apply exact one-dimensional inverse Vandermonde matrices successively in the three directions on the first \(k+1\) levels. Convert the symmetric polynomial to elementary invariants by leading-monomial subtraction and check the substitution identity. Seven additional rational Laurent tuples outside the grid, including the all-minus corner, match the reconstructed polynomial exactly.

The artifact has 5,770 bytes and SHA-256 **dd22b182d55a1a01c21dda984cedcd476363de0478413852ab97e89097aa73b7**. The independent face checker compares the entire \(X_i=2\) reduced polynomial to the two previous reflection blocks and compares both \(X_i=-2\) threshold reductions to the pinned negative-face artifact.

## Interior elementary-energy threshold

Where the three physical cosines are distinct and nonendpoint, [the elementary-energy chart](GLOBAL-ELEMENTARY-CHART.md) solves \(e_3=U(e_1,e_2,\lambda)\) exactly. The moving companion threshold is
\[
G(e_1,e_2,\lambda)=Q_9(E-\lambda;e_1,e_2,U(e_1,e_2,\lambda)).
\]
The substitution yields precisely 113 rational terms, with separate degrees \((5,3,11)\) in \(e_1,e_2,\lambda\), and one irreducible factor over the rational polynomial ring. In particular it is cubic in \(e_2\). Its leading \(e_2^3\) coefficient is
\[
-\frac{(1344\lambda+325)(112\lambda-3)^2}{91215037658033943478272}.
\]
Neither zero can be a physical elementary energy. The lower bound \(-71/840\) follows by comparing the nonpositive stencil quadratic form at momentum to the zero-momentum form on entrywise magnitudes. For the upper bound, put \(w_i=1+z_i\) on the torus. The exact identity
\[
168\left(\tfrac{3}{280}I-B_6\right)=\sum_{i<j} v_{ij}v_{ij}^*,
\qquad
(v_{ij})_i=\bar w_j,\quad(v_{ij})_j=\bar w_i
\]
with all other entries zero gives upper bound \(3/280\). The verifier checks this identity on the Laurent stencil. Thus the cubic leading coefficient is nonzero throughout the elementary energy interval, not merely at a generic complex point.

The \(e_2\)-discriminant has 317 terms and bidegree \((11,32)\) in \((e_1,\lambda)\); exact rational factorization gives one irreducible factor. This does not prove the discriminant curve is smooth, nor that its points correspond to physically admissible cosines or stationary energies. The next algebraic problem is to distinguish double and triple roots in \(e_2\) and test the remaining directional derivatives in the physical domain. Equal cosines require separate charts.

Replay:
```sh
python global_q_reconstruct.py new-q.json
python verify_global_q_reconstruction.py new-q.json positive-face-pencils.json plane-polynomials.json
python global_interior_threshold.py new-q.json global-elementary-chart.json new-interior.json
```
The exact threshold/discriminant artifact has 48,678 bytes, SHA-256 **42da7a91cb2421f081e93966fe275e12849aeccd920581c787fdb9f475469df9**.
