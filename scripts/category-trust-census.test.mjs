import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {buildCategoryTrustCensus,loadRuntime} from './category-trust-census.mjs';

const census=buildCategoryTrustCensus(loadRuntime());
const coverage=JSON.parse(fs.readFileSync('docs/coverage.json','utf8'));

test('category trust census agrees with the generated global source of truth',()=>{
  for(const [actual,expected] of [
    [census.totals.categories,coverage.categories],
    [census.totals.theories,coverage.theories],
    [census.totals.relations,coverage.relations],
    [census.totals.sourcedRelations,coverage.sourcedRelations],
    [census.totals.editorialRelations,coverage.editorialRelations],
    [census.totals.formulaRecords,coverage.formulas],
    [census.totals.formulaBearingTheories,coverage.formulaBearing],
    [census.totals.documentedFormulaGapTheories,coverage.formulaGaps],
    [census.totals.explicitlyReviewedFormulaRecords,coverage.explicitFormulaMetadata],
    [census.totals.baselineMetadataFormulaRecords,coverage.baselineFormulaMetadata],
    [census.totals.theoryPassports,coverage.passports],
    [census.totals.evidenceRecords,coverage.evidenceRecords]
  ])assert.equal(actual,expected);
  assert.equal(census.schemaVersion,1);
  assert.equal(census.categories.length,coverage.categories);
  assert.equal(new Set(census.categories.map(c=>c.category)).size,census.categories.length);
});

test('only partitionable per-theory counts are summed across category rows',()=>{
  const sum=key=>census.categories.reduce((n,c)=>n+c[key],0);
  assert.equal(sum('theories'),coverage.theories);
  assert.equal(sum('primarySourcedTheories'),coverage.primarySourced);
  assert.equal(sum('reviewSourcedTheories'),coverage.reviewSourced);
  assert.equal(sum('cataloguedOnlyTheories'),coverage.cataloguedOnly);
  assert.equal(sum('formulaBearingTheories'),coverage.formulaBearing);
  assert.equal(sum('documentedFormulaGapTheories'),coverage.formulaGaps);
  assert.equal(sum('theoryPassports'),coverage.passports);
  assert.equal(sum('readingProfiles'),coverage.researchProfiles);
  for(const c of census.categories){
    assert.ok(c.theories>0,c.category);
    assert.equal(c.primarySourcedTheories+c.reviewSourcedTheories+c.cataloguedOnlyTheories,c.theories);
    assert.ok(c.formulaBearingTheories+c.documentedFormulaGapTheories<=c.theories,c.category);
    assert.ok(c.explicitMetadataFormulaRecords+c.baselineMetadataFormulaRecords<=c.linkedFormulaRecords,c.category);
    assert.ok(c.sourcedIncidentRelations+c.editorialIncidentRelations<=c.incidentRelations,c.category);
    assert.ok(c.relatedEvidenceRecords<=coverage.evidenceRecords,c.category);
    assert.ok(c.theoryPassports<=c.theories,c.category);
  }
});

test('overlapping relation and formula counts remain identified as non-additive, not scientific scores',()=>{
  assert.match(census.meaning,/not a scientific correctness/);
  assert.match(census.countingRules.incidentRelations,/cross-category edges count in two rows/);
  assert.match(census.countingRules.linkedFormulaRecords,/cross-category links may be counted in multiple rows/);
  assert.match(census.countingRules.latestRecordedTheoryReview,/not a guarantee/);
  assert.ok(census.categories.some(c=>c.incidentRelations>c.sourcedIncidentRelations));
  assert.ok(census.categories.some(c=>c.latestRecordedTheoryReview!==null),'Expected real recorded theory review dates');
  for(const c of census.categories)if(c.latestRecordedTheoryReview!==null)assert.match(c.latestRecordedTheoryReview,/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/);
  assert.throws(()=>buildCategoryTrustCensus({}),/Missing required runtime collections/);
});
