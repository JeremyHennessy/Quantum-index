"""Exact sparse rectangle/cube companion block and Schur pencil checks."""
from collections import Counter,defaultdict
from pathlib import Path
from itertools import product
import argparse
import hashlib
import json

import sympy as S
from sympy.polys.matrices import DomainMatrix
from separated_channel import build,at_endpoint,span

L=-S.Rational(1,42);O=(0,0,0);z=S.symbols("z0:3");l=S.Symbol("l")

def inv(k):
    return tuple(-a for a in k)
def add(a,b):
    return tuple(i+j for i,j in zip(a,b))

def output(D):
    return [[list(k),int(a),int(b),str(v)] for k,M in sorted(D.items()) for (a,b),v in sorted(M.todok().items())]

def exact_stencils():
    H,T9,B9=build(6)
    R=[i for i,A in enumerate(H) if span(A)!=(1,1,1)]
    C=[i for i in range(22) if i not in R]
    assert len(R)==6 and len(C)==16
    A=at_endpoint(T9,22)
    r=[S.eye(22)[:,i] for i in R]
    q=[v for v in A.nullspace() if all(not v[i] for i in R)]
    assert len(q)==8
    N=S.Matrix.hstack(*(r+q));assert (A*N).is_zero_matrix and N.cols==14
    G=N.T*N
    B=G[6:,6:]
    assert G==S.diag(S.eye(6),B) and B.is_positive_definite
    blocks=defaultdict(lambda:S.zeros(22))
    for (a,b,k),v in B9.items():blocks[k][a,b]+=S.Rational(v)
    H={k:N.T*M*N for k,M in blocks.items()}
    for k,M in H.items():
        assert M.T==H[inv(k)]
        assert M[:6,:6]==(L*S.eye(6) if k==O else S.zeros(6))
    T={k:M[:6,6:] for k,M in H.items() if not M[:6,6:].is_zero_matrix}
    U={k:M[6:,6:] for k,M in H.items() if not M[6:,6:].is_zero_matrix}
    GR=defaultdict(lambda:S.zeros(8))
    for a,A in T.items():
        for b,Bb in T.items():GR[add(inv(a),b)]+=A.T*Bb
    GR={k:M for k,M in GR.items() if not M.is_zero_matrix}
    assert all(M.T==GR[inv(k)] for k,M in GR.items())
    # Small symbolic rectangular matrix only, no 3-variable determinant.
    Tpoly=S.zeros(6,8)
    for k,M in T.items():
        Tpoly+=M*S.prod(a**(1+h) for a,h in zip(z,k))
    assert DomainMatrix.from_Matrix(Tpoly).to_field().rank()==3
    return R,C,N,B,T,U,GR

def eval_mat(n,m,D,point):
    M=S.zeros(n,m)
    for k,W in D.items():M+=W*S.prod(v**i for v,i in zip(point,k))
    return M.applyfunc(S.expand_complex)

def dom(M,K):
    return DomainMatrix.from_Matrix(M).convert_to(K)

def samples(G,T,U,R):
    allpoints=[(S.Integer(2),S.Integer(3),S.Integer(5)),
               (S.S.One,)*3,(-S.S.One,)*3,
               tuple((a+S.I*b)/c for a,b,c in ((3,4,5),(5,12,13),(8,15,17)))]
    out=[]
    for p in allpoints:
        K=S.QQ_I if any(v.has(S.I) for v in p) else S.QQ
        C=eval_mat(6,8,T,p)
        Ct=eval_mat(6,8,T,tuple(1/v for v in p)).T
        D=eval_mat(8,8,U,p)
        W=eval_mat(8,8,R,p)
        assert (Ct*C-W).applyfunc(S.simplify).is_zero_matrix
        H=(L*S.eye(6)).row_join(C).col_join(Ct.row_join(D))
        Gfull=S.diag(S.eye(6),G)
        eig=[K.to_sympy(q) for q in dom(Gfull.inv()*H,K).charpoly()]
        p9=S.Poly.from_list(eig,l,domain=K)
        assert p9.degree()==14 and p9.LC()==1
        Q,r=p9.div(S.Poly((l-L)**3,l,domain=K))
        assert r.is_zero and Q.degree()==11
        for x in range(-8,9):
            ix=S.Integer(x)
            A=(ix-L)*(ix*G-D)-W
            v=K.to_sympy(dom(A,K).det())
            assert S.expand(v-(ix-L)**5*G.det()*Q.eval(ix))==0
        mult=0;q=p9
        while q.eval(L)==0:
            q=q.exquo(S.Poly(l-L,l,domain=K));mult+=1
        rt=dom(C,K).rank()
        out.append({"z":[str(x) for x in p],"coupling_rank":int(rt),"flat_multiplicity":int(mult),"lambda_checks":17})
        print("exact sample",[str(x) for x in p],"rank T",rt,"flat mult",mult,"17 checks",flush=True)
    return out

def main(args):
    R,C,N,G,T,U,W=exact_stencils()
    assert all(max(map(abs,k))<=1 for A in (T,U,W) for k in A)
    assert all(sum(map(abs,k))<=1 for k in U)
    assert all(sum(map(abs,k))<=2 for k in W)
    d=[]
    for label,D in [("T",T),("U",U),("TstarT",W)]:
        support=len(D);terms=sum(len(M.todok()) for M in D.values())
        radius=max(abs(k) for s in D for k in s)
        print(label,"shifts",support,"nonzero scalar Laurent terms",terms,"radius",radius,flush=True)
        d.append([label,support,terms,radius])
    print("cube Gram det",G.det(),flush=True)
    out={"schema":"global-companion-mixed-block-v1","rectangular_loop_indices":R,"cube_loop_indices":C,
         "cube_gram":[[str(k) for k in row] for row in G.tolist()],
         "cube_embedding":[[str(k) for k in row] for row in N[:,6:].tolist()],
         "T":output(T),"U":output(U),"TstarT":output(W),"metrics":d,
         "samples":samples(G,T,U,W)}
    b=(json.dumps(out,sort_keys=True,separators=(',',':'))+"\n").encode()
    with Path(args.output).open('xb') as f:f.write(b)
    print("artifact",len(b),hashlib.sha256(b).hexdigest(),flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("output")
    main(p.parse_args())
