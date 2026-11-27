# A three-loop probe without the forced zero-momentum node

November 27, 2026 · Fixed spatial lattice spacing, sufficiently small magnetic coupling. This note verifies the translation geometry and the exact quadratic data. It does not claim a momentum-resolved nonzero-coupling energy window or identify an individual excitation.

Using the existing four-by-two planar masks, set $b=C_{39}+C_{114}-C_{119}$, with $C_m$ the unnormalized trace of the single boundary loop. One step in the positive $x$ direction takes masks 39, 114, 119 to 78, 228, 238. The sign pattern in the original six-loop probe is therefore exactly $q=(1-\tau_x)b$. The translates of $b$ have Haar covariance $3\delta_{z0}$, because distinct loop-edge labels have distinct link-center parity and a single fundamental circuit has squared Haar norm one.

Use the exact same linear dressing map as for $q$:
$$
s=\sum_{E\ne15}\left((E-15)^{-1}-1/6\right)P_E Vb,\qquad b_g=b+gs.
$$
The map is translation invariant in the fixed-spacing bulk: the free spectral selection of each local insertion is translation covariant, and all far-away insertions land in the annihilated energy-21 term. Hence $q_g=(1-\tau_x)b_g$ exactly in infinite volume, and this identity persists after centering since the ground state is translation invariant. For the unnormalized joint energy and momentum measures, multiplication by $1-\tau_x$ weights the $b_g$ measure by $|1-e^{ik_x}|^2=2-2\cos k_x$ to give the $q_g$ measure. In particular the original observable's zero at $k_x=0$ is structural, not evidence that the underlying physics has no response there. For normalized measures there is also a ratio of variances.

## Independently reproduced exact cubic data

The rational SU(2) Haar calculation gives squared weights of $P_E Vb$ at energies 12, 18, 22, 23, 24 equal to $3/8,43/8,129/8,3/2,9/8$. No weight is present at 15, so $P_{15}Vb=0$. The energy-21 weight depends on volume but has zero dressing coefficient. The result gives $\|s\|^2=14579/56448$. It also gives the exact same normalized quadratic coefficient as for the six-loop probe, $-13/336$, since for the vacuum-relative second-order coefficient operator $B_{\rm rel}$ one has $\langle b,B_{\rm rel}b\rangle=-13/112$ and $\|b\|^2=3$.

More is true at the coefficient level:
$$
\langle b,B_{\rm rel}\tau_z b\rangle=-\frac{13}{112}\,\delta_{z0}.
$$
Here each fixed pair is computed in any box with full padding for both supports. To see the vanishing at nonzero separation, a pair of insertions must have symmetric difference exactly the difference of the two boundary-edge parities. Equal labels occur only for identical masks at identical locations. Loops in parallel distinct planes are disjoint and give 20 uncancelled edges, more than two inserted squares can supply. In one plane a two-face difference must use coplanar faces: a distinct perpendicular or out-of-plane face pair cannot cancel all its external edges because two squares share at most one edge. For coplanar faces, each must have at least three edges in the parity difference, so candidate squares lie adjacently to the two support patches. Larger relative shifts make the loops edge-disjoint. The exact enumeration across the remaining shifts finds six ordered unequal loop/translate pairs with a two-face difference, all from edge-disjoint face pairs. Their vacuum-relative contribution vanishes by the [established disconnected pair cancellation](UNIFORM-QUADRATIC-BAND.md). At zero displacement the direct two-box Haar check above supplies the value. The ratio of this Fourier-transformed coefficient to the free momentum density is thus $(-13/112)/3=-13/336$ for every $k$, including zero.

Since the local first-order cancellation and the variance lower bound apply equally to $b_g$, the [uniform residual proof](UNIFORM-RESIDUAL.md) goes through with its local constants and smaller common radius if needed. For the translation-averaged energy measure, the signed quadratic mean and the normalized second-moment bound imply a positive fraction in the shifted $O(g^2)$ energy window, then the [thermodynamic argument](THERMODYNAMIC-SPECTRAL-WINDOW.md) transfers that statement. This average is not a statement about the conditional energy measure at zero momentum. To promote the coefficient there to a finite-coupling result one needs bounds on spatial covariances of the scaled centered residual, not merely its Hilbert norm.

Run `python momentum_probe.py` from this directory to reproduce the translate labels, the six disconnected parity cases, exact resonance exclusion, dressing norm and quadratic form in two padded boxes. The test uses the existing rational Haar integrator. It does not simulate dynamics or certify the conditional momentum bound.
