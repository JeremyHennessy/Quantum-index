import {test,expect} from '@playwright/test';
import {writeFileSync} from 'node:fs';

// Diagnostic only: never imported by production. No production writes.
// Hypothesis: the approved header's 0.94 alpha allows background lettering to
// show through; vary only background-color, keeping blur, geometry and scroll fixed.
for (const target of [
  {name:'checkout',url:'/docs/physics-explorer.html'},
  {name:'live',url:'https://quantumindex.site/docs/physics-explorer.html'}
]) {
  test('issue 128 header alpha A/B/A '+target.name,async({page,browserName},info)=>{
    test.setTimeout(120000);
    await page.setViewportSize({width:1280,height:900});
    const failures=[];
    page.on('pageerror',e=>failures.push(e.message));
    const response=await page.goto(target.url,{waitUntil:'domcontentloaded',timeout:35000});
    expect(response?.status()).toBe(200);
    await expect.poll(()=>page.evaluate(()=>window.QI_PHYSICS_EXPLORER_READY===true),{timeout:25000}).toBe(true);
    await page.evaluate(()=>document.fonts.ready);
    const shot=async name=>{
      const path=info.outputPath(name+'.png');
      await page.screenshot({path,animations:'disabled',scale:'css'});
      await info.attach(name,{path,contentType:'image/png'});
    };
    await shot('desktop-initial');
    await page.setViewportSize({width:390,height:844});
    await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));
    await shot('mobile-initial');
    await page.locator('#theorySearch').fill('Hawking radiation');
    const card=page.locator('#theoryList .theory-card').filter({hasText:/Hawking radiation/i}).first();
    await expect(card).toBeVisible();
    await card.click();
    const detail=page.locator('#theoryDetail');
    await expect(detail).toContainText('Hawking radiation');
    // Align the inspector immediately below the sticky header. Unlike the
    // initial-view smoke test, this puts preceding content behind that header.
    const scrollTarget=await page.evaluate(()=>{
      const h=document.querySelector('.site-header').getBoundingClientRect();
      const d=document.querySelector('#theoryDetail').getBoundingClientRect();
      const y=Math.round(window.scrollY+d.top-h.height-8);
      window.scrollTo({top:y,behavior:'instant'});
      return y;
    });
    await expect.poll(()=>page.evaluate(()=>Math.round(window.scrollY))).toBe(scrollTarget);
    const snapshot=()=>page.evaluate(()=>{
      const h=document.querySelector('.site-header'),d=document.querySelector('#theoryDetail');
      const s=getComputedStyle(h),b=h.getBoundingClientRect(),p=d.getBoundingClientRect();
      return {backgroundColor:s.backgroundColor,backdropFilter:s.backdropFilter||s.webkitBackdropFilter,
        position:s.position,zIndex:s.zIndex,scrollY:window.scrollY,header:[b.x,b.y,b.width,b.height],
        detail:[p.x,p.y,p.width,p.height],viewport:[innerWidth,innerHeight],devicePixelRatio,
        userAgent:navigator.userAgent,visualViewport:visualViewport?{width:visualViewport.width,height:visualViewport.height,scale:visualViewport.scale}:null};
    });
    const settle=()=>page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
    await settle();
    const before=await snapshot();
    expect(before.position).toBe('sticky');
    expect(before.backgroundColor).toBe('rgba(255, 255, 255, 0.94)');
    await shot('A-original-translucent');
    const prior=await page.locator('.site-header').evaluate(h=>({value:h.style.getPropertyValue('background-color'),priority:h.style.getPropertyPriority('background-color')}));
    let changed,restored;
    try {
      await page.locator('.site-header').evaluate(h=>h.style.setProperty('background-color','rgb(255, 255, 255)','important'));
      await settle();
      changed=await snapshot();
      expect(changed.backgroundColor).toBe('rgb(255, 255, 255)');
      await shot('B-opaque-background-only');
    } finally {
      await page.locator('.site-header').evaluate((h,p)=>p.value?h.style.setProperty('background-color',p.value,p.priority):h.style.removeProperty('background-color'),prior);
      await settle();
      restored=await snapshot();
      await shot('A-restored');
      const path=info.outputPath('header-alpha-observations.json');
      writeFileSync(path,JSON.stringify({target:target.name,browserName,before,changed,restored,failures},null,2));
      await info.attach('header-alpha-observations',{path,contentType:'application/json'});
    }
    // Do not claim visual equivalence or a cause from DOM assertions alone.
    for(const key of ['backdropFilter','position','zIndex','scrollY','header','detail','viewport','devicePixelRatio','visualViewport']){
      expect(changed[key],key+' changed in intervention').toEqual(before[key]);
      expect(restored[key],key+' changed after restoration').toEqual(before[key]);
    }
    expect(restored.backgroundColor).toBe(before.backgroundColor);
    expect(failures).toEqual([]);
  });
}
