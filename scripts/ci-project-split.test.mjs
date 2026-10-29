import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {projectPreCiProjectSplit,readPreCiProjectSplitFile} from './ci-project-split-baseline.mjs';
import {projectPreEngagement} from './engagement-baseline.mjs';
const ledger=JSON.parse(fs.readFileSync('research/CI_PROJECT_SPLIT_INTEGRITY_2026-10-26.json'));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const matrixExpression='$'+'{{ matrix.project }}';
const modified=['.github/workflows/validate.yml','scripts/ci-environment.test.mjs','scripts/formula-gaps-baseline.mjs','scripts/formula-gaps-source-audit.test.mjs','scripts/response-source-audit.test.mjs','scripts/thermal-source-audit.test.mjs'];
function expectedWorkflow(){
 return ledger.files['.github/workflows/validate.yml'].beforeText
  .replace('  browser:\n    needs: [map-diagnostic, qa-diagnostic]\n','  browser:\n    needs: [map-diagnostic, qa-diagnostic]\n    strategy:\n      fail-fast: false\n      max-parallel: 2\n      matrix:\n        project: [chromium, webkit]\n')
  .replace('      - run: npm run test:browser\n','      - run: npm run test:browser -- --project='+matrixExpression+'\n')
  .replace('          name: browser-report\n','          name: browser-report-'+matrixExpression+'\n');
}
test('CI project split preserves all 281 baseline paths and rejects changed or stale boundary input',()=>{
 assert.equal(ledger.baselineCommit,'e53e36203e75f738470f8cf677240b8d2fe933fe');
 assert.equal(ledger.baselineTree,'b3759b21eb449e1893acc42259dd34fbd475d4eb');
 assert.deepEqual(Object.keys(ledger.files),modified);
 assert.equal(Object.keys(ledger.unchangedFiles).length,275);
 for(const [file,entry]of Object.entries(ledger.files)){
  const raw=fs.readFileSync(file);assert.equal(hash(projectPreEngagement(raw,file)),entry.afterSha256,file);
  assert.equal(hash(readPreCiProjectSplitFile(file)),entry.beforeSha256,file);
  assert.equal(readPreCiProjectSplitFile(file,'utf8'),entry.beforeText,file);
  assert.throws(()=>projectPreCiProjectSplit(Buffer.from(entry.beforeText),file),/undeclared (?:DM-1A integration|CI project-split|engagement presentation) mutation/);
  assert.throws(()=>projectPreCiProjectSplit(Buffer.concat([raw,Buffer.from('undeclared')]),file),/undeclared (?:DM-1A integration|CI project-split|engagement presentation) mutation/);
 }
 for(const [file,want]of Object.entries(ledger.unchangedFiles))assert.equal(hash(projectPreEngagement(fs.readFileSync(file),file)),want,file);
 for(const [file,want]of Object.entries(ledger.newFiles))assert.equal(hash(projectPreEngagement(fs.readFileSync(file),file)),want,file);
});
test('only browser project scheduling and artifact names change; package still requires every matrix job',()=>{
 const raw=fs.readFileSync('.github/workflows/validate.yml','utf8');assert.equal(raw,expectedWorkflow());
 assert.match(raw,/project: \[chromium, webkit\]/);assert.match(raw,/fail-fast: false/);assert.match(raw,/max-parallel: 2/);
 assert.match(raw,/  browser:[\s\S]*?timeout-minutes: 35/);
 assert.match(raw,/  package:[\s\S]*?    needs: \[validate, browser\]/);
 assert.match(raw,/  deploy:\n    needs: package/);
 const browser=raw.match(/  browser:\n[\s\S]*?(?=\n  package:)/)[0];
 assert.doesNotMatch(browser,/continue-on-error|larger-runner|self-hosted|--grep|--shard|--workers|--retries|--timeout/);
 // Diagnostic --retries=0 remains intentionally unchanged; inspect browser only.
});
test('weakened scheduling, test selection, timeout, permissions and package gates are rejected',()=>{
 const current=expectedWorkflow(),verify=text=>assert.equal(text,expectedWorkflow());
 for(const [before,after]of [
  ['project: [chromium, webkit]','project: [chromium]'],
  ['fail-fast: false','fail-fast: true'],
  ['max-parallel: 2','max-parallel: 3'],
  ['timeout-minutes: 35','timeout-minutes: 36'],
  ['needs: [validate, browser]','needs: validate'],
  ['contents: read','contents: write'],
  ['npm run test:browser -- --project='+matrixExpression,'echo skipped'],
  ['name: browser-report-'+matrixExpression,'name: browser-report'],
  ['    strategy:\n','    continue-on-error: true\n    strategy:\n']
 ]){assert.ok(current.includes(before));assert.throws(()=>verify(current.replace(before,after)),before);}
});
test('historical CI and scientific assertions survive only exact explicit reader-boundary substitutions',()=>{
 let expected="import {projectPreCiProjectSplit} from './ci-project-split-baseline.mjs';\n"+ledger.files['scripts/formula-gaps-baseline.mjs'].beforeText;
 expected=expected.replace('export function projectPreFormulaGaps(bytes,relative){','export function projectPreFormulaGaps(bytes,relative){\n  bytes=projectPreCiProjectSplit(bytes,relative);');
 assert.equal(fs.readFileSync('scripts/formula-gaps-baseline.mjs','utf8'),expected);
 const transformations={
  'scripts/ci-environment.test.mjs':[
   ["assert.equal(fs.readFileSync('.github/workflows/validate.yml','utf8'),expected);","assert.equal(readPreCiProjectSplitFile('.github/workflows/validate.yml','utf8'),expected);"],
   ['assert.equal(hash(fs.readFileSync(f)),expected,f);','assert.equal(hash(readPreCiProjectSplitFile(f)),expected,f);']],
  'scripts/formula-gaps-source-audit.test.mjs':[
   ['assert.equal(hash(raw),entry.afterSha256,file);','assert.equal(hash(readPreCiProjectSplitFile(file)),entry.afterSha256,file);'],
   ['))assert.equal(hash(fs.readFileSync(file)),expected,file);','))assert.equal(hash(readPreCiProjectSplitFile(file)),expected,file);'],
   ["assert.equal(fs.readFileSync('scripts/response-source-audit.test.mjs','utf8'),expected);","assert.equal(readPreCiProjectSplitFile('scripts/response-source-audit.test.mjs','utf8'),expected);"],
   ['/undeclared formula-gap integration mutation/','/undeclared (?:formula-gap integration|CI project-split) mutation/']],
  'scripts/response-source-audit.test.mjs':[
   ["assert.equal(fs.readFileSync('scripts/thermal-source-audit.test.mjs','utf8'),expected);","assert.equal(readPreCiProjectSplitFile('scripts/thermal-source-audit.test.mjs','utf8'),expected);"]],
  'scripts/thermal-source-audit.test.mjs':[
   ['assert.equal(hash(fs.readFileSync(file)),expected,file);','assert.equal(hash(readPreCiProjectSplitFile(file)),expected,file);'],
   ["assert.equal(fs.readFileSync('scripts/ci-environment.test.mjs','utf8'),expected);","assert.equal(readPreCiProjectSplitFile('scripts/ci-environment.test.mjs','utf8'),expected);"]]
 };
 for(const [file,changes]of Object.entries(transformations)){
  expected=ledger.files[file].beforeText;
  for(const [before,after]of changes){assert.ok(expected.includes(before),file);expected=expected.replaceAll(before,after);}
  expected="import {readPreCiProjectSplitFile} from './ci-project-split-baseline.mjs';\n"+expected;
  assert.equal(projectPreEngagement(fs.readFileSync(file),file).toString('utf8'),expected,file);
 }
});
function discovery(project){
 const args=['node_modules/@playwright/test/cli.js','test','--list','--reporter=json'];
 if(project)args.push('--project='+project);
 const result=spawnSync(process.execPath,args,{encoding:'utf8',maxBuffer:16*1024*1024});
 assert.equal(result.status,0,result.stderr||result.error?.message);
 const report=JSON.parse(result.stdout);assert.deepEqual(report.errors,[]);
 const rows=[];
 const walk=(suite,parents=[])=>{
  for(const spec of suite.specs||[])for(const t of spec.tests){
   assert.equal(t.expectedStatus,'passed',spec.title);
   rows.push(t.projectName+'|'+spec.file+'|'+[...parents,spec.title].join(' > '));
  }
  for(const nested of suite.suites||[])walk(nested,[...parents,nested.title]);
 };
 for(const suite of report.suites)walk(suite);
 assert.equal(new Set(rows).size,rows.length,'No duplicate discovered identity');
 return rows.sort();
}
test('project CLI selections form an exact disjoint union and retain all 262 original case identities',()=>{
 const all=discovery(),chromium=discovery('chromium'),webkit=discovery('webkit');
 assert.ok(chromium.length>0&&webkit.length>0);
 assert.ok(chromium.every(id=>id.startsWith('chromium|')));
 assert.ok(webkit.every(id=>id.startsWith('webkit|')));
 assert.deepEqual([...chromium,...webkit].sort(),all);
 assert.equal(new Set([...chromium,...webkit]).size,all.length);
 assert.equal(ledger.browserBaselineIds.length,262);
 for(const id of ledger.browserBaselineIds)assert.ok(all.includes(id),id);
 // Discovery is not browser execution. Existing retry=1 and diagnostics are unchanged.
 assert.equal(hash(fs.readFileSync('playwright.config.mjs')),ledger.unchangedFiles['playwright.config.mjs']);
 assert.match(fs.readFileSync('playwright.config.mjs','utf8'),/workers:1, retries:1/);
});
