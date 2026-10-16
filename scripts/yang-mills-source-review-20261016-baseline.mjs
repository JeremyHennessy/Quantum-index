// Historical Yang–Mills source-review reconstruction. Test-only, never browser loaded.
// Each production source blob is protected by the exact prior approved main Git SHA.
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';

export const yangMillsMarker={
  "theories.js":"// 2026-10-16 Yang-Mills modern notation source (scientific completeness campaign).",
  "formulas.js":"// 2026-10-16 Yang-Mills independently checked convention metadata.",
  "passports.js":"// 2026-10-16 Yang-Mills independent original/modern source Passport."
};
export const beforeBlob={
  "theories.js":"1bd23e3351fb5fdab7f53b5d7c2251fd3f132c45",
  "formulas.js":"bbd48b3719e1dc026d910753a91ad3f0542e5e75",
  "passports.js":"fc6ced57e7044982e54dd542dbf18fbc949bbd16"
};
const blobHash=buf=>createHash('sha1').update(Buffer.from('blob '+buf.length+'\0')).update(buf).digest('hex');
export function beforeYangMillsBytes(path){
 const current=fs.readFileSync(new URL('../'+path,import.meta.url));
 const marker=Buffer.from(yangMillsMarker[path]||'');
 assert.ok(marker.length,path+': missing marker declaration');
 const at=current.indexOf(marker);
 assert.ok(at>0,path+': missing Yang-Mills append marker');
 assert.equal(current.indexOf(marker,at+marker.length),-1,path+': duplicate append marker');
 const prefix=current.subarray(0,at),candidates=[prefix];
 for(let n=1;n<=4&&prefix.length>=n;n++)if(prefix.subarray(prefix.length-n).every(b=>b===10||b===13))candidates.push(prefix.subarray(0,prefix.length-n));
 const original=candidates.find(buf=>blobHash(buf)===beforeBlob[path]);
 assert.ok(original,path+': approved baseline bytes changed');
 return original;
}
const sandbox={window:{}};vm.createContext(sandbox);
vm.runInContext(beforeYangMillsBytes('formulas.js').toString('utf8'),sandbox,{filename:'formulas-approved-before-YM.js'});
const old=new Map(sandbox.window.QI_FORMULAS.formulas.filter(x=>x.id==='yang-mills-field'||x.id==='yang-mills-lagrangian').map(x=>[x.id,x]));
assert.equal(old.size,2);
const editable=new Set(['description','sourceIds','assumptions','variables','regime','units','theoryRelationship','metadataReview','reviewedAt','curationBatch','sourceLocations']);
export function restoreYangMillsFormula(formula){
 const was=old.get(formula.id);if(!was)return formula;
 for(const key of Object.keys(was))if(!editable.has(key))
  assert.equal(JSON.stringify(formula[key]),JSON.stringify(was[key]),formula.id+': unapproved original field '+key);
 for(const key of Object.keys(formula))assert.ok(Object.hasOwn(was,key)||editable.has(key),formula.id+': unexpected metadata field '+key);
 assert.equal(formula.metadataReview,'explicit');
 assert.equal(formula.curationBatch,'yang-mills-sign-source-review-2026-10-16');
 assert.deepEqual(Array.from(formula.sourceIds),['yang-mills-1954','usp-nonabelian-gauge-lecture15']);
 assert.equal(formula.sourceLocations?.length,2);
 assert.ok(formula.sourceLocations.some(l=>l.sourceId==='yang-mills-1954'&&/1954|Yang and Mills/.test(l.locator)));
 assert.ok(formula.sourceLocations.some(l=>l.sourceId==='usp-nonabelian-gauge-lecture15'&&/15\./.test(l.locator)));
 assert.match(formula.assumptions.join(' '),/D_mu=partial_mu-ig A_mu|D_mu=partial_mu - i g A_mu|D_mu=partial_mu-ig A_mu/);
 return structuredClone(was);
}
export function priorYangMillsSources(current){
 const rows=current.filter(s=>s.id==='usp-nonabelian-gauge-lecture15');
 assert.equal(rows.length,1,'expected single new lecture source');
 const s=rows[0];
 assert.equal(s.title,'Lecture 15: Non Abelian Gauge Symmetries');
 assert.equal(s.type,'authoritative lecture notes');
 assert.equal(s.url,'https://fma.if.usp.br/~burdman/QFT2/lecture_15.pdf');
 return current.filter(s=>s.id!=='usp-nonabelian-gauge-lecture15');
}
