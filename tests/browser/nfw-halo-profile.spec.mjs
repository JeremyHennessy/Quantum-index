import {test,expect} from '@playwright/test';

test('NFW simulation-fit card renders its source limits and navigates to Lambda-CDM locally',async({page})=>{
 const errors=[];page.on('pageerror',error=>errors.push(error.message));
 await page.context().route('https://arxiv.org/**',route=>route.fulfill({
  status:200,
  contentType:'text/html',
  body:'<!doctype html><title>Intercepted NFW source</title><p>Primary citation intercepted for this local browser test.</p>'
 }));
 const name='NFW spherical cold-dark-matter halo density profile';
 await page.setViewportSize({width:1280,height:900});
 await page.goto('/#/formula?search='+encodeURIComponent(name)+'&review=explicit');
 const card=page.locator('#formulaGrid .formula-card').filter({has:page.getByRole('heading',{name,exact:true})});
 await expect(card).toHaveCount(1);
 await expect(card).toContainText('rho(r) = rho_crit delta_c / [(r/r_s)(1 + r/r_s)^2]');
 await expect(card).toContainText('simulation result and parameterization');
 await expect(card).toContainText('not direct observational evidence for a dark-matter particle');
 await expect(card.locator('mjx-container')).toBeVisible({timeout:30000});
 await expect(card.locator('mjx-container [data-mml-node="merror"], mjx-container [fill="red"], mjx-container [stroke="red"]')).toHaveCount(0);
 expect(await page.evaluate(()=>window.QI_FORMULAS.formulas.find(item=>item.id==='nfw-cold-dark-matter-halo-density-profile')?.latex))
  .toBe('\\rho(r)=\\rho_{\\rm crit}\\,\\frac{\\delta_{\\rm c}}{(r/r_{\\rm s})(1+r/r_{\\rm s})^2}');

 const citation=card.locator('a.formula-source[href="https://arxiv.org/pdf/astro-ph/9611107v4#page=2"]');
 await expect(citation).toBeVisible();
 const popupPromise=page.waitForEvent('popup');
 await citation.click();
 const popup=await popupPromise;
 await expect(popup).toHaveURL('https://arxiv.org/pdf/astro-ph/9611107v4#page=2');
 await expect(popup).toHaveTitle('Intercepted NFW source');
 await popup.close();

 for(const width of [1280,320]){
  await page.setViewportSize({width,height:900});
  await page.goto('/#/formula?search='+encodeURIComponent(name)+'&review=explicit');
  const visible=page.locator('#formulaGrid .formula-card').filter({has:page.getByRole('heading',{name,exact:true})});
  await expect(visible).toHaveCount(1);
  await expect(visible.locator('mjx-container')).toBeVisible({timeout:30000});
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const scrollChecks=await visible.locator('.formula-equation, mjx-container').evaluateAll(elements=>elements
   .filter(el=>el.scrollWidth>el.clientWidth+1)
   .map(el=>{
    const max=el.scrollWidth-el.clientWidth,overflow=getComputedStyle(el).overflowX;
    el.scrollLeft=max;const reached=Math.abs(el.scrollLeft-max)<=2;el.scrollLeft=0;
    return {overflow,reached};
   }));
  for(const check of scrollChecks){expect(['auto','scroll']).toContain(check.overflow);expect(check.reached).toBeTruthy();}
 }
 await page.locator('#formulaGrid [data-theory="lambda-cdm"]').click();
 await expect(page).toHaveURL(/#\/theory\/lambda-cdm/);
 await expect(page.locator('#theoryDetail')).toContainText('ΛCDM cosmological model');
 expect(errors).toEqual([]);
});
