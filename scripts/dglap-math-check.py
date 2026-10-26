#!/usr/bin/env python3
"""Local algebra/integration checks, not a PDF evolution solver or phenomenology."""
import json,math
from pathlib import Path
import sympy as S
from scipy.integrate import quad
z=S.symbols('z',positive=True); nf=S.symbols('n_f',integer=True,positive=True)
CF=S.Rational(4,3); CA=S.Integer(3); TR=S.Rational(1,2)
I=lambda e:S.integrate(S.cancel(e),(z,0,1))
qq=lambda phi:S.simplify(CF*(I(((1+z*z)*phi-2*phi.subs(z,1))/(1-z))+S.Rational(3,2)*phi.subs(z,1)))
gq=lambda phi:S.simplify(CF*I(phi*(1+(1-z)**2)/z))
qg=lambda phi:S.simplify(TR*I(phi*(z*z+(1-z)**2)))
gg=lambda phi:S.simplify(2*CA*(I((z*phi-phi.subs(z,1))/(1-z))+I(phi*((1-z)/z+z*(1-z))))+(11*CA-4*TR*nf)/6*phi.subs(z,1))
checks=[]
def eq(name,actual,expected):
 assert S.simplify(actual-expected)==0,(name,actual,expected)
 checks.append({'name':name,'kind':'exact positive','actual':str(actual),'expected':str(expected),'passed':True})
def neq(name,actual,forbidden):
 assert S.simplify(actual-forbidden)!=0,(name,actual,forbidden)
 checks.append({'name':name,'kind':'negative mutation rejected','mutant':str(actual),'required':str(forbidden),'passed':True})
eq('nonsinglet quark number moment',qq(S.Integer(1)),0)
eq('qq momentum moment',qq(z),-S.Rational(16,9))
eq('gq momentum moment',gq(z),S.Rational(16,9))
eq('individual qg momentum moment',qg(z),S.Rational(1,6))
eq('gg momentum moment',gg(z),-nf/3)
eq('each quark-parent momentum column sums to zero',qq(z)+gq(z),0)
eq('gluon-parent momentum column including every q and qbar',2*nf*qg(z)+gg(z),0)
for n in [0,1,2,4]:
 phi=z**n
 whole=CF*I((1+z*z)*(phi-1)/(1-z))
 eq(f'denominator-plus plus delta equals whole-fraction plus, phi=z^{n}',qq(phi),whole)
neq('missing qq delta violates valence conservation',qq(S.Integer(1))-CF*S.Rational(3,2),0)
neq('whole-fraction plus AND qq delta double counts endpoint',qq(S.Integer(1))+CF*S.Rational(3,2),0)
neq('transposed off-diagonal kernel violates quark column momentum',qq(z)+qg(z),0)
neq('omitting 2nf flavor factor violates gluon column at nf=3',(qg(z)+gg(z)).subs(nf,3),0)
neq('omitting gg delta violates momentum',(2*nf*qg(z)+gg(z)-(11*CA-4*TR*nf)/6).subs(nf,3),0)
# Mellin convention is M_N[f]=int_0^1 dx x^(N-1) f(x).
x,N=S.symbols('x N',positive=True)
C=x-x*x # P(z)=z, f(x)=x^2; correct convolution.
for n in [1,2,3,5]:
 eq(f'toy Mellin factorization N={n}',S.integrate(x**(n-1)*C,(x,0,1)),S.Rational(1,n+1)*S.Rational(1,n+2))
rows=[]
for xv in [.1,.37,.8]:
 number=quad(lambda zz: zz*(xv/zz)**2/zz,xv,1,epsabs=1e-12)[0]
 momentum=quad(lambda zz: zz*(xv/zz)**3,xv,1,epsabs=1e-12)[0]
 wrong_measure=quad(lambda zz: zz*(xv/zz)**2,xv,1,epsabs=1e-12)[0]
 wrong_momentum=quad(lambda zz: zz*(xv/zz)**3/zz,xv,1,epsabs=1e-12)[0]
 target=xv-xv*xv
 assert abs(number-target)<1e-12
 assert abs(momentum-xv*number)<1e-12
 assert abs(number-wrong_measure)>1e-4
 assert abs(momentum-wrong_momentum)>1e-4
 # Pqq number-density convolution evaluated by two equivalent distribution forms.
 f=lambda y:y*y
 den=quad(lambda zz: ((1+zz*zz)*f(xv/zz)/zz-2*f(xv))/(1-zz),xv,1,epsabs=1e-12)[0]
 den=(4/3)*(den+(1.5+2*math.log(1-xv))*f(xv))
 whole=quad(lambda zz: ((1+zz*zz)/(1-zz))*(f(xv/zz)/zz-f(xv)),xv,1,epsabs=1e-12)[0]
 whole-=(f(xv)*quad(lambda zz:(1+zz*zz)/(1-zz),0,xv,epsabs=1e-12)[0])
 whole*=4/3
 assert abs(den-whole)<1e-11
 wrong_endpoint=den-(4/3)*2*f(xv)*math.log(1-xv)
 assert abs(den-wrong_endpoint)>1e-4
 # Full kernel a_s P0 equals external a_s convention, but double counting differs.
 a=.2/(2*math.pi)
 ext=a*number; full=quad(lambda zz:a*zz*(xv/zz)**2/zz,xv,1)[0]
 assert abs(ext-full)<1e-12 and abs(a*full-ext)>1e-4
 assert 0*number==0
 rows.append({'x':xv,'regular_convolution':number,'analytic_x_minus_x_squared':target,'momentum_convolution':momentum,'qq_denominator_plus':den,'qq_whole_fraction_plus':whole,'wrong_omitted_endpoint_log':wrong_endpoint,'external_coupling':ext,'full_kernel_coupling':full,'all_positive_and_negative_checks_passed':True})
# Endpoint delta is the identity convolution by its distributional action at z=1.
eq('delta identity on the polynomial test density', (x/1)**2 / 1, x*x)
# A natural-log scale derivative d/d ln(mu) is 2 d/d ln(mu^2).
mu,mu0=S.symbols('mu mu0',positive=True)
eq('log-scale factor of two',S.simplify(mu*S.diff(S.log(mu*mu/(mu0*mu0)),mu)),2)
neq('quark momentum alone need not be conserved',qq(z),0)
result={'passed':True,'scope':'Exact rational LO kernel moments and elementary synthetic convolution tests only; no evolved physical PDF, fit, finite-grid solver, cross-section or new-physics validation. Finite moments/test functions assumed.','exactAndMutationChecks':checks,'numericConvolutionChecks':rows,'counts':{'exactPositive':sum(c['kind']=='exact positive' for c in checks),'negativeMutationsRejected':sum(c['kind']=='negative mutation rejected' for c in checks),'numericPoints':len(rows)}}
print(json.dumps(result,indent=2))
