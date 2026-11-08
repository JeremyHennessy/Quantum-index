import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const pack=JSON.parse(fs.readFileSync(new URL('../research/QEM_ZNE_SAMPLING_PRIORITY_2026-11-08.json',import.meta.url),'utf8'));
const close=(actual,expected,tol=1e-12)=>assert.ok(Math.abs(actual-expected)<tol,\`expected \${actual} ≈ \${expected}\`);
const weights=(scale)=>scale.map((x,i)=>scale.reduce((p,y,j)=>i===j?p:p*(-y)/(x-y),1));
const variance=(w,v,n)=>w.reduce((sum,wi,i)=>sum+wi*wi*v[i]/n[i],0);

test('QEM chronology is primary-source linked and makes no umbrella priority or runtime-release claim',()=>{
 assert.equal(pack.schemaVersion,1);
 assert.equal(pack.asOf,'2026-11-08');
 assert.equal(pack.baseMain,'7ba1c0647e7734192f3a8fbd420baddccdb89ba8');
 assert.equal(pack.priorProposal.pullRequest,108);
 assert.equal(pack.priorProposal.candidateId,'quantum-error-mitigation');
 assert.equal(pack.umbrellaOriginYear,null);
 assert.equal(pack.priorityClaim,'NO_UMBRELLA_PRIORITY_CLAIM');
 assert.equal(pack.releaseDecision,'HOLD_RESEARCH_ONLY_DO_NOT_PROMOTE_THEORY_FORMULA_OR_EVIDENCE');
 assert.ok(pack.sources.every(s=>s.doi && s.sourceLocator && s.claimQualification && s.inspection));
 const [li,temme,endo]=pack.sources;
 assert.equal(li.firstPreprint,'2016-11-28');
 assert.equal(temme.firstPreprint,'2016-12-06');
 assert.ok(li.firstPreprint<temme.firstPreprint);
 assert.equal(li.published,'2017-06-29');
 assert.equal(temme.published,'2017-11-03');
 assert.equal(endo.published,'2018-07-26');
 assert.match(li.sourceLocator,/VII\.A.+\(27\)-\(28\)/);
 assert.match(temme.sourceLocator,/Eqs\. \(2\)-\(4\)/);
 assert.ok(pack.sources.every(s=>/no|not|scope|method|limitation|requires|under|earlier|comparison/i.test(s.claimQualification)));
 assert.ok(pack.releaseGates.some(s=>/historical/i.test(s)));
 assert.ok(pack.releaseGates.some(s=>/Chromium\/WebKit/i.test(s)));
 assert.ok(pack.noModification.includes('index.html'));
});

test('Richardson weights cancel prescribed moments without cancelling all model error',()=>{
 const cs=pack.derivedEstimator.noiseScales, ws=weights(cs);
 assert.deepEqual(ws,pack.derivedEstimator.weights);
 close(ws.reduce((a,b)=>a+b,0),1);
 for(let order=1;order<cs.length;order++) close(ws.reduce((sum,w,i)=>sum+w*cs[i]**order,0),0);
 const {ideal,linear,quadratic}=pack.derivedEstimator.example;
 const response=l=>ideal+linear*l+quadratic*l*l;
 for(const lam of [0.1,0.03,0.005]){
  const extrapolated=ws.reduce((sum,w,j)=>sum+w*response(cs[j]*lam),0);
  close(extrapolated,ideal-2*quadratic*lam*lam);
  assert.ok(Math.abs(extrapolated-ideal)>0);
 }
 // A broken noise scaler leaves a first-order bias: do not call Richardson universally unbiased.
 const lam=0.05;
 const actualScales=[1,2.1];
 const wrongScaled=ws.reduce((sum,w,j)=>sum+w*response(actualScales[j]*lam),0);
 const expected=-0.1*linear*lam + (2-2.1**2)*quadratic*lam*lam;
 close(wrongScaled-ideal,expected);
 assert.ok(Math.abs(wrongScaled-ideal)>Math.abs(-2*quadratic*lam*lam));
});

test('independent-shot error propagation and optimal shot budget disclose variance cost',()=>{
 const b=pack.derivedEstimator.budget;
 const w=weights(pack.derivedEstimator.noiseScales),v=b.equalShotVariances;
 assert.equal(b.totalShots,300);
 assert.equal(b.equalAllocation.reduce((a,b)=>a+b),b.totalShots);
 assert.equal(b.optimalAllocation.reduce((a,b)=>a+b),b.totalShots);
 const direct=b.equalShotVariances[0]/b.totalShots;
 const equal=variance(w,v,b.equalAllocation);
 const optimal=variance(w,v,b.optimalAllocation);
 close(direct,b.directVariance);
 close(equal,b.equalAllocationVariance);
 close(optimal,b.optimalAllocationVariance);
 close(equal/direct,10);
 close(optimal/direct,9);
 close((w.reduce((sum,x,i)=>sum+Math.abs(x)*Math.sqrt(v[i]),0))**2/b.totalShots,optimal);
 assert.ok(optimal<equal);
 assert.equal(b.minimumVarianceOverhead,9);
});

test('higher-order moment cancellation increases idealized sampling overhead',()=>{
 const b=pack.derivedEstimator.budget;
 const cs=b.secondOrderScales,w=weights(cs);
 assert.deepEqual(w,b.secondOrderWeights);
 close(w.reduce((a,b)=>a+b,0),1);
 for(const n of [1,2])close(w.reduce((sum,wi,i)=>sum+wi*(cs[i]**n),0),0);
 const gain=w.reduce((sum,x)=>sum+Math.abs(x),0)**2;
 assert.equal(gain,49);
 assert.equal(gain,b.secondOrderMinimumVarianceOverhead);
 const response=l=>0.4+0.2*l-0.05*l*l+0.01*l*l*l;
 const lam=0.1;
 close(w.reduce((sum,wi,i)=>sum+wi*response(cs[i]*lam),0),0.4+0.06*lam**3);
});

