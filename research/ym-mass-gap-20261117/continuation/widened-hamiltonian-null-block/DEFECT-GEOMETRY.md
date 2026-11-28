# Defect geometry and a negative certificate for the conservative source test

2026-11-28 · Zero total momentum, fixed spacing, odd quadratic coefficient operator. Parent: [full folded source](FULL-FOLDED-SOURCE.md), commit 554cc535a1c63d335f69b31bab3901a1547ea0a7.

**The entire reference-coordinate projection of the exact folded source lies inside the conservative geometric nuisance space.** There are 208 nonzero reference coordinates in 92 anchored group representatives, and **none** is outside the return-to-near flags. The 354 remaining invariant circuit coefficients are in the finite near space. Consequently the conservative one-sheet rank test is structurally unable to distinguish this source, regardless of how many sampling points are added. The actual defect range, actual one-sheet distance, and spectral weight at the target energy remain unknown.

## The exact geometry screen

Anchor the elementary plaquette at coordinatewise minimum zero, keeping all three orientations. The other loop has relative anchor \(r\in\mathbb Z^3\). Its group is either the complete set of sixteen same-cube hexagon companions, or one of the six planar rectangle singleton types. Call a group detached if the plaquette has neither a common vertex nor a common incident face with **any** companion. For retained detached groups this is precisely the no-interaction hypothesis needed here: they are actual reducing first-order product blocks, so their null spaces are the elementary coordinate times the low six-link null group. Put all other physical supports in the finite near space, including connected supports and detached-looking pairs that fail the group test. In a full reference copy, fill the missing non-detached reference groups by dummy coordinates; the physical source has zero coefficients on these.

For each input group, mark the following:
1. Non-detached input groups.
2. Detached groups with an eligible pair of adjacent faces that meets both occupied components of some companion.
3. Detached groups with an eligible one-component adjacent-pair move whose reanchored output group is non-detached.

An adjacent pair has six exclusive edges; preserving the count of binary occupied links requires exactly three occupied among these edges. For a one-component move, apply the pair toggle to that component, retain only a loop of the same low band, and reanchor both loops to compute the true output group. This uses every candidate move irrespective of the numerical Haar weight. For detached input repeated-face terms preserve the label and split into the two components' local vacuum-subtracted diagonals. For a clear input, disconnected pair orderings cancel, no eligible adjacent pair meets both components, and the spectator's unchanged energy cancels in the reduced denominator. No local return can encounter a missing companion block. Thus after applying the null projection the full operator agrees on this input with reference convolution, not merely on its diagonal. This uses the earlier [separated channel algebra](SEPARATED-CHANNEL.md), not a numerical test of exact operator entries.

## Exhaustive radius and reflection sizes

Every isolated same-band eligible move in the exact elementary and six-loop shapes shifts its anchor by at most one in sup norm. This is checked by finite enumeration of all adjacent pairs with a face meeting the loop. The maximum component span in any coordinate is two. If \(r\notin[-5,5]^3\), at least one coordinate has separation in absolute value at least six; before a move the two occupied coordinate intervals have gap at least four, and after reanchoring a local output at least three. An incident face extends an interval by at most one. These gaps exclude common vertices, common incident faces and overlapping cross-component pairs (and exclude all non-detached output companions). This proves the finite enumeration covers all possible flags, not just examples in a chosen box.

The exact replay for the \(27,951=3\cdot7\cdot11^3\) input groups gives:

| Flag | Cube groups | Rectangle groups | Max \(\|r\|_\infty\) |
| --- | ---: | ---: | ---: |
| Non-detached | 108 | 552 | 3 |
| Detached with eligible cross-component pair | 0 | 0 | none |
| Detached return to a non-detached output | 150 | 876 | 4 |

The union has 1,686 groups and 3,492 reference coordinate slots, using eight null directions per cube and one per rectangle. To pass to the eight coordinate sign reflections, a reflected coordinate sends \(r_i\) to \(-r_i+\operatorname{span}(p)_i-\operatorname{span}(h)_i\); unchanged coordinates keep \(r_i\). Both nonempty flag categories are exactly invariant under this action. There are 57 cube and 270 rectangle group orbits, yielding a 726-dimensional upper bound before stabilizers. Computing the trace of each stabilizer average in the exact cube null projection sharpens the **dimension of this conservative invariant reference coordinate space** to **618** (270 for the non-detached flags and 348 for the return flags). This is not the rank of the defect. On the full space, the self-adjoint defect kills every clear reference input column by the geometry argument, so its range lies in the flagged reference space plus the finite near coordinates. This statement uses the fixed completion above and any separate self-adjoint finite summand on the added dummy coordinates, which themselves were flagged.

## Why this disqualifies a shortcut, not the actual source

The exact source JSON is SHA-256 pinned. Parse its occupied links, split vertex-disconnected four-plus-six shapes, and use the two separate anchors to classify each shape. A shape counts as a reference coordinate only if its **whole** group passes the detached rule. Different circuits with identical occupied links are kept as separate near coefficients when relevant; the reference trace product for a detached shape is one-dimensional before the companion null compression. Sign-reflection closure of both flag sets makes this containment check on representatives sufficient for the full source. Results:

| Source coordinates | Count |
| --- | ---: |
| Finite near | 354 |
| Detached reference, return flagged | 208 |
| Detached reference, unflagged | 0 |

In the [one-sheet test](ONE-SHEET-RESOLVENT-BOUND.md), let \(T_0\) denote the regular patch evaluation at \(E=-13/336\). The appended zero reference operator on the finite near coordinates gives no contribution at this patch of the convolution. Therefore \(T_0w\) already lies in the image of the entire conservative geometric reference nuisance space. Adding its column cannot increase that conservative rank. This argument neither proves \(w\in\operatorname{Ran}V\) for the actual defect \(V\), nor proves \(T_0w\in T_0\operatorname{Ran}V\), nor decides an exact compact range solve. A targeted next finite step is to construct the **reference projection of the actual defect range**, retaining entries sourced by both physical near inputs and flagged reference inputs (including dummy-coordinate differences). Then test that smaller range or pursue another exact boundary/range criterion. Do not infer absence of positive weight from this negative shortcut.

## Reproduce

Run **python3 defect_geometry.py --source path.json**, using the exact output of **python3 full_folded_source.py --output path.json**. The screen can run alone without the file; the source containment assertions require the pinned complete vector. All occupancy, anchor, stabilizer and support tests are exact. No floating-point or spectral boundary evaluation is used.
