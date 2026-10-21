import {test,expect} from '@playwright/test';import fs from 'node:fs';
const source=fs.readFileSync('analytics.js','utf8');
test('localhost never loads analytics and disclosure is readable',async({page})=>{
 const requests=[];await page.route(/cloudflareinsights\.com/,route=>{requests.push(route.request().url());return route.abort();});
 await page.goto('/#/workspace');await expect(page.locator('#workspaceView')).toHaveClass(/active/);await expect(page.locator('#analyticsDisclosure')).toContainText('without analytics cookies');
 await expect(page.locator('#qi-web-analytics')).toHaveCount(0);expect(requests).toEqual([]);
});
test('public hostname gets one mocked beacon and blocked analytics is nonfatal',async({page})=>{
 const errors=[],requests=[];page.on('pageerror',e=>errors.push(e.message));
 // Every request is intercepted. This test sends no synthetic visits to Cloudflare.
 await page.route('**/*',route=>{const url=route.request().url();if(url.startsWith('https://quantumindex.site/'))return route.fulfill({contentType:'text/html',body:'<!doctype html><title>Isolated analytics fixture</title><button onclick="this.textContent=\'Still works\'">Try app action</button>'});if(url==='https://static.cloudflareinsights.com/beacon.min.js'){requests.push(url);return route.abort('blockedbyclient');}return route.abort();});
 await page.goto('https://quantumindex.site/#/workspace?search=synthetic');await page.addScriptTag({content:source});await page.addScriptTag({content:source});
 await expect(page.locator('#qi-web-analytics')).toHaveCount(1);await expect.poll(()=>requests.length).toBe(1);await expect(page.locator('#qi-web-analytics')).toHaveAttribute('data-cf-beacon','{"token":"f402f014fafa46fd946dad89b1561973"}');
 await page.getByRole('button').click();await expect(page.getByRole('button')).toHaveText('Still works');expect(errors).toEqual([]);
});
