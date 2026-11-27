# A finite residual budget for the three-square single-face test at b=.01

November 27, 2026 UTC. Target is the [isolated anisotropic perimeter state](../three-square-perimeter-isolation/README.md), with β=.8 on the two shared links and β=1 elsewhere, at b₁=b₂=b₃=.01. The [first nonzero coefficient](../three-square-single-face-coefficient/README.md) suggests an amplitude around 10⁻⁹ by extrapolation, not a certified value at this coupling. The calculation here certifies that truncation and coefficient rounding can be made small enough to attempt a residual proof. It does not supply trial eigenvectors or a finite-coupling transition certificate.

## Tighter kinetic tail

Use the physical triangle labels in the preceding note. For weighted cutoff W=22, there are 272 retained spin-network states. The rough bound 4⁻²³ is much too large for the proposed accuracy. Enumerate the omitted labels through weight 32 and bound each true kinetic eigenvalue by the product of upper Bessel-series ratios with the actual temporal coupling of its edge. For every label above the enumeration use 4⁻³³, from a_n≤4⁻ⁿ for any of the two temporal couplings. This proves the full omitted operator norm is <8.036×10⁻¹⁹, not just the maximum of a finite list. Occupation multiplicities do not affect the norm of a diagonal operator.

Round retained interval lower endpoints down to a grid of spacing 10⁻²⁰, recording each upper endpoint minus the rounded value. The kinetic error is the larger of the maximum retained rounding error and the omitted norm (the blocks are orthogonal). Bessel intervals use terms 0 through 12 and at most twice the first remaining term. Temporarily extending the proof loop to nearby cutoffs gives the following budgets:

| Maximum retained weight | Retained count | Full transfer approximation error, rounded upward |
| ---: | ---: | ---: |
| 18 | 130 | 3.799×10⁻¹⁵ |
| 20 | 192 | 5.447×10⁻¹⁷ |
| 22 | 272 | 9.60×10⁻¹⁹ |
| 24 | 384 | 1.450×10⁻¹⁹ |

For these bounds, use the degree-seven Taylor multiplier M_p for M=exp(V/2), where ‖V/2‖≤.015. Both M and M_p have norm at most m=(1−.015)⁻¹, and δ_M≤m·(.015)^8/8!. With approximated positive contraction K_p, the exact S=MKM and finite-rank S_p=M_p K_p M_p satisfy
```
‖S−S_p‖ ≤ m² ‖K−K_p‖ + 2m δ_M.
```
The numerical matrix construction must represent the full range of M_p on the retained basis, including generated modes outside the kinetic cutoff. Silently cutting that output contributes an additional error not covered here.

## What an actual verification still needs

Specify trial energies inside the separated perimeter band and close to 1 for the vacuum, normalized squared norms within 10⁻¹², and full-transfer residuals (including the tabulated truncation) at most 10⁻¹⁶ and 10⁻¹² respectively. Use gaps to other spectrum of 2.5×10⁻⁶ (perimeter) and .9 (vacuum), valid for the stated band and vacuum trial energy in (.999,1.032). The previous spectrum bounds supply these separations, and the residual bound together with the trial norm forces a true eigenvalue nearby. With consistent real phases, the state errors are bounded by norm adjustment plus twice residual over separation. For a norm-one-bounded insertion F₁, these would enclose the transition to within 8.5×10⁻¹¹, excluding zero if the eventual trial transition is large enough. An exact inner-product verification is assumed in that error budget; any approximation error must be added separately. These requirements do not rely on assuming the predicted transition size.

Run `python3 budget.py` (standard library only) for the rational bounds. Next is constructing exact finite multiplication entries and verified trial residuals; until then the earlier-coupling transition, isotropic split, and continuum claims remain unproved.
