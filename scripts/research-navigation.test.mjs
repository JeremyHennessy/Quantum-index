import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {JSDOM} from 'jsdom';
function setup(hash){
 const dom=new JSDOM('<div id="documentedNavigation"></div><div id="recordTrust"></div>',{url:'https://example.org/'+hash,runScripts:'outside-only'});
 for(const file of ['theories.js','formulas.js','formula-audit.js','developments.js','evidence.js','questions.js','problems.js','passports.js','profiles.js','sourced-paths.js','research-navigation.js'])dom.window.eval(fs.readFileSync(file,'utf8'));
 return dom;
}
test('browser renderer preserves exact cited directed edge and no fallback',()=>{
 const d=setup('#/map?pathFrom=renormalization-group&pathTo=functional-rg&maxHops=1'),doc=d.window.document;
 const result=doc.querySelector('#documentedPathResult');assert.match(result.textContent,/1 directed edge/);assert.match(result.textContent,/wetterich-1993/);
 const source=d.window.QI_DATA.relations.find(r=>r.from==='renormalization-group'&&r.to==='functional-rg');
 for(const id of source.sourceIds)assert.match(result.textContent,new RegExp(id));
 assert.ok(result.textContent.includes(source.evidenceNote));assert.ok(result.textContent.includes(source.type));
 assert.ok(result.querySelector('ol.research-edges'));assert.doesNotMatch(result.querySelector('.research-edge h4').textContent,/^\d+\./);
 d.window.close();
 for(const [query,expected]of [['pathFrom=qed&pathTo=aqft&maxHops=1',/No documented directed path within 1 edges/],['pathFrom=bell&pathTo=bell',/zero edges/],['pathFrom=absent&pathTo=bell',/Unknown or missing/],['pathFrom=bell&pathTo=qed&maxHops=999',/Unsupported edge limit/]]){const x=setup('#/map?'+query);assert.match(x.window.document.querySelector('#documentedPathResult').textContent,expected);x.window.close();}
});
test('trust drill-down uses actual sources, review statuses and evidence associations',()=>{
 const d=setup('#/coverage?theory=bell'),w=d.window,doc=w.document,out=doc.querySelector('#recordTrustResult');
 for(const id of w.QI_DATA.theories.find(t=>t.id==='bell').sources)assert.ok(out.textContent.includes(id));
 assert.match(out.textContent,/not confirmation/);assert.match(out.textContent,/Explicit metadata review/);
 const evidence=w.QI_EVIDENCE.records.filter(e=>e.relatedTheoryIds.includes('bell'));
 for(const e of evidence)assert.ok([...out.querySelectorAll('a')].some(a=>a.hash==='#/evidence?search='+encodeURIComponent(e.title)));
 const fs=w.QI_FORMULAS.formulas.filter(f=>f.theoryIds.includes('bell'));
 for(const f of fs)assert.ok(out.textContent.includes(f.metadataReview));
 d.window.close();
});
test('new tools leave storage untouched and escape unknown input',()=>{
 const d=setup('#/coverage?theory=%3Cscript%3E'),doc=d.window.document;
 assert.match(doc.querySelector('#recordTrustResult').textContent,/not found/);assert.equal(doc.querySelectorAll('script').length,0);assert.equal(d.window.localStorage.length,0);d.window.close();
});
