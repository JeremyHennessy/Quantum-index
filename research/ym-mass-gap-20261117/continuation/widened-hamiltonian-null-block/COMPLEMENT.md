# Resolution of the full X-odd widened Hamiltonian band

2026-11-27. Exact finite, fixed-spacing calculation in the open 4-by-2 SU(2) Hamiltonian. Parent: [odd–odd second-order result](README.md) at commit `ab98786f0eaa50399f347c3e3fba746d48c76cb6`, continuing the [first-order analysis](../widened-hamiltonian-individual-modes/README.md).

**The 31 branches in the X-odd part of the free energy-15 band have pairwise distinct energies for all sufficiently small real nonzero g.** The original probe F=W₁W₃−W₂W₄ detects at least 24 of them. One new explicit probe ensures detection of a 25th. These are exact assertions about an unspecified punctured neighbourhood of zero; there is no assertion of separation from X-even branches or of a numeric interval, volume-uniform bound, spatial limit, or continuum mass gap.

## Complementary Y-even calculation

The joint kernel of PVP, X+I, and Y−I has dimension eight. Center parity C=(-1) to the face-mask population count anticommutes with V and commutes with H₀, X and Y. Thus C commutes with the second-order Schur operator N V Q(15−H₀)⁻¹ Q V N, where N is the relevant zero-slope projector and Q is the complement of the full free band projection. The kernel has seven center-odd directions and one center-even direction. This separation is at the level of the second-order operator; center parity is not claimed to commute with H(g) at nonzero g.

The same exact spectral-lift helper used for the odd–odd result now uses all 50 nonzero circuit coordinates across 150 intermediate parity groups. It again verifies the uncompressed energy-15 identity and exact vanishing of its compressed form, as well as non-negative intermediate Gram forms and zero even–odd cross Gram forms. In the center-odd block, the projected original probe derivative has squared norm 1/9216 and the seven-column Krylov matrix has rank seven over the rationals. Its cyclic polynomial is the exact characteristic polynomial of the seven-dimensional block. The verifications also reproduce these ascending coefficient vectors (including the monic coefficient) and evaluations:

| Prime | Coefficients | Evaluation at −73/336 |
| ---: | --- | ---: |
| 1009 | 202, 661, 61, 228, 637, 451, 604, 1 | 194 |
| 1013 | 1004, 709, 510, 292, 738, 291, 131, 1 | 665 |

The **rational** polynomial is squarefree and the exact even coefficient is not its root. Exact Sturm counts enclose its seven roots separately in (-261,-260), (-250,-249), (-229,-228), (-224,-223), (-221,-220), (-213,-212), and (-206,-205), with endpoints divided by 1,000. Its full coefficients are printed by the verifier. Each quadratic coefficient is larger than the vacuum coefficient −1/3. The same double analytic reduction described in the parent report gives seven simple branches with nonzero linear probe amplitude. Center parity forces zero linear amplitude for the eighth, but does **not** rule out its quadratic or later overlap.

## An explicit second probe for the eighth branch

Write q for the sum of unnormalized single-loop circuit traces at face masks 39, 78, 114, 119, 228 and 238, in the bit convention of the parent, with respective coefficients +1, −1, +1, −1, −1 and +1. The script verifies all coordinate equations Xq=−q, Yq=q, Cq=q and PVP q=0. Its squared norm is 6. The exact unnormalized spectral weights of Vq are:

| Twice the intermediate energy | 24 | 36 | 42 | 44 | 46 | 48 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Weight | 3/4 | 1 | 1 | 3 | 3 | 9/4 |

All other weights, including the energy-15 weight, vanish. Dividing by 6 and weighting by 2/(30−2E) gives κ=−73/336 as the coefficient of g² in the absolute energy. The vacuum-subtracted coefficient is κ+1/3=13/112. Multiplication by the bounded gauge-invariant function q applied to the free vacuum 1 produces q; its inner product with the normalized free eigenline q/√6 is √6. By continuity of the separate analytic branch and vacuum projections, this probe has nonzero amplitude for all sufficiently small g, including g=0.

## Cross-sector separation and limits

The two rational odd-block characteristic polynomials have gcd 1, and neither vanishes at −73/336. Thus the fifteen zero-slope branches, seven from Y odd and eight from Y even, all have distinct quadratic coefficients. The verifier also recomputes both X-odd first-order characteristic polynomials, removes their zero powers and checks each nonzero factor is squarefree and the two reduced polynomials are coprime. Thus their sixteen nonzero first-order slopes are all different. A nonzero slope distinguishes a branch from every zero-slope branch. Taking the intersection of the finitely many punctured neighbourhoods gives the 31-branch claim in X odd.

Count for the original probe: ten known linear-slope branches plus seven zero-slope branches per Y sector = 24. The new probe certifies one more, for 25 with the two probes. No assertion is made that 24 is the most the original probe can detect: the quadratic amplitude on the center-even branch and higher-order amplitudes on the other six nonzero-slope branches were not calculated. A different X-even branch could still share an energy.

## Reproduce

In this directory run `python3 second_order.py` with Python 3.12 and SymPy 1.14. The pre-existing entry point still runs all old odd–odd tests and now also runs the complement, including both modular checks, exact rational rank, root counts, and cross-sector separation. The old output is unchanged. No approximate diagonalization, external solver, or new data is required.
