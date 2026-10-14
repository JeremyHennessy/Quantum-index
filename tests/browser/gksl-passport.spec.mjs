import {test,expect} from '@playwright/test';

test('GKSL comparison shows theorem boundaries and renders source-qualified QED',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/#/compare?ids=gksl,open-quantum-systems,nonmarkovian-open-systems,qed');
 const table=page.locator('#comparisonResults');await expect(table.locator('table')).toHaveCount(1);
 await expect(table.locator('[data-comparison-passport="gksl"]').first()).toContainText('2026-10-14');
 await expect(table).toContainText('bounded generator');await expect(table).toContainText('Time-dependent');
 await expect(table.locator('[data-comparison-passport="qed"]').first()).toContainText('2026-10-14');
 for(const width of [1280,390]){
  await page.setViewportSize({width,height:900});await table.scrollIntoViewIfNeeded();
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const path=info.outputPath(`gksl-compare-${width}.png`);await page.screenshot({path});await info.attach(`gksl-compare-${width}`,{path,contentType:'image/png'});
 }
 await page.goto('/#/theory/gksl');const passport=page.locator('.passport');
 await expect(passport).toContainText('Theorem 2.2');await expect(passport).toContainText('not an experimental');
 await expect(passport.locator('a[href="https://web2.ph.utexas.edu/~gsudama/pub/1976_002.pdf"]')).toBeVisible();
 await passport.scrollIntoViewIfNeeded();const path=info.outputPath('gksl-detail.png');await page.screenshot({path});await info.attach('gksl-detail',{path,contentType:'image/png'});
 await page.goto('/#/formula?theory=gksl');await expect(page.locator('#formulaGrid')).toContainText('GKSL/Lindblad');
 await expect(page.locator('#formulaGrid mjx-container').first()).toBeVisible({timeout:30000});
 await page.goto('/#/formula?theory=qed&review=explicit');await expect(page.locator('#formulaGrid .formula-card')).toHaveCount(2);await expect(page.locator('#formulaGrid')).toContainText('Natural units');await expect(page.locator('#formulaGrid mjx-container').first()).toBeVisible({timeout:30000});
 const qpath=info.outputPath('qed-formulas.png');await page.locator('#formulaGrid').scrollIntoViewIfNeeded();await page.screenshot({path:qpath});await info.attach('qed-formulas',{path:qpath,contentType:'image/png'});
 expect(errors).toEqual([]);
});
