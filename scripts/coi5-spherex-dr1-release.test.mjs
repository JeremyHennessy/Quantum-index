import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const reviewed = JSON.parse(fs.readFileSync('research/COI5_SPHEREX_DR1_RELEASE_SCOPE_2026-11-14.json', 'utf8'));
const census = JSON.parse(fs.readFileSync('research/COI0_OBSERVATORY_AND_RELEASE_CENSUS_2026-10-30.json', 'utf8'));
const expectedSources = new Map([
  ['irsa-news', 'https://irsa.ipac.caltech.edu/news.html'],
  ['irsa-overview', 'https://irsa.ipac.caltech.edu/data/SPHEREx/docs/overview_dr1.html'],
  ['irsa-releases', 'https://irsa.ipac.caltech.edu/spherex-archive-documentation/spherex-data-releases/'],
  ['irsa-access', 'https://irsa.ipac.caltech.edu/spherex-archive-documentation/spherex-data-access/'],
  ['image-doi', 'https://www.ipac.caltech.edu/doi/10.26131/IRSA678'],
  ['cube-doi', 'https://www.ipac.caltech.edu/doi/10.26131/IRSA679'],
]);

function verify(d) {
  assert.equal(d.schemaVersion, 'coi5-spherex-dr1-release-v1');
  assert.equal(d.reviewedAt, '2026-11-14');
  assert.equal(d.baselineMainSha, '68b9011d2a9045682b853145a887ef1aebac2b74');
  assert.equal(d.publicationStatus, 'RESEARCH_ONLY_NOT_RUNTIME');
  assert.deepEqual(d.existingIds, {programmeId: 'spherex', quickReleaseId: 'spherex-qr3', originalSourceId: 'spherex-irsa'});
  assert.equal(d.sources.length, 6);
  assert.equal(new Set(d.sources.map(s => s.id)).size, 6);
  for (const s of d.sources) {
    assert.equal(s.url, expectedSources.get(s.id), 'source URL/id changed');
    assert.equal(s.checkedAt, '2026-11-14');
  }
  assert.equal(d.sources.find(s => s.id === 'irsa-news').publishedOn, '2026-11-12');
  const r = d.release;
  assert.equal(r.status, 'released-confirmed-by-IRSA');
  assert.equal(r.actualReleaseDate, '2026-11-12');
  assert.equal(r.access, 'public-archive-products');
  assert.deepEqual(new Set(r.sourceIds), new Set(['irsa-news','irsa-overview','irsa-access']));
  assert.deepEqual(r.productFamilies.map(p => p.type), ['reprocessed-spectral-images', 'spectral-all-sky-cube']);
  assert.equal(r.productFamilies[0].doi, '10.26131/IRSA678');
  assert.equal(r.productFamilies[0].sourceId, 'image-doi');
  assert.deepEqual(r.productFamilies[0].surveys, [1,2]);
  assert.equal(r.productFamilies[1].doi, '10.26131/IRSA679');
  assert.equal(r.productFamilies[1].sourceId, 'cube-doi');
  assert.equal(r.productFamilies[1].nominalChannels, 102);
  assert.deepEqual(r.productFamilies[1].wavelengthMicrons, {minimum: 0.75, maximum: 5.0});
  assert.equal(r.documentationRetrieved, true);
  assert.equal(r.doiRecordsRetrieved, true);
  for (const k of ['individualFitsDownloadVerified','siaQueryExecuted','scienceCatalogueReleasedAsPartOfDr1','scientificEvidencePromoted']) assert.equal(r[k], false);
  assert.equal(r.claimStatus, 'PUBLIC_DATA_RELEASE_METADATA_NOT_COSMOLOGICAL_EVIDENCE');
  assert.deepEqual(r.lineage ?? {}, {}); // release and version lineage stay separate
  assert.deepEqual(d.lineage.qr3.surveys, [3,4]);
  assert.equal(d.lineage.qr3.existingReleaseId, 'spherex-qr3');
  assert.equal(d.lineage.qr3.intendedJointUseWithDr1, true);
  assert.equal(d.lineage.qr2.searchable, false);
  assert.equal(d.lineage.qr2.directDownloadUntil, '2027-02');
  assert.equal(d.lineage.qr2.crossCalibrationCaution, true);
  assert.equal(d.lineage.qr1.current, false);
  assert.equal(d.planned.highReliabilitySourceCatalogueV1.expected, '2027-08');
  assert.equal(d.planned.highReliabilitySourceCatalogueV1.releasedConfirmed, false);
  assert.equal(d.planned.dr2AndSourceCatalogueV2.expected, '2027-12');
  assert.equal(d.planned.dr2AndSourceCatalogueV2.releasedConfirmed, false);
  assert.equal(d.archiveAccess.protocol, 'IVOA-SIA2');
  assert.equal(d.archiveAccess.dr1WideCollection, 'spherex_dr1');
  assert.equal(d.archiveAccess.dr1DeepCollection, 'spherex_dr1_deep');
  assert.equal(d.archiveAccess.dr1CubeCollection, 'spherex_dr1_cube');
  assert.equal(d.archiveAccess.qr3WideCollection, 'spherex_qr3');
  assert.equal(d.archiveAccess.qr3DeepCollection, 'spherex_qr3_deep');
  assert.equal(d.archiveAccess.actualQueryVerified, false);
  assert.equal(d.archiveAccess.catalogNotImpliedByImageServices, true);
  assert.equal(d.scienceAdmission.status, 'NO_NEW_INFLATION_OR_DARK_ENERGY_CONSTRAINT');
  for (const k of ['inflationConstraintEstablished','darkEnergyEvidenceAdmitted','releasedSourceCatalogueClaimed']) assert.equal(d.scienceAdmission[k], false);
  assert.match(d.scienceAdmission.requirements, /covariance/);
  assert.ok(d.preservation.includes('approved Explorer HTML/CSS/JS'));
  return true;
}

test('COI-5 uses existing SPHEREx programme and QR3 IDs without rewriting historical census', () => {
  verify(reviewed);
  assert.ok(census.programmes.some(p => p.id === reviewed.existingIds.programmeId));
  assert.ok(census.releases.some(r => r.id === reviewed.existingIds.quickReleaseId && r.programmeId === 'spherex'));
  assert.ok(census.sources.some(s => s.id === reviewed.existingIds.originalSourceId));
  assert.equal(census.releases.some(r => r.id === 'spherex-dr1'), false);
});
test('DR1, QR3 and future catalogue releases remain distinct', () => verify(reviewed));
test('Fabricated data access, catalogues, dark-energy evidence and DOI reassignment fail closed', () => {
  const mutate = f => { const d = structuredClone(reviewed); f(d); assert.throws(() => verify(d)); };
  mutate(d => d.release.actualReleaseDate = '2026-11-13');
  mutate(d => d.release.productFamilies[0].doi = '10.26131/IRSA679');
  mutate(d => d.release.productFamilies[1].nominalChannels = 103);
  mutate(d => d.release.individualFitsDownloadVerified = true);
  mutate(d => d.release.siaQueryExecuted = true);
  mutate(d => d.release.scienceCatalogueReleasedAsPartOfDr1 = true);
  mutate(d => d.release.scientificEvidencePromoted = true);
  mutate(d => d.planned.highReliabilitySourceCatalogueV1.releasedConfirmed = true);
  mutate(d => d.planned.dr2AndSourceCatalogueV2.releasedConfirmed = true);
  mutate(d => d.scienceAdmission.darkEnergyEvidenceAdmitted = true);
  mutate(d => d.archiveAccess.actualQueryVerified = true);
  mutate(d => d.sources.find(s => s.id === 'cube-doi').url = 'https://example.org/not-a-source');
});
