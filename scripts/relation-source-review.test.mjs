import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const ledger=JSON.parse(fs.readFileSync('research/RELATION_SOURCE_REVIEW_2026-10-08.json','utf8'));
const sandbox={window:{}};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('theories.js','utf8'),sandbox);
const {theories,relations,sources}=sandbox.window.QI_DATA;
const key=x=>[x.from,x.to,x.type].join('|');

test('research-only relation review is bounded and does not silently relabel production edges',()=>{
  assert.equal(ledger.status,'reviewed-not-promoted');
  assert.equal(ledger.baselineCommit,'b8827b151d46a7332e062e76a36ab6271d621c46');
  assert.equal(theories.length,ledger.expectedBefore.theories);
  assert.equal(relations.length,ledger.expectedBefore.relations);
  assert.equal(relations.filter(r=>r.sourceIds.length>0).length,ledger.expectedBefore.sourcedRelations);
  assert.equal(relations.filter(r=>r.confidence==='editorial').length,ledger.expectedBefore.editorialRelations);
  assert.equal(ledger.candidates.length,4);
  assert.equal(new Set(ledger.candidates.map(key)).size,ledger.candidates.length);
  assert.equal(ledger.expectedIfPromoted.sourcedRelations-ledger.expectedBefore.sourcedRelations,ledger.candidates.length);
  assert.equal(ledger.expectedIfPromoted.editorialRelations-ledger.expectedBefore.editorialRelations,-ledger.candidates.length);
  for(const candidate of ledger.candidates){
    const matches=relations.filter(r=>key(r)===key(candidate));
    assert.equal(matches.length,1,key(candidate));
    const edge=matches[0];
    assert.deepEqual(Array.from(edge.sourceIds),[],key(candidate));
    assert.equal(edge.confidence,'editorial',key(candidate));
    assert.equal(edge.evidenceType,'editorial relation',key(candidate));
    assert.ok(!edge.evidenceNote,key(candidate));
    assert.ok(['high','medium'].includes(candidate.proposedConfidence),key(candidate));
    assert.equal(candidate.evidenceType,'formal mathematical relation');
    assert.ok(candidate.sourceLocator.length>=45 && candidate.evidenceNote.length>=120,key(candidate));
    assert.ok(candidate.limitations.length>=2,key(candidate));
    for(const id of candidate.sourceIds){
      const src=sources.filter(s=>s.id===id);
      assert.equal(src.length,1,'missing/duplicate source: '+id);
      assert.equal(src[0].url,candidate.sourceUrl,id);
    }
  }
});

test('already sourced and held edges are not promoted or double counted',()=>{
  for(const old of ledger.alreadySourced){
    assert.ok(!ledger.candidates.some(x=>key(x)===key(old)),key(old));
    const matches=relations.filter(r=>key(r)===key(old));
    assert.equal(matches.length,1,key(old));
    assert.ok(matches[0].sourceIds.includes(old.sourceId));
    assert.equal(matches[0].reviewedAt,old.reviewedAt);
  }
  for(const held of ledger.held){
    assert.ok(!ledger.candidates.some(x=>key(x)===key(held)),key(held));
    assert.ok(held.reason.length>40);
  }
});
