// Read-only, fail-closed cross-category scientific intake; does not edit the shipped catalog.
import fs from 'node:fs';
import {pathToFileURL} from 'node:url';
import {loadRuntime,buildCategoryTrustCensus} from './category-trust-census.mjs';

export const normalize=s=>String(s||'').toLowerCase().normalize('NFKD')
 .replace(/[\u0300-\u036f]/g,'').replace(/[–—−]/g,'-').replace(/[^a-z0-9]+/g,' ').trim().replace(/\s+/g,' ');
const words=s=>new Set(normalize(s).split(' ').filter(x=>x.length>2&&!['and','the','for','with','from','quantum','theory','models','model','framework','dark','matter'].includes(x)));
const dice=(a,b)=>{const A=words(a),B=words(b);if(!A.size||!B.size)return 0;let n=0;for(const x of A)if(B.has(x))n++;return 2*n/(A.size+B.size);};

export function buildCrossCategoryAudit(w=loadRuntime(),ledger=JSON.parse(fs.readFileSync('research/ALL_CATEGORY_CANDIDATES_2026-10-29.json','utf8'))){
 const census=buildCategoryTrustCensus(w);
 const categories=new Map(census.categories.map(c=>[c.category,c]));
 const catalog=w.QI_DATA.theories;
 const exactIndex=new Map();
 for(const theory of catalog){
   for(const label of [theory.id,theory.name,...(theory.aliases||[])]){
     const key=normalize(label);if(!key)continue;
     if(!exactIndex.has(key))exactIndex.set(key,[]);
     if(!exactIndex.get(key).some(x=>x.id===theory.id))exactIndex.get(key).push(theory);
   }
 }
 const output=ledger.groups.map(g=>{
   const stats=categories.get(g.category);
   if(!stats)throw Error('Category not present in runtime: '+g.category);
   const candidates=g.candidates.map(c=>{
     const key=normalize(c.name),exact=exactIndex.get(key)||[];
     const nearby=catalog.map(t=>({id:t.id,name:t.name,category:t.category,similarity:dice(c.name,t.name)}))
       .filter(t=>t.similarity>=.56).sort((a,b)=>b.similarity-a.similarity||a.id.localeCompare(b.id)).slice(0,4);
     return {name:c.name,reviewDisposition:c.reviewDisposition,identityVerdict:exact.length?'EXACT_CATALOG_MATCH':'NOT_EXACTLY_NAMED_UNRESOLVED',exactMatches:exact.map(t=>({id:t.id,category:t.category})),possibleOverlaps:nearby,sourceStatus:c.sourceStatus,releaseStatus:c.releaseStatus,rationale:c.rationale};
   });
   return {category:g.category,stats,candidates};
 });
 const all=output.flatMap(x=>x.candidates);
 return {schemaVersion:1,baselineMain:ledger.baselineMain,status:'READ_ONLY_UNVERIFIED_IDENTITY_SCREEN',notProof:'Exact-name absence does not establish a missing theory. Similarity is only a research hint; no candidate may be automatically promoted.',countingRules:census.countingRules,totals:{categories:output.length,catalogTheories:census.totals.theories,formulaRecords:census.totals.formulaRecords,formulaBearingTheories:census.totals.formulaBearingTheories,formulaGaps:census.totals.documentedFormulaGapTheories,sourceBackedRelations:census.totals.sourcedRelations,editorialRelations:census.totals.editorialRelations,candidates:all.length,exactMatches:all.filter(c=>c.identityVerdict==='EXACT_CATALOG_MATCH').length,unresolved:all.filter(c=>c.identityVerdict==='NOT_EXACTLY_NAMED_UNRESOLVED').length},groups:output};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)console.log(JSON.stringify(buildCrossCategoryAudit(),null,2));
