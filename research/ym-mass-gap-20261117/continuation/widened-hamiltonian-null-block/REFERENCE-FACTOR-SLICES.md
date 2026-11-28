# Four exact transverse slices of the 42-channel reference determinant

At target E=−13/336, use the same tangent chart as the certified regular reference point: momentum components p = (2 atan u, 2 atan v, 2 atan t). Exact Haar stencils, the projected six-loop null Gram, and integer Bareiss determinants reconstruct the specialized polynomial. The earlier exact Laurent degree 32 in each signed third-variable direction implies a true clearing power (1+t²)^32. The 42-row integer matrix introduces clearing power 42, so (1+t²)^10 is removed as pure chart denominator. Reflection symmetry makes the reduced polynomial even in t. Exact interpolation in t² uses 33 nonnegative integer t values and direct checks at four independent signed values. The omitted torus point t=∞ is checked by a direct determinant and is nonzero in all four slices. No (1+t²) factor remains.

Each of the four degree-64 polynomials is, over Q up to a nonzero constant, the product of a quartic irreducible factor cubed and a degree-52 irreducible factor once. The two factors are coprime and each is square-free. Exact Sturm root counts and fully disjoint rational isolating intervals give:

| transverse (u,v) | distinct real quartic roots (each determinant order 3) | distinct real degree-52 roots (each determinant order 1) |
|---|---:|---:|
| (8,12), certified chart | 0 | 18 |
| (1,2) | 4 | 10 |
| (2,3) | 2 | 10 |
| (1,3) | 4 | 10 |

Counts include both signs of finite t; t=0 is not a root. The previously certified interval (6.4457770,6.4457771) contains exactly one degree-52 root and no quartic root. Each simple full-determinant zero has one-dimensional kernel and a nonzero transverse eigenvalue slope (analytic Hermitian pencil with constant positive Gram).

## Exact source of the repeated factor

Independently of the sliced census, shift the projected six-loop operator by the flat eigenvalue −1/42. The shifted 6×6 rectangle–rectangle form is identically zero, and its 6×8 coupling to the cube-loop null directions has rank exactly three over the three-variable rational function field. On each real-torus fibre the adjoint rectangle-to-cube map therefore leaves at least three rectangle-only null directions. An exact Laurent specialization (2,3,5) has shifted full rank 11, and an independent fraction-free rank computation of the full 14×14 matrix also gives 11, so the flat multiplicity is generically three. The tensor sum consequently has the global factor given by the cube of the three-channel determinant shifted by −1/42. Direct symbolic determinants of that 3×3 shifted matrix identify each specialized quartic exactly.

At each real quartic root, its three-channel determinant is simple, giving one transverse nonzero slope on the elementary-loop side. Tensoring with the flat six-loop directions gives at least three transverse crossings with that same slope. The full determinant has order exactly three and the degree-52 factor does not vanish there, so there are exactly three crossing eigenvalues in that slice and no additional nullity. This distinguishes determinant exponent from multiplicity of any one eigenline.

The repeated flat-channel factor is invisible as a real crossing on the certified (8,12) slice but crosses at the other three transverse values. This is not evidence of an everywhere-evanescent quartic. The remaining specialized degree-52 factor has real roots in each tested slice. These facts do not settle multivariate irreducibility or real-sheet coverage for every global factor, full limiting absorption, the physical defect-dressed source, spectral weight, or continuum theory.

## Replay / pins

```sh
PYTHONHASHSEED=17 python reference_factor_slices.py --output new-factors.json
python slice_root_intervals.py new-factors.json new-real-intervals.json
python flat_structured.py new-factors.json
```

- Determinant-factor artifact: 12,997 bytes; SHA-256 c52d5808ac4cf6915d3683e407821026e929b25b4cb971052920c27f11e19f7f.
- Real isolating intervals artifact: SHA-256 02e48dcd431fd11be698dbb13fda4400ab982e8e0eb116b3b17d17b874323bc1.
- Optional independent fraction-free full rank: `python flat_fraction_free.py new-factors.json`. The faster structural proof is in `flat_structured.py`.
