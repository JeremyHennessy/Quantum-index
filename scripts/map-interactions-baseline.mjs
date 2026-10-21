// Exact-byte test projection preserving the accepted pre-interaction release.
import fs from 'node:fs';import assert from 'node:assert/strict';import {createHash} from 'node:crypto';
const ledger=JSON.parse(fs.readFileSync(new URL('../research/MAP_INTERACTIONS_INTEGRITY_2026-10-21.json',import.meta.url))),hash=b=>createHash('sha256').update(b).digest('hex');
export function projectPreMapInteractions(bytes,relative){const e=ledger.files[relative];if(!e)return bytes;assert.equal(hash(bytes),e.afterSha256,relative+': undeclared map interaction mutation');const prior=Buffer.from(e.beforeText);assert.equal(hash(prior),e.beforeSha256,relative+': immutable pre-interaction bytes');return prior;}
