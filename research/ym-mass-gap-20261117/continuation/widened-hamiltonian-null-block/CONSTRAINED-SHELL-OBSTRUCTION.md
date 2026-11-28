# Full near block and exact constrained shell obstruction

2026-11-28. Fixed spacing, zero total momentum, odd quadratic operator in the eight-coordinate-reflection invariant sector. This completes the finite coordinate consistency test in [the shifted shell obstruction](SHIFTED-SHELL-OBSTRUCTION.md), not a spectral-density calculation.

## Complete near block

Every connected ten-edge even support has a translated edge-simple closed Euler trail through zero. Exhausting these trails and the 660 non-detached reference groups with their actual length-ten supports produces 681 reflection-quotient shape representatives. Closing under all first-order moves preserves that set and gives 21 closed components. Their odd invariant spaces have 441 raw directions; 435 are in the 15 components with a nonzero kernel, with exactly 129 null directions altogether. Exact circuit ordering and Gram comparison identify the 435 retained raw directions and the full 129-dimensional kernel with the previous cross-block basis. In particular the finite basis accounts for all near null directions, not merely the columns touched by \(L\).

The vacuum-subtracted near form uses the ordered adjacent-face insertions and exact repeated-face counterterms. It is checked against seven full columns assembled by the older independent Haar routine. Compression to the complete kernel produces \(K-E I\) with 7,283 nonzero entries in its rational **form** matrix; \(w_J\) has 90 nonzero covector entries. Exact matrix ranks \(129\) for \(K-E I\) follow from modular full rank at 1009 and 1013.

## Exact constrained consistency

The desired equation is equivalent, by eliminating the ghost variable from the first row, to
\[
\begin{pmatrix}
-F & C^* &0\\
C&0&L\\
0&L^*&K-E I
\end{pmatrix}
\begin{pmatrix}z\\x\\y\end{pmatrix}
=\begin{pmatrix}0\\w_D\\w_J\end{pmatrix}.
\]
All block entries here are stored as compatible forms, including the energy times Gram terms; star becomes transpose. The detached rows and columns reduce to 201 coordinates: select independent rows of \([C,L]\). The excess variables can be set to zero because their columns are combinations of selected columns, and the discarded equations (including their right-hand sides) are the same row combinations, since \(w_D\in\operatorname{Ran}[C,L]\) in form coordinates. This gives a symmetric 600-square matrix.

At both primes the reduced rank and augmented rank are 594. This by itself does **not** give a rational upper bound. Six reconstructed rational null vectors have identity restriction to six specified free coordinates and their exact matrix products and exact pairings with the right-hand side all vanish. They certify rank at most 594 over the rationals, and the modular lower bound gives rank exactly 594. Symmetry makes these six vectors a complete left kernel; since their right-hand side pairings vanish, the actual equation is rationally consistent.

Thus the **constrained** trace distance is also zero on every regular reference patch at this energy. The compact atom test using only the near equation cannot help here either, because \(K-E I\) is invertible on the entire near block. This does not establish either vanishing or positivity of the actual source spectral weight. The solved equation lets the nuisance use arbitrary vectors satisfying the near relation; the actual resolvent must also satisfy the detached equation and outgoing boundary conditions. A compact solution for the physical operator was not established.

## Replay

1. Generate the pinned folded source with **python3 full_folded_source.py --output full-vector.json** and the previous cross-block certificate using **python3 physical_cross_block.py full-vector.json --output exact-cross-reviewed.json**.
2. Run **python3 physical_near_block.py --output near-result.json**. The 310,933-byte artifact SHA-256 is **0fce1bb95cc81534cfe7acc07e1862f08c1767da2edc3828055c8c9d93781702**.
3. With NumPy and SymPy installed, run **python3 constrained_rank.py near-result.json** and **python3 reconstruct_null.py near-result.json --output null-witness.json**. The 18,520-byte rational witness SHA-256 is **c97e31b56a0078b8d4e921cb8169c4f4ebe02a0460065fa337619f4d0cf999a0**. The witness is checked with exact rational arithmetic, not accepted from modular agreement.

The included **null-witness.json** can also be checked without reconstructing it: **python3 verify_null_certificate.py near-result.json null-witness.json**.
