"""Check shifted ghost ranks used by the physical shell obstruction."""
import sympy as S
from defect_block import block_form, rank_mod, reference_bases
from defect_geometry import classify


def run():
    ghost, detached = classify()
    G, D, B6, B9 = reference_bases(ghost, detached)
    n, m = len(G), len(D)
    form = block_form(G, D, B6, B9)
    assert form.shape == (618, 270)
    assert sum(bool(entry) for entry in form) == 9422
    gram = S.zeros(n)
    for i, left in enumerate(G):
        for j in range(i, n):
            right = G[j]
            gram[i, j] = gram[j, i] = sum(
                val * right.get(key, 0) for key, val in left.items()
            )
    F = -form[:n, :] + S.Rational(13, 336) * gram
    C = form[n:, :]
    augmented = F.col_join(C).row_join(C.T.col_join(S.zeros(m)))
    for p in (1009, 1013):
        ranks = rank_mod(F, p), rank_mod(C, p), rank_mod(augmented, p)
        assert ranks == (270, 180, 450)
        print(p, *ranks, flush=True)


if __name__ == "__main__":
    run()
