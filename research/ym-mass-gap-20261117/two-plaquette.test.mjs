import test from 'node:test';
import assert from 'node:assert/strict';
import {vertices,links,orientedPlaquettes,singletAdmissible,statesAtLinkCutoff,
  controlBasis,casimirTwiceJ,electricEnergy,haarCubatureMatrices,
  spinNetworkWilsonMatrices,projectedHamiltonian,symmetricEigenvalues,
  sharedSpinTripletLeakage, quaternionMultiply, quaternionInverse, orientedWilsonTrace,localGaugeTransform} from './two-plaquette.mjs';
const eq=(a,b,tol=1e-12)=>assert.ok(Math.abs(a-b)<tol,`${a} versus ${b}`);
const eqMatrix=(a,b)=>{assert.equal(a.length,b.length);for(let i=0;i<a.length;i++)for(let j=0;j<a.length;j++)eq(a[i][j],b[i][j]);};
test('connected six-vertex seven-link graph with a shared edge in reverse orientations',()=>{
  assert.equal(vertices.length,6);assert.equal(links.length,7);
  const edges=links.map(e=>e.join(','));assert.equal(new Set(edges).size,7);
  const valid=(x,y)=>edges.includes([x,y].join(','));
  for(const p of orientedPlaquettes){
    assert.equal(p.length,4);
    for(const [x,y,sign] of p){assert.ok(valid(x,y));assert.ok(sign===1||sign===-1)}
  }
  const sh=orientedPlaquettes.flatMap(p=>p.filter(e=>e[0]==='B'&&e[1]==='E').map(e=>e[2]));
  assert.deepEqual(sh,[-1,1]);
});
test('both oriented plaquette loops close, and link Wilson traces are locally gauge invariant',()=>{
  for(const loop of orientedPlaquettes){
    const hops=loop.map(([a,b,sign])=>sign===1?[a,b]:[b,a]);
    for(let i=0;i<hops.length;i++)assert.equal(hops[i][1],hops[(i+1)%hops.length][0]);
  }
  const axis=(n,theta)=>{const q=[Math.cos(theta),0,0,0];q[n]=Math.sin(theta);return q;};
  const field={};
  links.forEach(([a,b],i)=>field[a+','+b]=axis(i%3+1,(i+1)*0.133));
  const gauge={};
  vertices.forEach((v,i)=>gauge[v]=axis(i%3+1,(i+2)*0.178));
  const transformed=localGaugeTransform(field,gauge);
  for(const loop of orientedPlaquettes)eq(orientedWilsonTrace(field,loop),orientedWilsonTrace(transformed,loop),1e-11);
  // Nontrivial algebra: check inverse and product normalize in SU(2)
  const u=field['A,B'], inv=quaternionInverse(u);
  const unit=quaternionMultiply(u,inv);
  eq(unit[0],1); for(let i=1;i<4;i++)eq(unit[i],0);
});
test('Gauss singlet triangle + parity constraints and complete j <= 1/2 basis',()=>{
  assert.deepEqual(statesAtLinkCutoff(1),[[0,0,0],[0,1,1],[1,0,1],[1,1,0]]);
  assert.ok(singletAdmissible(1,1,2));
  assert.ok(!singletAdmissible(1,1,1));
  assert.ok(!singletAdmissible(1,0,0));
  assert.equal(statesAtLinkCutoff(0).length,1);
});
test('SU2 Casimir and link counts generate exact interacting electric energies',()=>{
  eq(casimirTwiceJ(1),.75);eq(casimirTwiceJ(2),2);
  assert.deepEqual(controlBasis.map(s=>electricEnergy(s.spins)),[0,3,3,4.5,6.5]);
  assert.notEqual(electricEnergy([1,1,0]),2*electricEnergy([1,0,1]));
});
test('independent Haar moment cubature orthonormalizes five physical spin-network states',()=>{
  const {gram}=haarCubatureMatrices();
  for(let i=0;i<5;i++)for(let j=0;j<5;j++)eq(gram[i][j],i===j?1:0);
});
test('Wilson-left and Wilson-right exact 5x5 matrix elements agree by independent methods',()=>{
  const haar=haarCubatureMatrices(),spin=spinNetworkWilsonMatrices();
  eqMatrix(haar.left,spin.left);eqMatrix(haar.right,spin.right);
  eq(haar.left[2][3],.5);eq(haar.right[1][3],.5);
  eq(haar.left[2][4],Math.sqrt(3)/2);eq(haar.right[1][4],Math.sqrt(3)/2);
});
test('Wilson-magnetic action is Hermitian and preserves the projected singlet space',()=>{
  for(const m of [spinNetworkWilsonMatrices().left,spinNetworkWilsonMatrices().right])
    for(let i=0;i<m.length;i++)for(let j=0;j<m.length;j++)eq(m[i][j],m[j][i]);
  for(const includeTriplet of [false,true]){
    const H=projectedHamiltonian(1,.5,includeTriplet);
    for(let i=0;i<H.length;i++)for(let j=0;j<H.length;j++)eq(H[i][j],H[j][i]);
  }
});
test('half-spin link cutoff drops 75% of adjacent plaquette-action squared norm',()=>{
  const r=sharedSpinTripletLeakage();
  eq(r.squaredNorm,.75);eq(r.retainedSquaredNorm,.25);
  eq(r.amplitude*r.amplitude,r.squaredNorm);
});
test('4-state and 5-state Hamiltonians match independent Haar-derived matrices',()=>{
  for(const [alpha,beta] of [[1,.5],[1,2],[.1,1],[.01,25]])for(const includeTriplet of [false,true]){
    eqMatrix(projectedHamiltonian(alpha,beta,includeTriplet),projectedHamiltonian(alpha,beta,includeTriplet,'haarCubature'));
  }
});
test('projected interacting 4-state example spectrum matches independent NumPy eigvalsh',()=>{
  const e=symmetricEigenvalues(projectedHamiltonian(1,.5,false));
  eq(e[0],-.15960283102124476,2e-10);
  eq(e[1],3,2e-10);
  eq(e[2],3.0748944106962273,2e-10);
});
test('5-state shared-triplet enlargement modifies spectrum, never treated as cutoff convergence',()=>{
  const e4=symmetricEigenvalues(projectedHamiltonian(1,.5,false));
  const e5=symmetricEigenvalues(projectedHamiltonian(1,.5,true));
  assert.ok(e5[0]<e4[0]);
  assert.ok(Math.abs((e4[1]-e4[0])-(e5[1]-e5[0]))>1e-3);
});
test('coupling and invalid-input negative controls fail closed',()=>{
  assert.throws(()=>statesAtLinkCutoff(-1),RangeError);
  assert.throws(()=>electricEnergy([1,1,1]),RangeError);
  assert.throws(()=>projectedHamiltonian(1,-1),RangeError);
  assert.throws(()=>projectedHamiltonian(1,.5,false,'fake'),TypeError);
  assert.throws(()=>symmetricEigenvalues([[1,3],[2,1]]),RangeError);
});
