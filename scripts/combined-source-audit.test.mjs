import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {loadRuntime} from './category-trust-census.mjs';
import {readPreCombinedFile,projectPreCombined,projectPreCiEnvironment} from './combined-baseline.mjs';
const audit=JSON.parse(fs.readFileSync('research/SYMPLECTIC_CORRECTION_2026-10-22.json'));
const ledger=JSON.parse(fs.readFileSync('research/COMBINED_INTEGRITY_2026-10-22.json'));
const stab=JSON.parse(fs.readFileSync('research/STABILIZER_SOURCE_AUDIT_2026-10-22.json')),gkp=JSON.parse(fs.readFileSync('research/GKP_SOURCE_AUDIT_2026-10-22.json')),cvAudit=JSON.parse(fs.readFileSync('research/CV_SOURCE_AUDIT_2026-10-22.json')),weakAudit=JSON.parse(fs.readFileSync('research/WEAK_VALUE_CITATION_REVIEW_2026-10-22.json')),bohmAudit=JSON.parse(fs.readFileSync('research/BOHM_SOURCE_AUDIT_2026-10-22.json')),patches=[audit.patch,...stab.patches,...gkp.patches,...cvAudit.patches,weakAudit.patch,...bohmAudit.patches];
const current=loadRuntime(), sandbox={window:{}};
vm.createContext(sandbox);
for(const f of ['theories.js','developments.js','evidence.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','passports.js']) vm.runInContext(readPreCombinedFile(f,'utf8'),sandbox);
const old=sandbox.window,plain=x=>JSON.parse(JSON.stringify(x));
const multiply=(a,b)=>a.map(row=>b[0].map((_,j)=>row.reduce((sum,x,k)=>sum+x*b[k][j],0)));
const transpose=a=>a[0].map((_,j)=>a.map(row=>row[j]));
const omega=[[0,1],[-1,0]], det=v=>v[0][0]*v[1][1]-v[0][1]*v[1][0];
const near=(a,b)=>{a.flat().forEach((x,i)=>assert.ok(Math.abs(x-b.flat()[i])<1e-12));};
test('only seventeen declared formulas and one new source differ from exact accepted PR98',()=>{
 assert.deepEqual(plain(old.QI_FORMULAS.formulas.find(f=>f.id===audit.patch.id)),audit.before);
 assert.equal(patches.length,17);for(const group of [stab,gkp,cvAudit,bohmAudit])for(const f of group.before)assert.deepEqual(plain(old.QI_FORMULAS.formulas.find(x=>x.id===f.id)),f);
 assert.deepEqual(plain(old.QI_FORMULAS.formulas.find(f=>f.id===weakAudit.patch.id)),weakAudit.before);
 assert.equal(current.QI_FORMULAS.formulas.length,457);
 assert.deepEqual(plain(current.QI_FORMULAS.formulas),plain(old.QI_FORMULAS.formulas.map(f=>{const p=patches.find(p=>p.id===f.id);return p?{...f,...p}:f;})));
 const added=current.QI_DATA.sources.filter(s=>s.id===audit.additionalSource.id);
 assert.equal(added.length,1);assert.deepEqual(plain(added[0]),audit.additionalSource);
 assert.deepEqual(plain(current.QI_DATA.sources.filter(s=>s.id!==audit.additionalSource.id)),plain(old.QI_DATA.sources));
 for(const k of Object.keys(old.QI_DATA))if(k!=='sources')assert.deepEqual(plain(current.QI_DATA[k]),plain(old.QI_DATA[k]),k);
 for(const k of Object.keys(old.QI_FORMULAS))if(k!=='formulas')assert.deepEqual(plain(current.QI_FORMULAS[k]),plain(old.QI_FORMULAS[k]),k);
 for(const k of Object.keys(old))if(!['QI_DATA','QI_FORMULAS'].includes(k))assert.deepEqual(plain(current[k]),plain(old[k]),k);
 assert.equal(current.QI_DATA.sources.length,601);assert.equal(current.QI_DATA.theories.length,483);
 assert.equal(current.QI_FORMULAS.formulas.filter(f=>f.metadataReview==='explicit').length,265);
 assert.equal(current.QI_FORMULAS.formulas.filter(f=>f.metadataReview==='baseline-audit-v1').length,192);
 assert.equal(current.QI_FORMULA_AUDIT.entries.filter(e=>e.classification==='formula-bearing-gap').length,114);
});
test('correction changes mathematical notation explicitly with bounded source metadata',()=>{
 const p=audit.patch,allowed=new Set(['id','latex','plain','assumptions','variables','units','regime','sourceIds','sourceLocations','metadataReview','reviewedAt','curationBatch','theoryRelationship']);
 for(const k of Object.keys(p))assert.ok(allowed.has(k),k);
 assert.notEqual(p.latex,audit.before.latex);assert.notEqual(p.plain,audit.before.plain);
 assert.match(p.latex,/\\operatorname\{spec\}\(i\\Omega V\)/);assert.match(p.latex,/-\\nu_1/);assert.match(p.latex,/\+\\nu_1/);
 assert.equal(p.metadataReview,'explicit');assert.match(JSON.stringify(p),/positive.definite/i);assert.match(JSON.stringify(p),/multiplicit/i);
 assert.ok(p.sourceIds.includes('weedbrook-cv-2012'));assert.ok(p.sourceIds.includes(audit.additionalSource.id));
 for(const s of p.sourceLocations){assert.ok(p.sourceIds.includes(s.sourceId));assert.match(s.url,/^https:\/\//);}
 assert.match(audit.additionalSource.url,/1803\.04647v1/);
});
test('exact reconstruction rejects undeclared mutations and preserves protected checkpoint bytes across the explicit CI-only repair',()=>{
 assert.equal(Object.keys(ledger.files).length,14);assert.equal(Object.keys(ledger.unchangedFiles).length,13);
 for(const [f,e]of Object.entries(ledger.files)){assert.equal(readPreCombinedFile(f,'utf8'),e.beforeText);assert.throws(()=>projectPreCombined(Buffer.concat([fs.readFileSync(f),Buffer.from('extra')]),f));}
 for(const [f,hash]of Object.entries(ledger.unchangedFiles))assert.equal(createHash('sha256').update(projectPreCiEnvironment(fs.readFileSync(f),f)).digest('hex'),hash,f);
});
test('physical squeezed covariance disproves the standard operator-modulus interpretation',()=>{
 const v=[[0.5,0],[0,2]],nu=Math.sqrt(det(v));assert.equal(nu,1);assert.notDeepEqual([0.5,2],[nu,nu]);
 // For hbar=2, V+i Omega is Hermitian positive semidefinite: positive diagonal, determinant zero.
 assert.ok(v[0][0]>0&&v[1][1]>0);assert.equal(det(v)-1,0);
 const b=multiply(omega,v);near(multiply(transpose(b),b),multiply(v,v));
});
test('non-diagonal SPD fixtures give signed pairs and operator modulus V',()=>{
 for(const v of [[[2,1],[1,2]],[[1,0.1],[0.1,1]],[[0.2,0],[0,0.2]]]){
  assert.ok(v[0][0]>0&&det(v)>0);const b=multiply(omega,v),d=det(v);
  near(multiply(b,b),[[-d,0],[0,-d]]); // (i Omega V)^2 = det(V) I.
  near(multiply(transpose(b),b),multiply(v,v)); // A* A=V^2; positive square root is V.
 }
 // Mathematical spectrum exists even for an unphysical covariance; do not conflate SPD with uncertainty.
 assert.ok(Math.sqrt(det([[0.2,0],[0,0.2]]))<1);
});
test('Hermitian congruence and non-Hermitian product are distinguished',()=>{
 const v=[[0.5,0],[0,2]],root=[[Math.sqrt(0.5),0],[0,Math.sqrt(2)]];
 const b=multiply(omega,v),h=multiply(multiply(root,omega),root);
 assert.notEqual(b[0][1],-b[1][0]);near(h,omega); // i h is Hermitian, whereas i b is not.
 near(multiply(h,h),[[-1,0],[0,-1]]);
});

test('all five stabilizer patches remain metadata-only with unchanged original sources',()=>{
 const allowed=new Set(['id','assumptions','variables','regime','units','sourceIds','sourceLocations','metadataReview','reviewedAt','curationBatch','theoryRelationship']);
 assert.equal(stab.patches.length,5);assert.equal(new Set(patches.map(p=>p.id)).size,17);
 for(const p of stab.patches){for(const k of Object.keys(p))assert.ok(allowed.has(k),k);const before=old.QI_FORMULAS.formulas.find(f=>f.id===p.id);assert.deepEqual(plain(before),stab.before.find(f=>f.id===p.id));assert.deepEqual(p.sourceIds,plain(before.sourceIds));for(const loc of p.sourceLocations){assert.ok(p.sourceIds.includes(loc.sourceId));assert.match(loc.url,/quant-ph\/(9705052|0110143)v1#page=/);}}
});

const stI=[[1,0],[0,1]],stX=[[0,1],[1,0]],stZ=[[1,0],[0,-1]],stMul=(a,b)=>a.map(row=>b[0].map((_,j)=>row.reduce((v,x,k)=>v+x*b[k][j],0))),stScale=(a,c)=>a.map(row=>row.map(x=>x*c)),stAdd=(a,b)=>a.map((row,i)=>row.map((x,j)=>x+b[i][j])),stTranspose=a=>a[0].map((_,j)=>a.map(row=>row[j])),stEye=n=>Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>+(i===j))),stTensor=(a,b)=>a.flatMap(row=>b.map(r=>row.flatMap(x=>r.map(y=>x*y)))),stTrace=a=>a.reduce((v,row,i)=>v+row[i],0),stClean=a=>a.map(row=>row.map(x=>x||0));
const stEq=(a,b)=>assert.deepEqual(stClean(a),stClean(b)),stProject=gs=>gs.reduce((p,g)=>stMul(p,stScale(stAdd(stEye(g.length),g),0.5)),stEye(gs[0].length));

test('independent commuting Pauli generators give normalized orthogonal projectors and correct ranks',()=>{
 const zz=stTensor(stZ,stZ),xx=stTensor(stX,stX);
 for(const gs of [[zz],[zz,xx]]){const p=stProject(gs);stEq(stMul(p,p),p);stEq(stTranspose(p),p);assert.equal(stTrace(p),2**(2-gs.length));for(const g of gs)stEq(stMul(g,p),p);}
 const p=stProject([zz,xx]),sum=stScale(stAdd(stAdd(stEye(4),zz),stAdd(xx,stMul(zz,xx))),0.25);stEq(p,sum);assert.equal(stTrace(p),1);
});
test('redundancy, inconsistent signs, and noncommutation are distinct failure modes',()=>{
 const zz=stTensor(stZ,stZ),p=stProject([zz]);stEq(stProject([zz,zz]),p);assert.equal(stTrace(p),2);assert.notEqual(stTrace(p),2**(2-2));
 const zero=stProject([zz,stScale(zz,-1)]);assert.equal(stTrace(zero),0);stEq(stMul(zz,stScale(zz,-1)),stScale(stEye(4),-1));
 const bad=stProject([stX,stZ]);assert.notDeepEqual(stClean(stMul(bad,bad)),stClean(bad));assert.notDeepEqual(stClean(stTranspose(bad)),stClean(bad));
});
test('matched logical pair anticommutes but even overlap commutes',()=>{
 const zz=stTensor(stZ,stZ),xl=stTensor(stX,stX),zl=stTensor(stZ,stI),p=stProject([zz]);
 stEq(stMul(xl,zz),stMul(zz,xl));stEq(stMul(zl,zz),stMul(zz,zl));stEq(stMul(xl,zl),stScale(stMul(zl,xl),-1));stEq(stMul(xl,xl),stEye(4));stEq(stMul(zl,zl),stEye(4));
 assert.notDeepEqual(stClean(stMul(xl,p)),stClean(p));assert.notDeepEqual(stClean(stMul(zl,p)),stClean(p));stEq(stMul(xl,zz),stMul(zz,xl));
 const logicals=[stTensor(stX,stI),stTensor(stI,stX),stTensor(stZ,stI),stTensor(stI,stZ)];stEq(stMul(logicals[0],logicals[3]),stMul(logicals[3],logicals[0]));stEq(stMul(logicals[1],logicals[2]),stMul(logicals[2],logicals[1]));
});

test('primary-source metadata states quadrature, logical-code, and distributional limits explicitly',()=>{
 const allowed=new Set(['id','assumptions','variables','regime','units','sourceIds','sourceLocations','metadataReview','reviewedAt','curationBatch','theoryRelationship']);
 for(const p of gkp.patches){for(const k of Object.keys(p))assert.ok(allowed.has(k),k);const original=gkp.before.find(f=>f.id===p.id);assert.deepEqual(p.sourceIds,original.sourceIds);assert.equal(p.metadataReview,'explicit');assert.ok(p.assumptions.length&&p.variables.length);for(const l of p.sourceLocations){assert.ok(p.sourceIds.includes(l.sourceId));assert.match(l.url,/quant-ph\/0008040v3#page=\d+/);}}
 const get=id=>JSON.stringify(gkp.patches.find(p=>p.id===id));assert.match(get('gkp-stabilizers'),/strict/);assert.match(get('gkp-stabilizers'),/not an if-and-only-if/);assert.match(get('gkp-logicals'),/only on the ideal code/);assert.match(get('gkp-logicals'),/not as involutions on the entire/);assert.match(get('gkp-comb'),/not an omitted finite normalization/);assert.match(get('gkp-comb'),/normalizable approximate/);for(const p of gkp.patches)assert.match(p.units,/\[q,p\]=i/);
});

// Exact integer phases in units of pi; no finite-dimensional truncation of [q,p]=i.
const weylSign=(a,b,hbar=1)=>((a*b*hbar)%2+2)%2===0?1:-1;
test('Weyl phases distinguish commuting stabilizers, anticommuting logicals and quadrature convention',()=>{
 assert.equal(weylSign(2,2),1);assert.equal(weylSign(1,1),-1);assert.equal(weylSign(1,2),1);assert.equal(weylSign(2,1),1);
 assert.equal(weylSign(1,1,2),1); // Unrescaled coefficients with a different commutator do not describe the same Pauli pair.
 const squareDisplacement=(q,p)=>[2*q,2*p];assert.deepEqual(squareDisplacement(1,0),[2,0]);assert.deepEqual(squareDisplacement(0,1),[0,2]);assert.notDeepEqual(squareDisplacement(1,0),[0,0]);assert.equal(weylSign(2,0.5),-1); // Stabilizer phase at q=sqrt(pi)/2 is not identity on the full oscillator space.
});
test('formal comb phase and index identities preserve the code and exchange the logical labels',()=>{
 for(let s=-100;s<=100;s++)for(const j of [0,1]){const q=2*s+j;assert.equal(weylSign(2,q),1);assert.equal(weylSign(1,q),j===0?1:-1);assert.equal(q+2,2*(s+1)+j);assert.equal(q+1,2*(s+j)+(1-j));}
 const truncated=[-4,-2,0,2,4];assert.notDeepEqual(truncated.map(q=>q+2),truncated); // A finite list is not the invariant infinite distribution.
});
test('strict central displacement window excludes indistinguishable opposite boundary errors',()=>{
 // Position shifts measured in sqrt(pi)/4: syndrome is k modulo 4, a logical shift is 4, a stabilizer shift is 8.
 const syndrome=k=>((k%4)+4)%4,central=k=>Math.abs(k)<2;
 for(const k of [-1,0,1])assert.ok(central(k));assert.ok(!central(-2)&&!central(2));assert.equal(syndrome(-2),syndrome(2));assert.equal(2-(-2),4);
 const halfOpen=k=>k>=-2&&k<2;assert.ok(halfOpen(-2)&&!halfOpen(2)); // Choosing a representative does not make both physical errors correctable.
 assert.ok(!central(8));assert.equal(8%8,0); // Larger stabilizer-equivalent shifts refute an unnecessary iff claim.
});

test('source-qualified metadata states quadrature, physicality, measure and review-source limits explicitly',()=>{
 const allowed=new Set(['id','assumptions','variables','regime','units','sourceIds','sourceLocations','metadataReview','reviewedAt','curationBatch','theoryRelationship']);
 for(const p of cvAudit.patches){for(const k of Object.keys(p))assert.ok(allowed.has(k),k);const original=cvAudit.before.find(f=>f.id===p.id);assert.equal('sourceIds' in p,false);assert.equal(p.metadataReview,'explicit');assert.ok(p.assumptions.length&&p.variables.length);for(const l of p.sourceLocations){assert.ok(original.sourceIds.includes(l.sourceId));assert.match(l.url,/1110\.3234v1#page=\d+/);}}
 const get=id=>JSON.stringify(cvAudit.patches.find(p=>p.id===id));assert.match(get('cv-covariance'),/No Gaussian-state assumption/);assert.match(get('cv-uncertainty'),/not entrywise/);assert.match(get('cv-symplectic'),/real matrix/);assert.match(get('gaussian-wigner'),/Jacobian/);assert.match(get('rotated-quadrature'),/not relied upon/);assert.match(get('rotated-quadrature'),/vacuum variance is 1\/2/);assert.equal(cvAudit.sourceEvidence.journalTextInspected,false);assert.deepEqual(cvAudit.requiredEquationChanges,[]);
});

const cvMul=(a,b)=>a.map(row=>b[0].map((_,j)=>row.reduce((v,x,k)=>v+x*b[k][j],0))),cvT=a=>a[0].map((_,j)=>a.map(row=>row[j])),cvNear=(a,b)=>a.flat().forEach((x,i)=>assert.ok(Math.abs(x-b.flat()[i])<1e-12)),cvOmega=[[0,1],[-1,0]],cvDet=v=>v[0][0]*v[1][1]-v[0][1]*v[1][0];
const cvPhysical=(v,hbar)=>v[0][0]>0&&v[1][1]>0&&cvDet(v)>=hbar*hbar/4-1e-12;
test('finite number-state moments supply a non-Gaussian covariance counterexample',()=>{
 // Sparse ladder action has no upper truncation; all reachable Fock labels are retained.
 const qMoment=(n,k)=>{let state=new Map([[n,1]]);for(let t=0;t<k;t++){const next=new Map(),put=(j,c)=>next.set(j,(next.get(j)||0)+c);for(const [j,c] of state){if(j>0)put(j-1,c*Math.sqrt(j/2));put(j+1,c*Math.sqrt((j+1)/2));}state=next;}return state.get(n)||0;};
 for(const n of [0,1,3]){assert.equal(qMoment(n,1),0);assert.ok(Math.abs(qMoment(n,2)-(n+0.5))<1e-12);assert.ok(cvPhysical([[n+0.5,0],[0,n+0.5]],1));}
 const v=qMoment(1,2),fourth=qMoment(1,4);assert.ok(Math.abs(fourth-3.75)<1e-12);assert.ok(Math.abs(fourth-3*v*v)>1); // Same first two moments do not establish Gaussianity.
});
test('matrix uncertainty includes correlations, saturation and normalization scale',()=>{
 assert.ok(cvPhysical([[0.5,0],[0,0.5]],1));assert.ok(!cvPhysical([[0.5,0],[0,0.5]],2));assert.ok(cvPhysical([[1,0],[0,1]],2));assert.ok(cvPhysical([[0.25,0],[0,1]],1));
 const correlated=[[1,0.9],[0.9,1]];assert.ok(correlated[0][0]*correlated[1][1]>=0.25);assert.ok(!cvPhysical(correlated,1));assert.ok(cvDet(correlated)>0);assert.ok(!cvPhysical([[0.1,0],[0,0.1]],1));
});
test('canonical transformations preserve the full form, not merely determinant or scale',()=>{
 const squeeze=[[2,0],[0,0.5]];cvNear(cvMul(cvMul(squeeze,cvOmega),cvT(squeeze)),cvOmega);
 const reflected=[[1,0],[0,-1]];assert.notDeepEqual(cvMul(cvMul(reflected,cvOmega),cvT(reflected)),cvOmega);
 const omega4=[[0,1,0,0],[-1,0,0,0],[0,0,0,1],[0,0,-1,0]],detOne=[[2,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,0.5]];assert.equal(2*1*1*0.5,1);assert.notDeepEqual(cvMul(cvMul(detOne,omega4),cvT(detOne)),omega4);
 const conversion=[[1/Math.sqrt(2),0],[0,1/Math.sqrt(2)]];cvNear(cvMul(cvMul(conversion,cvOmega),cvT(conversion)),[[0,0.5],[-0.5,0]]);
});
test('Gaussian Wigner normalization and density Jacobian use 2n real dimensions',()=>{
 const pref=vars=>1/((2*Math.PI)**(vars.length/2)*Math.sqrt(vars.reduce((a,b)=>a*b,1))),density=(r,d,vars)=>pref(vars)*Math.exp(-r.reduce((v,x,i)=>v+(x-d[i])**2/vars[i],0)/2);
 for(const vars of [[0.5,2],[1,1],[0.5,2,1,3]]){const integral=vars.reduce((v,x)=>v*Math.sqrt(2*Math.PI*x),1);assert.ok(Math.abs(pref(vars)*integral-1)<1e-12);}
 const r=[0.4,-0.2],d=[0.1,0.3],v=[0.5,2],scaled=density(r.map(x=>x*Math.sqrt(2)),d.map(x=>x*Math.sqrt(2)),v.map(x=>2*x));assert.ok(Math.abs(density(r,d,v)-2*scaled)<1e-12);
 assert.ok(Math.abs(density([0,0],[0,0],[0.5,0.5])-1/Math.PI)<1e-12);assert.ok(Math.abs(density([0,0],[0,0],[1,1])-1/(2*Math.PI))<1e-12);assert.ok(pref([0.1,0.1])>0);assert.ok(!cvPhysical([[0.1,0],[0,0.1]],1));
});
test('rotated quadrature has the displayed sign, canonical commutator and half-unit vacuum variance',()=>{
 for(const theta of [0,Math.PI/2,-0.7,1.3])for(const phi of [0,0.4,Math.PI/2]){const u=[[Math.cos(theta),Math.sin(theta)]],v=[[Math.cos(phi),Math.sin(phi)]];assert.ok(Math.abs(cvMul(cvMul(u,cvOmega),cvT(v))[0][0]-Math.sin(phi-theta))<1e-12);assert.ok(Math.abs(cvMul(cvMul(u,[[0.5,0],[0,0.5]]),cvT(u))[0][0]-0.5)<1e-12);}
 // Expanding a=(q+i p)/sqrt(2) gives q cos(theta)+p sin(theta), not the opposite sign.
 assert.ok(Math.sin(Math.PI/2)>0);cvNear([[Math.cos(0),Math.sin(0)]],[[1,0]]);cvNear([[Math.cos(Math.PI/2),Math.sin(Math.PI/2)]],[[0,1]]);
});

test('weak-value citation repair reuses the existing primary source without changing its equation or catalog',()=>{
 const p=weakAudit.patch,allowed=new Set(['id','sourceIds','assumptions','variables','units','regime','sourceLocations','theoryRelationship','metadataReview','reviewedAt','curationBatch']);
 for(const key of Object.keys(p))assert.ok(allowed.has(key),key);
 assert.deepEqual(weakAudit.before.sourceIds,['abl-1964']);assert.deepEqual(p.sourceIds,['wave5-weak-1988']);
 const f=current.QI_FORMULAS.formulas.find(f=>f.id===p.id);for(const key of ['latex','plain','description','name','category','tags','theoryIds','formulaType'])assert.deepEqual(plain(f[key]),weakAudit.before[key],key);
 for(const id of ['abl-1964','wave5-weak-1988'])assert.deepEqual(plain(current.QI_DATA.sources.find(s=>s.id===id)),plain(old.QI_DATA.sources.find(s=>s.id===id)));
 assert.match(p.regime,/exact definition/i);assert.match(p.regime,/nonuniform/);assert.match(p.regime,/No universal metrological advantage/);assert.match(JSON.stringify(p.assumptions),/undefined at zero overlap/);
 for(const loc of p.sourceLocations){assert.equal(loc.sourceId,'wave5-weak-1988');assert.match(loc.url,/^https:\/\/www\.tau\.ac\.il\/~yakir\/yahp\/yh77#page=[234]$/);}
 assert.match(p.sourceLocations[0].locator,/Eq\. \(6\).*1352/);assert.match(p.sourceLocations[1].locator,/Footnote 4.*1354/);
});
test('weak amplitude ratio and ABL conditional strong mean differ for the same Pauli pre/postselection',()=>{
 // Unnormalized vectors (1,1) and (3,-1); their scale cancels in the quotient.
 const overlap=3-1,numerator=3+1;assert.equal(numerator/overlap,2);
 const weights=[3**2,(-1)**2];assert.equal((weights[0]-weights[1])/(weights[0]+weights[1]),4/5);
 assert.equal(overlap**2/(2*10),1/5);assert.notEqual(2,4/5);assert.ok(2>1);
});
const wAdd=(a,b)=>[a[0]+b[0],a[1]+b[1]],wMul=(a,b)=>[a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]],wInner=(a,b)=>a.reduce((s,x,i)=>wAdd(s,wMul([x[0],-x[1]],b[i])),[0,0]),wDivide=(a,b)=>{const d=b[0]**2+b[1]**2;assert.notEqual(d,0,'undefined zero-overlap quotient');const n=wMul(a,[b[0],-b[1]]);return n.map(x=>x/d||0);},wZ=(i,f)=>wDivide(wInner(f,[i[0],i[1].map(x=>-x)]),wInner(f,i));
test('weak-value algebra permits complex values and rejects an orthogonal postselection quotient',()=>{
 const plus=[[1,0],[1,0]],minus=[[1,0],[-1,0]],plusI=[[1,0],[0,1]];
 assert.deepEqual(wZ(plus,plusI),[0,1]);assert.deepEqual(wZ(plus,plus),[0,0]);assert.throws(()=>wZ(plus,minus),/zero-overlap/);
 assert.deepEqual(wZ([[1,0],[0,0]],plusI),[1,0]);assert.deepEqual(wZ([[0,1],[0,1]],[[3,0],[-1,0]]),[2,0]);
});
test('a specified bounded Pauli meter exposes nonuniform near-orthogonal weak-response limits',()=>{
 // U=exp(-i g Z tensor X), initial meter |0>, Aw=1/epsilon.
 const meter=(e,g)=>Math.sin(g)**2/(e*e*Math.cos(g)**2+Math.sin(g)**2);
 const controlled=meter(.01,.00001);assert.ok(Math.abs(controlled/(.00001/.01)**2-1)<2e-6);
 const actual=meter(.0001,.001),uncontrolled=(.001/.0001)**2;assert.ok(uncontrolled>1);assert.ok(actual>=0&&actual<=1);
});
test('zero first weak value alone does not control higher weak moments or normalized meter response',()=>{
 // A=diag(-1,0,1), pre proportional to (1,1,1), post proportional to (1,-2+delta,1).
 // B=|1><1|, meter |+>, U=exp(-i g A tensor B): K/<f|i>=diag(1,r).
 const g=.001,delta=g*g/2,firstNumerator=-1+1,secondNumerator=1+1;
 assert.equal(firstNumerator/delta,0);assert.equal(secondNumerator/delta,4000000);
 const r=1-4*Math.sin(g/2)**2/delta,fidelity=(1+r)**2/(2*(1+r*r));assert.ok(fidelity<1e-12);
 // This is a bounded-model counterexample, not an apparatus-independent operational criterion.
});

test('both Bohm cards preserve equations and source IDs while declaring their inspected scalar domain',()=>{
 const allowed=new Set(['id','assumptions','variables','units','regime','theoryRelationship','sourceLocations','metadataReview','reviewedAt','curationBatch']);assert.equal(bohmAudit.patches.length,2);
 for(const p of bohmAudit.patches){for(const key of Object.keys(p))assert.ok(allowed.has(key),key);const before=bohmAudit.before.find(f=>f.id===p.id),f=current.QI_FORMULAS.formulas.find(f=>f.id===p.id);for(const key of ['latex','plain','description','sourceIds','theoryIds','formulaType','name','category','tags'])assert.deepEqual(plain(f[key]),before[key],key);for(const loc of p.sourceLocations){assert.ok(before.sourceIds.includes(loc.sourceId));assert.match(loc.url,/^https:\/\/cqi\.inf\.usi\.ch\/qic\/bohm1\.pdf#page=[456]$/);}}
 assert.match(bohmAudit.patches[0].regime,/separate statistical assumption/);assert.match(bohmAudit.patches[0].theoryRelationship,/not a verbatim numbered/);assert.match(bohmAudit.patches[1].regime,/does not by itself imply that Q diverges/);
});
test('normalized harmonic ground states have zero guidance and a constant total effective potential',()=>{
 for(const [h,m,w]of [[1,1,1],[2,3,.7],[.5,2,4]]){
  const a=m*w/h,N=(a/Math.PI)**.25;assert.ok(Math.abs(N*N*Math.sqrt(Math.PI/a)-1)<1e-12);
  for(const x of [-1,0,.7,2]){const R=N*Math.exp(-a*x*x/2),Rxx=(a*a*x*x-a)*R,Q=-h*h*Rxx/(2*m*R),V=m*w*w*x*x/2;assert.ok(Math.abs(Q+V-h*w/2)<1e-12);const phaseGradient=0;assert.equal(phaseGradient/m,0);}
 }
});
test('a normalized periodic standing wave has finite nodal-cell potential without defining the quotient at a node',()=>{
 const h=2,m=3,k=1.5,N=Math.sqrt(k/Math.PI),amplitude=x=>N*Math.sin(k*x),quotient=(num,den)=>{assert.notEqual(den,0,'excluded node');return num/den;};
 for(const x of [.0001,.01,.3,1]){const R=amplitude(x),Rxx=-k*k*R,Q=-h*h*quotient(Rxx,R)/(2*m);assert.ok(Math.abs(Q-h*h*k*k/(2*m))<1e-12);}
 assert.equal(amplitude(0),0);assert.throws(()=>quotient(0,amplitude(0)),/excluded node/);
});
test('zero guidance alone cannot choose between distinct normalized initial Gaussian ensembles',()=>{
 // Both fixed Gaussian densities are normalized; v=0 leaves either time independent.
 const rho=(x,center)=>Math.exp(-((x-center)**2)/2)/Math.sqrt(2*Math.PI);assert.notEqual(rho(0,0),rho(0,1));
 for(const center of [0,1]){const velocity=0,densityTimeDerivative=0,currentDivergence=0;assert.equal(velocity,0);assert.equal(densityTimeDerivative+currentDivergence,0);}
 // This kinematic observation does not assert that non-Born ensembles reproduce quantum statistics.
});
