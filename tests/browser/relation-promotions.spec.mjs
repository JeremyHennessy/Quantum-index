import {test,expect} from '@playwright/test';
import {readFileSync} from 'node:fs';
const coverage=JSON.parse(readFileSync(new URL('../../docs/coverage.json',import.meta.url),'utf8'));


const promoted = [
  {from:'renormalization-group',to:'functional-rg',other:'Functional renormalization group',source:'wetterich-1993',sourceUrl:'10.1016/0370-2693(93)90726-X',term:'truncations need not be exact'},
  {from:'categorical-qm',to:'zx-calculus',other:'ZX calculus',source:'coecke-duncan-2011',sourceUrl:'10.1088/1367-2630/13/4/043016',term:'not completeness for arbitrary quantum processes'},
  {from:'conformal-field-theory',to:'conformal-bootstrap',other:'Conformal bootstrap',source:'simmons-duffin-bootstrap-2016',sourceUrl:'arxiv.org/abs/1602.07982',term:'not an assertion that every CFT is solved'},
  {from:'tensor-network-states',to:'mera',other:'MERA / entanglement-renormalization framework',source:'evenbly-vidal-tn-geometry-2011',sourceUrl:'arxiv.org/abs/1106.1082v1',term:'not a claim that MERA formally subsumes every MPS'}
];

test('four source-specific directional relationships appear in unchanged theory detail UI',async({page},info)=>{
  const errors=[];page.on('pageerror',err=>errors.push(err.message));
  for(const item of promoted){
    await page.goto('/#/theory/'+item.from);
    await expect(page.locator('#theoryDetail')).toBeVisible();
    const link=page.locator('#theoryDetail a.relation').filter({has:page.getByText(item.other,{exact:true})}).first();
    await expect(link).toContainText('formal mathematical relation');
    await expect(link).toContainText('1 source');
    const detail=link.locator('xpath=following-sibling::*[1]');
    await expect(detail).toHaveClass(/relation-evidence/);
    await detail.locator('summary').click();
    await expect(detail).toContainText(item.term);
    const sourceLink=detail.locator('a').filter({hasText:/./}).first();
    await expect(sourceLink).toHaveAttribute('href',new RegExp(item.sourceUrl.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')));
    const live=await page.evaluate(({from,to})=>{
      const r=QI_DATA.relations.filter(x=>x.from===from&&x.to===to);
      return r.map(x=>({type:x.type,confidence:x.confidence,sourceIds:x.sourceIds,reviewedAt:x.reviewedAt}));
    },item);
    expect(live).toHaveLength(1);
    expect(live[0].sourceIds).toEqual([item.source]);
    expect(live[0].reviewedAt).toBe('2026-10-07');
  }
  for(const width of [1280,320]){
    await page.goto('/#/theory/categorical-qm');
    await page.setViewportSize({width,height:900});
    const target=page.locator('#theoryDetail a.relation').filter({has:page.getByText('ZX calculus',{exact:true})}).first();
    const disclosure=target.locator('xpath=following-sibling::*[1]');
    await disclosure.locator('summary').click();
    await disclosure.evaluate(el=>el.scrollIntoView({block:'center'}));
    expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
    const path=info.outputPath(`zx-evidence-${width}.png`);
    await page.screenshot({path});await info.attach(`zx-evidence-${width}`,{path,contentType:'image/png'});
  }
  expect(errors).toEqual([]);
});

test('graph sourced filter and source index include the four promotions but leave other editorial edges visible',async({page})=>{
  const errors=[];page.on('pageerror',err=>errors.push(err.message));
  await page.goto('/#/coverage');
  await expect(page.locator('#coverageContent')).toContainText(coverage.sourcedRelations+' source-backed relationships');
  await expect(page.locator('#coverageContent')).toContainText(coverage.editorialRelations+' editorial relationships');
  const result=await page.evaluate(()=>({sources:QI_DATA.sources.length,relations:QI_DATA.relations.length,promoted:QI_DATA.relations.filter(r=>r.reviewedAt==='2026-10-07'&&r.sourceLocator&&['functional-rg','zx-calculus','conformal-bootstrap','mera'].includes(r.to)).length,untouchedEditorial:QI_DATA.relations.find(r=>r.from==='qed'&&r.to==='aqft').confidence}));
  expect(result).toEqual({sources:549,relations:610,promoted:4,untouchedEditorial:'editorial'});
  await page.goto('/#/theory/renormalization-group?evidence=sourced');
  await expect(page.locator('#theoryDetail')).toContainText('Functional renormalization group');
  expect(errors).toEqual([]);
});
