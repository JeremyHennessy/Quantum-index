import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

function load(){
  const sandbox={window:{}};
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync('theories.js','utf8'),sandbox);
  vm.runInContext(fs.readFileSync('formulas.js','utf8'),sandbox);
  return sandbox.window;
}
const map=formulas=>new Map(formulas.map(f=>[f.id,f]));

test('scientific-trust corrections keep formula conventions and provenance explicit',()=>{
  const w=load(), formulas=map(w.QI_FORMULAS.formulas), sources=new Set(w.QI_DATA.sources.map(s=>s.id));
  for(const id of ['robertson-uncertainty-1929','braunstein-caves-1994','steck-quantum-atom-optics-2026','pezze-quantum-metrology-2018','layton-weak-field-cq-2023','oppenheim-decoherence-diffusion-2023']) assert.ok(sources.has(id),id);

  const we=formulas.get('wigner-eckart');
  assert.ok(we.latex.includes("\\langle j||T^{(k)}||j'\\rangle"));
  assert.ok(!we.latex.includes("\\langle j'||T^{(k)}||j\\rangle"));
  assert.equal(we.metadataReview,'explicit');
  assert.ok(we.sourceIds.includes('steck-quantum-atom-optics-2026'));
  assert.ok(we.sourceLocations.some(x=>/7\.239/.test(x.locator)));

  const pure=formulas.get('quantum-fisher');
  assert.ok(pure.sourceIds.includes('braunstein-caves-1994'));
  assert.ok(!pure.sourceIds.includes('schumacher-1995'));
  assert.equal(pure.metadataReview,'explicit');

  const mixed=formulas.get('mixed-qfi');
  assert.ok(mixed.latex.includes("\\lambda_i+\\lambda_j>0"));
  assert.ok(mixed.assumptions.some(x=>/rank-deficient/.test(x)));
  assert.equal(mixed.metadataReview,'explicit');

  const qcrb=formulas.get('cramer-rao');
  assert.ok(qcrb.sourceIds.includes('braunstein-caves-1994'));
  assert.ok(qcrb.assumptions.some(x=>/locally unbiased/.test(x)));
  assert.ok(qcrb.assumptions.some(x=>/independent/.test(x)));

  const uncertainty=formulas.get('heisenberg-uncertainty');
  assert.equal(uncertainty.name,'Robertson uncertainty relation');
  assert.ok(uncertainty.sourceIds.includes('robertson-uncertainty-1929'));
  assert.equal(uncertainty.metadataReview,'explicit');

  const cq=formulas.get('cq-decoherence-diffusion-tradeoff');
  assert.ok(cq);
  assert.equal(cq.formulaType,'canonical');
  assert.equal(cq.metadataReview,'explicit');
  assert.ok(cq.theoryIds.includes('postquantum-classical-gravity'));
  assert.ok(cq.assumptions.some(x=>/Markovian/i.test(x)));
  assert.match(cq.regime,/not a universal constraint on arbitrary non-Markovian/i);
  assert.ok(cq.sourceLocations.some(x=>/4\.12/.test(x.locator)));
});
