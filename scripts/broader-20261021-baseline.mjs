// Explicit historical-file projection for dated checkpoint suites only.
// Generic schema, catalog, navigation and campaign tests use the full runtime.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root=fileURLToPath(new URL('../',import.meta.url));
const ledger=JSON.parse(fs.readFileSync(new URL('../research/BROADER_INTEGRITY_2026-10-21.json',import.meta.url)));
const hash=b=>createHash('sha256').update(b).digest('hex');
export function readPreBroaderFile(file,options){
 const absolute=file instanceof URL?fileURLToPath(file):path.resolve(file);
 const relative=path.relative(root,absolute);
 const entry=ledger.files[relative];
 if(!entry)return fs.readFileSync(file,options);
 const bytes=fs.readFileSync(file);
 assert.equal(hash(bytes),entry.afterSha256,relative+': undeclared broader file mutation');
 const before=entry.beforeText===undefined?bytes.subarray(0,entry.beforeLength):Buffer.from(entry.beforeText);
 assert.equal(hash(before),entry.beforeSha256,relative+': immutable pre-broader bytes');
 const encoding=typeof options==='string'?options:options?.encoding;
 return encoding?before.toString(encoding):before;
}
