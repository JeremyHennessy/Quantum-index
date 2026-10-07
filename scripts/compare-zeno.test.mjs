import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {JSDOM,VirtualConsole} from 'jsdom';
const files=['theories.js','developments.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','evidence.js','passports.js','workspace.js'];
const sandbox={window:{}};vm.createContext(sandbox);
for(const f of files)vm.runInContext(fs.readFileSync(f,'utf8'),sandbox,{filename:f});
const w=sandbox.window;
const ledger=JSON.parse(fs.readFileSync('docs/COMPARE_ZENO_2026-10-07.json','utf8'));
const canonical=v=>Array.isArray(v)?v.map(canonical):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,canonical(v[k])])):v;
const hash=v=>createHash('sha256').update(v).digest('hex');
test('Compare extension preserves all prior 481 theory and 392 formula records',()=>{
 for(const [name,items] of Object.entries({theories:w.QI_DATA.theories,formulas:w.QI_FORMULAS.formulas.filter(f=>!ledger.addedFormulaIds.includes(f.id))})){
  const ordered=[...items].sort((a,b)=>a.id<b.id?-1:a.id>b.id?1:0);
  assert.equal(ordered.length,ledger.priorScientificIntegrity[name].count);
  assert.equal(hash(JSON.stringify(canonical(ordered))),ledger.priorScientificIntegrity[name].sha256,name);
 }
 assert.deepEqual(Object.keys(ledger.updatedFiles),['app.js']);
 assert.equal(hash(fs.readFileSync('app.js')),ledger.updatedFiles['app.js']);
});
test('Zeno representative resolves the deferred gap with exact protocol and source version',()=>{
 const f=w.QI_FORMULAS.formulas.find(f=>f.id==='zeno-repeated-survival');
 assert.equal(f.formulaType,'exact');assert.equal(f.metadataReview,'explicit');
 assert.ok(f.assumptions.some(x=>/rank-one/.test(x)&&/every outcome/.test(x)));
 assert.ok(f.assumptions.some(x=>/fixed finite total time/.test(x)));
 assert.match(f.regime,/Higher-rank projections can permit motion/);
 assert.match(f.description,/not an exact finite-N identity/);
 assert.match(f.units,/hbar is restored/);
 assert.ok(f.sourceLocations.some(s=>s.url.includes('0903.3297v1')&&/\(8\)/.test(s.locator)));
 assert.equal(w.QI_FORMULA_AUDIT.entries.find(e=>e.theoryId==='quantum-zeno').classification,'formula-bearing');
 assert.deepEqual([...f.theoryIds],['quantum-zeno']);
 assert.equal(w.QI_DATA.sources.filter(s=>s.id===f.sourceIds[0]).length,1);
});
test('Zeno finite-N probability, energy variance and fixed-time limit agree in an explicit two-level model',()=>{
 // H = hbar*Omega*sigma_x, initial state sigma_z-positive; hbar cancels from Ht/hbar.
 for(const omega of [0,0.2,1,3])for(const t of [0,0.1,0.3]){
  for(const n of [1,2,5,20,100]){
   let amplitude=1;
   for(let j=0;j<n;j++)amplitude*=Math.cos(omega*t/n); // unnormalized all-survival branch
   const probability=amplitude**2,exact=Math.cos(omega*t/n)**(2*n);
   assert.ok(Math.abs(probability-exact)<1e-12);
   assert.ok(probability>=0&&probability<=1+1e-12);
  }
  const n=1000,exact=Math.cos(omega*t/n)**(2*n),approx=Math.exp(-((omega*t)**2)/n);
  assert.ok(Math.abs(exact-approx)<2e-9);
  assert.ok(Math.abs(n*(1-exact)-(omega*t)**2)<0.001);
 }
 // A global energy shift changes the phase, not survival or the variance.
 const weights=[0.3,0.7],hbar=2,t=0.4,n=12;
 const p=shift=>{const e=[-1+shift,3+shift];const re=e.reduce((a,E,i)=>a+weights[i]*Math.cos(E*t/(n*hbar)),0),im=e.reduce((a,E,i)=>a-weights[i]*Math.sin(E*t/(n*hbar)),0);return (re*re+im*im)**n;};
 assert.ok(Math.abs(p(0)-p(7))<1e-12);
});
function browser(hash,mutate){
 const errors=[],console=new VirtualConsole();console.on('jsdomError',e=>errors.push(e.message));
 const dom=new JSDOM(fs.readFileSync('index.html','utf8'),{url:'https://example.test/Quantum-index/'+hash,runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:console});
 const w=dom.window;w.HTMLElement.prototype.scrollIntoView=function(){};w.MathJax={typesetPromise:()=>Promise.resolve(),typesetClear:()=>{}};
 w.eval(fs.readFileSync('node_modules/d3/dist/d3.min.js','utf8'));
 for(const f of files)w.eval(fs.readFileSync(f,'utf8'));mutate?.(w);w.eval(fs.readFileSync('app.js','utf8'));
 return {dom,w,d:w.document,errors};
}
test('Compare exposes Passport fields and linked evidence while retaining cited profiles and fallback',()=>{
 const b=browser('#/compare?ids=hawking-radiation,wimp-dark-matter,aqft');
 try{
  const result=b.d.querySelector('#comparisonResults');assert.equal(result.querySelectorAll('table').length,1);
  assert.equal(result.querySelectorAll('thead th').length,4);
  assert.match(result.textContent,/Fundamental objects \/ degrees of freedom/);
  assert.match(result.textContent,/Regime \/ limits/);assert.match(result.textContent,/Not a confidence score/);
  assert.match(result.textContent,/Cited reading profile/);
  assert.match(result.textContent,/Detailed profile not yet curated/);
  assert.ok(result.querySelector('a[href^="#/evidence?search="]'));
  assert.ok(result.querySelector('a[href^="#/questions?search="]'));
  assert.ok(result.querySelector('a[href^="#/problems?problem="]'));
  assert.match(result.querySelector('thead a').hash,/compare=hawking-radiation,wimp-dark-matter,aqft/);
  assert.equal(b.d.querySelectorAll('[data-compare-slot]').length,4);
  assert.deepEqual(b.errors,[]);
 }finally{b.dom.window.close();}
});
test('Passport comparison renders literal scientific text rather than injected HTML',()=>{
 const b=browser('#/compare?ids=hawking-radiation,wimp-dark-matter',w=>{w.QI_PASSPORTS.records[0].degreesOfFreedom='<img src=x onerror="window.BAD=true">';});
 try{const el=b.d.querySelector('#comparisonResults');assert.match(el.textContent,/<img src=x/);assert.equal(el.querySelector('img'),null);assert.equal(b.w.BAD,undefined);}finally{b.dom.window.close();}
});
