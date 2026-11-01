import {test,expect} from '@playwright/test';

test('source-reviewed QCD axion cards render, cite, navigate and remain reachable on mobile',async({page})=>{
 const errors=[];page.on('pageerror',error=>errors.push(error.message));
 await page.context().route('https://arxiv.org/**',route=>route.fulfill({status:200,contentType:'text/html',body:'<!doctype html><title>Intercepted primary axion paper</title><p>Primary citation intercepted for this local browser test.</p>'}));
 await page.context().route('https://pdg.lbl.gov/**',route=>route.fulfill({status:200,contentType:'text/html',body:'<!doctype html><title>Intercepted PDG axion review</title><p>PDG citation intercepted for this local browser test.</p>'}));
 const cases=[
  {
   name:'QCD axion mass from topological susceptibility',
   id:'qcd-axion-topological-susceptibility-mass-2016',
   latex:'m_a^2=\\frac{\\chi_{\\rm top}}{f_a^2},\\qquad m_a=5.691(51)\\,\\mathrm{meV}\\left(\\frac{10^9\\,\\mathrm{GeV}}{f_a}\\right)\\;(T=0)',
   source:'https://arxiv.org/pdf/1511.02867v2'
  },
  {
   name:'Homogeneous QCD axion misalignment equation',
   id:'qcd-axion-homogeneous-misalignment-eom-2016',
   latex:'\\ddot a+3H\\dot a+m_a^2(T)f_a\\sin\\left(\\frac{a}{f_a}\\right)=0',
   source:'https://arxiv.org/pdf/1511.02867v2'
  }
 ];
 for(const item of cases){
  await page.setViewportSize({width:1280,height:900});
  await page.goto('/#/formula?search='+encodeURIComponent(item.name)+'&review=explicit');
  const card=page.locator('#formulaGrid .formula-card').filter({has:page.getByRole('heading',{name:item.name,exact:true})});
  await expect(card).toHaveCount(1);
  await expect(card.locator('mjx-container')).toBeVisible({timeout:30000});
  await expect(card.locator('mjx-container [data-mml-node="merror"], mjx-container [fill="red"], mjx-container [stroke="red"]')).toHaveCount(0);
  const observed=await page.evaluate(id=>window.QI_FORMULAS.formulas.find(formula=>formula.id===id)?.latex,item.id);
  expect(observed).toBe(item.latex);
  await expect(card.locator(`a.formula-source[href="${item.source}"]`).first()).toBeVisible();
  if(item.id===cases[0].id){
   await expect(card).toContainText('2026 PDG directly displays the NNLO+QED mass estimate');
   await expect(card.locator('a.formula-source[href="https://pdg.lbl.gov/2026/reviews/rpp2026-rev-axions.pdf"]')).toBeVisible();
   await expect(card).toContainText('not a new measurement');
  }else{
   await expect(card).toContainText('cosmic proper time');
   await expect(card).toContainText('does not by itself determine relic abundance');
  }
  const citation=card.locator(`a.formula-source[href="${item.source}"]`).first();
  const popupPromise=page.waitForEvent('popup');await citation.click();
  const popup=await popupPromise;await expect(popup).toHaveURL(item.source);await expect(popup).toHaveTitle('Intercepted primary axion paper');await popup.close();
  if(item.id===cases[0].id){
   const pdgCitation=card.locator('a.formula-source[href="https://pdg.lbl.gov/2026/reviews/rpp2026-rev-axions.pdf"]');
   const pdgPopupPromise=page.waitForEvent('popup');await pdgCitation.click();
   const pdgPopup=await pdgPopupPromise;await expect(pdgPopup).toHaveURL('https://pdg.lbl.gov/2026/reviews/rpp2026-rev-axions.pdf');
   await expect(pdgPopup).toHaveTitle('Intercepted PDG axion review');await pdgPopup.close();
  }
  await card.locator('[data-theory="axion"]').click();
  await expect(page).toHaveURL(/#\/theory\/axion/);
  await expect(page.locator('#theoryDetail')).toContainText('Axion theory');
 }
 for(const item of cases)for(const width of [1280,320]){
  await page.setViewportSize({width,height:900});
  await page.goto('/#/formula?search='+encodeURIComponent(item.name)+'&review=explicit');
  const card=page.locator('#formulaGrid .formula-card').filter({has:page.getByRole('heading',{name:item.name,exact:true})});
  await expect(card.locator('mjx-container')).toBeVisible({timeout:30000});
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const scrollChecks=await card.locator('.formula-equation, mjx-container').evaluateAll(elements=>elements
   .filter(el=>el.scrollWidth>el.clientWidth+1)
   .map(el=>{const max=el.scrollWidth-el.clientWidth,overflow=getComputedStyle(el).overflowX;el.scrollLeft=max;const reached=Math.abs(el.scrollLeft-max)<=2;el.scrollLeft=0;return {overflow,reached};}));
  for(const check of scrollChecks){expect(['auto','scroll']).toContain(check.overflow);expect(check.reached).toBeTruthy();}
 }
 expect(errors).toEqual([]);
});
