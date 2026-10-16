import {test,expect} from '@playwright/test';

test('stochastic inflation and preheating source-located formulas render without MathJax errors',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const row of [
  {id:'stochastic-inflation',count:2,term:'Single-field stochastic-inflation e-fold Langevin equation',source:'https://arxiv.org/pdf/1506.04732v4#page=3'},
  {id:'reheating-preheating',count:1,term:'Oscillating-inflaton preheating rescaled boson-mode equation',source:'https://arxiv.org/pdf/hep-ph/9704452v2#page=12'}
 ]){
  await page.goto('/#/formula?theory='+row.id+'&review=explicit');
  const grid=page.locator('#formulaGrid');
  await expect(grid.locator('.formula-card')).toHaveCount(row.count);
  await expect(grid).toContainText(row.term);
  await expect(grid.locator('a[href="'+row.source+'"]')).toBeVisible();
  await expect(grid.locator('mjx-container')).toHaveCount(row.count,{timeout:30000});
  await expect(grid.locator('mjx-container [data-mml-node="merror"], mjx-container [fill="red"], mjx-container [stroke="red"]')).toHaveCount(0);
 }
 await page.goto('/#/formula?theory=stochastic-inflation&review=explicit');
 await expect(page.locator('#formulaGrid')).toContainText('Itô');
 for(const width of [1280,390]){
  await page.setViewportSize({width,height:900});
  await expect(page.locator('#formulaGrid mjx-container')).toHaveCount(2,{timeout:30000});
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const path=info.outputPath('stochastic-equations-'+width+'.png');
  await page.screenshot({path});
  await info.attach('stochastic-equations-'+width,{path,contentType:'image/png'});
 }
 expect(errors).toEqual([]);
});
