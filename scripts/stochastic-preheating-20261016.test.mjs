import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {
  preFollowupBytes,priorFollowupFormulas,priorFollowupSources,priorFollowupCoverage,
  followupFormulaIds,followupCoveredTheoryIds,followupSourceIds
} from './astro-stochastic-preheating-20261016-baseline.mjs';
import {priorDarkMatterFormulas,priorDarkMatterSources} from './astro-darkmatter-20261016-baseline.mjs';
import {priorAstroFormulas} from './astro-formulas-20261016-baseline.mjs';
import {priorMondStarobinskyCoverage} from './mond-starobinsky-20261016-baseline.mjs';
const ctx={window:{}};vm.createContext(ctx);
for(const file of ['theories.js','developments.js','formulas.js','formula-audit.js','evidence.js','questions.js','problems.js','passports.js']) {
 vm.runInContext(fs.readFileSync(file,'utf8'),ctx,{filename:file});
}
const w=ctx.window;
const near=(a,b,tol=1e-11)=>assert.ok(Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<tol,a+' != '+b);

test('append-only source and formula changes preserve exact accepted 410-formula and 556-source checkpoint',()=>{
 for(const path of ['theories.js','formulas.js'])assert.ok(preFollowupBytes(path).length>0);
 assert.deepEqual(followupCoveredTheoryIds,['stochastic-inflation','reheating-preheating']);
 assert.equal(followupFormulaIds.length,3);assert.equal(followupSourceIds.length,2);
 assert.equal(priorFollowupFormulas(w.QI_FORMULAS.formulas).length,410);
 assert.equal(priorFollowupSources(w.QI_DATA.sources).length,556);
 assert.equal(priorDarkMatterFormulas(w.QI_FORMULAS.formulas).length,408);
 assert.equal(priorAstroFormulas(w.QI_FORMULAS.formulas).length,405);
 const latest=priorMondStarobinskyCoverage(JSON.parse(fs.readFileSync('docs/coverage.json','utf8')));
 assert.equal(latest.theories,481);assert.equal(latest.passports,29);
 assert.equal(latest.relations,610);assert.equal(latest.evidenceRecords,16);
 assert.equal(latest.sources,558);assert.equal(latest.formulas,413);
 assert.equal(latest.formulaCategories,30);assert.equal(latest.formulaBearing,279);
 assert.equal(latest.formulaGaps,156);assert.equal(latest.explicitFormulaMetadata,164);
 assert.equal(latest.baselineFormulaMetadata,249);
 const previous=priorFollowupCoverage(latest);
 assert.equal(previous.sources,556);assert.equal(previous.formulas,410);
 assert.equal(previous.formulaBearing,277);assert.equal(previous.formulaGaps,158);
 assert.equal(previous.explicitFormulaMetadata,161);
});
test('both source-specific models close only intended theory-level formula gaps',()=>{
 const list=[
  ['stochastic-inflation-efold-langevin','stochastic-inflation','vennin-starobinsky-stochastic-2015'],
  ['stochastic-inflation-ito-fokker-planck','stochastic-inflation','vennin-starobinsky-stochastic-2015'],
  ['preheating-rescaled-chi-mode-1997','reheating-preheating','kofman-linde-starobinsky-reheating-1997']
 ];
 assert.equal(new Set(list.map(x=>x[1])).size,2);
 for(const [fid,tid,sid] of list){
  const rows=w.QI_FORMULAS.formulas.filter(x=>x.id===fid);
  assert.equal(rows.length,1,fid);const f=rows[0];
  assert.equal(f.category,'Astroparticle physics & cosmology');
  assert.equal(f.metadataReview,'explicit');
  assert.equal(f.curationBatch,'astro-stochastic-preheating-2026-10-16');
  assert.deepEqual(Array.from(f.theoryIds),[tid]);
  assert.deepEqual(Array.from(f.sourceIds),[sid]);
  assert.ok(f.assumptions.length>=5&&f.variables.length>=4&&f.sourceLocations.length===1);
  assert.equal(f.sourceLocations[0].sourceId,sid);
  const audit=w.QI_FORMULA_AUDIT.entries.find(x=>x.theoryId===tid);
  assert.ok(audit,tid);assert.equal(audit.classification,'formula-bearing');
  assert.ok(audit.formulaIds.includes(fid));
 }
 const lag=w.QI_FORMULAS.formulas.find(x=>x.id==='stochastic-inflation-efold-langevin');
 const fp=w.QI_FORMULAS.formulas.find(x=>x.id==='stochastic-inflation-ito-fokker-planck');
 const pr=w.QI_FORMULAS.formulas.find(x=>x.id==='preheating-rescaled-chi-mode-1997');
 assert.match(lag.sourceLocations[0].locator,/Eq\. \(1\.1\)/);
 assert.match(fp.sourceLocations[0].locator,/Eq\. \(2\.3\)/);
 assert.match(fp.assumptions.join(' '),/Itô/);
 assert.match(pr.sourceLocations[0].locator,/Eq\. \(38\).*Eq\. \(39\)/);
 assert.match(pr.assumptions.join(' '),/Mathieu|broad resonance/);
});
test('Itô diffusion coefficient follows from source-normalized e-fold noise and cannot be pulled through field-dependent derivatives',()=>{
 for(const H of [.1,.7,2]){
  const amplitude=H/(2*Math.PI),diffusion=H*H/(8*Math.PI*Math.PI);
  near(diffusion,amplitude*amplitude/2);
  near(2*diffusion,amplitude*amplitude);
 }
 // Example H^2(phi)=1+phi^2, P(phi)=exp(-phi^2):
 // at phi=0, d²[(1+phi²)P]/dphi²=0 but H²d²P/dphi²=-2.
 const h=1e-4,P=x=>Math.exp(-x*x),prod=x=>(1+x*x)*P(x);
 const d2=f=>(f(h)-2*f(0)+f(-h))/(h*h);
 assert.ok(Math.abs(d2(prod))<1e-6);
 assert.ok(Math.abs(d2(P)+2)<1e-6);
 assert.ok(Math.abs(d2(prod)-d2(P))>1);
});
test('preheating residual mass term has correct source signs and cancels for massless minimal matter-era expansion',()=>{
 // Source: Delta = m_chi^2 - 3/4 H^2 - 3/2 (a_ddot/a) - xi R.
 for(const t of [1,2,7]){
  const H=2/(3*t),aDDotOverA=-2/(9*t*t),mChi=0,xi=0,R=4/(3*t*t);
  const delta=mChi*mChi-.75*H*H-1.5*aDDotOverA-xi*R;
  near(delta,0);
 }
 const t=2,H=2/(3*t),aDDotOverA=-2/(9*t*t),R=4/(3*t*t);
 const delta=(mass,xi)=>mass*mass-.75*H*H-1.5*aDDotOverA-xi*R;
 near(delta(3,0),9);near(delta(0,.5),-.5*R);
 const a=3,k=6,g=.4,Phi=2,mt=Math.PI/2;
 const omega2=k*k/(a*a)+g*g*Phi*Phi*Math.sin(mt)**2+delta(0,0);
 near(omega2,4+.64);
});
