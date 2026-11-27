# Exact second-order correction from a third spatial dimension

2026-11-27 · Finite, fixed-spacing SU(2) Hamiltonian. Parent: [padded planar calculation](QUADRATIC-LOCALITY.md) at commit `f7300895b47ff0017e66ea6fced5e895afc2dc28`. Use the same electric Casimir normalization and magnetic coupling on every elementary face.

**Adding the perpendicular plaquettes changes the vacuum-subtracted second-order operator compressed to the old planar energy-15 band by exactly −5/42 times identity.** The embedded direct probe q therefore has diagonal coefficient −13/336 in any fully padded finite open cubic box. This is generally a diagonal, not an identified eigenvalue. It does imply that at least one zero-linear-slope branch has vacuum-subtracted quadratic coefficient at most −13/336 and is detected by q for sufficiently small coupling in each such fixed box.

## Setup and parity control

Embed the original 4-by-2 planar patch in one horizontal layer of an open cubic rectangular mesh, leaving at least one cell on each side of the patch in its plane and on either side of its plane. Let A be the set of all links in the eight patch plaquettes. Compare this cubic mesh to its fully padded planar layer alone. The original free band vectors, extended as constants in all added link variables, still lie in energy 15. Every one of the 56 original link labels is binary with exactly ten spin-1/2 links; the original band has dimension 64 including eight multiplicity-two labels. Denote that lifted space by L. Let K be the second-order free-band Schur operator for each mesh, projecting away its entire free energy-15 band; the vacuum shift is −B/24 in a mesh with B faces. Compression of the vacuum-subtracted operator to L means the sesquilinear form of K+B/24 on L, not reduction of the full interacting operator.

An exterior elementary face p shares at most one link with A. A parallel face in another layer shares none. Distinct elementary faces everywhere in this mesh share at most one link. Thus for any distinct p′, an exterior p has an edge outside A and not in p′. The link-center sign at that edge makes the p term odd and the p′ term even, so the mixed resolvent form vanishes. This works in both orderings and does **not** require injectivity of the global face-to-boundary map: in three dimensions the six faces of a cube already have zero mod-two boundary.

## Decoupled diagonal contributions and the planar operator identity

Two vectors f,h with different old link-center labels give no same-face cross term: both labels are flipped by the same face insertion and stay different. For f,h on the same label, the exterior face either touches none of its occupied links or exactly one. A disjoint face is the vacuum contribution −⟨f,h⟩/24. In the one-link case the [single shared link calculation](QUADRATIC-LOCALITY.md#padded-q-calculation-and-local-boundary-term) applies by conditioning on the other links. Its singlet and triplet Gram forms are respectively ⟨f,h⟩/16 and 3⟨f,h⟩/16 by polarization. The intermediate energies are 18 and 22, so the contribution after subtracting the vacuum is exactly −⟨f,h⟩/168. This does not assume a one-dimensional label space.

Every occupied planar link belongs to exactly two perpendicular faces, one on each side of the layer; none of those faces is counted twice because it has only one planar link in the layer. Thus each ten-link label meets exactly 20 occupied perpendicular faces. All remaining nonplanar faces cancel as vacuum terms. The coplanar terms, including pad-border terms, agree with the 2D calculation: the H₀ spectral action on functions of those links is unchanged by extending as a constant. Therefore on the **whole** lifted planar band L,

    (K₃D + B₃D/24)|_L − (K₂D + B₂D/24)|_L = −20/168 I_L = −5/42 I_L,

where the vertical bars mean compression. In particular the normalized q diagonal is 9/112−5/42=−13/336. Equivalently its average total occupied exterior count is 6 coplanar plus 20 perpendicular, giving the unpadded value 13/112−26/168. Its exact absolute diagonals on the 6×4×2 and 8×6×3 test boxes are −2645/336 and −7321/336, respectively.

## Variational and visibility consequence in each fixed cubic box

Let P now be the **full cubic** free energy-15 projection. The embedded q remains in ker(PVP): the eight internal faces still act in the reducing subspace constant on all added links, where the old PVP q=0; an exterior insertion only reaches energies 21, or 18 and 22, never 15. Let N be the projection onto the full cubic ker(PVP). The vacuum-subtracted quadratic slopes of the zero-linear-slope group are the eigenvalues of N(K₃D+B₃D/24)N on ran N, by the [two successive analytic band reductions](README.md#why-this-proves-individual-detection). The isolated free band is finite-dimensional at every fixed finite mesh (fixed electric energy gives finitely many link and intertwiner labels), and the finite matrix is real-analytic Hermitian; analytic eigenvectors can be chosen even when some eigenvalues coincide (Rellich). No assumption of simple slopes is needed here.

The spectral measure of the normalized q for this finite Hermitian coefficient matrix has mean −13/336. At least one of its eigenvalues at or below this mean therefore has positive q-weight. An analytic orthonormal basis of the zero-linear-slope branches at g=0 spans each quadratic eigenspace, so at least one such branch has free vector with nonzero inner product against q. Multiplying the free vacuum 1 by q gives q itself; that amplitude stays nonzero in a sufficiently small g neighbourhood by continuity. If a branch remains degenerate, the claim can be stated invariantly as nonzero overlap with its eigenspace. The result is an existence bound, not a proof that q remains an eigenvector, that the branch is unique, or that the earlier explicit numeric interval survives the extra dimension.

## Reproduce and limits

Run `python3 second_order.py` (Python 3.12, SymPy 1.14). The existing verifier additionally checks:
- all 56 binary labels and 20 perpendicular incidences each in both boxes;
- the pairwise face-intersection bound, cube-boundary cancellation, and exterior mixed-term parity for all six q labels;
- exact Haar spectral weights for every exterior insertion acting on q in both boxes;
- all 160 occupied perpendicular insertions against the nonzero off-diagonal Gram elements of the eight multiplicity-two planar labels, per box;
- both absolute diagonals and their common vacuum-subtracted value.

The proof gives the compression identity for any finite fully padded open rectangular box in three spatial dimensions. The script does not enumerate the full cubic spectrum. There is no bound on off-planar leakage, uniqueness, numerical visibility interval, uniformity in mesh size, or continuum mass-gap result.
