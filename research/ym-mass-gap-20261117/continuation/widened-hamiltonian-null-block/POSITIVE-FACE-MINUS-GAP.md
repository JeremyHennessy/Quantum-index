# Exact gap of the minus-parity threshold on the positive face

2026-11-28 UTC. The fixed-spacing reference target is E=−13/336 at zero total momentum. On the face X_i=z_i+z_i⁻¹=+2 write S=X_j+X_k, u=X_jX_k. This result is only for the minus-parity contribution; there is no positive-face plus classification, full reference bound, physical spectral-density conclusion or continuum inference.

The exact minus resultant from the pinned positive-face pencils is the following primitive polynomial f times the nonzero constant 1/92090671199944704000000. It is cubic in u with constant leading coefficient 1838265625, so its u degree does not drop at any S. Its exact u discriminant factors as
```
−5017600000000000000 D3(S)^2 D5(S)
D3 = 55125 S³−16784850 S²+2099935420 S−31071304856
D5 = 12005000 S⁵−1304851625 S⁴+9941460725 S³
     −722169214300 S²+13380205171080 S−488643737581748.
```
Exact Sturm counts for D3 and D5 are each zero on [−4,4], including endpoints. The repeated algebraic factor in the discriminant hence introduces no real physical discriminant root. In particular f=0 would imply ∂_u f≠0 everywhere in that S range.

The physical domain is the compact set |S|≤4 and 2|S|−4≤u≤S²/4. Its top boundary is the diagonal (S,u)=(2x,x²); its two bottom pieces are the positive and negative edges (S,u)=(x+2,2x) and (x−2,−2x), respectively, with −2≤x≤2. The interval endpoints also cover every corner. The exact specialized primitive profiles, with no omitted factors, are:
```
diagonal:
 (35x−213)(35x+907)(2025x²−87230x+651929)(2025x²+13570x+53849);
positive edge:
 (200x²−19565x−101381)(4039000x³+164368625x²−9298898830x+61166867801);
negative edge:
 (15295x−92041)(200x²−11665x−261001)^2.
```
Every factor has exact Sturm count zero on the closed physical x interval, verified independently also for the product; neither endpoint is a zero. Thus no boundary point is a root.

If f had a physical zero, its zero set intersected with the compact domain would achieve a minimum S. No boundary point is a root, so this minimizer would lie in the open (S,u) interior: S is not an endpoint and both strict u inequalities hold. Its nonzero u derivative would give a local smooth graph u=u(S) by the implicit function theorem, continuing to smaller S while still in the interior, a contradiction. Therefore **the minus resultant has no physical zeros anywhere on the positive face**. There is no threshold at which a tangential angular eigenvalue-rank case remains to classify.

The lower Q-minus eigenvalue at the all-positive corner is −3/64, and the three elementary energies are −71/840, −11/840, −11/840 there. All lower-branch sums are below E, including the largest by margin 143/6720. They remain strictly below E throughout this connected face by continuous ordered elementary eigenvalues and the exact root exclusion. Their separation is uniform by compactness (no new quantitative lower bound is asserted). The positive Q-minus branch was already excluded above E with explicit margin 17/320 by the prior independent Rayleigh argument.

## Replay

```sh
python positive_minus_gap.py positive-face-pencils.json --output new-minus-gap.json
```
The input is the exact 5,805-byte positive-face artifact SHA-256 611f6294f54cf2535fbddbbcc4eb5dea74736ab92ce3232c24c1a5fa9f71bafb. The output is 1,108 bytes, SHA-256 **7f9712bdd7bd19d664ef3daeaf7d7ca108607635ddd14d90e1ff02cf3c2a61a7**, reproduced under seeds 19, 71 and 5. The replay independently factors and checks all closed-interval counts and verifies the elementary corner energies from the pinned monic characteristic.
