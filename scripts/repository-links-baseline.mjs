import {projectPreMapInteractions} from './map-interactions-baseline.mjs';
// Test-only exact reconstruction of the accepted pre-presentation release.
import fs from 'node:fs';import assert from 'node:assert/strict';import {createHash} from 'node:crypto';
const ledger=JSON.parse(fs.readFileSync(new URL('../research/REPOSITORY_LINKS_INTEGRITY_2026-10-21.json',import.meta.url)));
const hash=b=>createHash('sha256').update(b).digest('hex');
export function projectPreRepositoryLinks(bytes,relative){bytes=projectPreMapInteractions(bytes,relative);const e=ledger.files[relative];if(!e)return bytes;assert.equal(hash(bytes),e.afterSha256,relative+': undeclared presentation mutation');const prior=Buffer.from(e.beforeText);assert.equal(hash(prior),e.beforeSha256,relative+': immutable previous bytes');return prior;}
