import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const reviewed = JSON.parse(fs.readFileSync('research/COI6_ROMAN_COMMISSIONING_2026-11-16.json', 'utf8'));
const census = JSON.parse(fs.readFileSync('research/COI0_OBSERVATORY_AND_RELEASE_CENSUS_2026-10-30.json', 'utf8'));
const urls = new Map([
  ['nasa-launch', 'https://science.nasa.gov/mission/roman-space-telescope/roman-launch/'],
  ['nasa-commissioning', 'https://science.nasa.gov/blogs/roman/2026/10/22/nasas-roman-space-telescope-enters-final-commissioning-phase/'],
  ['nasa-alignment', 'https://science.nasa.gov/blogs/roman/2026/11/13/instruments-on-nasas-roman-space-telescope-get-in-sync-for-science/'],
  ['nasa-forecast', 'https://science.nasa.gov/blogs/roman/2026/09/01/nasa-roman-space-telescopes-antenna-visor-deployed/'],
  ['stsci-open-policy', 'https://www.stsci.edu/contents/news-releases/2026/news-2026-401'],
]);

function verify(d) {
  assert.equal(d.schemaVersion, 'coi6-roman-commissioning-v1');
  assert.equal(d.reviewedAt, '2026-11-16');
  assert.equal(d.baselineMainSha, 'a60397f017c5c0bfc2bf88be046320a00c9d28de');
  assert.equal(d.publicationStatus, 'RESEARCH_ONLY_NOT_RUNTIME');
  assert.deepEqual(d.existingIds, {
    programmeId: 'roman', futureReleaseId: 'roman-future',
    mastSourceId: 'roman-mast', launchSourceId: 'roman-launch-nasa-2026',
    commissioningSourceId: 'roman-commissioning-nasa-2026',
  });
  assert.equal(d.sources.length, 5);
  assert.equal(new Set(d.sources.map(s => s.id)).size, 5);
  for (const s of d.sources) assert.equal(s.url, urls.get(s.id), 'unexpected or reassigned official source');
  assert.equal(d.sources.find(s => s.id === 'nasa-alignment').publishedOn, '2026-11-13');
  assert.equal(d.programme.launchDate, '2026-08-30');
  assert.equal(d.programme.launchStatus, 'achieved');
  assert.equal(d.programme.commissioningPhaseEntered, '2026-10-22');
  assert.equal(d.programme.statusAsOf, '2026-11-13');
  assert.equal(d.programme.operatingPhase, 'science-commissioning');
  assert.equal(d.programme.scienceOperationsStartedVerified, false);
  assert.equal(d.programme.releaseScope, 'commissioning-milestone-not-public-science-data');
  assert.equal(d.alignment.reportedOn, '2026-11-13');
  assert.equal(d.alignment.wideFieldInstrumentDetectorCount, 18);
  assert.equal(d.alignment.coronagraphDeformableMirrorActiveStarlightControlCompleted, false);
  assert.equal(d.alignment.releasedCosmologicalAnalysis, false);
  assert.equal(d.alignment.directScientificMeasurementClaim, false);
  assert.equal(d.dataAccess.statedFutureDataPolicy, 'immediate-public-science-data-with-no-exclusive-period');
  for (const k of ['actualPublicScienceProductReleaseVerified','archiveScienceBytesIndependentlyRetrieved','commissioningExposuresEquivalentToSurveyProducts','simulatedOrTestDataEquivalentToMissionScience'])
    assert.equal(d.dataAccess[k], false);
  assert.equal(d.futureMilestones.length, 2);
  assert.equal(d.futureMilestones[0].expectedPeriod, 'early-2027');
  assert.equal(d.futureMilestones[0].projectionDated, '2026-09-01');
  for (const m of d.futureMilestones) assert.equal(m.releasedConfirmed, false);
  assert.equal(d.scienceAdmission.noNewCosmologicalEvidence, true);
  for (const k of ['darkEnergyConstraintEstablished','darkMatterDetectionEstablished','sciencePaperReviewed'])
    assert.equal(d.scienceAdmission[k], false);
  assert.match(d.scienceAdmission.requirements, /covariance/);
  assert.ok(d.preservation.includes('approved Physics/Observatory Explorer HTML/CSS/JS'));
}
test('COI-6 binds to existing Roman mission/release/source IDs without mutation of historical census', () => {
  verify(reviewed);
  const id = reviewed.existingIds;
  const p = census.programmes.find(x => x.id === id.programmeId);
  assert.ok(p && p.programState === 'science-commissioning');
  assert.ok(census.releases.some(x => x.id === id.futureReleaseId && x.programmeId === 'roman'));
  for (const name of [id.mastSourceId, id.launchSourceId, id.commissioningSourceId])
    assert.ok(census.sources.some(x => x.id === name));
  assert.equal(census.releases.some(x => x.id === 'roman-2026-science-dr1'), false);
});
test('Dated commissioning and open data policy do not establish public science release or a cosmological claim', () => verify(reviewed));
test('Inflated science, archive availability, released forecast and shifted source identity fail closed', () => {
  const mutate = fn => { const d = structuredClone(reviewed); fn(d); assert.throws(() => verify(d)); };
  mutate(d => d.programme.operatingPhase = 'routine-science-operations');
  mutate(d => d.programme.scienceOperationsStartedVerified = true);
  mutate(d => d.dataAccess.actualPublicScienceProductReleaseVerified = true);
  mutate(d => d.dataAccess.commissioningExposuresEquivalentToSurveyProducts = true);
  mutate(d => d.dataAccess.archiveScienceBytesIndependentlyRetrieved = true);
  mutate(d => d.futureMilestones[0].releasedConfirmed = true);
  mutate(d => d.alignment.coronagraphDeformableMirrorActiveStarlightControlCompleted = true);
  mutate(d => d.scienceAdmission.darkEnergyConstraintEstablished = true);
  mutate(d => d.scienceAdmission.sciencePaperReviewed = true);
  mutate(d => d.sources.find(s => s.id === 'nasa-alignment').url = 'https://example.org/unverified');
  mutate(d => d.existingIds.programmeId = 'roman-new');
});
