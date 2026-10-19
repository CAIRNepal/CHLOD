'use client';

import { useMemo, useRef, type CSSProperties } from 'react';

import { splitWords } from './motion-math';
import { useRevealState } from './use-reveal-state';

interface BlurTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  /** See `Reveal`. Headlines above the fold use `mount`. */
  trigger?: 'mount' | 'view';
  /** Milliseconds before the first word. */
  delay?: number;
  /** Milliseconds between words. */
  stagger?: number;
  id?: string;
  className?: string;
}

/**
 * A line that comes into focus one word at a time.
 *
 * Screen readers get the line once, whole, from a visually hidden copy; the
 * animated words are `aria-hidden`. Without that, some readers announce each
 * inline-block as its own item and a headline is read as a list of words.
 *
 * Words are split on whitespace — never per letter, which breaks Devanagari
 * conjuncts (see `splitWords`).
 */
export function BlurText({
  text,
  as: Tag = 'p',
  trigger = 'view',
  delay = 0,
  stagger = 100,
  id,
  className,
}: BlurTextProps) {
  const ref = useRef<HTMLElement>(null);
  const viewState = useRevealState(ref);
  // `mount` is rendered as `play` on the server too, so the CSS animation runs
  // from first paint and hydration has nothing to reconcile.
  const state = trigger === 'mount' ? 'play' : viewState;
  const pieces = useMemo(() => splitWords(text), [text]);

  return (
    <Tag
      // A callback ref, because the tag is chosen at runtime and each
      // intrinsic element types its ref differently.
      ref={(el: HTMLElement | null) => {
        ref.current = el;
      }}
      id={id}
      data-reveal-text={state}
      className={className}
      style={
        {
          '--reveal-delay': `${delay}ms`,
          '--reveal-stagger': `${stagger}ms`,
        } as CSSProperties
      }
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {pieces.map((piece, i) =>
          piece.wordIndex < 0 ? (
            piece.text
          ) : (
            <span key={i} data-reveal-word style={{ '--i': piece.wordIndex } as CSSProperties}>
              {piece.text}
            </span>
          ),
        )}
      </span>
    </Tag>
  );
}
