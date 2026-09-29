import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const sandbox={window:{}};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('theories.js','utf8'),sandbox);
vm.runInContext(fs.readFileSync('questions.js','utf8'),sandbox);
const questions=sandbox.window.QI_QUESTIONS.questions;
const theoryIds=new Set(sandbox.window.QI_DATA.theories.map(t=>t.id));
const sourceIds=new Set(sandbox.window.QI_DATA.sources.map(s=>s.id));

test('the 59 profile questions plus one focused problem question are structured without dangling references',()=>{
  assert.equal(questions.length,60);
  assert.equal(new Set(questions.map(q=>q.id)).size,60);
  for(const q of questions){
    assert.ok(q.question.length>10,q.id);
    assert.ok(q.shortAnswer.length>40,q.id);
    assert.ok(q.nextInvestigation.length>20,q.id);
    assert.match(q.reviewedAt,/^2026-09-(?:27|29)$/);
    assert.equal(q.evidenceState,'research-audit-draft');
    assert.ok(q.relatedTheoryIds.length>=1,q.id);
    for(const id of q.relatedTheoryIds)assert.ok(theoryIds.has(id),id);
    for(const id of q.sourceIds)assert.ok(sourceIds.has(id),id);
    for(const ref of q.auditReferences){assert.match(ref.url,/^https?:\/\//);assert.ok(ref.title.length>2);}
  }
});

test('question dispositions preserve the reviewed audit split',()=>{
  const counts=Object.fromEntries(['established-learning','conditional-model-dependent','model-specific-investigation','open'].map(k=>[k,questions.filter(q=>q.disposition===k).length]));
  assert.deepEqual(counts,{'established-learning':11,'conditional-model-dependent':11,'model-specific-investigation':20,'open':18});
});


test('gravity-entanglement question keeps model assumptions explicit',()=>{
  const q=questions.find(q=>q.id==='rq-gravity-entanglement-discrimination');
  assert.ok(q);
  assert.equal(q.disposition,'open');
  assert.match(q.shortAnswer,/not model-independent/i);
  assert.match(q.uncertainty,/Markovianity/i);
  assert.match(q.nextInvestigation,/model matrix/i);
});
