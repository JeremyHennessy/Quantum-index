import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {loadRuntime} from './category-trust-census.mjs';

const pack=JSON.parse(fs.readFileSync('research/DARK_MATTER_DM1A_SIMP_ELDER_PROPOSED_RECORDS_2026-10-29.json','utf8'));
const runtime=loadRuntime();
const ids=collection=>new Set(collection.map(r=>r.id));
const asPlain=value=>JSON.parse(JSON.stringify(value));
const base=pack.baselineMain;

test('DM-1A preserves the exact historical release boundary and is not in shipped runtime',()=>{
  assert.equal(base,'228cd84230d0eaef8325dad4a94dc81ad8cf5a27');
  assert.equal(pack.asOf,'2026-10-29');
  assert.equal(pack.state,'source-reviewed-unreleased-runtime-proposal');
  assert.deepEqual(pack.theories.map(x=>x.id),['simp-relic','elder-relic']);
  assert.equal(pack.formulas.length,4);
  assert.equal(pack.sources.length,2);
  assert.equal(pack.relations.length,2);
  assert.ok(pack.releaseCaveats.some(x=>/does not modify any shipped runtime/i.test(x)));
  assert.equal(new Set(pack.theories.map(x=>x.id)).size,2);
  assert.equal(new Set(pack.formulas.map(x=>x.id)).size,4);
  assert.equal(new Set(pack.sources.map(x=>x.id)).size,2);
  const preTheory=ids(runtime.QI_DATA.theories),preSource=ids(runtime.QI_DATA.sources),preFormula=ids(runtime.QI_FORMULAS.formulas);
  // Later accepted releases may add these identities. The dated pre-release proposal stays immutable.
  if(runtime.QI_DATA.theories.length===483){
    for(const t of pack.theories)assert.ok(!preTheory.has(t.id),'collision with exact historical intake '+t.id);
    for(const s of pack.sources)assert.ok(!preSource.has(s.id),'source collision '+s.id);
    for(const f of pack.formulas)assert.ok(!preFormula.has(f.id),'formula collision '+f.id);
  }
});

test('original pages are versioned and every proposed formula has exact source location and scope',()=>{
  const refs=new Set(pack.sources.map(s=>s.id)),theoryIds=new Set(pack.theories.map(t=>t.id));
  for(const s of pack.sources){
    assert.match(s.url,/^https:\/\/arxiv\.org\/pdf\/\d{4}\.\d{4,5}v\d+$/);
    assert.match(s.inspectedPages.join(' '),/Eq|equation/i);
    assert.ok(s.doi&&s.authors&&s.year&&s.type);
  }
  assert.match(pack.sources[0].url,/1402\.5143v2$/);
  assert.match(pack.sources[1].url,/1512\.04545v1$/);
  for(const t of pack.theories){
    assert.ok(t.sources.every(id=>refs.has(id)),t.id);
    assert.equal(t.provenance,'primary-sourced');
    assert.match(t.kind,/mechanism/);
    assert.equal(t.lastReviewed,'2026-10-29');
    assert.ok(t.summary&&t.core);
  }
  for(const f of pack.formulas){
    assert.ok(f.id&&f.name&&f.description&&f.latex&&f.plain);
    assert.equal(f.metadataReview,'explicit',f.id);
    assert.equal(f.curationBatch,'dark-matter-dm1a-simp-elder-20261029');
    assert.ok(f.sourceIds.every(id=>refs.has(id)),f.id);
    assert.ok(f.theoryIds.every(id=>theoryIds.has(id)),f.id);
    assert.ok(f.assumptions.length>=3&&f.variables.length>=3,f.id);
    assert.ok(f.regime&&f.units&&f.theoryRelationship,f.id);
    for(const location of f.sourceLocations){
      assert.ok(refs.has(location.sourceId));
      assert.ok(f.sourceIds.includes(location.sourceId));
      assert.match(location.url,/arxiv\.org\/pdf\/.*v\d+#page=\d+/);
      assert.match(location.locator,/Eq\. \(\d+\)/);
      assert.match(location.locator,/visually|visually inspected|visually checked/i);
    }
  }
  assert.equal(pack.formulas.filter(f=>f.theoryIds.includes('simp-relic')).length,2);
  assert.equal(pack.formulas.filter(f=>f.theoryIds.includes('elder-relic')).length,2);
});

test('SIMP equation and effective rate have consistent equilibrium, depletion and dimensions',()=>{
  const B=pack.formulas.find(f=>f.id==='simp-three-to-two-boltzmann-2014');
  const R=pack.formulas.find(f=>f.id==='simp-effective-three-to-two-rate-2014');
  assert.ok(B&&R);
  assert.match(B.latex,/n_\\chi\^3-n_\\chi\^2 n_/);
  assert.match(B.latex,/n_\\chi\^2-n_\{\\chi,\\mathrm\{eq\}\}\^2/);
  assert.match(R.latex,/\\alpha_\{\\mathrm\{eff\}\}\^3/);
  const collision=(n,neq,k3,k2)=>-(n**3-n*n*neq)*k3-(n*n-neq*neq)*k2;
  assert.ok(collision(5,5,0.01,0.02) === 0, 'equilibrium collision cancellation');
  assert.ok(collision(6,5,0.01,0.02)<0,'above equilibrium should be depleted');
  assert.ok(collision(4,5,0.01,0.02)>0,'below equilibrium should be replenished');
  const rate=(a,m)=>a**3/m**5;
  assert.ok(Math.abs(rate(1,2)/rate(1,1)-1/32)<1e-14);
  assert.ok(Math.abs(rate(2,1)/rate(1,1)-8)<1e-14);
  assert.match(B.units,/E\^-5/);
});

test('ELDER approximations reflect the decoupling sequence without claiming a universal relic',()=>{
  const S=pack.formulas.find(f=>f.id==='elder-dark-cannibal-entropy-2015');
  const T=pack.formulas.find(f=>f.id==='elder-cannibal-temperature-2015');
  assert.ok(S&&T);
  assert.match(S.latex,/a\^3/);
  assert.match(T.latex,/3x_d\^\{-1\}/);
  assert.match(T.latex,/\\ln\(T_d\/T\)/);
  const temp=(Td,T,xd)=>Td/(1+(3/xd)*Math.log(Td/T));
  assert.equal(temp(20,20,5),20);
  assert.ok(temp(20,10,5)>10);
  assert.ok(temp(20,10,5)<20);
  assert.ok(T.assumptions.some(x=>/3-to-2|3→2|cannibal/i.test(x)));
  assert.match(T.regime,/after|epoch|cannibal/i);
});

test('candidate-only in-memory integration preserves old records and yields projected counts',()=>{
  const w=loadRuntime();
  const before={theories:asPlain(w.QI_DATA.theories),sources:asPlain(w.QI_DATA.sources),relations:asPlain(w.QI_DATA.relations),formulas:asPlain(w.QI_FORMULAS.formulas)};
  // Simulation only: the repository files and actual application are untouched.
  w.QI_DATA.sources.push(...pack.sources);
  w.QI_DATA.theories.push(...pack.theories);
  w.QI_DATA.relations.push(...pack.relations);
  w.QI_FORMULAS.formulas.push(...pack.formulas);
  const ctx={window:w};vm.createContext(ctx);vm.runInContext(fs.readFileSync('formula-audit.js','utf8'),ctx);
  for(const [name,current]of Object.entries({theories:w.QI_DATA.theories,sources:w.QI_DATA.sources,relations:w.QI_DATA.relations,formulas:w.QI_FORMULAS.formulas})){
    assert.deepEqual(asPlain(current.slice(0,before[name].length)),before[name],name+' changed historical prefix');
    assert.equal(new Set(current.map(item=>item.id||[item.from,item.to,item.type].join('|'))).size,current.length,name+' duplicated identities');
  }
  const {expectedAfterIntegration:e}=pack;
  assert.equal(w.QI_DATA.theories.length,e.theories);
  assert.equal(w.QI_DATA.sources.length,e.sources);
  assert.equal(w.QI_DATA.relations.length,e.relations);
  assert.equal(w.QI_FORMULAS.formulas.length,e.formulas);
  assert.equal(w.QI_FORMULAS.formulas.filter(f=>f.metadataReview==='explicit').length,e.explicitFormulaMetadata);
  assert.equal(w.QI_FORMULA_AUDIT.entries.filter(x=>x.classification==='formula-bearing').length,e.formulaBearing);
  assert.equal(w.QI_FORMULA_AUDIT.entries.filter(x=>x.classification==='formula-bearing-gap').length,e.formulaGaps);
  for(const rel of pack.relations){
    assert.ok(w.QI_DATA.theories.some(t=>t.id===rel.from));
    assert.ok(w.QI_DATA.theories.some(t=>t.id===rel.to));
    assert.equal(rel.confidence,'editorial');
    assert.equal(rel.evidenceType,'editorial relation');
    assert.deepEqual(rel.sourceIds,[]);
  }
});
