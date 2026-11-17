"""Exact symbolic two-insertion SU(2) ladder coefficient calculator.

Works in electric-energy eigenbasis reachable by <=2 fundamental Wilson insertions
from pure-electric vacuum. No claim that this finite space is invariant at beta>0.
"""
from itertools import combinations
from sympy import Matrix, zeros, Rational, sqrt, simplify

def build(n, alpha=Rational(1)):
    if n<2: raise ValueError
    states=[('vac',)]
    states += [('one',i) for i in range(n)]
    states += [('adjoint',i) for i in range(n)]
    states += [('pair_sing',i,i+1) for i in range(n-1)]
    states += [('pair_trip',i,i+1) for i in range(n-1)]
    states += [('pair_far',i,j) for i,j in combinations(range(n),2) if j-i>=2]
    idx={s:i for i,s in enumerate(states)}
    en=[]
    for state in states:
        t=state[0]
        e={'vac':0,'one':3,'adjoint':8,'pair_sing':Rational(9,2),'pair_trip':Rational(13,2),'pair_far':6}[t]
        en.append(alpha*e)
    W=[zeros(len(states)) for _ in range(n)]
    def link(k,a,b,coef):
        ia,ib=idx[a],idx[b]
        W[k][ia,ib]=coef;W[k][ib,ia]=coef
    for k in range(n):link(k,('vac',),('one',k),1)
    for i in range(n):
        link(i,('one',i),('adjoint',i),1)
        for k in range(n):
            if k==i:continue
            a,b=sorted([k,i])
            if b-a==1:
                link(k,('one',i),('pair_sing',a,b),Rational(1,2))
                link(k,('one',i),('pair_trip',a,b),sqrt(3)/2)
            else:link(k,('one',i),('pair_far',a,b),1)
    Wsum=sum(W,zeros(len(states)))
    return states, idx,Matrix.diag(*en),Wsum,W

def second_order(n,alpha=Rational(1), s=Rational(1)):
    states,idx,H,W,ws=build(n,alpha)
    v0=zeros(len(states),1);v0[idx[('vac',)]]=1
    # The pure-electric inverse is defined on the vacuum-orthogonal sector.
    hinv=Matrix.diag(*[(0 if x==0 else 1/x) for x in H.diagonal()])
    u1=hinv*W*v0
    u2=hinv*W*u1 - (u1.dot(u1)/2)*v0
    e2=-(v0.dot(W*u1))
    o1=2*v0.dot(ws[0]*u1)
    o2=2*v0.dot(ws[0]*u2)+u1.dot(ws[0]*u1)
    b0=ws[0]*v0
    b1=ws[0]*u1 - o1*v0
    b2=ws[0]*u2-o1*u1-o2*v0
    green=Matrix.diag(*[1/(e+s) for e in H.diagonal()])
    def bil(x,A,y):return (x.T*A*y)[0]
    G0=bil(b0,green,b0)
    G1=2*bil(b1,green,b0)+bil(b0,green*W*green,b0)
    g2terms={
        'b1_b1':bil(b1,green,b1),
        'b2_b0':2*bil(b2,green,b0),
        'b1_W_b0':2*bil(b1,green*W*green,b0),
        'W_W':bil(b0,green*W*green*W*green,b0),
        'vacuum_energy':e2*bil(b0,green*green,b0)
    }
    G2=simplify(sum(g2terms.values()))
    return G0,simplify(G1),G2,{k:simplify(v) for k,v in g2terms.items()}, {'u1norm':simplify(u1.dot(u1)),'o1':simplify(o1),'o2':simplify(o2),'e2':simplify(e2)}

if __name__=='__main__':
    for n in [2,3,4,5]:
        a=second_order(n)
        print(n, 'G0,G1,G2',a[:3], 'ground and observable',a[4])
        print('term sum', a[3])
