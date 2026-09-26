import fs from 'node:fs';
import vm from 'node:vm';

const sandbox = {window:{}};
vm.createContext(sandbox);
for (const file of ['theories.js','formulas.js','formula-audit.js']) vm.runInContext(fs.readFileSync(file,'utf8'),sandbox);
const {theories,relations,trees,sources}=sandbox.window.QI_DATA;
const {formulas}=sandbox.window.QI_FORMULAS;
const {entries}=sandbox.window.QI_FORMULA_AUDIT;
const count=(items,key,value)=>items.filter(x=>x[key]===value).length;
const metrics={
  theories:theories.length,
  categories:new Set(theories.map(t=>t.category)).size,
  sources:sources.length,
  primarySourced:count(theories,'provenance','primary-sourced'),
  reviewSourced:count(theories,'provenance','review-sourced'),
  cataloguedOnly:count(theories,'provenance','catalogued'),
  relations:relations.length,
  sourcedRelations:relations.filter(r=>r.sourceIds.length).length,
  editorialRelations:count(relations,'confidence','editorial'),
  highConfidenceRelations:count(relations,'confidence','high'),
  mediumConfidenceRelations:count(relations,'confidence','medium'),
  trees:trees.length,
  formulas:formulas.length,
  formulaCategories:new Set(formulas.map(f=>f.category)).size,
  formulaBearing:count(entries,'classification','formula-bearing'),
  formulaGaps:count(entries,'classification','formula-bearing-gap'),
  interpretations:count(entries,'classification','interpretation'),
  conceptual:count(entries,'classification','primarily conceptual'),
  theorems:count(entries,'classification','theorem'),
  thoughtExperiments:count(entries,'classification','thought experiment'),
  explicitFormulaMetadata:count(formulas,'metadataReview','explicit'),
  baselineFormulaMetadata:count(formulas,'metadataReview','baseline-audit-v1')
};
const m=metrics;
const snapshot=`- **${m.theories}** theory/framework entities across **${m.categories}** categories\n- **${m.sources}** bibliography records\n- **${m.primarySourced}** primary-sourced; **${m.reviewSourced}** review-sourced; **${m.cataloguedOnly}** catalogued-only entries\n- **${m.relations}** relationships: **${m.sourcedRelations}** source-backed; **${m.editorialRelations}** editorial\n- **${m.trees}** thought trees\n- **${m.formulas}** formulas across **${m.formulaCategories}** categories\n- **${m.formulaBearing}** entries with linked formulas; **${m.formulaGaps}** documented formula gaps\n- Other audit classes: **${m.interpretations}** interpretations, **${m.conceptual}** conceptual, **${m.theorems}** theorem-first, **${m.thoughtExperiments}** thought experiment\n- Formula metadata: **${m.explicitFormulaMetadata}** explicitly reviewed; **${m.baselineFormulaMetadata}** baseline records\n\nSource attachment and formula presence are structural coverage measures, not verification of every claim or complete mathematical coverage.`;
const sections={
  'README.md':`The census remains **open**. The current catalog contains **${m.theories} entries**, **${m.relations} typed relationships**, **${m.trees} thought trees**, and **${m.sources} bibliography records** across **${m.categories} categories**. Provenance is attached to all entries: **${m.primarySourced} primary-sourced** and **${m.reviewSourced} review-sourced**. The formula atlas contains **${m.formulas} entries** across **${m.formulaCategories} categories**; **${m.formulaGaps}** theory entries remain documented formula gaps. Counts are generated from runtime data, separately from scientific review.`,
  'docs/COVERAGE.md':snapshot,
  'docs/FORMULA_AUDIT.md':snapshot,
  'docs/RELATION_PROVENANCE.md':`- **${m.relations}** total relationship edges\n- **${m.sourcedRelations}** source-backed\n- **${m.highConfidenceRelations}** high confidence\n- **${m.mediumConfidenceRelations}** medium confidence\n- **${m.editorialRelations}** explicitly editorial`,
  'docs/FORMULA_COVERAGE.md':`- **${m.formulas}** formula entries across **${m.formulaCategories}** categories\n- **${m.formulaBearing}** theory entries with linked formulas\n- **${m.formulaGaps}** documented formula gaps\n- **${m.explicitFormulaMetadata}** formulas with explicit metadata review; **${m.baselineFormulaMetadata}** with baseline metadata\n\n| Formula category | Entries |\n|---|---:|\n`+[...new Set(formulas.map(f=>f.category))].sort().map(cat=>`| ${cat} | ${count(formulas,'category',cat)} |`).join('\n')
};
const outputs=new Map([['docs/coverage.json',JSON.stringify(metrics,null,2)+'\n']]);
for(const [file,body] of Object.entries(sections)){
  const source=fs.readFileSync(file,'utf8');
  const pattern=/<!-- coverage:start -->[\s\S]*?<!-- coverage:end -->/;
  if(!pattern.test(source)) throw new Error(`Missing generated coverage markers in ${file}`);
  outputs.set(file,source.replace(pattern,`<!-- coverage:start -->\n${body}\n<!-- coverage:end -->`));
}
const stale=[];
for(const [file,expected] of outputs){
  if(process.argv.includes('--check')){
    if(!fs.existsSync(file)||fs.readFileSync(file,'utf8')!==expected) stale.push(file);
  }else fs.writeFileSync(file,expected);
}
if(stale.length) throw new Error(`Coverage is stale: ${stale.join(', ')}. Run npm run coverage.`);
console.log(process.argv.includes('--check')?'Generated coverage matches runtime data.':'Generated coverage reports updated.');
