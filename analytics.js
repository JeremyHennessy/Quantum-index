// Standard Cloudflare Web Analytics, only on the intended public HTTPS site.
// This public site token is not a credential. No custom events or workspace reads.
(() => {
  if (location.protocol !== 'https:' || location.hostname !== 'quantumindex.site') return;
  if (document.getElementById('qi-web-analytics')) return;
  const script = document.createElement('script');
  script.id = 'qi-web-analytics';
  script.type = 'module';
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  script.setAttribute('data-cf-beacon', JSON.stringify({token: 'f402f014fafa46fd946dad89b1561973'}));
  // Optional telemetry must never gate navigation, rendering, or personal storage.
  script.addEventListener('error', () => {}, {once: true});
  document.body.appendChild(script);
})();
