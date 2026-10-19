/**
 * Getting a Wikimedia photograph into a WebGL texture.
 *
 * The museum's images are mostly Wikimedia Commons URLs. Direct
 * `upload.wikimedia.org` URLs load into a texture as they are (Commons serves
 * them with permissive CORS). `Special:FilePath/…` URLs do not: they redirect,
 * and a redirected image request can lose the CORS headers WebGL needs. For
 * those, ask the MediaWiki API for the file's direct URL and load that.
 *
 * Shared by the 360° panorama viewer and the 3D street gallery, which had to
 * solve the same problem; the panorama viewer's private copy moved here.
 */

export function isWikimediaFilePath(url: string): boolean {
  return /\/Special:FilePath\//.test(url);
}

export function extractWikimediaFileTitle(url: string): string | null {
  const m = /\/Special:FilePath\/([^?#]+)/.exec(url);
  if (!m) return null;
  return `File:${decodeURIComponent(m[1])}`;
}

export async function resolveWikimediaDirectUrl(originalUrl: string): Promise<string | null> {
  const title = extractWikimediaFileTitle(originalUrl);
  if (!title) return null;
  const api = new URL('https://en.wikipedia.org/w/api.php');
  api.searchParams.set('action', 'query');
  api.searchParams.set('format', 'json');
  api.searchParams.set('prop', 'imageinfo');
  api.searchParams.set('iiprop', 'url');
  api.searchParams.set('redirects', '1');
  api.searchParams.set('origin', '*');
  api.searchParams.set('titles', title);

  const res = await fetch(api.toString(), { method: 'GET' });
  if (!res.ok) return null;
  const json = (await res.json()) as {
    query?: { pages?: Record<string, { imageinfo?: Array<{ url?: string }> }> };
  };
  const pages = json.query?.pages ?? {};
  for (const p of Object.values(pages)) {
    const url = p.imageinfo?.[0]?.url;
    if (typeof url === 'string' && url.startsWith('https://')) return url;
  }
  return null;
}
