"""Rational audit of a single open spatial SU(2) Wilson plaquette, period 4."""
from fractions import Fraction as Q
from math import factorial

D, N = 11, 4
B = Q(1,100)


def eye():
    return [[Q(i==j) for j in range(D)] for i in range(D)]


def mul(a,b):
    return [[sum((a[i][k]*b[k][j] for k in range(D) if a[i][k] and b[k][j]),Q(0))
             for j in range(D)] for i in range(D)]


def tr(a):
    return sum(a[i][i] for i in range(D))


def bess(m):
    def term(k):
        return Q(1,2)**(2*k+m)/(factorial(k)*factorial(k+m))
    low = sum(term(k) for k in range(11))
    return low, low+2*term(11)


def main():
    W = [[Q(1,2) if abs(i-j)==1 else Q(0) for j in range(D)] for i in range(D)]
    cur, M = eye(), eye()
    for k in range(1,6):
        cur = mul(cur,W)
        M = [[M[i][j]+(B/2)**k/factorial(k)*cur[i][j] for j in range(D)] for i in range(D)]
    lo1,hi1 = bess(1)
    vals=[Q(1)]
    for n in range(1,5):
        lo,hi=bess(n+1)
        lower,upper=(lo/hi1)**4,(hi/lo1)**4
        rounded=Q((lower*10**16).__floor__(),10**16)
        assert 0<=upper-rounded<Q(2,10**16)
        vals.append(rounded)
    # Infinite K tail from its factorial bound; adjacent a_n upper bound
    # falls by at least 1/14 after the first omitted coefficient n=5.
    dk = Q(8,10**16) + (Q(1,2)**5/factorial(6))**4/(1-Q(1,14)**4)
    dm=2*(B/2)**6/factorial(6)
    ds=4*dk+8*dm
    assert ds<Q("1e-14")
    A=[[sum(vals[k]*M[i][k]*M[k][j] for k in range(5)) for j in range(D)] for i in range(D)]
    powers=[eye(),A]
    for _ in range(2,N+1):
        powers.append(mul(powers[-1],A))
    Z=tr(powers[N])
    mean=tr(mul(powers[N],W))/Z
    numer=lambda j: tr(mul(mul(mul(powers[N-j],W),powers[j]),W))
    d=N*2**(N-1)*ds
    noise=6*d
    # For each ratio, |x/Z_exact - x_approx/Z_approx| <= 2d:
    # Z_exact >= 1 and the approximate ratio has modulus <=1.
    # The squared mean costs <= 4d.
    assert Z>0 and noise<Q("1e-10")
    cap=Q(100,99)/256
    tails=lambda s: cap**s/(1-Q(1,6)**(4*s))
    L,U=[],[]
    hs=[]
    for j in range(3):
        h=numer(j)/Z-mean**2
        hs.append(h)
        l,u=h-noise,h+noise
        E=4*tails(N-j)*(min(1,tails(j)) if j else 1)
        div=2 if 2*j==N else 1
        back=0 if div==2 else 4*tails(N-j)
        L.append(max(0,(l-back-E)/div))
        U.append(((1+tails(N))*u+4*tails(N)**2/(1+tails(N)))/div)
        print(j, 'periodic',float(h), 'vacuum',float(L[-1]),float(U[-1]))
    assert L[0]>0 and L[1]>0
    q=Q(1,100)
    assert U[2]-q*L[1]<0
    print('moment enclosure',float(noise),'spectral cap',float(cap))
    print('two-time witness upper',float(U[2]-q*L[1]))


if __name__=='__main__':
    main()
