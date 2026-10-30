# COI-0 — Cosmology Observatory Intelligence: source census and ingestion contract

Date: 2026-10-30
Pinned intake main: 43dfd3d6467bfa6f9f38c2aa568307fa1da4de37
Status: RESEARCH ONLY / NOT SHIPPED / NOT SCIENTIFICALLY CERTIFIED
Machine-readable inventory: research/COI0_OBSERVATORY_AND_RELEASE_CENSUS_2026-10-30.json

## Purpose

Create a source-linked intake of actual astronomical facilities, instruments, surveys, data releases, publications and planned milestones **without conflating them with theories or source-reviewed experimental Evidence**.

This is the first bounded cohort, **not all observatories worldwide**. The 30 named candidate programmes cover CMB/inflation, dark energy/large-scale structure, astrophysics, gamma-ray/dark matter, neutrinos/gravitational waves and future missions. Official archive listings are enough to establish programme identity but not to certify every measurement, likelihood, interpretation or operational status.

## Current deliverable

- 27 authority/source records with exact URLs, organization names, review scopes and date checked.
- 30 programme/mission/survey/instrument/observatory candidate identities, with type and domain and existing Problem linkage explicitly editorial (never empirical evidence).
- 18 release/analysis product identifiers with explicit version and public observations / public analysis only / rights restricted / publication only / planned / archive API status.
- Six publication-title and external identifier candidates linked to programmes and releases, with no promoted science claims.
- Six dated/undated milestone records: four planned future events (confirmedActual false) and two independently sourced Roman milestones already achieved/observed in 2026 (confirmedActual true). Planned and actual statuses remain separate.
- A self-contained fail-closed Node test checking unique identities, existing Problem IDs, references, release-version semantics, access status, impossible dates and negative mutations.
- No production theory, formula, graph relation, Evidence, DevelopmentEvent, Passport, app, CSS, workspace, CI, dependency, Pages or historical ledger change.

## Critical source distinctions verified October 30, 2026

- **DESI:** Public DR1 spectra (released March 19, 2025) are different from DR2 cosmological supporting chains/likelihood products. The DESI DR2 underlying spectra and redshifts are NOT publicly released at this review. Never call DR2 a publicly released full spectroscopic catalogue. Official links: https://data.desi.lbl.gov/doc/releases/ and https://data.desi.lbl.gov/doc/papers/.
- **Rubin:** Early DP2 (July 27, 2026) exists but is restricted to Rubin data rights holders through Rubin Science Platform. Complete DP2 has an October–December 2026 expectation, not verified delivered. Sources: https://dp2.lsst.io/v/SP-3082/index.html and https://dp2.lsst.io/access/index.html.
- **Euclid:** Q2 public data June 24, 2026; DR1 Foundation planned November 12, 2026; later roadmap dates prospective. Source: https://euclid.caltech.edu/page/data-release-timeline.
- **SDSS:** DR20 publicly available July 30, 2026 with a specific release paper. Source: https://www.sdss.org/science/publications/data-release-publications/.
- **SPHEREx:** IRSA identifies QR3 products September 2026 and an April 2026 correction to QR2 headers. Version/correction state matters. Source: https://irsa.ipac.caltech.edu/Missions/spherex.html.
- **SPT:** D1 maps and lensing results are indexed at its official page. Associated data links do not imply every product is public at every referenced subsite. Check each product's release state. Source: https://pole.uchicago.edu/public/Data%20Releases.html.
- **IceCube:** IceTracks-DR2 spans 2008–2022, 14 years, with revised calibrations. Avoid an invented exact release day. Source: https://icecube.wisc.edu/science/data-releases/.
- **Roman:** NASA confirms the August 30, 2026 launch and a separate October 22, 2026 report of entering final science commissioning. These are achieved mission milestones, not publicly released Roman survey datasets. Sources: https://www.nasa.gov/news-release/nasas-dark-universe-seeking-nancy-grace-roman-space-telescope-launches/ and https://science.nasa.gov/blogs/roman/2026/10/22/nasas-roman-space-telescope-enters-final-commissioning-phase/.
- **GWOSC:** API v2 supports public read-only events and strain with pagination/throttling. Multi-detector events must not be assigned solely to LIGO, Virgo or KAGRA without event-level membership. Source: https://gwosc.org/api/.
- **Roman, LISA, SKA:** Roman's August 30, 2026 launch and October 22 science-commissioning status are observed official milestones, but future public survey releases remain planned. LISA and SKA science milestones are prospective. Sources: https://archive.stsci.edu/missions-and-data/roman , https://www.esa.int/Science_Exploration/Space_Science/LISA and https://www.skao.int/en/science-users/647/timeline-science.

## Proposed scientific record architecture

Six distinct object types:
1. **Programme/Facility**: canonical identity, aliases, facility-versus-survey distinction, official parent and status provenance.
2. **Instrument**: parent mission/observatory, observing modality and calibration versions.
3. **Dataset Release**: authoritative version, observational products, access/rights, licence, corrections and supersession.
4. **Study**: DOI/arXiv/version/published source, linked to releases without inheriting their public-data status.
5. **Measurement/Constraint**: sourced quantitative value, uncertainty, likelihood/data combinations, priors, units and explicit what it does NOT establish.
6. **Milestone**: planned, delayed, cancelled or completed with separate planned/actual dates, date precision and history.

COI-0 implements 1, 3, 4 and 6 only as CANDIDATE METADATA. It does NOT implement quantitative Measurement/Constraint or new scientific Evidence or UI navigation. Research links are not automatically sourced formal/historical graph edges.

## Candidate ingestion and quality gate

Official archive discovery plus ADS/arXiv/Crossref/IVOA TAP/GWOSC → stable-ID/alias deduplication → authoritative version and date review → rights and licensing → exact paper/math and statistical provenance review → only then propose scientific Evidence.

Keep observations remote: never mirror giant proprietary archives or copyrighted paper bodies into the repo. Retain stable URLs, identifiers and limited factual metadata. Preserve precision: month-only releases remain month-only, planned events do not acquire a fake day.

No automatic Evidence promotions. Non-detection is not universal exclusion, paper metadata is not experimental corroboration, and observational agreement is not mathematical proof.

## Acceptance / next steps

- [ ] Exact diff contains ONLY the new JSON, this document and dedicated Node test.
- [ ] New tests pass including negative duplicate/source/problem/release-status/date cases.
- [ ] Existing npm test, npm run validate, Chromium and WebKit tests retain full release gates.
- [ ] Programmes with group-only provenance or not-assessed state remain explicitly unresolved.
- [ ] Restricted/not-released products are never misrepresented as public.
- [ ] Follow-up COI-1 independently source-reviews specific measurements and constraints, reusing existing Evidence IDs.
- [ ] Only after that, prepare separate UI integration linked to existing Problems/Evidence and approved visual baseline.

The deliverable is a versioned research inventory, NOT an already live astronomical data portal.
