# A gauge-invariant obstruction to iterating whole-slice positivity

**November 26, 2026 UTC. SU(2), exact finite Wilson kernel; not a bound on the spectrum.**

The [matched trace packet](2026-11-26-matched-wilson-trace-reflection.md) needs a uniform **local** infrared estimate in physical time. One possible shortcut would be to iterate the projective contraction supplied by strict positivity of a complete spatial-slice transfer kernel. This note rules out that particular estimate at the running coupling. The obstruction already occurs after gauge projection and does not depend on crude choices for the spatial-action prefactor.

## The kernel and its projective metric

On a cubic spatial torus with side L≥2 in lattice sites, let \(\mathsf V=L^3\) and \(M=3\mathsf V\). For group elements in the defining representation write \(\tau=\tfrac12\operatorname{ReTr}\). On spatial link configurations X,Y, define
\[
 K_\beta(X,Y)
 =\int\exp\!\left(\beta\sum_{\ell=(x,y)}
          \tau\big(X_\ell^{-1}g_xY_\ell g_y^{-1}\big)\right)
          \prod_x dg_x.
\]
This is the temporal-plaquette kernel with between-slice gauge transport integrated out. In the [pinned Wilson convention](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/PublicWilson.lean#L20-L32), the additive constant in the action is immaterial. Splitting same-slice spatial plaquette weights equally between adjacent steps gives the transfer kernel \(T_\beta(X,Y)=S_\beta(X)K_\beta(X,Y)S_\beta(Y)\), up to a positive scalar, with S strictly positive. This is the usual positive Wilson transfer construction, see [Lüscher](https://doi.org/10.1007/BF01614090) and [Osterwalder–Seiler](https://doi.org/10.1016/0003-4916(78)90039-8). The displayed formula also follows directly by writing each temporal plaquette with its two spatial links and its two temporal transports. K is symmetric and separately invariant under gauge transformation of either slice by change of integration variables, so it descends to the gauge orbit space. Haar pushed to that compact quotient has full support.

All four-point kernel cross ratios are unchanged by multiplying rows or columns by positive factors. In particular neither the factors S nor the positive ground-state transform improve this diagnostic. The Hilbert projective diameter \(\mathcal D(T)\) is at least
\[
 \log\frac{K_\beta(X,X)K_\beta(Y,Y)}
              {K_\beta(X,Y)K_\beta(Y,X)}.
\]
For example approximate point masses at the two input orbits by strictly positive continuous functions and compare the ratios of their outputs at the two output orbits; continuity and full support justify the limit. The best global Hilbert-metric one-step coefficient is \(\vartheta(T)=\tanh(\mathcal D(T)/4)\), by the exact [Birkhoff contraction theorem](https://doi.org/10.1090/S0002-9947-1957-0087058-6).

## Two actual gauge orbits with a large projective diameter

Let X be the all-identity field. Pack edge-disjoint xy plaquettes with lower corners \((2i,2j,2k)\) for integers \(0\le i,j,k<\lfloor L/2\rfloor\). There are at least \(\mathsf V/27\), and no chosen plaquette wraps, even for odd L. Define Y on the same spatial torus by putting −I on one fixed edge in each chosen plaquette and I on all other edges. The chosen plaquettes have holonomy −I under every gauge transformation, so neither assignment of temporal transport nor passage to gauge orbits can remove this distinction.

Equip SU(2) with the bi-invariant angular metric \(\alpha(U)=\arccos\tau(U)\). The four transformed links on a chosen plaquette, with the prescribed inverses, form a product −I. The triangle inequality gives sum of angles at least π, so one of them has angle at least π/4. Thus every off-diagonal integrand loses at least \(\delta=1-1/\sqrt2\) from its maximal trace sum per chosen plaquette. No link is counted twice. Consequently
\[
 K_\beta(X,Y)\le \exp\{\beta(M-\delta\mathsf V/27)\}.
\]
For a lower bound on the diagonal, restrict every g_x to the Haar ball of angular radius \(\epsilon=1/64\) about I, of mass \(v=(\epsilon-\tfrac12\sin(2\epsilon))/\pi>0\). Then \(\alpha(g_xg_y^{-1})\le2\epsilon\) for all links. Centrality of Y makes its diagonal integrand identical to that of X. Using \(3(1-\cos(2\epsilon))\le3/2048<\delta/54\), we get
\[
 K_\beta(X,X)=K_\beta(Y,Y)\ge
 v^{\mathsf V}\exp\{\beta(M-\delta\mathsf V/54)\}.
\]
Set \(c=\delta/54\) and \(C=-\log v\). Symmetry and the cross-ratio test give
\[
 \mathcal D(T_\beta)\ge 2(c\beta-C)\mathsf V,\qquad
 1-\vartheta(T_\beta)\le 2\exp[-(c\beta-C)\mathsf V]
 \quad(c\beta>C).
\]
The packing and constants were also checked for L=2 through 30; the inequalities above do not depend on that finite check.

## At fixed physical time the iterate of this certificate becomes useless

In [PublicWilson.lean](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/PublicWilson.lean#L35-L48) at fixed physical period B, L=B/a, and [WilsonRegularity.running](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/ChallengeSpec.lean#L12-L15) gives \(\beta\sim b_0\log(1/a)\) with \(b_0>0\). For a fixed physical distance r inside the circle, \(k=\lfloor r/a\rfloor\) steps. Therefore
\[
 0\le 1-\vartheta(T_\beta)^k
       \le 2k\exp[-(c\beta-C)(B/a)^3]\ \longrightarrow\ 0.
\]
Even the **optimal one-step** global projective coefficient, when merely iterated, provides no nontrivial fixed-physical-time contraction in the mesh-first limit. This does not bound the true coefficient of \(T_\beta^k\) from below. Nor does it say these extreme center configurations retain any equilibrium weight or are relevant to a local commutator. The actual local transfer correlation and the Hamiltonian spectrum are not estimated here.

The [independent assessment §11](https://alexisdpc.github.io/yang-mills/references/assessment-1-2026-11-10.pdf#page=18) gives common RG reference scale, coupling and field calibration. It does not turn a whole-slice uniform comparison into a local equilibrium estimate. The next justified target is to bound a **fixed physical block** or the normalized trace-commutator pairing in the equilibrium state, allowing rare boundary fields to be treated by weight rather than worst case. This note closes only the raw one-step global-positivity shortcut, not local mixing, physical-scale blocking or any claimed Wilson mass gap. Literature priority of the explicit packing estimate has not been established.
