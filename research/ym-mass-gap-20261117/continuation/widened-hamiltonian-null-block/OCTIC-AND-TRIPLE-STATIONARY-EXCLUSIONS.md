# Remaining octic candidate and stationary triple-root exclusion

Scope is the fixed-lattice strict elementary chart, not the entire torus.
Write s=e₁, t=e₂ and λ for a simple elementary energy. Strict physical
points have λ in [−71/840,3/280] and all three roots of the cosine cubic
strictly between −2 and 2 and pairwise distinct.

## Exact exclusion on the degree-eight candidate

The polynomial `OCTIC` in the verifier is reconstructed from the remaining
modular candidates and independently proved irreducible over QQ. Over its
rational number field, substitution of s=−168λ−21/5 reduces D, D_s and D_λ
to zero. To certify that it is the only possible common s, consider the
21×21 Sylvester matrix for D and D_s, both with unchanged s degrees 11 and
10. One reduction at prime 1009, with λ further reduced modulo an
irreducible factor of OCTIC, has monic gcd of degree one, hence rank 20.
All coefficients used have invertible rational denominators at 1009; the
leading coefficient of OCTIC is also invertible at 1009. Polynomial
division by its monic normalization therefore commutes with this reduction.
The nonzero reduced 20-minor cannot be zero over the rational number field.
The certified common root and rank bound together force the common gcd
to be s+168λ+21/5 in characteristic zero. No modular observation is used
alone as an existence or exclusion proof.

Reconstruct t from (9ad−bc)/(2Δ₀); Δ₀ is a unit modulo OCTIC. Exact evaluation
of the reconstructed cosine cubic at X=−2 gives zero in this field.
Thus all stationary points with λ on this candidate polynomial leave the
strict chart, regardless of the real-root choices.

## Exact exclusion of stationary triple roots in the physical energy range

After clearing rational denominators and removing nonzero integer content
from A=Δ₀ and B=Δ₁, the verifier computes two exact rational resultants in s.
They have degrees 126 and 171:
`R=Res_s(A,B)` and `J=Res_s(B,B_s)`.
Their monic gcd is the monic normalization of
`(1344λ+325)^6 (112λ−3)^27`. A stationary triple root needs A=B=B_s=0
and hence λ in this support, including if a specialization drops degree
(the fixed-size polynomial resultant still vanishes at a shared finite
root). Both roots lie outside the closed physical energy bounds.
The B_λ condition is unnecessary to exclude them.

## Limits

Together with the earlier note this treats all reconstructed factors of
the recorded degree-15 support and separately eliminates physical stationary
triple roots exactly. This is not a full characteristic-zero elimination
of D=D_s=D_λ for double roots. In particular the common resultant support
overlapping the triple projection must still be checked for distinct s
lifts, as must leading drops and any unresolved exact projection support.
Equal-cosine surfaces are outside the strict chart. No global resolvent,
physical spectral density, continuum or mass-gap conclusion follows.

Replay:
```sh
python verify_octic_triple_exclusions.py global-interior-threshold.json
```
