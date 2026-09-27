import test, {before,after} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {JSDOM,VirtualConsole} from 'jsdom';

const sandbox={window:{}};
vm.createContext(sandbox);
for(const file of ['theories.js','formulas.js','formula-audit.js','profiles.js','workspace.js']) vm.runInContext(fs.readFileSync(file,'utf8'),sandbox);
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
  for(const file of ['theories.js','formulas.js','formula-audit.js','profiles.js','workspace.js','app.js']) w.eval(fs.readFileSync(file,'utf8'));
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
  assert.equal(d.querySelector('#backToView').getAttribute('href'),'#/catalog?search=Planck');
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
  for(const file of ['theories.js','formulas.js','formula-audit.js','profiles.js','workspace.js','app.js']) fw.eval(fs.readFileSync(file,'utf8'));
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
  assert.equal(d.querySelectorAll('#profileCollection a').length,59);
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
  await route('#/compare?ids=aqft,unruh');
  assert.match(d.querySelector('#comparisonResults').textContent,/Detailed profile not yet curated/);
  const select=d.querySelector('#compareSlot1');
  await change(()=>{select.value='hawking-radiation';select.dispatchEvent(new w.Event('change'));});
  assert.equal(w.location.hash,'#/compare?ids=aqft,hawking-radiation');
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
      for(const file of ['theories.js','formulas.js','formula-audit.js','profiles.js','workspace.js','app.js']) fw.eval(fs.readFileSync(file,'utf8'));
      if(hash.startsWith('#/compare')) {
        assert.equal(fw.document.querySelector('#compareSlot0').value,'unruh');
        assert.equal(fw.document.querySelector('#compareSlot1').value,'hawking-radiation');
      } else assert.equal(fw.document.querySelector('#backToView').hash,'#/compare?ids=unruh,hawking-radiation');
    } finally {fw.close();}
  }
});

test('learning paths support ordered steps, deep links and return navigation',async()=>{
  await route('#/learn');
  assert.equal(d.querySelectorAll('.learning-path').length,5);
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
  assert.equal(d.querySelectorAll('.learning-path').length,5);
});

test('prerequisites, connections and formula detours retain learning and comparison context',async()=>{
  const comparison='#/compare?ids=unruh,hawking-radiation';
  await route(comparison);
  await change(()=>d.querySelector('.comparison-table thead a').click());
  await change(()=>d.querySelector('#theoryDetail .research-profile a[href*="qft-curved-spacetime"]').click());
  assert.equal(d.querySelector('#backToView').hash,comparison);
  await change(()=>d.querySelector('#theoryDetail .relation[href*="hawking-radiation"]').click());
  assert.equal(d.querySelector('#backToView').hash,comparison);
  const detail=w.location.hash;
  await change(()=>[...d.querySelectorAll('#theoryDetail a')].find(a=>a.textContent==='View linked formulas').click());
  assert.equal(d.querySelector('#formulaReturn a').hash,detail);
  await change(()=>d.querySelector('#formulaReturn a').click());
  assert.equal(d.querySelector('#backToView').hash,comparison);
  await route('#/theory/unruh?from=learn&path=gravity-time');
  await change(()=>d.querySelector('#theoryDetail .research-profile a[href*="qft-curved-spacetime"]').click());
  assert.equal(d.querySelector('#backToView').hash,'#/learn?path=gravity-time');
  assert.match(d.querySelector('[aria-label="Learning path navigation"]').textContent,/Step 1 of 5/);
  await route(comparison);
  await change(()=>d.querySelector('.comparison-table a[href*="/formula?"]').click());
  assert.equal(d.querySelector('#formulaReturn a').hash,comparison);
  await change(()=>d.querySelector('#formulaGrid [data-theory]').click());
  const formulaReturn=d.querySelector('#backToView').hash;
  assert.ok(formulaReturn.startsWith('#/formula?theory=unruh&returnTo='));
  await change(()=>d.querySelector('#theoryDetail .research-profile a[href*="qft-curved-spacetime"]').click());
  assert.equal(d.querySelector('#backToView').hash,formulaReturn);
});

test('comparison search narrows options without losing selections and global filters have explicit scope',async()=>{
  await route('#/compare?ids=unruh,hawking-radiation');
  assert.equal(d.querySelector('.controls').hidden,true);
  const input=d.querySelector('#compareSearch0');input.value='Wheeler';input.dispatchEvent(new w.Event('input'));
  const options=[...d.querySelector('#compareSlot0').options];
  assert.ok(options.length<15);assert.ok(options.some(o=>o.value==='wheeler-dewitt'));
  assert.equal(d.querySelector('#compareSlot0').value,'unruh');
  await change(()=>{const select=d.querySelector('#compareSlot0');select.value='wheeler-dewitt';select.dispatchEvent(new w.Event('change'));});
  assert.equal(w.location.hash,'#/compare?ids=wheeler-dewitt,hawking-radiation');
  await route('#/catalog');assert.equal(d.querySelector('.controls').hidden,false);assert.match(d.querySelector('#filterScope').textContent,/Catalog/);
});

test('workspace UI saves literal notes, progress, bookmarks and comparisons across routes',async()=>{
  await route('#/theory/unruh');
  d.querySelector('#toggleBookmark').click();d.querySelector('#toggleRead').click();
  const note='<img src=x onerror="alert(1)"> Personal note';
  d.querySelector('#researchNote').value=note;await d.querySelector('#saveNote').onclick();
  assert.match(d.querySelector('#researchStatus').textContent,/saved/);
  await route('#/workspace');assert.match(d.querySelector('#workspaceContent').textContent,/1 \/ 5 entries marked read/);
  assert.ok(d.querySelector('#workspaceContent').textContent.includes(note));assert.equal(d.querySelector('#workspaceContent img'),null);
  await route('#/theory/unruh?from=workspace');assert.equal(d.querySelector('#researchNote').value,note);
  assert.equal(d.querySelector('#toggleBookmark').getAttribute('aria-pressed'),'true');
  await route('#/compare?ids=unruh,hawking-radiation');d.querySelector('#saveComparison').click();
  await route('#/workspace');assert.ok(d.querySelector('a[href="#/compare?ids=unruh,hawking-radiation"]'));
  d.querySelector('[data-remove-comparison]').click();assert.equal(w.QI_WORKSPACE.data.comparisons.length,0);
});

test('graph nodes and thought-tree nodes open details using Enter and Space',async()=>{
  await route('#/map');d.querySelector('#resetView').click();
  const node=d.querySelector('.node');assert.equal(node.getAttribute('tabindex'),'0');assert.equal(node.getAttribute('role'),'button');
  await change(()=>node.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Enter',bubbles:true})));assert.equal(active(),'theoryView');
  await route('#/lineage');
  const tree=d.querySelector('.tree-graph-node');assert.equal(tree.getAttribute('tabindex'),'0');
  await change(()=>tree.dispatchEvent(new w.KeyboardEvent('keydown',{key:' ',bubbles:true})));assert.equal(active(),'theoryView');
});

test('all learning steps have profiles and the five reviewed math gaps have explicit outcomes',()=>{
  for(const path of w.QI_PROFILES.learningPaths)for(const step of path.steps)assert.ok(w.QI_PROFILES.profiles[step.theoryId],step.theoryId);
  for(const id of ['qft-curved-spacetime','jt-gravity','replica-wormholes'])assert.ok(audit.find(a=>a.theoryId===id).formulaIds.length);
  for(const [id,classification] of [['amps-firewall','theorem'],['black-hole-complementarity','primarily conceptual']]){const a=audit.find(a=>a.theoryId===id);assert.equal(a.classification,classification);assert.ok(a.reviewEvidence.sourceIds.length);}
  const review=JSON.parse(fs.readFileSync('docs/RELATION_REVIEW_2026-09-26.json','utf8'));
  assert.equal(review.records.length,25);
  for(const item of review.records){const r=w.QI_DATA.relations.find(r=>r.from===item.fromId&&r.to===item.toId&&r.type===item.type);assert.equal(r.evidenceNote,item.evidenceNote);assert.deepEqual([...r.sourceIds],item.sourceIds);if(item.decision==='retained editorial')assert.equal(r.confidence,'editorial');}
});

test('fresh formula and prerequisite detour URLs restore the original return destination',()=>{
  const comparison='#/compare?ids=unruh,hawking-radiation';
  const formula='#/formula?theory=unruh&returnTo='+encodeURIComponent(comparison);
  const detail='#/theory/qft-curved-spacetime?from=formula&returnTo='+encodeURIComponent(formula);
  for(const [hash,selector,expected] of [[formula,'#formulaReturn a',comparison],[detail,'#backToView',formula],['#/theory/qft-curved-spacetime?from=learn&path=gravity-time','#backToView','#/learn?path=gravity-time']]){
    const fresh=new JSDOM(fs.readFileSync('index.html','utf8'),{url:'https://example.test/'+hash,runScripts:'outside-only',pretendToBeVisual:true});
    try{const fw=fresh.window;fw.HTMLElement.prototype.scrollIntoView=function(){};fw.MathJax={typesetPromise:()=>Promise.resolve(),typesetClear:()=>{}};fw.eval(fs.readFileSync('node_modules/d3/dist/d3.min.js','utf8'));for(const f of ['theories.js','formulas.js','formula-audit.js','profiles.js','workspace.js','app.js'])fw.eval(fs.readFileSync(f,'utf8'));assert.equal(fw.document.querySelector(selector).hash,expected);}finally{fresh.window.close();}
  }
});

test('import UI previews valid data, waits for merge and rejects invalid backups',async()=>{
  await route('#/workspace');
  let input=d.querySelector('#importWorkspace');
  const before=w.QI_WORKSPACE.exportText(),incoming=JSON.parse(before);incoming.bookmarks.push('jt-gravity');incoming.notes['jt-gravity']='Imported review note';
  Object.defineProperty(input,'files',{configurable:true,value:[{size:500,text:async()=>JSON.stringify(incoming)}]});
  await input.onchange({target:input});
  assert.equal(w.QI_WORKSPACE.exportText(),before);assert.match(d.querySelector('#importPreview').textContent,/existing work is retained/);
  await d.querySelector('#confirmImport').onclick();assert.equal(w.QI_WORKSPACE.data.notes['jt-gravity'],'Imported review note');
  input=d.querySelector('#importWorkspace');const saved=w.QI_WORKSPACE.exportText();
  Object.defineProperty(input,'files',{configurable:true,value:[{size:12,text:async()=>'{invalid'}]});await input.onchange({target:input});
  assert.equal(d.querySelector('#confirmImport'),null);assert.equal(w.QI_WORKSPACE.exportText(),saved);
});

test('new reading routes open cited profiles and resume at the first unread step',async()=>{
  const original=w.QI_WORKSPACE.data;
  try{
    const data=w.QI_WORKSPACE.data;data.read=[];w.QI_WORKSPACE.save(data);
    await route('#/learn?path=quantum-foundations');
    const card=()=>d.querySelector('[data-learning-path="quantum-foundations"]');
    assert.equal(card().querySelectorAll('.learning-steps li').length,10);
    assert.equal(card().querySelector('progress').value,0);
    assert.equal(card().querySelector('[data-resume-path]').textContent,'Start this path');
    await change(()=>card().querySelector('[data-resume-path]').click());
    assert.equal(w.location.hash,'#/theory/wave-mechanics?from=learn&path=quantum-foundations');
    assert.match(d.querySelector('[aria-label="Learning path navigation"]').textContent,/Step 1 of 10/);
    d.querySelector('#toggleRead').click();
    await change(()=>d.querySelector('#backToView').click());
    assert.equal(card().querySelector('progress').value,1);
    assert.equal(card().querySelector('[data-resume-path]').textContent,'Continue reading');
    assert.equal(card().querySelector('[data-resume-path]').hash,'#/theory/born-rule?from=learn&path=quantum-foundations');
    assert.equal(card().querySelector('.learning-step-status').textContent,'Read');
    const skipped=w.QI_WORKSPACE.data;skipped.read.push('uncertainty','qbism');w.QI_WORKSPACE.save(skipped);
    await route('#/workspace');
    assert.equal(d.querySelector('[data-workspace-path="quantum-foundations"] [data-resume-path]').hash,'#/theory/born-rule?from=learn&path=quantum-foundations');
    assert.equal(d.querySelector('[data-workspace-path="quantum-foundations"] progress').value,3);
  }finally{w.QI_WORKSPACE.save(original);}
});

test('a fully read path offers review without resetting progress and responds to mark-unread',async()=>{
  const original=w.QI_WORKSPACE.data;
  try{
    const path=w.QI_PROFILES.learningPaths.find(p=>p.id==='quantum-information'),data=w.QI_WORKSPACE.data;
    data.read=path.steps.map(s=>s.theoryId);w.QI_WORKSPACE.save(data);
    await route('#/learn?path=quantum-information');
    const card=()=>d.querySelector('[data-learning-path="quantum-information"]');
    assert.equal(card().querySelector('progress').value,9);assert.equal(card().querySelector('progress').max,9);
    assert.equal(card().querySelector('[data-resume-path]').textContent,'Review from start');
    await change(()=>card().querySelector('[data-resume-path]').click());
    assert.equal(w.QI_WORKSPACE.data.read.length,9);
    assert.equal(d.querySelector('#toggleRead').getAttribute('aria-pressed'),'true');
    d.querySelector('#toggleRead').click();await change(()=>d.querySelector('#backToView').click());
    assert.equal(card().querySelector('progress').value,8);
    assert.equal(card().querySelector('[data-resume-path]').hash,'#/theory/density-operator?from=learn&path=quantum-information');
    assert.equal(card().querySelector('[data-resume-path]').textContent,'Continue reading');
  }finally{w.QI_WORKSPACE.save(original);}
});

test('shared read markers count in both new paths and survive a fresh page load',async()=>{
  const original=w.QI_WORKSPACE.data;
  try{
    const data=w.QI_WORKSPACE.data;data.read=['density-operator'];w.QI_WORKSPACE.save(data);
    await route('#/workspace');
    for(const id of ['quantum-foundations','quantum-information'])assert.equal(d.querySelector(`[data-workspace-path="${id}"] progress`).value,1);
    const fresh=new JSDOM(fs.readFileSync('index.html','utf8'),{url:'https://example.test/#/learn?path=quantum-information',runScripts:'outside-only',pretendToBeVisual:true});
    try{
      const fw=fresh.window;fw.HTMLElement.prototype.scrollIntoView=function(){};fw.MathJax={typesetPromise:()=>Promise.resolve(),typesetClear:()=>{}};
      fw.localStorage.setItem('quantum-index-workspace-v1',w.QI_WORKSPACE.exportText());
      fw.eval(fs.readFileSync('node_modules/d3/dist/d3.min.js','utf8'));
      for(const f of ['theories.js','formulas.js','formula-audit.js','profiles.js','workspace.js','app.js'])fw.eval(fs.readFileSync(f,'utf8'));
      const card=fw.document.querySelector('[data-learning-path="quantum-information"]');
      assert.equal(card.querySelector('progress').value,1);
      assert.equal(card.querySelector('[data-resume-path]').hash,'#/theory/quantum-information?from=learn&path=quantum-information');
      assert.equal(card.querySelector('.learning-step-status').textContent,'Read');
    }finally{fresh.window.close();}
  }finally{w.QI_WORKSPACE.save(original);}
});

test('workspace search finds full notes, aliases and read entries and survives detail navigation',async()=>{
  const original=w.QI_WORKSPACE.data;
  try{
    const data={version:1,bookmarks:['unruh'],read:['born-rule'],notes:{unruh:'x'.repeat(200)+' rare-search-marker <script>literal</script>'},comparisons:[]};
    w.QI_WORKSPACE.save(data);await route('#/catalog');await route('#/workspace');
    const search=q=>{const el=d.querySelector('#workspaceSearch');el.value=q;el.dispatchEvent(new w.Event('input',{bubbles:true}));};
    search('RARE-search-marker');assert.equal(d.querySelectorAll('[data-saved-list="notes"] a').length,1);
    assert.equal(d.querySelectorAll('[data-saved-list="read"] a').length,0);
    assert.equal(d.querySelector('#workspaceCollections script'),null);
    await change(()=>d.querySelector('[data-saved-list="notes"] a').click());await change(()=>d.querySelector('#backToView').click());
    assert.equal(d.querySelector('#workspaceSearch').value,'RARE-search-marker');
    const alias=theories.find(t=>t.id==='unruh').aliases[0];if(alias){search(alias);assert.equal(d.querySelectorAll('[data-saved-list="bookmarks"] a').length,1);}
    search('no-such-saved-entry');assert.match(d.querySelector('#workspaceSearchStatus').textContent,/0 of 2 saved entries/);
    search('');assert.equal(d.querySelector('[data-saved-list="read"] a').hash,'#/theory/born-rule?from=workspace');
    assert.equal(w.QI_WORKSPACE.data.notes.unruh,data.notes.unruh);
  }finally{w.QI_WORKSPACE.save(original);}
});
test('filtered comparison removal targets the correct saved comparison',async()=>{
  const original=w.QI_WORKSPACE.data;
  try{
    const data=w.QI_WORKSPACE.data;data.comparisons=[{name:'Keep',theoryIds:['unruh','hawking-radiation']},{name:'Remove unique',theoryIds:['bell','qbism']}];w.QI_WORKSPACE.save(data);
    await route('#/catalog');await route('#/workspace');const el=d.querySelector('#workspaceSearch');el.value='Remove unique';el.dispatchEvent(new w.Event('input'));
    const remove=d.querySelector('[data-remove-comparison]');assert.equal(remove.dataset.removeComparison,'1');remove.click();
    assert.equal(w.QI_WORKSPACE.data.comparisons.length,1);assert.equal(w.QI_WORKSPACE.data.comparisons[0].name,'Keep');
    el.value='';el.dispatchEvent(new w.Event('input'));
  }finally{w.QI_WORKSPACE.save(original);}
});
test('notebook download contains all saved research even when lists are filtered',async()=>{
  const original=w.QI_WORKSPACE.data,create=w.URL.createObjectURL,revoke=w.URL.revokeObjectURL,click=w.HTMLAnchorElement.prototype.click;let blob,filename;
  try{
    const data=w.QI_WORKSPACE.data;data.notes.unruh='Notebook export test';w.QI_WORKSPACE.save(data);
    await route('#/catalog');await route('#/workspace');const el=d.querySelector('#workspaceSearch');el.value='no results';el.dispatchEvent(new w.Event('input'));
    w.URL.createObjectURL=b=>{blob=b;return 'blob:test';};w.URL.revokeObjectURL=()=>{};w.HTMLAnchorElement.prototype.click=function(){filename=this.download;};
    d.querySelector('#exportNotebook').click();assert.equal(filename,'quantum-index-research.md');assert.equal(blob.type,'text/markdown;charset=utf-8');
    const text=await new Promise((resolve,reject)=>{const r=new w.FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsText(blob);});
    assert.ok(text.includes('Notebook export test'));assert.match(d.querySelector('#workspaceStatus').textContent,/download requested/);
    el.value='';el.dispatchEvent(new w.Event('input'));
  }finally{w.QI_WORKSPACE.save(original);w.URL.createObjectURL=create;w.URL.revokeObjectURL=revoke;w.HTMLAnchorElement.prototype.click=click;}
});
test('drafts survive route changes and saved-note conflicts retain both versions',async()=>{
 const original=w.QI_WORKSPACE.data;await route('#/theory/bell');const input=d.querySelector('#researchNote');input.value='Unsaved draft test';input.dispatchEvent(new w.Event('input'));
 await route('#/catalog');await route('#/theory/bell');assert.equal(d.querySelector('#researchNote').value,'Unsaved draft test');assert.ok(w.sessionStorage.getItem('quantum-index-drafts-v1').includes('Unsaved draft test'));
 const external=w.QI_WORKSPACE.data;external.notes.bell='Other tab version';w.localStorage.setItem('quantum-index-workspace-v1',JSON.stringify(external));
 await d.querySelector('#saveNote').onclick();assert.match(d.querySelector('#researchStatus').textContent,/another tab/);assert.equal(d.querySelector('#currentSavedNote').value,'Other tab version');
 await d.querySelector('#combineNote').onclick();assert.match(w.QI_WORKSPACE.data.notes.bell,/Other tab version[\s\S]*Unsaved draft test/);w.QI_WORKSPACE.save(original);
});
test('URL filters restore catalog, formula review, evidence and selected tree state',async()=>{
 await route('#/catalog?search=Bell');assert.equal(d.querySelector('#search').value,'Bell');assert.ok(d.querySelectorAll('#catalog .catalog-card').length<20);
 await route('#/formula?search=entropy&review=explicit');assert.equal(d.querySelector('#formulaSearch').value,'entropy');assert.equal(d.querySelector('#formulaReview').value,'explicit');assert.ok([...d.querySelectorAll('.formula-card .reviewed')].every(x=>x.textContent==='Metadata explicitly reviewed'));
 const tree=w.QI_DATA.trees[2];await route('#/lineage?tree='+encodeURIComponent(tree.name)+'&evidence=sourced');assert.equal(d.querySelector('#treeGraphTitle').textContent,tree.name);assert.ok([...d.querySelectorAll('.tree-links path')].every(x=>x.__data__.sourceIds.length));
 await route('#/coverage');assert.equal(active(),'coverageView');assert.match(d.querySelector('#coverageContent').textContent,/The census is open/);
});
