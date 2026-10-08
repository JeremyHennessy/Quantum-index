// Test-only bridge: reconstruct the exact pre-2026-10-08 relationship state.
// This does not change runtime or weaken the 2026-09-26/27/10-07 release fingerprints.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';

export const promotionLedger=JSON.parse(fs.readFileSync(new URL('../docs/RELATION_PROMOTIONS_2026-10-08.json',import.meta.url),'utf8'));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const sig=x=>hash(JSON.stringify(canonical(x)));
const key=x=>[x.from,x.to,x.type].join('|');

export function stripNewTheoryAppend(bytes){
  const t=promotionLedger.fileTransition;
  assert.equal(t.path,'theories.js');
  const marker=Buffer.from(promotionLedger.marker);
  assert.equal(hash(bytes),t.afterSha256,'promoted theory file differs from exact audited release');
  const at=bytes.indexOf(marker);
  assert.ok(at>0,'new relation append marker missing');
  assert.equal(bytes.indexOf(marker,at+marker.length),-1,'duplicate relation append marker');
  // The new batch starts after exactly two newlines; reconstruct prior bytes.
  const old=bytes.subarray(0,at-2);
  assert.equal(bytes[at-2],10,'missing append separator');
  assert.equal(bytes[at-1],10,'missing append separator');
  assert.equal(hash(old),t.beforeSha256,'prior theories.js bytes differ from approved baseline');
  return old;
}

export function priorNewRelations(current){
  assert.equal(current.length,promotionLedger.before.relations,'relationship count changed');
  const updated=new Map(promotionLedger.updates.map(u=>[key(u.new),u]));
  assert.equal(updated.size,promotionLedger.updates.length,'duplicate reviewed edge');
  const result=current.map(row=>{
    const u=updated.get(key(row));
    if(!u)return row;
    assert.equal(sig(row),sig({...u.prior,...u.new}),key(row)+': unexpected 2026-10-08 relation edit');
    return structuredClone(u.prior);
  });
  for(const u of promotionLedger.updates){
    assert.equal(current.filter(r=>key(r)===key(u.new)).length,1,key(u.new));
    assert.equal(u.prior.confidence,'editorial');
    assert.deepEqual(u.prior.sourceIds,[]);
  }
  assert.equal(result.filter(r=>r.sourceIds.length).length,promotionLedger.before.sourcedRelations);
  assert.equal(result.filter(r=>r.confidence==='editorial').length,promotionLedger.before.editorialRelations);
  return result;
}
