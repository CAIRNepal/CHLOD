/**
 * Deep links between the exploration surfaces: Heritage Museum, Atlas and the
 * knowledge pages.
 *
 * The Museum and the Atlas load the same collection (useHeritageCollection):
 * the illustrated demo corpus or the live graph from
 * `GET /api/v1/cidoc/kg/graph/`, both keeping node ids verbatim. So a node id
 * is a shared identifier in either source, and links carry the source along.
 *
 * Both surfaces read their selection from the query string — Atlas via
 * `?selected=`, the Museum via `?node=` — so linking needs no new plumbing. The
 * param names differ, which is why they are centralised here rather than
 * hand-built at each call site.
 */

export type CrossSurfaceDataSource = 'demo' | 'live';

/**
 * Atlas focused on `nodeId`. Callers should require coordinates: the Atlas is
 * place-first, and a record it cannot place opens on its default instead.
 */
export function atlasHrefForNode(nodeId: string, dataSource: CrossSurfaceDataSource): string | null {
  if (!nodeId) return null;
  return `/atlas?source=${dataSource}&selected=${encodeURIComponent(nodeId)}`;
}

/** Museum focused on `nodeId`. */
export function museumStoryHrefForNode(nodeId: string, dataSource: CrossSurfaceDataSource): string | null {
  if (!nodeId) return null;
  return `/heritage-museum?source=${dataSource}&node=${encodeURIComponent(nodeId)}`;
}
