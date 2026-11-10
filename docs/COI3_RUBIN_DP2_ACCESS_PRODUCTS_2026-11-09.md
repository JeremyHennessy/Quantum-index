# COI-3 — Rubin Early DP2 versus Full DP2 product/access preflight

**Reviewed:** 2026-11-09. **Pinned main:** `7ba1c0647e7734192f3a8fbd420baddccdb89ba8`.
**Decision:** research-only, not a deployment, scientific Evidence promotion, dataset ingestion, or amendment of the accepted COI-0 census.

## What the official programme now says

The [Rubin DP2 documentation](https://dp2.lsst.io/) states that **Early Data Preview 2** was released **July 27, 2026**. Its currently displayed date for **Full DP2** is **expected December 2026**, **not an actual delivery date**. The corresponding COI-0 baseline uses the broader Q4 2026 planning window. This document narrows the *forecast*, without editing the immutable earlier registry or asserting delivery.

The [product catalogue](https://dp2.lsst.io/products/index.html) distinguishes **catalogue measurements** from the underlying **image pixels**. EDP2 contains the deep-coadd image product and the catalogs (including source measurements made on processed visit and difference images), as well as listed map and supplementary products. This **does not mean** the raw, visit, difference or template **pixel images** are in EDP2. Those additional image families are described as part of the later Full DP2 stage. A catalog with visit/DIA measurements is not interchangeable with the visit/difference FITS image.

The [official access documentation](https://dp2.lsst.io/access/index.html) restricts DP2 access through the Rubin Science Platform to **data-rights holders**. Public availability of these documentation pages is **not public authorization to retrieve the scientific data**. The DP2 overview reports Rubin Science Pipelines v30 processing of LSSTCam observations from April 2025–January 2026; its approximate 3,000 sq-deg deep-coadd/catalog and 15,000 sq-deg single-epoch coverage figures describe the stated processing scope, **not EDP2 pixel-image entitlement or cosmological constraints**.

All three source pages reported modification on **November 4, 2026**, and were independently opened for this **November 9** research snapshot. This is verification of published official *documentation and declared release stage*, not an independent authenticated RSP data query or file-level entitlement audit.

## Identity reconciliation and scientific claim policy

Existing COI-0 programme ID: `rubin`; existing releases: `rubin-edp2` (July 27, 2026; rights restricted), `rubin-full-dp2` (planned Q4); existing milestone: `rubin-dp2-full-2026` (planned Q4). These IDs remain unchanged and no new competing registry records are created. Structured review: [COI-3 scope JSON](../research/COI3_RUBIN_DP2_RELEASE_ACCESS_2026-11-09.json).

**No new theory, formula, Evidence claim, observational cosmology result, sky-map conclusion, new paper priority, instrument calibration verdict or public science download is asserted.** DP2 documentation and product lists are institutional release/access evidence, not published original experimental validation of dark energy, dark matter, lensing or other astrophysical models.

## Next acceptance gates

1. On or after the expected **December 2026** window, seek a **dated official completed-release notice** and exact versioned image-product list. Do not turn the month forecast into `confirmedActual` simply because the calendar advances.
2. Separately validate release identity, rights, RSP availability and at least one relevant product family before adding a new *dated* delivery receipt. Do not bypass data-rights restrictions.
3. For any numerical astrophysical claim, require a specific published study, estimator, uncertainty/covariance, calibration, assumptions and dataset/version, followed by its own scientific review. Catalogue metadata is not Evidence of a cosmological theory.
4. Preserve COI-0 historical tests, approved Physics/Observatory Explorer assets, original routes and Issue #128. This research-only addition should not be advertised as user-facing release; gate exact-head Node, validation, full Chromium/WebKit, screenshots, and (if later approved for merge) main/Pages/served assets separately.

**Rollback:** revert this additive three-file research-only slice. No existing files or historic guards need to change.
