# A uniform finite-coupling weight estimate from a static sum rule

2026-11-27 · Fixed spatial mesh and weak magnetic perturbation of the strong-electric Hamiltonian, pure SU(2). This result concerns the spectrum above the vacuum near electric energy 15, **not** the lowest excitation, a unique particle, or the Yang–Mills continuum limit.

In any fully padded finite open cubic box, let $\Omega_g$ be the normalized ground state of $H(g)=H_0-gV$ and let $\mu_g$ be the normalized spectral measure of $H(g)-E_0(g)$ in the centered state of the [local dressed probe](DRESSED-PROBE.md), $A_g=q+gr$. Set $a=13/336$. There is a common small radius $g_*>0$ such that, for $0<|g|\le g_*$,
$$
\mu_g\!\left([0,15-(a/4)g^2]\right)
\ \ge\ \frac{(a/4)g^2}{15-(a/4)g^2}.
$$
The radius is not evaluated numerically. The floor is order $g^2$, not a lower bound independent of coupling.

## Why local analyticity suffices

Write $\omega_g(B)=\langle\Omega_g,B\Omega_g\rangle$. With $\mathrm{Var}_{\omega_g}(A_g)=\omega_g(A_g^2)-\omega_g(A_g)^2$, the ground-state sum rule gives
$$
\int (\lambda-15)\,d\mu_g(\lambda)
=\frac{\tfrac12\omega_g([A_g,[H_0,A_g]])}
{\mathrm{Var}_{\omega_g}(A_g)}-15.
$$
Indeed $A_g$ is real multiplication and commutes with $V$, the centered vector differs by a multiple of the ground state, and $\tfrac12\omega_g([A_g,[H,A_g]])=\langle A_g\Omega_g,(H-E_0)A_g\Omega_g\rangle$. For a smooth multiplication function $A_g$ and the link Laplacians in $H_0$, the double commutator is bounded multiplication by the corresponding sum of squared link gradients, with the electric normalization included. Its support is the fixed support of $A_g$. The three observables involved are bounded local polynomials in $g$. At $g=0$ the variance is 6.

For these static expectations, use the rooted polymer expansion of [Yarotsky, math-ph/0412040, Theorem 1 and proof of item 2, pp. 9–10](https://arxiv.org/pdf/math-ph/0412040). The needed uniform complex-disc bound is an application of the proof, not a claim that item 4 as stated covers arbitrary real-time correlators. In that expansion the terms for one bounded local insertion are absolutely summable clusters rooted at the insertion; the weight estimates and the number of clusters of each size through a site are uniform in the finite spatial volume. For bounded interaction $g\Phi_x$ the weight bounds apply on a sufficiently small complex disk. In the subset inclusion-exclusion step for the transfer semigroup, the Dyson expansion leaves only words using every perturbation in the selected set $I$ at least once. Since the unperturbed semigroup is contractive and $\sup_x\|\Phi_x\|\le J$, the resulting norm is at most $(e^{t_0J|g|}-1)^{|I|}$: group words by their positive multiplicities and use the simplex factor $t_0^n/n!$. It acts only on the selected supports, with the free semigroup factored out elsewhere. The free gap and rooted-count estimates in the cited proof are unchanged. Choose the transfer step $t_0$ first and shrink the disk for the required small activity; no real-order estimate for complex Hamiltonians is needed. Hence the finite-volume expression for each local expectation has a holomorphic extension bounded uniformly on a common smaller disk. It agrees on real $g$ with the physical ground-state expectation. The insertion here is a fixed local polynomial, so the same bound applies separately to its finitely many coefficients.

To match the product-site and boundary conventions, group the three outgoing link Hilbert spaces at each cubic vertex. The on-site electric sum has the constant vacuum and a positive gap, and admits the product spectral resolution used in Yarotsky's diagonal hypothesis. Enlarge the box to a periodic coordinate array of such sites if needed; set interactions not in the chosen open box to zero. These changes do not affect the bounds: the proof uses uniform local interaction norms, support sizes, and rooted counts, not equality of the local perturbations. Missing links can be included as extra decoupled electric factors with the constant vacuum. Bulk plaquette terms are finite-range bounded multiplication; at most three can be assigned to a common anchor site. The ground state of the enlarged unrestricted link Hilbert space is gauge invariant: it is nondegenerate, and its overlap with the invariant free vacuum is nonzero as required for the rooted expectation formula. Gauge transformations commute with the Hamiltonian, so this overlap forces the invariant character. The gauge-invariant spectral measure of the probe therefore agrees with the unrestricted one. All spatial box enlargement in this paragraph is independent of any continuum scaling.

In particular the variance remains bounded away from zero on a smaller disk, uniformly in the box. This follows from its common constant term 6 and a uniform analytic bound, by Cauchy's estimate. Thus the centered energy mean in the sum rule has a uniform analytic bound, and its even Taylor expansion has a uniform fourth-order remainder. Evenness follows from the [center flip](THIRD-ORDER-PARITY.md): $q$ is center even, $r$ is center odd, and the flip exchanges $g$ with $-g$.

## Identify the quadratic coefficient

In a fixed box, the centered state $\psi_g=(A_g-\omega_g(A_g))\Omega_g$ is analytic in the graph norm of $H_0$ near zero. Boundedness of $V$ gives graph-norm analyticity of the isolated ground-state and free-band spectral projections; multiplication by the fixed smooth finite Peter–Weyl functions $q,r$ preserves this graph norm by the product rule. Let $P_g$ be the interacting projection onto the continuation of the free energy-15 band, for that fixed box only. The dressed-probe identity says $\psi_0=q$, $\psi'_0=-RVq=P'_0q$. The vacuum-centering derivative is zero at $0$. Thus $(1-P_g)\psi_g=O_\Lambda(g^2)$ in the graph norm and contributes $O_\Lambda(g^4)$ to the unfiltered numerator. No uniform estimate on that remainder is being assumed. Under the canonical band identification the inside-band vector is $q+O_\Lambda(g^2)$ because the graph derivative is off-diagonal. The constant part of $H-E_0-15$ vanishes on the free band, the first-order term kills $q$, and the quadratic expectation divided by $\|q\|^2=6$ is the [cubic-box value](CUBIC-LOCALITY.md), $-a$. Consequently the quadratic Taylor coefficient of the static local sum rule is $-a$, the same in every fully padded box.

Uniform static analyticity and parity upgrade that coefficient identity to
$$
\int(\lambda-15)\,d\mu_g(\lambda)=-a g^2+O(g^4)
$$
with a box-independent remainder. Choose the common radius small enough that this mean is at most $-a g^2/2$ and $15-(a/4)g^2>0$.

## Convert the mean to spectral weight

Let $w=\mu_g([0,15-(a/4)g^2])$. Since $\lambda\ge0$, the mean of $\lambda-15$ is at least $-15w-(a/4)g^2(1-w)$. Combine with the upper bound $-a g^2/2$ and solve for $w$. This proves the stated floor. The stronger goal of a coupling-independent floor would still need a sharper tail control such as the dynamic fourth-derivative bound in the dressed-probe note. No such stronger bound is invoked here.
