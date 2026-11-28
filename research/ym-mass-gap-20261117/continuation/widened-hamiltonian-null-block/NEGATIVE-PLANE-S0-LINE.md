# Exact doublet crossing on the negative-plane S=0 line

2026-11-28 UTC. This scoped reference result is at fixed spacing, zero total momentum and target E=−13/336. It concerns only X_i=−2 and X_j=x, X_k=−x along that plane, not all of the negative plane or the full torus.

Use the exact elementary spectrum on X_i=−2: for S=X_j+X_k, the shifted elementary form in units 1/168 has a 2×2 block of trace 4.6−S and determinant 4.3(0.3−S), and a third entry 0.3−S. The block eigenvalues are 4.3 and 0.3−S. Hence at S=0 the unshifted elementary energies are a=−11/840 twice and b=3/280 once. These exact values are independently reproduced by the stencil replay at all sample points. The flat elementary factor does not vanish anywhere on this line: neither a nor b is E−ℓ with ℓ=−1/42, and the nine flat-channel sums (with multiplicity) all lie strictly above E.

In unscaled operator normalization let p₉(λ)=det(λI−B₉), Q=p₉/(λ−ℓ)³ (monic), and F=det(B₆+(ℓ−E)I). The tensor-sum determinant is D=∏p₉(E−a_j), since the six-loop factor dimension 14 is even. Dividing out F³ gives R=−∏Q(E−a_j) (nine linear flat energy factors reverse sign). On this line, therefore,
```
R = −Q(−43/1680;u)^2 Q(−83/1680;u),     u=x²∈[0,4].
```
Working in form coordinates would only multiply the determinant by the cube of the constant six-loop Gram determinant. Constant symbol rescaling likewise changes no root, order, or inertia sign.

The exact characteristic calculation checks all 48 signed/reanchored stencil symmetries. Inversion in each variable makes every characteristic coefficient polynomial in the X coordinates, and swapping j,k sends x to −x. Coefficient k has individual Laurent width bounded by k via the minor determinant, so its restriction to this line has degree at most 2k in x and degree at most k in u. Constant monic flat-cube division preserves the same bound. Twelve exact algebraic-field evaluations suffice and four independent values check the interpolated coefficients. The monic quotient evaluations are:
```
Q(−43/1680;u) =
 (5499025u − 9004321)(723306052000000u² + 86477908652909200u + 57865787183889421)
 /59156610784433070232217164185600000000000

Q(−83/1680;u) =
 (297675u + 18158053)(798601412000000u² + 13072075196709200u + 73529623052484581)
 /19718870261477690077405721395200000000000
```

## Exact root and slopes

There is exactly one physical u root, u*=9004321/5499025∈(99201/60583,70423/43008)⊂(0,4). The other threshold has no physical root; their joint gcd is one, and both are nonzero at u=0,4 and at the isolator endpoints. At u*, both ∂_uQ(−43/1680;u*) and ∂_λQ(−43/1680;u*) are nonzero. Thus the six-loop threshold comes from one simple analytic energy branch with nonzero line derivative. The squared residual order (two) is entirely from the inherited elementary multiplicity two. The isolated target eigenspace has dimension exactly two, is disjoint from F, and has no extra residual level.

Exact Sturm inertias of the complete tensor spectrum across the isolator are 11 negatives on the lower-u side and 9 on the upper-u side. The flat copies do not contribute below E; for Q, count twice the eigenvalues below −43/1680 and once those below −83/1680. Thus in increasing u both crossing slopes are positive. As x increases, the pair has definite positive slopes at +sqrt(u*) and definite negative slopes at −sqrt(u*), since du/dx=2x≠0. Each has a nonzero definite compressed derivative in a real angular tangent coordinate as well, because the relevant free cosines are strictly interior. This provides a monotone local chart for the existing localized reference resolvent argument at these isolated crossings, with no off-line extrapolation.

Both ordered x solutions are in the same cubic orbit under swapping the free axes. For each choice of fixed axis, the two orders and four independent free angle signs give eight momenta, 24 across the three fixed axes, without overlap since neither free coordinate equals −2 or +2. The exploratory sample earlier at x≈1.24698 was not this exact crossing. The exact x magnitude is approximately 1.27962477; no numerical stationarity or claim about the rest of the plane is inferred.

## Replay

```sh
PYTHONHASHSEED=29 OPENBLAS_NUM_THREADS=1 python s0_line.py --output new-s0.json
python verify_s0_line.py new-s0.json
```
Use the existing separated stencils and local s0_stencils.py. Seed29 and seed71 full reconstructions reproduced the same 2,155-byte artifact, SHA-256 13fb891262c6938a8161b071c906ad6ed7a0a20878db6216bac2d1b457371260. No global limiting absorption result or physical spectral density is established.
