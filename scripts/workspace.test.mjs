import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import vm from 'node:vm';
function fixture(storage){if(!storage){let raw=null;storage={getItem:()=>raw,setItem:(k,v)=>raw=v};}const s={window:{},localStorage:storage};vm.createContext(s);for(const f of ['theories.js','workspace.js'])vm.runInContext(fs.readFileSync(f,'utf8'),s);return s.window.QI_WORKSPACE;}
test('workspace round trip preserves notes, bookmarks, read entries and comparisons',()=>{let raw;const storage={getItem:()=>raw,setItem:(k,v)=>raw=v};const w=fixture(storage),data=w.data;data.bookmarks=['unruh'];data.read=['unruh'];data.notes.unruh='<script>literal text</script>';data.comparisons=[{name:'Horizon comparison',theoryIds:['unruh','hawking-radiation']}];assert.equal(w.save(data),true);assert.deepEqual(JSON.parse(JSON.stringify(fixture(storage).data)),JSON.parse(raw));});
test('workspace rejects malformed, oversized and unknown-entry records without replacing saved data',()=>{const w=fixture();for(const bad of [null,{version:2},{...w.data,bookmarks:['unknown']},{...w.data,notes:{unruh:'x'.repeat(20001)}},{...w.data,comparisons:[{name:'one',theoryIds:['unruh']}]}])assert.throws(()=>w.validate(bad));assert.equal(w.data.bookmarks.length,0);});
test('import merges without overwriting different existing notes',()=>{const w=fixture(),a=w.data;a.notes.unruh='Original';w.save(a);const b=w.data;b.notes.unruh='Imported';b.bookmarks=['unruh'];assert.equal(w.merge(b),true);assert.match(w.data.notes.unruh,/Original[\s\S]*Imported/);assert.equal(w.data.bookmarks.length,1);});
test('quota failures and corrupt stored data are reported without silent data loss',()=>{let writes=0;const w=fixture({getItem:()=>'{bad',setItem:()=>{writes++;throw Error('quota');}});assert.match(w.error,/not been overwritten/);assert.equal(writes,0);const d=w.data;d.notes.unruh='unsaved';assert.equal(w.save(d),false);assert.match(w.error,/not be saved/);assert.equal(w.exportText(),'{bad');assert.equal(writes,0);assert.equal(w.data.notes.unruh,undefined);});

test('a quota error never changes the saved in-memory state',()=>{const w=fixture({getItem:()=>null,setItem:()=>{throw Error('quota');}});const data=w.data;data.notes.unruh='Draft';assert.equal(w.save(data),false);assert.match(w.error,/not saved/);assert.equal(w.data.notes.unruh,undefined);});
test('exported JSON can be imported into a fresh workspace and repeated imports are idempotent',()=>{const a=fixture(),first=a.data;first.notes.unruh='First';a.save(first);const imported=a.data;imported.notes.unruh='Second';a.merge(imported);const once=a.exportText();a.merge(imported);assert.equal(a.exportText(),once);const b=fixture();b.merge(JSON.parse(once));assert.equal(b.exportText(),once);});
test('workspace size limit counts UTF-8 bytes and keeps failed merges atomic',()=>{const w=fixture(),data=w.data;const s={window:{}};vm.createContext(s);vm.runInContext(fs.readFileSync('theories.js','utf8'),s);for(const t of s.window.QI_DATA.theories.slice(0,30))data.notes[t.id]='界'.repeat(19000);assert.equal(w.save(data),false);assert.match(w.error,/1 MB/);assert.equal(Object.keys(w.data.notes).length,0);const long=w.data;long.notes.unruh='x'.repeat(20000);w.save(long);const incoming=w.data;incoming.notes.unruh='y';assert.throws(()=>w.merge(incoming));assert.equal(w.data.notes.unruh.length,20000);});
test('research notebook preserves full literal notes, sources and comparisons without mutating storage',()=>{
  const w=fixture(),data=w.data;data.bookmarks=['unruh'];data.read=['unruh','born-rule'];
  data.notes.unruh='A complete note\n```\n<script>alert(1)</script>\n[link](javascript:bad)\n````';
  data.comparisons=[{name:'[Horizon] <comparison>',theoryIds:['unruh','hawking-radiation']}];w.save(data);
  const before=w.exportText(),md=w.exportMarkdown();
  assert.ok(md.includes('`````text\n'+data.notes.unruh+'\n`````'));
  assert.match(md,/https:\/\/doi.org\/10.1103\/PhysRevD.14.870/);
  assert.match(md,/https:\/\/jeremyhennessy.github.io\/Quantum-index\/#\/theory\/born-rule/);
  assert.match(md,/#\/compare\?ids=unruh,hawking-radiation/);
  assert.ok(md.includes('\\[Horizon\\] \\<comparison\\>'));assert.equal(w.exportText(),before);
  assert.equal(md.split('## Unruh effect').length-1,1);
});
test('empty and corrupt workspaces have explicit notebook behavior',()=>{
  assert.match(fixture().exportMarkdown(),/No saved entries/);
  const broken=fixture({getItem:()=>'{broken',setItem:()=>{throw Error('must not write');}});
  assert.throws(()=>broken.exportMarkdown(),/recovery/);assert.equal(broken.exportText(),'{broken');
});
test('stale tabs preserve independent changes and reject competing note edits',async()=>{
 let raw=null;const storage={getItem:()=>raw,setItem:(k,v)=>raw=v},a=fixture(storage),b=fixture(storage);
 const first=a.data;first.notes.unruh='A';assert.equal(await a.saveAsync(first),true);
 const stale=b.data;stale.bookmarks=['bell'];assert.equal(await b.saveAsync(stale),true);assert.equal(JSON.parse(raw).notes.unruh,'A');
 assert.equal(await b.saveNote('unruh','B',''),false);assert.match(b.error,/another tab/);assert.equal(JSON.parse(raw).notes.unruh,'A');
 assert.equal(await b.saveNote('unruh','A\nB','A'),true);a.refresh();assert.equal(a.data.notes.unruh,'A\nB');assert.equal(a.data.bookmarks[0],'bell');
});
test('stale removal retains unrelated additions from another tab',()=>{
 let raw=null;const storage={getItem:()=>raw,setItem:(k,v)=>raw=v},a=fixture(storage);let x=a.data;x.bookmarks=['unruh'];a.save(x);const b=fixture(storage);
 const stale=b.data;stale.bookmarks=[];x=a.data;x.bookmarks.push('bell');a.save(x);b.save(stale);assert.deepEqual(JSON.parse(raw).bookmarks,['bell']);
});
test('refresh retains newly corrupted storage bytes for recovery',()=>{
 let raw=null;const w=fixture({getItem:()=>raw,setItem:(k,v)=>raw=v});raw='{new corruption';assert.equal(w.refresh(),false);assert.equal(w.exportText(),raw);assert.equal(w.save(w.data),false);
});
