import {test,expect} from '@playwright/test';import {readFileSync} from 'node:fs';
const audit=JSON.parse(readFileSync(new URL('../../research/FOUNDATION_SOURCE_AUDIT_2026-10-21.json',import.meta.url)));
test('all fifteen foundational source audits render exact inspected locators',async({page},info)=>{
 test.setTimeout(120000);
 await page.goto('/#/formula?review=explicit&search=Planck');
 for(const patch of audit.formulaPatches){
 // Search vocabulary need not contain IDs, so resolve the visible title from runtime.
 const name=await page.evaluate(id=>window.QI_FORMULAS.formulas.find(f=>f.id===id).name,patch.id);
 await page.locator('#formulaSearch').fill(name);
 const card=page.locator('#formulaGrid .formula-card').filter({has:page.locator('h4',{hasText:name})}).first();await expect(card).toBeVisible();await expect(card.locator('mjx-container')).toHaveCount(1,{timeout:30000});
 await expect(card.locator('[data-mml-node="merror"], [fill="red"], [stroke="red"]')).toHaveCount(0);
 await expect(card).toContainText('retained historical references are provenance');
 for(const l of patch.sourceLocations){await expect(card.locator('a[href="'+l.url+'"]')).toHaveCount(patch.sourceLocations.filter(x=>x.url===l.url).length);await expect(card).toContainText(l.locator);}
 expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
 if(['expectation','xp-uncertainty','planck-relation'].includes(patch.id)){const path=info.outputPath(patch.id+'-source-audit.png');await card.screenshot({path,style:'.topbar{visibility:hidden!important}'});await info.attach(patch.id+' source audit',{path,contentType:'image/png'});}
 }
});
