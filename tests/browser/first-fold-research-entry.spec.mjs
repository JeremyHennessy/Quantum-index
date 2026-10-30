import {test,expect} from '@playwright/test';

test('first-fold navigation preserves all existing routes, cards and light palette',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.setViewportSize({width:1280,height:720});
 await page.goto('/#/explore');
 await expect(page.locator('#exploreCards .explore-card')).toHaveCount(10);
 await expect(page.locator('nav.tabs .tab')).toHaveCount(13);
 const colours=await page.evaluate(()=>({
  bg:getComputedStyle(document.documentElement).getPropertyValue('--bg').trim(),
  text:getComputedStyle(document.documentElement).getPropertyValue('--text').trim(),
  accent:getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()
 }));
 expect(colours).toEqual({bg:'#f5f8fa',text:'#17313f',accent:'#0e8fa3'});
 const shot=info.outputPath('first-fold-desktop.png');
 await page.screenshot({path:shot,fullPage:false});
 await info.attach('first-fold-desktop',{path:shot,contentType:'image/png'});
 await page.locator('.hero-entry-link.primary').click();
 await expect(page).toHaveURL(/#\/problems$/);
 await expect(page.locator('#problemDetail .problem-title')).toBeVisible();
 await expect.poll(()=>page.locator('#problemsView').evaluate(el=>Math.round(el.getBoundingClientRect().top))).toBeLessThan(180);
 expect(errors).toEqual([]);
});
test('first-fold links remain visible at 390 and 320 pixels before statistics, without overflow',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const width of [390,320]){
  await page.setViewportSize({width,height:844});
  await page.goto('/#/explore');
  const link=page.locator('.hero-entry-link.primary');
  await expect(link).toBeVisible();
  const rect=await link.boundingBox();
  expect(rect).toBeTruthy();
  expect(rect.y+rect.height).toBeLessThan(844);
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const shot=info.outputPath('first-fold-mobile-'+width+'.png');
  await page.screenshot({path:shot,fullPage:false});
  await info.attach('first-fold-mobile-'+width,{path:shot,contentType:'image/png'});
  await page.locator('.hero-entry-link',{hasText:'Browse theories'}).click();
  await expect(page).toHaveURL(/#\/catalog$/);
  await expect(page.locator('#catalogView')).toHaveClass(/active/);
  await expect.poll(()=>page.locator('#catalogView').evaluate(el=>Math.round(el.getBoundingClientRect().top))).toBeLessThan(180);
  await expect(page.locator('nav.tabs .tab')).toHaveCount(13);
 }
 expect(errors).toEqual([]);
});
