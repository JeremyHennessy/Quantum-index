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

import '../sourced-paths.js';
export const shortestDocumentedPath = globalThis.QI_PATHS.shortestDocumentedPath;

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
