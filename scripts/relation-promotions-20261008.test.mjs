import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {promotionLedger,priorNewRelations,stripNewTheoryAppend} from './relation-promotions-20261008-baseline.mjs';
import {priorRelations} from './relation-review-baseline.mjs';
import {shortestDocumentedPath} from './sourced-paths.mjs';

const sandbox={window:{}};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('theories.js','utf8'),sandbox);
const data=sandbox.window.QI_DATA;
const key=x=>[x.from,x.to,x.type].join('|');
const hash=x=>createHash('sha256').update(x).digest('hex');
const plain=x=>JSON.parse(JSON.stringify(x));

test('new batch changes only three declared editorial edges and preserves all 610 prior identities',()=>{
  const ledger=promotionLedger;
  assert.equal(ledger.baselineCommit,'5679138652bd24a7c52b31558205d19b7cecbbc0');
  assert.equal(ledger.updates.length,3);
  assert.equal(new Set(ledger.updates.map(x=>key(x.new))).size,3);
  const previous=priorNewRelations(data.relations);
  assert.equal(previous.length,ledger.before.relations);
  assert.equal(data.relations.length,ledger.after.relations);
  assert.equal(data.sources.length,ledger.after.sources);
  assert.equal(data.relations.filter(x=>x.sourceIds.length).length,ledger.after.sourcedRelations);
  assert.equal(data.relations.filter(x=>x.confidence==='editorial').length,ledger.after.editorialRelations);
  assert.equal(data.relations.filter(x=>x.confidence==='high').length,ledger.after.highConfidenceRelations);
  assert.equal(data.relations.filter(x=>x.confidence==='medium').length,ledger.after.mediumConfidenceRelations);
  assert.deepEqual(data.relations.map(key),previous.map(key));
  for(const {prior,new:next} of ledger.updates){
    const now=data.relations.find(x=>key(x)===key(next));
    const old=previous.find(x=>key(x)===key(prior));
    assert.deepEqual(plain(old),prior,key(prior)+': original fields');
    assert.deepEqual(plain(now),next,key(next)+': audited promotion');
    assert.equal(now.note,old.note);
    assert.ok(now.evidenceNote.length>=120);
    assert.ok(now.sourceLocator.length>=45);
    for(const id of now.sourceIds)assert.equal(data.sources.filter(s=>s.id===id).length,1,id);
  }
});

test('immutable old scientific release is reconstructed and all earlier fingerprints remain authoritative',()=>{
  assert.equal(hash(stripNewTheoryAppend(fs.readFileSync('theories.js'))),promotionLedger.fileTransition.beforeSha256);
  assert.equal(hash(fs.readFileSync('theories.js')),promotionLedger.fileTransition.afterSha256);
  assert.equal(priorRelations(data.relations).length,610);
  const altered=plain(data.relations);
  altered.find(x=>x.from==='quantum-rabi-model'&&x.to==='jaynes-cummings').evidenceNote+=' unsupported';
  assert.throws(()=>priorNewRelations(altered),/unexpected 2026-10-08 relation edit/);
  const other=plain(data.relations);
  other.find(x=>x.from==='qed'&&x.to==='aqft').note+=' contamination';
  assert.throws(()=>priorRelations(other),/complete prior edge fingerprint/);
});

test('newly promoted directional edges become traversable with attached bibliography but not reverse implications',()=>{
  for(const {new:edge} of promotionLedger.updates){
    const path=shortestDocumentedPath(data,edge.from,edge.to,{maxHops:1});
    assert.equal(path.found,true,key(edge));
    assert.equal(path.hops,1,key(edge));
    assert.equal(path.edges[0].type,edge.type,key(edge));
    assert.deepEqual(path.edges[0].sourceIds,edge.sourceIds,key(edge));
    assert.ok(path.edges[0].sources.every(x=>x.url.startsWith('https://')));
  }
});
