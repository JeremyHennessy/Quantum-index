import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {loadRuntime} from './category-trust-census.mjs';

const original=JSON.parse(fs.readFileSync('research/ALL_CATEGORY_CANDIDATES_2026-10-29.json','utf8'));
const decisions=JSON.parse(fs.readFileSync('research/CROSS_CATEGORY_SOURCE_DECISIONS_2026-10-30.json','utf8'));
const runtime=loadRuntime();
const known=new Set(runtime.QI_DATA.theories.map(t=>t.id));
const indexedNames=new Set(original.groups.flatMap(g=>g.candidates.map(c=>c.name)));

test('cross-category source review resolves exact parent identities and never silently proposes duplicates',()=>{
 assert.equal(decisions.mainBaseline,'228cd84230d0eaef8325dad4a94dc81ad8cf5a27');
 assert.equal(decisions.reviewStatus,'bounded-identity-screen-source-abstracts-not-math-review');
 assert.equal(decisions.decisions.length,8);
 assert.equal(new Set(decisions.decisions.map(x=>x.candidate)).size,decisions.decisions.length);
 for(const d of decisions.decisions){
   assert.ok(indexedNames.has(d.candidate),d.candidate);
   assert.match(d.reason, /\S/);
   if(d.disposition.startsWith('ALREADY_COVERED')){
     assert.ok(known.has(d.existingId),'Missing actual catalog ID '+d.existingId);
     assert.equal(d.suggestedId,undefined,'Existing entry cannot request duplicate ADD');
   }else{
     assert.ok(d.disposition.startsWith('SOURCE_SUPPORTED_IDENTITY_HOLD'));
     assert.ok(!known.has(d.suggestedId),'Unresolved record collided with existing catalog '+d.suggestedId);
     assert.ok(d.sourceIds.length>=2);
     for(const id of d.existingRelatedIds)assert.ok(known.has(id),id);
   }
 }
 assert.equal(decisions.decisions.filter(x=>x.disposition.startsWith('ALREADY_COVERED')).length,6);
 assert.equal(decisions.decisions.filter(x=>x.disposition.startsWith('SOURCE_SUPPORTED')).length,2);
});

test('primary and review evidence are bibliographic leads, not falsely certified equation provenance',()=>{
 const sources=new Map(decisions.sourceEvidence.map(s=>[s.id,s]));
 assert.equal(sources.size,5);
 for(const s of sources.values()){
   assert.match(s.url,/^https:\/\//);
   assert.ok(s.title&&s.authors&&s.inspection);
   assert.match(s.inspection,/abstract/i);
   assert.match(s.inspection,/no equation|not source|not historical|not original/i);
 }
 for(const d of decisions.decisions.filter(x=>x.sourceIds)){
   for(const id of d.sourceIds)assert.ok(sources.has(id),d.candidate+' '+id);
 }
 assert.ok(decisions.nonClaims.some(s=>/No new scientific catalog entry/i.test(s)));
 assert.ok(decisions.nonClaims.some(s=>/not proof that the field began/i.test(s)));
 const counts=JSON.parse(fs.readFileSync('docs/coverage.json','utf8'));
 assert.equal(runtime.QI_DATA.theories.length,counts.theories);
 assert.equal(runtime.QI_FORMULAS.formulas.length,counts.formulas);
 assert.equal(runtime.QI_DATA.relations.length,counts.relations);
});
