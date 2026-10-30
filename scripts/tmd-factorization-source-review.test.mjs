import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {loadRuntime} from './category-trust-census.mjs';

const runtime=loadRuntime();
const note=fs.readFileSync('research/TMD_FACTORISATION_SOURCE_REVIEW_2026-10-30.md','utf8');

test('TMD candidate remains distinct from existing SCET and DGLAP catalog entries',()=>{
 const ids=new Set(runtime.QI_DATA.theories.map(t=>t.id));
 assert.ok(ids.has('soft-collinear-effective-theory'));
 assert.ok(ids.has('dglap-evolution'));
 assert.ok(!ids.has('transverse-momentum-dependent-factorization'));
 assert.ok(!ids.has('tmd-factorization'));
 assert.match(note,/CANDIDATE_DISTINCT_FRAMEWORK_HOLD_HISTORY_AND_GRANULARITY/);
 assert.match(note,/No theory, formula, source citation, relationship, UI, or generated runtime file is added/);
});

test('TMD source review constrains low-qT Drell-Yan and records process-specific factorization breaking',()=>{
 assert.match(note,/arxiv\.org\/pdf\/1111\.4996v3/);
 assert.match(note,/Eq\. \(1\.1\)/);
 assert.match(note,/Lambda_QCD << q_T << Q/);
 assert.match(note,/arxiv\.org\/pdf\/1307\.2920v1/);
 assert.match(note,/Eqs\. \(2\)–\(4\)/);
 assert.match(note,/q_T << Q/);
 assert.match(note,/matching term for a formula valid across all transverse momenta/);
 assert.match(note,/arxiv\.org\/pdf\/0705\.2141v2/);
 assert.match(note,/back-to-back high-`p_T` hadron production/);
 assert.match(note,/Drell–Yan and SIDIS/);
 assert.match(note,/do not establish a single canonical origin year/);
});
