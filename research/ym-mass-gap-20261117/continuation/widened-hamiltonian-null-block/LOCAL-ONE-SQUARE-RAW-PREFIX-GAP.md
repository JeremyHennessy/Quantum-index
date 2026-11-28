# An actual Wilson raw-prefix conditional gap that grows at large magnetic coupling

Consider a single square plaquette with one additional dangling link. Use the unit-quaternion metric on \(G=SU(2)\), so the round Laplacian has free first eigenvalue 3. The finite dimensionless Wilson operator is
\[
 {\cal H}=-\sum_{e}\Delta_e-t\,\operatorname{Re}P,\qquad P=\text{oriented square holonomy}.
\]
Choose the length-two coarse path that traverses one square link and then the dangling link. Fix its group-valued product \(z\) and the other three square links (raw spectators). All assertions are for this finite graph; multiply dimensionless gaps by the electric coefficient \(c_{\rm el}\) if restoring units.

## Exact ground-state reduction and raw operator

For any smooth function of \(P\), each of the four square edge Laplacians acts as \(\Delta_G\) on \(P\) (multiplication by fixed group elements and inversion are isometries), and the dangling Laplacian acts as zero. With \(h_t=-\Delta_G-(t/4)\operatorname{Re}P\), let \(e_0(t)\) and \(\psi_t>0\) be its ground eigenvalue and positive normalized ground eigenfunction in normalized Haar on \(G\). Compactness, ellipticity and strict positivity of the heat kernel give simplicity. Conjugations commute with \(h_t\), so \(\psi_t\) is central. Its pullback \(\Omega=\psi_t(P)\) is a positive eigenfunction of \({\cal H}\) at energy \(4e_0(t)\), hence the unique positive ground state; Haar pushforward of \(P\) is Haar, so it is normalized.

In the raw conditional slice, \(P\) is the first path link multiplied by a fixed spectator product, after a choice of basepoint and orientation; the map from the free prefix to \(P\) is a Haar-preserving isometry for the round metric (inversion or fixed translations do not matter). The dangling link supplies the compensation needed to keep \(z\) fixed. The induced metric from the two varying links is precisely twice the round metric on \(P\); normalized reference Haar is unaltered by the constant metric scaling. The exact conditional vacuum law is \(\psi_t^2\,d{\rm Haar}\) in \(P\), independent of the fixed environment in these coordinates. Its positive intrinsic conditional operator is
\[
 {\cal L}_{\rm raw}f=-\tfrac12\left[
  \Delta_G f+2\langle\nabla\log\psi_t,\nabla f\rangle\right].
\]
Multiplication \(f\mapsto\psi_t f\) is unitary from \(L^2(\psi_t^2\,d{\rm Haar})\) to unweighted \(L^2(d{\rm Haar})\). The product rule and \(h_t\psi_t=e_0(t)\psi_t\) give the exact identity
\[
 \psi_t{\cal L}_{\rm raw}\psi_t^{-1}=\tfrac12(h_t-e_0(t)).
 \tag{1}
\]
Smooth strictly positive \(\psi_t\) and compact elliptic form closure justify (1) on the self-adjoint operators as well as the smooth core. In particular the full raw slice gap is exactly half the first energy difference of \(h_t\) on **all** of \(G\), not only on class functions.

There is a distinct physical restriction if tests must be restrictions of gauge-invariant functions on the whole graph. The connected graph has a single cycle: a spanning-tree gauge fixes the tree and leaves the square product with residual simultaneous conjugation. Thus precisely the class functions of \(P\) are physical, and all smooth class functions on the slice arise by restriction. The same identity (1) holds on that closed central subspace (its test form is the smooth central closure), but the first excited level must be taken in that subspace.

## Rigorous oscillator limit in both subspaces

Multiplication of the argument by the central element \(-1\) is unitary, preserves the class subspace and interchanges coupling signs. Write \(a=|t|/4\), \(h_a=-\Delta_G-a\operatorname{Re}P\) and let \(\theta=d_G(1,P)\in[0,\pi]\). The scaled shifted positive form for \((h_a+a)/\sqrt a\) is
\[
 Q_a(F)=a^{-1/2}\int_G|\nabla F|^2\,d{\rm Haar}
           +\int_G\sqrt a(1-\cos\theta)|F|^2\,d{\rm Haar}.
 \tag{2}
\]
In exponential normal coordinates \(P=\exp(a^{-1/4}y)\), the scaled tensor and volume density converge smoothly on every fixed \(y\)-ball to Euclidean ones (the normalized Haar constant is removed by a constant unitary factor). The potential converges locally uniformly to \(\tfrac12|y|^2\). Also, for the entire normal ball away from its measure-zero cut point,
\[
 \sqrt a(1-\cos\theta)\ge 2|y|^2/\pi^2,
 \tag{3}
\]
by \(1-\cos\theta=2\sin^2(\theta/2)\) and the chord lower bound for sine.

Here is the variational justification for every fixed eigenvalue index, counted with multiplicity, separately in the full and central subspaces. Compactly supported smooth Euclidean trial subspaces pull back to the chart; (2) and convergence on compact sets show convergence of every form and norm matrix there, proving the upper min--max bound by form-core approximation. In the central subspace take radial tests: conjugation on the exponential coordinates rotates \(y\) via all of \(SO(3)\), and cutoff plus smooth radial approximation provides the requisite radial form core.

For the lower bound take a subsequence realizing the liminf of a fixed index and orthonormal eigenfunctions of the finitely many modes up to it. The just-proved upper bound makes their (2) energies bounded. Local uniform metric convergence gives uniform \(H^1\) bounds on each fixed \(y\)-ball after rescaling, hence local strong \(L^2\) and weak \(H^1\) convergence along a diagonal subsequence. Equation (3) bounds the squared Haar mass outside each rescaled ball of radius \(R\) by \(O(R^{-2})\), uniformly along the sequence; inner-product tails satisfy the same bound by Cauchy--Schwarz. Thus the limits retain orthonormality. The gradient lower semicontinuity and potential convergence on fixed balls, followed by expanding the balls, lower-bound the limit form for every fixed linear combination. Its quotient is therefore at most the limiting largest eigenvalue of the chosen finite eigenspace. Euclidean min--max gives the converse lower bound. For central tests the limits are radial, so the proof gives both limits without invoking spectral convergence in a varying domain outside compact sets. The limiting form is that of
\[
 H_{\rm osc}=-\Delta_{\mathbb R^3}+\tfrac12|y|^2 .
\]

The full oscillator ground energy is \(3/\sqrt2\). Its first excited level is \(5/\sqrt2\), by the three one-dimensional oscillator decompositions. For the radial subspace, multiplication of a radial wavefunction by radius (and by \(\sqrt{4\pi}\) for normalization) reduces to the one-dimensional oscillator on the positive half-line with the Dirichlet condition at zero. To see the domain, the radial smooth core maps to functions vanishing at zero; integration by parts gives equality of Dirichlet gradient forms, and compactly supported smooth functions of the radius away from zero are a form core for the half-line Dirichlet oscillator. Odd reflection identifies this half-line problem with the odd one-dimensional levels. The first two radial energies are consequently \(3/\sqrt2,7/\sqrt2\). Equivalently the full first triplet of linear modes is excluded by conjugacy.

Subtracting the ground energy and using (1) yields
\[
 \gamma_{\rm raw}(t)=\frac{\sqrt{|t|}}{2\sqrt2}
       +o(\sqrt{|t|}),\qquad
 \gamma_{\rm class\;restriction}(t)=\frac{\sqrt{|t|}}{\sqrt2}
       +o(\sqrt{|t|}).
\]
At \(t=0\) either gap is \(3/2\), consistent with the doubled round metric. The large-\(|t|\) coefficients are for this one-square conditional witness. The true raw gap grows even though generic density-comparison lower bounds deteriorate exponentially in \(\sqrt{|t|}\); a lower bound of that shape is not an actual gap prediction. Neither coefficient treats multiple coupled spectators, a joint long-path fiber, the full lattice physical gap, or a continuum limit.
