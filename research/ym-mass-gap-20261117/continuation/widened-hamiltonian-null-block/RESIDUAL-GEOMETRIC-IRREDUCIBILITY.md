# Absolute irreducibility of the non-flat reference determinant

The degree-52-per-variable Cayley residual r at E=−13/336, after removing the flat-channel cube, is absolutely irreducible. This upgrades [the arithmetic result](LAURENT-ARITHMETIC-IRREDUCIBILITY.md) by a two-slice permutation certificate. The [flat factor is treated separately](FLAT-GEOMETRIC-IRREDUCIBILITY.md). This does not resolve the physical defect-dressed response, limiting absorption, spectral weight, nonzero coupling, or continuum.

Work over K=Q(i). Arithmetic irreducibility means Galois acts transitively on the distinct normalized geometrical factors of r. They are distinct because the two specializations below are square-free. Their multidegrees agree, so if there are m, then m divides 52. In each of the two t₂ slices, degree preservation and square-freeness specialize every factor to exactly 52/m distinct roots, with no collisions between factors. Thus either slice gives a Galois-equivariant block partition of its 52 roots into m blocks. The component permutation action is the *same* action in both slices. Fixing all roots of even one slice fixes its blocks, and therefore fixes every normalized geometrical factor; the global component coefficient field is consequently contained in that slice's splitting field.

At p=37 (split in K), the two primitive degree-52 integer residuals are leading-unit and square-free modulo p. The mod-p products are exact, and each indicated factor's finite-field irreducibility was verified. They give Frobenius cycles

| t₂ transverse tangents | all 52 roots | canonical sign pairs (roots of degree-26 polynomial in t₂²) |
|---|---|---|
| (8,12) | (2,5,5,6,34) | (1,3,5,17) |
| (1,2) | (3,3,16,30) | (3,8,15) |

Use one Frobenius element over a fixed prime above 37 in the common compositum of both slice splitting fields. Those fields, and the compositum, are unramified at that prime by the simple good reductions. Its restrictions act with the listed profiles on the two sets. The component coefficient field is contained in the splitting fields, so it has a single shared permutation under this Frobenius.

If a permutation preserves m blocks of size b, the orbit of blocks touched by a point-cycle of length d has length ℓ dividing d, with ℓ≤m and d≤ℓb. That whole block orbit has ℓb points and contains only point cycles with length divisible by ℓ. For the first profile its 34-cycle excludes m=2 (it would require a two-block orbit spanning all 52 points, incompatible with a 5-cycle), m=4 (the maximum admissible ℓ is two and 2×13<34), and m=13 (similarly 2×4<34). For the second profile the 30-cycle independently excludes m=2 (the length-three cycles conflict with a two-block orbit spanning all points), and m=13 (only ℓ=10 can meet 30≤4ℓ; the needed additional ten points cannot be filled by the other cycles of lengths 3,3,16). The incompatible full profiles immediately exclude m=52, since singleton blocks give a Galois-equivariant bijection of each root set to the same component set.

For m=26 the blocks would be an invariant perfect matching. The obvious invariant matching pairs nonzero roots t,-t in both slices, since their polynomial is even. Any different invariant matching combined with this one gives a union of even alternating cycles and possibly common edges. Each specialized degree-52 polynomial is irreducible over K, hence its Galois action on roots is transitive. It follows that the union components all have the same size; if the matchings differ, it must be 4, 26, or 52. Sizes 4 and 26 would themselves give invariant partitions with m=13 or m=2, already excluded separately in both slices. A single size-52 cycle would put the Galois permutation group inside the cycle's dihedral group of order 104; the orders of the listed Frobenius permutations are 510 and 240, impossible. Therefore the canonical sign-pair matching is the only invariant matching in either slice. Since quotient Frobenius cycle types on those pairs differ, they too cannot both be the action on the shared set of 26 components. This excludes m=26; only m=1 remains.

Absolute irreducibility over an algebraic closure of K means irreducibility over C (algebraically closed extensions preserve geometric irreducibility). The prior Cayley unit and infinity checks are algebraic and persist over C, so the residual Laurent element is likewise irreducible over C. A simple real sheet for this residual is already known; the repeated elementary-loop factor F has its own [geometric proof](FLAT-GEOMETRIC-IRREDUCIBILITY.md) and [transverse real patches](REFERENCE-FACTOR-SLICES.md). Even all reference-factor coverage would not on its own establish the physical LAP or spectral density.

Replay:
```sh
python absolute_residual_frobenius.py six-axis-slices.json
```
The script verifies the six-slice input SHA-256 824fc786a8bf480b47b946f457869d2e332c1dd08f0a8c7726e4b3dead07cc0f, both univariate products and irreducibility over GF(37), both cycle type profiles, the long-cycle block obstructions, and exact inequality of the two pair profiles.
