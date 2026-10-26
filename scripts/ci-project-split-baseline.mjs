// One fail-closed CI-only outer boundary; runtime and browser assertions are unchanged.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root=fileURLToPath(new URL('../',import.meta.url));
const ledger=JSON.parse(fs.readFileSync(new URL('../research/CI_PROJECT_SPLIT_INTEGRITY_2026-10-26.json',import.meta.url)));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
export function projectPreCiProjectSplit(bytes,relative){
 const entry=ledger.files[relative];if(!entry)return bytes;
 assert.equal(hash(bytes),entry.afterSha256,relative+': undeclared CI project-split mutation');
 const before=Buffer.from(entry.beforeText);assert.equal(hash(before),entry.beforeSha256,relative+': immutable deployed PR102 checkpoint');return before;
}
export function readPreCiProjectSplitFile(file,options){
 const relative=path.relative(root,file instanceof URL?fileURLToPath(file):path.resolve(file));
 const bytes=projectPreCiProjectSplit(fs.readFileSync(file),relative);
 const encoding=typeof options==='string'?options:options?.encoding;return encoding?bytes.toString(encoding):bytes;
}
