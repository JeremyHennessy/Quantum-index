# Single-face detection of the isolated three-square perimeter mode

November 27, 2026 UTC. Use the [shared-edge anisotropic control](../three-square-perimeter-isolation/README.md): temporal β=.8 on the two shared edges and β=1 elsewhere, and spatial coefficients b₁,b₂,b₃. This proves a genuinely nonzero transition on a specified, small spatial-coupling interval in this fixed graph. It does not certify the single-face transition at b_i=.01, at isotropic temporal coupling, or in the four-dimensional continuum.

## Kinetic states and exact insertion paths

Write a=I₂(1)/I₁(1), c=I₂(.8)/I₁(.8). The left and right fundamental face states have eigenvalue L=a³c, the middle face M=a²c², the adjacent pair perimeters P=a⁵c, the disconnected end pair E=a⁶c², and the full perimeter D=a⁸. They are normalized characters (a product of normalized characters for E), and the vacuum has eigenvalue 1. Label these states l,m,r,p12,p23,e,o,0 respectively. Let F_i be the half trace around face i. Then F_i|0⟩=|i⟩/2. Center parity kills the constant and linear overlap terms for F₁ and requires the mixed term b₂b₃.

For the second-order terms, each fundamental multiplication changes the doubled spin on the traversed edges by ±1. Applying the [spin-network admissibility rules](https://arxiv.org/abs/hep-lat/9906036) on both sides of each matrix product leaves just the following intermediates (the verifier enumerates fusion alternatives). For paths from vacuum to p23 with insertions F₂,F₃ they are m and r; for paths from o to l with those insertions they are p12 and e. The cross terms also pass through p12 and e, between the respective first-order vacuum face and the perimeter. Outer left spin alternatives in F₁|o⟩ do not contribute to the vacuum mixed derivative, since F₂ and F₃ never touch the outer left path.

The absolute coefficients and signs are fixed by Haar integration, not just spin labels. In a common-root tree gauge the three face variables are independent Haar and an enclosing trace is the trace of their ordered product, with inverses as needed for orientation; fundamental SU(2) characters are real and invariant under inversion. Joining adjacent face traces into their perimeter contributes 1/4 for a half-trace insertion, by one use of Schur orthogonality. Adding a third contiguous face to the two-face perimeter also gives 1/4. Joining the disjoint end faces to the full perimeter by inserting the middle face gives 1/8 by two successive character convolutions. A disjoint face insertion has coefficient 1/2 into the product state. Together with the vacuum insertion 1/2, all contributing chains below have product 1/32 after the final F₁ pairing.

## Derivation and verified coefficient

For perturbation V=Σ b_i F_i, the transfer is S=e^{V/2} K e^{V/2}. Define the first derivative scalar and the mixed derivative scalar for a base eigenvalue v, target u, and intermediate k:
```
g(v,k) = (v+k)/(2(v−k)),
h(v,u,k) = [(v+u+2k)/8 + (u+k)g(v,k)/2]/(v−u).
```
Indeed S_i′=(F_iK+KF_i)/2; differentiating the eigenvalue equation gives g after division by v−k. In S₂₃″ the outer K terms give (v+u)/8 per ordered path, because F₂F₃=F₃F₂ and the two paths can share these terms equally. The internal K contributes k/4. The first derivative of the eigenvector in S_i′v_j′ adds (u+k)g(v,k)/2. The first eigenvalue derivatives vanish by center symmetry; reference-state components of the mixed vector derivatives pair with zero at order zero. Degeneracies at other levels do not enter the denominators of the two isolated endpoints.

Putting together the second derivative at the vacuum, the second derivative at the perimeter, and the two first-derivative cross terms gives the coefficient of b₂b₃:
```
[ h(1,P,M) + h(1,P,L)
 + h(D,L,P) + h(D,L,E)
 + g(D,P)g(1,M) + g(D,E)g(1,L) ] / 32.
```
The signs nearly cancel. The exact rational interval from the positive Bessel series is (9.14×10⁻⁶, 9.16×10⁻⁶), not zero. This is the coefficient for the amplitude, not for its square. Run `python3 verify.py` (standard library only) to check the six paths, Bessel arithmetic, and constants.

Clearing denominators in the six-term expression gives the simpler identity
```
a^8 (1−c²)² / [32 (a³−c)(a⁵−c)(a³c−1)(a⁵c−1)].
```
The reduced expression has verified positive sign on any region where a³<c<1, 0<a<1, and the two targeted eigenbranches satisfy the same isolation and differentiation assumptions. At equality of the perimeter and end-pair eigenvalues (for example c=a), the derivation using a simple perimeter eigenvalue no longer applies, even if the simplified fraction itself is finite. The fraction is not an isotropic overlap certificate.

## An explicit nonzero interval

On the diagonal b_i=t use the analytic scalar A(t)=⟨o,P_o(t) F₁ P₀(t)0⟩ with the two Riesz projectors. It has the same mixed coefficient as unit real eigenvectors: reference overlap factors start at one, and the constant and linear transition terms vanish. The previous relative-resolvent estimates extend to complex |t|≤ρ=.01 with ‖tΣF_i‖≤.03; the perimeter contour is unchanged and the vacuum contour of radius 1/3 has ‖(K−w)⁻¹K‖≤3. Both interacting projector norms are <2, so |A(t)|≤4. The simultaneous center flip makes A even (the perimeter and F₁ each change sign). Thus higher terms are bounded by 4(|t|/ρ)^4/[1−(|t|/ρ)²]. For real 0<t≤10⁻⁷, this is at most 4.000001×10⁻⁶ t². Since the true unit-state overlap is at least |A(t)| in magnitude, it exceeds 5×10⁻⁶ t² there.

The rational check shows why moving to t=.01 needs a different accuracy strategy: extrapolating only this coefficient predicts an amplitude on the order of 10⁻⁹, and the terms of the coefficient already cancel substantially. A certified computation there needs either higher-order controlled coefficients or sharper residual bounds targeting this amplitude, not merely a rank-two projection or a percentage improvement in generic operator error.
