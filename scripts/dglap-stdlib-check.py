#!/usr/bin/env python3
"""Reviewer-authored LO spacelike checks; no phenomenology/solver claims."""
from fractions import Fraction as F
import json, math
checks=[]
def check(name, got, want):
    assert got==want, (name,got,want)
    checks.append({'name':name,'observed':str(got),'expected':str(want),'passed':True})
def poly_integral(p,shift=0):
    return sum((c/F(k+shift+1) for k,c in p.items()),F(0))
def D_moment(k):
    return -sum((F(1,j) for j in range(1,k+1)),F(0))
CF,CA,TR,nf=F(4,3),F(3),F(1,2),F(4)
qq=lambda k:CF*(2*D_moment(k)-F(1,k+1)-F(1,k+2)+F(3,2))
qg=lambda k:TR*(F(1,k+1)-F(2,k+2)+F(2,k+3))
gq=lambda k:CF*(F(2,k)-F(2,k+1)+F(1,k+2))
gg=lambda k:2*CA*(D_moment(k)+F(1,k)-F(2,k+1)+F(1,k+2)-F(1,k+3))+(11*CA-4*TR*nf)/6
check('nonsinglet number moment Pqq',qq(0),F(0))
check('quark-column momentum conservation',qq(1)+gq(1),F(0))
check('gluon-column momentum conservation',2*nf*qg(1)+gg(1),F(0))
check('Pqq momentum',qq(1),F(-16,9))
check('Pgq momentum',gq(1),F(16,9))
check('single-flavour Pqg momentum',qg(1),F(1,6))
check('Pgg momentum nf=4',gg(1),F(-4,3))
# Polynomial test functions establish equivalence of numerator-product and whole-fraction plus.
for k in range(5):
    denom_plus=D_moment(k)+D_moment(k+2)+F(3,2)
    whole_plus=D_moment(k)+(D_moment(k+2)-D_moment(2))
    check(f'Pqq plus-notation equivalence monomial z^{k}',denom_plus,whole_plus)
# Explicit rejected mutations, each deliberately violating required property.
rejects={
 'drop qq endpoint delta violates valence conservation':qq(0)-F(3,2)*CF,
 'double-count whole-fraction-plus endpoint delta':qq(0)+F(3,2)*CF,
 'forget 2nf on singlet qg violates gluon momentum':qg(1)+gg(1),
 'transpose singlet matrix violates quark-column momentum':qq(1)+2*nf*qg(1),
 'transpose singlet matrix violates gluon-column momentum':gq(1)+gg(1),
 'drop gg endpoint delta violates gluon momentum':2*nf*qg(1)+gg(1)-(11*CA-4*TR*nf)/6,
}
for name,value in rejects.items():
    assert value!=0,(name,value)
# Midpoint integration, deliberately independent from parent's implementation.
def integrate(f,a,b,n=100000):
    h=(b-a)/n
    return h*sum(f(a+(i+.5)*h) for i in range(n))
num=[]
for x in (.2,.4,.75):
    toy=integrate(lambda z:(z*(x/z)**2)/z,x,1)
    want=x-x*x
    assert abs(toy-want)<2e-10
    wrong_measure=-x*x*math.log(x)
    assert abs(toy-wrong_measure)>1e-3
    # Test Pqq on f=1, using denominator-product convention.
    actual=float(CF)*(integrate(lambda z:((1+z*z)/z-2)/(1-z),x,1)+2*math.log(1-x)+1.5)
    expected=float(CF)*(-math.log(x)+2*math.log(1-x)+x+.5)
    assert abs(actual-expected)<2e-10
    # Momentum-density F=x f and equivalent no-1/z measure, for smooth test f=x².
    rhs_num=integrate(lambda z:z*((x/z)**2)/z,x,1)
    rhs_mom=integrate(lambda z:z*((x/z)**3),x,1)
    assert abs(x*rhs_num-rhs_mom)<2e-11
    # Full-kernel vs stripped-kernel coupling consistency.
    a=.2/(2*math.pi)
    full_kernel=integrate(lambda z:(a*z)*(x/z)**2/z,x,1)
    assert abs(a*toy-full_kernel)<2e-14
    assert abs(a*toy-a*a*toy)>1e-4
    num.append({'x':x,'toyConvolution':toy,'analytic':want,'qqOnConstant':actual,'qqAnalytic':expected,'numberToMomentum':rhs_mom,'passed':True})
result={'passed':True,'exactChecks':checks,'negativeControls':[{ 'name':k,'nonzeroViolation':str(v),'rejected':True} for k,v in rejects.items()],'numericalChecks':num,'scope':'Reviewer-authored analytic/moment/toy-convolution checks only, not physical PDF fit, evolution-code validation, phenomenology, or proof beyond stated LO representative.'}
print(json.dumps(result,indent=2))
