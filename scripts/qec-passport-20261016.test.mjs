import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {restoreQecFormula} from './qec-source-review-20261016-baseline.mjs';
const w={window:{}};vm.createContext(w);
for(const file of ['theories.js','formulas.js','formula-audit.js','developments.js','evidence.js','questions.js','problems.js','passports.js'])vm.runInContext(fs.readFileSync(file,'utf8'),w,{filename:file});
const data=w.window;
const shaBlob=bytes=>createHash('sha1').update(Buffer.from('blob '+bytes.length+'\0')).update(bytes).digest('hex');
test('QEC review preserves exact pre-candidate formula and Passport files before append markers',()=>{
  for(const [path,marker,sha] of [
    ['formulas.js','// 2026-10-16 QEC original-source qualification.','85b049b3cad6584774f40fba465ec7b038fde422'],
    ['passports.js','// 2026-10-16 QEC original-source-reviewed Passport.','d5b39d32c993f88ccf6a59dd7f582ebb97273d0f']
  ]){const bytes=fs.readFileSync(path),i=bytes.indexOf(Buffer.from(marker));assert.ok(i>0,path);{const prefix=bytes.subarray(0,i),accepted=[prefix];
    for(let j=1;j<=4&&prefix.length>=j;j++)if(prefix.subarray(prefix.length-j).every(byte=>byte===10||byte===13))accepted.push(prefix.subarray(0,prefix.length-j));
    assert.ok(accepted.some(bytes=>shaBlob(bytes)===sha),path+': original record bytes modified')}}
  assert.equal(data.QI_DATA.theories.length,481);
  assert.equal(data.QI_FORMULAS.formulas.length,405);
  assert.equal(data.QI_PASSPORTS.records.filter(x=>x.theoryId!=='yang-mills').length,28);
  assert.equal(data.QI_DATA.relations.length,610);
});
test('QEC source review maps exactly to original theorem and preserves nonclaims',()=>{
  const f=data.QI_FORMULAS.formulas.find(x=>x.id==='knill-laflamme');
  const p=data.QI_PASSPORTS.records.find(x=>x.theoryId==='quantum-error-correction');
  assert.ok(f&&p);
  assert.equal(f.metadataReview,'explicit');
  const reconstructed=restoreQecFormula(f);
  assert.equal(reconstructed.metadataReview,'baseline-audit-v1');
  assert.deepEqual(Array.from(reconstructed.sourceIds),['kitaev-anyons-2003','schumacher-1995']);
  assert.ok(f.sourceIds.includes('knill-laflamme-1997'));
  assert.match(f.sourceLocations[0].locator,/Theorem 3.2/);
  assert.match(p.mathematicalStructure,/Eqs. \(19\)–\(20\)/);
  assert.equal(p.evidenceIds.length,0);
  assert.match(p.whatEvidenceDoesNotEstablish,/threshold/);
  assert.equal(data.QI_PASSPORTS.records.filter(x=>x.theoryId==='yang-mills').length,1,'post-QEC independent Yang-Mills addition');
});
