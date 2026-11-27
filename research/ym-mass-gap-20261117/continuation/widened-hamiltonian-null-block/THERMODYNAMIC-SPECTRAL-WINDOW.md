# The shifted spectral window survives infinite spatial volume

November 27, 2026 · Fixed spatial lattice spacing; SU(2) in the sufficiently small magnetic-coupling regime. This is the thermodynamic limit of a lattice spectral measure, not a spatial-continuum limit or a statement about the lowest excitation.

Let $A_g=q+gr$ be the same real gauge-invariant multiplication observable in every padded box and $L_\Lambda=H_\Lambda-E_0(H_\Lambda)$. Write $B_\Lambda=A_g-\omega_\Lambda(A_g)1$, where $\omega_\Lambda$ is the normalized ground-state expectation, and set $v_\Lambda=\omega_\Lambda(B_\Lambda^2)$. Let $\mu_{\Lambda,g}$ be the spectral probability measure of $L_\Lambda$ in $v_\Lambda^{-1/2}B_\Lambda\Omega_\Lambda$. Fix $0<|g|\le g_*$ in the common range of the [uniform shifted-window bound](UNIFORM-RESIDUAL.md); let $I_g=[15-Kg^2,15-(13/1344)g^2]$ be the closed window in that bound.

## Match the thermodynamic-limit hypotheses

Use increasing open *vertex* cubes containing the fixed probe support. Take the three outgoing link copies of $L^2(\mathrm{SU}(2))$ together at each vertex and assign their electric Casimirs to its self-adjoint on-site Hamiltonian. Group the bounded plaquette multipliers by their finite outgoing-link site supports. The supports have bounded diameter and uniformly bounded incidence; the interaction belongs to the finite-norm class of [Nachtergaele–Sims, Theorem 4.1](https://arxiv.org/pdf/1410.8174), for example using the lattice weight $F(r)=(1+r)^{-4}$ on $\mathbb Z^3$. The finite-volume interaction is its restriction to supports contained in the cube. If an outgoing link from the cube is unused, its factor is decoupled with a constant vacuum. This padded convention satisfies the same local differentiation and incidence estimates; the fixed interior probe and all plaquettes meeting its support are unaltered for sufficiently large cubes.

The local ground-state expectations converge along these cubes to $\omega_g$ by the rooted cluster expansion of [Yarotsky, Section 2](https://arxiv.org/pdf/math-ph/0412040). In the open-box version, each fixed rooted cluster eventually lies wholly in the cube and uses the same interaction as the infinite lattice, while the absolutely summable bound does not depend on the volume. Thus open boundary conditions give the same local limit. Extend this convergence to each quasi-local observable by uniform norm approximation by local observables; state norms are one. In particular $v_\Lambda\to v_\infty\ge3$.

## Pass the spectrum to the limit

With $\alpha_t^\Lambda(A)=e^{itH_\Lambda}Ae^{-itH_\Lambda}$, the ground-state eigenvalue equation gives
$$
\widehat\mu_{\Lambda,g}(t)
=\frac{\omega_\Lambda(A_g\,\alpha_t^\Lambda(A_g))-\omega_\Lambda(A_g)^2}{v_\Lambda}.
$$
Theorem 4.1 gives norm convergence of $\alpha_t^\Lambda(A_g)$ for fixed real $t$ to a quasi-local observable. Hence the displayed numerator converges: first replace the finite-volume evolved operator by its limit in norm, then apply local-state convergence by norm approximation. No convergence of the extensive ground-state energy is needed.

The bound $\int(\lambda-15)^2\,d\mu_{\Lambda,g}\le Cg^4$ gives tightness. Every weakly convergent subsequence therefore has the same characteristic function as the pointwise limit above, so uniqueness of characteristic functions gives one weak limit $\mu_{\infty,g}$. Its support lies in $[0,\infty)$ by closedness, and it is the normalized connected spectral measure of the probe in the limiting state. Since $I_g$ is closed, Portmanteau yields
$$
\mu_{\infty,g}(I_g)
\ge \limsup_{\Lambda\uparrow\mathbb Z^3}\mu_{\Lambda,g}(I_g)
\ge \frac{(13/336)^2}{64C}.
$$
The same $C,K,g_*$ work for every fixed nonzero coupling in the stated range. The second-moment upper bound also transfers by lower semicontinuity for the nonnegative continuous integrand. This is an infinite-volume signal in a shifted window of width $O(g^2)$. It does not show an isolated atom, a dispersion curve, or a bound uniform under refinement of the spatial lattice.
