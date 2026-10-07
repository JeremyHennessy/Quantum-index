import {test,expect} from '@playwright/test';

test('lattice Passports compare and retain review dates and selected theory return routes',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/#/compare?ids=ssh-model,aubry-andre,holstein-model,hawking-radiation');
 const table=page.locator('#comparisonResults');await expect(table.locator('table')).toHaveCount(1);
 for(const id of ['ssh-model','aubry-andre','holstein-model'])await expect(table.locator(`[data-comparison-passport="${id}"]`).first()).toContainText('2026-10-07');
 await expect(table.locator('[data-comparison-passport="hawking-radiation"]').first()).toContainText('2026-09-29');
 await table.locator('thead a').first().click();await expect(page.locator('.passport-head .badge')).toHaveText('reviewed 2026-10-07');
 await expect(page.locator('.passport')).toContainText('Freeze the distortion');
 await page.locator('#backToView').click();await expect(page.locator('#compareSlot2')).toHaveValue('holstein-model');
 for(const width of [1280,320]){
  await page.setViewportSize({width,height:900});await table.evaluate(el=>el.scrollIntoView({block:'start'}));
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const scroll=await table.locator('.comparison-scroll').evaluate(el=>{el.scrollLeft=el.scrollWidth;const ok=el.scrollWidth<=el.clientWidth+2||Math.abs(el.scrollLeft+el.clientWidth-el.scrollWidth)<=2;el.scrollLeft=0;return ok;});expect(scroll).toBeTruthy();
  const path=info.outputPath(`lattice-compare-${width}.png`);await page.screenshot({path});await info.attach(`lattice-compare-${width}`,{path,contentType:'image/png'});
 }
 expect(errors).toEqual([]);
});

test('all five lattice formulas render with scope and usable source locators',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/#/formula?search=lattice-2026-10-07&review=explicit');
 await expect(page.locator('#formulaGrid .formula-card')).toHaveCount(5);
 await page.waitForFunction(()=>window.MathJax?.tex2svgPromise,{timeout:30000});
 const result=await page.evaluate(async()=>{await MathJax.startup.promise;const fs=QI_FORMULAS.formulas.filter(f=>f.curationBatch==='lattice-2026-10-07');const failures=[];for(const f of fs){const node=await MathJax.tex2svgPromise(f.latex,{display:true});if(node.querySelector('[data-mml-node="merror"],mjx-merror'))failures.push(f.id);}return {ids:fs.map(f=>f.id),failures};});
 expect(result.ids).toHaveLength(5);expect(result.failures).toEqual([]);
 await expect(page.locator('#formulaGrid')).toContainText('approximation');
 for(const id of ['ssh-model','aubry-andre','holstein-model']){
  await page.goto('/#/formula?theory='+id);await expect(page.locator('#formulaGrid .formula-card')).toHaveCount(id==='aubry-andre'?1:2);
  await expect(page.locator('#formulaGrid a[href*="v1#page="]').first()).toBeVisible();
  await expect(page.locator('#formulaGrid mjx-container').first()).toBeVisible();
  for(const width of [1280,320]){await page.setViewportSize({width,height:900});expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();await page.locator('#formulaGrid').evaluate(el=>el.scrollIntoView({block:'start'}));const path=info.outputPath(`${id}-${width}.png`);await page.screenshot({path});await info.attach(`${id}-${width}`,{path,contentType:'image/png'});}
 }
 expect(errors).toEqual([]);
});
