// DM-1A outer reconstruction: restore the exact approved main state before all legacy checkpoint projections.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {reverseDeclaredUiRevision} from './ui-revision-checkpoint.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const ledger=JSON.parse(fs.readFileSync(new URL('../research/DM1A_INTEGRATION_INTEGRITY_2026-10-29.json',import.meta.url)));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
// Outer, exact-hash review candidate. Does not modify previous source ledgers.
const uiCandidate=JSON.parse(fs.readFileSync(new URL('../research/UI_FIRST_FOLD_CANDIDATE_INTEGRITY_2026-10-30.json',import.meta.url)));


export function projectPreDm1a(bytes,relative){
 bytes=reverseDeclaredUiRevision(bytes,relative,uiCandidate);
 bytes=Buffer.isBuffer(bytes)?bytes:Buffer.from(bytes);
 const entry=ledger.files[relative];
 if(!entry)return bytes;
 const got=hash(bytes);
 // Historical tests deliberately feed an already-projector-restored file; accept ONLY the exact known old hash.
 if(got===entry.beforeSha256)return bytes;
 assert.equal(got,entry.afterSha256,relative+': undeclared DM-1A integration mutation');
 if(entry.kind==='append'){
  const suffix=Buffer.from(entry.appendText,'utf8');
  assert.ok(bytes.subarray(bytes.length-suffix.length).equals(suffix),relative+': unexpected DM-1A suffix');
  const before=Buffer.from(bytes.subarray(0,bytes.length-suffix.length));
  assert.equal(hash(before),entry.beforeSha256,relative+': immutable approved source bytes');
  return before;
 }
 assert.equal(entry.kind,'replace');
 const before=Buffer.from(entry.beforeText,'utf8');
 assert.equal(hash(before),entry.beforeSha256,relative+': immutable approved original bytes');
 return before;
}
export function readPreDm1aFile(file,options){
 const relative=path.relative(root,file instanceof URL?fileURLToPath(file):path.resolve(file));
 const bytes=projectPreDm1a(fs.readFileSync(file),relative);
 const encoding=typeof options==='string'?options:options?.encoding;
 return encoding?bytes.toString(encoding):bytes;
}
