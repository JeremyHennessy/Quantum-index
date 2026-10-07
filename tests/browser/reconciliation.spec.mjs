import {test,expect} from '@playwright/test';

test('reconciled gravity formulas render real math and retain desktop/mobile containment',async({page},testInfo)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/#/formula?search=decoherence&review=explicit');
 await page.waitForFunction(()=>window.MathJax?.tex2svgPromise,{timeout:30000});
 const results=await page.evaluate(async()=>{
  await MathJax.startup.promise;
  const failures=[];
  for(const f of QI_FORMULAS.formulas){
   try{const node=await MathJax.tex2svgPromise(f.latex,{display:true});if(node.querySelector('[data-mml-node="merror"],mjx-merror'))failures.push(f.id);}
   catch(error){failures.push(f.id+': '+error.message);}
  }
  return {failures,total:QI_FORMULAS.formulas.length,latex:QI_FORMULAS.formulas.find(f=>f.id==='cq-decoherence-diffusion-tradeoff').latex};
 });
 expect(results.total).toBe(398);expect(results.failures).toEqual([]);expect(results.latex).toBe(String.raw`4D_2\succeq D_0^{-1}`);
 await expect(page.locator('#formulaGrid')).toContainText('support');
 await expect(page.locator('#formulaGrid mjx-container').first()).toBeVisible();
 for(const width of [1280,320]){
  await page.setViewportSize({width,height:900});
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  await page.locator('#formulaGrid').evaluate(el=>el.scrollIntoView({block:'start'}));
  const path=testInfo.outputPath(`cq-formulas-${width}.png`);await page.screenshot({path,fullPage:false});await testInfo.attach(`cq-formulas-${width}`,{path,contentType:'image/png'});
 }
 await page.goto('/#/problems?problem=quantum-gravity');
 await expect(page.locator('#problemDetail')).toContainText('geodesic');
 await expect(page.locator('#problemDetail')).toContainText('Diósi');
 expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
 expect(errors).toEqual([]);
});
