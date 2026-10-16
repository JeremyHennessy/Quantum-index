# Original first-formula source review: Milgrom MOND and Starobinsky R²

**Reviewed:** 16 October 2026. **Intake parent:** `3eaa0decdb13c29e7b8b2a0bf851d90b207bc91c`, the isolated PR #84 source-revision head (not accepted production at intake). This branch is **dependent**: do not merge or present its counts as live before PR #84 acceptance, main reconciliation, separate full browser+Node CI, and postmerge/hosting checks.

## MOND: original 1983 effective relation

M. Milgrom, [*A Modification of the Newtonian Dynamics as a Possible Alternative to the Hidden Mass Hypothesis*](https://doi.org/10.1086/161130), *Astrophys. J.* **270**, 365–370 (1983). The NASA ADS [original scanned journal](https://adsabs.harvard.edu/pdf/1983ApJ...270..365M#page=2) was visually checked at **printed p. 366 / PDF page 2**, equation **(1)**:
`m_g μ(|a|/a0) a⃗ = F⃗`, with directly printed `μ(x≫1)≈1` and `μ(x≪1)≈x`.

The original article explicitly says on p. 366 (section II) that Eq. (1) is a **limited effective working formula, not a full theory**, with important reference-frame, composite-system and gravitational-potential limitations. The indexed `mond-low-acceleration-effective-inertia` formula therefore does **not** assert arbitrary N-body dynamics, covariant gravity, or that MOND has superseded particle dark matter. There is no unique globally specified interpolation function: only its two asymptotic limits are represented. The original `milgrom-mond-1983` bibliography ID is reused and no publication date or primary-source status is modified.

## R² inflation: modern source-specific f(R) model

A. De Felice and S. Tsujikawa, [*f(R) Theories*](https://link.springer.com/article/10.12942/lrr-2010-3), *Living Reviews in Relativity* **13** (2010). Original journal HTML, **section 3.1 Inflationary dynamics, equation (3.6)**, specifies `f(R) = R + R²/(6M²)`, with `M` a positive mass parameter and the linear term allowing inflation to end. This is the **modern review normalization**, not a claimed verbatim transcript of Starobinsky's 1980 notation. The already registered `fr-review-2010` authoritative review source is reused, and historical theory provenance `wave4-starobinsky-1980` stays unchanged.

The candidate `starobinsky-r2-model-function` is a metric f(R) model-defining **functional**, not a standalone quantum-gravity proof, spectrum prediction, observational measurement, reheating calculation, or uniquely confirmed cosmology. `R` and `M²` have mass dimension 2 in natural units, and the `R²/(6M²)` coefficient has mass dimension −2. The previously curated generic f(R) action and quantum gravity formulas are preserved without adding duplicates.

## Preservation and proposed impact

Only `formulas.js` changes scientifically, via two appended, distinct formula records, after the parent full-file SHA-1 Git blob `05c1e6139e2ed101b8a04d88510866bab454e632`; source/theory entries, graph links, Passports, Evidence, originals and UI remain unchanged. Required new tests must verify exact approved prefix before historical metric projection, mathematically check the MOND limits and R² model dimensions, and verify MathJax/source links on Chromium and WebKit. Proposed cumulative inventory: formula records **413→415**, formula-linked theory entries **279→281**, gaps **156→154**, explicit formula metadata **164→166**, baseline **249**, bibliography **558**, source categories **30**, theoretical entities **481**, Passports **29**, relations **610**, Evidence **16**.

This is a research-and-test candidate; it is not a successful deployment receipt.
