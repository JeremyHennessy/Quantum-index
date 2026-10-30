import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {loadRuntime} from './category-trust-census.mjs';
const path='research/DM1B_ATOMIC_DAO_SOURCE_DECISIONS_2026-10-30.json';
const data=JSON.parse(fs.readFileSync(path,'utf8'));
const runtime=loadRuntime();
const sourceIds=new Set(data.sources.map(s=>s.id));
const theoryIds=new Set(runtime.QI_DATA.theories.map(t=>t.id));

test('DM-1B is independent, read-only and anchored to exact post-DM1A main',()=>{
 assert.equal(data.schemaVersion,1);
 assert.equal(data.baseMain,'2beb8fc3e4eb6d45092c4880349b056f9e1b3091');
 assert.equal(data.status,'source-located-research-proposal-not-integrated');
 assert.equal(data.sources.length,3);
 assert.equal(data.identityDecisions.length,2);
 assert.equal(data.formulaCandidates.length,1);
 assert.ok(data.nonClaims.length>=3);
 assert.match(data.evidenceLevel,/visual-review gate|screenshot/i);
 assert.equal(new Set(data.identityDecisions.map(x=>x.id)).size,2);
 for(const x of data.identityDecisions){assert.ok(!theoryIds.has(x.id),'candidate inadvertently already shipped '+x.id);assert.equal(x.status,'not-shipped');assert.ok(x.relatedExistingTheoryIds.every(id=>theoryIds.has(id)),x.id);assert.ok(x.sourceIds.every(id=>sourceIds.has(id)),x.id)}
 const docs=fs.readFileSync('docs/DARK_MATTER_DM1B_SOURCE_REVIEW_2026-10-30.md','utf8');
 assert.match(docs,/2009/);assert.match(docs,/not a separate dark-matter particle/i);assert.match(docs,/unavailable|HOLD/i);
});
test('original arXiv dates, named paper versions and journal years stay distinct',()=>{
 for(const x of data.sources){assert.match(x.url,/^https:\/\/arxiv\.org\/pdf\/\d{4}\.\d{4,5}v\d+$/);assert.match(x.firstPosted,/^20\d\d-\d\d-\d\d$/);assert.ok(x.journalYear>=2000&&x.doi);}
 assert.deepEqual(data.sources.map(x=>x.arxiv),['0909.0753v1','1209.5752v1','1310.3278v1']);
 assert.deepEqual(data.sources.map(x=>x.journalYear),[2010,2013,2014]);
 assert.equal(data.identityDecisions[0].proposedYear,2009);
 assert.equal(data.identityDecisions[1].proposedYear,null);
 assert.equal(data.identityDecisions[1].disposition,'HOLD_TAXONOMY');
});
test('binding energy is a source-located unshipped model equation with explicit caveats',()=>{
 const f=data.formulaCandidates[0],m1=3,m2=12,a=0.1;
 assert.equal(f.id,'atomic-dark-hydrogen-binding-energy-2009');
 assert.equal(f.state,'TEXT_LOCATED_VISUAL_HOLD');
 assert.ok(sourceIds.has(f.sourceId));
 assert.match(f.location,/Eq\. \(2\)/);
 assert.match(f.gate,/visual/i);
 assert.match(f.units,/energy units/);
 assert.ok(f.assumptions.length>=3);
 const mu=m1*m2/(m1+m2),b=a*a*mu/2;
 assert.ok(b>0&&b<mu);
 assert.equal((2*b)/(mu*a*a),1);
 assert.ok(data.heldFormulaOrEvidence.some(x=>/sound horizon/i.test(x.subject)));
 assert.ok(data.heldFormulaOrEvidence.some(x=>/constraint/i.test(x.subject)));
});
