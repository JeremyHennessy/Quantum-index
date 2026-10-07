import {test,expect} from '@playwright/test';

// A new Passport, not a new comparison component or storage format.
test('Bell Passport distinguishes test assumptions and preserves existing comparison selections',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/#/compare?ids=bell,quantum-steering,fano-resonance,hawking-radiation');
 const table=page.locator('#comparisonResults');await expect(table.locator('table')).toHaveCount(1);
 await expect(table.locator('[data-comparison-passport="bell"]').first()).toContainText('2026-10-07');
 await expect(table.locator('[data-comparison-passport="hawking-radiation"]').first()).toContainText('2026-09-29');
 await table.locator('thead a').first().click();
 const passport=page.locator('.passport');await expect(passport).toContainText('measurement independence are separate');
 await expect(passport).toContainText('Failing one CHSH test does not establish general Bell locality');
 await expect(passport).toContainText('Entanglement, steering and Bell nonlocality are distinct');
 await expect(passport.locator('a[href^="#/evidence?"]')).toHaveCount(1);
 await page.locator('#backToView').click();await expect(page.locator('#compareSlot1')).toHaveValue('quantum-steering');await expect(page.locator('#compareSlot3')).toHaveValue('hawking-radiation');
 for(const width of [1280,320]){
  await page.setViewportSize({width,height:900});await table.evaluate(el=>el.scrollIntoView({block:'start'}));
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  expect(await table.locator('.comparison-scroll').evaluate(el=>{el.scrollLeft=el.scrollWidth;const ok=el.scrollWidth<=el.clientWidth+2||Math.abs(el.scrollLeft+el.clientWidth-el.scrollWidth)<=2;el.scrollLeft=0;return ok;})).toBeTruthy();
  const path=info.outputPath(`bell-comparison-${width}.png`);await page.screenshot({path});await info.attach(`bell-comparison-${width}`,{path,contentType:'image/png'});
 }
 expect(errors).toEqual([]);
});

test('four existing Bell equations show reviewed definitions, source locations and statistical limits',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/#/formula?search=bell-metadata-2026-10-07&review=explicit');
 const cards=page.locator('#formulaGrid .formula-card');await expect(cards).toHaveCount(4);
 await page.waitForFunction(()=>window.MathJax?.tex2svgPromise,{timeout:30000});
 const result=await page.evaluate(async()=>{
  await MathJax.startup.promise;
  const fs=QI_FORMULAS.formulas.filter(f=>f.curationBatch==='bell-metadata-2026-10-07'),failures=[];
  for(const f of fs){const node=await MathJax.tex2svgPromise(f.latex,{display:true});if(node.querySelector('[data-mml-node="merror"],mjx-merror'))failures.push(f.id);}
  return {failures,formulaCount:QI_FORMULAS.formulas.length,latex:Object.fromEntries(fs.map(f=>[f.id,f.latex]))};
 });
 expect(result.formulaCount).toBe(402);expect(result.failures).toEqual([]);
 expect(result.latex).toEqual({'bell-factorization':String.raw`P(a,b|x,y,\lambda)=P(a|x,\lambda)P(b|y,\lambda)`,'chsh-classical':String.raw`|S|\le2`,'chsh-tsirelson':String.raw`|S|\le2\sqrt2`,'bell-state':String.raw`|\Phi^+\rangle=\frac{|00\rangle+|11\rangle}{\sqrt2}`});
 const byTitle=title=>cards.filter({has:page.getByRole('heading',{name:title,exact:true})});
 await expect(byTitle('Bell-local factorization')).toContainText('q(lambda|x,y)=q(lambda)');
 for(const title of ['CHSH classical bound','Tsirelson bound'])await expect(byTitle(title)).toContainText('S = E_00 + E_01 + E_10 - E_11');
 await expect(byTitle('CHSH classical bound')).toContainText('finite observed excess requires statistical analysis');
 await expect(byTitle('Tsirelson bound')).toContainText('Hermitian contractions');await expect(byTitle('Bell state')).toContainText('not the antisymmetric singlet');
 for(let i=0;i<4;i++){
  await expect(cards.nth(i).locator('a[href*="#page="]')).toHaveCount(2);await expect(cards.nth(i).locator('mjx-container').first()).toBeVisible();
 }
 for(const width of [1280,320]){
  await page.setViewportSize({width,height:900});
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  for(const title of ['CHSH classical bound','Bell state']){
   const card=byTitle(title);await card.evaluate(el=>el.scrollIntoView({block:'start'}));const label=title==='Bell state'?'bell-state':'chsh-metadata';const path=info.outputPath(`${label}-${width}.png`);await page.screenshot({path});await info.attach(`${label}-${width}`,{path,contentType:'image/png'});
  }
  expect(await page.locator('#formulaGrid .formula-equation mjx-container').evaluateAll(els=>els.every(el=>{el.scrollLeft=el.scrollWidth;const ok=el.scrollWidth<=el.clientWidth+2||Math.abs(el.scrollLeft+el.clientWidth-el.scrollWidth)<=2;el.scrollLeft=0;return ok;}))).toBeTruthy();
 }
 expect(errors).toEqual([]);
});
