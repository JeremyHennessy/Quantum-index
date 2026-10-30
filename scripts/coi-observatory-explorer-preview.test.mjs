import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';

const sourcePath='research/COI0_OBSERVATORY_AND_RELEASE_CENSUS_2026-10-30.json';
const mirrorPath='docs/observatory-registry.json';
const source=fs.readFileSync(sourcePath),mirror=fs.readFileSync(mirrorPath);
const digest=bytes=>createHash('sha256').update(bytes).digest('hex');
const data=JSON.parse(mirror.toString('utf8'));
const html=fs.readFileSync('docs/observatory-explorer.html','utf8');
const css=fs.readFileSync('docs/observatory-explorer.css','utf8');
const js=fs.readFileSync('docs/observatory-explorer.js','utf8');
const uniq=(values,label)=>assert.equal(new Set(values).size,values.length,'Duplicate '+label);

test('observatory preview mirrors exactly the approved research-only candidate bytes',()=>{
  assert.equal(digest(mirror),digest(source),'No unreviewed data rewriting or silent metadata drift');
  assert.equal(data.publicationStatus,'RESEARCH_ONLY_NOT_RUNTIME');
  assert.equal(data.programmes.length,30);
  assert.equal(data.sources.length,28);
  assert.equal(data.releases.length,18);
  assert.equal(data.studies.length,6);
  assert.equal(data.milestones.length,6);
});

test('programme IDs, release links, source links, and Problem navigation remain honest',()=>{
  uniq(data.programmes.map(x=>x.id),'programme');
  uniq(data.sources.map(x=>x.id),'source');
  uniq(data.releases.map(x=>x.id),'release');
  uniq(data.studies.map(x=>x.id),'study');
  uniq(data.milestones.map(x=>x.id),'milestone');
  const programs=new Set(data.programmes.map(x=>x.id));
  const sources=new Set(data.sources.map(x=>x.id));
  for(const program of data.programmes){
    for(const source of program.sourceIds)assert.ok(sources.has(source),'Unknown source '+source);
    assert.equal(program.evidencePromotion,false);
  }
  for(const record of data.releases){
    assert.ok(programs.has(record.programmeId));
    for(const source of record.sourceIds)assert.ok(sources.has(source));
    assert.equal(record.claimReviewStatus,'discovery-metadata-only');
    if(record.access==='rights-restricted-observational-products')assert.notEqual(record.access,'public-observational-products');
  }
  for(const study of data.studies)assert.equal(study.evidencePromoted,false);
  for(const milestone of data.milestones){
    assert.ok(programs.has(milestone.programmeId));
    for(const source of milestone.sourceIds)assert.ok(sources.has(source));
    assert.equal(milestone.confirmedActual,milestone.state!=='planned');
  }
});

test('observatory explorer is isolated from accepted app runtime and is not a science-verdict generator',()=>{
  assert.match(html,/Observatory Explorer/);
  assert.match(html,/id="programmeList"/);
  assert.match(html,/id="programmeDetail"/);
  assert.match(html,/id="milestoneList"/);
  assert.match(html,/href="\.\.\/index\.html#\/explore"/);
  assert.match(js,/RESEARCH_ONLY_NOT_RUNTIME/);
  assert.match(js,/accessLabels/);
  assert.match(js,/Access restricted/);
  assert.match(js,/Planned \/ no public product/);
  assert.match(js,/No release has been indexed/);
  assert.doesNotMatch(js,/document\.write\(|eval\(|new Function\(|localStorage|sessionStorage/);
  assert.doesNotMatch(html,/\bcdn\.|google-analytics|doubleclick/);
  assert.ok(css.includes('@media(max-width:760px)'));
  for(const file of ['index.html','app.js','theories.js','formulas.js','evidence.js','workspace.js']){
    assert.ok(!fs.readFileSync(file,'utf8').includes('observatory-explorer'),'Original approved renderer must remain unaltered');
  }
});

test('source URL link rendering is HTTPS and disclosure scopes stay intact',()=>{
  for(const row of data.sources){
    assert.match(row.url,/^https:\/\//,'Official source must use HTTPS');
    assert.equal(row.checkedAt,data.reviewedAt);
    assert.ok(row.reviewScope);
  }
  const desi=data.releases.find(x=>x.id==='desi-dr2-analysis');
  assert.equal(desi.availableOn,'2025-10-06');
  assert.equal(desi.access,'public-analysis-products-only');
  assert.match(desi.reviewNotes,/NOT publicly released/);
  const roman=data.releases.find(x=>x.id==='roman-future');
  assert.equal(roman.access,'planned-no-observational-products');
  const euclid=data.releases.find(x=>x.id==='euclid-dr1-foundation');
  assert.equal(euclid.access,'planned-no-observational-products');
});
