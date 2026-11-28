# Full identity Dirichlet-to-Neumann Schur form of the finite open cell

Use exactly the `136f937f` open-cell fixture geometry, four-dimensional vertex cube \(\{0,1,2,3,4\}^4\), excluding plaquettes with all four edges tangential to the boundary. Instead of perturbing just one edge, specify arbitrary infinitesimal \(\mathfrak{su}(2)\) angles on all positively oriented tangential boundary edges. The forest slice and unit Lie norm are unchanged. The result is at the identity of this one cell, not about arbitrary coarse backgrounds, scale flow, or a continuum limit.

## Schur formula and inactive coordinates

It suffices first to use one real Lie component. Write \(D\) for the signed curl matrix of the 351 edges remaining after fixed boundary links and the 81-edge interior gauge forest; \(B\) for signed curl of the active tangential links into the 864 included plaquettes. An edge parallel to axis \(i\) is active exactly when **one** of its other coordinates is a boundary value. Indeed an included plaquette in axes \(i,j\) has both other fixed coordinates interior. For such a plaquette even when its varying intervals are at boundary endpoints, some edge is not tangential to the boundary, so the plaquette is included. An edge with exactly one boundary transverse coordinate occurs in an included plaquette by varying that coordinate inwards. Any edge with at least two boundary transverse coordinates occurs only in excluded plaquettes. There are 864 active and 704 inactive tangential edges. Write their angle vectors as \(b\) and \(z\).

The Hessian of the minimized action with respect to the boundary is the positive semidefinite Schur form
\[
Q(b,z)=\min_a\|Da+Bb\|_2^2=\|P_{(\operatorname{Ran}D)^\perp}Bb\|_2^2 .
\]
The interior rank is 351. The same Gaussian-coordinate proof for the one-edge fixture applies with a finite-dimensional parameter of 1,568 angles per component on a sufficiently small fixed neighborhood, hence this also equals the \(\beta\to\infty\) limit of the Hessian of \(\beta^{-1}F_\beta\) at identity. The displayed form uses the Hessian, not its half appearing in the quadratic expansion of the action.

## Exact rank and complete nullspace

`python classify_boundary_schur.py` reconstructs the oriented geometry and certifies
\[
 \operatorname{rank}D=351,\qquad \operatorname{rank}[D\ B]=784.
\]
The certificate uses only integer arithmetic. Every chosen leading row pivot is \(+1\) or \(-1\); multiplying by its sign and subtracting integer multiples of previously reduced rows preserve row span, even over every field. At all 864 rows the rank is the number of distinct nonzero leading columns, as the final pivots ordered by first nonzero coordinate are independent. The verifier also independently row-reduces \(D\) alone; it certifies graph connectivity and vertex counts by explicit traversal. Quotienting the joint range by \(\operatorname{Ran}D\) gives **Schur rank 433 per Lie component**, hence rank 1,299 for SU(2).

The active boundary graph is connected on 432 vertices (216 with one boundary coordinate and 216 with two). A vertex potential on that graph can be extended arbitrarily to the 112 remaining boundary vertices, then to the interior vertices by copying the potential of their respective forest root. The resulting full gradient has zero forest edge values. Its included curls vanish by telescoping, and its inactive edges are absent. Consequently all active gradients are null. Their dimension is \(432-1=431\), and the active Schur nullity is \(864-433=431\). Therefore
\[
\ker Q=\{(b,z):b\text{ is a gradient on the active boundary graph},\ z\text{ arbitrary}\}.
\]
Equivalently, gauge-invariant circulations on a spanning-tree basis of the active graph, numbering 433, are complete nondegenerate linear response coordinates. Any nonzero such circulation has strictly positive stiffness on this cell, while none of the 704 inactive coordinate values contributes by itself.

The full boundary graph (all tangential edges) is connected on 544 vertices; its gradient space has dimension 543. Restriction of these gradients to the active graph has rank 431, so the gradients supported only on inactive links have dimension 112. Thus the full kernel has dimension \(431+704=1135\), and even after quotienting by the **full** boundary gauge it has **592 genuine zero directions per Lie component**. Each class is representable on inactive edges alone by subtracting the extension of its active gradient; the residual gauge quotient on those inactive edges has dimension \(704-112=592\). For three Lie components this gives full nullity 3,405, gauge subspace dimension 1,629, and 1,776 nongauge zero directions. These extra directions are a consequence of omitting pure-boundary plaquettes, not a failure of coercivity on the visible active cycle data. Inactive boundary links are absent from the nonlinear included action as well, so their exact invisibility is not just a quadratic phenomenon.

This classifies the identity Hessian of a finite toy cell. In particular one must not use positivity on active cycle data to claim coercivity on *all* boundary gauge classes of the boundary-term-free problem.
