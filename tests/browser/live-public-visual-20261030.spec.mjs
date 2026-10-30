import {test,expect} from '@playwright/test';
import {writeFileSync} from 'node:fs';

const base='https://quantumindex.site';
const pages=[
  {key:'classic',path:'/',selector:'.hero h2',ready:'classic'},
  {key:'physics',path:'/docs/physics-explorer.html',selector:'.hero h1',ready:'QI_PHYSICS_EXPLORER_READY'},
  {key:'observatory',path:'/docs/observatory-explorer.html',selector:'.hero h1',ready:'QI_OBSERVATORY_PREVIEW_READY'}
];

for(const width of [1280,390]){
  test('live production styles and resources at '+width+'px',async({page},info)=>{
    test.setTimeout(120000);
    await page.setViewportSize({width,height:width===390?844:900});
    const observations=[];
    for(const entry of pages){
      const issues=[],responses=[];
      const onError=e=>issues.push('pageerror: '+e.message);
      const onFailed=req=>issues.push('requestfailed: '+req.url().slice(0,200)+' '+(req.failure()?.errorText||''));
      const onResponse=res=>{
        if(res.url().startsWith(base)&&/\.(css|js)(\?|$)/.test(res.url()))
          responses.push({url:res.url().replace(base,''),status:res.status()});
      };
      page.on('pageerror',onError);page.on('requestfailed',onFailed);page.on('response',onResponse);
      let navigationError=null,response=null;
      try{
        response=await page.goto(base+entry.path,{waitUntil:'domcontentloaded',timeout:35000});
        await page.locator(entry.selector).waitFor({state:'visible',timeout:20000});
        if(entry.ready==='classic'){
          await page.locator('#stats').first().waitFor({state:'visible',timeout:15000});
        } else {
          await expect.poll(()=>page.evaluate(key=>window[key]===true||Boolean(window[key.replace('_READY','_ERROR')]),entry.ready),{timeout:20000}).toBe(true);
        }
        await page.waitForTimeout(650);
      }catch(e){navigationError=String(e).slice(0,800);}
      const metrics=await page.evaluate(()=>{
        const hero=document.querySelector('.hero');
        const body=document.body;
        const root=document.documentElement;
        const styles=[...document.querySelectorAll('link[rel="stylesheet"]')].map(x=>({href:x.getAttribute('href'),sheetLoaded:Boolean(x.sheet)}));
        return {
          location:location.href,
          title:document.title,
          htmlScrollWidth:root.scrollWidth,htmlClientWidth:root.clientWidth,
          bodyScrollWidth:body?.scrollWidth,
          heroBackground:hero?getComputedStyle(hero).backgroundImage:null,
          heroBorderRadius:hero?getComputedStyle(hero).borderRadius:null,
          bodyFont:getComputedStyle(body).fontFamily,
          styles,
          cards:document.querySelectorAll('#theoryList .theory-card').length,
          classicTabs:document.querySelectorAll('.tabs .tab').length,
          physicsReady:Boolean(window.QI_PHYSICS_EXPLORER_READY),
          observatoryReady:Boolean(window.QI_OBSERVATORY_PREVIEW_READY),
          physicsError:window.QI_PHYSICS_EXPLORER_ERROR||null,
          observatoryError:window.QI_OBSERVATORY_PREVIEW_ERROR||null
        };
      }).catch(e=>({inspectionError:String(e)}));
      let screenshotResult='not-captured';
      try{
        const screen=info.outputPath('live-'+entry.key+'-'+width+'.png');
        await page.screenshot({path:screen,fullPage:false,timeout:20000});
        await info.attach('live-'+entry.key+'-'+width,{path:screen,contentType:'image/png'});
        screenshotResult=screen;
      }catch(e){screenshotResult='capture-failed: '+String(e).slice(0,180);}
      const item={page:entry.key,width,httpStatus:response?.status()??null,navigationError,metrics,siteResourceResponses:responses,issues,screenshotResult};
      observations.push(item);
      page.removeListener('pageerror',onError);
      page.removeListener('requestfailed',onFailed);
      page.removeListener('response',onResponse);
    }
    const report=info.outputPath('live-diagnostics-'+width+'.json');
    writeFileSync(report,JSON.stringify(observations,null,2));
    await info.attach('live-diagnostics-'+width,{path:report,contentType:'application/json'});
    for(const item of observations){
      console.log(JSON.stringify({page:item.page,width:item.width,status:item.httpStatus,nav:item.navigationError,
        hero:item.metrics.heroBackground?.slice(0,140),styles:item.metrics.styles,
        overflow:(item.metrics.htmlScrollWidth||0)>(item.metrics.htmlClientWidth||0),
        ready:[item.metrics.physicsReady,item.metrics.observatoryReady],
        failures:item.issues.slice(0,10)}));
      expect(item.httpStatus,'Public document unavailable: '+item.page).toBe(200);
      expect(item.navigationError,'Site did not render: '+item.page).toBeNull();
      expect(item.metrics.htmlScrollWidth,'Horizontal overflow: '+item.page).toBeLessThanOrEqual(item.metrics.htmlClientWidth+1);
      expect(item.metrics.styles.some(s=>s.sheetLoaded),'Stylesheet not loaded: '+item.page).toBe(true);
      if(item.page==='physics')expect(item.metrics.physicsReady,'Real Physics Explorer did not initialize').toBe(true);
      if(item.page==='observatory')expect(item.metrics.observatoryReady,'Real Observatory Explorer did not initialize').toBe(true);
      if(item.page==='classic')expect(item.metrics.classicTabs).toBe(13);
      expect(item.siteResourceResponses.filter(q=>q.status>=400),'Failed first-party CSS/JS: '+item.page).toEqual([]);
    }
  });
}
