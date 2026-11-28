# Clamping the visible complex of an open Wilson cell

Take the four-dimensional cubical vertex box \(\{0,\ldots,b\}^4\), integer \(b\ge2\). A boundary-tangential edge has a fixed coordinate equal to 0 or \(b\). Prescribe its SU(2) value but omit all plaquettes whose edges are all boundary-tangential. The result below classifies exactly which boundary data can have zero included action, and the full quadratic nullspace at identity. It is not a quantitative stiffness estimate uniform in geometry or background.

## Retraction and nonlinear zero-action test

An elementary plaquette is included exactly when both fixed coordinates are interior. If one is on the boundary, every constituent edge is tangential; conversely if both are interior, in each varying unit interval at least one endpoint is interior because \(b\ge2\), so there is an edge with all transverse coordinates interior. Form the visible cubical complex \(K_b\) from the included plaquettes and their faces. Its edges have at most one fixed boundary coordinate, and its vertices at most two boundary coordinates: these conditions are necessary, and are sufficient by choosing the remaining plaquette coordinate (on a boundary if required) to vary inwards. Edges with exactly one fixed boundary coordinate are the *active* tangential edges. Those with two or three are inactive.

For each coordinate \(k\) let \(c(x)=\max(1,\min(b-1,x))\) and deform that coordinate by \(x_k\mapsto(1-t)x_k+t c(x_k)\), keeping all other coordinates fixed. This is a continuous homotopy on \(K_b\):
- An included plaquette is fixed if \(k\) is transverse. If \(k\) is a varying coordinate, the image stays within that elementary square: \([0,1]\) or \([b-1,b]\) contracts towards its interior endpoint and the remaining intervals stay fixed.
- A visible edge parallel to \(k\) likewise stays within itself. A nonparallel edge moves only when its fixed \(k\)-coordinate is on the boundary. That must be its sole fixed boundary coordinate, so the prism square formed by moving it one step inwards is an included square, as both other fixed coordinates are interior. Its endpoints' tracks are included edges.
- A visible vertex that moves has at most one other boundary coordinate, so its track is a visible edge.

The consecutive four homotopies fix the whole inner complex pointwise. Their endpoint is in the cubical 2-skeleton of \([1,b-1]^4\), since no extra varying coordinate is introduced by the clamp at \(t=1\). Thus this is a strong deformation retraction onto the inner cubical 2-skeleton. For \(b=2\) the target is a point. Otherwise the inner 2-skeleton is simply connected: attaching the remaining cells of dimension at least 3 to form the contractible inner cube does not change its fundamental group. In particular \(K_b\) is connected and simply connected.

For a group-valued link assignment with identity holonomy on each included elementary square, the holonomy of an edge path is invariant under edge cancellations and elementary square relations. These generate the edge-path homotopy relations of \(K_b\); no commutativity is used. Hence transports from a fixed visible root define group values at visible vertices, and every visible link is the difference \(g_v^{-1}g_w\) of its endpoint transports, in that oriented convention. The Wilson terms are nonnegative and are zero precisely on identity SU(2) holonomies. By compactness there is a minimum. The minimum is zero **if and only if the prescribed active tangential links have trivial holonomy around every loop of the active graph**. Necessity follows from the pure-gauge representation; for sufficiency, take endpoint group values along the active graph, extend them arbitrarily to the other visible vertices, and choose the free links to be the corresponding group differences. The inactive tangential links are absent, so this criterion places no condition on them. One can check active flatness on fundamental loops of any spanning tree. The pure gauge here is on the *visible* graph; it need not make the omitted tangential links flat or obey identity boundary gauge, and the statement does not constrain those links.

## Linear identity response and closed-form dimensions

Use one real Lie component and set \(m=b-1\). If a prescribed boundary direction has zero minimized quadratic action, the combined additive visible curl is zero. The same path argument with values in the additive group gives an exact vertex gradient on \(K_b\); hence its active restriction is a graph gradient. Conversely any active gradient extends to a vertex potential on the visible graph and gives zero curl. If using the interior forest in the one-edge fixture, pick each interior potential equal to its forest-root potential to enforce zero forest link variation. Thus the active kernel is exactly the active graph gradient space, with every inactive coordinate arbitrary, not a rank extrapolation.

The active graph contains \(E_A=24 b m^2\) edges: four varying axes, three choices of fixed boundary coordinate, two sides, \(b\) link origins along the varying axis and \(m^2\) choices of the remaining coordinates. Its vertices are exactly those with one or two boundary coordinates, so \(V_A=8m^3+24m^2\). It is connected. Indeed within each of the eight facets its relative interior grid is connected (a single vertex if \(m=1\)); active edges of that facet also attach their two-boundary-coordinate endpoints to this grid. A facet and any facet with a different normal coordinate share such vertices. The resulting facet adjacency graph is connected, including between opposite facets through a third facet. The rank of the active graph gradient space is \(V_A-1\), so the **Schur rank** and number of visible independent cycle fluxes are
\[
E_A-V_A+1=16(b-1)^3+1.
\]

The full tangential boundary graph is connected, as each full facet grid is connected and meeting facets share vertices. The total tangential count is \(4b((b+1)^3-m^3)\), thus the inactive count is
\[
E_Z=16 b(3m+2).
\]
The full boundary vertex count is \((b+1)^4-m^4\), exceeding \(V_A\) by \(32m+16\), the vertices with three or four boundary coordinates. All gradients on the active graph are restrictions of full boundary gradients, and those full gradients vanishing on active edges have dimension \(32m+16\) because the active graph is connected. Therefore, after quotienting by full boundary gauge, the **extra zero-stiffness dimension** is
\[
E_Z-(32m+16)=16\bigl(b^3-(b-1)^3\bigr).
\]
Each class can be represented on inactive edges alone, and the count is per real Lie component (multiply by 3 for SU(2)). For \(b=2\) the rank is 17 and the nongauge nullity 112; for \(b=4\) they are 433 and 592. The included action is exactly insensitive to those inactive link values even nonlinearly.

For each fixed side \(b\), the connected pure-gauge argument also gives the unique zero at identity modulo interior gauge, and the forest-slice Hessian positivity follows from the additive result and zero boundary perturbation. Thus the existing finite-dimensional fixed-cell Laplace argument applies at identity for each such \(b\), not with constants made uniform as \(b\) grows. No conclusion here gives arbitrary-background coercivity, continuum scaling, or a mass gap.

`python verify_clamp_geometry.py` checks every visible edge's four clamp tracks and squares, graph counts and connectivity, and a separate integer unit-pivot curl rank for each \(b=2,3,4,5\). The all-side result is the topological proof, not the finite replay.
