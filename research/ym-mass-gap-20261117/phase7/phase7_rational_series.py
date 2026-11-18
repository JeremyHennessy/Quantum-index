"""Exact-rational diagnostic for linked locality using the COMPLETE j<=1/2
projected, finite spatial SU2 chain. This is NOT the untruncated Hamiltonian.
Analytic full-Hilbert support theorem must be proved separately.
"""
from fractions import Fraction as F
from itertools import product


def allowed_bits(n):
    if not isinstance(n,int) or n<1 or n>6:
        raise ValueError('n must be 1..6')
    return tuple(product((0,1),repeat=n))


def electric(b):
    n=len(b)
    return F(3,2)*sum(b)+F(3,4)*(b[0]+b[-1]+sum(b[i]^b[i+1] for i in range(n-1)))


def matrices(n):
    states=allowed_bits(n)
    indices={b:i for i,b in enumerate(states)}
    e=[electric(b) for b in states]
    w=[]
    for i in range(n):
        transitions=[]
        for b in states:
            t=list(b);t[i]^=1
            k=(int(i>0 and b[i-1]==1)+int(i+1<n and b[i+1]==1))
            transitions.append((indices[tuple(t)],F(1,2**k)))
        w.append(transitions)
    return states,e,w


def calc(n, order=6, alpha=F(1), s=F(1), couplings=None, include_centering=True, include_energy_shift=True):
    """Exact formal-series coefficients of a finite-cutoff physical *model*.
    Independent of Phase6 sparse higher-representation calculation. All rational.
    W_i can have independent coupling weights. The first face observable O=W_0.
    """
    if order<0 or order>10:raise ValueError('order 0..10')
    alpha,s=F(alpha),F(s)
    if alpha<=0 or s<=0:raise ValueError('positive alpha and s')
    states,e,w=matrices(n)
    if couplings is None:couplings=(F(1),)*n
    if len(couplings)!=n:raise ValueError('couplings shape')
    couplings=tuple(map(F,couplings))
    d=[alpha*x for x in e]
    z=states.index((0,)*n)
    K=len(states)
    zero=lambda:[F(0)]*K
    def apply(W, v):
        y=zero()
        for i,(j,a) in enumerate(W):
            y[j]+=v[i]*a
        return y
    def totalW(v):
        y=zero()
        for k in range(n):
            if couplings[k]:
                for i,(j,a) in enumerate(w[k]):y[j]+=couplings[k]*v[i]*a
        return y
    def dot(x,y):return sum((a*b for a,b in zip(x,y)),F(0))
    O=lambda v:apply(w[0],v)
    V=[zero() for k in range(order+1)]
    V[0][z]=F(1)
    energy=[F(0)]*(order+1)
    for k in range(1,order+1):
        wv=totalW(V[k-1]);energy[k]=-wv[z]
        rhs=wv[:]
        for m in range(1,k+1):
            E=energy[m]
            if E:
                for i in range(K):rhs[i]+=E*V[k-m][i]
        for i in range(K):
            if i!=z:V[k][i]=rhs[i]/d[i]
    norm=[sum((dot(V[i],V[k-i]) for i in range(k+1)),F(0)) for k in range(order+1)]
    # expectation of O: mu = (v^T O v)/(v^T v)
    onum=[sum((dot(V[i],O(V[k-i])) for i in range(k+1)),F(0)) for k in range(order+1)]
    mu=[F(0)]*(order+1)
    for k in range(order+1):
        mu[k]=(onum[k]-sum((norm[i]*mu[k-i] for i in range(1,k+1)),F(0)))/norm[0]
    p=[]
    for k in range(order+1):
        vec=O(V[k])
        if include_centering:
            for m in range(k+1):
                if mu[m]:
                    for i in range(K):vec[i]-=mu[m]*V[k-m][i]
        p.append(vec)
    # x = (D - beta W -E(beta)+s)^(-1) p series
    x=[zero() for k in range(order+1)]
    for k in range(order+1):
        y=p[k][:]
        if k:
            t=totalW(x[k-1]);y=[a+b for a,b in zip(y,t)]
        if include_energy_shift:
            for m in range(1,k+1):
                if energy[m]:
                    for i in range(K):y[i]+=energy[m]*x[k-m][i]
        x[k]=[y[i]/(d[i]+s) for i in range(K)]
    num=[sum((dot(p[i],x[k-i]) for i in range(k+1)),F(0)) for k in range(order+1)]
    G=[F(0)]*(order+1)
    for k in range(order+1):
        G[k]=(num[k]-sum((norm[m]*G[k-m] for m in range(1,k+1)),F(0)))/norm[0]
    return G, {'ground_energy':energy,'state_norm':norm,'mean_O':mu,'basis_size':K}

if __name__=='__main__':
    for n in (2,3,4,5):
        g,info=calc(n,6)
        print('N',n,'basis',info['basis_size'])
        for k in (0,2,4,6):print(k,g[k],float(g[k]))
    for n in (3,4):
        for weights in [[1]*n,([1,0,1] if n==3 else [1,0,1,1]),([1,1,0] if n==3 else [1,1,0,1])]:
            gg,_=calc(n,4,couplings=weights)
            print('SELECT',n,weights,'beta4',gg[4])
