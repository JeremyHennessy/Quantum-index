import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {reverseDeclaredUiRevision} from './ui-revision-checkpoint.mjs';

const manifest=JSON.parse(fs.readFileSync('research/UI_PHYSICS_ROOT_CANDIDATE_2026-10-30.json','utf8'));
const sha=bytes=>createHash('sha256').update(bytes).digest('hex');
const changed=['index.html','docs/responsive-check.html','tests/browser/research.spec.mjs','scripts/dm1a-integration-baseline.mjs','scripts/dm1a-integration.test.mjs','scripts/physics-explorer-preview.test.mjs'];
const index=fs.readFileSync('index.html','utf8');
const match=index.match(/<script id="qi-default-physics-explorer">([\s\S]*?)<\/script>/);
if(!match)throw Error('Missing exact default-entry script');
const rootScript=match[1];

function decide(url){
 const parsed=new URL(url);
 let redirected=null;
 const location={
  href:parsed.href,pathname:parsed.pathname,search:parsed.search,
  replace:target=>{redirected=String(target);}
 };
 vm.runInNewContext(rootScript,{location,URL,URLSearchParams},{timeout:500});
 return redirected;
}

test('every intentionally changed historic file reverts to exact original bytes, and mutations are rejected',()=>{
 assert.equal(manifest.status,'review-candidate');
 assert.equal(manifest.baselineSha,'d98b1984ae72d0dfcb4737ea0f837a32fcd185cc');
 assert.deepEqual(Object.keys(manifest.files),changed);
 for(const file of changed){
  const current=fs.readFileSync(file),entry=manifest.files[file];
  assert.equal(sha(current),entry.afterSha256,'Candidate SHA mismatch '+file);
  const prior=reverseDeclaredUiRevision(current,file,manifest);
  assert.equal(sha(prior),entry.beforeSha256,'Original not restored '+file);
  assert.deepEqual(reverseDeclaredUiRevision(prior,file,manifest),prior,file);
  assert.throws(()=>reverseDeclaredUiRevision(Buffer.concat([current,Buffer.from('UNDECLARED')]),file,manifest),/unexpected UI candidate mutation/,file);
 }
});

test('new root selects only unhashed directory entry; all classic deep links remain exact',()=>{
 for(const [url,want] of [
  ['https://quantumindex.site/','https://quantumindex.site/docs/physics-explorer.html'],
  ['https://quantumindex.site/?utm_source=chatgpt.com','https://quantumindex.site/docs/physics-explorer.html?utm_source=chatgpt.com'],
  ['https://quantumindex.site/?theory=hawking-radiation','https://quantumindex.site/docs/physics-explorer.html?theory=hawking-radiation'],
  ['http://localhost:4173/','http://localhost:4173/docs/physics-explorer.html'],
  ['https://jeremyhennessy.github.io/Quantum-index/','https://jeremyhennessy.github.io/Quantum-index/docs/physics-explorer.html']
 ])assert.equal(decide(url),want,url);
 for(const url of [
  'https://quantumindex.site/index.html',
  'https://quantumindex.site/index.html#/theory/planck-quanta',
  'https://quantumindex.site/#',
  'https://quantumindex.site/#/explore',
  'https://quantumindex.site/#/map',
  'https://quantumindex.site/#/theory/wave-mechanics?from=learn',
  'https://quantumindex.site/#/formula?theory=gksl',
  'https://quantumindex.site/#/compare?ids=gksl,qed',
  'https://quantumindex.site/#/workspace',
  'https://quantumindex.site/#/lineage',
  'https://quantumindex.site/?classic=1',
  'https://quantumindex.site/docs/observatory-explorer.html',
  'https://quantumindex.site/docs/physics-explorer.html'
 ])assert.equal(decide(url),null,url);
});

test('approved runtime, Observatory visuals, science corpus and saved research remain untouched',()=>{
 const unchanged=['app.js','styles.css','analytics.js','workspace.js','theories.js','formulas.js','evidence.js','problems.js','docs/physics-explorer.html','docs/physics-explorer.css','docs/physics-explorer.js','docs/observatory-explorer.css'];
 for(const file of unchanged)assert.ok(!Object.hasOwn(manifest.files,file),'unexpected change in '+file);
 assert.equal(sha(fs.readFileSync('app.js')),'650b38708ca3ce89289ecdde52124ca8ab90acf04a575fb721dcb0189fa8d0d1');
 assert.equal(sha(fs.readFileSync('scripts/analytics.test.mjs')),'2654359bd9cac73d5d47d3c88574c783659cb2f75fba6a4d525cd65ae0cfe3bb');
 assert.match(index,/<script id="qi-engagement-tracker">/);
 assert.match(index,/class="tab active" data-view="explore"/);
 assert.match(index,/id="researchNote"/);
 const former=reverseDeclaredUiRevision(Buffer.from(index),'index.html',manifest).toString();
 assert.ok(!former.includes('qi-default-physics-explorer'),'Original approved page had no new default routing');
});
