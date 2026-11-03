import {test,expect} from '@playwright/test';

test('source-reviewed BAO definitions render, navigate, open intercepted citations and scroll at mobile width',async({page})=>{
 const errors=[];page.on('pageerror',error=>errors.push(error.message));
 await page.context().route('https://arxiv.org/**',route=>route.fulfill({
  status:200,
  contentType:'text/html',
  body:'<!doctype html><title>Intercepted BAO citation</title><p>BAO citation interception only</p>'
 }));
 const cases=[
  {
   id:'bao-drag-sound-horizon',
   name:'Comoving sound horizon at baryon drag',
   latex:'r_{\\rm d}=\\int_{z_{\\rm d}}^{\\infty}\\frac{c_s(z)}{H(z)}\\,dz',
   locator:'DESI DR2 Results II, Introduction, Eq. (1): definition of the comoving sound horizon at the baryon-drag epoch',
   plain:'r_d = integral from z_d to infinity of c_s(z)/H(z) dz'
  },
  {
   id:'bao-flat-transverse-radial-distance-ratios',
   name:'Flat-universe transverse and radial BAO distance ratios',
   latex:'\\frac{D_{\\rm M}(z)}{r_{\\rm d}},\\qquad \\frac{D_{\\rm H}(z)}{r_{\\rm d}},\\qquad D_{\\rm M}(z)=\\frac{c}{H_0}\\int_0^z\\frac{dz\'}{H(z\')/H_0}\\;(\\Omega_{\\rm K}=0),\\qquad D_{\\rm H}(z)=\\frac{c}{H(z)}',
   locator:'DESI DR2 Results II, Introduction, Eq. (4) for flat-universe D_M and Eq. (5) for D_H',
   plain:'D_M(z)/r_d and D_H(z)/r_d'
  }
 ];
 for(const item of cases){
  await page.setViewportSize({width:1280,height:900});
  await page.goto('/#/formula?search='+encodeURIComponent(item.name)+'&review=explicit');
  const grid=page.locator('#formulaGrid'),card=grid.locator('.formula-card').filter({has:page.getByRole('heading',{name:item.name,exact:true})});
  await expect(card).toHaveCount(1);
  await expect(card).toContainText(item.plain);
  await expect(card).toContainText(item.locator);
  await expect(card.locator('a.formula-source[href="https://arxiv.org/html/2503.14738v3"]')).toBeVisible();
  await expect(card.locator('mjx-container')).toBeVisible({timeout:30000});
  await expect(card.locator('mjx-container [data-mml-node="merror"], mjx-container [fill="red"], mjx-container [stroke="red"]')).toHaveCount(0);
  await expect(card.locator('.formula-detail')).toContainText('Assumptions');
  expect(await page.evaluate(id=>window.QI_FORMULAS.formulas.find(formula=>formula.id===id)?.latex,item.id)).toBe(item.latex);

  const popupPromise=page.waitForEvent('popup');
  await card.locator('a.formula-source[href="https://arxiv.org/html/2503.14738v3"]').click();
  const popup=await popupPromise;
  await expect(popup).toHaveURL('https://arxiv.org/html/2503.14738v3');
  await expect(popup.locator('body')).toContainText('BAO citation interception only');
  await popup.close();
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
 }

 for(const width of [1280,320]){
  await page.setViewportSize({width,height:900});
  await page.goto('/#/formula?search='+encodeURIComponent(cases[1].name)+'&review=explicit');
  const card=page.locator('#formulaGrid .formula-card').filter({has:page.getByRole('heading',{name:cases[1].name,exact:true})});
  await expect(card.locator('mjx-container')).toBeVisible({timeout:30000});
  expect(await page.evaluate(id=>window.QI_FORMULAS.formulas.find(formula=>formula.id===id)?.latex,cases[1].id)).toBe(cases[1].latex);
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const scrollChecks=await card.locator('.formula-equation, mjx-container').evaluateAll(elements=>
   elements
    .filter(el=>el.scrollWidth>el.clientWidth+1)
    .map(el=>{
     const max=el.scrollWidth-el.clientWidth,overflow=getComputedStyle(el).overflowX;
     el.scrollLeft=max;
     const reached=Math.abs(el.scrollLeft-max)<=2;
     el.scrollLeft=0;
     return {overflow,reached};
    })
  );
  if(width===320)expect(scrollChecks.length).toBeGreaterThan(0);
  for(const check of scrollChecks){expect(['auto','scroll']).toContain(check.overflow);expect(check.reached).toBeTruthy();}
 }

 await page.locator('#formulaGrid [data-theory="lambda-cdm"]').first().click();
 await expect(page).toHaveURL(/#\/theory\/lambda-cdm/);
 await expect(page.locator('#theoryDetail')).toContainText('ΛCDM cosmological model');
 expect(errors).toEqual([]);
});
