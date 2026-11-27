# An exact obstruction to interchanging the small-coupling and volume limits

November 27, 2026 · Abstract bounded-operator example. **This is not a counterexample for the Wilson Hamiltonian.** It identifies a missing assumption: a uniform second-moment bound and an exact first-order null probe at every finite volume do not identify the small-coupling law of the infinite-volume probe.

Fix $a,b>0$ and $0<\rho<1$. On $\mathcal H=\mathbb Cq\oplus\ell^2(\mathbb Z)\oplus\ell^2(\mathbb Z)$, with $q$ a unit vector, define $(Af)_n=f_{n+1}-r_nf_n$, where $r_n=\rho$ for $n\ge0$ and $r_n=1/\rho$ for $n<0$. This is a first-neighbor operator with one interface at the origin, held far from either end of the finite boxes. Define
$$
T=0\oplus\begin{pmatrix}0&A^*\\A&0\end{pmatrix},\qquad
B=-a|q\rangle\langle q|+b(|q\rangle\langle e|+|e\rangle\langle q|),
$$
where $e$ is the origin basis vector of the first chain. On $\mathcal H_N$, truncate both chains to $[-N,N]$, with $P_N$ the resulting orthogonal projection, and set $T_N=P_NTP_N$ and $B_N=P_NBP_N$ restricted to $\mathcal H_N$. View $15I+gT_N+g^2B_N$ as the shifted observable energy operator. It is positive on a common small-coupling range by the common norms $\|T_N\|\le1+1/\rho$, $\|B_N\|\le a+b$; a decoupled vacuum of energy zero can be adjoined if desired. Define $\nu_{N,g}$ as the spectral law of $T_N/g+B_N$ in $q$ for $g\ne0$.

The involution $J=\operatorname{diag}(1,I,-I)$ fixes $q$ and sends $T$ to $-T$, while preserving $B$. The scaled laws are consequently even in $g$, as in the dressed-probe setup. The probe is an exact zero mode of every $T_N$ and of $T$. Its scaled moments are **exact**:
$$
\int x\,d\nu_{N,g}(x)=-a,\qquad \int x^2\,d\nu_{N,g}(x)=a^2+b^2 .
$$
Indeed $(T_N/g+B_N)q=Bq=-aq+be$. The infinite model satisfies the same identities. This is the analogue of the [uniform residual](UNIFORM-RESIDUAL.md) and negative mean; it does not imply moment convergence.

## Small coupling before infinite volume

For each finite $N$, $A_N$ is triangular with nonzero diagonal entries $-r_n$, so it is invertible. The kernel of $T_N$ is exactly $\mathbb Cq$. The spectral projection of $T_N+gB_N$ onto the continuation of the isolated zero eigenspace is analytic for sufficiently small $g$ at this fixed $N$. The projected eigenvalue is $-ag+O_N(g^2)$, and the projection's weight in $q$ tends to one. Thus $\nu_{N,g}\Rightarrow\delta_{-a}$ as $g\to0$, and the subsequent $N\to\infty$ limit is still $\delta_{-a}$.

## Infinite volume before small coupling

For each fixed $g\ne0$, the zero-extended $T_N/g+B_N$ converges strongly to $T/g+B$ and is uniformly bounded in $N$. Polynomial approximation on their common compact spectral interval gives $\nu_{N,g}\Rightarrow\nu_{\infty,g}$, the law of $T/g+B$ in $q$.

Now $A$ has kernel spanned by the unit vector $h$ with $h_n=c\rho^{|n|}$ and $c=\sqrt{(1-\rho^2)/(1+\rho^2)}$. To solve $Af=u$, set $f_0=0$ and use
$
f_n=\sum_{k=0}^{n-1}\rho^{n-1-k}u_k\quad(n>0),\qquad
f_n=-\sum_{k=n}^{-1}\rho^{k-n+1}u_k\quad(n<0).
$
The two half-line geometric convolutions act on disjoint halves of $u$ and have $\ell^2$ norm at most $1/(1-\rho)$ by the $\ell^1$ kernel bound. This gives a bounded right inverse $R$ of $A$. Since $R^*A^*=I$, $\|A^*u\|\ge(1-\rho)\|u\|$. The polar decomposition then gives $A^*A\ge(1-\rho)^2I$ on $(\ker A)^\perp$. In particular the zero eigenspace of $T$ is isolated and is spanned by $q$ and $(h,0)$ in the two chains.

Let $P$ project onto this two-dimensional eigenspace. The Riesz projection $P(g)$ near zero for $T+gB$ is norm analytic at $0$. The canonical polar isometry from $P$ to $P(g)$ has value the inclusion at zero. In its coordinates the compressed operator is $gPBP+O(g^2)$: the constant and both linear terms contributed by $T$ vanish since $TP=PT=0$. The complementary spectral weight in $q$ tends to zero. After dividing by $g$, the weak limit therefore is the spectral law in $q$ of
$$
PBP=\begin{pmatrix}-a&bc\\bc&0\end{pmatrix}.
$$
It has two distinct atoms, each with strictly positive weight, since $bc\ne0$ and $q$ is not an eigenvector. It is not $\delta_{-a}$.

## What specifically goes wrong and what still needs proof

If $h_N$ is the normalized truncation of $h$ in the first chain, then $\|A_N h_N\|\le\rho^{N+1}$, so finite boxes have near-zero first-order slopes although $h_N$ lies outside the exact kernel of each $T_N$. Their eigenvalues must be retained whenever they are small on the scale $|g|$. Discarding them by projecting onto the finite-box exact kernel before taking volume loses genuine limiting weight. In particular $P_{\ker T_N}$ does not converge strongly to $P_{\ker T}$ on the vector $e$.

For the actual gauge problem, this example does not establish such a missed mode. A proof of commuting limits would need Wilson-specific control of these small first-order slopes and coupling into them, or a direct volume-uniform reduced-resolvent/two-parameter argument. The [fixed-spacing infinite-volume window](THERMODYNAMIC-SPECTRAL-WINDOW.md) is unaffected.
