import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';

const ledger=JSON.parse(fs.readFileSync('research/PASSPORT_SOURCE_REVIEW_2026-10-11.json','utf8'));
const bytes=fs.readFileSync('passports.js');
const marker="// 2026-10-11 nuclear Passports — independently source-reviewed additive batch.";
const boundary=bytes.indexOf(Buffer.from(marker));
const prefix=bytes.subarray(0,boundary);
const blobSha=createHash('sha1').update(Buffer.from('blob '+prefix.length+'\0')).update(prefix).digest('hex');
const sandbox={window:{}};vm.createContext(sandbox);
for(const file of ['theories.js','developments.js','evidence.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','passports.js'])vm.runInContext(fs.readFileSync(file,'utf8'),sandbox);
const {theories,sources}=sandbox.window.QI_DATA;
const byTheory=new Map(theories.map(x=>[x.id,x]));
const bySource=new Map(sources.map(x=>[x.id,x]));
const byFormula=new Map(sandbox.window.QI_FORMULAS.formulas.map(x=>[x.id,x]));
const all=sandbox.window.QI_PASSPORTS.records;

test('reviewed nuclear batch appends without editing the prior 23 Passport bytes',()=>{
 assert.ok(boundary>0,'additive release marker');
 assert.equal(blobSha,ledger.previousPassportBlob,'prior approved Passport blob modified');
 assert.equal(ledger.preservedExistingPassportCount,23);
 assert.equal(all.length,25);
 assert.equal(new Set(all.map(x=>x.theoryId)).size,all.length);
 assert.equal(ledger.acceptedAppendOnlyPassportTheoryIds.length,2);
 for(const id of ledger.acceptedAppendOnlyPassportTheoryIds)assert.equal(all.filter(x=>x.theoryId===id).length,1,id);
});
test('both nuclear Passports have source-located mathematics, honest limits and comparators',()=>{
 for(const id of ledger.acceptedAppendOnlyPassportTheoryIds){
  const p=all.find(x=>x.theoryId===id);
  assert.ok(byTheory.has(id));
  assert.equal(p.reviewedAt,'2026-10-11');
  assert.ok(p.entityType.length>15);assert.ok(p.scientificStatus.length>30);
  assert.ok(p.assumptions.length>=3);assert.ok(p.predictionsConsequences.length>=3);
  assert.ok(p.limitations.length>=3);assert.ok(p.degreesOfFreedom.length>90);
  assert.ok(p.sourceLocations.length>=2);assert.ok(p.whatEvidenceDoesNotEstablish.length>80);
  assert.equal(p.evidenceIds.length,0,'source review does not create evidence');
  assert.ok(p.comparisonFrameworks.length>=3);assert.ok(p.usefulDiscriminators.length>=3);
  assert.ok(p.unresolvedQuestions.length>=2);
  for(const f of p.formulaIds){assert.ok(byFormula.has(f),f);assert.ok(byFormula.get(f).theoryIds.includes(id),f);}
  for(const c of p.comparisonFrameworks)assert.ok(byTheory.has(c),'unknown comparison '+c);
  for(const loc of p.sourceLocations){
   assert.ok(bySource.has(loc.sourceId),loc.sourceId);
   assert.ok(p.sourceIds.includes(loc.sourceId),loc.sourceId);
   assert.match(loc.locator,/Sec\.|Eq\./);
   assert.match(loc.url,/^https:\/\//);
  }
 }
 assert.match(all.find(x=>x.theoryId==='in-medium-srg').limitations.join(' '),/truncation/i);
 assert.match(all.find(x=>x.theoryId==='nuclear-shell-model').evidenceSummary,/not an independent/i);
});
test('historical six-candidate scope ledger remains immutable and four source gates are still open',()=>{
 const original=JSON.parse(fs.readFileSync('research/PASSPORT_CURATION_QUEUE_2026-10-08.json','utf8'));
 assert.equal(original.targetCount,6);
 assert.equal(original.status,'scoped-not-source-reviewed-not-shipped');
 assert.deepEqual(ledger.remainingUnshippedIds,['qed','yang-mills','gksl','quantum-error-correction']);
 for(const row of ledger.candidates)assert.ok(byTheory.has(row.theoryId),row.theoryId);
});
