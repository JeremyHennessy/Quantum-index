import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {reverseDeclaredUiRevision} from './ui-revision-checkpoint.mjs';

const file='research/UI_OBSERVATORY_GATEWAY_CANDIDATE_INTEGRITY_2026-10-30.json';
const manifest=JSON.parse(fs.readFileSync(file,'utf8'));
const legacy=JSON.parse(fs.readFileSync('research/DM1A_INTEGRATION_INTEGRITY_2026-10-29.json','utf8'));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const allowed=['index.html','styles.css','docs/responsive-check.html','scripts/dm1a-integration-baseline.mjs','scripts/dm1a-integration.test.mjs'];

test('Observatory gateway delta is exactly the declared reversible five-file edit',()=>{
 assert.equal(manifest.status,'review-candidate');
 assert.equal(manifest.baselineSha,'9c647d0836c892c54cfcf7d89e3550ccc87b5839');
 assert.deepEqual(Object.keys(manifest.files),allowed);
 for(const path of allowed){
  const current=fs.readFileSync(path);
  const entry=manifest.files[path];
  assert.equal(hash(current),entry.afterSha256,path+' must be exact candidate');
  const old=reverseDeclaredUiRevision(current,path,manifest);
  assert.equal(hash(old),entry.beforeSha256,path+' must restore old bytes');
  assert.deepEqual(reverseDeclaredUiRevision(old,path,manifest),old,path+' prior baseline should remain admissible');
  assert.throws(()=>reverseDeclaredUiRevision(Buffer.concat([current,Buffer.from('UNDECLARED')]),path,manifest),/unexpected UI candidate mutation/,path);
 }
});

test('all old protected release-boundary files are reconstructed before legacy projections',()=>{
 for(const path of ['index.html','styles.css','docs/responsive-check.html','app.js']){
  const got=hash(reverseDeclaredUiRevision(fs.readFileSync(path),path,manifest));
  const entry=legacy.files[path];
  const expected=entry?.afterSha256 || legacy.unchangedFiles[path];
  assert.ok(expected,'Missing legacy acceptance for '+path);
  assert.equal(got,expected,path);
 }
});

test('approved app and analytics bytes are unchanged and all original views still exist',()=>{
 assert.ok(!Object.hasOwn(manifest.files,'app.js'));
 assert.ok(!Object.hasOwn(manifest.files,'scripts/analytics.test.mjs'));
 assert.equal(hash(fs.readFileSync('app.js')),'650b38708ca3ce89289ecdde52124ca8ab90acf04a575fb721dcb0189fa8d0d1');
 assert.equal(hash(fs.readFileSync('scripts/analytics.test.mjs')),'2654359bd9cac73d5d47d3c88574c783659cb2f75fba6a4d525cd65ae0cfe3bb');
 const html=fs.readFileSync('index.html','utf8');
 assert.match(html,/class="observatory-gateway"/);
 assert.match(html,/href="\.\/docs\/observatory-explorer\.html"/);
 assert.match(html,/id="exploreCards" class="explore-grid"/);
 assert.ok(fs.existsSync('docs/observatory-explorer.html'));
 const tabs=[...html.matchAll(/<button class="tab(?: active)?" data-view="([^"]+)"/g)].map(m=>m[1]);
 assert.deepEqual(tabs,['explore','map','timeline','lineage','catalog','formula','compare','problems','evidence','questions','learn','workspace','coverage']);
 for(const path of ['theories.js','formulas.js','evidence.js','problems.js','workspace.js','docs/observatory-registry.json']){
  assert.ok(!Object.hasOwn(manifest.files,path),'No scientific or user-workspace content changed: '+path);
 }
});

test('metadata label makes no fabricated claim of public data or scientific proof',()=>{
 const html=fs.readFileSync('index.html','utf8');
 assert.match(html,/source-linked datasets, studies and upcoming research milestones/);
 assert.doesNotMatch(html,/All observatories worldwide|Dark matter solved|Officially confirmed theory/);
 assert.ok(fs.readFileSync('styles.css','utf8').includes('.observatory-gateway:focus-visible'));
});
