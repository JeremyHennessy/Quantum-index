import {test,expect} from '@playwright/test';
const ownRepo=/(?:github\.com|raw\.githubusercontent\.com|api\.github\.com\/repos)\/JeremyHennessy\/Quantum-index(?:[\/#?]|$)/i;
test('all app views omit own-repository links and retain methodology and citations',async({page,request},info)=>{
 test.setTimeout(180000);const errors=[];page.on('pageerror',error=>errors.push(error.message));if(info.project.name==='webkit')await page.setViewportSize({width:320,height:700});
 await page.goto('/#/explore');
 const views=await page.locator('button[data-view]').evaluateAll(els=>els.map(el=>el.dataset.view));
 for(const view of [...new Set(views),'theory/wave-mechanics','problems?problem=measurement-problem']){
  await page.evaluate(view=>{location.hash='#/'+view;},view);await expect.poll(()=>page.evaluate(()=>location.hash)).toBe('#/'+view);await expect(page.locator('#'+(view.startsWith('theory/')?'theory':view.split('?')[0])+'View')).toHaveClass(/active/,{timeout:15000});
  await expect.poll(async()=>page.locator('a[href]').evaluateAll(els=>els.map(el=>el.href))).not.toContainEqual(expect.stringMatching(ownRepo));
 }
 await page.evaluate(()=>{location.hash='#/coverage';});
 const methodology=page.getByRole('link',{name:'Coverage methodology and research backlog'});await expect(methodology).toHaveAttribute('href','./docs/COVERAGE.md');
 const response=await request.get('/docs/COVERAGE.md');expect(response.ok()).toBeTruthy();expect(await response.text()).toContain('271');expect(await response.text()).not.toMatch(ownRepo);
 await page.evaluate(()=>{location.hash='#/theory/wave-mechanics';});await expect(page.locator('#theoryDetail .source-link').first()).toBeVisible();
 const notebook=await page.evaluate(()=>{const next=window.QI_WORKSPACE.data;next.bookmarks=['wave-mechanics'];if(!window.QI_WORKSPACE.save(next))throw new Error(window.QI_WORKSPACE.error);return window.QI_WORKSPACE.exportMarkdown();});expect(notebook).toContain('#/theory/wave-mechanics');expect(notebook).toContain('Catalog sources');expect(notebook).not.toMatch(ownRepo);
 expect(errors).toEqual([]);await page.evaluate(()=>{location.hash='#/coverage';});await expect(methodology).toBeVisible();await page.screenshot({path:info.outputPath('coverage-no-repository-links.png'),fullPage:true});
});
