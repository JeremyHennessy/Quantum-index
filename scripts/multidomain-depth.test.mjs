import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

import {verifyDepthFile} from './multidomain-depth-baseline.mjs';
const ledger=JSON.parse(fs.readFileSync('docs/MULTIDOMAIN_DEPTH_2026-10-08.json','utf8'));
const files=['theories.js','developments.js','formulas.js','formula-audit.js','profiles.js','questions.js','evidence.js','problems.js','passports.js','workspace.js'];
const sandbox={window:{}};vm.createContext(sandbox);
for(const file of files)vm.runInContext(fs.readFileSync(file,'utf8'),sandbox,{filename:file});
const w=sandbox.window;
const formula=id=>w.QI_FORMULAS.formulas.find(f=>f.id===id);
const evidence=id=>w.QI_EVIDENCE.records.find(e=>e.id===id);
const passport=id=>w.QI_PASSPORTS.records.find(p=>p.theoryId===id);

function near(a,b,eps=1e-12){assert.ok(Math.abs(a-b)<eps,Math.abs(a-b)+' >= '+eps);}

test('multidomain batch is additive and preserves protected application/scientific files',()=>{
  for(const path of ['theories.js','app.js','styles.css','workspace.js','profiles.js','questions.js','problems.js','developments.js','package.json','package-lock.json','.github/workflows/validate.yml']){
    verifyDepthFile(path,ledger.baselineBlobSha[path]);
  }
  for(const path of Object.keys(ledger.appendedMarkers))verifyDepthFile(path,ledger.baselineBlobSha[path]);
  assert.equal(w.QI_DATA.theories.length,ledger.expectedCounts.theories);
  assert.equal(w.QI_DATA.relations.length,ledger.expectedCounts.relations);
  assert.equal(new Set(w.QI_DATA.theories.map(x=>x.id)).size,w.QI_DATA.theories.length);
  assert.equal(new Set(w.QI_DATA.relations.map(x=>x.from+'|'+x.to+'|'+x.type)).size,w.QI_DATA.relations.length);
});

test('new identifiers are unique, source-backed and produce exactly the declared depth-count changes',()=>{
  assert.equal(w.QI_DATA.sources.length,ledger.expectedCounts.sources);
  assert.equal(w.QI_FORMULAS.formulas.length,ledger.expectedCounts.formulas);
  assert.equal(w.QI_EVIDENCE.records.length,ledger.expectedCounts.evidence);
  assert.ok(w.QI_PASSPORTS.records.length>=ledger.expectedCounts.passports,'historical release Passports must remain');
  for(const [items,key] of [[w.QI_DATA.sources,'id'],[w.QI_FORMULAS.formulas,'id'],[w.QI_EVIDENCE.records,'id'],[w.QI_PASSPORTS.records,'theoryId']])assert.equal(new Set(items.map(x=>x[key])).size,items.length,key);
  for(const id of ledger.addedSourceIds)assert.equal(w.QI_DATA.sources.filter(x=>x.id===id).length,1,id);
  for(const id of ledger.addedFormulaIds)assert.equal(w.QI_FORMULAS.formulas.filter(x=>x.id===id).length,1,id);
  for(const id of ledger.addedEvidenceIds)assert.equal(w.QI_EVIDENCE.records.filter(x=>x.id===id).length,1,id);
  for(const id of ledger.addedPassportTheoryIds)assert.equal(w.QI_PASSPORTS.records.filter(x=>x.theoryId===id).length,1,id);
  const coverage=JSON.parse(fs.readFileSync('docs/coverage.json','utf8'));
  for(const key of ['sources','formulas','evidenceRecords','formulaBearing','formulaGaps','explicitFormulaMetadata','baselineFormulaMetadata'])assert.equal(coverage[key],key==='evidenceRecords'?ledger.expectedCounts.evidence:ledger.expectedCounts[key],key);
  assert.ok(coverage.passports>=ledger.expectedCounts.passports,'historical Passport count must remain');
});

test('neutrino formula closure retains the source conventions and audit moves only to formula-bearing',()=>{
  const mix=formula('neutrino-flavor-mixing-state'),prob=formula('neutrino-vacuum-oscillation-probability');
  for(const f of [mix,prob]){
    assert.equal(f.metadataReview,'explicit');assert.equal(f.curationBatch,'multidomain-depth-2026-10-08');
    assert.deepEqual([...f.theoryIds],['neutrino-mixing']);assert.deepEqual([...f.sourceIds],['pdg-neutrino-mixing-2026']);
    assert.ok(f.assumptions.length>=3);assert.ok(f.variables.length>=4);assert.equal(f.sourceLocations.length,1);
    assert.match(f.sourceLocations[0].url,/rpp2026-rev-neutrino-mixing\.pdf#page=8/);
  }
  assert.match(mix.latex,/U_\{\\alpha i\}\^\{\*\}/);
  assert.match(prob.latex,/\\sum_\{i>j\}/);
  assert.match(prob.regime,/Matter effects/);
  const audit=w.QI_FORMULA_AUDIT.entries.find(x=>x.theoryId==='neutrino-mixing');
  assert.equal(audit.classification,'formula-bearing');assert.deepEqual([...audit.formulaIds].sort(),ledger.addedFormulaIds.filter(id=>id.startsWith('neutrino-')).sort());
  // Independent two-flavor reduction of the general real-U survival/transition terms.
  for(const theta of [0,.1,.4,.7])for(const X of [0,.2,1,2]){
    const c=Math.cos(theta),s=Math.sin(theta);
    const pee=1-4*c*c*s*s*Math.sin(X)**2;
    const pemu=4*c*c*s*s*Math.sin(X)**2;
    near(pee,1-Math.sin(2*theta)**2*Math.sin(X)**2);near(pee+pemu,1);
  }
});

test('Brans-Dicke formula and Cassini evidence stay model-scoped',()=>{
  const f=formula('brans-dicke-scalar-tensor-action'),ev=evidence('ev-cassini-ppn-2003'),p=passport('brans-dicke');
  assert.equal(f.formulaType,'defining');assert.equal(f.metadataReview,'explicit');
  assert.match(f.latex,/\\xi\\Phi R\(g,\\Gamma\)/);assert.match(f.latex,/\\frac\{\\omega\}\{\\Phi\}/);
  assert.match(f.assumptions.join(' '),/No scalar self-interaction potential/);
  assert.match(f.regime,/not a quantum-gravity action/i);
  assert.match(f.sourceLocations[0].locator,/Eq\. \(52\)/);
  assert.match(ev.result,/gamma = 1 \+ \(2\.1 ± 2\.3\) × 10\^-5/);
  assert.match(ev.constrains.join(' '),/constant-parameter massless Brans/i);
  assert.match(ev.doesNotEstablish.join(' '),/every scalar–tensor theory/i);
  assert.match(p.evidenceSummary,/model-dependent/i);
  assert.equal(w.QI_FORMULA_AUDIT.entries.find(x=>x.theoryId==='brans-dicke').classification,'formula-bearing');
});

test('new empirical records preserve the observed-vs-model distinction',()=>{
  const mott=evidence('ev-bose-mott-transition-2002'),rabi=evidence('ev-cavity-rabi-1996');
  assert.match(mott.result,/reversibly/);assert.match(mott.result,/Mott-insulating/);
  assert.match(mott.doesNotEstablish.join(' '),/not.*exactly|exactly/i);
  assert.match(rabi.result,/square roots of successive photon numbers/);
  assert.match(rabi.doesNotEstablish.join(' '),/ideal lossless Jaynes–Cummings Hamiltonian is exact/i);
  for(const ev of [mott,rabi,evidence('ev-cassini-ppn-2003')]){
    assert.ok(ev.sourceIds.length);assert.ok(ev.sourceLocations.length);assert.equal(ev.reviewedAt,'2026-10-08');
  }
});

test('seven new Passports are comparison-ready and do not overstate scientific status',()=>{
  for(const id of ledger.addedPassportTheoryIds){
    const p=passport(id);assert.equal(p.reviewedAt,'2026-10-08',id);
    assert.ok(p.assumptions.length>=3,id);assert.ok(p.predictionsConsequences.length>=2,id);assert.ok(p.limitations.length>=2,id);
    assert.ok(p.formulaIds.length>=1,id);assert.ok(p.sourceIds.length>=1,id);
    for(const fid of p.formulaIds)assert.ok(formula(fid),id+' formula '+fid);
    for(const eid of p.evidenceIds)assert.ok(evidence(eid),id+' evidence '+eid);
    for(const sid of p.sourceIds)assert.ok(w.QI_DATA.sources.some(s=>s.id===sid),id+' source '+sid);
  }
  assert.match(passport('hartree-fock').limitations.join(' '),/correlation/i);
  assert.match(passport('bcs-theory').limitations.join(' '),/unconventional|strong/i);
  assert.match(passport('density-functional-theory').limitations.join(' '),/exchange-correlation|functional/i);
  assert.match(passport('jaynes-cummings').limitations.join(' '),/ultrastrong/i);
  assert.match(passport('neutrino-mixing').limitations.join(' '),/absolute mass/i);
});
