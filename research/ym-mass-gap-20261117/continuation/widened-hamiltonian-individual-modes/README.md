# Ten detected individual branches in the widened Hamiltonian band

2026-11-27 · Exact finite-volume first-order test, with a local small-coupling conclusion. Parent result: [widened energy-15 Hamiltonian band](../widened-hamiltonian-band/README.md), commit `dccfca535ad45fc72c66ef6552b985a19adee3bb`. No 4D continuum, volume-uniform, fixed nonzero numeric coupling threshold, or novelty claim is made.

## Setting and question

On the open 4-by-2 spatial square mesh, use the physical (vertex-gauge-invariant) subspace of Haar-product L²(SU(2)^E). Let H(g)=H₀−gV, with the self-adjoint electric Casimir sum H₀ contributing n(n+2)/2 on a link carrying spin n/2, and the bounded multiplication operator V=Σ Wᵢ, with Wᵢ the half trace of face i. The Hamiltonian domain stays D(H₀). Faces are 1–4 along the top row and 5–8 along the bottom. Let P project to the isolated free energy-15 band (dimension 64), and let v₀=1 be the free vacuum. Let X reflect left/right and Y reflect top/bottom. Both commute with H(g); F=W₁W₃−W₂W₄ is X-odd.

The prior test detected this band as a whole and ruled out treating the old odd vector as isolated. Here the question is whether F detects individual eigenbranches in exact reflection sectors, without resolving the much larger zero-slope degeneracy.

## Exact finite block

Binary edge labels are mod-2 boundaries of face subsets on this open rectangle. The earlier electric enumeration verifies that all energy-15 labels are binary. An insertion Wᵢ flips exactly the parities of face i. It follows that PVP is block diagonal on the connected components of the single-face flip graph restricted to the band. The twelve dimensions are 25, 25, 3, 3 and eight times 1. X swaps the two 25-blocks, Y preserves each. The top and bottom three-blocks each have slopes in PVP given by 0 and ±√2/8. The true first derivatives of the H(g) eigenvalues have the opposite sign due to H₀−gV.

The calculation does not replace either multiplicity-two label sector by a single Wilson loop. At a binary vertex choose each pairing of its incident active edges, then follow the resulting circuits and multiply their fundamental traces. Each circuit product is gauge invariant. Its exact Gram rank at each label equals the independent physical spin-network multiplicity (see [Burgio et al.](https://arxiv.org/abs/hep-lat/9906036)); choose a maximal independent subset. Orient each edge once, use U⁻¹ for reverse traversal, and use the fact each edge variable appears exactly twice in every retained Haar contraction. The Haar identities are

    ∫ U_ab U_cd = ε_ac ε_bd / 2,
    ∫ U_ab (U⁻¹)_cd = δ_ad δ_bc / 2,   ε_01=1, ε_10=-1.

The first is the invariant antisymmetric projector, the second is Schur orthogonality. Pair constraints are exact binary equalities/inequalities. After solving them, each connected component contributes a signed factor of 2 or cancels by a free sign, and each Haar edge contributes 1/2. The extra 1/2 from Wᵢ is applied separately. If A is the matrix of these insertion integrals and G the Gram matrix, the operator is T=G⁻¹A. Reflections are realized by reflecting the actual labelled circuits, not by assuming a sign on a multiplicity-two label. The code verifies their involution, isometry and commutation identities.

With x denoting eigenvalues of T, define

    Q₁(x)=256x⁴−100x²+1,
    Q₂(x)=512x⁴−136x²+5,
    Q₃(x)=4096x⁶−3136x⁴+328x²−3.

Each 25-block has the monic characteristic polynomial x⁹(64x²−9)Q₁Q₂Q₃/2³⁵. The global nullity is 28. Sector dimensions and nullities are:

| (X,Y) | Dimension | Nullity |
|---|---:|---:|
| (−,−) | 15 | 7 |
| (−,+) | 16 | 8 |
| (+,−) | 16 | 6 |
| (+,+) | 17 | 7 |

The nonzero factors in X-odd sectors are Q₁Q₂ for Y odd and (64x²−9)Q₃ for Y even; these sector polynomials have no repeated nonzero root, as verified by exact gcd. Thus the old odd zero-slope branch cannot be declared unique even after using spatial reflections. The ±√2/8 modes are in X even and are exactly invisible to F from the interacting, X-even vacuum.

## Direct probe test

Let P(g) and P₀(g) be the analytic band and vacuum Riesz projections near g=0. Fv₀ is entirely at free electric energy 12: its products involve disjoint elementary face edges. Similarly Vv₀ has energy 6. Since P Fv₀=0, direct differentiation of the two projections gives

    w := (d/dg)[P(g) F P₀(g) v₀] at 0
       = −(1/3) P V F v₀ + (1/6) P F V v₀
       = −(1/6) P V F v₀.

The real circuit coordinates of w are nonzero only on 124, 134, 135, 246, 137 and 248 with coefficients (+1,−1,−1,+1,−1,+1)/96, respectively. These labels each have multiplicity one. The exact Krylov test in each Y sector finds both annihilation and linear independence of all lower Krylov powers. Thus w's minimal cyclic polynomials are xQ₂/512 in (X,Y)=(−,−) and xQ₃/4096 in (−,+). This proves that each of their four and six nonzero roots has positive projection weight, while Q₁ and ±3/8 are absent from the first derivative. Those absences are not exact invisibility assertions beyond the calculated order.

For example, in (−,−), write u₋=(17−√129)/128 and u₊=(17+√129)/128. The two separate slopes ±√u₋ each have squared derivative amplitude (129+7√129)/11888640, and slopes ±√u₊ each have (129−7√129)/11888640. The center-parity involution on face subsets anticommutes with T, commutes with the reflections, and maps w to −w, so paired squared amplitudes are equal. The first two nontrivial T² moments determine their two pair-weights over the algebraic field; the code verifies them and the residual zero-slope weight 13/46080 in this sector.

To pass from the first derivative to individual interacting modes, use a reflection-equivariant analytic identification of ran P(g) with ran P (for instance canonical analytic transport of nearby projections). The transported finite matrix is 15 I−gT+O(g²). After subtracting 15 I and dividing by g, the extension at zero is −T. For each of the ten nonzero simple slopes in its exact symmetry sector, the associated rank-one spectral projector is analytic near zero. Since the projected vector itself vanishes at zero, its linear coefficient on that branch is exactly the nonzero projection of w. Normalizing P₀(g)v₀ changes no linear coefficient. Therefore F detects these ten **sector-resolved eigenbranches** for all sufficiently small real nonzero g. This statement neither separates coincident energies across symmetry sectors nor claims g=10⁻⁴ suffices for each individual branch. The earlier g=10⁻⁴ band-wide certificate is separate.

## Reproduction and remaining work

Python 3.12 and SymPy 1.14.0; exact rational/integer arithmetic apart from explicitly exact radicals. Run `python3 first_order.py && python3 probe.py` in this directory. The scripts import only the adjacent parent free-band enumerator and use no network, numerical truncation of the interacting Hilbert space, user data or external solver. Checks include the known three-block matrix, Gram symmetry, reflection identities, sector dimensions, absence of repeated nonzero roots, exact Krylov relations, and explicit norms/moments.

Negative controls: 28 zero slopes remain, including 15 in X odd. The old odd state still does not determine one interacting eigenmode; zero-slope overlap or a second-order off-block coefficient cannot replace a diagonalization of the relevant zero-slope effective block. Next bounded question: resolve that block's spectrum and probe projections in one exact symmetry sector, or give a finite-g enclosure for one of the ten established branches. This is a research-branch result only.
