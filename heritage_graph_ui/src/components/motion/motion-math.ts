/**
 * The arithmetic behind the motion primitives, kept free of React and the DOM
 * so it can be unit-tested in node and reasoned about on its own.
 */

/** A piece of a line of text: a word that animates, or the space between. */
export interface TextPiece {
  text: string;
  /** Index among the words only, for the stagger. Spaces carry -1. */
  wordIndex: number;
}

/**
 * Split a line into words and the whitespace between them.
 *
 * Words, never letters. A per-letter split is the usual way to animate a
 * headline, and it destroys Devanagari: a conjunct such as "क्ष" is several
 * code points that only shape correctly inside one text run, and an
 * inline-block per character renders them as separate, broken glyphs. Both
 * locales the site ships separate words with spaces, so splitting on
 * whitespace is exact for each, and the pieces always join back to the input.
 */
export function splitWords(text: string): TextPiece[] {
  const pieces: TextPiece[] = [];
  let word = 0;
  for (const part of text.split(/(\s+)/)) {
    if (part === '') continue;
    const isSpace = /^\s+$/.test(part);
    pieces.push({ text: part, wordIndex: isSpace ? -1 : word++ });
  }
  return pieces;
}

export function clamp01(value: number): number {
  if (Number.isNaN(value)) return 0;
  return Math.min(1, Math.max(0, value));
}

/**
 * How far through a pinned stage the reader is, 0 at the moment its top meets
 * the top of the viewport and 1 when its bottom meets the bottom.
 *
 * `rectTop` is `getBoundingClientRect().top` of the stage. A stage no taller
 * than the viewport has no travel and stays at 0 rather than dividing by zero.
 */
export function stageProgress(rectTop: number, stageHeight: number, viewportHeight: number): number {
  const travel = stageHeight - viewportHeight;
  if (travel <= 0) return 0;
  return clamp01(-rectTop / travel);
}

/**
 * How far a horizontal track has to slide for its last item to land flush at
 * the right edge. Measured from the track, never assumed: a fixed offset is
 * right for exactly one viewport width.
 */
export function railDistance(trackScrollWidth: number, viewportWidth: number): number {
  return Math.max(0, Math.round(trackScrollWidth - viewportWidth));
}

/**
 * Which of `count` items the reader has reached. Progress 1 is the last item,
 * not one past it.
 */
export function railIndex(progress: number, count: number): number {
  if (count <= 0) return 0;
  return Math.min(count - 1, Math.floor(clamp01(progress) * count));
}

/**
 * The progress at which an item starting `offsetLeft` pixels into the track is
 * brought to the left gutter — used to scroll a keyboard-focused card into the
 * pinned stage, since the stage itself cannot scroll.
 */
export function progressForOffset(offsetLeft: number, gutter: number, distance: number): number {
  if (distance <= 0) return 0;
  return clamp01((offsetLeft - gutter) / distance);
}
