import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const plan=JSON.parse(fs.readFileSync('research/PASSPORT_CURATION_QUEUE_2026-10-08.json','utf8'));
const sandbox={window:{}};
vm.createContext(sandbox);
for(const file of ['theories.js','developments.js','evidence.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','passports.js'])
  vm.runInContext(fs.readFileSync(file,'utf8'),sandbox,{filename:file});
const w=sandbox.window;
const theories=new Map(w.QI_DATA.theories.map(x=>[x.id,x]));
const sources=new Map(w.QI_DATA.sources.map(x=>[x.id,x]));
const formulas=new Map(w.QI_FORMULAS.formulas.map(x=>[x.id,x]));
const existing=new Set(w.QI_PASSPORTS.records.map(x=>x.theoryId));

test('next six Passport targets are distinct existing hubs and do not duplicate shipped Passports',()=>{
  assert.equal(plan.status,'scoped-not-source-reviewed-not-shipped');
  assert.equal(plan.targetCount,6);
  assert.equal(plan.candidates.length,6);
  assert.equal(new Set(plan.candidates.map(x=>x.theoryId)).size,6);
  assert.equal(existing.size,25);
  for(const candidate of plan.candidates){
    const t=theories.get(candidate.theoryId);
    assert.ok(t,candidate.theoryId);
    assert.equal(t.category,candidate.domain,candidate.theoryId);
    if(['nuclear-shell-model','in-medium-srg'].includes(candidate.theoryId))assert.ok(existing.has(candidate.theoryId),candidate.theoryId+' nuclear release missing');
    else assert.ok(!existing.has(candidate.theoryId),candidate.theoryId+' is not yet source-reviewed for release');
    assert.equal(candidate.sourceLocationStatus,'not-yet-reviewed');
    assert.ok(candidate.reviewQuestions.length>=3);
    for(const id of candidate.compareWith)assert.ok(theories.has(id),'missing comparison theory '+id);
    for(const id of candidate.sourceIds)assert.ok(sources.has(id),'missing source '+id);
    for(const id of candidate.formulaIds){
      const f=formulas.get(id);
      assert.ok(f,'missing formula '+id);
      assert.ok(f.theoryIds.includes(candidate.theoryId),'formula not linked to '+candidate.theoryId+': '+id);
    }
  }
});

test('future Passport batch is domain balanced and retains source-verification gates',()=>{
  const counts=new Map();
  for(const c of plan.candidates)counts.set(c.domain,(counts.get(c.domain)||0)+1);
  assert.equal(counts.get('Quantum field theory'),2);
  assert.equal(counts.get('Quantum information & open systems'),2);
  assert.equal(counts.get('Nuclear quantum theory'),2);
  assert.ok(plan.acceptance.some(s=>/exact primary\/review source locations/.test(s)));
  assert.ok(plan.acceptance.some(s=>/existing 23 Passports/.test(s)));
  assert.ok(plan.acceptance.some(s=>/Chromium\/WebKit/.test(s)));
});
