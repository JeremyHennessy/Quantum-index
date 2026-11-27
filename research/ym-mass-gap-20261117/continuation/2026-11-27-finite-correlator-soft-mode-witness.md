# An error-certified finite correlator witness for hidden slow modes

November 27, 2026 UTC. This extends the [two-time linear-combination test](2026-11-27-alpoge-proof-verification-transfer.md). It gives a falsification certificate on a single cyclic subspace and a quantitative limit on what a negative test says. No 4D Wilson mass bound is proved.

Let T be a positive self-adjoint contraction, for instance the vacuum-normalized positive Wilson transfer operator raised to the number of lattice time steps corresponding to a specified time τ. The finite-lattice positivity input is standard; see [Lüscher](https://bib-pubdb1.desy.de/record/396349). Use the zero-temperature vacuum sector, not a trace over a finite temporal circle. Let f be a unit, vacuum-orthogonal state; μ is its spectral probability measure on [0,1] and C_j=⟨f,T^j f⟩. At τ fixed, a proposed gap m sets q=e^(−mτ), with 0<q<1. Slow means x>q. All calculations here begin after vacuum projection; contamination can generate a false slow witness at x=1.

## Finite measurement certificate

For integer k≥0 set P_k(x)=ChebyshevT_k(2x/q−1), G_k(x)=x(x−q)P_k(x)^2, and W_k=∫G_k dμ. A positive W_k falsifies the proposed gap in this cyclic sector. It is exactly the two-time sign evaluated on the linear combination P_k(T)f, hence is a linear combination of moments C_1 through C_(2k+2), with no nonlinear spectral fit.

On [0,q], |P_k|≤1 and G_k≥−q²/4. On [r,1], for fixed q<r≤1, both factors of G_k are nonnegative and nondecreasing, so
```
W_k ≥ w A_k − (1−w) B,
w = μ([r,1]),    B = q²/4,
A_k = r(r−q) cosh²(k arcosh(2r/q−1)).
```
In the middle interval (q,r), the contribution is nonnegative. Thus this finite witness detects every weight w whose lower bound w A_k−(1−w)B is positive. Conversely an exact W_k≤0 implies w≤B/(A_k+B), **not** absence of slow states. For fixed q,r, sufficient depth grows only logarithmically in 1/w in exact arithmetic. At a small separation r−q the growth exponent arcosh(2r/q−1) tends to zero; a fixed budget is not uniform at the boundary.

## Measurement precision is part of the certificate

Write G_k(x)=Σ_j g_j x^j. If measured moments have certified absolute errors ε_j, use E_k=Σ_j |g_j| ε_j. Then a measured value greater than E_k certifies a positive witness, and any upper confidence bound U≥W_k implies w≤min(1,(U+B)/(A_k+B)). For a uniform absolute error ε, the exact coefficient 1-norm is
```
E_k = ε (1+q) cosh²(k arcosh(1+2/q)).
```
Indeed all roots of G_k are nonnegative (the Chebyshev roots are in (0,q)); expanding the product gives alternating signs, possibly with zero coefficients, so the sum of absolute coefficients is G_k(−1). The formula also holds for k=0. The error leverage grows faster in k than A_k, so increasing k with fixed precision is not a reliable way to reveal a smaller signal. When all measured moments have nonzero error, mixing arbitrary small weight into (q,1] changes every C_j by at most that weight, so a single finite noisy moment list cannot rule out all hidden weight without additional structure. This is a worst-case statement; exact boundary moment data can impose additional constraints.

Exact arithmetic control: for q=1/2 and μ=0.0001 δ_(0.9)+0.9999 δ_(0.25), the unfiltered witness is −0.06245775, but W_3=0.140643000576, positive. The direct two-atom calculation and its eight-moment expansion agree exactly using rational arithmetic; the coefficient 1-norm is 352837.5. A uniform absolute error of 10⁻⁷ still certifies positivity for the stated central value. An error of 10⁻⁶ does not certify this witness by this bound.

## Wilson-facing use and limits

For a specified gauge-invariant source f, the actual Wilson computation would need certified estimates of C_j at jτ with common physical scale, reliable ground-state projection, and the exact same geometry and source normalization. If r−q stays bounded below and a slow channel has weight comparable to L⁻⁶ in the [ordered 2D control](2026-11-27-sharp-block-soft-singlet-overlap.md), this test requires at most logarithmically many time translates in exact arithmetic, not that a fixed time window or fixed precision will work. The tuned source instead has asymptotically unit weight. Gauge invariance and positivity alone do not provide the needed errors on 4D Wilson correlators. A positive finite-lattice witness at one cutoff is not a continuum counterexample. A negative result on any finite set of probes is not a mass-gap proof; density and control of cutoff, volume, time, and normalization remain separate obligations.
