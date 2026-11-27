# Separated four-plus-six loop channels at second order

2026-11-27 · Infinite spatial lattice at fixed spacing, **quadratic effective operator only**. Parent: [the energy–momentum window for the dressed probe](JOINT-MOMENTUM-WINDOW.md), research commit 27fcc14d66fc9034274f901566e2e0e38f07f569. This is not scattering for the interacting Hamiltonian.

**At total momentum zero the center-odd part of the full first-order null quadratic fibre has essential spectrum containing \([-883/6720,59/2240]\).** The number \(-13/336\) is inside this interval, but the three-loop probe \(b\) is **center even**. Therefore this interval alone does **not** give an alternative channel in the probe's quadratic symmetry sector or obstruct isolation there. The center flip exchanges \(g\) with \(-g\), not a symmetry of the original Hamiltonian at a fixed nonzero \(g\).

## Exact low free bands and translation conventions

Energy 6 consists of the three elementary face orientations and all their translates; its first-order operator vanishes. For energy 9 the twice-energy cost 18 permits either six fundamental links or one spin-3/2 and one fundamental link. Gauge center parity disallows the latter two-edge support. An even-degree fundamental subgraph of six edges must be one simple six-cycle: the graph is bipartite, and any two disjoint cycles would use at least eight edges. A six-cycle has coordinate span at most two on each axis (span three would use all moves along one axis). Enumerating simple length-six circuits in the \(3\times3\times3\) coordinate box and identifying translations gives six planar rectangles and sixteen cube hexagons, with a single real unit trace per label. The checker applies a coordinatewise minimum anchor to each edge set and a deterministic circuit orientation. Trace is insensitive to reversal in SU(2).

The verifier builds the exact first-order insertion matrix on six-cycles. It finds 48 directed nonzero entries of value \(1/4\) for a normalized face half trace, all between hexagons anchored in the same cube. The first-order 22-dimensional internal fibre (six rectangles plus sixteen cube hexagons) has polynomial
\[
 x^{14}(x^2-3/4)(x^2-1/4)^3 .
\]
The kernel is eight internal cube directions plus six rectangles. An elementary face has center sign \(-1\); the rectangles have \(+1\). The eight cube null directions all have \(+1\) as well: the full 14-column rational null basis \(U\) satisfies \(C_9 U=U\) for the exact loop center-sign matrix \(C_9\). The grade of a loop is invariant under translation (translating the link sign background changes it only by a vertex gauge transformation). Hence every separated \(E_6\times\ker T_9\) null product is center odd.

## Exact quadratic Bloch endpoint computation

Use the reduced resolvent and vacuum subtraction with the same normalization as in the [quadratic linked-pair calculation](UNIFORM-QUADRATIC-BAND.md). On the full low band the terms are repeated faces touching the occupied links, with \(+1/24\) matching vacuum subtraction per face, and unordered overlapping face pairs with both orderings. The remaining pairs cancel. Only binary edge labels occur at these energies; the output label of a distinct pair is therefore the input support toggled by both face boundaries. Discard toggles that are not loops in the band. The checker evaluates each surviving ordered pairing with the existing exact Haar spectral Gram kernel, then checks Hermiticity of the translation stencil. It obtains the following nonzero coefficients (source orientation, target orientation, spatial shift):

| Band | Exact multiset |
| --- | --- |
| 6 | \(-11/840\) (3), \(-1/168\) (36) |
| 9 | \(-1/42\) (6), \(1/96\) (72), \(7/192\) (12), \(1/48\) (48), \(-1/48\) (48), \(17/448\) (4) |

At each momentum \(p\), use the usual Bloch phases on the translation stencil; in energy 9 restrict to its first-order kernel using \(U\) and Gram \(G=U^*U\). The basis is momentum independent since the first-order cubic entries never translate their cube. With \(r_\pm\) the two roots of \(x^2-\frac{15}{448}x-\frac1{448}\), the compressed energy-9 endpoint spectra are:

| Momentum | Eigenvalues (multiplicities) |
| --- | --- |
| \(0\) | \(-3/64\) (3), \(r_-\) (2), \(-1/42\) (4), \(r_+\) (2), \(23/192\) (3) |
| \((\pi,\pi,\pi)\) | \(-3/64\) (3), \(-1/42\) (6), \(1/64\) (2), \(23/192\) (3) |

The smallest energy-6 quadratic coefficient is \(-71/840\) at \(0\); at \((\pi,\pi,\pi)\) all three coefficients are \(3/280\). The checker verifies exact monic endpoint polynomials, the low energy-6 minimum by positive semidefiniteness and rank, and exact root locations/order.

## Separated tail and essential spectrum

In the full free energy-15 space consider a four-link loop and a six-link loop with centers far apart. A resonant face insertion touches at most one component; a remote face simply adds energy 6 and cannot be resonant. Insertions on the four-link loop do not preserve its energy; a preserving insertion on the six-link loop is exactly its first-order action above, hence stays in its original cube or vanishes for a rectangle. All orientation blocks with a fixed sufficiently separated pair of anchors are invariant. By self-adjointness their sum reduces the full first-order operator. Its kernel projection on these blocks is therefore exactly \(I_3\otimes N_9\), not the null projection of a truncated approximation.

For quadratic terms on this tail, the disconnected-pair cancellation removes terms with one insertion near each distant component. The remaining connected insertions act near just one loop; they can only affect its nearby center, and the spectator's fixed energy cancels in the resolvent denominator. Disconnected vacuum contributions cancel as before, and the local subtraction splits. Consequently, on packets whose relative-coordinate support is sufficiently far from the interaction region and its finite hopping enlargement, the null-compressed operator is the sum of the two low-band quadratic translation stencils, with the energy-9 stencil compressed to \(N_9\). Only bounded moves of the two anchors occur there. This argument uses actual supported vectors in the first-order kernel; no assumption that the full quadratic operator reduces the entire separated space near its boundary is needed.

For the zero-momentum statement use the canonical Bloch fibre: choose a deterministic translation anchor and internal basis for each finite edge label, and evaluate the translation stencils at the given momentum. The bounded block row sums in the [binary quadratic bound](BINARY-QUADRATIC-BOUND.md) are bounds on the sum of absolute block norms of those terms and apply also after phase evaluation. The first-order stencil is likewise bounded, since only finitely many faces touch any ten-edge label. Take its kernel projection at this momentum and compress; there is no use of an arbitrary almost-everywhere representative of the direct integral. On the reducing separated tail this choice always gives the same momentum-independent $I_3\otimes N_9$.

At fixed total momentum zero, the tail symbol at relative momentum \(p\) is \(B_6(p)\otimes I+I\otimes A_9(-p)\). For each eigenvalue of this symbol, take its internal eigenvector times a normalized relative-coordinate plane wave with growing cubic cutoff whose support also escapes to infinity. This gives a weakly null sequence; a hopping move of bounded range changes the cutoff only on a boundary strip, of size \(O(\ell^2)\) compared with \(O(\ell^3)\) in a cube of side \(\ell\). Thus the residual tends to zero. These are singular Weyl sequences in the center-odd null fibre, proving inclusion in its essential spectrum.

Along \(p=(\theta,\theta,\theta)\) for \(0\le\theta\le\pi\), add the smallest energy-6 eigenvalue to the first, fifth, and tenth ordered energy-9 eigenvalues at \(-p\). The ordered eigenvalues of the finite Hermitian symbols are continuous, so each branch image contains the interval between its endpoints. The three endpoint intervals are
\[
[-883/6720,-81/2240],\qquad
[r_--71/840,-11/840],\qquad
[r_+-71/840,59/2240].
\]
They overlap strictly, as checked exactly using the quadratic defining \(r_\pm\). Their union gives the stated inclusion, not an equality of spectra. The three-loop probe's masks \(39,114,119\) are even, and the vacuum-subtracted quadratic operator commutes with center, so the overlap of the *number* \(-13/336\) with this odd spectrum does not predict direct probe mixing. No actual finite-coupling two-particle channel, same-sector obstruction, isolated excitation, or continuum conclusion follows.

## Reproduce

Run **python3 separated_channel.py**, or the existing **python3 second_order.py** entry point, with Python 3.12 and SymPy 1.14. The independent algorithm enumerates the low translation shapes from unit-edge cycles, evaluates exact Haar weights, and checks the endpoint, grading and interval claims. It does not enumerate the full energy-15 fibre; the reducing-tail argument supplies the spectral inclusion.
