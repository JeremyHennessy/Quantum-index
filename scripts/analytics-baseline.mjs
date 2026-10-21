// Fail-closed reconstruction of the accepted pre-analytics presentation.
import fs from 'node:fs';import assert from 'node:assert/strict';import {createHash} from 'node:crypto';
const ledger=JSON.parse(fs.readFileSync(new URL('../research/ANALYTICS_QA_INTEGRITY_2026-10-21.json',import.meta.url))),hash=b=>createHash('sha256').update(b).digest('hex');
export function projectPreAnalytics(bytes,relative){const entry=ledger.files[relative];if(!entry)return bytes;assert.equal(hash(bytes),entry.afterSha256,relative+': undeclared analytics presentation mutation');const prior=Buffer.from(entry.beforeText);assert.equal(hash(prior),entry.beforeSha256,relative+': immutable pre-analytics bytes');return prior;}
