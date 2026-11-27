"""Exact spectral moments used by the local first-order dressing."""
from collections import defaultdict
from fractions import Fraction as Q

from first_order import E
from cubic_locality import cubic_mesh
from cubic_parity import sign
from locality import edge_bits

def insertion_weights(spectral_gram,q,dims,offset):
    index,faces=cubic_mesh(*dims)
    signs={i:sign(a,b) for (a,b),i in index.items()}
    z,y,x=offset

    def edge(i):
        a,b=E[i]
        return index[((z,a[0]+y,a[1]+x),(z,b[0]+y,b[1]+x))]

    face_bits={f:edge_bits(n) for f,n in faces.items()}
    groups=defaultdict(list)
    for _,n,c in q:
        lifted=tuple(tuple((edge(i),fw) for i,fw in loop) for loop in n)
        assert all(signs[i] in (-1,1) for loop in lifted for i,_ in loop)
        center=1
        for loop in lifted:
            for i,_ in loop:center*=signs[i]
        assert center==1
        pattern=edge_bits(lifted)
        for f,nf in faces.items():
            groups[pattern^face_bits[f]].append((c,lifted,nf))

    weights=defaultdict(Q)
    for terms in groups.values():
        for i,(c,a,p) in enumerate(terms):
            for j,(d,b,r) in enumerate(terms[i:],i):
                for two_e,val in spectral_gram((a,p),(b,r)).items():
                    # V uses half traces; q is still unnormalized.
                    weights[two_e]+=Q(c*d*(1 if i==j else 2),4)*val
    return dict(sorted((Q(e,2),v) for e,v in weights.items() if v)),len(faces)

def verify_dressing(spectral_gram,q):
    template={12:Q(3,4),18:Q(43,4),22:Q(129,4),23:Q(3),24:Q(9,4)}
    coefs={12:Q(-1,2),18:Q(1,6),22:Q(-1,42),23:Q(-1,24),24:Q(-1,18)}
    norm_expected=Q(14579,28224)
    for dims,offset,B in [((6,4,2),(1,1,1),188),((8,6,3),(2,2,3),522)]:
        weights,face_count=insertion_weights(spectral_gram,q,dims,offset)
        assert face_count==B
        assert weights=={**template,21:1+Q(3,2)*(B-34)}
        assert 15 not in weights and 0 not in weights
        r={e:Q(1,e-15)-Q(1,6) for e in weights}
        assert r=={**coefs,21:Q(0)}
        assert all((e-15)*r[e]+Q(e-21,6)==0 for e in weights)
        assert all(r[e]+Q(1,6)==Q(1,e-15) for e in weights)
        norm=sum((w*r[e]**2 for e,w in weights.items()),Q(0))
        bare=sum((w*Q(e-21,6)**2 for e,w in weights.items()),Q(0))
        assert norm==norm_expected and bare>0
        # The coefficient of the bounded first filter moment is the
        # same vacuum-subtracted quadratic coefficient, since φ′(15)=1.
        assert sum((w*Q(1,15-e) for e,w in weights.items()),Q(0))/6+Q(B,24)==Q(-13,336)
        print(f"dressed probe: {dims}, bare E21 weight {weights[21]}, "
              f"norm squared {norm}, exact zero linear residual")
    # Uniform-remainder conditional: m1 <= -(a/2)g², window edge
    # 15-(a/4)g²; Cauchy implies a²/(16*D) if m2 <= D g⁴.
    a=Q(13,336)
    assert a/4==Q(13,1344) and (a/2-a/4)**2==a*a/16
