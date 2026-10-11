import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const ledger=JSON.parse(fs.readFileSync('research/formula-candidates.json','utf8'));
const sandbox={window:{}};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('formulas.js','utf8'),sandbox,{filename:'formulas.js'});
const formulas=sandbox.window.QI_FORMULAS.formulas;
const byId=new Map(formulas.map(f=>[f.id,f]));

test('formula candidate references resolve to the authoritative shipped formula atlas',()=>{
  assert.equal(byId.size,formulas.length,'duplicate formula IDs');
  assert.equal(ledger.candidates.length,new Set(ledger.candidates.map(x=>x.candidate)).size,'duplicate candidate labels');
  for(const row of ledger.candidates){
    assert.ok(['open','partial','represented'].includes(row.status),row.candidate+' status');
    assert.ok(Array.isArray(row.formulaIds),row.candidate+' formulaIds');
    assert.equal(row.formulaIds.length,new Set(row.formulaIds).size,row.candidate+' duplicate links');
    if(row.status!=='open')assert.ok(row.formulaIds.length>0,row.candidate+' missing partial/represented links');
    for(const id of row.formulaIds)assert.ok(byId.has(id),row.candidate+' links absent formula '+id);
  }
});

test('candidate classifications remain scope labels, not a claim that all formulas are reviewed',()=>{
  assert.equal(ledger.candidates.length,50);
  const counts=Object.fromEntries(['open','partial','represented'].map(status=>[status,ledger.candidates.filter(x=>x.status===status).length]));
  assert.deepEqual(counts,{open:22,partial:13,represented:15});
  assert.ok(formulas.some(f=>f.metadataReview==='baseline-audit-v1'));
});
