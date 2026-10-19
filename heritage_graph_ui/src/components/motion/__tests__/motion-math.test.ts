import { describe, expect, it } from 'vitest';

import {
  progressForOffset,
  railDistance,
  railIndex,
  splitWords,
  stageProgress,
} from '@/components/motion/motion-math';

describe('splitWords', () => {
  it('numbers words only and joins back to the input', () => {
    const text = 'Every fact  traceable,\nevery photograph credited.';
    const pieces = splitWords(text);
    expect(pieces.map((p) => p.text).join('')).toBe(text);
    expect(pieces.filter((p) => p.wordIndex >= 0).map((p) => p.wordIndex)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(pieces.filter((p) => p.wordIndex < 0).every((p) => /^\s+$/.test(p.text))).toBe(true);
  });

  it('keeps Devanagari conjuncts and matras inside their word', () => {
    // "क्षेत्र" is a conjunct (क + ् + ष) followed by matras — splitting it
    // anywhere but a space would break its shaping.
    const text = 'सात स्मारक क्षेत्र';
    const words = splitWords(text).filter((p) => p.wordIndex >= 0).map((p) => p.text);
    expect(words).toEqual(['सात', 'स्मारक', 'क्षेत्र']);
  });

  it('handles empty and whitespace-only input', () => {
    expect(splitWords('')).toEqual([]);
    expect(splitWords('   ')).toEqual([{ text: '   ', wordIndex: -1 }]);
  });
});

describe('stageProgress', () => {
  it('is 0 at the top of the stage and 1 at the bottom', () => {
    expect(stageProgress(0, 3000, 1000)).toBe(0);
    expect(stageProgress(-1000, 3000, 1000)).toBe(0.5);
    expect(stageProgress(-2000, 3000, 1000)).toBe(1);
  });

  it('clamps before and after the stage', () => {
    expect(stageProgress(500, 3000, 1000)).toBe(0);
    expect(stageProgress(-9000, 3000, 1000)).toBe(1);
  });

  it('does not divide by zero for a stage no taller than the viewport', () => {
    expect(stageProgress(-50, 800, 1000)).toBe(0);
  });
});

describe('railDistance', () => {
  it('is the overflow of the track past the viewport, never negative', () => {
    expect(railDistance(3200, 1440)).toBe(1760);
    expect(railDistance(900, 1440)).toBe(0);
  });
});

describe('railIndex', () => {
  it('maps progress across count items with the last at progress 1', () => {
    expect(railIndex(0, 8)).toBe(0);
    expect(railIndex(0.124, 8)).toBe(0);
    expect(railIndex(0.125, 8)).toBe(1);
    expect(railIndex(1, 8)).toBe(7);
  });

  it('survives an empty rail and out-of-range progress', () => {
    expect(railIndex(0.5, 0)).toBe(0);
    expect(railIndex(-1, 3)).toBe(0);
    expect(railIndex(4, 3)).toBe(2);
  });
});

describe('progressForOffset', () => {
  it('brings an item to the gutter', () => {
    expect(progressForOffset(48, 48, 1000)).toBe(0);
    expect(progressForOffset(548, 48, 1000)).toBe(0.5);
    expect(progressForOffset(5000, 48, 1000)).toBe(1);
    expect(progressForOffset(300, 48, 0)).toBe(0);
  });
});
