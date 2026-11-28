# Exact identity Schur gluing restores the interior interface curl

Use the unit Hessian convention for one real Lie component at identity (the three components of SU(2) are identical and decoupled). Let two open side-\(b\) cubical cells, \(b\ge2\), meet on a full face \(\Sigma=\{x=b\}\), forming the slab \([0,2b]_x\times[0,b]^3\). Each cell considered separately omits every pure-boundary plaquette. The slab likewise omits the plaquettes lying wholly in its *own* outer boundary. Fix an arbitrary real edge form \(h\) on the slab's tangential outer links.

## Which plaquettes and links are shared

A plaquette not in \(\Sigma\) belongs to exactly one side; its local and global boundary-omission status coincide. For a plaquette involving the \(x\) direction, the two fixed transverse coordinates determining whether it is included are unchanged from local to global. For one not involving \(x\), with \(x\ne b\), a local boundary value of \(x\) is precisely a global exterior end.

An interface plaquette varies along two of the three seam coordinates. Its one remaining seam coordinate is fixed. If this coordinate is 0 or \(b\), the plaquette is still wholly on the slab exterior and must stay omitted. Otherwise it is globally included and must be restored. Indeed at least one edge is then globally free: choose one of the two varying coordinates at an interior endpoint of its unit interval and let the edge vary along the other coordinate. The seam therefore contributes \(3b^2(b-1)\) restored plaquettes and \(6b^2\) still-omitted ones. Similarly an edge in the seam is globally free just when its two fixed transverse seam coordinates are both interior. There are \(3b(b-1)^2\) such edges before the interface gauge quotient; the remaining seam links must retain their prescribed values from \(h\).

## Exact nonlinear Haar identity

In this paragraph let \((h,s)\) denote actual SU(2) link values. With normalized independent Haar measure on unfixed links, and with each local partition function defined **without removing or dividing any gauge volume**, the exact identity is
\[
 Z_{\rm slab,\beta}(h)=\int_{s\mid h}
     Z_{L,\beta}(h_L,s)\,Z_{R,\beta}(h_R,s)\,
     e^{-\beta S_{\Sigma,\rm int}(s)}\prod_{e\in\Sigma_{\rm free}} ds_e .
\]
Here \(S_{\Sigma,\rm int}\) is precisely the Wilson action of the restored seam plaquettes. The globally outer seam links are held fixed by \(h\), not integrated, and the still-outer seam plaquettes are not present. This is Fubini on the three disjoint link sets (left interior, right interior, free seam), with the three disjoint plaquette terms described above. In particular it introduces no second seam copy or additional gauge quotient. The corresponding zero-temperature minimum composes by minimizing rather than integrating, by splitting the same three terms; below we apply this splitting directly to the identity quadratic action, not to the finite-\(\beta\) logarithm.

## Exact variational composition

For a full seam assignment \(s\) that agrees with \(h\) on globally prescribed seam edges, let \(Q_L(h_L,s)\) and \(Q_R(h_R,s)\) be the two local minimized quadratic forms with the entire seam held Dirichlet. Use consistent edge orientations in both arguments. The slab quadratic response is exactly
\[
 Q_{\rm slab}(h)=
 \min_{s\mid h}\Bigl[Q_L(h_L,s)+Q_R(h_R,s)
             +\sum_{p\in\Sigma_{\rm int}} |(d_\Sigma s)_p|^2\Bigr].
\]
The proof is just decomposition of the global plaquette curl squares into the three disjoint sets. Given \(s\), the two cell interior edge sets are disjoint and each can be minimized independently; the restored seam term depends only on \(s\), including its prescribed entries. Then minimize over the remaining seam trace. Finite-dimensional quadratic least-squares minima exist, even with gauge kernels. Interior gauges on each cell can leave the seam fixed; a separate gauge on globally interior seam vertices may be imposed as a computational slice but does not change the minimum. This equality is associative Schur elimination on an assembled form with the restored rows, not on the sum of two cell forms alone.

If one omits the interface term in that minimum, call the result \(Q_{\rm omit}(h)\). It is always no larger than \(Q_{\rm slab}(h)\), and equality holds exactly if there is a minimizing seam trace of the omitted problem whose restored curls all vanish. The reverse direction follows by testing that trace; the forward direction follows by taking an attaining minimizer of the full problem and observing that both its omitted excess and its nonnegative seam cost must vanish. Thus the correction is a positive semidefinite quadratic form in \(h\), and can be strictly positive without touching an interface link in the prescribed perturbation.

## Exact side-2 example

Take \(b=2\), coordinates \((x,y,z,w)\), and unit angle on the positively oriented \(y\)-edge
\[
 (0,0,1,1)\longrightarrow(0,1,1,1)
\]
at the outer end \(x=0\); set every other outer tangential edge angle to zero. This is an exterior Dirichlet perturbation disjoint from the seam. Each cell contributes 24 plaquettes. Twelve additional seam plaquettes are globally interior; 24 others on the seam are genuinely slab-exterior and omitted. Exact unit stiffnesses are
\[
 Q_{\rm omit}(h)=\frac{1171}{1680},\qquad
 Q_{\rm slab}(h)=\frac{17839}{25296},\qquad
 Q_{\rm slab}(h)-Q_{\rm omit}(h)=\frac{151}{18445}>0.
\]
For a diagnostic second fixture, prescribe instead the seam edge \((2,0,0,1)\to(2,1,0,1)\) with unit angle and all other prescribed edge angles zero. This edge is globally fixed (it lies in \(z=0\)). Neither cell-only action sees it, because it is inactive relative to both local boundary graphs. It is visible to the restored seam curls: the exact stiffness increases from 0 to \(366/527\). Thus local inactivity is not a legitimate criterion for declaring a prescribed link inert after gluing.

Run `python verify_two_cell_gluing.py`. It checks each independently defined cell's inclusion rule against the slab, enumerates the restored and genuinely exterior seam sets, and uses rational arithmetic only. A three-edge rooted forest leaves seven left interior, seven right interior and five seam variables. The first two gauge conditions set the positive \(x\)-edges from \((0,1,1,1)\) and \((2,1,1,1)\) to zero; the third sets the positive \(y\)-edge from \((2,0,1,1)\) to zero, rooting the remaining interior seam vertex on the exterior. It verifies the nested result (left/right eliminations, add seam term, eliminate seam) equals independent direct elimination of all 19 variables, with strictly positive eliminated pivots in both fixtures and both modes.

This is an identity-level finite-cell composition law and an algebraic failure of a specific face-deleted assembly. It does not by itself construct a blocked continuum action, control errors at arbitrary backgrounds, or imply a continuum limit or a mass gap.
