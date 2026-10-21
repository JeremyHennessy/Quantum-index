import {readPreCampaignFile} from './campaign-20261021-baseline.mjs';
// Test-only checkpoint reconstruction of the 2026-10-16 QEC formula review.
// Original October 14 bytes are checked against their approved Git blob SHA before
// reconstructing any historical formula. Never loaded by the application.
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const originalBlob='85b049b3cad6584774f40fba465ec7b038fde422';
const marker='// 2026-10-16 QEC original-source qualification.';
function blobSha(bytes){
 return createHash('sha1').update(Buffer.from('blob '+bytes.length+'\0')).update(bytes).digest('hex');
}
const file=readPreCampaignFile(new URL('../formulas.js',import.meta.url));
const at=file.indexOf(Buffer.from(marker));
assert.ok(at>0,'QEC append marker absent');
assert.equal(file.indexOf(Buffer.from(marker),at+marker.length),-1,'duplicate QEC append');
const prefix=file.subarray(0,at),candidates=[prefix];
for(let n=1;n<=4&&prefix.length>=n;n++){
 const suffix=prefix.subarray(prefix.length-n);
 if(suffix.every(ch=>ch===10||ch===13))candidates.push(prefix.subarray(0,prefix.length-n));
}
const approved=candidates.find(b=>blobSha(b)===originalBlob);
assert.ok(approved,'QEC formula pre-review bytes differ from approved October 14 blob');
const sandbox={window:{}};vm.createContext(sandbox);
vm.runInContext(approved.toString('utf8'),sandbox,{filename:'approved-formulas.js'});
const before=sandbox.window.QI_FORMULAS.formulas.find(f=>f.id==='knill-laflamme');
assert.ok(before,'missing QEC formula from approved baseline');
const allowedChanges=new Set(['description','sourceIds','assumptions','variables','regime','units','theoryRelationship','metadataReview','reviewedAt','curationBatch','sourceLocations']);
export function restoreQecFormula(formula){
 if(formula.id!=='knill-laflamme')return formula;
 const originalKeys=Object.keys(before);
 for(const key of originalKeys){
   if(allowedChanges.has(key))continue;
   assert.equal(JSON.stringify(formula[key]),JSON.stringify(before[key]),
     'Unreviewed QEC formula field changed: '+key);
 }
 for(const key of Object.keys(formula)){
   assert.ok(originalKeys.includes(key)||allowedChanges.has(key),
     'Unexpected new QEC formula field: '+key);
 }
 assert.equal(formula.metadataReview,'explicit');
 assert.equal(formula.curationBatch,'qec-original-source-2026-10-16');
 assert.deepEqual(Array.from(formula.sourceIds),
   ['knill-laflamme-1997','kitaev-anyons-2003','schumacher-1995']);
 assert.equal(formula.sourceLocations?.length,1);
 assert.equal(formula.sourceLocations[0].sourceId,'knill-laflamme-1997');
 assert.match(formula.sourceLocations[0].locator,/Theorem 3.2.*19.*20/);
 assert.match(formula.regime,/Exact quantum subspace error correction/);
 return structuredClone(before);
}
