import {test,expect} from '@playwright/test';

test('Explore gains one Observatory gateway without removing cards, tabs or core routes',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.setViewportSize({width:1280,height:900});
 await page.goto('/#/explore');
 await expect(page.locator('#exploreView')).toHaveClass(/active/);
 await expect(page.locator('#exploreCards .explore-card')).toHaveCount(10);
 await expect(page.locator('.tabs .tab')).toHaveCount(13);
 const gateway=page.locator('#exploreView .observatory-gateway');
 await expect(gateway).toBeVisible();
 await expect(gateway).toContainText('Observatory Explorer');
 const shot=info.outputPath('observatory-gateway-desktop.png');
 await gateway.scrollIntoViewIfNeeded();
 await page.screenshot({path:shot,fullPage:false});
 await info.attach('observatory-gateway-desktop',{path:shot,contentType:'image/png'});
 await gateway.click();
 await expect(page).toHaveURL(/\/docs\/observatory-explorer\.html$/);
 await expect.poll(()=>page.evaluate(()=>window.QI_OBSERVATORY_PREVIEW_READY===true)).toBe(true);
 await expect(page.locator('#summaryCounters strong')).toHaveText(['30','18','6','6']);
 await page.locator('.return-link').click();
 await expect(page).toHaveURL(/\/index\.html#\/explore$/);
 await expect(page.locator('#exploreView')).toHaveClass(/active/);
 await expect(page.locator('#exploreCards .explore-card')).toHaveCount(10);
 expect(errors).toEqual([]);
});

test('gateway and accepted Explore page fit both narrow browser widths and stay keyboard accessible',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const width of [390,320]){
  await page.setViewportSize({width,height:844});
  await page.goto('/#/explore');
  const gateway=page.locator('.observatory-gateway');
  await expect(gateway).toHaveAttribute('href','./docs/observatory-explorer.html');
  await gateway.scrollIntoViewIfNeeded();
  await expect(gateway).toBeVisible();
  const rect=await gateway.boundingBox();
  expect(rect).toBeTruthy();
  expect(rect.x).toBeGreaterThanOrEqual(0);
  expect(rect.x+rect.width).toBeLessThanOrEqual(width+1);
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const screenshot=info.outputPath('observatory-gateway-mobile-'+width+'.png');
  await page.screenshot({path:screenshot,fullPage:false});
  await info.attach('observatory-gateway-mobile-'+width,{path:screenshot,contentType:'image/png'});
  await gateway.focus();
  await expect(gateway).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/docs\/observatory-explorer\.html$/);
  await expect.poll(()=>page.evaluate(()=>window.QI_OBSERVATORY_PREVIEW_READY===true)).toBe(true);
  await expect(page.locator('.hero h1')).toContainText('From sky surveys');
 }
 expect(errors).toEqual([]);
});

test('new gateway never intercepts existing deep links, formulas or research notes',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/#/formula?theory=quantum-zeno');
 await expect(page.locator('#formulaView')).toHaveClass(/active/);
 await expect(page.locator('#formulaGrid .formula-card').first()).toBeVisible();
 await page.goto('/#/compare?ids=hawking-radiation,wimp-dark-matter');
 await expect(page.locator('#compareView')).toHaveClass(/active/);
 await page.goto('/#/theory/wave-mechanics');
 await expect(page.locator('#theoryView')).toHaveClass(/active/);
 await expect(page.locator('#researchNote')).toBeVisible();
 expect(errors).toEqual([]);
});
