import {test,expect} from '@playwright/test';

test('Physics Explorer retains approved visuals and never sends analytics on test hosts',async({page},info)=>{
 const errors=[],analyticsRequests=[];
 page.on('pageerror',error=>errors.push(error.message));
 page.on('request',request=>{
  if(/static\.cloudflareinsights\.com|qi-engagement-collector/.test(request.url()))analyticsRequests.push(request.url());
 });
 await page.setViewportSize({width:1280,height:900});
 await page.goto('/docs/physics-explorer.html');
 await expect.poll(()=>page.evaluate(()=>window.QI_PHYSICS_EXPLORER_READY===true),{timeout:20000}).toBe(true);
 await expect(page.locator('#summaryCounters strong')).toHaveText(['485','464','60','21']);
 await expect(page.locator('#topicNav .domain-button')).toHaveCount(15);
 await expect(page.locator('.hero h1')).toContainText('The ideas behind');
 await expect(page.locator('#qi-web-analytics')).toHaveCount(0);
 expect(analyticsRequests).toEqual([]);
 const shot=info.outputPath('physics-rum-parity-desktop.png');
 await page.screenshot({path:shot,fullPage:false});
 await info.attach('physics-rum-parity-desktop',{path:shot,contentType:'image/png'});
 expect(errors).toEqual([]);
});

test('privacy disclosure and mobile research experience remain legible',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.setViewportSize({width:390,height:844});
 await page.goto('/docs/physics-explorer.html');
 await expect.poll(()=>page.evaluate(()=>window.QI_PHYSICS_EXPLORER_READY===true),{timeout:20000}).toBe(true);
 expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
 await expect(page.locator('.footer')).toContainText('Cloudflare Web Analytics');
 await expect(page.locator('#theoryList .theory-card')).toHaveCount(485);
 const shot=info.outputPath('physics-rum-parity-mobile.png');
 await page.screenshot({path:shot,fullPage:false});
 await info.attach('physics-rum-parity-mobile',{path:shot,contentType:'image/png'});
 expect(errors).toEqual([]);
});
