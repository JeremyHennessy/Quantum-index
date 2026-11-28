# Exact leading fine-energy elimination for one retained class test

Use the two-adjacent-plaquette finite SU(2) fixture, with coarse loop \(Z\), neighbor \(W\), normalized Haar, and the unit quaternion electric metric. Put \(g_1=0\), \(t=g_2/c\), \(x=\operatorname{Re}Z=\cos\theta\), \(v=\operatorname{Re}W\), and \(d=\operatorname{Im}Z\cdot\operatorname{Im}W\). The actual vacuum law is \(\mu_t=\rho_t\,d\mathrm{Haar}\), \(\rho_t=\Omega_t^2\). The retained class test is \(u=2x\), normalized in Haar class \(L^2\). Consider the minimum of the **full** fine form over fine extensions with this exact retained conditional mean:
\[
 \mathcal E_{\rm elim}(u;t)=\inf_{\mathbb E_t[f\mid\theta]=u}
                  c\int|\nabla f|^2\,d\mu_t .
\]
In the convention above, the result is
\[
 \boxed{\mathcal E_{\rm elim}(u;t)=12c-\frac{c\,t^2}{936}+O(c\,t^4).}
\]
In particular the loss relative to the uneliminated extension is real, but smaller at this order than in the score-weighted Jensen bound. This concerns a fixed retained test, not the full fine gap or even the entire eliminated spectrum.

## Genuine full fine Poisson problem on a fixed space

At \(g_1=0\), the ground wavefunction depends only on \(W\), and the Haar pair \((Z,W)\) is independent. Thus the marginal of \(\theta\) is exactly Haar class for every \(t\), so that \(\mathbb E_{\mathrm{Haar}}[\rho_t\mid\theta]=1\). Write \(f=u+h\) with \(\mathbb E_t[h\mid\theta]=0\). The moving constraint reduces to a fixed one by multiplication:
\[
 h=\rho_t^{-1}k,\qquad k\in Q_0=\{k:\mathbb E_{\mathrm{Haar}}[k\mid\theta]=0\}.
\]
Indeed the conditional mean of \(\rho_t^{-1}k\) in the vacuum law equals the reference conditional mean of \(k\). On the compact configuration space \(\rho_t\) and \(\rho_t^{-1}\) are analytic in \(C^1\) for sufficiently small \(t\), by the isolated elliptic ground-state projection and Sobolev regularity. Multiplication is thus an analytic \(H^1\) bijection on the indicated form domains. This does not require differentiating a conditional projection at singular class endpoints.

The energy of the uneliminated pullback \(u\) is exactly \(12c\), since the coarse radial metric coefficient is 4 and its marginal is Haar. In the fixed subspace \(Q_0\cap H^1\), the variable part consists of the quadratic form
\[
 A_t[k]=c\int\rho_t\left|\nabla(\rho_t^{-1}k)\right|^2d\mathrm{Haar}
\]
and twice the linear pairing of \(k\) with \(L_t u\) against Haar, where \(L_t=-c(\Delta+\nabla\log\rho_t\cdot\nabla)\) is the full fine generator. Every \(k\in Q_0\) has global mean zero, so Haar Poincaré controls its \(L^2\) norm by the reference full fine energy. Thus \(A_t\) is a small analytic perturbation in the reference energy norm; the fixed-space Riesz inverse exists near zero and is analytic by a Neumann series.

The first ground-state coefficient is \(\Omega_t=1+t v/12+O(t^2)\), hence \(\log\rho_t=t v/6+O(t^2)\). For \(\Gamma\) the ambient gradient pairing, the shared link gives \(\Gamma(v,x)=-d\): the coarse holonomy varies by a left increment and the neighboring holonomy by an opposite right increment on that link. Since \(-\Delta u=12u\),
\[
 L_tu=12c\,u+\frac{ct}{3}d+O(ct^2).
\]
The first term pairs to zero with \(Q_0\) exactly; \(d\) is also conditionally centered under Haar by independent Haar of the two holonomies. At reference the coarse class pullbacks form a reducing subspace of the full Haar Laplacian, which restricts there to \(4\Delta_{\rm class}\); hence the complementary reference problem uses the genuine full inverse \(K^{-1}\), \(K=-\Delta\), on this source. Alternatively, the explicit centered solution below solves the constrained form equation directly. The leading loss is
\[
 \frac{c\,t^2}{9}\,\langle d,K^{-1}d\rangle_{\mathrm{Haar}}.
\]
An exclusive neighbor-link center flip changes \(t\) to \(-t\), preserves \(\theta,u\), and intertwines the full forms and the conditional constraints. Thus the analytic minimum is even and its error after the quadratic term is \(O(ct^4)\) for fixed \(c\).

## Exact two-mode solve

Put \(P=xv\). For each individual plaquette trace the electric eigenvalue is 12; their product gives \(\Delta P=-26P+2(P-d)\) by the common-link product rule. The six-link perimeter trace \(P-d\) has electric eigenvalue 18. Consequently
\[
 KP=24P+2d,\qquad Kd=6P+20d,
 \qquad K^{-1}d=-P/78+2d/39 .
\]
Both \(P,d\) have Haar conditional mean zero and are simultaneously conjugation invariant, so the leading solution is admissible also in the physical gauge-invariant fine subspace. Under the independent Haar pair they are orthogonal and \(\|P\|^2=1/16\), \(\|d\|^2=3/16\). This gives \(\langle d,K^{-1}d\rangle=1/104\). In particular the leading optimizing corrector is \(h=t(P/234-2d/117)+O(t^2)\) in the fine form norm.

## Strict comparison with score-weighted Jensen at \(\eta=0\)

For this same \(u\) the score-weighted form at \(\eta=0\) has leading loss \(c t^2 I/(18\pi)\), where
\[
 I=\int_0^\pi\frac{\sin^4\theta}{a+b\cot^2\theta}\,d\theta,qquad
 a=63/4,\quad b=360/47.
\]
To compare without rounding, rewrite the numerator as \(\sin^6\theta\) and the denominator as \(a\sin^2\theta+b\cos^2\theta\). With the probability measure proportional to \(\sin^6\theta\,d\theta\), its mean is \((7a+b)/8\). Since \(\int_0^\pi\sin^6\theta\,d\theta=5\pi/16\), convexity of the reciprocal gives
\[
 \frac I\pi\ge\frac{5}{2(7a+b)} >\frac1{52},
 \qquad \frac{I}{18\pi}>\frac1{936}.
\]
Thus the Jensen weighted loss is strictly greater at quadratic order. A fixed \(\eta>0\) only increases the loss at this order by its factor \((1-\eta)^{-1}\).

The lost horizontal conditional fluctuation can also be seen directly. On regular class levels put \(y=\sin\theta\), \(p=n\cdot\operatorname{Im}W\), so \(d=yp\). The unit radial field satisfies \(T_\theta P=-2yv+xp/2\) and \(T_\theta d=2xp-yv/2\). Hence on the leading corrector,
\[
 T_\theta(h/t)=-5xp/156+O(t)
\]
in Haar \(L^2\). The leading term is conditionally centered but nonzero. Its omitted conditional horizontal variance contributes \(c t^2\,25/389376\) at leading order, using \(\mathbb E_{\rm Haar}[x^2p^2]=1/16\). This is a concrete source of strictness at the true fine optimizer; the total comparison also includes the independent fiber optimization in the relaxed score criterion.

Run `python verify_fixed_test_elimination.py` for exact rational checks of the two-mode inverse, loss, integral comparison, and horizontal fluctuation. No large-volume, weak-bare, continuum, or full-gap estimate follows.
