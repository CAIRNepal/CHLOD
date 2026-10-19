'use client';

/**
 * The museum gallery as a street you walk down (spec 008, research-3d.md).
 *
 * WHAT IT IS
 * The exhibits that have a photograph hang on both walls of a receding
 * corridor, alternating sides and turned toward the aisle. Scrolling, dragging
 * or the arrow keys walk the camera along it; whatever is in front of you is
 * named, credited and one click (or Enter) from its record — the same
 * `onSelect` the grid cards call.
 *
 * WHY IMPERATIVE three.js
 * Same as the panorama viewer beside it: three is already in the bundle, React
 * Three Fiber would add a second idiom and a dependency, and this scene is a
 * few dozen planes. React owns only the overlay; the scene never re-renders
 * through React.
 *
 * BUDGETS, BECAUSE THIS RUNS ON LAPTOPS AND PHONES
 *  - Renders on demand: only while the camera is still settling or a texture
 *    has just arrived. A street you are not moving through costs nothing.
 *  - At most `maxTextures` photographs in GPU memory (the nearest to where you
 *    stand); the rest are empty frames, and a texture leaving that window is
 *    disposed. Device pixel ratio capped at 2.
 *  - Unmounting disposes every geometry, material and texture and forces the
 *    context to be lost, so toggling back to the grid gives the GPU back.
 *
 * CREDITS (D4)
 * Attribution is DOM, never painted into the scene: the focused exhibit's
 * credit is in the panel at the foot of the view, and every photograph that is
 * currently textured is listed under "Credits for what you can see". The panel
 * is centred with side padding so the fixed chat button cannot cover it.
 *
 * ACCESSIBILITY
 * The canvas is `aria-hidden`; a visually hidden list of buttons gives screen
 * reader and switch users every exhibit directly. The view itself is a
 * focusable region with keyboard walking. The parent never offers this view
 * under reduced motion or without WebGL 2.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import * as THREE from 'three';
import { IconArrowUpRight, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

import { useXrTranslations } from '@/lib/heritage-museum/xr-theme';
import {
  STREET,
  cameraRange,
  cameraZFor,
  containSize,
  focusedIndex,
  placePanel,
  textureWindow,
} from '@/lib/heritage-museum/street-layout';
import {
  isWikimediaFilePath,
  resolveWikimediaDirectUrl,
} from '@/lib/heritage-museum/wikimedia-texture';
import { cn } from '@/lib/utils';

import { NODE_TYPE_CONFIG, type GraphNode } from '../../heritage-data';
import { ImageAttribution } from '../ImageAttribution';

interface StreetGallery3DProps {
  /** Exhibits with a photograph, in display order. */
  nodes: GraphNode[];
  onSelect: (node: GraphNode) => void;
  /** Photographs held in GPU memory at once. */
  maxTextures?: number;
}

/** The photograph an exhibit hangs — the same one its grid card shows. */
function photoOf(node: GraphNode): string | null {
  return node.imageUrl ?? node.images?.[0] ?? null;
}

interface StreetApi {
  goTo: (index: number) => void;
}

export function StreetGallery3D({ nodes, onSelect, maxTextures = 12 }: StreetGallery3DProps) {
  const t = useXrTranslations();
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<StreetApi | null>(null);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  const [focus, setFocus] = useState(0);
  const [textured, setTextured] = useState<number[]>([]);
  const [ready, setReady] = useState(false);

  const count = nodes.length;

  useEffect(() => {
    const container = containerRef.current;
    if (!container || count === 0) return;

    let disposed = false;
    const css = getComputedStyle(container);
    const token = (name: string, fallback: string) => css.getPropertyValue(name).trim() || fallback;
    const ground = new THREE.Color(token('--background', '#050606'));
    const floorColor = new THREE.Color(token('--card', '#0b0d0d'));
    const wallColor = new THREE.Color(token('--muted', '#151918'));
    const lineColor = new THREE.Color(token('--border', '#222827'));
    const emptyColor = new THREE.Color(token('--secondary', '#151918'));

    // ── Renderer, scene, camera ──
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(ground);
    const canvas = renderer.domElement;
    canvas.setAttribute('aria-hidden', 'true');
    canvas.className = 'absolute inset-0 block h-full w-full touch-none';
    container.prepend(canvas);

    const scene = new THREE.Scene();
    // Fog in the page's own ground colour, so the far end of the street fades
    // into the page rather than ending at a hard edge — and hides the empty
    // frames beyond the texture window.
    scene.fog = new THREE.Fog(ground, 5, 24);

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 80);
    const { near, far } = cameraRange(count);
    let camZ = near;
    let targetZ = cameraZFor(0);
    const clampZ = (z: number) => Math.min(near, Math.max(far, z));
    camera.position.set(0, STREET.eyeHeight, camZ);

    // ── The street ──
    const length = near - far + 40;
    const midZ = (near + far) / 2;
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(STREET.halfWidth * 2 + 1, length),
      new THREE.MeshBasicMaterial({ color: floorColor }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, 0, midZ);
    scene.add(floor);

    for (const side of [-1, 1] as const) {
      const wall = new THREE.Mesh(
        new THREE.PlaneGeometry(length, 4.2),
        new THREE.MeshBasicMaterial({ color: wallColor }),
      );
      wall.rotation.y = side === -1 ? Math.PI / 2 : -Math.PI / 2;
      wall.position.set(side * (STREET.halfWidth + 0.5), 2.1, midZ);
      scene.add(wall);
    }

    // Floor seams under every exhibit: the cue that gives the street its depth.
    const seamGeo = new THREE.PlaneGeometry(STREET.halfWidth * 2 + 1, 0.025);
    const seamMat = new THREE.MeshBasicMaterial({ color: lineColor });
    for (let i = 0; i < count + 8; i++) {
      const seam = new THREE.Mesh(seamGeo, seamMat);
      seam.rotation.x = -Math.PI / 2;
      seam.position.set(0, 0.002, placePanel(i).z);
      scene.add(seam);
    }

    // ── Exhibits ──
    const frameGeo = new THREE.PlaneGeometry(STREET.panelWidth + 0.14, STREET.panelHeight + 0.14);
    const frameMat = new THREE.MeshBasicMaterial({ color: lineColor });
    const imageGeo = new THREE.PlaneGeometry(1, 1);
    const images: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>[] = [];
    const defaultSize = containSize(4 / 3);

    nodes.forEach((_, i) => {
      const p = placePanel(i);
      const group = new THREE.Group();
      group.position.set(p.x, p.y, p.z);
      group.rotation.y = p.rotY;
      const frame = new THREE.Mesh(frameGeo, frameMat);
      frame.userData.index = i;
      const image = new THREE.Mesh(imageGeo, new THREE.MeshBasicMaterial({ color: emptyColor }));
      image.scale.set(defaultSize.width, defaultSize.height, 1);
      image.position.z = 0.01;
      image.userData.index = i;
      group.add(frame, image);
      scene.add(group);
      images.push(image);
    });

    // ── Textures: only the window around the reader ──
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');
    const textures = new Map<number, THREE.Texture>();
    const pending = new Set<number>();
    let wanted = new Set<number>();
    const maxAniso = Math.min(4, renderer.capabilities.getMaxAnisotropy());

    const publishTextured = () => setTextured([...textures.keys()].sort((a, b) => a - b));

    const load = (i: number, url: string, retried = false) => {
      pending.add(i);
      loader.load(
        url,
        (tex) => {
          pending.delete(i);
          if (disposed || !wanted.has(i)) {
            tex.dispose();
            return;
          }
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.anisotropy = maxAniso;
          const img = tex.image as { width?: number; height?: number } | undefined;
          const size = containSize(img?.width && img?.height ? img.width / img.height : 4 / 3);
          const mesh = images[i];
          mesh.scale.set(size.width, size.height, 1);
          mesh.material.map = tex;
          mesh.material.color.set(0xffffff);
          mesh.material.needsUpdate = true;
          textures.set(i, tex);
          publishTextured();
          requestRender();
        },
        undefined,
        () => {
          pending.delete(i);
          // `Special:FilePath` redirects can drop the CORS headers WebGL needs;
          // ask the API for the direct file URL once, as the panorama does.
          if (!retried && !disposed && isWikimediaFilePath(url)) {
            resolveWikimediaDirectUrl(url)
              .then((direct) => {
                if (direct && !disposed && wanted.has(i)) load(i, direct, true);
              })
              .catch(() => undefined);
          }
        },
      );
    };

    const syncTextures = (focusIndex: number) => {
      wanted = new Set(textureWindow(focusIndex, count, maxTextures));
      let changed = false;
      for (const [i, tex] of textures) {
        if (wanted.has(i)) continue;
        const mat = images[i].material;
        mat.map = null;
        mat.color.copy(emptyColor);
        mat.needsUpdate = true;
        tex.dispose();
        textures.delete(i);
        changed = true;
      }
      for (const i of wanted) {
        const url = photoOf(nodes[i]);
        if (url && !textures.has(i) && !pending.has(i)) load(i, url);
      }
      if (changed) publishTextured();
    };

    // ── Render on demand ──
    let raf = 0;
    let lastFocus = -1;
    const frame = () => {
      raf = 0;
      const dz = targetZ - camZ;
      camZ = Math.abs(dz) < 0.002 ? targetZ : camZ + dz * 0.12;
      camera.position.z = camZ;
      // Look slightly down the street, not straight ahead, so both walls read.
      camera.lookAt(0, STREET.eyeHeight - 0.05, camZ - 10);
      renderer.render(scene, camera);

      const f = focusedIndex(camZ, count);
      if (f !== lastFocus) {
        lastFocus = f;
        setFocus(f);
        syncTextures(f);
      }
      if (camZ !== targetZ && !document.hidden) raf = requestAnimationFrame(frame);
    };
    function requestRender() {
      if (!raf && !disposed && !document.hidden) raf = requestAnimationFrame(frame);
    }

    apiRef.current = {
      goTo: (index) => {
        targetZ = clampZ(cameraZFor(Math.min(count - 1, Math.max(0, index))));
        requestRender();
      },
    };

    // ── Size ──
    const ro = new ResizeObserver(() => {
      const { width, height } = container.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      requestRender();
    });
    ro.observe(container);

    // ── Input ──
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const hit = (clientX: number, clientY: number): number | null => {
      const r = canvas.getBoundingClientRect();
      pointer.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
      raycaster.setFromCamera(pointer, camera);
      const first = raycaster.intersectObjects(images, false)[0];
      return first ? (first.object.userData.index as number) : null;
    };

    const onWheel = (e: WheelEvent) => {
      const next = clampZ(targetZ - e.deltaY * 0.006);
      // At either end of the street, let the page scroll on instead of
      // swallowing the wheel.
      if (next === targetZ) return;
      e.preventDefault();
      targetZ = next;
      requestRender();
    };

    let dragging = false;
    let moved = 0;
    let lastX = 0;
    let lastY = 0;
    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      moved = 0;
      lastX = e.clientX;
      lastY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) {
        if (e.pointerType === 'mouse') canvas.style.cursor = hit(e.clientX, e.clientY) === null ? 'grab' : 'pointer';
        return;
      }
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      moved += Math.abs(dx) + Math.abs(dy);
      lastX = e.clientX;
      lastY = e.clientY;
      // Drag up or left to walk forward, like pulling the street toward you.
      targetZ = clampZ(targetZ + (dy + dx) * 0.02);
      requestRender();
    };
    const onPointerUp = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
      if (moved < 5) {
        const i = hit(e.clientX, e.clientY);
        if (i !== null) onSelectRef.current(nodes[i]);
      }
    };
    const onVisibility = () => {
      if (!document.hidden) requestRender();
    };

    canvas.addEventListener('wheel', onWheel, { passive: false });
    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointercancel', onPointerUp);
    document.addEventListener('visibilitychange', onVisibility);

    requestRender();
    setReady(true);

    return () => {
      disposed = true;
      apiRef.current = null;
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener('wheel', onWheel);
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerUp);
      document.removeEventListener('visibilitychange', onVisibility);
      textures.forEach((tex) => tex.dispose());
      textures.clear();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach((m) => m.dispose());
        }
      });
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
      setReady(false);
      setTextured([]);
    };
    // The scene is rebuilt when the exhibits or the theme change; the theme
    // because the street is painted in the page's own token colours.
  }, [nodes, count, maxTextures, resolvedTheme]);

  const goTo = useCallback((i: number) => apiRef.current?.goTo(i), []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const forward = ['ArrowUp', 'ArrowRight', 'PageDown', 'w', 'd'];
    const back = ['ArrowDown', 'ArrowLeft', 'PageUp', 's', 'a'];
    let handled = true;
    if (forward.includes(e.key)) goTo(focus + 1);
    else if (back.includes(e.key)) goTo(focus - 1);
    else if (e.key === 'Home') goTo(0);
    else if (e.key === 'End') goTo(count - 1);
    else if (e.key === 'Enter') onSelect(nodes[focus]);
    else handled = false;
    if (handled) e.preventDefault();
  };

  const current = nodes[focus];
  const currentPhoto = current ? photoOf(current) : null;
  const currentCredit = current && currentPhoto ? current.imageCredits?.[currentPhoto] : undefined;
  const credited = useMemo(
    () =>
      textured
        .map((i) => {
          const node = nodes[i];
          const photo = node ? photoOf(node) : null;
          const credit = node && photo ? node.imageCredits?.[photo] : undefined;
          return credit ? { node, credit } : null;
        })
        .filter((x): x is { node: GraphNode; credit: NonNullable<GraphNode['imageCredits']>[string] } =>
          Boolean(x),
        ),
    [textured, nodes],
  );

  if (count === 0) return null;

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={t('street.region')}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="relative h-full min-h-[28rem] w-full overflow-hidden bg-background focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
    >
      {/* Every exhibit, as plain buttons, for anyone not walking the canvas. */}
      <nav aria-label={t('street.exhibits')} className="sr-only">
        <ul>
          {nodes.map((n) => (
            <li key={n.id}>
              <button type="button" onClick={() => onSelect(n)}>
                {n.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {!ready ? (
        <p className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
          {t('street.loading')}
        </p>
      ) : null}

      <p className="liquid-glass pointer-events-none absolute top-3 left-1/2 z-10 max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-full px-3.5 py-1.5 text-center text-xs text-foreground/80">
        {t('street.hint')}
      </p>

      {current ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center px-16 pb-4 sm:px-20">
          <div className="liquid-glass-strong pointer-events-auto w-full max-w-xl rounded-[1.25rem] p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-mono text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">
                  {t('street.position', { current: focus + 1, total: count })} ·{' '}
                  {NODE_TYPE_CONFIG[current.nodeType]?.label ?? current.nodeType}
                </p>
                <h3 className="mt-1 truncate font-display text-2xl leading-tight text-foreground">
                  {current.label}
                </h3>
                {currentCredit ? (
                  <ImageAttribution credit={currentCredit} variant="onSurface" className="mt-1" />
                ) : null}
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  onClick={() => goTo(focus - 1)}
                  disabled={focus === 0}
                  aria-label={t('street.prev')}
                  className="inline-flex size-9 items-center justify-center rounded-full text-foreground/80 hover:bg-foreground/[0.06] disabled:opacity-40"
                >
                  <IconChevronLeft className="size-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(focus + 1)}
                  disabled={focus === count - 1}
                  aria-label={t('street.next')}
                  className="inline-flex size-9 items-center justify-center rounded-full text-foreground/80 hover:bg-foreground/[0.06] disabled:opacity-40"
                >
                  <IconChevronRight className="size-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onSelect(current)}
                  className="ml-1 inline-flex items-center gap-1 rounded-full bg-cta px-3.5 py-2 text-xs font-medium text-cta-foreground hover:opacity-90"
                >
                  {t('street.open')}
                  <IconArrowUpRight className="size-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {credited.length > 0 ? (
              <details className="group mt-3 border-t border-border/60 pt-2">
                <summary className="cursor-pointer text-[11px] text-muted-foreground hover:text-foreground">
                  {t('street.credits', { count: credited.length })}
                </summary>
                <ul className={cn('mt-2 max-h-32 space-y-1 overflow-y-auto pr-1')}>
                  {credited.map(({ node, credit }) => (
                    <li key={node.id} className="flex flex-wrap items-baseline gap-x-2">
                      <span className="text-[11px] text-foreground/90">{node.label}</span>
                      <ImageAttribution credit={credit} variant="onSurface" />
                    </li>
                  ))}
                </ul>
              </details>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
