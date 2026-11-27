"""Exact free electric band enumeration on a rectangular open spatial mesh."""
from collections import Counter, defaultdict
from itertools import product
from math import isqrt

def invdim(js):
    # Clebsch--Gordan recursion: number of ways to end at total twice-spin 0.
    d={0:1}
    for j in js:
        dst=defaultdict(int)
        for k,v in d.items():
            for ell in range(abs(j-k),j+k+1,2): dst[ell]+=v
        d=dst
    return d.get(0,0)

def mesh(width,height):
    V=list(product(range(height+1),range(width+1)))
    E=[(v,(v[0]+dr,v[1]+dc)) for v in V for dr,dc in ((0,1),(1,0)) if (v[0]+dr,v[1]+dc) in V]
    F=[]
    for r,c in product(range(height),range(width)):
        corners=((r,c),(r,c+1),(r+1,c+1),(r+1,c))
        F.append(sum(1<<E.index(tuple(sorted((v,w)))) for v,w in zip(corners,corners[1:]+corners[:1])))
    return V,E,F

def enumerate_band(width,height,cap=32):
    V,E,F=mesh(width,height)
    I=[[i for i,e in enumerate(E) if v in e] for v in V]
    done=defaultdict(list)
    for i in I: done[max(i)].append(i)
    def recurse(labels,C,dim):
        i=len(labels)
        if i==len(E):
            yield C,labels,dim
            return
        for n in range(isqrt(cap-C+1)):
            disp=labels+(n,)
            nxt=dim
            for js in done[i]:
                nxt*=invdim(tuple(disp[j] for j in js))
                if not nxt: break
            if nxt: yield from recurse(disp,C+n*(n+2),nxt)
    return list(recurse((),0,1)),F

def facemask(q,F):
    edges=sum(1<<i for i,n in enumerate(q) if n)
    for flags in range(1<<len(F)):
        p=0
        for i,f in enumerate(F):
            if flags>>i&1: p^=f
        if p==edges:return flags
    raise ValueError(q)

def main():
    from fractions import Fraction as Q
    for w,h,labels_count,total,mult in ((4,1,3,3,0),(3,2,21,25,4),(4,2,56,64,8)):
        rows,F=enumerate_band(w,h)
        band=[(q,d) for c,q,d in rows if c==30]
        assert len(band)==labels_count and sum(d for q,d in band)==total
        assert all(max(q)<=1 for q,d in band)
        assert Counter(d for q,d in band)[2]==mult
        assert all(abs(c-30)>=2 for c,q,d in rows if c!=30)
        assert min(c for c,q,d in rows if c)>0
        print((w,h),"band",labels_count,total)
    rows,F=enumerate_band(4,2)
    D={facemask(q,F):d for c,q,d in rows if c==30}
    tops=(11,13,15)
    assert set(k for k in D if k<16)==set(tops)
    assert all((k^(1<<i)) not in D for k in tops for i in range(4,8))
    # The original top-row target 124 loses face 4 and gains face 8.
    target=3|(1<<7)
    assert D[target]==1 and (target^11).bit_count()==2 and (target^13).bit_count()==4
    def perimeter(m):
        p=0
        for i,edge in enumerate(F):
            if m>>i&1:p^=edge
        return p.bit_count()
    assert perimeter(target)==10 and perimeter(3)==6 and perimeter(11|(1<<7))==12
    # Second-order effective Hamiltonian is minus the reduced-resolvent product.
    hopping=-(Q(1,4)/(-6)+Q(1,16)/3+Q(3,16)/7)
    assert hopping==Q(-1,168)
    # Riesz projections on radius 1/2, with ||V|| <=8 in the new geometry.
    R,g=Q(3,100),Q(1,10000)
    assert 2/(1-16*R)**2<8
    tail=8*(g/R)**3/(1-(g/R)**2)
    assert Q("1.4142")**2<2 and Q("1.4142")*g/96-tail>Q("1.17e-6")
    print("second-order leakage",hopping,"odd reference band-signal lower bound 1.17e-6")
if __name__=='__main__': main()
