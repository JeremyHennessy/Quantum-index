import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {loadRuntime} from './category-trust-census.mjs';
import {buildCrossCategoryAudit,normalize} from './all-category-census.mjs';
const ledger=JSON.parse(fs.readFileSync('research/ALL_CATEGORY_CANDIDATES_2026-10-29.json','utf8'));
const w=loadRuntime();
const result=buildCrossCategoryAudit(w,ledger);
test('all actual categories have a scoped, distinct candidate queue and zero runtime mutations',()=>{
 assert.equal(ledger.baselineMain,'228cd84230d0eaef8325dad4a94dc81ad8cf5a27');
 assert.equal(result.totals.categories,14);
 assert.equal(result.totals.catalogTheories,483);
 assert.equal(result.totals.formulaRecords,460);
 assert.equal(result.totals.formulaGaps,111);
 assert.equal(result.totals.editorialRelations,484);
 assert.equal(result.totals.candidates,64);
 assert.equal(ledger.candidateCount,64);
 assert.deepEqual(new Set(ledger.groups.map(g=>g.category)),new Set(w.QI_DATA.theories.map(t=>t.category)));
 assert.equal(new Set(ledger.groups.map(g=>g.category)).size,14);
 for(const group of ledger.groups){
   assert.ok(group.candidates.length>=4);
   assert.equal(new Set(group.candidates.map(x=>normalize(x.name))).size,group.candidates.length);
   for(const c of group.candidates){
     assert.equal(c.releaseStatus,'research-only');
     assert.equal(c.verification,'identity-unverified');
     assert.equal(c.sourceStatus,'primary-source-check-required');
     assert.ok(c.reviewDisposition&&c.rationale);
     assert.ok(c.sourceQueue.length>0);
     for(const source of c.sourceQueue)assert.ok(fs.existsSync(source),source);
   }
 }
});
test('identity scan checks exact names and aliases across all categories, never treats fuzzy absence as proof',()=>{
 assert.match(result.notProof,/absence does not establish a missing theory/);
 assert.equal(result.totals.exactMatches+result.totals.unresolved,64);
 for(const g of result.groups)for(const c of g.candidates){
   assert.ok(['EXACT_CATALOG_MATCH','NOT_EXACTLY_NAMED_UNRESOLVED'].includes(c.identityVerdict));
   assert.ok(c.possibleOverlaps.length<=4);
   assert.ok(c.possibleOverlaps.every(x=>x.similarity>=.56));
   assert.ok(c.exactMatches.every(x=>w.QI_DATA.theories.some(t=>t.id===x.id)));
   assert.equal(c.releaseStatus,'research-only');
 }
 const sample=buildCrossCategoryAudit(w,{...ledger,groups:[{category:'Astroparticle physics & cosmology',candidates:[{name:'Lambda CDM',reviewDisposition:'ALREADY_COVERED',rationale:'synthetic test',sourceStatus:'primary-source-check-required',releaseStatus:'research-only'}]}]});
 assert.equal(sample.groups[0].candidates[0].identityVerdict,'EXACT_CATALOG_MATCH');
});
test('invalid category or missing source is rejected without silently zero-filling',()=>{
 assert.throws(()=>buildCrossCategoryAudit(w,{...ledger,groups:[{category:'Nonexistent physics category',candidates:[]}]}),/not present/);
});
