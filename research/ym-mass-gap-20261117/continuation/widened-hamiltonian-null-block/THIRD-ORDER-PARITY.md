# Canonical and folded third order, and the center-parity restriction

2026-11-27 · Finite open SU(2) Hamiltonians, fixed spatial spacing. Parent: [quadratic whole-band bound](UNIFORM-QUADRATIC-BAND.md) at commit `de0dd3aa24da10f039e8846168c2e0ab50ae5134` and [planar eigenmode separation](COMPLEMENT.md). No control of volume-uniform perturbation radii or continuum limits.

**All fifteen X-odd planar branches whose first-order shift vanishes have identically even energy germs, so none has a cubic term.** In a larger box the corresponding structural obstruction is exact: a quadratic eigenspace can have a nonzero cubic splitting only if it mixes opposite center parities. Such splittings come in ± pairs. The actual zero-slope cubic operator includes an inverse-slope folding term beyond the canonical third-order operator of the original free band.

## Canonical Hermitian free-band expansion

Let H(g)=H₀−gV and let P project to the isolated free E-band, Q=1−P, R=Q(E−H₀)⁻¹Q. Write T=PVP, K=PVRVP, S=PVR²VP and use E=15 for the model above. With the sign convention for V as the **positive** coefficient in H₀−gV, the canonical Hermitian expansion is

    H_eff = E I − g T + g² K − g³ B₃ + O(g⁴),
    B₃ = P V R V R V P − ½ {T,S}.

For derivation, set W=QVP, D=QVQ, and write the interacting band near zero as the graph of X(g):ran P→ran Q. It is analytic since V is bounded and the free band isolated. Graph invariance reads H_QP+H_QQ X=X(H_PP+H_PQ X). Equating first and second orders gives

    X = −g R W + g²(R D R W − R² W T) + O(g³).

The raw band-coordinate operator H_PP+H_PQ X has cubic coefficient −W*R D R W+S T. Its metric is I+X*X=I+g²S+O(g³). The isometric identification of the graph with P uses the **positive** square root of the metric; conjugating the raw operator by this square root adds −[S,T]/2 at cubic order. This produces the displayed Hermitian formula. The minus sign in front of g³B₃ belongs to H₀−gV. No unbounded domain manipulation outside the resolvent is needed; the graph lands in the fixed Hamiltonian domain.

## Fold into the physical zero-slope group

Set N=projection onto ker T and M=P−N. At fixed finite volume T_M is invertible if M is nonempty. Divide H_eff−E by g, yielding −T+gK−g²B₃+O(g³). Apply the canonical band reduction again at its zero eigenvalue, using complement resolvent T_M⁻¹. Restoring the common factor of g gives for the N group

    H_null(g) = E I_N + g² K_N + g³ C₃ + O(g⁴),
    C₃ = −N B₃ N + N K M T_M⁻¹ M K N.

If M is empty the last term is zero. The anticommutator in N B₃ N vanishes because T N=N T=0. This does not remove the displayed folding term. The verifier has a graded finite-matrix negative control: both quadratic values are 1/3, −B₃ alone would give cubic eigenvalues ±1/9, but the folded term changes them to ±2/9, verified independently from the exact full characteristic determinant. That matrix is a test of the perturbation formula, not a cubic lattice example with nonzero splitting. No uniform bound on the inverse of the nonzero first-order slopes has been established here.

## Center symmetry and the exact restriction

In an open cubical rectangle with integer coordinates, multiply the link in direction i by center sign (−1) to the power Σ_{j<i} xⱼ (x is its lower endpoint; the sign is the same at either endpoint along i). The product around every elementary face is −1, since for a face in directions i<j the j-directed links differ by one in coordinate i and the i-directed links have equal signs. This unitary C is self-adjoint, commutes with the link Casimir and gauge action, and satisfies

    C H(g) C = H(−g),   C T C = −T,   C K C = K,   C B₃ C = −B₃.

It also preserves geometric reflection sectors on physical vectors: the ratio between its link signs and the reflected ones is flat, with product +1 around every plaquette. On the open rectangular box such a flat Z₂ edge field is a vertex coboundary (path products are independent up to loops built from elementary squares). Its sign action is therefore a gauge transformation and is trivial on the physical Hilbert space. The harness checks this directly for all three coordinate mirrors in three boxes, and confirms agreement of C with the original planar sign (−1) raised to face-mask population.

The projections N,M commute with C. Since C T_M⁻¹ C=−T_M⁻¹, the **folded** cubic coefficient C₃ is center odd. For a quadratic eigenspace of K_N, its projection commutes with C. The cubic coefficients on that eigenspace are the eigenvalues of the C₃ compression to it; with the ± center decomposition that compression has form [0 D; D* 0]. In particular it vanishes if only one parity occurs, and any nonzero cubic coefficients come in plus/minus singular-value pairs. This need not vanish as a full operator between distinct quadratic eigenspaces.

If a quadratic eigenvalue is simple within a fixed spatial symmetry sector, the unique near-zero analytic branch with that quadratic coefficient is taken by C to itself at −g. Its eigenvalue germ is even, not just zero to cubic order. The existing exact gcd checks give this situation for all fifteen resolved X-odd planar null branches, including the explicit direct-probe q branch. The unique vacuum germ is even as well, so its subtraction does not change cubic coefficients. No claim is made that all null branches in a larger cubic box have simple quadratic coefficients, or that mixed-parity cubic splittings occur there.

## Reproduce

Run `python3 second_order.py` (Python 3.12, SymPy 1.14). The existing entry point retains its prior output and verifies all center assignments, gauge equivalence under mirrors, agreement with the existing planar grading, the graph-normalization sign and the independent determinant check with the nonzero fold.
