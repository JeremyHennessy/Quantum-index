import {test,expect} from '@playwright/test';
test('source-qualified MOND and Starobinsky first formulas render and remain scoped to their theories',async({page},info)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const entries=[
  {id:'mond',title:'Milgrom modified-inertia working equation and limiting interpolation',url:'https://adsabs.harvard.edu/pdf/1983ApJ...270..365M#page=2',word:'limited effective'},
  {id:'starobinsky-inflation',title:'Starobinsky metric R-squared inflation model function',url:'https://link.springer.com/article/10.12942/lrr-2010-3',word:'metric'}
 ];
 for(const item of entries){
  await page.goto('/#/formula?theory='+item.id+'&review=explicit');
  const grid=page.locator('#formulaGrid');
  await expect(grid.locator('.formula-card')).toHaveCount(1);
  await expect(grid).toContainText(item.title);
  await expect(grid).toContainText(item.word);
  await expect(grid.locator('a[href="'+item.url+'"]')).toBeVisible();
  await expect(grid.locator('mjx-container')).toHaveCount(1,{timeout:30000});
  await expect(grid.locator('mjx-container [data-mml-node="merror"], mjx-container [fill="red"], mjx-container [stroke="red"]')).toHaveCount(0);
 }
 for(const width of [1280,390]){
  await page.setViewportSize({width,height:900});
  await page.goto('/#/formula?theory=mond&review=explicit');
  await expect(page.locator('#formulaGrid mjx-container')).toHaveCount(1,{timeout:30000});
  expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
  const path=info.outputPath('mond-1983-formula-'+width+'.png');
  await page.screenshot({path});
  await info.attach('mond-1983-formula-'+width,{path,contentType:'image/png'});
 }
 expect(errors).toEqual([]);
});
