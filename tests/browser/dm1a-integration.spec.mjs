import {test,expect} from '@playwright/test';
import fs from 'node:fs';
const proposal=JSON.parse(fs.readFileSync('research/DARK_MATTER_DM1A_SIMP_ELDER_PROPOSED_RECORDS_2026-10-29.json','utf8'));

for(const theory of proposal.theories){
  test('DM-1A '+theory.id+': two source-qualified equations typeset and remain accessible at 320px',async({page},info)=>{
    test.setTimeout(120000);
    const failures=[];page.on('pageerror',err=>failures.push(err.message));
    await page.setViewportSize({width:320,height:760});
    await page.goto('/#/formula?theory='+theory.id+'&review=explicit');
    const relevant=proposal.formulas.filter(f=>f.theoryIds.includes(theory.id));
    await expect(page.locator('#formulaGrid .formula-card')).toHaveCount(relevant.length);
    for(const f of relevant){
      const card=page.locator('.formula-card').filter({has:page.getByRole('heading',{name:f.name,exact:true})});
      await expect(card).toBeVisible();
      await expect(card.locator('mjx-container')).toHaveCount(1,{timeout:30000});
      await expect(card.locator('[data-mml-node="merror"], [fill="red"], [stroke="red"]')).toHaveCount(0);
      await expect(card.locator('.formula-plain')).toHaveText(f.plain);
      await expect(card).toContainText(f.theoryRelationship);
      await expect(card).toContainText(f.regime);
      await expect(card).toContainText(f.units);
      for(const loc of f.sourceLocations)await expect(card.locator('a[href="'+loc.url+'"]')).toContainText(loc.locator);
      const equation=card.locator('.formula-equation');
      for(const end of ['start','end']){
        await equation.evaluate((node,end)=>{for(const el of [node,...node.querySelectorAll('*')])if(el.scrollWidth>el.clientWidth)el.scrollLeft=end==='start'?0:el.scrollWidth;},end);
        await equation.screenshot({path:info.outputPath(f.id+'-'+end+'.png')});
      }
    }
    expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBe(true);
    expect(failures).toEqual([]);
  });
  test('DM-1A '+theory.id+': theory/formula history preserves links and paper provenance',async({page})=>{
    const failures=[];page.on('pageerror',err=>failures.push(err.message));
    await page.goto('/#/theory/'+theory.id);
    const detail=page.locator('#theoryDetail');
    await expect(detail).toBeVisible();
    await expect(detail).toContainText(theory.name);
    await expect(detail).toContainText('Primary sourced');
    await expect(detail).toContainText(String(theory.year));
    await expect(detail).toContainText('Last source review: '+theory.lastReviewed);
    const audit=detail.locator('.detail-section').filter({has:page.getByRole('heading',{name:'Formula audit',exact:true})});
    await expect(audit).toContainText('formula-bearing');
    await audit.getByRole('link',{name:'View linked formulas',exact:true}).click();
    await expect(page.locator('#formulaGrid .formula-card')).toHaveCount(2);
    await page.goBack();
    await expect(detail).toBeVisible();
    await expect(detail).toContainText(theory.name);
    expect(failures).toEqual([]);
  });
}

test('DM-1A Dark Matter Problem connects SIMP and ELDER without claiming new empirical Evidence',async({page})=>{
 const failures=[];page.on('pageerror',err=>failures.push(err.message));
 await page.goto('/#/problems?problem=dark-matter');
 const detail=page.locator('#problemDetail');
 await expect(detail).toBeVisible();
 for(const t of proposal.theories)await expect(detail).toContainText(t.name);
 const rows=await page.evaluate(()=>({
   theories:window.QI_DATA.theories.filter(t=>['simp-relic','elder-relic'].includes(t.id)).length,
   actualEvidence:window.QI_EVIDENCE.records.length,
   recentRoutes:window.QI_PROBLEMS.problems.find(p=>p.id==='dark-matter').approachGroups.flatMap(g=>g.theoryIds)
 }));
 expect(rows.theories).toBe(2);
 expect(rows.actualEvidence).toBe(21);
 expect(rows.recentRoutes).toContain('simp-relic');
 expect(rows.recentRoutes).toContain('elder-relic');
 expect(failures).toEqual([]);
});
