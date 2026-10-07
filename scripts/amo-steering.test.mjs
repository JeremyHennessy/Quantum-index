import {bellReview,restoreBellFormula} from './bell-metadata-baseline.mjs';
import {priorRelations,priorSources,verifyFileTransition} from './relation-review-baseline.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {JSDOM,VirtualConsole} from 'jsdom';
const files=['theories.js','developments.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','evidence.js','passports.js','workspace.js'];
const c={window:{}};vm.createContext(c);for(const f of files)vm.runInContext(fs.readFileSync(f,'utf8'),c);
const w=c.window,ledger=JSON.parse(fs.readFileSync('docs/AMO_STEERING_2026-10-07.json','utf8'));
const canonical=v=>Array.isArray(v)?v.map(canonical):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,canonical(v[k])])):v;
const hash=x=>createHash('sha256').update(x).digest('hex');
const get=id=>w.QI_FORMULAS.formulas.find(f=>f.id===id);
const near=(a,b,eps=1e-10)=>assert.ok(Math.abs(a-b)<eps,`${a} != ${b}`);

test('AMO/steering preserves every previous scientific record and the entire application renderer',()=>{
 const records={theories:w.QI_DATA.theories,formulas:w.QI_FORMULAS.formulas.map(restoreBellFormula).filter(f=>!ledger.addedFormulaIds.includes(f.id)),passports:w.QI_PASSPORTS.records.filter(p=>!ledger.addedPassportTheoryIds.includes(p.theoryId)&&!bellReview.addedPassportTheoryIds.includes(p.theoryId)),sources:priorSources(w.QI_DATA.sources).filter(s=>!ledger.addedSourceIds.includes(s.id)&&!bellReview.addedSourceIds.includes(s.id)),relations:priorRelations(w.QI_DATA.relations)};
 for(const [name,items] of Object.entries(records)){
  const key=name==='passports'?'theoryId':'id';const ordered=name==='relations'?[...items]:[...items].sort((a,b)=>a[key]<b[key]?-1:a[key]>b[key]?1:0);
  assert.equal(ordered.length,ledger.baselineIntegrity[name].count,name);
  assert.equal(hash(JSON.stringify(canonical(ordered))),ledger.baselineIntegrity[name].sha256,name);
 }
 for(const [file,expected] of Object.entries({...ledger.untouchedFiles,...ledger.updatedFiles})){
  if(bellReview.updatedFiles[file])assert.equal(bellReview.previousFiles[file],expected,`${file}: retained AMO checkpoint`);
  if(file==='theories.js')verifyFileTransition(file,bellReview.updatedFiles[file]||expected);
  else assert.equal(hash(fs.readFileSync(file)),bellReview.updatedFiles[file]||expected,file);
 }
 assert.equal(w.QI_PASSPORTS.reviewedAt,'2026-09-29');
 const coverage=JSON.parse(fs.readFileSync('docs/coverage.json','utf8'));
 for(const [key,value] of Object.entries(ledger.expected))assert.equal(key==='passports'?w.QI_PASSPORTS.records.length:coverage[key],(bellReview.expected[key]??value)+(key==='sources'?1:0),key);
});

test('four scoped representatives close only Fano and steering gaps and preserve source-version provenance',()=>{
 assert.deepEqual([...ledger.addedPassportTheoryIds].sort(),['fano-resonance','quantum-steering']);
 for(const id of ledger.addedPassportTheoryIds){
  const p=w.QI_PASSPORTS.records.find(p=>p.theoryId===id),audit=w.QI_FORMULA_AUDIT.entries.find(a=>a.theoryId===id);
  assert.equal(p.reviewedAt,'2026-10-07');assert.equal(p.formulaIds.length,2);assert.equal(audit.classification,'formula-bearing');
  assert.deepEqual([...p.formulaIds].sort(),[...audit.formulaIds].sort());
 }
 for(const id of ledger.addedFormulaIds){
  const f=get(id);assert.equal(f.metadataReview,'explicit');assert.equal(f.curationBatch,'amo-steering-2026-10-07');
  assert.ok(f.assumptions.length>=3);assert.ok(f.variables.length>=3);assert.ok(f.sourceLocations.length);
  assert.match(f.sourceLocations[0].url,/v[23]#page=/);assert.doesNotMatch(f.latex,/[\x00-\x08\x0b\x0c\x0e-\x1f]/);
 }
 assert.equal(get('fano-gaussian-broadened-profile').formulaType,'derived identity');
 assert.match(get('fano-real-q-profile').assumptions.join(' '),/not generally the measured asymmetric peak FWHM/);
 assert.match(get('steering-projective-lhs').assumptions.join(' '),/same normalized positive states/);
 assert.match(get('steering-finite-setting-bound').assumptions.join(' '),/actual axes/);
 assert.match(get('steering-finite-setting-bound').regime,/not Bell violation/);
 assert.match(w.QI_PASSPORTS.records.find(p=>p.theoryId==='quantum-steering').evidenceSummary,/does not close the detection loophole/);
});

const fano=(eps,q)=>(q+eps)**2/(1+eps*eps);
test('unbroadened real-q Fano profile fixes half-width scaling, zero, mirror symmetry and background',()=>{
 for(const q of [-3,-1,0,.7,1,3])for(const eps of [-8,-2,-.4,0,1,4]){
  near(fano(eps,q),1+((q*q-1)+2*q*eps)/(1+eps*eps));near(fano(eps,q),fano(-eps,-q));assert.ok(fano(eps,q)>=0);
 }
 for(const q of [-2,-1,0,1,2])near(.3+1.4*fano(-q,q),.3);
 const Er=4,Gamma=2;near(2*((Er+Gamma/2)-Er)/Gamma,1);
 assert.match(get('fano-real-q-profile').latex,/\\frac\{2\(E-E_r\)\}\{\\Gamma\}/);
});

test('Gaussian Fano convolution agrees with independent quadrature including q=0 and plus/minus one',()=>{
 assert.equal(hash(fs.readFileSync(ledger.numericFixture)),ledger.numericFixtureSha256);
 const fixture=JSON.parse(fs.readFileSync(ledger.numericFixture,'utf8'));
 // Integrate the original profile, not the closed expression. Standard normal t maps E' = E+s*t.
 function integral(x,y,q,N=24000){const lo=-12,h=24/N;let acc=0;for(let i=0;i<=N;i++){const t=lo+h*i,eps=(-x+t/Math.sqrt(2))/y;const v=Math.exp(-t*t/2)/Math.sqrt(2*Math.PI)*fano(eps,q);acc+=(i===0||i===N?1:i%2?4:2)*v;}return acc*h/3;}
 for(const f of fixture.cases){
  const closed=1+Math.sqrt(Math.PI)*f.y*((f.q*f.q-1)*f.wRe-2*f.q*f.wIm),direct=integral(f.x,f.y,f.q);
  near(closed,direct,2e-9);assert.ok(closed>=-1e-12);near(.2+1.7*closed,.2+1.7*direct,4e-9);
 }
 const f=fixture.cases.find(f=>f.x===.7),wrong=1+Math.sqrt(Math.PI)*f.y*((f.q*f.q-1)*f.wRe+2*f.q*f.wIm);
 assert.ok(Math.abs(wrong-integral(f.x,f.y,f.q))>.1,'opposite imaginary sign must fail');
 // Shrinking s at fixed E,Er,Gamma: y and x grow together, leaving eps=-x/y fixed.
 near(integral(-.7*10000,10000,.9),fano(.7,.9),1e-8);
 assert.match(get('fano-gaussian-broadened-profile').latex,/-2q\\operatorname\{Im\}w\(z\)/);
 assert.match(get('fano-gaussian-broadened-profile').latex,/\\frac\{E_r-E\}\{\\sqrt\{2\}s\}/);
 assert.match(get('fano-gaussian-broadened-profile').assumptions.join(' '),/standard deviation.*not Gaussian FWHM/);
});

// Small complex-matrix constructions, independent of the source's scalar threshold summaries.
const z=(re=0,im=0)=>({re,im}),add=(a,b)=>z(a.re+b.re,a.im+b.im),mul=(a,b)=>z(a.re*b.re-a.im*b.im,a.re*b.im+a.im*b.re),scale=(a,s)=>z(a.re*s,a.im*s);
const M=n=>Array.from({length:n},()=>Array.from({length:n},()=>z()));
const I=[[z(1),z()],[z(),z(1)]];
const pauli=u=>[[z(u[2]),z(u[0],-u[1])],[z(u[0],u[1]),z(-u[2])]];
const bloch=u=>{const p=pauli(u);return p.map((row,i)=>row.map((v,j)=>scale(add(v,I[i][j]),.5)));};
const kron=(A,B)=>Array.from({length:A.length*B.length},(_,i)=>Array.from({length:A.length*B.length},(_,j)=>mul(A[Math.floor(i/B.length)][Math.floor(j/B.length)],B[i%B.length][j%B.length])));
const product=(A,B)=>A.map((row,i)=>B[0].map((_,j)=>row.reduce((a,v,k)=>add(a,mul(v,B[k][j])),z())));
const matScale=(A,s)=>A.map(row=>row.map(v=>scale(v,s)));
const matAdd=(A,B)=>A.map((row,i)=>row.map((v,j)=>add(v,B[i][j])));
const trA=A=>Array.from({length:2},(_,i)=>Array.from({length:2},(_,j)=>add(A[i][j],A[2+i][2+j])));
const trace=A=>A.reduce((s,row,i)=>add(s,row[i]),z());
const matNear=(A,B)=>A.forEach((row,i)=>row.forEach((a,j)=>{near(a.re,B[i][j].re);near(a.im,B[i][j].im);}));
const axes=[[1,0,0],[0,1,0],[0,0,1],[1/Math.sqrt(3),1/Math.sqrt(3),1/Math.sqrt(3)]];
const singlet=()=>{const a=M(4);a[1][1]=a[2][2]=z(.5);a[1][2]=a[2][1]=z(-.5);return a;};

test('projective conditional states are subnormalized and no-signalling; changing them alone is insufficient',()=>{
 for(const u of axes){
  const cond=[];for(const a of [-1,1]){const Pi=bloch(u.map(x=>a*x));const rho=trA(product(kron(Pi,I),singlet()));near(trace(rho).re,.5);near(trace(rho).im,0);matNear(rho,matScale(bloch(u.map(x=>-a*x)),.5));cond.push(rho);}
  matNear(matAdd(...cond),matScale(I,.5));
 }
 // A separable mixture admits ONE fixed Bob ensemble despite outcome-dependent conditional states.
 const weights=[.35,.65],Alice=[[0,0,1],[1,0,0]],Bob=[[0,0,.6],[.4,.2,0]];
 let state=M(4);for(let l=0;l<2;l++)state=matAdd(state,matScale(kron(bloch(Alice[l]),bloch(Bob[l])),weights[l]));
 for(const u of axes)for(const a of [-1,1]){
  const actual=trA(product(kron(bloch(u.map(x=>a*x)),I),state));let lhs=M(2);
  for(let l=0;l<2;l++){const response=(1+a*u.reduce((s,x,k)=>s+x*Alice[l][k],0))/2;lhs=matAdd(lhs,matScale(bloch(Bob[l]),weights[l]*response));}
  matNear(actual,lhs);
 }
 assert.match(get('steering-projective-lhs').latex,/\\sum_a\\tilde\\rho_\{a\|x\}=\\rho_B/);
});

const dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0),norm=a=>Math.sqrt(dot(a,a));
function bound(us){let best={score:-1,signs:[],b:[]};for(let bits=0;bits<2**us.length;bits++){const signs=us.map((_,i)=>(bits>>i)&1?1:-1),b=[0,1,2].map(k=>us.reduce((s,u,i)=>s+signs[i]*u[k],0));const score=norm(b)/us.length;if(score>best.score)best={score,signs,b};}return best;}
test('finite Pauli steering bound depends on geometry, is tight for an LHS state, and forbids setting-correlated preparation',()=>{
 for(const [us,expected] of [[axes.slice(0,2),1/Math.sqrt(2)],[axes.slice(0,3),1/Math.sqrt(3)],[[axes[0],axes[0],axes[0]],1]]){
  const b=bound(us);near(b.score,expected);const r=b.b.map(x=>x/norm(b.b));near(us.reduce((s,u,i)=>s+b.signs[i]*dot(u,r),0)/us.length,b.score);
  const op=pauli(b.b.map(x=>x/us.length));near(op[0][0].re**2+op[0][1].re**2+op[0][1].im**2,b.score*b.score);
 }
 // Deterministic seed; every hidden response lies in [-1,1], including stochastic strategies.
 let seed=71;const rnd=()=>((seed=(Math.imul(1664525,seed)+1013904223)>>>0)/2**32);
 for(let trial=0;trial<200;trial++){
  const us=Array.from({length:5},()=>{const u=[rnd()*2-1,rnd()*2-1,rnd()*2-1];return u.map(x=>x/norm(u));});const C=bound(us).score;
  let S=0;for(let l=0;l<4;l++){const v=[rnd()*2-1,rnd()*2-1,rnd()*2-1],r=v.map(x=>x/Math.max(1,norm(v)));S+=us.reduce((s,u)=>s+(rnd()*2-1)*dot(u,r),0)/(4*us.length);}assert.ok(S<=C+1e-12);
 }
 const us=axes.slice(0,3),settingCorrelated=us.reduce((s,u)=>s+dot(u,u),0)/3;
 near(settingCorrelated,1);assert.ok(settingCorrelated>bound(us).score,'different hidden state for each setting would fake a violation');
 assert.match(get('steering-finite-setting-bound').latex,/\\frac\{1\}\{n\}\\max_/);
});

test('Werner singlet matched-sign correlations yield the stated sufficient witness, not a general Bell verdict',()=>{
 for(const visibility of [0,.4,.6,1]){
  const rho=matAdd(matScale(singlet(),visibility),matScale(kron(I,I),(1-visibility)/4));let S=0;
  for(const u of axes.slice(0,3)){const corr=trace(product(kron(pauli(u.map(x=>-x)),pauli(u)),rho));near(corr.re,visibility);near(corr.im,0);S+=corr.re/3;}near(S,visibility);
  assert.equal(S>bound(axes.slice(0,3)).score,visibility>1/Math.sqrt(3));
 }
 assert.match(get('steering-finite-setting-bound').assumptions.join(' '),/Postselection or missed detections/);
});

test('new Passports render in the unchanged comparison and theory-detail views with scoped sources',()=>{
 for(const route of ['#/compare?ids=fano-resonance,quantum-steering,hawking-radiation,ssh-model','#/theory/quantum-steering']){
  const errs=[],v=new VirtualConsole();v.on('jsdomError',e=>errs.push(e.message));const dom=new JSDOM(fs.readFileSync('index.html','utf8'),{url:'https://example.test/'+route,runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:v});
  try{const win=dom.window;win.HTMLElement.prototype.scrollIntoView=function(){};win.MathJax={typesetPromise:()=>Promise.resolve(),typesetClear:()=>{}};win.eval(fs.readFileSync('node_modules/d3/dist/d3.min.js','utf8'));for(const f of files)win.eval(fs.readFileSync(f,'utf8'));win.eval(fs.readFileSync('app.js','utf8'));const d=win.document;
   if(route.startsWith('#/compare')){const r=d.querySelector('#comparisonResults');assert.equal(r.querySelectorAll('table').length,1);for(const id of ledger.addedPassportTheoryIds)assert.match(r.querySelector(`[data-comparison-passport="${id}"]`).textContent,/2026-10-07/);assert.match(r.querySelector('[data-comparison-passport="hawking-radiation"]').textContent,/2026-09-29/);}
   else{assert.match(d.querySelector('.passport').textContent,/detection loophole/);assert.match(d.querySelector('.passport').textContent,/no-signalling|signalling/);}assert.deepEqual(errs,[]);
  }finally{dom.window.close();}
 }
});
