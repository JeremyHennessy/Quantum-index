import test from 'node:test';import assert from 'node:assert/strict';
const near=(a,b,e=1e-12)=>assert.ok(Math.abs(a-b)<e,`${a} != ${b}`);
const add=(a,b)=>[a[0]+b[0],a[1]+b[1]],mul=(a,b)=>[a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]],conj=a=>[a[0],-a[1]],z=x=>[x,0];
test('original KM signs and phase produce a unitary three-generation matrix',()=>{
 for(const[t1,t2,t3,d]of [[.22,.04,.01,1.2],[.5,.7,.9,2.4],[0,0,0,0]]){
 const[c1,c2,c3]=[t1,t2,t3].map(Math.cos),[s1,s2,s3]=[t1,t2,t3].map(Math.sin),phase=[Math.cos(d),Math.sin(d)];
 const v=[[z(c1),z(-s1*c3),z(-s1*s3)],[z(s1*c2),add(z(c1*c2*c3),mul(z(-s2*s3),phase)),add(z(c1*c2*s3),mul(z(s2*c3),phase))],[z(s1*s2),add(z(c1*s2*c3),mul(z(c2*s3),phase)),add(z(c1*s2*s3),mul(z(-c2*c3),phase))]];
 for(let i=0;i<3;i++)for(let j=0;j<3;j++){let a=z(0);for(let k=0;k<3;k++)a=add(a,mul(conj(v[k][i]),v[k][j]));near(a[0],i===j?1:0);near(a[1],0);}
 }
});
test('MSW resonance and leading seesaw scaling have their stated restricted limits',()=>{
 const theta=.3,delta=2,energy=3;const a0=delta/(4*energy)*Math.cos(2*theta),b=delta/(4*energy)*Math.sin(2*theta);const prob=a=>b*b/(a*a+b*b);
 near(prob(a0),Math.sin(2*theta)**2);near(prob(0),1);assert.ok(prob(10)<prob(a0));
 for(const mass of [100,1000,10000]){const dirac=1;const light=-2*dirac**2/(mass+Math.sqrt(mass*mass+4*dirac*dirac));const leading=-(dirac**2)/mass;assert.ok(Math.abs((light-leading)/leading)<2/mass**2);assert.ok(light<0);}
 // This signed one-generation eigenvalue check is not an observed neutrino mass fit.
});
test('two-generation GIM rotation cancels off-diagonal neutral currents',()=>{
 for(const theta of [0,.23,.7,Math.PI/2]){const c=Math.cos(theta),s=Math.sin(theta);near(c*c+s*s,1);near(c*(-s)+s*c,0);}
});
