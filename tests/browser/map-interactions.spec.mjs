import {test,expect} from '@playwright/test';

test('network nodes select inline and explicit details preserve map context',async({page},info)=>{
 await page.goto('/#/map?search=Planck&evidence=sourced');
 const node=page.locator('#network .node').first();await expect(node).toBeVisible();
 const selected=await node.evaluate(el=>({id:el.__data__.id,name:el.__data__.name}));
 const graph=page.locator('#network');await graph.evaluate(el=>{el.dataset.keep='same';});
 await graph.scrollIntoViewIfNeeded();const bounds=await graph.boundingBox();
 if(info.project.name==='webkit'){
  // Mobile WebKit has no mouse-wheel API; exercise D3's real double-tap gesture instead.
  await page.touchscreen.tap(bounds.x+20,bounds.y+20);await page.touchscreen.tap(bounds.x+20,bounds.y+20);
 }else{await page.mouse.move(bounds.x+bounds.width/2,bounds.y+bounds.height/2);await page.mouse.wheel(0,-180);}
 if(info.project.name==='webkit')await expect.poll(()=>graph.evaluate(el=>el.__zoom.k)).toBe(2);
 else await expect.poll(()=>graph.evaluate(el=>el.__zoom.k)).toBeGreaterThan(1);
 const transform=await graph.evaluate(el=>({x:el.__zoom.x,y:el.__zoom.y,k:el.__zoom.k}));
 await node.click({force:true});await expect(page.locator('#mapView')).toHaveClass(/active/);await expect(page.locator('#detailPanel .detail-title')).toHaveText(selected.name);await expect(node).toHaveAttribute('aria-pressed','true');
 expect(await graph.evaluate(el=>({x:el.__zoom.x,y:el.__zoom.y,k:el.__zoom.k}))).toEqual(transform);await expect(graph).toHaveAttribute('data-keep','same');await expect(page.locator('#search')).toHaveValue('Planck');
 await node.press('Enter');await expect(page.locator('#mapView')).toHaveClass(/active/);await expect(page.locator('#detailPanel .full-theory-link')).toHaveText('Open full details');
 await page.locator('#detailPanel .full-theory-link').click();await expect(page.locator('#theoryView')).toHaveClass(/active/);await expect(page.locator('#theoryDetail .detail-title')).toHaveText(selected.name);
 await page.locator('#backToView').click();await expect(page.locator('#mapView')).toHaveClass(/active/);await expect(page.locator('#search')).toHaveValue('Planck');await expect(page.locator('#relationEvidence')).toHaveValue('sourced');
 expect(await graph.evaluate(el=>({x:el.__zoom.x,y:el.__zoom.y,k:el.__zoom.k}))).toEqual(transform);
 await page.locator('#network').scrollIntoViewIfNeeded();await page.screenshot({path:info.outputPath('network-inline-selection.png')});
});

test('progression zoom pan fit and keyboard selection preserve branch context',async({page},info)=>{
 test.setTimeout(90000);if(info.project.name==='webkit')await page.setViewportSize({width:320,height:700});
 await page.goto('/#/lineage?tree='+encodeURIComponent('Beyond standard quantum mechanics'));
 await expect(page.locator('#treeGraphTitle')).toHaveText('Beyond standard quantum mechanics');
 const viewport=page.locator('#treeGraphViewport'),graph=page.locator('#thoughtTreeGraph'),status=page.locator('#treeZoomStatus');
 await expect(status).toHaveText('100%');expect(await graph.evaluate(el=>parseFloat(getComputedStyle(el.querySelector('.tree-graph-label')).fontSize))).toBeGreaterThanOrEqual(13);
 const initial=await graph.evaluate(el=>el.getBoundingClientRect().width);await page.getByRole('button',{name:'Zoom in progression map',exact:true}).click();await expect(status).toHaveText('125%');expect(await graph.evaluate(el=>el.getBoundingClientRect().width)).toBeGreaterThan(initial);
 await viewport.focus();await viewport.press('ArrowRight');await expect.poll(()=>viewport.evaluate(el=>el.scrollLeft)).toBeGreaterThan(0);
 const oldScale=await status.textContent();const prevented=await viewport.evaluate(el=>{const event=new WheelEvent('wheel',{deltaY:150,bubbles:true,cancelable:true});el.dispatchEvent(event);return event.defaultPrevented;});expect(prevented).toBe(false);await expect(status).toHaveText(oldScale);
 if(info.project.name==='chromium'){
  await viewport.scrollIntoViewIfNeeded();await viewport.evaluate(el=>{el.scrollLeft=100;el.scrollTop=0;});const rect=await viewport.boundingBox();await page.mouse.move(rect.x+180,rect.y+rect.height-30);await page.mouse.down();await page.mouse.move(rect.x+100,rect.y+rect.height-30,{steps:8});await page.mouse.up();await expect.poll(()=>viewport.evaluate(el=>el.scrollLeft)).toBeGreaterThan(150);
 }
 const node=graph.locator('.tree-graph-node').first(),selected=await node.evaluate(el=>({id:el.__data__.id,name:el.__data__.name}));await node.focus();await node.press(' ');
 await expect(page.locator('#lineageView')).toHaveClass(/active/);await expect(page.locator('#lineageTitle')).toHaveText(selected.name);await expect(node).toHaveAttribute('aria-pressed','true');await expect(status).toHaveText('125%');
 await page.locator('#lineageDetail .full-theory-link').click();await expect(page.locator('#theoryView')).toHaveClass(/active/);await page.locator('#backToView').click();await expect(page.locator('#treeGraphTitle')).toHaveText('Beyond standard quantum mechanics');await expect(status).toHaveText('125%');
 await viewport.evaluate(el=>{el.scrollLeft=0;el.scrollTop=0;});await viewport.scrollIntoViewIfNeeded();await page.locator('.thought-tree-card').screenshot({path:info.outputPath('progression-zoom-controls.png'),style:'.topbar{visibility:hidden!important}'});
 await page.getByRole('button',{name:'Reset to fit',exact:true}).click();expect(await viewport.evaluate(el=>el.scrollWidth-el.clientWidth)).toBeLessThanOrEqual(2);
 const fitted=parseInt(await status.textContent());await viewport.focus();await viewport.press('+');expect(parseInt(await status.textContent())).toBeGreaterThan(fitted);await viewport.press('0');expect(await viewport.evaluate(el=>el.scrollLeft)).toBe(0);
 expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBe(true);
});
