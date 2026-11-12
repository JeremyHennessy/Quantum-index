# COI-4 — Euclid DR1-Foundation actual-release receipt (12 November 2026)

**Research only, not an app release or scientific Evidence promotion.** This is a new date-stamped follow-up to the immutable [COI-2 pre-release record](COI2_EUCLID_DR1_PREFLIGHT_2026-11-06.md), based on main 53af2bfc6cc4d744e9f3f89cf2f1ede7ff36eb90. Do not rewrite the 6 November forecast, pre-existing Observatory registry IDs, historic baseline checks or approved UI.

## Achieved release, not merely a calendar milestone

On **12 November 2026**, [ESA officially announced DR1-Foundation had been released](https://www.esa.int/articles/about-us/directorates/science/euclid/euclid-lays-the-foundation-for-its-best-ever-3d-map-of-the-universe). Independently, NASA/IPAC [IRSA's DR1 archive overview](https://irsa.ipac.caltech.edu/data/Euclid/docs/overview_dr1.html) reports the same actual release date and calls it the first major **public** Euclid data release. This is stronger than the scheduled release date used in COI-2.

The release covers approximately **1,900 square degrees** of Wide Survey sky plus Deep Fields, with raw VIS/NISP observations, calibrated/stacked visible and near-infrared images, mosaics, catalogues and spectroscopy. [NASA/IPAC's Foundation product definition](https://euclid.caltech.edu/page/euclid-dr1-foundation) distinguishes LE1 from LE2 product families and specifies excluded products. ESA quotes approximately **1.7 million GB**; IPAC describes approximately **1.8 PB** for DR1. These are approximate source-specific figures, **not** a reconciled exact byte count.

ESA reports **over 900 million galaxies**, approximately **15,000 strong-lensing candidates**, **over 60 million quasar candidates**, and spectra for **over 160 million sources**. These are release announcement/inventory summaries, not independently confirmed classification of every candidate, calibrated redshift for every spectrum or tested cosmological-model constraints.

## Archive access: confirmed versus untested

The [IRSA DR1 overview](https://irsa.ipac.caltech.edu/data/Euclid/docs/overview_dr1.html) documents public archive access mechanisms including the Euclid Data Explorer, IRSA catalogue search, SIA/ObsTAP/TAP, Astroquery and the Fornax Science Platform. It lists product-level DOIs; for example, the [DR1 Level 2 SIR 1-D Spectra DOI record](https://www.ipac.caltech.edu/doi/10.26131/IRSA680) resolves as **10.26131/IRSA680**.

**Important limit:** an official public release and DOI listing do not prove that every individual file is already retrievable. IRSA explicitly states that DR1 catalogues will be added to its services **incrementally over the coming weeks**. No individual-file download, actual data query, complete catalogue inventory or license/entitlement test was independently performed here. ESA's [Euclid Data Space](https://euclid.dataspace.esa.int/) requires an interactive JavaScript application; fetching its shell is not proof of logged-in or unauthenticated query access.

## DR1 Complete is still future

NASA/IPAC's [DR1 Complete product page](https://euclid.caltech.edu/page/euclid-dr1-complete) still anticipates **mid-2027** for higher-level weak-lensing, galaxy-clustering and cluster analysis products. Foundation being public **does not mean** those results or cosmological likelihoods are public. A new Physics/Observatory Evidence assertion would require its own published study, exact data products/version, calibrations, uncertainties/covariance, model/priors and claim-specific qualification.

The accompanying [research JSON](../research/COI4_EUCLID_DR1_FOUNDATION_DELIVERY_2026-11-12.json) and Node negative tests record this distinction against the pre-existing Euclid programme/release IDs. All files here are **new**. Preserve existing research history, theory/formula/Evidence records, approved six Explorer UI files, routes, notes, maps and analytics. Keep the PR **draft** pending exact-head CI and independently viewed browser screenshots, and verify main, Pages and served assets separately after any reviewed future merge.
