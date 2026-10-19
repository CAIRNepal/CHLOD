'use client';

import { useEffect, useState, type RefObject } from 'react';

/**
 * `static` — visible, no animation. What the server renders, and what the
 *            element stays in under reduced motion or if it was already on
 *            screen when the page mounted.
 * `armed`  — held at the entrance's start frame, waiting to scroll into view.
 * `play`   — the entrance is running (or has run).
 *
 * The states are written to a data attribute and the CSS in globals.css does
 * the rest, so nothing here re-renders per frame.
 */
export type RevealState = 'static' | 'armed' | 'play';

interface Options {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Scroll-triggered entrance state for one element.
 *
 * Follows the rule `src/lib/use-reveal.ts` established for Framer reveals: the
 * first render is identical on server and client, and content is never hidden
 * until after mount, when the motion preference is actually knowable. The
 * difference is that this one also declines to arm an element that is already
 * in the viewport — hiding text the reader is looking at so it can fade back
 * in reads as a flicker, not an entrance.
 */
export function useRevealState(
  ref: RefObject<Element | null>,
  { threshold = 0.1, rootMargin = '0px 0px -6% 0px' }: Options = {},
): RevealState {
  const [state, setState] = useState<RevealState>('static');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    setState('armed');
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState('play');
          io.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold, rootMargin]);

  return state;
}
