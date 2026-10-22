# Seventeen-card source review and symplectic notation correction

Prepared 22 October 2026 against accepted PR98, commit `9470364ff5f4e3f1e4a0e05a1ace8cd852b2f160`. This is a new, reconstructed, local candidate, not recovery of the lost original commit and not a published release.

## Substantive mathematical correction

The existing `cv-symplectic-eigen` card now gives the signed ordinary spectrum of `i Omega V`: the multiset of positive and negative Williamson eigenvalues, with multiplicity. The previous operator-modulus notation is not retained. For real symmetric positive-definite `V` and the standard canonical `Omega`, the standard operator modulus of `i Omega V` equals `V`; its ordinary eigenvalues need not be the symplectic eigenvalues. The physical one-mode example `V = diag(1/2, 2)` at `hbar = 2` has symplectic eigenvalue 1, signed spectrum {-1,+1}, and ordinary modulus eigenvalues {1/2,2}.

The corrected card distinguishes the generally non-Hermitian product from its Hermitian similar matrix, retains multiplicity and canonical ordering, and separates positive-definiteness from physical uncertainty. Bhatia and Jain, arXiv:1803.04647v1, PDF page 8, the final paragraph on that page within Section 2, supplies the spectral characterization. The existing Weedbrook reference is retained for covariance and uncertainty conventions, not as authority for the disputed operator-modulus wording. Exactly one bibliography record is added.

## Five stabilizer metadata reviews

The equations, plain-language equations, names, descriptions, classifications, theory links, and existing source lists of `stabilizer-condition`, `stabilizer-commute`, `stabilizer-projector`, `stabilizer-dimension`, and `logical-anticommute` are unchanged.

Their metadata now states the finite-qubit Pauli setting, signed Hermitian involutions, commuting generators and exclusion of minus identity, independent-generator rank rather than raw list length, normalization of the projector, encoded-qubit count versus Hilbert-space dimension, and matched logical-pair anticommutation. Redundant consistent generators, inconsistent signs, noncommuting operators, and even overlap are distinguished. No generalization to arbitrary non-Pauli codes is asserted.

The Gottesman original manuscript arXiv:quant-ph/9705052v1 supports the common eigenspace and rank/dimension statement on PDF page 26 (printed page 18), normalizer and Hermitian-phase qualifications on PDF page 27, logical algebra on PDF page 28 (printed page 20, equations 3.10–3.13), and the unnormalized sum/product on PDF page 41 (printed page 33, equations 4.7–4.9). The normalized projector is explicitly a derivation, not a quotation of that display. Dennis et al., arXiv:quant-ph/0110143v1, PDF pages 4–6, supports the surface-code overlap and paired-cycle example, especially Figure 3 on page 6. These are original manuscript locators, not claims of inspecting the final journal versions.

## Three ideal square-GKP metadata reviews

The existing GKP stabilizer, logical-Pauli and logical-zero comb equations are unchanged. Gottesman, Kitaev and Preskill, arXiv:quant-ph/0008040v3, printed/PDF pages 4–6, Eqs. (21)–(27) and (30)–(31), supports their specialization to [q,p]=i, n=2 and alpha=sqrt(pi). Exact generalized codewords are distinguished from normalizable finite-energy approximations, logical Pauli action from full-oscillator involutions, and strict central displacement bounds from ambiguous endpoint representatives. No fourth card or new source is added.

## Five continuous-variable metadata reviews

The covariance, matrix uncertainty, real symplectic transformation, Gaussian Wigner density and rotated-quadrature cards retain all their equations and descriptions. Weedbrook et al., arXiv:1110.3234v1, pages 4–7, 9 and 12, is explicitly an inspected review, not a primary discovery source. The retained Wigner/Glauber links are historical context and their uninspected full texts are not claimed verified.

The cards distinguish finite-moment general states from Gaussian-state completeness, Hermitian positive-semidefinite uncertainty from entrywise inequalities, canonical transformations from noisy channels, and normalized positive Gaussian densities from quantum physicality. The real 2n-dimensional phase-space measure and its Jacobian are stated. The rotated quadrature explicitly rescales the review's hbar=2 variables by 1/sqrt(2), yielding [q,p]=i and vacuum variance 1/2. The displayed rotation matrix and direct algebra support the existing phase sign; inconsistent adjacent prose in the inspected manuscript is not used. No equation change is needed for these five cards.

## One direct weak-value citation repair

The existing weak-value equation is unchanged, but its direct citation is corrected from ABL (1964) to the already cataloged AAV (1988), source `wave5-weak-1988`. AAV Eq. (6), printed p. 1352 / PDF p. 2, explicitly defines the amplitude ratio. Footnote 4 on printed p. 1354 permits complex values. ABL Sec. II, Eqs. (2.4)–(2.5), printed B1412 / PDF p. 3, instead specifies conditional projective probabilities. Both catalog records, all theory-source links and all unrelated cards remain unchanged. This is an explicit citation repair, not a source-preserving metadata-only change, and adds no source record.

The declared scope is normalized pure pre/postselection, nonzero overlap and a finite-dimensional Hermitian observable. The exact algebraic definition is distinguished from a controlled postselection-normalized weak-response expansion. Complex and anomalous values do not change strong-measurement eigenvalues. The apparatus-specific condition in AAV Eq. (12) is not claimed universal. No metrological advantage is asserted.

An independently reproduced Pauli example has weak value 2, but the corresponding ABL conditional strong-measurement mean is 4/5. Other bounded examples distinguish a complex value, an undefined zero-overlap quotient and nonuniform near-orthogonal limits. A separate bounded three-level system with zero first weak value but large second weak moment shows why a condition involving only the first weak value cannot universally control a meter expansion. These are algebraic/numerical deductions, not newly observed experimental evidence.

The weak-value citation repair was independently reviewed in the fifteen-card candidate. Its scientific record remains unchanged here; earlier source-audit records retain their own reviewed scope and counts.

## Two scalar Bohmian scope reviews

The guidance and quantum-potential equations retain their exact original descriptions, equations and source IDs. Bohm (1952), Sec. 4, printed pp. 169–171 / PDF pp. 4–6, supplies the scalar one-particle model, polar form, phase-gradient velocity, quantum potential and separate statistical assumptions. The guidance quotient is derived locally from the source’s phase-gradient velocity and polar form, rather than mislabeled as a verbatim numbered equation. The potential uses Q where the source’s Eq. (8) uses U.

The guidance form excludes electromagnetic vector potential and spinor currents. The potential card states the narrower inspected model without claiming the amplitude-curvature term can never occur in broader models. Both local quotients exclude nodes. The Born equilibrium distribution is a separate initial statistical assumption, not uniquely selected by the guidance law alone. Quantum-potential energy and particle-position notation are distinguished.

Nineteen exact symbolic checks include current/velocity and polar-Schrodinger identities, a normalized harmonic-oscillator ground state, amplitude-scaling invariance, and a normalized periodic standing wave. On open nodal cells the latter has a finite constant quantum potential, yet the original quotient is undefined at its nodes. The historical two-slit node discussion on printed p. 174 / PDF p. 9 is therefore not generalized into a universal divergence claim. These are mathematical fixtures, not experimental evidence.

The earlier fifteen-card candidate remains frozen in its original delivery. Its five scientific audit JSON records are byte-preserved in this seventeen-card alternative; no separate patch stack should be applied blindly.

## Scope and integration

The six record sets are disjoint. Their independently prepared file patches are not interchangeable or directly stackable: they overlap in generated summaries, historical baseline wrappers, and asset hashes. This combined candidate regenerates those shared files against the exact accepted PR98 baseline and provides a union allowlist test that checks every runtime collection. No new formula, theory, evidence record, gap claim, UI feature, analytics change, or community feature is introduced.

Candidate totals are 265 explicitly reviewed formulas and 192 baseline formulas, still 457 formulas, 483 theories, and 114 documented gaps, with 601 bibliography records. Counts measure structural metadata coverage, not completeness of quantum physics or verification of every claim.

The four original source audit JSON files retain the precise independently reviewed card bytes and their standalone PR98 scope. Any candidate-only totals inside those records describe the individual batch, not this combined runtime. The combined integrity ledger contains 14 exact before/after file records and 13 protected-file hashes. Historical tests reconstruct the accepted bytes and cannot silently accept undeclared mutations. The new tests inspect the complete current runtime separately.

## Publication order and unresolved gates

The original pending GitHub blob operation must be resolved before any publication retry or substitute. This candidate does not replace or bypass it. If the original stabilizer branch is successfully published, compare its actual committed content with this reconstruction and rebuild only the remaining twelve-card correction/review scope against that accepted main. If a verified failure or cancellation permits a fresh operation, select either this combined candidate or the original-order separate candidates; never publish both blindly. Any baseline change requires new guards, counts, asset hashes, tests, independent integration review, hosted browser checks, CI, merge, deployment, and served-file parity.

Standalone scientific source review does not by itself establish combined integration acceptance. Browser discovery is not a browser pass; local browser execution is currently blocked before rendering by the environment. No remote CI, merge, deployment, or live acceptance is claimed here.
