import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {beforeCosmologyBytes,cosmologyFormulaIds,cosmologyCoveredTheoryIds,priorCosmologyFormulas,priorCosmologySources,priorCosmologyCoverage} from './cosmology-four-gaps-20261017-baseline.mjs';

const c={window:{}};vm.createContext(c);
for(const f of ['theories.js','formulas.js','formula-audit.js','developments.js','evidence.js','questions.js','problems.js','passports.js'])vm.runInContext(fs.readFileSync(f,'utf8'),c,{filename:f});
const w=c.window,near=(a,b,e=1e-10)=>assert.ok(Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<e,a+' != '+b);

test('four cosmology records append to exact accepted scientific Git blobs with generated counts',()=>{
 assert.ok(beforeCosmologyBytes('theories.js').length>0);
 assert.ok(beforeCosmologyBytes('formulas.js').length>0);
 assert.equal(new Set(cosmologyFormulaIds).size,4);
 const latest=JSON.parse(fs.readFileSync('docs/coverage.json','utf8'));
 for(const [key,value] of Object.entries({theories:481,sources:560,formulas:419,formulaCategories:30,formulaBearing:285,formulaGaps:150,explicitFormulaMetadata:170,baselineFormulaMetadata:249,passports:29,relations:610,evidenceRecords:16}))assert.equal(latest[key],value,key);
 const old=priorCosmologyCoverage(latest);
 for(const [key,value] of Object.entries({sources:558,formulas:415,formulaBearing:281,formulaGaps:154,explicitFormulaMetadata:166,baselineFormulaMetadata:249}))assert.equal(old[key],value,key);
 assert.equal(priorCosmologyFormulas(w.QI_FORMULAS.formulas).length,415);
 assert.equal(priorCosmologySources(w.QI_DATA.sources).length,558);
});
test('exact sources and formula-audit classification match four distinct existing cosmology entries',()=>{
 const cases=[
 ['kessence-factorized-density-sound-speed','k-essence','wave4-kessence-2000'],
 ['chaplygin-fluid-eos-and-scaling-2001','chaplygin-gas','kamenshchik-moschella-pasquier-2001'],
 ['freeze-in-decay-fimp-boltzmann-2010','freeze-in-dark-matter','freeze-in-2010'],
 ['leptogenesis-flavoured-decay-cp-asymmetry','leptogenesis','davidson-nardi-nir-leptogenesis-2008']
 ];
 const sources=new Set(w.QI_DATA.sources.map(x=>x.id));
 for(const [fid,tid,sid] of cases){
  const rows=w.QI_FORMULAS.formulas.filter(f=>f.id===fid);
  assert.equal(rows.length,1,fid);
  const f=rows[0],audit=w.QI_FORMULA_AUDIT.entries.find(x=>x.theoryId===tid);
  assert.equal(f.metadataReview,'explicit');assert.equal(f.category,'Astroparticle physics & cosmology');
  assert.equal(f.curationBatch,'cosmology-source-depth-2026-10-17');
  assert.deepEqual(Array.from(f.theoryIds),[tid]);assert.deepEqual(Array.from(f.sourceIds),[sid]);
  assert.ok(sources.has(sid));
  assert.ok(f.assumptions.length>=5&&f.variables.length>=5&&f.sourceLocations.length>=1);
  assert.ok(f.sourceLocations.every(x=>x.sourceId===sid&&x.url.startsWith('https://')));
  assert.equal(audit.classification,'formula-bearing');assert.ok(audit.formulaIds.includes(fid));
 }
 const all=w.QI_DATA.theories.filter(x=>x.category==='Astroparticle physics & cosmology');
 const covered=w.QI_FORMULA_AUDIT.entries.filter(x=>all.some(t=>t.id===x.theoryId)&&x.classification==='formula-bearing');
 const gaps=w.QI_FORMULA_AUDIT.entries.filter(x=>all.some(t=>t.id===x.theoryId)&&x.classification==='formula-bearing-gap');
 const conceptual=w.QI_FORMULA_AUDIT.entries.filter(x=>all.some(t=>t.id===x.theoryId)&&x.classification==='primarily conceptual');
 // Sakharov conditions are a conceptual first-class entry, not a documented formula gap.
 assert.equal(all.length,26);assert.equal(covered.length,13);assert.equal(gaps.length,12);
 assert.deepEqual(Array.from(conceptual.map(x=>x.theoryId)),['sakharov-baryogenesis']);
 assert.equal(covered.length+gaps.length+conceptual.length,26);
 assert.equal(new Set(cosmologyCoveredTheoryIds).size,4);
});
test('k-essence kinetic identities and Chaplygin conservation are mathematically consistent',()=>{
 // Model-specific illustration, not an observational fit or proof of stability.
 const K=2,X=.1,a=.5,V0=1,pt=X+a*X*X-V0,px=1+2*a*X,pxx=2*a;
 const pressure=K*pt,rho=K*(2*X*px-pt),sound=px/(px+2*X*pxx);
 near(rho,2*X*K*px-pressure);near(rho,K*(X+3*a*X*X+V0));
 assert.ok(sound>0&&sound<1);
 const A=4,B=9,R=a0=>Math.sqrt(A+B/a0**6);
 for(const z of [.5,1,2,5]){
  const density=R(z),p=-A/density;
  near(-3*B/(z**6*density),-3*(density+p));
  near(density*density,A+B/z**6);
 }
 near(R(.01)*.01**3,Math.sqrt(B),1e-11);
 near(R(1e4),Math.sqrt(A),1e-10);
});
test('FIMP production has positive thermal source, and lepton flavour asymmetry is signed and bounded',()=>{
 // Integral representation of positive K1 kernel; no invented observed production rate.
 const BesselK1=z=>{const n=400,h=8/n;let sum=0;for(let i=0;i<=n;i++){const u=i*h;sum+=(i===0||i===n?1:i%2?4:2)*Math.exp(-z*Math.cosh(u))*Math.cosh(u)}return sum*h/3};
 assert.ok(BesselK1(.5)>BesselK1(3)&&BesselK1(3)>0);
 const collision=(g,m,G,T)=>g*m*m*G*T*BesselK1(m/T)/(2*Math.PI**2);
 assert.ok(collision(2,2,.01,1)>0);near(collision(2,2,0,1),0);
 const e=(p,q,i)=>(p[i]-q[i])/(p.reduce((s,x)=>s+x,0)+q.reduce((s,x)=>s+x,0));
 near(e([1,2,3],[1,2,3],1),0);
 near(e([1,3,2],[1,1,2],1),-e([1,1,2],[1,3,2],1));
 for(const x of [[0,1,0],[2,0,1]])for(const y of [[1,0,1],[.5,2,3]])for(const i of [0,1,2])assert.ok(Math.abs(e(x,y,i))<=1);
});
