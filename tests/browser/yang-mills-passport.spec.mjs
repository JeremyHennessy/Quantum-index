import {test,expect} from '@playwright/test';

test('Yang-Mills original/modern conventions have bounded Passport and error-free MathJax',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/#/theory/yang-mills');
 const passport=page.locator('#theoryDetail .passport');
 await expect(passport).toContainText('F_modern');
 await expect(passport).toContainText('mass gap');
 await expect(passport).toContainText('2026-10-16');
 for(const width of [1280,390]){
  await page.setViewportSize({width,height:900});
  await passport.scrollIntoViewIfNeeded();
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const path=info.outputPath('yang-mills-detail-'+width+'.png');
  await page.screenshot({path});await info.attach('yang-mills-detail-'+width,{path,contentType:'image/png'});
 }
 await page.goto('/#/formula?theory=yang-mills&review=explicit');
 const grid=page.locator('#formulaGrid');
 await expect(grid.locator('.formula-card')).toHaveCount(2);
 await expect(grid).toContainText('Yang–Mills field strength');
 await expect(grid).toContainText('Eq. (15.48)');
 await expect(grid.locator('a[href="https://fma.if.usp.br/~burdman/QFT2/lecture_15.pdf#page=9"]').first()).toBeVisible();
 await expect(grid.locator('mjx-container')).toHaveCount(2,{timeout:30000});
 await expect(grid.locator('mjx-container [data-mml-node="merror"], mjx-container [fill="red"], mjx-container [stroke="red"]')).toHaveCount(0);
 await page.goto('/#/compare?ids=yang-mills,qed,qcd');
 const comparison=page.locator('#comparisonResults');
 await expect(comparison.locator('table')).toHaveCount(1);
 await expect(comparison.locator('[data-comparison-passport="yang-mills"]').first()).toContainText('2026-10-16');
 expect(errors).toEqual([]);
});
