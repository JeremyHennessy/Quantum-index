import fs from "node:fs";
import vm from "node:vm";

const sandbox={window:{}};
vm.createContext(sandbox);
for(const file of ["theories.js","developments.js"]) vm.runInContext(fs.readFileSync(file,"utf8"),sandbox);
const theories=sandbox.window.QI_DATA.theories;
const events=sandbox.window.QI_DEVELOPMENTS.events;
const candidates=JSON.parse(fs.readFileSync("research/RECENT_DEVELOPMENT_CANDIDATES_2026-09-27.json","utf8"));
const byId=new Map(theories.map(t=>[t.id,t]));
const categories=[...new Set(theories.map(t=>t.category))].sort();
const countYears=items=>Object.fromEntries(
  [...new Set(items.map(x=>x.year))].sort((a,b)=>a-b).map(year=>[year,items.filter(x=>x.year===year).length])
);
const categoriesWithDevelopmentSince=year=>{
  const covered=new Set();
  for(const event of events.filter(e=>e.year>=year)){
    for(const id of event.relatedTheoryIds||[]){
      const theory=byId.get(id);
      if(theory)covered.add(theory.category);
    }
  }
  return covered;
};
const last3=categoriesWithDevelopmentSince(2024);
const last5=categoriesWithDevelopmentSince(2022);
const staleReviewIds=theories
  .filter(t=>!t.lastReviewed || String(t.lastReviewed)<"2024-01-01")
  .map(t=>t.id)
  .sort();
const awaiting=candidates.candidates
  .filter(c=>["candidate-new-entity","older-origin-missing-entity","defer"].includes(c.disposition))
  .map(c=>({id:c.id,title:c.title,disposition:c.disposition,nextAction:c.nextAction}));

const report={
  reviewedAt:"2026-09-27",
  newestEntityOriginYear:Math.max(...theories.map(t=>Number(t.year)||0)),
  newestDevelopmentYear:Math.max(...events.map(e=>e.year)),
  developmentEvents:events.length,
  entitiesByYear:countYears(theories),
  developmentsByYear:countYears(events),
  eventTypes:Object.fromEntries([...new Set(events.map(e=>e.eventType))].sort().map(type=>[type,events.filter(e=>e.eventType===type).length])),
  categoriesNoReviewedDevelopmentLast3Years:categories.filter(c=>!last3.has(c)),
  categoriesNoReviewedDevelopmentLast5Years:categories.filter(c=>!last5.has(c)),
  staleLiteratureReviewIds:staleReviewIds,
  staleLiteratureReviewCount:staleReviewIds.length,
  recentCandidatesAwaitingReview:awaiting,
  recentCandidateCount:awaiting.length
};

const md=`# Quantum Index freshness audit

**Reviewed:** ${report.reviewedAt}

This report separates **entity origin dates** from **later scientific developments**. A recent event does not rewrite a theory's historical origin year.

- Newest entity origin year: **${report.newestEntityOriginYear}**
- Newest reviewed DevelopmentEvent year: **${report.newestDevelopmentYear}**
- Reviewed DevelopmentEvents: **${report.developmentEvents}**
- Recent identity candidates still awaiting/deferred review: **${report.recentCandidateCount}**
- Entities with no recorded recent literature-review date (before 2024 or missing): **${report.staleLiteratureReviewCount}**

## Development events by year

${Object.entries(report.developmentsByYear).map(([year,count])=>`- **${year}:** ${count}`).join("\n")}

## Development events by type

${Object.entries(report.eventTypes).map(([type,count])=>`- **${type}:** ${count}`).join("\n")}

## Categories without a reviewed DevelopmentEvent in the last 3 years

${report.categoriesNoReviewedDevelopmentLast3Years.map(c=>`- ${c}`).join("\n")||"- None"}

## Categories without a reviewed DevelopmentEvent in the last 5 years

${report.categoriesNoReviewedDevelopmentLast5Years.map(c=>`- ${c}`).join("\n")||"- None"}

## Recent candidates awaiting/deferred identity review

${report.recentCandidatesAwaitingReview.map(c=>`- **${c.title}** — \`${c.disposition}\`: ${c.nextAction}`).join("\n")||"- None"}

## Interpretation

Coverage here is a curation/freshness measure, not a score of scientific importance. Old frameworks are not obsolete because they lack a recent event, and recent papers are not automatically distinct theories.
`;

const outputs=new Map([
  ["docs/freshness.json",JSON.stringify(report,null,2)+"\n"],
  ["docs/FRESHNESS.md",md]
]);
const stale=[];
for(const [file,expected] of outputs){
  if(process.argv.includes("--check")){
    if(!fs.existsSync(file)||fs.readFileSync(file,"utf8")!==expected)stale.push(file);
  }else fs.writeFileSync(file,expected);
}
if(stale.length)throw new Error(`Freshness report is stale: ${stale.join(", ")}. Run npm run freshness.`);
console.log(process.argv.includes("--check")?"Freshness report matches runtime data.":"Freshness report updated.");
