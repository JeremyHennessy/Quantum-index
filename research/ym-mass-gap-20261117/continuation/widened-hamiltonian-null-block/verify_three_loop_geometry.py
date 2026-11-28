"""Exact free support and coordinate reflection check for C39+C114-C119."""
from itertools import product

COEFF = {39: 1, 114: 1, 119: -1}


def square_edges(x, y):
    corners = ((x,y,0),(x+1,y,0),(x+1,y+1,0),(x,y+1,0))
    return {tuple(sorted((u,v))) for u,v in zip(corners,corners[1:]+corners[:1])}


def boundary(mask):
    ans=set()
    for i in range(8):
        if mask>>i&1:
            ans ^= square_edges(i%4,i//4)
    return frozenset(ans)


def translate(edges, delta):
    return frozenset(tuple(sorted(tuple(a+b for a,b in zip(v,delta)) for v in e)) for e in edges)


def reflect(edges, signs):
    return frozenset(tuple(sorted(tuple(a*b for a,b in zip(v,signs)) for v in e)) for e in edges)


def anchor(edges):
    return tuple(min(v[i] for e in edges for v in e) for i in range(3))


def normal(edges):
    p=anchor(edges)
    return translate(edges,tuple(-u for u in p))


def is_cycle(edges):
    nbr={}
    for u,v in edges:
        nbr.setdefault(u,set()).add(v)
        nbr.setdefault(v,set()).add(u)
    if any(len(n)!=2 for n in nbr.values()):
        return False
    reached=set()
    todo=[next(iter(nbr))]
    while todo:
        x=todo.pop()
        if x not in reached:
            reached.add(x);todo.extend(nbr[x]-reached)
    return len(reached)==len(nbr)==len(edges)


support={m:boundary(m) for m in COEFF}
assert all(len(e)==10 and is_cycle(e) for e in support.values())
assert all(m.bit_count() % 2 == 0 for m in support)
types={normal(e):m for m,e in support.items()}
assert len(types)==3
assert all(translate(e,(1,0,0))==boundary(m*2) for m,e in support.items())
for signs in product((-1,1),repeat=3):
    result=[]
    for m,edges in support.items():
        g=reflect(edges,signs)
        n=types[normal(g)]
        d=tuple(a-b for a,b in zip(anchor(g),anchor(support[n])))
        assert COEFF[m]==COEFF[n] and g==translate(support[n],d)
        result.append((m,n,d))
    print(signs,result)
print("three distinct translation types, ten-link simple loops, all sign copies verified")
