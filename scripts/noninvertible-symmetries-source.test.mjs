import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {loadRuntime} from './category-trust-census.mjs';

const p=JSON.parse(fs.readFileSync('research/NONINVERTIBLE_SYMMETRIES_SOURCE_FORMULA_2026-10-30.json','utf8'));
const w=loadRuntime();
const theories=new Set(w.QI_DATA.theories.map(x=>x.id));

test('a sourced Ising fusion example is held separate from a claimed universal theory',()=>{
 assert.equal(p.baseMain,'228cd84230d0eaef8325dad4a94dc81ad8cf5a27');
 assert.equal(p.status,'specific-example-fusion-rule-source-checked-not-integrated');
 assert.equal(p.candidateTheory.originYear,null);
 assert.ok(!theories.has(p.candidateTheory.id));
 for(const id of p.candidateTheory.existingRelatedTheoryIds)assert.ok(theories.has(id),id);
 assert.ok(!w.QI_FORMULAS.formulas.some(f=>f.id===p.formulaCandidate.id));
 assert.deepEqual(p.formulaCandidate.theoryIds,[p.candidateTheory.id]);
 assert.deepEqual(p.formulaCandidate.sourceIds,[p.source.id]);
 assert.match(p.source.paperUrl,/10\.1103\/PhysRevLett\.128\.111601\.pdf$/);
 assert.match(p.formulaCandidate.sourceLocation.url,/#page=1$/);
 assert.match(p.formulaCandidate.sourceLocation.locator,/Eq\. \(1\)/);
 assert.equal(p.source.firstPreprintYear,2021);
 assert.equal(p.source.publisherYear,2022);
 assert.match(p.futureMathHold.sourceLocation,/Eq\. \(5\)/);
 assert.match(p.futureMathHold.decision,/HOLD/);
 assert.ok(p.nonClaims.some(x=>/not a universal/i.test(x)));
});
test('the distinct sector sum is not an invertible simple-object fusion rule',()=>{
 assert.match(p.formulaCandidate.latex,/\\mathcal\{N\}/);
 assert.match(p.formulaCandidate.latex,/\\eta_\{\\mathbb\{Z\}_2\}/);
 const fusion=(x,y)=>{
  if(x==='1')return [y];
  if(y==='1')return [x];
  if(x==='eta'&&y==='eta')return ['1'];
  if(x==='eta'||y==='eta')return ['N'];
  return ['1','eta'];
 };
 assert.deepEqual(fusion('N','N'),['1','eta']);
 assert.deepEqual(fusion('eta','eta'),['1']);
 for(const x of ['1','eta','N'])assert.notDeepEqual(fusion('N',x),['1']);
 assert.deepEqual(fusion('N','eta'),fusion('eta','N'));
 assert.match(p.formulaCandidate.regime,/Ising/);
 assert.ok(p.formulaCandidate.assumptions.some(x=>/not.*arbitrary|not.*universal/i.test(x)));
});
test('research-only record has no effect on compiled published inventory',()=>{
 const c=JSON.parse(fs.readFileSync('docs/coverage.json','utf8'));
 assert.equal(w.QI_DATA.theories.length,c.theories);
 assert.equal(w.QI_FORMULAS.formulas.length,c.formulas);
 assert.equal(w.QI_DATA.relations.length,c.relations);
});
