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


test('timeline separates origins from reviewed developments and restores filters',async({page},testInfo)=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/#/timeline?layer=developments&eventType=experimental+result');
  await expect(page.locator('#timelineLayer')).toHaveValue('developments');
  await expect(page.locator('#timelineEventType')).toHaveValue('experimental result');
  await expect(page.locator('#timeline')).toContainText('LZ reports a 2.6σ global excess');
  await expect(page.locator('#timeline')).toContainText('ATLAS observes entanglement in top-quark pairs');
  await expect(page.locator('#timeline')).not.toContainText('DESI DR2 Lyman-alpha full-shape analysis');
  const desktopPath=testInfo.outputPath('timeline-developments-desktop.png');
  await page.screenshot({path:desktopPath,fullPage:false});
  await testInfo.attach('timeline-developments-desktop',{path:desktopPath,contentType:'image/png'});
  await page.reload();
  await expect(page.locator('#timelineLayer')).toHaveValue('developments');
  await expect(page.locator('#timelineEventType')).toHaveValue('experimental result');

  await page.goto('/#/timeline?layer=origins');
  await expect(page.locator('#timeline')).toContainText('Postquantum classical-gravity framework');
  await expect(page.locator('#timeline .development-card')).toHaveCount(0);
  await expect(page.locator('#timelineScopeSummary')).toContainText('origins currently run through 2023');
  await expect(page.locator('#timelineScopeSummary')).toContainText('through 2026');

  await page.setViewportSize({width:320,height:800});
  await page.goto('/#/timeline?layer=all');
  await expect(page.locator('#timeline')).toContainText('LZ reports a 2.6σ global excess');
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const mobilePath=testInfo.outputPath('timeline-mobile.png');
  await page.screenshot({path:mobilePath,fullPage:false});
  await testInfo.attach('timeline-mobile',{path:mobilePath,contentType:'image/png'});
  expect(errors).toEqual([]);
});

test('structured research questions preserve dispositions and fit mobile',async({page})=>{
  await page.goto('/#/questions?disposition=open&search=black');
  await expect(page.locator('#questionDisposition')).toHaveValue('open');
  await expect(page.locator('#questionGrid')).toContainText(/black hole|black-hole/i);
  await expect(page.locator('#questionGrid .question-card').first()).toBeVisible();
  await page.setViewportSize({width:320,height:800});
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
});


test('scientific Problems deep-link and fit narrow screens',async({page})=>{
  await page.goto('/#/problems?problem=black-hole-information');
  await expect(page.locator('#problemDetail .problem-title')).toHaveText('Black-hole information problem');
  await expect(page.locator('#problemDetail')).toContainText('Island');
  await page.goto('/#/problems?problem=dark-matter');
  await expect(page.locator('#problemDetail .problem-title')).toHaveText('Dark matter');
  await expect(page.locator('#problemDetail')).toContainText('2.6σ global candidate signal');
  await page.setViewportSize({width:320,height:800});
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
});


test('Evidence view preserves constraint wording and mobile containment',async({page})=>{
  await page.goto('/#/evidence?problem=dark-matter&search=LZ');
  await expect(page.locator('#evidenceProblem')).toHaveValue('dark-matter');
  await expect(page.locator('#evidenceGrid')).toContainText('LZ extended recoil-window search');
  await expect(page.locator('#evidenceGrid')).toContainText('2.6σ global candidate excess');
  await expect(page.locator('#evidenceGrid')).toContainText('Does not establish');
  await page.setViewportSize({width:320,height:800});
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
});


test('Explore is the researcher home and routes into major workflows',async({page})=>{
  await page.goto('/');
  await expect(page.locator('#exploreView')).toHaveClass(/active/);
  await expect(page.locator('#exploreCards .explore-card')).toHaveCount(10);
  await expect(page.locator('#exploreDevelopments .explore-mini').first()).toBeVisible();
  await expect(page.locator('#exploreQuestions .explore-mini').first()).toBeVisible();

  await page.locator('#exploreCards .explore-card',{hasText:'Explore problems'}).click();
  await expect(page).toHaveURL(/#\/problems/);
  await expect(page.locator('#problemDetail .problem-title')).toBeVisible();

  await page.goto('/#/explore');
  await page.locator('#exploreCards .explore-card',{hasText:"What's new"}).click();
  await expect(page).toHaveURL(/#\/timeline\?layer=developments/);
  await expect(page.locator('#timelineLayer')).toHaveValue('developments');

  await page.goto('/#/explore');
  await page.setViewportSize({width:320,height:800});
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
});
