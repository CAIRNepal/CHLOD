/**
 * Where each exhibit hangs in the 3D street, and which ones get a texture.
 *
 * Pure arithmetic, no three.js, so it is unit-tested in node and the renderer
 * only has to place what this returns.
 *
 *            far end (−z)
 *     [4]               [5]
 *          [2]     [3]
 *              [0] [1]
 *            camera walks −z
 *
 * Exhibits alternate walls — even on the left, odd on the right — and each is
 * half a spacing further down the street than the one before, so the two walls
 * are staggered and the eye zig-zags rather than seeing pairs. Each panel is
 * turned most of the way toward the aisle (not flat against the wall), so it
 * reads from the centre line without the visitor having to turn.
 */

export const STREET = {
  /** Distance from the centre line to each wall, in metres. */
  halfWidth: 2.4,
  /** Distance between consecutive exhibits on the SAME wall. */
  spacing: 3.6,
  /** The box an exhibit's photograph is fitted into (contain, not cover). */
  panelWidth: 2.2,
  panelHeight: 1.6,
  eyeHeight: 1.55,
  /** How far back from an exhibit the camera stands to look at it. */
  viewDistance: 4.2,
  /** Turn away from the wall plane toward the aisle, in radians. */
  tilt: 0.42,
} as const;

export interface PanelPlacement {
  /** −1 left wall, 1 right wall. */
  side: -1 | 1;
  x: number;
  y: number;
  z: number;
  /** Rotation about the vertical axis. A plane faces +z at 0. */
  rotY: number;
}

export function placePanel(index: number): PanelPlacement {
  const side: -1 | 1 = index % 2 === 0 ? -1 : 1;
  // Left-wall panels face +x (into the aisle), right-wall panels −x; both are
  // turned back toward the approaching camera by `tilt`.
  const rotY = side === -1 ? Math.PI / 2 - STREET.tilt : -(Math.PI / 2 - STREET.tilt);
  return {
    side,
    x: side * STREET.halfWidth,
    y: STREET.eyeHeight,
    z: -index * (STREET.spacing / 2),
    rotY,
  };
}

/** Where the camera stands to look at exhibit `index`. */
export function cameraZFor(index: number): number {
  return placePanel(index).z + STREET.viewDistance;
}

/** The walkable range: from just before the first exhibit to the last. */
export function cameraRange(count: number): { near: number; far: number } {
  const near = cameraZFor(0) + 1.2;
  const far = count > 0 ? cameraZFor(count - 1) : near;
  return { near, far };
}

/** The exhibit the camera is currently looking at. */
export function focusedIndex(cameraZ: number, count: number): number {
  if (count <= 0) return 0;
  const step = STREET.spacing / 2;
  const raw = Math.round((cameraZFor(0) - cameraZ) / step);
  return Math.min(count - 1, Math.max(0, raw));
}

/**
 * The exhibits that should hold a texture: the `max` nearest to the focused
 * one, nearest first. Everything else is an empty frame. This is what keeps a
 * street of a hundred exhibits to a dozen photographs in GPU memory.
 */
export function textureWindow(focus: number, count: number, max = 12): number[] {
  const out: number[] = [];
  if (count <= 0 || max <= 0) return out;
  out.push(Math.min(count - 1, Math.max(0, focus)));
  for (let d = 1; out.length < Math.min(max, count); d++) {
    // Ahead first: the visitor is more likely walking forward.
    if (focus + d < count) out.push(focus + d);
    if (out.length >= Math.min(max, count)) break;
    if (focus - d >= 0) out.push(focus - d);
  }
  return out;
}

/** Fit an image of the given aspect inside the panel box, keeping its shape. */
export function containSize(imageAspect: number): { width: number; height: number } {
  const boxAspect = STREET.panelWidth / STREET.panelHeight;
  if (!Number.isFinite(imageAspect) || imageAspect <= 0) {
    return { width: STREET.panelWidth, height: STREET.panelHeight };
  }
  return imageAspect >= boxAspect
    ? { width: STREET.panelWidth, height: STREET.panelWidth / imageAspect }
    : { width: STREET.panelHeight * imageAspect, height: STREET.panelHeight };
}
