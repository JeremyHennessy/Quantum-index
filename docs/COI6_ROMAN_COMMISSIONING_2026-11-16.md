# COI-6 — Roman commissioning and science-data qualification (16 November 2026)

**Research-only; not a live Observatory or scientific Evidence release.** Source main: `a60397f017c5c0bfc2bf88be046320a00c9d28de`. The 30 October COI-0 census already records mission `roman`, launch on 30 August and transition into science commissioning on 22 October. This addition does **not** duplicate those identities or rewrite the historic census.

## Dated, distinguishable milestones

NASA's [launch receipt](https://science.nasa.gov/mission/roman-space-telescope/roman-launch/) confirms Roman actually launched **30 August 2026, 07:26 EDT**. NASA's [22 October report](https://science.nasa.gov/blogs/roman/2026/10/22/nasas-roman-space-telescope-enters-final-commissioning-phase/) establishes the shift to **science commissioning**, not routine science survey operations.

The subsequent [13 November NASA instrument report](https://science.nasa.gov/blogs/roman/2026/11/13/instruments-on-nasas-roman-space-telescope-get-in-sync-for-science/) documents a new, narrower milestone: calibration of the instrument/guide-star map using test observations, with 18 Wide Field Instrument detectors and optical alignment of the Coronagraph Instrument. Coronagraph deformable-mirror active starlight control was identified as a **next** test step, not an achieved science detection. Commissioning observations cannot by themselves validate a cosmology theory or stand in for released survey science products.

## Access policy is not proof of a release

[STScI's Roman Research Nexus announcement](https://www.stsci.edu/contents/news-releases/2026/news-2026-401) says Roman **science data are intended for immediate public availability, without a proprietary period**. This is a policy statement; it is **not evidence that a particular science FITS product has been publicly released**. No actual Roman public science product file, reproducible archive query or survey data bytes were independently retrieved in this review. Do not infer their availability from a simulation, metadata entry, test exposure or in-mission data flow.

NASA's [1 September commissioning update](https://science.nasa.gov/blogs/roman/2026/09/01/nasa-roman-space-telescopes-antenna-visor-deployed/) anticipated first public images **by early 2027**. Preserve that as a dated forecast, not a guaranteed date or a confirmed November 2026 product. Later official announcements must supersede it when independently checked.

## Admission and integrity

No new dark-energy constraint, dark-matter detection or peer-reviewed cosmological result was established by these engineering milestones. Evidence admission requires a released product and calibration version, claim-specific published analysis, selection effects, error model/covariance and model assumptions.

The machine-readable receipt is `research/COI6_ROMAN_COMMISSIONING_2026-11-16.json`; its smallest test is `node --test scripts/coi6-roman-commissioning.test.mjs`. The test binds existing `roman`, `roman-future` and source IDs to COI-0 and rejects accidental promotion of commissioning, planned products or engineering results to scientific Evidence. This PR adds only three files; no approved UI, runtime records, archive identities or historical tests change. Before any promotion, require full exact-head Node/validate/BAO-NFW/Chromium/WebKit and independently inspected screenshots. Issue #128 remains open.