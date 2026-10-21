import {readPreCampaignFile} from './campaign-20261021-baseline.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {beforeYangMillsBytes,restoreYangMillsFormula,priorYangMillsSources} from './yang-mills-source-review-20261016-baseline.mjs';
import {priorAstroCoverage,priorAstroSources,priorAstroFormulas} from './astro-formulas-20261016-baseline.mjs';

const sandbox={window:{}};vm.createContext(sandbox);
for(const p of ['theories.js','developments.js','evidence.js','formulas.js','formula-audit.js','questions.js','problems.js','passports.js'])
 vm.runInContext(readPreCampaignFile(p,'utf8'),sandbox,{filename:p});
const w=sandbox.window;
test('source review is append-only and retains exact pre-Yang-Mills source/formula/Passport bytes',()=>{
 for(const path of ['theories.js','formulas.js','passports.js'])assert.ok(beforeYangMillsBytes(path).length>0);
 const c=priorAstroCoverage(JSON.parse(readPreCampaignFile('docs/coverage.json','utf8')));
 assert.equal(c.theories,481);assert.equal(c.formulas,405);assert.equal(c.formulaGaps,163);
 assert.equal(c.relations,610);assert.equal(c.sources,551);assert.equal(c.passports,29);
 assert.equal(c.explicitFormulaMetadata,156);assert.equal(c.baselineFormulaMetadata,249);
 assert.equal(w.QI_DATA.theories.length,481);assert.equal(w.QI_DATA.relations.length,610);
 assert.equal(priorAstroFormulas(w.QI_FORMULAS.formulas).length,405);
 assert.equal(w.QI_PASSPORTS.records.length,29);
 assert.equal(priorAstroSources(priorYangMillsSources(w.QI_DATA.sources)).length,550);
});
test('both existing Yang-Mills formulas retain their original mathematics and independent locators',()=>{
 for(const id of ['yang-mills-field','yang-mills-lagrangian']){
  const f=w.QI_FORMULAS.formulas.find(x=>x.id===id);
  assert.ok(f);
  const original=restoreYangMillsFormula(f);
  assert.equal(original.metadataReview,'baseline-audit-v1');
  assert.equal(original.latex,f.latex,id+': mathematical string changed');
  assert.equal(original.plain,f.plain,id+': plain equation changed');
 }
 const f=w.QI_FORMULAS.formulas.find(x=>x.id==='yang-mills-field');
 assert.match(f.sourceLocations[0].locator,/15\.52/);
 assert.match(f.sourceLocations[1].locator,/1954|Yang and Mills/);
 const L=w.QI_FORMULAS.formulas.find(x=>x.id==='yang-mills-lagrangian');
 assert.match(L.sourceLocations[0].locator,/15\.59/);
});
test('modern and historical SU(2) field strength agree after exact convention mapping',()=>{
 const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
 const check=(g,bmu,bnu,dmu_bnu,dnu_bmu)=>{
  const c=cross(bmu,bnu);
  for(let k=0;k<3;k++){
   const old=(dnu_bmu[k]-dmu_bnu[k])-2*g*c[k]; // original Eq (9)
   const modern=2*(dmu_bnu[k]-dnu_bmu[k])+4*g*c[k]; // A=2b and Eq (15.52)
   assert.ok(Math.abs(modern+2*old)<1e-11,'component '+k);
  }
 };
 check(.4,[1,2,3],[.5,-1,2],[.2,.3,-.7],[-.9,.2,1]);
 check(-.9,[0,1,.2],[1.5,0,-.7],[0,0,0],[0,0,0]);
 check(0,[.1,.2,.3],[.4,.5,.6],[1,2,3],[.2,4,.8]);
});
test('source-qualified Passport preserves empirical nonclaims, matching formula and comparison identities',()=>{
 const p=w.QI_PASSPORTS.records.find(p=>p.theoryId==='yang-mills');
 assert.ok(p);
 assert.deepEqual(Array.from(p.formulaIds),['yang-mills-field','yang-mills-lagrangian']);
 assert.equal(p.evidenceIds.length,0);
 assert.ok(p.sourceIds.includes('yang-mills-1954')&&p.sourceIds.includes('usp-nonabelian-gauge-lecture15'));
 assert.match(p.assumptions.join(' '),/F_modern=-F_1954/);
 assert.match(p.limitations.join(' '),/mass gap/);
 for(const id of p.comparisonFrameworks)assert.ok(w.QI_DATA.theories.some(t=>t.id===id),id);
});
