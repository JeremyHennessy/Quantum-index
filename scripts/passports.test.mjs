import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const sandbox={window:{}};
vm.createContext(sandbox);
for(const file of ['theories.js','formulas.js','developments.js','questions.js','problems.js','evidence.js','passports.js'])vm.runInContext(fs.readFileSync(file,'utf8'),sandbox);
const passports=sandbox.window.QI_PASSPORTS.records;
const theoryIds=new Set(sandbox.window.QI_DATA.theories.map(x=>x.id));
const formulaIds=new Set(sandbox.window.QI_FORMULAS.formulas.map(x=>x.id));
const questionIds=new Set(sandbox.window.QI_QUESTIONS.questions.map(x=>x.id));
const problemIds=new Set(sandbox.window.QI_PROBLEMS.problems.map(x=>x.id));
const evidenceIds=new Set(sandbox.window.QI_EVIDENCE.records.map(x=>x.id));
const developmentIds=new Set(sandbox.window.QI_DEVELOPMENTS.events.map(x=>x.id));
const sourceIds=new Set(sandbox.window.QI_DATA.sources.map(x=>x.id));

test('ten curated Theory Passports resolve all structured references',()=>{
  assert.equal(passports.length,10);
  assert.equal(new Set(passports.map(x=>x.theoryId)).size,10);
  for(const p of passports){
    assert.ok(theoryIds.has(p.theoryId),p.theoryId);
    assert.ok(p.coreIdea.length>40,p.theoryId);
    assert.ok(p.degreesOfFreedom.length>40,p.theoryId);
    assert.ok(p.assumptions.length>=3,p.theoryId);
    assert.ok(p.mathematicalStructure.length>30,p.theoryId);
    assert.ok(p.regime.length>30,p.theoryId);
    assert.ok(p.predictionsConsequences.length>=2,p.theoryId);
    assert.ok(p.limitations.length>=2,p.theoryId);
    for(const id of p.problemIds)assert.ok(problemIds.has(id),id);
    for(const id of p.formulaIds)assert.ok(formulaIds.has(id),id);
    for(const id of p.evidenceIds)assert.ok(evidenceIds.has(id),id);
    for(const id of p.questionIds)assert.ok(questionIds.has(id),id);
    for(const id of p.developmentIds)assert.ok(developmentIds.has(id),id);
    for(const id of p.sourceIds)assert.ok(sourceIds.has(id),id);
  }
});

test('Passport evidence language preserves important scientific limits',()=>{
  const hawking=passports.find(x=>x.theoryId==='hawking-radiation');
  assert.match(hawking.evidenceSummary,/does not claim direct astrophysical detection/i);
  const grw=passports.find(x=>x.theoryId==='grw');
  assert.match(grw.evidenceSummary,/Diósi–Penrose.*not GRW specifically/i);
  const wimp=passports.find(x=>x.theoryId==='wimp-dark-matter');
  assert.match(wimp.evidenceSummary,/2\.6σ global candidate signal, not a dark-matter discovery/i);
});
