'use client';

import { useRef, type CSSProperties, type ElementType, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import { useRevealState } from './use-reveal-state';

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  /** Milliseconds before this element starts, for staggering siblings. */
  delay?: number;
  /**
   * `mount` — plays as soon as the CSS loads, before hydration. For things
   *           above the fold: the hero, the nav. Pure CSS, so there is no
   *           window in which JavaScript is needed to see the content.
   * `view`  — plays when scrolled into view (see `useRevealState`).
   */
  trigger?: 'mount' | 'view';
}

/**
 * The one entrance: blur 10px → 0, opacity 0 → 1, 20px → 0, 0.8s.
 *
 * Replaces per-component Framer `initial`/`whileInView` pairs on the glass
 * surfaces. Those wrote `opacity: 0` into the server HTML, so a reveal whose
 * observer never fired left a section blank — the defect the comment on
 * `staggerContainer` in `lib/design.ts` records.
 */
export function Reveal({
  as: Tag = 'div',
  delay = 0,
  trigger = 'view',
  className,
  style,
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const state = useRevealState(ref);

  if (trigger === 'mount') {
    return (
      <Tag
        className={cn('animate-blur-rise', className)}
        style={{ animationDelay: `${delay}ms`, ...style }}
        {...rest}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      data-reveal={state}
      className={className}
      style={{ '--reveal-delay': `${delay}ms`, ...style } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}
