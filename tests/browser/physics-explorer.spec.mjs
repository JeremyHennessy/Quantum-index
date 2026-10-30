import {test,expect} from '@playwright/test';

async function openPhysics(page){
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.goto('/docs/physics-explorer.html');
  await expect.poll(()=>page.evaluate(()=>window.QI_PHYSICS_EXPLORER_READY===true),{timeout:20000}).toBe(true);
  return errors;
}

test('Physics Explorer shows complete original catalogue in Observatory visual system',async({page},info)=>{
  const errors=await openPhysics(page);
  await expect(page.locator('#summaryCounters strong')).toHaveText(['485','464','60','21']);
  await expect(page.locator('#topicNav .domain-button')).toHaveCount(15);
  await expect(page.locator('#theoryList .theory-card')).toHaveCount(485);
  await expect(page.locator('#theoryDetail .detail-title')).toBeVisible();
  await expect(page.locator('.lens-grid .lens-card')).toHaveCount(3);
  await expect(page.locator('#recentDevelopments .milestone')).toHaveCount(4);
  await expect(page.locator('a[href="../index.html#/map"]')).toBeVisible();
  const screenshot=info.outputPath('physics-explorer-first-screen-desktop.png');
  await page.screenshot({path:screenshot,fullPage:false});
  await info.attach('physics-explorer-first-screen-desktop',{path:screenshot,contentType:'image/png'});
  await page.locator('#theoryCatalogue').scrollIntoViewIfNeeded();
  const details=info.outputPath('physics-explorer-inspector-desktop.png');
  await page.screenshot({path:details,fullPage:false});
  await info.attach('physics-explorer-inspector-desktop',{path:details,contentType:'image/png'});
  expect(errors).toEqual([]);
});

test('find theory, inspect real equations and bibliography, and reload stable selection',async({page})=>{
  const errors=await openPhysics(page);
  await page.locator('#theorySearch').fill('Hawking radiation');
  const cards=page.locator('#theoryList .theory-card');
  expect(await cards.count()).toBeGreaterThan(0);
  await page.locator('#theoryList .theory-card[data-theory="hawking-radiation"]').click();
  await expect(page.locator('#theoryDetail .detail-title')).toHaveText('Hawking radiation');
  await expect(page.locator('#theoryDetail')).toContainText('Mathematics');
  await expect(page.locator('#theoryDetail')).toContainText('Original bibliography');
  await expect(page.locator('#theoryDetail a[href*="/index.html#/formula?theory=hawking-radiation"]').first()).toBeVisible();
  await expect(page).toHaveURL(/theory=hawking-radiation/);
  await page.reload();
  await expect.poll(()=>page.evaluate(()=>window.QI_PHYSICS_EXPLORER_READY===true)).toBe(true);
  await expect(page.locator('#theoryDetail .detail-title')).toHaveText('Hawking radiation');
  expect(errors).toEqual([]);
});

test('scientific subjects, status filters and Problem-led exploration all operate',async({page})=>{
  const errors=await openPhysics(page);
  await page.locator('#topicNav .domain-button[data-category="Quantum gravity & spacetime"]').click();
  await expect(page.locator('#topicNav .domain-button[data-category="Quantum gravity & spacetime"]')).toHaveAttribute('aria-pressed','true');
  const topicCount=await page.locator('#theoryList .theory-card').count();
  expect(topicCount).toBeGreaterThan(3);
  expect(topicCount).toBeLessThan(485);
  await page.locator('#topicNav .domain-button[data-category="all"]').click();
  await expect(page.locator('#theoryList .theory-card')).toHaveCount(485);
  await page.locator('#statusFilters .status-filter[data-status="established"]').click();
  await expect(page.locator('#statusFilters .status-filter[data-status="established"]')).toHaveAttribute('aria-pressed','true');
  const statusCount=await page.locator('#theoryList .theory-card').count();
  expect(statusCount).toBeGreaterThan(3);
  expect(statusCount).toBeLessThan(485);
  await page.locator('.lens-card[data-problem="dark-matter"]').click();
  await expect(page.locator('#problemContext')).toBeVisible();
  await expect(page.locator('#problemContext')).toContainText('Dark matter');
  const problemCount=await page.locator('#theoryList .theory-card').count();
  expect(problemCount).toBeGreaterThan(3);
  expect(problemCount).toBeLessThan(485);
  await page.locator('#problemContext button',{hasText:'Clear problem filter'}).click();
  await expect(page.locator('#problemContext')).toBeHidden();
  await expect(page.locator('#theoryList .theory-card')).toHaveCount(485);
  expect(errors).toEqual([]);
});

test('approved Observatory and classic tools remain directly accessible',async({page})=>{
  const errors=await openPhysics(page);
  await page.locator('.header-links a',{hasText:'Observatories'}).click();
  await expect(page).toHaveURL(/\/docs\/observatory-explorer\.html$/);
  await expect.poll(()=>page.evaluate(()=>window.QI_OBSERVATORY_PREVIEW_READY===true)).toBe(true);
  await page.goto('/docs/physics-explorer.html');
  await expect.poll(()=>page.evaluate(()=>window.QI_PHYSICS_EXPLORER_READY===true)).toBe(true);
  await page.locator('.header-links a',{hasText:'Classic atlas'}).click();
  await expect(page).toHaveURL(/\/index\.html#\/explore$/);
  await expect(page.locator('#exploreCards .explore-card')).toHaveCount(10);
  await expect(page.locator('nav.tabs .tab')).toHaveCount(13);
  expect(errors).toEqual([]);
});

test('Physics Explorer retains visual hierarchy and fully usable browsing at 390 and 320 pixels',async({page},info)=>{
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  for(const width of [390,320]){
    await page.setViewportSize({width,height:844});
    await page.goto('/docs/physics-explorer.html');
    await expect.poll(()=>page.evaluate(()=>window.QI_PHYSICS_EXPLORER_READY===true),{timeout:20000}).toBe(true);
    await expect(page.locator('.hero h1')).toBeVisible();
    await expect(page.locator('#topicNav .domain-button').first()).toBeVisible();
    expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
    const hero=info.outputPath('physics-explorer-hero-mobile-'+width+'.png');
    await page.screenshot({path:hero,fullPage:false});
    await info.attach('physics-explorer-hero-mobile-'+width,{path:hero,contentType:'image/png'});
    await page.locator('#theorySearch').fill('Hawking radiation');
    await page.locator('#theoryList .theory-card[data-theory="hawking-radiation"]').click();
    await expect(page.locator('#theoryDetail .detail-title')).toHaveText('Hawking radiation');
    await expect.poll(()=>page.locator('#theoryDetail').evaluate(el=>Math.round(el.getBoundingClientRect().top)),{timeout:6000}).toBeLessThan(180);
    expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
    const shot=info.outputPath('physics-explorer-inspector-mobile-'+width+'.png');
    await page.screenshot({path:shot,fullPage:false});
    await info.attach('physics-explorer-inspector-mobile-'+width,{path:shot,contentType:'image/png'});
  }
  expect(errors).toEqual([]);
});
