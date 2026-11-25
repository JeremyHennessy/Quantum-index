# The second-order plaquette band crowds while an individual local residue vanishes

**2026-11-25 | Research-only continuation | Phase 15 not activated.**

In the [exact finite-box splitting](2026-11-25-electric-adjoint-residue.md), all nontrivial second-order geometry is the signless Laplacian M=D+B of the edge-adjacent plaquette graph. This note gives rigorous box-size estimates for that **coefficient matrix**; it does not treat the perturbation remainder at fixed nonzero coupling. The [separate volume-uniform band result](2026-11-25-volume-uniform-electric-plaquette-band.md) controls total local plaquette weight at fixed small coupling.

Let the spatial box have L unit cells in each direction. Order the top two eigenvalues ρ₁≥ρ₂ of M and normalize its positive Perron eigenvector a to ℓ² norm one. There are constants independent of L for which
\[
0\le 24-\rho_1\le24-\rho_2\le C L^{-2},\qquad
\|a\|_\infty\le C' L^{-3/2}.
\]
Hence the second-order eigenvalue separation coefficient (ρ₁−ρ₂)/168 tends to zero at least as fast as L⁻². The coefficient linear in γ of the single Perron mode's local adjoint residue is O(L⁻³) uniformly in the choice of the adjacent pair. The ground-to-band-edge second-order coefficient tends to 7/120−24/168=−71/840.

## Two interior test functions

The graph has degree at most 12, with degree 12 away from the boundary. The quadratic form of 24I−M is
\[
\sum_{\{p,q\}\ {\rm adjacent}} |f(p)-f(q)|^2
  +2\sum_p(12-D_{pp})|f(p)|^2.
\]
Choose two disjoint interior cubic regions of side proportional to L at mutual lattice distance at least two; choose both away from the external boundary. In each use a fixed nonempty Lipschitz cutoff of the rescaled anchor position, continuously extended by zero, with the same profile for all three plaquette orientations. Its squared norm is bounded below by cL³, since it is bounded below on an interior subcube. Each graph-edge increment is O(L⁻¹) and only O(L³) edges contribute; the boundary potential term vanishes. Each Rayleigh quotient is O(L⁻²). The test functions and their energy forms have zero cross terms by the separation, so the two-dimensional min–max principle gives the assertion. Finitely many small boxes can be accommodated by increasing C.

## Uniform maximum bound

On the infinite labeled plaquette graph with three orientations at each anchor in Z³, let P∞=(12I+B∞)/24, the symmetric lazy walk. The finite T_L=M/24, extended by zeros, is entrywise dominated by P∞. Its Perron vector obeys
\[
|a(p)|\le(24/\rho_1)^n\|P_\infty^n(p,\cdot)\|_2.
\]
For each orientation, translation by a single lattice step in any coordinate while retaining that orientation takes at most two adjacency steps. Steps in the plaquette plane share an edge directly; a perpendicular step uses one bridging perpendicular square. Since the walk is lazy, P∞² therefore puts at least 24⁻² mass on every such translation. The form of I−P∞² dominates the same-orientation nearest-neighbor lattice form with this fixed positive prefactor, because all other symmetric jump contributions are nonnegative. In Fourier variables this is the matrix-form bound I−P∞(k)²≥cΣ_i(1−cos k_i)I on the three-dimensional orientation space. Since P∞ is a contraction, integrating the 2n-step diagonal symbol yields a bound C n⁻³ᐟ² on the return probability (use 1−cos k_i≥c'k_i² on [−π,π]). By symmetry this is the square of the row ℓ² norm. Choose n=⌈L²⌉. The already-proved lower bound for ρ₁ gives a bounded prefactor (24/ρ₁)^n. This proves the maximum estimate.

As controls, explicitly generated graphs of side L=2,3,4,5,7,10 reproduced the expected crowding and maximum-amplitude scaling; all 18 oriented coordinate translation cases were independently confirmed on the interior of a finite graph. These finite checks do not replace the proof. In particular a failure to retain a single local-mode residue at volume-independent strength does not imply disappearance of the excitation band. The next relevant quantity is its **mixed local spectral weight** after keeping the whole band, with perturbation constants independent of volume.
