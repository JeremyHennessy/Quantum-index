# QED / GKSL source qualification — 14 October 2026

Baseline: `d2a9f204cdd664b2751669aea0d229fc3188b79e` (PR #77); no open PRs at intake. This review adds **QED and GKSL**, preserving all 25 previous Passport bytes and all theory/edge/Evidence identities. It reuses the unpublished `science/four-passports-20261013` candidate `e30f090` selectively: one notation source and three existing formula records receive qualified changes. The older candidate is not merged wholesale. The JSON ledger records exact baseline fingerprints and inspected source-copy hashes. Original papers are not redistributed.

## GKSL: accepted with bounded scope

The Passport contains the theorem assumptions and limitations. Reviewed original pages: [GKS](https://web2.ph.utexas.edu/~gsudama/pub/1976_002.pdf), pp. 821–822, Theorem 2.2 / Eq. (2.3); [Lindblad](https://doi.org/10.1007/BF01608499), pp. 120–121, 125, 127 and 129, especially Theorem 2 / Eqs. (4.2)–(4.3). The latter publisher endpoint exposed only an abstract; the original journal scan was obtained from the public [Studyres viewer](https://studyres.com/doc/413329/physics-on-the-generators-of-quantum-dynamical-semigroups). Page 127 was visually checked, not accepted from its imperfect OCR. GKS pp. 821–822 were visually checked against the university scan.

### Reviewer's algebraic mapping to existing `lindblad`

Expanding the two commutators in the original Schrödinger expression gives

`([V rho,V†]+[V,rho V†])/2 = V rho V† - (V†V rho + rho V†V)/2`.

With `V=sqrt(gamma)L` and `H_paper=H_catalog/hbar`, this is the existing card. Rates must be nonnegative and time-independent for this displayed semigroup interpretation. This mapping is an explicit derivation, not a quotation or a claim that the original uses the catalog's symbols. Diagonalizing the positive GKS coefficient matrix supplies such rates in finite dimension. Jump representations need not be unique.

Comparison synthesis uses existing `open-quantum-systems` and `nonmarkovian-open-systems` IDs: composition-law tests and preparation/time-window sensitivity are meaningful model discriminators. No graph edge or experimental Evidence is promoted. The theorem does not prove a particular environment is memoryless. The algebra checks in this release validate our translation, not the published theorem.

## QED: primary review plus independently verified modern conventions

Reviewed [Feynman, Phys. Rev. 76, 769 (1949)](https://doi.org/10.1103/PhysRev.76.769), Introduction and Secs. 2–4, including Eqs. (4), (6), (11), using the [full-text reprint](https://suppiya.wordpress.com/wp-content/uploads/2007/08/physrev_076_0769.pdf). Eq. (4) describes one-photon exchange; the development is perturbative. Its regulator discussion explicitly leaves consistency difficulties. These historical qualifications are not assertions that modern renormalized QED inherits every proposed regulator defect.

Reviewed [Dyson, Phys. Rev. 75, 486–502 (1949)](https://journals.aps.org/pr/pdf/10.1103/PhysRev.75.486), p. 486 abstract/Introduction and Secs. II–III. It relates the formulations in their common applicability domain; it does not prove convergence of the full expansion. Neither historical paper alone establishes a modern all-regime, nonperturbative completion or precision-experiment census.

At the intake baseline, the repository's `qed-lagrangian` explicitly printed hbar and c but left the Maxwell normalization and covariant derivative units unspecified. `fermion-propagator` already used natural units. Different unit conventions are not intrinsically inconsistent, but their conversion must be specified before the cards jointly ground a Passport. Do not label the existing expression false solely from its typography.

The reused modern convention is [Tong's author-hosted notes](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html), Sec. 6.3.1, HTML Eqs. (6.558)–(6.560): `L=-F²/4+psi-bar(i slash-D-m)psi`, `D=partial+ieA`, with `A→A+partial lambda`, `psi→exp(-ie lambda)psi`. This is explicitly a pedagogical source, separate from the independently reviewed primary papers; it is registered for modern equation provenance, never relabeled as a 1949 primary paper.

Reviewer's consistency check: `i gamma D = i gamma partial - e gamma A`; the gauge-phase derivative cancels the added connection. An SI or Gaussian restoration needs its own explicit field normalization. The baseline free propagator additionally needed a verified metric, Fourier convention, slash definition and pole prescription mapping; it is not the full interacting propagator.

The prior candidate already supplied the missing convention correction. Independent inspection confirms the free propagator at Tong Sec. 5.5 Eq. (5.35), printed p. 115 (PDF page 10), using `exp(-ip·(x-y))`, `d⁴p/(2pi)⁴`, numerator `i(slash p+m)` and denominator `p²-m²+i epsilon`. Metric (+---) is explicit in Sec. 1.1.1 Eq. (1.10). The formula metadata now spells these out. Visual browser inspection found that the existing `\slashed` macro rendered as an unknown command; the card now prints the equivalent explicit `gamma^mu p_mu` numerator. This changes the TeX representation, not the mathematical propagator. QED is accepted for this bounded formal scope; precision-experiment and all-regime claims are not promoted.

## Reconciliation with unpublished work

The earlier four-Passport candidate passed only the non-browser preparation gate (run 38341887618). This review does not inherit its scientific approval. It corrects Lindblad's theorem locator from p. 128 to **p. 127**, replaces the nonexistent `davies-generator` comparison with verified catalog IDs, and uses the directly inspected GKS theorem rather than an abstract-only pointer.

The candidate's Yang–Mills metadata pairs `D=partial+igA` and `[T^a,T^b]=if^{abc}T^c` with a **plus** nonlinear component term. Reviewer's commutator expansion yields `[D_mu,D_nu]/(ig)=partial_mu A_nu-partial_nu A_mu+ig[A_mu,A_nu]`, whose component nonlinear term has the opposite sign. Its convention mapping therefore remains held; no existing Yang–Mills bytes are changed here. QEC is outside this requested independent pass and remains held. The original unpublished branch is preserved, and its overlap must be reconciled before any future merge.

## Disposition

27 Passports, 550 sources, and 153 explicitly reviewed / 252 baseline formula metadata records after this change. 481 theories, 405 formulas, 610 relations and 16 Evidence records unchanged. Remaining Passport holds: **Yang–Mills and quantum error correction**. The October 8 queue and October 11 decision ledger remain historical and immutable. Validation/publication status belongs in `docs/CONTINUATION.md`; source qualification alone is not deployment verification.
