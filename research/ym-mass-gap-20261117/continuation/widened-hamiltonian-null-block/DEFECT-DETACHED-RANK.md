# Exact detached defect rank forces the physical near block

Fixed spatial spacing; zero total momentum; odd quadratic coefficient only. See [the defect block](DEFECT-BLOCK.md) for definitions and the reference completion. This certifies a coordinate obstruction, not an on-shell result.

Let \(C=V_{D,G}\) be the ghost-to-detached matrix in the invariant form coordinates, and \(f_D\) the actual source in the same detached target form coordinates. Fraction-free Gaussian elimination over the rationals gives
\[
\operatorname{rank}(C)=180,\qquad
\operatorname{rank}[C\mid f_D]=181,
\]
with \(C\) of size \(348\times270\). This upgrades the two prior modular rank observations to exact ranks. In particular \(f_D\notin\operatorname{Ran} C\). Multiplication by the inverse target Gram would change neither rank nor membership.

Consequently the ghost/return Schur term \(CG_0^{-1}C^*\) cannot, on its own, generate the detached component of the actual source after ghost-output cancellation. Testing the full coordinate range requires the physical near columns \(L=H_{D,J}\) projected onto the quotient by \(\operatorname{Ran}C\); the projected source in that quotient is nonzero. A necessary condition is \([f_D]\in\operatorname{Ran}[L]\) in the quotient. It is not sufficient for the exact coordinate range, because the Schur image may be strictly smaller than \(\operatorname{Ran} C\). Nor does separation in coordinate space imply separation after applying the regular-sheet trace.

Reproduce with **python3 defect_detached_rank.py path.json**, using the SHA-pinned complete folded source produced by **python3 full_folded_source.py --output path.json**. The extra check uses exact fraction-free row reduction; no floating point or spectral integration is used.
