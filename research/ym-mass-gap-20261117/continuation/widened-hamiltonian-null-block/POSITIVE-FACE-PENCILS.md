# Compact exact threshold pencils on the positive coordinate face

2026-11-28 UTC. This is a fixed-spacing, zero-total-momentum **reference-only** result at E=−13/336. On X_i=z_i+z_i⁻¹=+2, write S=X_j+X_k and u=X_jX_k. We give exact compact characteristic and threshold representations, not the positive-face critical-set classification or a boundary/density result.

## Reflection splitting

At fixed z_i=+1 the anchored fixed-axis reflection has Bloch reanchoring phase +1. The exact rational elementary representation splits into +3 and −0; the six-loop first-order-null representation splits into +12 and −2. The replay checks the reflection involution preserves the first-order null embedding and all fixed-face compressed stencils commute with it. Independent remaining-axis reflections and exchange commute with this fixed-axis action and preserve the two parity sectors. The exact generic flat eigenvalue ℓ=−1/42 has multiplicities +3 and −0: the persistent full cube gives a sum of at least three generic powers, and an off-torus Laurent sample at (z_j,z_k)=(2,3) gives exactly three and zero in the two blocks, bounding the generic orders from above.

Let p₆ be the monic elementary characteristic, Q+ the monic degree-nine plus characteristic after removing (λ−ℓ)³, and Q− the monic degree-two minus characteristic. We obtain:
```
592704000 p₆ =
  592704000 λ³ + (7056000 S + 37396800) λ²
  + (21000 S² + 184800 S + 338520) λ
  − 225 S² + 1210 S + 2000 u − 649,

Q− = λ² − (S+10)λ/192 + (5S+u−231)/36864.
```
The Q+ coefficients have only [1,2,4,5,6,6,8,8,8,8] monomials in descending energy order; all 56 exact rational triples are in the pinned artifact.

The two minus eigenvalues are explicitly
```
λ_± = (S+10 ± sqrt((X_j−X_k)^2+1024))/384.
```
The positive branch is uniformly excluded from the target: S≥−4 gives λ_+≥19/192. All nonzero elementary stencil coefficients are nonpositive, so the real Rayleigh form at any momentum is bounded below by its zero-momentum form on entrywise magnitudes. The exact minimum at zero momentum is −71/840. Consequently any elementary-plus-positive-minus-branch sum exceeds E by at least 19/192−71/840−E=17/320. Only the negative Q− branch can meet E on this face.

## Exact compact threshold representation

Use the ordered resultant convention Res(p,q)=∏q(a_j) for monic p with roots a_j. Define
```
r_± = Res_λ(p₆(λ),Q±(E−λ)),    R_op = −r_+ r_−.
```
The sign in R_op is from removing nine factors λ−ℓ from the tensor determinant evaluated at E−a_j; the full six-loop dimension is even. The minus resultant is a degree-(5,3) polynomial in (S,u), with 15 terms, irreducible over Q. Its exact coefficients and scale are retained. The plus resultant is not expanded over the plane. Reduce Q+(E−λ) modulo the monic p₆ to d₂λ²+d₁λ+d₀; these three coefficients have 17, 21 and 23 terms respectively. For p₆=λ³+c₁λ²+c₂λ+c₃, the multiplication-by-λ companion on basis (1,λ,λ²) is
```
C = [[0,0,−c₃],[1,0,−c₂],[0,1,−c₁]].
```
Then r_+=det(d₀ I+d₁ C+d₂ C²). This norm equals the ordered resultant even at repeated p₆ roots (e.g. triangularize C over the algebraic closure). It keeps evaluation and further reductions to a 3×3 determinant. The corresponding independently computed Q− norm is checked to equal the stored minus resultant.

## Exact construction and earlier-line comparison

A characteristic coefficient of order k is bounded by signed Laurent degree k in each free axis, since the stencil has displacement at most one and the coefficient is a sum of k×k minors. Independent inversions turn this into polynomial degree ≤k in each X. Constant monic flat division preserves this degree bound coefficientwise. A symmetric 10×10 grid (55 exact unordered algebraic-field evaluations) therefore determines all three reduced characteristic pencils; seven independent extra samples check the reconstruction. Free-axis exchange makes each expression a symmetric polynomial, converted exactly to (S,u).

Under (S,u)=(2x,x²), (x+2,2x), and (x−2,−2x), the new p₆ and Q+Q− agree exactly with the prior certified face+, edge++, and edge+- line characteristic pencils. The operator-normalized compact resultant agrees with the negative of each old recorded line residual. The reason is an internal odd-degree argument-swap sign in the SymPy resultant used by the earlier line artifact: for example, the library returns −1 for resultant(x−1,x³), while the monic ordered evaluation is +1. The prior zero sets, multiplicities, flat non-overlaps and signed slopes from independent exact inertias are unchanged; absolute signs in that line artifact are its recorded convention, not the corrected operator convention. This replay does not modify previous artifacts.

## Local replay

```sh
PYTHONHASHSEED=13 OPENBLAS_NUM_THREADS=1 python positive_face_pencils.py --output new-positive-face.json
python verify_positive_face_pencils.py new-positive-face.json symmetry-lines.json
```

- Exact 5,805-byte `positive-face-pencils.json`: SHA-256 611f6294f54cf2535fbddbbcc4eb5dea74736ab92ce3232c24c1a5fa9f71bafb.
- Prior characteristic line artifact `symmetry-lines.json`: SHA-256 f919081c68e4c65333e9100930cc1a6768ba34f1d96dd726a4b0ae20fcbb5db6.
- No solution of the positive-face critical or intersection systems was undertaken. There is no local/full-plane/global boundary or physical spectral-density inference.
