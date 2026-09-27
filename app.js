(() => {
  const { theories, relations, trees, sources } = window.QI_DATA;
  const formulas = window.QI_FORMULAS?.formulas || [];
  const formulaAudit = window.QI_FORMULA_AUDIT?.entries || [];
  const formulaAuditByTheory = new Map(formulaAudit.map(x => [x.theoryId,x]));
  const byId = new Map(theories.map(t => [t.id,t]));
  const sourceById = new Map(sources.map(s => [s.id,s]));
  const profiles = window.QI_PROFILES?.profiles || {};
  let compareIds = [];
  let learningPathId = "";
  const learningPaths = window.QI_PROFILES?.learningPaths || [];
  const profileFields = [["problem","Problem addressed"],["scope","Scope and mathematical approach"],["assumptions","Assumptions"],["predictions","Results and predictions"],["evidence","Evidence in the cited work"],["limitations","Limitations"],["questions","Questions to investigate"]];
  const state = { search:"", category:"", kind:"", status:"", era:"", sourcedOnly:false, selected:null, selectedTree:0, view:"map", returnView:"map" };
  const formulaState = { search:"", category:"", theory:"", type:"" };
  const categoryColors = new Map([
    ["Historical foundations","#f59e0b"],["Formulations","#60a5fa"],["Foundations & interpretations","#c084fc"],
    ["Quantum field theory","#34d399"],["Quantum information & open systems","#22d3ee"],["Quantum gravity & spacetime","#f472b6"],
    ["Quantum cosmology","#fb7185"],["Beyond standard quantum theory","#facc15"],["Mathematical structures","#a3e635"],
    ["Quantum optics & AMO","#f0abfc"],["Quantum many-body & condensed matter","#2dd4bf"],["Quantum chemistry & electronic structure","#a7f3d0"],["Astroparticle physics & cosmology","#818cf8"],["Nuclear quantum theory","#fb923c"]
  ]);
  const relationLabels = {
    precursor:"precursor of",reformulates:"reformulates",extends:"extends","challenged by":"challenges / challenged by",
    interprets:"interprets",unifies:"feeds into / unifies",supports:"supports",generalizes:"generalizes",overlaps:"overlaps",motivates:"motivates",formalizes:"formalizes",challenges:"challenges"
  };
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const esc = v => String(v ?? "").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));

  function filtered(){
    const q = state.search.trim().toLowerCase();
    return theories.filter(t =>
      (!q || [t.name,t.summary,t.core,...t.tags,...t.aliases].join(" ").toLowerCase().includes(q)) &&
      (!state.category || t.category===state.category) &&
      (!state.kind || t.kind===state.kind) &&
      (!state.status || t.status===state.status) &&
      (!state.era || t.era===state.era) &&
      (!state.sourcedOnly || t.provenance!=="catalogued")
    );
  }

  function setOptions(sel, values){
    const el=$(sel), first=el.firstElementChild.outerHTML;
    el.innerHTML=first+values.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join("");
  }
  setOptions("#categoryFilter",[...new Set(theories.map(t=>t.category))].sort());
  setOptions("#kindFilter",[...new Set(theories.map(t=>t.kind))].sort());
  setOptions("#statusFilter",[...new Set(theories.map(t=>t.status))].sort());
  setOptions("#eraFilter",[...new Set(theories.map(t=>t.era))]);
  setOptions("#formulaCategory",[...new Set(formulas.map(f=>f.category))].sort());
  setOptions("#formulaType",[...new Set(formulas.map(f=>f.formulaType))].sort());
  const formulaTheoryIds=[...new Set(formulas.flatMap(f=>f.theoryIds))].filter(id=>byId.has(id)).sort((a,b)=>byId.get(a).name.localeCompare(byId.get(b).name));
  const formulaTheorySelect=$("#formulaTheory");
  formulaTheorySelect.innerHTML=formulaTheorySelect.firstElementChild.outerHTML+formulaTheoryIds.map(id=>`<option value="${id}">${esc(byId.get(id).name)}</option>`).join("");

  function renderStats(){
    const cat=new Set(theories.map(t=>t.category)).size;
    const sourced=theories.filter(t=>t.provenance!=="catalogued").length;
    $("#stats").innerHTML=[
      [theories.length,"catalogued theories & frameworks"],
      [cat,"major categories"],
      [relations.length,"typed connections"],
      [formulas.length,"formula atlas entries"],
      [`${sourced}/${theories.length}`,"entries with review/source provenance"]
    ].map(([n,l])=>`<div class="stat"><strong>${n}</strong><span>${l}</span></div>`).join("");
  }

  function renderLegend(){
    $("#legend").innerHTML=[...categoryColors].map(([name,color])=>`<span class="legend-item"><i class="dot" style="background:${color}"></i>${esc(name)}</span>`).join("");
  }

  function related(id){
    return relations.filter(r=>r.from===id||r.to===id).map(r=>{
      const outbound=r.from===id, other=byId.get(outbound?r.to:r.from);
      return {r,other,outbound};
    }).filter(x=>x.other);
  }

  function safeReturn(value){return typeof value==="string" && value.length<4096 && /^#\/(?:theory\/[a-z0-9-]+|map|timeline|catalog|lineage|formula|compare|learn|workspace)(?:\?|$)/.test(value)?value:"";}
  function theoryLink(id,from=state.returnView){
    const params=new URLSearchParams({from});
    if(from==="learn"&&learningPathId)params.set("path",learningPathId);
    if(from==="compare")params.set("compare",compareIds.join(","));
    if(from==="formula")params.set("returnTo",location.hash.startsWith("#/theory/") ? safeReturn(new URLSearchParams(location.hash.split("?")[1]||"").get("returnTo")) || "#/formula" : location.hash);
    return `#/theory/${encodeURIComponent(id)}?${params}`;
  }
  function formulaLink(id){return `#/formula?theory=${encodeURIComponent(id)}&returnTo=${encodeURIComponent(location.hash)}`;}
  function selectTheory(id, switchLineage=false){
    const t=byId.get(id); if(!t)return;
    state.selected=id;
    renderDetail();
    renderLineage();
    d3.selectAll(".node").classed("selected",d=>d.id===id);
    d3.selectAll(".tree-graph-node").classed("selected",d=>d.id===id);
    const from=state.view==="theory"?state.returnView:state.view;
    navigate(switchLineage ? `#/lineage?theory=${encodeURIComponent(id)}` : theoryLink(id,from));
  }

  function renderDetail(){
    renderDetailPanel($("#detailPanel"));
    renderDetailPanel($("#theoryDetail"));
    bindResearchControls();
  }

  function renderDetailPanel(panel){
    const t=byId.get(state.selected);
    if(!t){panel.innerHTML=$("#emptyDetail").innerHTML;return;}
    const rel=related(t.id);
    const provenance=t.provenance==="primary-sourced"?"Primary sourced":t.provenance==="review-sourced"?"Review sourced":"Catalog seed · source pass pending";
    const linkedSources=(t.sources||[]).map(id=>sourceById.get(id)).filter(Boolean);
    panel.innerHTML=`
      <p class="eyebrow">${esc(t.category)}</p>
      <h3 class="detail-title">${esc(t.name)}</h3>
      ${t.aliases.length?`<div class="aliases">Also: ${t.aliases.map(esc).join(", ")}</div>`:""}
      <div class="badge-row">
        <span class="badge">${esc(t.year)}</span>
        <span class="badge">${esc(t.kind)}</span>
        <span class="badge status-${t.status.includes("established")?"established":t.status.includes("interpretation")?"interpretation":t.status.includes("speculative")?"speculative":""}">${esc(t.status)}</span>
        <span class="badge">${esc(provenance)}</span>
      </div>
      <div class="detail-section"><h4>What it is</h4><p>${esc(t.summary)}</p></div>
      ${(()=>{
        const audit=formulaAuditByTheory.get(t.id);
        if(!audit) return "";
        const linked=audit.formulaIds.map(fid=>formulas.find(f=>f.id===fid)).filter(Boolean);
        return `<div class="detail-section">
          <h4>Formula audit</h4>
          <div class="badge-row">
            <span class="badge">${esc(audit.classification)}</span>
            <span class="badge">${esc(audit.coverageStatus)}</span>
            ${audit.priority!=="not-applicable"?`<span class="badge">${esc(audit.priority)} priority</span>`:""}
          </div>
          ${audit.reviewEvidence?`<p>${esc(audit.reviewEvidence.locator)}</p>${profileCitations(audit.reviewEvidence.sourceIds)}`:""}
          ${linked.length?`<p>${linked.length} source-linked formula${linked.length===1?"":"s"} in the atlas.</p><a class="ghost link-button" href="${formulaLink(t.id)}">View linked formulas</a>`:`<p>${esc(audit.gapReason||"No formula audit reason recorded.")}</p>`}
        </div>`;
      })()}
      <div class="detail-section"><h4>Core idea</h4><p>${esc(t.core)}</p></div>
      ${panel.id==="theoryDetail" ? renderLearningNavigation(t.id)+renderResearchProfile(t.id)+researchControls(t.id) : ""}
      <div class="detail-section"><h4>Concepts</h4><div class="tag-list">${t.tags.map(x=>`<span class="tag">${esc(x)}</span>`).join("")}</div></div>
      <div class="detail-section"><h4>Sources · ${linkedSources.length}</h4>
        ${linkedSources.length ? `<div class="source-list">${linkedSources.map(s=>`<a class="source-link" href="${esc(s.url)}" target="_blank" rel="noreferrer"><strong>${esc(s.title)}</strong><span>${esc(s.authors)} · ${esc(s.year)} · ${esc(s.type)}</span></a>`).join("")}</div>` : '<p>Dedicated source pass not completed for this entry yet.</p>'}
        ${t.lastReviewed?`<p class="reviewed">Last source review: ${esc(t.lastReviewed)}</p>`:""}
      </div>
      <div class="detail-section"><h4>Connections · ${rel.length}</h4><div class="relation-list">
        ${rel.slice().sort((a,b)=>a.other.year-b.other.year).map(({r,other,outbound})=>`
          <a class="relation" href="${theoryLink(other.id)}">
            <span class="relation-main"><strong>${esc(other.name)}</strong><em>${esc(r.evidenceType)} · ${esc(r.confidence)}${r.sourceIds.length?` · ${r.sourceIds.length} source${r.sourceIds.length===1?"":"s"}`:" · unsourced editorial"}</em></span>
            <small>${esc(relationLabels[r.type]||r.type)}${outbound?" →":" ←"}</small>
          </a>${r.evidenceNote?`<details class="relation-evidence"><summary>Relationship evidence</summary><p>${esc(r.evidenceNote)}</p>${r.sourceLocator?`<p class="reviewed">${esc(r.sourceLocator)}</p>`:""}${profileCitations(r.sourceIds)}</details>`:""}` ).join("")||'<p>No typed connections yet.</p>'}
      </div></div>
      <div class="detail-section detail-actions"><a class="ghost link-button" href="#/lineage?theory=${encodeURIComponent(t.id)}">Trace thought tree</a><a class="ghost link-button" href="#/theory/${encodeURIComponent(t.id)}">Permanent link</a>${panel.id==="theoryDetail"?comparisonAction(t.id):""}</div>`;
  }

  function researchControls(id){
    const data=window.QI_WORKSPACE.data;
    return `<section class="detail-section research-tools" aria-label="Personal research tools"><h4>My research</h4><div class="detail-actions"><button class="ghost" id="toggleBookmark" aria-pressed="${data.bookmarks.includes(id)}">${data.bookmarks.includes(id)?"Remove bookmark":"Bookmark entry"}</button><button class="ghost" id="toggleRead" aria-pressed="${data.read.includes(id)}">${data.read.includes(id)?"Mark unread":"Mark as read"}</button></div><label for="researchNote">Your notes (saved on this browser)</label><textarea id="researchNote" rows="5" maxlength="20000">${esc(data.notes[id]||"")}</textarea><button class="ghost" id="saveNote">Save note</button><p id="researchStatus" role="status">${esc(window.QI_WORKSPACE.error)}</p></section>`;
  }
  function bindResearchControls(){
    if(!$("#saveNote"))return;
    const id=state.selected;
    for(const [button,key] of [["#toggleBookmark","bookmarks"],["#toggleRead","read"]])$(button).onclick=()=>{const next=window.QI_WORKSPACE.data;next[key]=next[key].includes(id)?next[key].filter(x=>x!==id):[...next[key],id];if(window.QI_WORKSPACE.save(next)){const pressed=next[key].includes(id);$(button).setAttribute("aria-pressed",String(pressed));$(button).textContent=key==="bookmarks"?(pressed?"Remove bookmark":"Bookmark entry"):(pressed?"Mark unread":"Mark as read");$("#researchStatus").textContent="Saved on this browser.";}else $("#researchStatus").textContent=window.QI_WORKSPACE.error;};
    $("#saveNote").onclick=()=>{const next=window.QI_WORKSPACE.data;next.notes[id]=$("#researchNote").value;$("#researchStatus").textContent=window.QI_WORKSPACE.save(next)?"Note saved on this browser.":window.QI_WORKSPACE.error;};
  }
  function renderWorkspace(){
    const data=window.QI_WORKSPACE.data;
    const entries=list=>list.map(id=>`<a class="source-link" href="${theoryLink(id,"workspace")}"><strong>${esc(byId.get(id).name)}</strong>${data.notes[id]?`<span>${esc(data.notes[id].slice(0,180))}</span>`:""}</a>`).join("")||'<p class="muted">Nothing saved yet. Open an entry to bookmark it or write a note.</p>';
    $("#workspaceContent").innerHTML=`<article class="card comparison-panel"><div class="eyebrow">PERSONAL WORKSPACE</div><h3>My research</h3><p>Bookmarks, notes and reading progress stay in this browser. They are not synced or backed up automatically. Export a backup before clearing browser data or changing devices.</p><div class="detail-actions"><button class="ghost" id="exportWorkspace">Export backup</button><label class="ghost">Choose backup to import <input id="importWorkspace" type="file" accept="application/json,.json"></label></div><p id="workspaceStatus" role="status">${esc(window.QI_WORKSPACE.error)}</p><div id="importPreview"></div><h4>Learning progress</h4>${learningPaths.map(p=>`<section class="workspace-path" data-workspace-path="${p.id}"><h5><a href="${learningHash(p.id)}">${esc(p.title)}</a></h5>${renderPathProgress(p,pathProgress(p,data.read))}</section>`).join("")}<h4>Bookmarks</h4><div class="profile-collection">${entries(data.bookmarks)}</div><h4>Notes</h4><div class="profile-collection">${entries(Object.keys(data.notes).filter(id=>data.notes[id]))}</div><h4>Saved comparisons</h4>${data.comparisons.map((c,i)=>`<div class="detail-actions"><a class="ghost link-button" href="${comparisonHash(c.theoryIds)}">${esc(c.name)}</a><button class="ghost" data-remove-comparison="${i}" aria-label="Remove saved comparison ${esc(c.name)}">Remove</button></div>`).join("")||'<p class="muted">Use Save comparison in the Compare tab.</p>'}</article>`;
    $("#exportWorkspace").onclick=()=>{const blob=new Blob([window.QI_WORKSPACE.exportText()],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=window.QI_WORKSPACE.recoveryNeeded?"quantum-index-recovery.txt":"quantum-index-research.json";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);$("#workspaceStatus").textContent="Backup download requested. Keep the downloaded file somewhere safe.";};
    $("#importWorkspace").onchange=async e=>{const file=e.target.files[0];$("#importPreview").innerHTML="";if(!file)return;try{if(file.size>window.QI_WORKSPACE.maxBytes)throw new Error("Backup is too large (maximum 1 MB).");const incoming=window.QI_WORKSPACE.validate(JSON.parse(await file.text()));$("#importPreview").innerHTML=`<p>Import ${incoming.bookmarks.length} bookmarks, ${Object.keys(incoming.notes).length} notes, ${incoming.read.length} read entries and ${incoming.comparisons.length} comparisons. Different notes for the same entry are appended; existing work is retained.</p><button class="ghost" id="confirmImport">Merge this backup</button>`;$("#confirmImport").onclick=()=>{try{if(window.QI_WORKSPACE.merge(incoming)){renderWorkspace();$("#workspaceStatus").textContent="Backup merged and saved on this browser.";}else $("#workspaceStatus").textContent=window.QI_WORKSPACE.error;}catch(e){$("#workspaceStatus").textContent=e.message;}};}catch(e){$("#workspaceStatus").textContent=e.message;}};
    $("#workspaceContent").querySelectorAll("[data-remove-comparison]").forEach(b=>b.onclick=()=>{const next=window.QI_WORKSPACE.data;next.comparisons.splice(Number(b.dataset.removeComparison),1);if(window.QI_WORKSPACE.save(next))renderWorkspace();else $("#workspaceStatus").textContent=window.QI_WORKSPACE.error;});
  }
  function learningHash(id){return id ? `#/learn?path=${encodeURIComponent(id)}` : "#/learn";}
  function learningStepLink(id,path){return `#/theory/${encodeURIComponent(id)}?from=learn&path=${encodeURIComponent(path)}`;}
  function renderPrimer(primer){
    if(!primer)return "";
    return `<section class="learning-primer" aria-label="Gravity and time primer"><h4>${esc(primer.title)}</h4>${primer.paragraphs.map((claim,i)=>`${profileClaim(claim)}${i===1?`<p class="primer-equation">${esc(primer.equation)}</p>`:""}`).join("")}<p class="reviewed">${esc(primer.sourceLocator)}</p></section>`;
  }
  function pathProgress(path,read){
    const marked=new Set(read);
    return {done:path.steps.filter(step=>marked.has(step.theoryId)).length,next:path.steps.find(step=>!marked.has(step.theoryId))||null};
  }
  function renderPathProgress(path,progress){
    const step=progress.next||path.steps[0];
    const action=!progress.next?"Review from start":progress.done?"Continue reading":"Start this path";
    return `<div class="learning-progress"><p>${progress.done} / ${path.steps.length} entries marked read${progress.next?"":" · All entries marked read"}</p><progress value="${progress.done}" max="${path.steps.length}" aria-label="${esc(path.title)} reading progress"></progress><p class="muted">${progress.next?`Next unread: ${esc(byId.get(step.theoryId).name)}`:"Revisit an entry or compare the approaches."}</p><a class="ghost link-button" data-resume-path="${path.id}" href="${learningStepLink(step.theoryId,path.id)}" aria-label="${esc(action+": "+path.title)}">${action}</a></div>`;
  }
  function renderLearningPaths(){
    const selected=learningPaths.find(p=>p.id===learningPathId);
    const shown=selected?[selected]:learningPaths;
    const read=window.QI_WORKSPACE.data.read;
    $("#learningPaths").innerHTML=`<div class="card comparison-panel"><div class="eyebrow">GUIDED READING</div><h3>Choose a question to explore</h3><p>Follow a suggested reading order, inspect the cited sources, then compare the approaches. These are editorial learning routes, not historical chains or claims of experimental confirmation.</p><div class="detail-actions">${learningPaths.map(p=>`<a class="ghost link-button" href="${learningHash(p.id)}"${p===selected?' aria-current="page"':""}>${esc(p.title)}</a>`).join("")}${selected?'<a class="ghost link-button" href="#/learn">All paths</a>':""}</div></div>${shown.map(p=>`<article class="card comparison-panel learning-path" data-learning-path="${p.id}"><h3>${esc(p.title)}</h3><p>${esc(p.goal)}</p><p><strong>Before you start:</strong> ${esc(p.prerequisites)}</p>${renderPrimer(p.primer)}${renderPathProgress(p,pathProgress(p,read))}<ol class="learning-steps">${p.steps.map(step=>`<li><a href="${learningStepLink(step.theoryId,p.id)}">${esc(byId.get(step.theoryId).name)}</a><span class="learning-step-status${read.includes(step.theoryId)?" is-read":""}">${read.includes(step.theoryId)?"Read":"Not read"}</span><p>${esc(step.why)}</p></li>`).join("")}</ol><div class="detail-actions"><a class="ghost link-button" href="${comparisonHash(p.comparison)}">Compare key entries</a><a class="ghost link-button" href="${learningHash(p.id)}">Permanent path link</a></div></article>`).join("")}`;
  }
  function renderLearningNavigation(id){
    const p=learningPaths.find(p=>p.id===learningPathId);
    const n=p?.steps.findIndex(step=>step.theoryId===id)??-1;
    if(state.returnView!=="learn" || n<0)return "";
    return `<nav class="detail-section" aria-label="Learning path navigation"><h4>${esc(p.title)} · Step ${n+1} of ${p.steps.length}</h4><p>${esc(p.steps[n].why)}</p><div class="detail-actions">${n>0?`<a class="ghost link-button" href="${learningStepLink(p.steps[n-1].theoryId,p.id)}">Previous step</a>`:""}<a class="ghost link-button" href="${learningHash(p.id)}">Path overview</a>${n<p.steps.length-1?`<a class="ghost link-button" href="${learningStepLink(p.steps[n+1].theoryId,p.id)}">Next step</a>`:`<a class="ghost link-button" href="${comparisonHash(p.comparison)}">Finish with a comparison</a>`}</div></nav>`;
  }
  function comparisonHash(ids){return ids.length ? `#/compare?ids=${ids.map(encodeURIComponent).join(",")}` : "#/compare";}
  function comparisonAction(id){
    const full=compareIds.length===4&&!compareIds.includes(id);
    const ids=full?compareIds:[...new Set([...compareIds,id])];
    return `<a class="ghost link-button" href="${comparisonHash(ids)}">${full?"Comparison full — edit selection":"Compare this entry"}</a>`;
  }
  function profileCitations(ids){
    return `<span class="profile-citations">${ids.map(id=>sourceById.get(id)).filter(Boolean).map(s=>`<a href="${esc(s.url)}" target="_blank" rel="noreferrer">${esc(s.authors)} · ${esc(s.year)}</a>`).join(" · ")}</span>`;
  }
  function profileClaim(claim){return `<p>${esc(claim.text)}</p>${profileCitations(claim.sourceIds)}`;}
  function renderResearchProfile(id){
    const p=profiles[id];if(!p)return "";
    return `<section class="research-profile" aria-label="Research profile">
      <div class="detail-section"><h4>Research profile</h4><p class="reviewed">Content reviewed ${esc(p.reviewedAt)} · Evidence descriptions refer to the cited work, not an exhaustive experimental-status review.</p></div>
      ${profileFields.map(([key,label])=>`<div class="detail-section"><h4>${key==="questions"?"Questions to investigate":label}</h4>${profileClaim(p[key])}</div>`).join("")}
      <div class="detail-section"><h4>Suggested prerequisites</h4><div class="detail-actions">${p.prerequisites.map(id=>`<a class="ghost link-button" href="${theoryLink(id)}">${esc(byId.get(id)?.name)}</a>`).join("")}</div><p class="reviewed">Suggested reading order; not a claim of historical influence.</p></div>
    </section>`;
  }
  function renderComparison(){
    const sorted=theories.slice().sort((a,b)=>a.name.localeCompare(b.name));
    $("#compareSelectors").innerHTML=Array.from({length:4},(_,i)=>`<div><label for="compareSlot${i}">Entry ${i+1}</label><input type="search" id="compareSearch${i}" data-compare-search="${i}" aria-label="Search entry ${i+1}" placeholder="Search name or alias"><select id="compareSlot${i}" data-compare-slot="${i}"><option value="">Choose an entry</option>${sorted.map(t=>`<option value="${t.id}"${compareIds[i]===t.id?" selected":""}>${esc(t.name)}</option>`).join("")}</select></div>`).join("");
    $("#compareSelectors").querySelectorAll("[data-compare-search]").forEach(input=>input.addEventListener("input",()=>{
      const slot=Number(input.dataset.compareSearch),q=input.value.trim().toLowerCase(),selected=compareIds[slot]||"";
      const matches=sorted.filter(t=>t.id===selected || [t.name,...t.aliases,...t.tags].join(" ").toLowerCase().includes(q));
      $("#compareSlot"+slot).innerHTML='<option value="">Choose an entry</option>'+matches.map(t=>`<option value="${t.id}"${t.id===selected?' selected':""}>${esc(t.name)}</option>`).join("");
      $("#comparisonNotice").textContent=`${matches.length} matching entries for slot ${slot+1}. Your current selection is retained.`;
    }));
    $("#compareSelectors").querySelectorAll("select").forEach(el=>el.addEventListener("change",()=>{
      const ids=[...$("#compareSelectors").querySelectorAll("select")].map(el=>el.value).filter(Boolean);
      navigate(comparisonHash([...new Set(ids)]));
    }));
    $("#comparisonPermalink").href=comparisonHash(compareIds);
    $("#comparisonNotice").textContent=compareIds.length<2?"Choose at least two entries for a side-by-side comparison.":`${compareIds.length} entries selected. The URL preserves this selection.`;
    const presets=window.QI_PROFILES?.comparisons || [];
    $("#comparisonPresets").innerHTML=presets.map(p=>`<a class="ghost link-button" href="${comparisonHash(p.theoryIds)}">${esc(p.name)}</a>`).join("");
    $("#profileCollection").innerHTML=Object.keys(profiles).map(id=>`<a class="source-link" href="#/theory/${encodeURIComponent(id)}?from=compare&compare=${compareIds.map(encodeURIComponent).join(",")}"><strong>${esc(byId.get(id)?.name)}</strong><span>${esc(byId.get(id)?.kind)} · Research profile</span></a>`).join("");
    $("#saveComparison")?.remove();
    if(compareIds.length>=2){const button=document.createElement("button");button.id="saveComparison";button.className="ghost";button.textContent="Save comparison";$("#comparisonPermalink").parentElement.append(button);button.onclick=()=>{const next=window.QI_WORKSPACE.data;const name=compareIds.map(id=>byId.get(id).name).join(" / ").slice(0,120);if(!next.comparisons.some(c=>JSON.stringify(c.theoryIds)===JSON.stringify(compareIds)))next.comparisons.push({name,theoryIds:compareIds.slice()});try{$("#comparisonNotice").textContent=window.QI_WORKSPACE.save(next)?"Comparison saved in My research.":window.QI_WORKSPACE.error;}catch(e){$("#comparisonNotice").textContent=e.message;}};}
    if(compareIds.length<2){$("#comparisonResults").innerHTML="";return;}
    const row=(label,fn)=>`<tr><th scope="row">${esc(label)}</th>${compareIds.map(id=>`<td>${fn(id)}</td>`).join("")}</tr>`;
    const missing='<p class="muted">Detailed profile not yet curated. Use the catalog summary and linked bibliography.</p>';
    $("#comparisonResults").innerHTML=`<div class="comparison-scroll" role="region" aria-label="Theory comparison table" tabindex="0"><table class="comparison-table"><caption>Side-by-side theory comparison</caption><thead><tr><th scope="col">Aspect</th>${compareIds.map(id=>`<th scope="col"><a href="#/theory/${encodeURIComponent(id)}?from=compare&compare=${compareIds.map(encodeURIComponent).join(",")}">${esc(byId.get(id).name)}</a></th>`).join("")}</tr></thead><tbody>
      ${row("Catalog type",id=>`<p>${esc(byId.get(id).kind)}</p><p>${esc(byId.get(id).category)}</p>`)}
      ${row("Overview",id=>`<p>${esc(byId.get(id).summary)}</p>`)}
      ${profileFields.map(([key,label])=>row(label,id=>profiles[id]?profileClaim(profiles[id][key]):missing)).join("")}
      ${row("Suggested prerequisites",id=>profiles[id]?profiles[id].prerequisites.map(pid=>`<p><a href="#/theory/${encodeURIComponent(pid)}?from=compare&compare=${compareIds.map(encodeURIComponent).join(",")}">${esc(byId.get(pid).name)}</a></p>`).join(""):missing)}
      ${row("Formula coverage",id=>{const a=formulaAuditByTheory.get(id);return a?.formulaIds.length?`<a href="${formulaLink(id)}">${a.formulaIds.length} linked formulas</a>`:`<p>${esc(a?.gapReason||"Not reviewed")}</p>`;})}
      ${row("Bibliography",id=>profileCitations(byId.get(id).sources))}
      </tbody></table></div><p class="reviewed">Scroll horizontally to compare columns on smaller screens. Existing catalog status labels are descriptive categories, not confidence scores.</p>`;
  }

  let simulation=null;
  function renderGraph(){
    simulation?.stop();
    const visible=filtered(), ids=new Set(visible.map(t=>t.id));
    const nodes=visible.map(t=>({...t}));
    const links=relations.filter(r=>ids.has(r.from)&&ids.has(r.to)).map(r=>({source:r.from,target:r.to,type:r.type,evidenceType:r.evidenceType,confidence:r.confidence,sourceIds:r.sourceIds}));
    const svg=d3.select("#network"), el=$("#network"), width=el.clientWidth||900, height=el.clientHeight||590;
    svg.selectAll("*").remove(); svg.attr("viewBox",[0,0,width,height]);
    const root=svg.append("g");
    svg.call(d3.zoom().scaleExtent([.25,3]).on("zoom",e=>root.attr("transform",e.transform)));
    const link=root.append("g").selectAll("line").data(links).join("line").attr("class","link").attr("stroke-width",d=>d.type==="overlaps"?1:1.4).attr("stroke-opacity",d=>d.confidence==="high"?.7:d.confidence==="medium"?.52:.3);
    link.append("title").text(d=>`${relationLabels[d.type]||d.type} · ${d.evidenceType} · ${d.confidence}`);
    const node=root.append("g").selectAll("g").data(nodes,d=>d.id).join("g").attr("class",d=>"node"+(d.id===state.selected?" selected":"")).attr("tabindex",0).attr("role","button").attr("aria-label",d=>`Open ${d.name}`).on("keydown",(e,d)=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();selectTheory(d.id);}}).on("click",(e,d)=>{e.stopPropagation();selectTheory(d.id);});
    node.append("circle").attr("r",d=>d.status.includes("established")?9:7).attr("fill",d=>categoryColors.get(d.category)||"#94a3b8");
    node.append("text").attr("class","node-label").attr("y",17).text(d=>d.name.length>26?d.name.slice(0,24)+"…":d.name);
    node.append("title").text(d=>`${d.name} · ${d.year}\n${d.summary}`);
    const drag=d3.drag().on("start",(e,d)=>{if(!e.active)simulation.alphaTarget(.2).restart();d.fx=d.x;d.fy=d.y;})
      .on("drag",(e,d)=>{d.fx=e.x;d.fy=e.y;}).on("end",(e,d)=>{if(!e.active)simulation.alphaTarget(0);d.fx=null;d.fy=null;});
    node.call(drag);
    simulation=d3.forceSimulation(nodes)
      .force("link",d3.forceLink(links).id(d=>d.id).distance(72).strength(.35))
      .force("charge",d3.forceManyBody().strength(-115))
      .force("center",d3.forceCenter(width/2,height/2))
      .force("collision",d3.forceCollide().radius(20))
      .on("tick",()=>{
        link.attr("x1",d=>d.source.x).attr("y1",d=>d.source.y).attr("x2",d=>d.target.x).attr("y2",d=>d.target.y);
        node.attr("transform",d=>`translate(${d.x},${d.y})`);
      });
  }

  function renderTimeline(){
    const list=filtered().slice().sort((a,b)=>a.year-b.year||a.name.localeCompare(b.name));
    const groups=d3.group(list,d=>d.era);
    $("#timeline").innerHTML=[...groups].map(([era,items])=>`
      <div class="timeline-era"><h4>${esc(era)}</h4><div class="timeline-items">
      ${items.map(t=>`<a class="timeline-card" href="#/theory/${encodeURIComponent(t.id)}?from=timeline"><span class="year">${t.year}</span><h5>${esc(t.name)}</h5><p>${esc(t.summary)}</p></a>`).join("")}
      </div></div>`).join("") || '<div class="empty-state">No theories match the current filters.</div>';
  }

  function renderTrees(){
    const selectedIndex=Math.min(state.selectedTree,Math.max(0,trees.length-1));
    state.selectedTree=selectedIndex;
    $("#thoughtTrees").innerHTML=trees.map((tree,i)=>`
      <button class="tree-choice ${i===selectedIndex?"active":""}" data-tree-index="${i}">
        <span>${esc(tree.name)}</span>
        <small>${tree.nodes.filter(id=>byId.has(id)).length} indexed ideas</small>
      </button>`).join("");
    $("#thoughtTrees").querySelectorAll("[data-tree-index]").forEach(el=>el.addEventListener("click",()=>{
      state.selectedTree=Number(el.dataset.treeIndex);
      renderTrees();
    }));
    renderThoughtTreeGraph();
  }

  function renderThoughtTreeGraph(){
    const tree=trees[state.selectedTree]||trees[0];
    const svg=d3.select("#thoughtTreeGraph");
    if(!tree || svg.empty()) return;
    $("#treeGraphTitle").textContent=tree.name;

    const nodes=tree.nodes.map(id=>byId.get(id)).filter(Boolean).map(t=>({...t}));
    const ids=new Set(nodes.map(n=>n.id));
    const links=relations.filter(r=>ids.has(r.from)&&ids.has(r.to)).map(r=>({...r,source:r.from,target:r.to}));
    const width=Math.max(920,Math.min(1500,nodes.length*68));
    const categories=[...new Set(nodes.map(n=>n.category))];
    const height=Math.max(430,categories.length*82+120);
    const years=nodes.map(n=>Number(n.year)).filter(Number.isFinite);
    const minYear=d3.min(years)??1900, maxYear=d3.max(years)??2026;
    const x=d3.scaleLinear().domain([minYear-2,maxYear+2]).range([115,width-70]);
    const y=d3.scalePoint().domain(categories).range([75,height-85]).padding(.35);

    nodes.forEach(n=>{n.x=x(Number(n.year)||minYear);n.y=y(n.category)??height/2;});
    const sim=d3.forceSimulation(nodes)
      .force("x",d3.forceX(n=>x(Number(n.year)||minYear)).strength(.95))
      .force("y",d3.forceY(n=>y(n.category)??height/2).strength(.75))
      .force("collide",d3.forceCollide(34))
      .force("charge",d3.forceManyBody().strength(-12))
      .stop();
    for(let i=0;i<180;i++) sim.tick();
    nodes.forEach(n=>{
      n.x=Math.max(105,Math.min(width-65,n.x));
      n.y=Math.max(55,Math.min(height-75,n.y));
    });
    const nodeById=new Map(nodes.map(n=>[n.id,n]));
    const resolvedLinks=links.map(l=>({...l,source:nodeById.get(l.from),target:nodeById.get(l.to)})).filter(l=>l.source&&l.target);

    svg.selectAll("*").remove();
    svg.attr("viewBox",`0 0 ${width} ${height}`).attr("preserveAspectRatio","xMinYMin meet");
    const defs=svg.append("defs");
    defs.append("marker").attr("id","tree-arrowhead").attr("viewBox","0 -5 10 10").attr("refX",13).attr("refY",0)
      .attr("markerWidth",5).attr("markerHeight",5).attr("orient","auto")
      .append("path").attr("d","M0,-5L10,0L0,5").attr("fill","#587386");

    const grid=svg.append("g").attr("class","tree-grid");
    categories.forEach(cat=>{
      const yy=y(cat);
      grid.append("line").attr("x1",105).attr("x2",width-45).attr("y1",yy).attr("y2",yy);
      grid.append("text").attr("x",12).attr("y",yy+3).text(cat.length>20?cat.slice(0,18)+"…":cat);
    });
    const tickYears=d3.ticks(minYear,maxYear,Math.min(8,Math.max(3,Math.round((maxYear-minYear)/15))));
    const axis=svg.append("g").attr("class","tree-year-axis").attr("transform",`translate(0,${height-42})`);
    tickYears.forEach(year=>{
      const xx=x(year);
      axis.append("line").attr("x1",xx).attr("x2",xx).attr("y1",-height+95).attr("y2",0);
      axis.append("text").attr("x",xx).attr("y",20).text(Math.round(year));
    });

    const linkLayer=svg.append("g").attr("class","tree-links");
    linkLayer.selectAll("path").data(resolvedLinks).join("path")
      .attr("d",l=>{
        const sx=l.source.x,sy=l.source.y,tx=l.target.x,ty=l.target.y,mx=(sx+tx)/2;
        return `M${sx},${sy} C${mx},${sy} ${mx},${ty} ${tx},${ty}`;
      })
      .attr("marker-end","url(#tree-arrowhead)")
      .append("title").text(l=>`${relationLabels[l.type]||l.type} · ${l.evidenceType} · ${l.confidence}${l.sourceIds?.length?` · ${l.sourceIds.length} source${l.sourceIds.length===1?"":"s"}`:""}`);

    const nodeLayer=svg.append("g");
    const node=nodeLayer.selectAll("g").data(nodes,d=>d.id).join("g")
      .attr("class",d=>"tree-graph-node"+(d.id===state.selected?" selected":""))
      .attr("transform",d=>`translate(${d.x},${d.y})`)
      .attr("tabindex",0).attr("role","button").attr("aria-label",d=>`Open ${d.name}`).on("keydown",(e,d)=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();selectTheory(d.id);}}).on("click",(e,d)=>{e.stopPropagation();selectTheory(d.id);});
    node.append("circle").attr("r",d=>d.status.includes("established")?8:6.5).attr("fill",d=>categoryColors.get(d.category)||"#94a3b8");
    node.append("text").attr("class","tree-graph-label").attr("y",-12).text(d=>d.name.length>24?d.name.slice(0,22)+"…":d.name);
    node.append("text").attr("class","tree-graph-year").attr("y",19).text(d=>d.year);
    node.append("title").text(d=>`${d.name} · ${d.year}\n${d.summary}`);

    $("#treeGraphMeta").textContent=`${nodes.length} ideas · ${resolvedLinks.length} typed links · ${minYear}–${maxYear}`;
  }

  function ancestors(id, seen=new Set(), depth=0){
    if(depth>4)return[]; let out=[];
    for(const r of relations.filter(r=>r.to===id && ["precursor","extends","supports","motivates","reformulates","formalizes","unifies","generalizes"].includes(r.type))){
      if(seen.has(r.from))continue; seen.add(r.from); out.push(byId.get(r.from)); out.push(...ancestors(r.from,seen,depth+1));
    }
    return [...new Map(out.filter(Boolean).map(x=>[x.id,x])).values()];
  }
  function descendants(id, seen=new Set(), depth=0){
    if(depth>4)return[]; let out=[];
    for(const r of relations.filter(r=>r.from===id && ["precursor","extends","supports","motivates","reformulates","formalizes","unifies","generalizes"].includes(r.type))){
      if(seen.has(r.to))continue; seen.add(r.to); out.push(byId.get(r.to)); out.push(...descendants(r.to,seen,depth+1));
    }
    return [...new Map(out.filter(Boolean).map(x=>[x.id,x])).values()];
  }
  function renderLineage(){
    const t=byId.get(state.selected);
    d3.selectAll(".tree-graph-node").classed("selected",d=>t&&d.id===t.id);
    if(!t){$("#lineageTitle").textContent="Choose a theory";$("#lineageDetail").className="lineage-detail empty";$("#lineageDetail").textContent="Select any theory in a tree, the map, timeline, or catalog.";return;}
    $("#lineageTitle").textContent=t.name; $("#lineageDetail").className="lineage-detail";
    const a=ancestors(t.id).sort((x,y)=>x.year-y.year), d=descendants(t.id).sort((x,y)=>x.year-y.year);
    const lateral=related(t.id).filter(x=>["overlaps","challenged by","challenges"].includes(x.r.type)).map(x=>x.other);
    const chips=arr=>arr.length?arr.map(x=>`<span class="lineage-chip" data-id="${x.id}">${esc(x.year)} · ${esc(x.name)}</span>`).join(""):'<span class="muted">No typed entries yet.</span>';
    $("#lineageDetail").innerHTML=`
      <p class="muted">${esc(t.summary)}</p>
      <div class="lineage-block"><h4>Upstream ideas</h4>${chips(a)}</div>
      <div class="lineage-block"><h4>Downstream progression</h4>${chips(d)}</div>
      <div class="lineage-block"><h4>Rivals / overlaps</h4>${chips(lateral)}</div>`;
    $("#lineageDetail").querySelectorAll("[data-id]").forEach(el=>el.addEventListener("click",()=>selectTheory(el.dataset.id)));
  }

  function renderCatalog(){
    const list=filtered().sort((a,b)=>a.year-b.year||a.name.localeCompare(b.name));
    $("#resultCount").textContent=`${list.length} results`;
    $("#catalog").innerHTML=list.map(t=>`
      <a class="catalog-card" href="#/theory/${encodeURIComponent(t.id)}?from=catalog">
        <div class="meta"><span>${esc(t.year)} · ${esc(t.era)}</span><span>${esc(t.kind)}</span></div>
        <h4>${esc(t.name)}</h4><p>${esc(t.summary)}</p>
        <div class="badges"><span class="tag">${esc(t.category)}</span></div>
      </a>`).join("") || '<div class="empty-state">No theories match the current filters.</div>';
  }


  function filteredFormulas(){
    const q=formulaState.search.trim().toLowerCase();
    return formulas.filter(f=>{
      const theoryText=f.theoryIds.map(id=>byId.get(id)?.name||id).join(" ");
      return (!q || [f.name,f.category,f.plain,f.description,...(f.tags||[]),theoryText].join(" ").toLowerCase().includes(q)) &&
        (!formulaState.category || f.category===formulaState.category) &&
        (!formulaState.type || f.formulaType===formulaState.type) &&
        (!formulaState.theory || f.theoryIds.includes(formulaState.theory));
    });
  }

  function typesetFormulaGrid(){
    const el=$("#formulaGrid");
    if(!el) return;
    const doTypeset=()=>{
      if(window.MathJax?.typesetPromise){
        window.MathJax.typesetClear?.([el]);
        window.MathJax.typesetPromise([el]).catch(()=>{});
      }
    };
    doTypeset();
    if(!window.MathJax?.typesetPromise) setTimeout(doTypeset,700);
  }

  function renderFormulas(){
    const list=filteredFormulas();
    $("#formulaCount").textContent=`${list.length} / ${formulas.length} formulas`;
    $("#formulaGrid").innerHTML=list.map(f=>{
      const theoriesHtml=f.theoryIds.map(id=>{
        const t=byId.get(id);
        return t?`<button class="formula-theory" data-theory="${id}">${esc(t.name)}</button>`:"";
      }).join("");
      const sourcesHtml=f.sourceIds.map(id=>{
        const s=sourceById.get(id);
        const location=f.sourceLocations?.find(location=>location.sourceId===id);
        return s?`<a class="formula-source" href="${esc(location?.url || s.url)}" target="_blank" rel="noreferrer">${esc(s.authors)} · ${esc(s.year)}${location?` · ${esc(location.locator)}`:""}</a>`:"";
      }).join("");
      return `
        <article class="formula-card">
          <div class="formula-meta"><span>${esc(f.category)}</span><span>${f.sourceIds.length} source${f.sourceIds.length===1?"":"s"}</span></div>
          <div class="formula-role-row"><span class="formula-role">${esc(f.formulaType)}</span><span>${esc(f.theoryRelationship)}</span></div>
          <h4>${esc(f.name)}</h4>
          <div class="formula-equation">\\[${esc(f.latex)}\\]</div>
          <div class="formula-plain">${esc(f.plain)}</div>
          <p>${esc(f.description)}</p>
          <dl class="formula-detail">
            <div><dt>Regime</dt><dd>${esc(f.regime)}</dd></div>
            <div><dt>Assumptions</dt><dd>${f.assumptions.length?f.assumptions.map(esc).join("; "):"No additional assumptions recorded in the baseline audit."}</dd></div>
            <div><dt>Variables</dt><dd>${f.variables.length?f.variables.map(esc).join("; "):"See equation and linked source."}</dd></div>
            <div><dt>Units</dt><dd>${esc(f.units)}</dd></div>
          </dl>
          <div class="formula-theories">${theoriesHtml}</div>
          <div class="formula-sources">${sourcesHtml}</div>
        </article>`;
    }).join("") || '<div class="empty-state">No formulas match these filters.</div>';
    $("#formulaGrid").querySelectorAll("[data-theory]").forEach(el=>el.addEventListener("click",()=>{
      selectTheory(el.dataset.theory);
    }));
    typesetFormulaGrid();
  }

  function renderAll(){
    renderStats();renderLegend();renderGraph();renderTimeline();renderCatalog();renderLineage();renderDetail();renderFormulas();
  }
  function switchView(view){
    state.view=view;
    $$(".tab").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
    $$(".view").forEach(v=>v.classList.remove("active"));
    $("#"+view+"View").classList.add("active");
    if(view==="compare") renderComparison();
    if(view==="learn") renderLearningPaths();
    if(view==="workspace") renderWorkspace();
    $(".controls").hidden=!["map","timeline","catalog"].includes(view);
    $("#filterScope").hidden=$(".controls").hidden;
    $("#formulaReturn").hidden=view!=="formula" || !safeReturn(new URLSearchParams(location.hash.split("?").slice(1).join("?")).get("returnTo"));
    if(view==="map") setTimeout(renderGraph,0);
    if(view==="lineage") setTimeout(renderThoughtTreeGraph,0);
    if(view==="formula") setTimeout(()=>{renderFormulas();typesetFormulaGrid();},0);
  }
  const views=new Set(["map","timeline","lineage","catalog","formula","compare","learn","workspace"]);
  function navigate(hash){
    if(location.hash===hash) applyRoute();
    else location.hash=hash;
  }
  function applyRoute(){
    const [path,query=""]=location.hash.replace(/^#\/?/,"").split("?");
    const params=new URLSearchParams(query);
    const isTheory=path.startsWith("theory/");
    let id=null;
    try { id=isTheory?decodeURIComponent(path.slice(7)):params.get("theory"); } catch {}
    if(isTheory){
      state.returnView=views.has(params.get("from"))?params.get("from"):"map";
      if(state.returnView==="compare" && params.has("compare")) compareIds=[...new Set(params.get("compare").split(",").filter(id=>byId.has(id)))].slice(0,4);
      learningPathId=learningPaths.some(p=>p.id===params.get("path"))?params.get("path"):"";
      state.selected=byId.has(id)?id:null;
      renderDetail();renderLineage();
      const back=$("#backToView");
      back.href=safeReturn(params.get("returnTo")) || (state.returnView==="learn" ? learningHash(learningPathId) : state.returnView==="compare" ? comparisonHash(compareIds) : state.returnView==="formula" && formulaState.theory ? `#/formula?theory=${encodeURIComponent(formulaState.theory)}` : `#/${state.returnView}`);
      back.textContent=`← Back to ${state.returnView==="map"?"network map":state.returnView==="lineage"?"thought trees":state.returnView==="formula"?"formula atlas":state.returnView}`;
      if(!state.selected) $("#theoryDetail").innerHTML='<h3 class="detail-title">Theory not found</h3><p>This link does not match an entry in the current catalog.</p><a class="ghost link-button" href="#/catalog">Browse the catalog</a>';
      switchView("theory");
      document.title=state.selected?`${byId.get(id).name} · Quantum Index`:"Theory not found · Quantum Index";
      $("#theoryDetail").focus({preventScroll:true});
      $("#theoryView").scrollIntoView({block:"start"});
      return;
    }
    const view=views.has(path)?path:"map";
    if(byId.has(id)) state.selected=id;
    if(view==="compare") compareIds=[...new Set((params.get("ids")||"").split(",").filter(id=>byId.has(id)))].slice(0,4);
    if(view==="learn") learningPathId=learningPaths.some(p=>p.id===params.get("path"))?params.get("path"):"";
    if(view==="formula"){
      const returnTo=safeReturn(params.get("returnTo"));
      $("#formulaReturn").innerHTML=returnTo?`<a class="ghost link-button" href="${esc(returnTo)}">Back to previous view</a>`:"";
      formulaState.theory=byId.has(id)?id:"";
      $("#formulaTheory").value=formulaState.theory;
      if(id){
        Object.assign(formulaState,{search:"",category:"",type:""});
        $("#formulaSearch").value="";$("#formulaCategory").value="";$("#formulaType").value="";
      }
    }
    renderDetail();renderLineage();switchView(view);
    document.title="Quantum Index";
  }
  $$(".tab").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.view==="compare"?comparisonHash(compareIds):`#/${b.dataset.view}`)));
  $("#clearComparison").addEventListener("click",()=>navigate("#/compare"));
  window.addEventListener("hashchange",applyRoute);
  $("#search").addEventListener("input",e=>{state.search=e.target.value;renderGraph();renderTimeline();renderCatalog();});
  $("#categoryFilter").addEventListener("change",e=>{state.category=e.target.value;renderGraph();renderTimeline();renderCatalog();});
  $("#kindFilter").addEventListener("change",e=>{state.kind=e.target.value;renderGraph();renderTimeline();renderCatalog();});
  $("#statusFilter").addEventListener("change",e=>{state.status=e.target.value;renderGraph();renderTimeline();renderCatalog();});
  $("#eraFilter").addEventListener("change",e=>{state.era=e.target.value;renderGraph();renderTimeline();renderCatalog();});
  $("#sourcedOnly").addEventListener("change",e=>{state.sourcedOnly=e.target.checked;renderGraph();renderTimeline();renderCatalog();});
  $("#formulaSearch").addEventListener("input",e=>{formulaState.search=e.target.value;renderFormulas();});
  $("#formulaCategory").addEventListener("change",e=>{formulaState.category=e.target.value;renderFormulas();});
  $("#formulaType").addEventListener("change",e=>{formulaState.type=e.target.value;renderFormulas();});
  $("#formulaTheory").addEventListener("change",e=>{formulaState.theory=e.target.value;renderFormulas();});
  $("#resetView").addEventListener("click",()=>{
    Object.assign(state,{search:"",category:"",kind:"",status:"",era:"",sourcedOnly:false});
    $("#search").value="";$("#categoryFilter").value="";$("#kindFilter").value="";$("#statusFilter").value="";$("#eraFilter").value="";$("#sourcedOnly").checked=false;renderAll();
  });
  window.addEventListener("resize",()=>{if(state.view==="map")renderGraph();});
  renderTrees();renderAll();applyRoute();
})();
