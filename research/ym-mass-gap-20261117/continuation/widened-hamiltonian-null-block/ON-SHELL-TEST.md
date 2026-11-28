# A finite-matrix test for on-shell weight of the odd quadratic channel

November 28, 2026 · Coefficient-level test at fixed spacing and fixed total momentum. This does not establish physical scattering or decay.

The [odd essential spectrum result](FIXED-MOMENTUM-SLOPE-INVERSE.md) identifies the odd null quadratic operator with a separated reference convolution operator plus a finite-rank perturbation. A coefficient can lie inside the essential band even if a particular local odd vector has no spectral weight there. The following test separates these claims.

Let the actual odd quadratic operator, with a harmless finite-dimensional extension filling the omitted relative sites, be `H=H_ref+J V J*`. Here `H_ref` is the separated translation convolution on the full relative lattice direct summed with the zero reference operator on the near coordinates; `F` is a finite set of coordinates including the range and domain of the self-adjoint defect and the support of the source vector; `J:F→H` is its inclusion; and `V=V*` acts on `F`. The [fixed-fibre folded locality argument](FIXED-MOMENTUM-SLOPE-INVERSE.md) ensures that the full cubic source `w=C3 b` has finite relative support at fixed total momentum, so `F` can include it. The [verified folded pairing](FOLDED-CUBIC.md) with one local odd vector is not a substitute for evaluating the full source: different coordinates can interfere.

For Im z>0, set `G0(z)=J*(H_ref−z)⁻¹J` and `G(z)=J*(H−z)⁻¹J`. The resolvent identity (the [matrix Aronszajn–Krein formula](https://arxiv.org/abs/1806.08856)) gives
```
G(z) = (I+G0(z)V)⁻¹ G0(z),
Im G(z) = (I+G0(z)V)⁻¹ (Im G0(z)) (I+V G0(z)*)⁻¹.
```
The inverses exist in the upper half-plane by the resolvent identity (equivalently the finite-rank Birman–Schwinger argument). The second equation follows by multiplying its two sides on the left by `I+G0 V` and on the right by its adjoint; the mixed terms `G0 V G0*` cancel. Both formulas avoid inverting `G0` itself.

At an energy where the boundary matrix `G0(E+i0)` exists continuously and `I+G0(E+i0)V` is invertible, the local spectral density is
```
ρw(E) = π⁻¹〈u, (Im G0(E+i0)) u〉,
u=(I+V G0(E+i0)*)⁻¹ w_F.
```
Here the density formula is the boundary-value version of Stieltjes inversion; continuous boundary limits on an energy interval suffice. In particular its nonzero value at a regular energy requires the *defect-dressed source*, not just an arbitrary vector in the near odd space, to be seen by the reference local density matrix. For the convolution block, the latter is computed from the 42-dimensional relative momentum symbol: on smooth simple band sheets with nonvanishing group velocity it is the sum of coarea integrals of the finite-support Bloch evaluation matrices weighted by spectral projections and reciprocal group-velocity magnitude. If thresholds, band crossings, finite reference poles or a singular defect inverse occur, analyse them separately; do not assume the regular formula applies there.

The next check at the probe coefficient is therefore (i) certify the relevant on-shell reference boundary matrix and any exceptional energies, (ii) test the finite determinant, and (iii) evaluate the quadratic form for the full folded source or produce a certified subspace bound. Testing a single near basis direction is a useful diagnostic, but its positive density would not by itself prove positive density for the full folded source. No value of the boundary matrix or resulting density at the probe coefficient is claimed here.
