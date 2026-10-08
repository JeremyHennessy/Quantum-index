import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {bellReview as ledger,restoreBellFormula,fingerprint} from './bell-metadata-baseline.mjs';
import {priorDepthFormulas,priorDepthPassports,priorDepthCoverage,verifyDepthFileSha256} from './multidomain-depth-baseline.mjs';
import {priorRelations,priorSources,verifyFileTransition} from './relation-review-baseline.mjs';
const c={window:{}};vm.createContext(c);
for(const file of ['theories.js','developments.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','evidence.js','passports.js','workspace.js'])vm.runInContext(fs.readFileSync(file,'utf8'),c);
const w=c.window,get=id=>w.QI_FORMULAS.formulas.find(f=>f.id===id);
const near=(a,b,e=1e-11)=>assert.ok(Math.abs(a-b)<e,`${a} != ${b}`);
const ids=['bell-factorization','chsh-classical','chsh-tsirelson','bell-state'];

test('Bell review changes exactly four metadata records, preserving every equation and historical ledger',()=>{
 assert.deepEqual(ledger.editedFormulaIds,ids);assert.deepEqual(ledger.addedFormulaIds,[]);
 assert.deepEqual(Object.keys(ledger.formulaEdits).sort(),[...ids].sort());
 const before={theories:w.QI_DATA.theories,formulas:priorDepthFormulas(w.QI_FORMULAS.formulas).map(restoreBellFormula),sources:priorSources(w.QI_DATA.sources).filter(s=>!ledger.addedSourceIds.includes(s.id)),passports:priorDepthPassports(w.QI_PASSPORTS.records).filter(p=>!ledger.addedPassportTheoryIds.includes(p.theoryId)),relations:priorRelations(w.QI_DATA.relations)};
 for(const [name,items] of Object.entries(before)){
  const key=name==='passports'?'theoryId':'id',ordered=name==='relations'?[...items]:[...items].sort((a,b)=>a[key]<b[key]?-1:a[key]>b[key]?1:0);
  assert.equal(items.length,ledger.baselineIntegrity[name].count,name);assert.equal(fingerprint(ordered),ledger.baselineIntegrity[name].sha256,name);
 }
 for(const [file,sha] of Object.entries({...ledger.untouchedFiles,...ledger.updatedFiles})){
  if(file==='theories.js')verifyFileTransition(file,sha);
  else verifyDepthFileSha256(file,sha);
 }
 for(const id of ids){const f=get(id),before=ledger.formulaEdits[id].before;
  for(const key of ['id','name','latex','plain','theoryIds','category','tags'])assert.deepEqual(JSON.parse(JSON.stringify(f[key])),before[key],`${id}/${key}`);
  const fields=[...new Set([...Object.keys(f),...Object.keys(before)])].filter(k=>JSON.stringify(f[k])!==JSON.stringify(before[k])).sort();assert.deepEqual(fields,ledger.formulaEdits[id].changedFields);
 }
 const coverage=priorDepthCoverage(JSON.parse(fs.readFileSync('docs/coverage.json')));
 for(const [key,value] of Object.entries(ledger.expected))assert.equal(key==='passports'?priorDepthPassports(w.QI_PASSPORTS.records).length:coverage[key],value+(key==='sources'?1:0),key);
});

test('historical fingerprint bridge rejects undeclared changes instead of hiding them',()=>{
 for(const id of ids){const f=JSON.parse(JSON.stringify(get(id)));f.latex+='x';assert.throws(()=>restoreBellFormula(f),/unexpected post-review change/);}
 const unrelated={id:'not-a-reviewed-formula',latex:'x'};assert.equal(restoreBellFormula(unrelated),unrelated);
 assert.equal(ledger.baselineCommit,'4034edd3bd3f631c67b12255193d203beff234df');
});

test('Bell metadata states independent mixture, outcome normalization and separate finite-sample limits',()=>{
 for(const id of ids){const f=get(id);assert.equal(f.metadataReview,'explicit');assert.equal(f.curationBatch,'bell-metadata-2026-10-07');assert.ok(f.sourceLocations.length>=2);assert.ok(f.variables.length>=3);assert.ok(f.assumptions.length>=4);}
 assert.match(get('bell-factorization').assumptions.join(' '),/q\(lambda\|x,y\)=q\(lambda\)/);
 assert.match(get('bell-factorization').regime,/no-signalling alone does not imply Bell locality/);
 assert.equal(get('chsh-classical').variables[0],get('chsh-tsirelson').variables[0]);
 assert.match(get('chsh-classical').variables[0],/E_00 \+ E_01 \+ E_10 - E_11/);
 assert.match(get('chsh-classical').description,/finite observed excess requires statistical analysis/);
 assert.match(get('chsh-tsirelson').assumptions.join(' '),/Hermitian contractions/);
 assert.match(get('bell-state').description,/not the antisymmetric singlet/);
 const p=w.QI_PASSPORTS.records.find(p=>p.theoryId==='bell');assert.deepEqual([...p.formulaIds],ids);assert.equal(p.reviewedAt,'2026-10-07');assert.equal(w.QI_PASSPORTS.reviewedAt,'2026-09-29');
 assert.deepEqual([...p.evidenceIds],['ev-bell-loophole-free-2015']);
});

const vertices=Array.from({length:16},(_,i)=>Array.from({length:4},(_,j)=>(i>>j)&1?1:-1));
const chsh=E=>E[0][0]+E[0][1]+E[1][0]-E[1][1];
function behavior(weights){return Array.from({length:2},(_,x)=>Array.from({length:2},(_,y)=>Array.from({length:2},(_,a)=>Array.from({length:2},(_,b)=>vertices.reduce((s,v,l)=>s+weights(x,y,l)*(v[x]===(a?1:-1)&&v[2+y]===(b?1:-1)?1:0),0)))));}
const correlators=P=>P.map(row=>row.map(p=>p.reduce((s,r,a)=>s+r.reduce((t,v,b)=>t+(a?1:-1)*(b?1:-1)*v,0),0)));

test('all sixteen deterministic local vertices and stochastic convex mixtures obey the declared CHSH bound',()=>{
 assert.deepEqual([...new Set(vertices.map(v=>chsh([[v[0]*v[2],v[0]*v[3]],[v[1]*v[2],v[1]*v[3]]])))].sort(),[-2,2]);
 for(let k=1;k<=20;k++){let q=vertices.map((_,j)=>1+((j+3)*k)%17),norm=q.reduce((s,v)=>s+v,0);q=q.map(v=>v/norm);const P=behavior((x,y,l)=>q[l]);assert.ok(Math.abs(chsh(correlators(P)))<=2+1e-12);
  for(const row of P)for(const p of row)near(p.flat().reduce((s,v)=>s+v,0),1);
 }
 // A stochastic local response is also bounded directly, without assuming outcomes predetermined.
 for(const a0 of [-1,-.2,.5,1])for(const a1 of [-1,0,1])for(const b0 of [-1,.3,1])for(const b1 of [-1,.1,1])assert.ok(Math.abs(a0*(b0+b1)+a1*(b0-b1))<=2+1e-12);
});

test('setting-dependent hidden selection is a negative control: factorized responses and no-signalling can still give S=4',()=>{
 const P=behavior((x,y,l)=>vertices[l][x]*vertices[l][2+y]===(x*y?-1:1)?1/8:0);
 near(chsh(correlators(P)),4);
 for(let x=0;x<2;x++)for(let y=0;y<2;y++){near(P[x][y].flat().reduce((s,v)=>s+v,0),1);for(let a=0;a<2;a++)near(P[x][y][a][0]+P[x][y][a][1],.5);for(let b=0;b<2;b++)near(P[x][y][0][b]+P[x][y][1][b],.5);}
 // The selected distribution depends on x,y; the fixed-q assumption cannot be dropped.
 assert.notDeepEqual(vertices.map(v=>v[0]*v[2]===1),vertices.map(v=>v[1]*v[3]===-1));
});

const z=(re=0,im=0)=>({re,im}),add=(a,b)=>z(a.re+b.re,a.im+b.im),mul=(a,b)=>z(a.re*b.re-a.im*b.im,a.re*b.im+a.im*b.re),conj=a=>z(a.re,-a.im);
const scale=(A,s)=>A.map(r=>r.map(a=>z(a.re*s,a.im*s))),sum=(A,B)=>A.map((r,i)=>r.map((a,j)=>add(a,B[i][j]))),neg=A=>scale(A,-1);
const prod=(A,B)=>A.map((r,i)=>B[0].map((_,j)=>r.reduce((s,a,k)=>add(s,mul(a,B[k][j])),z())));
const eye=n=>Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>z(i===j?1:0)));
const kron=(A,B)=>Array.from({length:A.length*B.length},(_,i)=>Array.from({length:A.length*B.length},(_,j)=>mul(A[Math.floor(i/B.length)][Math.floor(j/B.length)],B[i%B.length][j%B.length])));
const pauli=u=>[[z(u[2]),z(u[0],-u[1])],[z(u[0],u[1]),z(-u[2])]];
const X=pauli([1,0,0]),Y=pauli([0,1,0]),Z=pauli([0,0,1]),I=eye(2),I4=eye(4),phi=[z(Math.SQRT1_2),z(),z(),z(Math.SQRT1_2)];
const outer=psi=>psi.map(a=>psi.map(b=>mul(a,conj(b))));
const trace=A=>A.reduce((s,r,i)=>add(s,r[i]),z());
const matNear=(A,B)=>A.forEach((r,i)=>r.forEach((a,j)=>{near(a.re,B[i][j].re);near(a.im,B[i][j].im);}));
const ex=(rho,A)=>trace(prod(rho,A)).re;
const op=(A0,A1,B0,B1)=>sum(kron(A0,sum(B0,B1)),kron(A1,sum(B0,neg(B1))));

test('Phi+ normalization, local marginals and Pauli signs differ from the singlet',()=>{
 const rho=outer(phi);near(trace(rho).re,1);matNear(prod(rho,rho),rho);
 const A=[[add(rho[0][0],rho[1][1]),add(rho[0][2],rho[1][3])],[add(rho[2][0],rho[3][1]),add(rho[2][2],rho[3][3])]];
 const B=[[add(rho[0][0],rho[2][2]),add(rho[0][1],rho[2][3])],[add(rho[1][0],rho[3][2]),add(rho[1][1],rho[3][3])]];
 matNear(A,scale(I,.5));matNear(B,scale(I,.5));
 near(ex(rho,kron(X,X)),1);near(ex(rho,kron(Y,Y)),-1);near(ex(rho,kron(Z,Z)),1);
 const singlet=outer([z(),z(Math.SQRT1_2),z(-Math.SQRT1_2),z()]);near(ex(singlet,kron(Z,Z)),-1);
 near(-2*.5*Math.log2(.5),1);
});

test('CHSH saturation and unhelpful settings use the same state and exact S convention',()=>{
 const rho=outer(phi),B0=scale(sum(Z,X),Math.SQRT1_2),B1=scale(sum(Z,neg(X)),Math.SQRT1_2);
 const C=op(Z,X,B0,B1);near(ex(rho,C),2*Math.SQRT2);near(ex(rho,op(Z,X,Z,X)),0);
 near(ex(rho,op(Z,Z,Z,Z)),2);
 for(const p of [0,.2,.6,Math.SQRT1_2,1]){const noisy=sum(scale(rho,p),scale(I4,(1-p)/4));near(ex(noisy,C),2*Math.SQRT2*p);}
 // Scaling every local observable by two violates the normalization assumption.
 near(ex(rho,op(scale(Z,2),scale(X,2),scale(B0,2),scale(B1,2))),8*Math.SQRT2);
});

test('projective CHSH operator identities check noncommuting local axes with commuting parties',()=>{
 const comm=(A,B)=>sum(prod(A,B),neg(prod(B,A)));
 for(let j=0;j<20;j++){
  const axis=t=>[Math.cos(t)*Math.cos(t*.7),Math.sin(t)*Math.cos(t*.7),Math.sin(t*.7)];
  const A0=pauli(axis(j+.1)),A1=pauli(axis(j+.8)),B0=pauli(axis(.4*j+.2)),B1=pauli(axis(j+1.5));
  const C=op(A0,A1,B0,B1);
  matNear(prod(C,C),sum(scale(I4,4),neg(kron(comm(A0,A1),comm(B0,B1)))));
  const D0=sum(kron(A0,I),neg(kron(I,scale(sum(B0,B1),Math.SQRT1_2))));
  const D1=sum(kron(A1,I),neg(kron(I,scale(sum(B0,neg(B1)),Math.SQRT1_2))));
  matNear(sum(scale(I4,2*Math.SQRT2),neg(C)),scale(sum(prod(D0,D0),prod(D1,D1)),Math.SQRT1_2));
  assert.ok(Math.abs(ex(outer(phi),C))<=2*Math.SQRT2+1e-11);
 }
});

test('one finite outcome per setting pair can exceed the distribution bound without disproving a local model',()=>{
 // Independent fair outcomes are local. Each product has either sign with probability 1/2.
 const P=Array.from({length:2},()=>Array.from({length:2},()=>[[.25,.25],[.25,.25]]));near(chsh(correlators(P)),0);
 near(chsh([[1,1],[1,-1]]),4);near((.5)**4,1/16); // positive probability of this finite-sample event
});
