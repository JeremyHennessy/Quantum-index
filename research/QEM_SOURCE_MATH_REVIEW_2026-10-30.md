# Quantum error mitigation: source-located mathematical candidates (30 October 2026)

**Proposed science only — no new live theory or equation.** Prepared against the protected 483-entry main checkpoint `228cd84230d0eaef8325dad4a94dc81ad8cf5a27`. Machine-readable equations and caveats: [QEM_SOURCE_MATH_PROPOSAL_2026-10-30.json](QEM_SOURCE_MATH_PROPOSAL_2026-10-30.json). Run `node --test scripts/qem-source-math-proposal.test.mjs` for bounded mathematical counterexamples and schema checks.

## Original inspected source

Temme, Bravyi and Gambetta, *Error mitigation for short-depth quantum circuits*, [arXiv:1612.02058v3](https://arxiv.org/pdf/1612.02058v3), dated 6 November 2017 on the PDF, first preprint posted 6 December 2016, published in *Physical Review Letters* **119**, 180509 (2017). The paper was read at the actual displayed equation pages: printed p.2, Eqs. (2)–(4), and printed p.3, Eqs. (7)–(10).

This independently confirms **the specific symbols/expressions and their stated limited interpretation**. It does not establish that this paper invented all forms of error mitigation or that every claim in it is physically validated for all quantum devices. Earlier mathematical extrapolation techniques predate the quantum-computing application.

## Two formula candidates

**(1) Zero-noise Richardson extrapolation (printed p.2, Eq. 3)**

```text
Ehat_K^(n)(λ) = Σ_{j=0}^n γ_j Ehat_K(c_j λ).
```

The coefficients cancel orders through `n` when `Σ γ_j=1` and `Σ γ_j c_j^k=0` for `k=1,…,n`. **Source transcription caveat:** the first summation in the author's printed Eq. (4) uses an `l` bound with a `γ_j` summand, an inconsistent dummy index; the candidate uses `j` consistently and records this as a notation correction, not an unexplained alteration of the original. The error term of order `O(λ^(n+1))` is a bounded idealized truncation bias, not a guarantee against variance from finite shots, drift or imperfect control of the noise scaling.

Independent first-order mathematical fixture: choose `c=[1,2]`, `γ=[2,-1]`, and `E(λ)=E*+aλ+bλ²`. Then `2E(λ)-E(2λ)=E*-2bλ²`: the linear term cancels exactly, while higher-order bias remains.

**(2) Quasi-probability ideal-map decomposition (printed p.3, Eq. 7)**

```text
U_β = γ_β Σ_{α∈Ω_L} P_β(α) σ_β(α) O_α.
```

In this representation `P_β` is a normalized efficiently sampleable distribution over implementable noisy circuits, `σ_β(α)=±1`, and `γ_β≥1` is the normalization/sampling-overhead factor. The paper's discussion following Eqs. (8)–(10) makes clear that sample cost increases with `γ_β²`; this is **not** generation of physical noise-free operations or a guarantee of efficient correction under arbitrary noise.

An independent signed-weight arithmetic fixture verifies that `η=[1.1,−0.1]`, `γ=Σ|η|=1.2`, `P_i=|η_i|/γ`, and `σ_i=sign(η_i)` reproduce the same linear expectation functional. This test checks the representation algebra, not any hardware or physical noise model.

## Remaining admission gates

The intended candidate theory `quantum-error-mitigation` is absent from the protected catalog, but a *canonical historical origin year* for the full umbrella still requires an independent priority review. Distinguish method families, review precise estimator overhead and assumptions, and avoid conflating error mitigation with the existing `quantum-error-correction` or `quantum-simulation` nodes. Only then consider a tiny separately reviewed runtime PR with 1 theory, 2 formula cards, versioned source, explicit editorial relationships if appropriate, and all historical rollback, Node, Chromium/WebKit and served-asset parity checks.

**Status:** research source-and-math gate partially passed; no production science, no UI modifications, no new experimental results and no user-facing deployment.
