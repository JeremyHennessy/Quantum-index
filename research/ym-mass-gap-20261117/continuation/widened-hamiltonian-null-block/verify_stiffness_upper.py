"""Integer geometry and rational Rayleigh upper-bound identity for the open cell."""
from collections import defaultdict
from fractions import Fraction
from itertools import combinations, product

def add(v,i):
    return v[:i]+(v[i]+1,)+v[i+1:]

def check(b):
    # Integer one-form b*A_x=y. All other components vanish.
    def form(e):
        v,i=e
        return v[1] if i==0 else 0
    energy_scaled=0
    for v in product(range(b+1),repeat=4):
        for i,j in combinations(range(4),2):
            if v[i]==b or v[j]==b or not all(0<v[k]<b for k in range(4) if k not in (i,j)):
                continue
            flux=form((v,i))+form((add(v,i),j))-form((add(v,j),i))-form((v,j))
            assert flux==(-1 if (i,j)==(0,1) else 0)
            energy_scaled+=flux**2
    assert energy_scaled==b*b*(b-1)**2
    used=set()
    pairing_sum=Fraction(0)
    for axis in (2,3):
        for boundary in (0,b):
            for depth in range(1,b):
                z,w=(boundary,depth) if axis==2 else (depth,boundary)
                for j in range(1,(b+1)//2):
                    hi=b-j
                    length=hi-j
                    path={}
                    div=defaultdict(int)
                    for k in range(j,hi):
                        path[((k,j,z,w),0)]=1
                        path[((hi,k,z,w),1)]=1
                        path[((k,hi,z,w),0)]=-1
                        path[((j,k,z,w),1)]=-1
                    assert len(path)==4*length
                    assert not (used & path.keys())
                    used.update(path)
                    for (v,i),s in path.items():
                        assert sum(x in (0,b) for k,x in enumerate(v) if k!=i)==1
                        div[v]-=s
                        div[add(v,i)]+=s
                    assert not any(div.values())
                    flux_scaled=sum(s*form(e) for e,s in path.items())
                    assert flux_scaled==-length**2
                    pairing_sum+=Fraction(flux_scaled**2,b*b*len(path))
    exact_sum=Fraction(b*b*(b-2)**2-(b%2),8)
    assert sum((b-2*j)**3 for j in range(1,(b+1)//2))==exact_sum
    assert pairing_sum==Fraction(b-1,b*b)*exact_sum
    rayleigh=Fraction((b-1)**2)/pairing_sum
    if b>=8:
        assert rayleigh<=Fraction(13,b)
    print(b,pairing_sum,rayleigh)

if __name__=='__main__':
    for b in range(3,11): check(b)
