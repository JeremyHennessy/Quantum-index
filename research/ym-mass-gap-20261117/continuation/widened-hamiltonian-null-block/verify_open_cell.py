"""Exact quadratic Schur stiffness of the one-edge Dirichlet fixture."""
from itertools import product, combinations
from sympy import QQ
from sympy.polys.matrices import DomainMatrix
from collections import defaultdict

L, d = 4, 4
def vertices():
    return product(range(L+1), repeat=d)
def shift(v, axis):
    return tuple(x+(i==axis) for i,x in enumerate(v))
def boundary_edge(e):
    v, axis = e
    return any(i!=axis and x in (0,L) for i,x in enumerate(v))
def plaquette(v,i,j):
    return (((v,i),1), ((shift(v,i),j),1), ((shift(v,j),i),-1), ((v,j),-1))

all_edges = [(v,i) for v in vertices() for i in range(d) if v[i]<L]
forest = {((x,y,z,w),2) for x,y,w in product(range(1,L),repeat=3) for z in range(L-1)}
edge = ((1,2,0,2),0)
assert len(all_edges) == 2000 and len(forest) == 81
assert not any(boundary_edge(e) for e in forest) and boundary_edge(edge)
free = [e for e in all_edges if not boundary_edge(e) and e not in forest]
assert len(free) == 351
idx = {e:k for k,e in enumerate(free)}
rows, inc, membrane = [], [], defaultdict(int)
for v in vertices():
    for i,j in combinations(range(d),2):
        if v[i]==L or v[j]==L:
            continue
        p = plaquette(v,i,j)
        if all(boundary_edge(e) for e,s in p):
            continue
        b = dict(p).get(edge,0)
        rows.append(({idx[e]:s for e,s in p if e in idx}, b))
        if (i,j)==(0,2) and v[1]==v[3]==2:
            inc.append(b)
            for e,s in p:
                membrane[e] += s
assert len(inc)==16 and sum(inc)==1
assert all(not s or boundary_edge(e) for e,s in membrane.items())
assert sum(b*b for row,b in rows)==1
n = len(free)
gram = defaultdict(lambda: defaultdict(int))
rhs = defaultdict(int)
for row,b in rows:
    for i,s in row.items():
        rhs[i] += s*b
        for j,t in row.items():
            gram[i][j] += s*t
A = DomainMatrix({i:{j:QQ(v) for j,v in row.items() if v} for i,row in gram.items()}, (n,n), QQ)
B = DomainMatrix({i:{0:QQ(v)} for i,v in rhs.items() if v}, (n,1), QQ)
num,den = A.solve_den_rref(B)
assert den and A*num == B*den
x = num.to_Matrix()
stiffness = 1-sum(x[i,0]*v/den for i,v in rhs.items())
assert stiffness > QQ(1,16)
print("included plaquettes:",len(rows),"free links:",n)
print("exact stiffness:",stiffness)
print("decimal:",stiffness.evalf(18))
