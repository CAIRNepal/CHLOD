import { describe, expect, it } from 'vitest';

import {
  STREET,
  cameraRange,
  cameraZFor,
  containSize,
  focusedIndex,
  placePanel,
  textureWindow,
} from '@/lib/heritage-museum/street-layout';

describe('placePanel', () => {
  it('alternates walls and steps half a spacing down the street each time', () => {
    const a = placePanel(0);
    const b = placePanel(1);
    const c = placePanel(2);
    expect(a.side).toBe(-1);
    expect(b.side).toBe(1);
    expect(c.side).toBe(-1);
    expect(a.x).toBe(-STREET.halfWidth);
    expect(b.x).toBe(STREET.halfWidth);
    expect(b.z - a.z).toBeCloseTo(-STREET.spacing / 2);
    expect(c.z - a.z).toBeCloseTo(-STREET.spacing);
  });

  it('turns each panel toward the aisle', () => {
    // Left wall faces +x (positive rotation), right wall −x.
    expect(placePanel(0).rotY).toBeGreaterThan(0);
    expect(placePanel(1).rotY).toBeLessThan(0);
    expect(Math.abs(placePanel(0).rotY)).toBeLessThan(Math.PI / 2);
  });
});

describe('focusedIndex', () => {
  it('is the exhibit the camera is standing at', () => {
    for (const i of [0, 1, 5, 9]) expect(focusedIndex(cameraZFor(i), 10)).toBe(i);
  });

  it('clamps to the street', () => {
    expect(focusedIndex(cameraZFor(0) + 50, 10)).toBe(0);
    expect(focusedIndex(cameraZFor(9) - 50, 10)).toBe(9);
    expect(focusedIndex(0, 0)).toBe(0);
  });
});

describe('cameraRange', () => {
  it('starts before the first exhibit and ends at the last', () => {
    const { near, far } = cameraRange(10);
    expect(near).toBeGreaterThan(cameraZFor(0));
    expect(far).toBe(cameraZFor(9));
  });
});

describe('textureWindow', () => {
  it('never holds more than max textures, nearest first', () => {
    const w = textureWindow(20, 100, 12);
    expect(w).toHaveLength(12);
    expect(w[0]).toBe(20);
    expect(new Set(w).size).toBe(12);
    expect(Math.max(...w.map((i) => Math.abs(i - 20)))).toBeLessThanOrEqual(6);
  });

  it('fills from one side at the ends of the street', () => {
    expect(textureWindow(0, 100, 4)).toEqual([0, 1, 2, 3]);
    expect(textureWindow(99, 100, 3)).toEqual([99, 98, 97]);
  });

  it('handles short streets and empty input', () => {
    expect(textureWindow(1, 3, 12).sort()).toEqual([0, 1, 2]);
    expect(textureWindow(0, 0, 12)).toEqual([]);
  });
});

describe('containSize', () => {
  it('fits wide and tall images inside the panel box', () => {
    const wide = containSize(3);
    expect(wide.width).toBe(STREET.panelWidth);
    expect(wide.height).toBeLessThanOrEqual(STREET.panelHeight);
    const tall = containSize(0.5);
    expect(tall.height).toBe(STREET.panelHeight);
    expect(tall.width).toBeLessThanOrEqual(STREET.panelWidth);
  });

  it('falls back to the full box for a missing aspect', () => {
    expect(containSize(NaN)).toEqual({ width: STREET.panelWidth, height: STREET.panelHeight });
  });
});
