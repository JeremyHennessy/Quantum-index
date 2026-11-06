# COI-2 — Euclid DR1 product split and release-verification preflight

**Reviewed:** 2026-11-06. **Baseline:** e20e4943da879ea879e3054aba8db75cfb0eeabe.
**Status:** RESEARCH ONLY; not a dataset ingest, scientific Evidence promotion, app release or approved UI change.

## Scientific and data-access distinction

Euclid **Quick Data Release 2 (Q2)** was publicly released on **2026-06-24**, but this does not imply that later DR1 products are public. The NASA/IPAC Euclid timeline schedules **DR1 Foundation** for **2026-11-12** and **DR1 Complete** for **mid-2027**. These are scheduled events, not independently verified deliveries as of this review.

The official DR1 Foundation product definition includes raw VIS/NISP (LE1), stacked VIS/near-infrared frames and catalogues, spectroscopy and other LE2 products, plus selected deep-field and calibration material. The described footprint is approximately **1,900 square degrees** (not an observed cosmological constraint). Foundation excludes the product subset identified in **§3.2.7** of Euclid Science Archive product list **EUCL-ESAC-RP-8-017**.

The later DR1 Complete stage is intended to add higher-level **weak-lensing and galaxy-clustering** science products. Thus, raw images, released spectra/catalogues and Foundation availability do **not independently establish** that public high-level cosmological likelihoods, weak-lensing constraints or a validated scientific discovery exist. There are processed products in Foundation; do not imply science is categorically impossible before Complete.

Official sources reviewed:

- NASA/IPAC Euclid [DR1 overview](https://euclid.caltech.edu/page/euclid-dr1).
- NASA/IPAC Euclid [DR1 Foundation product scope](https://euclid.caltech.edu/page/euclid-dr1-foundation).
- NASA/IPAC Euclid [DR1 Complete product scope](https://euclid.caltech.edu/page/euclid-dr1-complete).
- NASA/IPAC Euclid [release timeline](https://euclid.caltech.edu/page/data-release-timeline).

These are official programme/release descriptions, **not** experiment-specific Evidence, historical priority papers, or independent evaluation of each file's access rights. The detailed EUCL-ESAC-RP-8-017 product specification is referenced by the official Foundation page; this slice did not reproduce that specification. Dates are a time-scoped snapshot and may be revised.

## Reconciliation with existing Quantum Index records

The structured source review (research/COI2_EUCLID_DR1_PRODUCT_SPLIT_2026-11-06.json) cross-references existing COI-0 candidate identities: programme `euclid`, released `euclid-q2`, pending `euclid-dr1-foundation`, planned milestone `euclid-dr1-foundation-2026`. No existing IDs are duplicated or changed. This additive note does not touch the accepted Observatory or Physics Explorer, classic atlas, Theory/Formula/Evidence data, history/analytics ledgers, build assets or the existing candidate registry.

## Mandatory check on and after November 12

1. Seek **dated official confirmation** at ESA/Euclid Science Archive or NASA/IPAC IRSA for actual Foundation availability, specific version, product URLs and access conditions. A calendar date, cached press announcement or future-dated indexed article is *not* proof of a live release.
2. Check the actual data products and licence, calibration/corrections and product-level access. Maintain the Foundation/Complete distinction.
3. If delivery occurs, write a **new date-stamped actual-delivery record**; do not silently rewrite this historical 2026-11-06 preflight or convert forecast to observed based on the clock alone.
4. Any scientific Evidence claim needs a separate source-specific published analysis, measurement units/uncertainties/covariance, likelihood, priors/model scope, and what it does **not** establish.

## Verification boundary

The isolated Node test (scripts/coi2-euclid-dr1-preflight.test.mjs) checks existing identifiers, official source URLs, planned/public product distinctions and negative mutation cases. This proposal must stay draft until exact-head full Node/validation/Chromium/WebKit gates and browser artifact review succeed. If later merged, verify merged-main, Pages, and live-served assets separately. No visual changes are proposed.
