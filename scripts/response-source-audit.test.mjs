import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {loadRuntime} from './category-trust-census.mjs';
import {projectPreResponse,readPreResponseFile} from './response-baseline.mjs';
import {projectPreThermal} from './thermal-baseline.mjs';
const audit=JSON.parse(fs.readFileSync('research/RESPONSE_SOURCE_PROPOSAL_2026-10-25.json'));
const ledger=JSON.parse(fs.readFileSync('research/RESPONSE_INTEGRITY_2026-10-25.json'));
const thermal=JSON.parse(fs.readFileSync('research/THERMAL_INTEGRITY_2026-10-25.json'));
const files=['theories.js','developments.js','evidence.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','passports.js'];
const before={window:{}};vm.createContext(before);
for(const file of files)vm.runInContext(readPreResponseFile(file,'utf8'),before);
const old=before.window,current=loadRuntime(),plain=value=>JSON.parse(JSON.stringify(value));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');

test('response audit is an exact three-card two-source delta after the unmodified PR100 checkpoint',()=>{
  assert.equal(audit.pendingBaseCommit,'ec083e7b4ee712ee82c12d21434119eb852eac0b');
  assert.equal(ledger.baselineCommit,audit.pendingBaseCommit);
  assert.equal(ledger.baselineTree,'9bf53a450eac4af65fd9f1f88b07a60b90d43df5');
  assert.deepEqual(audit.patches.map(p=>p.id),['kubo','fdt','matsubara']);
  assert.equal(audit.sources.length,2);
  for(const [file,expected]of Object.entries(audit.inputSha256))assert.equal(hash(readPreResponseFile(file)),expected,file);
  for(const record of audit.before)assert.deepEqual(plain(old.QI_FORMULAS.formulas.find(f=>f.id===record.id)),record);
  const expected=old.QI_FORMULAS.formulas.map(formula=>({...formula,...(audit.patches.find(p=>p.id===formula.id)||{})}));
  assert.deepEqual(plain(current.QI_FORMULAS.formulas),plain(expected));
  const addedIds=new Set(audit.sources.map(source=>source.id));
  assert.deepEqual(plain(current.QI_DATA.sources.filter(source=>!addedIds.has(source.id))),plain(old.QI_DATA.sources));
  for(const source of audit.sources)assert.deepEqual(plain(current.QI_DATA.sources.filter(item=>item.id===source.id)),[source]);
  for(const key of Object.keys(old.QI_DATA))if(key!=='sources')assert.deepEqual(plain(current.QI_DATA[key]),plain(old.QI_DATA[key]),key);
  for(const key of Object.keys(old))if(!['QI_DATA','QI_FORMULAS'].includes(key))assert.deepEqual(plain(current[key]),plain(old[key]),key);
  for(const key of Object.keys(old.QI_FORMULAS))if(key!=='formulas')assert.deepEqual(plain(current.QI_FORMULAS[key]),plain(old.QI_FORMULAS[key]),key);
  assert.equal(current.QI_FORMULAS.formulas.length,457);assert.equal(current.QI_DATA.theories.length,483);
  assert.equal(current.QI_DATA.sources.length,605);
  assert.equal(current.QI_FORMULAS.formulas.filter(f=>f.metadataReview==='explicit').length,271);
  assert.equal(current.QI_FORMULAS.formulas.filter(f=>f.metadataReview==='baseline-audit-v1').length,186);
  assert.equal(current.QI_FORMULA_AUDIT.entries.filter(e=>e.classification==='formula-bearing-gap').length,114);
});

test('all equations, formula roles, IDs, associations and prior sources are preserved',()=>{
  const allowed=new Set(['id','assumptions','variables','regime','units','sourceIds','sourceLocations','metadataReview','reviewedAt','curationBatch','theoryRelationship']);
  for(const patch of audit.patches){
    for(const key of Object.keys(patch))assert.ok(allowed.has(key),key);
    const original=audit.before.find(f=>f.id===patch.id),record=current.QI_FORMULAS.formulas.find(f=>f.id===patch.id);
    for(const key of ['latex','plain','formulaType','name','description','category','theoryIds','tags'])assert.deepEqual(plain(record[key]),original[key],patch.id+': '+key);
    for(const id of original.sourceIds)assert.ok(record.sourceIds.includes(id));
    assert.equal(record.metadataReview,'explicit');assert.equal(record.reviewedAt,'2026-10-25');
    assert.ok(record.assumptions.length>0&&record.variables.length>0&&record.sourceLocations.length>0);
    for(const location of record.sourceLocations){assert.ok(record.sourceIds.includes(location.sourceId));assert.ok(current.QI_DATA.sources.some(s=>s.id===location.sourceId));assert.match(location.url,/^https:\/\//);assert.ok(location.locator.length>15);}
  }
  for(const id of ['gibbs-state','jarzynski','landauer'])assert.deepEqual(plain(current.QI_FORMULAS.formulas.find(f=>f.id===id)),plain(old.QI_FORMULAS.formulas.find(f=>f.id===id)),id);
  assert.deepEqual(plain(current.QI_FORMULA_AUDIT.entries.find(e=>e.theoryId==='kms-equilibrium')),plain(old.QI_FORMULA_AUDIT.entries.find(e=>e.theoryId==='kms-equilibrium')));
});

test('response conventions state coupling, Fourier, zero-frequency and fermionic limits explicitly',()=>{
  const get=id=>JSON.stringify(current.QI_FORMULAS.formulas.find(f=>f.id===id));
  assert.match(get('kubo'),/Hprime\(t\) = -f\(t\) B/);assert.match(get('kubo'),/\+i omega t/);assert.match(get('kubo'),/contact terms/);
  assert.match(get('fdt'),/two-sided and symmetrized/);assert.match(get('fdt'),/elastic delta peak/);assert.match(get('fdt'),/nonzero frequency/);
  assert.match(get('matsubara'),/Fermionic/);assert.match(get('matsubara'),/antiperiodic/);assert.match(get('matsubara'),/inverse-energy/);assert.match(get('matsubara'),/not a verbatim historical equation/);
});

test('response reconstruction is declared new and snapshots fail closed against undeclared bytes',()=>{
  assert.equal(audit.reconstruction.byteExactRecoveryClaim,false);
  assert.equal(audit.reconstruction.earlierValidationReusedAsProof,false);
  for(const [file,entry]of Object.entries(ledger.files)){
    assert.equal(hash(readPreResponseFile(file)),entry.beforeSha256,file);
    assert.equal(readPreResponseFile(file,'utf8'),entry.beforeText,file);
    assert.throws(()=>projectPreResponse(Buffer.concat([fs.readFileSync(file),Buffer.from('undeclared')]),file));
  }
  for(const [file,expected]of Object.entries(ledger.unchangedFiles))assert.equal(hash(fs.readFileSync(file)),expected,file);
  for(const file of ['research/THERMAL_INTEGRITY_2026-10-25.json','research/THERMAL_SOURCE_AUDIT_2026-10-25.json','tests/browser/thermal-source-audit.spec.mjs','.github/workflows/validate.yml'])assert.ok(ledger.unchangedFiles[file],file);
});

test('serial response then thermal projection restores each exact earlier checkpoint',()=>{
  for(const [file,entry]of Object.entries(thermal.files)){
    const raw=fs.readFileSync(file),at100=projectPreResponse(raw,file),at99=projectPreThermal(raw,file);
    assert.equal(hash(at100),entry.afterSha256,file+': PR100');
    assert.equal(at99.toString(),entry.beforeText,file+': PR99');
    assert.throws(()=>projectPreThermal(Buffer.concat([raw,Buffer.from('undeclared')]),file));
  }
});

test('historical test adaptations retain every prior assertion via two exact substitutions',()=>{
  let expected="import {projectPreResponse} from './response-baseline.mjs';\n"+ledger.files['scripts/thermal-baseline.mjs'].beforeText;
  expected=expected.replace('export function projectPreThermal(bytes,relative){','export function projectPreThermal(bytes,relative){\n  bytes=projectPreResponse(bytes,relative);');
  assert.equal(fs.readFileSync('scripts/thermal-baseline.mjs','utf8'),expected);
  expected="import {readPreResponseFile} from './response-baseline.mjs';\n"+ledger.files['scripts/thermal-source-audit.test.mjs'].beforeText;
  expected=expected.replace('const old=before.window,current=loadRuntime(),plain=value=>JSON.parse(JSON.stringify(value));','const old=before.window,current=(()=>{const s={window:{}};vm.createContext(s);for(const f of files)vm.runInContext(readPreResponseFile(f,\'utf8\'),s);return s.window;})(),plain=value=>JSON.parse(JSON.stringify(value));');
  assert.equal(fs.readFileSync('scripts/thermal-source-audit.test.mjs','utf8'),expected);
});
