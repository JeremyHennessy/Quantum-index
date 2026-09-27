// Local-only research storage. Backups are portable JSON, never executable content.
window.QI_WORKSPACE = (() => {
  const key='quantum-index-workspace-v1';
  const ids=new Set(window.QI_DATA.theories.map(t=>t.id));
  const empty=()=>({version:1,bookmarks:[],read:[],notes:{},comparisons:[]});
  function validate(input){
    if(!input || input.version!==1 || !Array.isArray(input.bookmarks)||!Array.isArray(input.read)||!input.notes||Array.isArray(input.notes)||typeof input.notes!=='object'||!Array.isArray(input.comparisons))throw new Error('Not a supported Quantum Index backup.');
    const cleanIds=list=>{if(list.length>ids.size||list.some(id=>typeof id!=='string'||!ids.has(id)))throw new Error('Backup contains unknown entries.');return [...new Set(list)];};
    const out=empty();out.bookmarks=cleanIds(input.bookmarks);out.read=cleanIds(input.read);
    for(const [id,note] of Object.entries(input.notes)){if(!ids.has(id)||typeof note!=='string'||note.length>20000)throw new Error('Invalid note or note longer than 20,000 characters.');out.notes[id]=note;}
    if(input.comparisons.length>100)throw new Error('At most 100 saved comparisons are supported.');
    out.comparisons=input.comparisons.map(c=>{if(!c||typeof c.name!=='string'||!c.name.trim()||c.name.length>120||!Array.isArray(c.theoryIds))throw new Error('Invalid saved comparison.');const theoryIds=cleanIds(c.theoryIds);if(theoryIds.length<2||theoryIds.length>4)throw new Error('Comparisons need two to four entries.');return {name:c.name.trim(),theoryIds};});
    return out;
  }
  const maxBytes=1024*1024;
  let data=empty(),error='',raw=null,recoveryNeeded=false;
  try{raw=localStorage.getItem(key);if(raw)data=validate(JSON.parse(raw));}catch(e){recoveryNeeded=true;error='Saved workspace could not be loaded. Existing browser data has not been overwritten. Changes will not be saved. Export the original data for recovery; use another browser profile for a fresh workspace.';}
  function save(next){if(recoveryNeeded)return false;const checked=validate(next),serialized=JSON.stringify(checked,null,2);let bytes=0;for(const char of serialized){const code=char.codePointAt(0);bytes+=code<128?1:code<2048?2:code<65536?3:4;}if(bytes>maxBytes){error='Workspace exceeds the 1 MB backup limit. Your change was not saved.';return false;}try{localStorage.setItem(key,serialized);data=checked;error='';return true;}catch(e){error='Browser storage is unavailable or full. Your change was not saved; copy the note or export your workspace.';return false;}}
  function merge(input){const incoming=validate(input),next=JSON.parse(JSON.stringify(data));next.bookmarks=[...new Set([...next.bookmarks,...incoming.bookmarks])];next.read=[...new Set([...next.read,...incoming.read])];for(const [id,note] of Object.entries(incoming.notes)){if(next.notes[id]&&next.notes[id]!==note){if(!next.notes[id].split('\n\n— Imported note —\n').includes(note))next.notes[id]+='\n\n— Imported note —\n'+note;}else next.notes[id]=note;}for(const c of incoming.comparisons)if(!next.comparisons.some(x=>x.name===c.name&&JSON.stringify(x.theoryIds)===JSON.stringify(c.theoryIds)))next.comparisons.push(c);return save(next);}
  function exportMarkdown(){
    if(recoveryNeeded)throw new Error('Export the original backup for recovery before creating a research notebook.');
    const byId=new Map(window.QI_DATA.theories.map(t=>[t.id,t]));
    const sources=new Map(window.QI_DATA.sources.map(s=>[s.id,s]));
    const base='https://jeremyhennessy.github.io/Quantum-index/';
    const literal=text=>String(text).replace(/[\\`*_{}\[\]()<>#+.!|~-]/g,'\\$&').replace(/\r?\n/g,' ');
    const link=id=>`[${literal(byId.get(id).name)}](${base}#/theory/${encodeURIComponent(id)})`;
    const selected=[...new Set([...data.bookmarks,...data.read,...Object.keys(data.notes).filter(id=>data.notes[id])])];
    const lines=['# Quantum Index research notebook','','Personal notes and saved reading state. This is not a restorable backup; use Export backup for JSON.','',`${data.bookmarks.length} bookmarks · ${data.read.length} read entries · ${Object.values(data.notes).filter(Boolean).length} notes · ${data.comparisons.length} saved comparisons`,''];
    if(!selected.length)lines.push('No saved entries.','');
    for(const id of selected){
      const t=byId.get(id);lines.push(`## ${literal(t.name)}`,'',link(id),'',`Bookmarked: ${data.bookmarks.includes(id)?'yes':'no'} · Marked read: ${data.read.includes(id)?'yes':'no'}`,'');
      if(data.notes[id]){const note=data.notes[id],fence='`'.repeat(Math.max(3,...(note.match(/`+/g)||[]).map(x=>x.length+1)));lines.push('### Personal note','',fence+'text',note,fence,'');}
      lines.push('### Catalog sources','');
      for(const sourceId of t.sources||[]){const source=sources.get(sourceId);if(source)lines.push(`- ${literal(source.title)} · ${literal(source.authors)} · ${literal(source.year)}${/^https?:\/\//.test(source.url)?` — <${source.url.replace(/</g,'%3C').replace(/>/g,'%3E')}>`:''}`);}
      lines.push('');
    }
    lines.push('## Saved comparisons','');
    if(!data.comparisons.length)lines.push('No saved comparisons.');
    for(const c of data.comparisons)lines.push(`### ${literal(c.name)}`,'',`[Open comparison](${base}#/compare?ids=${c.theoryIds.map(encodeURIComponent).join(',')})`,'',...c.theoryIds.map(id=>`- ${link(id)}`),'');
    return lines.join('\n')+'\n';
  }
  return {get data(){return JSON.parse(JSON.stringify(data));},get error(){return error;},validate,save,merge,exportMarkdown,maxBytes,get recoveryNeeded(){return recoveryNeeded;},exportText:()=>recoveryNeeded?(raw||error):JSON.stringify(data,null,2)};
})();
