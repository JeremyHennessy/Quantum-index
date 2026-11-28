# A fixed bias opens a finite gap in the actual localized doublet

Use the equal-tag cubic-scale graph with fixed exclusive lengths and nonzero \(\delta=\kappa_1\kappa_2/12\), fast lengths \(r\), and \(B=r^{1/3}\). Retain the same physical gauge-invariant subspace obtained by internal path gauge fixing. The two slow gauge-invariant traces are \(x,y\). Add the fixed real dimensionless multiplication bias \(-h x\) to the actual Hamiltonian (that is, \(-chx\) in physical units, with fixed electric factor \(c>0\)). The physical first excitation gap then satisfies
\[
 \boxed{\quad E_1^{(h)}(r)-E_0^{(h)}(r)\longrightarrow 2c|h| .\quad}
\]
The statement concerns fixed \(h\) and this finite graph skeleton as its two paths are subdivided. It is not a uniform simultaneous small-bias estimate or a continuum claim.

## The actual unbiased doublet and its response to \(x\)

For convenience center all dimensionless energies by \(B(\alpha+|\delta|)\), a shift that cancels from gaps, and write \(e_0,e_1,e_2\) for the first three ordered unbiased physical eigenvalues in these units. Two prior actual estimates are used. First, the quadrant oscillator comparison gives \(e_2-e_0\ge d_0\sqrt B\) for some \(d_0>0\) at large \(r\): the oscillator ground appears twice, once from each well, and the next oscillator level is strictly larger. Second, the actual odd trial on the stretched-exponentially small barrier gives a normalized odd \(u=\eta\Psi/\|\eta\Psi\|\) with
\[
 \langle u,(\widetilde H_r-e_0)u\rangle
             \le C B^{-1/2}e^{-a\sqrt B}.
\]
Here \(\widetilde H_r\) is the actual dimensionless max-centered operator, \(\Psi\) is its unit positive even ground, and \(\eta=h_{\rm cut}(s)\) with \(s=x+\operatorname{sgn}(\delta)y\), a smooth odd cutoff equal to \(\operatorname{sgn}s\) on \(|s|\ge1\). Both evenness of \(\Psi\) and oddness of this trial are for the exact actual symmetry \(U_3,U_4\mapsto-U_3,-U_4\), which preserves both marked word potentials and flips \(x,y\).

Since \(e_1-e_0\) is bounded by this trial and \(e_2-e_0\) is large, the actual first excited eigenvalue \(e_1\) is simple for sufficiently large \(r\). If \(P_{\ge2}\) is the physical projection above the doublet, the spectral theorem gives
\[
 \|P_{\ge2}u\|^2
  \le \frac{\langle u,(\widetilde H_r-e_0)u\rangle}{e_2-e_0}
  =O(B^{-1}e^{-a\sqrt B}).
\]
Thus the first excited eigenfunction is odd (it has nonzero overlap with the odd \(u\)). Choose a real unit \(\Phi_1\) with its sign giving positive overlap; then \(\|\Phi_1-u\|\to0\), with the square root of the displayed bound. Put \(\Phi_0=\Psi\). The two diagonal matrix elements of \(x\) in this basis are exactly zero by oddness of \(x\) under the symmetry and definite parity of each mode.

The off-diagonal element \(d_r=\langle\Phi_0,x\Phi_1\rangle\) tends to 1. To prove it using the **actual** ground distribution, the uniform frozen-fast form estimate gives
\[
 \widetilde H_r\ge L+B U-Cr^{-1/3},\quad
 U=|\delta|-\delta xy,\qquad
 \int U\Psi^2\,d\mathrm{Haar}=O(B^{-1/2}),
\]
where the second bound uses \(L\ge0\) and \(e_0=O(\sqrt B)\). Thus \(1-|x|\le U/|\delta|\) has ground expectation \(O(B^{-1/2})\). On \(|s|\ge1\), \(x\) has the same sign as \(s\) unless it is zero, since \(|y|\le1\); hence \(x\eta=|x|\) there. On the remaining central barrier the actual ground mass is stretched-exponentially small. Therefore
\[
 \langle\Psi,x\eta\Psi\rangle=1+O(B^{-1/2}),\qquad
 \|\eta\Psi\|=1+o(1).
\]
Combining this with \(\Phi_1\) close to the normalized odd trial proves \(d_r=1+O(B^{-1/2})\). All these matrix elements are in the actual full physical Hilbert space, not computed from slow approximate eigenvectors.

## Bounded bias and the actual high complement

Let \(P_{\rm low}\) be the unbiased physical projection onto \(\Phi_0,\Phi_1\), \(Q_{\rm high}=1-P_{\rm low}\). The biased operator restricted as a form to the low span has the exact matrix
\[
 C_h=\begin{pmatrix} e_0&-h d_r\\-h d_r&e_1\end{pmatrix}.
\]
Its level separation is \(2\sqrt{(e_1-e_0)^2/4+h^2 d_r^2}\to2|h|\). We must compare these compressed values with the actual first two biased eigenvalues despite coupling to the high complement.

Since \(\|x\|_\infty\le1\), min–max first puts the two actual shifted low levels within \(|h|\) of their corresponding unbiased levels; the third stays at least \(e_2-|h|\). Consider any real spectral parameter \(z\) in a fixed \(O(1)\) neighborhood of \(e_0\) covering these ranges and the compressed eigenvalues. On the high complement the operator \(Q_{\rm high}(\widetilde H_r-hx-z)Q_{\rm high}\) is positive with inverse norm at most \(C/\sqrt B\), because \(e_2-e_0\ge d_0\sqrt B\). The only off-diagonal block is \(-hP_{\rm low}xQ_{\rm high}\), of norm at most \(|h|\). Completing the high square thus reduces the exact spectral count below \(z\) in this window to the \(2\times2\) Schur matrix \(C_h-z\) minus a positive term of norm at most \(C h^2/\sqrt B\). Comparing its negative index at thresholds above and below the two compressed eigenvalues proves that the actual two low eigenvalues differ from them by at most \(O(h^2/\sqrt B)\). This works also when \(h=0\), where the exact unbiased doublet limit is zero.

Together with the unbiased exponentially small first separation and \(d_r\to1\), this proves the displayed biased limit after restoration of \(c\). For any fixed nonzero \(h\) the estimates also give an \(O_h(cB^{-1/2})\) error from the compressed gap and the high-block correction. No claim of an exact tunneling asymptotic, growing-graph result, or continuum gap is made.
