# Transverse-momentum-dependent factorization: bounded source review (30 October 2026)

**Status: research-only source and identity review.** No theory, formula, source citation, relationship, UI, or generated runtime file is added. This review asks whether a scoped TMD factorization framework merits its own catalog identity; it does not certify a general-purpose factorization theorem or the historical origin of the whole subject.

## Candidate and existing catalog

The current catalog has `soft-collinear-effective-theory` and `dglap-evolution`, but no exact TMD-factorization identity. These are related and useful, but are not synonyms: SCET is an effective field theory used to derive factorization statements in selected scale hierarchies; DGLAP evolves collinear distributions in a hard scale. A TMD theorem for low-transverse-momentum Drell–Yan instead organizes the measured transverse momentum through transverse-momentum-dependent parton distributions, a hard factor, soft subtraction/rapidity-scale structure, and evolution. The candidate is therefore `transverse-momentum-dependent-factorization`, held for an independent granularity and history review rather than automatically promoted.

## Source-checked mathematical scope

Echevarría, Idilbi and Scimemi derive a Drell–Yan factorization theorem in an SCET treatment. Their Eq. (1.1) writes the cross section as a hard coefficient times two collinear TMD distributions and a soft function, with power corrections of order `(q_T^2/Q^2)^m` omitted. The paper's stated kinematic region is `Lambda_QCD << q_T << Q`; do not use this equation as a source for the fully nonperturbative `q_T` region. It defines subtracted TMD distributions and emphasizes that the soft contribution and subtraction depend on the chosen regulator/formalism. Its result is validated through first order in `alpha_s`; this source is not by itself a proof that every process admits a TMD factorization.

Collins' review states the Drell–Yan TMD expression in impact-parameter space (Eq. (2)) and gives the Collins–Soper and renormalization-scale evolution equations (Eqs. (3)–(4)). It explicitly limits the low-`q_T` formulation to `q_T << Q` and notes the need for a high-`q_T` matching term for a formula valid across all transverse momenta. Those are source-documented relations in a review, not proposed new formula cards.

The process qualification matters. Collins and Qiu construct a counterexample to the expected TMD factorization for back-to-back high-`p_T` hadron production in hadron–hadron collisions, using a simplified model and a transverse single-spin asymmetry. They explicitly distinguish this failure from Drell–Yan and SIDIS. The bounded claim here is therefore a Drell–Yan low-`q_T` framework candidate; universality across arbitrary hadroproduction is excluded.

## Decision and release gates

**Disposition: `CANDIDATE_DISTINCT_FRAMEWORK_HOLD_HISTORY_AND_GRANULARITY`.** The reviewed sources support the mathematical distinction among low-`q_T` TMD factorization, collinear DGLAP evolution, and SCET as an EFT derivation tool. They do not establish a single canonical origin year, one regulator-independent operator convention, or all-process universality. Before any runtime proposal, review the original CSS papers and earlier TMD / transverse-momentum resummation literature, select the intended scope (Drell–Yan only or a process-qualified framework), and compare its data model with the existing SCET, DGLAP, QCD, and collinear-PDF entries.

No candidate theory or formula is added to the shipped catalog. The check in `scripts/tmd-factorization-source-review.test.mjs` guards current catalog absence and the research-only/source-scope claims; it does not perform a physics derivation.

## Source record

- Miguel G. Echevarría, Ahmad Idilbi and Ignazio Scimemi, “Factorization Theorem For Drell-Yan At Low qT And Transverse-Momentum Distributions On-The-Light-Cone,” arXiv:1111.4996v3 (2012), Eq. (1.1), Eq. (2.13), and discussion of the low-`q_T` region. [Versioned primary manuscript](https://arxiv.org/pdf/1111.4996v3).
- John Collins, “TMD theory, factorization and evolution,” arXiv:1307.2920v1 (2013), Eqs. (2)–(4). This is an author review, used to check the process qualifications, impact-parameter expression and evolution convention, not as an original discovery source. [Versioned review](https://arxiv.org/pdf/1307.2920v1).
- John Collins and Jian-Wei Qiu, “kT-factorization is violated in production of high-transverse-momentum particles in hadron-hadron collisions,” arXiv:0705.2141v2 (2007). [Versioned primary counterexample](https://arxiv.org/pdf/0705.2141v2).

## Limits

The review records equation locations and the authors' stated scopes. It does not claim that the manuscript equations were independently rederived, that a particular TMD scheme is uniquely canonical, that nonperturbative TMD inputs are predicted from first principles, or that the broad TMD program began in the year of one cited paper.
