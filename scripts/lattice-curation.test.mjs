import {bellReview,restoreBellFormula} from './bell-metadata-baseline.mjs';
import {priorDepthFormulas,priorDepthPassports,priorDepthCoverage,verifyDepthFileSha256} from './multidomain-depth-baseline.mjs';
import {priorSources} from './relation-review-baseline.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {JSDOM,VirtualConsole} from 'jsdom';
const files=['theories.js','developments.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','evidence.js','passports.js','workspace.js'];
const c={window:{}};vm.createContext(c);for(const f of files)vm.runInContext(fs.readFileSync(f,'utf8'),c);
const w=c.window,ledger=JSON.parse(fs.readFileSync('docs/LATTICE_CURATION_2026-10-07.json'));
const amo=JSON.parse(fs.readFileSync('docs/AMO_STEERING_2026-10-07.json','utf8'));
const canonical=v=>Array.isArray(v)?v.map(canonical):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,canonical(v[k])])):v;
const hash=x=>createHash('sha256').update(x).digest('hex');
const get=id=>w.QI_FORMULAS.formulas.find(f=>f.id===id);
const near=(a,b,eps=1e-10)=>assert.ok(Math.abs(a-b)<eps,`${a} != ${b}`);

test('lattice batch preserves all prior scientific records and protected application files',()=>{
 const records={theories:w.QI_DATA.theories,formulas:priorDepthFormulas(w.QI_FORMULAS.formulas).map(restoreBellFormula).filter(f=>!ledger.addedFormulaIds.includes(f.id)&&!amo.addedFormulaIds.includes(f.id)),passports:priorDepthPassports(w.QI_PASSPORTS.records).filter(p=>!ledger.addedPassportTheoryIds.includes(p.theoryId)&&!amo.addedPassportTheoryIds.includes(p.theoryId)&&!bellReview.addedPassportTheoryIds.includes(p.theoryId)),sources:priorSources(w.QI_DATA.sources).filter(s=>!ledger.addedSourceIds.includes(s.id)&&!amo.addedSourceIds.includes(s.id)&&!bellReview.addedSourceIds.includes(s.id))};
 for(const [name,items] of Object.entries(records)){
  const key=name==='passports'?'theoryId':'id';const ordered=[...items].sort((a,b)=>a[key]<b[key]?-1:a[key]>b[key]?1:0);
  assert.equal(ordered.length,ledger.baselineIntegrity[name].count);
  assert.equal(hash(JSON.stringify(canonical(ordered))),ledger.baselineIntegrity[name].sha256,name);
 }
 for(const [file,expected] of Object.entries({...ledger.untouchedFiles,...ledger.updatedFiles})){
  if(amo.updatedFiles[file])assert.equal(amo.previousFiles[file],expected,`${file}: retained lattice checkpoint`);
  if(bellReview.updatedFiles[file])assert.equal(bellReview.previousFiles[file],amo.updatedFiles[file]||expected,`${file}: retained predecessor`);
  verifyDepthFileSha256(file,bellReview.updatedFiles[file]||amo.updatedFiles[file]||expected);
 }
 assert.equal(w.QI_PASSPORTS.reviewedAt,'2026-09-29','original global date must not be advanced');
});

test('five source-located lattice formulas close only three selected representative gaps',()=>{
 const data=priorDepthCoverage(JSON.parse(fs.readFileSync('docs/coverage.json')));
 for(const [key,value] of Object.entries(ledger.expected))if(key!=='passports')assert.equal(data[key],(bellReview.expected[key]??amo.expected[key]??value)+(key==='sources'?1:0),key);
 assert.equal(priorDepthPassports(w.QI_PASSPORTS.records).length,13+amo.addedPassportTheoryIds.length+bellReview.addedPassportTheoryIds.length);
 assert.equal(new Set(priorDepthPassports(w.QI_PASSPORTS.records).map(p=>p.theoryId)).size,13+amo.addedPassportTheoryIds.length+bellReview.addedPassportTheoryIds.length);
 for(const id of ledger.addedFormulaIds){
  const f=get(id);assert.ok(f,id);assert.equal(f.metadataReview,'explicit');
  assert.equal(f.curationBatch,'lattice-2026-10-07');assert.ok(f.assumptions.length>=3);assert.ok(f.variables.length>=3);
  assert.equal(f.sourceLocations.length,1);assert.match(f.sourceLocations[0].url,/v1#page=/);
  assert.doesNotMatch(f.latex,/[\x00-\x08\x0b\x0c\x0e-\x1f]/);
 }
 const old=JSON.parse(fs.readFileSync('docs/COMPARE_ZENO_2026-10-07.json'));
 assert.equal(ledger.previousFiles['app.js'],old.updatedFiles['app.js']);
 for(const id of ledger.addedPassportTheoryIds){
  const a=w.QI_FORMULA_AUDIT.entries.find(a=>a.theoryId===id);assert.equal(a.classification,'formula-bearing');
  const p=w.QI_PASSPORTS.records.find(p=>p.theoryId===id);assert.equal(p.reviewedAt,'2026-10-07');
  assert.deepEqual([...p.formulaIds].sort(),[...a.formulaIds].sort());
 }
 assert.match(get('ssh-chiral-winding').description,/undefined at the gap closing/);
 assert.match(get('aubry-andre-onsite-hamiltonian').regime,/Not an interacting/);
 assert.equal(get('holstein-small-hopping-band').formulaType,'approximation');
 assert.match(get('holstein-local-phonon-hamiltonian').units,/omega_0 has inverse-time/);
});

// Independent finite-matrix constructions test the conventions behind the displayed expressions.
const complex=(re=0,im=0)=>({re,im});
const add=(a,b)=>complex(a.re+b.re,a.im+b.im);
const mul=(a,b)=>complex(a.re*b.re-a.im*b.im,a.re*b.im+a.im*b.re);
const conj=a=>complex(a.re,-a.im);
const phase=x=>complex(Math.cos(x),Math.sin(x));
function matrix(n){return Array.from({length:n},()=>Array.from({length:n},()=>complex()));}
function transform(H,F){const n=H.length;return Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>{let z=complex();for(let a=0;a<n;a++)for(let b=0;b<n;b++)z=add(z,mul(conj(F[a][i]),mul(H[a][b],F[b][j])));return z;}));}

test('SSH real-space Fourier transform fixes the off-diagonal sign and band energies',()=>{
 for(const [v,u] of [[0,1],[1,0],[0.3,1],[1,0.4],[1,1]]){
  const N=5,n=2*N,H=matrix(n),F=matrix(n);
  for(let m=0;m<N;m++){
   H[2*m][2*m+1]=H[2*m+1][2*m]=complex(v);
   H[2*((m+1)%N)][2*m+1]=H[2*m+1][2*((m+1)%N)]=complex(u);
   for(let l=0;l<N;l++)for(let a=0;a<2;a++)F[2*m+a][2*l+a]=mul(complex(1/Math.sqrt(N)),phase(2*Math.PI*l*m/N));
  }
  const B=transform(H,F);
  for(let i=0;i<n;i++)for(let j=0;j<n;j++){
   const k=2*Math.PI*Math.floor(i/2)/N;
   const expected=Math.floor(i/2)===Math.floor(j/2)&&i!==j?complex(v+u*Math.cos(k),(i%2===0?-1:1)*u*Math.sin(k)):complex();
   near(B[i][j].re,expected.re);near(B[i][j].im,expected.im);
  }
  for(let l=0;l<N;l++){
   const z=B[2*l][2*l+1],e2=v*v+u*u+2*v*u*Math.cos(2*Math.PI*l/N);
   near(z.re*z.re+z.im*z.im,e2);
  }
 }
 assert.match(get('ssh-fixed-dimerization-bands').latex,/v\+we\^\{-ik\}/);
});

test('SSH winding is orientation-sensitive, integer in the gap, and excluded at gap closing',()=>{
 function winding(v,u,orientation=1){assert.notEqual(v,u);let total=0;const N=8192;for(let j=0;j<N;j++){
  const k=-Math.PI+2*Math.PI*(j+0.5)/N,dx=v+u*Math.cos(k),dy=orientation*u*Math.sin(k),dxp=-u*Math.sin(k),dyp=orientation*u*Math.cos(k);
  total+=(dx*dyp-dy*dxp)/(dx*dx+dy*dy)/N;
 }return total;}
 for(const [v,u,expected] of [[0,1,1],[1,0,0],[0.3,1,1],[1,0.3,0]]){near(winding(v,u),expected);near(winding(v,u,-1),-expected);}
 assert.throws(()=>winding(1,1));
 assert.match(get('ssh-chiral-winding').latex,/d_x\\partial_k d_y-d_y\\partial_k d_x/);
 // In the v=0 open-chain limit the two terminal basis states are isolated, not bulk states.
 const N=6,H=matrix(2*N);for(let m=0;m<N-1;m++)H[2*m+1][2*m+2]=H[2*m+2][2*m+1]=complex(1);
 for(const i of [0,2*N-1])assert.ok(H[i].every(z=>z.re===0&&z.im===0));
});

test('Aubry–André finite Fourier duality detects full-amplitude normalization and phase errors',()=>{
 // Rational coprime p/q, periodic ring, two phases. This tests a finite matrix identity, NOT localization in an infinite irrational system.
 for(const phi of [0,0.37])for(const [p,q,J,delta] of [[2,5,0.7,1.9],[3,7,1.1,2.2],[3,8,1,0]]){
  const H=matrix(q),F=matrix(q);
  for(let m=0;m<q;m++){
   H[m][m]=complex(delta*Math.cos(2*Math.PI*p*m/q+phi));
   H[m][(m+1)%q]=H[(m+1)%q][m]=complex(J);
   for(let l=0;l<q;l++)F[m][l]=mul(complex(1/Math.sqrt(q)),phase(2*Math.PI*p*m*l/q));
  }
  const D=transform(H,F);
  for(let i=0;i<q;i++)for(let j=0;j<q;j++){
   const expected=i===j?complex(2*J*Math.cos(2*Math.PI*p*i/q)):(i+1)%q===j?mul(complex(delta/2),phase(-phi)):(j+1)%q===i?mul(complex(delta/2),phase(phi)):complex();
   near(D[i][j].re,expected.re);near(D[i][j].im,expected.im);
  }
 }
 assert.match(get('aubry-andre-onsite-hamiltonian').latex,/\\Delta\\sum_m\\cos\(2\\pi\\beta m\+\\phi\)/);
});

test('Holstein oscillator displacement and Franck–Condon hopping reproduce the stated limiting band',()=>{
 for(const Omega of [0.3,1,2])for(const g of [-2,-0.2,0,0.5,2]){
  const lambda=g*Omega,N=80,psi=Array(N).fill(0);psi[0]=Math.exp(-g*g/2);
  for(let n=1;n<N;n++)psi[n]=psi[n-1]*g/Math.sqrt(n);
  near(psi.reduce((s,x)=>s+x*x,0),1);
  const E=-lambda*lambda/Omega;
  let residual=0;
  for(let n=0;n<N;n++){
   const Hpsi=Omega*n*psi[n]-lambda*((n>0?Math.sqrt(n)*psi[n-1]:0)+(n+1<N?Math.sqrt(n+1)*psi[n+1]:0));
   residual+=(Hpsi-E*psi[n])**2;
  }
  assert.ok(Math.sqrt(residual)<1e-10);
  // Two-site oscillator product overlap: <g,0|0,g> = <g|0><0|g>.
  const hoppingOverlap=psi[0]*psi[0];near(hoppingOverlap,Math.exp(-g*g));
  for(const t of [0,0.01,0.04])for(const k of [0,0.7,Math.PI]){
   const projected=E-2*t*hoppingOverlap*Math.cos(k),formula=E-2*t*Math.exp(-g*g)*Math.cos(k);near(projected,formula);
  }
 }
 assert.match(get('holstein-small-hopping-band').latex,/e\^\{-g\^2\}/);
 assert.match(get('holstein-small-hopping-band').description,/finite-t band is an approximation/);
});

function pageAt(route){const errs=[],v=new VirtualConsole();v.on('jsdomError',e=>errs.push(e.message));const dom=new JSDOM(fs.readFileSync('index.html','utf8'),{url:'https://example.test/'+route,runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:v});const w=dom.window;w.HTMLElement.prototype.scrollIntoView=function(){};w.MathJax={typesetPromise:()=>Promise.resolve(),typesetClear:()=>{}};w.eval(fs.readFileSync('node_modules/d3/dist/d3.min.js','utf8'));for(const f of files)w.eval(fs.readFileSync(f,'utf8'));w.eval(fs.readFileSync('app.js','utf8'));return {dom,d:w.document,errs};}

test('lattice comparisons and theory pages show individual review dates without rewriting hub dates',()=>{
 const b=pageAt('#/compare?ids=ssh-model,aubry-andre,holstein-model,hawking-radiation');
 try{
  const r=b.d.querySelector('#comparisonResults');assert.equal(r.querySelectorAll('table').length,1);
  for(const id of ledger.addedPassportTheoryIds){const els=r.querySelectorAll(`[data-comparison-passport="${id}"]`);assert.ok(els.length>=3);assert.match(els[0].textContent,/2026-10-07/);}
  assert.match(r.querySelector('[data-comparison-passport="hawking-radiation"]').textContent,/2026-09-29/);
  assert.equal(r.querySelectorAll('thead th').length,5);assert.deepEqual(b.errs,[]);
 }finally{b.dom.window.close();}
 for(const id of ['ssh-model','hawking-radiation']){const b=pageAt('#/theory/'+id);try{assert.match(b.d.querySelector('.passport-head .badge').textContent,id==='ssh-model'?/2026-10-07/:/2026-09-29/);assert.deepEqual(b.errs,[]);}finally{b.dom.window.close();}}
});
