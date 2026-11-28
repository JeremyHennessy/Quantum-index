# Arithmetic irreducibility of the residual reference determinant

At E=−13/336 let the separated 42-channel form determinant be D(z), in the three relative Laurent translation variables z=(z₀,z₁,z₂). Write F(z) for the elementary-loop three-channel determinant shifted by the flat six-loop eigenvalue −1/42 and by E. Up to nonzero constant Gram/scaling factors, D(z)=F(z)^3 R(z), and **R is irreducible over Q(i) in the Laurent polynomial ring**. This does not assert absolute irreducibility, global real-sheet coverage, spectral weight, or limiting absorption.

## Exact factor, widths and chart units

The six-loop null matrix, converted from form by its constant Gram inverse, has a characteristic polynomial monic in its energy variable over Q[z₀^±1,z₁^±1,z₂^±1]. Its flat eigenvalue −1/42 has multiplicity three over the Laurent rational-function field, as checked by the zero rectangle block, cross rank three and total generic rank 11. On the real torus the constant-Gram operator is similar to a Hermitian matrix, so geometric and algebraic multiplicities agree; the real torus is Zariski dense, extending the characteristic coefficient identities to Laurent polynomials. Thus the characteristic polynomial divides by the monic (λ+1/42)^3 within the Laurent coefficient ring: ordinary division is valid over this ring, and the remainder already vanishes in its field of fractions. The separated Kronecker sum determinant is a resultant of the monic elementary-loop and shifted six-loop characteristic polynomials (relative minus-momentum only inverts the relevant Laurent variables). Multiplicativity of the resultant gives D=F³R with R itself Laurent and rational; no variable denominator is introduced.

For each axis and sign, the full form has signed degree 32 by the exact leading/slab/tail ranks 34,6,2. The three-channel flat factor F has signed degree two: its leading face has exact rank two and the static compression on its one-dimensional left/right residual is nonzero at the exact transverse specialization 3,7 modulo both 1009 and 1013. Degrees are additive in products over the rational field of the untouched Laurent variables. Therefore R has signed degree 26 for each axis and sign.

Set z_j=(1+i t_j)/(1−i t_j) and let r(t) be R evaluated at these fractions times ∏_j(1+t_j²)^26. This is an ordinary polynomial over Q(i), of degree at most 52 in every variable. Its evaluations at t_j=i and −i are not identically zero in the other variables, because the two Laurent extreme coefficients at powers −26 and +26 are nonzero. Consequently it is divisible by neither t_j−i nor t_j+i. It has degree exactly 52 in every variable by the exact slices below. This also rules out a hidden z_j+1 factor of R: its vanishing on the t_j=∞ divisor would force the coefficient of t_j^52 to vanish. The direct, nonzero t_j=∞ determinants and the degree-four flat factors independently verify this in each selected transverse specialization.

## Six degree-preserving tests

Along each of the three coordinate axes, independently use the other two tangent coordinates (8,12) and (1,2). No cubic-transport assumption is needed. The original exact stencils produce full reduced degree-64 determinants and the shifted elementary-loop form produces the degree-4 factor exactly. In each case r specialized in the remaining variable agrees up to a nonzero scalar with the degree-52 factor. The full results:

| variable | transverse tangents | deg r specialization | exact factorization over Q | distinct real roots |
|---|---|---:|---|---:|
| t₀ | (8,12) | 52 | irreducible | 18 |
| t₀ | (1,2) | 52 | irreducible | 10 |
| t₁ | (8,12) | 52 | irreducible | 18 |
| t₁ | (1,2) | 52 | irreducible | 10 |
| t₂ | (8,12) | 52 | irreducible | 18 |
| t₂ | (1,2) | 52 | irreducible | 10 |

All exact specializations have nonzero t=∞ determinant and no t²+1 factor. The specialized residual is irreducible over Q(i), not just Q: if α is one of its real roots, Q(α) lies in R, so adjoining i doubles its degree over Q. The tower law therefore preserves the degree of α over Q(i).

Suppose r factors into nonconstant polynomials over Q(i). For any variable t_j, a degree-preserving nonzero specialization forces every factor to retain its degree in t_j: each specialized degree is at most the original, and the sums equal 52. Since the resulting univariate polynomial is irreducible, at most one factor can depend on t_j. Thus factor variable-sets are disjoint. A nontrivial partition of the three variables into nonempty disjoint factor variable-sets necessarily contains a singleton. For a factor depending only on t_j, both transverse specializations would be scalar multiples of that same polynomial, whereas their exact real root counts differ (18 vs 10). This contradicts every singleton possibility. Therefore r is irreducible.

After inverting z_j+1 on the Laurent side and t_j±i on the polynomial side, the Cayley transformation is a ring isomorphism. Irreducibility of r persists in that localization because none of the inverted t_j±i factors divide it. An actual factorization of R in the original Laurent ring therefore could differ only by hidden z_j+1 powers; those are excluded by the direct infinity checks. The Laurent monomials are already units. Hence R is irreducible in Q(i)[z₀^±1,z₁^±1,z₂^±1].

## Replay

In the isolated workspace with the established exact stencils:
```sh
python flat_signed_degrees.py
PYTHONHASHSEED=17 python axis_factor_slices.py --output new-axis-slices.json
python axis_flat_identification.py new-axis-slices.json
```

Run `python laurent_radius.py AXIS SIGN` for each AXIS in 0,1,2 and SIGN in −1,1 to independently reconstruct the full signed degree 32. The six-slice artifact is 21,922 bytes, SHA-256 **824fc786a8bf480b47b946f457869d2e332c1dd08f0a8c7726e4b3dead07cc0f**. The proof is arithmetic only; the possible splitting into geometric components over C and their individual real-torus sheet coverage are not decided here.
