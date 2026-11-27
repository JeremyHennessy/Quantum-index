# A certified midpoint bound for two Wilson squares sharing a link

November 27, 2026 UTC. The two adjacent spatial plaquettes form an open rectangle of perimeter six with a shared edge. Use temporal Wilson coupling β_time=1, spatial plaquette coefficient b=1/100 on **both** squares, and four periodic time steps. This extends the [one-square calculation](../one-square-wilson-wrap/README.md). Spatial size, all couplings, and time period are fixed. No continuum or large-volume result.

## Keep the shared-edge Gauss constraint

Suppress bivalent vertices in the labels, not in the weights. Each of the two outer three-link paths has one SU(2) representation label n or m; the shared link has k. In the [physical spin-network basis](https://arxiv.org/abs/hep-lat/9906036), both trivalent vertices have multiplicity one exactly when |n−m|≤k≤n+m and k≡n+m mod 2; all three labels are nonnegative doubled spins. There is no further degeneracy per admissible triple. For the [positive Wilson transfer](https://bib-pubdb1.desy.de/record/396349), normalized temporal convolution is diagonal with
```
K(n,m,k) = a_n³ a_m³ a_k,
a_n = I_(n+1)(1)/I_1(1).
```
The six outer links and the shared link are counted once each. The full transfer S=MKM has M=exp(b(W₁+W₂)/2), with W_i the fundamental half trace on each square. This multiplier need not be diagonal in the shared-edge basis. Tree gauge induces product Haar on the face variables (the two non-tree links enter triangularly), so both W_i have Haar mean zero. Jensen gives λ0(S)≥⟨1,S1⟩≥⟨1,M1⟩²≥1 and the norm bound gives λ0(S)≤e^(2b). The nonzero spectrum is that of K^(1/2) M² K^(1/2), which lies in form order between e^(−2b)K and e^(2b)K. Thus for eigenvalues, ranked in descending order from index 0,
```
e^(−4b) λ_i(K) ≤ λ_i(S)/λ0(S) ≤ e^(2b) λ_i(K).
```

The two leading nonvacuum K modes are (1,0,1) and (0,1,1), with eigenvalue a₁⁴, followed by the outer-perimeter mode (1,1,0), with eigenvalue a₁⁶. To check the order use 0.23<a₁<1/4, a₂≤1/24, a_n≤4^(−n), and enumerate n+m≤2. For n+m≥3 the bound is 4^(-9). The independent-square model would instead have its third nonvacuum eigenvalue a₁⁸ before the spatial factors (it exceeds a₂⁴ and every later single-square mode). The ratio of the third nonvacuum **normalized transfer eigenvalues** in the exact joined and disconnected models is therefore ≥e^(−6b)/a₁²>15 even at the stated nonzero b. This is a change in an ordered eigenvalue, not a claim that a specific observable overlaps it at nonzero b.

## Independent trace bound, including all labels

Write R_s=Tr(QT^s) for T=S/λ0(S) and Q removing the vacuum. The bound a_n≤(1/2)^n/(n+1)! follows term by term from the Bessel series. For n+m≥3, at fixed ℓ=n+m there are at most (ℓ+1)^2 admissible triples and each contributes at most 4^(−3ℓs) to Tr(K^s). Since the ratio of successive prefactors is at most 25/16 from ℓ=3 onward, an upper bound on the complete excited trace is
```
R_s ≤ (50/49)^s [
  2(1/256)^s + 2(1/24)^(4s) + (1/4)^(6s)(1+(1/24)^s)
  + 16·4^(−9s)/(1−(25/16)4^(−3s))
].
```
Here e^(2b)≤50/49 and the four terms with ℓ=2 were counted separately (two single-square double labels and two joined labels). Thus R_2<3.184×10⁻⁵ and R_4<5.049×10⁻¹⁰. The calculation does not use a factorized square approximation.

## A nonzero signal bound for the actual plaquette observable

For F=W₁, with ground vector Ω and A=F−⟨Ω,FΩ⟩, let c_j=⟨AΩ,T^j AΩ⟩. Fix phase so ⟨1,Ω⟩≥0. The projection onto the unperturbed vacuum complement has norm at most ‖S−K‖/(1−1/256) on Ω, by projecting the eigenvalue equation for λ0(S)≥1. Since ‖S−K‖≤e^(2b)−1≤1/49, this gives ‖Ω−1‖<0.03. The normalized kinetic eigenstate χ₁ of face one is 2F and is orthogonal to 1. Then ‖M−I‖≤1/99, ‖AΩ‖≤1, and |⟨Ω,FΩ⟩|≤2‖Ω−1‖. Comparing ⟨χ₁,M AΩ⟩ with ⟨χ₁,F·1⟩=1/2 costs at most 1/99+0.03+2(0.03)², so its magnitude exceeds 0.45. Consequently
```
c_1 ≥ (49/50)(0.23)^4 (0.45)^2,
c_2 ≥ c_1²/c_0 ≥ c_1² > 3.084×10⁻⁷.
```
The second line uses Cauchy–Schwarz for the positive-transfer spectral measure and c_0≤1.

At the time-circle midpoint use the [exact periodic decomposition](../2026-11-27-periodic-wrap-vacuum-witness-bounds.md). With h_2 the periodic connected correlator, the forward and backward vacuum contributions are equal; the term with two excited propagators is at most 4R_2², and the squared thermal mean is at most 4R_4². Thus
```
2/(1+R_4) − 4R_4²/c_2 ≤ h_2/c_2 ≤ 2 + 4R_2²/c_2.
```
In particular the exact ratio lies between **1.99999 and 2.02**. These are analytic enclosures, not direct numerical evaluations of h_2. The accompanying `python3 verify.py` checks the rational constants and an independent finite prefix of 506 spin labels; the geometric tail bound supplies the infinite part. The next useful check is a certified computation of mixed-face correlators at nonzero b, rather than inferring them from the spectral ordering.
