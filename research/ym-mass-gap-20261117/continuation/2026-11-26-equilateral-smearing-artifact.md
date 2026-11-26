# Independent packet smearing reintroduces the equilateral Maxwell artifact

**2026-11-26 UTC. Zero-flux free Maxwell on a cubic continuum torus.**

The [equilateral cancellation](2026-11-26-maxwell-torus-triplet-geometry.md) is pointwise in the three centers. For three independent copies of a unit-mass radial bump at those centers, it is not exact. Write σ² for its one-coordinate variance, ε for its support radius, and r for the side of the equilateral triangle. Take ε<r/4. The leading volume term, previously −d/(2π⁴V) times the sum of three pair traces with their factors r_i^−4 removed into the geometry functional, changes as follows.

For a term sharing one vertex, use outgoing differences u,v. Its geometry function is F(u,v)=[8(u·v)²−2|u|²|v|²]/(|u|⁶|v|⁶). Conditional on the location of the shared vertex, average over the two outer packets first. Each covariance matrix is harmonic away from its source (it consists of derivatives of the harmonic massless Green function). The radial mean-value property collapses each of these integrals exactly back to its packet center. There is one remaining average over the shared vertex, which shifts u and v together.

Writing h=u·v, A=|u|², B=|v|², direct differentiation in four dimensions gives ∇u·∇v F=−144h/(A³B³)+288h³/(A⁴B⁴). Since F is separately harmonic, the shared-vertex Laplacian is twice this. At equilateral u,v it equals −72 r^−10. Taylor expansion under the radial bump (odd moments zero) therefore gives −36σ² r^−10+O(ε⁴ r^−12) for each term, instead of zero. The smeared triplet's leading finite-volume artifact is

`+54 d σ²/(π⁴ V r^10) + O(ε⁴/(V r^12)) + O(L^−10)`

for fixed r and ε<r/4 as L grows. A finite-difference check independently gave the shared-vertex Laplacian −72.0000043 for r=1 and step 10^−4. This is a check of the exact formula, not a simulation of Yang–Mills.

Operational choice: keep pointwise separated kernel evaluations if justified by the pinned regularity, or average a rigid equilateral triangle by a single common translation (translation invariance preserves all differences). If independent tensor-product smearings are required, use the calculated geometric baseline or explicitly carry the σ²/V error; do not treat the pointwise cancellation as an exact tensor-product cancellation. The size of the interacting Wilson triplet and any volume convergence rate for it remain open.
