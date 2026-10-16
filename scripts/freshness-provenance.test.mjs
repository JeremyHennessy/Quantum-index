import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {isDocumentedLiteratureSweep} from './literature-review-evidence.mjs';

test('citation attachment and the historical lastReviewed field never qualify as literature sweeps',()=>{
  const sandbox={window:{}};
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync('theories.js','utf8'),sandbox);
  const theories=sandbox.window.QI_DATA.theories;
  const sources=new Set(sandbox.window.QI_DATA.sources.map(source=>source.id));
  const report=JSON.parse(fs.readFileSync('docs/freshness.json','utf8'));
  const documented=theories.filter(theory=>isDocumentedLiteratureSweep(theory,sources)).length;
  assert.ok(theories.every(theory=>theory.sources.length>0&&theory.lastReviewed));
  assert.equal(report.documentedLiteratureSweepCount,documented);
  assert.equal(report.unknownLiteratureReviewCount,theories.length-documented);
  assert.equal(report.staleLiteratureReviewCount,report.staleLiteratureReviewIds.length);
  assert.equal(documented,0,'no literatureSweep evidence exists yet; do not promote catalog dates');
  assert.equal(report.unknownLiteratureReviewCount,481);
});

test('a literature sweep requires a real review date, declared scope and resolving sources',()=>{
  const ids=new Set(['source-a']);
  const theory={lastReviewed:'2026-10-16',sources:['source-a']};
  assert.equal(isDocumentedLiteratureSweep(theory,ids),false);
  theory.literatureSweep={reviewedAt:'2026-10-16',scope:'2024-2026 papers',sourceIds:['not-registered']};
  assert.equal(isDocumentedLiteratureSweep(theory,ids),false);
  theory.literatureSweep.sourceIds=['source-a'];
  assert.equal(isDocumentedLiteratureSweep(theory,ids),true);
  theory.literatureSweep.reviewedAt='2026-19-77';
  assert.equal(isDocumentedLiteratureSweep(theory,ids),false);
  theory.literatureSweep.reviewedAt='2026-10-16';
  theory.literatureSweep.scope=' ';
  assert.equal(isDocumentedLiteratureSweep(theory,ids),false);
});
