// Quantum Index anonymous route engagement collector.
// This Worker never accepts free-text searches, notes, full URLs, cookies, or persistent user IDs.
// A fresh anonymous session UUID is generated in memory on each page load.
const SECTIONS = new Set([
  'explore','map','timeline','lineage','catalog','formula','compare',
  'problems','evidence','questions','learn','workspace','coverage','theory'
]);
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const THEORY_ID = /^[a-z0-9][a-z0-9_.-]{0,79}$/i;
const ORIGIN = 'https://quantumindex.site';
const CORS = {
  'Access-Control-Allow-Origin': ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
  'Vary': 'Origin',
  'Cache-Control': 'no-store'
};
function reject(status) { return new Response(null, {status, headers: {'Cache-Control':'no-store'}}); }
function validInteger(v, max) { return Number.isInteger(v) && v >= 0 && v <= max; }
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/health' && request.method === 'GET')
      return Response.json({ok: true, name: 'qi-engagement', version: 1}, {headers: {'Cache-Control':'no-store'}});
    if (url.pathname !== '/event') return reject(404);
    if (request.headers.get('Origin') !== ORIGIN) return reject(403);
    if (request.method === 'OPTIONS') return new Response(null, {status:204,headers:CORS});
    if (request.method !== 'POST') return reject(405);
    if (!/^text\/plain(?:;|$)/i.test(request.headers.get('Content-Type') || '')) return reject(415);
    if (Number(request.headers.get('Content-Length')) > 600) return reject(413);
    let event;
    try {
      const body = await request.text();
      if (body.length > 600) return reject(413);
      event = JSON.parse(body);
    } catch { return reject(400); }
    if (!event || typeof event !== 'object' || Array.isArray(event)) return reject(400);
    const {v, sid, kind, section, theoryId='', dwellMs=0, inputs=0, scrolled=0, webdriver=0} = event;
    if (v !== 1 || typeof sid !== 'string' || !UUID.test(sid)) return reject(400);
    if (kind !== 'view' && kind !== 'engagement') return reject(400);
    if (!SECTIONS.has(section)) return reject(400);
    if (typeof theoryId !== 'string' ||
      (section === 'theory' ? !THEORY_ID.test(theoryId) : theoryId !== '')) return reject(400);
    if (!validInteger(dwellMs,1800000) || !validInteger(inputs,100) ||
        !validInteger(scrolled,1) || !validInteger(webdriver,1)) return reject(400);
    const country = request.cf?.country && /^[A-Z]{2}$/.test(request.cf.country) ? request.cf.country : '';
    try {
      await env.DB.prepare(
        'INSERT INTO engagement_events (ts_ms,sid,kind,section,theory_id,dwell_ms,input_count,scrolled,webdriver,country) VALUES (?,?,?,?,?,?,?,?,?,?)'
      ).bind(Date.now(),sid,kind,section,theoryId,dwellMs,inputs,scrolled,webdriver,country).run();
    } catch { return new Response(null,{status:503,headers:CORS}); }
    return new Response(null,{status:204,headers:CORS});
  },
  async scheduled(_event,env) {
    await env.DB.prepare('DELETE FROM engagement_events WHERE ts_ms < ?')
      .bind(Date.now() - 30*86400000).run();
  }
};
