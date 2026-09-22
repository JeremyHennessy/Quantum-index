(() => {
  const { theories, relations, trees } = window.QI_DATA;
  const byId = new Map(theories.map(t => [t.id,t]));
  const state = { search:"", category:"", status:"", era:"", sourcedOnly:false, selected:null, view:"map" };
  const categoryColors = new Map([
    ["Historical foundations","#f59e0b"],["Formulations","#60a5fa"],["Foundations & interpretations","#c084fc"],
    ["Quantum field theory","#34d399"],["Quantum information & open systems","#22d3ee"],["Quantum gravity & spacetime","#f472b6"],
    ["Quantum cosmology","#fb7185"],["Beyond standard quantum theory","#facc15"],["Mathematical structures","#a3e635"]
  ]);
  const relationLabels = {
    precursor:"precursor of",reformulates:"reformulates",extends:"extends","challenged by":"challenges / challenged by",
    interprets:"interprets",unifies:"feeds into / unifies",supports:"supports",generalizes:"generalizes",overlaps:"overlaps",motivates:"motivates",formalizes:"formalizes"
  };
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const esc = v => String(v ?? "").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));

  function filtered(){
    const q = state.search.trim().toLowerCase();
    return theories.filter(t =>
      (!q || [t.name,t.summary,t.core,...t.tags,...t.aliases].join(" ").toLowerCase().includes(q)) &&
      (!state.category || t.category===state.category) &&
      (!state.status || t.status===state.status) &&
      (!state.era || t.era===state.era) &&
      (!state.sourcedOnly || t.provenance==="sourced")
    );
  }

  function setOptions(sel, values){
    const el=$(sel), first=el.firstElementChild.outerHTML;
    el.innerHTML=first+values.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join("");
  }
  setOptions("#categoryFilter",[...new Set(theories.map(t=>t.category))].sort());
  setOptions("#statusFilter",[...new Set(theories.map(t=>t.status))].sort());
  setOptions("#eraFilter",[...new Set(theories.map(t=>t.era))]);

  function renderStats(){
    const cat=new Set(theories.map(t=>t.category)).size;
    const sourced=theories.filter(t=>t.provenance==="sourced").length;
    $("#stats").innerHTML=[
      [theories.length,"catalogued theories & frameworks"],
      [cat,"major categories"],
      [relations.length,"typed connections"],
      [`${sourced}/${theories.length}`,"dedicated source pass complete"]
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

  function selectTheory(id, switchLineage=false){
    const t=byId.get(id); if(!t)return;
    state.selected=id;
    renderDetail();
    renderLineage();
    d3.selectAll(".node").classed("selected",d=>d.id===id);
    if(switchLineage){ switchView("lineage"); }
  }

  function renderDetail(){
    const panel=$("#detailPanel");
    const t=byId.get(state.selected);
    if(!t){panel.innerHTML=$("#emptyDetail").innerHTML;return;}
    const rel=related(t.id);
    const provenance=t.provenance==="sourced"?"Sourced":"Catalog seed · source pass pending";
    panel.innerHTML=`
      <p class="eyebrow">${esc(t.category)}</p>
      <h3 class="detail-title">${esc(t.name)}</h3>
      ${t.aliases.length?`<div class="aliases">Also: ${t.aliases.map(esc).join(", ")}</div>`:""}
      <div class="badge-row">
        <span class="badge">${esc(t.year)}</span>
        <span class="badge status-${t.status.includes("established")?"established":t.status.includes("interpretation")?"interpretation":t.status.includes("speculative")?"speculative":""}">${esc(t.status)}</span>
        <span class="badge">${esc(provenance)}</span>
      </div>
      <div class="detail-section"><h4>What it is</h4><p>${esc(t.summary)}</p></div>
      <div class="detail-section"><h4>Core idea</h4><p>${esc(t.core)}</p></div>
      <div class="detail-section"><h4>Concepts</h4><div class="tag-list">${t.tags.map(x=>`<span class="tag">${esc(x)}</span>`).join("")}</div></div>
      <div class="detail-section"><h4>Connections · ${rel.length}</h4><div class="relation-list">
        ${rel.slice().sort((a,b)=>a.other.year-b.other.year).map(({r,other,outbound})=>`
          <div class="relation" data-id="${other.id}">
            <span>${esc(other.name)}</span>
            <small>${esc(relationLabels[r.type]||r.type)}${outbound?" →":" ←"}</small>
          </div>`).join("")||'<p>No typed connections yet.</p>'}
      </div></div>
      <div class="detail-section"><button class="ghost" id="traceLineage">Trace thought tree</button></div>`;
    panel.querySelectorAll(".relation").forEach(el=>el.addEventListener("click",()=>selectTheory(el.dataset.id)));
    $("#traceLineage").addEventListener("click",()=>selectTheory(t.id,true));
  }

  let simulation=null;
  function renderGraph(){
    const visible=filtered(), ids=new Set(visible.map(t=>t.id));
    const nodes=visible.map(t=>({...t}));
    const links=relations.filter(r=>ids.has(r.from)&&ids.has(r.to)).map(r=>({source:r.from,target:r.to,type:r.type}));
    const svg=d3.select("#network"), el=$("#network"), width=el.clientWidth||900, height=el.clientHeight||590;
    svg.selectAll("*").remove(); svg.attr("viewBox",[0,0,width,height]);
    const root=svg.append("g");
    svg.call(d3.zoom().scaleExtent([.25,3]).on("zoom",e=>root.attr("transform",e.transform)));
    const link=root.append("g").selectAll("line").data(links).join("line").attr("class","link").attr("stroke-width",d=>d.type==="overlaps"?1:1.4);
    const node=root.append("g").selectAll("g").data(nodes,d=>d.id).join("g").attr("class",d=>"node"+(d.id===state.selected?" selected":"")).on("click",(e,d)=>{e.stopPropagation();selectTheory(d.id);});
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
      ${items.map(t=>`<div class="timeline-card" data-id="${t.id}"><span class="year">${t.year}</span><h5>${esc(t.name)}</h5><p>${esc(t.summary)}</p></div>`).join("")}
      </div></div>`).join("") || '<div class="empty-state">No theories match the current filters.</div>';
    $("#timeline").querySelectorAll("[data-id]").forEach(el=>el.addEventListener("click",()=>selectTheory(el.dataset.id)));
  }

  function renderTrees(){
    $("#thoughtTrees").innerHTML=trees.map(tree=>`
      <div class="tree"><h4>${esc(tree.name)}</h4><div class="tree-rail">
        ${tree.nodes.filter(id=>byId.has(id)).map((id,i)=>`${i?'<span class="tree-arrow">→</span>':""}<button class="tree-node" data-id="${id}">${esc(byId.get(id).name)}</button>`).join("")}
      </div></div>`).join("");
    $("#thoughtTrees").querySelectorAll("[data-id]").forEach(el=>el.addEventListener("click",()=>selectTheory(el.dataset.id)));
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
    if(!t){$("#lineageTitle").textContent="Choose a theory";$("#lineageDetail").className="lineage-detail empty";$("#lineageDetail").textContent="Select any theory in a tree, the map, timeline, or catalog.";return;}
    $("#lineageTitle").textContent=t.name; $("#lineageDetail").className="lineage-detail";
    const a=ancestors(t.id).sort((x,y)=>x.year-y.year), d=descendants(t.id).sort((x,y)=>x.year-y.year);
    const lateral=related(t.id).filter(x=>["overlaps","challenged by"].includes(x.r.type)).map(x=>x.other);
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
      <article class="catalog-card" data-id="${t.id}">
        <div class="meta"><span>${esc(t.year)} · ${esc(t.era)}</span><span>${esc(t.status)}</span></div>
        <h4>${esc(t.name)}</h4><p>${esc(t.summary)}</p>
        <div class="badges"><span class="tag">${esc(t.category)}</span></div>
      </article>`).join("") || '<div class="empty-state">No theories match the current filters.</div>';
    $("#catalog").querySelectorAll("[data-id]").forEach(el=>el.addEventListener("click",()=>selectTheory(el.dataset.id)));
  }

  function renderAll(){
    renderStats();renderLegend();renderGraph();renderTimeline();renderCatalog();renderLineage();renderDetail();
  }
  function switchView(view){
    state.view=view;
    $$(".tab").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
    $$(".view").forEach(v=>v.classList.remove("active"));
    $("#"+view+"View").classList.add("active");
    if(view==="map") setTimeout(renderGraph,0);
  }
  $$(".tab").forEach(b=>b.addEventListener("click",()=>switchView(b.dataset.view)));
  $("#search").addEventListener("input",e=>{state.search=e.target.value;renderGraph();renderTimeline();renderCatalog();});
  $("#categoryFilter").addEventListener("change",e=>{state.category=e.target.value;renderGraph();renderTimeline();renderCatalog();});
  $("#statusFilter").addEventListener("change",e=>{state.status=e.target.value;renderGraph();renderTimeline();renderCatalog();});
  $("#eraFilter").addEventListener("change",e=>{state.era=e.target.value;renderGraph();renderTimeline();renderCatalog();});
  $("#sourcedOnly").addEventListener("change",e=>{state.sourcedOnly=e.target.checked;renderGraph();renderTimeline();renderCatalog();});
  $("#resetView").addEventListener("click",()=>{
    Object.assign(state,{search:"",category:"",status:"",era:"",sourcedOnly:false});
    $("#search").value="";$("#categoryFilter").value="";$("#statusFilter").value="";$("#eraFilter").value="";$("#sourcedOnly").checked=false;renderAll();
  });
  window.addEventListener("resize",()=>{if(state.view==="map")renderGraph();});
  renderTrees();renderAll();
})();