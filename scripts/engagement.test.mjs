import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html=fs.readFileSync('index.html','utf8');
const src=html.match(/<script id="qi-engagement-tracker">([\s\S]*?)<\/script>/)?.[1];
const id='12345678-1234-4234-8234-123456789012';
function app(url,{webdriver=false,beacon=true}={}){
  const events=[],fallback=[],listeners=new Map(),location=new URL(url);
  const window={addEventListener:(name,cb)=>listeners.set('w:'+name,cb)};
  const document={visibilityState:'visible',addEventListener:(name,cb)=>listeners.set('d:'+name,cb)};
  let now=0;
  vm.runInNewContext(src,{window,document,location,performance:{now:()=>now},
    navigator:{webdriver,sendBeacon:(_,body)=>{if(beacon)events.push(JSON.parse(body));return beacon;}},
    crypto:{randomUUID:()=>id},
    fetch:(url,options)=>{fallback.push({url,options});return Promise.resolve();}});
  return {events,fallback,window,document,location,advance:(ms)=>now+=ms,
    fire:(name)=>listeners.get(name)?.()};
}
test('telemetry enabled only on canonical production hostname',()=>{
  assert.ok(src);
  for(const url of ['http://localhost:4173/#/map','https://preview.example/#/map','https://www.quantumindex.site/#/catalog'])
    assert.equal(app(url).events.length,0);
});
test('hash views and engagement never include search text or private data',()=>{
  const t=app('https://quantumindex.site/#/catalog?search=private_search');
  assert.equal(t.events.length,1);
  assert.equal(t.events[0].section,'catalog');
  t.advance(2300);t.location.hash='#/catalog?search=other_private';t.fire('w:hashchange');
  assert.equal(t.events.length,1,'filter changes are not section changes');
  t.fire('d:pointerdown');t.advance(2200);t.location.hash='#/theory/planck-quanta?returnTo=secret';t.fire('w:hashchange');
  assert.equal(t.events.length,3);
  assert.deepEqual([t.events[2].kind,t.events[2].section,t.events[2].theoryId],
    ['view','theory','planck-quanta']);
  assert.doesNotMatch(JSON.stringify(t.events),/private_search|other_private|secret/);
});
test('visibility and automated-browser hints are handled without duplicate views',()=>{
  const t=app('https://quantumindex.site/#/map',{webdriver:true});
  t.advance(12000);t.fire('d:scroll');t.document.visibilityState='hidden';t.fire('d:visibilitychange');t.fire('w:pagehide');
  assert.equal(t.events.length,2);assert.equal(t.events[0].webdriver,1);
  assert.equal(t.events[1].dwellMs,12000);assert.equal(t.events[1].scrolled,1);
  t.document.visibilityState='visible';t.fire('d:visibilitychange');assert.equal(t.events.length,2);
});
test('analytics network failure never blocks route transitions',()=>{
  const t=app('https://quantumindex.site/#/map',{beacon:false});
  assert.equal(t.fallback.length,1);
  assert.equal(t.fallback[0].options.credentials,'omit');
  t.location.hash='#/catalog';t.fire('w:hashchange');assert.equal(t.fallback.length,2);
});
test('collector validates origin, public data only and CORS',async()=>{
  const worker=(await import('data:text/javascript,'+encodeURIComponent(
    fs.readFileSync('infra/qi-engagement-collector.mjs','utf8')))).default;
  const records=[];
  const env={DB:{prepare(sql){return{bind(...args){return{run:async()=>records.push({sql,args})}}}}}};
  const endpoint='https://qi-engagement-collector.jeremy-hennessy-c4e.workers.dev/event';
  const payload={v:1,sid:id,kind:'view',section:'theory',theoryId:'qed',dwellMs:0,inputs:0,scrolled:0,webdriver:0,privateNote:'SECRET'};
  const post=(p,origin='https://quantumindex.site')=>worker.fetch(new Request(endpoint,{
    method:'POST',headers:{Origin:origin,'Content-Type':'text/plain'},body:JSON.stringify(p)
  }),env);
  assert.equal((await post(payload,'https://attacker.test')).status,403);
  assert.equal((await post({...payload,section:'notes'})).status,400);
  assert.equal((await post({...payload,theoryId:'../secrets'})).status,400);
  assert.equal((await post({...payload,sid:'bad'})).status,400);
  assert.equal(records.length,0);
  const ok=await post(payload);
  assert.equal(ok.status,204);
  assert.equal(ok.headers.get('Access-Control-Allow-Origin'),'https://quantumindex.site');
  assert.equal(records.length,1);
  assert.ok(!JSON.stringify(records).includes('SECRET'));
});
