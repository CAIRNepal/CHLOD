'use client';

/**
 * The entry experience at `/`.
 *
 * WHAT A VISITOR MEETS, IN ORDER
 *  1. The first screen. A full-viewport photograph, the name in the badge and
 *     one line saying what this is, two ways in, and two sourced figures. An
 *     earlier version led with "Seven monument zones" — true, but it told a
 *     first-time visitor what they were looking at without ever telling them
 *     where they were. (The relief wordmark that used to sit here is retired:
 *     the name is now in the nav on every page, and in the badge.)
 *  2. Why a graph. One concrete example — a temple, its guthi, its festival,
 *     its deity — beside a live web of the seven zones. The idea is meant to
 *     land visually before it is read.
 *  3. The seven places, as a connected index. Numbered, because the count is
 *     the point; no catalogue codes, because a visitor cannot read them.
 *  4. Lumbini, composed rather than posted.
 *  5. What is on the World Heritage List and what else we keep, credits,
 *     provenance.
 *
 * WRITTEN FOR SOMEONE WITH NO BACKGROUND IN ANY OF THIS
 * The copy here says "place", not "entity"; "connection", not "edge"; "checked
 * by someone", not "reviewed record"; and nothing on the page explains its own
 * interface. Identifiers, property numbers and licence detail all still exist —
 * they live on each place's own record and in the footer, where a researcher
 * looks and a visitor never has to.
 *
 * Deliberately removed: a Kathmandu Valley facts panel and a register of all
 * four properties. Both restated things already visible elsewhere on the page
 * and read as filler between the parts that matter.
 */

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { IconArrowDown, IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';

import { Button } from '@/components/ui/button';
import { revealOnScroll, wideColumn } from '@/lib/design';
import { useReveal } from '@/lib/use-reveal';
import { LUMBINI } from '@/lib/unesco/ground-truth';
import { museumHref } from '@/lib/unesco/graph-bindings';

import { Eyebrow, OpeningGround } from '@/components/editorial';
import { BlurText, Reveal } from '@/components/motion';
import { GraphBoundaryNote, PropertyPhotograph, ZoneRail } from './entry-sections';
import { Constellation } from './Constellation';
import { HeroPhotographs } from './HeroPhotographs';
import { HeroStats } from './HeroStats';
import { TrustBar } from './TrustBar';
import { NextSteps } from './NextSteps';
import { AmbientWash, LiveBackdrop } from './depth';
import { HowItWorks } from './HowItWorks';

export function UnescoEntry() {
  const t = useTranslations('unescoEntry');
  const reveal = useReveal();

  return (
    <div className="relative flex flex-col gap-20 pb-24 md:gap-28">
      {/* Slow motes behind the whole page — near the threshold of noticing, so
          the page feels alive without competing with the photography. */}
      <LiveBackdrop />

      {/* ── 1. The first screen ──
          The whole viewport, photograph edge to edge, with the bar floating
          over it (`data-site-hero` is what tells the bar to go transparent).
          Forced `dark`: the ground is a photograph under a black scrim in
          either theme, so the glass and the type use the dark tokens here
          whatever the reader has chosen for the rest of the site.

          Order of arrival, all CSS so none of it waits for hydration: the
          badge, the headline word by word, the lede, the two ways in, the
          figures, the sources. The photograph itself never fades in — it is
          the LCP element and is on screen from the first paint. */}
      <section
        aria-labelledby="entry-title"
        data-site-hero
        className="dark relative isolate flex h-svh min-h-[42rem] flex-col overflow-hidden text-foreground"
      >
        <HeroPhotographs>
          <div className="relative z-10 flex h-full flex-col items-center px-4 text-center">
            <div className="flex flex-1 flex-col items-center justify-center pt-24">
              <Reveal trigger="mount" delay={400}>
                <p className="liquid-glass inline-flex max-w-[22rem] items-center gap-2.5 rounded-full py-1 pr-3.5 pl-1 text-left text-xs leading-tight font-light text-foreground/90 sm:max-w-none sm:text-sm">
                  <span className="shrink-0 rounded-full bg-cta px-2.5 py-0.5 text-xs font-medium whitespace-nowrap text-cta-foreground">
                    {t('hero.badgeChip')}
                  </span>
                  {t('hero.badge')}
                </p>
              </Reveal>

              <BlurText
                as="h1"
                id="entry-title"
                trigger="mount"
                delay={500}
                text={t('hero.headline')}
                className="mt-6 max-w-[16ch] font-display text-[clamp(3.25rem,9vw,5.5rem)] leading-[0.86] text-balance text-foreground [:lang(ne)_&]:text-[clamp(2.5rem,6vw,4.25rem)]"
              />

              <Reveal
                as="p"
                trigger="mount"
                delay={800}
                className="mt-5 max-w-2xl text-sm leading-snug font-light text-foreground/90 md:text-base"
              >
                {t('heroLede')}
              </Reveal>

              <Reveal trigger="mount" delay={1100} className="mt-7 flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="/heritage-museum"
                  className="liquid-glass-strong group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {t('hero.ctaMuseum')}
                  <IconArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href="#how-heading"
                  className="group inline-flex items-center gap-2 rounded-full text-sm font-medium text-foreground/90 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  <IconArrowDown
                    className="size-4 transition-transform duration-300 group-hover:translate-y-0.5 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                  {t('hero.ctaHow')}
                </a>
              </Reveal>

              <Reveal trigger="mount" delay={1300} className="mt-9 hidden sm:block [@media(max-height:46rem)]:hidden">
                <HeroStats />
              </Reveal>
            </div>

            {/* Sources, above the photograph's credit pill. On a phone the
                screen has no room for both under the CTAs, and the credit is
                the one that is a licence condition. */}
            <Reveal trigger="mount" delay={1400} className="hidden pb-24 md:block [@media(max-height:40rem)]:hidden">
              <TrustBar />
            </Reveal>
            <div className="pb-20 md:hidden" aria-hidden="true" />
          </div>
        </HeroPhotographs>
      </section>

      {/* ── What this is ──
          The intro and its live web share one soft ground, as before; the
          opening photograph is now its own full screen above it. */}
      <div className="relative isolate flex flex-col">
        <OpeningGround />
      {/* ── 2. Why a graph ── prose beside a live web ── */}
      <section aria-labelledby="intro-heading" className="relative pt-16 md:pt-24">
        <div className={wideColumn}>
          {/* The prose sits above the graph rather than beside it. In a side
              column the constellation was ~500px wide, which is not enough room
              for perspective to read as depth. */}
          <div className="mx-auto max-w-3xl text-center">
            <motion.div {...reveal} variants={revealOnScroll}>
              <h2
                id="intro-heading"
                className="mx-auto max-w-[22ch] font-serif text-3xl leading-[1.1] text-balance sm:text-4xl"
              >
                {t('introTitle')}
              </h2>
              <p className="mx-auto mt-5 max-w-[58ch] leading-relaxed text-muted-foreground">
                {t('introBody')}
              </p>
              <p className="mx-auto mt-4 max-w-[58ch] leading-relaxed text-foreground">
                {t('introBody2')}
              </p>
            </motion.div>
          </div>

          <motion.div {...reveal} variants={revealOnScroll} className="mt-10">
            <Constellation className="aspect-[4/3] sm:aspect-[2/1] lg:aspect-[5/2]" />
            <p className="mt-1 text-center text-xs text-muted-foreground">
              {t('constellationHint')}
            </p>
          </motion.div>
        </div>
      </section>
      </div>

      {/* ── 3. What the platform actually does ── */}
      <HowItWorks />

      {/* ── 4. The seven zones, as the readable index ──
          Pinned: the section holds and the row of places passes through it. */}
      <ZoneRail />

      {/* ── 5. Two doors out ── */}
      <NextSteps />

      {/* ── 6. Lumbini ──
          Was a full-bleed 21:9 band with the text underneath, which read as a
          photograph dropped onto the page. It is a half-width picture set into
          a composition now: glow behind it, edges feathered into the page, and
          the heading beside it rather than below. */}
      <section aria-labelledby="lumbini-heading" className="relative isolate">
        <AmbientWash />
        <motion.div {...reveal} variants={revealOnScroll} className={wideColumn}>
          <div className="grid items-center gap-10 @3xl/main:grid-cols-[1fr_1fr] @3xl/main:gap-16">
            <div className="relative">
              {/* A soft bloom under the picture. Without it the feathered edges
                  fade into flat paper and read as a mistake rather than a
                  treatment. */}
              {/* Bleeds outward vertically at every size, horizontally only
                  once there is room for it. `-inset-6` on a phone puts the
                  glow's box 24px past the column and scrolls the page sideways;
                  the blur spreads horizontally on its own, and blur is ink, not
                  layout, so it costs no overflow. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-y-6 inset-x-0 -z-10 rounded-[2rem] bg-primary/[0.07] blur-2xl @2xl/main:-inset-x-6"
              />
              <PropertyPhotograph
                subjectKey="lumbini"
                alt={t('photographOf', { name: t('properties.lumbini') })}
                aspect="4 / 3"
                sizes="(max-width: 900px) 92vw, 40rem"
                creditPlacement="none"
                className="rounded-2xl bg-transparent shadow-[0_24px_60px_-28px_rgba(0,0,0,0.45)]"
                imageClassName="[mask-image:radial-gradient(120%_120%_at_50%_42%,#000_58%,rgba(0,0,0,0.72)_82%,transparent_100%)]"
                parallax={34}
              />
            </div>
            <div>
              <Eyebrow>{t('culturalHeading')}</Eyebrow>
              <h2
                id="lumbini-heading"
                className="mt-2 max-w-[22ch] font-serif text-3xl leading-tight text-balance sm:text-4xl"
              >
                {t('properties.lumbini')}
              </h2>
              <p className="mt-4 max-w-[46ch] leading-relaxed text-muted-foreground">
                {t('lumbiniLede')}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                {t('inscribedYear', { year: LUMBINI.yearInscribed })}
              </p>
              <Button asChild className="mt-6">
                <Link href={museumHref('lumbini')}>
                  {t('openInMuseum')}
                  <IconArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* No description or fact table here. A quoted paragraph and a
              Wikidata property list are what a record looks like, and the
              record lives in the museum — the button above goes straight to it.
              On the entry page they turned a composed spread into a data dump. */}
        </motion.div>
      </section>

      {/* ── 7. Boundary, and a pointer to the credits ──
          The full credit list and the provenance notes moved to /about. Eight
          rows of author-and-licence and two paragraphs of sourcing notes were
          the last thing a first-time visitor saw, and they belong with the
          other reference material.

          One line stays, and has to: the photographs are CC BY-SA, which
          requires attribution wherever the work appears. CC explicitly allows
          that attribution to be "in any reasonable manner based on the medium",
          including a link to the credits — so this is a link, not a list. */}
      <GraphBoundaryNote />

      <div className={wideColumn}>
        <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-2 gap-y-1 border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground">
          <span>{t('photoCreditLine')}</span>
          <Link
            href="/about#image-credits"
            className="text-primary underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {t('photoCreditLink')} →
          </Link>
        </div>
      </div>
    </div>
  );
}
