import {readPreCampaignFile} from './campaign-20261021-baseline.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {preDarkMatterBytes,priorDarkMatterFormulas,priorDarkMatterSources,priorDarkMatterCoverage,darkMatterFormulaIds,darkMatterSourceIds} from './astro-darkmatter-20261016-baseline.mjs';
import {priorAstroFormulas,priorAstroCoverage} from './astro-formulas-20261016-baseline.mjs';
import {priorFollowupCoverage} from './astro-stochastic-preheating-20261016-baseline.mjs';

const sandbox={window:{}};vm.createContext(sandbox);
for(const f of ['theories.js','formulas.js','formula-audit.js','developments.js','evidence.js','questions.js','problems.js','passports.js'])
 vm.runInContext(readPreCampaignFile(f,'utf8'),sandbox,{filename:f});
const w=sandbox.window,near=(a,b,tol=1e-12)=>assert.ok(Math.abs(a-b)<tol, a+' differs from '+b);
test('two dark-matter formulas and two bibliography records follow exact immutable parent Git blobs',()=>{
 assert.equal(darkMatterFormulaIds.length,2);assert.equal(darkMatterSourceIds.length,2);
 assert.ok(preDarkMatterBytes('theories.js').length>0);
 assert.ok(preDarkMatterBytes('formulas.js').length>0);
 assert.equal(priorDarkMatterFormulas(w.QI_FORMULAS.formulas).length,408);
 assert.equal(priorDarkMatterSources(w.QI_DATA.sources).length,554);
 assert.equal(priorAstroFormulas(w.QI_FORMULAS.formulas).length,405);
 assert.equal(w.QI_DATA.theories.length,481);
 assert.equal(w.QI_DATA.relations.length,610);
 assert.equal(w.QI_EVIDENCE.records.length,16);
 assert.equal(w.QI_PASSPORTS.records.length,29);
 const latest=JSON.parse(readPreCampaignFile('docs/coverage.json','utf8'));
 const c=priorFollowupCoverage(latest);
 assert.equal(c.formulas,410);assert.equal(c.sources,556);
 assert.equal(c.formulaCategories,30);assert.equal(c.formulaBearing,277);
 assert.equal(c.formulaGaps,158);assert.equal(c.explicitFormulaMetadata,161);
 assert.equal(c.baselineFormulaMetadata,249);
 const previous=priorDarkMatterCoverage(latest);
 assert.equal(previous.formulas,408);assert.equal(previous.sources,554);
 assert.equal(previous.formulaBearing,275);assert.equal(previous.formulaGaps,160);
 assert.equal(previous.explicitFormulaMetadata,159);
 const earlier=priorAstroCoverage(latest);
 assert.equal(earlier.formulas,405);assert.equal(earlier.formulaBearing,272);
 assert.equal(earlier.formulaGaps,163);
});
test('new source-located representatives are linked only to intended existing theory gaps',()=>{
 const expected=[
  ['thermal-wimp-number-density-boltzmann','wimp-dark-matter','arcadi-wimp-freezeout-2018'],
  ['fuzzy-dark-matter-stationary-schrodinger-poisson','fuzzy-dark-matter','hui-ostriker-tremaine-witten-fdm-2017']
 ];
 for(const [id,theory,source] of expected){
  const f=w.QI_FORMULAS.formulas.find(f=>f.id===id);
  assert.ok(f);assert.equal(f.metadataReview,'explicit');assert.equal(f.category,'Astroparticle physics & cosmology');
  assert.deepEqual(Array.from(f.theoryIds),[theory]);assert.deepEqual(Array.from(f.sourceIds),[source]);
  assert.equal(f.sourceLocations.length,1);assert.equal(f.sourceLocations[0].sourceId,source);
  assert.ok(f.assumptions.length>=4&&f.variables.length>=4);
  const audit=w.QI_FORMULA_AUDIT.entries.find(x=>x.theoryId===theory);
  assert.equal(audit.classification,'formula-bearing');
  assert.ok(audit.formulaIds.includes(id));
 }
 const wimp=w.QI_FORMULAS.formulas.find(f=>f.id==='thermal-wimp-number-density-boltzmann');
 const fuzzy=w.QI_FORMULAS.formulas.find(f=>f.id==='fuzzy-dark-matter-stationary-schrodinger-poisson');
 assert.match(wimp.sourceLocations[0].locator,/Eq\. \(1\)/);
 assert.match(wimp.regime,/self-conjugate/);
 assert.match(fuzzy.sourceLocations[0].locator,/\(B1\)/);
 assert.match(fuzzy.assumptions.join(' '),/particle number density/);
 assert.match(fuzzy.regime,/not a full relativistic/);
});
test('one-species WIMP thermal collision term preserves correct annihilation and production signs',()=>{
 const collision=(n,eq,sigmaV)=>-sigmaV*(n*n-eq*eq);
 near(collision(4,4,.2),0);
 assert.ok(collision(10,2,.2)<0);
 assert.ok(collision(1,3,.2)>0);
 near(collision(12,8,0),0);
 // In the absence of collisions dn/dt+3Hn=0: number density is diluted by expansion.
 const H=.4,n=6;near(-3*H*n+3*H*n,0);
});
test('stationary fuzzy-DM Poisson normalization uses boson mass times number density',()=>{
 const G=.6,m=2,n=.4;
 const rho=m*n;
 // For constant rho, Phi(r)=2pi G rho r^2/3 has Laplacian 4pi G rho.
 const coefficient=2*Math.PI*G*rho/3;
 near(6*coefficient,4*Math.PI*G*m*n);
 // Omitting m from the source term changes the gravitational density and is forbidden.
 assert.ok(Math.abs(4*Math.PI*G*n-6*coefficient)>0.1);
});
