"""Independently certify truncation and residual budgets, not a trial overlap."""
from math import factorial
from functools import lru_cache
from fractions import Fraction as Q
from itertools import product

lengths=(3,3,1,1,1,1)
def wt(q):return sum(j*d for j,d in zip(q,lengths))
def tri(a,b,c):return abs(a-b)<=c<=a+b and (a+b+c)%2==0
def labels(cutoff):
    for l,r,j,k in product(range(cutoff//3+1),range(cutoff//3+1),range(cutoff+1),range(cutoff+1)):
        rem=cutoff-3*l-3*r-j-k
        if rem<0: continue
        opts=[v for v in range(max(abs(l-j),abs(r-k)),min(l+j,r+k,rem)+1)
              if tri(l,j,v) and tri(r,k,v)]
        for t,u in product(opts,repeat=2):
            if t+u<=rem:yield l,r,j,k,t,u
@lru_cache(None)
def bess(m,b):
    term=lambda k:(b/2)**(m+2*k)/(factorial(k)*factorial(k+m))
    lo=sum(term(k) for k in range(13))
    return lo,lo+2*term(13)
@lru_cache(None)
def bounds(n,shared,exp):
    if not n:return Q(1),Q(1)
    b=Q(4,5) if shared else Q(1)
    lo,hi=bess(n+1,b);l1,h1=bess(1,b)
    return (lo/h1)**exp,(hi/l1)**exp

def band(label):
    mn=mx=Q(1)
    for i,(n,e) in enumerate(zip(label,lengths)):
        a,b=bounds(n,i in (2,3),e);mn*=a;mx*=b
    return mn,mx

def main():
    search=32
    states=list(labels(search))
    bands=[(wt(x),*band(x)) for x in states]
    grid=10**20
    rho=Q(".015")
    M_bound=1/(1-rho)
    degree=7
    delta_m=M_bound*rho**(degree+1)/factorial(degree+1)
    # Both exact M and its Taylor approximation have norm at most M_bound.
    for cut in range(17,28):
        keep=[(lo,hi) for n,lo,hi in bands if n<=cut]
        peak=max([Q(1,4)**(search+1)]+[hi for n,lo,hi in bands if n>cut])
        round_error=max(hi-Q((lo*grid).__floor__(),grid) for lo,hi in keep)
        total=M_bound**2 * max(peak,round_error) +2*M_bound*delta_m
        print(cut,len(keep),float(peak),float(total))
        if cut==22:
            assert len(keep)==272 and peak<Q("8.036e-19") and total<Q("9.60e-19")
    # Given these inputs, not supplied here, overlap enclosure width follows.
    ortho_residual=Q("1e-16"); vac_residual=Q("1e-12")
    gap_o=Q("2.5e-6"); gap_vac=Q(".9"); norm_sq_error=Q("1e-12")
    state_err_o=norm_sq_error+2*ortho_residual/gap_o
    state_err_v=norm_sq_error+2*vac_residual/gap_vac
    transition_error=state_err_o*(1+norm_sq_error)+state_err_v
    assert transition_error<Q("8.5e-11")
    print('overlap error ceiling',float(transition_error))
if __name__=="__main__":main()
