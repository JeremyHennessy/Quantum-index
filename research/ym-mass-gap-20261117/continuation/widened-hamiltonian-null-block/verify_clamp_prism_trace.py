"""Exact edge-chain/seam & trace multiplicity certificates for b=2..8."""
from collections import Counter
from itertools import product

def inc(v,i):
    return v[:i]+(v[i]+1,)+v[i+1:]

def oedge(u,v):
    if u==v: return None,0
    i,= [k for k in range(4) if u[k]!=v[k]]
    assert abs(u[i]-v[i])==1
    return (min(u,v),i),1 if u<v else -1

def square(v,i,j):
    assert i<j
    return Counter({(v,i):1,(inc(v,i),j):1,(inc(v,j),i):-1,(v,j):-1})

def clean(c):
    return {k:x for k,x in c.items() if x}

def verify(b):
    uses=Counter()
    traces=set()
    edges=0
    for v in product(range(b+1),repeat=4):
        for i in range(4):
            transverse=[k for k in range(4) if k!=i and v[k] in (0,b)]
            if v[i]==b or len(transverse)!=1: continue
            face=transverse[0]
            side=v[face]
            edges+=1
            w=inc(v,i)
            u,z=v,w
            chain=Counter({(v,i):1})
            prisms=[]
            for k in range(4):
                def clamp(x):
                    return x[:k]+(min(b-1,max(1,x[k])),)+x[k+1:]
                uu,zz=clamp(u),clamp(z)
                for start,end,mult in ((z,zz,1),(u,uu,-1)):
                    e,s=oedge(start,end)
                    if s: chain[e]+=mult*s
                if u!=z and k!=i and u!=uu:
                    assert k==face
                    a=min(u,uu)
                    p=(a,min(i,k),max(i,k))
                    assert all(0<a[j]<b for j in range(4) if j not in (i,k))
                    prisms.append(p)
                u,z=uu,zz
            e,s=oedge(u,z)
            if s:
                chain[e]-=s
                key=(face,side,e)
                assert key not in traces
                traces.add(key)
                assert e[0][face]==(1 if side==0 else b-1)
                assert all(1<=x<=b-1 for x in u+z)
            assert len(prisms)<=1
            if prisms:
                p=prisms[0]
                uses[p]+=1
                bound=square(*p)
                assert clean(chain) in (dict(bound),{e:-s for e,s in bound.items()})
            else:
                assert not clean(chain)
    assert edges==24*b*(b-1)**2
    assert max(uses.values())==1
    assert len(traces)==8*3*(b-2)*(b-1)**2
    print(b,edges,len(uses),max(uses.values()),len(traces))
if __name__=='__main__':
    for b in range(2,9): verify(b)
