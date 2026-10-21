import {test,expect} from '@playwright/test';
test('documented path is keyboard accessible, cited, bounded and honest',async({page},info)=>{
 if(info.project.name==='webkit')await page.setViewportSize({width:320,height:700});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/#/map');
 await page.locator('#pathFrom').selectOption('renormalization-group');await page.locator('#pathTo').selectOption('functional-rg');await page.locator('#pathLimit').selectOption('1');
 await page.locator('#documentedPathForm button').focus();await page.keyboard.press('Enter');
 const result=page.locator('#documentedPathResult');await expect(result).toContainText('1 directed edge');await expect(result).toContainText('wetterich-1993');
 await expect(result.locator('.research-edge')).toHaveCount(1);
 await expect(page).toHaveURL(/pathFrom=renormalization-group/);
 await page.reload();await expect(result).toContainText('wetterich-1993');
 await page.locator('#documentedNavigation').scrollIntoViewIfNeeded();const path=info.outputPath('documented-directed-path.png');await page.locator('#documentedNavigation').screenshot({path,style:'.topbar{visibility:hidden!important}'});await info.attach('Documented directed path',{path,contentType:'image/png'});
 await page.locator('#pathFrom').selectOption('functional-rg');await page.locator('#pathTo').selectOption('renormalization-group');await page.locator('#documentedPathForm button').click();await expect(result).toContainText('No documented directed path within 1 edges');await expect(result).toContainText('No editorial fallback');
 await page.locator('#pathFrom').selectOption('qed');await page.locator('#pathTo').selectOption('aqft');await page.locator('#documentedPathForm button').click();await expect(result).toContainText('No documented directed path within 1 edges');
 await page.locator('#pathFrom').selectOption('bell');await page.locator('#pathTo').selectOption('bell');await page.locator('#documentedPathForm button').click();await expect(result).toContainText('zero edges');
 expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();expect(errors).toEqual([]);
});
test('record-level trust links open matching records and preserve workspace',async({page},info)=>{
 await page.goto('/#/coverage?theory=bell');const result=page.locator('#recordTrustResult');await expect(result).toContainText('bell-1964');await expect(result).toContainText('association, not confirmation');
 const before=await page.evaluate(()=>JSON.stringify(localStorage));
 await result.locator('summary').focus();await page.keyboard.press('Enter');await expect(result.locator('details')).toHaveAttribute('open','');
 const path=info.outputPath('record-level-trust.png');await page.locator('#recordTrust').screenshot({path,style:'.topbar{visibility:hidden!important}'});await info.attach('Record-level trust',{path,contentType:'image/png'});
 await result.locator('a[href^="#/evidence?"]').first().click();await expect(page.locator('#evidenceGrid .evidence-card').first()).toBeVisible();
 await page.goBack();await expect(result).toContainText('bell-1964');
 await result.locator('a[href^="#/formula?"]').first().click();await expect(page.locator('#formulaGrid .formula-card').first()).toBeVisible();
 expect(await page.evaluate(()=>JSON.stringify(localStorage))).toEqual(before);
 expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
});
test('cosmology learning route keeps inference boundaries and exact locators',async({page},info)=>{
 await page.goto('/#/learn?path=primordial-to-cosmic-structure');const pathCard=page.locator('[data-learning-path="primordial-to-cosmic-structure"]');
 await expect(pathCard.locator('.learning-steps>li')).toHaveCount(4);await expect(pathCard).not.toContainText('undefined');await expect(pathCard).toContainText('not a proof');await expect(pathCard).toContainText('absolute distances require a calibration');
 await expect(pathCard.locator('.primer-locators a')).toHaveCount(6);await expect(pathCard.locator('.learning-references a')).toHaveCount(5);
 const primerShot=info.outputPath('cosmology-learning-primer.png');await pathCard.screenshot({path:primerShot,style:'.topbar{visibility:hidden!important}'});await info.attach('Cosmology learning primer',{path:primerShot,contentType:'image/png'});
 await pathCard.locator('[data-resume-path]').click();await expect(page.locator('.passport')).toBeVisible();await page.locator('#backToView').click();await expect(pathCard).toBeVisible();
 await pathCard.locator('.learning-references a').first().click();await expect(page.locator('#evidenceGrid')).toContainText('Planck');
 await page.goto('/#/map?pathFrom=inflationary-cosmology&pathTo=lambda-cdm&maxHops=3');const edges=page.locator('#documentedPathResult .research-edge');await expect(edges).toHaveCount(2);await expect(edges.locator('.research-locators a')).toHaveCount(6);await expect(edges.last()).toContainText('Source-grounded synthesis');
 expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();const shot=info.outputPath('cosmology-directed-locators.png');await page.locator('#documentedNavigation').screenshot({path:shot,style:'.topbar{visibility:hidden!important}'});await info.attach('Cosmology directed locators',{path:shot,contentType:'image/png'});
});
