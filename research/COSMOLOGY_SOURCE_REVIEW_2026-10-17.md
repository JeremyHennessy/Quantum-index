# Cosmology scientific completeness — four independently source-reviewed representatives

**Review date:** 17 October 2026. **Intake main:** `e2cea285d1e49c1a9ac0ff7e9207a9c9cb162526`. Scope is deliberately small: append four mathematical formula records and two bibliography sources only. Preserve every existing source, mathematical record, theory ID, relationship, Passport, Evidence result, visual state and workspace data. These are scientific model definitions, not detections.

## 1. Noncanonical scalar k-essence

Original paper: C. Armendáriz-Picón, V. Mukhanov, P. J. Steinhardt, [*Essentials of k-Essence*, Phys. Rev. D 63, 103510 (2001)](https://doi.org/10.1103/PhysRevD.63.103510), preprint [astro-ph/0006373v1](https://arxiv.org/pdf/astro-ph/0006373v1).

**Original PDF inspected:** Sec. II printed p. 2 (PDF page 2), Eqs. (2) and (3): kinetic invariant `X=(∇phi)²/2` and factorized `p=K(phi)p_tilde(X)`. Printed p. 3 (PDF page 3), Eqs. (4), (6), (7): `rho=K(2X p_tilde_X - p_tilde)`, `w=p/rho`, `c_s²=p_tilde_X/(p_tilde_X+2X p_tilde_XX)`. Source's Eq. (11),(12) establishes positivity/stability restrictions separately. The atlas uses its already registered original bibliographic ID `wave4-kessence-2000` (year 2000 preprint; final journal 2001) without rewriting provenance.

**Boundaries:** single-field *factorizable* subclass with `K>0`, mostly-minus signature and homogeneous `X>=0`. c_s is the perturbation propagation speed, not the universal adiabatic sound speed. Not every noncanonical kinetic function gives viable perturbations, cosmic acceleration, or a preferred observational model.

## 2. Chaplygin gas: original fluid branch

A. Yu. Kamenshchik, U. Moschella, V. Pasquier, [*An alternative to quintessence*, Phys. Lett. B 511, 265–268 (2001)](https://doi.org/10.1016/S0370-2693(01)00571-8), original PDF [gr-qc/0103004v2](https://arxiv.org/pdf/gr-qc/0103004v2).

**PDF inspected:** printed p. 2, Eqs. (1),(4),(5). Perfect-fluid `p=-A/rho`, `d(rho a³)=-p d(a³)` and resulting `rho=sqrt(A+B/a^6)`. The new primary-source bibliography record has a different identity from the existing 2003 Chaplygin citation. The formula combines the explicitly printed original and its conservation-derived solution.

**Boundaries:** `A>0`, `B>0` and a consistent normalized FRW scale factor select the positive dust-to-vacuum branch. Generalized Chaplygin `p=-A/rho^alpha`, perturbation sound speeds, structure constraints and observed viability are outside this representative. Source-dependent background modelling must not be presented as empirical confirmation.

## 3. FIMP freeze-in by bath-particle decay

L. J. Hall, K. Jedamzik, J. March-Russell and S. M. West, [*Freeze-In Production of FIMP Dark Matter*, JHEP 03 (2010) 080](https://doi.org/10.1007/JHEP03(2010)080), PDF [arXiv:0911.1120](https://arxiv.org/pdf/0911.1120).

**PDF inspected:** Sec. 6.1 printed p. 21 (PDF page 22), Eq. (6.1) `B1→B2X`, Eq. (6.3) collision integral, approximations after Eq. (6.4), Eqs. (6.5),(6.6) `n_dot_X + 3H n_X ≈ g_B1 m_B1² Gamma_B1 T K_1(m_B1/T)/(2pi²)`. Atlas bibliography entry `freeze-in-2010` already exists and is reused.

**Boundaries:** rare two-body decay of an equilibrium parent to an initially negligible dark species, Maxwell–Boltzmann bath approximation, ignored inverse reactions and quantum occupancy factors, no backreaction or universal UV-dominated production. Width is rest-frame `B1→B2X`; include its degeneracy consistently. This is not the equilibrium WIMP freeze-out equation.

## 4. Leptogenesis: flavour-resolved CP asymmetry

S. Davidson, E. Nardi and Y. Nir, [*Leptogenesis*, Phys. Rep. 466, 105–177 (2008)](https://doi.org/10.1016/j.physrep.2008.06.002), original reviewed [arXiv:0802.2962v3](https://arxiv.org/pdf/0802.2962v3).

**PDF inspected:** Sec. 4.1, Eq. **(4.2), printed p. 20 (PDF page 20)**. `epsilon_alphaalpha` is flavour-alpha rate difference between `N1→phi l_alpha` and its CP conjugate, divided by the **total rate summed over all flavours and conjugate states**; `|epsilon|<=1` follows from nonnegative partial widths. Sec. 4.2 separately treats out-of-equilibrium efficiency. The atlas adds this as an *authoritative review*, preserving historical Fukugita–Yanagida 1986 origin references.

**Boundaries:** type-I seesaw-like heavy-Majorana-neutrino decay example, not an expression for all leptogenesis mechanisms. Nonzero CP asymmetry alone is insufficient for a net cosmological baryon density: production efficiency, washout, flavour effects and sphaleron conversion must be handled independently. No experimental neutrino or baryogenesis evidence is claimed.

## Integrity gates and target inventory

Pre-candidate: 481 theory IDs, 415 formula entries (166 explicitly reviewed, 249 baseline), 558 bibliography records, 281 formula-linked theories, 154 formula-bearing gaps; 29 Passports, 610 relationships, 16 Evidence. **Candidate:** formulas 419, explicit 170, baseline 249, bibliography 560, linked 285, gaps 150; all other totals unchanged. Category `Astroparticle physics & cosmology`: 26 entries with 8 previously formula-bearing, 17 representative gaps, and 1 primarily conceptual exception; after this wave **12 formula-bearing / 13 gaps / 1 conceptual**.

Both modified science corpus files must retain their **exact approved Git blob prefixes** `theories.js 89d4930f4335f582ab938b600cc794c555f2261d`, `formulas.js 03ece659efb2d49459bffb249f87213fb5e9ec3c`. New mathematical transformations require analytical/numerical tests; real MathJax in Chromium and WebKit must render all new cards, source links and 390px/1280px containment. Node regression, generated artifact consistency, CI and merged-main/hosted acceptance remain separate gates. This research receipt alone does not claim deployment.
