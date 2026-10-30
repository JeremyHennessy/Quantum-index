import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {reverseDeclaredUiRevision} from './ui-revision-checkpoint.mjs';

const manifest=JSON.parse(fs.readFileSync('research/PHYSICS_EXPLORER_RUM_PARITY_2026-10-30.json','utf8'));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const gitBlob=bytes=>createHash('sha1').update('blob '+bytes.length+'\0').update(bytes).digest('hex');
const physics=fs.readFileSync('docs/physics-explorer.html');
const analytics=fs.readFileSync('analytics.js','utf8');

test('approved Physics Explorer source is exactly reversible and rejects extra edits',()=>{
 const entry=manifest.files['docs/physics-explorer.html'];
 assert.equal(manifest.status,'review-candidate');
 assert.equal(manifest.baselineSha,'d98b1984ae72d0dfcb4737ea0f837a32fcd185cc');
 assert.deepEqual(Object.keys(manifest.files),['docs/physics-explorer.html']);
 assert.equal(hash(physics),entry.afterSha256);
 const prior=reverseDeclaredUiRevision(physics,'docs/physics-explorer.html',manifest);
 assert.equal(hash(prior),entry.beforeSha256);
 assert.equal(gitBlob(prior),manifest.approvedVisualBlobs.html);
 assert.equal(gitBlob(fs.readFileSync('docs/physics-explorer.css')),manifest.approvedVisualBlobs.css);
 assert.equal(gitBlob(fs.readFileSync('docs/physics-explorer.js')),manifest.approvedVisualBlobs.js);
 assert.throws(()=>reverseDeclaredUiRevision(Buffer.concat([physics,Buffer.from('UNDECLARED')]),'docs/physics-explorer.html',manifest),/unexpected UI candidate mutation/);
});

test('only canonical-host Web Analytics script is added and existing design components stay intact',()=>{
 const html=physics.toString('utf8');
 assert.equal(html.split('<script defer src="../analytics.js"></script>').length-1,1);
 assert.equal(html.split('src="./physics-explorer.js"').length-1,1);
 assert.match(html,/cookieless Cloudflare Web Analytics measures visits and page performance/);
 assert.equal(manifest.siteTag,'62199771b17647a2b10bfdf2ce35081e');
 assert.equal(manifest.sourceToken,'f402f014fafa46fd946dad89b1561973');
 assert.equal(manifest.cloudflareAutoInstall,false,'Cloudflare auto-install is off; explicit asset is required');
 assert.match(analytics,/location.protocol !== 'https:' \|\| location.hostname !== 'quantumindex.site'/);
 assert.match(analytics,/script.src = 'https:\/\/static.cloudflareinsights.com\/beacon.min.js'/);
 assert.match(analytics,/'f402f014fafa46fd946dad89b1561973'/);
 assert.doesNotMatch(analytics,/localStorage|sessionStorage|QI_WORKSPACE|sendBeacon|location\.hash|location\.search|\.notes/);
 for(const section of ['id="topicNav"','id="theoryList"','id="theoryDetail"','id="recentDevelopments"']){
   assert.ok(html.includes(section),'Accepted UI section missing '+section);
 }
});

test('new source still never sends a beacon from localhost or another unapproved hostname',()=>{
 function load(url){
  const loc=new URL(url),children=[];
  const document={
   getElementById:()=>null,
   createElement:()=>({setAttribute(){},addEventListener(){}}),
   body:{appendChild:x=>children.push(x)}
  };
  vm.runInNewContext(analytics,{location:loc,document},{timeout:500});
  return children;
 }
 for(const url of ['http://localhost:4173/docs/physics-explorer.html','https://preview.example/docs/physics-explorer.html','http://quantumindex.site/docs/physics-explorer.html'])
  assert.equal(load(url).length,0,url);
 const official=load('https://quantumindex.site/docs/physics-explorer.html');
 assert.equal(official.length,1);
 assert.equal(official[0].src,'https://static.cloudflareinsights.com/beacon.min.js');
});

test('this is RUM pageview parity only; route-level engagement remains a separate hold',()=>{
 const html=physics.toString('utf8');
 assert.ok(!html.includes('qi-engagement-tracker'));
 assert.ok(!html.includes('qi-engagement-collector.jeremy-hennessy-c4e.workers.dev'));
 assert.equal(hash(fs.readFileSync('index.html')),'b464c8478c83974dfbab204a39249e4f124531c4129c2ff15a5c315fc74fc121');
 assert.equal(hash(fs.readFileSync('app.js')),'650b38708ca3ce89289ecdde52124ca8ab90acf04a575fb721dcb0189fa8d0d1');
});
