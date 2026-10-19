'use client';

/**
 * The hero photograph, cycling through Nepal's UNESCO-listed cultural heritage.
 *
 * WHAT IT SHOWS, AND WHY THAT SET
 * The subjects are derived from `ground-truth.ts` — the seven monument zones of
 * the Kathmandu Valley property plus Lumbini — not hand-listed here. So the set
 * is "UNESCO-listed cultural heritage in Nepal" by construction, and it cannot
 * drift from the module that is the single authority for UNESCO facts on this
 * site. Sagarmatha and Chitwan are absent because they are inscribed as natural
 * properties and fall outside a record scoped to cultural heritage.
 *
 * THREE THINGS THIS HAD TO GET RIGHT
 *
 *  1. A visible pause control, and no auto-advance under reduced motion.
 *     Content that moves on its own without a way to stop it fails WCAG 2.2.2 —
 *     the same defect that was just removed from the museum's story carousel.
 *     Adding a second one on the front page would have been a poor trade.
 *  2. Attribution that follows the image. These photographs are CC BY-SA, so
 *     the credit is a licence condition, and a credit for a photograph that is
 *     no longer on screen is not a credit. It changes with the frame.
 *  3. Two layers in flight, never eight. This is the LCP element. Only the
 *     current and the next frame are mounted, and only the first carries
 *     `priority`, so the page still paints on one image and the swap has the
 *     following one already decoded.
 *
 * FULL BLEED (spec 008)
 * The photograph is now the whole first screen rather than a 16:9 band that
 * dissolved into the page — the role a background video plays on a cinematic
 * landing page, filled by the archive's own credited photography instead of
 * stock footage. The current frame drifts slowly (a Ken Burns scale) so the
 * screen is never quite still; it is a CSS animation keyed to the frame, so it
 * restarts on each swap and is removed entirely under reduced motion.
 *
 * The place name, the credit, the frame dots and the pause button sit together
 * in one glass pill at the foot of the screen, over the photograph — so they
 * use the on-image attribution, which stays light-on-dark in both themes.
 */

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { IconPlayerPause, IconPlayerPlay } from '@tabler/icons-react';

import { ImageAttribution } from '@/app/(site)/heritage-museum/components/ImageAttribution';
import { imageryFor } from '@/lib/unesco/imagery';
import { KATHMANDU_VALLEY, LUMBINI } from '@/lib/unesco/ground-truth';
import { cn } from '@/lib/utils';

/** How long each photograph holds. Long enough to look at, not a slideshow. */
const HOLD_MS = 7000;

interface Subject {
  key: string;
  /** Translation key for the place's name, under `unescoEntry`. */
  labelKey: string;
}

const SUBJECTS: Subject[] = [
  ...(KATHMANDU_VALLEY.monumentZones ?? []).map((z) => ({
    key: z.key,
    labelKey: `zones.${z.key}`,
  })),
  { key: LUMBINI.key, labelKey: `properties.${LUMBINI.key}` },
].filter((s) => Boolean(imageryFor(s.key)?.image));

export function HeroPhotographs({ children }: { children?: React.ReactNode }) {
  const t = useTranslations('unescoEntry');
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // Motion preference is unknown on the server, so autoplay only ever starts
  // after mount. Rendering the same first frame either way keeps the markup
  // identical across hydration.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const count = SUBJECTS.length;
  const advance = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  const autoplay = mounted && !reduce && !paused && count > 1;
  useEffect(() => {
    if (!autoplay) return;
    const id = window.setInterval(advance, HOLD_MS);
    return () => window.clearInterval(id);
  }, [autoplay, advance]);

  if (count === 0) return <div className="absolute inset-0 bg-background">{children}</div>;

  const current = SUBJECTS[index];
  // The frame after this one is mounted at zero opacity so its bytes are
  // already decoded when it becomes visible. Nothing else is in the DOM.
  const next = SUBJECTS[(index + 1) % count];
  const visible = count > 1 ? [current, next] : [current];
  const credit = imageryFor(current.key)?.image?.credit ?? null;
  const currentName = t(current.labelKey);

  return (
    <figure className="absolute inset-0 m-0 overflow-hidden bg-background">
      {visible.map((subject) => {
        const image = imageryFor(subject.key)?.image;
        if (!image) return null;
        const isCurrent = subject.key === current.key;
        return (
          <motion.div
            key={subject.key}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: isCurrent ? 1 : 0 }}
            transition={{ duration: reduce ? 0 : 1.4, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden={!isCurrent}
          >
            <Image
              src={image.url}
              alt={isCurrent ? t('photographOf', { name: t(subject.labelKey) }) : ''}
              fill
              sizes="100vw"
              // Only the first frame blocks paint. The rest are swaps.
              priority={subject.key === SUBJECTS[0].key}
              // The drift is added the moment a frame becomes current, which
              // is what starts it from 1.0; the waiting frame has none.
              className={cn(
                'object-cover',
                isCurrent &&
                  'motion-safe:animate-[hero-drift_14s_cubic-bezier(0.22,1,0.36,1)_both]',
              )}
            />
          </motion.div>
        );
      })}

      {/* Scrims. The reference design put white type straight onto video; a
          photograph of a sunlit durbar square is far brighter than that, so the
          type needs a floor. Top: under the floating nav. Middle: a wide, soft
          vignette under the centred headline. Bottom: under the trust strip and
          the credit pill. Each fades out before it reaches the middle of the
          frame, so the picture still reads as a picture. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.12)_22%,rgba(0,0,0,0.12)_62%,rgba(0,0,0,0.78)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_48%,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.18)_60%,transparent_100%)]"
      />

      {children}

      {/* Which place this is, who took the photograph, and a way to stop it.
          Centred, with side padding that clears both bottom corners: those
          belong to fixed chrome (the chat button, the account avatar), and D4
          requires that nothing floating ever covers a credit. */}
      <div
        role="group"
        aria-label={t('hero.photoControls')}
        className="absolute inset-x-0 bottom-0 z-20 flex justify-center px-16 pb-4 sm:px-20"
      >
        <div className="liquid-glass flex max-w-full flex-wrap items-center gap-x-3 gap-y-1 rounded-full py-1.5 pr-1.5 pl-4">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-white/90">
            {currentName}
          </p>
          {credit ? (
            <div className="min-w-0">
              <ImageAttribution credit={credit} variant="onImage" />
            </div>
          ) : null}

          <div className="flex items-center gap-2">
            {/* Which frame, as dots. Buttons, not decoration — a reader who
                wants a particular place should not have to wait for it. */}
            <div className="hidden items-center gap-1.5 md:flex">
              {SUBJECTS.map((s, i) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={t(s.labelKey)}
                  aria-current={i === index}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring',
                    i === index ? 'w-4 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[0.7rem] text-white/90 transition-colors hover:bg-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {paused ? (
                <IconPlayerPlay className="size-3.5" aria-hidden="true" />
              ) : (
                <IconPlayerPause className="size-3.5" aria-hidden="true" />
              )}
              {paused ? t('heroPlay') : t('heroPause')}
            </button>
          </div>
        </div>
      </div>
    </figure>
  );
}
