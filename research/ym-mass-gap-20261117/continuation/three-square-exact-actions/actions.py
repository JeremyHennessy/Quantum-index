"""Exact local Wilson actions: SU(2) orthonormal spin network on three faces."""
from functools import lru_cache
from itertools import product
from sympy import S, sqrt, simplify
from sympy.physics.wigner import wigner_3j, clebsch_gordan

# Edge order L,R,J,K,T,U; the signs at each vertex encode incoming (-).
VERTICES=(( (0,2,4),(1,1,1) ),( (0,2,5),(-1,-1,1) ),
          ( (1,3,4),(1,1,-1) ),( (1,3,5),(-1,-1,-1) ))
VAC=(0,0,0,0,0,0)
FACE=((1,0,1,0,0,0),(0,0,1,1,1,1),(0,1,0,1,0,0))
PERIMETER=(1,1,0,0,1,1)
PAIRS=((1,0,0,1,1,1),(0,1,1,0,1,1))
ENDS=(1,1,1,1,0,0)
LENGTHS=(3,3,1,1,1,1)

def spins(n): return range(-n,n+1,2)
def weight(q):return sum(n*l for n,l in zip(q,LENGTHS))
def tri(a,b,c):return abs(a-b)<=c<=a+b and (a+b+c)%2==0
def good(q):return min(q)>=0 and all(tri(*(q[i] for i in order)) for order,_ in VERTICES)

@lru_cache(None)
def intertwiner(labels,directions):
    halves=[S(n)/2 for n in labels]
    data={}
    for magnetic in product(*(spins(n) for n in labels)):
        signed=[s*m for s,m in zip(directions,magnetic)]
        if sum(signed)!=0:continue
        factor=(-1)**sum((n-m)//2 for n,m,d in zip(labels,magnetic,directions) if d==-1)
        v=factor*wigner_3j(*halves,*(S(x)/2 for x in signed))
        if v:data[magnetic]=v
    return data

@lru_cache(None)
def cg(n,m,l,s,j,t):
    if l==0:return S(int(n==j and m==t and s==0))
    if n==0:return S(int(l==j and s==t and m==0))
    return clebsch_gordan(S(n)/2,S(l)/2,S(j)/2,S(m)/2,S(s)/2,S(t)/2)

@lru_cache(None)
def vertex(a,b,c,dirs):
    ia,ib,ic=[intertwiner(t,dirs) for t in (a,b,c)]
    v=S(0)
    for ma,wa in ia.items():
        for mb,wb in ib.items():
            mc=tuple(x+y for x,y in zip(ma,mb))
            wc=ic.get(mc,0)
            if not wc:continue
            x=wa*wb*wc
            for i in range(3):
                x*=cg(a[i],ma[i],b[i],mb[i],c[i],mc[i])
                if not x:break
            v+=x
    return simplify(v)

def targets(a,b):
    # Wilson input has only zero and fundamental edge labels.
    if any(x not in (0,1) for x in b):raise ValueError("not a fundamental loop")
    for c in product(*(sorted({abs(x-y),x+y}) for x,y in zip(a,b))):
        if good(c):yield c

@lru_cache(None)
def character_sign(loop):
    # On a simple fundamental loop, normalized network = +/- trace.
    # Its value at the all-identity connection must be +/-2.
    total=S(0)
    for m in product(*(spins(q) for q in loop)):
        weight_=S(1)
        for idx,dirs in VERTICES:
            weight_*=intertwiner(tuple(loop[i] for i in idx),dirs).get(tuple(m[i] for i in idx),0)
        total+=weight_
    for n in loop:total*=sqrt(n+1)
    total=simplify(total)
    assert total in (S(2),S(-2))
    return total/2

def element(a,loop,c):
    if not (good(a) and good(c)):raise ValueError("invalid spin labels")
    if c not in targets(a,loop):return S(0)
    value=character_sign(loop)/2
    for n,l,j in zip(a,loop,c):value*=sqrt(S((n+1)*(l+1))/(j+1))
    for idx,dirs in VERTICES:
        value*=vertex(*(tuple(q[i] for i in idx) for q in (a,loop,c)),dirs)
        if not value:break
    return simplify(value)

def labels(cutoff):
    for l,r,j,k in product(range(cutoff//3+1),range(cutoff//3+1),range(cutoff+1),range(cutoff+1)):
        budget=cutoff-3*l-3*r-j-k
        if budget<0:continue
        opts=[x for x in range(max(abs(l-j),abs(r-k)),min(l+j,r+k,budget)+1)
              if tri(l,j,x) and tri(r,k,x)]
        for t,u in product(opts,repeat=2):
            if t+u<=budget:yield l,r,j,k,t,u

def replay(cutoff=10):
    # Convert signed spin-network phases to the normalized character phase.
    def trace_element(a,loop,c):
        pa=character_sign(a) if a!=VAC else 1
        pc=character_sign(c) if c!=VAC else 1
        return element(a,loop,c)*pa*pc
    for f in FACE:
        assert trace_element(VAC,f,f)==S(1)/2
    assert trace_element(FACE[0],FACE[1],PAIRS[0])==S(1)/4
    assert trace_element(FACE[2],FACE[1],PAIRS[1])==S(1)/4
    assert trace_element(PAIRS[0],FACE[2],PERIMETER)==S(1)/4
    assert trace_element(PAIRS[1],FACE[0],PERIMETER)==S(1)/4
    # The disconnected vector is the product of two trace states:
    # its phase is fixed by the action from the left face.
    p=element(FACE[0],FACE[2],ENDS)*character_sign(FACE[0])*2
    assert p in (S(-1),S(1))
    assert element(ENDS,FACE[1],PERIMETER)*p*character_sign(PERIMETER)==S(1)/8
    calls=0
    for a in labels(cutoff):
        for loop in FACE:
            norm2=S(0)
            for c in targets(a,loop):
                v=element(a,loop,c)
                assert v==element(c,loop,a)
                norm2+=v*v
                calls+=1
            assert simplify(norm2)<=1
    # Multiplication operators commute on the full expanding support.
    def apply(a,loop):
        result={}
        for k,v in a.items():
            for out in targets(k,loop):
                result[out]=result.get(out,S(0))+v*element(k,loop,out)
        return {k:simplify(v) for k,v in result.items() if simplify(v)}
    commutators=0
    for a in labels(min(10,cutoff)):
        for i in range(3):
            for j in range(i+1,3):
                assert apply(apply({a:S(1)},FACE[i]),FACE[j])==apply(apply({a:S(1)},FACE[j]),FACE[i])
                commutators+=1
    print("exact commutators checked:",commutators)
    print("exact symmetric local matrix entries checked:",calls)

if __name__=="__main__":
    import sys
    replay(int(sys.argv[1]) if len(sys.argv)>1 else 10)
