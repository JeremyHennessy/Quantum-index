# Fano / steering source-depth release — 7 October 2026

Baseline: `197aa15c57d2a43d098f43a21f6ec0514f349bba`, tree `c0ea8a4cea143fc1c485d28ddf64437f29b2b3b3`. Jeremy asked to continue after the verified lattice release; this is not a redesign or a claim of new visual approval.

Four cards cover the real-q Fano profile, its Gaussian convolution, projective LHS assemblages, and a finite-setting Pauli steering witness. Two Passports use the existing detail and Compare renderers. All prior 481 theories, 398 formulas, 539 bibliography records, 13 Passports and 610 relationships are preserved. No renderer, styles, workspace, dependencies, hosting or production workflow change.

## Source and convention checks

Schippers, arXiv:1203.4281v3, Eq. (1) (PDF p. 1) gives the cross section; Eq. (22) (p. 6) gives the background-subtracted convolution. The second card restores the constant background, substitutes sigma_1=2a/(q² Gamma pi) and Delta_G=2sqrt(2ln2)s, and cancels q² before extending continuously at q=0. It uses the source’s x=(E_r-E)/(sqrt(2)s) orientation, so the imaginary term has a minus sign. It does not import the area-normalization singularities at q=0 or +/-1. This is a reparameterization, not new physics. Gamma is not generally the asymmetric peak FWHM; s is standard deviation. No spectral fitting service or plotting UI is added.

Wiseman, Jones and Doherty, arXiv:quant-ph/0612147v3, p. 2, Eq. (5) is the common-ensemble LHS condition. The card retains the source’s projective measurement restriction. An assemblage’s components have outcome probabilities as their traces; their sum is the same Bob state for all Alice settings. Ordinary conditional-state changes do not themselves establish steering.

Saunders et al., arXiv:0909.0805v2, p. 2 Eqs. (1)-(3) supply the finite-setting bound and Werner example. The norm equality uses eigenvalues +/-|b| of b dot sigma. Three mutually orthogonal axes give C_3=1/sqrt(3), not a universal 1/sqrt(n) rule. The experimental Methods explicitly do not close the detection loophole. Do not treat a finite witness failure as proof of no steering, or a positive witness as Bell violation or signalling.

The original Fano 1961 full article was not accessible in this pass. Its existing bibliography remains intact; new equation locators are attributed to the actually inspected Schippers primary paper. No newly accepted Evidence record or editorial-edge promotion is claimed. Pinned versions were identified from their rendered PDF pages and abstract version history.

## Verification and rollback

New numerical tests compare the full Fano convolution against independent Gaussian integration using frozen Faddeeva reference values, including q=0 and +/-1. Qubit tests construct conditional states, common LHS decompositions, Pauli witness optima and singlet correlations; a deliberately setting-correlated preparation and a sign error are negative controls. These finite tests are not universal proofs of steering or arbitrary line-shape validity.

The machine-readable ledger preserves historical fingerprints and file hashes. Full Node/data checks, all-equation browser conversion, desktop/mobile screenshots, and final hosted-byte/route verification are required for acceptance. Use the PR receipt for actual results; a prepared candidate is not a deployed release.

Coverage after this batch: 402 formulas, 165 representative gaps, 143 explicit / 259 baseline metadata, 541 sources and 15 Passports. Counts do not certify every claim.

Rollback: first-parent revert of this batch’s merge only. No storage migration or reversion of #62–#64 is needed.
