# Face-only assembly misses codimension-two plaquettes

Tile a four-dimensional rectangular lattice box, with integer side lengths that are multiples of \(b\ge2\), by aligned side-\(b\) cells. Each cell omits its pure-boundary plaquettes; the full box omits only globally pure-boundary plaquettes. A pure-boundary plaquette means every edge is boundary-tangential, equivalently at least one of its two fixed coordinates is on the corresponding rectangular boundary. The equivalence uses \(b\ge2\) (an elementary varying interval then has at least one interior endpoint).

For a globally included plaquette \(p\), let \(s(p)\) count the fixed coordinates on internal grid seams. There are two fixed coordinates, so \(s\in\{0,1,2\}\). The two unit intervals in the varying coordinates each lie in a unique cell interval; in each fixed coordinate one interval contains the value unless it is an interior seam, when exactly two intervals contain it. It follows that \(p\) is in exactly \(2^{s(p)}\) cells. For \(s=0\), it is retained by its unique cell. For \(s=1,2\), every containing cell treats it as pure boundary and omits it. **Restore each such globally included plaquette exactly once.** A plaquette fixed at any global exterior coordinate is always omitted, even if its other fixed coordinate lies on an internal seam. Equivalently, first remove global exterior terms, then restore the union of seam plaquettes by their absolute lattice identities. An assembly restoring only \(s=1\) is not the full action; an assembly restoring overlapping faces without deduplicating their \(s=2\) plaquettes is not the full action either.

## Exact nonlinear assembly and quadratic Schur law

Fix the outer tangential links \(h\). Let \(\Gamma_{\rm free}\) be the globally free links lying on at least one cell boundary, and let \(s\) assign actual group values to these links. On every local boundary use the unique same global link variable whenever it is shared, and keep the globally fixed links equal to \(h\). Denote this restriction to a cell \(C\) by \(\operatorname{tr}_C(h,s)\). No globally free link outside \(\Gamma_{\rm free}\) belongs to more than one cell. Each local partition integrates its own interior links with normalized Haar, using no gauge-volume division. Then, exactly,
\[
 Z_{\rm box,\beta}(h)=\int
 \left[\prod_C Z_{C,\beta}(\operatorname{tr}_C(h,s))\right]
 \exp\Bigl[-\beta\sum_{p:\,\mathrm{included},\,s(p)\ge1} S_p(s,h)\Bigr]
 \prod_{e\in\Gamma_{\rm free}}ds_e .
\]
Every restored plaquette lies wholly on the cell-boundary skeleton, so the extra Wilson terms depend only on seam and prescribed outer links. This is Fubini over the disjoint sets of links; there is no extra integration or normalization for a shared link, regardless of how many cells contain it. At identity the unit-normalized one-Lie-component quadratic version minimizes the sum of the local response forms plus the restored seam squared curls over the same free skeleton links. This follows by decomposing the quadratic action then independently minimizing cell interior links at held seam values. The Lie components of SU(2) decouple at this order. The result also allows iterative assembly: if blocks are merged in stages, use their actual current boundaries and restore each plaquette at the stage when it becomes interior, not its original seam multiplicity alone.

## Four-cell exact counterexample

Take \([0,4]_x\times[0,2]_y\times[0,4]_z\times[0,2]_w\), tiled by four side-2 cells with internal seams \(x=2\) and \(z=2\). Set only the positively oriented outer \(y\)-edge
\[
  (2,0,2,0)\longrightarrow(2,1,2,0)
\]
to unit angle, and all other prescribed angle entries to zero. The given edge lies on \(w=0\), hence is globally prescribed. Its incident \(x\)-\(y\) or \(y\)-\(z\) plaquettes are globally outer because \(w\) is fixed at zero. Its sole remaining incident plaquette, in the \(y\)-\(w\) plane, has both fixed coordinates on interior seams and is globally included. Consequently the face-only model (\(s\le1\)) never sees the prescribed nonzero edge. The all-zero free extension has zero energy and proves its stiffness is zero.

In the full model the four \(y\)-\(w\) plaquettes of the oriented \(2\times2\) membrane \(x=z=2\) are included, all with \(s=2\). Their signed boundary is entirely globally fixed and includes the given oriented edge once, so the sum of their four oriented curls is 1 for **every** extension. Cauchy-Schwarz gives stiffness at least \(1/4\). The exact value is
\[
  \boxed{Q_{\rm face\ only}=0,\qquad Q_{\rm full}=227/336>1/4.}
\]

Run `python verify_codim2_gluing.py` for the independent integer/rational replay. It reconstructs all plaquettes, counts containing cells and checks their individual omission rules, verifies all four oriented membrane rows and shared-edge cancellation, and certifies the stiffness via rational Schur elimination with positive pivots. It checks the exact normal equations and original squared residual at the minimizer. The global gauge forest runs from each of the nine interior vertices toward \(x=0\) at fixed interior transverse indices (\(y=w=1\), \(z\in\{1,2,3\}\)); it leaves 51 free edge variables. The globally retained counts are 96, 48 and 4 for \(s=0,1,2\). The globally omitted counts in those categories are 496, 80 and 0.

This is an exact finite assembly identity and a loss of a genuine identity stiffness direction in the face-only construction. It is not an estimate uniform in background or scale, a renormalization flow, a continuum construction, or a mass-gap result.
