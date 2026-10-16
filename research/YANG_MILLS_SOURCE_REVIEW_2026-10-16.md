# Yang–Mills field strength and action — independent convention review

**Date:** 16 October 2026. **Intake main:** `a85f22e6c7e4db89a00c6152ef4db9fd4d052539`. The QEC PR #80 is already merged; its source records and review are an approved regression baseline. This release is append-only and does not change the previously rendered Yang–Mills formula identities or mathematical strings, the theory/edge graph, empirical Evidence, or UI.

## Original source, verified against the page images

[Yang and Mills (1954)](https://doi.org/10.1103/PhysRev.96.191), *Phys. Rev.* **96** 191–195. The original university-hosted scan was visually inspected at **printed p. 193 / PDF page 3**, especially equations **(4), (7), (8), (9), (11)**. The historic SU(2) notation defines a matrix B=2 b·T, an isotopic gauge derivative D=partial−2ie b·T, and a field strength whose derivative orientation in mu and nu is opposite to the modern representative.

The printed original Eq. (9) contains a **negative** nonlinear b_mu×b_nu term. That cannot be naively matched sign-for-sign to a modern F^a_mu nu with a **positive** g f^abc A^b_mu A^c_nu term.

## Independently inspected modern source

[University of São Paulo QFT II, Lecture 15: Non Abelian Gauge Symmetries](https://fma.if.usp.br/~burdman/QFT2/lecture_15.pdf). Visually inspected **printed pp. 9–11**, particularly Eq. **(15.48)** defining [D_mu,D_nu]=−igF_mu nu, **(15.49)** for matrix F, **(15.52)** with the positive component gf term, and **(15.59)** for normalized pure-gauge action. Eq. (15.34) declares the D=partial−ig A convention; hermitian generators satisfy [T^a,T^b]=if^abc T^c and Tr(T^aT^b)=delta^ab/2.

Direct expansion gives [D_mu,D_nu]=−ig(partial_mu A_nu−partial_nu A_mu)−g²[A_mu,A_nu]. Dividing by −ig gives F_mu nu=partial_mu A_nu−partial_nu A_mu−ig[A_mu,A_nu], which is the displayed plus-gf component expression.

**Reconciliation:** set A=2b and g=e in the 1954 SU(2) normalization, and keep the same D. Because the historic field strength reverses the derivative orientation, **F_modern^a_mu nu = −2 f_original^a_mu nu**. The negative historic b×b term and positive modern gf term therefore coexist consistently. The Lagrangian field-strength *square* is invariant under this overall reversal after the corresponding normalization is applied. This is a sign/convention reconciliation, not evidence that either independently curated physical theory was incorrect.

## Boundaries and acceptance

The representative L_YM is *pure classical gauge-field action*; the original Eq. (11) also contains fermion matter. The Passport neither imports that matter sector into pure Yang–Mills nor calls the 1954 paper a derivation of modern all-orders renormalization, confinement, or a mass-gap proof. No new empirical Evidence record is created.

The proposed census: **481 theories, 405 formula records, 163 theory-level formula gaps, 610 relationships**, **551** sources (+1 pedagogical source), **29** Passports (+1), **156 explicit / 249 baseline** formula metadata (+2 source-located reviews), existing Evidence unchanged. Existing original formulas, Passports, QED/GKSL and QEC scientific bytes remain protected by append-only source/file guards and historical reconstruction tests.

**Release gate:** exact PR-head Node + data/coverage/freshness/asset checks, Chromium/WebKit math and comparison checks, desktop/mobile screenshot inspection where possible, then separately successful merged-main and hosted acceptance. This note alone does not establish deployment.
