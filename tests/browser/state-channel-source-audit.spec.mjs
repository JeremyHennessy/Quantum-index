import {test,expect} from '@playwright/test';import fs from 'node:fs';import vm from 'node:vm';
const audit=JSON.parse(fs.readFileSync('research/STATE_CHANNEL_SOURCE_AUDIT_2026-10-21.json'));
const c={window:{}};vm.createContext(c);for(const f of ['theories.js','formulas.js'])vm.runInContext(fs.readFileSync(f,'utf8'),c);
for(let group=0;group<3;group++)test('state/channel source conventions group '+(group+1),async({page},info)=>{
 test.setTimeout(120000);if(info.project.name==='webkit')await page.setViewportSize({width:320,height:700});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const patch of audit.patches.slice(group*4,group*4+4)){
  const formula=c.window.QI_FORMULAS.formulas.find(f=>f.id===patch.id);
  await page.goto('/#/formula?search='+encodeURIComponent(formula.name)+'&review=explicit');
  const card=page.locator('.formula-card').filter({has:page.getByRole('heading',{name:formula.name,exact:true})}).first();
  await expect(card).toBeVisible();await expect(card.locator('mjx-container')).toHaveCount(1,{timeout:30000});
  await expect(card.locator('[data-mml-node="merror"], [fill="red"], [stroke="red"]')).toHaveCount(0);
  await expect(card).toContainText(patch.regime);await expect(card).toContainText('authoritative expositions');
  for(const loc of patch.sourceLocations){await expect(card).toContainText(loc.locator);await expect(card.locator('a[href="'+loc.url+'"]')).toHaveCount(patch.sourceLocations.filter(l=>l.url===loc.url).length);}
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  if(['fidelity','trace-distance','choi'].includes(patch.id)){await card.scrollIntoViewIfNeeded();const shot=info.outputPath(patch.id+'.png');await card.screenshot({path:shot,style:'.topbar{visibility:hidden!important}'});await info.attach(patch.id+' conventions',{path:shot,contentType:'image/png'});}
 }
 expect(errors).toEqual([]);
});
