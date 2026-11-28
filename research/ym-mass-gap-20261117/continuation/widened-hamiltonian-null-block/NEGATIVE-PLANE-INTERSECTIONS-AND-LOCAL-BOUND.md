# Pairwise energy-threshold intersections on the negative reference plane

2026-11-28 UTC. At E=−13/336 and zero total momentum, restrict X_i=−2 and put S=X_j+X_k, u=X_j X_k. The input is the exact four-factor artifact for q_a=A+ A− up to its nonzero normalization, and q_b=B+ B− with its stated scale. The unscaled residual is −q_a²q_b. All below concerns this fixed-spacing reference plane and its localized neighborhoods, not the full torus, the physical resolvent, or spectral density.

## Complete exact candidate and domain screen

For each of six pairs, take the polynomial resultant with respect to u, then isolate all real roots of each irreducible rational S factor in the closed interval [−4,4]. At each factor use the Euclidean gcd in u over the exact quotient field Q[S]/(f). For the linear gcd, the unique shared u is a polynomial in the field generator, and its value is enclosed by exact rational Horner interval evaluation. Every candidate is filtered by the three physical inequalities
```
u−2S+4 ≥ 0,   u+2S+4 ≥ 0,   S²/4−u ≥ 0.
```
To detect equality or a triple, reduce the corresponding difference/other factor to zero in the quotient field. If the field element is nonzero, refine its S isolator until the exact interval has definite sign. The only nonlinear specialized u gcd occurs for A−/B− at the rational S=−4, where its two real u possibilities are both distinct from the unique physical value u=4. The final artifact includes all rejected candidates and their exact inequality signs, not just the surviving roots.

| Pair | S-resultant degree | Real candidates with −4≤S≤4 | Physically admissible |
|---|---:|---:|---:|
| A+/A− | 11 | 3 | 1 (negative edge) |
| A+/B+ | 4 | 2 | 0 |
| A+/B− | 8 | 2 | 0 |
| A−/B+ | 7 | 2 | 0 |
| A−/B− | 14 | 3 | 0 |
| B+/B− | 3 | 2 | 2 (negative edge and strict interior) |

There are therefore exactly three physical pairs in (S,u), no triple, no diagonal pair, no corner, and no pair at S=3/10. All three are simple roots of their **full pairwise S resultants** (the exact resultant derivative is nonzero modulo their minimal polynomial). All three also have nonzero 2×2 (S,u) pair Jacobian, verified independently by direct reduced substitution. This is a factor-intersection derivative, not a statement about angular energy slopes at a boundary chart.

## Exact physical isolators and shared u

1. **A+/A−, negative edge.** S is the unique root of 2000S³−342250S²−110565S+4330593 on (−2652769/720632,−144335/39209). The shared value is exactly u=−2S−4, in (131834/39209,1211505/360316). One other X is −2. Replacing the free old edge coordinate x by S+2 maps this minimal polynomial exactly to the previously certified edge-- root of energy nullity four; its signed line derivative is negative definite.
2. **B+/B−, negative edge.** S=−449971/181755 and u=172922/181755=−2S−4. The same exact change x=S+2 maps this to the old rank-two edge-- root, also negative definite.
3. **B+/B−, strict interior.** S is the unique root of 293077088136000 S²−238471498194041385 S−589922913806854942 on (−195059/79090,−316916/128499). The shared value is exactly u=(22921/945)S+18158053/297675 and lies in (5554399997/4708623150,2148651767/1821473325). All three domain inequalities are strict, so both free X values are inside (−2,2) and distinct. Numerically (S,u)≈(−2.46629157,1.17962297), but the existence, uniqueness and inequalities are exact.

On the flat locus S=3/10, componentwise Sturm isolation confirms that A+ and both B factors have no physical zero. A− has exactly one simple physical zero, its already established quadratic root in (−1542/85135,−2861/157958). This is an F/A− overlap, not an intersection of two of the four residual factors. It is precisely the prior elevated-flat-multiplicity case.

## Local reference bound on the negative face

At the strict interior B intersection, F is nonzero and A+ and A− are nonzero. The B+ graph has a constant nonzero u derivative; the simple resultant root and the directly verified nonzero pair Jacobian establish independent B gradients. Each gradient is nonzero, so that each reflection block has exactly one zero eigenvalue at the B threshold: if its Hermitian shifted block had nullity at least two, all the determinant derivatives would vanish. Differentiating the determinant at a simple energy root shows that the two energy gradients are each a nonzero scalar multiple of their corresponding factor gradient. Their independence persists in the two free angular coordinates, because the free cosines are distinct and nonendpoint here. Choose a tangent direction in the face in which both energy derivatives are positive. The fixed-axis symmetry gives one mode in each opposite parity block, so the first compressed derivative on the full two-mode cluster along that tangent is definite. Continuity in the other coordinates then gives the previously established monotone Cauchy–Green local reference matrix-element bound.

This fills the only new intersection case. Combining it with [the independently verified individual factor regularity](NEGATIVE-PLANE-FACTOR-REGULARITY.md) and the established local proofs yields coverage of the entire negative coordinate face:
- S=3/10 is covered by [the elementary critical-curve bounds](FLAT-CRITICAL-INTERSECTIONS-AND-LOCAL-BOUND.md) (including the single additional A− intersection, lifted by the exact simple six-loop branch).
- The diagonal and edges are already covered by [the high-symmetry local bounds](RESIDUAL-SYMMETRY-LINES-AND-LOCAL-BOUND.md), including the two paired edge roots checked above; corners are gapped.
- Away from these and the new strict-interior pair, any ungapped point has a single vanishing parity factor. The two plus factors are linear in u with nonvanishing coefficients; for the minus quadratics the previously verified squarefree discriminants and nonzero u² coefficients imply that their factor gradient cannot vanish at a root. The corresponding simple six-loop level has a nonzero tangential derivative after including the elementary energy. A roots inherit a two-dimensional elementary eigenspace with the same definite derivative in the selected tangent direction; B roots are simple. Thus the same local monotone proof applies.
- All other points have a nonzero local gap.

A finite cover of this compact face gives bounds with smooth localization to a neighborhood of it. This gives no information about residual critical points away from the negative-face neighborhoods, no global finite-block bound, no physical Poisson-response claim and no continuum inference.

## Exact replay

```sh
PYTHONHASHSEED=29 python intersections.py plane-polynomials.json new-intersections.json
python verify_intersection_handoff.py new-intersections.json signed-crossings.json
```
Source plane polynomial artifact SHA-256 7758f8a0ff27ebb1cd26ec22f392a4b29ea66cca30d1e6e8aabf8074b9975be9. The seed29 and seed77 complete replays matched the 13,261-byte `plane-intersections-final.json`, SHA-256 **c5059f99226bd6972d46258f8f38d049b1523a6f0e0e30f6e8abe4382ab79d51**. Prior signed-edge artifact SHA-256 4badb563afd9785917bf0fd8b45ec576666433d06751f6a8d43a5fc51df6f8ee.
