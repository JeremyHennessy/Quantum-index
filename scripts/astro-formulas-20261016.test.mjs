import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {beforeAstroBytes,astroFormulaIds,astroSourceIds,priorAstroFormulas,priorAstroSources,priorAstroCoverage} from './astro-formulas-20261016-baseline.mjs';
import {priorDarkMatterCoverage} from './astro-darkmatter-20261016-baseline.mjs';
const sandbox={window:{}};vm.createContext(sandbox);
for(const p of ['theories.js','formulas.js','formula-audit.js','developments.js','evidence.js','questions.js','problems.js','passports.js'])
 vm.runInContext(fs.readFileSync(p,'utf8'),sandbox,{filename:p});
const w=sandbox.window;
const near=(a,b,eps=1e-12)=>assert.ok(Math.abs(a-b)<eps,a+' != '+b);

test('three source-reviewed formulas and sources are append-only after exact Git-blob boundaries',()=>{
 for(const p of ['theories.js','formulas.js'])assert.ok(beforeAstroBytes(p).length>0);
 assert.equal(astroFormulaIds.length,3);assert.equal(astroSourceIds.length,3);
 const latest=JSON.parse(fs.readFileSync('docs/coverage.json','utf8'));
 const metrics=priorDarkMatterCoverage(latest);
 assert.equal(metrics.theories,481);assert.equal(metrics.passports,29);
 assert.equal(metrics.relations,610);assert.equal(metrics.evidenceRecords,16);
 assert.equal(metrics.sources,554);assert.equal(metrics.formulas,408);
 assert.equal(metrics.formulaCategories,30);assert.equal(metrics.formulaBearing,275);
 assert.equal(metrics.formulaGaps,160);assert.equal(metrics.explicitFormulaMetadata,159);
 assert.equal(metrics.baselineFormulaMetadata,249);
 const before=priorAstroCoverage(latest);
 assert.equal(before.sources,551);assert.equal(before.formulas,405);
 assert.equal(before.formulaCategories,29);assert.equal(before.formulaBearing,272);
 assert.equal(before.formulaGaps,163);assert.equal(before.explicitFormulaMetadata,156);
 assert.equal(priorAstroFormulas(w.QI_FORMULAS.formulas).length,405);
 assert.equal(priorAstroSources(w.QI_DATA.sources).length,551);
});

test('formula-ID source provenance and theory-level gap closures are explicit',()=>{
 const expected=[
  ['lambda-cdm-redshift-expansion','lambda-cdm','pdg-bigbang-2025-reviewed'],
  ['inflation-potential-slow-roll-2025','inflationary-cosmology','pdg-inflation-2025-reviewed'],
  ['quintessence-canonical-fluid-2008','quintessence','frieman-turner-huterer-2008-reviewed']
 ];
 for(const [fid,tid,sid] of expected){
  const rows=w.QI_FORMULAS.formulas.filter(x=>x.id===fid);
  assert.equal(rows.length,1,fid);
  const f=rows[0],audit=w.QI_FORMULA_AUDIT.entries.find(a=>a.theoryId===tid);
  assert.equal(f.category,'Astroparticle physics & cosmology');
  assert.equal(f.metadataReview,'explicit');assert.equal(f.curationBatch,'astro-first-equations-2026-10-16');
  assert.deepEqual(Array.from(f.theoryIds),[tid]);
  assert.deepEqual(Array.from(f.sourceIds),[sid]);
  assert.ok(f.assumptions.length>=4&&f.variables.length>=4);
  assert.ok(f.sourceLocations.length>=1);
  assert.ok(f.sourceLocations.every(x=>x.sourceId===sid));
  assert.equal(audit.classification,'formula-bearing',tid);
  assert.ok(audit.formulaIds.includes(fid));
 }
 const byId=new Map(w.QI_FORMULAS.formulas.map(f=>[f.id,f]));
 assert.match(byId.get('lambda-cdm-redshift-expansion').sourceLocations[2].locator,/derived combination/);
 assert.match(byId.get('inflation-potential-slow-roll-2025').assumptions.join(' '),/unreduced Planck mass/);
 assert.match(byId.get('quintessence-canonical-fluid-2008').regime,/excludes phantom/);
});

test('ΛCDM component evolution normalizes at z=0 with correct limiting powers',()=>{
 const e2=(z,r,m,k,l)=>r*(1+z)**4+m*(1+z)**3+k*(1+z)**2+l;
 near(e2(0,.0001,.3,0,.6999),1);near(e2(0,.01,.2,.05,.74),1);
 near(e2(2,0,1,0,0),27);near(e2(2,1,0,0,0),81);
 near(e2(1,0,0,0,1),1);near(e2(1,0,0,1,0),4);
});

test('PDG unreduced Planck-mass slow roll reduces correctly for a quadratic potential',()=>{
 const M=2,phi=12,m=3,pi=Math.PI,V=.5*m*m*phi*phi,Vp=m*m*phi,Vpp=m*m;
 const eps=M*M/(16*pi)*(Vp/V)**2,eta=M*M/(8*pi)*(Vpp/V);
 near(eps,M*M/(4*pi*phi*phi));near(eta,eps);
 near((M/Math.sqrt(8*pi))**2/2*(Vp/V)**2,eps);
 assert.ok(eps<1&&eta<1);
});

test('canonical quintessence has -1 <= w <= 1 for positive total density and nonnegative V',()=>{
 const w=(K,V)=>(K-V)/(K+V);
 near(w(0,1),-1);near(w(1,0),1);near(w(1,1),0);
 for(const K of [0,.2,1,10])for(const V of [.1,1,5]){
  const val=w(K,V);assert.ok(val>=-1-1e-12&&val<=1+1e-12);
 }
});
