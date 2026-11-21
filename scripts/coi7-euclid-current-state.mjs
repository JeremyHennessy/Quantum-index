// Research-only projection proposal. Not imported by either approved Explorer.
const ESA_ID = 'euclid-dr1f-esa-actual-2026-11-12';
const IRSA_ID = 'euclid-dr1f-irsa-actual-2026-11-12';
const invalid = reason => { throw new Error('COI-7 fail-closed: ' + reason); };
const requireTrue = (condition, message) => { if (!condition) invalid(message); };
const validDay = value => {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(value + 'T00:00:00Z');
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value;
};
const unique = rows => Array.isArray(rows) && rows.every(x => x && typeof x.id === 'string') &&
  new Set(rows.map(x => x.id)).size === rows.length;

/**
 * Model-only, deliberately not a public UI loader or a site data rewrite.
 * The archival October 30 registry and the November 12 achieved-release receipt
 * are independent, immutable inputs. Returns null for pre-release as-of dates.
 */
export function projectEuclidFoundation(registry, receipt, asOf) {
  requireTrue(validDay(asOf), 'invalid as-of day');
  requireTrue(registry?.schemaVersion === 'coi0-research-v1' &&
    registry.reviewedAt === '2026-10-30' &&
    registry.publicationStatus === 'RESEARCH_ONLY_NOT_RUNTIME', 'unexpected archived registry');
  requireTrue(unique(registry.programmes) && unique(registry.releases) &&
    unique(registry.milestones) && unique(registry.sources), 'archival IDs missing or duplicated');
  const oldRelease = registry.releases.find(x => x.id === 'euclid-dr1-foundation');
  const oldMilestone = registry.milestones.find(x => x.id === 'euclid-dr1-foundation-2026');
  requireTrue(registry.programmes.some(x => x.id === 'euclid') &&
    oldRelease?.programmeId === 'euclid' &&
    oldRelease.access === 'planned-no-observational-products' &&
    oldRelease.availableOn === '2026-11-12' &&
    oldRelease.datePrecision === 'day' &&
    oldRelease.claimReviewStatus === 'discovery-metadata-only' &&
    oldRelease.sourceIds?.includes('euclid-timeline') &&
    /not yet released as of 2026-10-30/.test(oldRelease.reviewNotes || '') &&
    oldMilestone?.programmeId === 'euclid' && oldMilestone.state === 'planned' &&
    oldMilestone.confirmedActual === false && oldMilestone.date === '2026-11-12',
    'baseline Euclid status differs from approved historical snapshot');
  requireTrue(receipt?.schemaVersion === 'coi4-euclid-foundation-delivery-v1' &&
    receipt.reviewedAt === '2026-11-12' &&
    receipt.publicationStatus === 'RESEARCH_ONLY_NOT_RUNTIME' &&
    receipt.existingIds?.foundationReleaseId === oldRelease.id &&
    receipt.existingIds?.foundationMilestoneId === oldMilestone.id &&
    receipt.existingIds?.programmeId === 'euclid', 'unexpected achieved-release receipt');
  const f = receipt.foundation, c = receipt.complete, a = receipt.scienceAdmission;
  requireTrue(validDay(f?.actualReleaseDate) && f.actualReleaseDate === '2026-11-12' &&
    f.status === 'released-confirmed-by-ESA-and-IRSA' &&
    f.publicReleaseDeclared === true &&
    f.archiveDocumentationRetrieved === true &&
    f.productDoiRecordRetrieved === true &&
    f.individualFileDownloadVerified === false &&
    f.fullCatalogServiceCompletenessVerified === false &&
    f.interactiveDataSpaceQueryVerified === false &&
    f.scientificEvidencePromoted === false &&
    f.claimStatus === 'OFFICIAL_DATA_RELEASE_METADATA_NOT_SCIENCE_EVIDENCE',
    'achieved Foundation delivery or access qualifications unverified');
  requireTrue(c?.expected === 'mid-2027' && c.dateStatus === 'future-not-actual' &&
    c.confirmedReleased === false && c.actualReleaseDate === null &&
    c.scientificEvidencePromoted === false &&
    a?.status === 'NO_NEW_COSMOLOGICAL_CONSTRAINT' &&
    a.darkEnergyMeasurementAdmitted === false && a.darkMatterTheoryValidated === false &&
    a.weakLensingLikelihoodReleased === false, 'future DR1 Complete or science admission changed');
  requireTrue(unique(receipt.sources) &&
    f.sourceIds?.includes('esa-release') && f.sourceIds?.includes('irsa-overview'),
    'two independent official release receipts required');
  const esa = receipt.sources.find(x => x.id === 'esa-release');
  const irsa = receipt.sources.find(x => x.id === 'irsa-overview');
  requireTrue(esa?.publisher === 'ESA' && esa.publishedOn === f.actualReleaseDate &&
    esa.checkedAt === '2026-11-12' &&
    esa.url === 'https://www.esa.int/articles/about-us/directorates/science/euclid/euclid-lays-the-foundation-for-its-best-ever-3d-map-of-the-universe' &&
    irsa?.publisher === 'NASA/IPAC IRSA' && irsa.checkedAt === '2026-11-12' &&
    irsa.url === 'https://irsa.ipac.caltech.edu/data/Euclid/docs/overview_dr1.html',
    'missing or unrecognized achieved-release sources');
  requireTrue(!registry.sources.some(x => x.id === ESA_ID || x.id === IRSA_ID),
    'proposed qualified source IDs collide with archival registry');
  // Do not rewrite 2026-10-30 observations even when the historical forecast date has passed.
  if (asOf < f.actualReleaseDate) return null;
  const newSources = [
    {id: ESA_ID, title: 'ESA: Euclid DR1-Foundation achieved release (12 Nov 2026)',
      url: esa.url, publisher: 'ESA', checkedAt: esa.checkedAt,
      reviewScope: 'Official dated release announcement; not cosmological Evidence'},
    {id: IRSA_ID, title: 'NASA/IPAC IRSA: Euclid DR1 access and product scope',
      url: irsa.url, publisher: 'NASA/IPAC IRSA', checkedAt: irsa.checkedAt,
      reviewScope: 'Official archive release/access documentation; not tested individual file delivery'}
  ];
  return {
    kind: 'research-only-qualified-current-state-projection',
    asOf,
    basedOnReviewDates: [registry.reviewedAt, receipt.reviewedAt],
    release: {
      ...oldRelease,
      access: 'public-observational-products',
      availableOn: f.actualReleaseDate,
      sourceIds: [...oldRelease.sourceIds, ESA_ID, IRSA_ID],
      reviewNotes: 'DR1-Foundation publicly released 2026-11-12 (ESA and IRSA). Public observational products; archive catalogs added incrementally. Individual file downloads and full catalog completeness were not independently checked. DR1 Complete and high-level weak-lensing/galaxy-clustering products remain future. No new cosmological Evidence admitted.'
    },
    milestone: {
      ...oldMilestone,
      event: 'DR1-Foundation actual public release',
      state: 'completed',
      confirmedActual: true,
      date: f.actualReleaseDate,
      sourceIds: [...oldMilestone.sourceIds, ESA_ID, IRSA_ID],
      actualSourceId: ESA_ID
    },
    newSources,
    complete: {status: 'future-not-released', expected: c.expected, confirmedReleased: false},
    scienceEvidencePromoted: false,
    runtimeUseAuthorized: false
  };
}
