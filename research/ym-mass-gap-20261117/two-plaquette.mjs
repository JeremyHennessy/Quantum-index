/**
 * Research-only SU(2) connected two-square graph / spin-network preflight.
 * No four-dimensional or infinite-volume mass-gap claim.
 *
 * Four j <= 1/2 states: vacuum, left, right, outer-loop.
 * The extra T state has j_shared=1 and is deliberately excluded by
 * the uniform link cutoff j <= 1/2. Values are independently checked
 * using character/Haar quadrature, recoupling, and spin-network energies.
 */
export const vertices = Object.freeze(['A', 'B', 'C', 'D', 'E', 'F']);
export const links = Object.freeze([
  ['A','B'], ['B','C'], ['D','E'], ['E','F'],
  ['A','D'], ['B','E'], ['C','F'],
].map(pair => Object.freeze(pair)));
export const orientedPlaquettes = Object.freeze([
  Object.freeze([['A','B',-1],['A','D',1],['D','E',1],['B','E',-1]]),
  Object.freeze([['B','E',1],['E','F',1],['C','F',-1],['B','C',-1]]),
]);

function validTwoSpin(n, label) {
  if (!Number.isSafeInteger(n) || n < 0 || n > 1000) throw new RangeError(label+' must be an integer in 0..1000');
}
export function singletAdmissible(nLeft, nRight, nShared) {
  for (const [x,k] of [[nLeft,'left'],[nRight,'right'],[nShared,'shared']]) validTwoSpin(x,k);
  return (nLeft+nRight+nShared) % 2 === 0 &&
    Math.abs(nLeft-nRight) <= nShared && nShared <= nLeft+nRight;
}
export function statesAtLinkCutoff(maxTwiceJ) {
  validTwoSpin(maxTwiceJ,'cutoff');
  const out = [];
  for (let a=0;a<=maxTwiceJ;a++)for(let b=0;b<=maxTwiceJ;b++)for(let c=0;c<=maxTwiceJ;c++)
    if(singletAdmissible(a,b,c))out.push([a,b,c]);
  return out;
}
export const controlBasis=Object.freeze([
  Object.freeze({name:'vacuum',spins:Object.freeze([0,0,0])}),
  Object.freeze({name:'left',spins:Object.freeze([1,0,1])}),
  Object.freeze({name:'right',spins:Object.freeze([0,1,1])}),
  Object.freeze({name:'outer',spins:Object.freeze([1,1,0])}),
  Object.freeze({name:'triplet',spins:Object.freeze([1,1,2])}),
]);
export function casimirTwiceJ(n) { validTwoSpin(n,'spin');return n*(n+2)/4; }
export function electricEnergy(spins, electricCoefficient=1) {
  if(!Number.isFinite(electricCoefficient)||electricCoefficient<=0)throw new RangeError('electric coefficient positive');
  if(!Array.isArray(spins)||spins.length!==3||!singletAdmissible(...spins))throw new RangeError('Gauss-inadmissible triple');
  const [a,b,c]=spins;
  return electricCoefficient*(3*casimirTwiceJ(a)+3*casimirTwiceJ(b)+casimirTwiceJ(c));
}

// SU(2) fundamental link variables represented by unit quaternions.
export function quaternionMultiply(a,b) {
  const [w,x,y,z]=a, [v,i,j,k]=b;
  return [w*v-x*i-y*j-z*k,w*i+x*v+y*k-z*j,w*j-x*k+y*v+z*i,w*k+x*j-y*i+z*v];
}
export function quaternionInverse(q) {return [q[0],-q[1],-q[2],-q[3]];}
export function orientedWilsonTrace(linkField,loop) {
  let q=[1,0,0,0];
  for(const [a,b,sign] of loop){
    const u=linkField[a+','+b];
    if(!u)throw new Error('missing link '+a+','+b);
    q=quaternionMultiply(q,sign===1?u:quaternionInverse(u));
  }
  return 2*q[0];
}
export function localGaugeTransform(linkField,siteTransforms) {
  const out={};
  for(const [a,b] of links){
    const key=a+','+b, u=linkField[key];
    if(!u||!siteTransforms[a]||!siteTransforms[b])throw new Error('incomplete SU2 fixture');
    out[key]=quaternionMultiply(quaternionMultiply(siteTransforms[a],u),quaternionInverse(siteTransforms[b]));
  }
  return out;
}

// Unit-quaternion representation of SU(2) with normalized character Tr_F(g)=2q0.
export function wavefunctions(q, r) {
  if(!Array.isArray(q)||q.length!==4||!Array.isArray(r)||r.length!==4)throw new TypeError('quaternions needed');
  const left=2*q[0], right=2*r[0];
  const product=2*(q[0]*r[0]-q[1]*r[1]-q[2]*r[2]-q[3]*r[3]);
  const triplet=(2/Math.sqrt(3))*(left*right-product/2);
  return [1,left,right,product,triplet];
}

/* +/- quaternion-coordinate axes exactly integrate all odd monomials and
 * all degree <= 2 polynomials over SU(2) Haar (S^3). Our wavefunction
 * Gram and Wilson matrix elements have at most degree 3 in each quaternion;
 * odd cubic terms integrate to zero. This cubature is NOT suitable for
 * arbitrary higher-spin matrix elements or general quartic observables.
 */
export function quaternionAxes() {
  const out=[];
  for(let i=0;i<4;i++)for(const sign of [-1,1]){
    const q=[0,0,0,0];q[i]=sign;out.push(q);
  }
  return out;
}
export function haarCubatureMatrices() {
  const n=controlBasis.length, gram=Array.from({length:n},()=>Array(n).fill(0));
  const left=Array.from({length:n},()=>Array(n).fill(0));
  const right=Array.from({length:n},()=>Array(n).fill(0));
  const axes=quaternionAxes();
  for(const q of axes)for(const r of axes){
    const f=wavefunctions(q,r);
    for(let a=0;a<n;a++)for(let b=0;b<n;b++){
      const p=f[a]*f[b]/64;
      gram[a][b]+=p;
      left[a][b]+=p*f[1];
      right[a][b]+=p*f[2];
    }
  }
  return {gram,left,right};
}

// Independent spin-network/Clebsch-Gordan representation calculation:
// 1/2 ⊗ 1/2 = 0 ⊕ 1. Character trace relation gives c_singlet=1/2,
// c_triplet=sqrt(3)/2; these are magnitudes of the appropriate weighted 6j.
export function spinNetworkWilsonMatrices() {
  const n=controlBasis.length;
  const left=Array.from({length:n},()=>Array(n).fill(0));
  const right=Array.from({length:n},()=>Array(n).fill(0));
  const put=(m,a,b,x)=>{m[a][b]=x;m[b][a]=x;};
  put(left,0,1,1);put(right,0,2,1);
  put(left,2,3,.5);put(right,1,3,.5);
  put(left,2,4,Math.sqrt(3)/2);put(right,1,4,Math.sqrt(3)/2);
  return {left,right};
}

export function projectedHamiltonian(electricCoefficient=1, magneticCoefficient=.5, includeTriplet=false, method='spinNetwork') {
  if(!Number.isFinite(magneticCoefficient)||magneticCoefficient<=0)throw new RangeError('magnetic coefficient positive');
  if(!['spinNetwork','haarCubature'].includes(method))throw new TypeError('unknown independent method');
  const n=includeTriplet?5:4;
  const v=method==='spinNetwork'?spinNetworkWilsonMatrices():haarCubatureMatrices();
  return Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>
    (i===j?electricEnergy(controlBasis[i].spins,electricCoefficient):0)
    -magneticCoefficient*(v.left[i][j]+v.right[i][j]) ));
}

// Small symmetric matrix numerical Jacobi rotations. Not a rigorous gap bound.
export function symmetricEigenvalues(matrix) {
  const n=matrix.length;
  if(!Number.isSafeInteger(n)||n<2||n>25||matrix.some(row=>!Array.isArray(row)||row.length!==n))throw new RangeError('symmetric square 2..25 matrix required');
  const a=matrix.map((row,i)=>row.map((v,j)=>{
    if(!Number.isFinite(v) || Math.abs(v-matrix[j][i])>1e-12)throw new RangeError('finite symmetric matrix required');
    return v;
  }));
  for(let iter=0;iter<300*n*n;iter++){
    let p=0,q=1,best=Math.abs(a[0][1]);
    for(let i=0;i<n;i++)for(let j=i+1;j<n;j++){const v=Math.abs(a[i][j]);if(v>best){p=i;q=j;best=v;}}
    if(best<1e-12)return a.map((row,i)=>row[i]).sort((x,y)=>x-y);
    const theta=.5*Math.atan2(2*a[p][q],a[q][q]-a[p][p]);
    const c=Math.cos(theta),s=Math.sin(theta);
    const ap=a[p][p], aqq=a[q][q], apq=a[p][q];
    a[p][p]=c*c*ap-2*s*c*apq+s*s*aqq;
    a[q][q]=s*s*ap+2*s*c*apq+c*c*aqq;
    a[p][q]=a[q][p]=0;
    for(let k=0;k<n;k++)if(k!==p&&k!==q){
      const x=a[k][p],y=a[k][q];
      a[k][p]=a[p][k]=c*x-s*y;
      a[k][q]=a[q][k]=s*x+c*y;
    }
  }
  throw new Error('Jacobi solver did not converge');
}

export function sharedSpinTripletLeakage() {
  return {amplitude:Math.sqrt(3)/2,squaredNorm:3/4,retainedSquaredNorm:1/4};
}
