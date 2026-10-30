import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';

const html=fs.readFileSync('docs/physics-explorer.html','utf8');
const css=fs.readFileSync('docs/physics-explorer.css','utf8');
const js=fs.readFileSync('docs/physics-explorer.js','utf8');
const checksum=buffer=>createHash('sha256').update(buffer).digest('hex');
const scope={window:{}};
vm.createContext(scope);
for(const asset of ['theories.js','formulas.js','developments.js','questions.js','evidence.js','problems.js','passports.js']){
  vm.runInContext(fs.readFileSync(asset,'utf8'),scope,{filename:asset});
}
const d=scope.window.QI_DATA;

test('Physics Explorer uses exact original source assets and scientific record identities',()=>{
  assert.equal(d.theories.length,485);
  assert.equal(d.sources.length,612);
  assert.equal(d.relations.length,616);
  assert.equal(scope.window.QI_FORMULAS.formulas.length,464);
  assert.equal(scope.window.QI_QUESTIONS.questions.length,60);
  assert.equal(scope.window.QI_EVIDENCE.records.length,21);
  assert.equal(scope.window.QI_PROBLEMS.problems.length,9);
  assert.equal(new Set(d.theories.map(t=>t.category)).size,14);
  const uniq=(arr,label)=>assert.equal(arr.length,new Set(arr).size,'Duplicate '+label);
  uniq(d.theories.map(t=>t.id),'theory');
  uniq(d.sources.map(t=>t.id),'bibliography source');
  uniq(d.relations.map(t=>t.id).filter(Boolean),'relationship');
  assert.match(html,/src="\.\.\/theories\.js"/);
  assert.match(html,/src="\.\.\/formulas\.js"/);
  assert.match(html,/src="\.\.\/problems\.js"/);
  assert.match(html,/src="\.\.\/evidence\.js"/);
  assert.match(html,/src="\.\/observatory-explorer\.css"/);
});

test('new explorer is additive: approved live atlas renderer and page bytes remain immutable',()=>{
  assert.equal(checksum(fs.readFileSync('index.html')),'b464c8478c83974dfbab204a39249e4f124531c4129c2ff15a5c315fc74fc121');
  assert.equal(checksum(fs.readFileSync('app.js')),'650b38708ca3ce89289ecdde52124ca8ab90acf04a575fb721dcb0189fa8d0d1');
  assert.ok(!fs.readFileSync('index.html','utf8').includes('physics-explorer'));
  assert.ok(!fs.readFileSync('app.js','utf8').includes('physics-explorer'));
  assert.ok(fs.existsSync('docs/observatory-explorer.css'));
  assert.ok(fs.existsSync('docs/observatory-explorer.js'));
  assert.ok(fs.existsSync('docs/observatory-registry.json'));
  assert.doesNotMatch(js,/localStorage|sessionStorage|document\.write|eval\(/);
});

test('first-class inspector preserves correct scientific scope and navigable links',()=>{
  for(const name of ['summaryCounters','topicNav','theoryList','theoryDetail','theorySearch','problemContext','recentDevelopments','statusFilters']){
    assert.match(html,new RegExp('id="'+name+'"'));
  }
  for(const problem of ['dark-matter','measurement-problem','quantum-gravity']){
    assert.ok(scope.window.QI_PROBLEMS.problems.some(x=>x.id===problem));
    assert.match(html,new RegExp('data-problem="'+problem+'"'));
  }
  assert.match(js,/No direct Evidence record is linked here/);
  assert.match(js,/That does not mean it lacks mathematics/);
  assert.match(js,/Source-linked is not equivalent to independently verified/);
  assert.match(js,/Editorial \/ unsourced/);
  assert.match(js,/\.\.\/index\.html#\/workspace/);
  assert.match(html,/href="\.\/observatory-explorer\.html"/);
  assert.match(html,/href="\.\.\/index\.html#\/explore"/);
});

test('all inspected linked sources, formula theory IDs and problem associations are grounded',()=>{
  const theoryIds=new Set(d.theories.map(t=>t.id));
  const sourceIds=new Set(d.sources.map(s=>s.id));
  const problems=scope.window.QI_PROBLEMS.problems;
  for(const f of scope.window.QI_FORMULAS.formulas){
    for(const id of f.theoryIds)assert.ok(theoryIds.has(id),'Unknown linked formula theory '+id);
  }
  for(const p of problems)for(const group of p.approachGroups){
    for(const id of group.theoryIds)assert.ok(theoryIds.has(id),'Unknown problem theory '+id);
  }
  for(const t of d.theories)for(const id of t.sources||[]){
    assert.ok(sourceIds.has(id),'Unknown source link on '+t.id+': '+id);
  }
  assert.ok(css.includes('.theory-card[aria-pressed="true"]'));
  assert.ok(css.includes('@media(max-width:430px)'));
  assert.ok(js.includes('window.QI_PHYSICS_EXPLORER_READY=true'));
});
