import {test,expect} from '@playwright/test';
test('QEC source-qualified Passport and formula are navigable and render correctly',async({page},info)=>{
 const errors=[];page.on('pageerror',err=>errors.push(err.message));
 await page.goto('/#/theory/quantum-error-correction');
 const passport=page.locator('#theoryDetail .passport');
 await expect(passport).toContainText('Theorem 3.2');
 await expect(passport).toContainText('exact');
 for(const width of [1280,390]){
  await page.setViewportSize({width,height:900});
  await passport.scrollIntoViewIfNeeded();
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const path=info.outputPath('qec-passport-'+width+'.png');
  await page.screenshot({path});
  await info.attach('qec-passport-'+width,{path,contentType:'image/png'});
 }
 await page.goto('/#/formula?theory=quantum-error-correction&review=explicit');
 const grid=page.locator('#formulaGrid');
 await expect(grid).toContainText('Knill–Laflamme');
 await expect(grid).toContainText('Theorem 3.2');
 await expect(grid.locator('a[href="https://arxiv.org/pdf/quant-ph/9604034v1#page=13"]')).toBeVisible();
 await expect(grid.locator('mjx-container').first()).toBeVisible({timeout:30000});
 await expect(grid.locator('mjx-container [data-mml-node="merror"], mjx-container [fill="red"], mjx-container [stroke="red"]')).toHaveCount(0);
 expect(errors).toEqual([]);
});
