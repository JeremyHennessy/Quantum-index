# Seven second-order detected branches in the widened Hamiltonian band

2026-11-27 · Exact finite, fixed-spacing calculation in the open 4-by-2 model. Parent: [first-order individual modes](../widened-hamiltonian-individual-modes/README.md), commit `de78215fbfdd405e6140eb7a2d1581421731da7d`. No bound uniform in volume, numerical nonzero-coupling threshold, continuum limit, or novelty claim.

## Result

Continue with the same self-adjoint gauge-invariant Hamiltonian H(g)=H₀−gV, V=Σ Wᵢ, and the same probe F=W₁W₃−W₂W₄. The unperturbed energy E=15 has multiplicity 64. In the sector odd under both spatial reflections (X,Y)=(−,−), the first-order zero-slope space has dimension seven. All seven branches split at second order, and **F detects each of them** from the interacting vacuum for all sufficiently small real nonzero g (qualitative neighbourhood). This adds seven branches to the ten previously resolved across the two X-odd sectors. The statement is sector-resolved, not distinctness across sectors. The eight unresolved X-odd/Y-even zero-slope branches are not addressed here.

Let P be the free energy-15 projection, Q=1−P, and N be the projection onto the seven-dimensional kernel of PVP in this reflection sector. The second-order coefficients κ are the eigenvalues on ran N of

    K = N V Q (15−H₀)⁻¹ Q V N,

where the inverse is on ran Q. The absolute energy is 15+κg²+O(g³); the vacuum-subtracted energy is 15+(κ+1/3)g²+O(g³). Here g² coefficient is meant, not the second derivative. The vacuum coefficient −1/3 follows independently from V1 having free energy 6 and squared norm 8·(1/4)=2.

There is one κ in each disjoint open interval below, with endpoints in thousandths:

| Lower | Upper |
| ----: | ----: |
| −322 | −321 |
| −232 | −231 |
| −226 | −225 |
| −218 | −217 |
| −214 | −213 |
| −208 | −207 |
| −195 | −194 |

Thus all seven vacuum-subtracted second-order coefficients are positive, without drawing a sign conclusion for any finite prescribed g. The polynomial is monic and is obtained by dividing the following by its leading coefficient:

    1740513685678954905600000000 x^7
    + 2804180363414272475136000000 x^6
    + 1927056026857803035443200000 x^5
    + 732583362126679685959680000 x^4
    + 166453311121421065757568000 x^3
    + 22612419502576987786201800 x^2
    + 1701065785499569260033045 x
    + 54678445567897370448826.

## Exact lift and independent controls

Use the parent gauge-invariant trace-circuit bases for all 64 free states, including both components of the multiplicity-two sectors, and the exact reflection matrices acting on those bases. Compute coordinates B of the simultaneous nullspace of T=PVP, X+I, and Y+I. All nonzero rows of B have odd face-subset parity; 44 out of 64 circuit coordinates participate.

Multiplying a basis circuit product by a face half trace puts each link into zero, one, or two fundamental factors. A singly used link has spin 1/2 and contributes 3/2 to H₀. A doubly used link has spin 0 or 1, by the fundamental tensor square, contributing 0 or 4. Consequently the only intermediate free energies are fixed by these finite link labels, without a cutoff in the interacting Hilbert space. The tensors commute with vertex gauge action, so the calculation stays in the physical space.

At a link used twice on each side of the inner product, integrate all four coefficients for the total kernel. For spin 0, integrate each side separately: the spin-0 projector on that link is Haar averaging. Spin 1 gets the difference. If a link is doubled on one side but absent on the other, only spin 0 contributes, and differing odd parity labels are orthogonal. The two epsilon-pair tensors for the four-factor Haar invariant use pairings 12|34 and 13|24; their squared norms are both 4 and cross Gram is 2, yielding the inverse Gram with diagonal 1/3 and off-diagonal −1/6. Inverse traversals are converted by U⁻¹_ab=ε_aj U_ij ε_bi. Tensor contractions are signed binary constraints, using rational weights throughout. There is one separate factor 1/2 per face multiplier.

Independently, the script compares *every* external index assignment and inverse-orientation pattern for each local kernel against the S³ coordinate moment formula for SU(2), including singlet-triplet separation (4,288 exact comparisons). For the global check, the uncompressed energy-15 Gram equals A G⁻¹ A on all 44 used coordinates, where G is the free-band Gram and A the form of PVP. Its compression to ran N is zero as required. The independent spectral Gram contributions in that space are positive semidefinite. The nonzero compressed twice-energies and ranks are (18,1), (24,7), (32,1), (36,7), (38,4), (40,2), (42,5), (44,7), (46,5), (48,7), (50,7). Remove the energy-15 slice; weight each remaining compressed form by 1/(15−E) and lift using (BᵀGB)⁻¹. The resulting matrix is self-adjoint for BᵀGB. Exact polynomial gcd and Sturm counts prove simplicity and the enclosures.

## Why this proves individual detection

The isolated band and vacuum are analytic Riesz projections near zero; V is bounded and the electric domain is constant. Transport the band analytically into its free space, respecting both reflections. Write the transported matrix in the (−,−) sector as 15I−gT+g²K₂+O(g³). For a vector u in ker T, the first-order complement of its transported vector is −(15−H₀)⁻¹ Q V u. Projecting the order-g² equation onto ker T gives N K₂ N = K. Equivalently the second-order form is the Schur form after eliminating the complementary free electric levels. The identity does not depend on the internal gauge of the analytic transport, since a change adds a commutator with T that vanishes between vectors in ker T.

Subtract 15I and divide by g, separating the first-order zero group from the other slopes. Transport that isolated seven-dimensional group to its g=0 subspace; subtract its zero base and divide by g again. The resulting analytic matrix at zero is K. Simplicity gives an analytic rank-one projection for each of the seven sector branches. The probe projection vanishes at g=0. Its first derivative in the seven-dimensional group is z=Nw, where w is the parent exact differentiated in-band probe, since changes in the transport/projector multiply the zero initial probe. The exact computation verifies

    ||z||² = 13/46080,
    ⟨z,Kz⟩ = −758479/12386304000,
    rank[z,Kz,…,K⁶z] = 7.

For a self-adjoint operator with simple spectrum, full Krylov rank means that z has a nonzero projection on every eigenline (otherwise each Krylov vector would be orthogonal to the same eigenline). Therefore each interacting probe amplitude has nonzero linear coefficient and each squared weight has positive leading order g². This does not claim numerical detection of each at g=10⁻⁴, or any statement near continuum coupling.

## Reproduce

Run `python3 second_order.py` with Python 3.12 and SymPy 1.14. It uses only the adjacent parent scripts and exact rational/integer arithmetic. No numerical eigenvalue solver, external service, or user data is involved. The original band-wide g=10⁻⁴ result and the ten first-order branches remain separate. Next bounded options are the Y-even zero-slope block or a quantitative finite-g neighbourhood for one individual branch.
