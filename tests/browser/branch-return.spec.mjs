import {test,expect} from '@playwright/test';
test('branch change refreshes existing selected-theory details and back context',async({page},info)=>{
 test.setTimeout(90000);const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/#/lineage?theory=planck-quanta');await expect(page.locator('#lineageTitle')).toHaveText('Planck energy quanta');
 const branch='Beyond standard quantum mechanics';await page.locator('.tree-choice').filter({hasText:branch}).click();await expect(page.locator('#treeGraphTitle')).toHaveText(branch);await expect(page.locator('#lineageTitle')).toHaveText('Planck energy quanta');
 await page.getByRole('button',{name:'Zoom in progression map',exact:true}).click();await expect(page.locator('#treeZoomStatus')).toHaveText('125%');
 const href=await page.locator('#lineageDetail .full-theory-link').getAttribute('href'),params=new URLSearchParams(href.split('?').slice(1).join('?')),back=new URLSearchParams(params.get('returnTo').split('?').slice(1).join('?'));expect(back.get('tree')).toBe(branch);expect(back.get('theory')).toBe('planck-quanta');
 await page.locator('#lineageDetail .full-theory-link').click();await expect(page.locator('#theoryView')).toHaveClass(/active/);await page.locator('#backToView').click();await expect(page.locator('#lineageView')).toHaveClass(/active/);await expect(page.locator('#treeGraphTitle')).toHaveText(branch);await expect(page.locator('#lineageTitle')).toHaveText('Planck energy quanta');await expect(page.locator('#treeZoomStatus')).toHaveText('125%');expect(errors).toEqual([]);
 await page.locator('.thought-tree-card').screenshot({path:info.outputPath('branch-return-context.png'),style:'.topbar{visibility:hidden!important}'});
});
