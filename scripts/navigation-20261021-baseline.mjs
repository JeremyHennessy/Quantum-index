// Test-only exact-byte reconstruction of the accepted 3530ab3 release.
// Current-runtime tests do not use this historical projection.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root=fileURLToPath(new URL('../',import.meta.url));
const ledger=JSON.parse(fs.readFileSync(new URL('../research/NAVIGATION_INTEGRITY_2026-10-21.json',import.meta.url)));
const hash=b=>createHash('sha256').update(b).digest('hex');
export function projectPreNavigation(bytes,relative){
 const entry=ledger.files[relative];if(!entry)return bytes;
 assert.equal(hash(bytes),entry.afterSha256,relative+': undeclared navigation mutation');
 const before=entry.beforeText===undefined?bytes.subarray(0,entry.beforeLength):Buffer.from(entry.beforeText);
 assert.equal(hash(before),entry.beforeSha256,relative+': immutable accepted-release bytes');return before;
}
export function readPreNavigationFile(file,options){
 const absolute=file instanceof URL?fileURLToPath(file):path.resolve(file);
 const before=projectPreNavigation(fs.readFileSync(file),path.relative(root,absolute));
 const encoding=typeof options==='string'?options:options?.encoding;
 return encoding?before.toString(encoding):before;
}
