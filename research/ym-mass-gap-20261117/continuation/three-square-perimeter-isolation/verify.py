"""Exact rational checks for the three-strip spectral bands and their split."""
from fractions import Fraction as Q
from itertools import product
from math import factorial

LENGTHS=(3,3,1,1,1,1)
PERIMETER=(1,1,0,0,1,1)
ENDS=(1,1,1,1,0,0)

def weight(label):
    return sum(v*d for v,d in zip(label,LENGTHS))

def triangle(a,b,c):
    return abs(a-b)<=c<=a+b and (a+b+c)%2==0

def labels(cutoff):
    for l,r,j,k in product(range(cutoff//3+1),range(cutoff//3+1),range(cutoff+1),range(cutoff+1)):
        budget=cutoff-3*l-3*r-j-k
        if budget<0: continue
        lo,hi=max(abs(l-j),abs(r-k)),min(l+j,r+k,budget)
        opts=[x for x in range(lo,hi+1) if triangle(l,j,x) and triangle(r,k,x)]
        for t,u in product(opts,repeat=2):
            if t+u<=budget: yield (l,r,j,k,t,u)

def bessel(n,beta):
    term=lambda k:(beta/2)**(n+2*k)/(factorial(k)*factorial(k+n))
    lo=sum(term(k) for k in range(11))
    return lo,lo+2*term(11)

def a1(beta):
    l,h=bessel(2,beta)
    l1,h1=bessel(1,beta)
    return l/h1,h/l1

a_lo,a_hi=Q(".240"),Q(".241")
s_lo,s_hi=Q(".19"),Q(".2")
assert a_lo<a1(Q(1))[0]<a1(Q(1))[1]<a_hi
assert s_lo<a1(Q(".8"))[0]<a1(Q(".8"))[1]<s_hi
for beta in [Q(1),Q(".8")]:
    assert bessel(3,beta)[1]/bessel(1,beta)[0] < Q(".04")
u=Q("1.031")
assert 1/(1-Q(".03")+Q(".03")**2/2-Q(".03")**3/6) < u

small=list(labels(8))
assert {w:sum(weight(x)==w for x in small) for w in range(9)}=={0:1,1:0,2:0,3:0,4:3,5:0,6:2,7:0,8:7}
assert {x for x in small if weight(x)==8 and max(x)==1}=={PERIMETER,ENDS}
assert len(list(labels(23)))==272
band=(a_lo**8/u,u*a_hi**8)
upper_other = u*max(Q(".04")*a_hi**6,Q(1,4)**9)
upper_ends_split = u*a_hi**6*s_hi**2
lower_next = min(a_lo**4,a_lo**2*s_lo**2,a_lo**3*s_lo,a_lo**5*s_lo)/u
assert Q("1.0676e-5") < band[0] < band[1] < Q("1.1733e-5")
assert upper_other < Q("8.081e-6")
assert upper_ends_split < Q("8.94e-6") and lower_next>Q("1.46e-4")
assert band[0]-max(upper_other,upper_ends_split)>Q("1.7e-6")
print('counts:',[(w,sum(weight(x)==w for x in small)) for w in (0,4,6,8)])
print('isotropic physical band:',*[float(v) for v in band])
print('anisotropic upper competitors:',float(max(upper_other,upper_ends_split)))
print('anisotropic lower higher band:',float(lower_next))
# Infinity-safe contour constants, with the unperturbed perimeter d=a_1^8.
assert max(Q(".04")*a_hi**6,a_hi**6*s_hi**2,Q(1,4)**9) < Q(3,4)*a_lo**8
assert lower_next*u > 2*a_hi**8
rq=8*(u-1)
projector_error=u*rq/(1-rq)+(u-1)
assert projector_error < Q(".38")
assert 2*((u-1)/(1-Q(1,256)))**2 < Q(".05")**2
assert 1-Q(".38")**2>Q(".9")**2
assert Q(".9")/2-Q(".05")==Q(".4")
print('perimeter projector error <',float(projector_error))
print('perimeter-loop transition amplitude > 0.4')
