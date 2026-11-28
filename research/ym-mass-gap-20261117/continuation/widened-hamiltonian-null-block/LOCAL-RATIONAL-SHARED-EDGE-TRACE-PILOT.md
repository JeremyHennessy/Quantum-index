# Rational residual pilot for one interacting antipodal trace comparison

On the exact shared-edge two-square graph, at equal couplings \(t=1/128\), the normalized **actual** ground-state trace at \(x=0\) is larger than at \(x=1/2\) on the raw antipodal curve \((x,-x,1-x^2)\). The same ordering holds for the positive vacuum density and its conditional normalization. This is a two-point finite-graph result at one small nonzero coupling, not a monotonicity, large-coupling or continuum assertion.

## Replay

Run \(\texttt{python3 verify\_rational\_trace\_pilot.py}\) in this directory with SymPy. Every certificate comparison is rational. Square-root norm upper bounds are computed by integer square root on a fixed rational grid followed by a checked upward adjustment; the presentation ceilings and floors use integer division. In particular:
\[
\begin{array}{c|r|r|c}
\text{degree}&\lceil 10^{16}\epsilon_\infty\rceil&
 \lfloor 10^{16}(\widetilde\phi(0)-\widetilde\phi(1/2))\rfloor
 &\text{true sign certified}\\
2&1108510647&183398907&\text{no}\\
4&181&183398863&\text{yes}
\end{array}
\]
Degree four in fact encloses the difference of the **Haar-mean-one** true ground traces between \(183398501/10^{16}\) and \(183399226/10^{16}\). Both individual exact trace values are certified positive by the trial values minus the absolute error. The degree two trial gives the right analytical coefficient but does not itself pass the residual sign test.

## Inputs and exact residual

Use the verified orbit electric polynomial operator from the joint-conjugacy note. Pair Haar integrals use its beta moment family on the Gram domain, evaluated by the half-integer beta recurrences after canceling \(\pi\); regressions include the exact moments \(\mathbb E[d^2]=3/16,\ \mathbb E[x^2y^2d^2]=1/192\). Write \(H(t)=K-t(x+y)\), and set
\[
 u_0=1,\quad \int u_n=0\ (n>0),\quad
 E_n=-\int(x+y)u_{n-1},\quad
 K u_n=(x+y)u_{n-1}+\sum_{j=1}^n E_j u_{n-j}.
\]
Solve each Poisson equation on monomials with weight \(\deg x=\deg y=1,\ \deg d=2\) up to \(n\), adding the Haar-mean projection to \(K\) to make the linear solve nonsingular. The script checks the resulting full polynomial equation, not only projected coefficients, and checks the known linear term and the second coefficient of the log ground on the antipodal curve. For degree \(N\), set \(\widetilde\phi=\sum_{n=0}^N t^n u_n\), \(\widetilde E=\sum_{n=1}^N t^n E_n\), and evaluate the complete residual \(r=(H-\widetilde E)\widetilde\phi\) in exact polynomial arithmetic, including terms beyond degree \(N\).

The unshared product Casimir \(\Lambda=-\Delta_A-\Delta_B\) is evaluated on invariant polynomials from its coefficients
\[
 \Lambda x=3x,\quad \Lambda y=3y,\quad \Lambda d=6d,\quad
 \Gamma_\Lambda(x,x)=1-x^2,\quad \Gamma_\Lambda(y,y)=1-y^2,
 \quad\Gamma_\Lambda(x,y)=0,
\]
\[
 \Gamma_\Lambda(x,d)=-xd,\quad \Gamma_\Lambda(y,d)=-yd,\quad
 \Gamma_\Lambda(d,d)=2-x^2-y^2-2d^2 .
\]
Here \(\Gamma_\Lambda\) means the gradient matrix of the product round metric, with the second-order contribution carrying a minus sign in the positive Casimir \(\Lambda\). For instance pure derivatives of \(d\) have squared norms \((1-y^2)-d^2\) and \((1-x^2)-d^2\). These formulas compute \(S_j(r),S_j(\widetilde\phi)\) for the Sobolev recursion without a numerical change of basis.

## Isolation and sign-normalized absolute error

Since \(K\ge3\Lambda\), on the space orthogonal to constants the free kinetic energy is at least 9, even before imposing invariance. Min--max with the bounded potential gives \(E_1(t)\ge9-2t\) and \(-2t\le E_0(t)\le0\). Thus \(\gamma=9-2t-|\widetilde E|\) is a certified lower bound on the distance from \(\widetilde E\) to the nonground spectrum; the computed ratio \(\|r\|_2/\gamma\) is below \(1/2\).

For the mean-one trial write \(\widetilde\phi=A\phi+q\), with \(\|\phi\|_2=1,\ \phi>0,\ q\perp\phi\), and \(m=\int\phi\). The ground energy inequality gives \(9(1-m^2)\le2t\), so \(m^2\ge1/2\). Projection of the full residual gives \(\|q\|_2\le\|r\|_2/\gamma\), hence \(A=(1-\int q)/m\ge1/2\) and \(|E_0-\widetilde E|\le2\|r\|_2\). The true mean-one ground is \(\phi/m\), and the error \(d_0=q-(\int q)\phi/m\) satisfies \(\|d_0\|_2\le2\|r\|_2/\gamma\). These are rational bounds; no approximate Hilbert normalization or overlap is assumed.

Use the companion certified trace workflow: from the exact error equation and the finite Casimir bandwidth of each trace multiplier,
\[
 S_{j+1}(d_0)\le
 (1+2t+4t\,4^j)S_j(d_0)
    +2\|r\|_2 S_j(\widetilde\phi)+S_j(r),\qquad
 S_j(f)=\|(1+\Lambda)^j f\|_2 .
\]
The explicit point-evaluation bound is \(\|d_0\|_\infty\le\sqrt{48}S_2(d_0)\le7S_2(d_0)\). Each squared norm is an exact Haar moment of a polynomial square; the code uses upper enclosures at every step. The final comparison subtracts this certified point error at both locations. It verifies an actual trace ordering at \(t=1/128\), importantly without treating finite-order Taylor agreement alone as a certificate.
