import {test,expect} from '@playwright/test';
import fs from 'node:fs';
import vm from 'node:vm';
const audit=JSON.parse(fs.readFileSync('research/THERMAL_SOURCE_AUDIT_2026-10-25.json'));
const context={window:{}};vm.createContext(context);
for(const file of ['theories.js','formulas.js'])vm.runInContext(fs.readFileSync(file,'utf8'),context);
for(const patch of audit.patches)test('Thermodynamic scope and primary-source locators: '+patch.id,async({page},info)=>{
  test.setTimeout(120000);
  if(info.project.name==='webkit')await page.setViewportSize({width:320,height:700});
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  const formula=context.window.QI_FORMULAS.formulas.find(item=>item.id===patch.id);
  await page.goto('/#/formula?search='+encodeURIComponent(formula.name)+'&review=explicit');
  const card=page.locator('.formula-card').filter({has:page.getByRole('heading',{name:formula.name,exact:true})}).first();
  await expect(card).toBeVisible();
  await expect(card.locator('mjx-container')).toHaveCount(1,{timeout:30000});
  await expect(card.locator('[data-mml-node="merror"], [fill="red"], [stroke="red"]')).toHaveCount(0);
  for(const text of [patch.regime,patch.units,...patch.assumptions,...patch.variables])await expect(card).toContainText(text);
  for(const location of patch.sourceLocations){
    await expect(card).toContainText(location.locator);
    await expect(card.locator('a[href="'+location.url+'"]')).toHaveCount(patch.sourceLocations.filter(other=>other.url===location.url).length);
  }
  if(patch.id==='landauer')await expect(card).toContainText('canonical');
  expect(await page.locator('html').evaluate(element=>element.scrollWidth<=element.clientWidth)).toBe(true);
  await card.screenshot({path:info.outputPath(patch.id+'.png'),style:'.topbar{visibility:hidden!important}'});
  expect(errors).toEqual([]);
});
