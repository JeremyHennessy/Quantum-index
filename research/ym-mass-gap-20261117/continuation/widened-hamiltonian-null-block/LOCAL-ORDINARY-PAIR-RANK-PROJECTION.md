# Ordinary distinct-interior residual pairs: finite exact rank-defect projection

This applies to the fixed-spacing separated reference at E=−13/336,
starting at research tip 9a2decc8097bacbf7a35c120c5b5756740d6b1c0. The
physical chart has three distinct cosines in (−2,2), and we examine
two distinct elementary branches at an off-flat point. The companion
threshold remainder H=Aλ²+Bλ+C is pinned to the preceding exact
distinct-interior calculation. The strict physical triple case is
already excluded. This note gives a characteristic-zero finite
envelope, not a decision on real admissibility or alignment of the
remaining exceptional points.

## Omitted-root chart and criterion

Write p=λ³+p₂λ²+p₁λ+p₀ with v=e₃+2e₂, s=e₁ and t=e₂. The omitted third
elementary eigenvalue ζ is simple. The equation p(ζ)=0 solves as

    v = −(5s+840ζ+1)(4200sζ−45s+705600ζ²+26880ζ+31)/500.

The coordinate map (s,t,ζ)↦(s,t,v) has nonzero Jacobian determinant:
∂ζ v=−p′(ζ)/∂v p, with both numerator and denominator nonzero.
Composition with the cosine-to-angular chart is legitimate because
the angular sines and the cosine Vandermonde are nonzero. Upon omission
of ζ, the two selected elementary roots λ₁,λ₂ are roots of

    K(λ)=λ²+(p₂+ζ)λ+(p₁+p₂ζ+ζ²).

Subtract A K from H. In this chart the unscaled coefficient pair is

    U = B−A(p₂+ζ),     W = C−A(p₁+p₂ζ+ζ²).

For each selected root, its exact residual threshold function
hᵢ=Q₉(E−λᵢ) equals λᵢU+W throughout the local chart. Thus two selected
thresholds meet exactly when U=W=0, and then
d hᵢ=λᵢ dU+dW. The evaluation matrix (λᵢ,1) is invertible, proving
equivalence of relative-gradient rank and the rank of d(U,W). Scaling
the two rational polynomials separately to primitive integer form
does not change their common zero set or the rank test. A=0 would
give A=B=C=0 and is physically excluded here.

Previously certified strict-chart stationary exclusion states
d hᵢ≠0 on each branch. Off the flat graph this also gives a simple
companion-energy root: a multiple Hermitian root would force all
first derivatives of the reduced determinant to vanish. The actual
summed-energy gradient is −d hᵢ divided by the companion energy
derivative Qμ, differentiating its implicit eigenvalue equation.
Independent gradients always admit a common definite direction.
If rank=1, write d h₂=ρ d h₁, ρ≠0. A common definite direction still
exists exactly when ρ Qμ,1/Qμ,2>0. Thus a rank defect is not
automatically a failure of the local reference bound.

## Exact resultant and finite envelope

The normalized U,W are both cubic in t, of bidegrees in (s,ζ)
(10,10) and (11,11). Their common leading-degree drop is impossible
for physical |s|≤6: solve the U t³ coefficient for ζ,

    ζ = (−300s²+4165s+51306)/(420(80s−1001)),

where the denominator never vanishes physically. The W t³ coefficient
on that locus is, up to scalar, exactly
(10s+87)(10s+141)(1600s²−107920s+2003077)²/(80s−1001)³.
The linear roots are outside [-6,6] and the quadratic has negative
discriminant. Hence there is no spurious common projective t=∞ at a
physical s. At least one t polynomial is nonzero cubic, so
there are at most three finite lifts. One equation may still drop
degree separately.

The exact primitive fixed Sylvester resultant R(s,ζ) has total
degree 43, degree 43 and constant leading coefficient in ζ, 990
terms, and is irreducible over Q. A rank defect at a common finite
lift projects to R=R_s=R_ζ=0. If one t-derivative is nonzero, the
corresponding polynomial has a simple local t-root, and its other
factor is a unit at that root. Multiplicativity of the fixed
homogeneous resultant splits off the other equation evaluated along
this implicit graph. At a rank defect that local scalar factor and
both spatial derivatives vanish; additional finite lifts contribute
additional resultant factors. If both t-derivatives vanish, their
common homogeneous factor has order at least two at that root, so
the fixed Sylvester matrix has corank at least two and determinant
derivatives vanish. This also covers individual leading-degree
drops: the homogeneous resultant construction remains valid.

**Coarse characteristic-zero finiteness without modular assumptions:**
R is Q-irreducible and R_ζ is nonzero of smaller total degree. Therefore
they are coprime over Q and over an algebraic closure: a common absolute
factor and all its Galois conjugates would force R to divide R_ζ.
Bézout bounds their projected intersection by 43×42 points over C.
This suffices for a finite exact envelope, not physical classification.

## Refined exact degree bounds and finite-field replay

Let Dζ=Resζ(R,R_ζ) and Ds=Resζ(R,R_s). Both have exact degree 1401.
Here are the characteristic-zero upper bounds needed to make the
finite-field degree comparison rigorous, without presuming the
finite-field coefficient cancellation persists in characteristic zero.

Set h=1/s, y=168hζ+1 and expand 168⁴³h⁴³R(1/h,(y−1)/(168h)).
Newton polygon vertices in (y-degree,h-order) are
(0,13),(18,4),(30,0),(43,0). Its y-root valuations, with
multiplicity in the ordinary characteristic-zero Puiseux field, are
18 at 1/2, 12 at 1/3, and 13 at 0. For each pair the valuation of
the difference is at least the minimum of their valuations. Twice
the sum of these lower bounds is 341. Set h=w² for the 18 roots
of valuation 1/2. Two size-six groups have repeated leading
coefficients e with e²=−27/10 (one group for each sign). Both
groups share the next correction −111w/20 in y/w, then each
remains grouped to order w² in y/w. The first two additional bounds
on pair differences increase the deficit by 30 each. After the
w² correction, one double pair remains within each group with
coefficient (321/80)e. Its last Newton slope shows order at least
w⁴ in y/w, adding 4 total. The exact rational-quadratic coefficient
checker verifies every shift and edge multiplicity, including the
conjugate group by conjugation. The full deficit is at least
341+30+30+4=405.

Since ζ=(y−1)/(168h), and R has constant leading coefficient,
Dζ is proportional to the product of squared ζ-root differences.
Its s-degree is at most 43·42−405=1401. The same upper bound
applies to Ds: in the generic Puiseux splitting field at infinity,
R_s(s,ζᵢ)=−R_ζ(s,ζᵢ)ζᵢ′(s).
Each ζᵢ=O(s) has a characteristic-zero Puiseux expansion with
s-derivative O(1). The product formula for the resultant therefore
bounds Ds by Dζ in degree. The leading coefficient of R in ζ
is a nonzero constant, so varying the generic degree of the
second polynomial only changes a constant factor here.

The exact modular computation at 2017 and 2027 preserves the
ζ-leading coefficient, uses fixed degrees 43 and 42 by skipping
specialization degree drops, interpolates at the independently
valid conservative total-degree cap 1806, and checks nine surplus
points. Both attained s-degrees are 1401 at each prime. Degree
preservation then allows Sylvester rank comparison for the two
univariate resultants over Q: their gcd has degree at most the verified
modular gcd degree 678. The modular gcd happens to have every
irreducible factor at multiplicity two, but we do not identify it
with the characteristic-zero gcd, or its factors with physical
points. Every singular projected point contributes order at least
two to both resultants at its s value: in the completed local ring
at a selected root, R lies in the square of the maximal ideal and
either derivative vanishes there. The quotient by them has length
at least two, as seen after reduction modulo the squared maximal
ideal. The equality of this length and contribution to resultant
order follows by splitting the monic R over the complete discrete
valuation ring into blocks at its distinct residue roots, using
the determinant of multiplication by the derivative in each
block. Thus the total number of projected complex singular points
is at most 339, even when several have the same s. Neither the
degree bound nor modular support is a physical sieve of the finite
lifts.

## Replay

Run in the isolated folder with the replay sources. The exact input
distinct-cross.json is reproducible from the prior pinned reducer.
The result is a finite rank-defect target; opposite actual summed
energy gradients, if any, still require further analysis.

    PYTHONHASHSEED=37 python pair_setup.py distinct-cross.json pair-projection.json
    python infinity_bound.py pair-projection.json
    g++ -O3 -Wall -Wextra projection_mod.cc -o pair-projmod
    PYTHONHASHSEED=331 python modular_sieve.py pair-projection.json ./pair-projmod modular-envelope.json

Generated pair-projection.json SHA-256
2d7dfdd2512d2af55542e4f7a558e3c18d5aa29bd69ae2381b6b839650c23b23;
it need not be archived. No global physical bound is claimed.

The two-prime result artifact is 3383 bytes, SHA-256
25371ddece058b30947e3d8aaf0a9e065bb74ca4c1e36fcdd4e632ca83071740.

The [reducing-projector proof](LOCAL-REFERENCE-FINITE-BLOCK-BOUND.md)
bypasses this rank-defect sieve for the uniform finite-region reference
bound. Seed 491 independently reproduced both generated hashes.
