# A physical-resolvent one-sheet test

Fixed spatial spacing, zero total momentum, odd quadratic coefficient only. Use the decoupled zero-dummy completion from [the exact defect blocks](DEFECT-BLOCK.md). Write \(G\) for dummy reference coordinates, \(D\) for the flagged physical detached coordinates, and \(J\) for the physical near subspace. There are also clear detached directions whose defect columns and rows vanish. Let \(A\) be the reference with zero near summand, \(H\) the physical operator with its decoupled dummy completion, and \(V=H-A\). Write \(C=V_{D,G}\), \(L=H_{D,J}\), and \(K=H_{J,J}\). All maps and adjoints below are in the physical Hilbert metric; stored rational forms must be converted with the appropriate Gram matrices.

For the real source \(w=(0,w_D,w_J)\), supported on these three blocks, set \(v=(H-E-i\eta)^{-1}w\) with \(E=-13/336\) and \(\eta>0\). The physical resolvent has \(v_G=0\) identically, and \(v=(A-E-i\eta)^{-1}u\) with \(u=w-Vv\). From the block identities,
\[
u_G=-C^*v_D,\qquad u_D=w_D-Lv_J .
\]
The remaining reference-coordinate inputs are zero because the source is flagged and the defect kills clear coordinates. The near component of \(u\) contributes no regular-sheet trace. Thus, for the regular patch trace \(T=T_0\), its nuisance space can be reduced to \(T_G\operatorname{Ran}C^*+T_D\operatorname{Ran}L\). There are no dummy input columns or dummy Schur inverse in this resolvent test. The dummy trace rank is at most [the exact rank 180 of \(C\)](DEFECT-DETACHED-RANK.md). A positive distance from \(T_Dw_D\) to the reduced space gives the same \(\pi d^2\) imaginary-resolvent liminf bound as [the original patch test](ONE-SHEET-RESOLVENT-BOUND.md).

## Constrain the nuisance using the near equation

Define \(M=[L^*,K-E]\), \(B=[T_G C^*,T_D L]\), and \(y_\eta=(v_D,v_J)\). The exact near equation is \(M y_\eta=w_J+i\eta v_J\). If \(w_J\notin\operatorname{Ran}M\), its orthogonal projection onto \(\ker M^*=\ker L\cap\ker(K-E)\) is nonzero. Every such near vector extended by zero is a compact eigenvector of \(H\) at \(E\): the physical detached output is \(L\) times this vector and hence zero, the clear and dummy outputs vanish, and the near block gives \(E\) times the input. The squared norm of the projection of \(w_J\) is a lower bound on the weight of an atom of \(w\) at \(E\).

Otherwise let
\[
d=\operatorname{dist}\left(T_Dw_D,\,B\{y:My=w_J\}\right).
\]
The image is a nonempty finite-dimensional closed affine set. Since \(v_J\) then belongs to \(\operatorname{Ran}M\) by the near equation, \(\tilde y_\eta=y_\eta-i\eta M^+v_J\) obeys the exact affine constraint, with \(M^+\) the physical Moore–Penrose inverse. Thus \(\|T_0u\|\ge d-\eta\|BM^+\|\|v_J\|\). Let \(a\) bound \(\|T_s-T_0\|/|s|\) on the same regular chart, \(R>0\), \(I_R=2\arctan R\), and \(X=\sqrt{\eta}\|v\|\). On \(|s|\le R\eta\) the Poisson-weighted triangle inequality and \(\|u\|\le\|w\|+\|V\|X/\sqrt{\eta}\) give
\[
X\ge \frac{\sqrt{I_R}[d-aR\eta\|w\|]_+}
{1+\sqrt{I_R}(aR\|V\|+\|BM^+\|)\sqrt{\eta}} .
\]
Sending \(\eta\downarrow0\) with \(R\) fixed and then \(R\to\infty\) yields \(\liminf\Im\langle w,(H-E-i\eta)^{-1}w\rangle\ge\pi d^2\). No invertibility of \(K-E\) is required; no claim of an absolutely continuous density follows from this liminf alone.

**Finite certificate.** Sample regular-patch cofactor rows where the chart cutoff is nonzero. If the exact system stacking \(My=w_J\) and the sampled \(By=T_Dw_D\) equations is inconsistent, then the affine trace equation in the chart is inconsistent (continuous functions equal almost everywhere agree at every interior sample). Since the affine image is closed, this certifies \(d>0\). A consistent sample system is inconclusive. If \(K-E\) is invertible, elimination gives target \(T_D(w_D-L(K-E)^{-1}w_J)\) and nuisance columns \(T_G C^*-T_D L(K-E)^{-1}L^*\). Do not substitute a coordinate-range test for these shell tests.

Neither distance, the near rank condition, nor a spectral weight has been certified for this source. The simpler test requires the actual physical \(L\); the constrained test requires \(K\) as well.