import {projectPreResponse} from './response-baseline.mjs';
// Exact accepted-PR99 reconstruction for dated historical assertions only.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root=fileURLToPath(new URL('../',import.meta.url));
const ledger=JSON.parse(fs.readFileSync(new URL('../research/THERMAL_INTEGRITY_2026-10-25.json',import.meta.url)));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
export function projectPreThermal(bytes,relative){
  bytes=projectPreResponse(bytes,relative);
  const entry=ledger.files[relative];
  if(!entry)return bytes;
  assert.equal(hash(bytes),entry.afterSha256,relative+': undeclared thermodynamics-audit mutation');
  const before=Buffer.from(entry.beforeText);
  assert.equal(hash(before),entry.beforeSha256,relative+': immutable accepted PR99 bytes');
  return before;
}
export function readPreThermalFile(file,options){
  const relative=path.relative(root,file instanceof URL?fileURLToPath(file):path.resolve(file));
  const bytes=projectPreThermal(fs.readFileSync(file),relative);
  const encoding=typeof options==='string'?options:options?.encoding;
  return encoding?bytes.toString(encoding):bytes;
}
