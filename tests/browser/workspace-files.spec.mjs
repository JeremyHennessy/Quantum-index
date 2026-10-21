import {test,expect} from '@playwright/test';import fs from 'node:fs/promises';
const key='quantum-index-workspace-v1';
const fixture={version:1,bookmarks:['unruh'],read:['born-rule'],notes:{unruh:'Synthetic QA note <script>window.__qaInjected=true</script>\n'+('LongSyntheticWord'.repeat(12))},comparisons:[{name:'Synthetic QA comparison',theoryIds:['unruh','hawking-radiation']}]};
async function downloaded(page,selector){const pending=page.waitForEvent('download');await page.locator(selector).click();const file=await pending;expect(await file.failure()).toBeNull();return {name:file.suggestedFilename(),bytes:await fs.readFile(await file.path())};}
test('real backup and notebook downloads roundtrip through preview and explicit merge',async({page,browser},info)=>{
 test.setTimeout(120000);const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(({key,fixture})=>localStorage.setItem(key,JSON.stringify(fixture)),{key,fixture});
 await page.goto('/#/workspace');await expect(page.locator('#workspaceView')).toHaveClass(/active/);
 await page.locator('#workspaceSearch').fill('no-such-synthetic-entry');await expect(page.locator('#workspaceSearchStatus')).toContainText('0 of 2 saved entries');
 const backup=await downloaded(page,'#exportWorkspace'),notebook=await downloaded(page,'#exportNotebook');
 expect(backup.name).toBe('quantum-index-research.json');expect(JSON.parse(backup.bytes.toString())).toEqual(fixture);
 expect(notebook.name).toBe('quantum-index-research.md');expect(notebook.bytes.toString()).toContain('not a restorable backup');expect(notebook.bytes.toString()).toContain(fixture.notes.unruh);expect(notebook.bytes.toString()).toContain('Catalog sources');
 const context=await browser.newContext({viewport:{width:320,height:700},isMobile:info.project.name==='webkit',hasTouch:info.project.name==='webkit'});
 try{
  const restored=await context.newPage();restored.on('pageerror',e=>errors.push(e.message));await restored.goto('http://127.0.0.1:4173/#/workspace');await expect(restored.locator('#workspaceView')).toHaveClass(/active/);
  const before=await restored.evaluate(key=>localStorage.getItem(key),key);expect(before).toBeNull();
  const upload={name:backup.name,mimeType:'application/json',buffer:backup.bytes};
  await restored.locator('#importWorkspace').setInputFiles(upload);await expect(restored.locator('#confirmImport')).toBeVisible();await expect(restored.locator('#importPreview')).toContainText('1 bookmarks');expect(await restored.evaluate(key=>localStorage.getItem(key),key)).toBe(before);
  await restored.locator('#confirmImport').click();await expect(restored.locator('#workspaceStatus')).toHaveText('Backup merged and saved on this browser.');expect(await restored.evaluate(key=>JSON.parse(localStorage.getItem(key)),key)).toEqual(fixture);
  await expect(restored.locator('[data-saved-list="notes"]')).toContainText('<script>window.__qaInjected=true</script>');expect(await restored.evaluate(()=>window.__qaInjected)).toBeUndefined();
  const merged=await restored.evaluate(key=>localStorage.getItem(key),key);
  await restored.locator('#importWorkspace').setInputFiles(upload);await restored.locator('#confirmImport').click();await expect(restored.locator('#workspaceStatus')).toHaveText('Backup merged and saved on this browser.');expect(await restored.evaluate(key=>localStorage.getItem(key),key)).toBe(merged);
  await restored.locator('#importWorkspace').setInputFiles({name:'malformed.json',mimeType:'application/json',buffer:Buffer.from('{ definitely not json')});await expect(restored.locator('#confirmImport')).toHaveCount(0);await expect(restored.locator('#workspaceStatus')).not.toHaveText('Backup merged and saved on this browser.');expect(await restored.evaluate(key=>localStorage.getItem(key),key)).toBe(merged);
  await restored.reload();await expect(restored.locator('#workspaceView')).toHaveClass(/active/);expect(await restored.evaluate(key=>JSON.parse(localStorage.getItem(key)),key)).toEqual(fixture);
  expect(await restored.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBe(true);expect(await restored.locator('#workspaceContent').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBe(true);
  await restored.locator('#workspaceContent').screenshot({path:info.outputPath('populated-workspace-320.png'),style:'.topbar{visibility:hidden!important}'});
 }finally{await context.close();}
 expect(errors).toEqual([]);
});
