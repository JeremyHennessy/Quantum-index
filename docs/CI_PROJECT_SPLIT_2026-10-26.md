# CI-only browser project split — 26 October 2026

## Observed blocker

The unchanged PR #102 source tree b3759b21eb449e1893acc42259dd34fbd475d4eb
passed all 262 browser cases on its PR. Main run 40327041759 then exhausted the
35-minute single-job budget twice: attempt 1 completed 231 cases (131 Chromium,
100 WebKit); the one authorized unchanged retry completed 240 (131 Chromium,
109 WebKit). Neither log contains a failed-case or retry-case entry. Incomplete
work is not a successful gate. No third rerun is proposed.

The same 231 cases took about 2046 seconds in attempt 1 versus 1181 seconds in
the successful PR run. This is observed throughput variance, not a proven CPU or
network diagnosis. Both full Chromium portions completed well within 35 minutes.

## Minimal change

Run the existing Chromium and WebKit projects in two standard Ubuntu matrix jobs,
each using the unchanged pinned Playwright container, one worker, existing
test-level retry policy, and the unchanged 35-minute per-job timeout. Disable
matrix fail-fast so either failing project still leaves evidence from the other.
Retain both diagnostics. Give each browser report a unique project suffix.
Package still needs validate and the whole browser matrix; deploy still needs
package. There is no allowed failure, project exclusion, case filter, or reduced
assertion. All browser files, Playwright configuration, dependencies and runtime
application/scientific files are byte-identical to deployed #102.

Discovery proves the two project selections are disjoint and their union contains
all original 262 identities exactly once. This describes case selection, not the
number of attempts: the existing retry=1 policy and separately repeated
diagnostics remain unchanged. Discovery does not establish browser execution.

## Historical integrity

A new fail-closed outer checkpoint restores the exact #102 workflow and five
declared historical helper/test files before older assertions run. All prior
ledgers stay immutable. New tests pin the exact reader substitutions and reject
changed/stale input, missing projects, altered permissions, shared artifact names,
test omission, timeout expansion, and a weakened package dependency.

## Resource boundary

The repository was freshly confirmed public. Runner class remains standard
ubuntu-latest; no paid/larger runner, service, dependency, billing setting,
account budget, cache limit, or access permission is added or changed. The same
test workload is divided, with one additional setup/container/report overhead.
The cumulative worst-case browser timeout ceiling is now 2×35 runner-minutes,
not 35; this is not a claim of reduced total CPU cost or zero storage overhead.
Artifact retention remains 14 days. Existing screenshots are partitioned rather
than deliberately duplicated, although each report has its own static assets.
No billing entitlement beyond the standard public-repository runner policy is
assumed or modified.

Primary operational references:
- [GitHub matrix jobs and fail-fast](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations)
- [Playwright project selection](https://playwright.dev/docs/test-projects#run-projects)
- [GitHub Actions billing and public standard runners](https://docs.github.com/en/billing/concepts/product-billing/github-actions)

## Release boundary

This is a separate CI repair, not the seven prepared app fixes or later research/
accessibility/performance candidate. Those frozen identities remain unchanged.
PR #102 was deployed and its live bytes/CUA verified, but its exact-main browser
run remains incomplete; this document does not relabel either timeout as passed.
Publish this repair in draft, review both project reports and package gating,
then coordinate a guarded merge and exact-main acceptance. Reconcile later
candidates onto the accepted CI-only revision rather than overwriting it.
