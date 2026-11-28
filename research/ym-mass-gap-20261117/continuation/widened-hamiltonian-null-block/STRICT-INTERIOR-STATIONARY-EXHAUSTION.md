# Exact exhaustion of stationary points in the strict interior chart

In the fixed-spacing separated reference model, on the chart of pairwise
distinct `−2 < X_i < 2`, there are **no stationary threshold zeros** of G:
`G=G_s=G_t=G_λ=0` has no physical solution in that chart. This is a
characteristic-zero result, not identification of a finite-field support
with real roots. It does not cover the equal-cosine surfaces or prove a
global resolvent bound, physical spectral density, or continuum mass gap.

## Degree and exact gcd

Set `P_s=Res_s(D,D_s)` and `P_λ=Res_s(D,D_λ)`, using the fixed Sylvester
sizes. The verifier certifies upper degree bounds 530 and 551. Integer
row and column weights bound the degrees entry by entry. At infinity the
weighted reversed constant coefficient has rank one below full; the first
coefficient sandwiched between its left and right null vectors vanishes
exactly. The first two determinant coefficients vanish, giving the stated
bounds. The exact replay modulo 1009 attains both degrees and its gcd has
degree 367. The rational coefficients have denominators invertible at
1009. Since both degrees are preserved, the Sylvester rank can only fall
on reduction; its nullity bounds the characteristic-zero gcd degree by
367 from above.

For notation, let Q₂,Q₂′,Q₃,Q₈ be the four irreducible factors of respective
degrees 2,2,3,8 in the preceding exclusion notes, and let R₉₃ be the
irreducible degree-93 part of Res_s(Δ₀,Δ₁). Direct checks show no leading
degree drop for D at these irreducibles and verify exact witnesses in the
appropriate number fields. At λ=3/112 a second set of integer row and
column weights bounds entry valuations from below; summing them gives
orders at least 57 for P_s and 50 for P_λ.

For clarity, the multiplicity lower bounds at all other roots are local
characteristic-zero arguments. At a selected algebraic λ, pass to an
algebraically closed coefficient field k and power series in
`h=λ−λ₀`. The leading coefficient of D is a unit. After monic scaling,
the determinant of multiplication by D_s or D_λ in k[[h]][s]/(D)
is the corresponding resultant up to a unit. Splitting D by its distinct
residue roots via Hensel gives a direct sum of finite free local blocks.
The determinant order is the sum of cokernel lengths, by diagonalization
over the discrete valuation ring k[[h]]. Each block length equals the
dimension of the local quotient `k[[h,s−s₀]]/(D,D_j)`, for j=s or λ.
The finite-length assertion follows from the two nonzero resultants.

At a stationary D root, D has order at least two and D_j vanishes.
Modulo the square of the maximal ideal, quotienting by one linear form
leaves at least two dimensions, so the local length is at least two for
either derivative. Over Q₂ there are exactly three distinct common s roots
at each conjugate λ, so its lower order is six. Over the other three factors
it is at least two.

At R₉₃ there is a common finite root of Δ₀ and Δ₁ (their leading
coefficients remain nonzero). In the local coordinates, D is a unit times
`4Δ₀³−Δ₁²`; if Δ₁ has a nonzero linear part the quadratic part of D is
a scalar times its square. If D_j has a linear part it is proportional to
that linear form. Solving D_j=0 formally eliminates that form to order at
least two, and D then has order at least three in the remaining variable.
If D_j has no linear part, both equations lie in the square of the maximal
ideal and the local length is at least three directly. If Δ₁ has no linear
part, the latter argument applies to either derivative. Hence R₉₃ occurs
to order at least three in both projections.

The known factors now fill the exact upper bound:
```
50 + 3*93 + 6*2 + 2*(2+3+8) = 367.
```
The characteristic-zero gcd is therefore, up to its leading scalar,
`(112λ−3)^50 R₉₃³ Q₂⁶ (Q₂′ Q₃ Q₈)²`. No interpolation or
unverified rational reconstruction of large resultants is needed.

## Physical exclusion

The proven λ interval excludes 3/112. On Q₂ the remaining real branch has
all s values outside [−6,6]. Q₂′ has no real roots. The unique s-lifts
over Q₃ and Q₈ force X=−2 in the cosine cubic. Over R₉₃ the only common s
is a triple-root lift, not an additional double-root lift: an independent
rank certificate reduces the Sylvester matrix for D and D_s modulo one
irreducible factor of R₉₃ at prime 1013 and obtains nullity one.
Characteristic-zero nullity is at most one, and the known common finite
root already supplies it. Stationary triples were excluded throughout
the physical λ interval by the separate exact Δ₀,Δ₁,∂sΔ₁ calculation.
This exhausts the projected gcd.

Consequently strict-chart threshold zeros are regular. This is a local
statement: a compact set restricted away from omitted chart pieces can
be covered by regular charts, but the remaining equal-cosine sets and
their intersections need their own analysis before a global conclusion.

Replays after the earlier three exclusion scripts:
```sh
python verify_strict_stationary_exhaustion.py global-interior-threshold.json modular-projections.json
python verify_triple_projection_overlap.py global-interior-threshold.json
```
