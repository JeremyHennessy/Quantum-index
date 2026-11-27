# Finite trial discovery at the three-square Wilson coupling

November 27, 2026 UTC. Here b₁=b₂=b₃=.01 and temporal β=.8 on the shared links, 1 on the other links, in the fixed [three-square anisotropic geometry](../three-square-perimeter-isolation/README.md). These are floating-point **trial vectors only**, not yet an overlap certificate for the exact operator.

For the retained kinetic diagonal K_p, form B=M_p K_p^(1/2), where M_p is the chosen degree Taylor polynomial of exp((b/2)ΣF_i). Every intermediate Taylor power is evaluated on expanded support from the [exact single-plaquette actions](../three-square-exact-actions/README.md). The output basis is not clipped back to the initial kinetic cutoff. The Gram matrix BᵀB is small; after diagonalizing it, a trial eigenvector of B Bᵀ is Bv/√λ. Apply the left-face multiplier to evaluate the transition. Use a consistent sign chosen by the vacuum or perimeter reference component. Restricting the insertion on the common support for the inner product does not truncate the already-constructed vectors.

| Kinetic weight cutoff / Taylor degree | Initial / expanded basis | Phase-fixed trial amplitude |
| --- | --- | --- |
| 12 / 4 | 36 / 564 | 9.1470123152×10⁻¹⁰ |
| 18 / 5 | 130 / 2,290 | 9.1470071047×10⁻¹⁰ |

Agreement is about 5.21×10⁻¹⁶ in absolute amplitude. Both perimeter trial eigenvalues are about 1.10791162468×10⁻⁵. With b=0 and Taylor degree 0, the computed transition is exactly zero, vacuum energy is 1, and the perimeter energy is a₁⁸. The tiny floating-point residuals in the JSON receipts are for each constructed approximant only; they do not imply these errors for the exact operator or justify interpreting the visible sign as proved.

Replay via `OPENBLAS_NUM_THREADS=1 python3 trial.py --cutoff 12 --degree 4`, or `--cutoff 18 --degree 5`. Checked with NumPy 2.3.5, SciPy 1.17.0, SymPy 1.14.0. Optional `--output` emits local trial vectors. Do not use an uncertified floating-point value for a mass-gap assertion.

Next: cutoff 22, degree 7 or a separately justified alternative; input vectors treated as untrusted approximants. The [rational error budget](../three-square-residual-budget/README.md) requires independently verified full residuals and the actual overlap enclosure. No extrapolation to 4D or larger volumes follows.
