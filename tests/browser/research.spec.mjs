import {test,expect} from '@playwright/test';

test('catalog filters survive reload and detail return',async({page})=>{
  await page.goto('/#/catalog?search=Planck');
  await expect(page.locator('#search')).toHaveValue('Planck');
  await page.locator('#catalog a[href*="planck-quanta"]').click();
  await expect(page.locator('#theoryDetail .detail-title')).toHaveText('Planck energy quanta');
  await page.locator('#backToView').click();
  await page.reload();
  await expect(page.locator('#search')).toHaveValue('Planck');
  await expect(page.locator('#catalog a[href*="planck-quanta"]')).toBeVisible();
});

test('two tabs retain competing notes and merge explicitly',async({page,context})=>{
  await page.goto('/#/theory/wave-mechanics');
  const other=await context.newPage();await other.goto('/#/theory/wave-mechanics');
  await page.locator('#researchNote').fill('Draft A');
  await other.locator('#researchNote').fill('Saved B');
  await other.locator('#saveNote').click();
  await expect(other.locator('#researchStatus')).toContainText('Note saved');
  await page.locator('#saveNote').click();
  await expect(page.locator('#currentSavedNote')).toHaveValue('Saved B');
  await expect(page.locator('#researchNote')).toHaveValue('Draft A');
  await page.locator('#combineNote').click();
  await expect(page.locator('#researchStatus')).toHaveText('Both notes saved.');
  await page.reload();
  await expect(page.locator('#researchNote')).toHaveValue('Saved B\n\n— Draft from this tab —\nDraft A');
});

test('drafts survive navigation and reload',async({page})=>{
  await page.goto('/#/theory/wave-mechanics');
  await page.locator('#researchNote').fill('Unfinished draft');
  await page.locator('[data-view="coverage"]').click();
  await page.locator('[data-view="catalog"]').click();
  await page.goto('/#/theory/wave-mechanics');
  page.on('dialog',d=>d.accept());
  await page.reload();
  await expect(page.locator('#researchNote')).toHaveValue('Unfinished draft');
  await page.locator('#saveNote').click();
  await expect(page.locator('#researchStatus')).toContainText('Note saved');
});

test('reviewed formulas render math and coverage fits narrow screens',async({page})=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/#/formula?search=HFB&review=explicit');
  await expect(page.locator('#formulaReview')).toHaveValue('explicit');
  await expect(page.locator('#formulaGrid')).toContainText('HFB quasiparticle');
  await expect(page.locator('#formulaGrid mjx-container').first()).toBeVisible({timeout:30000});
  await page.goto('/#/coverage');
  await expect(page.locator('#coverageView')).toContainText('Nuclear quantum theory');
  await page.setViewportSize({width:320,height:800});
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  expect(errors).toEqual([]);
});


test('bright professional theme remains readable on desktop and mobile',async({page},testInfo)=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/#/map');
  await expect(page.locator('.hero h2')).toHaveText('Explore the ideas shaping modern physics.');
  const palette=await page.evaluate(()=>({
    bg:getComputedStyle(document.documentElement).getPropertyValue('--bg').trim(),
    text:getComputedStyle(document.documentElement).getPropertyValue('--text').trim(),
    accent:getComputedStyle(document.documentElement).getPropertyValue('--accent').trim(),
    body:getComputedStyle(document.body).backgroundImage,
    card:getComputedStyle(document.querySelector('.card')).backgroundColor
  }));
  expect(palette.bg).toBe('#f5f8fa');
  expect(palette.text).toBe('#17313f');
  expect(palette.accent).toBe('#0e8fa3');
  expect(palette.body).not.toBe('none');
  expect(palette.card).toMatch(/rgba?\(255, 255, 255/);

  const desktopPath=testInfo.outputPath('bright-theme-desktop.png');
  await page.screenshot({path:desktopPath,fullPage:false});
  await testInfo.attach('bright-theme-desktop',{path:desktopPath,contentType:'image/png'});

  await page.setViewportSize({width:390,height:844});
  await page.goto('/#/formula?review=explicit');
  await expect(page.locator('#formulaGrid .formula-card').first()).toBeVisible();
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const mobilePath=testInfo.outputPath('bright-theme-mobile.png');
  await page.screenshot({path:mobilePath,fullPage:false});
  await testInfo.attach('bright-theme-mobile',{path:mobilePath,contentType:'image/png'});

  expect(errors).toEqual([]);
});


test('timeline separates origins from reviewed developments and restores filters',async({page})=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/#/timeline?layer=developments&eventType=experimental+result');
  await expect(page.locator('#timelineLayer')).toHaveValue('developments');
  await expect(page.locator('#timelineEventType')).toHaveValue('experimental result');
  await expect(page.locator('#timeline')).toContainText('LZ reports a 2.6σ global excess');
  await expect(page.locator('#timeline')).toContainText('ATLAS observes entanglement in top-quark pairs');
  await expect(page.locator('#timeline')).not.toContainText('DESI DR2 Lyman-alpha full-shape analysis');
  await page.reload();
  await expect(page.locator('#timelineLayer')).toHaveValue('developments');
  await expect(page.locator('#timelineEventType')).toHaveValue('experimental result');

  await page.goto('/#/timeline?layer=origins');
  await expect(page.locator('#timeline')).toContainText('Postquantum classical-gravity framework');
  await expect(page.locator('#timeline .development-card')).toHaveCount(0);
  await expect(page.locator('#timelineScopeSummary')).toContainText('origins currently run through 2023');
  await expect(page.locator('#timelineScopeSummary')).toContainText('through 2026');

  await page.setViewportSize({width:320,height:800});
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  expect(errors).toEqual([]);
});
