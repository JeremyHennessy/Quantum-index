import {test,expect} from '@playwright/test';

test('Fano and steering Passports compare with old review dates and preserve selection on return',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/#/compare?ids=fano-resonance,quantum-steering,hawking-radiation,ssh-model');
 const table=page.locator('#comparisonResults');await expect(table.locator('table')).toHaveCount(1);
 for(const id of ['fano-resonance','quantum-steering'])await expect(table.locator(`[data-comparison-passport="${id}"]`).first()).toContainText('2026-10-07');
 await expect(table.locator('[data-comparison-passport="hawking-radiation"]').first()).toContainText('2026-09-29');
 await table.locator('thead a').first().click();await expect(page.locator('.passport')).toContainText('instrumental energy spread');
 await page.locator('#backToView').click();await expect(page.locator('#compareSlot1')).toHaveValue('quantum-steering');
 for(const width of [1280,320]){await page.setViewportSize({width,height:900});await table.evaluate(el=>el.scrollIntoView({block:'start'}));expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  expect(await table.locator('.comparison-scroll').evaluate(el=>{el.scrollLeft=el.scrollWidth;const ok=el.scrollWidth<=el.clientWidth+2||Math.abs(el.scrollLeft+el.clientWidth-el.scrollWidth)<=2;el.scrollLeft=0;return ok;})).toBeTruthy();
  const path=info.outputPath(`fano-steering-compare-${width}.png`);await page.screenshot({path});await info.attach(`fano-steering-compare-${width}`,{path,contentType:'image/png'});
 }
 await page.goto('/#/theory/quantum-steering');await expect(page.locator('.passport')).toContainText('does not close the detection loophole');expect(errors).toEqual([]);
});

test('Fano and steering formula cards render source-version links, scopes and complete scrollable equations',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/#/formula?search=amo-steering-2026-10-07&review=explicit');await expect(page.locator('#formulaGrid .formula-card')).toHaveCount(4);
 await page.waitForFunction(()=>window.MathJax?.tex2svgPromise,{timeout:30000});
 const result=await page.evaluate(async()=>{await MathJax.startup.promise;const fs=QI_FORMULAS.formulas.filter(f=>f.curationBatch==='amo-steering-2026-10-07'),failures=[];for(const f of fs){const node=await MathJax.tex2svgPromise(f.latex,{display:true});if(node.querySelector('[data-mml-node="merror"],mjx-merror'))failures.push(f.id);}return {ids:fs.map(f=>f.id),failures};});expect(result.ids).toHaveLength(4);expect(result.failures).toEqual([]);
 for(const id of ['fano-resonance','quantum-steering']){
  await page.goto('/#/formula?theory='+id);await expect(page.locator('#formulaGrid .formula-card')).toHaveCount(2);await expect(page.locator('#formulaGrid a[href*="v3#page="]').first()).toBeVisible();await expect(page.locator('#formulaGrid mjx-container').first()).toBeVisible();
  await expect(page.locator('#formulaGrid')).toContainText(id==='fano-resonance'?'standard deviation':'not Bell violation');
  for(const width of [1280,320]){await page.setViewportSize({width,height:900});expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
   const scroll=await page.locator('#formulaGrid .formula-equation mjx-container').evaluateAll(els=>els.every(el=>{el.scrollLeft=el.scrollWidth;const ok=el.scrollWidth<=el.clientWidth+2||Math.abs(el.scrollLeft+el.clientWidth-el.scrollWidth)<=2;el.scrollLeft=0;return ok;}));expect(scroll).toBeTruthy();
   await page.locator('#formulaGrid').evaluate(el=>el.scrollIntoView({block:'start'}));const path=info.outputPath(`${id}-${width}.png`);await page.screenshot({path});await info.attach(`${id}-${width}`,{path,contentType:'image/png'});
  }
 }
 expect(errors).toEqual([]);
});
