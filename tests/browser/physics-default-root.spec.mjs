import {test,expect} from '@playwright/test';

test('new visit to directory-root opens the approved Physics Explorer without changing visual files',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/');
 await expect(page).toHaveURL(/\/docs\/physics-explorer\.html$/);
 await expect.poll(()=>page.evaluate(()=>window.QI_PHYSICS_EXPLORER_READY===true),{timeout:20000}).toBe(true);
 await expect(page.locator('#summaryCounters strong')).toHaveText(['485','464','60','21']);
 await expect(page.locator('#topicNav .domain-button')).toHaveCount(15);
 const shot=info.outputPath('physics-default-root-desktop.png');
 await page.screenshot({path:shot,fullPage:false});
 await info.attach('physics-default-root-desktop',{path:shot,contentType:'image/png'});
 expect(errors).toEqual([]);
});

test('query deep link enters same-source new explorer, but old hash routes remain classic',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/?theory=hawking-radiation');
 await expect(page).toHaveURL(/\/docs\/physics-explorer\.html\?theory=hawking-radiation$/);
 await expect.poll(()=>page.evaluate(()=>window.QI_PHYSICS_EXPLORER_READY===true)).toBe(true);
 await expect(page.locator('#theoryDetail .detail-title')).toHaveText('Hawking radiation');
 for(const route of ['/#/map','/#/theory/gksl','/#/formula?theory=gksl','/#/compare?ids=gksl,qed','/#/workspace']){
  await page.goto(route);
  await expect(page).toHaveURL(new RegExp('/#/'+route.split('/#/')[1].split('?')[0]));
  await expect(page.locator('.tabs .tab')).toHaveCount(13);
  await expect(page.locator('#exploreView')).toHaveCount(1);
 }
 expect(errors).toEqual([]);
});

test('explicit classic index, root hash, empty fragment and escape query avoid redirect',async({page})=>{
 const paths=[
  ['/index.html#/explore','#exploreView'],
  ['/#/explore','#exploreView'],
  ['/#/theory/wave-mechanics','#theoryView'],
  ['/#/map','#mapView'],
  ['/?classic=1','#exploreView'],
  ['/#','#exploreView'],
  ['/index.html','#exploreView']
 ];
 for(const [route,selector]of paths){
  await page.goto(route);
  await expect(page.locator(selector)).toHaveClass(/active/);
  await expect(page.locator('.tabs .tab')).toHaveCount(13);
  expect(new URL(page.url()).pathname).not.toContain('/docs/physics-explorer.html');
 }
});

test('saved browser-local research remains intact across new and classic interfaces',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/index.html#/theory/wave-mechanics');
 const note=page.locator('#researchNote');
 await expect(note).toBeVisible();
 await note.fill('Saved from classic atlas, preserved through new explorer');
 await page.locator('#saveNote').click();
 await expect(page.locator('#researchStatus')).toContainText('Note saved');
 await page.goto('/');
 await expect.poll(()=>page.evaluate(()=>window.QI_PHYSICS_EXPLORER_READY===true)).toBe(true);
 await page.locator('.header-links a',{hasText:'Classic atlas'}).click();
 await expect(page.locator('#exploreView')).toHaveClass(/active/);
 await page.goto('/index.html#/theory/wave-mechanics');
 await expect(page.locator('#researchNote')).toHaveValue('Saved from classic atlas, preserved through new explorer');
 expect(errors).toEqual([]);
});

test('both phone widths retain new entry but legacy source routes remain usable',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const width of [390,320]){
  await page.setViewportSize({width,height:844});
  await page.goto('/');
  await expect.poll(()=>page.evaluate(()=>window.QI_PHYSICS_EXPLORER_READY===true)).toBe(true);
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const shot=info.outputPath('physics-default-mobile-'+width+'.png');
  await page.screenshot({path:shot,fullPage:false});
  await info.attach('physics-default-mobile-'+width,{path:shot,contentType:'image/png'});
  await page.goto('/#/map');
  await expect(page.locator('#mapView')).toHaveClass(/active/);
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
 }
 expect(errors).toEqual([]);
});
