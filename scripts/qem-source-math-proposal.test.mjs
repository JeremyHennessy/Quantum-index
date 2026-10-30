import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {loadRuntime} from './category-trust-census.mjs';

const pack=JSON.parse(fs.readFileSync('research/QEM_SOURCE_MATH_PROPOSAL_2026-10-30.json','utf8'));
const runtime=loadRuntime();

test('QEM equation proposals are genuinely new candidate-only IDs and versioned primary pages',()=>{
 assert.equal(pack.baseMain,'228cd84230d0eaef8325dad4a94dc81ad8cf5a27');
 assert.equal(pack.status,'source-located-equation-proposal-not-integrated');
 assert.equal(pack.candidateTheory.originYear,null);
 assert.ok(!runtime.QI_DATA.theories.some(t=>t.id===pack.candidateTheory.id));
 assert.equal(pack.formulaCandidates.length,2);
 assert.equal(new Set(pack.formulaCandidates.map(f=>f.id)).size,2);
 assert.match(pack.versionedPrimarySource.url,/1612\.02058v3$/);
 assert.ok(pack.candidateTheory.relatedExistingTheoryIds.every(id=>runtime.QI_DATA.theories.some(t=>t.id===id)));
 for(const f of pack.formulaCandidates){
  assert.ok(!runtime.QI_FORMULAS.formulas.some(x=>x.id===f.id),f.id);
  assert.deepEqual(f.theoryIds,[pack.candidateTheory.id]);
  assert.deepEqual(f.sourceIds,[pack.versionedPrimarySource.id]);
  assert.match(f.sourceLocation.url,/arxiv\.org\/pdf\/1612\.02058v3#page=[23]$/);
  assert.match(f.sourceLocation.locator,/Eq\. \(\d+\)/);
  assert.ok(f.latex.length&&f.plain.length&&f.description.length&&f.regime&&f.units);
  assert.ok(f.assumptions.length>=4&&f.variables.length>=4);
  assert.equal(f.metadataReview,'source-page-reviewed-candidate-only');
 }
 const coverage=JSON.parse(fs.readFileSync('docs/coverage.json','utf8'));
 assert.equal(runtime.QI_DATA.theories.length,coverage.theories);
 assert.equal(runtime.QI_FORMULAS.formulas.length,coverage.formulas);
 assert.match(pack.releaseGates.join(' '),/Chromium\/WebKit/);
});

test('Richardson first-order weights cancel linear noise but not general sample variance',()=>{
 const f=pack.formulaCandidates.find(x=>x.id==='qem-richardson-noise-extrapolation');
 assert.ok(f);
 assert.match(f.latex,/\\gamma_j/);
 const c=[1,2],gamma=[2,-1];
 assert.equal(gamma.reduce((a,b)=>a+b,0),1);
 assert.equal(gamma.reduce((a,g,j)=>a+g*c[j],0),0);
 const expectation=(l)=>0.73+0.31*l+0.08*l*l;
 for(const lambda of [0.1,0.03,0.005]){
  const observed=gamma.reduce((total,g,j)=>total+g*expectation(c[j]*lambda),0);
  assert.ok(Math.abs(observed-(0.73-0.16*lambda*lambda))<1e-12);
  assert.ok(Math.abs(observed-0.73)<Math.abs(expectation(lambda)-0.73));
 }
 assert.match(f.assumptions.join(' '),/dummy.index/);
 assert.match(f.assumptions.join(' '),/shot noise/i);
});

test('quasi-probability signed decomposition preserves a linear target expectation',()=>{
 const f=pack.formulaCandidates.find(x=>x.id==='qem-quasiprobability-ideal-noisy-map');
 assert.ok(f);
 assert.match(f.latex,/\\mathcal U/);
 const eta=[1.1,-0.1],gamma=eta.reduce((a,b)=>a+Math.abs(b),0);
 const p=eta.map(x=>Math.abs(x)/gamma),sign=eta.map(x=>Math.sign(x));
 const noisyExpectation=[0.6,-0.2];
 const result=gamma*p.reduce((sum,pi,i)=>sum+pi*sign[i]*noisyExpectation[i],0);
 const expected=eta.reduce((sum,e,i)=>sum+e*noisyExpectation[i],0);
 assert.ok(Math.abs(result-expected)<1e-12);
 assert.equal(p.reduce((a,b)=>a+b,0),1);
 assert.ok(gamma>=1);
 assert.match(f.assumptions.join(' '),/sample complexity/i);
 assert.match(f.regime,/noise/i);
});
