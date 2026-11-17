import test from 'node:test';
import assert from 'node:assert/strict';
import {wavefunctions,quaternionAxes,symmetricEigenvalues} from './two-plaquette.mjs';

// Research-only finite-graph proof controls; rigorous reasoning is in
// FULL_TAIL_GAP_CERTIFICATE.md, not a four-dimensional Yang-Mills proof.
function eq(a,b){assert.ok(Math.abs(a-b)<1e-11,String(a)+' != '+String(b));}
function cubature24(){
 const p=quaternionAxes();
 for(let bits=0;bits<16;bits++)p.push(Array.from({length:4},(_,i)=>((bits>>i)&1)?.5:-.5));
 return p;
}
function zeros(n){return Array.from({length:n},()=>Array(n).fill(0));}
function multiply(A,B){return A.map(row=>B[0].map((_,j)=>row.reduce((sum,x,k)=>sum+x*B[k][j],0)));}
function calculate(){
 const p=cubature24(),W=zeros(4),W2=zeros(4),G=zeros(4);
 for(const q of p)for(const s of p){
  const f=wavefunctions(q,s).slice(0,4),w=f[1]+f[2];
  for(let i=0;i<4;i++)for(let j=0;j<4;j++){
   const v=f[i]*f[j]/576;
   G[i][j]+=v;W[i][j]+=v*w;W2[i][j]+=v*w*w;
  }
 }
 const Wsq=multiply(W,W);
 const K=W2.map((row,i)=>row.map((x,j)=>x-Wsq[i][j]));
 return {G,W,W2,K};
}
function matEq(A,B){for(let i=0;i<B.length;i++)for(let j=0;j<B[i].length;j++)eq(A[i][j],B[i][j]);}
function bound(alpha,beta) {
 const a=(7.5*alpha-Math.hypot(1.5*alpha,Math.SQRT2*beta))/2;
 const d=6.5*alpha-4*beta;
 const c=beta*Math.sqrt(2.5);
 return {a,d,c,lambda:(a+d-Math.hypot(a-d,2*c))/2};
}

test('fourth-moment 24-point SU2 cubature; old 8-point rule is explicitly invalid',()=>{
 const p=cubature24();assert.equal(p.length,24);
 const avg=fn=>p.reduce((v,q)=>v+fn(q),0)/24;
 eq(avg(q=>q[0]**2),1/4);
 eq(avg(q=>q[0]**4),1/8);
 eq(avg(q=>q[0]**2*q[1]**2),1/24);
 eq(avg(q=>q[0]**3*q[1]),0);
 eq(quaternionAxes().reduce((v,q)=>v+q[0]**4,0)/8,1/4);
});
test('orthonormal low spin basis under 24x24 exact Haar cubature',()=>{
 const {G}=calculate();
 matEq(G,[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]);
});
test('first and second Wilson moments match independent exact Haar moment derivation',()=>{
 const {W,W2}=calculate();
 matEq(W,[[0,1,1,0],[1,0,0,.5],[1,0,0,.5],[0,.5,.5,0]]);
 matEq(W2,[[2,0,0,1],[0,3,2,0],[0,2,3,0],[1,0,0,2]]);
});
test('the full infinite omitted-sector coupling K has exact eigenvalues 0,1,3/2,5/2',()=>{
 const {K}=calculate();
 matEq(K,[[0,0,0,0],[0,7/4,3/4,0],[0,3/4,7/4,0],[0,0,0,3/2]]);
 const e=symmetricEigenvalues(K);
 [0,1,1.5,2.5].forEach((x,i)=>eq(e[i],x));
});
test('exact fixed-parameter minmax comparison proves gap exceeds rational 5/2',()=>{
 const {a,d,c,lambda}=bound(1,.5);
 eq(a,(15-Math.sqrt(11))/4);
 eq(d,9/2);eq(c,Math.sqrt(2.5)/2);
 eq(lambda,2.593088659018707);
 const minor=a-2.5,det=minor*(d-2.5)-c*c;
 eq(minor,(5-Math.sqrt(11))/4);
 eq(det,(15-4*Math.sqrt(11))/8);
 assert.ok(11<(15/4)**2 && minor>0 && det>0 && lambda>2.5);
});
test('at adverse weak electric coupling the same certificate does not prove a gap',()=>{
 assert.ok(bound(.1,1).lambda<0);
 assert.ok(bound(1,20).lambda<0);
});
