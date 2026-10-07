import {test,expect} from '@playwright/test';
test('Passport comparison keeps linked evidence, profile disclosure and return selections',async({page},testInfo)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const route='/#/compare?ids=hawking-radiation,wimp-dark-matter,aqft';
 await page.goto(route);
 const result=page.locator('#comparisonResults');
 await expect(result.locator('table')).toHaveCount(1);
 await expect(result).toContainText('Fundamental objects / degrees of freedom');
 await expect(result).toContainText('Passport not yet curated');
 await expect(result.locator('a[href^="#/evidence?search="]').first()).toBeVisible();
 await result.locator('details summary').first().click();
 await expect(result.locator('details').first()).toHaveAttribute('open','');
 for(const width of [1280,390,320]){
  await page.setViewportSize({width,height:900});
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  await result.evaluate(el=>el.scrollIntoView({block:'start'}));
  const path=testInfo.outputPath(`passport-compare-${width}.png`);
  await page.screenshot({path,fullPage:false});
  await testInfo.attach(`passport-compare-${width}`,{path,contentType:'image/png'});
 }
 await result.locator('thead a').first().click();
 await expect(page.locator('#theoryDetail .passport')).toBeVisible();
 await page.locator('#backToView').click();
 await expect(page).toHaveURL(/#\/compare\?ids=hawking-radiation,wimp-dark-matter,aqft$/);
 await expect(page.locator('#compareSlot2')).toHaveValue('aqft');
 await expect(result.locator('[data-comparison-passport="hawking-radiation"]').first()).toBeVisible();
 expect(errors).toEqual([]);
});
test('deferred Zeno equation renders and states the all-survival idealization',async({page},testInfo)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/#/formula?theory=quantum-zeno');
 await expect(page.locator('#formulaGrid .formula-card')).toHaveCount(1);
 await expect(page.locator('#formulaGrid')).toContainText('N consecutive survival outcomes');
 await expect(page.locator('#formulaGrid')).toContainText('Higher-rank projections can permit motion');
 await expect(page.locator('#formulaGrid mjx-container').first()).toBeVisible({timeout:30000});
 await expect(page.locator('#formulaGrid [data-mml-node="merror"]')).toHaveCount(0);
 await page.setViewportSize({width:320,height:900});
 expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
 await page.locator('#formulaGrid').evaluate(el=>el.scrollIntoView({block:'start'}));
 const path=testInfo.outputPath('zeno-320.png');await page.screenshot({path,fullPage:false});
 await testInfo.attach('zeno-320',{path,contentType:'image/png'});
 expect(errors).toEqual([]);
});
