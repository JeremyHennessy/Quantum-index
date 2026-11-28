"""Rational Galerkin residual pilot; no floats in its certification path."""
from fractions import Fraction as F
from functools import lru_cache
from math import isqrt
import sympy as s

x,y,d = s.symbols("x y d")
z=(x,y,d)
a,b=1-x*x,1-y*y
G=s.Matrix([[4*a,-d,y*a-4*x*d],[-d,4*b,x*b-4*y*d],
 [y*a-4*x*d,x*b-4*y*d,3*(a+b-2*d*d)+x*x*b+y*y*a-2*x*y*d]])
drift=(-12*x,-12*y,-6*x*y-20*d)
def kinetic(f):
    return s.expand(-sum(drift[i]*s.diff(f,z[i]) for i in range(3))
       -sum(G[i,j]*s.diff(f,z[i],z[j]) for i in range(3) for j in range(3)))
# Λx=3x; Λy=3y; Λd=6d. Pure derivative in d:
# Δ_A d=Δ_B d=-3d; Γ_A(x,d)=-xd, Γ_B(y,d)=-yd.
def casimir(f):
    return s.expand(3*x*s.diff(f,x)+3*y*s.diff(f,y)+6*d*s.diff(f,d)
        -a*s.diff(f,x,2)-b*s.diff(f,y,2)
        +2*x*d*s.diff(f,x,d)+2*y*d*s.diff(f,y,d)
        -(a+b-2*d*d)*s.diff(f,d,2))
assert casimir(d)==6*d and casimir(x*y)==6*x*y
@lru_cache(None)
def beta_pi(i,j):
    # B(i+1/2,j+1/2)/π, using the two elementary beta recurrences.
    p=F(1)
    for k in range(i):
        p*=F(2*k+1,2*(k+1))
    for k in range(j):
        p*=F(2*k+1,2*(i+k+1))
    return p
@lru_cache(None)
def moment(i,j,k):
    if (i|j|k)&1:
        return F(0)
    return F(4,k+1)*beta_pi(i//2,k//2+1)*beta_pi(j//2,k//2+1)
def mean(poly):
    return sum((F(coeff)*moment(*pows) for pows,coeff in s.Poly(poly,*z).terms()),F(0))
assert moment(0,0,0)==1 and moment(0,0,2)==F(3,16) and moment(2,2,2)==F(1,192)
def as_s(q):
    return s.Rational(q.numerator,q.denominator)
def poisson(src,n):
    mon=[x**i*y**j*d**k for k in range(n//2+1) for i in range(n-2*k+1)
         for j in range(n-2*k-i+1)]
    pol=[s.Poly(kinetic(m)+as_s(mean(m)),*z) for m in mon]
    rhs=s.Poly(src,*z)
    M=s.Matrix([[p.coeff_monomial(m) for p in pol] for m in mon])
    v=M.inv()*s.Matrix([rhs.coeff_monomial(m) for m in mon])
    f=s.expand(sum(c*m for c,m in zip(v,mon)))
    assert mean(f)==0 and kinetic(f)==s.expand(src)
    return f
def taylor(N):
    us=[s.Integer(1)]
    es=[F(0)]
    for n in range(1,N+1):
        src=s.expand((x+y)*us[-1])
        es.append(-mean(src))
        src=s.expand(src+sum(as_s(es[j])*us[n-j] for j in range(1,n+1)))
        us.append(poisson(src,n))
    assert us[1]==(x+y)/12
    log2=s.expand(us[2]-us[1]**2/2).subs({y:-x,d:1-x*x}).expand()
    assert log2.coeff(x,2)==-s.Rational(1,832)
    return us,es
def ceil_sqrt(q):
    if q==0: return F(0)
    S=10**60
    a,b=q.numerator*S*S,q.denominator
    n=isqrt(a//b)
    if n*n*b<a: n+=1
    ans=F(n,S)
    assert ans*ans>=q
    return ans
def norm(f):
    return ceil_sqrt(mean(s.expand(f*f)))
def amplify(f):
    return s.expand(f+casimir(f))
def check(N,t):
    us,es=taylor(N)
    u=s.expand(sum(p*as_s(t**i) for i,p in enumerate(us)))
    E=sum((e*t**i for i,e in enumerate(es)),F(0))
    r=s.expand(kinetic(u)-(as_s(t)*(x+y)+as_s(E))*u)
    gamma=F(9)-2*abs(t)-abs(E)
    rn=norm(r)
    assert gamma>0 and rn/gamma<F(1,2)
    l2=2*rn/gamma
    ee=2*rn
    for j in range(2):
        l2=(1+2*abs(t)+2*4**j*2*abs(t))*l2+ee*norm(u)+norm(r)
        r=amplify(r)
        u=amplify(u)
    point_error=7*l2
    # Rebuild mean-normalized trial rather than its Sobolev amplifications.
    u=s.expand(sum(p*as_s(t**i) for i,p in enumerate(us)))
    trace=s.expand(u.subs({y:-x,d:1-x*x}))
    f0=F(trace.subs(x,0))
    fhalf=F(trace.subs(x,s.Rational(1,2)))
    assert min(f0,fhalf)>point_error
    diff=f0-fhalf
    print(f"N={N}, t={t}: E={E}; trial difference={diff}")
    # Presentation scale is rigorously bounded using integers, not floating point.
    S=10**16
    print(f"  ceil(1e16 * point_error)={(point_error.numerator*S+point_error.denominator-1)//point_error.denominator}; "
          f"floor(1e16 * trial difference)={diff.numerator*S//diff.denominator}; certified={diff>2*point_error}")
    return diff>2*point_error

if __name__=="__main__":
    # Fix all input rational and monotone trial range before comparing.
    for degree in (2,4,6):
        if check(degree,F(1,128)):
            break
    else:
        raise AssertionError("No sign certified at the specified cutoff")
