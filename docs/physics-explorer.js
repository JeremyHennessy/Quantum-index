/* Physics Explorer preview: read-only lens over the unchanged Quantum Index data files. */
(() => {
  "use strict";
  const $=selector=>document.querySelector(selector);
  const el=(tag,className,value)=>{
    const node=document.createElement(tag);
    if(className)node.className=className;
    if(value!==undefined&&value!==null)node.textContent=String(value);
    return node;
  };
  const append=(parent,...items)=>{for(const item of items)if(item)parent.appendChild(item);return parent;};
  const clear=parent=>parent.replaceChildren();
  const link=(href,label,className="")=>{
    const item=el("a",className,label);
    try{
      const dest=new URL(href,location.href);
      if(!["http:","https:"].includes(dest.protocol))return el("span",className,label);
      item.href=dest.href;
      if(dest.origin!==location.origin){item.target="_blank";item.rel="noopener noreferrer";}
    }catch{return el("span",className,label);}
    return item;
  };
  const sourceLink=(source,label)=>source?.url?link(source.url,label||source.title,"source-link-item"):null;
  const problemLink=id=>"../index.html#/problems?problem="+encodeURIComponent(id);
  const theoryLink=id=>"../index.html#/theory/"+encodeURIComponent(id)+"?from=catalog";
  const formulaLink=id=>"../index.html#/formula?theory="+encodeURIComponent(id);
  const evidenceLink=title=>"../index.html#/evidence?search="+encodeURIComponent(title);
  const questionLink=title=>"../index.html#/questions?search="+encodeURIComponent(title);
  const ALL="all";
  const categorySymbols=["✦","◎","◈","◇","∿","✧","⌁","≋","✳","◉","↗","⊙","⋈","◐"];
  let db=null;
  let state={category:ALL,status:ALL,search:"",problem:ALL,selected:""};
  let byId,sourceById,problemById,formulasByTheory,evidenceByTheory,questionsByTheory,relationsByTheory;
  let categories=[];
  // Editorial navigation families only. The exact, recorded scientific status remains unmodified.
  const statusFacets=[
    {id:"all",label:"All statuses",test:()=>true},
    {id:"established",label:"Established labels",test:s=>s.startsWith("established")},
    {id:"active",label:"Active research",test:s=>s.startsWith("active")||s==="research proposal"},
    {id:"alternatives",label:"Alternatives / candidates",test:s=>s.startsWith("alternative")||s.startsWith("candidate")||s.startsWith("speculative")},
    {id:"interpretation",label:"Interpretations",test:s=>s==="interpretation"},
    {id:"historical",label:"Historical",test:s=>s.startsWith("historical")},
    {id:"other",label:"Other labels",test:s=>!["established","active","alternative","candidate","speculative","interpretation","historical"].some(prefix=>s.startsWith(prefix))&&s!=="research proposal"}
  ];

  function registerLinked(sourceArray,targetMap,field){
    for(const record of sourceArray){
      for(const id of (record[field]||[])){
        if(!targetMap.has(id))targetMap.set(id,[]);
        targetMap.get(id).push(record);
      }
    }
  }
  function start(){
    const data=window.QI_DATA;
    const formulas=window.QI_FORMULAS?.formulas;
    const problems=window.QI_PROBLEMS?.problems;
    const evidence=window.QI_EVIDENCE?.records;
    const questions=window.QI_QUESTIONS?.questions;
    const developments=window.QI_DEVELOPMENTS?.events||[];
    const passports=window.QI_PASSPORTS?.records||[];
    if(!data?.theories?.length||!data?.sources?.length||!Array.isArray(formulas)||!Array.isArray(problems)||!Array.isArray(evidence)||!Array.isArray(questions)){
      throw Error("The approved scientific catalogue could not be loaded.");
    }
    db={theories:data.theories,relations:data.relations||[],sources:data.sources,formulas,problems,evidence,questions,developments,passports};
    byId=new Map(db.theories.map(t=>[t.id,t]));
    sourceById=new Map(db.sources.map(s=>[s.id,s]));
    problemById=new Map(db.problems.map(p=>[p.id,p]));
    formulasByTheory=new Map();
    evidenceByTheory=new Map();
    questionsByTheory=new Map();
    relationsByTheory=new Map();
    registerLinked(db.formulas,formulasByTheory,"theoryIds");
    registerLinked(db.evidence,evidenceByTheory,"relatedTheoryIds");
    registerLinked(db.questions,questionsByTheory,"relatedTheoryIds");
    for(const rel of db.relations){
      for(const id of [rel.from,rel.to]){
        if(!relationsByTheory.has(id))relationsByTheory.set(id,[]);
        relationsByTheory.get(id).push(rel);
      }
    }
    categories=[...new Set(db.theories.map(t=>t.category))].sort((a,b)=>a.localeCompare(b));
    // All labels stay on their original records. Sidebar groups are convenience filters only.
    const params=new URLSearchParams(location.search);
    const requested=params.get("theory");
    const problem=params.get("problem");
    if(requested&&byId.has(requested))state.selected=requested;
    if(problem&&problemById.has(problem))state.problem=problem;
    if(!state.selected)state.selected=byId.has("lambda-cdm")?"lambda-cdm":db.theories[0].id;
    document.querySelectorAll("[data-problem]").forEach(button=>button.addEventListener("click",()=>selectProblem(button.dataset.problem)));
    $("#theorySearch").addEventListener("input",event=>{
      state.search=event.target.value;
      state.problem=ALL;
      renderProblemContext();
      renderList();
    });
    renderCounts();
    renderSidebar();
    renderStatuses();
    renderProblemContext();
    renderList();
    renderDevelopments();
    window.QI_PHYSICS_EXPLORER_READY=true;
    window.dispatchEvent(new Event("physics-explorer-ready"));
  }

  function renderCounts(){
    const values=[
      [db.theories.length,"theories & frameworks"],
      [db.formulas.length,"formula records"],
      [db.questions.length,"research questions"],
      [db.evidence.length,"evidence records"]
    ];
    const entries=[...$("#summaryCounters").children];
    values.forEach(([number,label],i)=>{
      entries[i].querySelector("strong").textContent=number;
      entries[i].querySelector("span").textContent=label;
    });
    $("#catalogueScope").textContent=db.theories.length+" theories · "+categories.length+" categories · "+db.relations.length+" typed connections. Source attachment is not proof of confirmation.";
  }
  function problemTheories(id){
    const problem=problemById.get(id);
    return new Set((problem?.approachGroups||[]).flatMap(g=>g.theoryIds||[]));
  }
  function findRows(){
    const q=state.search.trim().toLowerCase();
    const included=state.problem===ALL?null:problemTheories(state.problem);
    const rows=db.theories.filter(t=>{
      if(state.category!==ALL&&t.category!==state.category)return false;
      if(state.status!==ALL&&!statusFacets.find(f=>f.id===state.status)?.test(t.status))return false;
      if(included&&!included.has(t.id))return false;
      if(!q)return true;
      const formulas=(formulasByTheory.get(t.id)||[]).map(f=>[f.name,f.description,f.plain].join(" ")).join(" ");
      const search=[t.id,t.name,t.summary,t.core,...(t.tags||[]),...(t.aliases||[]),formulas].join(" ").toLowerCase();
      return search.includes(q);
    });
    const featured=["lambda-cdm","quantum-information","hawking-radiation","wave-mechanics"];
    rows.sort((a,b)=>{
      const ra=featured.indexOf(a.id),rb=featured.indexOf(b.id);
      if(state.category===ALL&&state.problem===ALL&&!q&&state.status===ALL){
        if(ra>=0&&rb<0)return -1;if(rb>=0&&ra<0)return 1;
        if(ra>=0&&rb>=0)return ra-rb;
      }
      return a.name.localeCompare(b.name);
    });
    return rows;
  }
  function topicButton(id,label,count,index){
    const button=el("button","domain-button");
    button.type="button";
    button.dataset.category=id;
    button.setAttribute("aria-pressed",String(state.category===id));
    append(button,el("span","symbol",categorySymbols[index%categorySymbols.length]),el("span","",label),el("span","count",count));
    button.addEventListener("click",()=>selectCategory(id));
    return button;
  }
  function renderSidebar(){
    const nav=$("#topicNav");clear(nav);
    nav.appendChild(topicButton(ALL,"All physics",db.theories.length,0));
    categories.forEach((category,i)=>{
      nav.appendChild(topicButton(category,category,db.theories.filter(t=>t.category===category).length,i+1));
    });
  }
  function renderStatuses(){
    const group=$("#statusFilters");clear(group);
    for(const facet of statusFacets){
      const button=el("button","status-filter",facet.label);
      button.type="button";
      button.dataset.status=facet.id;
      button.setAttribute("aria-pressed",String(state.status===facet.id));
      button.addEventListener("click",()=>{
        state.status=facet.id;
        renderStatuses();
        renderList();
      });
      group.appendChild(button);
    }
  }
  function selectCategory(id){
    state.category=id;
    state.problem=ALL;
    state.search="";
    state.status=ALL;
    $("#theorySearch").value="";
    renderSidebar();renderStatuses();renderProblemContext();renderList();
    $("#theoryCatalogue").scrollIntoView({block:"start",behavior:"smooth"});
  }
  function selectProblem(id){
    if(!problemById.has(id))return;
    state.problem=id;state.category=ALL;state.status=ALL;state.search="";
    $("#theorySearch").value="";
    renderSidebar();renderStatuses();renderProblemContext();renderList();
    $("#theoryCatalogue").scrollIntoView({block:"start",behavior:"smooth"});
  }
  function renderProblemContext(){
    const container=$("#problemContext");clear(container);
    if(state.problem===ALL){container.hidden=true;return;}
    const p=problemById.get(state.problem);
    if(!p){container.hidden=true;return;}
    container.hidden=false;
    append(container,el("span","problem-label","ACTIVE SCIENTIFIC QUESTION"),
      el("h3","",p.name),
      el("p","",p.shortQuestion),
      el("p","",p.whyItMatters));
    const groups=el("div","problem-approaches");
    for(const g of p.approachGroups||[]){
      groups.appendChild(el("span","approach-label",g.name+" · "+(g.theoryIds?.length||0)+" approaches"));
    }
    container.appendChild(groups);
    const actions=el("div","problem-actions");
    const reset=el("button","","Clear problem filter");
    reset.type="button";
    reset.addEventListener("click",()=>{state.problem=ALL;renderProblemContext();renderList();});
    append(actions,reset,link(problemLink(p.id),"Open full scientific problem ↗"));
    container.appendChild(actions);
  }
  function changeQueryForSelection(id){
    const url=new URL(location.href);
    url.searchParams.set("theory",id);
    if(state.problem!==ALL)url.searchParams.set("problem",state.problem);
    else url.searchParams.delete("problem");
    history.replaceState(null,"",url.pathname+url.search+url.hash);
  }
  function renderList(scrollToDetail=false){
    const rows=findRows();
    if(rows.length&&!rows.some(t=>t.id===state.selected))state.selected=rows[0].id;
    $("#resultCount").textContent=rows.length+" / "+db.theories.length+" catalogued";
    const pane=$("#theoryList");clear(pane);
    if(!rows.length){
      pane.appendChild(el("p","empty-copy","No matching framework. Clear the search or choose another subject/status."));
      const detail=$("#theoryDetail");clear(detail);
      detail.appendChild(el("p","empty-copy","No selected theory matches these filters. This does not mean no such research exists."));
      return;
    }
    for(const t of rows){
      const button=el("button","theory-card");
      button.type="button";button.dataset.theory=t.id;button.setAttribute("aria-pressed",String(t.id===state.selected));
      const top=el("div","theory-card-top");
      append(top,el("span","kind",t.category),el("span","year",t.year));
      append(button,top,el("strong","",t.name),el("p","",t.summary),el("span","status",t.status));
      button.addEventListener("click",()=>selectTheory(t.id,true));
      pane.appendChild(button);
    }
    renderDetail(byId.get(state.selected));
    if(scrollToDetail&&matchMedia("(max-width:760px)").matches)$("#theoryDetail").scrollIntoView({block:"start",behavior:"smooth"});
  }
  function selectTheory(id,scrollToDetail=false){
    if(!byId.has(id))return;
    const visible=findRows().some(x=>x.id===id);
    if(!visible){
      state.problem=ALL;state.category=ALL;state.status=ALL;state.search="";
      $("#theorySearch").value="";
      renderProblemContext();renderSidebar();renderStatuses();
    }
    state.selected=id;
    changeQueryForSelection(id);
    renderList(scrollToDetail);
  }
  function detailSection(parent,title){
    const section=el("section","detail-section");
    section.appendChild(el("h3","",title));
    parent.appendChild(section);
    return section;
  }
  function detailActions(parent,t,formulaCount){
    const actions=el("div","detail-actions");
    append(actions,
      link(theoryLink(t.id),"Open full theory profile ↗","detail-link primary-link"),
      link(formulaLink(t.id),formulaCount+" linked formulas","detail-link"),
      link("../index.html#/map?theory="+encodeURIComponent(t.id),"See network map","detail-link"),
      link("../index.html#/compare?ids="+encodeURIComponent(t.id),"Compare","detail-link")
    );
    parent.appendChild(actions);
  }
  function renderDetail(t){
    const panel=$("#theoryDetail");clear(panel);
    if(!t)return;
    const formulas=formulasByTheory.get(t.id)||[];
    const evidence=evidenceByTheory.get(t.id)||[];
    const questions=questionsByTheory.get(t.id)||[];
    const sourceRecords=(t.sources||[]).map(id=>sourceById.get(id)).filter(Boolean);
    const relationships=relationsByTheory.get(t.id)||[];
    const provenance=t.provenance==="primary-sourced"?"Primary-source indexed":t.provenance==="review-sourced"?"Review-source indexed":"Catalogued; source review pending";
    append(panel,el("p","detail-kicker",t.category),
      el("h2","detail-title",t.name));
    const metrics=el("div","detail-metrics");
    append(metrics,el("span","metric-pill",t.year+" · original framework year"),
      el("span","metric-pill",t.status),
      el("span","metric-pill",provenance));
    panel.appendChild(metrics);
    panel.appendChild(el("p","detail-overview",t.summary));
    const core=detailSection(panel,"Scientific idea");
    core.appendChild(el("p","detail-core",t.core));
    if(t.aliases?.length){
      core.appendChild(el("p","meta-line","Also indexed as: "+t.aliases.slice(0,5).join(", ")));
    }
    if(t.tags?.length){
      const tags=el("div","tags");t.tags.slice(0,14).forEach(tag=>tags.appendChild(el("span","topic-tag",tag)));
      core.appendChild(tags);
    }
    detailActions(panel,t,formulas.length);

    const fsec=detailSection(panel,"Mathematics · "+formulas.length+" linked formulas");
    if(!formulas.length)fsec.appendChild(el("p","empty-copy","No representative formula is linked to this framework in the current index. That does not mean it lacks mathematics."));
    for(const f of formulas.slice(0,3)){
      const item=el("article","formula-preview");
      append(item,el("strong","",f.name),el("code","",f.plain||"Math expression is only available in the original Formula Atlas."));
      if(f.description)item.appendChild(el("p","",f.description));
      fsec.appendChild(item);
    }
    if(formulas.length>3)fsec.appendChild(link(formulaLink(t.id),"View all "+formulas.length+" formulas ↗","detail-link"));

    const esec=detailSection(panel,"Observation & constraints · "+evidence.length+" records");
    if(!evidence.length)esec.appendChild(el("p","empty-copy","No direct Evidence record is linked here in the current curated set. The absence of a link does not establish that no observational evidence exists."));
    for(const e of evidence.slice(0,3)){
      const item=el("article","evidence-preview");
      append(item,el("strong","",e.title),el("p","",e.result));
      if(e.doesNotEstablish?.length)item.appendChild(el("p","caution","Does not establish: "+e.doesNotEstablish.join(" · ")));
      item.appendChild(link(evidenceLink(e.title),"Open evidence and source details ↗","official-link"));
      esec.appendChild(item);
    }

    const qsec=detailSection(panel,"Open research & questions · "+questions.length);
    if(!questions.length)qsec.appendChild(el("p","empty-copy","No structured Research Question record is directly linked in this index; coverage is incomplete."));
    for(const q of questions.slice(0,3)){
      const item=el("article","research-reference");
      append(item,el("strong","",q.question||q.title),el("p","",q.dispositionLabel||q.disposition));
      item.appendChild(link(questionLink(q.title),"Read the reviewed research context ↗"));
      qsec.appendChild(item);
    }

    const rsec=detailSection(panel,"Connected ideas · "+relationships.length+" typed relationships");
    if(!relationships.length)rsec.appendChild(el("p","empty-copy","No typed connections have been indexed for this framework."));
    const sorted=relationships.map(rel=>{
      const other=byId.get(rel.from===t.id?rel.to:rel.from);
      return {rel,other};
    }).filter(x=>x.other).sort((a,b)=>Number(!!b.rel.sourceIds?.length)-Number(!!a.rel.sourceIds?.length)||a.other.name.localeCompare(b.other.name));
    for(const {rel,other}of sorted.slice(0,7)){
      const button=el("button","research-connection");button.type="button";
      const text=el("div");
      append(text,el("strong","",other.name),el("span","",rel.evidenceType||rel.type||"Editorial connection"));
      const sourceCount=rel.sourceIds?.length||0;
      append(button,text,el("em","",sourceCount?sourceCount+" linked sources":"Editorial / unsourced"));
      button.addEventListener("click",()=>selectTheory(other.id,true));
      rsec.appendChild(button);
    }
    if(relationships.length>7)rsec.appendChild(link("../index.html#/theory/"+encodeURIComponent(t.id),"Inspect all relationships in the full atlas ↗","detail-link"));

    const ssec=detailSection(panel,"Original bibliography · "+sourceRecords.length+" sources");
    const sList=el("div","source-list");
    if(!sourceRecords.length)sList.appendChild(el("p","empty-copy","No source locator is directly attached to this entry yet."));
    for(const source of sourceRecords.slice(0,10)){
      const sourceNode=sourceLink(source,source.title);
      if(sourceNode){sourceNode.appendChild(el("small","",[(source.authors||"Bibliography"),source.year,source.type].filter(Boolean).join(" · ")));sList.appendChild(sourceNode);}
    }
    ssec.appendChild(sList);
    if(sourceRecords.length>10)ssec.appendChild(link(theoryLink(t.id),"View complete source list in full atlas ↗","detail-link"));
    panel.appendChild(el("p","meta-line","Source-linked is not equivalent to independently verified or experimentally confirmed. Browse the full atlas for assumptions, methodological qualifications and saved research notes."));
  }
  function renderDevelopments(){
    // The original atlas already distinguishes framework origin dates from these later reviewed events.
    const target=$("#recentDevelopments");
    if(!target)return;
    clear(target);
    for(const event of [...db.developments].sort((a,b)=>String(b.date).localeCompare(String(a.date))).slice(0,4)){
      const article=el("article","milestone");
      append(article,el("span","moment",String(event.date)+" · "+(event.eventType||"reviewed development")),
        el("strong","",event.title),el("p","",event.significance||"Reviewed literature event, see source and claim scope."));
      article.appendChild(link("../index.html#/timeline?layer=developments","See in source-aware timeline ↗","milestone-source"));
      target.appendChild(article);
    }
  }
  try{start();}
  catch(error){
    const panel=$("#fatalError");
    panel.textContent="The scientific catalogue could not load: "+error.message;
    panel.hidden=false;
    window.QI_PHYSICS_EXPLORER_ERROR=error.message;
  }
})();
