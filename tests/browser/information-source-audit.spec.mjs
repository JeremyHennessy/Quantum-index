import {test,expect} from '@playwright/test';import fs from 'node:fs';import vm from 'node:vm';
const audit=JSON.parse(fs.readFileSync('research/INFORMATION_SOURCE_AUDIT_2026-10-21.json')),c={window:{}};vm.createContext(c);for(const f of ['theories.js','formulas.js'])vm.runInContext(fs.readFileSync(f,'utf8'),c);
for(let group=0;group<3;group++)test('information and entanglement source conventions '+(group+1),async({page},info)=>{
 test.setTimeout(120000);if(info.project.name==='webkit')await page.setViewportSize({width:320,height:700});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const patch of audit.patches.slice(group*3,group*3+3)){
  const formula=c.window.QI_FORMULAS.formulas.find(f=>f.id===patch.id);await page.goto('/#/formula?search='+encodeURIComponent(formula.name)+'&review=explicit');const card=page.locator('.formula-card').filter({has:page.getByRole('heading',{name:formula.name,exact:true})}).first();
  await expect(card).toBeVisible();await expect(card.locator('mjx-container')).toHaveCount(1,{timeout:30000});await expect(card.locator('[data-mml-node="merror"], [fill="red"], [stroke="red"]')).toHaveCount(0);await expect(card).toContainText(patch.regime);await expect(card).toContainText(patch.units);for(const text of [...patch.assumptions,...patch.variables])await expect(card).toContainText(text);
  for(const loc of patch.sourceLocations){await expect(card).toContainText(loc.locator);await expect(card.locator('a[href="'+loc.url+'"]')).toHaveCount(patch.sourceLocations.filter(l=>l.url===loc.url).length);}
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBe(true);
  if(['relative-entropy','ssa','diamond-norm'].includes(patch.id)){const math=card.locator('mjx-container');await math.evaluate(el=>el.scrollLeft=el.scrollWidth);expect(await math.evaluate(el=>el.querySelector('svg').getBoundingClientRect().right<=el.getBoundingClientRect().right+2)).toBe(true);await card.screenshot({path:info.outputPath(patch.id+'-right-edge.png'),style:'.topbar{visibility:hidden!important}'});await math.evaluate(el=>el.scrollLeft=0);await card.screenshot({path:info.outputPath(patch.id+'.png'),style:'.topbar{visibility:hidden!important}'});}
 }
 expect(errors).toEqual([]);
});
