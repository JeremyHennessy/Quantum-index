# Orientation correction for the archived symmetry-line residual

2026-11-28 UTC. This is a sign-label correction, not a change to any root, multiplicity, eigenvalue slope, or boundary estimate.

In unscaled operator coordinates let \(a_j\) be the three elementary eigenvalues and \(Q_9\) the monic six-loop characteristic after removing its three flat factors. The oriented residual of the shifted operator is
\[
R=-\prod_{j=1}^3 Q_9(E-a_j).
\]
Equivalently it is minus the ordered norm of \(Q_9(E-\lambda)\) in the degree-three monic elementary algebra. Compute the norm as the determinant of multiplication by \(Q_9(E-\lambda)\) there, using a companion matrix; this does not depend on how a software resultant routine orders its inputs.

The [archived symmetry-line file](symmetry-lines.json) used an ordered-resultant convenience call with polynomial degrees three and eleven. In the replay environment, swapping odd degrees internally can omit the reversal sign (the same issue is visible on \((\lambda-1,\lambda^3)\)). Direct multiplication-matrix verification establishes that its recorded residual polynomial is **minus** the unscaled operator residual on each of the six lines. The true corner sign sequence in the order all plus, one minus, two minus, all minus is \(+,-,-,+\). The archived corner checker reproduces the archived orientation; all four values are still nonzero.

The [line classification](RESIDUAL-SYMMETRY-LINES-AND-LOCAL-BOUND.md) used the residual zeros and their orders, plus eigenvalue lists and signed inertias computed separately from the two characteristic polynomials. Multiplication by \(-1\) leaves the zeros, their orders, the absence of overlap with the flat factor, and the inertia-based slopes unchanged. This correction therefore does not change the local bounds or the negative-face coverage.

Replay against the original bytes: **python verify_residual_orientation.py symmetry-lines.json**.
