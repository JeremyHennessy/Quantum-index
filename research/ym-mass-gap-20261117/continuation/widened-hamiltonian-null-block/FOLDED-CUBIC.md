# Exact quadratic eigenvector and folded cubic transfer at zero momentum

2026-11-28 · Canonical zero-total-momentum coefficient operators, infinite spatial lattice at fixed spacing. Parent: [canonical cubic mixing](CUBIC-MIXING.md), commit 30ac4c8fed44d9ad825d9af80fde8d8f846852a4. No finite-coupling expansion uniform in volume, scattering, particle, or continuum claim.

**The even three-loop probe \(b\) is an exact eigenvector of the null-compressed vacuum-subtracted quadratic operator with coefficient \(-13/336\). The full folded cubic coefficient has a nonzero matrix element from \(b\) to a specific nearby odd invariant null direction \(d\).** The four near, vertex-disconnected rectangle-plus-plaquette references still have zero projected cubic amplitude. This test does not establish an on-shell overlap with the far separated channel.

## Exact reducing components and reflection blocks

Use \(H=H_0-gV\), the electric energy-15 free projection \(P\), first-order \(T=PVP\), vacuum-subtracted \(B=PVRVP+(n_{\rm faces}/24)P\) in finite volume or its linked local limit, null projection \(N\), and \(M=P-N\). Use phase-one translation stencils at zero momentum. The [binary band result](BINARY-QUADRATIC-BOUND.md) supplies all physical edge labels on which these stencils act, without dropping vertex-intertwiner multiplicity.

The three-loop observable is center even and invariant under coordinate sign reflections at zero momentum: the exact normalized supports transform among its three original traces with the same coefficients, including the possible translation reanchoring. A repeated face meeting the occupied support preserves the label; each other potentially contributing second-order term is an adjacent face pair with its six-edge symmetric difference. The source loops give 24 such adjacent parity returns in total. Their targets together with the source labels lie in exactly three closures under the one-face parity toggle with exactly two occupied input edges. These are reducing for \(T\): every resonant transition appears in that toggle closure, even if some candidate matrix elements vanish.

For each support of the resulting closures, choose the complete independent Haar circuit basis, retaining all intertwiners. To restrict to the eight sign reflections, choose a representative in each shape orbit, sum the actual transformed circuits (including reanchoring), and retain independent sums using exact Gram minors. The stabilizer is included with multiplicity; the full orbit metric satisfies \(\langle\sum_R Rf,\sum_R Rh\rangle=8\langle f,\sum_R Rh\rangle\). This spans the invariant subspace because group averaging maps each unreduced basis to such sums. The cross-parity block is the rectangular form \(C=(\langle e_i,T o_j\rangle)\), with metrics \(G_e,G_o\). Direct replay gives:

| Shape closure | Physical dimensions (even, odd) | Reflection-invariant dimensions (even, odd) | Exact rank of \(C\) |
| ---: | ---: | ---: | ---: |
| 21 | (9,16) | (4,4) | 3 |
| 296 | (116,196) | (18,32) | 18 |
| 892 | (412,600) | (61,80) | 61 |

The two larger components have no even invariant null direction. On the small component its only even invariant null line is \(b\), checked explicitly, with norm squared 3. Since \(B\) preserves center and reflections, \(N B N b\) cannot have any other component. The calculation verifies \(\langle b,Bb\rangle=-13/112\), giving the exact eigenvector claim. No simplicity in the entire even quadratic fibre is asserted.

## Reduced inverse and exact folded amplitude

The small component has one odd invariant null direction. Take \(d\) on that line, with norm squared 48 and sign fixed by \(\langle d,B_3b\rangle=-1/384\), where \(B_3=PVRVRVP-\{T,PVR^2VP\}/2\). The latter value is independently contracted from the cubic bridge kernel and fixes the sign of the reported matrix element. The contribution of \(B_3\) in \(H_0-gV\) has a minus sign.

For each component, compute the even covector \(u_i=\langle e_i,Bb\rangle\) and the odd covector \(v_j=\langle o_j,Bd\rangle\) by the exact quadratic Haar kernel with both orderings of adjacent pairs and matching repeated-face vacuum corrections. No component outside the three listed can contribute, since the input is zero there and \(T\) is reducing. With independent rows \(C_I\) of \(C\), put \(W=G_o^{-1}C_I^*\) and \(D=CW\). Solve
\[
D^*G_e^{-1}D y=D^*G_e^{-1}u,\qquad x=Wy.
\]
This uses the weighted projection of \(u\) onto the in-range covectors; \(x\) lies in the \(G_o\)-orthogonal complement of the odd kernel. In full row rank components one can instead solve \(Dy=u\). The checker tests the exact weighted orthogonality equations \(C^* G_e^{-1}(Cx-u)=0\). Thus \(x\) is the odd coordinate vector of the reduced inverse \(T_M^{-1} M B b\) on that component. The folded form is the sum of \(v^*x\). Using \(B\) rather than the unsubtracted \(K\) makes no difference in this term, since each scalar leg is killed by \(NM=0\).

The separate folded contributions are, in table order,

    −107/6720
    −334090367/81441753792
    +26679351913505668588007/41008155541763926704218688

Their sum is \(-80240078351571085663922219906289/4141587434395310133968393347992640\). With the canonical term, the actual null cubic coefficient \(C_3\) of the formal expansion satisfies

    ⟨d,C₃b⟩ = −416728166446999793140277173375349
                 /24849524606371860803810360087955840.

In particular the canonical and folded contributions do not cancel in this matrix element. \(C_3 b\) is odd and reflection invariant. Its component in the small reducing null block must be a multiple of \(d\). The checker verifies that \(d\) has no support on the four rectangle-plus-plaquette reference labels in that block. Thus each reference gives zero for the full projected cubic amplitude, not merely for its canonical part.

This is a single matrix element, not the full vector \(C_3b\). A positive spectral density for \(d\) alone would not prove a positive on-shell density for \(C_3b\); its other components might interfere. No actual nonzero-coupling channel or atom follows.

## Reproduce

Run **python3 folded_cubic.py** or the existing **python3 second_order.py**, Python 3.12 with SymPy 1.14. The added exact check enumerates the shape closures, redoes the reflection Gram and rectangular forms, verifies the probe's null direction and mean, independently evaluates the canonical bridge against \(d\), solves the three rational weighted systems and checks all exact fractions and reference zeros. No numerical spectrum solver is used.
