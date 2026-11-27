"""Rational checks for the open four-square Wilson perimeter band."""
from collections import Counter
from fractions import Fraction as Q
from functools import cache
from itertools import product
from math import factorial

# Coordinates: L,R (length 3); r1,r2,r3; t1,t2; u1,u2.
LENGTHS = (3, 3, 1, 1, 1, 1, 1, 1, 1)

def weight(q):
    return sum(x*d for x, d in zip(q, LENGTHS))

def admissible(a, b, c):
    return abs(a-b) <= c <= a+b and (a+b+c)%2 == 0

def labels(cut):
    for l,r in product(range(cut//3+1), repeat=2):
        for r1,r2,r3 in product(range(cut-3*(l+r)+1), repeat=3):
            remainder = cut-3*(l+r)-r1-r2-r3
            if remainder < 0:
                continue
            opts = [(s,t) for s in range(abs(l-r1), min(l+r1,remainder)+1, 2)
                    for t in range(abs(r-r3), min(r+r3,remainder-s)+1, 2)
                    if admissible(s,t,r2)]
            for (s,t),(u,v) in product(opts, repeat=2):
                if s+t+u+v <= remainder:
                    yield l,r,r1,r2,r3,s,t,u,v

@cache
def bessel(m):
    def term(k):
        return Q(1,2**(m+2*k)*factorial(k)*factorial(m+k))
    lo=sum(term(k) for k in range(13))
    return lo,lo+2*term(13)

@cache
def edge(n):
    if n==0:
        return Q(1),Q(1)
    lo,hi=bessel(n+1)
    a,b=bessel(1)
    return lo/b,hi/a

def normalized(q):
    lo=hi=Q(1)
    for n,d in zip(q,LENGTHS):
        a,b=edge(n)
        lo *= a**d
        hi *= b**d
    a,b=edge(1)
    return lo/b**10,hi/a**10

def binary_label(mask):
    a,b,c,d = mask
    return a,d,a^b,b^c,c^d,b,c,b,c

def main():
    assert edge(1)[1]<Q(1,4)
    # For n>=1, I_(n+2)(1)/I_(n+1)(1) <= 1/[2(n+2)].
    assert Q(1,4)**17 / edge(1)[0]**10 < Q(1,1000)
    basis=set(labels(16))
    band={binary_label(m) for m in ((1,1,1,1),(1,1,0,1),(1,0,1,1))}
    assert len(band)==3 and band<=basis and all(weight(q)==10 for q in band)
    assert {q for q in basis if max(q)<=1} == {binary_label(m) for m in product(range(2),repeat=4)}
    gaps=Counter()
    below=[]; above=[]
    for q in basis-band:
        low,high=normalized(q)
        if high < 1:
            below.append(high)
            gaps['below']+=1
        elif low > 1:
            above.append(low)
            gaps['above']+=1
        else:
            raise AssertionError((q,float(low),float(high)))
    print(len(basis),gaps,float(max(below)),float(min(above)))
    assert max(below)<Q(17,25)
    assert min(above)>Q(37,10)
    b=Q(1,1000)
    rho=4*b
    delta=rho/(1-rho)
    assert 1-rho>Q(".98") and 1/(1-rho)<Q("1.02")
    assert Q(".68")/(Q(".98")-Q(".68"))<Q(5,2)
    assert Q("3.7")/(Q("3.7")-Q("1.02"))<Q(5,2)
    assert Q(5,2)/(1-Q(5,2)*delta)<3
    error=rho*rho/(2*(1-rho))+3*delta*delta
    assert error<Q(".000057")
    sqrt2lo,sqrt2hi=Q("1.4142"),Q("1.4143")
    assert sqrt2lo**2<2<sqrt2hi**2
    halfwidth=Q(".000057")
    assert b*sqrt2lo/8>2*halfwidth
    intervals=[(1-b*sqrt2hi/8-halfwidth,1-b*sqrt2lo/8+halfwidth),
               (1-halfwidth,1+halfwidth),
               (1+b*sqrt2lo/8-halfwidth,1+b*sqrt2hi/8+halfwidth)]
    display=[(Q(".999766"),Q(".999881")),(Q(".999943"),Q("1.000057")),
             (Q("1.000119"),Q("1.000234"))]
    for (a,z),(A,Z) in zip(intervals,display):
        assert A<=a<z<=Z
    print('Schur error',float(error),'three simple bands',[(float(a),float(z)) for a,z in display])

if __name__=='__main__':
    main()
