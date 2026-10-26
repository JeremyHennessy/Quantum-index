import {test,expect} from '@playwright/test';
import fs from 'node:fs';
import vm from 'node:vm';
const audit=JSON.parse(fs.readFileSync('research/FORMULA_GAPS_SOURCE_AUDIT_2026-10-26.json'));
const context={window:{}};vm.createContext(context);
for(const file of ['theories.js','formulas.js'])vm.runInContext(fs.readFileSync(file,'utf8'),context);
for(const formula of audit.formulas){
const id=formula.theoryIds[0];
const theory=context.window.QI_DATA.theories.find(item=>item.id===id);
const route='/#/formula?theory='+id+'&review=explicit';
const cardFor=page=>page.locator('.formula-card').filter({has:page.getByRole('heading',{name:formula.name,exact:true})});

test(id+' complete definition and all source locators remain visible',async({page},info)=>{
  test.setTimeout(120000);
  if(info.project.name==='webkit')await page.setViewportSize({width:320,height:700});
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.goto(route);
  const card=cardFor(page);
  await expect(card).toHaveCount(1);await expect(card).toBeVisible();
  await expect(page.locator('.formula-card')).toHaveCount(1);
  await expect(card.locator('mjx-container')).toHaveCount(1,{timeout:30000});
  await expect(card.locator('[data-mml-node="merror"], [fill="red"], [stroke="red"]')).toHaveCount(0);
  await expect(card.locator('.formula-plain')).toHaveText(formula.plain);
  for(const text of [formula.description,formula.theoryRelationship,formula.regime,formula.units,...formula.assumptions,...formula.variables])await expect(card).toContainText(text);
  await expect(card).toContainText('Metadata explicitly reviewed');
  for(const location of formula.sourceLocations){
    const link=card.locator('a[href="'+location.url+'"]');
    await expect(link).toHaveCount(1);await expect(link).toContainText(location.locator);
  }
  expect(await page.locator('html').evaluate(element=>element.scrollWidth<=element.clientWidth)).toBe(true);
  // MathJax can own an inner horizontal scroller. Inspect both ends rather than
  // mistaking viewport clipping for a shortened, boundary-only definition.
  const equation=card.locator('.formula-equation');
  for(const end of ['start','end']){
    await equation.evaluate((element,end)=>{for(const target of [element,...element.querySelectorAll('*')])if(target.scrollWidth>target.clientWidth)target.scrollLeft=end==='start'?0:target.scrollWidth;},end);
    await equation.screenshot({path:info.outputPath(id+'-equation-'+end+'.png')});
  }
  await card.screenshot({path:info.outputPath(id+'-card.png'),style:'.topbar{visibility:hidden!important}'});
  expect(errors).toEqual([]);
});

test(id+' theory linkage survives repeated navigation and history without changing provenance',async({page},info)=>{
  if(info.project.name==='webkit')await page.setViewportSize({width:320,height:700});
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.goto('/#/theory/'+id);
  const detail=page.locator('#theoryDetail');
  for(let iteration=0;iteration<2;iteration++){
    await expect(detail).toBeVisible();await expect(detail).toContainText(theory.name);
    await expect(detail).toContainText(theory.provenance==='review-sourced'?'Review sourced':'Primary sourced');
    await expect(detail).toContainText(String(theory.year));
    await expect(detail).toContainText('Last source review: '+theory.lastReviewed);
    const section=detail.locator('.detail-section').filter({has:page.getByRole('heading',{name:'Formula audit',exact:true})});
    await expect(section).toContainText('formula-bearing');await expect(section).toContainText('covered');
    await expect(section).toContainText('1 source-linked formula in the atlas.');
    await section.getByRole('link',{name:'View linked formulas',exact:true}).click();
    await expect(cardFor(page)).toHaveCount(1);await expect(cardFor(page)).toBeVisible();
    await page.getByRole('link',{name:'Back to previous view',exact:true}).click();
    await expect.poll(()=>new URL(page.url()).hash).toBe('#/theory/'+id);
  }
  await detail.getByRole('link',{name:'View linked formulas',exact:true}).click();
  const formulaUrl=page.url();
  await cardFor(page).getByRole('button',{name:theory.name,exact:true}).click();
  await expect(detail).toBeVisible();await expect(detail).toContainText(theory.name);
  await page.goBack();await expect(page).toHaveURL(formulaUrl);await expect(cardFor(page)).toHaveCount(1);await expect(cardFor(page)).toBeVisible();
  await page.goForward();await expect(detail).toBeVisible();await expect(detail).toContainText('1 source-linked formula in the atlas.');
  await page.goBack();await page.reload();await expect(cardFor(page)).toHaveCount(1);await expect(cardFor(page)).toBeVisible();
  expect(errors).toEqual([]);
});

}
