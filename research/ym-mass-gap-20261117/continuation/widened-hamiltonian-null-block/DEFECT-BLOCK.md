# The exact ghost defect block and one physical return row

2026-11-28 · Fixed spacing, zero total momentum, odd quadratic coefficient operator. Parent: [geometric defect mask](DEFECT-GEOMETRY.md) and [exact folded source](FULL-FOLDED-SOURCE.md). The calculation is in the eight-coordinate-reflection invariant sector. It is not a spectral boundary-value or scattering calculation.

**The actual projected defect's ghost-input block has full column rank 270; appending the actual reference source increases the rank to 271. The 270-by-270 ghost diagonal block is also invertible.** Ghost inputs alone cannot give the actual reference source. For a coordinate-range test with zero ghost output, their coupled variables can be eliminated by an exact Schur block, not set to zero. One exact physical return row on the actual full source is nonzero.

## Common coordinate convention and zero blocks

Let \(H\) be the physical odd quadratic operator, extended as zero on the dummy reference coordinates, and \(A\) the separated reference convolution direct summed with zero on the physical near coordinates. Set \(V=H-A\). Split the flagged invariant reference coordinate space into non-detached dummy groups \(G\) (dimension 270) and detached return-to-near groups \(D\) (dimension 348). Denote the finite physical near subspace by \(J\). Clear columns of \(V\) vanish, by the earlier geometric certificate.

For two detached groups the entries of \(H\) equal those of the separated reference: any eligible term either preserves a component label or changes only one component, the spectator energy cancels, and both input and output projections occur in complete detached first-order blocks. The exact geometric enumeration excluded all eligible two-component adjacent pairs. Thus \(V_{D,D}=0\); obtaining this zero needs neither truncating the Haar sum nor discarding the null projection. By the direct sum conventions \(V_{G,J}=V_{J,G}=0\). The entire projected ghost-input block is therefore \(-A|_G\), on rows \(G\oplus D\), while the projected near-input block has only the row \(V_{D,J}=H_{D,J}\). The detached-input ghost row \(V_{G,D}=-A_{G,D}\) is retained; it is the adjoint of the detached output on the ghost columns. The source's \(G\) coordinates are exactly zero. This is a statement about one fixed zero-dummy completion.

## Exact ghost rank and source comparison

Build a rational basis of each invariant flag space by averaging the eight sign reflections of low-band product vectors, with stabilizer Gram reduction. The elementary factor is a unit coordinate; the hexagon factor retains the exact null of the single cube's first-order form. Fourier phases for common translations are one. The low stencils give each matrix form entry directly: when the elementary anchor moves by \(z\), the six-loop relative anchor becomes \(r-z\); a six-loop move instead gives \(r+z\). Pairing both input and output with the exact invariant null bases implements the reference null compression. Rank is unaffected by recording form coordinates rather than orthonormal matrix coordinates, since the target Gram is invertible. The same form convention is used for the source column. The zero ghost source column part is verified from the pinned exact source JSON, not assumed after discarding entries.

The resulting \(618\times270\) rational matrix has 9,422 nonzero entries and a symmetric \(270\times270\) ghost diagonal form. Exact elimination modulo 1009 and 1013 gives each of these ranks:

| Matrix | Rows × columns | Rank |
| --- | ---: | ---: |
| Ghost diagonal | 270 × 270 | 270 |
| Projected ghost columns | 618 × 270 | 270 |
| Ghost columns with actual source appended | 618 × 271 | 271 |

Every denominator is invertible modulo both primes, checked during elimination. A nonzero maximal minor modulo a prime is a nonzero rational minor, so the column bounds make the reported ranks exact over the rationals (and the reals). In fact diagonal invertibility alone would also imply the augmented-rank result, since a nonzero source with zero ghost coordinates cannot come from a nonzero ghost input.

Write \(G_0=V_{G,G}\), \(C=V_{D,G}\), and \(L=H_{D,J}\) in the rational form bases. The complete projected block on inputs (ghost, detached flagged, physical near) is
\[
\begin{pmatrix}G_0&C^*&0\\ C&0&L\end{pmatrix}.
\]
In particular detached inputs can cancel ghost output from ghost inputs. Imposing zero ghost output solves \(q_G=-G_0^{-1}C^*q_D\), so the remaining detached output is **\(Lq_J-CG_0^{-1}C^*q_D\)**. The latter Schur term cannot be dropped. This reduces a **coordinate-level** membership test for the actual reference source to the range of that combined detached operator. It is not a shell-trace range identity.

For the detached-output subblock \(C\) alone, both modular reductions have rank 180 and rank 181 after adjoining \(w_D\). These are lower bounds over the rationals, **not** an exact rank comparison without a matching rational upper bound for \(C\). No noncontainment claim follows from these two unsaturated modular ranks.

## One actual physical pairing

Use the same unit xy plaquette × xy rectangle-long-in-x coordinate at \(r=(0,-1,-3)\) as the [detached witness](FULL-FOLDED-SOURCE.md). It is a genuine detached null coordinate, although its group is return flagged. For the real source \(w=\mathcal C_3 b\), the preceding zero blocks give \(\langle e,Vw\rangle=\langle e,H w_J\rangle\), where \(w_J\) is the actual physical-near portion of the full source. The exact Haar evaluation of all relevant repeated-face and adjacent-pair terms gives
\[
\langle e,Vw\rangle
 =-\frac{416728166446999793140277173375349}
 {66795522141927561840642247916425297920}\ne0.
\]
The computation reconstructs the near source from all its stored invariant orbit coefficients. It uses an invariant reflected target sum and divides by eight to return the single unit rectangle coordinate; no stabilization multiplicity is lost. Since input \(w_J\) and output \(e\) are null vectors, the null projections can be omitted **only inside this pairing**, not in a general application of the operator.

This verifies that the physical compression relevant to the source is not identically zero. Its full rank/range, the shell image of the entire actual defect range, compact cancellation, and spectral weight at the target energy remain open. Neither the ghost-column noncontainment nor the single nonzero pairing implies a result about the on-shell trace.

## Reproduce

Run **python3 defect_block.py path.json**, using the exact JSON from **python3 full_folded_source.py --output path.json**. Python 3.12 and SymPy 1.14 were used. The matrix construction, rank reductions, source crosswalk, and Haar pairing are exact.
