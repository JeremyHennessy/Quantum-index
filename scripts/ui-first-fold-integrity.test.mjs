import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {reverseDeclaredUiRevision} from './ui-revision-checkpoint.mjs';

const manifest=JSON.parse(fs.readFileSync('research/UI_FIRST_FOLD_CANDIDATE_INTEGRITY_2026-10-30.json','utf8'));
const dm1a=JSON.parse(fs.readFileSync('research/DM1A_INTEGRATION_INTEGRITY_2026-10-29.json','utf8'));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const files=['index.html','styles.css','docs/responsive-check.html','scripts/dm1a-integration-baseline.mjs','scripts/dm1a-integration.test.mjs','app.js'];

test('every exact candidate file reverses to its pinned original bytes',()=>{
 assert.equal(manifest.status,'review-candidate');
 assert.equal(manifest.baselineSha,'43dfd3d6467bfa6f9f38c2aa568307fa1da4de37');
 assert.deepEqual(Object.keys(manifest.files),files);
 for(const file of files){
  const current=fs.readFileSync(file);
  const entry=manifest.files[file];
  assert.equal(hash(current),entry.afterSha256,file);
  const prior=reverseDeclaredUiRevision(current,file,manifest);
  assert.equal(hash(prior),entry.beforeSha256,file);
  assert.throws(()=>reverseDeclaredUiRevision(Buffer.concat([current,Buffer.from('UNDECLARED')]),file,manifest),/unexpected UI candidate mutation/,file);
  assert.deepEqual(reverseDeclaredUiRevision(prior,file,manifest),prior,file);
 }
});

test('every pre-existing DM-1A protected UI byte remains reconstructable',()=>{
 for(const file of ['index.html','styles.css','docs/responsive-check.html','app.js']){
  const before=reverseDeclaredUiRevision(fs.readFileSync(file),file,manifest);
  const ledgerRecord=dm1a.files[file];
  const immutable=dm1a.unchangedFiles[file];
  assert.ok(ledgerRecord||immutable,'Missing older protected UI boundary '+file);
  assert.equal(hash(before),ledgerRecord?.afterSha256||immutable,file);
 }
});
test('first-fold candidate makes no changes to application renderer or scientific runtime',()=>{
 for(const path of ['theories.js','formulas.js','evidence.js','problems.js','workspace.js']){
  assert.ok(!Object.hasOwn(manifest.files,path),path+' is not an authorized UI candidate delta');
 }
 assert.ok(Object.hasOwn(manifest.files,'app.js'),'A dedicated hero-link scroll handler is an explicit candidate delta');
 const html=fs.readFileSync('index.html','utf8');
 assert.match(html,/class="hero-entry-actions"/);
 assert.match(html,/href="#\/problems"/);
 assert.match(html,/href="#\/catalog"/);
 const tabs=[...html.matchAll(/<button class="tab(?: active)?" data-view="([^"]+)"/g)].map(m=>m[1]);
 assert.deepEqual(tabs,['explore','map','timeline','lineage','catalog','formula','compare','problems','evidence','questions','learn','workspace','coverage']);
});
test('old historical ledgers were not rewritten for candidate acceptance',()=>{
 for(const p of ['research/DM1A_INTEGRATION_INTEGRITY_2026-10-29.json','research/CI_PROJECT_SPLIT_INTEGRITY_2026-10-26.json']){
  assert.ok(!Object.hasOwn(manifest.files,p));
 }
});
