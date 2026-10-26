# KMS equilibrium formula-gap proposal

**Status: local proposal only, 2026-10-26.** One new, source-located defining formula is proposed for the existing `kms-equilibrium` theory. No main-branch, response-candidate, repository, GitHub, Library, deployment, or publication state has been changed. The pending response-draft upload has not been retried.

## Useful result

- Fresh GitHub reads show main `1ca99e424959e2238448335ccd7b6143c376e94d`, with no formula linked to `kms-equilibrium`.
- A directly inspected primary research paper supplies the complete analytic/boundary definition, not merely a related Gibbs density matrix: Araki and Moriya, *Equilibrium Statistical Mechanics of Fermion Lattice Systems*, inspected arXiv v2 (2003), Section 6.1, Definition 6.1, printed/PDF page 41.
- The proposed physical-time convention fixes the easily confused **positive** imaginary displacement **i beta hbar**, together with **reversed operator order**.
- Standalone checks passed: 16,200 matrix-unit boundary checks, 60 dense-complex checks, 60 energy-origin checks, 60 unitary-basis checks, and six negative controls. Maximum positive boundary residual: approximately 1.02e-15. These finite checks support convention correctness, not universal equilibration or infinite-system existence.

## 1. Repository gap and non-duplication

The current theory is a mathematical framework dated 1957, with source `wave4-kms-book` (Bratteli and Robinson, authoritative review). `formula-audit.js` assigns `formula-bearing-gap`, because its computed formula-ID list is empty. The fresh remote blobs and local matches are recorded in `remote-baseline.json`.

Existing related cards remain untouched:

| Existing card | What it represents | Why this proposal is different |
| --- | --- | --- |
| `gibbs-state` | A canonical density operator when its partition function exists | KMS is an analytic correlation criterion that can be stated without a global Gibbs trace |
| `kubo` | Linear-response susceptibility | KMS is not a response coefficient or perturbation formula |
| `matsubara` | An imaginary-time-ordered Green function | KMS is an unsymmetrized correlation boundary relation; no automatic time-ordering sign belongs here |

No FDT formula, Gibbs rewording, new historical date, new theory, relationship edge, universal thermalization claim, or novel physics is proposed. Formula linkage alone does not upgrade every historical/source claim of the theory entry. Its existing provenance label and bibliography linkage can remain unchanged; the proposed formula has its own exact primary-source locator.

## 2. Exact statement and conventions

Let the observable algebra be a unital C*-algebra mathcal A. A state omega is a positive normalized linear functional, so omega(1)=1. Let alpha_t be a one-parameter group of *-automorphisms that is **point-norm continuous**: for each algebra element X, alpha_t(X) depends continuously on t in norm.

Use physical time t, inverse temperature beta=1/(k_B T)>0, and hbar>0. A finite Hamiltonian realization uses

    alpha_t(B) = exp(+i H t/hbar) B exp(-i H t/hbar).

For **every** A,B in the algebra, there must exist a scalar function F_AB with:

    S = {z in C: 0 < Im z < beta hbar};
    F_AB holomorphic in S, continuous and bounded on its closed strip;
    F_AB(t) = omega(A alpha_t(B));
    F_AB(t + i beta hbar) = omega(alpha_t(B) A), for all real t.

This is the proposed defining formula. A and B need not be Hermitian. The card in `candidate.json` contains explicit LaTeX, plain text, assumptions, variables, units, regime, and source locators.

### Dimensions and limitations

- beta has units energy^-1; hbar has units energy*time; the strip width beta*hbar has time units. Ht/hbar and beta H are dimensionless.
- F_AB and both boundary expectations have the product of the units of A and B. The state is a normalized expectation functional.
- The analytic object in the general definition is the **scalar correlation F_AB**, not an unqualified complex-time automorphism alpha_z for all algebra elements. The operator-valued shorthand requires analytic elements. The inspected source explicitly separates these cases.
- A globally defined density matrix or trace-class exp(-beta H) is **not assumed** in the algebraic statement. The finite-dimensional illustration below requires no infinite-volume limit.
- This proposal covers 0<beta<infinity, not the zero-temperature/ground-state limit, beta=0 tracial case, or negative-temperature states.
- It does not assert existence or uniqueness of a KMS state for arbitrary dynamics, a unique infinite-volume phase, decay of correlations, mixing, or approach to equilibrium from arbitrary initial states.
- For a grand-canonical ensemble, use the correctly specified dynamics, such as H-mu N in the finite model when appropriate. This card does not silently equate all such dynamics to bare-H time evolution on every observable.
- There is no extra fermionic minus sign in this algebraic, un-time-ordered boundary statement. Antiperiodicity for a conventional time-ordered fermionic Green function involves its additional definitions. It is not the statement that each F_AB is itself periodic.

## 3. Primary-source evidence and locator scope

**Inspected source:** Huzihiro Araki and Hajime Moriya, *Equilibrium Statistical Mechanics of Fermion Lattice Systems*, Rev. Math. Phys. 15 (2003), 93-198, DOI [10.1142/S0129055X03001606](https://doi.org/10.1142/S0129055X03001606), [arXiv:math-ph/0211016v2](https://arxiv.org/abs/math-ph/0211016v2). The version was posted 15 June 2003.

Exact locators:

1. [Section 6.1, Definition 6.1(A), printed/PDF p. 41](https://arxiv.org/pdf/math-ph/0211016v2#page=41): strip regularity and both boundary values. Part (B) gives the separate entire-analytic-element form. **The boundary display is unnumbered; it is not Eq. (6.1)**, which is a modular-automorphism relation on p. 42.
2. [Section 5.1, printed/PDF p. 31](https://arxiv.org/pdf/math-ph/0211016v2#page=31): point-norm continuity. Section 5.2, p. 32, Eq. (5.2) uses generator i[H,A], fixing the hbar=1 time convention. Our t_phys=hbar*t_source restores the strip width beta*hbar without changing operator order or sign.
3. Section 1, p. 4, discusses a modified dynamics for grand-canonical ensembles. That discussion is a caution, not a new formula added by this proposal.

The local PDF was fetched from the public arXiv endpoint, extracted, and p. 41 rendered and visually inspected. Its SHA-256 is `2496b2413a48c3342cc5c5591efa200a5394334feabb2cc590a87eabdbfa71c7`; local files live under `sources/`. No account, paywall, or additional credential was used. The raw PDF and rendered screenshot are research inputs, not proposed repository assets or public redistributions.

Historical scope is deliberately modest. The [publisher page for Haag, Hugenholtz and Winnink (1967)](https://link.springer.com/article/10.1007/BF01646342) confirms the original equilibrium-state paper and its relation to the KMS boundary condition. Its original full text was not verified here: Springer returned a subscription preview and Project Euclid returned a challenge page. Therefore no exact original-paper equation/page claim is invented. Araki-Moriya is a primary research paper that explicitly states the standard definition; the proposed card does not claim that those authors invented it in 2003.

## 4. Independent finite-dimensional derivation

This section is our derivation, not an assertion that the finite model proves infinite-system claims.

Let H be any self-adjoint d-by-d matrix, rho=exp(-beta H)/Z, Z=Tr exp(-beta H), and define F_AB(z)=Tr[rho A exp(iHz/hbar) B exp(-iHz/hbar)]. In finite dimension this is entire. It is bounded on the closed strip of finite height beta*hbar, but need not be bounded on the entire complex plane.

Because H commutes with its exponentials,

    alpha_(t+i beta hbar)(B) = exp(-beta H) alpha_t(B) exp(+beta H).

Use cyclicity of the finite trace:

    F_AB(t+i beta hbar)
      = Z^-1 Tr[exp(-beta H) A exp(-beta H) alpha_t(B) exp(+beta H)]
      = Z^-1 Tr[A exp(-beta H) alpha_t(B)]
      = Tr[rho alpha_t(B) A].

An independent eigenbasis expansion makes the sign transparent. With H|m>=E_m|m> and p_m=exp(-beta E_m)/Z,

    F_AB(z) = sum_(m,n) p_m A_mn B_nm exp[i(E_n-E_m)z/hbar].

This is a finite sum of entire functions. At the upper boundary, the imaginary displacement contributes exp[-beta(E_n-E_m)], converting p_m into p_n. Relabeling m,n gives the required reversed-order expectation. The finite sum also bounds F uniformly in real t for any fixed bounded imaginary-time interval. This proves analyticity/boundedness in the finite example; numeric sampling alone does not.

### What finite uniqueness does and does not establish

On the **full matrix algebra M_d**, the boundary for all A,B forces the canonical state at the specified beta. To see it without importing an infinite-algebra theorem, diagonalize H and denote matrix units E_ij=|i><j|. At t=0:

- Choose A=E_ii and B=E_ij, i!=j. The right side is zero and the left side is exp[-beta(E_i-E_j)] rho_ji, forcing every off-diagonal entry of rho to vanish, including within degenerate eigenspaces.
- Choose A=E_ij and B=E_ji. The boundary gives p_i exp[-beta(E_j-E_i)]=p_j. Thus diagonal probabilities have the Gibbs ratio, and degeneracy requires equal weights.
- Normalization fixes Z. Conversely, the trace derivation proves that state is KMS.

This is a finite full-algebra statement only. A restricted diagonal algebra can conceal wrong populations; it cannot be used to claim the same uniqueness. Infinite systems can admit multiple KMS states or require different existence arguments.

## 5. Reproducible positive and negative checks

Run from this proposal directory:

    python kms-math-check.py
    node runtime-check.mjs

The Python script uses only the standard library, has deterministic seed 20261026 for dense complex matrices, and does not read/write the repository or access the network. It covers d=2,3,4, nontrivial/degenerate spectra, beta=.1,.7,1.4, hbar=.6,1,2.3, and t=-1.1,0,.37,2.4. All d^4 matrix-unit pairs test bilinearity, so the finite basis spans arbitrary A,B. Additional dense-complex, energy-shift, and Fourier-unitary basis fixtures exercise non-Hermitian operators and non-diagonal Hamiltonian representations.

Transparent negative witness: H=diag(0,1), beta=ln(3), hbar=2, t=0, A=|0><1|, B=|1><0|. Canonical p=(3/4,1/4), and the correct upper boundary is 1/4.

| Deliberate error/control | Absolute residual |
| --- | ---: |
| Negative instead of positive imaginary displacement | 2.0 |
| Omit hbar from the shift while hbar=2 | 0.1830127018922193 |
| Keep the original operator order at the upper boundary | 0.5 |
| Insert a spurious fermionic minus sign | 0.5 |
| Stationary rho=diag(.6,.4), not KMS at the specified beta | 0.2 |
| H=diag(0,0,1), rho=diag(.5,.2,.3), test the degenerate pair | 0.3 |

The two-level control can be thermal at a different temperature; it is not thermal at the specified beta. The degenerate unequal-weight control is not canonical for this H at any beta. A separate fixture demonstrates that diagonal A,B can still satisfy the boundary in a wrong diagonal state, preventing false reassurance from a restricted test set.

`math-check-results.json` records all counts. `runtime-check.mjs` first checks the exact local Git-blob identities against fresh remote reads, then inserts the candidate source/card **in memory only** and recomputes the formula audit. It verifies that all old formulas, sources, theory records, relations and every other audit entry remain unchanged. This is not repository-wide testing, browser QA, deployment, or CI.

The derived audit row currently inherits its `reviewedAt` from the theory record (2026-09-22), whereas the proposed formula explicitly records its own 2026-10-26 review. This is the existing audit schema, not a newly reviewed date for every theory claim. Do not silently rewrite the theory date just to make the row look fresh.

## 6. Integration plan, after the independent proposal is accepted

1. Re-read main and the response draft's terminal publication state. Do not retry a blocked upload or modify the response candidate. If another authorized release has landed, refresh the baseline and re-evaluate deltas rather than copying old total counts.
2. Create a separate, reviewable local integration branch in an authorized executor from the accepted base. Read current AGENTS and relevant repo skills. Preserve existing project limits and the user's publication authorization boundaries.
3. Register the single source and add the single card from `candidate.json`, leaving all existing equations, associations, cards, sources, theory text and relation edges intact. Detect duplicate IDs explicitly.
4. Let `formula-audit.js` derive the linked state; do not hand-edit a count or hard-code an exception. Against verified main the expected structural deltas are +1 formula, +1 explicitly reviewed formula, +1 bibliography record, +1 formula-bearing theory, -1 gap. Absolute main-based counts would be 458 formulas, 604 sources, 269 explicitly reviewed cards, 324 linked theories, 113 gaps. These numbers are **proposed**, not live.
5. Preserve the repository's exact-baseline regression architecture. Existing thermal/combined audit tests assert historical full-data snapshots: add an exact declared KMS projection layer and integrity ledger rather than weakening tests or rewriting historical assertions. If integrating after the response audit, compose after its accepted projection, not against a stale main snapshot. Assert byte-level restoration and rejection of undeclared edits.
6. Add focused schema, source-location, uniqueness, preservation, formula-audit transition, mathematical positive and negative tests. Add UI checks that the complete strip condition, assumptions and both source locators render, including mobile wrapping and navigation from the KMS theory. Do not display a truncated equation that hides analyticity.
7. Regenerate coverage, freshness, and content-hashed assets with project scripts; run `npm test`, `npm run validate`, and `npm run test:browser` on the final integrated state. Run the independent Python checks again. Disclose any never-run/blocked stage distinctly from a pass.
8. Only publish or deploy through the already authorized workflow once any relevant tool approval is resolved. Verify remote exact commit, draft PR status, CI for that commit, merge/deployment result and public asset identity before reporting shipped. This local proposal does not itself authorize bypassing a pending or denied tool action.

## 7. Review and stopping condition

An independent scientific reviewer has already confirmed the boundary sign, hbar factor, ordering, source locator and finite-model scope, and supplied the degenerate negative control. Their final artifact review is recorded separately. The local task ends when the proposal, candidate, derivation, check results and review are internally consistent. Publication and deployment are not part of this delegated task.
