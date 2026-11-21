import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {projectEuclidFoundation} from './coi7-euclid-current-state.mjs';

const archivalPath = 'research/COI0_OBSERVATORY_AND_RELEASE_CENSUS_2026-10-30.json';
const receiptPath = 'research/COI4_EUCLID_DR1_FOUNDATION_DELIVERY_2026-11-12.json';
const archived = fs.readFileSync(archivalPath);
const achieved = fs.readFileSync(receiptPath);
const registry = JSON.parse(archived);
const receipt = JSON.parse(achieved);
const gitBlob = bytes => createHash('sha1').update(Buffer.concat([
  Buffer.from(`blob ${bytes.length}\\0`), bytes
])).digest('hex');
const copy = x => structuredClone(x);

test('COI-7 pins both immutable historic inputs, not mutable live registry or approved UI', () => {
  assert.equal(gitBlob(archived), 'f4f600632a852f21daea3cacb9e66e9c889ae9d2');
  assert.equal(gitBlob(achieved), '091482eabf68bb21a28ad193a2972ab949fb321b');
  assert.deepEqual(fs.readFileSync('docs/observatory-registry.json'), archived,
    'Approved Observatory still mirrors its exact historical October 30 snapshot');
});

test('Only after documented actual release can a source-qualified public-Foundation proposal be constructed', () => {
  const before = JSON.stringify(registry), proof = JSON.stringify(receipt);
  assert.equal(projectEuclidFoundation(registry, receipt, '2026-11-11'), null);
  const actual = projectEuclidFoundation(registry, receipt, '2026-11-12');
  const now = projectEuclidFoundation(registry, receipt, '2026-11-21');
  assert.deepEqual(actual.release, now.release);
  assert.equal(now.runtimeUseAuthorized, false);
  assert.equal(now.release.id, 'euclid-dr1-foundation');
  assert.equal(now.release.access, 'public-observational-products');
  assert.equal(now.release.claimReviewStatus, 'discovery-metadata-only');
  assert.equal(now.release.availableOn, '2026-11-12');
  assert.equal(now.milestone.id, 'euclid-dr1-foundation-2026');
  assert.equal(now.milestone.state, 'completed');
  assert.equal(now.milestone.actualSourceId, now.newSources[0].id);
  assert.equal(now.newSources.length, 2);
  assert.equal(new Set(now.newSources.map(x => x.id)).size, 2);
  assert.ok(now.newSources.every(x => /^https:\\/\\//.test(x.url)));
  assert.ok(now.release.sourceIds.every(x =>
    registry.sources.some(s => s.id === x) || now.newSources.some(s => s.id === x)));
  assert.equal(JSON.stringify(registry), before, 'No mutation to approved registry');
  assert.equal(JSON.stringify(receipt), proof, 'No mutation to actual-source receipt');
  assert.equal(registry.releases.find(x => x.id === 'euclid-dr1-foundation').access,
    'planned-no-observational-products', 'Preserve historically correct October status');
});

test('DR1 Complete, individual access and new cosmological evidence remain explicitly unverified', () => {
  const proposed = projectEuclidFoundation(registry, receipt, '2026-11-21');
  assert.deepEqual(proposed.complete, {status:'future-not-released',expected:'mid-2027',confirmedReleased:false});
  assert.equal(proposed.scienceEvidencePromoted, false);
  assert.match(proposed.release.reviewNotes, /not independently checked/i);
  assert.match(proposed.release.reviewNotes, /No new cosmological Evidence admitted/);
  assert.ok(!proposed.release.sourceIds.some(x => /weak-lensing-likelihood/i.test(x)));
});

test('Fabricated delivery, missing official evidence, false current status and stale history fail closed', () => {
  const falsifyReceipt = mut => {
    const r = copy(receipt); mut(r);
    assert.throws(() => projectEuclidFoundation(registry, r, '2026-11-21'), /fail-closed/);
  };
  const falsifyRegistry = mut => {
    const d = copy(registry); mut(d);
    assert.throws(() => projectEuclidFoundation(d, receipt, '2026-11-21'), /fail-closed/);
  };
  falsifyReceipt(r => r.foundation.status = 'planned');
  falsifyReceipt(r => r.foundation.publicReleaseDeclared = false);
  falsifyReceipt(r => r.foundation.actualReleaseDate = '2026-12-07');
  falsifyReceipt(r => r.foundation.individualFileDownloadVerified = true);
  falsifyReceipt(r => r.foundation.fullCatalogServiceCompletenessVerified = true);
  falsifyReceipt(r => r.foundation.scientificEvidencePromoted = true);
  falsifyReceipt(r => r.sources.find(x=>x.id==='esa-release').publishedOn = '2026-11-11');
  falsifyReceipt(r => r.sources.find(x=>x.id==='irsa-overview').url = 'https://example.com');
  falsifyReceipt(r => r.foundation.sourceIds = ['esa-release']);
  falsifyReceipt(r => r.complete.confirmedReleased = true);
  falsifyReceipt(r => r.complete.actualReleaseDate = '2026-11-12');
  falsifyReceipt(r => r.scienceAdmission.weakLensingLikelihoodReleased = true);
  falsifyRegistry(d => d.releases.find(x=>x.id==='euclid-dr1-foundation').access='public-observational-products');
  falsifyRegistry(d => d.milestones.find(x=>x.id==='euclid-dr1-foundation-2026').confirmedActual=true);
  falsifyRegistry(d => d.releases.push(copy(d.releases.find(x=>x.id==='euclid-dr1-foundation'))));
  falsifyRegistry(d => d.sources.push({id:'euclid-dr1f-esa-actual-2026-11-12'}));
  assert.throws(() => projectEuclidFoundation(registry, receipt, '2026-11-99'), /fail-closed/);
});
