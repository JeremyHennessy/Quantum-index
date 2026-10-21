// Test-only exact-byte projection to the accepted a11db4e5 release.
// Current-runtime tests load normal files and assert this batch's allowed changes.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root=fileURLToPath(new URL('../',import.meta.url));
const ledger=JSON.parse(fs.readFileSync(new URL('../research/OPEN_SYSTEM_INTEGRITY_2026-10-21.json',import.meta.url)));
const hash=b=>createHash('sha256').update(b).digest('hex');
export function projectPreOpenSystem(bytes,relative){
 const entry=ledger.files[relative];if(!entry)return bytes;
 assert.equal(hash(bytes),entry.afterSha256,relative+': undeclared open-system mutation');
 const before=entry.beforeText===undefined?bytes.subarray(0,entry.beforeLength):Buffer.from(entry.beforeText);
 assert.equal(hash(before),entry.beforeSha256,relative+': immutable accepted-release bytes');return before;
}
export function readPreOpenSystemFile(file,options){
 const absolute=file instanceof URL?fileURLToPath(file):path.resolve(file);
 const bytes=projectPreOpenSystem(fs.readFileSync(file),path.relative(root,absolute));
 const encoding=typeof options==='string'?options:options?.encoding;
 return encoding?bytes.toString(encoding):bytes;
}
