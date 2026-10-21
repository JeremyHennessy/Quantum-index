import {readPreCampaignFile} from './campaign-20261021-baseline.mjs';
import {beforeLocatorRenderer} from './formula-locator-renderer-20261021-baseline.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {priorHeldPassports as priorGkslPassports,restorePassportFormula,passportFingerprint} from './passport-source-review-20261014-baseline.mjs';
import {priorAstroCoverage} from './astro-formulas-20261016-baseline.mjs';
const ledger=JSON.parse(readPreCampaignFile('research/PASSPORT_SOURCE_REVIEW_2026-10-14.json'));
const hash=b=>createHash('sha256').update(b).digest('hex');
const c={window:{}};vm.createContext(c);
for(const file of ['theories.js','formulas.js','passports.js'])vm.runInContext(readPreCampaignFile(file,'utf8'),c);
const w=c.window,p=w.QI_PASSPORTS.records.find(p=>p.theoryId==='gksl');

test('QED/GKSL append to the exact approved 25-Passport bytes and preserves scientific/UI records',()=>{
 const bytes=readPreCampaignFile('passports.js'),needle=Buffer.from(ledger.appendMarker),at=bytes.indexOf(needle);
 assert.ok(at>0);assert.equal(bytes.indexOf(needle,at+needle.length),-1);
 assert.equal(hash(bytes.subarray(0,at)),ledger.previousPassportSha256);
 for(const [file,digest] of Object.entries(ledger.protectedFileSha256))assert.equal(hash(beforeLocatorRenderer(readPreCampaignFile(file),file)),digest,file);
 assert.deepEqual(ledger.acceptedAppendOnlyPassportTheoryIds,['qed','gksl']);
 assert.equal(w.QI_PASSPORTS.records.filter(p=>!['quantum-error-correction','yang-mills'].includes(p.theoryId)).length,27);
 assert.equal(priorGkslPassports(w.QI_PASSPORTS.records.filter(p=>!['quantum-error-correction','yang-mills'].includes(p.theoryId))).length,25);
 const coverage=priorAstroCoverage(JSON.parse(readPreCampaignFile('docs/coverage.json')));
 assert.equal(coverage.passports-2,27);
 for(const [key,n] of Object.entries(ledger.unchangedCounts))assert.equal(coverage[key],n,key);
 for(const id of ledger.remainingUnshippedIds)assert.ok(!w.QI_PASSPORTS.records.filter(p=>!['quantum-error-correction','yang-mills'].includes(p.theoryId)).some(p=>p.theoryId===id),id+' was held at the 2026-10-14 checkpoint');
});

test('GKSL qualification records original theorem assumptions, mapping and nonclaims',()=>{
 assert.equal(p.reviewedAt,'2026-10-14');assert.deepEqual(Array.from(p.formulaIds),['lindblad']);
 assert.match(p.assumptions.join(' '),/Time-homogeneous/);assert.match(p.assumptions.join(' '),/bounded generator/);
 assert.match(p.mathematicalStructure,/gamma_k>=0/);assert.match(p.mathematicalStructure,/H_catalog\/hbar/);
 assert.match(p.limitations.join(' '),/unbounded generators/);assert.match(p.limitations.join(' '),/Time-dependent/);
 assert.equal(p.evidenceIds.length,0);assert.match(p.evidenceSummary,/not an experimental/);
 assert.ok(p.sourceLocations.some(x=>x.sourceId==='gks-1976'&&/Theorem 2.2/.test(x.locator)));
 assert.ok(p.sourceLocations.some(x=>x.sourceId==='lindblad-1976'&&/4.3/.test(x.locator)));
 for(const id of p.comparisonFrameworks)assert.ok(w.QI_DATA.theories.some(t=>t.id===id),id);
 assert.throws(()=>priorGkslPassports(priorGkslPassports(w.QI_PASSPORTS.records.filter(p=>!['quantum-error-correction','yang-mills'].includes(p.theoryId)))),/exactly one/);
});

const add=(a,b)=>a.map((r,i)=>r.map((v,j)=>v+b[i][j]));
const scale=(a,s)=>a.map(r=>r.map(v=>v*s));
const mul=(a,b)=>a.map(r=>b[0].map((_,j)=>r.reduce((s,v,k)=>s+v*b[k][j],0)));
const transpose=a=>a[0].map((_,j)=>a.map(r=>r[j]));
const comm=(a,b)=>add(mul(a,b),scale(mul(b,a),-1));
const tr=a=>a[0][0]+a[1][1];
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-12,`${a} != ${b}`);
const matrixNear=(a,b)=>a.forEach((r,i)=>r.forEach((v,j)=>near(v,b[i][j])));
const dissipator=(v,rho)=>{const d=transpose(v),n=mul(d,v);return add(mul(mul(v,rho),d),scale(add(mul(n,rho),mul(rho,n)),-.5));};

test('source commutators map to the catalog dissipator and correct adjoint, including nonnormal jumps',()=>{
 const rho=[[.7,.2],[.2,.3]],x=[[2,.4],[.4,-1]],v=[[.3,1.1],[-.2,.5]],d=transpose(v),n=mul(d,v);
 const original=scale(add(comm(mul(v,rho),d),comm(v,mul(rho,d))),.5);
 const modern=dissipator(v,rho);matrixNear(original,modern);near(tr(modern),0);
 const heisenberg=add(mul(mul(d,x),v),scale(add(mul(n,x),mul(x,n)),-.5));
 near(tr(mul(x,modern)),tr(mul(heisenberg,rho)));
 const rate=2.7;matrixNear(dissipator(scale(v,Math.sqrt(rate)),rho),scale(modern,rate));
});

test('amplitude damping illustrates why nonnegative rates and the semigroup qualification matter',()=>{
 const survival=(gamma,t)=>Math.exp(-gamma*t);
 near(survival(.4,.3+.7),survival(.4,.3)*survival(.4,.7));
 // Initial excited state evolves to diag(1-p,p); negative constant rate loses positivity.
 assert.ok(1-survival(.4,1)>=0);assert.ok(1-survival(-.4,1)<0);
 // p(t)=exp(-t²) gives valid damping maps and positive time-dependent rate 2t,
 // yet p(t+s) != p(t)p(s): a time-local GKSL form alone is not a semigroup.
 const p=t=>Math.exp(-t*t);assert.ok(Math.abs(p(1)-p(.5)*p(.5))>.1);
});

test('reused QED/GKSL formula changes preserve exact earlier metadata and resolve all comparisons',()=>{
 for(const id of ledger.reviewedFormulaIds){
 const f=w.QI_FORMULAS.formulas.find(f=>f.id===id);assert.equal(passportFingerprint(f),passportFingerprint(ledger.formulaEdits[id].after));
 assert.equal(passportFingerprint(restorePassportFormula(f)),ledger.formulaEdits[id].beforeFingerprint);
 }
 for(const passport of w.QI_PASSPORTS.records)for(const id of passport.comparisonFrameworks||[])assert.ok(w.QI_DATA.theories.some(t=>t.id===id),id);
 const f=w.QI_FORMULAS.formulas.find(f=>f.id==='qed-lagrangian');assert.doesNotMatch(f.latex,/\\hbar/);
 assert.match(f.assumptions.join(' '),/partial_mu \+ i e A_mu/);
 const prop=w.QI_FORMULAS.formulas.find(f=>f.id==='fermion-propagator');assert.match(prop.assumptions.join(' '),/Fourier kernel/);
 const tampered=structuredClone(prop);tampered.latex+='x';assert.throws(()=>restorePassportFormula(tampered),/unexpected/);
});
