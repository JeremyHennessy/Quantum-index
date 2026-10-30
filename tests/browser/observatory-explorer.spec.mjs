import {test,expect} from '@playwright/test';

async function openExplorer(page){
  const errors=[];
  page.on('pageerror',err=>errors.push(err.message));
  await page.goto('/docs/observatory-explorer.html');
  await expect.poll(()=>page.evaluate(()=>window.QI_OBSERVATORY_PREVIEW_READY===true),{timeout:15000}).toBe(true);
  return errors;
}

test('30 authoritative programme records render with releases and source links',async({page},info)=>{
  const errors=await openExplorer(page);
  await expect(page.locator('#summaryCounters strong')).toHaveText(['30','18','6','6']);
  await expect(page.locator('#programmeList .programme-card')).toHaveCount(30);
  await expect(page.locator('#programmeDetail .detail-title')).toHaveText('Dark Energy Spectroscopic Instrument (DESI)');
  await expect(page.locator('#programmeDetail')).toContainText('Public analysis products only');
  await expect(page.locator('#programmeDetail')).toContainText('2025-10-06');
  await expect(page.locator('#milestoneList .milestone')).toHaveCount(6);
  await expect(page.locator('#milestoneList')).toContainText('PLANNED / NOT COMPLETED');
  await expect(page.locator('#milestoneList')).toContainText('COMPLETED / OFFICIAL');
  const shot=info.outputPath('observatory-explorer-desktop.png');
  await page.screenshot({path:shot,fullPage:false});
  await info.attach('observatory-explorer-desktop',{path:shot,contentType:'image/png'});
  expect(errors).toEqual([]);
});

test('subject lanes and metadata search are genuinely interactive',async({page})=>{
  const errors=await openExplorer(page);
  await page.locator('#domainNav button',{hasText:'Cosmic origins'}).click();
  await expect(page.locator('#domainNav button',{hasText:'Cosmic origins'})).toHaveAttribute('aria-pressed','true');
  const cmbCount=await page.locator('#programmeList .programme-card').count();
  expect(cmbCount).toBeGreaterThan(2);
  expect(cmbCount).toBeLessThan(30);
  await page.locator('#registrySearch').fill('Planck');
  await expect(page.locator('#programmeList')).toContainText('Planck');
  await page.locator('#registrySearch').fill('completely-nonexistent-observatory-name');
  await expect(page.locator('#programmeList')).toContainText('No indexed programmes match');
  await page.locator('#domainNav button',{hasText:'All research'}).click();
  await expect(page.locator('#programmeList .programme-card')).toHaveCount(30);
  await page.locator('#accessFilters button',{hasText:'Rights restricted'}).click();
  await expect(page.locator('#programmeList')).toContainText('Rubin');
  await expect(page.locator('#programmeList .programme-card')).toHaveCount(1);
  await page.locator('#accessFilters button',{hasText:'All releases'}).click();
  await expect(page.locator('#programmeList .programme-card')).toHaveCount(30);
  expect(errors).toEqual([]);
});

test('source record, planned release and problem links retain their precise states',async({page})=>{
  const errors=await openExplorer(page);
  await page.locator('#registrySearch').fill('Euclid');
  await expect(page.locator('#programmeList .programme-card')).toHaveCount(1);
  await page.locator('#programmeList .programme-card').click();
  await expect(page.locator('#programmeDetail')).toContainText('DR1 Foundation');
  await expect(page.locator('#programmeDetail')).toContainText('Planned / no public product');
  await expect(page.locator('#programmeDetail')).toContainText('Public observational products');
  await expect(page.locator('#programmeDetail a[href^="https://"]')).not.toHaveCount(0);
  await expect(page).toHaveURL(/programme=euclid/);
  await page.reload();
  await expect.poll(()=>page.evaluate(()=>window.QI_OBSERVATORY_PREVIEW_READY===true)).toBe(true);
  await expect(page.locator('#programmeDetail .detail-title')).toHaveText('Euclid');
  const link=page.locator('#programmeDetail .problem-links a').first();
  await expect(link).toHaveAttribute('href',/\/#\/problems\?problem=/);
  expect(errors).toEqual([]);
});

test('distinct visual explorer fits phone widths and keeps status labels readable',async({page},info)=>{
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  for(const width of [390,320]){
    await page.setViewportSize({width,height:844});
    await page.goto('/docs/observatory-explorer.html');
    await expect.poll(()=>page.evaluate(()=>window.QI_OBSERVATORY_PREVIEW_READY===true)).toBe(true);
    await expect(page.locator('.hero h1')).toBeVisible();
    await expect(page.locator('#domainNav .domain-button').first()).toBeVisible();
    await expect(page.locator('#programmeList .programme-card').first()).toBeVisible();
    expect(await page.locator('html').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
    await page.locator('#registrySearch').fill('Roman');
    await expect(page.locator('#programmeDetail')).toContainText('science commissioning');
    await expect(page.locator('#programmeDetail')).toContainText('Planned / no public product');
    const shot=info.outputPath('observatory-explorer-mobile-'+width+'.png');
    await page.screenshot({path:shot,fullPage:false});
    await info.attach('observatory-explorer-mobile-'+width,{path:shot,contentType:'image/png'});
  }
  expect(errors).toEqual([]);
});
