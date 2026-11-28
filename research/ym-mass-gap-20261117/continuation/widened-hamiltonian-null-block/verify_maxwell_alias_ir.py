"""Numerical sanity check only; exact estimates are in the companion proof."""
from itertools import product
import numpy as np

def test(b,k,c):
    rho=np.linalg.norm(k)
    d=np.expm1(1j*k)
    P=np.eye(3)-np.outer(d,d.conj())/np.vdot(d,d)
    W,V=np.linalg.eigh(P)
    U=V[:,W>0.5]
    S=np.zeros((3,3),complex); N=S.copy(); gram=S.copy()
    for a in product(range(b),repeat=3):
        q=(k+2*np.pi*np.array(a))/b
        d_f=np.expm1(1j*q)
        m=np.sum(np.exp(1j*np.arange(b)[:,None]*q),axis=0)
        assert np.max(np.abs(m*d_f-d))<1e-12
        A=P@np.diag(m)/b**2
        G=A@A.conj().T
        if not any(a): low=G
        om=np.linalg.norm(d_f)
        S+=c/om*G; N+=(c/om)**2*G; gram+=G
    assert np.max(np.abs(gram-P))<1e-12
    low_err=np.linalg.norm(U.conj().T@low@U*b*b-np.eye(2),2)
    inv=np.linalg.inv(U.conj().T@S@U)
    E1=np.linalg.eigvalsh(inv)*c/(b*rho)
    E2=np.linalg.eigvalsh(inv@(U.conj().T@N@U)@inv)/b**2
    return low_err,np.max(np.abs(E1-1)),np.max(np.abs(E2-1))

if __name__=="__main__":
    dirs=[np.array((1.,0,0)),np.array((1.,-2,3))/np.sqrt(14)]
    for b in (2,3,4,8,16):
        full=[]
        for scale in (1e-3,1e-5):
            r=max(max(test(b,k*scale/b,c)) for k in dirs for c in (1,0.5))
            full.append(r)
        assert full[0]<.02 and full[1]<.0002 and full[1]<full[0]
        print(b,*(f"{r:.6g}" for r in full))
