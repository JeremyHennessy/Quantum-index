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
  return {get data(){return JSON.parse(JSON.stringify(data));},get error(){return error;},validate,save,merge,maxBytes,get recoveryNeeded(){return recoveryNeeded;},exportText:()=>recoveryNeeded?(raw||error):JSON.stringify(data,null,2)};
})();
