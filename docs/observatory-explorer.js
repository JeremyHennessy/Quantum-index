/* Observatory Explorer is intentionally separate from the approved Quantum Index renderer. */
(() => {
  "use strict";
  const DATA_URL="./observatory-registry.json";
  const domains=[
    {id:"all",label:"All research",symbol:"✦"},
    {id:"cmb",label:"Cosmic origins",symbol:"◎"},
    {id:"large-scale-structure",label:"Dark energy & structure",symbol:"↗"},
    {id:"dark-matter-direct",label:"Direct dark-matter searches",symbol:"◈"},
    {id:"astrophysics",label:"Astrophysics",symbol:"✧"},
    {id:"high-energy-sky",label:"High-energy sky",symbol:"✳"},
    {id:"multimessenger",label:"Multimessenger",symbol:"◉"},
    {id:"gravitational-waves",label:"Gravitational waves",symbol:"∿"},
    {id:"radio-astronomy",label:"Radio astronomy",symbol:"⌁"}
  ];
  const accessModes=[
    {id:"all",label:"All releases"},
    {id:"public",label:"Public observational data",match:["public-observational-products","public-archive-api"]},
    {id:"analysis",label:"Analysis products",match:["public-analysis-products-only"]},
    {id:"restricted",label:"Rights restricted",match:["rights-restricted-observational-products"]},
    {id:"results",label:"Published results only",match:["published-result-only"]},
    {id:"planned",label:"Planned data",match:["planned-no-observational-products"]}
  ];
  const accessLabels={
    "public-observational-products":"Public observational products",
    "public-analysis-products-only":"Public analysis products only",
    "rights-restricted-observational-products":"Access restricted",
    "published-result-only":"Published result only",
    "planned-no-observational-products":"Planned / no public product",
    "public-archive-api":"Public archive API",
    "unknown":"Access not assessed"
  };
  const statusLabels={
    "science-operations":"Science operations reported",
    "science-commissioning":"Science commissioning reported",
    "not-assessed":"Operational status not assessed",
    "planned":"Planned"
  };
  const problemNames={
    "dark-matter":"Dark matter",
    "dark-energy-expansion":"Dark energy and expansion history",
    "inflation-mechanism":"Inflation and initial conditions",
    "primordial-quantum-classical":"Quantum-to-classical primordial fluctuations",
    "black-hole-information":"Black-hole information",
    "quantum-gravity":"Quantum gravity"
  };
  const $=selector=>document.querySelector(selector);
  const el=(tag,className,text)=>{
    const n=document.createElement(tag);
    if(className)n.className=className;
    if(text!==undefined && text!==null)n.textContent=String(text);
    return n;
  };
  const link=(href,text,className="")=>{
    const n=el("a",className,text);
    try{
      const url=new URL(href,location.href);
      if(url.protocol!=="https:"&&url.origin!==location.origin)return el("span",className,text);
      n.href=url.href;
      if(url.origin!==location.origin){n.target="_blank";n.rel="noopener noreferrer";}
    }catch{return el("span",className,text);}
    return n;
  };
  const append=(parent,...children)=>{for(const x of children)if(x)parent.appendChild(x);return parent;};
  const empty=parent=>parent.replaceChildren();
  let registry=null;
  let state={domain:"all",access:"all",search:"",selected:"desi"};

  function sourcesFor(ids){return (ids||[]).map(id=>registry.sources.find(s=>s.id===id)).filter(Boolean);}
  function releasesFor(programme){return registry.releases.filter(r=>r.programmeId===programme.id||(r.sharedProgramIds||[]).includes(programme.id));}
  function studiesFor(programme){return registry.studies.filter(s=>(s.programmeIds||[]).includes(programme.id));}
  function milestonesFor(programme){return registry.milestones.filter(s=>s.programmeId===programme.id);}
  function safeSearchValue(p){
    const sources=sourcesFor(p.sourceIds);
    return [p.id,p.name,p.kind,p.domain,p.reviewNote,p.programState,
      ...releasesFor(p).flatMap(r=>[r.title,r.version,r.reviewNotes]),
      ...studiesFor(p).map(s=>s.title),
      ...sources.map(s=>s.title)
    ].filter(Boolean).join(" ").toLowerCase();
  }
  function filtered(){
    const q=state.search.trim().toLowerCase();
    const mode=accessModes.find(x=>x.id===state.access);
    return registry.programmes.filter(p=>
      (state.domain==="all"||p.domain===state.domain) &&
      (state.access==="all"||releasesFor(p).some(r=>mode.match.includes(r.access))) &&
      (!q||safeSearchValue(p).includes(q))
    ).sort((a,b)=>a.name.localeCompare(b.name));
  }
  function selectedItem(rows){
    return rows.find(p=>p.id===state.selected)||rows[0]||null;
  }
  function updateUrl(id){
    if(!id)return;
    const url=new URL(location.href);
    url.searchParams.set("programme",id);
    history.replaceState(null,"",url.pathname+url.search+url.hash);
  }
  function renderCounters(){
    const values=[
      [registry.programmes.length,"programmes"],
      [registry.releases.length,"release records"],
      [registry.studies.length,"studies"],
      [registry.milestones.length,"milestones"]
    ];
    const blocks=[...$("#summaryCounters").children];
    values.forEach(([n,label],i)=>{
      blocks[i].querySelector("strong").textContent=n;
      blocks[i].querySelector("span").textContent=label;
    });
    $("#updatedIndicator").textContent="Metadata checked "+registry.reviewedAt+" · source-specific review scopes apply";
  }
  function chooseDomain(domain){
    state.domain=domain;
    state.access="all";
    $("#registrySearch").value="";
    state.search="";
    renderDomains();
    renderAccess();
    renderProgrammes();
    $("#researchCatalogue").scrollIntoView({behavior:"smooth",block:"start"});
  }
  function renderDomains(){
    const container=$("#domainNav");
    empty(container);
    domains.forEach(d=>{
      const count=d.id==="all"?registry.programmes.length:registry.programmes.filter(p=>p.domain===d.id).length;
      const b=el("button","domain-button");
      b.type="button";
      b.setAttribute("aria-pressed",String(state.domain===d.id));
      append(b,el("span","symbol",d.symbol),el("span","",d.label),el("span","count",count));
      b.addEventListener("click",()=>chooseDomain(d.id));
      container.appendChild(b);
    });
  }
  function renderAccess(){
    const container=$("#accessFilters");
    empty(container);
    accessModes.forEach(mode=>{
      const b=el("button","access-filter",mode.label);
      b.type="button";
      b.setAttribute("aria-pressed",String(state.access===mode.id));
      b.addEventListener("click",()=>{
        state.access=mode.id;
        renderAccess();
        renderProgrammes();
      });
      container.appendChild(b);
    });
  }
  function releaseSummary(p){
    const releases=releasesFor(p);
    if(!releases.length)return "No release indexed in this research cohort";
    const publiclyAvailable=releases.filter(r=>r.access==="public-observational-products"||r.access==="public-archive-api").length;
    if(publiclyAvailable)return publiclyAvailable+" indexed public data access "+(publiclyAvailable===1?"record":"records");
    return releases.length+" indexed release or result "+(releases.length===1?"record":"records");
  }
  function renderProgrammes(scrollToDetail=false){
    const rows=filtered(),current=selectedItem(rows);
    state.selected=current?.id||"";
    $("#resultCount").textContent=rows.length+" / "+registry.programmes.length+" indexed";
    const container=$("#programmeList");
    empty(container);
    if(!rows.length){
      append(container,el("p","empty-copy","No indexed programmes match this search and filter. Change the search or access category."));
      empty($("#programmeDetail"));
      append($("#programmeDetail"),el("p","empty-copy","Choose a different research lens or clear the search to inspect programme metadata."));
      return;
    }
    for(const p of rows){
      const b=el("button","programme-card");
      b.type="button";b.setAttribute("aria-pressed",String(p.id===state.selected));
      const top=el("div","programme-card-top");
      append(top,el("span","kind",p.kind+" · "+(domains.find(d=>d.id===p.domain)?.label||p.domain)),
        el("span","release-num",releasesFor(p).length+" release IDs"));
      append(b,top,el("strong","",p.name),el("p","",p.reviewNote||"Official archive identity; scope under review."),
        el("span","status",releaseSummary(p)));
      b.addEventListener("click",()=>{
        state.selected=p.id;
        updateUrl(p.id);
        renderProgrammes(true);
      });
      container.appendChild(b);
    }
    renderDetail(current);
    if(scrollToDetail && matchMedia("(max-width:760px)").matches){
      $("#programmeDetail").scrollIntoView({behavior:"smooth",block:"start"});
    }
  }
  function accessBadge(access){
    const badge=el("span","access-badge",accessLabels[access]||"Access unassessed");
    if(access==="rights-restricted-observational-products")badge.classList.add("restricted");
    if(access==="planned-no-observational-products")badge.classList.add("planned");
    if(access==="published-result-only")badge.classList.add("study");
    return badge;
  }
  function section(parent,title){
    const root=el("section","detail-section");
    root.appendChild(el("h3","",title));
    parent.appendChild(root);
    return root;
  }
  function renderDetail(p){
    const container=$("#programmeDetail");
    empty(container);
    if(!p)return;
    const kind=(domains.find(x=>x.id===p.domain)?.label||p.domain)+" / "+p.kind;
    append(container,el("div","detail-kicker",kind),el("h2","detail-title",p.name),
      el("p","detail-context",p.reviewNote||"Official source-linked programme identity."));
    const metrics=el("div","detail-metrics");
    append(metrics,el("span","metric-pill",statusLabels[p.programState]||"State not assessed"),
      el("span","metric-pill",releasesFor(p).length+" indexed releases"),
      el("span","metric-pill",studiesFor(p).length+" linked studies"));
    container.appendChild(metrics);
    const rsec=section(container,"Data releases & access");
    const rows=releasesFor(p);
    if(!rows.length)rsec.appendChild(el("p","empty-copy","No release has been indexed for this programme in the limited COI-0 cohort. This does not mean the programme has no observations or publications."));
    for(const r of rows){
      const root=el("article","release-card"),top=el("div","release-top");
      append(top,el("span","detail-kicker",r.version||"Result / programme"),accessBadge(r.access));
      append(root,top,el("strong","",r.title),el("p","released",r.availableOn?"Release/status date: "+r.availableOn+" ("+r.datePrecision+")":"Exact release date not independently indexed"),
        el("p","",r.reviewNotes||"Details require product-level inspection."));
      const relatedSources=sourcesFor(r.sourceIds);
      if(relatedSources.length)root.appendChild(link(relatedSources[0].url,"Official release/source ↗","official-link"));
      rsec.appendChild(root);
    }
    const studies=studiesFor(p),ssec=section(container,"Published research connections");
    if(!studies.length)ssec.appendChild(el("p","empty-copy","No linked paper in this initial six-study sample; that does not mean this programme has no published science."));
    studies.forEach(s=>{
      const item=el("article","study-card");
      append(item,el("strong","",s.title),el("p","",s.year+" · "+s.publicationKind+" · metadata indexed, claims not independently reanalyzed"),
        link(s.url,"Read the original paper ↗","official-link"));
      ssec.appendChild(item);
    });
    const milestones=milestonesFor(p);
    if(milestones.length){
      const sec=section(container,"Milestones");
      milestones.forEach(m=>{
        const root=el("article","study-card");
        append(root,el("strong","",m.event),el("p","",labelDate(m)+" · "+(m.state==="planned"?"Planned, not completed":"Official milestone "+m.state)));
        const src=sourcesFor(m.sourceIds)[0];
        if(src)root.appendChild(link(src.url,"Official milestone source ↗","official-link"));
        sec.appendChild(root);
      });
    }
    if(p.relatedProblemIds?.length){
      const sec=section(container,"Explore the scientific questions");
      const holder=el("div","problem-links");
      for(const id of p.relatedProblemIds){
        holder.appendChild(link("../index.html#/problems?problem="+encodeURIComponent(id),problemNames[id]||id));
      }
      sec.appendChild(holder);
    }
    const sourceSec=section(container,"Original programme sources"),list=el("div","official-list");
    for(const s of sourcesFor(p.sourceIds)){
      list.appendChild(link(s.url,s.publisher+": "+s.title+" ↗","official-link"));
    }
    sourceSec.appendChild(list);
    container.appendChild(el("p","detail-context","Source identities and access levels are indexed, not an exhaustive current-literature or statistical verification."));
  }
  function labelDate(m){return m.date?(m.date+" · "+m.precision+" precision"):"Date not scheduled";}
  function renderMilestones(){
    const container=$("#milestoneList");
    empty(container);
    const sorted=[...registry.milestones].sort((a,b)=>{
      if(a.state!==b.state)return a.state==="planned"?1:-1;
      return (a.date||"9999").localeCompare(b.date||"9999");
    });
    for(const m of sorted){
      const program=registry.programmes.find(p=>p.id===m.programmeId);
      const card=el("article","milestone");
      const kind=m.state==="planned"?"PLANNED / NOT COMPLETED":m.state==="completed"?"COMPLETED / OFFICIAL":"OBSERVED / OFFICIAL";
      append(card,el("span","moment",kind),el("strong","",m.event),
        el("p","",(program?.name||m.programmeId)+" · "+labelDate(m)));
      const src=sourcesFor(m.sourceIds)[0];
      if(src)card.appendChild(link(src.url,"Official source ↗","milestone-source"));
      container.appendChild(card);
    }
  }
  async function start(){
    const res=await fetch(DATA_URL,{cache:"no-cache"});
    if(!res.ok)throw Error("COI-0 research registry unavailable (HTTP "+res.status+")");
    const raw=await res.json();
    for(const k of ["sources","programmes","releases","studies","milestones"])if(!Array.isArray(raw[k]))throw Error("Registry is missing "+k);
    if(raw.publicationStatus!=="RESEARCH_ONLY_NOT_RUNTIME")throw Error("Unexpected registry review status");
    registry=raw;
    const initial=new URLSearchParams(location.search).get("programme");
    if(initial && registry.programmes.some(p=>p.id===initial))state.selected=initial;
    renderCounters();renderDomains();renderAccess();renderProgrammes();renderMilestones();
    $("#registrySearch").addEventListener("input",e=>{state.search=e.target.value;renderProgrammes();});
    document.querySelectorAll("[data-lens]").forEach(b=>b.addEventListener("click",()=>chooseDomain(b.dataset.lens)));
    window.QI_OBSERVATORY_PREVIEW_READY=true;
    window.dispatchEvent(new Event("observatory-preview-ready"));
  }
  start().catch(err=>{
    const alert=$("#fatalError");
    alert.textContent="This source-linked research preview could not load: "+err.message;
    alert.hidden=false;
    window.QI_OBSERVATORY_PREVIEW_ERROR=err.message;
  });
})();
