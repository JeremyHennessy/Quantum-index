import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {passportSourceReview,passportFingerprint,restorePassportFormula,priorPassportSources,priorHeldPassports,priorPassportCoverage} from './passport-source-review-20261013-baseline.mjs';

const sandbox={window:{}};vm.createContext(sandbox);
for(const file of ['theories.js','developments.js','evidence.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','passports.js'])
  vm.runInContext(fs.readFileSync(file,'utf8'),sandbox,{filename:file});
const w=sandbox.window;
const formula=id=>w.QI_FORMULAS.formulas.find(f=>f.id===id);
const passport=id=>w.QI_PASSPORTS.records.find(p=>p.theoryId===id);

test('four held Passports are now source-reviewed while the preceding 25-record view reconstructs exactly',()=>{
  assert.deepEqual(passportSourceReview.addedPassportTheoryIds,['qed','yang-mills','gksl','quantum-error-correction']);
  assert.equal(w.QI_PASSPORTS.records.length,29);
  assert.equal(priorHeldPassports(w.QI_PASSPORTS.records).length,25);
  assert.equal(w.QI_DATA.sources.length,550);
  assert.equal(priorPassportSources(w.QI_DATA.sources).length,549);
  for(const id of passportSourceReview.addedPassportTheoryIds){
    const p=passport(id);assert.ok(p,id);assert.equal(p.reviewedAt,'2026-10-13');
    assert.ok(p.assumptions.length>=4,id);assert.ok(p.limitations.length>=3,id);
    assert.ok(p.comparisonFrameworks.length>=3,id);assert.ok(p.usefulDiscriminators.length>=3,id);
    assert.ok(p.unresolvedQuestions.length>=2,id);assert.ok(p.sourceLocations.length>=1,id);
    assert.ok(p.whatEvidenceDoesNotEstablish.length>90,id);
    for(const fid of p.formulaIds)assert.ok(formula(fid),id+' formula '+fid);
    for(const sid of p.sourceIds)assert.equal(w.QI_DATA.sources.filter(s=>s.id===sid).length,1,id+' source '+sid);
  }
});

test('seven reviewed formulas match the audited after-state and reconstruct every exact before-state',()=>{
  for(const id of passportSourceReview.reviewedFormulaIds){
    const current=formula(id),edit=passportSourceReview.formulaEdits[id];
    assert.equal(passportFingerprint(current),passportFingerprint(edit.after),id+' current');
    const historical=restorePassportFormula(current);
    assert.equal(passportFingerprint(historical),passportFingerprint(edit.before),id+' historical');
    assert.equal(current.metadataReview,'explicit',id);
    assert.equal(current.reviewedAt,'2026-10-13',id);
    assert.equal(current.curationBatch,'passport-source-review-2026-10-13',id);
    assert.ok(current.assumptions.length>=3,id);assert.ok(current.variables.length>=3,id);assert.ok(current.sourceLocations.length>=1,id);
  }
});

test('QED formula no longer mixes explicit constants with an undefined natural-unit covariant derivative',()=>{
  const q=formula('qed-lagrangian'),prop=formula('fermion-propagator');
  assert.equal(q.latex,String.raw`\mathcal L_{\mathrm{QED}}=-\frac14F_{\mu\nu}F^{\mu\nu}+\bar\psi(i\gamma^\mu D_\mu-m)\psi`);
  assert.doesNotMatch(q.latex,/\\hbar|c\\gamma/);
  assert.match(q.assumptions.join(' '),/Natural units hbar=c=1/);
  assert.match(q.assumptions.join(' '),/D_mu psi = \(partial_mu \+ i e A_mu\)psi/);
  assert.ok(q.sourceIds.includes('tong-qft-qed-notes'));
  assert.match(q.sourceLocations[0].locator,/Sec\. 6\.3/);
  assert.match(prop.sourceLocations[0].locator,/Eq\. \(5\.35\)/);
  assert.match(passport('qed').limitations.join(' '),/electroweak|strong external fields/i);
});

test('Yang-Mills review distinguishes original SU(2) conventions from modern generic notation',()=>{
  const f=formula('yang-mills-field'),L=formula('yang-mills-lagrangian'),p=passport('yang-mills');
  assert.match(f.assumptions.join(' '),/SU\(2\).*modern generalization/i);
  assert.match(f.sourceLocations[0].locator,/Eqs\. \(4\)–\(9\)/);
  assert.match(L.sourceLocations[0].locator,/Eq\. \(11\)/);
  assert.match(L.regime,/does not.*confinement|not a proof of confinement/i);
  assert.match(p.whatEvidenceDoesNotEstablish,/mass gap|confinement/i);
});

test('GKSL review keeps the bounded semigroup theorem separate from general non-Markovian dynamics',()=>{
  const f=formula('lindblad'),p=passport('gksl');
  assert.match(f.assumptions.join(' '),/bounded\/norm-continuous generator/i);
  assert.match(f.regime,/non-Markovian.*outside/i);
  assert.ok(f.sourceLocations.some(x=>/Theorem 2/.test(x.locator)&&/4\.2/.test(x.locator)&&/4\.3/.test(x.locator)));
  assert.match(p.whatEvidenceDoesNotEstablish,/does not say every open quantum system is Markovian/i);
});

test('QEC now cites the original recovery conditions and keeps stabilizer codes a subclass',()=>{
  const kl=formula('knill-laflamme'),st=formula('stabilizer-condition'),p=passport('quantum-error-correction');
  assert.deepEqual([...kl.sourceIds],['knill-laflamme-1997']);
  assert.match(kl.sourceLocations[0].locator,/Eqs\. \(6\)–\(7\)/);
  assert.match(kl.assumptions.join(' '),/specified set.*correctable/i);
  assert.match(st.assumptions.join(' '),/subclass.*not all QEC codes/i);
  assert.match(p.whatEvidenceDoesNotEstablish,/fault-tolerant logical error rates/i);
});

test('generated coverage records only the declared source, Passport and metadata changes',()=>{
  const c=JSON.parse(fs.readFileSync('docs/coverage.json','utf8'));
  assert.equal(c.sources,550);assert.equal(c.passports,29);
  assert.equal(c.formulas,405);assert.equal(c.formulaGaps,163);
  assert.equal(c.explicitFormulaMetadata,157);assert.equal(c.baselineFormulaMetadata,248);
  const prior=priorPassportCoverage(c);
  for(const [key,value] of Object.entries(passportSourceReview.baselineCounts))assert.equal(prior[key],value,key);
});
