import {test,expect} from '@playwright/test';
test('catalog and formula dropdowns filter reset and report no matches',async({page})=>{
 test.setTimeout(90000);const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/#/catalog');
 const sample=await page.evaluate(()=>window.QI_DATA.theories.find(t=>t.id==='unruh'));
 for(const [selector,field]of [['#categoryFilter','category'],['#kindFilter','kind'],['#statusFilter','status'],['#eraFilter','era']]){
  await page.locator(selector).selectOption(sample[field]);
  const expected=await page.evaluate(({field,value})=>window.QI_DATA.theories.filter(t=>t[field]===value).length,{field,value:sample[field]});
  await expect(page.locator('#resultCount')).toHaveText(`${expected} results`);await expect(page.locator('#catalog .catalog-card')).toHaveCount(expected);await page.locator(selector).selectOption('');
 }
 await page.locator('#search').fill('no-such-synthetic-theory-qa');await expect(page.locator('#resultCount')).toHaveText('0 results');await expect(page.locator('#catalog')).toContainText('No theories match');
 await page.locator('#resetView').click();await page.getByRole('button',{name:'Catalog',exact:true}).click();await expect(page.locator('#search')).toHaveValue('');await expect(page.locator('#resultCount')).toHaveText('483 results');
 await page.getByRole('button',{name:'Formula atlas',exact:true}).click();
 const category=await page.locator('#formulaCategory option').nth(1).getAttribute('value');await page.locator('#formulaCategory').selectOption(category);const total=await page.locator('#formulaGrid .formula-card').count();expect(total).toBeGreaterThan(0);await expect(page.locator('#formulaGrid .formula-meta > span:first-child')).toHaveText(Array(total).fill(category));
 const type=await page.locator('#formulaGrid .formula-role').first().textContent();await page.locator('#formulaType').selectOption(type);const filtered=await page.locator('#formulaGrid .formula-card').count();expect(filtered).toBeGreaterThan(0);await expect(page.locator('#formulaGrid .formula-role')).toHaveText(Array(filtered).fill(type));
 await page.locator('#formulaSearch').fill('no-such-synthetic-formula-qa');await expect(page.locator('#formulaCount')).toHaveText('0 / 457 formulas');await expect(page.locator('#formulaGrid .formula-card')).toHaveCount(0);
 await page.locator('#formulaSearch').fill('');await page.locator('#formulaCategory').selectOption('');await page.locator('#formulaType').selectOption('');await expect(page.locator('#formulaCount')).toHaveText('457 / 457 formulas');expect(errors).toEqual([]);
});
