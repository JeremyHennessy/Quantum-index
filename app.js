(() => {
  const { theories, relations, trees, sources } = window.QI_DATA;
  const formulas = window.QI_FORMULAS?.formulas || [];
  const byId = new Map(theories.map(t => [t.id,t]));
  const sourceById = new Map(sources.map(s => [s.id,s]));
  const state = { search:"", category:"", kind:"", status:"", era:"", sourcedOnly:false, selected:null, selectedTree:0, view:"map" };
  const formulaState = { search:"", category:"", theory:"" };
  const categoryColors = new Map([
    ["Historical foundations","#f59e0b"],["Formulations","#60a5fa"],["Foundations & interpretations","#c084fc"],
    ["Quantum field theory","#34d399"],["Quantum information & open systems","#22d3ee"],["Quantum gravity & spacetime","#f472b6"],
    ["Quantum cosmology","#fb7185"],["Beyond standard quantum theory","#facc15"],["Mathematical structures","#a3e635"],
    ["Quantum optics & AMO","#f0abfc"],["Quantum many-body & condensed matter","#2dd4bf"],["Quantum chemistry & electronic structure","#a7f3d0"]
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

  function selectTheory(id, switchLineage=false){
    const t=byId.get(id); if(!t)return;
    state.selected=id;
    renderDetail();
    renderLineage();
    d3.selectAll(".node").classed("selected",d=>d.id===id);
    d3.selectAll(".tree-graph-node").classed("selected",d=>d.id===id);
    if(switchLineage){ switchView("lineage"); }
  }

  function renderDetail(){
    const panel=$("#detailPanel");
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
      <div class="detail-section"><h4>Core idea</h4><p>${esc(t.core)}</p></div>
      <div class="detail-section"><h4>Concepts</h4><div class="tag-list">${t.tags.map(x=>`<span class="tag">${esc(x)}</span>`).join("")}</div></div>
      <div class="detail-section"><h4>Sources · ${linkedSources.length}</h4>
        ${linkedSources.length ? `<div class="source-list">${linkedSources.map(s=>`<a class="source-link" href="${esc(s.url)}" target="_blank" rel="noreferrer"><strong>${esc(s.title)}</strong><span>${esc(s.authors)} · ${esc(s.year)} · ${esc(s.type)}</span></a>`).join("")}</div>` : '<p>Dedicated source pass not completed for this entry yet.</p>'}
        ${t.lastReviewed?`<p class="reviewed">Last source review: ${esc(t.lastReviewed)}</p>`:""}
      </div>
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
      .append("title").text(l=>relationLabels[l.type]||l.type);

    const nodeLayer=svg.append("g");
    const node=nodeLayer.selectAll("g").data(nodes,d=>d.id).join("g")
      .attr("class",d=>"tree-graph-node"+(d.id===state.selected?" selected":""))
      .attr("transform",d=>`translate(${d.x},${d.y})`)
      .on("click",(e,d)=>{e.stopPropagation();selectTheory(d.id);});
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
        <div class="meta"><span>${esc(t.year)} · ${esc(t.era)}</span><span>${esc(t.kind)}</span></div>
        <h4>${esc(t.name)}</h4><p>${esc(t.summary)}</p>
        <div class="badges"><span class="tag">${esc(t.category)}</span></div>
      </article>`).join("") || '<div class="empty-state">No theories match the current filters.</div>';
    $("#catalog").querySelectorAll("[data-id]").forEach(el=>el.addEventListener("click",()=>selectTheory(el.dataset.id)));
  }


  function filteredFormulas(){
    const q=formulaState.search.trim().toLowerCase();
    return formulas.filter(f=>{
      const theoryText=f.theoryIds.map(id=>byId.get(id)?.name||id).join(" ");
      return (!q || [f.name,f.category,f.plain,f.description,...(f.tags||[]),theoryText].join(" ").toLowerCase().includes(q)) &&
        (!formulaState.category || f.category===formulaState.category) &&
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
        return s?`<a class="formula-source" href="${esc(s.url)}" target="_blank" rel="noreferrer">${esc(s.authors)} · ${esc(s.year)}</a>`:"";
      }).join("");
      return `
        <article class="formula-card">
          <div class="formula-meta"><span>${esc(f.category)}</span><span>${f.sourceIds.length} source${f.sourceIds.length===1?"":"s"}</span></div>
          <h4>${esc(f.name)}</h4>
          <div class="formula-equation">\\[${esc(f.latex)}\\]</div>
          <div class="formula-plain">${esc(f.plain)}</div>
          <p>${esc(f.description)}</p>
          <div class="formula-theories">${theoriesHtml}</div>
          <div class="formula-sources">${sourcesHtml}</div>
        </article>`;
    }).join("") || '<div class="empty-state">No formulas match these filters.</div>';
    $("#formulaGrid").querySelectorAll("[data-theory]").forEach(el=>el.addEventListener("click",()=>{
      selectTheory(el.dataset.theory);
      switchView("map");
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
    if(view==="map") setTimeout(renderGraph,0);
    if(view==="lineage") setTimeout(renderThoughtTreeGraph,0);
    if(view==="formula") setTimeout(()=>{renderFormulas();typesetFormulaGrid();},0);
  }
  $$(".tab").forEach(b=>b.addEventListener("click",()=>switchView(b.dataset.view)));
  $("#search").addEventListener("input",e=>{state.search=e.target.value;renderGraph();renderTimeline();renderCatalog();});
  $("#categoryFilter").addEventListener("change",e=>{state.category=e.target.value;renderGraph();renderTimeline();renderCatalog();});
  $("#kindFilter").addEventListener("change",e=>{state.kind=e.target.value;renderGraph();renderTimeline();renderCatalog();});
  $("#statusFilter").addEventListener("change",e=>{state.status=e.target.value;renderGraph();renderTimeline();renderCatalog();});
  $("#eraFilter").addEventListener("change",e=>{state.era=e.target.value;renderGraph();renderTimeline();renderCatalog();});
  $("#sourcedOnly").addEventListener("change",e=>{state.sourcedOnly=e.target.checked;renderGraph();renderTimeline();renderCatalog();});
  $("#formulaSearch").addEventListener("input",e=>{formulaState.search=e.target.value;renderFormulas();});
  $("#formulaCategory").addEventListener("change",e=>{formulaState.category=e.target.value;renderFormulas();});
  $("#formulaTheory").addEventListener("change",e=>{formulaState.theory=e.target.value;renderFormulas();});
  $("#resetView").addEventListener("click",()=>{
    Object.assign(state,{search:"",category:"",kind:"",status:"",era:"",sourcedOnly:false});
    $("#search").value="";$("#categoryFilter").value="";$("#kindFilter").value="";$("#statusFilter").value="";$("#eraFilter").value="";$("#sourcedOnly").checked=false;renderAll();
  });
  window.addEventListener("resize",()=>{if(state.view==="map")renderGraph();});
  renderTrees();renderAll();
})();