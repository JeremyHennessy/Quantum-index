import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const candidate=JSON.parse(fs.readFileSync('research/COI2_EUCLID_DR1_PRODUCT_SPLIT_2026-11-06.json','utf8'));
const prior=JSON.parse(fs.readFileSync('research/COI0_OBSERVATORY_AND_RELEASE_CENSUS_2026-10-30.json','utf8'));
const exactSourcePages=new Set([
 'https://euclid.caltech.edu/page/euclid-dr1',
 'https://euclid.caltech.edu/page/euclid-dr1-foundation',
 'https://euclid.caltech.edu/page/euclid-dr1-complete',
 'https://euclid.caltech.edu/page/data-release-timeline'
]);
const unique=(items,label)=>assert.equal(new Set(items).size,items.length,'Duplicate '+label);
const isDay=(d)=>/^\d{4}-\d{2}-\d{2}$/.test(d)&&new Date(d+'T00:00:00Z').toISOString().slice(0,10)===d;

function verify(d){
 assert.equal(d.schemaVersion,'coi2-euclid-preflight-v1');
 assert.equal(d.publicationStatus,'RESEARCH_ONLY_NOT_RUNTIME');
 assert.equal(d.reviewedAt,'2026-11-06');
 assert.match(d.baselineMainSha,/^[a-f0-9]{40}$/);
 assert.equal(d.sourceRecords.length,4);
 unique(d.sourceRecords.map(x=>x.id),'source records');
 unique(d.sourceRecords.map(x=>x.url),'source URLs');
 assert.deepEqual(new Set(d.sourceRecords.map(x=>x.url)),exactSourcePages);
 for(const source of d.sourceRecords){
  assert.equal(source.publisher,'NASA/IPAC Euclid NASA Science Center');
  assert.equal(source.checkedAt,d.reviewedAt);
  assert.ok(source.sourceRole.startsWith('official-'));
 }
 const sourceIds=new Set(d.sourceRecords.map(x=>x.id));
 for(const key of ['foundation','complete']){
  const v=d[key];
  assert.equal(v.dateStatus,'planned');
  assert.equal(v.confirmedActual,false);
  assert.equal(v.actualReleaseDate,null);
  assert.equal(v.publicDataAvailabilityVerified,false);
  assert.equal(v.access,'planned-no-observational-products');
  assert.equal(v.claimStatus,'official-planned-release-scope-only');
  assert.equal(v.evidencePromoted,false);
  assert.ok(v.sourceIds.length>=2);
  unique(v.sourceIds,key+' source ids');
  for(const id of v.sourceIds)assert.ok(sourceIds.has(id),'Unknown source '+id);
 }
 assert.equal(d.q2Baseline.access,'public-observational-products');
 assert.equal(d.q2Baseline.releaseDate,'2026-06-24');
 for(const id of d.q2Baseline.sourceIds)assert.ok(sourceIds.has(id));
 assert.ok(isDay(d.foundation.targetDate));
 assert.equal(d.foundation.targetDate,'2026-11-12');
 assert.equal(d.foundation.targetPrecision,'day');
 assert.equal(d.foundation.estimatedWideSurveyAreaSqDeg,1900);
 assert.ok(d.foundation.includedProductFamilies.some(x=>x.includes('LE1')));
 assert.ok(d.foundation.includedProductFamilies.some(x=>x.includes('LE2')));
 assert.match(d.foundation.excludedProductSet,/3\.2\.7/);
 assert.equal(d.complete.targetDate,'mid-2027');
 assert.equal(d.complete.targetPrecision,'approximate');
 assert.ok(d.complete.higherLevelProducts.some(x=>x.includes('weak-lensing')));
 assert.ok(d.complete.higherLevelProducts.some(x=>x.includes('galaxy-clustering')));
 assert.match(d.promotionRule,/do not automatically mark Foundation public/i);
 return true;
}

test('COI-2 references actual COI-0 Euclid identities without duplicating programme or release IDs',()=>{
 assert.equal(verify(candidate),true);
 const x=candidate.existingIds;
 assert.ok(prior.programmes.some(p=>p.id===x.programmeId));
 assert.ok(prior.releases.some(p=>p.id===x.publicQuickReleaseId&&p.access==='public-observational-products'));
 assert.ok(prior.releases.some(p=>p.id===x.foundationReleaseId&&p.access==='planned-no-observational-products'));
 assert.ok(prior.milestones.some(p=>p.id===x.foundationMilestoneId&&p.confirmedActual===false));
});
test('Published Q2, planned Foundation and planned later Complete have distinct access and product scopes',()=>{
 assert.equal(verify(candidate),true);
 assert.notEqual(candidate.q2Baseline.access,candidate.foundation.access);
 assert.equal(candidate.complete.publicDataAvailabilityVerified,false);
 assert.equal(candidate.foundation.evidencePromoted,false);
 assert.equal(candidate.complete.evidencePromoted,false);
});
test('Unsubstantiated claims of delivery, product availability, or science Evidence fail closed',()=>{
 const mutation=(f)=>{let d=structuredClone(candidate);f(d);assert.throws(()=>verify(d));};
 mutation(d=>d.foundation.confirmedActual=true);
 mutation(d=>d.foundation.dateStatus='completed');
 mutation(d=>d.foundation.actualReleaseDate='2026-11-12');
 mutation(d=>d.foundation.access='public-observational-products');
 mutation(d=>d.complete.publicDataAvailabilityVerified=true);
 mutation(d=>d.complete.evidencePromoted=true);
 mutation(d=>d.complete.higherLevelProducts=[]);
 mutation(d=>d.foundation.excludedProductSet='No exclusions');
 mutation(d=>d.foundation.targetDate='2026-11-99');
 mutation(d=>d.sourceRecords[0].url='https://example.org/unsourced');
 mutation(d=>d.foundation.sourceIds=['invented-source']);
});
