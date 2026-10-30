import {projectPreDm1a} from './dm1a-integration-baseline.mjs';
// Fail-closed projection from anonymous route analytics to approved production HTML.
// This is an additive checkpoint; no historical baseline ledger is edited.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const ledger=JSON.parse(fs.readFileSync(new URL('../research/ENGAGEMENT_INTEGRITY_2026-10-27.json',import.meta.url)));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
export function projectPreEngagement(bytes,relative){
 bytes=projectPreDm1a(bytes,relative);
 const entry=ledger.files[relative];
 if(!entry)return bytes;
 assert.equal(hash(bytes),entry.afterSha256,relative+': undeclared engagement presentation mutation');
 const before=Buffer.from(entry.beforeText);
 assert.equal(hash(before),entry.beforeSha256,relative+': immutable approved pre-engagement bytes');
 return before;
}
