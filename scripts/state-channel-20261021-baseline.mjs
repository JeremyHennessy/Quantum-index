import {projectPreRepositoryLinks} from './repository-links-baseline.mjs';
// Test-only reconstruction of accepted 369ab856 bytes. Live tests load actual data.
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';import assert from 'node:assert/strict';import {createHash} from 'node:crypto';
const root=fileURLToPath(new URL('../',import.meta.url));
const ledger=JSON.parse(fs.readFileSync(new URL('../research/STATE_CHANNEL_INTEGRITY_2026-10-21.json',import.meta.url)));
const hash=b=>createHash('sha256').update(b).digest('hex');
export function projectPreStateChannel(bytes,relative){
 bytes=projectPreRepositoryLinks(bytes,relative);
 const e=ledger.files[relative];if(!e)return bytes;
 assert.equal(hash(bytes),e.afterSha256,relative+': undeclared state/channel mutation');
 const before=e.beforeText===undefined?bytes.subarray(0,e.beforeLength):Buffer.from(e.beforeText);
 assert.equal(hash(before),e.beforeSha256,relative+': immutable accepted-release bytes');return before;
}
export function readPreStateChannelFile(file,options){
 const relative=path.relative(root,file instanceof URL?fileURLToPath(file):path.resolve(file));
 const b=projectPreStateChannel(fs.readFileSync(file),relative),enc=typeof options==='string'?options:options?.encoding;return enc?b.toString(enc):b;
}
