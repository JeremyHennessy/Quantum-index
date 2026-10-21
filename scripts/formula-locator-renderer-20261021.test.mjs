import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {beforeLocatorRenderer} from './formula-locator-renderer-20261021-baseline.mjs';

test('locator renderer historical projection rejects undeclared changes and is idempotent',()=>{
 const current=fs.readFileSync('app.js');
 const prior=beforeLocatorRenderer(current,'app.js');
 assert.notDeepEqual(prior,current);
 assert.deepEqual(beforeLocatorRenderer(prior,'app.js'),prior);
 assert.throws(()=>beforeLocatorRenderer(Buffer.concat([current,Buffer.from('\n// undeclared')]),'app.js'),/undeclared renderer change/);
 assert.throws(()=>beforeLocatorRenderer(Buffer.from(current.toString().replace('locations.length?locations:[null]','[null]')),'app.js'),/undeclared renderer change/);
 const unrelated=Buffer.from('other content');
 assert.equal(beforeLocatorRenderer(unrelated,'workspace.js'),unrelated);
});
