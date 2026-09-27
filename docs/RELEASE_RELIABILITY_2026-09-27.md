# Reliability, evidence and nuclear review

## Delivered changes

- Three-way workspace merges preserve independent tab edits. Web Locks serialize writes where supported. Conflicting notes require explicit combination; the editor retains drafts in tab-scoped session storage and warns before leaving with unsaved work.
- Filter URLs restore catalog, timeline, graph, formula and selected-tree state. Lineage chips are native keyboard-accessible links.
- Relationship evidence filters distinguish sourced and editorial links. Formula cards and filters expose explicit versus baseline metadata review.
- Coverage is visible in the app and calculated from runtime records.
- Nine nuclear representatives cover ten nuclear entries. Nine additional reading profiles bring every category into the profile collection. Two nuclear bibliography records are corrected against their publications.
- Historical formula proposals now have a machine-readable disposition ledger. Represented, partial and open are distinct; previous notes remain available.
- Chromium and mobile WebKit CI cover navigation, rendered equations, narrow-screen coverage, note conflicts and draft recovery. Pages artifact packaging depends on both validation and browser checks.

## Publishing gate activation

The deployment job checks the repository's Pages configuration. For a repository still using branch publishing, an administrator must select **Settings → Pages → Build and deployment → Source → GitHub Actions**, then rerun the workflow on main. Until then branch publishing remains active and the custom deployment job is explicitly skipped; the gate must not be described as active. Once activated, only an artifact from passing validation and browser jobs is deployed. `revision.txt` identifies that artifact's commit.

## Scope and remaining research

480 entries, 384 formulas, 59 profiles and 495 sources. Nuclear formula gaps: zero representative gaps; total catalog formula gaps: 176. There are 119 explicitly reviewed formula metadata records and 265 baseline records. Formula association is not exhaustive mathematical coverage. Sources and review labels are not experimental confirmation.

Next research batches remain astrophysics, quantum gravity, many-body physics and QFT, with equation-level metadata review continuing alongside them. This release does not claim these research queues are exhausted.

## Workspace limits

Local storage is browser-local, not a cloud backup. Session drafts are not part of JSON backups until saved. Browsers without Web Locks use fresh-read merging but cannot guarantee atomic writes at precisely simultaneous instants. Corrupt stored data is retained for recovery. Export backups before clearing browser data.
