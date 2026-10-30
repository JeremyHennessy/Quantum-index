import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const data=JSON.parse(fs.readFileSync('research/COI0_OBSERVATORY_AND_RELEASE_CENSUS_2026-10-30.json','utf8'));
const sandbox={window:{}};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('theories.js','utf8'),sandbox);
vm.runInContext(fs.readFileSync('problems.js','utf8'),sandbox);
const existingProblems=new Set(sandbox.window.QI_PROBLEMS.problems.map(p=>p.id));
const existingTheories=new Set(sandbox.window.QI_DATA.theories.map(t=>t.id));
const uniq=(array,label)=>{
 assert.equal(new Set(array).size,array.length,'Duplicate '+label);
 return new Set(array);
};
const allowedProgrammeStates=new Set(['not-assessed','science-operations','planned']);
const allowedAccess=new Set(['public-observational-products','public-analysis-products-only','rights-restricted-observational-products','published-result-only','planned-no-observational-products','public-archive-api','unknown']);
const allowedPrecision=new Set(['day','month','quarter','year','approximate','unspecified']);
const patternByPrecision={day:/^\d{4}-\d{2}-\d{2}$/,month:/^\d{4}-\d{2}$/,quarter:/^\d{4}-Q[1-4]$/,year:/^\d{4}$/,approximate:/^late \d{4}$/};
const checkDate=(value,precision)=>{
  assert.match(value,patternByPrecision[precision]);
  if(precision==='day')assert.equal(new Date(value+'T00:00:00Z').toISOString().slice(0,10),value,'Impossible calendar day');
  if(precision==='month')assert.ok(Number(value.slice(5))>=1&&Number(value.slice(5))<=12,'Invalid calendar month');
};

function validate(d){
 assert.equal(d.publicationStatus,'RESEARCH_ONLY_NOT_RUNTIME');
 assert.equal(d.schemaVersion,'coi0-research-v1');
 assert.match(d.baselineMainSha,/^[a-f0-9]{40}$/);
 assert.equal(d.sources.length,25);
 assert.equal(d.programmes.length,30);
 assert.equal(d.releases.length,18);
 assert.equal(d.milestones.length,5);
 const s=uniq(d.sources.map(x=>x.id),'source id'),p=uniq(d.programmes.map(x=>x.id),'programme id');
 uniq(d.releases.map(x=>x.id),'release id');
 uniq(d.milestones.map(x=>x.id),'milestone id');
 for(const source of d.sources){
   assert.ok(source.id && source.title && source.publisher && source.reviewScope);
   assert.match(source.url,/^https:\/\//,source.id);
   assert.equal(source.checkedAt,d.reviewedAt);
 }
 for(const program of d.programmes){
   assert.ok(program.id && program.name && program.domain);
   assert.ok(['mission','observatory','experiment','survey','instrument','array','collaboration'].includes(program.kind),program.id);
   assert.ok(allowedProgrammeStates.has(program.programState),program.id);
   assert.equal(program.evidencePromotion,false,program.id);
   assert.ok(program.sourceIds.length,program.id);
   for(const id of program.sourceIds)assert.ok(s.has(id),'Unknown source '+id+' on '+program.id);
   for(const id of program.relatedProblemIds)assert.ok(existingProblems.has(id),'Unknown scientific Problem '+id+' on '+program.id);
 }
 for(const release of d.releases){
   assert.ok(p.has(release.programmeId),'Unknown release programme '+release.programmeId);
   assert.ok(allowedAccess.has(release.access),release.id);
   assert.equal(release.claimReviewStatus,'discovery-metadata-only');
   assert.ok(release.sourceIds.length,release.id);
   for(const id of release.sourceIds)assert.ok(s.has(id),'Unknown source '+id+' on '+release.id);
   for(const id of (release.sharedProgramIds||[]))assert.ok(p.has(id),'Unknown shared programme '+id);
   if(release.availableOn===null)assert.equal(release.datePrecision,null);
   else{
     assert.ok(allowedPrecision.has(release.datePrecision),release.id);
     checkDate(release.availableOn,release.datePrecision);
   }
   if(release.access==='planned-no-observational-products') assert.ok(!release.confirmedActual,'Do not present planned release as completed');
 }
 for(const milestone of d.milestones){
   assert.ok(p.has(milestone.programmeId),milestone.id);
   assert.ok(allowedPrecision.has(milestone.precision),milestone.id);
   if(milestone.date!==null)checkDate(milestone.date,milestone.precision);
   else assert.equal(milestone.precision,'unspecified');
   assert.equal(milestone.state,'planned');
   assert.equal(milestone.confirmedActual,false,'Planned date must never imply confirmed actual');
   for(const id of milestone.sourceIds)assert.ok(s.has(id),'Unknown milestone source '+id);
 }
 return true;
}

test('COI-0 registry preserves 30 source-qualified distinct programme identities',()=>{
 assert.equal(validate(data),true);
 assert.equal(existingTheories.size,485,'Pinned accepted theory catalogue changed unexpectedly');
});
test('DESI DR1 spectra and DR2 analysis products are not conflated',()=>{
 const a=data.releases.find(x=>x.id==='desi-dr1'),b=data.releases.find(x=>x.id==='desi-dr2-analysis');
 assert.equal(a.access,'public-observational-products');
 assert.equal(b.access,'public-analysis-products-only');
 assert.match(b.reviewNotes,/NOT publicly released/);
});
test('Rubin restricted data, Euclid scheduled release and tentative launch are not labelled public',()=>{
 const rubin=data.releases.find(x=>x.id==='rubin-edp2');
 const euclid=data.releases.find(x=>x.id==='euclid-dr1-foundation');
 const roman=data.milestones.find(x=>x.id==='roman-launch-window-2026');
 assert.equal(rubin.access,'rights-restricted-observational-products');
 assert.equal(euclid.access,'planned-no-observational-products');
 assert.equal(roman.precision,'approximate');
 assert.equal(roman.confirmedActual,false);
});
test('A bibliography entry and science-facility listing do not promote Evidence or modify runtime',()=>{
 assert.ok(data.programmes.every(x=>x.evidencePromotion===false));
 assert.ok(data.releases.every(x=>x.claimReviewStatus==='discovery-metadata-only'));
 assert.ok(!fs.readFileSync('index.html','utf8').includes('COI0_OBSERVATORY_AND_RELEASE_CENSUS'));
 assert.ok(!fs.readFileSync('app.js','utf8').includes('COI0_OBSERVATORY_AND_RELEASE_CENSUS'));
});
test('Unknown source links, foreign problem IDs, invalid access and fictitious milestone completion fail closed',()=>{
 const change=fn=>{const clone=structuredClone(data);fn(clone);assert.throws(()=>validate(clone));};
 change(x=>{x.programmes[0].sourceIds=['nonexistent-source'];});
 change(x=>{x.programmes[0].relatedProblemIds=['invented-problem'];});
 change(x=>{x.releases.find(y=>y.id==='rubin-edp2').access='public-data';});
 change(x=>{x.milestones[0].confirmedActual=true;});
 change(x=>{x.releases[0].availableOn='2026-10-99';});
});
