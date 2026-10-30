import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {projectPreDm1a,readPreDm1aFile} from './dm1a-integration-baseline.mjs';
import {reverseDeclaredUiRevision} from './ui-revision-checkpoint.mjs';
const uiCandidate=JSON.parse(fs.readFileSync('research/UI_FIRST_FOLD_CANDIDATE_INTEGRITY_2026-10-30.json','utf8'));

import {loadRuntime} from './category-trust-census.mjs';
const pack=JSON.parse(fs.readFileSync('research/DARK_MATTER_DM1A_SIMP_ELDER_PROPOSED_RECORDS_2026-10-29.json','utf8'));
const ledger=JSON.parse(fs.readFileSync('research/DM1A_INTEGRATION_INTEGRITY_2026-10-29.json','utf8'));
const hash=x=>createHash('sha256').update(x).digest('hex');
const plain=x=>JSON.parse(JSON.stringify(x));
const runtimeFiles=['theories.js','developments.js','evidence.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','passports.js'];
function oldRuntime(){
 const s={window:{}};vm.createContext(s);
 for(const f of runtimeFiles)vm.runInContext(readPreDm1aFile(f,'utf8'),s);
 return s.window;
}
const before=oldRuntime(),now=loadRuntime();

test('DM-1A restores every protected source byte exactly and rejects undeclared mutations',()=>{
 assert.equal(ledger.baseMain,'228cd84230d0eaef8325dad4a94dc81ad8cf5a27');
 assert.equal(ledger.sourceProposalSha256,hash(fs.readFileSync('research/DARK_MATTER_DM1A_SIMP_ELDER_PROPOSED_RECORDS_2026-10-29.json')));
 for(const [file,entry]of Object.entries(ledger.files)){
  const bytes=fs.readFileSync(file);
  assert.equal(hash(reverseDeclaredUiRevision(bytes,file,uiCandidate)),entry.afterSha256,file);
  assert.equal(hash(readPreDm1aFile(file)),entry.beforeSha256,file);
  assert.throws(()=>projectPreDm1a(Buffer.concat([bytes,Buffer.from('undeclared')]),file),/(?:undeclared DM-1A|unexpected UI candidate mutation)/,file);
  assert.equal(hash(projectPreDm1a(readPreDm1aFile(file),file)),entry.beforeSha256,file);
 }
 for(const [file,expected] of Object.entries(ledger.unchangedFiles))assert.equal(hash(reverseDeclaredUiRevision(fs.readFileSync(file),file,uiCandidate)),expected,'approved untouched '+file);
});

test('DM-1A only appends precisely the four source-reviewed classes and references',()=>{
 assert.deepEqual(plain(now.QI_DATA.theories),[...plain(before.QI_DATA.theories),...pack.theories]);
 const addedSourceIds=new Set(pack.sources.map(s=>s.id));
 assert.deepEqual(plain(now.QI_DATA.sources.filter(s=>!addedSourceIds.has(s.id))),plain(before.QI_DATA.sources));
 assert.deepEqual(plain(now.QI_DATA.sources.filter(s=>addedSourceIds.has(s.id))),pack.sources);
 assert.deepEqual(plain(now.QI_DATA.relations),[...plain(before.QI_DATA.relations),...pack.relations]);
 assert.deepEqual(plain(now.QI_FORMULAS.formulas),[...plain(before.QI_FORMULAS.formulas),...pack.formulas]);
 for(const field of ['trees'])assert.deepEqual(plain(now.QI_DATA[field]),plain(before.QI_DATA[field]));
 for(const field of ['QI_EVIDENCE','QI_QUESTIONS','QI_PASSPORTS','QI_PROFILES'])assert.deepEqual(plain(now[field]),plain(before[field]),field);
 for(const [id,fid]of [['simp-relic','simp-three-to-two-boltzmann-2014'],['elder-relic','elder-cannibal-temperature-2015']]){
  const t=now.QI_DATA.theories.find(x=>x.id===id);
  assert.ok(t&&t.provenance==='primary-sourced');
  assert.ok(now.QI_FORMULAS.formulas.some(x=>x.id===fid&&x.theoryIds.includes(id)));
  const entry=now.QI_FORMULA_AUDIT.entries.find(x=>x.theoryId===id);
  assert.equal(entry.classification,'formula-bearing');
 }
 const oldProblem=before.QI_PROBLEMS.problems.find(x=>x.id==='dark-matter');
 const currentProblem=now.QI_PROBLEMS.problems.find(x=>x.id==='dark-matter');
 const group=oldProblem.approachGroups.find(g=>g.name==='Particle and field candidates');
 const expected=plain(oldProblem);
 expected.approachGroups.find(g=>g.name===group.name).theoryIds.push('simp-relic','elder-relic');
 assert.deepEqual(plain(currentProblem),expected);
 for(const item of before.QI_PROBLEMS.problems.filter(x=>x.id!=='dark-matter'))assert.deepEqual(plain(now.QI_PROBLEMS.problems.find(x=>x.id===item.id)),plain(item));
});

test('DM-1A generated coverage, freshness and hash assets match the accepted new runtime',()=>{
 const c=JSON.parse(fs.readFileSync('docs/coverage.json','utf8'));
 const f=JSON.parse(fs.readFileSync('docs/freshness.json','utf8'));
 const expected=pack.expectedAfterIntegration;
 for(const field of ['theories','sources','formulas','formulaBearing','formulaGaps','relations','editorialRelations','sourceBackedRelations','explicitFormulaMetadata','primarySourced']){
  const sourceField=field==='sourceBackedRelations'?'sourcedRelations':field;
  assert.equal(c[sourceField],expected[field],field);
 }
 assert.equal(f.documentedLiteratureSweepCount,0);
 assert.equal(f.unknownLiteratureReviewCount,485);
 const previous=JSON.parse(readPreDm1aFile('docs/freshness.json','utf8'));
 assert.equal(f.entitiesByYear['2014'],previous.entitiesByYear['2014']+1);
 assert.equal(f.entitiesByYear['2015'],previous.entitiesByYear['2015']+1);
 for(const t of now.QI_DATA.theories.filter(x=>['simp-relic','elder-relic'].includes(x.id)))assert.ok(!t.literatureSweep,'math source review is not full literature sweep');
});
