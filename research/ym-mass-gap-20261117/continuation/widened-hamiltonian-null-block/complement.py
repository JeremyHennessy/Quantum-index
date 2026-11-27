"""Exact characteristic and probe check for the complementary X-odd/Y-even sector."""
from fractions import Fraction as Q

import sympy as S

from first_order import D, mat, rmat
from probe import probe_vec

def residue(q,p):
    a,b=S.fraction(q)
    return int(a)*pow(int(b),-1,p)%p

def run_complement(spectral_slices,p_minus):
    ent,G,A=mat(D)
    T=G.inv()*A
    X,Y=[rmat(ent,G,c) for c in "XY"]
    I=S.eye(len(ent))
    C=S.diag(*[(-1)**m.bit_count() for m,_ in ent])
    assert C*T==-T*C and C*X==X*C and C*Y==Y*C and C.T*G*C==G
    constraints=T.col_join(X+I).col_join(Y-I)
    assert len(constraints.nullspace())==8
    N=S.Matrix.hstack(*constraints.col_join(C+I).nullspace())
    assert N.cols==7

    ell={39:1,78:-1,114:1,119:-1,228:-1,238:1}
    assert all(sum(m==k and len(net)==1 for m,net in ent)==1 for k in ell)
    q=S.Matrix([ell.get(m,0) if len(net)==1 else 0 for m,net in ent])
    assert constraints*q==S.zeros(constraints.rows,1) and C*q==q
    assert (q.T*G*q)[0]==6
    B=N.row_join(q)
    GB=B.T*G*B
    assert GB[:7,7]==S.zeros(7,1) and GB[7,7]==6

    energy,n_active,n_groups=spectral_slices(ent,G,A,B)
    assert (n_active,n_groups)==(50,150)
    decomp={e:B.T*M*B for e,M in sorted(energy.items())}
    assert all(M==M.T and M.is_positive_semidefinite for M in decomp.values())
    assert all(M[:7,7]==S.zeros(7,1) for M in decomp.values())
    assert decomp.pop(30)==S.zeros(8)
    even={e:M[7,7] for e,M in decomp.items() if M[7,7]}
    assert even=={24:Q(3,4),36:1,42:1,44:3,46:3,48:Q(9,4)}
    K=GB.inv()*sum((M*Q(2,30-e) for e,M in decomp.items()),S.zeros(8))
    assert K.T*GB==GB*K and K[:7,7]==S.zeros(7,1)
    k=K[7,7]
    assert k==Q(-73,336) and k+Q(1,3)==Q(13,112)
    Ko=K[:7,:7]

    w=probe_vec(ent,G)
    z=GB.inv()*B.T*G*w
    assert z[7]==0
    z=z[:7,:]
    seq=[z]
    for _ in range(7):seq.append(Ko*seq[-1])
    krylov=S.Matrix.hstack(*seq[:7])
    assert krylov.rank()==7
    x=S.Symbol('x')
    p=S.Poly(Ko.charpoly(x).as_expr(),x)
    assert S.gcd(p,p.diff()).degree()==0 and p.eval(k)!=0
    assert sum((p.nth(i)*v for i,v in enumerate(seq)),S.zeros(7,1))==S.zeros(7,1)
    # Separate all fifteen X-odd null branch curvatures, not only within
    # one Y-sector. Also check all sixteen nonzero X-odd linear slopes
    # across Y: none coincide between those sectors.
    p_minus=S.Poly(p_minus,x)
    assert S.gcd(p_minus,p).degree()==0 and p_minus.eval(k)!=0
    xodd_linear_minus=(256*x**4-100*x**2+1)*(512*x**4-136*x**2+5)
    xodd_linear_plus=(64*x**2-9)*(4096*x**6-3136*x**4+328*x**2-3)
    def nonzero_first_order_form(y):
        Z=S.Matrix.hstack(*(X+I).col_join(Y-y*I).nullspace())
        J=(Z.T*Z).inv()*Z.T
        U=J*T*Z
        assert Z*U==T*Z
        P=S.Poly(U.charpoly(x).as_expr(),x)
        n=7 if y==-1 else 8
        return P.exquo(S.Poly(x**n,x)).monic()
    assert nonzero_first_order_form(-1)==S.Poly(xodd_linear_minus,x).monic()
    assert nonzero_first_order_form(1)==S.Poly(xodd_linear_plus,x).monic()
    slopes_minus,slopes_plus=(S.Poly(f,x) for f in (xodd_linear_minus,xodd_linear_plus))
    assert slopes_minus.eval(0) and slopes_plus.eval(0)
    assert S.gcd(slopes_minus,slopes_minus.diff()).degree()==S.gcd(slopes_plus,slopes_plus.diff()).degree()==S.gcd(slopes_minus,slopes_plus).degree()==0
    bins=[(-261,-260),(-250,-249),(-229,-228),(-224,-223),
          (-221,-220),(-213,-212),(-206,-205)]
    for a,b in bins:
        aa,bb=Q(a,1000),Q(b,1000)
        assert Q(-1,3)<aa and p.eval(aa) and p.eval(bb) and p.count_roots(aa,bb)==1
    expected=[(1009,[202,661,61,228,637,451,604,1],194),
              (1013,[1004,709,510,292,738,291,131,1],665)]
    for prime,coeffs,ev in expected:
        assert [residue(p.nth(i),prime) for i in range(8)]==coeffs
        assert residue(p.eval(k),prime)==ev
        # The exact rational lattice from these canonical nullspace pivots
        # also admits a full rank Krylov certificate over these fields.
        assert residue(krylov.det(),prime)!=0
    print("complement: 8 null directions (7 odd + 1 even), 50 coordinates, 150 parity groups")
    print("complement: odd characteristic polynomial",p.as_expr())
    print("complement: both modular rank/polynomial/separation certificates match")
    print("complement: undivided even spectral weights",even,"curvature",k)
    print("complement: exact single-root enclosures (thousandths)",bins)
    assert (z.T*GB[:7,:7]*z)[0]==Q(1,9216)
    print("complement: original projected squared derivative",(z.T*GB[:7,:7]*z)[0])
    print("total X odd: 31 mutually distinct branches near 0; 24 original-probe, 25 with direct probe")
    print("complement: direct probe free squared amplitude",(q.T*G*q)[0])
    from visibility import verify_interval
    verify_interval(slopes_plus,p,k,len(ell),(q.T*G*q)[0])
    return [(m,net,ell[m]) for m,net in ent if m in ell and len(net)==1],k
