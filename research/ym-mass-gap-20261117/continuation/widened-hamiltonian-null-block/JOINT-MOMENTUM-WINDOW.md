# A momentum-resolved shifted window at fixed lattice spacing

November 27, 2026 · Infinite spatial volume at **fixed lattice spacing**, pure SU(2), sufficiently small real magnetic coupling. The [three-loop probe](MOMENTUM-PROBE.md) has a joint energy and momentum spectral measure. Its conditional energy law has positive weight in the shifted $O(g^2)$ window for almost every momentum, with one lower bound independent of momentum and small nonzero coupling. In particular, that window meets the joint spectral support at zero momentum. This is a support statement, not a mass shell, isolated atom, unique energy, or continuum mass gap.

Set $a=13/336$, $O_g=b+gs$, and $Z=(15-\lambda)/g^2$. Use large even periodic tori, with the fixed probe and its enlargement embedded without wrap; the small-coupling gap on the full link Hilbert space and the local constants in the [derivative proof](UNIFORM-RESIDUAL.md) apply unchanged. Write $L=H-E_0$, $\Omega$ for the real vacuum and $\omega$ for its state, and use a tilde to center an operator in that state. The vacuum is translation invariant by simplicity and nonzero overlap with the free vacuum. The time and spatial translations therefore give a finite-torus joint spectral measure in $\widetilde O_g\Omega$; keep it unnormalized.

## Replace the rescaled residual vector by a bounded quasi-local insertion

Take a smooth real odd frequency function $f$, zero near zero, equal to $1/E$ for $|E|\ge\gamma$ where $\gamma$ is the common unrestricted vacuum gap. It has an integrable inverse Fourier kernel $k$ with finite moments of every order. For example subtract the function $E/(1+E^2)$, whose inverse transform is proportional to an exponentially decaying sign function. The smooth difference is $O(|E|^{-3})$ with integrable derivatives of every order, so Fourier inversion and integration by parts give the claim. Use the sign convention $f(E)=\int k(t)e^{itE}dt$.

Define $\mathcal R_g(M)=\int k(t)\alpha_t^g(M)dt$, using a bounded strong operator integral in finite volume. Since $\alpha_t^g(M)\Omega=e^{itL}M\Omega$, the vacuum vector of this operator is $L^{-1}(1-P_\Omega)M\Omega$. It is not necessary that $M$ preserve the gauge sector. The differentiated vacuum equation implies
$$
X\Omega/g=\mathcal R_g(XV)\Omega,qquad
F_X/g^2=\tfrac16\mathcal R_g\left(\sum_Y Y(XV)\mathcal R_g(YV)\right)\Omega.
$$
These identities apply at nonzero $g$; $F_X=X\Omega-(g/6)(XV)\Omega$. They use the reduced inverse because the equation for $F_X$ has an orthogonal right-hand side. The exact cancellation for $b_g$ now gives
$$
(L-15)\widetilde O_g\Omega/g^2=\widetilde D_g\Omega,\quad
D_g=-\tfrac16\sum_X(XO_g)\mathcal R_g\left(\sum_Y Y(XV)\mathcal R_g(YV)\right)
     -\tfrac16\sum_X(Xs)(XV).
$$
The sums have fixed finite incidence: only the probe support and the plaquettes incident to its relevant links occur. The operator $D_g$, with this same formula at zero coupling, is uniformly bounded.

For each $p>0$ it admits local approximants on radius $R$ with uniform error $O_p((1+R)^{-p})$. Here and below the statement holds on tori large relative to $R$, and in the limit. To make this explicit, approximate the inner filtered factors by evolving within a radius $R/4$ neighborhood and restrict $|t|$ to a small fixed multiple of $R$. By the unbounded-on-site Lieb–Robinson estimate and dynamical comparison ([Nachtergaele, Sims and Young, Theorems 3.1 and 3.4–3.5](https://arxiv.org/pdf/1810.02428)), the restricted dynamics differs in norm on the truncated time interval by a support/boundary polynomial times $e^{-cR}$. The omitted kernel tail is $O_p(R^{-p})$. Replace the inner filtered factors by these approximants, using $\|\mathcal R_g\|\le\|k\|_1$, and do the same outer comparison across the remaining distance to the radius $R$ boundary. Products with the fixed local multipliers do not change the claim. The same argument proves norm convergence of the filtered operators embedded in the thermodynamic algebra, by first keeping an arbitrary fixed radius and then sending it to infinity. For any fixed radius, the restricted Hamiltonian changes from the free Hamiltonian by bounded $gV$, and finite-time Duhamel gives norm continuity of the evolved bounded operator in $g$. Dominated integration and the uniform approximation therefore give norm continuity of $D_g$ at zero, without invoking norm continuity in time of unbounded-site evolution on the full algebra.

## Define the joint limit and its moment densities

Write $\tau_z$ for spatial translation. For fixed real time $t$ and fixed $z\in\mathbb Z^3$ the joint characteristic coefficients on the tori are the ground correlations $\omega(\widetilde O_g^*\alpha_t^g(\tau_z\widetilde O_g))$, with the corresponding choice of momentum sign. Norm convergence of the local dynamics follows by restricting it first to a fixed inner neighborhood and applying the same Lieb–Robinson comparison, so a distant periodic seam has no effect. The ground expectations converge by the rooted expansion of [Yarotsky, Section 2](https://arxiv.org/pdf/math-ph/0412040); any fixed rooted cluster eventually sees the same interactions, with the summable bound unchanged. It extends to quasi-local inputs by norm approximation. The uniform total mass and second energy moment from the displayed residual, together with compactness of the momentum torus, give tightness. Every weakly convergent subsequence has the same characteristic coefficients on $\mathbb R\times\mathbb Z^3$, so the weak limit $\nu_g$ is unique. This construction does not require postulating a domain for a differentiated ground vector in infinite volume.

The three spatial covariance sequences needed in the limiting state are those of $\widetilde O_g$ with itself, $\widetilde O_g$ with $-\widetilde D_g$, and $\widetilde D_g$ with itself, in that order. They have a uniform summable spatial majorant. Indeed for large $d=|z|$ approximate the quasi-local factors at radius $r=\lfloor d^{1/4}\rfloor$; the approximation error is $O_p(r^{-p})$ for arbitrary $p$. For the local approximants, Yarotsky's exponential clustering bound (Theorem 1, part 3) has a possible prefactor exponential only in the sizes of the two supports, $O(r^3)$, dominated by exponential decay in $d-2r$. The constants may be chosen common on a sufficiently small interval from the same small-activity estimate. Ground-state continuity on fixed bounded local observables follows from that expansion; together with the uniform approximants it gives continuity at $g=0$ for each of the covariance coefficients.

Consequently their Fourier series converge absolutely and uniformly in momentum, with continuous real densities denoted $n_g(k),m_g(k),d_g(k)$ in order, relative to normalized momentum Haar measure $dk$. More precisely, as momentum measures they are
$$
\int\nu_g(d\lambda,dk)=n_g(k)dk,\qquad
\int Z\,\nu_g(d\lambda,dk)=m_g(k)dk,\qquad
\int Z^2\,\nu_g(d\lambda,dk)\le d_g(k)dk .
$$
The mass identity follows from the joint characteristic coefficients at time zero. For the first moment in finite volume the residual identity gives exactly the $O_g,-D_g$ cross covariance. Passing to the limit is justified by uniform integrability at fixed $g\ne0$ from the total second moment. For the second moment the finite-volume identity is the $D_g,D_g$ covariance. Their momentum marginals converge weakly by the fixed-$z$ norm and state convergence. Multiply by any continuous nonnegative function of momentum and pass using bounded continuous energy truncations and monotone convergence: this gives the stated inequality, all that the argument needs. It avoids assuming uniform integrability of the squared energy moment. The sequences giving real densities have Hermitian Fourier symmetry because of these exact finite-volume identities.

## Identify the sign uniformly in momentum

At $g=0$, $n_0(k)=3$ by the translate Haar orthogonality. The operator $D_0$ uses only a finite neighborhood, as the free dynamics cannot enlarge a support. Thus, to evaluate the $g\to0$ limit of each $O,-D$ covariance, evaluate at zero in any sufficiently padded torus that contains the two observable neighborhoods. At fixed torus the canonical transported centered dressed vector has leading term $b$ and no linear term within the free energy-15 band. Its complementary component is $O(g^2)$ in the free graph norm; this is the same dressing identity for $b$ and every fixed translate. Each leading vector lies in the first-order kernel. At each fixed displacement take the torus large enough to embed both supports and their finite two-insertion neighborhoods without wraps. The free spectral projections and reduced resolvent on these cylindrical states are unchanged by padding with spin-zero links, and disconnected-pair and remote-vacuum terms cancel exactly as in the open-box coefficient. Thus the periodic matrix element is the checked open-box one. No embedding uniform in displacement is used; the fixed-displacement calculation is followed by the summable majorant. It follows by the fixed-volume quadratic expansion, or its polarization for pairs of probes, that
$$
\langle b, -D_0^{(z)}\Omega_0\rangle
=-\langle b,B_{\rm rel}\tau_z b\rangle=(13/112)\delta_{z0}.
$$
Centering causes no change in this calculation since $b$ is Haar-mean zero. This exact coefficient was [replayed separately](MOMENTUM-PROBE.md). Dominated summation of the covariance sequences therefore gives $n_g\to3$ and $m_g\to13/112=3a$ uniformly in momentum, and $sup_{g,k}d_g(k)<\infty$.

On a smaller interval let $n_g\ge1$ and $m_g/n_g\ge a/2$. Disintegrate $\nu_g$ relative to its momentum marginal $n_g(k)dk$ and denote its conditional probability by $\nu_{g,k}$. For almost every $k$ one has $\mathbb E_{g,k}Z\ge a/2$ and $\mathbb E_{g,k}Z^2\le C$ for a common $C\ge1$. Taking $K=8C/a$, the same truncated first-moment and Cauchy–Schwarz argument as the [uniform window proof](UNIFORM-RESIDUAL.md) yields
$$
\nu_{g,k}([15-Kg^2,15-(a/4)g^2])\ge a^2/(64C).
$$
In particular all open momentum neighborhoods of zero carry positive joint mass with energy in this fixed closed window. The window is compact, so shrinking the neighborhoods and taking a limit puts at least one point of that window at $k=0$ in the joint spectral support. This does not define a conditional probability at the single momentum $0$ and is not a claim of nonzero spectral mass on a momentum singleton.
