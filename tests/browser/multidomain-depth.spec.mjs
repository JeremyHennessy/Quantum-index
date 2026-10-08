import {test,expect} from '@playwright/test';

test('multidomain Passports compare across matter particle gravity and electronic structure',async({page},info)=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/#/compare?ids=bose-hubbard,neutrino-mixing,brans-dicke,density-functional-theory');
  const table=page.locator('#comparisonResults');await expect(table.locator('table')).toHaveCount(1);
  for(const id of ['bose-hubbard','neutrino-mixing','brans-dicke','density-functional-theory']){
    await expect(table.locator(`[data-comparison-passport="${id}"]`).first()).toContainText('2026-10-08');
  }
  await expect(table).toContainText('Fundamental objects / degrees of freedom');
  await expect(table).toContainText('Evidence in the cited work');
  for(const width of [1280,320]){
    await page.setViewportSize({width,height:900});await table.evaluate(el=>el.scrollIntoView({block:'start'}));
    expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
    expect(await table.locator('.comparison-scroll').evaluate(el=>{el.scrollLeft=el.scrollWidth;const ok=el.scrollWidth<=el.clientWidth+2||Math.abs(el.scrollLeft+el.clientWidth-el.scrollWidth)<=2;el.scrollLeft=0;return ok;})).toBeTruthy();
    const path=info.outputPath(`multidomain-compare-${width}.png`);await page.screenshot({path});await info.attach(`multidomain-compare-${width}`,{path,contentType:'image/png'});
  }
  await table.locator('thead a').nth(1).click();
  await expect(page.locator('.passport')).toContainText('absolute mass scale');
  await expect(page.locator('.passport a[href^="#/evidence?"]')).toHaveCount(1);
  await page.locator('#backToView').click();await expect(page.locator('#compareSlot0')).toHaveValue('bose-hubbard');await expect(page.locator('#compareSlot2')).toHaveValue('brans-dicke');
  expect(errors).toEqual([]);
});

test('new neutrino and Brans-Dicke formula cards render source-scoped assumptions',async({page},info)=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/#/formula?theory=neutrino-mixing&review=explicit');
  const neutrino=page.locator('#formulaGrid .formula-card');await expect(neutrino).toHaveCount(2);
  await expect(page.locator('#formulaGrid')).toContainText('Matter effects');
  await expect(page.locator('#formulaGrid')).toContainText('Eqs. (14.39)–(14.40)');
  await page.waitForFunction(()=>window.MathJax?.tex2svgPromise,{timeout:30000});
  for(let i=0;i<2;i++)await expect(neutrino.nth(i).locator('mjx-container').first()).toBeVisible();
  await neutrino.nth(1).evaluate(el=>el.scrollIntoView({block:'start'}));
  let path=info.outputPath('neutrino-vacuum-oscillation-mobile.png');await page.setViewportSize({width:320,height:900});await page.screenshot({path});await info.attach('neutrino-vacuum-oscillation-mobile',{path,contentType:'image/png'});
  expect(await page.locator('#formulaGrid .formula-equation mjx-container').evaluateAll(els=>els.every(el=>{el.scrollLeft=el.scrollWidth;const ok=el.scrollWidth<=el.clientWidth+2||Math.abs(el.scrollLeft+el.clientWidth-el.scrollWidth)<=2;el.scrollLeft=0;return ok;}))).toBeTruthy();

  await page.goto('/#/formula?theory=brans-dicke&review=explicit');
  const bd=page.locator('#formulaGrid .formula-card');await expect(bd).toHaveCount(1);
  await expect(bd).toContainText('No scalar self-interaction potential');
  await expect(bd).toContainText('not a quantum-gravity action');
  await expect(bd.locator('a[href*="s10052-021-09277-4"]')).toHaveCount(1);
  await expect(bd.locator('mjx-container').first()).toBeVisible({timeout:30000});
  await page.setViewportSize({width:1280,height:900});await bd.evaluate(el=>el.scrollIntoView({block:'start'}));path=info.outputPath('brans-dicke-action-desktop.png');await page.screenshot({path});await info.attach('brans-dicke-action-desktop',{path,contentType:'image/png'});
  expect(errors).toEqual([]);
});

test('new Evidence records keep experiment and inference boundaries visible',async({page},info)=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const [search,phrase,limit] of [
    ['Mott','superfluid','every optical-lattice realization'],
    ['Rabi','square roots','ideal lossless Jaynes–Cummings Hamiltonian'],
    ['Cassini','gamma = 1','every scalar–tensor theory']
  ]){
    await page.goto('/#/evidence?search='+encodeURIComponent(search));
    const card=page.locator('#evidenceGrid .evidence-card').first();await expect(card).toBeVisible();await expect(card).toContainText(phrase);await expect(card).toContainText(limit);
  }
  await page.setViewportSize({width:320,height:900});await page.goto('/#/evidence?search=Cassini');await page.locator('#evidenceGrid').evaluate(el=>el.scrollIntoView({block:'start'}));
  const path=info.outputPath('cassini-evidence-mobile.png');await page.screenshot({path});await info.attach('cassini-evidence-mobile',{path,contentType:'image/png'});
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  expect(errors).toEqual([]);
});
