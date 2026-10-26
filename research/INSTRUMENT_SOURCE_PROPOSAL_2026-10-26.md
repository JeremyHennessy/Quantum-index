# Finite quantum-instrument formula-gap proposal

**Local research proposal only — 26 October 2026.** No repository file, branch, PR, deployed site or upload state was changed. The separate response-draft upload and KMS candidate were not touched.

## Result

The accepted main commit `1ca99e424959e2238448335ccd7b6143c376e94d` has no formula linked to `quantum-instruments`. One outcome-resolved formula is proposed, not a second unconditional channel formula. Ten finite mathematical check groups pass; the non-mutating runtime simulation declares exactly one existing-record change: the modern primary-source association on `quantum-instruments`. All other existing fields/records remain unchanged, apart from the target's recomputed formula-audit row.

The proposal comprises **one formula, two source records, and one entity-source association**. Its bounded simulation has 483 theories, 605 sources, 458 formulas and 113 documented formula gaps, compared with the accepted 483 / 603 / 457 / 114. These are structural coverage counts, not scientific completeness claims. No deployment or integrated-test result is implied.

## Accepted records and non-duplication

`baseline-records.json` contains the exact entity, its existing `davies-lewis-1970` source, its empty formula-audit row, and the related cards. `baseline-receipt.json` identifies and hashes nine runtime files materialized read-only from the accepted Git object, rather than the different local working-branch head. The GitHub commit read independently confirmed main's SHA.

| Existing card | Information retained | Missing information supplied here |
| --- | --- | --- |
| `trace-born` | POVM outcome statistics | Conditional output operation/state |
| `kraus-map` | An outcome-forgotten CP channel | Which operation accompanied the recorded outcome |
| `kraus-completeness` | Trace preservation of the total map | Outcome probability and conditional normalization |

The target entity currently gives a modern CP description but cites only Davies–Lewis 1970. The declared existing-record delta in `candidate.json` changes only `quantum-instruments.sources` from `[davies-lewis-1970]` to `[davies-lewis-1970, okamura-ozawa-instruments-2016]`. Its date, core text, other fields, provenance label and every graph relationship are preserved. The accompanying `sourceMapping` explicitly assigns historical origin to Davies–Lewis and the modern CP definition to Okamura–Ozawa, Definition III.1 and following paragraph, PDF p.7. This is resolved in the local proposal/simulation, **not applied to the repository**; it is not being left as an optional unexplained citation gap.

## Precise representative

Work on one finite-dimensional Hilbert space H, with normalized density operator rho and finite nonempty outcome set Omega. Each I_a is a **linear completely positive** map on operators on H, and Phi = sum_a I_a is trace preserving. Define

    p_a = Tr[I_a(rho)],
    rho_a = I_a(rho) / p_a, only when p_a > 0.

At p_a=0, leave rho_a undefined. The positive subnormalized output is then zero; the zero matrix is not a normalized posterior. A branch that is null for one input need not be a zero map for every input.

The source checks for the probability/posterior equations are Ozawa, [arXiv:2110.03219v2, §5, Eqs. (53)–(54), printed/PDF p.20](https://arxiv.org/pdf/2110.03219v2#page=20). The explicit null-event convention is in §3.4, p.8. Its outcome-indexed multi-Kraus form and global completeness are [Eqs. (57)–(61), p.21](https://arxiv.org/pdf/2110.03219v2#page=21).

### Consequences derived here

For E_a = I_a^*(I), where Tr[A I_a(B)] = Tr[I_a^*(A) B], positivity gives E_a >= 0. Trace preservation of the sum implies sum_a E_a = I, hence E_a <= I. Thus p_a = Tr[rho E_a] and sum_a p_a = 1. Each branch is trace-nonincreasing on positive inputs; each branch need not be trace preserving.

The recorded-outcome instrument and its two reductions are different objects:

    instrument: {I_a}_a,
    POVM:       {E_a}_a, retaining only outcome statistics,
    channel:    Phi = sum_a I_a, forgetting the outcome.

For a normalized input,

    Phi(rho) = sum_{a:p_a>0} p_a rho_a.

Restricting this weighted sum avoids an undefined expression 0*rho_a. The equivalent sum of subnormalized outputs includes every outcome without division. For a coarse event D, sum only I_a with a in D and normalize by sum_{a in D} p_a when that sum is positive.

The finite algebra also proves the null-branch assertion: I_a(rho) is positive, so all its eigenvalues are nonnegative; zero trace forces them all to vanish. This is not a sampled numerical conclusion.

A multi-Kraus branch can be written I_a(rho)=sum_mu K_(a,mu) rho K_(a,mu)^dagger, with sum_(a,mu) K^dagger K=I. Complete positivity follows directly because, for any ancillary system and positive X, each term (K tensor I) X (K^dagger tensor I) is positive. No single-Kraus assumption is made. These operations are linear; their normalized conditional updates are generally not affine, as the fixture demonstrates.

### Assumptions, units and limitations

All matrices, effects, maps and probabilities here are dimensionless. A numerical measurement outcome can separately carry physical units; that does not give the probability units. This representative uses H to H maps, finite outcomes and the full finite matrix setting. It does not assert projectivity, repeatability, nondisturbance, purity preservation, or a unique instrument for a POVM/channel. It makes no empirical calibration claim. Continuous outcomes require measure-theoretic conditioning; realization for arbitrary operator algebras is outside this card.

## Historical versus modern definition

Okamura and Ozawa's primary research paper explicitly separates the positive-map instrument from the additional CP requirement: [arXiv:1501.00239v3, §III, Definition III.1 and the following paragraph, PDF p.7](https://arxiv.org/pdf/1501.00239v3#page=7). Page 8 gives the probability/posterior conditions and the ancillary-extension argument. The [introduction, p.2](https://arxiv.org/pdf/1501.00239v3#page=2), distinguishes Davies–Lewis's instrument framework from Ozawa's CP refinement. This paper was published as J. Math. Phys. 57, 015209 (2016), DOI [10.1063/1.4935407](https://doi.org/10.1063/1.4935407); the exact inspected version is the 2015 v3 preprint.

Ozawa's second cited item is transparently a **primary-author finite-dimensional chapter/derivation**, version 2 dated 14 February 2023, not a new discovery in 2023 or an inspected copy of his original 1984 paper. Its v2 adds the explicit multi-Kraus formulas used here. A finite-support typo in §3.6 is not copied; the proposal directly specifies a finite set Omega and uses the unambiguous complete-family condition in Eq.(59).

**Original-text limits:** the Davies–Lewis publisher DOI [10.1007/BF01647093](https://doi.org/10.1007/BF01647093) exposed bibliographic information and an abstract, but a subscription preview instead of full text. The attempted Project Euclid page did not expose readable paper content. The Ozawa 1984 DOI [10.1063/1.526000](https://doi.org/10.1063/1.526000) produced a non-retryable inaccessible publisher response. No accounts, purchase, credentials, challenge bypass or restricted-source workaround was used. Accordingly, there is **no assertion of direct original-paper equation review**, and the candidate does not attach an invented original locator.

The two public author-version PDFs were downloaded, extracted and inspected locally. Ozawa v2 pp.20–21 were rendered and visually checked. An initial Poppler rendering of Okamura–Ozawa had font-substitution defects; MuPDF successfully rendered pp.2, 7 and 8, which were then visually inspected against the extracted text. This used the same public PDF, not a different access route. SHA-256 receipts are in `sources/source-receipts.json`. Research PDFs/screenshots are local evidence inputs, not proposed website assets or public redistributions.

## Reproducible finite checks

Run from this folder:

    python instrument-math-check.py
    node runtime-check.mjs

Both are local and offline. The math script uses only the Python standard library and tolerance 1e-12; no random sampling or external package is required.

1. Five valid Kraus-family instruments on five qubit states check completeness, probabilities, positive branch outputs, normalization, effects and the correctly weighted nonselective output.
2. Measuring Z on |+> gives probabilities (1/2,1/2), posteriors P0/P1 and unconditional I/2. On P0, the second branch has probability zero and no posterior.
3. The projective instrument and “measure Z then reset to P0” have identical effects but different posteriors. The maximum entry difference for outcome 1 is 1.
4. The projective instrument and the random-unitary family I/sqrt(2), Z/sqrt(2) have the same dephasing channel, verified on all four matrix units. On P0 their outcome probabilities are (1,0) versus (1/2,1/2).
5. A coarse branch with two Kraus operators catches the false replacement of an incoherent operation sum by a coherent amplitude sum; the selected matrix-entry discrepancy is 0.1.
6. Missing normalization leaves branch trace 0.6; unweighted posterior addition gives total trace 2, not 1.
7. Omitting an outcome fails full-instrument completeness: retaining only P0 gives total probability zero on input P1.
8. Weak diagonal filtering preserves linearity of subnormalized operations but gives a 0.3 discrepancy from an incorrectly affine normalized posterior rule.
9. System transposition is positive and trace preserving, but partial transposition of a Bell state has expectation -1/2 on the antisymmetric vector. This rules out complete positivity; it is a direct finite witness, not an empirical observation.

`math-check-results.json` contains ten recorded check groups (the normalization mistakes share a group). The checks are regression fixtures, not proof by sampling of all instruments. Algebraic implications used above are proved separately.

## Bounded integration suggestion, not performed

If this candidate is later accepted, add only its one formula and two source records, apply the explicitly declared single entity-source association, regenerate the computed formula audit/coverage and asset metadata under the project's workflow, and preserve historical baseline assertions through the existing narrow-delta policy. Rebase/reconcile against the actual current accepted main first: the response and KMS candidates are independent, so do not assume this simulation's totals remain current.

Then run the full project unit/validation suites and genuine browser rendering, including a narrow mobile layout, source links, zero-probability wording and the theory/formula routes, on the exact proposed commit. No such integrated full-suite, browser, remote CI, merge or deployment verification is claimed here. The source PDFs should remain research inputs rather than bundled app assets.

The self-contained artifact is `candidate.json`; `runtime-check.mjs` proves the exact declared delta in a fresh VM from hashed baseline files, including the one source-array update. It never writes a checkout or changes the materialized baseline files. `INDEPENDENT_REVIEW.md` records the independent scientific verdict once received.
