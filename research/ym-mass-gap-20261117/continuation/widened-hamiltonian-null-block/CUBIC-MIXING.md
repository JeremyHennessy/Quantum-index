# Canonical cubic mixing on the probe's near component

2026-11-27 · Fixed lattice spacing, canonical zero total momentum, third-order **effective coefficient** only. Parent research commit 1a0664df807aa0596e3cb72bd57b066c4e3fe231. This is not a nonzero-coupling scattering calculation.

**There is nonzero canonical even-to-odd cubic mixing from the three-loop probe \(b\).** On its bounded 21-label first-order component, the squared norm of \(N B_3 b\) is exactly \(1/7077888\). **Its canonical projected matrix element to each of the four vertex-disconnected rectangle-plus-plaquette references in that component is nevertheless zero.** Their four unprojected matrix elements are all \(-1/576\). These near pairs are not the asymptotically separated reducing tail. The physical folded cubic coefficient is not determined by this calculation.

## Scope and sign

Use \(H=H_0-gV\), \(P=P_{15}\), \(R=Q(15-H_0)^{-1}Q\), \(T=PVP\), \(S=PVR^2VP\), and \(N\) the projection onto \(\ker T\) in the canonical zero-momentum fibre. As in [the parity calculation](THIRD-ORDER-PARITY.md), the free-band Hermitian expansion contains \(-g^3 B_3\), where
\[
B_3=PVRVRVP-\tfrac12\{T,S\}.
\]
The actual first-order-null cubic coefficient is \(-N B_3 N + N K M T_M^{-1} M K N\), where \(K=PVRVP\) and \(M=P-N\). The second term, including possible interference with the first, is **not** evaluated here. Although the anticommutator compressed to the full null band vanishes, it must be included before using the [disconnected-triple cancellation](UNIFORM-CUBIC-BAND.md): the separated cancellations combine both the ordered and anticommutator contributions.

## Exact near component

Use the binary full energy-15 labels and anchor each finite edge set at its coordinatewise minimum. A resonant single face must replace exactly two occupied edges. Enumerate the closure of this label-flip rule from the probe's first loop; its finite orbit contains all three loops of \(b\), 21 edge labels in total. This is an over-enumeration of nonzero transitions before Haar evaluation, so closure plus self-adjointness gives a reducing subspace for the actual \(T\). At each even-degree vertex, enumerate all pairings of its incident links, follow them to trace circuits, and choose linearly independent circuits by exact Haar Gram rank. The ranks agree with the product of the independent local singlet multiplicities. This gives 25 physical circuit coordinates, with no restriction that a degree-four label have only one intertwiner. All translation phases are one at the chosen momentum.

Build the Hermitian single-face form and its \(G\)-metric endomorphism \(T\), where \(G\) is the positive circuit Gram. The nine-column nullspace \(U\) gives the orthogonal projector
\[
N_{\rm near}=U(U^* G U)^{-1}U^* G.
\]
The kernel and Gram identities are verified exactly, including \(T b=0\). Since the component reduces \(T\), this projection agrees with the full null projection on the component even though \(B_3\) itself can map to other components.

## Cubic Haar contraction

It suffices to sum multisets of three plaquettes which are linked by shared edges and meet the input support, because all other canonical contributions cancel or vanish. For the three input circuits of \(b\), the numbers of linked multisets taking the parity label into this component are respectively 32, 32, and 56. Use every distinct ordering within each multiset, including repeats without double-counting identical orders.

For each order, project the first inserted ket and first inserted bra separately onto free electric energies \(E_R,E_L\), then take the middle-face multiplication matrix element. Each of these two once-inserted circuits has at most two fundamentals on any link. With no middle factor on a link, the existing pair contraction uses the common intermediate spin there. With a middle factor present, the outer multiplicities have opposite parity, so the only nontrivial case is two factors on one side and one on the other. Haar-average just the doubled side for its singlet, and subtract that from the full link contraction for its triplet. No third spin projector is needed. The signed contractions are checked against independent second and fourth quaternion coordinate moments for all 8,320 middle-link port and orientation assignments. This extends rather than substitutes for the existing paired kernel check.

If \(e_i=2E_i\) are the two twice-energies, an ordered Gram weight from three full traces enters with coefficient
- \(1/[2(30-e_L)(30-e_R)]\) when neither intermediate energy is the band energy;
- \(-1/[4(30-e_{\rm off})^2]\) when exactly one intermediate energy is the band energy, from the relevant term of \(-\{T,S\}/2\);
- zero when both are in band.

The factors include three half-trace multipliers and the conversion from twice-energy denominators. The result is a covector; multiply by \(G^{-1}\) and then by \(N_{\rm near}\) to interpret it as a projected vector. The reported nonzero norm is for the unnormalized \(b\) (its norm squared is 3). Its projected support consists of four center-odd degree-four labels, each retaining both intertwiner coordinates. For each of the four rectangle-plus-plaquette labels in this component, the raw \(-1/576\) becomes exactly zero **as a matrix element** after the null projection.

## What does not follow

The result establishes a nonzero component of the canonical cubic action, not a nonzero on-shell scattering matrix element. The four vertex-disconnected reference labels are close enough for plaquettes to interact with both loops. Their vanishing does not exclude indirect coupling via nearby connected states, coupling to other first-order components, or cancellation or enhancement by the physical folded term. In particular the separated odd essential spectrum is not shown here to receive positive probe weight. There is no result about an isolated excitation, nonzero-coupling symmetry protection, physical scattering, or the continuum limit.

Run **python3 cubic_mixing.py** or **python3 second_order.py** (Python 3.12 with SymPy 1.14). The existing verifier output is unchanged before the new exact checks.
