import {test,expect} from '@playwright/test';

test('four source-reviewed cosmology models have exact provenance, MathJax and unchanged responsive display',async({page},info)=>{
 const errors=[];page.on('pageerror',error=>errors.push(error.message));
 const cases=[
  {theory:'k-essence',title:'Factorizable k-essence density and effective sound speed',url:'https://arxiv.org/pdf/astro-ph/0006373v1#page=3'},
  {theory:'chaplygin-gas',title:'Original Chaplygin-gas equation of state and density evolution',url:'https://arxiv.org/pdf/gr-qc/0103004v2#page=2'},
  {theory:'freeze-in-dark-matter',title:'Decay-driven freeze-in FIMP production kernel',url:'https://arxiv.org/pdf/0911.1120#page=22'},
  {theory:'leptogenesis',title:'Flavour-resolved thermal leptogenesis decay CP asymmetry',url:'https://arxiv.org/pdf/0802.2962v3#page=20'}
 ];
 for(const item of cases){
  await page.goto('/#/formula?theory='+item.theory+'&review=explicit');
  const grid=page.locator('#formulaGrid');
  await expect(grid.locator('.formula-card')).toHaveCount(1);
  await expect(grid).toContainText(item.title);
  await expect(grid.locator('a[href="'+item.url+'"]')).toBeVisible();
  if(item.theory==='k-essence'){
   await expect(grid.locator('a[href="https://arxiv.org/pdf/astro-ph/0006373v1#page=2"]')).toBeVisible();
   await expect(grid.locator('.formula-source')).toHaveCount(2);
  }
  await expect(grid.locator('mjx-container')).toHaveCount(1,{timeout:30000});
  await expect(grid.locator('mjx-container [data-mml-node="merror"], mjx-container [fill="red"], mjx-container [stroke="red"]')).toHaveCount(0);
 }
 for(const width of [1280,390]){
  await page.setViewportSize({width,height:900});
  await page.goto('/#/formula?theory=leptogenesis&review=explicit');
  await expect(page.locator('#formulaGrid mjx-container')).toHaveCount(1,{timeout:30000});
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const path=info.outputPath('leptogenesis-formula-'+width+'.png');
  await page.screenshot({path});await info.attach('leptogenesis-formula-'+width,{path,contentType:'image/png'});
 }
 expect(errors).toEqual([]);
});
