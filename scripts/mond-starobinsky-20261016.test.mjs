import {readPreCampaignFile} from './campaign-20261021-baseline.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {beforeMondStarobinskyBytes,priorMondStarobinskyFormulas,priorMondStarobinskyCoverage,newRepresentativeIds,newlyCoveredTheoryIds} from './mond-starobinsky-20261016-baseline.mjs';
import {priorCosmologyCoverage} from './cosmology-four-gaps-20261017-baseline.mjs';
const ctx={window:{}};vm.createContext(ctx);
for(const path of ['theories.js','developments.js','evidence.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','passports.js'])
 vm.runInContext(readPreCampaignFile(path,'utf8'),ctx,{filename:path});
const w=ctx.window,near=(a,b,tol=1e-10)=>assert.ok(Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<tol,String(a)+' != '+String(b));
test('the MOND and Starobinsky first formulas preserve exact previous Git blob and registered bibliography',()=>{
 assert.ok(beforeMondStarobinskyBytes().length>0);
 assert.equal(newRepresentativeIds.length,2);assert.deepEqual(newlyCoveredTheoryIds,['mond','starobinsky-inflation']);
 assert.equal(priorMondStarobinskyFormulas(w.QI_FORMULAS.formulas).length,413);
 const latestRaw=JSON.parse(readPreCampaignFile('docs/coverage.json','utf8'));
 const latest=priorCosmologyCoverage(latestRaw);
 assert.equal(latest.theories,481);assert.equal(latest.passports,29);assert.equal(latest.relations,610);
 assert.equal(latest.evidenceRecords,16);assert.equal(latest.sources,558);
 assert.equal(latest.formulas,415);assert.equal(latest.formulaCategories,30);
 assert.equal(latest.formulaBearing,281);assert.equal(latest.formulaGaps,154);
 assert.equal(latest.explicitFormulaMetadata,166);assert.equal(latest.baselineFormulaMetadata,249);
 const old=priorMondStarobinskyCoverage(latestRaw);
 assert.equal(old.formulas,413);assert.equal(old.formulaBearing,279);
 assert.equal(old.formulaGaps,156);assert.equal(old.explicitFormulaMetadata,164);
 assert.equal(old.sources,558);
 assert.equal(w.QI_DATA.sources.filter(s=>s.id==='milgrom-mond-1983').length,1);
 assert.equal(w.QI_DATA.sources.filter(s=>s.id==='fr-review-2010').length,1);
});
test('two distinct primary theory gaps close without duplicated formulas or scientific claims',()=>{
 for(const [fid,tid,sid,part] of [
  ['mond-low-acceleration-effective-inertia','mond','milgrom-mond-1983','Eq. (1)'],
  ['starobinsky-r2-model-function','starobinsky-inflation','fr-review-2010','Eq. (3.6)']
 ]){
  const rows=w.QI_FORMULAS.formulas.filter(f=>f.id===fid);
  assert.equal(rows.length,1,fid);
  const f=rows[0];
  assert.equal(f.category,'Astroparticle physics & cosmology');
  assert.equal(f.formulaType,'defining');assert.equal(f.metadataReview,'explicit');
  assert.equal(f.curationBatch,'astro-mond-starobinsky-firstformula-2026-10-16');
  assert.deepEqual(Array.from(f.theoryIds),[tid]);assert.deepEqual(Array.from(f.sourceIds),[sid]);
  assert.equal(f.sourceLocations.length,1);
  assert.equal(f.sourceLocations[0].sourceId,sid);
  assert.ok(f.sourceLocations[0].locator.includes(part),fid+' incorrect source locator');
  assert.ok(f.assumptions.length>=4&&f.variables.length>=3);
  const audit=w.QI_FORMULA_AUDIT.entries.find(x=>x.theoryId===tid);
  assert.equal(audit.classification,'formula-bearing',tid);
  assert.ok(audit.formulaIds.includes(fid),tid+' missing source reviewed equation');
 }
 const mond=w.QI_FORMULAS.formulas.find(f=>f.id==='mond-low-acceleration-effective-inertia');
 assert.match(mond.theoryRelationship,/limited effective formula/);
 assert.match(mond.regime,/not a complete covariant gravity theory/);
 const r2=w.QI_FORMULAS.formulas.find(f=>f.id==='starobinsky-r2-model-function');
 assert.match(r2.sourceLocations[0].locator,/Section 3.1/);
 assert.match(r2.regime,/not proof of quantum gravity/);
});
test('MOND interpolation limiting examples are dimensionless and recover high/low acceleration scaling',()=>{
 // Example mu is chosen only for the limit test; the catalog does NOT fix mu between limits.
 const mu=x=>x/(1+x),a0=1;
 for(const x of [1e-6,1e-4,1e-3])near(mu(x)/x,1/(1+x));
 assert.ok(Math.abs(mu(1e6)-1)<1e-5);
 const a=.001*a0,gN=mu(a/a0)*a;
 const approx=Math.sqrt(gN*a0);
 assert.ok(Math.abs(approx-a)/a<.001);
 const high=1e6*a0;
 assert.ok(Math.abs(mu(high/a0)*high/high-1)<1e-5);
});
test('metric R² model has the 1/(6M²) coefficient and the GR linear-curvature limit',()=>{
 const M=2, f=R=>R+R*R/(6*M*M),fp=R=>1+R/(3*M*M),fpp=1/(3*M*M);
 near(f(0),0);near(fp(0),1);
 near((f(1e-5)-f(0))/1e-5,1+1e-5/(6*M*M),1e-9);
 near(f(6*M*M),12*M*M);
 assert.ok(fpp>0);
 const tiny=1e-7*M*M;
 assert.ok(Math.abs(f(tiny)/tiny-1)<1e-6);
});
