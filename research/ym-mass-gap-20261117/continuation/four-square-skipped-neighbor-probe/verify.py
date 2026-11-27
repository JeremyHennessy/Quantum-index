"""Symbolic degree-one test of the skipped-neighbor probe."""
from fractions import Fraction as Q
from pathlib import Path
import sys
import sympy as s

sys.path.insert(0,str(Path(__file__).resolve().parent.parent/'four-square-odd-probe'))
from coef import a, state_factor, w

def coefficient(target,pair):
    if not all(target&(1<<i) for i in pair):
        return s.S.Zero
    j,= [i for i in range(4) if target&(1<<i) and i not in pair]
    out=0
    for r,l,m in [(1,0,0),(0,1,0),(0,0,1)]:
        f=(j,)+pair if r+m else pair+(j,)
        p=[0]; v=1
        for i in f:
            v*=w(p[-1],i)
            p.append(p[-1]^(1<<i))
        assert p[-1]==target
        out+=v*(-1)**m*state_factor(p[:r+1])*state_factor(p[3-l:][::-1])
    return s.factor(out)

def main():
    c13 = coefficient(11,(0,2))-coefficient(13,(0,2))
    c24 = coefficient(11,(1,3))-coefficient(13,(1,3))
    want=a**2/(16*(1-a**4))
    assert s.simplify(c13-want)==0 and s.simplify(c24+want)==0
    print(c13,c24)
    print((s.sqrt(2)*c13).subs(a,s.Rational('.240')).evalf())
if __name__=='__main__': main()
