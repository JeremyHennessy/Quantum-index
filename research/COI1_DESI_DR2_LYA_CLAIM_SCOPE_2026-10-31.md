# COI-1 — DESI DR2 Lyman-alpha full-shape claim-scope review

**Reviewed:** 2026-10-31
**Status:** RESEARCH_ONLY_HOLD_EVIDENCE_PROMOTION
**Intended links:** existing DESI programme desi, release desi-dr2-analysis, and paper coi-study-desi-dr2-lya-2026 in research/COI0_OBSERVATORY_AND_RELEASE_CENSUS_2026-10-30.json.

**Change surface:** this research-only note and one self-contained Node test. **No theory, formula, bibliography, Evidence, relationship, scientific timeline, UI, source registry or published application record is added or modified.** This is a source review, **not independently reproduced** observational data or likelihood results.

## Exact source and release identities

1. **DESI Collaboration (2026)**, *DESI DR2 Results IV: Alcock-Paczyński Measurements from the Lyman Alpha Forest and Cosmological Constraints*, arXiv:2607.27410v3 (revised **2026-08-04**): https://arxiv.org/abs/2607.27410v3. Sections IV–VI; Section V.3, Eqs. (24)–(25); Section V.2, Eqs. (20)–(23); Section VI.4.1 and Table 4. Original collaboration preprint, source inspected as HTML; not an independent numerical replication or a claim of completed journal peer review.
2. **Herbold et al. (2026)**, *Validation of the DESI DR2 Ly-alpha forest full-shape analysis*, arXiv:2607.27411v2 (revised **2026-08-04**): https://arxiv.org/abs/2607.27411v2. Abstract, Sections IV.2 and VI. Companion validation using mock simulations and pre-unblinding criteria.
3. **Official DESI DR2 paper index:** https://data.desi.lbl.gov/doc/papers/dr2/ ; **official DESI data/paper notes:** https://data.desi.lbl.gov/doc/papers/ . The **2026-07-30** results use DR2-era observations but do **not** constitute public DR2 raw spectra/redshifts. DR2 BAO cosmology chains and posterior-maximization products were released separately in 2025; do not assume those products include a reusable, version-qualified 2026 Ly-alpha full-shape likelihood. Public DR1 observations are a distinct release.

## Claim-specific eligibility — paper-reported only

| Claim | Precise source scope and limitations | Gate |
| --- | --- | --- |
| Broadband AP geometric ratio **D_M / D_H = 4.578 ± 0.052** at **z_eff = 2.33** | DESI Results IV, Section V.3, **Eq. (24)**. Ly-alpha auto- and quasar cross-correlations; smooth/broadband AP term, **not** the combined AP result or a direct measurement of a dark-energy equation of state. | PAPER_REPORTED_SCOPE_ONLY |
| Combined full-shape AP **D_M / D_H = 4.572 ± 0.046** | Results IV, Section V.3, **Eq. (25)**. Smooth plus BAO AP components, about 1.0% precision at z_eff = 2.33. Do not substitute the larger Eq. (24) error bar. | PAPER_REPORTED_SCOPE_ONLY |
| Joint AP+BAO ruler ratios **D_H / r_d = 8.600 ± 0.066**, **D_M / r_d = 39.32 ± 0.33** | Results IV abstract and Section V.3. Here r_d is the sound horizon at the drag epoch; dimensionless normalizations, not absolute distances in Mpc and not a standalone H0 estimate. | PAPER_REPORTED_SCOPE_ONLY |
| Evolving dark-energy model comparison: **2.7 sigma** for DESI+CMB and **3.2 sigma** with DESI+CMB+**DES-Dovekie** supernova sample | Results IV, Section VI.4.1 and **Table 4**; conditional best-fit comparison of parameterized w0waCDM versus flat LambdaCDM, including specific external data and likelihood choices. This is **not discovery**, proof of evolving dark energy or model-independent significance. | CONDITIONAL_MODEL_COMPARISON_ONLY |
| BAO systematic budget | Results IV, Section V.2, **Eqs. (20)–(23)**; covariance-level systematics **Delta(alpha_p) = 0.15%** and **Delta(phi_p) = 0.8%**, not a direct shift correction to the reported BAO measurement. Different mocks and EFT-informed predictions do not precisely agree about the BAO shift. | REQUIRES_METHOD_AND_COVARIANCE |

### Explicit excluded inference: no fσ8 growth-rate measurement from this paper

**Do not publish fσ8 as a validated DESI DR2 Results IV observational result.** The companion validation paper's Section IV.2 finds roughly **10% bias** in mock-data fσ8 recovery at high significance, and its Section VI explicitly excludes the growth-rate estimate from the primary results. Validation of BAO/AP is not a blanket endorsement of every initially modeled parameter. Gate: **EXCLUDED_BY_VALIDATION_DO_NOT_PROMOTE**.

## Claim promotion barrier

The COI-0 paper citation does not automatically qualify every scientific number as a Quantum Index Evidence record. Any later *separately reviewed* candidate requires: exact versioned paper and Eq./Table locator, public-data/likelihood access status, what was measured rather than inferred, units and z_eff, covariance/systematic treatment, model and astrophysical assumptions, external CMB/SN versions, companion mock validation, explicit excluded parameters and nonclaims, and erratum checks. Independent likelihood reanalysis and public release of underlying DR2 observational spectra were **not performed**. Do not bypass data-rights policies or present simulations as independent observations.

**Decision:** RESEARCH_ONLY_HOLD_EVIDENCE_PROMOTION. Leave the COI-0 discovery registry and approved Observatory/Physics Explorers unchanged.