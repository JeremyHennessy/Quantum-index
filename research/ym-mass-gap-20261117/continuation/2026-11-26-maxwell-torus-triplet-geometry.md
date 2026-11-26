# Zero-flux Maxwell on the torus: the triplet artifact changes sign with geometry

**2026-11-26 UTC. Free Gaussian Maxwell control on a cubic continuum torus, not a finite-volume estimate for interacting Wilson Yang–Mills.**

The [infinite-volume odd-point null](2026-11-26-maxwell-odd-trace-null.md) cannot be used unchanged after the mesh limit at a fixed Wilson period. The free periodic calibration already has a triplet. Here is its leading coefficient for an arbitrary fixed nondegenerate separated triangle, including a geometry that cancels it.

Let the torus have side L and volume V=L^4. In zero-flux Gaussian Maxwell, for p≠0 the field-strength covariance multiplier on two-forms is the orthogonal projection onto p∧(p^⊥); at p=0 it is zero. Hodge star exchanges this projection with its orthogonal complement. Hence in position space `(C_L+*C_L*)/2 = (δ_L−1/V) I/2`. At separated points write `C_L=D_L−I/(2V)` with D_L Hodge-odd. With the same normalized Q=(1/2)Σ:F²: as in the infinite-volume note and d colors, the separated triple is d Tr(C_12 C_23 C_31). Products of one or three odd factors have zero trace, so the exact statement away from coincidence is

`G_L=−d/(2V)·[Tr(D_12 D_23)+Tr(D_23 D_31)+Tr(D_31 D_12)]−3d/(4V³).`

Adding an independent constant centered Gaussian two-form of covariance I/(2V) per color removes the separated Hodge-even term and restores the exact odd null; this is a calibration, not a claim about quantized compact Maxwell fluxes. For related topology and duality distinctions see [Witten](https://arxiv.org/abs/hep-th/9505186).

## Sharper error and choice of triangle

Let G_L^0 be the periodic zero-average scalar Green function with −ΔG_L^0=δ_L−1/V. Near the origin its difference from 1/(4π²|z|²) is smooth, scales as L^−2 times the unit torus regular part at z/L, and satisfies Δ of the difference =1/V. By cubic reflections and axis permutations its Hessian at zero is I/(4V); evenness makes its third derivatives vanish there. Taylor therefore bounds the nonconstant Hessian remainder at fixed z by O(|z|²/L^6). The induced constant shift in C_L is exactly −I/(2V), using the same derivative formula as before. Consequently D_L(z)=C_∞(z)+O(|z|²/L^6), improving the error from using a generic bounded regular Hessian. This applies to fixed physical triangles, not triangles that grow with L.

For cyclic separations z_i of lengths r_i, define θ_ij as their mutual angle (reversing one vector does not matter). From C_∞=(π²r⁴)^−1 Λ²R_z, the pair trace contains `Tr(Λ²(R_i R_j))=2+4 cos(2θ_ij)`: the vector product is a rotation by 2θ in their plane and identity on its orthogonal complement, and taking two-fold eigenvalue products gives the formula. Thus

`G_L = −d/(2π⁴ V) Σ_(i<j) [2+4 cos(2θ_ij)]/(r_i⁴ r_j⁴) + O(L^−10).`

Exact arithmetic controls with the shortest legs normalized to 1: collinear spacings 1,1,2 give weighted sum 27/4 and a negative leading triplet; a unit right isosceles triangle gives sum −1 and a positive triplet; an equilateral triangle gives zero term-by-term, so its free finite-period artifact is only O(L^−10). Equilateral is therefore the clean first geometry for a separated Wilson triplet comparison, before also testing other shapes. Such a comparison still requires matched scalar data and certified mesh and period errors; one cannot transfer the free O(L^−10) rate to Wilson or infer a mass gap from a nonzero triplet. Novelty and independent review are not claimed.
