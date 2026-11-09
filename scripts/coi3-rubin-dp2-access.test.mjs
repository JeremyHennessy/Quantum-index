import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const review=JSON.parse(fs.readFileSync('research/COI3_RUBIN_DP2_RELEASE_ACCESS_2026-11-09.json','utf8'));
const previous=JSON.parse(fs.readFileSync('research/COI0_OBSERVATORY_AND_RELEASE_CENSUS_2026-10-30.json','utf8'));
const exactSources=new Set(['https://dp2.lsst.io/','https://dp2.lsst.io/products/index.html','https://dp2.lsst.io/access/index.html']);
const unique=(xs,label)=>assert.equal(new Set(xs).size,xs.length,'Duplicate '+label);
const validDate=d=>/^\d{4}-\d{2}-\d{2}$/.test(d)&&new Date(d+'T00:00:00Z').toISOString().slice(0,10)===d;

function verify(d){
 assert.equal(d.schemaVersion,'coi3-rubin-dp2-scope-v1');
 assert.equal(d.reviewedAt,'2026-11-09');
 assert.equal(d.publicationStatus,'RESEARCH_ONLY_NOT_RUNTIME');
 assert.equal(d.baselineMainSha,'7ba1c0647e7734192f3a8fbd420baddccdb89ba8');
 assert.equal(d.sourceRecords.length,3);
 unique(d.sourceRecords.map(x=>x.id),'sources');
 unique(d.sourceRecords.map(x=>x.url),'source URLs');
 assert.deepEqual(new Set(d.sourceRecords.map(x=>x.url)),exactSources);
 for(const s of d.sourceRecords){
   assert.equal(s.publisher,'NSF-DOE Vera C. Rubin Observatory');
   assert.equal(s.checkedAt,d.reviewedAt);
   assert.equal(s.pageLastModified,'2026-11-04');
   assert.ok(s.sourceRole.startsWith('official-'));
 }
 const sourceIds=new Set(d.sourceRecords.map(x=>x.id));
 for(const phase of [d.early,d.full]){
   assert.ok(phase.sourceIds.length>=2);
   unique(phase.sourceIds,'phase source IDs');
   for(const id of phase.sourceIds)assert.ok(sourceIds.has(id),'Unqualified source '+id);
   assert.equal(phase.publicToAll,false);
   assert.equal(phase.evidencePromoted,false);
 }
 assert.ok(validDate(d.early.releasedOn));
 assert.equal(d.early.releasedOn,'2026-07-27');
 assert.equal(d.early.releaseConfirmed,true);
 assert.equal(d.early.access,'rights-restricted-observational-products');
 assert.equal(d.early.accessPlatform,'Rubin Science Platform (RSP)');
 assert.deepEqual(d.early.availableImageFamilies,['deep_coadd']);
 assert.deepEqual(new Set(d.early.restrictedUntilFullImageFamilies),new Set(['raw','visit','difference','template']));
 unique(d.early.restrictedUntilFullImageFamilies,'held image families');
 assert.ok(d.early.catalogFamiliesAvailable.length>=5);
 assert.equal(d.early.catalogsIncludeVisitAndDifferenceMeasurements,true);
 assert.equal(d.early.doesNotImplyImagePixelsAvailableForAllCatalogMeasurements,true);
 assert.equal(d.full.expectedMonth,'2026-12');
 assert.equal(d.full.precision,'month');
 assert.equal(d.full.dateStatus,'expected-not-actual');
 assert.equal(d.full.actualReleaseDate,null);
 assert.equal(d.full.confirmedActual,false);
 assert.equal(d.full.fullProductDeliveryVerified,false);
 assert.equal(d.full.accessStatusAfterRelease,'not-independently-verified');
 assert.deepEqual(new Set(d.full.productFamiliesExpected),new Set(d.early.restrictedUntilFullImageFamilies));
 assert.equal(d.datasetContext.processing,'Rubin Science Pipelines v30');
 assert.equal(d.datasetContext.instrument,'LSSTCam');
 assert.equal(d.datasetContext.approximateDeepCoaddAndCatalogAreaSqDeg,3000);
 assert.equal(d.datasetContext.approximateSingleEpochCatalogAreaSqDeg,15000);
 assert.equal(d.claims.length,3);
 for(const c of d.claims)assert.ok(sourceIds.has(c.sourceId)&&c.status.startsWith('OFFICIAL_'));
 assert.match(d.promotionRule,/new dated delivery receipt/);
 assert.match(d.promotionRule,/data-rights/);
 return true;
}

test('COI-3 refines existing Rubin release IDs without replacing COI-0 historical records',()=>{
 assert.equal(verify(review),true);
 const ids=review.existingIds;
 assert.ok(previous.programmes.some(x=>x.id===ids.programmeId));
 const early=previous.releases.find(x=>x.id===ids.earlyReleaseId);
 const full=previous.releases.find(x=>x.id===ids.fullReleaseId);
 const milestone=previous.milestones.find(x=>x.id===ids.fullMilestoneId);
 assert.equal(early.access,'rights-restricted-observational-products');
 assert.equal(early.availableOn,'2026-07-27');
 assert.equal(full.access,'planned-no-observational-products');
 assert.equal(full.availableOn,'2026-Q4');
 assert.equal(milestone.state,'planned');
 assert.equal(milestone.confirmedActual,false);
});

test('EDP2 catalogs and deep-coadds do not imply visit/difference image pixel access or public rights',()=>{
 assert.equal(verify(review),true);
 assert.ok(review.early.catalogsIncludeVisitAndDifferenceMeasurements);
 assert.ok(review.early.restrictedUntilFullImageFamilies.includes('visit'));
 assert.ok(review.early.restrictedUntilFullImageFamilies.includes('difference'));
 assert.equal(review.early.publicToAll,false);
 assert.equal(review.full.fullProductDeliveryVerified,false);
});

test('Fabricated public access, delivered Full DP2, pixel entitlement and unqualified sources fail closed',()=>{
 const bad=fn=>{const x=structuredClone(review);fn(x);assert.throws(()=>verify(x));};
 bad(x=>x.early.access='public-observational-products');
 bad(x=>x.early.publicToAll=true);
 bad(x=>x.early.availableImageFamilies.push('visit'));
 bad(x=>x.early.restrictedUntilFullImageFamilies=[]);
 bad(x=>x.early.catalogsIncludeVisitAndDifferenceMeasurements=false);
 bad(x=>x.early.doesNotImplyImagePixelsAvailableForAllCatalogMeasurements=false);
 bad(x=>x.full.actualReleaseDate='2026-12-12');
 bad(x=>x.full.confirmedActual=true);
 bad(x=>x.full.fullProductDeliveryVerified=true);
 bad(x=>x.full.dateStatus='completed');
 bad(x=>x.full.accessStatusAfterRelease='public-to-all');
 bad(x=>x.full.expectedMonth='2026-10');
 bad(x=>x.full.evidencePromoted=true);
 bad(x=>x.sourceRecords[0].url='https://example.com/invented');
 bad(x=>x.full.sourceIds=['unreviewed-source']);
 bad(x=>x.early.releasedOn='2026-07-99');
});
