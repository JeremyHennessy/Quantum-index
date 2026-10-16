import {test,expect} from '@playwright/test';

test('WIMP and stationary fuzzy-DM formulas show bounded mathematical sources and render in both engines',async({page},info)=>{
 const errors=[];page.on('pageerror',err=>errors.push(err.message));
 const cases=[
  {theory:'wimp-dark-matter',title:'Thermal WIMP annihilation Boltzmann equation',url:'https://link.springer.com/article/10.1140/epjc/s10052-018-5662-y#Sec2'},
  {theory:'fuzzy-dark-matter',title:'Fuzzy dark-matter stationary Schrödinger–Poisson equations',url:'https://arxiv.org/pdf/1610.08297#page=24'}
 ];
 for(const item of cases){
  await page.goto('/#/formula?theory='+item.theory+'&review=explicit');
  const list=page.locator('#formulaGrid');
  await expect(list.locator('.formula-card')).toHaveCount(1);
  await expect(list).toContainText(item.title);
  await expect(list.locator('a[href="'+item.url+'"]')).toBeVisible();
  await expect(list.locator('mjx-container')).toHaveCount(1,{timeout:30000});
  await expect(list.locator('mjx-container [data-mml-node="merror"], mjx-container [fill="red"], mjx-container [stroke="red"]')).toHaveCount(0);
 }
 for(const width of [1280,390]){
  await page.setViewportSize({width,height:900});
  await page.goto('/#/formula?theory=fuzzy-dark-matter&review=explicit');
  await expect(page.locator('#formulaGrid mjx-container')).toHaveCount(1,{timeout:30000});
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const path=info.outputPath('fuzzy-darkmatter-'+width+'.png');
  await page.screenshot({path});
  await info.attach('fuzzy-darkmatter-'+width,{path,contentType:'image/png'});
 }
 expect(errors).toEqual([]);
});
