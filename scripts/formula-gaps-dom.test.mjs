import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {JSDOM,VirtualConsole} from 'jsdom';
const audit=JSON.parse(fs.readFileSync('research/FORMULA_GAPS_SOURCE_AUDIT_2026-10-26.json'));
function pageAt(route){
  const errors=[],console=new VirtualConsole();console.on('jsdomError',e=>errors.push(e.message));
  const dom=new JSDOM(fs.readFileSync('index.html','utf8'),{url:'https://example.test/'+route,runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:console});
  const w=dom.window;w.HTMLElement.prototype.scrollIntoView=function(){};
  // Structural DOM checks only: no MathJax, geometry or real browser QA is claimed.
  w.MathJax={typesetPromise:()=>Promise.resolve(),typesetClear:()=>{}};
  w.eval(fs.readFileSync('node_modules/d3/dist/d3.min.js','utf8'));
  for(const file of ['theories.js','developments.js','evidence.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','passports.js','workspace.js','sourced-paths.js','research-navigation.js','app.js'])w.eval(fs.readFileSync(file,'utf8'));
  return {dom,w,doc:w.document,errors};
}
for(const formula of audit.formulas){
  const id=formula.theoryIds[0];
  test('DOM-only '+id+' renders complete untypeset formula, assumptions and all source locators',async()=>{
    const {dom,doc,errors}=pageAt('#/formula?theory='+id+'&review=explicit');
    try{
      await new Promise(resolve=>dom.window.setTimeout(resolve,0));
      const cards=[...doc.querySelectorAll('.formula-card')];assert.equal(cards.length,1);
      const card=cards[0];assert.equal(card.querySelector('h4').textContent,formula.name);
      assert.equal(card.querySelector('.formula-equation').textContent,'\\['+formula.latex+'\\]');
      assert.equal(card.querySelector('.formula-plain').textContent,formula.plain);
      for(const text of [formula.regime,formula.units,formula.description,formula.theoryRelationship,...formula.assumptions,...formula.variables])assert.ok(card.textContent.includes(text),text);
      assert.equal(card.querySelectorAll('.formula-source').length,formula.sourceLocations.length);
      for(const l of formula.sourceLocations){const link=card.querySelector('a[href="'+l.url+'"]');assert.ok(link);assert.ok(link.textContent.includes(l.locator));}
      assert.deepEqual(errors,[]);
    }finally{dom.window.close();}
  });
  test('DOM-only '+id+' theory derives its linked formula without changing historical year or review date',()=>{
    const {dom,w,doc,errors}=pageAt('#/theory/'+id);
    try{
      const theory=w.QI_DATA.theories.find(t=>t.id===id),detail=doc.querySelector('#theoryDetail');
      const section=[...detail.querySelectorAll('.detail-section')].find(s=>s.querySelector('h4')?.textContent==='Formula audit');
      assert.ok(section.textContent.includes('formula-bearing'));assert.ok(section.textContent.includes('covered'));assert.ok(section.textContent.includes('1 source-linked formula in the atlas.'));
      assert.ok(section.querySelector('a').hash.startsWith('#/formula?theory='+id+'&returnTo='));
      assert.ok(detail.textContent.includes(String(theory.year)));assert.ok(detail.textContent.includes('Last source review: '+theory.lastReviewed));
      if(id==='kms-equilibrium')assert.ok(detail.textContent.includes('Review sourced'));
      if(id==='quantum-instruments')for(const sid of ['davies-lewis-1970','okamura-ozawa-instruments-2016']){
        const source=w.QI_DATA.sources.find(s=>s.id===sid);assert.ok(detail.querySelector('a[href="'+source.url+'"]'));
      }
      assert.deepEqual(errors,[]);
    }finally{dom.window.close();}
  });
}
