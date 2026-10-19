'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { IconArrowUpRight, IconChartDots3, IconPencilPlus } from '@tabler/icons-react';

import { revealOnScroll, wideColumn } from '@/lib/design';
import { useReveal } from '@/lib/use-reveal';

import { TiltCard } from './depth';

/**
 * Where a reader goes after the seven zones.
 *
 * Two doors, not a row of buttons: one into the collection as it stands, one
 * into adding to it. They are given the same weight because for this project
 * they matter equally — a heritage graph nobody contributes to stops being
 * current.
 *
 * The first door goes to the Heritage Museum, not the dashboard. A visitor who
 * has just read about seven places wants to see the places; the dashboard's
 * counts and review queues are a contributor's view, and it is reachable from
 * the top bar for anyone who wants it.
 */
export function NextSteps() {
  const t = useTranslations('unescoEntry');
  const reveal = useReveal();

  const doors = [
    { key: 'exploreDoor', href: '/heritage-museum', Icon: IconChartDots3 },
    { key: 'nextContribute', href: '/contribute', Icon: IconPencilPlus },
  ] as const;

  return (
    <motion.section
      {...reveal}
      variants={revealOnScroll}
      aria-labelledby="next-heading"
      className={wideColumn}
    >
      <h2 id="next-heading" className="sr-only">
        {t('nextTitle')}
      </h2>
      <div className="grid gap-5 @2xl/main:grid-cols-2">
        {doors.map(({ key, href, Icon }) => (
          <TiltCard key={key} max={1.4}>
            <Link
              href={href}
              className="liquid-glass group flex h-full flex-col justify-between gap-6 rounded-[1.25rem] p-6 transition-colors duration-500 hover:bg-foreground/[0.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:p-8"
            >
              <div>
                <span className="liquid-glass flex size-11 items-center justify-center rounded-[0.75rem]">
                  <Icon className="size-5 text-foreground" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-3xl leading-none tracking-[-1px] text-balance md:text-4xl">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
                  {t(`${key}.desc`)}
                </p>
              </div>
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-cta px-4 py-2 text-sm font-medium text-cta-foreground">
                {t(`${key}.cta`)}
                <IconArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </TiltCard>
        ))}
      </div>
    </motion.section>
  );
}
