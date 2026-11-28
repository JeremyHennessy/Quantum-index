# Shifted ghost identity makes the unconstrained physical shell test blind

2026-11-28. Fixed spacing, zero total momentum, odd quadratic operator, eight-reflection invariant sector. This extends the [physical shell test](PHYSICAL-SHEET-TEST.md) and the [exact cross-block computation](PHYSICAL-CROSS-BLOCK.md).

Use the physical Hilbert metric and the same blocks: ghost reference space \(G\), flagged detached physical space \(D\), and near physical space \(J\). At \(E=-13/336\), set \(F=A_{GG}-E I_G\) and \(S=C F^{-1} C^*\), where \(C=-A_{DG}\). This is the **shifted reference** Schur product, not the Schur product for the unshifted projected defect.

Replay with **python3 shifted_shell_rank.py**. The stored stacked form is \((-A_{GG},C)\); shift its top by reversing the sign and adding \(13/336\) times the ghost Gram. In the two fields of orders 1009 and 1013 the ranks of \(F\), \(C\), and the symmetric form with blocks \((F,C^*; C,0)\) are respectively 270, 180, and 450. Denominators are invertible in both fields. The exact earlier rank of \(C\) is 180. Consequently \(F\) is exactly invertible and the rational upper bound \(270+180\) attains the modular lower bound; Schur elimination gives \(\operatorname{rank}S=180\) and \(\operatorname{Ran}S=\operatorname{Ran}C\). In form coordinates the Schur product uses the shifted form inverse directly between a rectangular form and its transpose. Converting the resulting detached covectors to vectors uses the same detached Gram on both sides of any range comparison.

Let \(T\) be the regular reference shell trace at \(E\). The reference identity \(T(A-E)=0\) applied to ghost columns gives \(T_G F=T_D C\), because the only nonzero detached ghost outputs are in \(D\), and the near summand is decoupled. Multiplying on the right by \(F^{-1}C^*\) gives \(T_G C^*=T_D S\). The nuisance space of the physical shell test without the near equation is therefore precisely \(T_D\operatorname{Ran}[C,L]\). The exact cross-block result \(\operatorname{rank}[C,L]=\operatorname{rank}[C,L,w_D]=201\) now implies zero distance on **every** regular reference patch. No shell sampling is needed for this negative result.

## Remaining test uses the near equation

Write \(x=v_D\), \(y=v_J\). A sufficient algebraic certificate that the **constrained** distance also vanishes on every patch is a solution to
\[
\begin{pmatrix}S&L\\L^*&K-E\end{pmatrix}
\binom{x}{y}=\binom{w_D}{w_J}.
\]
This is only a sufficient certificate. If it is inconsistent, the missing detached residual may still be in \(\ker T_D\); a positive distance must then be established on the shell, not by that coordinate inconsistency alone. Separately check \(\operatorname{Ran}[L^*,K-E]\) for the compact atom criterion of the preceding test. Near basis directions outside the active 129-column cross-block are not omitted unless shown irrelevant by a reducing decomposition of \(K\) including the full source.

The zero distance above refutes the simpler test as a way to certify spectral weight; it does **not** assert zero physical spectral weight or a vanishing physical scattering amplitude. The constrained test and all continuum claims remain open.
