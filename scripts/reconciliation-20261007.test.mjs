import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
const files=['theories.js','developments.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','evidence.js','passports.js'];
const sandbox={window:{}};vm.createContext(sandbox);
for(const f of files)vm.runInContext(fs.readFileSync(f,'utf8'),sandbox,{filename:f});
const w=sandbox.window;
const ledger=JSON.parse(fs.readFileSync('docs/RECONCILIATION_2026-10-07.json','utf8'));
const lattice=JSON.parse(fs.readFileSync('docs/LATTICE_CURATION_2026-10-07.json','utf8'));
const followup=JSON.parse(fs.readFileSync('docs/COMPARE_ZENO_2026-10-07.json','utf8'));
const hash=v=>createHash('sha256').update(v).digest('hex');
const amo=JSON.parse(fs.readFileSync('docs/AMO_STEERING_2026-10-07.json','utf8'));
const canonical=v=>Array.isArray(v)?v.map(canonical):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,canonical(v[k])])):v;
const newFormulaIds=['configuration-ensemble-hamiltonian','cq-backreaction-decoherence-diffusion','cq-decoherence-diffusion-tradeoff'];

test('reconciliation preserves every baseline theory, formula, profile and Passport exactly',()=>{
 const items={theories:w.QI_DATA.theories.filter(t=>t.id!=='configuration-ensemble-cq'),formulas:w.QI_FORMULAS.formulas.filter(f=>!newFormulaIds.includes(f.id)&&!followup.addedFormulaIds.includes(f.id)&&!lattice.addedFormulaIds.includes(f.id)&&!amo.addedFormulaIds.includes(f.id)),profiles:w.QI_PROFILES.profiles};
 for(const [name,raw] of Object.entries(items)){
   const data=Array.isArray(raw)?[...raw].sort((a,b)=>a.id<b.id?-1:a.id>b.id?1:0):raw;
   assert.equal(Array.isArray(data)?data.length:Object.keys(data).length,ledger.baselineIntegrity[name].count,name);
   assert.equal(hash(JSON.stringify(canonical(data))),ledger.baselineIntegrity[name].sha256,name);
 }
 for(const [file,expected] of Object.entries(ledger.baselineFiles)){
  if(followup.updatedFiles[file])assert.equal(followup.previousFiles[file],expected,`${file}: original checkpoint`);
  if(lattice.updatedFiles[file])assert.equal(lattice.previousFiles[file],followup.updatedFiles[file]||expected,`${file}: lattice predecessor`);
  if(amo.updatedFiles[file])assert.equal(amo.previousFiles[file],lattice.updatedFiles[file]||followup.updatedFiles[file]||expected,`${file}: AMO predecessor`);
  assert.equal(hash(fs.readFileSync(file)),amo.updatedFiles[file]||lattice.updatedFiles[file]||followup.updatedFiles[file]||expected,file);
 }
});

test('CQ formulas preserve literal TeX, normalization, support conditions and source versions',()=>{
 const f=w.QI_FORMULAS.formulas.find(f=>f.id==='cq-decoherence-diffusion-tradeoff');
 assert.equal(f.latex,String.raw`4D_2\succeq D_0^{-1}`);
 assert.ok(f.assumptions.some(x=>/Hamiltonian drift/.test(x)));
 assert.ok(f.assumptions.some(x=>/support/.test(x)&&/generalized inverse/.test(x)));
 assert.ok(f.assumptions.some(x=>/non-Markovian/.test(x)));
 assert.ok(f.sourceLocations.some(s=>s.url.endsWith('2307.02557v1')&&/54/.test(s.locator)&&/55/.test(s.locator)));
 const observational=w.QI_FORMULAS.formulas.find(f=>f.id==='cq-backreaction-decoherence-diffusion');
 assert.ok(observational.variables.some(x=>/<D_0>: scalar/.test(x)));
 assert.ok(observational.assumptions.some(x=>/either D_1/.test(x)&&/not an unproved/.test(x)));
 assert.ok(observational.sourceLocations.some(s=>s.url.endsWith('2203.01982v1')&&/26/.test(s.locator)));
 for(const id of newFormulaIds){
  const item=w.QI_FORMULAS.formulas.find(f=>f.id===id);assert.ok(item,id);
  assert.doesNotMatch(item.latex,/[\x00-\x08\x0b\x0c\x0e-\x1f]/,id);
  assert.ok(item.assumptions.length>=3,id);assert.ok(item.sourceLocations.length,id);
 }
});

test('all scientific-layer references resolve and generated source count equals the browser runtime',()=>{
 const sources=new Set(w.QI_DATA.sources.map(s=>s.id)),theories=new Set(w.QI_DATA.theories.map(t=>t.id)),formulas=new Set(w.QI_FORMULAS.formulas.map(f=>f.id)),evidence=new Set(w.QI_EVIDENCE.records.map(e=>e.id)),events=new Set(w.QI_DEVELOPMENTS.events.map(e=>e.id)),questions=new Set(w.QI_QUESTIONS.questions.map(q=>q.id)),problems=new Set(w.QI_PROBLEMS.problems.map(p=>p.id));
 const links={sourceIds:sources,relatedTheoryIds:theories,theoryIds:theories,formulaIds:formulas,relatedFormulaIds:formulas,evidenceIds:evidence,relatedEvidenceIds:evidence,developmentIds:events,questionIds:questions,relatedProblemIds:problems,problemIds:problems};
 function walk(v){if(!v||typeof v!=='object')return;for(const [key,value] of Object.entries(v)){if(links[key])for(const id of value)assert.ok(links[key].has(id),`${key}: ${id}`);else walk(value);}}
 for(const data of [w.QI_EVIDENCE,w.QI_DEVELOPMENTS,w.QI_PROBLEMS,w.QI_QUESTIONS,w.QI_PASSPORTS,w.QI_FORMULAS])walk(data);
 for(const [ids,records] of [[sources,w.QI_DATA.sources],[evidence,w.QI_EVIDENCE.records],[events,w.QI_DEVELOPMENTS.events],[questions,w.QI_QUESTIONS.questions]])assert.equal(ids.size,records.length);
 assert.equal(JSON.parse(fs.readFileSync('docs/coverage.json')).sources,sources.size);
 for(const id of ['hensen-bell-2015','donadi-collapse-2021','superk-atmospheric-1998',...ledger.uniqueSourcesRetained])assert.ok(sources.has(id),id);
 const aliases=ledger.sourceAliases;
 for(const old of Object.keys(aliases))assert.ok(!sources.has(old)&&!evidence.has(old)&&!events.has(old),old);
});

test('both branches retain their distinct model constraints without inventing extra discoveries',()=>{
 assert.equal(w.QI_DATA.theories.length,481);assert.equal(w.QI_FORMULAS.formulas.length,392+followup.addedFormulaIds.length+lattice.addedFormulaIds.length+amo.addedFormulaIds.length);
 assert.equal(w.QI_EVIDENCE.records.length,13);assert.equal(w.QI_DEVELOPMENTS.events.length,16);
 const p=w.QI_PROBLEMS.problems.find(p=>p.id==='quantum-gravity');
 for(const id of ['ev-dp-gie-2025','ev-indirect-gme-interferometry-2026','ev-cq-geodesic-deviation-2026','ev-classical-gravity-cross-correlation-2025'])assert.ok(p.evidenceIds.includes(id),id);
 for(const id of newFormulaIds)assert.ok(p.formulaIds.includes(id),id);
 const dp=w.QI_EVIDENCE.records.find(x=>x.id==='ev-dp-gie-2025');assert.ok(dp.doesNotEstablish.length>=3);
 const origin=w.QI_EVIDENCE.records.find(x=>x.id==='ev-gravity-entanglement-boundary-2025');assert.equal(origin.date,'2025-10-22');assert.equal(origin.reviewedAt,'2026-10-07');assert.equal(origin.evidenceStatus,'active theoretical controversy');
 const noise=w.QI_DEVELOPMENTS.events.find(x=>x.id==='minimal-noise-nonquantized-gravity-2026');assert.equal(noise.date,'2026-03-27');
 const event=w.QI_DEVELOPMENTS.events.find(x=>x.id==='dp-classical-gravity-gie-2025');assert.ok(event.relatedEvidenceIds.includes(dp.id));
});
