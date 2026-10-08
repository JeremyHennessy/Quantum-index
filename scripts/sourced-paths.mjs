// Pure, source-provenance-aware graph traversal. No runtime/UI modifications.
import fs from 'node:fs';
import vm from 'node:vm';
import {pathToFileURL} from 'node:url';

export function readGraph(directory='.') {
  const sandbox={window:{}};
  vm.createContext(sandbox);
  // Match the authoritative coverage pipeline's runtime source-registration order.
  for(const file of ['theories.js','developments.js','evidence.js','formulas.js',
                     'formula-audit.js','profiles.js','questions.js','problems.js','passports.js'])
    vm.runInContext(fs.readFileSync(directory+'/'+file,'utf8'),sandbox,{filename:file});
  return sandbox.window.QI_DATA;
}

const semantics='Shortest directed path through explicitly source-backed catalog edges only. Each edge remains a scoped claim, not a logical proof or causal implication between endpoints. Stored from/to direction is respected even for overlap links.';

export function shortestDocumentedPath(graph,fromId,toId,{maxHops=12}={}){
  if(!Number.isInteger(maxHops)||maxHops<0||maxHops>30)
    throw new RangeError('maxHops must be an integer between 0 and 30');
  const {theories,relations,sources}=graph;
  const byId=new Map(theories.map(t=>[t.id,t]));
  const bySource=new Map(sources.map(s=>[s.id,s]));
  const base={semantics,fromId,toId,maxHops};
  for(const id of [fromId,toId]){
    if(!byId.has(id))return {...base,found:false,reason:'unknown-theory-id',unknownId:id,nodes:[],edges:[]};
  }
  const node=id=>({id,name:byId.get(id).name,category:byId.get(id).category});
  if(fromId===toId)return {...base,found:true,hops:0,nodes:[node(fromId)],edges:[]};

  const adjacency=new Map();
  const accepted=new Set(['high','medium']);
  for(const rel of relations){
    if(!Array.isArray(rel.sourceIds)||rel.sourceIds.length===0||
       !accepted.has(rel.confidence)||rel.evidenceType==='editorial relation')continue;
    if(!byId.has(rel.from)||!byId.has(rel.to))throw new Error('Dangling documented relation');
    for(const id of rel.sourceIds)if(!bySource.has(id))throw new Error('Missing documented relation source: '+id);
    if(!adjacency.has(rel.from))adjacency.set(rel.from,[]);
    adjacency.get(rel.from).push(rel);
  }
  for(const list of adjacency.values())list.sort((a,b)=>
    (a.to+'|'+a.type+'|'+a.sourceIds.join(',')).localeCompare(b.to+'|'+b.type+'|'+b.sourceIds.join(',')));
  const queue=[fromId],visited=new Set(queue),depth=new Map([[fromId,0]]),parent=new Map();
  let reached=false;
  for(let i=0;i<queue.length&&!reached;i++){
    const here=queue[i],d=depth.get(here);
    if(d>=maxHops)continue;
    for(const edge of adjacency.get(here)||[]){
      if(visited.has(edge.to))continue;
      visited.add(edge.to);depth.set(edge.to,d+1);
      parent.set(edge.to,{from:here,edge});
      if(edge.to===toId){reached=true;break;}
      queue.push(edge.to);
    }
  }
  if(!reached)return {...base,found:false,reason:'no-directed-sourced-path-within-limit',nodes:[],edges:[]};
  const backward=[],ids=[toId];
  for(let id=toId;id!==fromId;){
    const step=parent.get(id);
    if(!step)throw new Error('Incomplete path reconstruction');
    const r=step.edge;
    backward.push({
      from:r.from,to:r.to,type:r.type,note:r.note||'',
      confidence:r.confidence,evidenceType:r.evidenceType,
      evidenceNote:r.evidenceNote||'',sourceLocator:r.sourceLocator||null,
      sourceIds:[...r.sourceIds],
      sources:r.sourceIds.map(id=>{
        const s=bySource.get(id);return {id,title:s.title,authors:s.authors,year:s.year,url:s.url};
      })
    });
    id=step.from;ids.push(id);
  }
  ids.reverse();backward.reverse();
  return {...base,found:true,hops:backward.length,nodes:ids.map(node),edges:backward};
}

if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
  const [from,to,max]=process.argv.slice(2);
  if(!from||!to){console.error('Usage: node scripts/sourced-paths.mjs <from-theory-id> <to-theory-id> [maxHops]');process.exitCode=2;}
  else {
    const limit=max===undefined?12:Number(max);
    try{
      const result=shortestDocumentedPath(readGraph(),from,to,{maxHops:limit});
      console.log(JSON.stringify(result,null,2));
      if(result.reason==='unknown-theory-id')process.exitCode=2;
    }catch(e){console.error(String(e));process.exitCode=2;}
  }
}
