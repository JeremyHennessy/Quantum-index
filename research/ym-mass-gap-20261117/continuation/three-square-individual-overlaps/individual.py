"""Evidence-weighted verification of both isotropic eigenstate transitions."""
from fractions import Fraction as Q
import sys
from pathlib import Path
import json

HERE=Path(__file__).resolve().parent
FRAME=HERE.parent/"three-square-isotropic-frame"
sys.path.insert(0,str(FRAME))
import verify as core
base=core.base

def main():
    names=("vacuum","band_low","band_high")
    data={n:json.loads((FRAME/(n+".json")).read_text()) for n in names}
    vec=[{tuple(map(int,k.split(","))):Q(w) for k,w in data[n]["vector"].items()} for n in names]
    ep=[Q(data[n]["energy"]) for n in names]
    norms=[core.exact_dot(w,w) for w in vec]
    assert all(Q(".999")<n<Q("1.001") for n in norms)
    assert Q(".999")<ep[0]<Q("1.032")
    assert Q("1.0676e-5")<ep[1]<ep[2]<Q("1.1733e-5")
    g=abs(core.exact_dot(vec[1],vec[2]))
    assert min(norms[1:])-g>Q(".999")
    ib=[{k:base.interval(w) for k,w in v.items()} for v in vec]
    rv,rx,ry=[core.residual(v,e) for v,e in zip(ib,ep)]
    assert rv<Q("1e-12") and max(rx,ry)<Q("1.2e-16")
    ext=Q("2.5e-6")
    internal=Q("2.7e-8")
    # Each Ritz reference has one true band eigenvalue within twice residual.
    assert ep[2]-ep[1]-2*(rx+ry)>internal
    p_err=Q("1.001")*base.ds(core.sqrt(base.interval(rx*rx+ry*ry))[1])/ext
    v_err=abs(norms[0]-1)+2*rv/Q(".9")
    fv=base.faces(ib[0],[base.ac.FACE[0]])
    trial=[base.dot(w,fv) for w in ib[1:]]
    # Upper l2 norm of the two measured overlaps, without floating arithmetic.
    co_norm=base.ds(core.isqrt(sum(base.mag(x)**2 for x in trial))+1)
    p_f_bound=Q("1.001")*(co_norm+p_err)+v_err
    assert p_f_bound<Q("6.5e-10")
    bands=[]
    for i,res in enumerate((rx,ry)):
        # Out-of-band correction sees a unit-bounded vector. Inside the band,
        # the correction sees only the tiny projection of the probe.
        inside=abs(norms[i+1]-1)+2*res/internal
        error=res/ext+inside*p_f_bound+Q("1.001")*v_err
        l,h=base.ds(trial[i][0])-error,base.ds(trial[i][1])+error
        assert Q("3e-10")<l<h<Q("5e-10")
        bands.append((l,h))
        print(names[i+1],"amplitude interval",float(l),float(h),
              "spectral weight interval",float(l*l),float(h*h),flush=True)
    print("inserted vacuum norm in band <=",float(p_f_bound),flush=True)
    return bands

if __name__=="__main__":main()
