import {test,expect} from '@playwright/test';
const site='https://quantumindex.site';
for(const width of [430,320]){
 test('public interaction layouts and deep links at '+width+'px',async({page},info)=>{
  test.setTimeout(120000);
  await page.setViewportSize({width,height:932});
  const failures=[];
  page.on('pageerror',e=>failures.push(e.message));
  await page.goto(site+'/docs/physics-explorer.html',{waitUntil:'domcontentloaded',timeout:35000});
  await expect.poll(()=>page.evaluate(()=>window.QI_PHYSICS_EXPLORER_READY===true),{timeout:20000}).toBe(true);
  await page.locator('#theorySearch').fill('Hawking radiation');
  await page.locator('#theoryList [data-theory="hawking-radiation"]').click();
  await expect(page.locator('#theoryDetail .detail-title')).toHaveText('Hawking radiation');
  await page.locator('#theoryDetail').scrollIntoViewIfNeeded();
  await page.waitForTimeout(450);
  await page.screenshot({path:info.outputPath('live-physics-detail-'+width+'.png'),fullPage:false});
  const physics=await page.evaluate(()=>({
   width:document.documentElement.scrollWidth,client:document.documentElement.clientWidth,
   detailX:document.querySelector('#theoryDetail')?.getBoundingClientRect().x,
   detailRight:document.querySelector('#theoryDetail')?.getBoundingClientRect().right,
   hasFormula:document.querySelector('#theoryDetail')?.textContent.includes('Mathematics'),
   statusLabel:document.querySelector('#theoryDetail .metric-pill')?.textContent
  }));
  await page.goto(site+'/docs/observatory-explorer.html',{waitUntil:'domcontentloaded',timeout:35000});
  await expect.poll(()=>page.evaluate(()=>window.QI_OBSERVATORY_PREVIEW_READY===true),{timeout:20000}).toBe(true);
  await page.locator('#registrySearch').fill('Euclid');
  await expect(page.locator('#programmeList .programme-card')).toHaveCount(1);
  await page.locator('#programmeList .programme-card').click();
  await expect(page.locator('#programmeDetail')).toContainText('DR1 Foundation');
  await page.locator('#programmeDetail').scrollIntoViewIfNeeded();
  await page.waitForTimeout(450);
  await page.screenshot({path:info.outputPath('live-observatory-detail-'+width+'.png'),fullPage:false});
  const observatory=await page.evaluate(()=>({width:document.documentElement.scrollWidth,client:document.documentElement.clientWidth,detailRight:document.querySelector('#programmeDetail')?.getBoundingClientRect().right}));
  await page.goto(site+'/#/map',{waitUntil:'domcontentloaded',timeout:35000});
  await expect(page.locator('#mapView')).toHaveClass(/active/);
  await expect(page.locator('#network .node').first()).toBeVisible({timeout:20000});
  await page.locator('#network').scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.screenshot({path:info.outputPath('live-classic-map-'+width+'.png'),fullPage:false});
  const classic=await page.evaluate(()=>({width:document.documentElement.scrollWidth,client:document.documentElement.clientWidth,graphWidth:document.querySelector('#network')?.getBoundingClientRect().width,nodeCount:document.querySelectorAll('#network .node').length}));
  console.log(JSON.stringify({width,physics,observatory,classic,failures}));
  expect(physics.width).toBeLessThanOrEqual(physics.client+1);
  expect(observatory.width).toBeLessThanOrEqual(observatory.client+1);
  expect(classic.width).toBeLessThanOrEqual(classic.client+1);
  expect(physics.detailRight).toBeLessThanOrEqual(width+1);
  expect(observatory.detailRight).toBeLessThanOrEqual(width+1);
  expect(physics.hasFormula).toBe(true);
  expect(classic.nodeCount).toBeGreaterThan(10);
  expect(failures).toEqual([]);
 });
}
