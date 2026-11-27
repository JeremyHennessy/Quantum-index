# The rescaled dressed-probe law and a strict second-moment defect

2026-11-27 · Fixed lattice spacing, in every fixed fully padded finite open cubic box. Parent: [uniform real-coupling window](UNIFORM-RESIDUAL.md) and [fixed-spacing thermodynamic window](THERMODYNAMIC-SPECTRAL-WINDOW.md), research head efb969e1bc4019a55d2dfdf5f02a2ff43de82d0b.

**As \(g\to0\) in a fixed box, the law of \((\lambda-15)/g^2\) converges to the spectral law of the vacuum-subtracted quadratic operator compressed to the first-order kernel. Its second moment does not converge to the moment of that limiting law.** In every fully padded cubic box the limiting defect is at least the exact rational \(5945/903168>0\). The missing second moment comes from disappearing probability on faster branches. No interchange of the box-size and weak-coupling limits is assumed.

## Weak limit in one fixed box

Let \(\psi_g\) be the normalized centered state of the [dressed probe](DRESSED-PROBE.md), \(u=q/\sqrt6\), \(P\) the free energy-15 projection, \(T=PVP\), and \(B=PVRVP+(b/24)P\), where \(b\) is the number of faces and \(R\) the reduced free resolvent. Write \(N\) for \(\ker T\) projected inside \(P\), \(M=P-N\), and \(A=NBN\) on \(\operatorname{ran}N\). The vector \(u\) belongs to \(N\).

For this fixed box, identify the interacting energy-15 band \(P_g\) isometrically with \(P\) by the analytic graph unitary. The vacuum-shifted Hamiltonian in those coordinates is \(15I-gT+g^2B+O(g^3)\), and the transported component of \(\psi_g\) is \(u_g=u+O(g^2)\): the exact first derivative of the dressing is the graph derivative and has no in-band component. Put \(Y(g)=(H_{\mathrm{eff}}(g)-E_0(g)-15I)/g=-T+gB+O(g^2)\), taking \(H_{\mathrm{eff}}\) here to denote the unshifted band operator. Let \(N(g)\) be the Riesz projection of \(Y(g)\) continuing its isolated zero group at \(g=0\), with \(N(0)=N\). A second graph transport into \(N\) gives \(g^{-1}Y(g)|_{N(g)}\to A\) in finite-dimensional operator norm. The transported vector tends to \(u\). The complement inside \(P_g\) carries probability \(O(g^2)\), and the complement outside \(P_g\) carries \(O(g^4)\). Thus bounded continuous test integrals converge to the spectral law of \(A\) in \(u\) for either sign of \(g\).

The limiting law has mean \(-13/336\), and the [binary quadratic bound](BINARY-QUADRATIC-BOUND.md) places it in the common compact interval \([-695/12,695/12]\). The previous uniform second moment makes first absolute moments uniformly integrable. More generally this weak convergence is also convergence in \(W_p\) for \(1\le p<2\) (by uniform integrability of \(|x|^p\)). For joint sequences with arbitrary padded boxes and \(g\to0\), the uniform moment bound implies tightness, and the box-uniform static expansion plus uniform integrability force the mean of every subsequential weak limit to equal \(-13/336\). Those statements do not force the limits themselves to coincide.

## How probability can disappear but keep a second moment

In the physical spectral law restricted to \(P_g\), the scaled operator applied to \(u_g\) satisfies
\[
g^{-2}(H_{\mathrm{eff}}(g)-E_0(g)-15I)u_g
     =Bu+O(g).
\]
The terms involving \(T\) vanish at orders \(g^{-1}\) and \(g^0\) because \(Tu=0\) and \(u'_0=0\). Hence the second moments in the slow and fast in-band parts tend, respectively, to \(\|NBu\|^2=\|Au\|^2\) and \(\|MBu\|^2\). The latter term is not part of the weak limiting law, since the nonzero first-order slopes escape at scale \(|g|^{-1}\) in the rescaled variable. For the outer band, graph-norm analyticity and the dressing give \((1-P_g)\psi_g=g^2\eta+O(g^3)\) in the graph norm of \(H_0\), with \(P\eta=0\). Thus the scaled residual on that part tends in norm to \((H_0-15)\eta\). In particular the full second moment has a finite limit in this fixed box, namely
\[
\|Au\|^2+\|MBu\|^2+\|(H_0-15)\eta\|^2.
\]
The outer-band contribution is nonnegative; we do not need to compute it or show it is nonzero.

## A strict exact witness in every padded cubic box

Let \(L\) be the lifted **original planar** energy-15 space, of dimension 64. It reduces the cubic \(T\): internal insertions reach the free energy-15 space within the original cylindrical subspace, and exterior insertions on these binary ten-link states reach only energies 18, 21, or 22 (one or zero shared occupied links). These insertions do not project back to energy 15. Self-adjointness then makes \(L^\perp\) invariant as well. In particular the compression of \(M\) to \(L\) is the nonzero-slope projection \(M_L\) of the exact planar \(T\).

For each planar binary label let \(d_m\) be its number of occupied outer edges of the original patch. The compression \(B_L\) to \(L\) in a padded cubic box is the old unpadded planar \(K\) plus its planar vacuum term \(I/3\), minus the diagonal \((d_m+20)/168\). Indeed each occupied coplanar-border face contributes the same connected correction \(-1/168\), and each binary ten-link label has twenty occupied perpendicular faces. Both corrections multiply the inner product inside the entire label space, including multiplicity-two labels, by the one-shared-link polarization calculation. Distinct labels give zero same-exterior-face matrix entries by link-center parity. The mixed exterior terms vanish by an exterior link's unique center witness, as in the [cubic compression proof](CUBIC-LOCALITY.md).

The existing exact free-band insertion machinery computes \(B_L\) by all 64 circuit coordinates and 190 intermediate parity groups. If \(G\) is the circuit Gram and the columns of \(U\) span \(\ker T_L\), the orthogonal null projection in these coordinates is \(U(U^* G U)^{-1}U^*G\). The computation verifies
\[
\|M_L B_L u\|^2=5945/903168.
\]
Because \(L\) reduces \(T\), this is a lower bound for \(\|M B u\|^2\) in every padded cubic box, whether or not there are additional off-planar nonzero slopes.

Consequences in a fixed box: \(W_2\) convergence fails, and the scaled **absolute** \(p\)-th moment diverges at least as a positive box-dependent constant times \(|g|^{2-p}\) for every \(p>2\). On the fast in-band group the absolute rescaled energy is uniformly at least \(c_{\rm box}/|g|\) for sufficiently small \(g\) in that box, because its finite nonzero slope set is separated from zero. Its second moment tends to the strictly positive number above or larger. A uniform second-moment bound is therefore not a uniform integrability statement for that second moment, and a bound on scaled absolute third moments already fails in each fixed box. No conclusion about a signed cubic moment follows from this estimate.

## Scope and reproduction

Run **python3 second_order.py** with Python 3.12 and SymPy 1.14. The new check retains the prior output, verifies the padded planar compression, exact Gram orthogonal projection, known mean, and strictly positive defect without enumerating the full cubic spectrum. No spectral isolation or atomic component at infinite spatial volume follows from the fixed-box weak limit. In particular a finite-volume peak, even one visible at first nonzero coupling, does not by itself identify an infinite-volume individual excitation. There is no continuum result.
