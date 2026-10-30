import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {loadRuntime} from './category-trust-census.mjs';
const ledger=JSON.parse(fs.readFileSync('research/DM1C_SUPERFLUID_DIPOLAR_SOURCE_DECISIONS_2026-10-30.json','utf8'));
const w=loadRuntime(),existing=new Set(w.QI_DATA.theories.map(t=>t.id)),refs=new Map(ledger.sources.map(x=>[x.id,x]));
test('DM-1C is research-only, linked to exact approved post-DM1A baseline',()=>{
 assert.equal(ledger.schemaVersion,1);
 assert.equal(ledger.baseMain,'2beb8fc3e4eb6d45092c4880349b056f9e1b3091');
 assert.equal(ledger.status,'research-identity-source-intake-only-no-runtime-change');
 assert.equal(ledger.candidates.length,2);
 assert.equal(ledger.mathCandidates.length,2);
 assert.equal(new Set(refs.keys()).size,ledger.sources.length);
 assert.deepEqual(ledger.candidates.map(x=>x.id),['dipolar-dark-matter','superfluid-dark-matter']);
 for(const c of ledger.candidates){
  assert.equal(c.currentState,'not-shipped');
  assert.equal(c.identityDisposition,'ADD_AFTER_FULL_SOURCE_MATH_AND_SCOPE_REVIEW');
  assert.ok(c.precursorIds.every(x=>existing.has(x)),c.id+' missing precursor');
  assert.ok(c.otherRelatedIds.every(x=>existing.has(x)),c.id+' missing related ID');
  assert.ok(c.sourceIds.every(x=>refs.has(x)),c.id+' missing source');
 }
 const md=fs.readFileSync('docs/DARK_MATTER_DM1C_SOURCE_REVIEW_2026-10-30.md','utf8');
 assert.match(md,/2006/);assert.match(md,/2015/);assert.match(md,/No candidate equation is shipped/);
});
test('specific primary historical preprint years do not get replaced by journal years',()=>{
 const old=refs.get('dm1c-blanchet-polarization-2006');
 const rel=refs.get('dm1c-blanchet-letiec-gr-2008');
 const early=refs.get('dm1c-berezhiani-khoury-brief-2015');
 const later=refs.get('dm1c-berezhiani-khoury-full-2015');
 assert.equal(old.firstPost,'2006-05-24');assert.equal(old.journalYear,2007);
 const earlyGR=refs.get('dm1c-blanchet-gr-dipoles-2006');
 assert.equal(earlyGR.firstPost,'2006-09-26');assert.equal(earlyGR.journalYear,2007);
 assert.equal(earlyGR.arxiv,'gr-qc/0609121v1');
 assert.ok(earlyGR.firstPost<rel.firstPost);
 assert.equal(rel.firstPost,'2008-04-22');assert.equal(rel.journalYear,2008);
 assert.equal(early.firstPost,'2015-06-25');assert.equal(later.firstPost,'2015-07-03');
 assert.ok(early.firstPost<later.firstPost);
 assert.equal(ledger.candidates[0].earliestFoundPreprintYear,2006);
 assert.equal(ledger.candidates[1].earliestFoundPreprintYear,2015);
});
test('all model mathematical placeholders are explicit holds and never manufactured evidence',()=>{
 for(const v of ledger.mathCandidates){
  assert.ok(['SCHEMATIC_RESEARCH_ONLY','HOLD_EXACT_ACTION_AND_REGIME'].includes(v.state));
  assert.ok(ledger.candidates.some(c=>c.id===v.candidateTheoryId));
  assert.ok(refs.has(v.sourceId));assert.ok(v.scope);
 }
 assert.ok(ledger.caveats.some(x=>/not experimental identification/i.test(x)));
 assert.ok(ledger.caveats.some(x=>/2023 canonical bimetric/i.test(x)));
 assert.ok(ledger.nextGates.length>=4);
});

