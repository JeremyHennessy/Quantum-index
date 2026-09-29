import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

function load(){
  const sandbox={window:{}};
  vm.createContext(sandbox);
  for(const file of ['theories.js','developments.js','formulas.js','formula-audit.js','questions.js','evidence.js','problems.js'])vm.runInContext(fs.readFileSync(file,'utf8'),sandbox);
  return sandbox.window;
}

test('gravity discrimination layer is model-resolved and source-backed',()=>{
  const w=load();
  const theory=w.QI_DATA.theories.find(x=>x.id==='configuration-ensemble-cq');
  assert.ok(theory);
  assert.equal(theory.provenance,'primary-sourced');
  assert.equal(theory.lastReviewed,'2026-09-29');
  for(const id of ['hall-reginatto-ensembles-2005','chua-hall-savage-hybrid-2012','hall-reginatto-savage-signaling-2012','reginatto-hall-classical-gravity-2019'])assert.ok(theory.sources.includes(id),id);

  const relation=w.QI_DATA.relations.find(r=>r.from==='configuration-ensemble-cq'&&r.to==='bmv-gravity-entanglement');
  assert.ok(relation);
  assert.equal(relation.type,'challenges');
  assert.equal(relation.confidence,'high');
  assert.ok(relation.sourceIds.length>=2);

  const formula=w.QI_FORMULAS.formulas.find(x=>x.id==='configuration-ensemble-hamiltonian');
  assert.ok(formula);
  assert.equal(formula.formulaType,'defining');
  assert.equal(formula.metadataReview,'explicit');
  assert.ok(formula.sourceLocations.some(x=>/Eq\. \(1\)/.test(x.locator)));

  const tradeoff=w.QI_FORMULAS.formulas.find(x=>x.id==='cq-backreaction-decoherence-diffusion');
  assert.ok(tradeoff);
  assert.match(tradeoff.regime,/Markovian/i);
  assert.ok(tradeoff.assumptions.some(x=>/completely-positive/i.test(x)));

  const q=w.QI_QUESTIONS.questions.find(x=>x.id==='rq-gravity-entanglement-discrimination');
  assert.ok(q.relatedTheoryIds.includes('configuration-ensemble-cq'));
  assert.match(q.shortAnswer,/not model-independent/i);

  const e=w.QI_EVIDENCE.records.find(x=>x.id==='ev-gravity-entanglement-boundary-2025');
  assert.equal(e.evidenceStatus,'active theoretical controversy');
  assert.ok(e.relatedTheoryIds.includes('configuration-ensemble-cq'));

  const p=w.QI_PROBLEMS.problems.find(x=>x.id==='quantum-gravity');
  assert.ok(p.questionIds.includes(q.id));
  assert.ok(p.evidenceIds.includes('ev-indirect-gme-interferometry-2026'));
  assert.ok(p.evidenceIds.includes('ev-cq-geodesic-deviation-2026'));
  assert.ok(p.formulaIds.includes(tradeoff.id));
  assert.ok(p.approachGroups.some(g=>g.theoryIds.includes('configuration-ensemble-cq')));
});

test('gravity evidence preserves important inference boundaries',()=>{
  const w=load();
  const boundary=w.QI_EVIDENCE.records.find(x=>x.id==='ev-gravity-entanglement-boundary-2025');
  assert.ok(boundary.constrains.some(x=>/entanglement alone/i.test(x)));
  assert.ok(boundary.doesNotEstablish.some(x=>/all classical\/hybrid models can generate entanglement/i.test(x)));

  const cq=w.QI_EVIDENCE.records.find(x=>x.id==='ev-cq-decoherence-diffusion-2023');
  assert.ok(cq.doesNotEstablish.some(x=>/non-Markovian/i.test(x)));

  const noise=w.QI_EVIDENCE.records.find(x=>x.id==='ev-minimal-noise-nonquantized-gravity-2026');
  assert.ok(noise.constrains.some(x=>/time-local/i.test(x)));
  assert.ok(noise.doesNotEstablish.some(x=>/fully relativistic/i.test(x)));
});
