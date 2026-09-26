import test, {before,after} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {JSDOM,VirtualConsole} from 'jsdom';

const sandbox={window:{}};
vm.createContext(sandbox);
for(const file of ['theories.js','formulas.js','formula-audit.js','profiles.js']) vm.runInContext(fs.readFileSync(file,'utf8'),sandbox);
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
  assert.ok(formulas.length>=345);
  assert.ok(theories.length>=464);
  assert.ok(audit.filter(a=>a.classification==='formula-bearing-gap').length<=208);
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
  for(const file of ['theories.js','formulas.js','formula-audit.js','profiles.js','app.js']) w.eval(fs.readFileSync(file,'utf8'));
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
  assert.equal(d.querySelector('#formulaCount').textContent,`1 / ${formulas.length} formulas`);
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
  for(const file of ['theories.js','formulas.js','formula-audit.js','profiles.js','app.js']) fw.eval(fs.readFileSync(file,'utf8'));
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

const curation=JSON.parse(fs.readFileSync('docs/CURATION_AMO_MATTER_2026-09-26.json','utf8'));
test('curated batch closes exactly its selected gaps with explicit equation-level evidence',()=>{
  assert.equal(new Set(curation.theoryIds).size,20);
  for(const id of curation.theoryIds){
    const entry=audit.find(e=>e.theoryId===id);
    assert.equal(entry.classification,'formula-bearing',id);
    assert.ok(entry.formulaIds.some(fid=>formulas.find(f=>f.id===fid).curationBatch===curation.batch),id);
  }
  for(const id of [...curation.newFormulaIds,...curation.updatedFormulaIds]){
    const f=formulas.find(f=>f.id===id);
    assert.equal(f.metadataReview,'explicit',id);
    assert.ok(f.assumptions.length&&f.variables.length&&f.sourceLocations.length,id);
    assert.equal(f.reviewedAt,curation.reviewedAt,id);
    for(const location of f.sourceLocations){
      assert.ok(f.sourceIds.includes(location.sourceId),id);
      assert.ok(location.locator.length>8,id);
      assert.equal(new URL(location.url).protocol,'https:',id);
    }
  }
  for(const key of curation.reviewedRelationKeys){
    const r=sandbox.window.QI_DATA.relations.find(r=>[r.from,r.to,r.type].join('|')===key);
    assert.ok(r&&r.sourceIds.length&&r.evidenceNote.length>40,key);
    assert.equal(r.confidence,'high',key);
  }
});

test('AKLT displayed coefficients project onto bond spin 2 with the documented normalization',()=>{
  const f=formulas.find(f=>f.id==='aklt-projector');
  const fractions=[...f.latex.matchAll(/\\frac(\d)(\d)/g)].map(m=>Number(m[1])/Number(m[2]));
  assert.equal(fractions.length,3);
  // For two spin-1 sites, S_i dot S_j has eigenvalues -2,-1,+1 in total-spin 0,1,2.
  const energies=[-2,-1,1].map(x=>fractions[0]*x+fractions[1]*x*x+fractions[2]);
  energies.forEach((e,i)=>assert.ok(Math.abs(e-[0,0,1][i])<1e-12));
  assert.match(formulas.find(f=>f.id==='transverse-ising-chain').variables.join(' '),/sigma_i\^alpha\/2/);
});

test('curated formula citation locators render as usable links without changing navigation',async()=>{
  await route('#/formula?theory=stirap');
  assert.equal(d.querySelectorAll('#formulaGrid .formula-card').length,1);
  assert.match(d.querySelector('#formulaGrid').textContent,/Eqs\. \(5\)–\(6\)/);
  const link=d.querySelector('#formulaGrid a[href="https://arxiv.org/pdf/1605.00224#page=4"]');
  assert.ok(link);assert.equal(link.rel,'noreferrer');
  assert.match(d.querySelector('#formulaGrid').textContent,/counterintuitive pulse sequence/);
});

const chemistry=JSON.parse(fs.readFileSync('docs/CURATION_CHEMISTRY_2026-09-26.json','utf8'));
test('chemistry batch covers all selected theories and retains equation-level evidence',()=>{
  assert.equal(new Set(chemistry.theoryIds).size,12);
  assert.equal(new Set(chemistry.newFormulaIds).size,11);
  for(const id of chemistry.theoryIds){
    const entry=audit.find(e=>e.theoryId===id);
    assert.equal(entry.classification,'formula-bearing',id);
    assert.ok(entry.formulaIds.some(fid=>chemistry.newFormulaIds.includes(fid)),id);
  }
  for(const id of chemistry.newFormulaIds){
    const f=formulas.find(f=>f.id===id);
    assert.equal(f.curationBatch,chemistry.batch,id);
    assert.equal(f.metadataReview,'explicit',id);
    assert.equal(f.reviewedAt,chemistry.reviewedAt,id);
    assert.ok(f.assumptions.length&&f.variables.length&&f.sourceLocations.length,id);
    for(const location of f.sourceLocations){
      assert.ok(f.sourceIds.includes(location.sourceId),id);
      assert.ok(location.locator.length>8,id);
      assert.equal(new URL(location.url).protocol,'https:',id);
    }
  }
  for(const key of chemistry.reviewedRelationKeys){
    const r=sandbox.window.QI_DATA.relations.find(r=>[r.from,r.to,r.type].join('|')===key);
    assert.ok(r&&r.sourceIds.length&&r.evidenceNote.length>40,key);
    assert.equal(r.confidence,'high',key);
  }
});

test('displayed Heitler–London normalization works for nonorthogonal orbitals',()=>{
  const f=formulas.find(f=>f.id==='heitler-london-singlet');
  const denominator=f.latex.match(/\\sqrt\{(\d+)\(1\+S\^(\d+)\)\}/);
  assert.ok(denominator,'Parse the normalization from the displayed formula');
  const [factor,power]=denominator.slice(1).map(Number);
  for(const overlap of [-0.8,0,0.3,0.9,1]){
    // Independent two-component orbitals; build the symmetrized tensor product.
    const a=[1,0],b=[overlap,Math.sqrt(1-overlap*overlap)];
    const state=a.flatMap((ai,i)=>b.map((bj,j)=>(ai*bj+b[i]*a[j])/Math.sqrt(factor*(1+overlap**power))));
    assert.ok(Math.abs(state.reduce((sum,x)=>sum+x*x,0)-1)<1e-12);
    assert.equal(state[1],state[2]);
  }
});

const discovery=JSON.parse(fs.readFileSync('docs/DISCOVERY_2026-09-26.json','utf8'));
test('discovered entries have distinct scope, sources, dated audits, and honest formula coverage',()=>{
  assert.equal(new Set(discovery.theoryIds).size,16);
  for(const entry of discovery.entries){
    const t=theories.find(t=>t.id===entry.theoryId);
    assert.ok(t&&t.sources.length,entry.theoryId);
    assert.equal(t.curationBatch,discovery.batch);
    assert.equal(t.lastReviewed,discovery.reviewedAt);
    assert.ok(t.yearBasis.length>20&&entry.distinctBecause.length>30);
    for(const neighbor of entry.nearestExistingIds)assert.ok(theories.some(t=>t.id===neighbor));
    const a=audit.find(a=>a.theoryId===t.id);
    assert.equal(a.reviewedAt,discovery.reviewedAt);
    if(discovery.formulaGapIds.includes(t.id)){
      assert.equal(a.classification,'formula-bearing-gap',t.id);
      assert.equal(a.coverageStatus,'documented-gap',t.id);
      assert.ok(a.gapReason.length>30);
    }else{
      assert.equal(a.classification,'formula-bearing',t.id);
      for(const id of discovery.reusedFormulaIds)assert.ok(a.formulaIds.includes(id));
    }
    assert.ok(sandbox.window.QI_DATA.trees.some(tree=>tree.nodes.includes(t.id)));
  }
  for(const key of discovery.newRelationKeys){
    const r=sandbox.window.QI_DATA.relations.find(r=>[r.from,r.to,r.type].join('|')===key);
    assert.ok(r&&r.sourceIds.length&&r.evidenceNote.length>40,key);
  }
});

test('all discovered entries open visible details with their linked research sources',async()=>{
  for(const id of discovery.theoryIds){
    await route('#/theory/'+id);
    assert.equal(active(),'theoryView',id);
    const t=theories.find(t=>t.id===id);
    assert.equal(title(),t.name);
    const sourceLinks=[...d.querySelectorAll('#theoryDetail .source-link')].map(a=>a.href);
    for(const sid of t.sources){
      const source=sandbox.window.QI_DATA.sources.find(s=>s.id===sid);
      assert.ok(sourceLinks.includes(source.url),id+': '+sid);
    }
  }
});

test('comparison renders four cited profiles and preserves selection through theory navigation',async()=>{
  const ids='loop-quantum-gravity,string-theory,asymptotic-safety,gravity-effective-field-theory';
  await route('#/compare?ids='+ids);
  assert.equal(active(),'compareView');
  assert.equal(d.querySelectorAll('.comparison-table thead th').length,5);
  assert.equal(d.querySelectorAll('#profileCollection a').length,20);
  assert.ok(d.querySelectorAll('.comparison-table .profile-citations a').length>=28);
  const link=d.querySelector('.comparison-table thead a');
  assert.ok(link.hash.includes('compare='+ids));
  await change(()=>link.click());
  assert.match(d.querySelector('#theoryDetail').textContent,/Problem addressed/);
  assert.equal(d.querySelector('#backToView').hash,'#/compare?ids='+ids);
  await change(()=>d.querySelector('#backToView').click());
  assert.equal(d.querySelector('#compareSlot3').value,'gravity-effective-field-theory');
});

test('comparison sanitizes invalid and duplicate IDs, caps four and supports uncatalogued profiles',async()=>{
  await route('#/compare?ids=missing,unruh,unruh,hawking-radiation,jt-gravity,island-formula,string-theory');
  assert.deepEqual([...d.querySelectorAll('[data-compare-slot]')].map(s=>s.value),['unruh','hawking-radiation','jt-gravity','island-formula']);
  await route('#/compare?ids=planck-quanta,unruh');
  assert.match(d.querySelector('#comparisonResults').textContent,/Detailed profile not yet curated/);
  const select=d.querySelector('#compareSlot1');
  await change(()=>{select.value='hawking-radiation';select.dispatchEvent(new w.Event('change'));});
  assert.equal(w.location.hash,'#/compare?ids=planck-quanta,hawking-radiation');
  await change(()=>d.querySelector('#clearComparison').click());
  assert.equal(d.querySelectorAll('.comparison-table').length,0);
  assert.match(d.querySelector('#comparisonNotice').textContent,/at least two/);
});

test('all curated profiles render citations and detail URLs restore comparison return state',async()=>{
  for(const id of Object.keys(w.QI_PROFILES.profiles)){
    await route('#/theory/'+id);
    assert.ok(d.querySelectorAll('#theoryDetail .profile-citations a').length>=7,id);
  }
  await route('#/compare');
  await route('#/theory/unruh?from=compare&compare=unruh,hawking-radiation');
  assert.equal(d.querySelector('#backToView').hash,'#/compare?ids=unruh,hawking-radiation');
  await change(()=>d.querySelector('#backToView').click());
  assert.equal(d.querySelectorAll('.comparison-table thead th').length,3);
});


test('fresh comparison and detail loads restore shareable selections',()=>{
  for (const hash of ['#/compare?ids=unruh,hawking-radiation','#/theory/unruh?from=compare&compare=unruh,hawking-radiation']) {
    const fresh=new JSDOM(fs.readFileSync('index.html','utf8'),{url:'https://example.test/Quantum-index/'+hash,runScripts:'outside-only',pretendToBeVisual:true});
    const fw=fresh.window;
    try {
      fw.HTMLElement.prototype.scrollIntoView=function(){};
      fw.MathJax={typesetPromise:()=>Promise.resolve(),typesetClear:()=>{}};
      fw.eval(fs.readFileSync('node_modules/d3/dist/d3.min.js','utf8'));
      for(const file of ['theories.js','formulas.js','formula-audit.js','profiles.js','app.js']) fw.eval(fs.readFileSync(file,'utf8'));
      if(hash.startsWith('#/compare')) {
        assert.equal(fw.document.querySelector('#compareSlot0').value,'unruh');
        assert.equal(fw.document.querySelector('#compareSlot1').value,'hawking-radiation');
      } else assert.equal(fw.document.querySelector('#backToView').hash,'#/compare?ids=unruh,hawking-radiation');
    } finally {fw.close();}
  }
});

test('learning paths support ordered steps, deep links and return navigation',async()=>{
  await route('#/learn');
  assert.equal(d.querySelectorAll('.learning-path').length,3);
  await route('#/learn?path=gravity-time');
  assert.equal(d.querySelectorAll('.learning-path').length,1);
  await change(()=>d.querySelector('.learning-steps a').click());
  assert.equal(d.querySelector('#backToView').hash,'#/learn?path=gravity-time');
  assert.match(d.querySelector('[aria-label="Learning path navigation"]').textContent,/Step 1 of 5/);
  await change(()=>[...d.querySelectorAll('[aria-label="Learning path navigation"] a')].find(a=>a.textContent==='Next step').click());
  assert.equal(w.location.hash,'#/theory/unruh?from=learn&path=gravity-time');
  await change(()=>d.querySelector('#backToView').click());
  assert.equal(d.querySelectorAll('.learning-steps li').length,5);
  await route('#/learn?path=does-not-exist');
  assert.equal(d.querySelectorAll('.learning-path').length,3);
});
