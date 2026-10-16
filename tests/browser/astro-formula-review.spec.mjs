import {test,expect} from '@playwright/test';

test('three astroparticle formulas show independent source locations and safe MathJax output',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const examples=[
  {id:'lambda-cdm',name:'ΛCDM component-resolved expansion history',url:'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-cosmology.pdf#page=2'},
  {id:'inflationary-cosmology',name:'Single-field potential slow-roll parameters',url:'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-inflation.pdf#page=4'},
  {id:'quintessence',name:'Canonical quintessence density, pressure and equation of state',url:'https://lss.fnal.gov/archive/2008/pub/fermilab-pub-08-613-a.pdf#page=21'}
 ];
 for(const row of examples){
  await page.goto('/#/formula?theory='+row.id+'&review=explicit');
  const panel=page.locator('#formulaGrid');
  await expect(panel.locator('.formula-card')).toHaveCount(1);
  await expect(panel).toContainText(row.name);
  await expect(panel.locator('a[href="'+row.url+'"]')).toBeVisible();
  await expect(panel.locator('mjx-container')).toHaveCount(1,{timeout:30000});
  await expect(panel.locator('mjx-container [data-mml-node="merror"], mjx-container [fill="red"], mjx-container [stroke="red"]')).toHaveCount(0);
 }
 for(const width of [1280,390]){
  await page.setViewportSize({width,height:900});
  await page.goto('/#/formula?theory=quintessence&review=explicit');
  await expect(page.locator('#formulaGrid mjx-container')).toHaveCount(1,{timeout:30000});
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const path=info.outputPath('quintessence-'+width+'.png');
  await page.screenshot({path});
  await info.attach('quintessence-'+width,{path,contentType:'image/png'});
 }
 expect(errors).toEqual([]);
});
