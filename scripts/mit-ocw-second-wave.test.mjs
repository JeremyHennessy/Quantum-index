// Standalone research-only checks for MIT OCW worked-learning wave 2.
// No edits to shipped catalog, accepted historical ledgers, renderer or UI.
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
import assert from 'node:assert/strict';

const bridge=JSON.parse(fs.readFileSync('research/MIT_OCW_SECOND_WAVE_2026-11-01.json','utf8'));
const guide=fs.readFileSync('docs/MIT_OCW_WORKED_CONNECTIONS_2026-11-01.md','utf8');
const ctx={window:{}};
vm.createContext(ctx);
for(const file of ['theories.js','formulas.js'])vm.runInContext(fs.readFileSync(file,'utf8'),ctx,{filename:file});
const theories=new Set(ctx.window.QI_DATA.theories.map(x=>x.id));
const formulas=new Set(ctx.window.QI_FORMULAS.formulas.map(x=>x.id));

test('three lessons are independent pedagogical material, not shipped or empirical claims',()=>{
 assert.equal(bridge.schemaVersion,1);
 assert.equal(bridge.publicationStatus,'research-only-not-shipped');
 assert.equal(bridge.provenanceClass,'pedagogical-course-material');
 assert.match(bridge.scope,/not new theory/);
 assert.match(bridge.reuseRule,/do not copy course PDFs, figures/);
 assert.equal(bridge.lessons.length,3);
 assert.match(guide,/not yet included in the shipped Quantum Index UI/);
 assert.match(guide,/not an attempt to rebrand three existing equations/);
});

test('MIT course locations and exact catalog ID crosswalk stay complete and nonduplicate',()=>{
 const ids=new Set();
 for(const l of bridge.lessons){
  assert.ok(!ids.has(l.id),'duplicate MIT lesson: '+l.id);ids.add(l.id);
  assert.match(l.id,/^mit-ocw-/);
  assert.ok(l.name.length>25&&l.workedExample.length>70);
  assert.match(l.term,/20(13|18)/);
  assert.ok(l.pdf.startsWith('https://ocw.mit.edu/courses/')&&l.pdf.endsWith('.pdf'));
  assert.ok(guide.includes(l.pdf),'missing source PDF in guide: '+l.id);
  assert.ok(l.coursePage.startsWith('https://ocw.mit.edu/courses/'));
  assert.equal(l.locators.length,2);
  for(const locator of l.locators)assert.match(locator,/printed p\. \d+.*Eq/,'missing exact printed page/equation: '+l.id);
  assert.ok(l.assumptions.length>45);
  assert.ok(l.nonClaims.length>=2);
  for(const id of l.theoryIds)assert.ok(theories.has(id),'unknown existing theory: '+id);
  for(const id of l.formulaIds)assert.ok(formulas.has(id),'unknown existing formula: '+id);
 }
 assert.deepEqual([...ids].sort(),['mit-ocw-805-spin-addition','mit-ocw-806-berry-gauge','mit-ocw-806-born-scattering']);
});

test('Berry-spin latitude calculation and allowed gauge winding agree modulo 2pi',()=>{
 const theta=Math.PI/3,n=4096,delta=2*Math.PI/n,p=Math.sin(theta/2)**2,c=Math.cos(theta/2)**2;
 const gammaNumerical=-n*Math.atan2(p*Math.sin(delta),c+p*Math.cos(delta));
 const omega=2*Math.PI*(1-Math.cos(theta));
 const gammaAnalytical=-omega/2;
 assert.ok(Math.abs(gammaNumerical-gammaAnalytical)<1e-6,'discrete Berry Wilson overlap');
 assert.ok(Math.abs(gammaAnalytical+Math.PI/2)<1e-12);
 assert.ok(Math.abs(Math.sin((gammaAnalytical+4*Math.PI)-gammaAnalytical))<1e-12,'closed-loop winding');
 assert.match(bridge.lessons[0].nonClaims.join(' '),/modulo 2pi/);
 assert.match(guide,/For an open path, endpoint phases matter/);
});

test('Yukawa first Born amplitude, wave-number transfer and dimensions are not conflated',()=>{
 const theta=Math.PI/2,m=1,hbar=1,beta=1,mu=1,k=1;
 const K=2*k*Math.sin(theta/2);
 const f=-2*m*beta/(hbar*hbar*(K*K+mu*mu));
 const dSigma=Math.abs(f)**2;
 assert.ok(Math.abs(K-Math.sqrt(2))<1e-12);
 assert.ok(Math.abs(f+2/3)<1e-12);
 assert.ok(Math.abs(dSigma-4/9)<1e-12);
 const l=bridge.lessons[1];
 assert.match(l.assumptions,/requires a sufficiently weak/);
 assert.match(l.nonClaims.join(' '),/inverse-length units/);
 assert.match(l.nonClaims.join(' '),/not universally guarantee Born convergence/);
});

test('two-spin singlet/triplet normalization, orthogonality and total spin are exact',()=>{
 const sqrt2=Math.sqrt(2);
 const upup=[1,0,0,0],triplet0=[0,1/sqrt2,1/sqrt2,0],downdown=[0,0,0,1],singlet=[0,1/sqrt2,-1/sqrt2,0];
 const inner=(a,b)=>a.reduce((total,v,i)=>total+v*b[i],0);
 const swap=v=>[v[0],v[2],v[1],v[3]];
 const sSquared=v=>v.map((x,i)=>x+swap(v)[i]); // hbar=1: S²=I+SWAP for two spin-1/2 systems
 for(const state of [upup,triplet0,downdown,singlet])assert.ok(Math.abs(inner(state,state)-1)<1e-12);
 assert.ok(Math.abs(inner(triplet0,singlet))<1e-12);
 for(const triplet of [upup,triplet0,downdown]){
  assert.deepEqual(sSquared(triplet),triplet.map(x=>2*x));
 }
 assert.ok(sSquared(singlet).every(x=>Math.abs(x)<1e-12));
 assert.match(bridge.lessons[2].nonClaims.join(' '),/exchange symmetry/);
});
