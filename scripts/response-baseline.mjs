import {projectPreFormulaGaps} from './formula-gaps-baseline.mjs';
// Exact PR100 checkpoint reconstruction for dated historical assertions only.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root=fileURLToPath(new URL('../',import.meta.url));
const ledger=JSON.parse(fs.readFileSync(new URL('../research/RESPONSE_INTEGRITY_2026-10-25.json',import.meta.url)));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
export function projectPreResponse(bytes,relative){
  bytes=projectPreFormulaGaps(bytes,relative);
  const entry=ledger.files[relative];
  if(!entry)return bytes;
  assert.equal(hash(bytes),entry.afterSha256,relative+': undeclared response-audit mutation');
  const before=Buffer.from(entry.beforeText);
  assert.equal(hash(before),entry.beforeSha256,relative+': immutable reviewed PR100 bytes');
  return before;
}
export function readPreResponseFile(file,options){
  const relative=path.relative(root,file instanceof URL?fileURLToPath(file):path.resolve(file));
  const bytes=projectPreResponse(fs.readFileSync(file),relative);
  const encoding=typeof options==='string'?options:options?.encoding;
  return encoding?bytes.toString(encoding):bytes;
}
