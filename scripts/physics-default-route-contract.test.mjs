import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {proposedPhysicsDefaultTarget} from './physics-default-route-contract.mjs';

const home='https://quantumindex.site';
const hash=b=>createHash('sha256').update(b).digest('hex');

test('new visitors with no hash see the actual new Physics Explorer',()=>{
  assert.equal(proposedPhysicsDefaultTarget(home+'/'),home+'/docs/physics-explorer.html');
  assert.equal(proposedPhysicsDefaultTarget(home+'/?utm_source=chatgpt.com'),home+'/docs/physics-explorer.html?utm_source=chatgpt.com');
  assert.equal(proposedPhysicsDefaultTarget(home+'/?theory=hawking-radiation'),home+'/docs/physics-explorer.html?theory=hawking-radiation');
  assert.equal(proposedPhysicsDefaultTarget('http://127.0.0.1:4173/'),'http://127.0.0.1:4173/docs/physics-explorer.html');
  assert.equal(proposedPhysicsDefaultTarget('https://jeremyhennessy.github.io/Quantum-index/'),'https://jeremyhennessy.github.io/Quantum-index/docs/physics-explorer.html');
});

test('all previously accepted direct hash routes preserve the original page and state',()=>{
  const hashes=[
    '#/explore','#/map','#/timeline?layer=developments','#/lineage?tree=1',
    '#/catalog?search=Planck','#/formula?theory=unruh&review=explicit',
    '#/theory/wave-mechanics?from=learn','#/compare?ids=bell,gksl',
    '#/workspace','#/questions?disposition=open','#/evidence?search=DESI',
    '#/problems?problem=dark-matter','#/learn?path=open-system-methods',
    '#/coverage','#/unknown','#/'
  ];
  for(const fragment of hashes){
    assert.equal(proposedPhysicsDefaultTarget(home+'/'+fragment),null,'Do not redirect accepted hash '+fragment);
    assert.equal(proposedPhysicsDefaultTarget(home+'/?utm_source=test'+fragment),null,'Query may not override legacy hash '+fragment);
  }
});

test('explicit original index and other unrelated paths never redirect',()=>{
  for(const url of [
    home+'/index.html',home+'/index.html#/explore',home+'/index.html#/theory/gksl',
    home+'/docs/physics-explorer.html',home+'/docs/observatory-explorer.html',
    home+'/docs/',home+'/test/',home+'/asset.js',home+'/Quantum-index/index.html',
    home+'/?classic=1',home+'/#',home+'/#/workspace'
  ]){
    assert.equal(proposedPhysicsDefaultTarget(url),null,'Do not redirect explicit classic or unrelated path '+url);
  }
});

test('routing contract does not mutate production or historic protected bytes',()=>{
  assert.equal(hash(fs.readFileSync('index.html')),'b464c8478c83974dfbab204a39249e4f124531c4129c2ff15a5c315fc74fc121');
  assert.equal(hash(fs.readFileSync('app.js')),'650b38708ca3ce89289ecdde52124ca8ab90acf04a575fb721dcb0189fa8d0d1');
  assert.equal(hash(fs.readFileSync('scripts/analytics.test.mjs')),'2654359bd9cac73d5d47d3c88574c783659cb2f75fba6a4d525cd65ae0cfe3bb');
  assert.ok(fs.existsSync('docs/physics-explorer.html'));
  assert.ok(fs.existsSync('docs/observatory-explorer.html'));
  assert.ok(!fs.readFileSync('index.html','utf8').includes('physics-default-route-contract'));
  assert.ok(!fs.readFileSync('index.html','utf8').includes('physics-explorer'));
});
