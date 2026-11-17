import test from 'node:test';
import assert from 'node:assert/strict';
import {globalVacuumLeakageNorm, globalVacuumLeakageSquared,
  enumerateExcitationAmplitudes, independentTwoLevelTensorGap,
  twoLevelSinglePlaquetteGap} from './volume-leakage.mjs';

const close = (a, b) => assert.ok(Math.abs(a - b) < 1e-12, `${a} vs ${b}`);

test('the global leakage amplitude is exactly beta times square-root volume', () => {
  for (const [n, beta] of [[1,.5],[4,.5],[9,.5],[100,.5],[400,.25]]) {
    close(globalVacuumLeakageNorm(n,beta),beta*Math.sqrt(n));
    close(globalVacuumLeakageSquared(n,beta),n*beta*beta);
  }
});
test('independent sparse enumeration reproduces exact orthogonal leakage norm', () => {
  for (const n of [1,2,3,4,5,10,20]) {
    const v=enumerateExcitationAmplitudes(n,.5);
    assert.equal(v.size,n);
    const sum=Array.from(v.values()).reduce((a,x)=>a+x*x,0);
    close(sum,globalVacuumLeakageSquared(n,.5));
  }
});
test('two-level independently replicated spectral gap stays constant with volume', () => {
  const g=twoLevelSinglePlaquetteGap(1,.5);
  close(g,1.25);
  for (const n of [1,2,3,10,100,1000]) {
    close(independentTwoLevelTensorGap(n,1,.5),g);
  }
});
test('global leakage diverges while a decoupled finite-plaquette model remains gapped', () => {
  const beta=.5, g=twoLevelSinglePlaquetteGap(1,beta);
  for (const n of [1,4,16,64,256]) {
    const ratio=globalVacuumLeakageNorm(n,beta)/g;
    close(ratio,0.4*Math.sqrt(n));
  }
  assert.ok(globalVacuumLeakageNorm(256,beta)>g);
});
test('negative controls: not a claim about an interacting plaquette lattice', () => {
  assert.throws(()=>globalVacuumLeakageNorm(0,.5),RangeError);
  assert.throws(()=>globalVacuumLeakageNorm(3,-.5),RangeError);
  assert.throws(()=>enumerateExcitationAmplitudes(21,.5),RangeError);
  assert.throws(()=>twoLevelSinglePlaquetteGap(0,.5),RangeError);
});
