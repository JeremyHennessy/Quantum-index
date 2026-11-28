# Simple Laurent poles, two-patch divisibility and the exact physical ℓ² range

This note holds at the fixed-spacing, zero-total-momentum, center-odd quadratic effective coefficient E=−13/336. The physical homogeneous statement is restricted to the eight-coordinate-sign-reflection invariant sector. It does not prove a positive on-shell density, existence of a boundary value of the physical resolvent, finite-coupling scattering, or continuum physics.

## Reference factor data and the two real patches

Write A for the separated translation-invariant reference operator, and M(z) for its shifted Bloch matrix A−E (or its Hermitian form after multiplication by a fixed invertible full Gram). In L = C[z₀^±1,z₁^±1,z₂^±1], its determinant is a nonzero constant times F³R, where the flat elementary-loop factor F and the non-flat residual R are distinct, absolutely irreducible Laurent polynomials. The equality follows by the flat six-loop eigenspace/resultant reduction; their separate irreducibility ensures ideal divisibility over the complex coefficients of any forcing.

Choose the following two nonempty real-torus patches:
- **R:** transverse tangent coordinates (8,12), root t₂ in (6.4457770,6.4457771). F is nonzero there, R is transverse and simple, and M has nullity one.
- **F:** transverse tangents (1,2), root t₂ in (499/3355,47/316). R is nonzero there and F is transverse and simple. The elementary-loop eigenbranch repeats on the flat three-dimensional six-loop space. Hence M has nullity at least three at the root, and the full determinant order three proves nullity exactly three. Shrink the patch so rank stays 39 on its F sheet: the 39-minor persists, and on that sheet the flat eigenspace produces at least three null directions.

The replays use the exact independent factor count/isolating interval, rather than numerical root samples. The implicit function theorem parameterizes each patch, locally, as a graph over two real momentum coordinates with complexification to a smooth complex hypersurface.

## Laurent simple poles

Any Laurent polynomial vanishing on one such relatively open real patch is divisible by that patch's absolutely irreducible Laurent factor. In local complexified momentum coordinates the smooth hypersurface is parameterized holomorphically by the same two remaining coordinates used for the real graph. Their real open subset is maximal totally real; a holomorphic restriction that vanishes on it vanishes on the neighboring complex surface, by the identity theorem in each coordinate. A Laurent polynomial not divisible by the irreducible defining factor would cut a proper algebraic subset of complex dimension at most one on this surface, so could not contain the resulting complex open set. This proves the asserted Zariski density/divisibility without requiring coverage of every connected real sheet.

All 40-minors of M vanish on the F patch, hence are divisible by F. At least one 39-minor on that patch is nonzero and therefore not divisible by F. In the local discrete valuation ring L_(F), eliminate that invertible 39-by-39 minor. The 3-by-3 Schur complement S has each entry divisible by F (the entries are ratios of 40-minors to the selected 39-minor) and determinant of valuation exactly three, because det M has valuation three and the leading minor is a unit. Thus S/F is invertible in this local ring. Block inversion gives every entry of M⁻¹ valuation at least −1 along F. At the simple determinant factor R the adjugate formula gives valuation at least −1. There are no other nonunit denominators, so the matrix
```
N = F R M⁻¹
```
has Laurent entries. It obeys MN=NM=FR I. The same elimination in a holomorphic neighborhood of each chosen patch point shows that N retains rank three on F and one on R: after removing the factor once, the singular block becomes a nondegenerate residue up to multiplication by the nonzero other factor and local invertible changes of basis. Therefore on either patch
```
ker N = Ran M.
```
The image inclusion follows from NM=0 on the surface and the dimensions coincide. No inference from determinant order alone was used for the triple residue.

## Exact reference forcing

For any finitely supported reference forcing q, its Fourier transform is a Laurent-vector polynomial. In form coordinates, zero fibre trace means the covector pairing with every vector in ker M is zero. For the Hermitian real-torus matrix this is exactly membership in Ran M; in operator coordinates, it is the corresponding orthogonality using the fixed Gram. It may be stated either pointwise or as zero in the regular patch coarea space, since its restriction is continuous and the smooth coarea weight is strictly positive locally.

The compact forcing equation M v=q has a Laurent solution **if and only if** the fibre traces vanish on the two chosen relatively open patches, one for each factor. The forward implication follows by multiplication. Conversely, vanishing places q in ker N on each patch. Total-real divisibility then makes every entry of the Laurent vector Nq divisible by both F and R. They are coprime, so v=Nq/(FR) is Laurent and solves the equation. Its uniqueness follows from invertibility of M over the Laurent fraction field. An isolated vanishing sample on each patch would not suffice.

There is no additional square-summable reference solution with tails for such a forcing. The nonzero determinant is a nontrivial real-analytic function on the torus, with zero set of Haar measure zero; M multiplies injectively almost everywhere. Any ℓ² solution has Fourier transform M⁻¹q almost everywhere. If Nq were nonzero anywhere on either chosen patch, continuity and the local transverse real normal coordinate s would give a lower bound c/|s| on the norm of M⁻¹q off the sheet in a smaller tube, with positive smooth measure. The integral of |s|⁻² diverges. Thus an ℓ² solution has both patch traces zero, equals the compact Laurent solution, and is unique. This uses the exact equation, not a limit at a complex shifted energy.

## Physical near and ghost equations

Use operator coordinates here. Let D_all consist of the actual detached reference channels, D be the finite flagged detached-return support, J the actual physical near null space, and G the reference-only ghosts. Let x=P_D v be a detached candidate's D restriction and y its J component. The exact split is H_(D_all,D_all)=P_(D_all) A P_(D_all), H_(D_all,J)=L with output supported in D, and H_(J,J)=K. The exterior-to-ghost reference map A_(G,D_all) has input supported in D. All of these are finite-range bounded identities, so they apply to ℓ² candidates by continuity from finite support. For an actual equation (H−E)(v,y)=(w_D,w_J), where w_D denotes the complete detached component supported in D, the independent physical near equation is
```
L* x + (K−E) y = w_J.
```
It uses K−E I_J (in forms K−E Gram_J). No decoupled near resolvent inverse is assumed.

Extend v by zero on G, denoting the result by ṽ. Its reference equation is exactly (A−E)ṽ=q(x,y), where the right side is supported in the finite set G∪D and equals
```
q_G = A_(G,D) x = −C* x,   q_D = w_D − L y,   q_outside(G∪D) = 0.
```
The −E term contributes nothing on G because ṽ there is zero; no external ghost variable is allowed. This gives every row of the actual reference equation, and the near equation remains explicit. Conversely, to recover an actual physical solution from a formal reference solution one must additionally check that its G coordinates are zero and its D coordinates equal the assigned x. This distinction explains why prior affine nuisance cancellation did not itself solve the physical compact equation.

If an actual ℓ² physical solution existed, its extended reference component would solve the compact-forcing equation above, so would itself be compact. Adding the finite J component would give a compact actual physical solution. This is excluded by the exact radius-five rank 6,549 versus augmented rank 6,550. The same argument applied to an invariant homogeneous ℓ² eigenvector gives a compact invariant vector, excluded by the full coefficient rank. An invariant nonhomogeneous solution is no restriction: averaging any ℓ² solution over the finite reflection group would preserve the nonzero invariant source and produce an invariant solution. Averaging need not preserve a non-invariant homogeneous eigenvector, so no assertion is made about such eigenvectors in other sectors.

## Spectral statement and limit still open

Let μ_w be the spectral measure of the actual folded source for H in the invariant fibre. There is no ℓ² eigenvector at E there, so μ_w({E})=0. By the spectral theorem, w would lie in the range of H−E precisely when its no-atom spectral integral of |λ−E|⁻² is finite. The preceding range obstruction therefore gives
```
μ_w({E}) = 0,        ∫ |λ−E|⁻² dμ_w(λ) = ∞.
```
This is not positive on-shell density: an absolutely continuous density with a cusp vanishing at E can also make the integral diverge. It does not control η-dependent effective forcings, near/ghost resolvent boundary values, or the rate of any norm divergence as η tends to zero.

## Exact patch-anchor replay

```sh
python verify_regular_patches.py six-axis-slices.json
```
The verifier checks both Sturm-isolated simple defining-factor roots, their endpoint signs, coprimality, and absence of the other factor in each selected interval against the six-slice SHA-256 pin 824fc786a8bf480b47b946f457869d2e332c1dd08f0a8c7726e4b3dead07cc0f. The previously verified global flat and residual irreducibility, and the compact-range certificate, are separate inputs to this proof.
