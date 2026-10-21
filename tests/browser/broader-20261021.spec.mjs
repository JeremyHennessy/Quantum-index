import {test,expect} from '@playwright/test';
import {readFileSync} from 'node:fs';
const ledger=JSON.parse(readFileSync(new URL('../../research/BROADER_RECORDS_2026-10-21.json',import.meta.url),'utf8'));
for(const edit of ledger.collections.formulas.changes){
 test('broader formula '+edit.id+' renders exact provenance and MathJax',async({page},info)=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/#/formula?theory='+encodeURIComponent(edit.after.theoryIds[0])+(edit.after.metadataReview==='explicit'?'&review=explicit':''));
  const card=page.locator('#formulaGrid .formula-card').filter({has:page.locator('h4',{hasText:edit.after.name})}).first();
  await expect(card).toBeVisible();
  await expect(card.locator('mjx-container')).toHaveCount(1,{timeout:30000});
  await expect(card.locator('[data-mml-node="merror"], [fill="red"], [stroke="red"]')).toHaveCount(0);
  for(const loc of (edit.after.sourceLocations||[]))await expect(card.locator('a[href="'+loc.url+'"]')).toHaveCount((edit.after.sourceLocations||[]).filter(l=>l.url===loc.url).length);
  const scrollChecks=await card.locator('.formula-equation, mjx-container').evaluateAll(els=>els.filter(el=>el.scrollWidth>el.clientWidth+1).map(el=>{const max=el.scrollWidth-el.clientWidth;el.scrollLeft=max;const reached=Math.abs(el.scrollLeft-max)<=2;el.scrollLeft=0;return {overflow:getComputedStyle(el).overflowX,reached};}));
  for(const check of scrollChecks){expect(['auto','scroll']).toContain(check.overflow);expect(check.reached).toBeTruthy();}
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  await card.scrollIntoViewIfNeeded();
  if(['horndeski-covariant-action','ckm-original-km-parametrization','heom-drude-infinite-hierarchy','tegr-curvature-torsion-boundary-identity'].includes(edit.id)){const path=info.outputPath(edit.id+'.png');await card.screenshot({path,style:'.topbar{visibility:hidden!important}'});await info.attach(edit.id,{path,contentType:'image/png'});await card.locator('.formula-equation, mjx-container').evaluateAll(els=>els.forEach(el=>{el.scrollLeft=el.scrollWidth-el.clientWidth;}));const endPath=info.outputPath(edit.id+'-right-edge.png');await card.screenshot({path:endPath,style:'.topbar{visibility:hidden!important}'});await info.attach(edit.id+'-right-edge',{path:endPath,contentType:'image/png'});}
  expect(errors).toEqual([]);
 });
}
