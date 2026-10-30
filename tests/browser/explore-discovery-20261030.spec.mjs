import {test,expect} from '@playwright/test';

const originalTabs=['explore','map','timeline','lineage','catalog','formula','compare','problems','evidence','questions','learn','workspace','coverage'];

test('existing desktop navigation, route IDs and approved palette stay in place',async({page})=>{
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.setViewportSize({width:1280,height:900});
  await page.goto('/#/explore');
  await expect(page.locator('.tabs .tab')).toHaveCount(13);
  expect(await page.locator('.tabs .tab').evaluateAll(items=>items.map(item=>item.dataset.view))).toEqual(originalTabs);
  await expect(page.locator('#viewJump')).toBeHidden();
  await expect(page.locator('#exploreCards .explore-card')).toHaveCount(10);
  const palette=await page.evaluate(()=>({
    bg:getComputedStyle(document.documentElement).getPropertyValue('--bg').trim(),
    text:getComputedStyle(document.documentElement).getPropertyValue('--text').trim(),
    accent:getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()
  }));
  expect(palette).toEqual({bg:'#f5f8fa',text:'#17313f',accent:'#0e8fa3'});
  expect(errors).toEqual([]);
});

test('Explore search reuses filtered catalog route and preserves detail return',async({page})=>{
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.goto('/#/explore');
  await page.locator('#exploreFind').fill('Planck');
  await page.locator('#exploreFindForm button').click();
  await expect(page).toHaveURL(/#\/catalog\?search=Planck/);
  await expect(page.locator('#search')).toHaveValue('Planck');
  await expect(page.locator('#catalog a[href*="planck-quanta"]')).toBeVisible();
  await page.locator('#catalog a[href*="planck-quanta"]').click();
  await expect(page.locator('#theoryDetail .detail-title')).toHaveText('Planck energy quanta');
  await page.locator('#backToView').click();
  await expect(page.locator('#search')).toHaveValue('Planck');
  expect(errors).toEqual([]);
});

test('mobile section jump routes to every existing tool without hiding original tabs',async({page},info)=>{
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.setViewportSize({width:320,height:800});
  await page.goto('/#/explore');
  await expect(page.locator('#viewJump')).toBeVisible();
  const jumpValues=await page.locator('#viewJump option[value]:not([value=""])').evaluateAll(items=>items.map(item=>item.value));
  expect([...jumpValues].sort()).toEqual([...originalTabs].sort());
  await expect(page.locator('.tabs .tab')).toHaveCount(13);
  await page.locator('#viewJump').selectOption('evidence');
  await expect(page).toHaveURL(/#\/evidence/);
  await expect(page.locator('#evidenceView')).toHaveClass(/active/);
  await expect(page.locator('#viewJump')).toHaveValue('evidence');
  await page.locator('#viewJump').selectOption('lineage');
  await expect(page).toHaveURL(/#\/lineage/);
  await expect(page.locator('#lineageView')).toHaveClass(/active/);
  await page.goto('/#/formula?review=explicit');
  await expect(page.locator('#viewJump')).toHaveValue('formula');
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const shot=info.outputPath('mobile-section-jump.png');
  await page.screenshot({path:shot,fullPage:false});
  await info.attach('mobile-section-jump',{path:shot,contentType:'image/png'});
  expect(errors).toEqual([]);
});

test('cosmology shortcuts open existing vetted Problems without creating new theories',async({page},info)=>{
  const choices=[
    ['Dark matter','dark-matter','Dark matter'],
    ['Dark energy','dark-energy-expansion','Dark energy and expansion-history tensions'],
    ['Inflation','inflation-mechanism','Inflationary mechanism and initial conditions'],
    ['Primordial universe','primordial-quantum-classical','Quantum-to-classical primordial perturbations']
  ];
  await page.setViewportSize({width:390,height:844});
  await page.goto('/#/explore');
  const shot=info.outputPath('explore-new-discovery-mobile.png');
  await page.screenshot({path:shot,fullPage:false});
  await info.attach('explore-new-discovery-mobile',{path:shot,contentType:'image/png'});
  for(const[label,id,name] of choices){
    await page.goto('/#/explore');
    await page.locator('.explore-topics a',{hasText:label}).click();
    await expect(page).toHaveURL(new RegExp('#/problems\\?problem='+id));
    await expect(page.locator('#problemDetail .problem-title')).toHaveText(name);
    expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  }
});
