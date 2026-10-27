# Quantum Index — anonymous hash-route engagement analytics

Date: 2026-10-27. Approved pre-change baseline: `c0cab931591f64440798fcf370e246b5f50d9083` on `main`.

Cloudflare Web Analytics cannot distinguish Quantum Index's `#/...` views through requestPath. Keep its original beacon and router unchanged. The extra in-page tracker records route names and public theory IDs without query/search text, full URLs, notes, or saved workspace contents.

## Deployment

- Cloudflare Personal account, new isolated Worker `qi-engagement-collector`, source `infra/qi-engagement-collector.mjs`.
- D1 database `quantumindex_engagement_v1`, identifier `c6ae94bf-4a03-4143-86db-c1b9632a45db`.
- Worker endpoint `https://qi-engagement-collector.jeremy-hennessy-c4e.workers.dev/event`, accepts only origin `https://quantumindex.site` (origin can be spoofed by nonbrowser clients).
- Automatic data deletion after 30 days via Worker scheduled cron `17 4 * * *` UTC.
- Browser tracker is entirely disabled on localhost, preview hosts, and the GitHub Pages hostname.

## What the data means

Each site page load gets an in-memory random UUID. No persistent ID/cookie/storage is used; a reload starts a new page-load session. `view` records an initial section or changed hash route; `engagement` records active-tab milliseconds plus counts of pointer/keyboard input and whether scrolling occurred. A `webdriver` hint can help identify basic automation, but false does **not** prove human. Do not call page-load sessions 'unique users' or treat time/interaction alone as proof.

## Read-only reports

Sections visited during the past week:

```sql
SELECT section, COUNT(*) AS opens, COUNT(DISTINCT sid) AS page_load_sessions
FROM engagement_events
WHERE kind='view' AND ts_ms >= (unixepoch('now')-7*86400)*1000
GROUP BY section ORDER BY opens DESC;
```

Top public theory pages:

```sql
SELECT theory_id, COUNT(*) AS opens, COUNT(DISTINCT sid) AS page_load_sessions
FROM engagement_events
WHERE kind='view' AND section='theory'
AND ts_ms >= (unixepoch('now')-7*86400)*1000
GROUP BY theory_id ORDER BY opens DESC LIMIT 25;
```

Per-page-load engagement, for internal diagnostic assessment only:

```sql
SELECT sid, COUNT(DISTINCT CASE WHEN kind='view' THEN section END) AS sections,
  SUM(kind='view') AS route_openings,
  ROUND(SUM(CASE WHEN kind='engagement' THEN dwell_ms ELSE 0 END)/1000.0,1) AS active_seconds,
  SUM(input_count) AS input_events, MAX(webdriver) AS automation_hint
FROM engagement_events WHERE ts_ms >= (unixepoch('now')-7*86400)*1000
GROUP BY sid ORDER BY route_openings DESC LIMIT 100;
```

## Verification and rollback

Run `npm test`, `npm run validate`, existing browser checks, and verify every approved UI/route remains unchanged. `scripts/engagement.test.mjs` checks privacy, route deduplication, visibility, and origin rejection. Browser privacy extensions may block requests; no tracking should block rendering.

To roll back live instrumentation, revert the single engagement PR; do not touch the scientific app, prior Cloudflare beacon, or approved UI. The isolated Worker may also be disabled independently. New events begin only after the frontend deploy; historical route details cannot be reconstructed from old pageviews.