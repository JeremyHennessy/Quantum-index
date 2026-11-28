# Bounded finite-field stationary projection diagnostic

This is exact arithmetic **in three finite fields**, not a characteristic-zero elimination certificate, a real-root classification, or a physical stationary-point/density result. It does not evaluate a large characteristic-zero resultant.

Use the pinned exact interior threshold data to form D(s,λ), its derivatives D_s,D_λ, and the cubic invariants Δ₀,Δ₁. Project in s using three fixed-size Sylvester determinants:
```
P_s=Res_s(D,D_s),      P_λ=Res_s(D,D_λ),      T=Res_s(Δ₀,Δ₁).
```
The exact bidegrees in (s,λ) are (11,32),(10,31),(11,31),(4,14),(6,21), respectively, so their λ degree ceilings are 661 (within the stated 672 bound), 693, and 168. These bounds follow from the coefficient degrees and the Sylvester row degrees and are applied before interpolation. Every coefficient is reduced modulo each prime only if its rational denominator is invertible there, and the unreduced global bidegrees are checked to survive the reduction. Primes 1009,1013,1021 are all greater than 700, split modulo four and larger than the relevant interpolation sizes.

For each projection, fixed-length coefficient arrays in s are evaluated on a grid of consecutive λ residues of size degree ceiling plus one. For every sample the same full Sylvester matrix includes any vanishing leading coefficient as an explicit zero, so drops of degree at a sample do not switch the definition of the resultant. Finite-field Gaussian determinants are interpolated by exact falling factorial finite differences. Four independent extra sample residues are checked (plus a repeated zero sample as a fixed-shape guard). Results are normalized monic; the resultant sign does not affect support.

Let H=gcd(P_s,P_λ), H_sf its square-free part, L the leading coefficient of D in s, and T the triple-root projection above. The diagnostic reports support by gcd with T and L, and removes their union from H_sf. The D-leading comparison is deliberately conservative: a leading root can cause a fixed-Sylvester projective degree-drop zero, but not every leading coincidence has that interpretation. A triple projection can also contain its own degree drops. No same-s lift is asserted.

## Reproducible degree results

All three primes give the same counts:
```
degree(P_s), degree(P_λ), degree(T): 530, 551, 126
degree(H), degree(H_sf):             367, 109
degree(H_sf support also in T):      94
degree(H_sf support also in L):       1  (this 1 is also in T)
degree(H_sf beyond T or L):          15.
```
Thus the modular shared projection has a nontrivial degree-15 part not accounted for by these two support tests. Its field factorizations vary across primes, as expected, but in all three cases exactly two linear factors have multiplicity six in H and all remaining factors of its degree-13 support have multiplicity two. These are finite-field multiplicities only.

Even in the same prime, a common λ projection can arise from two different s roots in P_s and P_λ; it is not yet a critical or stationary witness. None of the counts lifts to characteristic zero solely by agreement across the tested primes. A natural separate next diagnostic would test same-s lifts of just that residual support in the finite extension fields, or use controlled rational reconstruction with exact verification. Neither was undertaken here.

## Replay

```sh
PYTHONHASHSEED=23 OPENBLAS_NUM_THREADS=1 python modular_stationary_projections.py \
  global-interior-threshold.json new-modular.json
```
Input SHA-256 42da7a91cb2421f081e93966fe275e12849aeccd920581c787fdb9f475469df9. Exact finite-field output is 23,688 bytes, SHA-256 **e4c302298e15b54d4a1925e22f6211e95008672a9821a976b669ac13133f29ef**, reproduced byte-for-byte under seeds 23 and 71. No real geometry, physical norm bound, limiting absorption, spectral density, or continuum conclusion is inferred.

## Common s lifts and one exact physical exclusion

A second replay tests each irreducible factor of the degree-15 residual over its
finite extension field. The specialized polynomial D retains degree 11 in s.
Using Euclidean division, the two monic s-gcds and their common gcd all
have degree three on the multiplicity-six support, and degree one on the
remaining support, in each of the three primes. Thus the residual does lift
to common s witnesses over algebraic closures in these finite fields. This
does not show that any lift is real or physical in characteristic zero.

Rational reconstruction suggested the quadratic in λ
`1204224 λ² + 370496 λ + 6631`. An independent exact calculation, now over
the rational number field defined by that irreducible polynomial, verifies
that the common s-gcd is cubic. The quadratic's lower real root is between
−0.289 and −0.288, below −71/840. For its upper root, in the exact interval
(−1908101600/10¹¹, −1908101599/10¹¹), evaluations of the monic cubic have
opposite signs at the endpoints of each of (−1738,−1737), (−7,−6), and (9,10).
These three distinct roots exhaust the cubic and all miss |s|≤6. The signs
hold on the entire λ bracket because the reduced evaluations are affine in λ.
This is a rationally certified exclusion only for this quadratic, not a
characteristic-zero classification of the remaining support. The proof
does not depend on the unverified correctness of any modular reconstruction.

Additional modular experiments are discovery tools and did not establish
exhaustiveness. In particular, prime 1249 produced larger shared support
(degrees 369/110 instead of 367/109); the projection degrees were unchanged.

```sh
python verify_same_s_modular.py global-interior-threshold.json modular-projections.json new-lifts.json
python verify_quadratic_exclusion.py global-interior-threshold.json
```

Lift artifact SHA-256:
`16da269014e128db77d49d8615fc73f21320cf129248b075b38d1242609005ad`.

Two further reconstructed factors can also be excluded exactly:

- `3612672 λ² + 584640 λ + 28405` has negative rational discriminant.
- `63221760 λ³ + 66881472 λ² + 1595300 λ − 19307` gives exact
  common s-gcd `s+168 λ+21/5`. Here Δ₀ is invertible in the number field
  and the unique double-root coordinate is `t=672 λ+24/5`. The cosine
  cubic factors as `(X+2)²(X−s−4)`, which excludes all such points
  from the strict chart. This does not by itself analyze the degenerate
  boundary chart.

`python verify_lower_degree_exclusions.py global-interior-threshold.json`
replays both checks. The remaining projection support, triple-root
conditions, and chart remainder are not classified by this note.
