import test from 'node:test';
import assert from 'node:assert/strict';
import {readGraph,shortestDocumentedPath} from './sourced-paths.mjs';

const node=id=>({id,name:id,category:'test'});
const source=id=>({id,title:'Evidence '+id,authors:'Author',year:2000,url:'https://example.org/'+id});
const edge=(from,to,{id='s',type='extends',documented=true}={})=>({
  from,to,type,note:'',sourceIds:documented?[id]:[],
  evidenceType:documented?'formal mathematical relation':'editorial relation',
  confidence:documented?'high':'editorial',
  evidenceNote:documented?'Narrow formal relation in the cited example':''
});
const fixture={
  theories:['a','b','c','d','e'].map(node),
  sources:['s','t'].map(source),
  relations:[
    edge('a','c',{documented:false}), // one-hop editorial shortcut must never enter the answer
    edge('a','d',{id:'t'}),edge('d','c',{id:'t'}),
    edge('a','b'),edge('b','c'),edge('e','a')
  ]
};

test('BFS prefers shortest sourced path, excludes editorial shortcuts and resolves each cited source',()=>{
  const result=shortestDocumentedPath(fixture,'a','c');
  assert.equal(result.found,true);
  assert.equal(result.hops,2);
  assert.deepEqual(result.nodes.map(x=>x.id),['a','b','c']);
  assert.deepEqual(result.edges.map(x=>[x.from,x.to,x.type]),[['a','b','extends'],['b','c','extends']]);
  for(const e of result.edges){
    assert.equal(e.confidence,'high');
    assert.equal(e.sources.length,1);
    assert.match(e.sources[0].url,/^https:\/\//);
    assert.ok(e.evidenceNote.length);
  }
  assert.match(result.semantics,/not a logical proof/);
});

test('traversal is directional, finite, and distinguishes missing links from unknown IDs',()=>{
  assert.equal(shortestDocumentedPath(fixture,'c','a').found,false);
  const short=shortestDocumentedPath(fixture,'a','c',{maxHops:1});
  assert.deepEqual([short.found,short.reason],[false,'no-directed-sourced-path-within-limit']);
  const same=shortestDocumentedPath(fixture,'a','a',{maxHops:0});
  assert.equal(same.hops,0);assert.equal(same.edges.length,0);
  const unknown=shortestDocumentedPath(fixture,'absent','c');
  assert.equal(unknown.reason,'unknown-theory-id');
  assert.equal(unknown.unknownId,'absent');
  for(const maxHops of [-1,1.1,31,NaN])assert.throws(()=>shortestDocumentedPath(fixture,'a','c',{maxHops}),/maxHops/);
});

test('a sourced edge with missing bibliography cannot be advertised as documented',()=>{
  const broken={...fixture,relations:[edge('a','b',{id:'missing'})]};
  assert.throws(()=>shortestDocumentedPath(broken,'a','b'),/Missing documented relation source/);
});

test('live graph path reproduces a specific documented promotion without inferring unsourced QED adjacency',()=>{
  const graph=readGraph();
  const direct=shortestDocumentedPath(graph,'renormalization-group','functional-rg',{maxHops:1});
  assert.equal(direct.found,true);
  assert.equal(direct.hops,1);
  assert.equal(direct.edges[0].type,'extends');
  assert.ok(direct.edges[0].sourceIds.includes('wetterich-1993'));
  assert.equal(direct.edges[0].confidence,'high');
  const editorial=graph.relations.find(r=>r.from==='qed'&&r.to==='aqft'&&r.type==='overlaps');
  assert.ok(editorial);
  assert.equal(editorial.confidence,'editorial');
  const edgeOnly=shortestDocumentedPath(graph,'qed','aqft',{maxHops:1});
  assert.equal(edgeOnly.found,false);
});

test('reported live source-backed counts reflect source-bearing actual relationships',()=>{
  const graph=readGraph();
  const eligible=graph.relations.filter(r=>r.sourceIds.length&&['high','medium'].includes(r.confidence)&&r.evidenceType!=='editorial relation');
  assert.equal(graph.relations.length,610);
  assert.equal(eligible.length,122);
  assert.ok(graph.sources.length>=549);
});
