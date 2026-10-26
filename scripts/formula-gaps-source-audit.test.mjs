import {readPreCiProjectSplitFile} from './ci-project-split-baseline.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {loadRuntime} from './category-trust-census.mjs';
import {projectPreFormulaGaps,readPreFormulaGapsFile} from './formula-gaps-baseline.mjs';
import {projectPreResponse} from './response-baseline.mjs';
import {projectPreThermal} from './thermal-baseline.mjs';
const audit=JSON.parse(fs.readFileSync('research/FORMULA_GAPS_SOURCE_AUDIT_2026-10-26.json'));
const ledger=JSON.parse(fs.readFileSync('research/FORMULA_GAPS_INTEGRITY_2026-10-26.json'));
const files=['theories.js','developments.js','evidence.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','passports.js'];
const prior={window:{}};vm.createContext(prior);
for(const file of files)vm.runInContext(readPreFormulaGapsFile(file,'utf8'),prior);
const old=prior.window,current=loadRuntime(),plain=value=>JSON.parse(JSON.stringify(value));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const targets=new Map(audit.formulas.map(f=>[f.theoryIds[0],f.id]));

test('gap integration is an exact three-formula five-source delta after the immutable draft PR101 checkpoint',()=>{
  assert.equal(audit.baselineCommit,'3e3bc1b6da8eed0e43ab96e98d69f990362b2f72');
  assert.equal(audit.baselineTree,'cabf849ab7f3bc66fa0ececdee09320b939af1f0');
  assert.deepEqual(audit.proposalCandidates.map(p=>p.sha256),['074ccd04fc4968ab8d5c999ccdda73accd2b775f506d6300d83397290855eabc','d1a580a3245132ddb6d6c656bcd68f50c6f2568f279c02982c2747f4b857e67d','a9c98f5c184592082d4574bd840375fc73e053b87939ed2361c3f30b5f02797d']);
  assert.equal(audit.formulas.length,3);assert.equal(audit.sources.length,5);assert.equal(audit.existingRecordChanges.length,1);
  assert.deepEqual(plain(current.QI_FORMULAS.formulas),[...plain(old.QI_FORMULAS.formulas),...audit.formulas]);
  const addedIds=new Set(audit.sources.map(s=>s.id));
  assert.deepEqual(plain(current.QI_DATA.sources.filter(s=>!addedIds.has(s.id))),plain(old.QI_DATA.sources));
  assert.deepEqual(plain(current.QI_DATA.sources.filter(s=>addedIds.has(s.id))),audit.sources);
  for(const key of Object.keys(old.QI_DATA))if(!['sources','theories'].includes(key))assert.deepEqual(plain(current.QI_DATA[key]),plain(old.QI_DATA[key]),key);
  for(const key of Object.keys(old.QI_FORMULAS))if(key!=='formulas')assert.deepEqual(plain(current.QI_FORMULAS[key]),plain(old.QI_FORMULAS[key]),key);
  for(const key of Object.keys(old))if(!['QI_DATA','QI_FORMULAS','QI_FORMULA_AUDIT'].includes(key))assert.deepEqual(plain(current[key]),plain(old[key]),key);
  assert.equal(current.QI_FORMULAS.formulas.length,460);assert.equal(current.QI_DATA.sources.length,610);
  assert.equal(current.QI_FORMULAS.formulas.filter(f=>f.metadataReview==='explicit').length,274);
  assert.equal(current.QI_FORMULAS.formulas.filter(f=>f.metadataReview==='baseline-audit-v1').length,186);
});

test('only the declared modern CP source is appended to quantum-instruments, with all other entity fields preserved',()=>{
  const change=audit.existingRecordChanges[0];
  assert.equal(change.collection,'QI_DATA.theories');assert.equal(change.id,'quantum-instruments');assert.equal(change.field,'sources');
  assert.deepEqual(change.before,['davies-lewis-1970']);assert.deepEqual(change.after,['davies-lewis-1970','okamura-ozawa-instruments-2016']);
  const original=old.QI_DATA.theories.find(t=>t.id===change.id);assert.deepEqual(plain(original.sources),change.before);
  const expected=plain(old.QI_DATA.theories).map(t=>t.id===change.id?{...t,sources:change.after}:t);
  assert.deepEqual(plain(current.QI_DATA.theories),expected);
  assert.match(change.sourceMapping[0].scope,/original definition not directly inspected/);
  assert.match(change.sourceMapping[1].scope,/Definition III\.1/);
});

test('three derived gap transitions preserve every other audit row, including inherited entity review dates',()=>{
  for(const [id,formulaId]of targets){
    const before=old.QI_FORMULA_AUDIT.entries.find(r=>r.theoryId===id),after=current.QI_FORMULA_AUDIT.entries.find(r=>r.theoryId===id);
    assert.deepEqual(plain(old.QI_FORMULAS.formulas.filter(f=>f.theoryIds.includes(id))),[]);
    assert.equal(before.classification,'formula-bearing-gap');
    assert.deepEqual(plain(after),{...plain(before),classification:'formula-bearing',coverageStatus:'covered',formulaIds:[formulaId],gapReason:null,priority:'not-applicable',auditBasis:'source-linked formula present'});
    assert.equal(after.reviewedAt,before.reviewedAt);
    assert.equal(current.QI_FORMULAS.formulas.find(f=>f.id===formulaId).reviewedAt,'2026-10-26');
  }
  for(const row of old.QI_FORMULA_AUDIT.entries)if(!targets.has(row.theoryId))assert.deepEqual(plain(current.QI_FORMULA_AUDIT.entries.find(r=>r.theoryId===row.theoryId)),plain(row));
  for(const key of Object.keys(old.QI_FORMULA_AUDIT))if(key!=='entries')assert.deepEqual(plain(current.QI_FORMULA_AUDIT[key]),plain(old.QI_FORMULA_AUDIT[key]));
  assert.equal(current.QI_FORMULA_AUDIT.entries.filter(r=>r.classification==='formula-bearing').length,326);
  assert.equal(current.QI_FORMULA_AUDIT.entries.filter(r=>r.classification==='formula-bearing-gap').length,111);
  const kms=current.QI_DATA.theories.find(t=>t.id==='kms-equilibrium');
  assert.equal(kms.provenance,'review-sourced');assert.equal(kms.year,1957);assert.equal(kms.lastReviewed,'2026-09-22');
});

test('KMS card retains full scalar-strip quantification, physical-time conventions and exact source locations',()=>{
  const f=audit.formulas[0];assert.equal(f.id,'kms-equilibrium-boundary');assert.equal(f.formulaType,'defining');
  assert.deepEqual(f.theoryIds,['kms-equilibrium']);assert.deepEqual(f.sourceIds,['araki-moriya-equilibrium-2003']);
  assert.match(f.latex,/\\forall A,B/);assert.match(f.latex,/C_b/);assert.match(f.latex,/\\mathcal O/);
  assert.ok(f.latex.includes('t+i\\beta\\hbar'));assert.ok(f.latex.includes('\\omega(\\alpha_t(B)A)'));
  assert.match(f.plain,/continuous and bounded/);assert.match(f.plain,/analytic inside/);assert.match(f.plain,/every real t/);
  assert.match(f.assumptions.join(' '),/positive normalized/);assert.match(f.assumptions.join(' '),/continuous in norm/);
  assert.match(f.assumptions.join(' '),/not just selected observables/);assert.match(f.assumptions.join(' '),/scalar function/);
  assert.match(f.regime,/without a global trace-class/);assert.match(f.regime,/neither guarantees relaxation/);assert.match(f.regime,/nor asserts a unique/);
  assert.deepEqual(f.sourceLocations.map(l=>l.url),['https://arxiv.org/pdf/math-ph/0211016v2#page=41','https://arxiv.org/pdf/math-ph/0211016v2#page=31']);
  assert.match(f.sourceLocations[0].locator,/Definition 6\.1\(A\)/);assert.doesNotMatch(f.sourceLocations[0].locator,/Eq\. \(6\.1\)/);
  assert.match(f.sourceLocations[1].locator,/Eq\. \(5\.2\)/);
});

test('instrument card keeps finite CP branches, zero-probability exclusion and primary-source role distinctions',()=>{
  const f=audit.formulas[1];assert.equal(f.id,'finite-quantum-instrument-conditioning');assert.equal(f.formulaType,'defining');
  assert.deepEqual(f.theoryIds,['quantum-instruments']);assert.deepEqual(f.sourceIds,['ozawa-finite-instruments-2023','okamura-ozawa-instruments-2016']);
  assert.match(f.plain,/only for p_a > 0/);assert.match(f.plain,/Each I_a is completely positive/);
  assert.match(f.assumptions.join(' '),/Finite nonempty outcome/);assert.match(f.assumptions.join(' '),/act linearly/);
  assert.match(f.assumptions.join(' '),/trace-nonincreasing, not generally trace preserving/);
  assert.match(f.assumptions.join(' '),/rho_a is undefined/);assert.match(f.assumptions.join(' '),/zero operator as a normalized posterior/);
  assert.match(f.regime,/No repeatability, projectivity, purity or single-Kraus restriction/);
  assert.match(f.theoryRelationship,/CP is a later additional condition/);
  assert.deepEqual(f.sourceLocations.map(l=>l.url),['https://arxiv.org/pdf/2110.03219v2#page=20','https://arxiv.org/pdf/2110.03219v2#page=21','https://arxiv.org/pdf/1501.00239v3#page=7']);
  assert.match(f.sourceLocations[0].locator,/Eqs\. \(53\)-\(54\)/);assert.match(f.sourceLocations[1].locator,/Eqs\. \(57\)-\(61\)/);assert.match(f.sourceLocations[2].locator,/Definition III\.1/);
  for(const f of audit.formulas){assert.equal(f.metadataReview,'explicit');for(const l of f.sourceLocations)assert.ok(f.sourceIds.includes(l.sourceId));}
});

test('registration fails closed before modifying runtime for duplicate IDs, changed entity sources and already-closed gaps',()=>{
  const make=()=>{const s={window:{}};vm.createContext(s);for(const f of ['theories.js','formulas.js'])vm.runInContext(readPreFormulaGapsFile(f,'utf8'),s);return s;};
  const sourceAddition=fs.readFileSync('theories.js','utf8').slice(ledger.files['theories.js'].beforeText.length);
  const formulaAddition=fs.readFileSync('formulas.js','utf8').slice(ledger.files['formulas.js'].beforeText.length);
  for(const source of audit.sources){const s=make();s.window.QI_DATA.sources.push(source);const before=plain(s.window);assert.throws(()=>vm.runInContext(sourceAddition,s),/Duplicate formula-gap source/);assert.deepEqual(plain(s.window),before);}
  {const s=make();s.window.QI_DATA.theories.find(t=>t.id==='quantum-instruments').sources.push('unreviewed');const before=plain(s.window);assert.throws(()=>vm.runInContext(sourceAddition,s),/Unexpected quantum-instruments source baseline/);assert.deepEqual(plain(s.window),before);}
  for(const formula of audit.formulas)for(const duplicate of [true,false]){const s=make();s.window.QI_FORMULAS.formulas.push({...formula,id:duplicate?formula.id:'unreviewed-gap-card'});const before=plain(s.window);assert.throws(()=>vm.runInContext(formulaAddition,s),duplicate?/Duplicate formula-gap formula/:/Unexpected formula-gap baseline/);assert.deepEqual(plain(s.window),before);}
});

test('serial gap, response and thermal projections restore exact checkpoints and reject undeclared or stale input bytes',()=>{
  assert.equal(ledger.baselineCommit,audit.baselineCommit);assert.equal(ledger.baselineTree,audit.baselineTree);
  for(const [file,entry]of Object.entries(ledger.files)){
    const raw=fs.readFileSync(file);assert.equal(hash(readPreCiProjectSplitFile(file)),entry.afterSha256,file);
    assert.equal(hash(readPreFormulaGapsFile(file)),entry.beforeSha256,file);assert.equal(readPreFormulaGapsFile(file,'utf8'),entry.beforeText,file);
    assert.throws(()=>projectPreFormulaGaps(Buffer.concat([raw,Buffer.from('undeclared')]),file),/undeclared (?:formula-gap integration|CI project-split) mutation/);
    assert.throws(()=>projectPreFormulaGaps(Buffer.from(entry.beforeText),file),/undeclared (?:formula-gap integration|CI project-split) mutation/);
  }
  for(const [file,expected]of Object.entries(ledger.unchangedFiles))assert.equal(hash(readPreCiProjectSplitFile(file)),expected,file);
  for(const [file,expected]of Object.entries(ledger.newFiles))assert.equal(hash(readPreCiProjectSplitFile(file)),expected,file);
  for(const [file,entry]of Object.entries(JSON.parse(fs.readFileSync('research/RESPONSE_INTEGRITY_2026-10-25.json')).files)){
    const raw=fs.readFileSync(file);assert.equal(hash(readPreFormulaGapsFile(file)),entry.afterSha256,file+': PR101');
    assert.equal(projectPreResponse(raw,file).toString(),entry.beforeText,file+': PR100');
    assert.throws(()=>projectPreResponse(Buffer.concat([raw,Buffer.from('undeclared')]),file));
  }
  for(const [file,entry]of Object.entries(JSON.parse(fs.readFileSync('research/THERMAL_INTEGRITY_2026-10-25.json')).files)){
    const raw=fs.readFileSync(file);assert.equal(hash(projectPreResponse(raw,file)),entry.afterSha256,file+': PR100');
    assert.equal(projectPreThermal(raw,file).toString(),entry.beforeText,file+': PR99');
    assert.throws(()=>projectPreThermal(Buffer.concat([raw,Buffer.from('undeclared')]),file));
  }
});

test('all historical response assertions survive exact declared projection substitutions',()=>{
  let expected="import {projectPreFormulaGaps} from './formula-gaps-baseline.mjs';\n"+ledger.files['scripts/response-baseline.mjs'].beforeText;
  expected=expected.replace('export function projectPreResponse(bytes,relative){','export function projectPreResponse(bytes,relative){\n  bytes=projectPreFormulaGaps(bytes,relative);');
  assert.equal(fs.readFileSync('scripts/response-baseline.mjs','utf8'),expected);
  expected="import {readPreFormulaGapsFile} from './formula-gaps-baseline.mjs';\n"+ledger.files['scripts/response-source-audit.test.mjs'].beforeText;
  expected=expected.replace('current=loadRuntime()',"current=(()=>{const s={window:{}};vm.createContext(s);for(const f of files)vm.runInContext(readPreFormulaGapsFile(f,'utf8'),s);return s.window;})()");
  expected=expected.replace('hash(fs.readFileSync(file)),expected,file);','hash(readPreFormulaGapsFile(file)),expected,file);');
  assert.equal(readPreCiProjectSplitFile('scripts/response-source-audit.test.mjs','utf8'),expected);
});

test('existing browser assertions change only exact current totals, not interactions or expectations',()=>{
  let expected=ledger.files['tests/browser/filter-controls.spec.mjs'].beforeText.replace("'0 / 457 formulas'","'0 / 460 formulas'").replace("'457 / 457 formulas'","'460 / 460 formulas'");
  assert.equal(fs.readFileSync('tests/browser/filter-controls.spec.mjs','utf8'),expected);
  expected=ledger.files['tests/browser/repository-links.spec.mjs'].beforeText.replace("toContain('271')","toContain('274')");
  assert.equal(fs.readFileSync('tests/browser/repository-links.spec.mjs','utf8'),expected);
});

test('independent finite KMS matrix-basis checks, invariances and six convention-negative controls pass',()=>{
  const r=spawnSync('python3',['scripts/kms-math-check.py'],{encoding:'utf8'});assert.equal(r.status,0,r.error?.message||r.stderr);
  const out=JSON.parse(r.stdout);assert.equal(out.passed,true);
  assert.deepEqual(out.counts,{matrix_unit_boundary_checks:16200,dense_complex_boundary_checks:60,energy_shift_checks:60,unitary_basis_checks:60,negative_controls:6});
  assert.ok(out.maximum_positive_residual<2e-11);assert.equal(out.correct_two_level_upper_boundary,.25);
  assert.equal(Object.keys(out.negative_control_residuals).length,6);for(const residual of Object.values(out.negative_control_residuals))assert.ok(residual>.1);
});

test('independent finite instrument checks retain multi-Kraus, null-outcome and non-CP negative witnesses',()=>{
  const r=spawnSync('python3',['scripts/instrument-math-check.py'],{encoding:'utf8'});assert.equal(r.status,0,r.error?.message||r.stderr);
  const out=JSON.parse(r.stdout);assert.equal(out.passed,true);assert.equal(out.groups,10);
});

test('DGLAP representative preserves LO spacelike density, coupling, index, endpoint and primary-source conventions',()=>{
  const f=audit.formulas[2];assert.equal(f.id,'dglap-spacelike-lo-pdf-evolution');assert.equal(f.formulaType,'approximation');
  assert.deepEqual(f.theoryIds,['dglap-evolution']);assert.deepEqual(f.sourceIds,['salam-rojo-hoppet-2009','botje-qcdnum-2011']);
  assert.match(f.plain,/leading order/);assert.match(f.plain,/alpha_s\/\(2 pi\)/);assert.match(f.plain,/ln\(mu_F\^2\/mu_0\^2\)/);
  assert.match(f.plain,/integral_x\^1 dz P\(z\) f\(x\/z\)\/z/);
  const assumptions=f.assumptions.join(' '),variables=f.variables.join(' ');
  assert.match(assumptions,/fixed number n_f/);assert.match(assumptions,/No heavy-flavor threshold/);assert.match(assumptions,/MSbar/);
  assert.match(assumptions,/O\(a_s\^2\) and higher terms are omitted/);assert.match(assumptions,/Never apply both normalizations/);
  assert.match(assumptions,/phi\(1\) ln\(1-x\)/);assert.match(assumptions,/plus on the whole fraction and no additional delta term/);
  assert.match(variables,/not the momentum density F_i=x f_i/);assert.match(variables,/child i as its first index and parent j as its second/);
  assert.match(variables,/factor of two/);assert.match(variables,/2 n_f/);assert.match(variables,/multiplicity does not belong in an individual-flavor entry/);
  assert.match(variables,/explicit 1\/z measure disappears/);assert.match(f.regime,/not time-like fragmentation/);
  assert.match(f.regime,/not a complete higher-order/);assert.match(f.theoryRelationship,/full equations were not inspected/);
  assert.deepEqual(f.sourceLocations.map(l=>l.url),['https://arxiv.org/pdf/0804.3755v1#page=4','https://arxiv.org/pdf/0804.3755v1#page=7','https://arxiv.org/pdf/1005.1481v3#page=8','https://arxiv.org/pdf/1005.1481v3#page=26','https://arxiv.org/pdf/1005.1481v3#page=62']);
  assert.match(f.sourceLocations[0].locator,/Eq\. \(1\)/);assert.match(f.sourceLocations[1].locator,/Eqs\. \(3\)-\(4\)/);
  assert.match(f.sourceLocations[4].locator,/Eqs\. \(A\.2\)-\(A\.5\)/);
  assert.equal(f.metadataReview,'explicit');assert.equal(f.reviewedAt,'2026-10-26');
  for(const l of f.sourceLocations)assert.ok(f.sourceIds.includes(l.sourceId));
  const oldTheory=old.QI_DATA.theories.find(t=>t.id==='dglap-evolution');
  assert.ok(oldTheory.sources.includes('wave3-altarelli-parisi-1977'));
  assert.deepEqual(plain(current.QI_DATA.theories.find(t=>t.id===oldTheory.id)),plain(oldTheory));
});

test('DGLAP standard-library regression retains exact moments, distribution actions and rejected negative witnesses without new CI dependencies',()=>{
  assert.equal(audit.dglapCheckInputs.proposalMathSha256,'350bee42f7bdf48334a89f0fe6984c74c11c75a07cd001d2a847fcdf9e0b5aa4');
  assert.equal(hash(fs.readFileSync('scripts/dglap-math-check.py')),audit.dglapCheckInputs.proposalMathSha256);
  assert.equal(audit.dglapCheckInputs.independentStdlibMathSha256,'fe0f10eee137415a1ff0bcf49e13ce4f4ae7f220526772b12bc3dd99d6e03dea');
  // Reconstruct only the original I/O wrapper; every mathematical byte must match.
  const original=fs.readFileSync('scripts/dglap-stdlib-check.py','utf8')
    .replace('import json, math\n','import json, math\nfrom pathlib import Path\nR=Path(__file__).resolve().parent\n')
    .replace('print(json.dumps(result,indent=2))',"(R/'independent-math-results.json').write_text(json.dumps(result,indent=2)+'\\n')\nprint(json.dumps({'passed':True,'exactChecks':len(checks),'negativeControls':len(rejects),'numericalPoints':len(num)},indent=2))");
  assert.equal(hash(original),audit.dglapCheckInputs.independentStdlibMathSha256);
  const r=spawnSync('python3',['-S','scripts/dglap-stdlib-check.py'],{encoding:'utf8'});assert.equal(r.status,0,r.error?.message||r.stderr);
  const out=JSON.parse(r.stdout);assert.equal(out.passed,true);assert.equal(out.exactChecks.length,12);assert.equal(out.negativeControls.length,6);assert.equal(out.numericalChecks.length,3);
  for(const row of out.exactChecks)assert.equal(row.passed,true);
  for(const row of out.negativeControls){assert.equal(row.rejected,true);assert.notEqual(row.nonzeroViolation,'0');}
  for(const row of out.numericalChecks)assert.equal(row.passed,true);
});
