import {test,expect} from '@playwright/test';
import {writeFileSync} from 'node:fs';

// Preview only. This exact proposed CSS belongs exclusively to a possible
// future physics-explorer.css patch, NOT the shared Observatory stylesheet.
// Do not import or publish without explicit visual acceptance.
const candidate='@media(max-width:430px){.site-header{background-color:rgb(255,255,255)}}';
const original='rgba(255, 255, 255, 0.94)';
const opaque='rgb(255, 255, 255)';

test('issue 128 mobile-only Physics header approval preview',async({page,browserName},info)=>{
  test.setTimeout(120000);
  const failures=[];
  page.on('pageerror',e=>failures.push(e.message));
  await page.setViewportSize({width:390,height:844});
  expect((await page.goto('/docs/physics-explorer.html',{waitUntil:'domcontentloaded'}))?.status()).toBe(200);
  await expect.poll(()=>page.evaluate(()=>window.QI_PHYSICS_EXPLORER_READY===true)).toBe(true);
  await page.evaluate(()=>document.fonts.ready);
  const settle=()=>page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
  const shot=async name=>{
    await settle();
    const path=info.outputPath(name+'.png');
    await page.screenshot({path,animations:'disabled',scale:'css'});
    await info.attach(name,{path,contentType:'image/png'});
  };
  const snapshot=()=>page.evaluate(()=>{
    const h=document.querySelector('.site-header'),d=document.querySelector('#theoryDetail');
    const s=getComputedStyle(h),rect=e=>{const b=e.getBoundingClientRect();return [b.x,b.y,b.width,b.height]};
    return {backgroundColor:s.backgroundColor,backdropFilter:s.backdropFilter||s.webkitBackdropFilter,
      position:s.position,zIndex:s.zIndex,header:rect(h),detail:rect(d),scrollY,
      viewport:[innerWidth,innerHeight],width:document.documentElement.scrollWidth,
      devicePixelRatio,visualViewport:visualViewport?{width:visualViewport.width,height:visualViewport.height,scale:visualViewport.scale}:null};
  });
  const sameExceptBackground=(a,b)=>{
    const {backgroundColor:ac,...restA}=a,{backgroundColor:bc,...restB}=b;
    expect(restB).toEqual(restA);
  };
  const initialBefore=await snapshot();
  expect(initialBefore.backgroundColor).toBe(original);
  await shot('390-initial-approved');
  let style=await page.addStyleTag({content:candidate});
  await settle();
  const initialAfter=await snapshot();
  expect(initialAfter.backgroundColor).toBe(opaque);
  sameExceptBackground(initialBefore,initialAfter);
  await shot('390-initial-candidate');
  await style.evaluate(el=>el.remove());
  await page.locator('#theorySearch').fill('Hawking radiation');
  const card=page.locator('#theoryList .theory-card').filter({has:page.locator('strong').filter({hasText:/^Black-hole remnant scenarios$/})});
  await expect(card).toHaveCount(1);
  await card.click();
  await expect(page.locator('#theoryDetail .detail-title')).toHaveText('Black-hole remnant scenarios');
  const target=await page.evaluate(()=>{
    const h=document.querySelector('.site-header').getBoundingClientRect();
    const d=document.querySelector('#theoryDetail').getBoundingClientRect();
    const y=Math.round(scrollY+d.top-h.height-8);scrollTo({top:y,behavior:'instant'});return y;
  });
  await expect.poll(()=>page.evaluate(y=>Math.abs(scrollY-y),target)).toBeLessThanOrEqual(3);
  await settle();
  const before=await snapshot();
  expect(before.backgroundColor).toBe(original);
  await shot('390-scrolled-approved');
  style=await page.addStyleTag({content:candidate});
  await settle();
  const after=await snapshot();
  expect(after.backgroundColor).toBe(opaque);
  sameExceptBackground(before,after);
  await shot('390-scrolled-candidate');
  const widths=[];
  for(const width of [430,431,1280]){
    await page.setViewportSize({width,height:844});
    await settle();
    // Assert the actual CSS media-query boundary rather than assuming physical
    // device pixels or UA-specific viewport scaling.
    const match=await page.evaluate(()=>matchMedia('(max-width:430px)').matches);
    expect(match).toBe(width<=430);
    const current=await snapshot();
    expect(current.backgroundColor).toBe(match?opaque:original);
    widths.push({width,match,current});
    await shot(width+'-candidate-scope');
  }
  await style.evaluate(el=>el.remove());
  await settle();
  expect((await snapshot()).backgroundColor).toBe(original);
  await page.setViewportSize({width:390,height:844});
  expect((await page.goto('/docs/observatory-explorer.html',{waitUntil:'domcontentloaded'}))?.status()).toBe(200);
  await expect(page.locator('.site-header')).toHaveCSS('background-color',original);
  await shot('390-observatory-unchanged');
  expect(failures).toEqual([]);
  const path=info.outputPath('approval-preview-observations.json');
  writeFileSync(path,JSON.stringify({browserName,candidate,initialBefore,initialAfter,before,after,widths,failures},null,2));
  await info.attach('approval-preview-observations',{path,contentType:'application/json'});
});
