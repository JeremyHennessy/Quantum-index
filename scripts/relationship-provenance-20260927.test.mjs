import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const sandbox={window:{}};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('theories.js','utf8'),sandbox);
const relations=sandbox.window.QI_DATA.relations;
const sourceIds=new Set(sandbox.window.QI_DATA.sources.map(s=>s.id));

const expected=[
  ['quantum-chaos','eigenstate-thermalization','supports','wave3-eth-review-2016','documented historical influence','medium'],
  ['decoherence','quantum-darwinism','extends','zurek-darwinism','documented historical influence','medium'],
  ['causal-sets','causal-set-growth','extends','rideout-sorkin-1999','formal mathematical relation','high'],
  ['effective-field-theory','gravity-effective-field-theory','extends','donoghue-gravity-eft-1994','formal mathematical relation','high']
];

test('high-value relationship promotions carry direct evidence metadata',()=>{
  for(const [from,to,type,sourceId,evidenceType,confidence] of expected){
    const r=relations.find(x=>x.from===from&&x.to===to&&x.type===type);
    assert.ok(r,from+' -> '+to);
    assert.ok(r.sourceIds.includes(sourceId),sourceId);
    assert.ok(sourceIds.has(sourceId),sourceId);
    assert.equal(r.evidenceType,evidenceType);
    assert.equal(r.confidence,confidence);
    assert.equal(r.reviewedAt,'2026-09-27');
    assert.ok(r.sourceLocator?.length>20);
    assert.ok(r.evidenceNote?.length>60);
  }
});

test('relationship evidence totals include later source-backed promotions',()=>{
  assert.equal(relations.length,610);
  assert.equal(relations.filter(r=>r.sourceIds.length).length,118);
  assert.equal(relations.filter(r=>r.confidence==='editorial').length,492);
  assert.equal(relations.filter(r=>r.confidence==='high').length,98);
  assert.equal(relations.filter(r=>r.confidence==='medium').length,20);
});
