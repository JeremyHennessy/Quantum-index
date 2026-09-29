import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const sandbox={window:{}};
vm.createContext(sandbox);
for(const file of ['theories.js','formulas.js','developments.js','questions.js','problems.js'])vm.runInContext(fs.readFileSync(file,'utf8'),sandbox);

const problems=sandbox.window.QI_PROBLEMS.problems;
const questions=sandbox.window.QI_QUESTIONS.questions;
const theories=new Set(sandbox.window.QI_DATA.theories.map(x=>x.id));
const formulas=new Set(sandbox.window.QI_FORMULAS.formulas.map(x=>x.id));
const developments=new Set(sandbox.window.QI_DEVELOPMENTS.events.map(x=>x.id));
const sources=new Set(sandbox.window.QI_DATA.sources.map(x=>x.id));
const questionIds=new Set(questions.map(x=>x.id));

test('five pilot Problems resolve all linked records',()=>{
  assert.deepEqual(Array.from(problems,p=>p.id),['black-hole-information','measurement-problem','quantum-gravity','quantum-thermalization','dark-matter']);
  for(const p of problems){
    assert.ok(p.shortQuestion.length>20,p.id);
    assert.ok(p.whyItMatters.length>80,p.id);
    assert.ok(p.approachGroups.length>=4,p.id);
    assert.ok(p.currentStatus.length>80,p.id);
    assert.ok(p.openIssues.length>=3,p.id);
    for(const group of p.approachGroups)for(const id of group.theoryIds)assert.ok(theories.has(id),id);
    for(const id of p.formulaIds)assert.ok(formulas.has(id),id);
    for(const id of p.questionIds)assert.ok(questionIds.has(id),id);
    for(const id of p.developmentIds)assert.ok(developments.has(id),id);
    for(const id of p.sourceIds)assert.ok(sources.has(id),id);
  }
});

test('Problem/question cross-links are bidirectionally consistent',()=>{
  for(const p of problems){
    const fromProblem=new Set(p.questionIds);
    const fromQuestions=new Set(questions.filter(q=>(q.relatedProblemIds||[]).includes(p.id)).map(q=>q.id));
    assert.deepEqual([...fromQuestions].sort(),[...fromProblem].sort(),p.id);
  }
});

test('dark-matter development context preserves direct-vs-background evidence distinction',()=>{
  const dm=problems.find(p=>p.id==='dark-matter');
  assert.match(dm.developmentContext,/DESI.*not direct detections of dark matter/i);
  assert.match(dm.developmentContext,/2\.6σ global candidate signal/i);
});


test('quantum-gravity Problem exposes model-resolved tabletop discriminators',()=>{
  const qg=problems.find(p=>p.id==='quantum-gravity');
  assert.ok(qg.formulaIds.includes('cq-backreaction-decoherence-diffusion'));
  assert.ok(qg.questionIds.includes('rq-gravity-entanglement-discrimination'));
  for(const id of ['ev-gravity-entanglement-boundary-2025','ev-cq-decoherence-diffusion-2023','ev-classical-gravity-cross-correlation-2025','ev-minimal-noise-nonquantized-gravity-2026'])assert.ok(qg.evidenceIds.includes(id));
  assert.ok(qg.approachGroups.some(g=>g.name==='Low-energy experimental discrimination'));
  assert.match(qg.developmentContext,/model-dependent/i);
});
