import test, {before,after} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {JSDOM,VirtualConsole} from 'jsdom';

const sandbox={window:{}};
vm.createContext(sandbox);
for(const file of ['theories.js','formulas.js','formula-audit.js']) vm.runInContext(fs.readFileSync(file,'utf8'),sandbox);
const {theories}=sandbox.window.QI_DATA;
const {formulas}=sandbox.window.QI_FORMULAS;
const audit=sandbox.window.QI_FORMULA_AUDIT.entries;

test('every chronology label contains its recorded first year, including former mismatches',()=>{
  for(const t of theories){
    const [start,end]=t.era==='Before 1900'?[-Infinity,1899]:t.era==='2015–present'?[2015,Infinity]:t.era.split('–').map(Number);
    assert.ok(Number.isFinite(t.year)&&t.year>=start&&t.year<=end,`${t.id}: ${t.year} outside ${t.era}`);
  }
  for(const [id,era] of [['phase-space-qm','1925–1939'],['open-quantum-systems','1960–1979'],['aqft','1940–1959'],['quantum-reference-frames','2015–present']]){
    assert.equal(theories.find(t=>t.id===id).era,era);
  }
});

test('existing equations resolve dedicated theory entries without adding duplicate formulas',()=>{
  const expected={bdg:'bogoliubov-de-gennes',ope:'operator-product-expansion','axial-anomaly':'abj-anomaly','weak-value':'weak-measurement',jarzynski:'quantum-fluctuation-relations','bh-entropy':'black-hole-thermodynamics','entanglement-entropy':'entanglement-theory',holevo:'quantum-shannon-theory',matsubara:'finite-temperature-qft','knill-laflamme':'quantum-error-correction','quantum-fisher':'quantum-metrology'};
  for(const [formulaId,theoryId] of Object.entries(expected)){
    assert.ok(formulas.find(f=>f.id===formulaId).theoryIds.includes(theoryId));
    assert.ok(audit.find(a=>a.theoryId===theoryId).formulaIds.includes(formulaId));
  }
  assert.equal(formulas.length,345);
  assert.equal(theories.length,464);
  assert.equal(audit.filter(a=>a.classification==='formula-bearing-gap').length,208);
});

let dom,w,d;
const errors=[];
before(()=>{
  const console=new VirtualConsole();
  console.on('jsdomError',error=>errors.push(error.message));
  dom=new JSDOM(fs.readFileSync('index.html','utf8'),{url:'https://example.test/Quantum-index/',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:console});
  w=dom.window;d=w.document;
  // jsdom has no layout or MathJax engine; browser verification covers both.
  w.HTMLElement.prototype.scrollIntoView=function(){};
  w.MathJax={typesetPromise:()=>Promise.resolve(),typesetClear:()=>{}};
  w.eval(fs.readFileSync('node_modules/d3/dist/d3.min.js','utf8'));
  for(const file of ['theories.js','formulas.js','formula-audit.js','app.js']) w.eval(fs.readFileSync(file,'utf8'));
});
after(()=>dom?.window.close());
async function change(action){
  const changed=new Promise((resolve,reject)=>{
    const timeout=setTimeout(()=>reject(new Error('Expected navigation did not occur')),3000);
    w.addEventListener('hashchange',()=>{clearTimeout(timeout);resolve();},{once:true});
  });
  action();
  await changed;
  await new Promise(resolve=>setTimeout(resolve,20));
}
async function route(hash){if(w.location.hash!==hash) await change(()=>w.location.hash=hash);}
const active=()=>d.querySelector('.view.active').id;
const title=()=>d.querySelector('#theoryDetail .detail-title')?.textContent;

test('catalog opens visible details and return preserves the current search',async()=>{
  await route('#/catalog');
  d.querySelector('#search').value='Planck';
  d.querySelector('#search').dispatchEvent(new w.Event('input'));
  const before=d.querySelector('#resultCount').textContent;
  await change(()=>d.querySelector('#catalog a[href*="planck-quanta"]').click());
  assert.equal(active(),'theoryView');assert.equal(title(),'Planck energy quanta');
  assert.equal(d.querySelector('#backToView').getAttribute('href'),'#/catalog');
  await change(()=>d.querySelector('#backToView').click());
  assert.equal(active(),'catalogView');assert.equal(d.querySelector('#search').value,'Planck');
  assert.equal(d.querySelector('#resultCount').textContent,before);
});

test('timeline cards open theory details rather than updating a hidden panel',async()=>{
  await route('#/timeline');
  await change(()=>d.querySelector('#timeline a[href*="planck-quanta"]').click());
  assert.equal(active(),'theoryView');assert.equal(title(),'Planck energy quanta');
  assert.equal(d.querySelector('#backToView').getAttribute('href'),'#/timeline');
});

test('network and thought-tree nodes open the same accessible detail view',async()=>{
  await route('#/map');
  const node=[...d.querySelectorAll('#network .node')].find(el=>el.__data__.id==='planck-quanta');
  await change(()=>node.dispatchEvent(new w.MouseEvent('click',{bubbles:true})));
  assert.equal(active(),'theoryView');assert.equal(title(),'Planck energy quanta');
  await route('#/lineage');
  const treeNode=d.querySelector('#thoughtTreeGraph .tree-graph-node');
  const expected=treeNode.__data__.name;
  await change(()=>treeNode.dispatchEvent(new w.MouseEvent('click',{bubbles:true})));
  assert.equal(active(),'theoryView');assert.equal(title(),expected);
});

test('theory-to-formula navigation shows the reconciled equation and returns to visible details',async()=>{
  await route('#/theory/bogoliubov-de-gennes');
  await change(()=>d.querySelector('#theoryDetail a[href^="#/formula?"]').click());
  assert.equal(active(),'formulaView');
  assert.equal(d.querySelector('#formulaTheory').value,'bogoliubov-de-gennes');
  assert.equal(d.querySelector('#formulaCount').textContent,'1 / 345 formulas');
  assert.match(d.querySelector('#formulaGrid').textContent,/Bogoliubov–de Gennes equation/);
  await change(()=>d.querySelector('#formulaGrid [data-theory="bogoliubov-de-gennes"]').click());
  assert.equal(active(),'theoryView');assert.equal(title(),'Bogoliubov–de Gennes superconducting formalism');
});

test('browser Back and Forward restore the selected theory and view',async()=>{
  await route('#/catalog');
  await change(()=>d.querySelector('#catalog a[href*="planck-quanta"]').click());
  await change(()=>w.history.back());assert.equal(active(),'catalogView');
  await change(()=>w.history.forward());assert.equal(active(),'theoryView');assert.equal(title(),'Planck energy quanta');
});

test('permanent links load on a fresh page and malformed or missing IDs are handled',async()=>{
  // Re-run app initialization at the canonical URL to exercise initial routing.
  const fresh=new JSDOM(fs.readFileSync('index.html','utf8'),{url:'https://example.test/Quantum-index/#/theory/operator-product-expansion',runScripts:'outside-only',pretendToBeVisual:true});
  const fw=fresh.window;fw.HTMLElement.prototype.scrollIntoView=function(){};
  fw.MathJax={typesetPromise:()=>Promise.resolve(),typesetClear:()=>{}};
  fw.eval(fs.readFileSync('node_modules/d3/dist/d3.min.js','utf8'));
  for(const file of ['theories.js','formulas.js','formula-audit.js','app.js']) fw.eval(fs.readFileSync(file,'utf8'));
  assert.equal(fw.document.querySelector('.view.active').id,'theoryView');
  assert.equal(fw.document.querySelector('#theoryDetail .detail-title').textContent,'Operator product expansion');
  fresh.window.close();
  await route('#/theory/operator-product-expansion');
  assert.equal(active(),'theoryView');assert.equal(title(),'Operator product expansion');
  assert.match(d.title,/Operator product expansion/);
  assert.ok(d.querySelector('#theoryDetail a[href="#/theory/operator-product-expansion"]'));
  await route('#/theory/%E0%A4%A');assert.equal(title(),'Theory not found');
  await route('#/theory/not-in-catalog');assert.equal(title(),'Theory not found');
  await route('#/not-a-view');assert.equal(active(),'mapView');
});

test('both challenge relation spellings appear in rivals and no DOM runtime errors occurred',async()=>{
  await route('#/lineage?theory=bell');
  const blocks=[...d.querySelectorAll('#lineageDetail .lineage-block')];
  assert.match(blocks.find(x=>x.textContent.includes('Rivals / overlaps')).textContent,/Superdeterministic/);
  assert.deepEqual(errors,[]);
});
