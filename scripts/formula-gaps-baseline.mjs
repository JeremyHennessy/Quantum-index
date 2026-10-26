import {projectPreCiProjectSplit} from './ci-project-split-baseline.mjs';
// Exact draft-PR101 checkpoint reconstruction for historical assertions only.
// Serial boundary: current -> pre-gaps (PR101) -> pre-response (PR100) -> pre-thermal.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root=fileURLToPath(new URL('../',import.meta.url));
const ledger=JSON.parse(fs.readFileSync(new URL('../research/FORMULA_GAPS_INTEGRITY_2026-10-26.json',import.meta.url)));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
export function projectPreFormulaGaps(bytes,relative){
  bytes=projectPreCiProjectSplit(bytes,relative);
  const entry=ledger.files[relative];
  if(!entry)return bytes;
  assert.equal(hash(bytes),entry.afterSha256,relative+': undeclared formula-gap integration mutation');
  const before=Buffer.from(entry.beforeText);
  assert.equal(hash(before),entry.beforeSha256,relative+': immutable draft PR101 bytes');
  return before;
}
export function readPreFormulaGapsFile(file,options){
  const relative=path.relative(root,file instanceof URL?fileURLToPath(file):path.resolve(file));
  const bytes=projectPreFormulaGaps(fs.readFileSync(file),relative);
  const encoding=typeof options==='string'?options:options?.encoding;
  return encoding?bytes.toString(encoding):bytes;
}
