import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

function load(){
  const sandbox={window:{}};
  vm.createContext(sandbox);
  for(const file of ['theories.js','formulas.js','formula-audit.js']) vm.runInContext(fs.readFileSync(file,'utf8'),sandbox);
  return sandbox.window;
}

test('formula-depth pilot adds five reviewed representatives with four documented-gap closures',()=>{
  const w=load(), byId=new Map(w.QI_FORMULAS.formulas.map(f=>[f.id,f]));
  const expected=[
    ['metric-fr-field-equation','f-r-gravity'],
    ['eth-ansatz','eigenstate-thermalization'],
    ['coherence-resource-measures','coherence-resource-theory'],
    ['projective-quantum-discord','quantum-discord'],
    ['aharonov-bohm-magnetic-phase','aharonov-bohm']
  ];
  for(const [formulaId,theoryId] of expected){
    const f=byId.get(formulaId);
    assert.ok(f,formulaId);
    assert.equal(f.metadataReview,'explicit');
    assert.ok(f.assumptions.length>0);
    assert.ok(f.variables.length>0);
    assert.ok(f.sourceLocations.length>0);
    assert.ok(f.theoryIds.includes(theoryId));
    const audit=w.QI_FORMULA_AUDIT.entries.find(e=>e.theoryId===theoryId);
    assert.equal(audit.classification,'formula-bearing',theoryId);
    assert.ok(audit.formulaIds.includes(formulaId),theoryId);
  }
  assert.equal(w.QI_FORMULA_AUDIT.entries.filter(e=>e.classification==='formula-bearing-gap').length,170);
  assert.equal(w.QI_FORMULAS.formulas.filter(f=>f.metadataReview==='explicit').length,134);
});

test('formula-depth pilot keeps critical scope restrictions machine-visible',()=>{
  const w=load(), byId=new Map(w.QI_FORMULAS.formulas.map(f=>[f.id,f]));
  assert.match(byId.get('metric-fr-field-equation').regime,/Metric f\(R\)/);
  assert.match(byId.get('eth-ansatz').theoryRelationship,/not a theorem/i);
  assert.ok(byId.get('coherence-resource-measures').assumptions.some(x=>/reference basis/i.test(x)));
  assert.ok(byId.get('projective-quantum-discord').assumptions.some(x=>/one-dimensional orthogonal projectors/i.test(x)));
  assert.ok(byId.get('aharonov-bohm-magnetic-phase').assumptions.some(x=>/Gaussian-unit/i.test(x)));
});
