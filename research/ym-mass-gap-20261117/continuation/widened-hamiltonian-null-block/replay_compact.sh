#!/bin/sh
set -eu
out=$1
mkdir "$out"
export PYTHONHASHSEED=83 OPENBLAS_NUM_THREADS=1

jobs=""
for axis in 0 1 2; do
    for sign in -1 1; do
        python laurent_radius.py "$axis" "$sign" > "$out/slab-$axis-$sign.log" &
        jobs="$jobs $!"
    done
done
for job in $jobs; do wait "$job"; done
cat "$out"/slab-*.log
python compact_extended.py --radius 5 --output "$out"
(
    cd "$out"
    sha256sum -c <<'EOF'
69a3508ed72e54c75b1eb49d68337496322e0f08027ea777e890b74c37950d90  R5-1009.txt
4afd4baf5d2fff6d3795c8efaca241318151c70e34788a6f9ed325c649362f1d  R5-1013.txt
EOF
)
g++ -O3 -std=c++17 -Wall -Wextra sparse_rank.cpp -o "$out/sparse_rank"
"$out/sparse_rank" "$out/R5-1009.txt" --expect-full-inconsistent
"$out/sparse_rank" "$out/R5-1013.txt" --expect-full-inconsistent
