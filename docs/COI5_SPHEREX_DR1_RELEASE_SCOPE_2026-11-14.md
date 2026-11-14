# COI-5 — SPHEREx DR1 actual release, product lineage and claim scope

**Research-only review: 14 November 2026.** Baseline `main` is `68b9011d2a9045682b853145a887ef1aebac2b74`. This adds source-qualified research and tests only; it is **not** a change to the live Observatory Explorer, accepted theory/evidence records, or the historical 30 October census.

## Verified release (not a scientific discovery)

NASA/IPAC IRSA's [12 November 2026 archive news](https://irsa.ipac.caltech.edu/news.html) confirms SPHEREx **DR1 was released**. Its [DR1 overview](https://irsa.ipac.caltech.edu/data/SPHEREx/docs/overview_dr1.html) identifies two distinct public products:

- **Reprocessed DR1 spectral images** from Surveys 1 and 2, DOI [10.26131/IRSA678](https://www.ipac.caltech.edu/doi/10.26131/IRSA678).
- **Spectral all-sky cube**, with 102 *nominal* channels across 0.75–5.0 μm, DOI [10.26131/IRSA679](https://www.ipac.caltech.edu/doi/10.26131/IRSA679).

DR1 spectral-image calibrations are intended to be combined with **QR3**, which includes Surveys 3 and 4. IRSA's [release history](https://irsa.ipac.caltech.edu/spherex-archive-documentation/spherex-data-releases/) says DR1+QR3 supersede QR2: QR2 is no longer searchable, although direct download remains through **February 2027**. Mixing QR2 with DR1/QR3 requires calibration caution. The older QR3 record exists as `spherex-qr3` in COI-0; do not rewrite it.

## Access verification and distinctions

IRSA documents public access through on-premises directories, cloud products, graphical search, Astroquery/PyVO and [SIA2 collections](https://irsa.ipac.caltech.edu/spherex-archive-documentation/spherex-data-access/): `spherex_dr1`, `spherex_dr1_deep`, `spherex_dr1_cube`, `spherex_qr3`, `spherex_qr3_deep`. The overview and both DOI metadata pages were retrieved. **No FITS file or SIA2 query result was independently retrieved**; an archive access description is not a successful-query receipt. Weekly ingestion may reach SIA2 about a day after other access layers.

IRSA's roadmap estimates **high-reliability source catalogue V1 for August 2027**, and **DR2 plus catalogue V2 for December 2027**. These are planned, not delivered. Released images and cube are not themselves evidence of measured inflation parameters, a dark-energy constraint or a released DR1 high-reliability source catalogue. Promoting a scientific Evidence record requires a published analysis, product/calibration versions, selection/error model, covariance, model/priors and precise claim limits.

## Review and safety

The bounded machine-readable record is `research/COI5_SPHEREX_DR1_RELEASE_SCOPE_2026-11-14.json`, with `scripts/coi5-spherex-dr1-release.test.mjs` pinning sources/DOIs, the existing programme/QR3 identities and negative tests against invented access or scientific conclusions. Run that smallest Node test, full `npm test`, `npm run validate`, historical BAO/NFW fail-closed checks, and exact-head Chromium/WebKit jobs; independently inspect screenshots before any merge. Keep this PR draft until independent review. No existing file, UI, original census, route, workflow, source ID or analytics ledger is modified. Rollback: revert these three additive files.
