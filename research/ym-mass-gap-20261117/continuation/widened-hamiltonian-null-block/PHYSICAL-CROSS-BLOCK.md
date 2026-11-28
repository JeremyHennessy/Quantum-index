# Exact physical-near to detached return block

2026-11-28 · Fixed spatial spacing, zero total momentum, odd quadratic coefficient operator in the eight-coordinate-reflection invariant sector. Parent: [defect geometry](DEFECT-GEOMETRY.md), [ghost block](DEFECT-BLOCK.md), and [physical sheet test](PHYSICAL-SHEET-TEST.md).

**The physical cross-block \(L=H_{D,J}\) is assembled exactly rather than bounded by geometry.** It has 348 detached invariant rows, 129 potentially active near null columns, and 4,909 nonzero rational form entries. Its rank is 117, and appending the detached component \(w_D\) of the actual source raises its rank to 118. Appending \(w_D\) to the combined block \([C,L]\), however, leaves its exact rank at 201, where \(C=V_{D,G}\) is the ghost-to-detached matrix. Thus physical near inputs alone miss the coordinate source, but the combined enlarged coordinate test does not distinguish it. Neither comparison is an actual spectral density calculation.

## Complete finite assembly

Use the common reference convention with detached return space \(D\), non-detached reference-only ghost space \(G\), and physical near null space \(J\). Construct all 348 rational invariant basis vectors in \(D\) by the existing reference routine; they retain complete low-band null and reflection stabilizer constraints. All their detached trace products have unit norm before averaging. For an invariant output pairing, two source trace products in the same reflection orbit contribute equally at zero momentum. Sum their rational weights at the representative, retaining the original orbit multiplicities. This gives 423 detached trace-product representatives.

For each representative the exact quadratic stencil can contribute to \(J\) only through adjacent distinct face pairs; repeated-face terms preserve the label, and disconnected orderings cancel. Test all binary parity returns of ten edges and keep shapes that belong to the physical near part under the whole-companion detached rule. There are 1,452 such candidate adjacent-pair returns from the representatives, yielding 222 near target representatives. This is a geometric candidate count, not a number of nonzero coefficients. Close the complete union under first-order moves modulo the reflections, using every physical circuit direction per support. The 21 closed components contain 681 shape representatives. Since the detached blocks reduce the first-order operator, no closure can drift into \(D\). Near components outside this finite union have zero cross-block to \(D\) by this complete stencil enumeration.

For each eligible pair use the exact two-insertion Haar spectral Gram in both orders, dropping intermediate energy 15 and using the reduced denominator for every retained energy. Then compress the near covectors by the basis of the odd nullspace of the exact first-order rectangular form. Taking the adjoint of this near-output/return-input form gives \(L\). The final near basis has 129 columns. All entries are in *form* coordinates, so converting the form rows by the inverse detached Gram changes neither rank nor source membership. The checker also solves for the coordinates of the active projection of the real \(w_J\), using the exact near null Gram, and recovers the independent unit rectangle witness
\[
\langle e,Vw\rangle
  =-\frac{416728166446999793140277173375349}
          {66795522141927561840642247916425297920}
\]
from the assembled block. This confirms the relative anchor, orbit and Gram conventions against the earlier direct Haar row.

## Exact ranks and use

Exact rational row reduction gives:

| Form matrix | Rank | Rank after appending \(w_D\) |
| --- | ---: | ---: |
| \(L\) | 117 | 118 |
| \([C,L]\) | 201 | 201 |

The columns \(C\) alone also miss \(w_D\) by the [exact detached rank comparison](DEFECT-DETACHED-RANK.md). These statements concern the actual folded source, not a generic positive control. This matrix also gives the physical nuisance map needed for the reduced test, but that test compares the **shell images** of ghost-side \(C^*\) and detached-side \(L\), not the shared-coordinate column space \([C,L]\). A result about one is not a result about the other. The compact cancellation and physical spectral weight remain open; the constrained near equation additionally requires the actual near operator \(K=H_{J,J}\), not just active cross-block coordinates.

## The exact Schur image and an unrestricted-test obstruction

In the zero-dummy completion the projected defect form on inputs (ghost, detached, near) is
\[
\begin{pmatrix}G_0&C^*&0\\ C&0&L\end{pmatrix}.
\]
The ghost diagonal \(G_0\) is invertible. The symmetric 618-by-618 ghost/return block obtained by omitting the near columns has rank at least 450 modulo each of 1009 and 1013, with all denominators invertible. Its rational rank is at most \(270+\operatorname{rank}(C)=450\) by the Schur identity and the exact rank \(\operatorname{rank}(C)=180\). Thus its rational rank is exactly 450 and
\[
\operatorname{Ran}(C G_0^{-1} C^*)=\operatorname{Ran}(C).
\]
Here the Schur operations are on the same rational form matrices; no extra Gram factors are inserted between coordinate variables and covectors. Imposing zero ghost output still gives \(q_G=-G_0^{-1}C^*q_D\). The resulting detached image is exactly \(\operatorname{Ran}[C,L]\), so the actual reference source with zero ghost component belongs to the **actual unrestricted projected defect range**.

It follows that the sufficient one-sheet distance that allows *all* defect inputs is zero for this reference completion on every reference patch. This is a limitation of that criterion, not a statement that the physical on-shell amplitude cancels. The [physical sheet test](PHYSICAL-SHEET-TEST.md) removes dummy resolvent inputs before taking the shell trace; its nuisance combines \(C^*\) on the ghost trace side and \(L\) on the detached trace side. The physical nuisance has dimension at most 180+117=297 before tracing. Its source distance has **not** been computed here. In particular neither spectral density nor its vanishing follows.

## Reproduce and export

Generate the exact rational source JSON with **python3 full_folded_source.py --output path.json**. Run **python3 physical_cross_block.py path.json --exact-rank** to reproduce the full exact comparisons. Add **--output cross.json** to write a companion sparse JSON with \(L\), \(w_D\), the active near source projection, the raw near circuit basis and Gram, the near null basis, and the explicit detached reference basis. The 394,819-byte file has pinned SHA-256 **97bfb46357273f147b7849e804087848d80147cb6fc836258a3819bb52ff378f**. In that file each near raw circuit stands for its eight-reflection orbit-sum, while the detached product basis is enumerated explicitly in the relative-anchor convention. This is an active near *cross-block*, not a claim to include the entire near operator or all near source coordinates.

This is a fixed-spacing coefficient computation. No scattering, density at the target energy, or continuum claim is made.
