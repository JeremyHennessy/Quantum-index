import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {loadRuntime} from './category-trust-census.mjs';

const ledger = JSON.parse(fs.readFileSync('research/DARK_MATTER_CANDIDATE_CENSUS_2026-10-29.json', 'utf8'));
const runtime = loadRuntime();
const theoryIds = new Set(runtime.QI_DATA.theories.map(x => x.id));
const sources = new Map(ledger.sourceIntake.map(x => [x.id, x]));
const allowed = new Set(['ADD', 'HOLD_ORIGIN', 'HOLD', 'SUBTYPE', 'MECHANISM_ONLY', 'FORMULA_ONLY', 'MODEL_ONLY', 'PROBLEM_ONLY', 'EVIDENCE_ONLY', 'RELATION_ONLY', 'ALREADY_COVERED']);

test('historical intake declares a fixed base, full source limitations and no release claim', () => {
  assert.equal(ledger.schemaVersion, 1);
  assert.equal(ledger.baselineMain, '228cd84230d0eaef8325dad4a94dc81ad8cf5a27');
  assert.equal(ledger.asOf, '2026-10-29');
  assert.equal(ledger.status, 'identity-and-source-intake-only');
  assert.match(ledger.sourceIntakeLimit, /no original full-text equation-page/i);
  assert.ok(ledger.nonClaims.some(x => /not.*shipped|no catalog records/i.test(x)));
  assert.equal(ledger.baselineStructuralCounts.theories, 483);
  assert.equal(ledger.baselineStructuralCounts.formulas, 460);
  assert.equal(ledger.baselineStructuralCounts.documentedFormulaGaps, 111);
  assert.equal(ledger.baselineStructuralCounts.sources, 610);
  assert.equal(ledger.baselineStructuralCounts.relations, 614);
  assert.ok(runtime.QI_DATA.theories.length >= ledger.baselineStructuralCounts.theories);
});

test('all catalog parents resolve, and no generated candidate identity is duplicated', () => {
  assert.equal(new Set(ledger.candidates.map(x=>x.id)).size, ledger.candidates.length);
  assert.equal(new Set(ledger.verifiedExistingTheoryIds).size, ledger.verifiedExistingTheoryIds.length);
  for (const id of ledger.verifiedExistingTheoryIds) assert.ok(theoryIds.has(id), 'missing historical dark-matter anchor: ' + id);
  for (const candidate of ledger.candidates) {
    assert.match(candidate.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(allowed.has(candidate.disposition), candidate.id);
    assert.ok(candidate.title?.trim() && candidate.reason?.trim() && candidate.nextGate?.trim(), candidate.id);
    assert.ok(Number.isInteger(candidate.priority) && candidate.priority >= 0 && candidate.priority <= 3, candidate.id);
    assert.equal(candidate.shipStatus, 'research-only-not-shipped');
    assert.ok(candidate.relatedTheoryIds.length > 0, 'unlinked proposal: ' + candidate.id);
    assert.equal(new Set(candidate.relatedTheoryIds).size, candidate.relatedTheoryIds.length, candidate.id);
    for (const parent of candidate.relatedTheoryIds) assert.ok(theoryIds.has(parent), candidate.id + ' unknown parent: ' + parent);
    if (candidate.disposition === 'ADD') assert.ok(candidate.sourceRefs.length, 'ADD needs verified identity source: ' + candidate.id);
    if (candidate.disposition === 'ALREADY_COVERED') assert.ok(candidate.relatedTheoryIds.some(id => theoryIds.has(id)), candidate.id);
  }
  // This is a dated, immutable intake. It must remain valid after approved later scientific releases.
  // Collision checks are meaningful only while the runtime still equals this intake's entity count.
  if (runtime.QI_DATA.theories.length === ledger.baselineStructuralCounts.theories) {
    for (const c of ledger.candidates.filter(x => x.disposition === 'ADD')) {
      assert.ok(!theoryIds.has(c.id), 'already present in exact baseline: '+ c.id);
    }
  }
});

test('source citations are real declared research evidence, without invented PDF math review', () => {
  assert.equal(new Set(sources.keys()).size, ledger.sourceIntake.length);
  assert.ok(ledger.sourceIntake.length >= 10);
  for (const s of ledger.sourceIntake) {
    assert.match(s.id, /^dm-[a-z0-9-]+$/);
    assert.ok(s.title?.trim() && s.authors?.trim() && s.inspected?.trim(), s.id);
    assert.ok(Number.isInteger(s.year) && s.year >= 1900 && s.year <= 2026, s.id);
    assert.match(s.url, /^https:\/\//, s.id);
    assert.ok(['primary','authoritative review'].includes(s.type), s.id);
    assert.match(s.inspected, /abstract|index/i, 'no claim to original math pages: ' + s.id);
    assert.doesNotMatch(s.inspected, /equation\s+\d+\s+was\s+verified/i);
  }
  for (const c of ledger.candidates) {
    assert.equal(new Set(c.sourceRefs).size,c.sourceRefs.length,c.id);
    for(const id of c.sourceRefs) assert.ok(sources.has(id),c.id+' broken sourceRef '+id);
    if(c.disposition==='HOLD_ORIGIN') assert.match(c.nextGate, /origin|original/i, c.id);
  }
});

test('historical ADD set is a small distinct first wave, not an unsupported all-DM completeness claim', () => {
  const add=ledger.candidates.filter(x=>x.disposition==='ADD');
  assert.deepEqual(add.map(x=>x.id),[
    'simp-relic','elder-relic','superfluid-dark-matter','dipolar-dark-matter',
    'atomic-dark-matter','dark-acoustic-oscillations'
  ]);
  assert.equal(ledger.candidates.length,56);
  assert.equal(ledger.stages.length,5);
  for(const stage of ledger.stages) assert.ok(stage.stage && stage.acceptance,stage.stage);
  const docs=fs.readFileSync('docs/DARK_MATTER_CAMPAIGN_2026-10-29.md','utf8');
  assert.match(docs,/no new dark-matter theory/i);
  assert.match(docs,/full texts and exact/i);
  assert.match(docs,/experimental|observational/i);
  assert.match(docs,/browser|Chromium/i);
});
