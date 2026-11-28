# Compact positive controls in every cubic spatial sector

November 28, 2026 · Zero total momentum, fixed-spacing **separated quadratic reference** only. No conclusion for the actual finite-rank defect or the cubic source.

At the regular point certified in [the on-shell reference calculation](REGULAR-REFERENCE-SHEET.md), write $p_*$ for relative momentum and $E_*$ for the target. The simple band projection $P_*(p)$ and group velocity are smooth on a sufficiently small neighborhood, and the reference coordinate $e$ in the principal-minor test satisfies $P_*(p_*)e\ne0$. The finite group $G$ of signed cubic permutations acts unitarily on the reference space. In relative Fourier coordinates its action is
```
(U_h f)(p) = D_h(p) f(h⁻¹p),
```
where the internal orientation change and reanchoring give a unitary matrix $D_h(p)$ with finite Laurent-polynomial entries. In fact rotations permute the anchored four-loop and six-loop shapes, with bounded shifts of the anchors; the fixed finite energy-9 null coordinate change does not affect that Laurent property. The action preserves compact relative support and commutes with the reference convolution. All 48 points $hp_*$ are distinct.

Construct a trigonometric polynomial $\phi$ with $\phi(p_*)=1$ and $\phi(hp_*)=0$ for $h\ne1$. For example for each of the 47 other points select a coordinate where its complex torus coordinate differs from that of $p_*$, and multiply the corresponding normalized linear factors in that coordinate. Let $f(p)=\phi(p)e$, a compactly supported vector in the relative-coordinate representation. For an irreducible character $\chi$ of degree $d_\chi$, take the isotypic projection
```
Πχ = (dχ / |G|) Σ_h conjugate(χ(h)) U_h.
```
At $p_*$ only the identity term survives, giving $P_*(p_*)(\Pi_\chi f)(p_*)=(d_\chi^2/48)P_*(p_*)e\ne0$. This proves existence of a **compact positive control** in every cubic spatial isotypic sector, rather than just membership in its essential spectrum. To be precise about the density, introduce a smooth nonnegative momentum cutoff supported in that regular neighborhood and equal to one near the point. The associated single-band spectral submeasure has a continuous positive density near $E_*$, by coarea and the nonzero projected vector on a local sheet patch. It is bounded above by the sector vector's full spectral measure. Other sheets at the same energy need not have regular boundary values.

The same construction at any finite number $m$ of distinct cubic momentum orbits in the regular patch, with polynomials interpolating on the union of their orbits, gives $m$ compact vectors in the same sector on whose span the local sheet density quadratic form is positive definite at $E_*$. Indeed, evaluation on the selected points is diagonal with nonzero entries. A nonzero linear combination is detected at some selected point and, by continuity, on a positive-area piece of the regular sheet. This is not a statement about positivity on an externally specified set of defect coordinates or for a specified cubic source.

For the actual [finite-matrix test](ON-SHELL-TEST.md), one must still compute the defect-dressed source and certify its overlap. In particular these constructed compact probes do not rule out cancellation for the physical source. All claims here concern an effective coefficient, not finite-coupling decay.
