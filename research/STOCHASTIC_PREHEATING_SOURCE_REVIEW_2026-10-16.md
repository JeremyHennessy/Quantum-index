# Stochastic inflation and preheating: bounded mathematical source review

**Reviewed:** 16 October 2026. **Intake main:** `a7cbcfa590d5ae30ef53aed620a01f5fb8c88394` (merged and accepted dark-matter source-reviewed batch). Data edit is append-only from that exact main tree; historic `theories.js` and `formulas.js` bytes are protected by immutable Git object fingerprints. No preexisting formula, bibliography or citation record is changed.

## 1. Single-field stochastic inflation in e-fold time

**Primary source:** Vincent Vennin and Alexei A. Starobinsky, [*Correlation functions in stochastic inflation*](https://doi.org/10.1140/epjc/s10052-015-3643-y), European Physical Journal C **75**, 413 (2015), independent PDF review [arXiv:1506.04732v4](https://arxiv.org/pdf/1506.04732v4#page=3) (v4 posted Nov. 2016). Equation **(1.1)** appears on **printed p. 2 / PDF page 3**:
`dϕ/dN=−V'(ϕ)/(3H²(ϕ)) + [H(ϕ)/(2π)] ξ(N)`.
It is leading order in single-field canonical slow roll after coarse-graining long modes. The paper specifies `N=ln a`, `<ξ(N)>=0`, `<ξ(N) ξ(N')>=δ(N−N')` immediately after Eq. (1.1). It uses the **reduced** Planck mass `M_Pl=(8πG)^{-1/2}` in `H²≈V/(3M_Pl²)`—not the unreduced Planck mass of the already indexed PDG potential slow-roll formula.

**Same source, Sec. 2, Equation (2.3), printed p. 3 / PDF page 4:** Itô normalized-probability Fokker–Planck formulation:
`∂_N P = ∂_ϕ[(V'/3H²)P] + ∂_ϕ²[(H²/8π²) P]`.
The `∂²_ϕ` term acts on the full field-dependent `H² P` product, not on P alone. Source equation **(2.2)** shows alternate `α` prescriptions, with **α=0 for Itô**, and footnote 6 explicitly rejects the volume-weighted nonnormalized alternative in this treatment. Strong backreaction/nonleading slow-roll, arbitrary changes of stochastic time, noncanonical fields, non-Gaussian noise, and multidimensional fields are **not** established by the displayed equations.

The two records are a **single theory's matched drift and probability descriptions**, contributing *two formula cards but only one newly covered theory ID*. Neither gives experimental proof of inflation or observational confirmation of a stochastic background effect.

## 2. Mode amplification during reheating/preheating

**Primary source:** Lev Kofman, Andrei Linde, Alexei A. Starobinsky, [*Towards the Theory of Reheating After Inflation*](https://doi.org/10.1103/PhysRevD.56.3258), *Phys. Rev. D* **56**, 3258 (1997), original [arXiv:hep-ph/9704452v2](https://arxiv.org/pdf/hep-ph/9704452v2#page=12), **printed p. 12 / PDF page 12**, equations **(38)–(39)**. Starting from an oscillating massive inflaton `ϕ(t)≈Φ(t) sin mt` coupled quadratically to a daughter scalar `χ` through `−g²ϕ²χ²/2`, define the rescaled daughter mode `X_k=a^{3/2}χ_k` and obtain:
`d²X_k/dt²+ω_k² X_k=0,  ω_k²=k²/a²+g²Φ² sin²(mt)+Δ`.

The source defines `Δ=m_χ²−3/4(ȧ/a)²−3/2(ä/a)−ξR` directly beneath Eq. (39). It is small in the paper's light-daughter, post-inflation, slow-expansion approximation; it is **not zero in every theory**. The static Mathieu equation of Eq. (30) is a restricted approximation and the original explicitly says fixed-resonance stability charts fail for the general time-varying broad-resonance expanding background. The new record therefore indexes the expansion-aware rescaled mode instead of asserting a universal static Mathieu law. Backreaction, scattering, rescattering, thermalization and final particle abundances are independent nonlinear challenges, not solved by this one mode equation.

## Curation and preservation

The prospective release adds **two primary bibliography records and three distinct source-located formula cards**. It closes exactly **two theory-level gaps** (`stochastic-inflation`, `reheating-preheating`) because two formulas share the first theory. Candidate counts after the merged dark-matter release: **413** formulas, **279** theory entries with formulas, **156** documented formula gaps, **558** sources, **164 explicitly reviewed** formula records, **249 baseline** formula metadata, 30 formula categories. Theories (481), Passports (29), relationships (610), Evidence (16) and the approved application presentation remain unchanged.

Only the identified additions may change runtime source/formula files. A test-only restoration bridge compares the exact accepted main Git source/formula blobs before separating newer records for legacy regression tests. No experimental Evidence, mass-gap proof, or fake measure of completeness is added. Required acceptance: exact-head Node, generated coverage/freshness/assets check, Chromium/WebKit MathJax and 390px/1280px screenshot tests; merge and hosted verification separately. **This file records source review, not validation success or a deployed result.**
