"""Deterministic finite fixtures; standard library only, no network/repository writes."""
import json
import math
from pathlib import Path

TOL=1e-12
checks=[]
def record(name, detail): checks.append({'name':name,'passed':True,**detail})
def zero(n=2): return [[0j for _ in range(n)] for _ in range(n)]
def eye(n=2): return [[complex(i==j) for j in range(n)] for i in range(n)]
def add(*aa): return [[sum(a[i][j] for a in aa) for j in range(len(aa[0]))] for i in range(len(aa[0]))]
def scale(a,c): return [[c*v for v in row] for row in a]
def dagger(a): return [[a[j][i].conjugate() for j in range(len(a))] for i in range(len(a))]
def mul(a,b): return [[sum(a[i][k]*b[k][j] for k in range(len(a))) for j in range(len(a))] for i in range(len(a))]
def tr(a): return sum(a[i][i] for i in range(len(a)))
def maxdiff(a,b): return max(abs(a[i][j]-b[i][j]) for i in range(len(a)) for j in range(len(a)))
def near(a,b): assert abs(a-b)<TOL,(a,b)
def same(a,b): assert maxdiff(a,b)<TOL,(a,b)
def positive2(a):
 same(a,dagger(a)); assert a[0][0].real>=-TOL and a[1][1].real>=-TOL
 det=a[0][0]*a[1][1]-a[0][1]*a[1][0]
 near(det.imag,0);assert det.real>=-TOL

def branch(ks,rho): return add(*[mul(mul(k,rho),dagger(k)) for k in ks])
def effect(ks): return add(*[mul(dagger(k),k) for k in ks])
def instrument(ks,rho):
 out=[branch(k,rho) for k in ks];ps=[tr(o).real for o in out]
 # Exact zero is a null outcome; numerical tolerance is not the definition.
 post=[None if p==0 else scale(o,1/p) for p,o in zip(ps,out)]
 return out,ps,post

def nonselective(ks,rho):return add(*instrument(ks,rho)[0])
def valid(ks,rho):
 positive2(rho);near(tr(rho),1);same(add(*[effect(k) for k in ks]),eye())
 out,ps,post=instrument(ks,rho);near(sum(ps),1)
 for ef,o,p,state in zip([effect(k) for k in ks],out,ps,post):
  positive2(ef);positive2(add(eye(),scale(ef,-1)));positive2(o)
  assert -TOL<=p<=1+TOL;near(p,tr(mul(rho,ef)))
  if p>0: positive2(state);near(tr(state),1);same(o,scale(state,p))
  else: same(o,zero());assert state is None
 same(add(*out),add(*[scale(state,p) for p,state in zip(ps,post) if p>0]))

I=eye();P0=[[1+0j,0j],[0j,0j]];P1=[[0j,0j],[0j,1+0j]]
Z=[[1+0j,0j],[0j,-1+0j]];R01=[[0j,1+0j],[0j,0j]]
plus=[[.5+0j,.5+0j],[.5+0j,.5+0j]]
rho=[[.6+0j,.2j],[-.2j,.4+0j]]
mixed=scale(I,.5)
projective=[[P0],[P1]];reset=[[P0],[R01]]
random_z=[[scale(I,1/math.sqrt(2))],[scale(Z,1/math.sqrt(2))]]
coarse=[[scale(P0,1/math.sqrt(2)),scale(P1,1/math.sqrt(2))],[scale(I,1/math.sqrt(2))]]
weak=[[ [[math.sqrt(.8)+0j,0j],[0j,math.sqrt(.2)+0j]] ],[ [[math.sqrt(.2)+0j,0j],[0j,math.sqrt(.8)+0j]] ]]

for family in [projective,reset,random_z,coarse,weak]:
 for state in [P0,P1,plus,rho,mixed]:valid(family,state)
record('five CP Kraus instruments on five states',{'fixtures':25,'checks':'completeness, branch probabilities, positivity, normalized positive branches, null branches, POVM trace duality, positive-probability weighted output'})

out,ps,post=instrument(projective,plus)
near(ps[0],.5);near(ps[1],.5);same(post[0],P0);same(post[1],P1);same(add(*out),mixed)
record('projective measurement of coherent state',{'probabilities':[.5,.5],'unconditional':'I/2','posteriors':['P0','P1']})

out,ps,post=instrument(projective,P0)
assert ps==[1,0] and post[1] is None;same(out[1],zero())
record('zero-probability branch is not a posterior state',{'probabilities':[1,0],'zeroBranchPosterior':None})

for a in [0,1]:same(effect(projective[a]),effect(reset[a]))
_,pa,sa=instrument(projective,plus);_,pb,sb=instrument(reset,plus)
assert pa==pb;same(sa[1],P1);same(sb[1],P0)
assert maxdiff(sa[1],sb[1])>.9
record('same POVM does not determine post-measurement state',{'posteriorDifferenceMaxNorm':maxdiff(sa[1],sb[1]),'probabilities':[.5,.5]})

# Equality checked on all four matrix units spans arbitrary 2x2 input operators.
for i in range(2):
 for j in range(2):
  basis=zero();basis[i][j]=1;same(nonselective(projective,basis),nonselective(random_z,basis))
_,pa,_=instrument(projective,P0);_,pb,_=instrument(random_z,P0)
near(pa[0],1);near(pb[0],.5)
record('same channel does not determine instrument',{'matrixBasisChecks':4,'projectiveProbabilities':pa,'randomUnitaryProbabilities':pb})

out,ps,post=instrument(coarse,rho)
wrong_k=add(*coarse[0]);wrong_output=branch([wrong_k],rho)
assert maxdiff(wrong_output,out[0])>.09
same(post[0],[[.6+0j,0j],[0j,.4+0j]])
record('coarse-grained branch sums operations not amplitudes',{'wrongCoherentKrausSumDifference':maxdiff(wrong_output,out[0]),'correctProbability':ps[0]})

# A branch alone is not normalized; unconditional averaging requires probabilities.
unnormalized=branch([P0],rho);near(tr(unnormalized),.6)
_,ps,post=instrument(projective,rho);wrong_total=add(*post)
near(tr(wrong_total),2);near(tr(nonselective(projective,rho)),1)
record('normalization errors are detected',{'unnormalizedBranchTrace':tr(unnormalized).real,'unweightedPosteriorSumTrace':tr(wrong_total).real})

# Omitting a valid outcome gives a subnormalized operation, not a full instrument.
missing_total=branch([P0],P1);near(tr(missing_total),0)
assert maxdiff(effect([P0]),I)==1
record('missing-outcome family fails instrument completeness',{'totalProbabilityOnP1':tr(missing_total).real})

_,_,sm=instrument(weak,mixed);_,_,s0=instrument(weak,P0);_,_,s1=instrument(weak,P1)
wrong_affine=scale(add(s0[0],s1[0]),.5)
same(sm[0],[[.8+0j,0j],[0j,.2+0j]])
assert maxdiff(sm[0],wrong_affine)>.29
same(branch(weak[0],mixed),scale(add(branch(weak[0],P0),branch(weak[0],P1)),.5))
record('operation is linear but conditional update need not be affine',{'posteriorAffineFailure':maxdiff(sm[0],wrong_affine)})

# Transposition is positive and trace preserving on the system but is not CP.
def transpose(a):return [[a[j][i] for j in range(len(a))] for i in range(len(a))]
for state in [P0,P1,plus,rho,mixed]:positive2(transpose(state));near(tr(transpose(state)),1)
bell=[[.5+0j,0j,0j,.5+0j],[0j,0j,0j,0j],[0j,0j,0j,0j],[.5+0j,0j,0j,.5+0j]]
pt=zero(4)
for a in range(2):
 for b in range(2):
  for c in range(2):
   for d in range(2):pt[2*a+b][2*c+d]=bell[2*c+b][2*a+d]
v=[0,1/math.sqrt(2),-1/math.sqrt(2),0]
witness=sum(v[i]*pt[i][j]*v[j] for i in range(4) for j in range(4))
near(witness,-.5);near(tr(pt),1)
record('positive trace-preserving transposition is not CP',{'bellPartialTransposeNegativeExpectation':witness.real,'analyticalSpectrum':[-.5,.5,.5,.5]})

result={'passed':True,'groups':len(checks),'tolerance':TOL,'checks':checks,'scope':'finite mathematical regression fixtures, not empirical evidence or universal proof by sampling'}
print(json.dumps(result,indent=2))
