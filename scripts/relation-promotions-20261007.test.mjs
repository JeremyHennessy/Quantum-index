import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {multidomainReview,priorDepthSources,verifyDepthFileSha256} from './multidomain-depth-baseline.mjs';
import {priorNewRelations} from './relation-promotions-20261008-baseline.mjs';
const ledger=JSON.parse(fs.readFileSync('docs/RELATION_PROMOTIONS_2026-10-07.json','utf8'));
const sandbox={window:{}};vm.createContext(sandbox);
for(const file of ['theories.js','developments.js','evidence.js','formulas.js','formula-audit.js','profiles.js']) vm.runInContext(fs.readFileSync(file,'utf8'),sandbox);
const data=sandbox.window.QI_DATA;
const stable = o => JSON.stringify(o);
const digest = o => createHash('sha256').update(stable(o)).digest('hex');
const ids=(r)=>`${r.from}|${r.to}|${r.type}`;
test('selected directional relations have the audited source-specific proof and exact prior identities',()=>{
  assert.equal(ledger.baselineCommit,'f186171c405c0a7ab1461d250cb1800531808982');
  assert.equal(ledger.updates.length,4);
  for(const {prior,new:current} of ledger.updates){
    const matches=data.relations.filter(r=>ids(r)===ids(current));
    assert.equal(matches.length,1,ids(current));
    const row=matches[0];
    assert.equal(row.note,prior.note);
    for(const key of ['from','to','type']) assert.equal(row[key],prior[key]);
    for(const [k,v] of Object.entries(current))assert.equal(stable(row[k]),stable(v),`${ids(current)} ${k}`);
    for(const source of current.sourceIds)assert.ok(data.sources.some(s=>s.id===source),source);
    assert.ok(row.evidenceNote.length>80 && row.sourceLocator.length>50);
    assert.ok(['high','medium'].includes(row.confidence));
  }
});
test('every prior relationship except the four audited promotions is byte-for-byte restored',()=>{
  const oldRelations=priorNewRelations(data.relations).map(x=>{
    const prior=ledger.updates.find(u=>ids(u.prior)===ids(x));
    return prior?prior.prior:x;
  });
  assert.equal(data.relations.length,610);
  assert.equal(digest(oldRelations),ledger.before.relationsSha256);
  const oldSources=priorDepthSources(data.sources).filter(s=>s.id!==ledger.newSource.id);
  assert.equal(oldSources.length,ledger.before.sources);
  assert.equal(digest(oldSources),ledger.before.sourcesSha256);
  assert.deepEqual(JSON.parse(stable(data.sources.find(s=>s.id===ledger.newSource.id))),ledger.newSource);
});
test('new count changes exactly match four promotions and one new primary paper',()=>{
  assert.equal(data.sources.length,543+multidomainReview.addedSourceIds.length);
  const old=priorNewRelations(data.relations);
  assert.equal(old.filter(r=>r.sourceIds.length).length,122);
  assert.equal(old.filter(r=>r.confidence==='editorial').length,488);
  assert.equal(old.filter(r=>r.confidence==='high').length,101);
  assert.equal(old.filter(r=>r.confidence==='medium').length,21);
  assert.equal(data.theories.length,481);
});
test('approved presentation/workspace/formula/other source files remain byte-identical',()=>{
  for(const [path,expected] of Object.entries(ledger.untouchedFileHashes)){
    verifyDepthFileSha256(path,expected);
  }
});
test('evidence notes prohibit unsupported universal equivalences',()=>{
  const notes=ledger.updates.map(x=>x.new.evidenceNote).join(' ');
  assert.match(notes,/truncations need not be exact/);
  assert.match(notes,/not completeness for arbitrary quantum processes/);
  assert.match(notes,/not an assertion that every CFT is solved/);
  assert.match(notes,/not a claim that MERA formally subsumes every MPS/);
});

import {priorRelations,priorSources} from './relation-review-baseline.mjs';
test('historical proof bridge rejects tampering with promoted or untouched edges and the registered paper',()=>{
  const modified=JSON.parse(JSON.stringify(data.relations));
  modified.find(r=>r.from==='renormalization-group'&&r.to==='functional-rg').evidenceNote+=' unsupported addition';
  assert.throws(()=>priorRelations(modified),/unexpected post-review change/);
  const other=JSON.parse(JSON.stringify(data.relations));
  other.find(r=>r.from==='qed'&&r.to==='aqft').note+=' editorial contamination';
  assert.throws(()=>priorRelations(other),/complete prior edge fingerprint/);
  const sources=JSON.parse(JSON.stringify(data.sources));
  sources.find(s=>s.id==='evenbly-vidal-tn-geometry-2011').url='https://example.invalid';
  assert.throws(()=>priorSources(sources),/registered paper differs/);
});
