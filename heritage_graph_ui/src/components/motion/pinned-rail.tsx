'use client';

/**
 * A collection that scrolls sideways while the page scrolls down.
 *
 * The stage is as tall as the viewport plus the track's overflow; its inner
 * frame is `position: sticky`, so it holds still while the reader scrolls
 * through that extra height, and the track slides left by exactly the distance
 * it overflows. The last card lands flush at the right edge at the moment the
 * stage releases — the travel is measured from the track, never assumed.
 *
 * Everything that moves is a CSS custom property written from the shared
 * scroll frame (`scroll-frame.ts`). React re-renders when the measured
 * distance changes (a resize) or the reached index changes — never per frame.
 *
 * WHEN IT DOES NOT PIN
 * On the server, below `md`, and under reduced motion, it renders the same
 * items as a static grid. Sideways travel on a phone fights the browser's own
 * URL-bar resizing; under reduced motion, scroll-linked travel is exactly the
 * kind of motion the setting asks us not to make. The server cannot know
 * either, so it always renders the grid, and the pin is chosen after mount.
 * The rail is never the first thing on a page, so that swap happens out of
 * sight.
 */

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

import { cn } from '@/lib/utils';

import { progressForOffset, railDistance, railIndex, stageProgress } from './motion-math';
import { onScrollFrame, requestScrollFrame } from './scroll-frame';

/** Height of the sticky site bar the stage sits under, in px. Matches `h-14`. */
const BAR_HEIGHT = 56;
const PIN_QUERY = '(min-width: 48rem) and (prefers-reduced-motion: no-preference)';

export type RailMode = 'pinned' | 'static';

interface PinnedRailProps {
  /** Number of items, for the index. */
  count: number;
  /** Render the items for the current mode; cards size themselves differently. */
  children: (mode: RailMode) => ReactNode;
  /** Above the track inside the pinned frame, and above the grid when static. */
  header?: ReactNode;
  /** Called only when the reached item changes. */
  onIndexChange?: (index: number) => void;
  /** Classes for the static grid. */
  staticClassName?: string;
  /** Left and right padding of the track, in px. */
  gutter?: number;
  className?: string;
  'aria-labelledby'?: string;
}

export function PinnedRail({
  count,
  children,
  header,
  onIndexChange,
  staticClassName,
  gutter = 48,
  className,
  'aria-labelledby': labelledBy,
}: PinnedRailProps) {
  const [mode, setMode] = useState<RailMode>('static');
  const [distance, setDistance] = useState(0);
  const stageRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(-1);
  const onIndexRef = useRef(onIndexChange);
  onIndexRef.current = onIndexChange;

  // Choose the mode after mount, and follow the media query if it changes
  // (a window dragged narrower, the OS motion setting toggled).
  useEffect(() => {
    const mql = window.matchMedia(PIN_QUERY);
    // Sticky positioning fails silently under an ancestor with `overflow`
    // other than visible/clip; stay static rather than show a stuck track.
    const sticky = CSS.supports?.('position', 'sticky') ?? true;
    const update = () => setMode(mql.matches && sticky ? 'pinned' : 'static');
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  // Measure the travel whenever the track or the window changes size.
  useLayoutEffect(() => {
    if (mode !== 'pinned') return;
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      setDistance(railDistance(track.scrollWidth, window.innerWidth));
      requestScrollFrame();
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [mode]);

  // The per-frame write.
  useEffect(() => {
    if (mode !== 'pinned') return;
    const stage = stageRef.current;
    if (!stage) return;
    stage.style.setProperty('--rail-distance', `${distance}px`);
    return onScrollFrame(() => {
      const rect = stage.getBoundingClientRect();
      const progress = stageProgress(rect.top, rect.height, window.innerHeight);
      stage.style.setProperty('--rail-progress', progress.toFixed(4));
      const index = railIndex(progress, count);
      if (index !== indexRef.current) {
        indexRef.current = index;
        onIndexRef.current?.(index);
      }
    });
  }, [mode, distance, count]);

  // The frame is `overflow: clip`, which cannot be scrolled — so a browser
  // focusing a card off to the right has nothing to scroll and the card stays
  // hidden. Move the page instead, to the point where that card is in frame.
  const onFocus = useCallback(
    (e: React.FocusEvent) => {
      const stage = stageRef.current;
      const track = trackRef.current;
      if (mode !== 'pinned' || !stage || !track || distance <= 0) return;
      let item = e.target as HTMLElement | null;
      while (item && item.parentElement !== track) item = item.parentElement;
      if (!item) return;
      const progress = progressForOffset(item.offsetLeft, gutter, distance);
      const stageTop = stage.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: stageTop + progress * distance, behavior: 'auto' });
    },
    [mode, distance, gutter],
  );

  if (mode === 'static') {
    return (
      <section aria-labelledby={labelledBy} className={className}>
        {header}
        <div className={staticClassName}>{children('static')}</div>
      </section>
    );
  }

  return (
    <section
      ref={stageRef}
      aria-labelledby={labelledBy}
      className={cn('relative', className)}
      // One viewport to hold the frame, plus the travel. Height is the only
      // layout value React owns; the scroll position is all CSS.
      style={{ height: `calc(100svh + ${distance}px)` }}
    >
      <div
        className="sticky top-0 flex h-svh flex-col justify-center gap-8 overflow-clip"
        style={{ paddingTop: BAR_HEIGHT }}
      >
        {header}
        <div
          ref={trackRef}
          onFocus={onFocus}
          className="flex w-max gap-6 will-change-transform"
          style={{
            paddingInline: gutter,
            transform:
              'translate3d(calc(var(--rail-progress, 0) * var(--rail-distance, 0px) * -1), 0, 0)',
          }}
        >
          {children('pinned')}
        </div>
        {/* Where the reader is along the row. Decorative: the cards themselves
            are the content, and each is reachable by keyboard. */}
        <div aria-hidden="true" className="mx-auto h-px w-[min(28rem,60vw)] bg-border">
          <div
            className="h-full origin-left bg-foreground"
            style={{ transform: 'scaleX(var(--rail-progress, 0))' }}
          />
        </div>
      </div>
    </section>
  );
}
