# Low-degree stationary candidate systems for the global interior cubic

2026-11-28 UTC. This is a formal reduction, not a stationary-set classification. It applies to the exact separated-reference scalar threshold in the strict unequal, nonendpoint cosine chart, at E=−13/336. It does not concern the full physical resolvent, limiting absorption, positive spectral density, or the continuum.

Use s=e₁, t=e₂, and λ the local simple elementary energy, with e₃=U(s,t,λ) from the exact elementary chart. Write the exact companion threshold
```
G(s,t,λ)=a(λ)t³+b(s,λ)t²+c(s,λ)t+d(s,λ).
```
The coefficient a=−(112λ−3)²(1344λ+325)/91215037658033943478272 is nonzero on the prescribed elementary interval I=[−71/840,3/280]. In fact 1344λ+325≥1057/5 and |112λ−3|≥9/5 there. Thus division by a introduces no physical exceptions. A simultaneous scalar stationary candidate must satisfy G=G_s=G_t=G_λ=0. At a simple companion threshold (regarded as a root in the independent six-loop energy), this is the stationary condition for the corresponding one elementary-plus-companion spectral sum. If that companion energy is multiple, the scalar determinant can be stationary even when individual eigenvalues cross; it is a candidate degeneracy, not an identified stationary eigenline.

## Equivalent quadratic-in-t system

Without any projection resultant, use the following four equations:
```
3at²+2bt+c = 0,
bt²+2ct+3d = 0,
b_s t²+c_s t+d_s = 0,
(3a b_λ−2a′b)t² + (3a c_λ−a′c)t + 3a d_λ = 0.
```
These are respectively G_t, 3G−tG_t, G_s (since a_s=0), and 3aG_λ−a′tG_t; they are exactly equivalent to the original four equations where a≠0. In particular, no state variable occurs in degree greater than two in t. Subtracting b times the first from 3a times the second gives
```
−2Δ₀ t + 9ad−bc = 0,      Δ₀=b²−3ac.
```
The other quadratic equations can likewise be reduced to affine functions of t by their leading t² coefficient times G_t. These local eliminations do not require a cubic or high-degree resultant.

## Distinguish exact double and triple roots

Put Δ₁=2b³−9abc+27a²d and y=3at+b. At fixed (s,λ),
```
27a²G = y³−3Δ₀y+Δ₁,
27a²D = 4Δ₀³−Δ₁²,
```
where D is the pinned t discriminant. At G=G_t=0 the fixed-t derivative in s or λ obeys 27a² ∂_iG=∂_iΔ₁−3y∂_iΔ₀, since both the G term from differentiating a² and the y derivative of the depressed polynomial vanish.

**Exactly double (not triple).** For real repeated roots, Δ₀>0; this also follows from Δ₀=a²(r−q)² when the factorization is a(t−r)²(t−q). The repeated root is unique:
```
y=Δ₁/(2Δ₀),       t=(9ad−bc)/(2Δ₀).
```
One equivalent denominator-free test in (s,λ) with Δ₀>0 is
```
4Δ₀³−Δ₁²=0,
2Δ₀∂_sΔ₁−3Δ₁∂_sΔ₀=0,
2Δ₀∂_λΔ₁−3Δ₁∂_λΔ₀=0.
```
On this double stratum it is equivalently D=D_s=D_λ=0: at D=0,
27a²∂_iD=−2Δ₁(∂_iΔ₁−3y∂_iΔ₀), and Δ₁≠0. Thus one may screen singular points of the discriminant curve only on this open stratum.

**Triple.** Here Δ₀=Δ₁=0 and t=−b/(3a). The derivative test is instead ∂_sΔ₁=∂_λΔ₁=0, with no further derivative condition on Δ₀. Both D derivatives vanish automatically at Δ₀=Δ₁=0 and so cannot distinguish stationary triple roots. This is the essential extra case in using the discriminant.

## Bounded rigorous next routes; not executed

The coefficient bidegrees in (s,λ) are a:(0,3), b:(2,7), c:(3,9), d:(5,11). The invariants Δ₀ and Δ₁ have bidegrees (4,14) and (6,21), respectively, with 59 and 121 terms. The explicit four-quadratic system offers a compact alternative to first expanding or projecting the larger (11,32) discriminant.

1. Start with exact arithmetic or rational interval certification on the physical bounding box s∈[−6,6], t∈[−4,12], λ∈I. The t range follows from the multiaffine e₂ extrema on [−2,2]³. Rational Bernstein subdivision can discard a box if any one of the four quadratic-in-t equations has a certified nonzero sign. On a double-root box bounded away from Δ₀=0, replace t by the exact repeated-root formula or prune with its interval image. Near Δ₀=0 retain the original quadratic system or apply the distinct triple equations; do not divide through near that stratum. Isolate ambiguous boxes rather than assert exclusion from a finite sample.
2. For a discrete algebraic certificate, start modularly with the small-coefficient ideal and saturation by aΔ₀ for the double branch (adjoin v aΔ₀−1). Lift and verify any rational Gröbner/RUR result against the original equations; modular rank/degree alone is diagnostic. The triple branch can first project the lower bidegree pair (Δ₀,Δ₁), then test both Δ₁ derivatives exactly and reconstruct t. In either route we need exact back-substitution, not merely overlapping projection roots.
3. At an algebraically isolated candidate enforce actual chart admissibility: the cubic X³−sX²+tX−U(s,t,λ) must have three distinct real roots in (−2,2). An exact Sturm test over the candidate number field handles this, with no angular endpoint or coincident cosine admitted. A boundary-overlapping box still needs a separate argument; it is not evidence of strict-interior exclusion.

These are candidate systems and proposed verification routes only. No stationary root or its absence was certified.

## Small identity replay

```sh
python verify_cubic_stationary_identities.py global-interior-threshold.json
```
The pinned input is SHA-256 42da7a91cb2421f081e93966fe275e12849aeccd920581c787fdb9f475469df9. The replay checks exact cubic and discriminant identities by polynomial arithmetic and derivative algebra; it does not compute a resultant, a Gröbner basis, stationary candidates, or a real root count.
