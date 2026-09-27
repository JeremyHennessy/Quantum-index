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

  const desktop=await page.screenshot({fullPage:false});
  await testInfo.attach('bright-theme-desktop',{body:desktop,contentType:'image/png'});

  await page.setViewportSize({width:390,height:844});
  await page.goto('/#/formula?review=explicit');
  await expect(page.locator('#formulaGrid .formula-card').first()).toBeVisible();
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const mobile=await page.screenshot({fullPage:false});
  await testInfo.attach('bright-theme-mobile',{body:mobile,contentType:'image/png'});

  expect(errors).toEqual([]);
});
