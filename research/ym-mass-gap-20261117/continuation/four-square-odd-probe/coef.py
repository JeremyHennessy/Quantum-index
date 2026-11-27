"""Exact degree-two cancellation for each one-face half-trace probe."""
import sympy as s
from fractions import Fraction as Q
from itertools import permutations
from math import factorial
a=s.symbols("a",positive=True)

def weight(x):
    bits=[(x>>i)&1 for i in range(4)]
    return 2*(sum(bits)+sum(v and (i==0 or not bits[i-1]) for i,v in enumerate(bits)))

def w(x,i):
    base=x&~(1<<i)
    k=(i>0 and (base>>(i-1))&1)+(i<3 and (base>>(i+1))&1)
    return s.Rational(1,2**(1+k))

def state_factor(states):
    d=[a**weight(x) for x in states]
    if len(d)==1:return 1
    if len(d)==2:return -d[0]/(d[1]-d[0])
    return d[0]/(d[2]-d[0])*(d[0]/(d[1]-d[0])+s.Rational(1,2))

def coefficient(target, probe):
    if not target & (1<<probe): return s.S.Zero
    others=[i for i in range(4) if i!=probe and target&(1<<i)]
    out=0
    for r in range(3):
        for l in range(3-r):
            m=2-r-l
            for f in permutations(others):
                seq=f[:r+m]+(probe,)+f[r+m:]
                p=[0]; amp=1
                for i in seq:
                    amp*=w(p[-1],i)
                    p.append(p[-1]^(1<<i))
                assert p[-1]==target
                out+=amp*state_factor(p[:r+1])*state_factor(p[3-l:][::-1])*s.Rational((-1)**m,factorial(m))
    return s.factor(out)

if __name__=="__main__":
    for probe in range(4):
        for target in (11,13):
            assert coefficient(target,probe)==0, (target,probe)
    rho=Q(1,25)
    assert 1/(1-rho)/(1-11*rho/(1-rho))<2
    b,R=Q(1,1000),Q(1,100)
    bound=4*(b/R)**4/(1-(b/R)**2)
    assert bound<Q("0.000405")
    print("8 exact coefficient checks; analytic projector amplitude <=",float(bound))
