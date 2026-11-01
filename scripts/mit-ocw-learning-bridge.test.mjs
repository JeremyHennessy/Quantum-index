// Research-only integrity checks. No runtime/catalog data or UI changes.
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
import assert from 'node:assert/strict';

const crosswalk = JSON.parse(fs.readFileSync('research/MIT_OCW_QUANTUM_LEARNING_BRIDGE_2026-11-01.json', 'utf8'));
const guide = fs.readFileSync('docs/MIT_OCW_QUANTUM_LEARNING_2026-11-01.md', 'utf8');
const context = {window: {}};
vm.createContext(context);
vm.runInContext(fs.readFileSync('theories.js', 'utf8'), context, {filename:'theories.js'});
vm.runInContext(fs.readFileSync('formulas.js', 'utf8'), context, {filename:'formulas.js'});
const theoryIds = new Set(context.window.QI_DATA.theories.map(t=>t.id));
const formulaIds = new Set(context.window.QI_FORMULAS.formulas.map(f=>f.id));

test('MIT OCW batch is explicitly pedagogical and not a shipped scientific claim', () => {
  assert.equal(crosswalk.schemaVersion, 1);
  assert.equal(crosswalk.publicationStatus, 'research-only-not-shipped');
  assert.equal(crosswalk.provenanceClass, 'pedagogical-course-material');
  assert.match(crosswalk.governingRule, /experimental verification/);
  assert.match(crosswalk.linkingRule, /not modifications, new graph edges/);
  assert.match(crosswalk.reuseRule, /No course PDFs, figures/);
  assert.match(guide, /not published in the Quantum Index UI/);
  assert.match(guide, /Issue #128/);
});

test('all five source-located lessons map only to existing exact catalog identities', () => {
  assert.equal(crosswalk.lessons.length, 5);
  const lessonIds = new Set();
  const courses = new Set();
  for (const lesson of crosswalk.lessons) {
    assert.ok(!lessonIds.has(lesson.id), 'duplicate lesson ' + lesson.id);
    lessonIds.add(lesson.id);
    courses.add(lesson.courseCode);
    assert.match(lesson.id, /^ocw-/);
    assert.ok(lesson.title.length > 15);
    assert.ok(lesson.lecturer.length > 4);
    assert.match(lesson.term, /20\d{2}/);
    assert.ok(lesson.coursePage.startsWith('https://ocw.mit.edu/courses/'));
    assert.ok(lesson.unitUrl.startsWith('https://ocw.mit.edu/courses/'));
    assert.ok(lesson.unitUrl.endsWith('.pdf'));
    assert.ok(guide.includes(lesson.unitUrl), 'guide missing course PDF ' + lesson.id);
    assert.ok(lesson.locators.length >= 1);
    assert.ok(lesson.locators.every(s => /printed p|printed pp/.test(s) && /section|Lecture|Chapter/.test(s)), lesson.id);
    assert.ok(lesson.theoryIds.length > 0);
    for (const id of lesson.theoryIds) assert.ok(theoryIds.has(id), 'unknown theory ' + id);
    for (const id of lesson.formulaIds) assert.ok(formulaIds.has(id), 'unknown formula ' + id);
    assert.ok(lesson.usefulAddition.length > 40);
    assert.ok(lesson.selfWorkedCheck.length > 70);
    assert.ok(lesson.assumptions.length > 25);
    assert.ok(lesson.nonClaims.length >= 2);
  }
  assert.deepEqual([...courses].sort(), ['18.435J', '8.05', '8.06', '8.324']);
});

test('Bell pair and small-coupling perturbation calculations are internally consistent', () => {
  const a = 1/Math.sqrt(2);
  const bellCoefficientDeterminant = a*a;
  const reducedQubitP0 = a*a;
  const reducedQubitP1 = a*a;
  assert.ok(Math.abs(bellCoefficientDeterminant - 0.5) < 1e-14);
  assert.ok(Math.abs(reducedQubitP0 + reducedQubitP1 - 1) < 1e-14);
  assert.equal(reducedQubitP0, reducedQubitP1);

  const delta = 2;
  const epsilon = 0.4;
  const lambda = 0.001;
  const exactGround = (delta - Math.sqrt(delta*delta + 4*lambda*lambda*epsilon*epsilon))/2;
  const secondOrderGround = -lambda*lambda*epsilon*epsilon/delta;
  assert.ok(Math.abs(exactGround-secondOrderGround) < 1e-12, 'nondegenerate expansion');
  assert.ok(epsilon*lambda / delta < 1e-3);
});

test('QEC lesson warns that repetition code cannot detect logical phase flips', () => {
  const qec = crosswalk.lessons.find(l => l.id === 'ocw-18435-qec-repetition');
  assert.ok(qec);
  assert.deepEqual(qec.formulaIds, [], 'do not misattribute general Knill-Laflamme source');
  assert.match(qec.selfWorkedCheck, /Z on qubit 1/);
  assert.match(qec.selfWorkedCheck, /checks \+1/);
  assert.ok(qec.nonClaims.some(text => /not cloning/.test(text)));
  assert.ok(qec.nonClaims.some(text => /Knill.Laflamme/.test(text)));
});

test('non-Abelian formula convention is explicit rather than silently replacing approved cards', () => {
  const ym = crosswalk.lessons.find(l => l.id === 'ocw-8324-yang-mills-conventions');
  assert.ok(ym);
  assert.match(ym.assumptions, /D_mu=partial_mu-i g A_mu/);
  assert.match(ym.selfWorkedCheck, /commutator term vanishes/);
  assert.ok(ym.nonClaims.some(text=>/before modifying existing records/.test(text)));
});
