// Read-only category facts for a future completeness/trust view.
// This is not a scientific merit score or a source-verification certificate.
import fs from 'node:fs';
import vm from 'node:vm';
import {pathToFileURL} from 'node:url';

const runtimeFiles=[
  'theories.js','developments.js','evidence.js','formulas.js','formula-audit.js',
  'profiles.js','questions.js','problems.js','passports.js'
];

export function loadRuntime(directory='.') {
  const sandbox={window:{}};
  vm.createContext(sandbox);
  for(const file of runtimeFiles)vm.runInContext(fs.readFileSync(directory+'/'+file,'utf8'),sandbox,{filename:file});
  return sandbox.window;
}

export function buildCategoryTrustCensus(w) {
  if(!w?.QI_DATA?.theories||!w?.QI_FORMULAS?.formulas||!w?.QI_FORMULA_AUDIT?.entries||
     !w?.QI_PASSPORTS?.records||!w?.QI_EVIDENCE?.records||!w?.QI_PROFILES?.profiles)
    throw new Error('Missing required runtime collections');

  const {theories,relations}=w.QI_DATA;
  const formulas=w.QI_FORMULAS.formulas;
  const audits=w.QI_FORMULA_AUDIT.entries;
  const passports=w.QI_PASSPORTS.records;
  const evidence=w.QI_EVIDENCE.records;
  const profiles=w.QI_PROFILES.profiles;
  const groups=[...new Set(theories.map(t=>t.category))].sort();

  const categories=groups.map(name=>{
    const nodes=theories.filter(t=>t.category===name);
    const ids=new Set(nodes.map(t=>t.id));
    const auditRows=audits.filter(a=>ids.has(a.theoryId));
    // Formula records may link to several theories or categories. Count a record
    // once per category here, and NEVER sum this value across categories.
    const linkedFormulas=formulas.filter(f=>f.theoryIds.some(id=>ids.has(id)));
    const touchingEdges=relations.filter(r=>ids.has(r.from)||ids.has(r.to));
    const evidenceRecords=evidence.filter(r=>r.relatedTheoryIds.some(id=>ids.has(id)));
    const datedReviews=nodes.map(t=>t.lastReviewed).filter(d=>/^\\d{4}-\\d{2}-\\d{2}$/.test(d||'')).sort();
    return {
      category:name,
      theories:nodes.length,
      primarySourcedTheories:nodes.filter(t=>t.provenance==='primary-sourced').length,
      reviewSourcedTheories:nodes.filter(t=>t.provenance==='review-sourced').length,
      cataloguedOnlyTheories:nodes.filter(t=>t.provenance==='catalogued').length,
      formulaBearingTheories:auditRows.filter(a=>a.classification==='formula-bearing').length,
      documentedFormulaGapTheories:auditRows.filter(a=>a.classification==='formula-bearing-gap').length,
      linkedFormulaRecords:linkedFormulas.length,
      explicitMetadataFormulaRecords:linkedFormulas.filter(f=>f.metadataReview==='explicit').length,
      baselineMetadataFormulaRecords:linkedFormulas.filter(f=>f.metadataReview==='baseline-audit-v1').length,
      theoryPassports:passports.filter(p=>ids.has(p.theoryId)).length,
      readingProfiles:nodes.filter(t=>Object.hasOwn(profiles,t.id)).length,
      relatedEvidenceRecords:evidenceRecords.length,
      incidentRelations:touchingEdges.length,
      sourcedIncidentRelations:touchingEdges.filter(r=>r.sourceIds.length>0).length,
      editorialIncidentRelations:touchingEdges.filter(r=>r.confidence==='editorial').length,
      latestRecordedTheoryReview:datedReviews.at(-1)||null
    };
  });

  return {
    schemaVersion:1,
    meaning:'Structural coverage and provenance flags only, not a scientific correctness, completeness, or confidence rating.',
    countingRules:{
      theories:'Every theory appears in exactly one category.',
      linkedFormulaRecords:'Unique formula records incident to theories in the category; cross-category links may be counted in multiple rows.',
      relatedEvidenceRecords:'Unique Evidence records incident to theories in the category; not a measurement of universal empirical support.',
      incidentRelations:'Unique edges with at least one endpoint in the category; cross-category edges count in two rows.',
      latestRecordedTheoryReview:'Newest lastReviewed date recorded on a theory, not a guarantee of a fresh domain-wide research sweep.',
      primarySourcedTheories:'A source-provenance label does not imply every theory claim or relationship is independently established.'
    },
    totals:{
      categories:categories.length,
      theories:theories.length,
      relations:relations.length,
      sourcedRelations:relations.filter(r=>r.sourceIds.length>0).length,
      editorialRelations:relations.filter(r=>r.confidence==='editorial').length,
      formulaRecords:formulas.length,
      formulaBearingTheories:audits.filter(a=>a.classification==='formula-bearing').length,
      documentedFormulaGapTheories:audits.filter(a=>a.classification==='formula-bearing-gap').length,
      explicitlyReviewedFormulaRecords:formulas.filter(f=>f.metadataReview==='explicit').length,
      baselineMetadataFormulaRecords:formulas.filter(f=>f.metadataReview==='baseline-audit-v1').length,
      theoryPassports:passports.length,
      evidenceRecords:evidence.length
    },
    categories
  };
}

if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)
  console.log(JSON.stringify(buildCategoryTrustCensus(loadRuntime()),null,2));
