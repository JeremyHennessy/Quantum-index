// Test-only, exact-state guard/bridge for earlier immutable scientific checkpoints.
// Requires the current FOUR edges and added source to equal the audited release;
// rejects undeclared edits before reconstructing the prior runtime for old tests.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
export const relationLedger=JSON.parse(fs.readFileSync(new URL('../docs/RELATION_PROMOTIONS_2026-10-07.json',import.meta.url),'utf8'));
const canonical=v=>Array.isArray(v)?v.map(canonical):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,canonical(v[k])])):v;
const signature=x=>createHash('sha256').update(JSON.stringify(canonical(x))).digest('hex');
const key=x=>`${x.from}|${x.to}|${x.type}`;
export function priorRelations(current){
  assert.equal(current.length,relationLedger.before.relations);
  const edited=new Map(relationLedger.updates.map(u=>[key(u.new),u]));
  const original=current.map(row=>{
    const u=edited.get(key(row));
    if(!u)return row;
    assert.equal(signature(row),signature({...u.prior,...u.new}),key(row)+': unexpected post-review change');
    assert.equal(signature(u.prior),signature({...u.prior}),key(row)+': corrupt original snapshot');
    return structuredClone(u.prior);
  });
  for(const item of relationLedger.updates)assert.equal(current.filter(r=>key(r)===key(item.new)).length,1,key(item.new));
  assert.equal(createHash('sha256').update(JSON.stringify(original)).digest('hex'),relationLedger.before.relationsSha256,'complete prior edge fingerprint');
  return original;
}
export function priorSources(current){
  const id=relationLedger.newSource.id;
  const matching=current.filter(s=>s.id===id);
  assert.equal(matching.length,1,`expected exactly one ${id}`);
  assert.equal(signature(matching[0]),signature(relationLedger.newSource),'registered paper differs from review');
  const original=current.filter(s=>s.id!==id);
  assert.equal(createHash('sha256').update(JSON.stringify(original)).digest('hex'),relationLedger.before.sourcesSha256,'complete prior source fingerprint');
  return original;
}
export function verifyFileTransition(path,previousExpected){
  const t=relationLedger.fileTransition;
  assert.equal(path,t.path);
  assert.equal(t.priorSha256,previousExpected,'historical source-file hash chain diverged');
  assert.equal(createHash('sha256').update(fs.readFileSync(path)).digest('hex'),t.afterSha256,'reviewed source file changed unexpectedly');
}
