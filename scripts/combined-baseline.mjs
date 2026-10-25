import {projectPreThermal} from './thermal-baseline.mjs';
// Exact accepted-PR98 byte reconstruction for historical assertions only.
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';import assert from 'node:assert/strict';import {createHash} from 'node:crypto';
const root=fileURLToPath(new URL('../',import.meta.url)),ledger=JSON.parse(fs.readFileSync(new URL('../research/COMBINED_INTEGRITY_2026-10-22.json',import.meta.url))),hash=b=>createHash('sha256').update(b).digest('hex');
const ciLedger=JSON.parse(fs.readFileSync(new URL('../research/CI_ENVIRONMENT_INTEGRITY_2026-10-22.json',import.meta.url)));
// Explicit, fail-closed CI-only projection; scientific checkpoint bytes remain independently checked.
export function projectPreCiEnvironment(bytes,relative){bytes=projectPreThermal(bytes,relative);const e=ciLedger.files[relative];if(!e)return bytes;assert.equal(hash(bytes),e.afterSha256,relative+': undeclared CI environment mutation');const before=Buffer.from(e.beforeText);assert.equal(hash(before),e.beforeSha256,relative+': immutable reviewed PR99 bytes');return before;}
export function projectPreCombined(bytes,relative){bytes=projectPreCiEnvironment(bytes,relative);const e=ledger.files[relative];if(!e)return bytes;assert.equal(hash(bytes),e.afterSha256,relative+': undeclared combined mutation');const before=Buffer.from(e.beforeText);assert.equal(hash(before),e.beforeSha256,relative+': immutable accepted bytes');return before;}
export function readPreCombinedFile(file,options){const relative=path.relative(root,file instanceof URL?fileURLToPath(file):path.resolve(file)),bytes=projectPreCombined(fs.readFileSync(file),relative),enc=typeof options==='string'?options:options?.encoding;return enc?bytes.toString(enc):bytes;}
