import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import {createHash} from 'node:crypto';import {projectPreCiEnvironment} from './combined-baseline.mjs';
const audit=JSON.parse(fs.readFileSync('research/CI_ENVIRONMENT_INTEGRITY_2026-10-22.json')),hash=b=>createHash('sha256').update(b).digest('hex');
const image='mcr.microsoft.com/playwright/python:v1.63.0-noble@sha256:72bd171a9ffc2b4b59532aaa6210e21014d07093120dc25528870c0b840da1f0';
const check=`      - name: Verify pinned browser environment
        run: |
          python3 --version
          node --version
          node -e "const p=require('@playwright/test'); if(require('@playwright/test/package.json').version!=='1.63.0') throw Error('Update the pinned CI image with Playwright'); for(const name of ['chromium','webkit']) {const file=p[name].executablePath(); if(!require('node:fs').existsSync(file)) throw Error('Missing preinstalled '+name+': '+file); console.log(name+': '+file);}"
`;
test('CI repair changes only three browser execution environments, retaining every existing test and release gate',()=>{
 let expected=audit.files['.github/workflows/validate.yml'].beforeText;
 for(const job of ['map-diagnostic','qa-diagnostic','browser']){const re=new RegExp('(  '+job+':\\n(?:    needs:.*\\n)?    runs-on: ubuntu-latest\\n)');assert.match(expected,re);expected=expected.replace(re,'$1    container: '+image+'\n');}
 const install='      - run: npx playwright install --with-deps chromium webkit\n';assert.equal(expected.split(install).length-1,3);expected=expected.replaceAll(install,check);
 assert.equal(fs.readFileSync('.github/workflows/validate.yml','utf8'),expected);assert.equal(audit.image,image);assert.equal(JSON.parse(fs.readFileSync('package.json')).devDependencies['@playwright/test'],'1.63.0');
});
test('CI provenance rejects undeclared bytes and restores exactly the independently reviewed PR99 checkpoint',()=>{
 assert.equal(audit.baselineCommit,'1668c0f2d3e60d9ee51911685c921380270d91c6');assert.deepEqual(Object.keys(audit.files),['.github/workflows/validate.yml','scripts/combined-baseline.mjs','scripts/combined-source-audit.test.mjs','scripts/analytics.test.mjs']);
 for(const [file,e] of Object.entries(audit.files)){const current=fs.readFileSync(file);assert.equal(hash(current),e.afterSha256);assert.equal(hash(e.beforeText),e.beforeSha256);assert.equal(projectPreCiEnvironment(current,file).toString(),e.beforeText);assert.throws(()=>projectPreCiEnvironment(Buffer.concat([current,Buffer.from('extra')]),file));}
});
test('all thirty scientific checkpoint files are identical after only the two declared test-helper projections',()=>{
 assert.equal(audit.reviewedScientificFiles.length,30);for(const f of audit.reviewedScientificFiles){const bytes=projectPreCiEnvironment(fs.readFileSync(f.path),f.path);assert.equal(hash(bytes),f.afterSha256,f.path);assert.equal(bytes.length,f.bytes,f.path);}
 const ledger=JSON.parse(fs.readFileSync('research/COMBINED_INTEGRITY_2026-10-22.json'));for(const [f,expected] of Object.entries(ledger.unchangedFiles))if(f!=='.github/workflows/validate.yml')assert.equal(hash(fs.readFileSync(f)),expected,f);
});
test('historical helper changes are exact explicit CI projection additions, not removed scientific assertions',()=>{
 let expected=audit.files['scripts/combined-baseline.mjs'].beforeText;
 expected=expected.replace('export function projectPreCombined(bytes,relative){',"const ciLedger=JSON.parse(fs.readFileSync(new URL('../research/CI_ENVIRONMENT_INTEGRITY_2026-10-22.json',import.meta.url)));\n// Explicit, fail-closed CI-only projection; scientific checkpoint bytes remain independently checked.\nexport function projectPreCiEnvironment(bytes,relative){const e=ciLedger.files[relative];if(!e)return bytes;assert.equal(hash(bytes),e.afterSha256,relative+': undeclared CI environment mutation');const before=Buffer.from(e.beforeText);assert.equal(hash(before),e.beforeSha256,relative+': immutable reviewed PR99 bytes');return before;}\nexport function projectPreCombined(bytes,relative){bytes=projectPreCiEnvironment(bytes,relative);");assert.equal(fs.readFileSync('scripts/combined-baseline.mjs','utf8'),expected);
 expected=audit.files['scripts/combined-source-audit.test.mjs'].beforeText.replace('readPreCombinedFile,projectPreCombined}','readPreCombinedFile,projectPreCombined,projectPreCiEnvironment}').replace("preserves protected files'","preserves protected checkpoint bytes across the explicit CI-only repair'").replace("update(fs.readFileSync(f)).digest('hex'),hash,f);","update(projectPreCiEnvironment(fs.readFileSync(f),f)).digest('hex'),hash,f);");assert.equal(fs.readFileSync('scripts/combined-source-audit.test.mjs','utf8'),expected);
 expected="import {projectPreCiEnvironment} from './combined-baseline.mjs';\n"+audit.files['scripts/analytics.test.mjs'].beforeText.replace('assert.equal(raw.toString(),expected);','assert.equal(projectPreCiEnvironment(raw,file).toString(),expected);');assert.equal(fs.readFileSync('scripts/analytics.test.mjs','utf8'),expected);
});
