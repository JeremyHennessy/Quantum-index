# Independent DGLAP source review — 2026-10-26

Scope: one local unpolarized, spacelike, leading-order collinear PDF-evolution representative. No publication authority and no claim of a complete QCD review.

## Direct inspection

- **Salam and Rojo, arXiv:0804.3755v1**, printed/PDF p. 4, Eq. (1): parton-number densities, matrix equation, outgoing/child `i` and incoming/parent `j`. Printed/PDF p. 7, Eqs. (3)–(4): external `alpha_s/(2 pi)` with a splitting-function series starting at order one. The implementation convention announced on p. 6 instead stores momentum densities `x f`; do not apply that convention to the number-density equation without its Jacobian. Inspected text and rendered equation page.
- **Botje, arXiv:1005.1481v3**, printed/PDF pp. 7–8, Eqs. (2.4)–(2.6), p. 8 paragraph/footnote 3: explicit number-density `f`, scale `mu_F=mu_R`, MS-bar scheme, and either equivalent convolution order with `dz/z`. Printed/PDF p. 9, Eqs. (2.14)–(2.15): its full kernel `P` **includes** powers of `a_s=alpha_s/(2 pi)`; truncation establishes LO. Printed/PDF p. 62, Eqs. (A.2)–(A.5): SU(3) LO coefficients, `2 n_f` singlet `qg` multiplicity, denominator-only plus prescription and endpoint deltas. The opening of Appendix A explicitly changes to momentum density; Eq. (A.1)/(A.6) therefore lacks the number-density `1/z` measure. Inspected text and rendered pp. 8, 9, 62.
- **Botje**, printed/PDF p. 26, Eq. (4.1) and following paragraph: full-support momentum/valence input sum rules are conserved by evolution. This does not validate evaluating full sum rules on a truncated numerical x grid.

## Independent cross-source check, not proposed bibliography expansion

- **Vogt, Moch and Vermaseren, arXiv:hep-ph/0404111v1**: printed p. 2/PDF p. 3, Eqs. (2.1)–(2.3) define number PDFs, factorization scale and convolution. Printed p. 14/PDF p. 15 Eq. (4.1) expands the *full* kernel in `alpha_s/(4 pi)`. Printed p. 15/PDF p. 16 Eqs. (4.6), (4.11) give singlet LO `qg,gq,gg`; next page specifies plus distributions. Divide LO coefficients by 2 to compare with the proposed `alpha_s/(2 pi)` convention. The singlet `qg` also contains flavour/antiflavour multiplicity. Inspected text and rendered LO page.
- **Moch, Vermaseren and Vogt, arXiv:hep-ph/0403192v1**: printed p. 3/PDF p. 4 Eq. (2.6) gives the `alpha_s/(4 pi)` convention. Printed p. 12/PDF p. 13 Eqs. (4.5), (4.8) and following plus statement independently match the quark LO kernel after dividing by 2. Printed p. 2/PDF p. 3 paragraph after Eq. (2.5) identifies vanishing first moments of valence/odd nonsinglet kernels. Inspected text and rendered LO page.

- **Gehrmann, von Manteuffel and Yang, arXiv:2302.00022v1**, Sec. 2.2, printed p. 3/PDF p. 4, opening paragraph: explicit leading-power collinear twist-two scope; Introduction printed p. 2/PDF p. 3 connects these anomalous dimensions to PDF evolution. Inspected via the primary arXiv PDF. This independently supports the domain restriction; adding a bibliography record solely for it is not required by this bounded proposal.

The historical Altarelli–Parisi1977 record must remain historical provenance only unless the exact original full text is legitimately inspected; no original-paper equation number was inferred.

## Independently reproduced mathematics

`independent_math_check.py` uses exact rational monomial moments and independent midpoint numerical convolution checks. It verifies:

1. Zero nonsinglet number moment.
2. Zero column sums of the momentum moments, not row sums.
3. Equivalent numerator-product/whole-fraction plus conventions **only with** the corresponding endpoint adjustment.
4. Toy scalar convolution `P(z)=z`, `f(x)=x^2` gives `x-x^2` with `dz/z`.
5. `f` to `F=x f` measure conversion.
6. Quark kernel acting on constant test `f` matches an independently derived analytic function.

Six intentionally wrong endpoint/index/flavour-count mutants violate exact moments; numerical negative controls distinguish a missing measure and an extra coupling factor. These are mathematical sanity checks, not PDF fits, physical evolution, browser verification, full repository tests or experimental confirmation.
