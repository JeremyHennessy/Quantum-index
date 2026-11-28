# Direct stretched-exponential upper bound on the actual equal-tag gap

Use the same equal-tag two-fast-path graph and cubic scale: \(H_r=rK+L+r^{2/3}V\) in dimensionless energy, \(V=-\kappa_1 f-\kappa_2 g\), with fixed nonzero \(\delta=\kappa_1\kappa_2/12\). Write \(B=r^{1/3}\), \(\alpha=(\kappa_1^2+\kappa_2^2)/24\), and let the physical energy factor be \(c>0\). The two slow loop traces are \(x=\operatorname{Re}(U_1^{-1}U_3)\) and \(y=\operatorname{Re}(U_2^{-1}U_4)\). Then the **actual physical** first gap satisfies for large \(r\)
\[
 \boxed{\quad 0\le E_1(r)-E_0(r)
                    \le Cc\,r^{-1/6}\exp(-a r^{1/6})\quad}
\]
for some \(C,a>0\) depending on the fixed graph and couplings. This is a direct upper bound, not a tunneling asymptotic or lower bound.

## Uniform frozen-fast form floor

For each fixed set of slow products \(U\), regard \(V(U)\) as a bounded multiplication on the fast Haar pair. Its sup norm is bounded uniformly in \(U\). The frozen dimensionless operator is
\[
 rK+r^{2/3}V(U)=r\bigl(K+\varepsilon V(U)\bigr),\qquad \varepsilon=r^{-1/3}.
\]
The fast Haar operator has an isolated simple constant ground at 0 and next energy at least 3. The uniform bound on \(V(U)\) gives a common complex analytic perturbation disk about \(\varepsilon=0\) using the Riesz resolvent on a fixed contour enclosing 0. Since both words have the same tag \(\{1,2\}\), flipping either fast center changes \(V\) to \(-V\) and preserves \(K\), so this ground eigenvalue is even in \(\varepsilon\). Its exact quadratic coefficient is \(-(\alpha+\delta xy)\), by the equal-tag moment and fast Casimir 6. Cauchy bounds on the common contour give a uniform \(O(\varepsilon^4)\) remainder; for real small \(\varepsilon\) the branch remains the lowest fast eigenvalue. It follows that the frozen bottom is
\[
 -B(\alpha+\delta xy)+O(r^{-1/3})
\]
uniformly in \(U\). No kinetic comparison in \(U\) is made inside the frozen operator.

Let \(\widetilde H_r=H_r+B(\alpha+|\delta|)\) and \(U_{\rm well}=|\delta|-\delta xy\). Integrating this fiber ground lower bound in the independent slow Haar variables, and adding the **full** slow kinetic form, gives on the entire product configuration space
\[
 \widetilde H_r\ \ge\ L+B\,U_{\rm well}-C r^{-1/3}
\]
in the sense of quadratic forms. This also holds on the physical invariant subspace. In particular it is a pointwise-fast form bound for actual test functions, not just a slow effective bound.

## Exact actual symmetry and barrier localization

Let \(\Psi_r\) be the unit normalized positive ground of the actual centered Hamiltonian on the full path-product space, with dimensionless eigenvalue \(\widetilde e_0\). The positive unique ground is guaranteed at every finite \(r\) on the compact connected product by ellipticity and positivity of the heat evolution. It is gauge invariant because the Hamiltonian commutes with the endpoint gauge actions. Thus it is also the physical ground. The earlier localization comparison gives \(\widetilde e_0=O(B^{1/2})\).

The actual simultaneous center transformation \(U_3\mapsto -U_3,\ U_4\mapsto-U_4\) preserves both marked words: \(f\) uses neither and \(g\) receives two signs. It also preserves the kinetic form and gauge subspace and flips \(x,y\) simultaneously. Hence \(\Psi_r\) is even under this exact actual symmetry. Put \(s=x+\operatorname{sgn}(\delta)y\); then \(U_{\rm well}=|\delta|(1-x\operatorname{sgn}(\delta)y)\) and the symmetry sends \(s\) to \(-s\). On the fixed barrier \(|s|\le3/2\), the product of its two summands is at most \(s^2/4\), so \(U_{\rm well}\ge 7|\delta|/16=:u_*>0\).

Pick a smooth nonnegative cutoff \(\chi(s)\) bounded by 1, equal to 1 on \(|s|\le1\), supported inside \(|s|<3/2\), and let \(G=\exp(a_0\sqrt B\,\chi)\) with fixed small \(a_0>0\). Both are smooth slow multipliers on the compact group variables. For any such real multiplier \(G\), the exact actual ground-state identity gives
\[
 \langle G\Psi_r,(\widetilde H_r-\widetilde e_0)G\Psi_r\rangle
       =\int \Psi_r^2\,\Gamma_L(G,G)\,d\mathrm{Haar}.
\]
The fast gradient drops out because \(G\) depends only on the slow products. This is the product rule paired with the actual weak ground equation, so does not replace the full ground by a slow effective eigenfunction. In the exponential case the right side is \(a_0^2 B\int \Gamma_L(\chi,\chi)|G\Psi_r|^2\). Choose \(a_0\) so small that \(a_0^2\sup\Gamma_L(\chi,\chi)\le u_*/2\), uniformly because the slow lengths are fixed.

Using the frozen-fast form floor, dropping the nonnegative slow kinetic, and moving the right side to the left yields
\[
 \int\bigl[B(U_{\rm well}-a_0^2\Gamma_L(\chi,\chi))
                  -\widetilde e_0-Cr^{-1/3}\bigr]|G\Psi_r|^2\,d\mathrm{Haar}
       \le0 .
\]
On the full strip \(|s|\le3/2\) the bracket is at least \(Bu_*/4\) for \(B\) large. Outside that strip \(G=1\), its gradient vanishes, \(U_{\rm well}\ge0\), and the negative part of the bracket is at most \(C\sqrt B\). Normalization therefore gives an integral of \(|G\Psi_r|^2\) on the strip bounded by \(CB^{-1/2}\). In particular
\[
 \int_{|s|\le1}\Psi_r^2\,d\mathrm{Haar}
          \le C B^{-1/2}e^{-2a_0\sqrt B}.
\]

## Physical odd test

Take a smooth odd \(h:\mathbb R\to[-1,1]\) equal to \(\operatorname{sgn}s\) for \(|s|\ge1\), and let \(\eta=h(s)\). The function \(\eta\Psi_r\) is gauge invariant and odd under the exact actual symmetry, so is orthogonal to the physical ground. Its norm squared is at least one minus the displayed barrier probability. The actual ground-state identity, now with \(G=\eta\), bounds its Rayleigh excess above the ground by \(C\int_{|s|\le1}\Psi_r^2\) divided by its squared norm, since the bounded slow gradient of \(\eta\) is supported there. The physical min–max principle gives the claimed stretched-exponential upper bound after multiplication by \(c\). It does not use a polynomial Schur eigenvalue error to resolve a much smaller gap. All estimates are finite-skeleton with fixed couplings and slow lengths, and give no continuum or broad lattice inference.
