/**
 * Research-only routing contract for a future Quantum Index root-entry migration.
 * NOT included by index.html; changes no live behavior.
 *
 * Existing browser hash routes are authoritative. Only an explicit default
 * directory entry with no hash may select the new Physics Explorer shell.
 */
export function proposedPhysicsDefaultTarget(value) {
  const incoming = value instanceof URL ? value : new URL(String(value));
  if (incoming.protocol !== 'https:' && incoming.protocol !== 'http:') return null;
  // An explicitly supplied '#', even with an empty fragment, is a legacy route intent.
  if (incoming.href.includes('#')) return null;
  if (incoming.pathname !== '/' && incoming.pathname !== '/Quantum-index/') return null;
  if (incoming.searchParams.get('classic') === '1') return null;

  // Relative resolution supports both the custom-domain root and optional
  // github.io project-directory hosting without reading server-side fragments.
  const dest = new URL('docs/physics-explorer.html', incoming);
  // Keep incoming query parameters (including referrers/campaign parameters)
  // on the same origin. A trusted user never loses a pre-existing /#/ route.
  dest.search = incoming.search;
  dest.searchParams.delete('classic');
  return dest.href;
}
